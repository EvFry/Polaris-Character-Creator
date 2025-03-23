import {Mutation} from "./define.js"


export let allmutations =[
new Mutation(
     "Additional or Enhanced Sensory Organ (Enhanced Taste Buds)",
    1,
    0,
     "The character has heightened taste sensitivity, allowing them to detect subtle flavors and chemical compositions.",
    "The character was born with enhanced taste buds, giving them a +5 bonus to taste-related perception checks. This mutation's effect is similar to the inborn Advantage Keen Senses, except that the bonus is +5 instead of +3. If the character also has Keen Senses, both bonuses are cumulative.",
  true,
),

new Mutation(
     "Additional or Enhanced Sensory Organ (Enhanced Smell)",
    1,
    0,
     "The character has an exceptional sense of smell, capable of detecting faint odors and distinguishing complex scents.",
    "The character was born with an enhanced sense of smell, granting a +5 bonus to scent-related perception checks. This mutation functions similarly to the inborn Advantage Keen Senses, but with a +5 bonus instead of +3. If combined with Keen Senses, the bonuses stack.",
  true,
),

new Mutation(
     "Additional or Enhanced Sensory Organ (Enhanced Touch)",
    1,
    0,
     "The character has an extremely sensitive sense of touch, allowing for fine tactile perception and detailed texture analysis.",
    "The character was born with heightened tactile sensitivity, providing a +5 bonus to touch-related perception checks. This ability mirrors the inborn Advantage Keen Senses but provides a +5 bonus instead of +3. If the character also has Keen Senses, the effects are cumulative.",
  true,
),

new Mutation(
     "Additional or Enhanced Sensory Organ (Additional Ear)",
    2,
    0,
     "The character has an extra ear, improving their ability to detect sound and determine the direction of noises.",
    "The character was born with an additional ear, granting a +5 bonus to hearing-related perception checks. The bonus stacks with the inborn Advantage Keen Senses if the character possesses both, enhancing their auditory awareness even further.",
  true,
),

new Mutation(
     "Additional or Enhanced Sensory Organ (Additional Eye)",
    2,
    0,
     "The character has an extra eye, improving depth perception and visual awareness.",
    "The character was born with an additional eye, providing a +5 bonus to sight-related perception checks. This mutation functions like the inborn Advantage Keen Senses but offers a +5 bonus instead of +3. If the character has both, the bonuses stack.",
  true,
),
new Mutation(
     "Amphibious",
    2,
    1,
     "The character can breathe underwater and develop limited resistance to underwater cold and pressure.",
    "The character possesses a mutation similar to that of a Natural Hybrid, though imperfectly developed. They can breathe underwater and learn to endure underwater cold and pressure but do not gain the other advantages or disadvantages of Natural Hybrids. The character can develop the Special Skill Hybrid (CON/COO), which starts at level -3. However, they cannot gain positive Mastery Levels and can only bring this skill up to level +0 at most. Their maximum diving depth is determined by (Hybrid Global Skill level) x 500 meters. Until the Hybrid skill reaches level 1, they cannot exceed a depth in meters greater than their Constitution.",
  true,
),
new Mutation(
     "Androgynous",
    0,
    0,
     "The character exhibits physical traits of both genders.",
    "Physically, the character takes the form of either gender, possessing androgynous features. This mutation does not provide any mechanical advantages or disadvantages but may influence social interactions and character roleplay.",
    false,
),
new Mutation(
     "Claws",
    1,
    0,
     "The character has claws, allowing for powerful attacks and climbing advantages.",
    "The character possesses claws and can use them to attack, dealing 1D10+3 base damage (plus the Hand-to-Hand Combat Damage modifier). Additionally, they receive a +3 bonus on Climbing Tests when using their claws. However, the character suffers a -3 penalty to Tests involving manual dexterity, such as lock picking or pickpocketing.",
    false,
),
new Mutation(
     "Corrosive Touch",
    2,
    0,
     "The character’s skin secretes a corrosive substance that damages anything it touches.",
    "The character’s skin secretes a corrosive substance that causes 1D10 damage to anything it comes into contact with. Each time this mutation is chosen, the damage increases by 3 points. The corrosive effect lasts for 3D6 Combat Rounds unless neutralized with water or another suitable substance. The damage is applied independently from any other offensive action.",
  true,
),
new Mutation(
     "Contagion",
    2,
    1,
     "The character hosts symbiotic bacteria that cause highly contagious diseases.",
    "The character feeds bacteria that live in symbiosis with him, making him extremely contagious at all times. He is completely immune to the diseases, and the contagion is invisible. If uncontrolled, any skin contact transmits the Blue Flu. The mutant can attempt to control his contagion using the Special Skill 'Contagion' (CON/WIL, X), which can be developed at twice the cost. A successful Skill Test allows the character to choose whether to infect someone. A victim may develop a disease in 2D6 hours (minus the Success Modifier), with the Test Difficulty determining its virulence.",
  true,
),
new Mutation(
     "Deformities (Light)",
    -1,
    0,
     "The character has a minor physical deformity, reducing Presence.",
    "The character possesses a light deformity of any kind, determined by the Player and GM. This results in a -1 penalty to the Presence Attribute. Multiple deformities are cumulative.",
    false,
),

new Mutation(
     "Deformities (Severe)",
    -3,
    0,
     "The character has a severe physical deformity, significantly reducing Presence.",
    "The character possesses a severe deformity of any kind, determined by the Player and GM. This results in a -2 penalty to the Presence Attribute. Multiple deformities are cumulative.",
    false,
),
new Mutation(
     "Empathy",
    3,
    1,
     "Allows communication with empathic creatures and reading or altering emotions.",
    "This mutation opens the Special Skill Empathy (WIL/PRE, -3) that can be developed at twice the cost. It enables communication with empathic creatures such as coral (Very Difficult action, -7) and feeling the emotions of animals (Fairly Difficult action, -3). A successful Empathy Test is needed to feel people’s emotions. The empath can also try to alter a person’s emotions, with the GM rolling a Willpower Test for the target. The alteration Test Difficulty is the opposite of this Willpower Test’s Success/Failure Modifier. The number of Combat Rounds during which the target’s emotions are altered is indicated by the empath’s Success Margin. A Critical Failure alerts the target that their mind is being intruded upon. The empath must take on a behavior suggesting the emotion they wish to impose, and repeated attempts must be uninterrupted. If used against another empath, the Test Difficulty increases by the difference between their Empathy levels. Empaths can also attempt to perceive powerful emotions lingering in a place (Almost Impossible action, -13).",
  true,
),
new Mutation(
     "Fangs",
    1,
    0,
     "The character has fangs or sharp-edged teeth.",
    "The character has fangs, or his teeth are extremely sharp-edged. During melee combat, after successfully performing a grapple (see Martial Arts and Special Techniques, in the Combat chapter, page 223), he can bite his opponent and deal 1D10+3 base damage (plus the Melee Damage Modifier).",
    false,
),
new Mutation(
     "Genetic Animal Traits (Feline)",
    2,
    0,
     "The character has feline traits.",
    "The character is more nimble than average (COO +2), does not suffer from vertigo, and gains a +3 bonus on his Acrobatics/Balance Tests. Furthermore, the Player can also purchase the Claw and Night Vision advantageous mutations, at 1 CP less.",
  true,
),

new Mutation(
     "Genetic Animal Traits (Canine)",
    2,
    0,
     "The character has canine traits.",
    "The character is slightly more resistant than normal (CON +1) and is endowed with a very good sense of smell (+3 bonus to his Perception Tests when smell is directly needed). Moreover, the Player can also freely choose Fangs, an advantageous mutation, if he so wishes.",
  true,
),

new Mutation(
     "Genetic Animal Traits (Reptilian)",
    2,
    0,
     "The character has reptilian traits.",
    "The character is slightly more supple than normal (COO +1) and is endowed with a very good sense of smell thanks to his forked tongue (+3 bonus to his Perception Tests when smell is directly needed). Besides this, his supple bone structure grants him a +3 bonus to Evasion Tests and enables him to sneak in narrow spaces.",
  true,
),

new Mutation(
     "Genetic Animal Traits (Simian)",
    2,
    0,
     "The character has simian traits.",
    "The character is slightly stronger than normal (STR +1, CON +1), and he gains a +3 bonus to his Climbing Tests. Moreover, the Player can also freely choose Tail, an advantageous mutation, if he so wishes.",
  true,
),
new Mutation(
     "Horn",
    1,
    0,
     "The character has a horn growing on his forehead.",
    "The character has a small horn growing on his forehead. During melee combat, he can head butt his opponent and deal 1D10 base damage (plus the Melee Damage Modifier), plus 1D6 additional Shock Damage if the blow lands on the opponent’s head.",
    false,
),
new Mutation(
     "Missing Sensory Organ (Atrophied Taste Buds)",
    0,
    0,
     "The character has atrophied taste buds.",
    "The character was born with atrophied taste buds, causing a severe reduction in their ability to taste. This mutation has a similar effect to the Disadvantage Diminished Senses, but the penalty is -5 to Taste-related Tests. This penalty stacks with Diminished Senses if both mutations are present.",
    false,
),

new Mutation(
     "Missing Sensory Organ (Atrophied Nose)",
    -1,
    0,
     "The character has an atrophied nose.",
    "The character was born with an atrophied nose, limiting their ability to smell. This mutation has a similar effect to the Disadvantage Diminished Senses, but the penalty is -5 to Smell-related Tests. This penalty stacks with Diminished Senses if both mutations are present.",
    false,
),

new Mutation(
     "Missing Sensory Organ (Atrophied Touch)",
    -2,
    0,
     "The character has atrophied touch.",
    "The character was born with atrophied touch, reducing their tactile sensitivity. This mutation has a similar effect to the Disadvantage Diminished Senses, but the penalty is -5 to Touch-related Tests. This penalty stacks with Diminished Senses if both mutations are present.",
    false,
),

new Mutation(
     "Missing Sensory Organ (Missing Ear)",
    -3,
    0,
     "The character has a missing ear.",
    "The character was born with a missing ear, which causes a severe reduction in their ability to hear. This mutation has a similar effect to the Disadvantage Diminished Senses, but the penalty is -5 to Hearing-related Tests. This penalty stacks with Diminished Senses if both mutations are present.",
    false,
),

new Mutation(
     "Missing Sensory Organ (Missing Eye)",
    -3,
    0,
     "The character has a missing eye.",
    "The character was born with a missing eye, which severely limits their ability to see. This mutation has a similar effect to the Disadvantage Diminished Senses, but the penalty is -5 to Vision-related Tests. This penalty stacks with Diminished Senses if both mutations are present.",
    false,
),
new Mutation(
     "Molecular Instability",
    4,
    1,
     "The character has the ability to transform into a shapeless magma-like form.",
    "This mutation opens the Special Skill Molecular Control (CON/WIL), which can be developed at twice the cost. The character's molecular structure can be altered when this mutation is intentionally or unintentionally activated. If activated intentionally through a Skill Test, the character transforms into a shapeless magma, with a mass equal to their original body. While in this form, they move slowly, can slip under doors, and sense their environment through touch. The character can attempt to control their shape, creating specific organs with a Molecular Control Test, with varying difficulties: Auditory organ (-3), Visual organ (-5), Tentacle (-7, Strength 3). While underwater, the character does not suffer the effects of pressure and can move like an amoeba. Returning to their original form requires another successful Test, and the difficulty increases over time: -3 for up to 10 minutes, -7 for up to 1 hour, -1 for each additional hour. If the Test is failed, the character risks losing their substance, and either their Strength or Constitution is permanently reduced by 1 point. In cases of extreme stress, the character may unintentionally transform and must roll a successful Molecular Control Test or lose their molecular consistency. A failed roll triggers the transformation.",
    false,
),
new Mutation(
     "Natural Resistance (Resistance to Fire)",
    1,
    0,
     "The character is resistant to fire and heat.",
    "The character is particularly resistant to fire. Each time this mutation is obtained, physical damage caused by fire is decreased by 3. The character also has better resistance to heat, as ambient heat is decreased by 1 level.",
  true,
),

new Mutation(
     "Natural Resistance (Resistance to Cold)",
    1,
    0,
     "The character is resistant to cold and low temperatures.",
    "The character is particularly resistant to cold. Each time this mutation is obtained, physical damage caused by cold is decreased by 3. Ambient cold is decreased by one level (e.g., from Very Cold to Cold).",
  true,
),

new Mutation(
     "Natural Resistance (Resistance to Drugs)",
    1,
    0,
     "The character has an increased resistance to drugs.",
    "The character's resistance to drugs is increased by 3 points. Each time this mutation is chosen again, the resistance increases by an additional 1 point.",
  true,
),

new Mutation(
     "Natural Resistance (Resistance to Diseases)",
    1,
    0,
     "The character has an increased resistance to diseases.",
    "The character's resistance to diseases is increased by 3 points. Each time this mutation is chosen again, the resistance increases by an additional 1 point.",
  true,
),

new Mutation(
     "Natural Resistance (Resistance to Poisons)",
    1,
    0,
     "The character has an increased resistance to poisons.",
    "The character's resistance to poisons is increased by 3 points. Each time this mutation is chosen again, the resistance increases by an additional 1 point.",
  true,
),

new Mutation(
     "Natural Resistance (Resistance to Radiation)",
    1,
    0,
     "The character has an increased resistance to radiation.",
    "The character's resistance to radiation is increased by 3 points. Each time this mutation is chosen again, the resistance increases by an additional 1 point.",
  true,
),
new Mutation(
     "Night Vision",
    2,
    0,
     "The character can see in low-light conditions.",
    "The character can see perfectly well at night, as long as there is a light source, however weak. The character cannot see anything in pitch-black darkness.",
  true,
),
new Mutation(
     "Outdoor Adaptation",
    1,
    1,
     "The character is resistant to surface environmental effects.",
    "The character is resistant to the surface’s nefarious effects (radiation, air acidity, molecular alteration, etc.). He can develop the Special Skill Outdoor Adaptation (CON/CON, -3), which can only be developed naturally but without the limitation of +5. The Skill level indicates the number of hours the character can spend on the surface without suffering any side effects. After this time span, the character will still need protection, like anyone else. They must then stay away from the surface’s effects for a period equal to three times the amount of time spent outdoors without protection. After that, they can go back into the open air again.",
  true,
),
new Mutation(
     "Purulence",
    2,
    1,
     "The character's skin is covered with pustules, causing diseases and parasites.",
    "The character’s skin is covered with pustules, and he is constantly affected by diseases and the parasites he feeds. Individuals with this mutation are nearly always covered from head to toe. The character’s Presence decreases by 2 points (minimum 3), and all social interaction Tests aimed at charming, convincing, etc., suffer a -5 penalty if his appearance is visible. However, his Resistance to Diseases Attribute increases by 3 points. If the character develops Purulence again, his Presence decreases by 1 point, and his Resistance to Diseases increases by 2 points. The character is only contagious during certain periods of the year (usually one week every three months), and the diseases he can transmit are comparable to the Blue Flu (see Diseases and Poisons, in the States of Health chapter, page 240). The character can try to control his Purulence to curb his contamination periods. In this case, Purulence becomes a Skill (Purulence, CON/WIL, X) that can be developed at normal cost. During each contamination period, the PC can try to contain his diseases by rolling a Skill Test once a day. However, he suffers a cumulative -1 penalty per day until he has been contagious for a full week. Purulence can also be used as a weapon: the target and the mutant’s skin must touch, then the mutant rolls a Purulence Test in opposition with the target's Constitution. If successful, the victim suffers 2D10 (plus the Success Modifier) Physical Damage. If he survives, he risks catching the Blue Flu. If the victim dies, his body remains dangerously contagious. There are rumors of certain products that temporarily neutralize this mutation, but they contain very powerful drugs. Purulent mutants are also said to live in symbiosis with parasites from the surface.",
  true,
),
new Mutation(
     "Radiation",
    3,
    1,
     "The character can release a flow of radiation into a victim’s body.",
    "This mutation opens the Special Skill Radiations (CON/WIL, -3) that can be developed at twice the cost. It enables the character to release a flow of radiation into a victim’s body through simple physical contact. The radiation’s intensity inflicts 2D6 (plus Success Modifier) irradiation points. Each time the character chooses this mutation, the intensity rises by 3 points. Additionally, the character receives the mutation Resistance to Radiations for free, making them more resistant to radiation damage.",
  true,
),
new Mutation(
     "Regeneration",
    2,
    0,
     "The character regenerates wounds more rapidly.",
    "The character regenerates his wounds more rapidly. This mutation does not keep him safe from the side effects of wounds nor does it enable him to grow back a destroyed limb or organ. The effects of this mutation are as follows: +2 bonus to Wound Stabilization Tests (for the healer), +3 bonus to Tests against infections, and healing time is divided by two. If the character obtains this mutation again, the bonuses increase by +1 and the healing time is divided by three. However, a mutant capable of regenerating must eat and drink twice as much as a normal person or he will suffer 1D10+3 Physical Damage at the end of the day as his body rapidly degenerates. A character cannot accumulate more than two mutations from this list: Parasite, Symbiont, and Regeneration.",
  true,
),
new Mutation(
     "Reinforced Skeleton",
    2,
    0,
     "The character’s Damage Resistance is increased by 2 points.",
    "The character’s Damage Resistance is increased by 2 points, and his Stun threshold by 3 points. The character adds 1 point to these values each time he develops this mutation again.",
  true,
),

new Mutation(
     "Reinforced Skin",
    2,
    0,
     "The character’s dark, rough skin grants him a 3-point natural armor.",
    "The character’s dark, rough skin grants him a 3-point natural armor. He can add 2 extra points each time he develops this mutation again.",
  true,
),

new Mutation(
     "Retractable Bone Growth",
    2,
    0,
     "A bone growth can be extended from one of the character’s forearms.",
    "A bone growth can be extended from one of the character’s forearms. This weapon can be used with the Melee Combat Skill and deals 2D10 base damage (plus the Hand-to-Hand Combat Damage modifier).",
    false,
),

new Mutation(
     "Retractable Tentacle",
    1,
    0,
     "A tentacle can be extended from the character’s body and used as a new limb.",
    "A tentacle can be extended from the character’s body, and he can use it as a new limb.",
    false,
),

new Mutation(
     "Self-Fertilization",
    0,
    0,
     "This type of character does not have reproductive organs but can fertilize themselves.",
    "This type of character does not have any reproductive organs. However, they can fertilize themselves and give birth to a child.",
  true,
),

new Mutation(
     "Sexless",
    0,
    0,
     "The character is born without any genitals and is infertile.",
    "The character is born without any genitals. The character is, therefore, infertile.",
    false,
),
new Mutation(
     "Shape-shifter",
    4,
    1,
     "The character can take somebody else’s physical appearance.",
    "This mutation opens the Special Skill Metamorphosis (CON/WIL, -3) that can be developed at twice the cost. It enables the character to take somebody else’s physical appearance (and physical appearance only). If the shape-shifter wants to push his Skill further and mimic the imitated person’s behavior (gait, body language, voice, etc.), he must roll a Disguise/Imitation Test (he still receives the Success Modifier from his Metamorphosis Test though). Note: the character can in no way take any shape other than a humanoid’s. Furthermore, his Attributes and Skills remain unchanged—he cannot take those of the imitated character the way a Proteus would, for instance. The shape-shifter can retain his altered look for (Test Success Modifier) hours. The Difficulty for noticing the deceit is equal to half the character’s level in his Metamorphosis Skill (rounded down) plus his Success Modifier, plus the Success Modifier of a potential Disguise/Imitation Test. The GM must roll a Perception test for the character capable of noticing the deceit. This Test can receive a bonus depending on the shape-shifter’s behavior and it can be rolled with varying frequency (if his actions contrast with how the imitated character usually behaves).",
  true,
),
new Mutation(
     "Sixth Sense",
    1,
     "The character has a heightened awareness when surprised.",
    "If the character is Surprised, he receives a +3 bonus to his Reaction Tests (see the Combat chapter, page 214).",
  true,
),

new Mutation(
     "Sonar",
    3,
    1,
     "The character has sonar for detecting obstacles and can use it offensively.",
    "The character is gifted with a type of sonar that enables him to detect obstacles underwater or in the dark. This mutation opens the Special Skill Sonar (PER/PER) that can be developed at a normal cost. The sonar’s range in passive mode is equal to the Sonar Skill level x 10 meters. In active mode, the sonar gives more specific information about the contact at a range of Intelligence in meters for each level of the Sonar Skill, but the character may be detected. Coupled with a natural skill (such as the skill of the Hybrids), the mutation increases the character’s Perception with its level for passive detection (the base range of the natural skill will then be used). This Skill also enables the character to release a sonic wave that can be used as a weapon both underwater and in the open air. To do this, a successful Sonar Test is necessary, with the same modifiers as those usually applied to ranged combat. If used to find their bearings, this power is no more detectable than a dolphin or a bat’s echolocation. If used to attack underwater, this power is automatically detected over a range of several hundreds of meters as an extremely powerful active sonar. If used to attack in the open air, it creates a sonic boom that can be heard several dozen meters away. However, the effects of the attack are concentrated on one target only, and the character has to wait 20 rounds minus his Skill Mastery Level between two potential attacks. The Damage inflicted is 1D6+ Shock Damage: +2D6 underwater and +1D6 in the open air. The target must make a Shock Resistance Test with an added penalty equal to the Success Modifier obtained by the attacker.",
  true,
),

new Mutation(
     "Tail",
    1,
    1,
     "The character has a tail that can be used for combat or handling objects.",
    "The character has a tail. A character can learn how to handle objects with his tail, and even to attack with it or to use it as a normal limb. He can thus develop the Tail Agility Skill (COO/COO) at a normal cost. This Skill enables him to handle objects with his tail and represents a Limiting Skill for the following Skills: • Acrobatics/Balance: can perform acrobatic maneuvers with his tail. • Handguns: enables him to use small handguns. • Armed Combat: enables him to fight with small bladed weapons (the Hand-to-Hand Combat Damage Modifier does not apply). • Hand-to-Hand Combat: enables him to attack with his tail (1D10/2 Base Damage plus Hand-to-Hand Combat Damage Modifier).",
    false,
),
new Mutation(
     "Parasite",
    1,
     "The character is host to parasites, requiring extra food and causing damage.",
    "The character is host to 1D4 parasites. He needs to drink and eat twice as much as a normal person. Moreover, the parasites feed from his organism, diminishing his Physical Damage resistance by 1 point for every two parasites. In addition, once a week (or once an adventure, at the GM’s discretion), the character suffers an attack that inflicts 1D10 + (number of parasites) Physical Damage. This attack also occurs when the character does not feed the parasites sufficiently. On the other hand, each parasite grants its host an additional mutation to roll on the mutation table (excluding certain mutations). If a character wants to get rid of his parasites (or they are removed), he permanently loses 1 Constitution point for every two parasites that are removed.",
    false,
),


new Mutation(
     "Symbiont",
    3,
     "The character hosts symbionts, which provide benefits but require extra food and drink.",
    "The character hosts 1D4 symbionts. He needs to eat and drink twice as much as a normal person. If he does not, the character suffers an attack that inflicts 1D10 + (number of symbionts) Physical Damage at the end of the day. Each symbiont grants a bonus to one of the following: Either a +2 bonus in one Natural Resistance or an additional mutation (excluding certain mutations). If a character wants to get rid of his symbionts (or if they are removed), he permanently loses 1 Constitution point for every two symbionts that are removed.",
    false,
),

// Symbiont (Bonus to Natural Resistance)
new Mutation(
     "Symbiont(Bonus to Natural Resistance)",
   3,
     "Symbionts provide a +2 bonus to one Natural Resistance.",
    "Each symbiont grants a +2 bonus to one of the character's Natural Resistance attributes.",
    false,
)
]

