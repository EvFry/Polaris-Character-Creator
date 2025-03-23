
// Define the skill class
export class Skill {
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

export class Mutation {
    constructor(name, cpCost, hasSkill, descriptionShort, descriptionFull,symbiotic) {
        this.name = name;  // Name of the mutation
        this.cpCost = cpCost;  // Character Point cost
        this.hasSkill = hasSkill;  // Boolean: Does this mutation grant a skill?
        this.descriptionShort = descriptionShort;  // Brief description
        this.descriptionFull = descriptionFull;  // Detailed description
        this.symbiotic = symbiotic
    }
}

export class Attribute {
    constructor(name, shortForm, description, level) {
        this.name = name;
        this.shortForm = shortForm;
        this.description = description;
        this._level = level; // Private variable to store level
        this.naturalAbility = this.calculateNaturalAbility(); // Initialize natural ability
    }

    // Getter for level
    get level() {
        return this._level;
    }

    // Setter for level (recalculates and stores naturalAbility)
    set level(newLevel) {
        this._level = newLevel;
        this.naturalAbility = this.calculateNaturalAbility(); // Update natural ability
    }

    // Method to calculate natural ability based on level
    calculateNaturalAbility() {
        if (this._level >= 3 && this._level <= 4) return this._level === 3 ? -4 : -3;
        if (this._level >= 5 && this._level <= 7) return -1;
        if (this._level >= 8 && this._level <= 9) return 0;
        if (this._level >= 10 && this._level <= 12) return 1;
        if (this._level >= 13 && this._level <= 15) return 2;
        if (this._level >= 16 && this._level <= 18) return 3;
        if (this._level >= 19 && this._level <= 21) return 4;
        if (this._level >= 22 && this._level <= 24) return 5;
        if (this._level === 25) return 6;
        return null;
    }
}

export class Genotype {
    constructor(name, cpCost, hasSkill, descriptionShort, descriptionFull,attirbutechanges) {
        this.name = name;  // Name of the mutation
        this.cpCost = cpCost;  // Character Point cost
        this.hasSkill = hasSkill;  // Boolean: Does this mutation grant a skill?
        this.descriptionShort = descriptionShort;  // Brief description
        this.descriptionFull = descriptionFull;  // Detailed description
        this.attributechanges=attirbutechanges;
    }
}