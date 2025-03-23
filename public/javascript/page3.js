import state from './state.js';
import { allgenotypes } from './genotype.js';
import { allmutations, rollMutation } from './mutations.js';
import { randomPower } from './polarispowers.js';
import { saveCharacterState } from './state.js';
import { Mutation } from './define.js';

// Load character state and CP total
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.getElementById("mutation-list"));
    document.getElementById("cp-total").textContent = state.getCpTotal();
    loadGenotypeSelection();
    console.log("allmutations array:", allmutations);
    loadMutations();
});

// Genotype Selection
function loadGenotypeSelection() {
    document.querySelectorAll(".genotype-btn").forEach(button => {
        button.addEventListener("click", () => {
            const selectedGenotype = button.getAttribute("data-type");
            const genotypeInfo = allgenotypes[selectedGenotype];

            document.getElementById("genotype-info").innerHTML = `
                <p><strong>CP Cost:</strong> ${genotypeInfo.cpCost}</p>
                <p><strong>Attribute Changes:</strong> ${JSON.stringify(genotypeInfo.attributes)}</p>
                <p><strong>Features:</strong> ${genotypeInfo.features.join(", ")}</p>
            `;

            document.getElementById("choose-genotype").onclick = () => {
                if (state.getCpTotal() >= genotypeInfo.cpCost) {
                    state.setGenotype(selectedGenotype);
                    state.modifyCp(-genotypeInfo.cpCost);
                    document.getElementById("cp-total").textContent = state.getCpTotal();
                }
            };
        });
    });
}

// Mutations
function loadMutations() {
    const mutationList = document.getElementById("mutation-list");
    console.log("allmutations:", allmutations); // Debugging - See if it's populated

    allmutations.forEach(mutation => {
        const option = document.createElement("option");
        option.value = mutation.name;  // Corrected from Mutation.name
        option.textContent = `${mutation.name} (${mutation.cpCost})`;
        option.title = mutation.descriptionShort;  // Corrected from Mutation.descriptionShort
        mutationList.appendChild(option);
    });

    mutationList.addEventListener("change", () => {
        const selectedMutation = allmutations.find(m => m.name === mutationList.value);
        console.log("Selected Mutation:", selectedMutation); // Debugging

        if (selectedMutation) {
            document.getElementById("mutation-details").innerHTML = `
                <p><strong>${selectedMutation.name}</strong> - ${selectedMutation.cpCost} CP</p>
                <p>${selectedMutation.descriptionFull}</p>
            `;
        }
    });
}
// Function to update the UI with power details
function updatePowerUI(displayId, power) {
    const categoryText = power.categories
        ? Object.entries(power.categories).map(([key, value]) => `"${key}": "${value}"`).join('\n')
        : 'No Variables available';

    document.getElementById(displayId + "-name").textContent = power.name;
    document.getElementById(displayId + "-categories").textContent = categoryText;
    document.getElementById(displayId + "-description").textContent = power.fullDescription;
}

function updatePolarisPower(displayId, rerollBtnId) {
    const grantedPowers = randomPower(); // Fetch a random power (returns an array of objects)

    if (!Array.isArray(grantedPowers) || grantedPowers.length === 0) {
        console.error("randomPower() returned an empty array or invalid data.");
        return;
    }

    const power = grantedPowers[0]; // Get the first power object

    // If updating the granted power (when "Access Polaris" is clicked)
    if (displayId === "polaris-power") {
        document.getElementById("polaris-power-name").textContent = power.name;
        document.getElementById("polaris-power-categories").textContent = JSON.stringify(power.categories, null, 2);
        document.getElementById("polaris-power-description").textContent = power.fullDescription;
    } else {
        updatePowerUI(displayId, power);
    }

    // Enable reroll button if it exists
    const rerollButton = document.getElementById(rerollBtnId);
    if (rerollButton) {
        rerollButton.disabled = false;
    }
}


// Fetch and display multiple power choices for selection
function updateMultiplePolarisPower(displayId, optionsContainerId, powerCount) {
    const grantedPowers = randomPower(powerCount); // Fetch correct number of powers

    if (!Array.isArray(grantedPowers) || grantedPowers.length !== powerCount) {
        console.error(`Expected ${powerCount} powers, but got`, grantedPowers);
        return;
    }

    // Rest of the code remains the same...

    // Ensure the container exists before attempting to update it
    const container = document.getElementById(optionsContainerId);
    if (!container) {
        console.error(`Element with ID '${optionsContainerId}' not found.`);
        return;
    }

    // Generate the power selection UI
    let optionsHTML = grantedPowers.map((power, index) => `
        <div class="power-option" id="${displayId}-option-${index}">
            <h4>${power.name}</h4>
            <p><strong>Variables:</strong></p>
            <pre>${JSON.stringify(power.categories, null, 2)}</pre>
            <p><strong>Description:</strong> ${power.fullDescription}</p>
           <input type="radio" name="${displayId}-selection" id="${displayId}-select-${index}" 
       onclick="selectPower('${displayId}', ${index})">
<label for="${displayId}-select-${index}">${power.name}</label>

        </div>
        <hr>
    `).join('');

    // Update the container with new power choices
    container.innerHTML = optionsHTML;
    window[displayId + "Powers"] = grantedPowers; // Store power options for selection
}


