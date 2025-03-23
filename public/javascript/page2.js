import state from './state.js';
import { attributes as attributeData } from "./attributes.js";
import { loadCharacterState, saveCharacterState } from './state.js'; // Just in case you're using them elsewhere

// DOM Elements
const cpTotalElement = document.getElementById("cp-total");
const apTotalElement = document.getElementById("ap-total");
const attributesList = document.getElementById("attributes-list");
const characterTypeDropdown = document.getElementById("characterType");
const cpSpendDropdown = document.getElementById("cp-spend");
const characterName = document.getElementById('characterName').value;

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    const newCharacter = localStorage.getItem("newCharacter");

    if (newCharacter === "true") {
        // Initialize new character state
        state.resetState();  // Reset the state
        localStorage.setItem("newCharacter", "false"); // Set it to false to prevent resetting on future reloads
        localStorage.setItem("state", JSON.stringify(state)); // Store state in localStorage
    } else {
        // If not a new character, load from localStorage (if saved)
        const characterState = JSON.parse(localStorage.getItem('characterState'));
        if (characterState) {
            loadCharacterState(characterState); // Pass the actual state data to load
        }
    }

    renderAttributes();
    updateDifficultyDropdown();
    updateDropdownOptions();

    cpTotalElement.textContent = state.getCpTotal(); // Get cpTotal
    apTotalElement.textContent = state.getApTotal(); // Get apTotal
});

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
    option.disabled = (currentCp < cpCost) || (currentAp + apGain < 0);
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
    const characterName = document.getElementById('characterName').value;
    const stateJson = localStorage.getItem(characterName);
    if (stateJson) {
        const state = JSON.parse(stateJson);
        document.getElementById('characterName').value = state.name;
    }
});

