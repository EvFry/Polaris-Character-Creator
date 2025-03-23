
import { Skill }  from "./define.js";

export function randomPower(powerCount = 1) {
    let selectedPowers = [];

    // Define power table
    const powerTable = [
        { range: [1, 2], power: "Blob of Destruction" },
        { range: [3, 4], power: "Change in Mass" },
        { range: [5, 6], power: "Change in Pressure" },
        { range: [7, 8], power: "Change in Temperature" },
        { range: [9, 11], power: "Crossing" },
        { range: [12, 13], power: "Deadly Whirlpool" },
        { range: [14, 15], power: "Disintegration" },
        { range: [16, 18], power: "Disruption of Reality" },
        { range: [19, 21], power: "Electromagnetic Pulse" },
        { range: [22, 24], power: "Energy Bolts" },
        { range: [25, 26], power: "Energy Drain" },
        { range: [27, 29], power: "Flux Beast" },
        { range: [30, 31], power: "Force Barrier" },
        { range: [32, 33], power: "Force Field" },
        { range: [34, 35], power: "Gravity Sphere" },
        { range: [36, 37], power: "Jamming" },
        { range: [38, 39], power: "Lightning" },
        { range: [40, 42], power: "Mental Imprisonment" },
        { range: [43, 44], power: "Mind Control" },
        { range: [45, 46], power: "Molecular Barrier" },
        { range: [47, 48], power: "Molecular Disruption" },
        { range: [49, 50], power: "Molecular Field" },
        { range: [51, 52], power: "Molecular Healing" },
        { range: [53, 55], power: "Molecular Regeneration" },
        { range: [56, 57], power: "Nightmare" },
        { range: [58, 59], power: "Organic Repulsion Sphere" },
        { range: [60, 61], power: "Pacification/Enragement" },
        { range: [62, 63], power: "Premonitions" },
        { range: [64, 65], power: "Psychic Attack" },
        { range: [66, 67], power: "Psychic Barrier" },
        { range: [68, 70], power: "Psychic Bolts" },
        { range: [71, 72], power: "Psychic Dagger" },
        { range: [73, 74], power: "Psychic Field" },
        { range: [75, 76], power: "Psychic Healing" },
        { range: [77, 78], power: "Psychic Sensitivity" },
        { range: [79, 80], power: "Psychic Shock Waves" },
        { range: [81, 82], power: "Shock Waves" },
        { range: [83, 84], power: "Soul Eater" },
        { range: [85, 86], power: "Soundscan" },
        { range: [87, 88], power: "Telekinesis" },
        { range: [89, 90], power: "Teleportation" },
        { range: [91, 92], power: "Temporal Shift" },
        { range: [93, 94], power: "Temporal Sphere" },
        { range: [95, 96], power: "Terror Sphere" },
        { range: [97, 98], power: "Whirlpool" }
    ];

    // Select the requested number of powers
    for (let i = 0; i < powerCount; i++) {
        let selectedPower;
        
        do {
            const roll = Math.floor(Math.random() * 100) + 1;
            console.log("Rolled for power", i + 1, ":", roll);

            // Find the power based on the roll
            const powerEntry = powerTable.find(entry => roll >= entry.range[0] && roll <= entry.range[1]);

            if (!powerEntry) {
                console.log("No power found for roll:", roll); // Should never happen if table is correct
                return null;
            }

            console.log("Found power entry:", powerEntry);

            // Ensure no duplicate powers are selected
            if (!selectedPowers.includes(powerEntry.power)) {
                selectedPower = powerEntry.power;
                selectedPowers.push(selectedPower);
                break; // Exit the loop if a unique power has been selected
            } else {
                console.log("Duplicate power detected, rerolling...");
            }

        } while (true); // Continue until a unique power is selected
    }

    // Normalize power names for case insensitivity
    const normalizedPowerNames = selectedPowers.map(name => name.toLowerCase().trim());

    // Retrieve full details from polarispowers array (including name, fullDescription, categories)
    const powerDetails = normalizedPowerNames.map(powerName => {
        return polarispowers.find(power => power.name.toLowerCase().trim() === powerName);
    });

    if (powerDetails.includes(undefined)) {
        console.log("Some power details not found:", selectedPowers);
        return null;
    }

    console.log("Final selected powers:", powerDetails);

    // Map and return the power details, now including name, fullDescription, and categories
    return powerDetails.map(power => ({
        name: power.name,
        fullDescription: power.fullDescription,
        categories: power.categories
    }));
}


