// Import all skills from skills.js

import {allskills} from './skills.js'; // Ensure the file path is correct
// Loop through each skill and calculate the skill bonus
allskills.forEach(skill => {
    console.log(`The skill bonus for ${skill.name} is: ${skill.calculateSkillBonus()}`);
});