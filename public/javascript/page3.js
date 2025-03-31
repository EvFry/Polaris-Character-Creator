import state from './state.js';
import { allgenotypes } from './genotype.js';
import { allmutations, rollMutation } from './mutations.js';
import { randomPower } from './polarispowers.js';
import { saveCharacterState,loadCharacterState } from './state.js';
import { attributes } from './attributes.js';


window.grantedPowersData = window.grantedPowersData || [];

document.addEventListener("DOMContentLoaded", () => {
    const characterState = JSON.parse(localStorage.getItem("characterState"));
    
    if (characterState) {
        loadCharacterState(characterState.characterName);
    } else {
        console.warn("⚠️ No saved character state found.");
    }

    document.getElementById("cp-total").textContent = state.getCpTotal();
    loadGenotypeSelection();
    const mutationList = document.getElementById("mutation-list");
    if (!mutationList) {
        console.error("⚠️ mutation-list element not found!");
        return;
    }
    initializeMutationSystem();
    loadCurrentGenotype();
    

    console.log("Checking state.selectedPolarisPowers before calling handlePolarisEffect:", state.selectedPolarisPowers);

        handlePolarisEffect(); // Call after the data is available
    
    
});

function handlePolarisEffect() {
    console.log("Handling Polaris Effect...");
    const polarisEffect = state.getPolarisEffect();
    console.log("Polaris Effect:", polarisEffect);

    if (polarisEffect === 0) {
        console.log("No Polaris Effect, nothing to restore.");
        return;
    }

    document.getElementById("remove-polaris").disabled = false;
    document.getElementById("access-polaris").disabled = true;
    document.getElementById("first-power").disabled = false;
    document.getElementById("reroll-power").disabled = true;

    // Retrieve detailed Polaris powers from state
    const detailedPowers = state.getDetailedSelectedPolarisPowers();
    console.log("📜 Detailed Selected Polaris Powers:", detailedPowers);

    // Restore Polaris Power
    const storedPolarisPower = detailedPowers.find(power => power.grouping === "polaris-power");
    if (storedPolarisPower) {
        document.getElementById("polaris-power-name").textContent = storedPolarisPower.name;
        document.getElementById("polaris-power-categories").textContent = JSON.stringify(storedPolarisPower.categories, null, 2);
        document.getElementById("polaris-power-description").textContent = storedPolarisPower.fullDescription;
    }

    // Restore power levels and enable the next checkbox dynamically
    ["first-power", "second-power", "third-power"].forEach((powerId, index) => {
        const storedPowers = detailedPowers.filter(power => power.grouping === powerId);

        if (storedPowers.length > 0) {
            document.getElementById(powerId).checked = true;

            // Enable the next checkbox if this one is checked
            if (index < 2) {
                const nextPower = document.getElementById(["first-power", "second-power", "third-power"][index + 1]);
                nextPower.disabled = false;
            }

            // Ensure UI elements reflect the restored state
            togglePowerSelection(powerId, null, `${powerId}-options`, storedPowers.length, 0, true);
            createOptionsContainer(powerId, `${powerId}-options`, storedPowers);
        } else {
            // If no powers exist for this powerId, disable the next checkbox if the current is unchecked
            if (index < 2 && !document.getElementById(powerId).checked) {
                const nextPower = document.getElementById(["first-power", "second-power", "third-power"][index + 1]);
                nextPower.disabled = true;
            }
        }
    });
}