export let polarispowers =[
 new  Skill({
    name: "Blob of Destruction",
    description: "Unleash a dark, gelatinous entity that consumes all life in its path. If controlled, it follows the user’s commands; if not, it attacks indiscriminately.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This appalling power allows the user to create a tear in reality and release a dark gelatinous blob that destroys anything that is living. If the user controls the power, they can give orders to the creature as long as the effect lasts. The blob of destruction is indestructible and moves slowly but relentlessly. Everything in its path suffers devastating physical damage, and its wounds are permanent due to Molecular Breakdown.\n\nIf the user does not control this power, the creature appears at an unpredictable distance and attacks anything that moves while the effect lasts.",
    categories: {
        "Maximum Distance of Creature's Appearance": "5 meters +/- Success Modifier",
        "Size of the Creature": "1 m² +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Change in Mass",
    description: "Alter the mass of a target without changing its physical size, either increasing its weight to immobilize it or decreasing it to enhance mobility.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to increase or decrease the mass of an individual or object. The weight of the target can be modified by a maximum value equal to (the intensity of the phenomenon) x 10 kg. The target does not change physically and keeps the same size.\n\nIn the case of a mass increase, the GM may reduce the target’s movement. If the intensity of the phenomenon exceeds the target’s Strength, they become pinned and must resist or suffer crushing damage. A decrease in mass can increase movement, and if reduced to zero, the target may float.\n\nIf uncontrolled, everything in range is affected randomly each round, including the user.",
    categories: {
        "Intensity of the Phenomenon": "Success Margin of the Test (or Failure Margin for accidental release)",
        "Range": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Change in Pressure",
    description: "Manipulate the surrounding pressure, increasing or decreasing it within a defined area, affecting all living and non-living things within range.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The pressure is increased or decreased by the equivalent of 100 meters’ depth for each point of the phenomenon’s intensity, in a spherical Area of Effect.\n\nIf uncontrolled, everything within range is affected at random each round, including the user. The GM rolls 1D10 every round—on an even result, pressure increases; on an odd result, it decreases. This can have severe consequences on living organisms, as detailed under 'Other Sources of Physical Damage' (page 238).",
    categories: {
        "Intensity of the Phenomenon": "5 +/- Success Modifier",
        "Area of Effect": "10 meters in diameter +/- (10 m x Success Modifier)",
        "Range": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Change in Temperature",
    description: "Alter the ambient temperature within a defined area, either increasing or decreasing it with potentially harmful effects.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The temperature is increased or decreased by 2 ˚C for each point of power intensity within the spherical Area of Effect.\n\nIf uncontrolled, everything within range is affected at random each round, including the user. The GM rolls 1D10 every round—on an even result, temperature increases; on an odd result, it decreases. This can have various effects on the environment and living beings, depending on the severity of the change.",
    categories: {
        "Intensity of the Phenomenon": "Success Margin of the Test (or Failure Margin for accidental release)",
        "Area of Effect": "10 meters in diameter +/- (10 m x Success Modifier)",
        "Range": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Crossing",
    description: "This power creates a crack between our world and the Polaris Flux, allowing for instant travel between two points on the globe, but with associated risks.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a crack between our world and that of the Polaris Flux. It is possible to pass through this crossing to move from one point on the globe to another instantly. The crossing stays open both ways for the duration of the effect and accepts living beings the size of humans. If the power is controlled, the character chooses his destination (he needs to have been to this location before). Using a crossing, an individual travels through the Flux to go from one point to another, but this entails certain dangers. First of all, when a crossing opens, there is always a risk that it allows a creature from the Flux to enter our world. On each turn, the GM rolls 1D10. If she gets a 1, a creature appears. Then roll 2D10 on the following table:\n\n2–15 Flux beast.\n16–17 Soul eater.\n18–19 Blob of destruction.\n20 Entity (see The Polaris Flux, CRB page 265).\n\nThe creature will have a power equal to 2D10 and will stay for 1D10 Combat Rounds.\n\nFinally, each character who uses the crossing can physically get lost in the Flux. You have to perform a Willpower Test to avoid doing so. If the power is controlled, the user receives a bonus on this Test equal to his Success Modifier. Any individual failing this Willpower Test loses his way in the Flux. You must then roll 2D10 to know what is happening to him:\n\n2–11 Reappears where the crossing opened 1D10 minutes later.\n12–15 Possessed.\n16–17 Made prisoner by The Other (see Premonitions).\n18–19 Reappears somewhere else in the world.\n20 Lost forever (he may be retrieved by a character deliberately diving into the Flux).\n\nA possessed character reappears as if nothing has happened (1–5 on 1D10) or 1D100 minutes later (6–10 on 1D10). Any individual using a crossing can voluntarily choose to physically dive into the Polaris Flux. Possession, diving into the Flux, and retrieving a character lost in the Flux, are detailed in section The Polaris Flux, CRB page 265.\n\nIf the power is not controlled, the destination is completely unknown (note that you need only avoid rushing into the crossing to avoid taking risks).",
    categories: {
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect": "Effects range from the center of the Area of Effect, 15 meters +/- Success Modifier",
        "Creature Appearance Chance": "1D10 roll, with a 1 causing a creature to appear"
    }
}),
    
 new  Skill({
    name: "Deadly Whirlpool",
    description: "This power creates a moving whirlpool of crackling black energy that damages anything it contacts.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a moving whirlpool of crackling black energy. Everything that comes into contact with this phenomenon will suffer Physical Damage. There are no armor types that can protect against this effect. If the effect is not under the user’s control, its direction is randomly determined by rolling 1D10 (1–2: doesn’t move, 3: east, 4: west, 5: north, 6: south, 7: northeast, 8: southeast, 9: southwest, 10: northwest).",
    categories: {
        "Physical Damage": "2D10 +/- Success Modifier",
        "Area of Effect": "5 meters +/- Success Modifier",
        "Max. Range from the center": "15 meters +/- Success Modifier",
        "Movement": "5 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }   
}),
 new  Skill({
    name: "Disruption of Reality",
    description: "This power distorts reality, causing disturbances in senses and actions within a certain area.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "Reality seems distorted under the effect of this disruption. Distances can no longer be estimated, senses are disturbed, etc. For the whole duration of the power, every Action performed in the spherical Area of Effect suffers a penalty.",
    categories: {
        "Penalty to actions": "-1 - Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Max. Range from the center": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Disintegration",
    description: "This power temporarily disintegrates matter, making it immaterial and allowing passage through obstacles.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows a character to temporarily disintegrate matter. Within the Area of Effect, the character can disintegrate living beings whose Constitution attribute is lower than or equal to the intensity of the phenomenon, or inanimate objects whose weight is less than or equal to five times the intensity of the phenomenon. A disintegrated object is initially still visible, but it is no longer in a solid state. The matter has become immaterial. It is therefore possible to pass through any obstacle (except energy fields). No attack can harm it, except energy weapons. An immaterial creature can fly. A matter Reintegra (a Genetician device) makes it possible to instantly reintegrate. Alternatively, a character can try to use this power in his turn to automatically reverse the process.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Area of Effect": "5 meters +/- Success Modifier",
        "Max. Range from the center": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Energy Bolts",
    description: "This power creates energy bolts that inflict physical damage, which can be spread over multiple targets.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a number of energy bolts that inflict physical damage. If the power is controlled, the PC chooses his targets as long as he can see them. The attack Test is performed with the Energy bolts Skill. Armors and protections are usually effective against this power. If the power is not controlled, the bolts randomly strike at 1D4 target(s) each Combat Round. An attack Test must be performed with a Skill Level of 10 + Success Modifier.",
    categories: {
        "Number of energy bolts": "1 + Success Modifier",
        "Damage": "2D10, +2 points per additional bolt",
        "Range": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Electromagnetic Pulse",
    description: "This power unleashes an electromagnetic wave through a wide area, affecting all electronic devices within its range.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to unleash an electromagnetic wave through the Area of Effect. A Breakdown Test must be carried out for all electronic devices in the area (see the chapter on Gear in CRB2, page 8).",
    categories: {
        "EMP Attack": "The penalty on the Breakdown Test is equal to the Success Modifier.",
        "Area of Effect": "100 meters in diameter +/- (100 m x Success Modifier).",
        "Range": "100 meters +/- (100 m x Success Modifier)."
    }
}),
 new  Skill({
    name: "Energy Drain",
    description: "This power drains the energy from all sources within the affected area, rendering them powerless for the duration.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power cancels out any energy inside the Area of Effect for the duration of the phenomenon.",
    categories: {
        "Area of Effect": "15 meters in diameter +/- (10 m x Success Modifier).",
        "Max. Range": "15 meters +/- Success Modifier.",
        "Duration": "5 Combat Rounds +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Flux Beast",
    description: "This power summons a terrifying creature from the Polaris Flux to wreak havoc on anything in its path.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This terrifying power allows the creation of a crossing between our world and the dimension of the Polaris Flux (for some, it only allows the materialization of an individual’s imagination). There is a large variety of Flux beasts, but they all have a demonic appearance. These creatures have one unique characteristic (unless the GM decides to use a more detailed Flux creature): the Intensity. All their Attributes and Skills are equal to their Intensity. They will inflict 2D10 damage points added to their Hand-to-hand Damage Modifier. The character who controls this power can give orders to the creature. If the power is not controlled, the creature appears 1D10 meters away and attacks anything that moves.",
    categories: {
        "Maximum distance of the creature’s appearance": "5 meters +/- Success Modifier.",
        "Intensity of the creature": "12 +/- Success Modifier.",
        "Duration": "5 Combat Rounds +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Flux Storm",
    description: "This power creates a dangerous storm of Flux energy, materializing as a chaotic maelstrom that wreaks havoc on everything in its path.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "A Flux Storm is, generally speaking, a sign of a disaster. This power creates terrible disturbances in the Flux that are materialized in reality by a maelstrom, whether it is in the open air or underwater. The maelstrom stretches out around the character who is releasing the effect over a radius determined by the intensity of the phenomenon. The character is protected from this (even if he is not in control of his power) as are all those who are within one meter of him. The effect begins with a whirl of dark vapors that begins spinning around the character; then lightning bolts begin to hit everything within the Area of Effect. Each potential target must pass a Luck Test each Combat Round. If the Test is a Failure, he is directly hit by a lightning bolt and suffers Physical Damage. Furthermore, the lightning bolt inflicts damage on anything that is near to the point of impact. The damage is reduced by 2 points per meter from the impact.",
    categories: {
        "Physical Damage": "2D10 +/- Success Modifier.",
        "Area of Effect": "15 meters +/- (10 m x Success Modifier).",
        "Duration": "5 Combat Rounds +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Flux Tear",
    description: "This power creates a rift in reality, opening a crossing to the dangerous and unpredictable universe of the Polaris Flux.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "A Flux tear causes a crack in reality and opens a crossing to the universe of the Polaris Flux. The problem is that, even when the tear is controlled, you can never know what will come out of it. The tear power’s intensity is used for whatever effect is released. When a Flux tear happens, you must roll 2D10:\n2–8 Flux Beast (see the description of the effect; if the power is controlled, the character can give orders to the creature).\n9–10 Polaris Wave (see the description of the effect).\n11–16 Crossing (see the description of the effect).\n17 Flux Storm (see the description of the effect).\n18 Physical Vortex (see the description of the effect).\n19 Psychic Vortex (see the description of the effect).\n20 Two simultaneous effects.\nIf the power is not controlled, the tear happens within a 1D100-meter radius around the character.",
    categories: {
        "Intensity of the phenomenon": "15 +/- Success Modifier.",
        "Duration": "2D6 Combat Rounds +/- Success Modifier.",
        "Max. Range": "15 meters +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Force Barrier",
    description: "This power creates a protective barrier capable of absorbing damage, which can be strategically placed within the range limit of the power.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect creates a force barrier capable of absorbing a certain amount of damage. The character who controls the phenomenon can choose to place the barrier wherever he sees fit, within the range limit of his power.\nIf the power is not controlled, the barrier can appear anywhere (roll on the chart for Grenade Shooting Errors, CRB page 231), 1D10 meters away from the user. If it appears on an individual, he is forced outside the Area of Effect. However, if it appears in a structure, even in part, the barrier can cause structural damage.\nNote: a character wearing armor will be pushed back, whereas a drone, a vehicle, or a robot will suffer (1D10 + level of protection) damage points.",
    categories: {
        "Protection": "5 +/- Success Modifier.",
        "Duration": "5 Combat Rounds +/- Success Modifier.",
        "Area of Effect": "5 m² +/- Success Modifier.",
        "Max. Range from the center of the Area of Effect": "10 meters +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Force Field",
    description: "This power creates a spherical force field that moves with the character, capable of absorbing damage to protect both the character and everything around them.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect surrounds a character and everything that is around him with a spherical force field capable of absorbing a certain amount of damage. The protection sphere moves with the character.",
    categories: {
        "Protection": "5 +/- Success Modifier.",
        "Duration": "5 Combat Rounds +/- Success Modifier.",
        "Area of Effect": "5 meters in diameter +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Gravity Sphere",
    description: "This power creates a Gravity Sphere around the character, attracting objects and living beings within its Area of Effect towards the character.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a Gravity Sphere around the character who uses it that will attract everything inside the Area of Effect toward him. Any objects with a weight equal to or less than the attraction (intensity of the phenomenon x 10 kg) will be brought closer to the character. Living beings can resist the attraction force by successfully passing a Strength Test opposed to the intensity of the phenomenon. If they succeed, they can move away a maximum distance equal to their Success Modifier in meters. The Test must be carried out for each Combat Round. As for objects, the speed at which they are attracted is equal to the difference between the object’s weight and the intensity of the phenomenon (in multiples of 10 kg) in meters per Round. Any person who finds themselves in the way of an attracted object risks being affected by 1D10 to 3D10 Physical Damage Points depending on the weight and the speed of the object (a Coordination Test can allow the person to avoid this). The character using the power can cancel the attraction on anything that is within one meter of him. If his power is not under control, he can’t stop anything at all and could well end up being crushed by everything that he has ‘fallen’ toward him. In this case, not only will he suffer damage from the objects that have hit him, but on top of that, the Damage Base is increased by 1 point for each Combat Round because of crushing damage.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier.",
        "Duration": "5 Combat Rounds +/- Success Modifier.",
        "Area of Effect": "15 meters in diameter +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Jamming",
    description: "This power creates disruptions that jam all the detection and transmission devices in a sphere centered on the character, inflicting a penalty on them.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates disruptions that jam all the detection and transmission devices in a sphere centered on the character, inflicting a penalty on them.",
    categories: {
        "Penalty": "-3 +/- Success Modifier.",
        "Area of Effect": "50 meters in diameter +/- (10 m x Success Modifier).",
        "Duration": "5 Combat Rounds +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Lightning",
    description: "This power releases a lightning bolt that inflicts physical damage to a target. If it is an electronic device, it is submitted to an EMP attack (‘electromagnetic pulse’) that imposes a Breakdown Test.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power releases a lightning bolt that inflicts physical damages to a target. If it is an electronic device, it is submitted to an EMP attack (‘electromagnetic pulse’) that imposes a Breakdown Test. Armors and protections are usually effective against this power. If the power is not controlled, the attack affects everything that is located in the Area of Effect, including the character.",
    categories: {
        "Physical damage": "2D10+3 +/- Success Modifier (1 Location hit, randomly determined on the Ranged Attacks Location Table, page 228).",
        "EMP attack": "The penalty on the Breakdown Test is equal to -3, minus the Success Modifier.",
        "Max. range": "15 meters +/- Success Modifier.",
        "Area of Effect (accidental release)": "5 meters in diameter + Failure Modifier."
    }
}),
 new  Skill({
    name: "Mental Imprisonment",
    description: "This power targets the minds of everything inside a sphere around the character, temporarily trapping their consciousness in the Flux.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The effect of this power targets the minds of everything that is inside a sphere around the character. The power is set loose instantly, but its effects can linger for a period of time. The victim must perform a Willpower Test opposed to the intensity of the phenomenon. If the victim obtains the higher Success Margin (or if it’s a draw), nothing happens. If the victim fails, his spirit is held prisoner in the Flux for a number of Combat Rounds equal to the Phenomenon’s Success Margin. Worse still, at the end of the imprisonment time, the Opposed Test must be taken again, but the intensity of the phenomenon is reduced by 1 point. When a character is a victim of this power, his mind is trapped inside his own body. He can no longer perceive the environment around him and cannot control his organism. His body is motionless for as long as he remains under the influence of his mental prison. If this power is not under control, it will also affect the one who let it loose.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier.",
        "Area of Effect": "5 meters in diameter +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Mind Control",
    description: "A complex power that influences, neutralizes, or dominates a target’s mind.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This complex power, which acts upon the victim’s mind, has three different uses: mind neutralization, mind control, and mental influence. In all cases, the victim’s Willpower is opposed to the intensity of the phenomenon. Using this power requires complete concentration. \n\nMind neutralization: The character using this power tries to stop the victim's mental activity. The victim must perform a successful Willpower Test opposed to the intensity of the Polaris Effect. If successful, the victim reduces the intensity of the phenomenon by a number of points equal to their Success Modifier. If they fail, they are left in a stupor for a number of Combat Rounds equal to their Failure Modifier. \n\nMind control: A neutralized target can be further controlled. The victim must perform another Willpower Test opposed to the power’s intensity. If they fail, the character can give them simple orders for a number of Combat Rounds equal to the target’s Failure Margin. \n\nMind influence: This effect is a slower form of manipulation that allows control for a longer period and alters perception. The character must concentrate near the victim for two hours to achieve 5 points of intensity. The victim must perform a Willpower Test opposed to the intensity of the power. If successful, they recognize the manipulation attempt. If they fail, the Player can distribute their Success Modifier between the duration of the control (in days) and a temporary reduction of the victim’s Willpower. If the victim’s Willpower stays above 3, they can attempt a Willpower Test to break free. \n\nIf a Catastrophe occurs during any Opposed Test, the character suffers a penalty equal to their Failure Modifier on their Shock Resistance Test. \n\nAn involuntary release of this power creates a psychic sphere with a diameter equal to the intensity of the phenomenon, in meters. All within the area, including the user, suffer a mental attack and must perform a Willpower Test opposed to the intensity. The Success Modifier indicates how many Willpower points the victims lose. If their Willpower drops below 3, they fall into a deep cataleptic state similar to a coma (see Shock in the States of Health chapter, CRB page 232). If their Willpower remains at 3 or above, they recover lost points at a rate of 1 per hour.",
    categories: {
        "Intensity of the phenomenon": "10 +/- Success Modifier.",
        "Max. range": "50 meters +/- (10 m x Success Modifier).",
        "Area of Effect (accidental release)": "1 meter per level of intensity of the phenomenon (use the Failure Modifier)."
    }
}),
 new  Skill({
    name: "Molecular Barrier",
    description: "Creates a molecular barrier capable of absorbing damage, though it degrades over time.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect creates a molecular barrier capable of absorbing a certain amount of damage. Unlike Force Barrier, the molecular barrier can be damaged: its protection value is reduced by 1 point for every 5 damage points. The character who controls the phenomenon can choose to place the barrier wherever they see fit, within the range limit of their power. Whether it appears on an individual or a structure has no consequence. \n\nIf the power is not controlled, the barrier can appear anywhere (roll on the chart for Grenade Shooting Errors, CRB page 231), 1D10 meters away from the user.",
    categories: {
        "Protection": "10 +/- Success Modifier.",
        "Duration": "7 Combat Rounds +/- Success Modifier.",
        "Area of Effect": "5 m² +/- Success Modifier.",
        "Max. Range from the center of the Area of Effect": "10 meters +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Molecular Breakdown",
    description: "Disintegrates matter, causing permanent damage to all living creatures in the area.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This terrifying power allows the user to disintegrate matter. The phenomenon inflicts physical damage to all living creatures present in the spherical Area of Effect. Beware! The wounds inflicted are permanent! A victim suffering a Serious Wound, for example, will have one of their Serious-Wound boxes permanently checked and will not be able to recover from this wound! Only a Molecular Reintegrator (a Genetician machine) or the Molecular Regeneration power can heal them. Armors and protections are not effective against this power.\n\nEven if the effect is not controlled, the character who is releasing the effect is not affected.",
    categories: {
        "Damage": "2D10 +/- Success Modifier (1 Location hit, determined randomly on the Ranged Attacks Location Table, CRB page 228).",
        "Area of Effect": "5 meters in diameter +/- Success Modifier.",
        "Max. Range from the center of the Area of Effect": "15 meters +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Molecular Disruption",
    description: "Inflicts physical damage to everything in the area, bypassing armor and protections.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This phenomenon inflicts physical damage to everything that is located in the spherical Area of Effect. This damage can be healed normally. Armors and protections are not effective against this power.",
    categories: {
        "Damage": "2D10 +/- Success Modifier (2 Locations hit, determined randomly on the Ranged Attacks Location Table, CRB page 228).",
        "Area of Effect": "5 meters in diameter +/- Success Modifier.",
        "Max. Range from the center of the Area of Effect": "15 meters +/- Success Modifier."
    }
}),
 new  Skill({
    name: "Molecular Healing",
    description: "Allows the character to heal physical wounds, location by location.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The character can heal physical wounds (Location by Location). The Molecular Healing Test suffers the same penalties caused by the seriousness of the Wound as the First Aid and Medicine Tests (see Care and Healing in the States of Health chapter, CRB page 232). If the Test is successful, the healed Location immediately gets back a number of Wound boxes equal to the Success Modifier. This power can also be used to stabilize a Wound (the Wound stabilization penalties also apply). In the case of a Success, the Wound is tended but it will be imperative to treat it further or use the power again to continue healing.\n\nNote: The character can use this power on himself.\n\nIf the power is not controlled, it is the equivalent of a Molecular Disruption.",
    categories: {}
}),
 new  Skill({
    name: "Molecular Regeneration",
    description: "Allows the user to regenerate damaged tissue and slow aging.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to regenerate damaged tissue. The most common use is for healing permanent damage (for example, due to a Molecular Breakdown or a Psychic Obliteration). It functions as a normal healing power but can ONLY be used to heal permanent damage (see Molecular Healing or Psychic Healing).\n\nThis power can also slow the effects of aging. Once a year, the user can attempt to neutralize the aging of the previous year. If successful in a Molecular Regeneration Test, the user will not age that year; if the Test fails, aging proceeds normally; a Critical Failure results in aging an additional year. This Test suffers a penalty equal to the character’s age divided by 5 (-7 if the character is 35 years old, for example).\n\nIf the power is not controlled, it can have devastating effects. The uncontrolled energy waves may appear blue (indicating normal regeneration) or red (indicating failure). If red, all characters and objects within the Area of Effect suffer the equivalent of a Molecular Breakdown (damage bonus equals the Failure Modifier of the user), creating permanent Wounds.",
    categories: {
        "Area of Effect(Accidental Release)": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Nightmare",
    description: "Inflicts terrifying, nightmarish visions upon those in the area of effect.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power inflicts dreadful, nightmarish visions on any individual within the Phenomenon’s Area of Effect. Victims must perform a Willpower Test against the intensity of the phenomenon. On a Failure, they are terrified for the duration of the power, suffering a -10 penalty on all Actions. If a Catastrophe is rolled, the victim may develop a permanent phobia (determined randomly). The character controlling this power can move the Area of Effect.",
    categories: {
        "Intensity of the Phenomenon": "12 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect": "10 meters in diameter +/- (2 m x Success Modifier)",
        "Max. Range from Center": "50 meters +/- (10 m x Success Modifier)"
    }
}),
 new  Skill({
    name: "Molecular Field",
    description: "Generates a spherical molecular field that absorbs damage.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect creates a molecular field with a spherical shape, capable of absorbing a certain amount of damage. Unlike Force Field, a Molecular Field can be damaged: its protection value is reduced by 1 point for every 5 damage points. The protection sphere moves with the character.",
    categories: {
        "Protection": "10 +/- Success Modifier",
        "Duration": "7 Combat Rounds +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Organic Repulsion Sphere",
    description: "Creates a sphere that repels organic entities, preventing them from coming near the user.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a sphere around the character who is using it, preventing any organic elements from coming near him. Any organic creature that tries to penetrate the sphere must succeed in passing a Strength Test opposed to the phenomenon’s intensity. If it succeeds its Test, it can move toward the character a maximum distance equal to its Success Modifier in meters. Any organic creature inside the sphere at the moment when the power is used is not affected.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Pacification / Enragement",
    description: "Changes the state of mind of a target, either calming them or driving them into blind rage.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The user of this power can change the state of mind of a target, either to calm him down or to drive him blind with rage (choose one). Everyone in the Area of Effect (except the one who released the power) must perform a Willpower Test opposed to the intensity of the phenomenon. In the case of a Failure, the user of the power chooses the effect the power has on them. This power cannot be moved and is always centered on the one who released it (who is not affected). A calm target is unable to fight and calms down instantly even if he is attacked (he only tries to defend himself). An enraged character attacks the closest target, even if it is a friend.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Physical Vortex",
    description: "Creates a vortex that sucks in matter, pulling objects and living beings towards it.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The Physical Vortex is identical to the Psychic Vortex, except that it sucks in matter. Living beings can try to resist it by carrying out a Strength Test opposed to the intensity of the phenomenon. If a potential victim obtains the higher Success Margin, he can move forward a number of meters equal to his Success Modifier. If the Vortex obtained the higher Success Margin, the victim is pulled toward the tear, over a number of meters equal to the phenomenon’s Success Modifier. If a victim hangs on to something, you should subtract the character’s Strength from the intensity of the phenomenon before performing the Test as described above. However, if the victim wins the Opposed Test, he can only move away by holding onto something, meter by meter. When it comes to objects and unconscious creatures, the Vortex is capable of moving 10 kg per intensity point.",
    categories: {
        "Intensity of the phenomenon": "10 +/- Success Modifier",
        "Area of Effect": "5 meters +/- Success Modifier",
        "Max. Range from center of Area of Effect": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Polaris Wave",
    description: "Combines the effects of Psychic Attack, Molecular Disruption, and Electromagnetic Pulse while sending targets into the past or future.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "The Polaris Wave is a most formidable power. It combines the effects of the Psychic Attack, Molecular Disruption, and Electromagnetic Pulse powers. Moreover, it projects anybody located in the spherical Area of Effect into the future or the past. The time jump is completely random. When the power ends, the wave reappears and sends the characters back to where they started, at the exact moment they disappeared. Even when he is controlling this effect, the one who releases it cannot move it. This power is necessarily centered on the character, who also suffers from the time travel (but not the other effects). The characters are transported either into the future (1–5 on 1D10), or into the past (6–10 on 1D10). To determine the distance of the time jump, roll 2D10 on the table below:\n\n2–5: Intensity of the phenomenon, in hours.\n6–10: Intensity of the phenomenon, in years.\n11–14: Intensity of the phenomenon, in dozens of years.\n15–17: Intensity of the phenomenon, in hundreds of years.\n18–19: Intensity of the phenomenon, in thousands of years.\n20: Intensity of the phenomenon, in millions of years.\n\nThe characters remain stuck in the future or in the past for an amount of time determined on the table below (this is the period flowing during the time jump in a past or future era, and not the time during which they are gone). Roll 2D10 to determine the duration of the trip:\n\n2–5: Intensity of the phenomenon x 1D10 Combat Rounds.\n6–10: Intensity of the phenomenon x 1D10 minutes.\n11–14: Intensity of the phenomenon x 1D10 hours.\n15–17: Intensity of the phenomenon x 1D10 days.\n18–19: Intensity of the phenomenon x 1D10 weeks.\n20: Intensity of the phenomenon x 1D10 months.",
    categories: {
        "Intensity of the phenomenon": "1 +/- Success Modifier",
        "Damage": "see Psychic Attack, Molecular Disruption, and Electromagnetic Pulse",
        "Area of Effect": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Premonition",
    description: "Gives the character the ability to foresee a near-future event.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power gives the character the ability to foresee a near-future event. By focusing on an action, an individual, an event, a place, etc., he can perceive a very blurry vision of the future (in cases where the vision is involuntarily triggered, it is up to the GM to determine what will be the subject of the vision). A character who uses this power will find himself engulfed by the Polaris Effect, and his mind will be one with the ocean and the marine mammals. This phenomenon is an experience that is both wonderful and terribly worrying, in a universe where the sinister presence of ‘The Other,’ a mysterious being who haunts the Polaris Effect, is ever present.\n\nBefore carrying out the Test, the Player must choose a unit of time that will determine the Difficulty Modifier:\n- Second: +0\n- Combat Round: -3\n- Minute: -5\n- Hour: -7\n- Days: -10\n\nAfter the Test, the user of the power can foresee the future, up to a number of time units equivalent to his Success Margin. If this power is not controlled, roll 1D10 on the following table to obtain the range of the vision:\n1–2: 1D100 seconds\n3–4: 1D100 Rounds\n5–6: 1D100 minutes\n7–8: 1D100 hours\n9–10: 1D100 days\n\nThis power lasts for a number of Combat Rounds equal to half of the character’s Mastery Level in the Premonition Skill.\n\nThe use of this power mainly allows the character to feel impressions, feelings, or sensations, and not really precise images. The further away the targeted period is in time, the blurrier the vision will be. The Player can sacrifice a few points from his Success Margin to obtain more details, but he won’t be able to see as far forward into the future.\n\nIn the case of a Catastrophe (whether the power is triggered voluntarily or not), there is always a 1 in 20 chance (1 on a 1D20) that he will experience the future as a whole. This is usually a terrible experience for the unfortunate viewer, and he must take an Intelligence Test. The Success Modifier of this roll will determine the number of Willpower and Intelligence points the character has LOST. If the Intelligence Test is a Failure, the victim loses consciousness for 1D10 hours. His Intelligence and Willpower are reduced to 1 and will regenerate at a speed of 1 point per hour.\n\nFinally, a character who uses this power may face The Other (see The Entities in The Polaris Flux on page 265). The Other has a 1 in 20 chance to intervene (1 on a 1D20). In this case, the character will feel an absolutely terrifying presence and must succeed in passing a Willpower Test against a Willpower of 20. If the character fails, he will experience a psychic attack. The losing player must reduce their Willpower by the Opposed Test winner’s Success Modifier. If the character wins the Opposed Test, he can disengage and regain consciousness without further side effects. If the character loses, the duel continues through successive Opposed Tests. If the character’s Willpower drops below 3, he will be taken prisoner by The Other. The Other can then choose to destroy him, hold him prisoner (placing him in a coma), or manipulate him (making the victim dominated by The Other). The victim can attempt to break free by performing a Willpower Test with a penalty of -20 (penalty decreases by 1 point per week). A successful Test will allow the victim to break free from The Other’s influence.",
    categories: {}
}),
 new  Skill({
    name: "Psychic Attack",
    description: "Forces living beings in the Area of Effect to perform a Shock Resistance Test.",
    firstAttribute: "WIL",
    secondAttribute: "INT",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This phenomenon forces living beings in the Area of Effect to perform a Shock Resistance Test. The Success Margin increases the penalty to the Shock Resistance Test. Victims can be stunned for 1D6 Combat Rounds or knocked unconscious for 1D6 minutes.\n\nIf this power is accidentally released, the character who caused the Polaris Incident is not affected.",
    categories: {
        "Penalty to the Shock Resistance Test": "+0 +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Max. Range from the center of the Area of Effect": "15 meters +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Barrier",
    description: "Creates a psychic barrier that provides bonuses to Shock Resistance and Willpower against mental attacks.",
    firstAttribute: "WIL",
    secondAttribute: "INT",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect creates a psychic barrier. The character who controls the phenomenon can choose to place the barrier wherever he sees fit, within the range limit of his power. The psychic barrier offers a bonus against Shock psychic attacks (such as Psychic Attack, Psychic Dagger, or Psychic Bolts) and increases the Willpower of those who stand behind it against any mental attacks (such as Mind Control).\n\nIf the power is not controlled, the barrier can appear anywhere (roll on the chart for Grenade Shooting Errors, Page 231), 1D10 meters away from the user. Whether it appears on an individual or a structure has no consequence.",
    categories: {
        "Bonus to the Shock Resistance Test": "+1 +/- Success Modifier",
        "Bonus in Willpower against mental attacks": "+0 +/- Success Modifier",
        "Area of Effect": "5 m² +/- Success Modifier",
        "Max. Range from the center of the Area of Effect": "10 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Bolts",
    description: "Creates psychic bolts that attack multiple targets, causing Shock Resistance Tests.",
    firstAttribute: "WIL",
    secondAttribute: "INT",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a number of psychic bolts that cause the victims to perform a Shock Resistance Test. If the power is controlled, the PC chooses his targets as long as he can see them. The attack Test is performed with the Psychic Bolts Skill. Armors and protections are not effective against this power.\n\nIf the power is not controlled, the bolts randomly strike at 1D4 target(s) each Combat Round. An attack Test must be performed with a Skill Level of 10 + Success Modifier.",
    categories: {
        "Number of psychic bolts": "1 + Success Modifier",
        "Penalty to the Shock Resistance Test": "Usual Test for the first bolt, then -2 per extra bolt",
        "Range": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Dagger",
    description: "Creates a psychic dagger that materializes at the user's fist, requiring a Hand-to-hand combat Skill to strike and force a Shock Resistance Test.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a psychic dagger that materializes at the end of the user’s fist. The character must then use his Hand-to-hand combat Skill to hit his victim and force him to perform a Shock Resistance Test. The Success Margin increases the penalty to the Shock Resistance Test. Victims can be stunned for 1D6 Combat Rounds or rendered unconscious for 1D6 minutes.\n\nIf the power is not controlled, it releases Psychic Bolts (see page 261).",
    categories: {
        "Penalty to the Shock Resistance Test": "-3 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Field",
    description: "Surrounds the character and everything nearby with a psychic field that offers protection against psychic attacks and enhances Willpower against mental attacks.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This effect surrounds a character and everything that is around him with a psychic field that offers a bonus against Shock psychic attacks (such as Psychic Attack, Psychic Dagger, or Psychic Bolts) and increases the Willpower of those who stand behind it against any kind of mental attack (such as Mind Control). The protection sphere moves with the character.",
    categories: {
        "Bonus to the Shock Resistance Test": "+1 +/- Success Modifier",
        "Bonus in Willpower against mental attacks": "+0 +/- Success Modifier",
        "Area of Effect": "5 m² +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Healing",
    description: "Allows the character to cancel the effects of Shock, hypnotic suggestions, mental domination, and even stress or fear.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the character to cancel the effects of Shock (such as dizziness and unconsciousness), bring someone out of a coma (with penalties depending on the depth of the coma), and remove hypnotic suggestions or mental domination. Additionally, it can be used to cancel the effects of stress, fear, panic, and similar mental states. For the hypnotic suggestion removal, the intensity of the phenomenon must be higher than the Willpower of the individual who imposed the suggestion. The effect is immediate for Shock and stress removal, but more complex for hypnotic suggestions or mental domination. If the power is not controlled, it functions as a Psychic Attack.",
    categories: {
        "Intensity of the phenomenon (elimination of hypnotic suggestions)": "12 +/- Success Modifier",
        "Duration (cancellation of stress)": "3 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Obliteration",
    description: "Destroys the target’s conscience, potentially dazing or rendering them unconscious, and causing permanent damage to their Willpower.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power aims to destroy the target’s conscience, forcing living beings in the Area of Effect to perform a Shock Resistance Test. The Success Margin increases the penalty to the Shock Resistance Test. Targets can be dazed for 2D6 Combat Rounds or rendered unconscious for 2D6 minutes. If unconscious, the targets lose a number of Willpower points equal to the Failure Modifier obtained on the Shock Resistance Test. If their Willpower drops below 3, they are placed into a deep, almost permanent coma. Only a Molecular Reintegrator or the Molecular Regeneration power can cure them. If accidentally released, the user is not affected.",
    categories: {
        "Penalty to the Shock Resistance Test": "+0 +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Max. Range from the center of the Area of Effect": "15 meters +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Sensitivity",
    description: "Allows the user to locate living beings within a certain radius, providing bonuses to Perception Tests and the ability to detect life forms.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to locate living beings within a certain radius. The character can carry out a Skill Test to determine if they have detected a living being. The Test is modified by the difference between the user’s Willpower and the target’s Willpower. Additionally, the user receives a bonus on all Perception Tests equal to their Success Modifier. If the power is not controlled, it will interfere with all perception modes of those inside the detection radius (including the user), causing a penalty to all Actions equal to the Failure Modifier.",
    categories: {
        "Area of Effect": "15 meters in diameter +/- (10 m x Success Modifier)",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Vortex",
    description: "Creates a tear in the fabric of reality that gives access to the universe of the Flux, threatening the spirits of those nearby.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "A Psychic Vortex is a tear in the fabric of reality that gives direct access to the universe of the Flux. When it is created, all living creatures within the Area of Effect must take a Willpower Test opposed to the intensity of the phenomenon. If the victim obtains the higher Success Margin, they can attempt to escape the danger zone. Otherwise, they lose Willpower points equal to the Success Modifier of the phenomenon. The victim may still attempt to escape if their Willpower hasn't dropped to 3 or below. If their Willpower falls to 3 or lower, their spirit is sucked into the Flux, where it is lost unless others attempt to retrieve it. If the effect isn’t under control, the Vortex appears 1D10 meters from the character in a random direction.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Area of Effect": "5 meters +/- Success Modifier",
        "Max. Range from center of Area of Effect": "15 meters +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Shock Waves",
    description: "Releases concentric psychic shock waves that spread out from the character, causing shock damage to living beings.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power releases concentric psychic shock waves that affect living beings in the area. If controlled, the character can release a number of shock waves, each one inflicting 3D10 Shock damage, reduced by 2 points per meter of distance from the character. The shock waves follow each other at an interval of 3 Initiative points, and the effect moves with the character. No obstacles can block these waves. If not controlled, the character must succeed in a Mastery of the Polaris Effect Test to stop the release. The user does not suffer damage from the shock waves.",
    categories: {
        "Number of psychic shock waves": "1 + Success Modifier",
        "Shock damage (per shock wave)": "3D10 +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Psychic Shock Waves",
    description: "Releases concentric psychic shock waves that spread out from the character, causing shock damage to living beings.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power releases concentric psychic shock waves that affect living beings in the area. If controlled, the character can release a number of shock waves, each one inflicting 3D10 Shock damage, reduced by 2 points per meter of distance from the character. The shock waves follow each other at an interval of 3 Initiative points, and the effect moves with the character. No obstacles can block these waves. If not controlled, the character must succeed in a Mastery of the Polaris Effect Test to stop the release. The user does not suffer damage from the shock waves.",
    categories: {
        "Number of psychic shock waves": "1 + Success Modifier",
        "Shock damage (per shock wave)": "3D10 +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Shock Waves",
    description: "Releases concentric shock waves that destroy everything in their path, causing physical damage to targets.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power releases concentric shock waves that destroy everything in their path. If controlled, the character releases a number of shock waves, each inflicting 2D10 physical damage, reduced by 2 points per meter of distance from the character. The shock waves follow each other at an interval of 3 Initiative points, and the effect moves with the character. Obstacles can block these waves, as long as they are not destroyed. If the effect is uncontrolled, the character must perform a successful Mastery of the Polaris Effect Test to stop the shock waves. The user does not suffer any damage from the waves.",
    categories: {
        "Number of shock waves": "1 + Success Modifier",
        "Damage (per shock wave)": "2D10 +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Soundscan",
    description: "Allows the user to locate and analyze several targets inside a certain area.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to locate and analyze several targets within a certain area. The character must perform a Test with a level equivalent to the intensity of the phenomenon. If successful, the Success Margin determines the precision with which the targets can be analyzed. If the power is uncontrolled, it interferes with the perception modes of all those inside the detection radius (including the user), causing a penalty to all their Actions equal to the Failure Modifier.",
    categories: {
        "Intensity of the phenomenon": "10 +/- Success Modifier",
        "Area of Effect": "15 meters in diameter +/- (10 m x Success Modifier)",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Soul Eater",
    description: "Summons a nightmarish, immaterial creature that devours the minds of its prey.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to summon a soul eater, an immaterial creature that has only one Attribute: Willpower, which is equal to the intensity of the phenomenon. The creature is only vulnerable to energy attacks. It always acts first and attacks once per Combat Round, trying to devour the mind of its prey. The attack is resolved by a Willpower Test opposed between the creature and its victim. If the creature wins, it absorbs Willpower points equal to its Success Modifier. The creature can be controlled by the user if the power is not uncontrolled. If the power is uncontrolled, the creature appears randomly and attacks anything that moves. Destroying the creature releases an uncontrolled Psychic Attack effect with intensity equal to the creature’s Willpower.",
    categories: {
        "Maximum distance of appearance of the creature": "5 meters +/- Success Modifier",
        "Power of the creature": "12 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Telekinesis",
    description: "Moves objects with the user's thoughts, using telekinetic strength.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to move objects with their thoughts. The character’s 'Telekinetic Strength' is equal to the intensity of the phenomenon, which is comparable to the Strength Attribute of any individual. The power can be used to move or lift objects, as well as perform precision tasks, with penalties applied for difficult tasks. Attacking with an object from a distance requires a Telekinesis Test. If the power is not controlled, objects within the Area of Effect may fly out of control, causing damage to characters inside the area. Victims can attempt to dodge by performing Coordination Tests.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect (accidental release)": "5 meters in diameter +/- Failure Modifier"
    }
}),
 new  Skill({
    name: "Teleportation",
    description: "Teleports a character or object to a specified location within the range.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power allows the user to teleport a character or object with a weight equal to its strength (intensity of the phenomenon x 10 kg) that is inside the Area of Effect. The direction of teleportation is chosen by the character in control of the phenomenon. If the power is not controlled, the direction is determined randomly by rolling 1D10. A character who teleports into an object or wall will reappear next to it. It is also possible to teleport someone underwater.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Range": "30 meters +/- (10 m x Success Modifier)"
    }
}),
 new  Skill({
    name: "Temporal Shift",
    description: "Allows the user to transport themselves and others to the past or future.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power transports the character and everything in the Area of Effect to the future or past. The character reappears at the exact location they were before the shift. The power does not cause significant problems when traveling to the future but is more complex when traveling to the past. In the past, the character cancels the events that happened after activating the power. Time manipulation is dangerous and each jump can result in a 'temporal chimera.' There are various outcomes for these phenomena, ranging from harmless echoes to dangerous dimensional shifts or even time lacerations. The character and everyone in the Area of Effect may experience these effects, potentially disturbing the course of events.\n\nTemporal Chimera Effects:\n• 01–60: Nothing to report: everything is fine.\n• 61–90: Echoes from the past: the character made a successful time jump but echoes of what has been and what should have been endure. If he has made a jump into the past, he will see a vague specter of himself act as he did before he made his jump. This chimera has no impact whatsoever on the new reality but can prove extremely disturbing. This phenomenon can be seen by everyone.\n• 91–92: Unique phenomenon: roll on the Exceptional Phenomena Table.\n• 93–94: Another dimension: the character (and everything he carries) ends up in a parallel universe that is, most of the time, a horribly deformed and nightmarish reality (but it can also be an entirely different and peaceful reality). You will have to find a way to survive as long as the chimera is in effect. After this, everything will go back to normal.\n• 95–96: Temporal difference: for the duration of this chimera, time is out of phase. It runs differently for each thing. Some characters will be accelerated, others slowed down, one raindrop will take an infinite amount of time to fall whereas another drop will fall normally. For each object (important for the action in play) or character, and during each Combat Round, you have to roll a die. An even result indicates an acceleration (double the speed and the Actions of a character); an odd result indicates a slowing down (reduce by half). The chaos this phenomenon causes imposes a -5 penalty on the Tests of each character.\n• 97–98: Shift in the Flux: the character succeeds at his jump but reappears at the Flux border.\n• 99–100: Time laceration: each character transported into the past or into the future gets younger (1–5) or older (6–10) by one year.",
    categories: {
        "Area of Effect": "5 meters in diameter +/- Success Modifier",
        "Temporal Shift": "2D6 Combat Rounds +/- Success Modifier",
        "Max. Range from the center of the Area of Effect": "15 meters +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Temporal Sphere",
    description: "Creates a sphere that isolates everything inside it from the outside world, altering the passage of time.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a sphere that isolates everything inside it from the outside world. Time passes differently inside the sphere compared to the outside world. The user can choose whether time moves faster or slower inside the sphere. When time passes faster inside the sphere, each round that passes outside the sphere corresponds to the intensity of the phenomenon for each round inside. If time moves slower inside, each round outside corresponds to the intensity of the phenomenon for each round inside. The duration of the effect is determined by the slower of the two timelines. Nothing can pass through the sphere’s boundaries while the effect is active. The sphere cannot move, and everything within is isolated until the effect ends.",
    categories: {
        "Intensity of the phenomenon": "5 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Terror Sphere",
    description: "Creates a sphere that terrorizes any creature entering it.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a sphere around the character using it, which forces any creature (friend or foe) who enters it to pass a Willpower Test opposed to the intensity of the phenomenon. If the victim fails, they are terrorized for 1D10 Combat Rounds. The terrorized target suffers a -2 penalty to all actions and will attempt to flee the area if possible. The sphere has no effect on creatures that successfully resist its influence.",
    categories: {
        "Intensity of the phenomenon": "12 +/- Success Modifier",
        "Duration": "5 Combat Rounds +/- Success Modifier",
        "Area of Effect": "5 meters in diameter +/- Success Modifier"
    }
}),
 new  Skill({
    name: "Whirlpool",
    description: "Creates a vortex with the power to control its movement.",
    firstAttribute: "INT",
    secondAttribute: "WIL",
    hasPrerequisites: 0,
    prerequisites: "",
    limitingskill: 0,
    exclusiveskill: 1,
    difficultskill: 1,
    npskill: 0,
    skillchoice: 0,
    skilloptions: "Polaris Powers",
    baseSkill: -2,
    skillMastery: 0,
    fullDescription: "This power creates a vortex (as described in the chapter on The World Beneath the Waves, page 70) of a size equal to the intensity of the phenomenon in meters. The vortex is not centered on the character but appears in the same manner as a regular vortex. A character who is in control of the power can move the center of the phenomenon. However, this power does not allow the user to control a vortex that has formed naturally. (CRB)",
    categories: {
        "Intensity of the phenomenon": "10 +/- Success Modifier",
        "Range": "100 meters +/- (100 m x Success Modifier)"
    }
}),


];