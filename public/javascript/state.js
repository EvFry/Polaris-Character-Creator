// stateManager.js
import { Attribute } from './define.js';
import { Skill } from './define.js';
import { Mutation } from './define.js';
import { attributes } from './attributes.js';
import { allmutations } from './mutations.js';
import { allskills, skilloptions } from './skills.js';
import { polarispowers } from './polarispowers.js';



// Utility function to get the current page number
function getPageNumber() {
    const currentPage = window.location.pathname;
    if (currentPage.includes('index.html')) return 1;
    if (currentPage.includes('page2.html')) return 2;
    if (currentPage.includes('page3.html')) return 3;
    if (currentPage.includes('page4.html')) return 4;
    if (currentPage.includes('page5.html')) return 5;
    if (currentPage.includes('page6.html')) return 6;
    if (currentPage.includes('final.html')) return 7;

    return 0; // Default in case of an unknown page
}

export function saveCharacterState() {
    const characterName = document.getElementById('characterName').value;
    const pageNumber = getPageNumber();

    if (characterName.trim() === '') {
        document.getElementById('nameError').textContent = 'Character name is required.';
        return;
    }

    const stateData = {
        name: characterName,
        selectedAttributes: Object.keys(stateManager.selectedAttributes).map(shortForm => ({
            shortForm, 
            level: stateManager.selectedAttributes[shortForm] // Save each attribute's shortForm and level
        })),
        selectedSkills: stateManager.selectedSkills.map(skill => ({
            name: skill.name,
            skillMastery: skill.skillMastery // Save each skill's name and mastery level
        })),
        selectedMutations: stateManager.selectedMutations, // Mutation names remain the same
        selectedPolarisPowers: stateManager.selectedPolarisPowers, // Polaris Power names remain the same
        cpTotal: stateManager.cpTotal,
        apTotal: stateManager.apTotal,
        difficultyLevel: stateManager.difficultyLevel,
        spentCPOnAP: stateManager.spentCPOnAP,
        pageNumber: pageNumber
    };
    const stateJson = JSON.stringify(stateData);
    localStorage.setItem(characterName, stateJson);

    fetch('/save-character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: stateJson
    })
    .then(response => response.json())
    .then(data => {
        console.log('Character saved:', data);
    })
    .catch(error => {
        console.error('Error saving character:', error);
    });
}

export function loadCharacterState(characterName) {
    const savedState = localStorage.getItem(characterName);
    if (savedState) {
        const parsedState = JSON.parse(savedState);

        // Check if the required properties exist
        if (parsedState.selectedAttributes) {
            parsedState.selectedAttributes.forEach(attribute => {
                stateManager.addAttribute(attribute.shortForm, attribute.level);
            });
        } else {
            console.error("No selected attributes found for character", characterName);
        }

        if (parsedState.selectedSkills) {
            parsedState.selectedSkills.forEach(({ name, skillMastery }) => {
                const skill = stateManager.getSkill(name);
                if (skill) {
                    const clonedSkill = structuredClone(skill);
                    clonedSkill.skillMastery = skillMastery;
                    stateManager.addSkill(clonedSkill);
                } else {
                    console.error("Skill not found:", name);
                }
            });
        }

        if (parsedState.selectedMutations) {
            parsedState.selectedMutations.forEach(mutationName => {
                const mutation = stateManager.getMutation(mutationName);
                if (mutation) {
                    stateManager.addMutation(structuredClone(mutation));
                } else {
                    console.error("Mutation not found:", mutationName);
                }
            });
        }

        if (parsedState.selectedPolarisPowers) {
            parsedState.selectedPolarisPowers.forEach(powerName => {
                const power = stateManager.getPolarisPower(powerName);
                if (power) {
                    stateManager.addPolarisPower(structuredClone(power));
                } else {
                    console.error("Polaris power not found:", powerName);
                }
            });
        }

        // Restore other state properties
        stateManager.cpTotal = parsedState.cpTotal;
        stateManager.apTotal = parsedState.apTotal;
        stateManager.difficultyLevel = parsedState.difficultyLevel;
        stateManager.spentCPOnAP = parsedState.spentCPOnAP;

        const pageNumber = parsedState.pageNumber;
        console.log("Page Number:", pageNumber);
    } else {
        console.log("No character state found for", characterName);
    }
}

class StateManager {
    constructor() {
        if (StateManager.instance) {
            return StateManager.instance; // Enforce singleton pattern
        }

        // Initialize with imported data
        this.allAttributes = attributes;
        this.allSkills = allskills;
        this.skillOptions = skilloptions;
        this.allMutations = allmutations;
        this.allPolarisPowers = polarispowers;

        // Selected items
        this.selectedAttributes = {};
        attributes.forEach(attribute => {
            this.selectedAttributes[attribute.shortForm] = attribute.level;
        });
        this.selectedSkills = []; // [{ name: 'SkillName', skillMastery: 0 }]
        this.selectedMutations = []; // ['MutationName']
        this.selectedPolarisPowers = []; // ['PowerName']

        // Character points and settings
        this.cpTotal = 20;
        this.apTotal = 30;
        this.difficultyLevel = 1;
        this.spentCPOnAP = 0;

        StateManager.instance = this;
    }

    // Attribute methods
    addAttribute(shortForm, level) {
        this.selectedAttributes[shortForm] = level;
    }

    getAttribute(shortForm) {
        const level = this.selectedAttributes[shortForm];
        return this.allAttributes.find(attr => attr.shortForm === shortForm && attr.level === level);
    }

    updateAttributeLevel(shortForm, newLevel) {
        if (this.selectedAttributes[shortForm] !== undefined) {
            this.selectedAttributes[shortForm] = newLevel;
        }
    }

    // Skill methods
    addSkill(skillName, skillMastery = 0) {
        if (!this.selectedSkills.some(skill => skill.name === skillName)) {
            this.selectedSkills.push({ name: skillName, skillMastery });
        }
    }

    getSkill(skillName) {
        return this.allSkills.find(skill => skill.name === skillName) ||
               this.skillOptions.find(skill => skill.name === skillName);
    }

    updateSkillMastery(skillName, newMastery) {
        const skill = this.selectedSkills.find(skill => skill.name === skillName);
        if (skill) {
            skill.skillMastery = newMastery;
        }
    }

    // Add all skills to selectedSkills with initial mastery level
    addAllSkills() {
        this.allSkills.forEach(skill => {
            // Add each skill to selectedSkills with skillMastery set to 0 initially
            this.addSkill(skill.name, 0);
        });
    }

    // Mutation methods
    addMutation(mutationName) {
        if (!this.selectedMutations.includes(mutationName)) {
            this.selectedMutations.push(mutationName);
        }
    }

    getMutation(mutationName) {
        return this.allMutations.find(mutation => mutation.name === mutationName);
    }

    // Polaris Power methods
    addPolarisPower(powerName) {
        if (!this.selectedPolarisPowers.includes(powerName)) {
            this.selectedPolarisPowers.push(powerName);
        }
    }

    getPolarisPower(powerName) {
        return this.allPolarisPowers.find(power => power.name === powerName);
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



 
    // Method to reset all state values
    resetState() {
        this.cpTotal = 20;
        this.apTotal = 30;
        this.difficultyLevel = 1;
        this.spentCPOnAP = 0;
        this.selectedAttributes = {};
        this.selectedSkills = [];
        this.selectedMutations = [];
        this.selectedPolarisPowers = [];
    }
}
    // so add more getter and setter methods for other state variables like skills, mutations, etc.


const stateManager = new StateManager();
export default stateManager; // Export the singleton instance for use throughout the app