function createOptionsContainer(powerId, optionsContainerId, grantedPowers) {
    const optionsContainer = document.getElementById(optionsContainerId);
    if (!optionsContainer) return;

    optionsContainer.innerHTML = ''; // Clear previous content

    if (!grantedPowers || grantedPowers.length === 0) {
        optionsContainer.innerHTML = "<p>No powers available.</p>";
        return;
    }

    grantedPowers.forEach((power, index) => {
        const powerOptionDiv = document.createElement('div');
        powerOptionDiv.classList.add('power-option');
        powerOptionDiv.id = `${powerId}-option-${index}`;

        powerOptionDiv.innerHTML = `
            <h4>${power.name}</h4>
            <p><strong>Variables:</strong></p>
            <pre>${JSON.stringify(power.categories, null, 2)}</pre>
            <p><strong>Description:</strong> ${power.fullDescription}</p>
            <input type="radio" name="${powerId}-selection" id="${powerId}-select-${index}" ${power.chosen ? "checked" : ""}>
            <label for="${powerId}-select-${index}">${power.name}</label>
            <hr>
        `;

        // Attach event listener to trigger selectPower on click
        powerOptionDiv.querySelector(`input`).addEventListener("change", () => {
            selectPower(powerId, index, grantedPowers);
        });

        optionsContainer.appendChild(powerOptionDiv);
    });
}


function loadCurrentGenotype() {
    // Get the current genotype from the state
    const currentGenotype = state.getGenotype();

    // Set the Current Genotype label on the page
    document.getElementById("current-genotype").textContent = currentGenotype;

    // Check if the current genotype exists in the allgenotypes object
    if (currentGenotype !== "Human" && allgenotypes.hasOwnProperty(currentGenotype)) {
        const genotypeInfo = allgenotypes[currentGenotype];

        // Display detailed genotype information
        document.getElementById("genotype-info").innerHTML = `
            <h3>${genotypeInfo.name}</h3>
            <p><strong>CP Cost:</strong> ${genotypeInfo.cpCost}</p>
            <p><strong>Description:</strong> ${genotypeInfo.descriptionFull}</p>
            <p><strong>Attribute Changes:</strong></p>
            <ul>
                ${Object.entries(genotypeInfo.attributechanges).map(([attr, value]) => 
                    `<li><strong>${attr}:</strong> ${value > 0 ? "+" : ""}${value}</li>`
                ).join("")}
            </ul>
        `;
    } else {
        // If the genotype is "Human" or not found, clear any genotype information
        document.getElementById("genotype-info").innerHTML = "<p>No genotype selected.</p>";
    }
}








