(function() {
    const data = [
        {
            "topic": "The Protestant work ethic as civilisational achievement vs as the original source of adult misery — which legacy dominates today?",
            "sideA": "Civilisational achievement",
            "sideB": "Source of misery",
            "level": "proficiency",
            "theme": "work_identity_meaning_C1",
            "ideasA": ["Drives innovation and growth", "Promotes discipline and purpose", "Foundation of modern prosperity"],
            "ideasB": ["Normalises burnout", "Ties worth to productivity", "Neglects leisure and reflection"]
        },
        {
            "topic": "The commodification of passion vs the liberation of turning work into meaning — is \"do what you love\" advice or a trap?",
            "sideA": "Practical advice",
            "sideB": "Systemic trap",
            "level": "proficiency",
            "theme": "work_identity_meaning_C1",
            "ideasA": ["Reduces workplace alienation", "Maximises personal potential", "Leads to higher quality output"],
            "ideasB": ["Exploits intrinsic motivation", "Ruins hobbies and interests", "Only accessible to the privileged"]
        },
        {
            "topic": "Career as identity vs career as means — which is the more coherent relationship for a modern adult to have with their work?",
            "sideA": "Identity",
            "sideB": "Means",
            "level": "proficiency",
            "theme": "work_identity_meaning_C1",
            "ideasA": ["Professional mastery", "Social contribution", "Continuous personal growth"],
            "ideasB": ["Prioritises private life", "Avoids professional ego", "Maintains healthy boundaries"]
        },
        {
            "topic": "The virtuous overworker vs the strategic idler — which has been more dishonestly celebrated in Western culture?",
            "sideA": "Overworker",
            "sideB": "Idler",
            "level": "proficiency",
            "theme": "work_identity_meaning_C1",
            "ideasA": ["Heroic sacrifice narrative", "Essential for competition", "Moral superiority of 'busy-ness'"],
            "ideasB": ["The 'genius' who doesn't try", "Romanticising laziness", "Ignoring the support staff required"]
        },
        {
            "topic": "Adult ambition as admirable vs adult ambition as a failure to accept finitude — which reading is more psychologically honest?",
            "sideA": "Admirable",
            "sideB": "Failure of finitude",
            "level": "proficiency",
            "theme": "work_identity_meaning_C1",
            "ideasA": ["Manifestation of human agency", "Striving for excellence", "Overcoming limitations"],
            "ideasB": ["Distraction from mortality", "Endless pursuit of 'more'", "Denial of current satisfaction"]
        },
        {
            "topic": "Romantic love as the organising principle of life vs as a commercially sustained myth — which is more defensible?",
            "sideA": "Organising principle",
            "sideB": "Commercial myth",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Deepest human connection", "Basis for family and community", "Transcendental experience"],
            "ideasB": ["The 'happily ever after' industry", "Unrealistic expectations", "Devaluation of other bonds"]
        },
        {
            "topic": "Radical transparency in relationships vs the necessity of a private self — can intimacy and individuation coexist?",
            "sideA": "Transparency",
            "sideB": "Private self",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Eliminates shame", "Total mutual understanding", "Absolute trust"],
            "ideasB": ["Preserves mystery", "Mental autonomy", "Prevents codependency"]
        },
        {
            "topic": "The ethics of care as a feminist corrective vs as a reassignment of the same burdens — has the concept delivered?",
            "sideA": "Feminist corrective",
            "sideB": "Reassignment of burdens",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Valuing relational work", "Alternative to market logic", "Humanises public policy"],
            "ideasB": ["Reinforces gendered roles", "Fails to redistribute labour", "Sentimentality over structure"]
        },
        {
            "topic": "Choosing to be childless as resistance to ideology vs as an entirely personal decision — can these be separated?",
            "sideA": "Resistance",
            "sideB": "Personal decision",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Challenging pronatalism", "Environmental statement", "Political act of autonomy"],
            "ideasB": ["Individual lifestyle fit", "Simple lack of desire", "Apolitical life path"]
        },
        {
            "topic": "Awareness of mortality as the precondition for a meaningful life vs as its primary obstacle — which is more liveable?",
            "sideA": "Precondition",
            "sideB": "Obstacle",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Inspires urgency and value", "Prioritises what matters", "Acceptance of reality"],
            "ideasB": ["Sources of existential dread", "Paralyses long-term action", "Nihilistic tendencies"]
        },
        {
            "topic": "Ageing as decline vs ageing as accumulation — which narrative is more honest, and which more useful?",
            "sideA": "Decline",
            "sideB": "Accumulation",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Physical and cognitive loss", "Confronting vulnerability", "Biological reality"],
            "ideasB": ["Wisdom and perspective", "Gathering of experiences", "Emotional resilience"]
        },
        {
            "topic": "The medicalisation of ageing as progress vs as a refusal to accept the human condition — where should we draw the line?",
            "sideA": "Progress",
            "sideB": "Refusal",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "ideasA": ["Alleviating suffering", "Extending healthy years", "Scientific triumph"],
            "ideasB": ["Fear of death", "The 'cure' for life", "Devaluing natural stages"]
        },
        {
            "topic": "Memory as the substance of identity vs memory as an unreliable narrator — what does this mean for the self?",
            "sideA": "Substance",
            "sideB": "Unreliable narrator",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Continuity of character", "Moral responsibility", "Accumulated wisdom"],
            "ideasB": ["Reconstructed narratives", "Cognitive biases", "Fluidity of identity"]
        },
        {
            "topic": "Complicity in unjust systems through consumption vs the irrelevance of individual moral purity — which framing is more honest?",
            "sideA": "Individual complicity",
            "sideB": "Structural focus",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Collective impact of choices", "Personal ethical integrity", "Market signals"],
            "ideasB": ["No ethical consumption under capitalism", "Policy over personal virtue", "Focus on power structures"]
        },
        {
            "topic": "Political disillusionment as a rational response vs as a form of privilege — which reading is more defensible?",
            "sideA": "Rational response",
            "sideB": "Form of privilege",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Evidence of corruption", "Broken promises", "Systemic failure"],
            "ideasB": ["Opting out is a luxury", "Silence helps the oppressor", "Ignoring the vulnerable"]
        },
        {
            "topic": "Intergenerational justice: moral challenge of our time vs concept that obscures class and racial inequality?",
            "sideA": "Moral challenge",
            "sideB": "Obscures inequality",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Climate responsibility", "Sustainable pensions", "Debt for the future"],
            "ideasB": ["Wealth gaps within generations", "Ignoring historical debts", "Divide and rule tactic"]
        },
        {
            "topic": "Liberal democracy as the least-bad system vs as a system that has structurally exhausted its capacity — which is it?",
            "sideA": "Least-bad system",
            "sideB": "Exhausted capacity",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Protects human rights", "Peaceful power transition", "Self-correcting nature"],
            "ideasB": ["Capture by elites", "Slow to face crises", "Inherent contradictions"]
        },
        {
            "topic": "The capacity for self-deception as a cognitive defect vs as an adaptive mechanism — which better serves the adult life?",
            "sideA": "Cognitive defect",
            "sideB": "Adaptive mechanism",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Loss of contact with reality", "Poor decision making", "Ethical failure"],
            "ideasB": ["Maintaining hope", "Psychological protection", "Social cohesion"]
        },
        {
            "topic": "Expertise as authority vs as a form of institutional power — when does scepticism become epistemic cowardice?",
            "sideA": "Epistemic authority",
            "sideB": "Institutional power",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": ["Deep specialised knowledge", "Basis for evidence-based policy", "Efficiency of division of labour"],
            "ideasB": ["Gatekeeping narratives", "Potential for bias", "Democratic scrutiny needed"]
        },
        {
            "topic": "Narrative as sense-making vs narrative as misleading — which function dominates how adults view their lives?",
            "sideA": "Sense-making",
            "sideB": "Misleading",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Creating coherence", "Moral framework", "Meaning-making"],
            "ideasB": ["Self-justification", "Simplifying complexity", "Ignoring chance"]
        },
        {
            "topic": "Honesty as an unconditional virtue vs as a contextual one — is there a coherent account of truthfulness in real life?",
            "sideA": "Unconditional virtue",
            "sideB": "Contextual virtue",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Categorical imperative", "Universal trust", "Personal integrity"],
            "ideasB": ["Minimising harm", "Compassionate white lies", "Nuance of social roles"]
        },
        {
            "topic": "The adult who has \"finally figured it out\" vs the adult who has accepted they never will — which is more sophisticated?",
            "sideA": "Figured it out",
            "sideB": "Accepted never will",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": ["Stability of wisdom", "Consistent principles", "Confidence in action"],
            "ideasB": ["Intellectual humility", "Openness to change", "Reflecting human complexity"]
        },
        {
            "topic": "Telling your therapist everything vs telling your hairdresser everything — which is more transformative?",
            "sideA": "Therapist",
            "sideB": "Hairdresser",
            "level": "proficiency",
            "theme": "psychoanalysis_unconscious_C2",
            "ideasA": ["Professional framework", "Safe disclosure", "Evidence-based change"],
            "ideasB": ["Unstructured intimacy", "Community connection", "Lightness of touch"]
        },
        {
            "topic": "Language: Constitutive vs Expressive",
            "sideA": "Constitutive",
            "sideB": "Expressive",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Shapes reality",
                "Limits thought"
            ],
            "ideasB": [
                "Reflects reality",
                "Tool for thought"
            ]
        },
        {
            "topic": "Precision vs Ambiguity — which is more valuable in human communication?",
            "sideA": "Precision",
            "sideB": "Ambiguity",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Clarity",
                "Efficiency"
            ],
            "ideasB": [
                "Nuance",
                "Diplomacy"
            ]
        },
        {
            "topic": "Rhetoric vs Logic — which has more power in the modern world?",
            "sideA": "Rhetoric",
            "sideB": "Logic",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Persuasive power",
                "Emotional appeal"
            ],
            "ideasB": [
                "Objective truth",
                "Structural validity"
            ]
        },
        {
            "topic": "Literal vs Interpretive Meaning — where does the truth of a text lie?",
            "sideA": "Literal",
            "sideB": "Interpretive",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                "Author intent",
                "Stability"
            ],
            "ideasB": [
                "Reader response",
                "Evolving context"
            ]
        },
        {
            "topic": "Scientific Consensus vs Epistemic Humility — which better serves the progress of knowledge?",
            "sideA": "Consensus",
            "sideB": "Humility",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Established knowledge",
                "Expert authority"
            ],
            "ideasB": [
                "Openness to correction",
                "Recognizing limits"
            ]
        },
        {
            "topic": "Expertise vs Lived Experience — which is the superior form of insight?",
            "sideA": "Expertise",
            "sideB": "Lived Experience",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Scientific rigor",
                "Objective data"
            ],
            "ideasB": [
                "Authentic truth",
                "Contextual insight"
            ]
        },
        {
            "topic": "Doubt: Virtue vs Paralysis — which is the more honest intellectual state?",
            "sideA": "Virtue",
            "sideB": "Paralysis",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Critical thinking",
                "Skepticism"
            ],
            "ideasB": [
                "Indecision",
                "Lack of action"
            ]
        },
        {
            "topic": "Narrative vs Data — which offers a better map of the world?",
            "sideA": "Narrative",
            "sideB": "Data",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Emotional impact",
                "Human connection"
            ],
            "ideasB": [
                "Statistical truth",
                "Scalability"
            ]
        },
        {
            "topic": "Legitimacy: Consent vs Outcome — which matters more for governance?",
            "sideA": "Consent",
            "sideB": "Outcome",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Democratic process",
                "Moral right"
            ],
            "ideasB": [
                "Efficiency",
                "Effective governance"
            ]
        },
        {
            "topic": "State: Guarantor of Liberty vs Threat to it — which is the more essential role?",
            "sideA": "Guarantor",
            "sideB": "Threat",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Rule of law",
                "Protection of rights"
            ],
            "ideasB": [
                "Abuse of power",
                "Surveillance"
            ]
        },
        {
            "topic": "Rights-based vs Responsibility-based Politics — which creates a healthier society?",
            "sideA": "Rights",
            "sideB": "Responsibilities",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Individual liberty",
                "Legal protection"
            ],
            "ideasB": [
                "Collective duty",
                "Social cohesion"
            ]
        },
        {
            "topic": "Neutrality vs Value-laden Governance — can the state ever be neutral?",
            "sideA": "Neutrality",
            "sideB": "Value-laden",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Impartiality",
                "Fairness"
            ],
            "ideasB": [
                "Moral direction",
                "Social purpose"
            ]
        },
        {
            "topic": "Intention vs Reception in Art — which determines meaning?",
            "sideA": "Intention",
            "sideB": "Reception",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                "Author's vision",
                "Original context"
            ],
            "ideasB": [
                "Audience meaning",
                "Cultural impact"
            ]
        },
        {
            "topic": "Aesthetic vs Moral Value — can art be good if it is immoral?",
            "sideA": "Aesthetic",
            "sideB": "Moral",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                "Art for art's sake",
                "Pure beauty"
            ],
            "ideasB": [
                "Social utility",
                "Ethical impact"
            ]
        },
        {
            "topic": "The Avant-garde vs Accessibility — who is art for?",
            "sideA": "Avant-garde",
            "sideB": "Accessibility",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                "Pushing boundaries",
                "Intellectual challenge"
            ],
            "ideasB": [
                "Inclusivity",
                "Democratic art"
            ]
        },
        {
            "topic": "Institutional Art vs Outsider Art — where does value come from?",
            "sideA": "Institutional",
            "sideB": "Outsider",
            "level": "proficiency",
            "theme": "aesthetics_criticism_C2",
            "ideasA": [
                "Historical preservation",
                "Standards"
            ],
            "ideasB": [
                "Raw authenticity",
                "Anti-establishment"
            ]
        },
        {
            "topic": "Precautionary vs Proactionary Principle — how should we face the unknown?",
            "sideA": "Precautionary",
            "sideB": "Proactionary",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Risk avoidance",
                "Safety first"
            ],
            "ideasB": [
                "Innovation",
                "Embracing change"
            ]
        },
        {
            "topic": "Scientific Progress: Inherently Good vs Neutral — is knowledge always beneficial?",
            "sideA": "Inherently Good",
            "sideB": "Ethically Neutral",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Enlightenment values",
                "Solving problems"
            ],
            "ideasB": [
                "Dual-use concern",
                "Human responsibility"
            ]
        },
        {
            "topic": "Existential Risk vs Present Suffering — what should we prioritise?",
            "sideA": "Existential Risk",
            "sideB": "Present Suffering",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Long-term survival",
                "Future generations"
            ],
            "ideasB": [
                "Immediate relief",
                "Urgent poverty"
            ]
        },
        {
            "topic": "Human Consciousness vs Artificial General Intelligence — what is the difference?",
            "sideA": "Consciousness",
            "sideB": "AGI",
            "level": "proficiency",
            "theme": "epistemology_truth_C2",
            "ideasA": [
                "Biological uniqueness",
                "Subjective experience"
            ],
            "ideasB": [
                "Computational power",
                "Algorithmic logic"
            ]
        },
        {
            "topic": "Progress: Real vs Illusion — are we actually moving forward?",
            "sideA": "Real",
            "sideB": "Illusion",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Technological advancement",
                "Improved quality of life"
            ],
            "ideasB": [
                "Cyclical history",
                "New problems"
            ]
        },
        {
            "topic": "Liberal Order vs Multipolar World — which is more stable?",
            "sideA": "Liberal Order",
            "sideB": "Multipolarity",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Universal values",
                "Global stability"
            ],
            "ideasB": [
                "Diverse power",
                "Cultural sovereignty"
            ]
        },
        {
            "topic": "Memory vs Forgetting — which is better for society?",
            "sideA": "Memory",
            "sideB": "Forgetting",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Learning from history",
                "Identity"
            ],
            "ideasB": [
                "Moving forward",
                "Overcoming trauma"
            ]
        },
        {
            "topic": "Tragedy of the Commons vs Cooperation — can we share the world?",
            "sideA": "Tragedy",
            "sideB": "Cooperation",
            "level": "proficiency",
            "theme": "ontology_metaphysics_C2",
            "ideasA": [
                "Self-interest",
                "Resource depletion"
            ],
            "ideasB": [
                "Mutual benefit",
                "Collective management"
            ]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