allmutations.forEach(mutation => {
    if (typeof mutation.name !== 'string') {
        console.log("Invalid name in mutation:", mutation);
    }
});

const mutationTable = [
    { range: [1, 2], name: "Additional or Enhanced Sensory Organ", symbiotic: true, subRoll: "sensoryOrgan" },
    { range: [3, 6], name: "Amphibious", symbiotic: true },
    { range: [7, 9], name: "Androgynous", symbiotic: false },
    { range: [10, 12], name: "Claws", symbiotic: false },
    { range: [13, 14], name: "Contagion", symbiotic: true },
    { range: [15, 16], name: "Corrosive Touch", symbiotic: true },
    { range: [17, 19], name: "Empathy", symbiotic: true },
    { range: [20, 24], name: "Fangs", symbiotic: false },
    { range: [25, 28], name: "Genetic Animal Traits", symbiotic: true, subRoll: "geneticTraits" },
    { range: [29, 31], name: "Horn", symbiotic: false },
    { range: [32, 36], name: "Deformities (Light)", symbiotic: false },
    { range: [37, 38], name: "Missing Sensory Organ", symbiotic: false, subRoll: "missingSensoryOrgan" },
    { range: [39, 39], name: "Molecular Instability", symbiotic: false },
    { range: [40, 44], name: "Natural Resistance", symbiotic: true, subRoll: "naturalResistance" },
    { range: [45, 49], name: "Night Vision", symbiotic: true },
    { range: [50, 55], name: "Outdoor Adaptation", symbiotic: true },
    { range: [56, 56], name: "Parasite", symbiotic: false },
    { range: [57, 57], name: "Purulence", symbiotic: true },
    { range: [58, 58], name: "Radiation", symbiotic: true },
    { range: [59, 62], name: "Regeneration", symbiotic: true },
    { range: [63, 63], name: "Reinforced Skeleton", symbiotic: true },
    { range: [64, 68], name: "Reinforced Skin", symbiotic: true },
    { range: [69, 71], name: "Retractable Bone Growth", symbiotic: false },
    { range: [72, 74], name: "Retractable Tentacle", symbiotic: false },
    { range: [75, 77], name: "Self-fertilization", symbiotic: true },
    { range: [78, 80], name: "Deformities (Severe)", symbiotic: false },
    { range: [81, 83], name: "Sexless", symbiotic: false },
    { range: [84, 86], name: "Shape-Shifter", symbiotic: true },
    { range: [87, 91], name: "Sixth Sense", symbiotic: true },
    { range: [92, 94], name: "Sonar", symbiotic: true },
    { range: [95, 97], name: "Symbiont", symbiotic: false },
    { range: [98, 100], name: "Tail", symbiotic: false }
];




