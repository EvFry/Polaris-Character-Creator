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
    let characterNameElement = document.getElementById('characterName');
let characterName = characterNameElement && characterNameElement.value.trim()  
    ? characterNameElement.value.trim()  
    : (() => {  
        const savedState = localStorage.getItem("characterState");  
        if (savedState) {  
            const parsedState = JSON.parse(savedState);  
            return parsedState.name || "Unknown";  
        }  
        return "Unknown";  
    })();
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
        pageNumber: pageNumber,
        polarisEffect: stateManager.getPolarisEffect(),
    };
    const stateJson = JSON.stringify(stateData);
    localStorage.setItem("characterState", stateJson);
    
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
    const savedState = localStorage.getItem("characterState");

    if (savedState) {
        const parsedState = JSON.parse(savedState);

        console.log("🟢 Loaded State from Storage:", JSON.stringify(parsedState, null, 2));

    // ✅ Load Character Name into CP Tracker
const characterNameElement = document.getElementById("cp-character-name");

if (characterNameElement) {
    if (parsedState.name) {
        characterNameElement.textContent = parsedState.name;
    } else {
        console.warn("⚠️ No character name found in saved state.");
        characterNameElement.textContent = "Unknown";
    }
} else {
    console.warn("⚠️ Element with id 'cp-character-name' not found.");
}


        // 1️⃣ Load selected attributes into stateManager & update global attributes array
        if (parsedState.selectedAttributes && parsedState.selectedAttributes.length > 0) {
            parsedState.selectedAttributes.forEach(({ shortForm, level }) => {
                stateManager.addAttribute(shortForm, level);
                const existingAttribute = attributes.find(attr => attr.shortForm === shortForm);
                if (existingAttribute) {
                    existingAttribute.level = level;
                }
            });
        } else {
            console.warn("⚠️ No selected attributes found for character", characterName, "Using default attributes.");
        
            // Use default attributes
            attributes.forEach(({ shortForm, level }) => {
                stateManager.addAttribute(shortForm, level);
            });
        }
        

        // 2️⃣ Load selected skills
        if (parsedState.selectedSkills) {
            parsedState.selectedSkills.forEach(({ name, skillMastery }) => {
                const skill = stateManager.getSkill(name);
                if (skill) {
                    const clonedSkill = structuredClone(skill);
                    clonedSkill.skillMastery = skillMastery;
                    stateManager.addSkill(clonedSkill);
                } else {
                    console.error("❌ Skill not found:", name);
                }
            });
        
// 3️⃣ Load selected mutations
if (parsedState.selectedMutations && Array.isArray(parsedState.selectedMutations)) {
    console.log("✅ Restoring Mutations:", parsedState.selectedMutations);

    // Clear the existing selected mutations before restoring the new ones
    stateManager.selectedMutations = []; // Reset the existing list

    parsedState.selectedMutations.forEach(mutationName => {
        const mutation = stateManager.getMutation(mutationName);
        if (mutation) {
            stateManager.addMutation(structuredClone(mutation));
            stateManager.selectedMutations.push(mutationName); // Add to selectedMutations array
            console.log(`✅ Added mutation: ${mutationName}`);
        } else {
            console.error("❌ Mutation not found:", mutationName);
        }
    });
} else {
    console.warn("⚠️ No selected mutations found in saved state.");
}

// 4️⃣ Load selected Polaris Powers
if (parsedState.selectedPolarisPowers && Array.isArray(parsedState.selectedPolarisPowers)) {
    parsedState.selectedPolarisPowers.forEach(powerData => {
        if (powerData && powerData.name) {
            console.log("✅ Restoring Polaris Power:", powerData);

            // Fetch the existing powers for the given grouping (if any)
            const existingPowers = stateManager.getSelectedPolarisPower(powerData.grouping) || [];
            console.log(`Existing Powers for grouping "${powerData.grouping}":`, existingPowers);

            // Check if the current power already exists in the list for that grouping
            const powerAlreadyExists = existingPowers.some(existingPower => 
                existingPower.name === powerData.name && existingPower.grouping === powerData.grouping
            );

            if (!powerAlreadyExists) {
                // If the power doesn't exist, add it using the addPolarisPower method
                stateManager.addPolarisPower(powerData);
                console.log(`✅ Added power to ${powerData.grouping}:`, powerData);
            } else {
                console.log(`⚠️ Power '${powerData.name}' already exists in ${powerData.grouping}, not adding it again.`);
            }
        } else {
            console.error("❌ Invalid Polaris Power Data:", powerData);
        }
    });

    // Debugging: Log the final selected Polaris powers after loading all the powers
    const finalPowers = stateManager.getSelectedPolarisPower();
    console.log("Final list of selected Polaris Powers:", finalPowers);
} else {
    console.error("❌ No selected Polaris Powers found in saved state.");
}

        



      // ✅ Restore polarisEffect if it exists in saved data
      if (parsedState.polarisEffect !== undefined) {
        stateManager.setPolarisEffect(parsedState.polarisEffect);
    } else {
        console.warn("⚠️ No polarisEffect found in saved state, defaulting to 0.");
    }
} else {
    console.log("❌ No character state found.");
}
        // 5️⃣ Restore other state properties
        console.log("📌 Before Assigning to StateManager:", {
            cpTotal: parsedState.cpTotal,
            apTotal: parsedState.apTotal,
            difficultyLevel: parsedState.difficultyLevel,
            spentCPOnAP: parsedState.spentCPOnAP,
        });

        stateManager.cpTotal = parsedState.cpTotal;
        stateManager.apTotal = parsedState.apTotal;
        stateManager.difficultyLevel = parsedState.difficultyLevel;
        stateManager.spentCPOnAP = parsedState.spentCPOnAP;

        console.log("✅ After Assigning to StateManager:", {
            cpTotal: stateManager.cpTotal,
            apTotal: stateManager.apTotal,
            difficultyLevel: stateManager.difficultyLevel,
            spentCPOnAP: stateManager.spentCPOnAP,
        });

        console.log("Character state loaded for:", parsedState.name || "Unknown");
    } else {
        console.log("❌ No character state found.");
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
        this.selectedSkills = [];
        this.selectedMutations = [];
        this.selectedPolarisPowers = [];

        // Character points and settings
        this.cpTotal = 20;
        this.apTotal = 30;
        this._difficultyLevel = 1;  // 👈 Private property for tracking difficulty level
        this.spentCPOnAP = 0;
        this.polarisEffect = 0;

        StateManager.instance = this;

        Object.defineProperty(this, "difficultyLevel", {
            get: function() {
                console.log("👀 Getting difficultyLevel:", this._difficultyLevel);
                return this._difficultyLevel;
            },
            set: function(value) {
                // Log where it's blocked
                console.trace("🚨 Attempting to change difficultyLevel:", this._difficultyLevel, "➡", value);
                
                if (this._difficultyLevel !== 1 || value !== 1) {
                    console.log("✅ Changing difficultyLevel:", this._difficultyLevel, "➡", value);
                    this._difficultyLevel = value;
                } else {
                    console.warn("❌ Blocked change to default difficulty (1)");
                    console.trace("🔍 Blocked at:"); // Shows where the setter is being called
                }
            }
        });
        
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
        // Only add the skill to selectedSkills if mastery is greater than 0.
        if (skillMastery > 0) {
            if (!this.selectedSkills.some(skill => skill.name === skillName)) {
                this.selectedSkills.push({ name: skillName, skillMastery });
            }
        } else {
            // If mastery is 0, remove the skill from selectedSkills if it exists.
            this.selectedSkills = this.selectedSkills.filter(skill => skill.name !== skillName);
        }
    }
    getSkill(skillName) {
        return this.allSkills.find(skill => skill.name === skillName) ||
               this.skillOptions.find(skill => skill.name === skillName);
    }

    updateSkillMastery(skillName, newMastery) {
        const index = this.selectedSkills.findIndex(skill => skill.name === skillName);
        if (newMastery > 0) {
            if (index === -1) {
                // If not already selected, add it with the new mastery.
                this.selectedSkills.push({ name: skillName, skillMastery: newMastery });
            } else {
                // Update the mastery for the already selected skill.
                this.selectedSkills[index].skillMastery = newMastery;
            }
        } else {
            // If newMastery is 0, remove the skill from selectedSkills.
            if (index !== -1) {
                this.selectedSkills.splice(index, 1);
            }
        }
    }
    
    // Mutation methods
    addMutation(mutationName) {
        if (!this.selectedMutations.includes(mutationName)) {
            this.selectedMutations.push(mutationName);
        }
    }

    removeMutation(mutationName) {
        const index = this.selectedMutations.indexOf(mutationName);
        if (index !== -1) {
            this.selectedMutations.splice(index, 1);
        }
    };
    getMutation(mutationName) {
        return this.allMutations.find(mutation => mutation.name === mutationName);
    }
    updateSelectedPolarisPower(displayId, powerData, allRolledPowers = []) {
        console.log(`Updating selected Polaris power for ${displayId}:`, powerData);
    
        // Ensure selectedPolarisPowers is an array
        if (!Array.isArray(this.selectedPolarisPowers)) {
            this.selectedPolarisPowers = [];
        }
    
        // Clean up any powers with empty, null, or undefined names
        this.selectedPolarisPowers = this.selectedPolarisPowers.filter(power => power.name && power.name.trim() !== "");
    
        // Define the maximum number of entries allowed for each grouping
        const maxEntries = {
            "polaris-powers": 1,
            "first-power": 1,
            "second-power": 2,
            "third-power": 3,
            "learned": 99 // Learned can have less than the max, handled below
        };
    
        // If the grouping is invalid, return early
        if (!maxEntries.hasOwnProperty(displayId)) {
            console.warn(`❌ Invalid grouping: ${displayId}`);
            return;
        }
    
        // 1. Remove all previous powers with the same grouping (mark them as 'chosen: false')
        this.selectedPolarisPowers.forEach((power) => {
            if (power.grouping === displayId) {
                power.chosen = false; // Unmark the chosen status for the grouping
            }
        });
    
        // 2. Remove duplicates within the same grouping (remove the old entry)
        this.selectedPolarisPowers = this.selectedPolarisPowers.filter((power) => {
            return !(power.name === powerData.name && power.grouping === displayId); // Remove old instances
        });
    
        // 3. Add the new selected power and set it to 'chosen: true'
        this.selectedPolarisPowers.push({
            ...powerData,
            chosen: true // Set the new power as chosen
        });
    
        // 4. Ensure the correct number of entries per grouping
        this.selectedPolarisPowers = this.selectedPolarisPowers.filter((power) => {
            const maxAllowed = maxEntries[power.grouping];
            if (maxAllowed) {
                // Get the powers of the current grouping
                const groupedPowers = this.selectedPolarisPowers.filter(p => p.grouping === power.grouping);
                // If the number of powers exceeds the max allowed, remove the oldest (first) entry
                if (groupedPowers.length > maxAllowed) {
                    this.selectedPolarisPowers = this.selectedPolarisPowers.filter(p => p !== groupedPowers[0]);
                }
            }
            return true;
        });
    
        // 5. Add any remaining rolled powers to the list
        allRolledPowers.forEach((power) => {
            // Only add powers that are not already in selectedPolarisPowers and have a non-empty name
            if (
                !this.selectedPolarisPowers.some(p => p.name === power.name && p.grouping === displayId) &&
                power.name.trim() !== ""
            ) {
                this.selectedPolarisPowers.push({
                    name: power.name,
                    mastery: power.mastery || 0,
                    grouping: displayId,
                    chosen: false // Mark as not chosen
                });
            }
        });
    
        // Log the updated selected Polaris powers for debugging
        console.log("Updated selected Polaris powers:", this.selectedPolarisPowers);
    }
    
    
    
    
    
    getSelectedPolarisPower(category) {
        if (!this.selectedPolarisPowers || !Array.isArray(this.selectedPolarisPowers)) {
            console.error("selectedPolarisPowers is not defined or not an array.");
            return [];
        }
    
        console.log("Filtering by category:", category);
        console.log("Selected Polaris Powers data:", this.selectedPolarisPowers);
    
        const filteredPowers = this.selectedPolarisPowers.filter(power => power.grouping === category);
        console.log(`Filtered Powers for ${category}:`, filteredPowers);
    
        return filteredPowers.map(power => ({
            name: power.name,
            mastery: power.mastery || 0,
            grouping: power.grouping,
            chosen: power.chosen || false
        }));
    }
    
    getDetailedSelectedPolarisPowers() {
        if (!Array.isArray(this.selectedPolarisPowers)) {
            console.error("❌ selectedPolarisPowers is not an array.");
            return [];
        }
    
        console.log("🔍 Fetching detailed Polaris powers from selectedPolarisPowers...");
    
        // Map over all selected Polaris powers and retrieve their details
        return this.selectedPolarisPowers.map(selectedPower => {
            // Find all matching powers from `this.allPolarisPowers` by name
            const powerDetailsArray = this.allPolarisPowers.filter(power => power.name === selectedPower.name);
    
            if (powerDetailsArray.length > 0) {
                return powerDetailsArray.map(powerDetails => {
                    // Return detailed power object for each match
                    return {
                        name: powerDetails.name,
                        fullDescription: powerDetails.fullDescription,
                        categories: powerDetails.categories,
                        grouping: selectedPower.grouping,
                        chosen: selectedPower.chosen || false
                    };
                });
            } else {
                console.warn(`⚠️ No Polaris power details found for: ${selectedPower.name}`);
                return null; // Return null if no matching powers found
            }
        }).flat() // Flatten the array to return all found powers in a single array
        .filter(power => power !== null); // Remove any null values (if any)
    };
    
    

