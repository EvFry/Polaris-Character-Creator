const skills = [
     // ================================
    // Combat (melee)
    // ================================
    {
        name: "Armed Combat",
        description: "",  // To be added later
        firstAttribute: "STR",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Hand-to-hand combat",
        description: "",  // To be added later
        firstAttribute: "STR",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Heavy weapons (melee)",
        description: "",
        firstAttribute: "STR",
        secondAttribute: "STR",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Martial Arts",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 1,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Martial Arts Options"
    },
    {
        name: "Special Weapons (melee)",
        description: "",
        firstAttribute: "",
        secondAttribute: "",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 1,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Special Weapons Options"
    },
     // ================================
    // Combat (Shooting)
    // ================================
    {
        name: "Bows, spearguns, Crossbows",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Handguns",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Heavy weapons (shooting)",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Sharpshooting",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Shoulder-Fired Weapons/Rifles",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Special Weapons (shooting)",
        description: "",
        firstAttribute: "",
        secondAttribute: "",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Special Weapon Options"
    },
    {
        name: "Throwing Weapons",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    // ================================
    // Communication/Social Relationships
    // ================================
    {
        name: "Artistic Expression",
        description: "",
        firstAttribute: "",
        secondAttribute: "",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Art Form"
    },
    {
        name: "Eloquence/Persuasion",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "PRE",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Empathic Analysis",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Intimidation",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Leadership",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Socializing/Seduction",
        description: "",
        firstAttribute: "PRE",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    // ================================
    // Knowledge
    // ================================
    {
        name: "Bureaucracy",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 5",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Business/Trafficking",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "PRE",
        hasPrerequisites: 1,
        prerequisites: "Education/General Knowledge 5",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Business/Trafficking Options"
    },
    {
        name: "Cartography",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 1,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Cryptography",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Education/General Knowledge",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Finding Information",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Gambling",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Knowledge of Nations/Organizations",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 1,
        skillchoice: 1,
        skilloptions: "Organization Options"
    },
    {
        name: "Navigation",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "WIL",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 1,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Science/Specialized Knowledge",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: ""
    },
    {
        name: "Strategy",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1,
        prerequisites: "Education/General knowledge 10",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Tactics",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1,
        skilloptions: "Tactics Options"
    },

    // ================================
    // Languages / Dialects
    // ================================
    {
        name: "Ancient Languages",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 1,
        exclusiveskill: 1,
        difficultskill: 1,
        npskill: 0,
        skillchoice: 1, 
        skilloptions: "Ancient Language Options"
    },
    {
        name: "Foreign Languages",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 1,
        exclusiveskill: 1,
        difficultskill: 1,
        npskill: 1, 
        skillchoice: 1,
        skilloptions: "Foreign Language Options"
    },
    {
        name: "Sign Language",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 10,
        exclusiveskill: 1, 
        difficultskill: 1,
        npskill: 0,
        skillchoice: 1, 
        skilloptions: "Specific Language"
    },
    {
        name: "Specialized Languages",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 1, 
        skillchoice: 1,
        skilloptions: "Specialized Language Options"
    },

    // ================================
    // Physical Abilities
    // ================================
    {
        name: "Acrobatics/Balance",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Athletics",
        description: "",
        firstAttribute: "STR",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Climbing",
        description: "",
        firstAttribute: "STR",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Endurance",
        description: "",
        firstAttribute: "CON",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "FOF Breathing",
        description: "",
        firstAttribute: "CON",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Underwater Maneuvering",
        description: "",
        firstAttribute: "STR",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Zero-G Maneuvering",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0, // assuming no explicit dots indicator here
        skilloptions: ""
    },

    // ================================
    // Piloting
    // ================================
    {
        name: "Armor Maneuvering",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Piloting",
        description: "",
        firstAttribute: "Varies",
        secondAttribute: "Varies",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Remote piloting",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },

    // ================================
    // Special Skills
    // ================================
    {
        name: "Absence",
        description: "",
        firstAttribute: "ADA",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Body Control",
        description: "",
        firstAttribute: "CON",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Control of Mutations",
        description: "",
        firstAttribute: "Varies",
        secondAttribute: "Varies",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Hybrid (Hybrids Only)",
        description: "",
        firstAttribute: "CON",
        secondAttribute: "COO",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Hypnosis",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Mastery of the Polaris Echo",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Mastery of the Polaris Effect",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Meditation",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Mental Shield",
        description: "",
        firstAttribute: "WIL",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Polaris Powers",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },

    // ================================
    // Stealth / Subterfuge
    // ================================
    {
        name: "Camouflage/Concealment",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Discretion/Shadowing",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Disguise/Deception",
        description: "",
        firstAttribute: "ADA",
        secondAttribute: "PRE",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Escape",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Pickpocket",
        description: "",
        firstAttribute: "COO",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Stealth/Silent Movement",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },

    // ================================
    // Survival / Outside
    // ================================
    {
        name: "Hunting/Tracking",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Knowledge of an Environment",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 1, // (NP)
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Observation",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Orientation",
        description: "",
        firstAttribute: "PER",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Survival",
        description: "",
        firstAttribute: "ADA",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },

    // ================================
    // Techniques
    // ================================
    {
        name: "Aquaculture/Livestock Farming",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Armory",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Art/Craftsmanship",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "PER",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Computer Hacking",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Computing",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Electronics",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Explosives",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "WIL",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "First Aid",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "ADA",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Forgery",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "PER",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Mechanics",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Onboard Weapons/Artillery",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Security Systems",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Soundscan Analysis",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Spying/Surveillance",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Surgery",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "ADA",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Technical Engineering",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 1, // †
        prerequisites: "Requires specialized training",
        limitingskill: 0,
        exclusiveskill: 1, // (X)
        difficultskill: 0,
        npskill: 0,
        skillchoice: 1, // has "[. . .]"
        skilloptions: ""
    },
    {
        name: "Training",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    },
    {
        name: "Traps",
        description: "",
        firstAttribute: "INT",
        secondAttribute: "INT",
        hasPrerequisites: 0,
        prerequisites: "",
        limitingskill: 0,
        exclusiveskill: 0,
        difficultskill: 1, // (-3)
        npskill: 0,
        skillchoice: 0,
        skilloptions: ""
    }
];

console.log(skills);