// Genotype Selection
function loadGenotypeSelection() {
    document.querySelectorAll(".genotype-btn").forEach(button => {
        button.addEventListener("click", () => {
            const selectedGenotype = button.getAttribute("data-type");
            const genotypeInfo = allgenotypes[selectedGenotype];

            // Display the genotype information
            document.getElementById("genotype-info").innerHTML = `
                <h3>${genotypeInfo.name}</h3>
                <p><strong>CP Cost:</strong> ${genotypeInfo.cpCost}</p>
                <p><strong>Description:</strong> ${genotypeInfo.descriptionFull}</p>
                <p><strong>Attribute Changes:</strong></p>
                <ul>
                    ${Object.entries(genotypeInfo.attributechanges).map(([attr, value]) => 
                        `<li><strong>${attr}:</strong> ${value > 0 ? "+" : ""}${value}</li>`
                    ).join("")}
                </ul>
            `;

            // Set up the "Choose" button functionality
            document.getElementById("choose-genotype").onclick = () => {
                if (state.getCpTotal() >= genotypeInfo.cpCost) {
                    state.setGenotype(selectedGenotype);
                    state.updateCpTotal(-genotypeInfo.cpCost);
                    document.getElementById("cp-total").textContent = state.getCpTotal();

                    // Log before attribute changes
                    console.log("Before attribute changes:");
                    Object.entries(genotypeInfo.attributechanges).forEach(([attr, value]) => {
                        // Get the short form for the attribute
                        const attribute = attributes.find(a => a.name === attr);
                        if (attribute) {
                            const currentAttributeLevel = state.selectedAttributes[attribute.shortForm];
                            console.log(`${attribute.name}: ${currentAttributeLevel}`);
                        }
                    });

                    // Apply attribute changes
                    Object.entries(genotypeInfo.attributechanges).forEach(([attr, value]) => {
                        // Get the short form for the attribute
                        const attribute = attributes.find(a => a.name === attr);
                        if (attribute) {
                            // Update the attribute level
                            const newLevel = state.selectedAttributes[attribute.shortForm] + value;
                            state.updateAttributeLevel(attribute.shortForm, newLevel);
                        }
                    });

                    // Log after attribute changes
                    console.log("After attribute changes:");
                    Object.entries(genotypeInfo.attributechanges).forEach(([attr, value]) => {
                        // Get the short form for the attribute
                        const attribute = attributes.find(a => a.name === attr);
                        if (attribute) {
                            const currentAttributeLevel = state.selectedAttributes[attribute.shortForm];
                            console.log(`${attribute.name}: ${currentAttributeLevel}`);
                        }
                    });

                    document.getElementById("current-genotype").textContent = genotypeInfo.name;
                    alert(`${genotypeInfo.name} selected!`);
                } else {
                    alert("Not enough CP to choose this genotype.");
                }
            };
        });
    });

    // Set up the "Remove Genotype" button functionality
    document.getElementById("remove-genotype").addEventListener("click", () => {
        const currentGenotype = state.getGenotype(); // Get the current genotype
        const currentGenotypeInfo = allgenotypes[currentGenotype];

        // Check if the current genotype is not Human
        if (currentGenotype !== "Human") {
            // Refund CP for the current genotype
            state.updateCpTotal(currentGenotypeInfo.cpCost);
            document.getElementById("cp-total").textContent = state.getCpTotal();

            // Log before attribute changes
            console.log("Before attribute changes (removal):");
            Object.entries(currentGenotypeInfo.attributechanges).forEach(([attr, value]) => {
                // Get the short form for the attribute
                const attribute = attributes.find(a => a.name === attr);
                if (attribute) {
                    const currentAttributeLevel = state.selectedAttributes[attribute.shortForm];
                    console.log(`${attribute.name}: ${currentAttributeLevel}`);
                }
            });

            // Revert the attribute changes
            Object.entries(currentGenotypeInfo.attributechanges).forEach(([attr, value]) => {
                // Get the short form for the attribute
                const attribute = attributes.find(a => a.name === attr);
                if (attribute) {
                    // Revert the attribute level
                    const newLevel = state.selectedAttributes[attribute.shortForm] - value;
                    state.updateAttributeLevel(attribute.shortForm, newLevel);
                }
            });

            // Log after attribute changes
            console.log("After attribute changes (removal):");
            Object.entries(currentGenotypeInfo.attributechanges).forEach(([attr, value]) => {
                // Get the short form for the attribute
                const attribute = attributes.find(a => a.name === attr);
                if (attribute) {
                    const currentAttributeLevel = state.selectedAttributes[attribute.shortForm];
                    console.log(`${attribute.name}: ${currentAttributeLevel}`);
                }
            });

            // Set genotype back to Human
            state.setGenotype("Human");

            // Update the UI
            document.getElementById("current-genotype").textContent = "Human";
            document.getElementById("genotype-info").innerHTML = "<p>No genotype selected.</p>";
            alert("Genotype removed and reverted to Human.");
        } else {
            alert("You are already Human. No genotype to remove.");
        }
    });
}




