import state from './state.js';
import { attributes as attributeData } from "./attributes.js";
import { loadCharacterState, saveCharacterState } from './state.js'; // Just in case you're using them elsewhere

// DOM Elements
const cpTotalElement = document.getElementById("cp-total");
const apTotalElement = document.getElementById("ap-total");
const attributesList = document.getElementById("attributes-list");
const characterTypeDropdown = document.getElementById("characterType");
const cpSpendDropdown = document.getElementById("cp-spend");
const stateJson = localStorage.getItem("characterState");


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    const newCharacter = localStorage.getItem("newCharacter");

    if (newCharacter === "true") {
        state.resetState();  
        localStorage.setItem("newCharacter", "false"); 
        localStorage.setItem("state", JSON.stringify(state)); 
    } else {
        const characterState = JSON.parse(localStorage.getItem('characterState'));
        if (characterState) {
            loadCharacterState(characterState); 
        }
    }
    console.log("✅ state before timeout:", {
        cpTotal: state.cpTotal,
        apTotal: state.apTotal,
        difficultyLevel: state.difficultyLevel,
        spentCPOnAP: state.spentCPOnAP,
    });
    
    setTimeout(() => {
        console.log("⏳ state right before calling UI update:", {
            cpTotal: state.cpTotal,
            apTotal: state.apTotal,
            difficultyLevel: state.difficultyLevel,
            spentCPOnAP: state.spentCPOnAP,
        });
    
        updateUIWithState();
    }, 50);
    
    renderAttributes();
    updateDifficultyDropdown();
    updateDropdownOptions();

    // Ensure UI reflects loaded state
  

    cpTotalElement.textContent = state.getCpTotal();
    apTotalElement.textContent = state.getApTotal();
});

function updateUIWithState() {
    console.log("🔄 Updating UI with loaded state...");

    console.log("✅ state at the START of UI update:", {
        cpTotal: state.cpTotal,
        apTotal: state.apTotal,
        difficultyLevel: state.difficultyLevel,
        spentCPOnAP: state.spentCPOnAP,
    });

    // 1️⃣ Update the character type (difficulty level)
    const difficultyMap = { 1: "realistic", 2: "intermediary", 3: "heroic" };

    if (state.difficultyLevel in difficultyMap) {
        characterTypeDropdown.value = difficultyMap[state.difficultyLevel];

        console.log("📌 CharacterTypeDropdown value set to:", characterTypeDropdown.value);
        
        // 🔹 Add this to see if changing dropdown triggers any listener
        characterTypeDropdown.dispatchEvent(new Event("change"));
    } else {
        console.error("❌ Invalid difficulty level in state:", state.difficultyLevel);
    }

    console.log("✅ state AFTER updating dropdown:", {
        cpTotal: state.cpTotal,
        apTotal: state.apTotal,
        difficultyLevel: state.difficultyLevel,
        spentCPOnAP: state.spentCPOnAP,
    });

    // 2️⃣ Update the CP spend dropdown
    if (typeof state.spentCPOnAP === "number") {
        cpSpendDropdown.value = state.spentCPOnAP.toString();
    } else {
        console.error("❌ Invalid CP spent on AP in state:", state.spentCPOnAP);
    }

    console.log("✅ state AFTER updating CP dropdown:", {
        cpTotal: state.cpTotal,
        apTotal: state.apTotal,
        difficultyLevel: state.difficultyLevel,
        spentCPOnAP: state.spentCPOnAP,
    });

    console.log("✅ UI fully updated!");
}

// Function to render attributes and buttons
function renderAttributes() {
    attributesList.innerHTML = '';  // Clear existing content

    if (!Array.isArray(attributeData) || attributeData.length === 0) {
        console.error("Attribute data is empty or not loaded properly.");
        return;
    }

    attributeData.forEach(attribute => {
        const listItem = document.createElement("li");
        listItem.id = `attribute-${attribute.shortForm}`;

        const attributeLabel = document.createElement("span");
        attributeLabel.textContent = `${attribute.name}: `;

        const levelText = document.createElement("span");
        levelText.id = `value-${attribute.shortForm}`;
        levelText.textContent = attribute.level;

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        if (attribute.shortForm !== "LCK") {  // Skip Luck attribute buttons
            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.id = `decrease-${attribute.shortForm}`;
            buttonContainer.appendChild(decreaseButton);

            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.id = `increase-${attribute.shortForm}`;
            buttonContainer.appendChild(increaseButton);

            decreaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, -1));
            increaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, 1));
        }

        listItem.appendChild(attributeLabel);
        listItem.appendChild(levelText);
        listItem.appendChild(buttonContainer);
        attributesList.appendChild(listItem);

        updateButtonStates(attribute);
    });
}


function updateDropdownOptions() {
    // Update Difficulty Dropdown
    const difficultyMap = { realistic: 1, intermediary: 2, heroic: 3 };
    const difficultyLevels = { 1: 30, 2: 38, 3: 46 };

    Object.entries(difficultyMap).forEach(([key, value]) => {
        const option = document.querySelector(`#characterType option[value="${key}"]`);
        if (option) {
            const previousDifficulty = state.getDifficulty();
            const previousAp = difficultyLevels[previousDifficulty] || 0;
            const newAp = difficultyLevels[value];
            const apDifference = newAp - previousAp;

            // Disable if AP would go negative
            option.disabled = (state.getApTotal() + apDifference < 0);
        }
    });
// Update CP Spend Dropdown
const cpSpendOptions = cpSpendDropdown.querySelectorAll("option");
cpSpendOptions.forEach(option => {
    const cpCost = parseInt(option.value, 10);
    const apGain = cpCost * 2;

    // Get current CP and AP
    const currentCp = state.getCpTotal();
    const currentAp = state.getApTotal();

    // Calculate the potential difference for CP and AP
    const cpDifference = cpCost - state.spentCPOnAP;
    const apDifference = apGain - (state.spentCPOnAP * 2);

    // Disable options if selecting them would result in negative CP or AP
    option.disabled = (currentCp < cpDifference) || (currentAp + apDifference < 0);
});
}