// Sub-roll functions
const subRolls = {
    sensoryOrgan: () => {
        const options = [
            "Enhanced Taste Buds",
            "Enhanced Smell",
            "Enhanced Touch",
            "Additional Ear",
            "Additional Eye"
        ];
        return options[Math.floor(Math.random() * options.length)];
    },

    geneticTraits: () => {
        const options = [
            "Feline",
            "Canine",
            "Reptilian",
            "Simian"
        ];
        return options[Math.floor(Math.random() * options.length)];
    },

    missingSensoryOrgan: () => {
        const options = [
            "Atrophied Taste Buds",
            "Atrophied Nose",
            "Atrophied Touch",
            "Missing Ear",
            "Missing Eye"
        ];
        return options[Math.floor(Math.random() * options.length)];
    },

    naturalResistance: () => {
        const options = [
            "Resistance to Fire",
            "Resistance to Cold",
            "Resistance to Drugs",
            "Resistance to Diseases",
            "Resistance to Poisons",
            "Resistance to Radiation"
        ];
        return options[Math.floor(Math.random() * options.length)];
    }
};
function rollMutation() {
    const roll = Math.floor(Math.random() * 100) + 1;
    console.log("Rolled:", roll);  // Debugging: Log the roll

    // Find the mutation based on the roll
    const mutationEntry = mutationTable.find(entry => roll >= entry.range[0] && roll <= entry.range[1]);

    if (!mutationEntry) {
        console.log("No mutation found for roll:", roll);  // Debugging: Log if no mutation is found
        return null;  // No mutation found, should not happen if the table is set up correctly.
    }

    console.log("Found mutation entry:", mutationEntry);  // Debugging: Log the found mutation entry

    // Build the full name by appending the sub-roll result if necessary
    let mutationName = mutationEntry.name;
    if (mutationEntry.subRoll) {
        const subRollResult = subRolls[mutationEntry.subRoll]();  // Call the appropriate sub-roll function
        mutationName +=  ` (${subRollResult})`;
    }

    console.log("Final mutation name with sub-roll (if applicable):", mutationName);

    // Normalize the case to avoid case sensitivity issues and trim spaces
    const normalizedMutationName = mutationName.toLowerCase().trim();

    // Log all mutation names to check for discrepancies (extra spaces, casing issues)
    console.log("All mutations in allmutations:", allmutations.map(mutation => mutation.name.toLowerCase().trim()));

    // Retrieve the full mutation details from the allmutations array
    const mutationDetails = allmutations.find(mutation => {
        // Ensure mutation.name is a string before calling toLowerCase and trimming spaces
        const mutationNameStr = mutation.name ? mutation.name.toString().toLowerCase().trim() : "";
        return mutationNameStr === normalizedMutationName;
    });

    if (!mutationDetails) {
        console.log("Mutation details not found in allmutations:", mutationName);  // Debugging: Log if mutation details are missing
        return null;  // Mutation details not found in allmutations
    }

    console.log("Final mutation ", mutationDetails.name);  // Debugging: Log the final mutation name

    // Return a new Mutation object with all its properties
    return new Mutation(
        mutationDetails.name,            // Mutation name (including sub-roll if applicable)
        mutationDetails.cpCost,  // CP cost
        mutationDetails.hasSkill,  // Skill availability
        mutationDetails.descriptionShort,  // Short description
        mutationDetails.descriptionFull,   // Full description
        mutationDetails.symbiotic      // Is the mutation symbiotic?
    );
}





   



