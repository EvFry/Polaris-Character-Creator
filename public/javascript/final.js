import { attributes } from './attributes.js';
import { allmutations } from './mutations.js';
import { allskills, skilloptions } from './skills.js';
import { polarisPowers } from './polarispowers.js';
import state from './state.js'
import { saveCharacterState,loadCharacterState } from './state.js';




document.addEventListener("DOMContentLoaded", function () {
        const characterState = JSON.parse(localStorage.getItem("characterState"));
        
        if (characterState) {
            loadCharacterState(characterState.characterName);
        } else {
            console.warn("⚠️ No saved character state found.");
        }
    
            const characterData = {
                selectedAttributes: {
                    STR: 10, // Example: Replace with dynamic data
                    CON: 12,
                    COO: 14,
                    ADA: 16,
                    PER: 13,
                    INT: 15,
                    WIL: 11,
                    PRE: 9,
                    LCK: 7
                },
                genotype: "Natural Hybrid", // Example: Replace with dynamic data
                selectedSkills: [
                    { name: "Swimming", skillMastery: 5, skillOptions: false },
                    { name: "Athletics", skillMastery: 4, skillOptions: false },
                    { name: "Melee Combat", skillMastery: 6, skillOptions: true }
                ],
                selectedPolarisPowers: [
                    { name: "Aquatic Form", masteryLevel: 3 },
                    { name: "Tidal Surge", masteryLevel: 5 }
                ]
            };

        

            // 1. Display all attributes and their current levels
            let attributesSection = "<div class='character-section'><h3>Attributes</h3>";
            attributes.forEach(attribute => {
                const level = characterData.selectedAttributes[attribute.shortForm] || 0;
                attributesSection += `<div class="character-detail"><strong>${attribute.name}:</strong> ${level}</div>`;
            });
            attributesSection += "</div>";

            // 2. Display genotype
            const genotypeSection = `
                <div class="character-section">
                    <h3>Genotype</h3>
                    <div class="character-detail"><strong>Genotype:</strong> ${characterData.genotype}</div>
                </div>
            `;

// 3 Get mutations
            let mutationSection = "<div class='character-section'><h3>Mutations</h3>";

            state.selectedMutations.forEach(mutationName => {
                const mutation = allmutations.find(m => m.name === mutationName);
        
        
            
                if (!mutation) return; // skip if not found

                mutationSection += `
                    <div class="character-detail">
                        <strong>${mutation.name}</strong> – <em>${mutation.cpCost} CP</em>
                        <button class="accordion">Details</button>
                        <div class="panel">
                            <p>${mutation.descriptionFull || "No description available."}</p>
                        </div>
                    </div>
                `;}

            );
            mutationSection += "</div>";

// 3. Display all skills and calculate mastery levels
let skillsSection = "<div class='character-section'><h3>Skills</h3>";

allskills.forEach(skill => {
    if (!skill.skillchoice) { // Skip skills where skillChoice is true
        console.log(`Calculating mastery for: ${skill.name}`);

        // Fetch the first and second attribute objects
        const firstAttr = attributes.find(a => a.shortForm === skill.firstAttribute);
        const secondAttr = attributes.find(a => a.shortForm === skill.secondAttribute);

        if (!firstAttr || !secondAttr) {
            console.error(`Error: Missing attributes for skill ${skill.name}`);
            return; // Skip this skill if attributes are missing
        }

        // Get their natural ability values
        const firstNaturalAbility = firstAttr.naturalAbility;
        const secondNaturalAbility = secondAttr.naturalAbility;

        console.log(`- First Attribute: ${skill.firstAttribute}, Natural Ability: ${firstNaturalAbility}`);
        console.log(`- Second Attribute: ${skill.secondAttribute}, Natural Ability: ${secondNaturalAbility}`);

        // Update base skill using the calculated natural abilities
        skill.baseSkill = firstNaturalAbility + secondNaturalAbility;
        console.log(`-> Base Skill for ${skill.name}: ${skill.baseSkill}`);

        // Calculate mastery level
        const finalBonus = skill.calculateSkillBonus();
        console.log(`-> Total Bonus for ${skill.name}: ${finalBonus}`);

        // Add to the display section
        skillsSection += `
            <div class="character-detail">
                <strong>${skill.name}:</strong> Base Skill ${skill.baseSkill}, Mastery Level ${skill._skillMastery},Final Bonus ${finalBonus}
            </div>
        `;
    }characterState.selectedSkills.forEach(skill => {
        console.log(`Calculating mastery for: ${skill.name}`);

        // Fetch the first and second attribute objects
        const firstAttr = attributes.find(a => a.shortForm === skill.firstAttribute);
        const secondAttr = attributes.find(a => a.shortForm === skill.secondAttribute);

        if (!firstAttr || !secondAttr) {
            console.error(`Error: Missing attributes for skill ${skill.name}`);
            return; // Skip this skill if attributes are missing
        }

        // Get their natural ability values
        const firstNaturalAbility = firstAttr.naturalAbility;
        const secondNaturalAbility = secondAttr.naturalAbility;

        console.log(`- First Attribute: ${skill.firstAttribute}, Natural Ability: ${firstNaturalAbility}`);
        console.log(`- Second Attribute: ${skill.secondAttribute}, Natural Ability: ${secondNaturalAbility}`);

        // Update base skill using the calculated natural abilities
        skill.baseSkill = firstNaturalAbility + secondNaturalAbility;
        console.log(`-> Base Skill for ${skill.name}: ${skill.baseSkill}`);

        // Calculate mastery level
        const finalBonus = skill.calculateSkillBonus();
        console.log(`-> Total Bonus for ${skill.name}: ${finalBonus}`);

        // Add to the display section
        skillsSection += `
            <div class="character-detail">
                <strong>${skill.name}:</strong> Base Skill ${skill.baseSkill}, Mastery Level ${skill._skillMastery}, Final Bonus ${finalBonus}
            </div>
        `;
    
});




            // 4. Calculate the mastery level of all skills in selected skills



});


let polarisPowersSection = "<div class='character-section'><h3>Polaris Powers</h3>";

// Iterate over selectedPolarisPowers
characterState.selectedPolarisPowers.forEach(selectedPower => {
    if (selectedPower.chosen === true) {  // Only display powers where chosen is true
        console.log(`Calculating mastery for Polaris Power: ${selectedPower.name}`);

        // Get the full power data using state.getPolarisPower(powerName)
        const fullPowerData = state.getPolarisPower(selectedPower.name);  // Fetch the full power details by name

        // Check if fullPowerData exists
        if (fullPowerData) {
            // Assuming fullPowerData contains the necessary attributes
            // For example, it might contain firstAttribute and secondAttribute
            const firstAttr = attributes.find(a => a.shortForm === fullPowerData.firstAttribute);
            const secondAttr = attributes.find(a => a.shortForm === fullPowerData.secondAttribute);

            if (!firstAttr || !secondAttr) {
                console.error(`Error: Missing attributes for Polaris Power ${selectedPower.name}`);
                return; // Skip this power if attributes are missing
            }

            // Get their natural ability values
            const firstNaturalAbility = firstAttr.naturalAbility;
            const secondNaturalAbility = secondAttr.naturalAbility;

            console.log(`- First Attribute: ${fullPowerData.firstAttribute}, Natural Ability: ${firstNaturalAbility}`);
            console.log(`- Second Attribute: ${fullPowerData.secondAttribute}, Natural Ability: ${secondNaturalAbility}`);

            // Calculate base skill using the calculated natural abilities
            fullPowerData.baseSkill = firstNaturalAbility + secondNaturalAbility;
            console.log(`-> Base Skill for ${fullPowerData.name}: ${fullPowerData.baseSkill}`);

            // Assuming calculateSkillBonus is a method for calculating the bonus for the Polaris Power
            const finalBonus = fullPowerData.calculateSkillBonus();
            console.log(`-> Total Bonus for ${fullPowerData.name}: ${finalBonus}`);

            // Add the power name, description, and calculated bonus to the section
            polarisPowersSection += `
                <div class="character-detail">
                    <strong>${fullPowerData.name}:</strong> Mastery Level ${finalBonus}
                    <p>${fullPowerData.description}</p> <!-- Display the description -->
                    <p>Bonus: ${finalBonus}</p>  <!-- Display the calculated bonus -->
                </div>
            `;
        } else {
            console.error(`Polaris Power not found: ${selectedPower.name}`);
        }
    }
});

            // 6. Display all the skill and power information
            document.getElementById("characterOptions").innerHTML = `
                ${attributesSection}
                ${genotypeSection}
                ${mutationSection}
                ${skillsSection}
             
                ${polarisPowersSection}
            `;
        
})