// Optionally, also run it on page load
document.addEventListener("DOMContentLoaded", updateDropdownOptions);

function updateDifficultyDropdown() {
    const difficultyMap = { realistic: 1, intermediary: 2, heroic: 3 };
    const difficultyLevels = { 1: 30, 2: 38, 3: 46 };
    const luckValues = { 1: 11, 2: 13, 3: 15 };

    const previousDifficulty = state.getDifficulty();
    const newDifficulty = difficultyMap[characterTypeDropdown.value];

    if (!newDifficulty) {
        console.error("Invalid difficulty level selected:", characterTypeDropdown.value);
        return;
    }

    // Pre-check before changing difficulty
    const previousAp = difficultyLevels[previousDifficulty] || 0;
    const newAp = difficultyLevels[newDifficulty];
    const apDifference = newAp - previousAp;

    if (state.getApTotal() + apDifference < 0) {
        alert("Not enough AP to lower difficulty!");
        characterTypeDropdown.value = Object.keys(difficultyMap).find(
            key => difficultyMap[key] === previousDifficulty
        );
        return;
    }

    // Apply difficulty change
    state.setApTotal(state.getApTotal() + apDifference);
    state.updateDifficulty(newDifficulty);
    apTotalElement.textContent = state.getApTotal();

    // Update Luck attribute
    const luckAttribute = attributeData.find(attr => attr.shortForm === "LCK");
    if (luckAttribute) {
        luckAttribute.level = luckValues[newDifficulty];
        document.getElementById(`value-LCK`).textContent = luckAttribute.level;
    }

    // Update dropdown options
    updateDropdownOptions();
}

characterTypeDropdown.addEventListener("change", updateDifficultyDropdown);

function modifyAttribute(attrShortForm, change) {
    const attribute = attributeData.find(attr => attr.shortForm === attrShortForm);
    if (!attribute) return;

    const oldLevel = attribute.level;
    const newLevel = oldLevel + change;
    if (newLevel < 7 || newLevel > 20) return;

    let cost = 1, refund = 1;
    if (newLevel >= 16 && newLevel <= 18) cost = 2;
    if (newLevel >= 19 && newLevel <= 20) cost = 3;
    if (oldLevel >= 16 && oldLevel <= 18) refund = 2;
    if (oldLevel >= 19 && oldLevel <= 20) refund = 3;

    if (change > 0 && state.getApTotal() < cost) return; // Can't increase if insufficient AP
    if (change < 0) {
        state.setApTotal(state.getApTotal() + refund); // Refund AP when lowering
    } else {
        state.setApTotal(state.getApTotal() - cost); // Deduct AP when increasing
    }

    attribute.level = newLevel;
    document.getElementById(`value-${attribute.shortForm}`).textContent = newLevel;
    apTotalElement.textContent = state.getApTotal(); // Update DOM

    state.updateAttributeLevel(attrShortForm,attribute.level)
    console.log(state.selectedAttributes)
    updateButtonStates(attribute);
    updateDropdownOptions();
}

// Update Button States
function updateButtonStates(attribute) {
    const decreaseButton = document.getElementById(`decrease-${attribute.shortForm}`);
    const increaseButton = document.getElementById(`increase-${attribute.shortForm}`);

    if (decreaseButton) {
        decreaseButton.disabled = attribute.level <= 7; // Disable if attribute level is 7 or lower
    }
    if (increaseButton) {
        increaseButton.disabled = attribute.level >= 20; // Optional: Disable if at max (20)
    }
}

// Function to handle CP spending and AP gain/loss dynamically
function handleCpSpendChange() {
    const selectedValue = parseInt(cpSpendDropdown.value, 10);
    const cpCost = selectedValue; // CP spent is the selected value
    const apGain = selectedValue * 2; // AP gained is double the CP spent

    const currentCp = state.getCpTotal();
    const currentAp = state.getApTotal();

    // Determine the difference in CP and AP
    const cpDifference = cpCost - state.spentCPOnAP;
    const apDifference = apGain - (state.spentCPOnAP * 2);

    // Prevent AP from going negative when lowering CP spending
    if (apDifference < 0 && currentAp + apDifference < 0) {
        cpSpendDropdown.value = state.spentCPOnAP; // Reset to last valid value
        return;
    }

    // Update state with new CP and AP values
    state.setCpTotal(currentCp - cpDifference); // Update CP total first
    state.setApTotal(currentAp + apDifference); // Then update AP total
    state.spentCPOnAP = selectedValue; // Store last valid CP spend level

    // Update displayed totals
    cpTotalElement.textContent = state.getCpTotal();
    apTotalElement.textContent = state.getApTotal();
    updateDropdownOptions();
}

// Attach event listener for CP Spend
cpSpendDropdown.addEventListener("change", handleCpSpendChange);



// Function to handle button clicks
function handleButtonClick(event) {
    saveCharacterState();

    if (event.target.id === 'nextCharacter') {
        window.location.href = 'page3.html';
    }
}

// Add event listeners to both buttons
document.getElementById('saveCharacter').addEventListener('click', handleButtonClick);
document.getElementById('nextCharacter').addEventListener('click', handleButtonClick);

// Optionally, load the character state on page load
window.addEventListener('load', () => {
    if (stateJson) {
        const state = JSON.parse(stateJson);
        document.getElementById('characterName').value = state.name;
    }
});