export function selectPower(displayId, index) {
    const powers = window[displayId + "Powers"];
    if (!powers || !powers[index]) {
        console.error("Invalid power selection.");
        return;
    }

    updatePowerUI(displayId, powers[index]);

    // Highlight selected power, gray out others
    const container = document.getElementById(displayId + "-options") || 
                      document.getElementById(displayId + "-options-container");

    if (!container) return;

    Array.from(container.children).forEach((child, i) => {
        if (i === index) {
            child.style.opacity = "1"; // Fully visible
        } else {
            child.style.opacity = "0.5"; // Grayed out
        }
    });
}

function togglePowerSelection(powerId, nextPowerId, optionsContainerId, powerCount, decrement) {
    const checkbox = document.getElementById(powerId);
    const nextPower = document.getElementById(nextPowerId);

    // Dynamically construct reroll button ID based on powerId (first, second, third)
    const rerollBtnId = "reroll-" + powerId;  // This should now correspond to reroll-first, reroll-second, or reroll-third

    if (checkbox.checked) {
        setTimeout(() => {
            updateMultiplePolarisPower(powerId, optionsContainerId, powerCount);
        }, 10);

        // Enable the next power checkbox if it exists
        if (nextPower) nextPower.disabled = false;

        // Enable the corresponding reroll button
        const rerollButton = document.getElementById(rerollBtnId);
        if (rerollButton) {
            rerollButton.disabled = false; // Enable reroll button
        }

        // Decrease CP (for checkbox selection)
        state.setCpTotal(state.getCpTotal() - decrement);
    } else {
        // Disable the next power checkbox if it exists
        if (nextPower) nextPower.disabled = true;

        // Disable the corresponding reroll button
        const rerollButton = document.getElementById(rerollBtnId);
        if (rerollButton) {
            rerollButton.disabled = true; // Disable reroll button
        }

        // Increase CP (for checkbox deselection)
        state.setCpTotal(state.getCpTotal() + decrement);

        // Clear the power options container when the checkbox is deselected
        const optionsContainer = document.getElementById(optionsContainerId);
        if (optionsContainer) {
            optionsContainer.innerHTML = ''; // Clear the options container
        }
    }

    // Update the CP total display
    document.getElementById("cp-total").textContent = state.getCpTotal();
}

// Event Listeners


document.getElementById("remove-polaris").addEventListener("click", () => {
    state.setCpTotal(state.getCpTotal() + 5); // Refund CP for removing Polaris Effect
    document.getElementById("cp-total").textContent = state.getCpTotal();

    // Reset UI elements (only clear those that exist)
    const elementIds = [
        "polaris-power-name", "polaris-power-categories", "polaris-power-description",
        "first-power-name", "first-power-categories", "first-power-description",
        "second-power-name", "second-power-categories", "second-power-description",
        "third-power-name", "third-power-categories", "third-power-description"
    ];

    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
        }
    });

    // Clear dynamically added power selection options
    ["first-power-options", "second-power-options", "third-power-options"].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '';  // Clear the inner HTML, removing all dynamically added content
        }
    });

    // Disable and uncheck the powers
    ["first-power", "second-power", "third-power"].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });

    // Refund CP for each unchecked power
    const powersUnchecked = ["first", "second", "third"].filter(i => !document.getElementById(`${i}-power`).checked);
    state.setCpTotal(state.getCpTotal() + powersUnchecked.length); // Refund 1 CP per power removed
    document.getElementById("cp-total").textContent = state.getCpTotal();

    // Disable the "Remove Polaris Effect" button and enable the "Access Polaris Effect" button
    document.getElementById("remove-polaris").disabled = true;
    document.getElementById("access-polaris").disabled = false;
});



// Event Listeners
document.getElementById("access-polaris").addEventListener("click", () => {
    if (state.getCpTotal() >= 5) {
        state.setCpTotal(state.getCpTotal() - 5);
        document.getElementById("cp-total").textContent = state.getCpTotal();

        document.getElementById("remove-polaris").disabled = false;
        document.getElementById("access-polaris").disabled = true;
        document.getElementById("first-power").disabled = false;

        updatePolarisPower("polaris-power", "reroll-power"); // FIXED TO UPDATE GRANTED POWER
    }
});

// Power selections
document.getElementById("first-power").addEventListener("change", () => 
    togglePowerSelection("first-power", "second-power", "first-power-options", 1, 1));
document.getElementById("second-power").addEventListener("change", () => 
    togglePowerSelection("second-power", "third-power", "second-power-options", 2, 1));
document.getElementById("third-power").addEventListener("change", () => 
    togglePowerSelection("third-power", null, "third-power-options", 3, 1));

// Reroll buttons
document.getElementById("reroll-power").addEventListener("click", () => updatePolarisPower("polaris-power", "reroll-power")); // FIXED TO UPDATE GRANTED POWER
document.getElementById("reroll-first-power").addEventListener("click", () => updateMultiplePolarisPower("first-power", "first-power-options", 2));
document.getElementById("reroll-second-power").addEventListener("click", () => updateMultiplePolarisPower("second-power", "second-power-options", 2));
document.getElementById("reroll-third-power").addEventListener("click", () => updateMultiplePolarisPower("third-power", "third-power-options", 3));


function handleButtonClick(event) {
    saveCharacterState();

    if (event.target.id === 'nextCharacter') {
        window.location.href = 'page4.html';
    }
}

document.getElementById('saveCharacter').addEventListener('click', handleButtonClick);
document.getElementById('nextCharacter').addEventListener('click', handleButtonClick);
console.log(document.getElementById("mutation-list"));