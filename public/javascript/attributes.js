



export class Attribute {
    constructor(name, shortForm, description, level,) {
        this.name = name;
        this.shortForm = shortForm;
        this.description = description;
        this._level = level; // Private variable to store level
        this.naturalAbility = this.calculateNaturalAbility(); // Initialize natural ability
    }

   // Getter for level
get level() {
    return this._level < 3 ? 3 : this._level;
}

    // Setter for level (recalculates and stores naturalAbility)
    set level(newLevel) {
        this._level = newLevel;
        this.naturalAbility = this.calculateNaturalAbility(); // Update natural ability
    }

    // Method to calculate natural ability based on level
    calculateNaturalAbility() {
        if (this._level <= 3) return -4;
        if (this._level >= 4 && this._level <= 7) return this._level <= 4 ? -3 : -1;
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

// Initialize attributes
export let attributes = [
    new Attribute("Strength", "STR", "Measures physical might and muscular capabilities.", 7),
    new Attribute("Constitution", "CON", "Represents stamina, health, resistance to trauma, poisons, and extreme conditions.", 7),
    new Attribute("Coordination", "COO", "Indicates neuromuscular coordination, agility, balance, and movement precision.", 7),
    new Attribute("Adaptation", "ADA", "Represents the ability to adapt to environments, sudden changes, and survival reflexes.", 7),
    new Attribute("Perception", "PER", "Determines sensory acuity, alertness, and attention to environmental details.", 7),
    new Attribute("Intelligence", "INT", "Measures mental capacity, problem-solving ability, and aptitude for knowledge assimilation.", 7),
    new Attribute("Willpower", "WIL", "Determines mental resistance, focus under pressure, and tenacity in adversity.", 7),
    new Attribute("Presence", "PRE", "Measures aura, charisma, and ability to influence and build relationships.", 7),
    new Attribute("Luck", "LCK", "Represents a character's connection to fate. It allows rerolls, avoids bad events, and grants small bonuses.", 11) // Luck with value 11
];


console.log(attributes)