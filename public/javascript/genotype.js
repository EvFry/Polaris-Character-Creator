import { Genotype } from "./define";



export let allgenotypes = {
    naturalHybrid: new Genotype (
        "Natural Hybrid",
        5,
        true,
        "Natural Hybrids (also called Neo-Hybrids) are highly adapted to underwater life. They experience significant physiological changes, including bone structure alteration, improved underwater perception, and gradual transformation over time. However, they suffer from extreme heat sensitivity, claustrophobia, and dependence on water environments.",

        `
        <p>Natural Hybrids (also called Neo-Hybrids) are highly adapted to underwater life. They experience significant physiological changes, including bone structure alteration, improved underwater perception, and gradual transformation over time. However, they suffer from extreme heat sensitivity, claustrophobia, and dependence on water environments.</p>

        <p><strong>Advantages:</strong></p>
        <ul>
            <li><strong>Special Hybrid Skill:</strong> Starts at Mastery Level +3, usable instead of Underwater Maneuvering and Athletics when swimming.</li>
            <li><strong>Evolving Mutation:</strong> Physical features change progressively with depth and adaptation.</li>
            <li><strong>Resistance to Physical Damage:</strong> Gains stacking modifiers depending on environment.</li>
            <li><strong>Enhanced Visual Perception:</strong> Gains underwater perception bonuses while suffering from light sensitivity.</li>
            <li><strong>Aquatic Adaptation:</strong> Moves effortlessly underwater without skill limitations.</li>
            <li><strong>Immune to Cold (in water):</strong> No penalties from cold temperatures while submerged.</li>
            <li><strong>Underwater Perception:</strong> Can perceive shapes and movement even in darkness.</li>
        </ul>

        <p><strong>Disadvantages:</strong></p>
        <ul>
            <li><strong>Heat Sensitivity:</strong> Increased vulnerability to fire and heat; suffers from fatigue penalties.</li>
            <li><strong>Water Environment-Dependent:</strong> Must perform Willpower tests when out of water for prolonged periods.</li>
            <li><strong>Claustrophobia:</strong> Suffers penalties in confined spaces and when wearing armor.</li>
            <li><strong>Trident Mental Block:</strong> Must pass Willpower tests to act against Priests of the Trident.</li>
            <li><strong>Wanted:</strong> Natural Hybrids are highly sought-after and must be cautious about who they trust.</li>
        </ul>
    `,
        {
            Strength: +1,
            Constitution: +2,
            Coordination: +2,
            Adaptation: +1,
            Intelligence: -2
        }
    ),
    
    genoHybrid: new Genotype (
        "Geno-Hybrid",
        5,
        true,
        "A human modified by the Cult of the Trident to survive underwater without visible alterations.",
        `
            
            <p>A Geno-Hybrid is a human who was changed by the Cult of the Trident’s technology in order to survive in an aquatic environment. He can maneuver underwater without difficulty and without alterations to his appearance. Becoming a Geno-Hybrid requires at least a year in the Cult of the Trident’s Special Intervention Group. Some rumors suggest the Black Sun also creates Geno-Hybrids.</p>
    
            <p><strong>Advantages:</strong></p>
            <ul>
                <li><strong>Aquatic Adaptation:</strong> Can move underwater without penalties and faster than normal humans.</li>
                <li><strong>Immune to Cold (Water Only):</strong> Does not suffer cold penalties while submerged.</li>
                <li><strong>Underwater Perception:</strong> Enhanced perception underwater, detecting movement and shapes in darkness.</li>
            </ul>
    
            <p><strong>Disadvantages:</strong></p>
            <ul>
                <li><strong>Claustrophobia:</strong> Suffers a -3 penalty in confined spaces and armor causes additional stress penalties.</li>
                <li><strong>Water Environment-Dependent:</strong> Must roll Willpower tests when spending extended time out of water, suffering stacking penalties and physical debilitation if tests fail.</li>
                <li><strong>Heat Sensitive:</strong> Takes +2 damage from fire and heat-based attacks.</li>
                <li><strong>Trident Mental Block:</strong> Experiences a -7 penalty to Willpower tests when opposing a Priest of the Trident.</li>
                <li><strong>Wanted:</strong> Some factions actively seek out Geno-Hybrids, making them targets.</li>
            </ul>
    
            <p><strong>Unique Traits:</strong></p>
            <ul>
                <li><strong>Special Hybrid Skill:</strong> Unlike Natural Hybrids, starts at +0 Mastery Level and must develop the skill normally.</li>
                <li><strong>Evolving Mutation:</strong> Less pronounced physical changes, but noticeable at +10 Hybrid Skill Mastery Level.</li>
                <li><strong>Resistance & Perception Changes:</strong> Similar stacking penalties to Natural Hybrids, but at reduced frequency.</li>
            </ul>
        `,
        {
            Strength: +1,
            Constitution: +1,
            Coordination: +2,
            Presence: -2
        }
    ),
    

    technoHybrid: new Genotype(
        "Techno-Hybrid",
        5,
        true,
        "A heavily modified individual, altered by the Hegemony to survive in deep-sea environments at great physical and social cost.",
        `
        
        <p>Techno-Hybrids are individuals who have undergone extreme modifications to survive in the ocean. Their physical abilities far surpass normal humans, but they are often viewed as monsters due to their grotesque appearance. Most Techno-Hybrids were forcibly altered by the Hegemony, typically as soldiers or prisoners.</p>

        <p><strong>Advantages:</strong></p>
        <ul>
            <li><strong>Immune to Cold (Water Only):</strong> Does not suffer penalties from cold while submerged.</li>
            <li><strong>Underwater Perception:</strong> Can perceive movements and shapes even in total darkness, up to (2 meters x Perception Attribute).</li>
            <li><strong>Superior Strength & Constitution:</strong> Stronger and more resilient than normal humans.</li>
            <li><strong>High Willpower:</strong> Enhanced mental resilience against fear and mind control.</li>
        </ul>

        <p><strong>Disadvantages:</strong></p>
        <ul>
            <li><strong>Heat Sensitivity:</strong> Takes +2 additional damage from heat and fire.</li>
            <li><strong>Water Environment-Dependent:</strong> After a number of hours out of water equal to Willpower, must roll Willpower tests at increasing difficulty (-2 cumulative every 10 hours).</li>
            <li><strong>Claustrophobia:</strong> Suffers a -3 penalty in confined spaces. Wearing armor requires hourly Willpower tests with a stacking -2 penalty per hour. Failure may cause panic or paralysis.</li>
            <li><strong>Wanted:</strong> Many Techno-Hybrids are fugitives, constantly hunted by Hegemony authorities.</li>
        </ul>

        <p><strong>Unique Traits:</strong></p>
        <ul>
            <li><strong>No Evolving Mutation:</strong> Unlike Natural Hybrids, their modifications are static.</li>
            <li><strong>Special Hybrid Skill:</strong> Starts at +0 Mastery Level and must be developed separately. Cannot be used to replace Underwater Maneuvering or Athletics.</li>
            <li><strong>Maximum Depth:</strong> Can dive up to 3,000m + (Hybrid Level x 750m). Requires a minimum Hybrid Skill Level of 1 to go below 100m.</li>
        </ul>
    `,
        {
            Strength: +2,
            Constitution: +3,
            Adaptation: -2,
            Willpower: +3,
            Presence: -6
        }
    ),
    
    technoHybridDeserter: new Genotype(
        "Techno-Hybrid (Deserter)",
        4,
        true,
        "A Techno-Hybrid who has abandoned the Hegemony, making them a hunted fugitive but with slightly lower CP cost.",
        `
       
        <p>Deserter Techno-Hybrids are fugitives who have escaped the control of the Hegemony. They live in constant fear of being hunted by the Prism, the Hegemony's secret police. Like all Techno-Hybrids, they possess superior underwater capabilities, immunity to cold, and heightened underwater perception. However, they also suffer from severe claustrophobia, a dependency on water, and an increased vulnerability to heat. Deserters must constantly hide their identities and find ways to evade capture, making their lives a perilous existence.</p>

        <p><strong>Advantages:</strong></p>
        <ul>
            <li><strong>Immune to Cold (Water Only):</strong> No penalties from cold temperatures while submerged.</li>
            <li><strong>Underwater Perception:</strong> Can detect movement and shapes even in total darkness.</li>
            <li><strong>Superior Physicality:</strong> Gains enhanced Strength, Constitution, and Willpower.</li>
        </ul>

        <p><strong>Disadvantages:</strong></p>
        <ul>
            <li><strong>Heat Sensitivity:</strong> Increased vulnerability to fire and heat, taking +2 additional damage.</li>
            <li><strong>Water Environment-Dependent:</strong> Must roll Willpower tests when spending extended time out of water, suffering stacking penalties if failed.</li>
            <li><strong>Claustrophobia:</strong> -3 penalty in tight spaces, with additional Willpower tests required for prolonged armor use.</li>
            <li><strong>Hunted by the Hegemony:</strong> Constantly at risk of being captured, must take precautions to avoid detection.</li>
        </ul>

        <p><strong>Unique Traits:</strong></p>
        <ul>
            <li><strong>Reduced CP Cost:</strong> Costs only 4 CP instead of 5 due to the constant risk of being hunted.</li>
            <li><strong>No Evolving Mutation:</strong> Unlike Natural Hybrids, their transformations do not progress over time.</li>
            <li><strong>Special Hybrid Skill:</strong> Must be developed separately, does not replace standard swimming skills.</li>
            <li><strong>Maximum Depth:</strong> Can dive up to 3,000m + (Hybrid Level x 750m). Requires Hybrid Skill Level 1 to exceed 100m.</li>
        </ul>
    `,
        {
            Strength: +2,
            Constitution: +3,
            Adaptation: -2,
            Willpower: +3,
            Presence: -6
        }
    )
    
}