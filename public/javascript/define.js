// Define the skill class
export class skill {
    constructor({
        name, description, firstAttribute, secondAttribute,
        hasPrerequisites, prerequisites, limitingskill, exclusiveskill,
        difficultskill, npskill, skillchoice, skilloptions, baseSkill, skillMastery, fullDescription, categories, doublecost
    }) {
        this.name = name;
        this.description = description;
        this.firstAttribute = firstAttribute;
        this.secondAttribute = secondAttribute;
        this.hasPrerequisites = hasPrerequisites;
        this.prerequisites = prerequisites;
        this.limitingskill = limitingskill;
        this.exclusiveskill = exclusiveskill;
        this.difficultskill = difficultskill;
        this.npskill = npskill;
        this.skillchoice = skillchoice;
        this.skilloptions = skilloptions;
        this.baseSkill = baseSkill;
        this._skillMastery = skillMastery;
        this.fullDescription= fullDescription
        this.categories=categories
        this.doublecost = doublecost


        // Debug log to ensure the skill is being created
        console.log(`Skill created: ${this.name}`);
    }

    // Getter for skill mastery
    get skillMastery() {
        return this._skillMastery;
    }

    // Setter for skill mastery
    set skillMastery(newValue) {
        this._skillMastery = newValue;
    }

    // Method to calculate base skill dynamically based on natural abilities of the two attributes
    calculateBaseSkill() {
        const firstAttr = attributes.find(attr => attr.shortForm === this.firstAttribute);
        const secondAttr = attributes.find(attr => attr.shortForm === this.secondAttribute);
        
        if (!firstAttr || !secondAttr) {
            console.error(`Attributes not found for skill: ${this.name}`);
            return null;
        }

        // Add the natural abilities of the first and second attributes to calculate base skill
        return firstAttr.naturalAbility + secondAttr.naturalAbility;
    }

    // Update the base skill based on the current attributes' natural abilities
    updateBaseSkill() {
        this.baseSkill = this.calculateBaseSkill();
    }

    // Method to calculate the skill bonus
    calculateSkillBonus() {
        let bonus = this.baseSkill + this._skillMastery;
        if (this.difficultskill || this.exclusiveskill) {
            bonus -= 3;
        }
        return bonus;    
    }
}