// Mutations
// This function will populate the list of mutations in the dropdown and handle selection
function loadMutations() {
    const mutationList = document.getElementById("mutation-list");
    const mutationsContainer = document.getElementById("mutation-container");
    console.log("allmutations:", allmutations); // Debugging - See if it's populated

    // Populate the dropdown list
    allmutations.forEach(mutation => {
        const option = document.createElement("option");
        option.value = mutation.name; // Set the value as mutation name
        option.textContent = `${mutation.name} (${mutation.cpCost})`; // Show name and cost
        option.title = mutation.descriptionShort; // Add a short description as title
        mutationList.appendChild(option);
    });

    // Add the mutations from selectedMutations to the list
    state.selectedMutations.forEach(mutationName => {
        const mutation = allmutations.find(m => m.name === mutationName);

        if (mutation) {
            addMutationToList(mutation); // Add to the displayed list
        }
    });



    // Add event listener for when the user selects a mutation from the dropdown
    mutationList.addEventListener("change", () => {
        const selectedMutation = allmutations.find(m => m.name === mutationList.value);
        console.log("Selected Mutation:", selectedMutation); // Debugging

        if (selectedMutation) {
            // Update the mutation details display area
            document.getElementById("mutation-details").innerHTML = `
                <p><strong>${selectedMutation.name}</strong> - ${selectedMutation.cpCost} CP</p>
                <p>${selectedMutation.descriptionFull}</p>
            `;
        }
    });

    // Event listener to add the selected mutation to the list when the 'Add Mutation' button is clicked
    document.getElementById("add-mutation").addEventListener("click", () => {
        const selectedMutation = allmutations.find(m => m.name === mutationList.value);

        if (selectedMutation) {
            // Check if the user has enough CP using the getCpTotal method
            if (state.getCpTotal() >= selectedMutation.cpCost) {
                // Deduct the CP using the updateCpTotal method
                state.updateCpTotal(-selectedMutation.cpCost);  // Deduct CP by the mutation's cost

                // Add the selected mutation to the list below
                addMutationToList(selectedMutation);

                // Add the mutation to selectedMutations
                state.addMutation(selectedMutation.name); // Use the addMutation method
            } else {
                alert("You don't have enough CP to add this mutation.");
            }
        }
    });


    document.getElementById("add-mutation").addEventListener("click", () => {
        const selectedMutation = allmutations.find(m => m.name === mutationList.value);
    
        if (selectedMutation) {
            // Check if the user has enough CP using the getCpTotal method
            if (state.getCpTotal() >= selectedMutation.cpCost) {
                // Deduct the CP using the updateCpTotal method
                state.updateCpTotal(-selectedMutation.cpCost);  // Deduct CP by the mutation's cost
    
                // Add the selected mutation to the list below
                addMutationToList(selectedMutation);
    
                // Add the mutation to selectedMutations
                state.addMutation(selectedMutation.name); // Use the addMutation method
                
    document.getElementById("cp-total").textContent = state.getCpTotal();
            } else {
                alert("You don't have enough CP to add this mutation.");
            }
        }
    });
    
}

// This function adds the mutation to the list with an accordion to show full details
function addMutationToList(mutation) {
    const mutationsContainer = document.getElementById("mutation-container");

    // Create a new div to represent the mutation in the list
    const mutationDiv = document.createElement("div");
    mutationDiv.classList.add("mutation-item");

    // Create the title for the mutation (name + CP cost)
    const mutationTitle = document.createElement("div");
    mutationTitle.classList.add("mutation-title");
    mutationTitle.innerHTML = `
        <strong>${mutation.name}</strong> - ${mutation.cpCost} CP
    `;

    // Create the accordion button to show/hide the full description
    const accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion");
    accordionButton.textContent = "Show Details";
    
    // Create the div for the full description, initially hidden
    const fullDescriptionDiv = document.createElement("div");
    fullDescriptionDiv.classList.add("panel");
    fullDescriptionDiv.innerHTML = `<p>${mutation.descriptionFull}</p>`;

    // Create the remove button (X) to remove the mutation
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "X";

    // Event listener to show/hide full description on accordion button click
    accordionButton.addEventListener("click", () => {
        fullDescriptionDiv.classList.toggle("active");
        if (fullDescriptionDiv.classList.contains("active")) {
            accordionButton.textContent = "Hide Details";
        } else {
            accordionButton.textContent = "Show Details";
        }
    });

    // Event listener to remove mutation from list and refund CP
    removeButton.addEventListener("click", () => {
        // Refund CP using the updateCpTotal method
        state.updateCpTotal(mutation.cpCost);  // Add CP back by the mutation's cost
    
        // Remove the mutation from selectedMutations
        state.removeMutation(mutation.name); // Use the removeMutation method

        document.getElementById("cp-total").textContent = state.getCpTotal();

        // Remove the mutation div from the container
        mutationDiv.remove();  // Assuming mutationDiv is the div for the mutation to be removed
    });

    // Append all elements to the mutation div
    mutationDiv.appendChild(mutationTitle);
    mutationDiv.appendChild(accordionButton);
    mutationDiv.appendChild(fullDescriptionDiv);
    mutationDiv.appendChild(removeButton);

    // Add the new mutation div to the mutations container
    mutationsContainer.appendChild(mutationDiv);
}