// Add a new Polaris Power (ensures no duplicates)
addPolarisPower(powerData) {
    console.log(`Adding Polaris Power:`, powerData);

    // Check if a power with the same name and grouping already exists
    const powerAlreadyExists = this.selectedPolarisPowers.some(p => 
        p.name === powerData.name && p.grouping === powerData.grouping
    );

    if (!powerAlreadyExists) {
        // If the power doesn't exist, add it to the selectedPolarisPowers array
        this.selectedPolarisPowers.push(powerData);
        console.log(`✅ Power '${powerData.name}' added to the '${powerData.grouping}' grouping.`);
    } else {
        console.warn(`⚠️ Power '${powerData.name}' already exists in the '${powerData.grouping}' grouping, not adding it again.`);
    }

    console.log("Updated selectedPolarisPowers:", this.selectedPolarisPowers);
}


// Retrieve a Polaris Power by name
getPolarisPower(powerName) {
    return this.selectedPolarisPowers.find(power => power.name === powerName) || null;
}
    

    // ✅ Getter for polarisEffect
    getPolarisEffect() {
        return this.polarisEffect;
    }

    // ✅ Setter for polarisEffect (ensures value is within 0-4)
    setPolarisEffect(value) {
        if ([0, 1, 2, 3, 4].includes(value)) {
            console.log(`✅ Setting polarisEffect to: ${value}`);
            this.polarisEffect = value;
        } else {
            console.error(`❌ Invalid polarisEffect value: ${value}`);
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
    // Only update if the new level is different from the current difficulty level
    if ([1, 2, 3].includes(newLevel)) {
        if (this.difficultyLevel !== newLevel) {
            console.log("✅ Changing difficultyLevel to:", newLevel);
            this.difficultyLevel = newLevel; // This will now use the setter
        } else {
            console.log("⚠️ No change to difficultyLevel, it's already at:", newLevel);
        }
    } else {
        console.error("Invalid difficulty level:", newLevel);
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
