import { Attribute } from "./define";



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
    new Attribute("Luck", "LCK", "Represents a character's connection to fate. It allows rerolls, avoids bad events, and grants small bonuses from the GM. Luck ranges from 1 to 20.", 11) // Luck with value 11
];


console.log(attributes)