// This function will run when the page is ready or on initialization
function initializeMutationSystem() {
    loadMutations();
}

// Example: initializing when the page is ready (or you could call this function wherever needed)



function updatePolarisPower(displayId, optionsContainerId, powerCount = 1) {
    console.log("Starting updatePolarisPower function...");
    console.log(`displayId: ${displayId}, optionsContainerId: ${optionsContainerId}, powerCount: ${powerCount}`);

    // **Remove existing powers of the same displayId**
    state.selectedPolarisPowers = state.selectedPolarisPowers.filter(power => power.grouping !== displayId);
    console.log(`Removed previous powers with grouping: ${displayId}`);

    // Step 1: Fetch the new powers
    const grantedPowers = randomPower(powerCount);
    console.log("Granted Powers:", grantedPowers);

    if (!Array.isArray(grantedPowers) || grantedPowers.length !== powerCount) {
        console.error(`Expected ${powerCount} powers, but got`, grantedPowers);
        return;
    }
    console.log(`Successfully fetched ${grantedPowers.length} powers.`);

    if (displayId === "first-power") {
        console.log("Skipping single power handling for first-power. Proceeding to multiple power handling...");
    } else if (powerCount === 1) {
        const power = grantedPowers[0];

        if (displayId === "polaris-power") {
            console.log("Updating Polaris Power details in the DOM...");
            document.getElementById(`${displayId}-name`).textContent = power.name;
            document.getElementById(`${displayId}-categories`).textContent = JSON.stringify(power.categories, null, 2);
            document.getElementById(`${displayId}-description`).textContent = power.fullDescription;

            state.updateSelectedPolarisPower(displayId, {
                name: power.name,
                mastery: power.mastery || 0,
                grouping: displayId,
                chosen: true
            });

            return;
        } else {
            console.error(`Display ID '${displayId}' doesn't match expected values for single power update.`);
        }
    }

    console.log("Proceeding to handle multiple powers...");
    
    // Reset the selected power for this displayId in state


    // Populate UI with the newly granted powers
    createOptionsContainer(displayId, optionsContainerId, grantedPowers);

    console.log("Power options generated and added to container.");

    // Store rolled powers globally for reference
    window[displayId + "Powers"] = grantedPowers;

    // Add new granted powers to state
    grantedPowers.forEach(power => {
        state.selectedPolarisPowers.push({
            name: power.name,
            mastery: power.mastery || 0,
            grouping: displayId,
            chosen: false
        });
    });
}



