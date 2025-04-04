import state from './state.js';
import { attributes as attributeData } from "./attributes.js";
import { loadCharacterState, saveCharacterState } from './state.js'; // Just in case you're using them elsewhere

// DOM Elements
const cpTotalElement = document.getElementById("cp-total");
const apTotalElement = document.getElementById("ap-total");
const attributesList = document.getElementById("attributes-list");
const characterTypeDropdown = document.getElementById("characterType");
const cpSpendDropdown = document.getElementById("cp-spend");
const characterName = document.getElementById('characterName')

const newCharacter = localStorage.getItem("isNewCharacter");
let characterState = JSON.parse(localStorage.getItem('characterState')) || {};

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    const newCharacter = localStorage.getItem("isNewCharacter");
    let characterState = JSON.parse(localStorage.getItem('characterState')) || {};

    if (newCharacter === "true") {
        state.resetState();
        localStorage.setItem("characterState", JSON.stringify(state));
        localStorage.setItem("isNewCharacter", "false");

        // Clear name input
        characterName.value = "";
        document.getElementById('cp-character-name').textContent = "Unknown";

        console.log("New character initialized.");
    } else {
        if (characterState.name) {
            // ✅ Load name into textbox and cp-character-name display
      loadCharacterState(characterState.name)
            characterName.value = characterState.name;
            document.getElementById('cp-character-name').textContent = characterState.name;
            updateUIWithState();
            console.log("Loaded character name:", characterState.name);
        } else {
            // Default to empty if name is missing
            characterName.value = "";
            document.getElementById('cp-character-name').textContent = "Unknown";

            console.log("No character name found in state.");
        }
    }

  


  
    
    renderAttributes();
    updateDifficultyDropdown();
    updateDropdownOptions();

    // Ensure UI reflects loaded state
  

    cpTotalElement.textContent = characterState.cpTotal;
    apTotalElement.textContent = characterState.apTotal;
});

function updateUIWithState() {
    console.log("🔄 Updating UI with loaded characterState...");

    console.log("✅ characterState at the START of UI update:", {
        cpTotal: characterState.cpTotal,
        apTotal: characterState.apTotal,
        difficultyLevel: characterState.difficultyLevel,
        spentCPOnAP: characterState.spentCPOnAP,
    });

    // 1️⃣ Update the character type (difficulty level)
    const difficultyMap = { 1: "realistic", 2: "intermediary", 3: "heroic" };

    if (characterState.difficultyLevel in difficultyMap) {
        characterTypeDropdown.value = difficultyMap[characterState.difficultyLevel];

        console.log("📌 CharacterTypeDropdown value set to:", characterTypeDropdown.value);
        
        // 🔹 Add this to see if changing dropdown triggers any listener
        characterTypeDropdown.dispatchEvent(new Event("change"));
    } else {
        console.error("❌ Invalid difficulty level in characterState:", characterState.difficultyLevel);
    }

    console.log("✅ characterState AFTER updating dropdown:", {
        cpTotal: characterState.cpTotal,
        apTotal: characterState.apTotal,
        difficultyLevel: characterState.difficultyLevel,
        spentCPOnAP: characterState.spentCPOnAP,
    });

    // 2️⃣ Update the CP spend dropdown
    if (typeof characterState.spentCPOnAP === "number") {
        cpSpendDropdown.value = characterState.spentCPOnAP.toString();
    } else {
        console.error("❌ Invalid CP spent on AP in characterState:", characterState.spentCPOnAP);
    }

    console.log("✅ characterState AFTER updating CP dropdown:", {
        cpTotal: characterState.cpTotal,
        apTotal: characterState.apTotal,
        difficultyLevel: characterState.difficultyLevel,
        spentCPOnAP: characterState.spentCPOnAP,
    });
characterState.selectedAttributes.forEach(attribute => {
        const attrShortForm = characterState.selectedAttributes.shortForm;  // Assuming each attribute has a `shortForm` property
        state.updateAttributeLevel(attrShortForm, attribute.level);
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
        listItem.classList.add("attribute-row");
        listItem.id = `attribute-${attribute.shortForm}`;

        // === Create info container (label + description) ===
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("attribute-info");

        // Create attribute label (Name)
        const attributeLabel = document.createElement("span");
        attributeLabel.classList.add("attribute-label");
        attributeLabel.textContent = `${attribute.name}`;

        // Create description text
        const descriptionText = document.createElement("span");
        descriptionText.classList.add("attribute-description");
        descriptionText.textContent = `${attribute.description}`;

        // Add name and description to info container
        infoContainer.appendChild(attributeLabel);
        infoContainer.appendChild(descriptionText);

        // Create level text
        const levelText = document.createElement("span");
        levelText.id = `value-${attribute.shortForm}`;
        levelText.textContent = attribute.level;

        // Create button container
        const attributeButton = document.createElement("div");
        attributeButton.classList.add("attribute-buttons");

        if (attribute.shortForm !== "LCK") {
            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.id = `increase-${attribute.shortForm}`;

            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.id = `decrease-${attribute.shortForm}`;

            attributeButton.appendChild(increaseButton);
            attributeButton.appendChild(decreaseButton);

            increaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, 1));
            decreaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, -1));
        }

        // Append everything to the row
        listItem.appendChild(infoContainer);
        listItem.appendChild(levelText);
        listItem.appendChild(attributeButton);

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

// Find the Luck attribute
const luckAttribute = attributeData.find(attr => attr.shortForm === "LCK");
if (luckAttribute) {
    luckAttribute.level = luckValues[newDifficulty];

    // Wait until LCK element exists before modifying it
    setTimeout(() => {
        const luckElement = document.getElementById("value-LCK");
        if (luckElement) {
            luckElement.textContent = luckAttribute.level;
        } else {
            console.error("LCK element not found in DOM.");
        }
    }, 0);

    // Update dropdown options
    updateDropdownOptions();
}
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


function updateCharacterName() {
    const nameValue = characterName.value.trim();
    document.getElementById('cp-character-name').textContent = nameValue || "Unknown";
}


// Add an event listener to update the name in real-time

let typingTimer;
const typingDelay = 500; // Delay in milliseconds (adjust as needed)

document.getElementById('characterName').addEventListener('input', () => {
    clearTimeout(typingTimer); // Clear any previous timer
    typingTimer = setTimeout(updateCharacterName, typingDelay);
});

