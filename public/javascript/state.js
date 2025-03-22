// stateManager.js
import { Attribute } from './define.js'; // Import Attribute class
import { Skill } from './define.js'; // Import Skill class
import { Mutation } from './define.js'; // Import Mutation class

class StateManager {
    constructor() {
        if (StateManager.instance) {
            return StateManager.instance; // Enforce singleton
        }

        this.attributes = {}; // Store all attributes here
        this.skills = []; // Store all skills here
        this.mutations = []; // Store all mutations here

        this.cpTotal = 0;
        this.apTotal = 0;
        this.difficultyLevel = 1;
        this.spentCPOnAP = 0;

        StateManager.instance = this;
    }

    // Method to add an attribute to the state
    addAttribute(attribute) {
        if (attribute instanceof Attribute) {
            this.attributes[attribute.shortForm] = attribute;
        }
    }

    // Method to get an attribute by short form
    getAttribute(shortForm) {
        return this.attributes[shortForm];
    }

    // Method to update an attribute's level and natural ability
    updateAttributeLevel(shortForm, newLevel) {
        const attribute = this.getAttribute(shortForm);
        if (attribute) {
            attribute.level = newLevel;
        }
    }

    // Method to update CP and AP totals
    updateCpTotal(amount) {
        this.cpTotal += amount;
    }

    updateApTotal(amount) {
        this.apTotal += amount;
    }
   // ✅ New method to get CP total
   getCpTotal() {
    return this.cpTotal;
}

// ✅ New method to get AP total
getApTotal() {
    return this.apTotal;
}
// ✅ Method to update difficulty level
updateDifficulty(newLevel) {
    if ([1, 2, 3].includes(newLevel)) {
        this.difficultyLevel = newLevel;
    }
}

// ✅ Method to get the current difficulty level
getDifficulty() {
    return this.difficultyLevel;
}
// ✅ Method to set CP total
setCpTotal(amount) {
    this.cpTotal = amount;
}

// ✅ Method to set AP total
setApTotal(amount) {
    this.apTotal = amount;
}

    // Method to reset all state values (useful when reloading or starting fresh)
    resetState() {
        this.cpTotal = 20;
        this.apTotal = 30;
        this.difficultyLevel = 1;
        this.spentCPOnAP = 0;
        this.attributes = {}; // Clear all attributes
        this.skills = []; // Clear all skills
        this.mutations = []; // Clear all mutations
    }

    // You can al
    // so add more getter and setter methods for other state variables like skills, mutations, etc.
}

const stateManager = new StateManager();
export default stateManager; // Export the singleton instance for use throughout the app