function togglePowerSelection(powerId, nextPowerId, optionsContainerId, powerCount, decrement, triggeredByEffect = false) {
    const checkbox = document.getElementById(powerId);
    const nextPower = document.getElementById(nextPowerId);
    const rerollBtnId = "reroll-" + powerId;

    console.log(`Toggling power: ${powerId}, Checked: ${checkbox.checked}, Triggered by Effect: ${triggeredByEffect}`);

    let refundCp = 1; // Default refund amount

    if (triggeredByEffect) {
        checkbox.disabled = false; // Ensure the checkbox is enabled
    }

    if (checkbox.checked) {
        if (!triggeredByEffect) {
            setTimeout(() => {
                updatePolarisPower(powerId, optionsContainerId, powerCount);
            }, 100);
        }

        if (nextPower) nextPower.disabled = false;

        const rerollButton = document.getElementById(rerollBtnId);
        if (rerollButton) rerollButton.disabled = false;

        state.setCpTotal(state.getCpTotal() - decrement);
    } else {
        // **Remove all powers linked to powerId**
        state.selectedPolarisPowers = state.selectedPolarisPowers.filter(power => power.grouping !== powerId);
        console.log(`Removed all powers associated with ${powerId}`);

        state.setCpTotal(state.getCpTotal() + refundCp);
        console.log(`Refunded ${refundCp} CP`);

        const rerollButton = document.getElementById(rerollBtnId);
        if (rerollButton) rerollButton.disabled = true;

        // Clear UI of previously selected powers
        createOptionsContainer(powerId, optionsContainerId, []);

        if (nextPower && nextPower.checked) {
            nextPower.checked = false;
            togglePowerSelection(nextPowerId, document.getElementById(nextPowerId).nextElementSibling, optionsContainerId, powerCount, 1, triggeredByEffect);
        }

        // Disable all reroll buttons
        document.querySelectorAll(`[id^="reroll-"]`).forEach(button => {
            button.disabled = true;
        });
    }

    document.getElementById("cp-total").textContent = state.getCpTotal();
}


export function selectPower(powerId, index, grantedPowers) {
    console.log("Power ID:", powerId);
    console.log("Index:", index);
    console.log("Granted Powers:", grantedPowers);

    // Check if grantedPowers is an array and contains the requested index
    if (!Array.isArray(grantedPowers) || grantedPowers.length === 0) {
        console.error("Error: grantedPowers is not a valid array or is empty.");
        return;
    }

    if (index < 0 || index >= grantedPowers.length) {
        console.error(`Error: Index ${index} is out of bounds for grantedPowers.`);
        return;
    }

    const selectedPower = grantedPowers[index];

    // Ensure selectedPower is valid
    if (!selectedPower) {
        console.error("Error: selectedPower is undefined.");
        return;
    }

    // 1. Set all powers in the same grouping to 'chosen: false'
    state.selectedPolarisPowers.forEach((power) => {
        if (power.grouping === powerId) {
            power.chosen = false;
        }
    });

    // 2. Remove duplicates within the same grouping (remove the old entry)
    state.selectedPolarisPowers = state.selectedPolarisPowers.filter((power) => {
        return !(power.name === selectedPower.name && power.grouping === powerId); // Remove old instances of the same power
    });

    // 3. Add or replace the power in the same grouping with 'chosen: true'
    state.selectedPolarisPowers.push({
        name: selectedPower.name || "Unknown",
        mastery: selectedPower.mastery || 0,
        grouping: powerId,
        chosen: true
    });

    // Log the selected power for debugging
    console.log(`Power selected: ${powerId} - Option ${index}`);

    // Update the UI (opacity and visual state)
    const radioButtons = document.querySelectorAll(`input[name="${powerId}-selection"]`);
    radioButtons.forEach((radioButton, idx) => {
        const powerOptionDiv = document.getElementById(`${powerId}-option-${idx}`);
        if (powerOptionDiv) {
            powerOptionDiv.style.opacity = idx === index ? 1 : 0.5;
        }
    });

    // Update the selected Polaris power (call the update function)
    state.updateSelectedPolarisPower(powerId, {
        name: selectedPower.name || "Unknown",
        mastery: selectedPower.mastery || 0,
        grouping: powerId,
        chosen: true
    });

    // Highlight the selected option
    const selectedPowerDiv = document.getElementById(`${powerId}-option-${index}`);
    if (selectedPowerDiv) {
        selectedPowerDiv.style.border = "2px solid green";
    }
}




window.selectPower = selectPower;
// Event Listeners


