// Import the attributes data
import { attributes as attributeData } from "./attributes.js";

// DOM Elements
const cpTotalElement = document.getElementById("cp-total");
const apTotalElement = document.getElementById("ap-total");
const attributesList = document.getElementById("attributes-list");  // Changed name here
const cpSpendDropdown = document.getElementById("cp-spend");
const characterTypeDropdown = document.getElementById("characterType");

// Global Variables
let cpTotal = 20; // Default CP if loaded from index.html
let apTotal = 30; // Default to Realistic
let spentCPOnAP = 0;
let startingAP = apTotal; // Store the starting AP value for comparison

// Base AP values for difficulty levels
const difficultyLevels = {
    realistic: 30,
    intermediary: 38,
    heroic: 46,
};

// Call update functions after modifying attributes or CP/AP.
function modifyAttribute(attrShortForm, change) {
    const attribute = attributeData.find(attr => attr.shortForm === attrShortForm);
    if (!attribute) return;

    const newLevel = attribute.level + change;
    if (newLevel < 3 || newLevel > 20) return;

    let cost = 1;
    if (newLevel >= 16 && newLevel <= 18) cost = 2;
    if (newLevel >= 19 && newLevel <= 20) cost = 3;

    if (change > 0 && apTotal < cost) return;
    if (change < 0) apTotal += Math.abs(cost);
    else apTotal -= cost;

    attribute.level = newLevel;
    document.getElementById(`value-${attrShortForm}`).textContent = newLevel;
    apTotalElement.textContent = apTotal;  // Update AP display here
    cpTotalElement.textContent = cpTotal;  // Update CP display here

    updateDifficultyDropdown();
}

// Define the renderAttributes function
function renderAttributes() {
    // Clear any existing content
    attributesList.innerHTML = '';

    // Loop through the attribute data and display them
    attributeData.forEach(attribute => {
        const listItem = document.createElement("li");
        listItem.id = `attribute-${attribute.shortForm}`;

        // Create the display for the attribute and its level
        const attributeLabel = document.createElement("span");
        attributeLabel.textContent = `${attribute.name}: Level `;

        const levelText = document.createElement("span");
        levelText.id = `value-${attribute.shortForm}`;
        levelText.textContent = attribute.level;

        // Add buttons for increase and decrease
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.classList.add("decrease");
        decreaseButton.id = `decrease-${attribute.shortForm}`;
        buttonContainer.appendChild(decreaseButton);

        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.classList.add("increase");
        increaseButton.id = `increase-${attribute.shortForm}`;
        buttonContainer.appendChild(increaseButton);

        // Add the label, level, and buttons to the list item
        listItem.appendChild(attributeLabel);
        listItem.appendChild(levelText);
        listItem.appendChild(buttonContainer);

        // Append the list item to the attributes list
        attributesList.appendChild(listItem);

        // Add event listeners to the buttons
        decreaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, -1));
        increaseButton.addEventListener("click", () => modifyAttribute(attribute.shortForm, 1));

        // Call a function to update button states
        updateButtonStates(attribute);
    });
}

// Function to update button states based on current AP and attribute level
function updateButtonStates(attribute) {
    const decreaseButton = document.getElementById(`decrease-${attribute.shortForm}`);
    const increaseButton = document.getElementById(`increase-${attribute.shortForm}`);

    // Disable the decrease button if attribute level is at the minimum (7)
    if (attribute.level <= 7) {
        decreaseButton.disabled = true;
    } else {
        decreaseButton.disabled = false;
    }

    // Disable the increase button if there is not enough AP to increase the attribute
    let cost = 1;
    if (attribute.level >= 16 && attribute.level <= 18) cost = 2;
    if (attribute.level >= 19 && attribute.level <= 20) cost = 3;

    if (apTotal < cost) {
        increaseButton.disabled = true;
    } else {
        increaseButton.disabled = false;
    }
}

// Handle CP Spending (Always Editable)
cpSpendDropdown.addEventListener("change", function() {
    const selectedValue = parseInt(this.value);
    if (selectedValue === spentCPOnAP) return; // No change

    const newAP = difficultyLevels[characterTypeDropdown.value] + (selectedValue * 2);
    const newCP = cpTotal + spentCPOnAP - selectedValue;

    if (newCP < 0) return; // Prevent negative CP

    // Update global variables
    spentCPOnAP = selectedValue;
    apTotal = newAP;
    cpTotal = newCP;

    // Update UI
    apTotalElement.textContent = apTotal;
    cpTotalElement.textContent = cpTotal;

    updateDropdown();
    updateDifficultyDropdown();
});

// Handle Difficulty Change
characterTypeDropdown.addEventListener("change", function () {
    const currentDifficulty = characterTypeDropdown.value;
    const newDifficulty = this.value;

    // Handle the case of going up (Realistic -> Intermediate -> Heroic)
    if (difficultyLevels[newDifficulty] > difficultyLevels[currentDifficulty]) {
        apTotal += 8;  // Add 8 points when going up
    }
    // Handle the case of going down (Heroic -> Intermediate -> Realistic)
    else if (difficultyLevels[newDifficulty] < difficultyLevels[currentDifficulty]) {
        if (apTotal >= 8) {
            apTotal -= 8;  // Subtract 8 points when going down (only if enough points)
        } else {
            // If not enough points, revert the selection to the old difficulty
            this.value = currentDifficulty;
            return;
        }
    }

    // Update the AP total displayed on the page
    apTotalElement.textContent = apTotal;

    // Update the difficulty dropdown (disable options if needed)
    updateDifficultyDropdown();
});

// Disable difficulty dropdown options if you can't afford the downgrade
function updateDifficultyDropdown() {
    const currentDifficulty = characterTypeDropdown.value;

    // Loop through each option in the dropdown
    for (const level in difficultyLevels) {
        const option = characterTypeDropdown.querySelector(`option[value="${level}"]`);

        // If you are at Heroic or Intermediate and trying to go down
        if (difficultyLevels[level] < difficultyLevels[currentDifficulty]) {
            // Disable downgrade if not enough points (you need at least 8 AP to downgrade)
            if (apTotal < 8) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        } else {
            // Always enable going up or staying at the current difficulty
            option.disabled = false;
        }
    }

    // Ensure that the current difficulty is never disabled
    const currentOption = characterTypeDropdown.querySelector(`option[value="${currentDifficulty}"]`);
    if (currentOption.disabled) {
        currentOption.disabled = false;
    }
}

// Initialize the page by setting up initial values and updating the dropdown
renderAttributes();
cpTotalElement.textContent = cpTotal;
apTotalElement.textContent = apTotal;
updateDifficultyDropdown();
// Initialize Page
renderAttributes();
cpTotalElement.textContent = cpTotal;
apTotalElement.textContent = apTotal;
updateDropdown();
updateDifficultyDropdown();  // Disable/Enable difficulty options based on current AP