// Event listener for "Remove Polaris" button
document.getElementById("remove-polaris").addEventListener("click", () => {
    state.setCpTotal(state.getCpTotal() + 5);
    document.getElementById("cp-total").textContent = state.getCpTotal();

    // Reset Polaris Effect to 0 when Remove Polaris is clicked
    state.setPolarisEffect(0);

    // Reset UI elements
    const elementIds = [
        "polaris-power-name", "polaris-power-categories", "polaris-power-description",
        "first-power-name", "first-power-categories", "first-power-description",
        "second-power-name", "second-power-categories", "second-power-description",
        "third-power-name", "third-power-categories", "third-power-description"
    ];

    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = ''; // Clear content
        }
    });

    // Clear dynamically added power selection options
    ["first-power-options", "second-power-options", "third-power-options"].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '';  // Clear inner HTML
        }
    });

    // Disable and uncheck the powers
    ["first-power", "second-power", "third-power"].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            if (checkbox.checked) {
                state.setCpTotal(state.getCpTotal() + 1);
            }
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });

    // **Clear selectedPolarisPowers from state**
    state.selectedPolarisPowers = [];
    console.log("🛑 Cleared selectedPolarisPowers.");

    document.getElementById("remove-polaris").disabled = true;
    document.getElementById("access-polaris").disabled = false;
    document.getElementById("reroll-power").disabled = true;
    document.getElementById("cp-total").textContent = state.getCpTotal();
});




// Event listener for "Access Polaris" button
document.getElementById("access-polaris").addEventListener("click", () => {
    if (state.getCpTotal() >= 5) {
        state.setCpTotal(state.getCpTotal() - 5);
        document.getElementById("cp-total").textContent = state.getCpTotal();

        // Set polarisEffect to 1 when Access Polaris is clicked
        state.setPolarisEffect(1);

        document.getElementById("remove-polaris").disabled = false;
        document.getElementById("access-polaris").disabled = true;
        document.getElementById("first-power").disabled = false;
        document.getElementById("reroll-power").disabled = false;
        updatePolarisPower("polaris-power", "reroll-power"); // FIXED TO UPDATE GRANTED POWER
    }
});
// Event listener for "First Power" checkbox
document.getElementById("first-power").addEventListener("change", () => {
    togglePowerSelection("first-power", "second-power", "first-power-options", 1, 1, false);

    // Set polarisEffect to 2 if the first power is checked, otherwise set it to 1
    if (document.getElementById("first-power").checked) {
        state.setPolarisEffect(2);
    } else {
        state.setPolarisEffect(1);
    }
});

// Event listener for "Second Power" checkbox
document.getElementById("second-power").addEventListener("change", () => {
    togglePowerSelection("second-power", "third-power", "second-power-options", 2, 1, false);

    // Set polarisEffect to 3 if the second power is checked, otherwise set it to 2
    if (document.getElementById("second-power").checked) {
        state.setPolarisEffect(3);
    } else {
        state.setPolarisEffect(2);
    }
});

// Event listener for "Third Power" checkbox
document.getElementById("third-power").addEventListener("change", () => {
    togglePowerSelection("third-power", null, "third-power-options", 3, 1, false);

    // Set polarisEffect to 4 if the third power is checked, otherwise set it to 3
    if (document.getElementById("third-power").checked) {
        state.setPolarisEffect(4);
    } else {
        state.setPolarisEffect(3);
    }
});


// Reroll buttons
document.getElementById("reroll-power").addEventListener("click", () => updatePolarisPower("polaris-power", "reroll-power")); // FIXED TO UPDATE GRANTED POWER
document.getElementById("reroll-first-power").addEventListener("click", () => updatePolarisPower("first-power", "first-power-options", 2));
document.getElementById("reroll-second-power").addEventListener("click", () => updatePolarisPower("second-power", "second-power-options", 2));
document.getElementById("reroll-third-power").addEventListener("click", () => updatePolarisPower("third-power", "third-power-options", 3));


function handleButtonClick(event) {
    saveCharacterState();

    if (event.target.id === 'nextCharacter') {
        window.location.href = 'page4.html';
    }
}

document.getElementById('saveCharacter').addEventListener('click', handleButtonClick);

document.getElementById('nextCharacter').addEventListener('click', handleButtonClick);
console.log(document.getElementById("mutation-list"));

