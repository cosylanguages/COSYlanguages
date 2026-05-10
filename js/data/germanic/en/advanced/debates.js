(function() {
    const data = [
        {
            "topic": "Flat organisational hierarchies vs vertical management — which better serves working adults?",
            "sideA": "Flat hierarchy",
            "sideB": "Vertical structure",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "ideasA": ["Faster decision making", "Empowers employees", "Promotes open communication"],
            "ideasB": ["Clear career progression", "Defined accountability", "Specialised leadership"]
        },
        {
            "topic": "The cult of productivity vs the case for idleness — which better reflects human needs?",
            "sideA": "Productivity",
            "sideB": "Idleness",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "ideasA": ["Sense of accomplishment", "Economic progress", "Structured goals"],
            "ideasB": ["Creative incubation", "Mental health recovery", "Resistance to commodification"]
        },
        {
            "topic": "Leadership as a learnable skill vs an innate quality — which is more defensible?",
            "sideA": "Learnable skill",
            "sideB": "Innate quality",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "ideasA": ["Democratic potential", "Training impact", "Experience builds wisdom"],
            "ideasB": ["Charismatic authority", "Natural temperament", "Instinctive decision making"]
        },
        {
            "topic": "Hustle culture vs slow living — which should define modern life?",
            "sideA": "Hustle culture",
            "sideB": "Slow living",
            "level": "advanced",
            "theme": "routine_A1",
            "ideasA": ["Ambitious growth", "Maximising potential", "Financial independence"],
            "ideasB": ["Mindful presence", "Sustaining quality", "Reduced stress levels"]
        },
        {
            "topic": "Corporate social responsibility as commitment vs reputational management — which is more true?",
            "sideA": "Genuine commitment",
            "sideB": "Reputational management",
            "level": "advanced",
            "theme": "organisational_culture_C1",
            "ideasA": ["Systemic social change", "Ethical investment", "Long-term sustainability"],
            "ideasB": ["Greenwashing risks", "Shareholder priority", "Public relations focus"]
        },
        {
            "topic": "Adult identity: fixed vs perpetually in construction — which better reflects reality?",
            "sideA": "Fixed identity",
            "sideB": "In construction",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Core personality traits", "Stable values", "Historical continuity"],
            "ideasB": ["Lifelong learning", "Evolving social roles", "Neuroplasticity"]
        },
        {
            "topic": "The domestication of feminism by consumer culture vs genuine social change — which is more prevalent?",
            "sideA": "Consumer feminism",
            "sideB": "Genuine change",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Performative activism", "Commodifying rights", "Surface-level diversity"],
            "ideasB": ["Legal breakthroughs", "Shift in power dynamics", "Structural equality"]
        },
        {
            "topic": "The pressure to be extraordinary vs the dignity of an ordinary life — which is more humane?",
            "sideA": "Extraordinary",
            "sideB": "Ordinary dignity",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Pushing human limits", "Inspiring progress", "Leaving a legacy"],
            "ideasB": ["Universal accessibility", "Inner peace", "Valuing common humanity"]
        },
        {
            "topic": "Radical honesty in relationships vs strategic silence — which is more ethical?",
            "sideA": "Radical honesty",
            "sideB": "Strategic silence",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Deepens trust", "Resolves hidden conflicts", "Authentic connection"],
            "ideasB": ["Protects feelings", "Maintains harmony", "Respects privacy boundaries"]
        },
        {
            "topic": "Technocratic governance vs democratic populism — which poses the greater risk?",
            "sideA": "Technocracy",
            "sideB": "Populism",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Lack of accountability", "Disconnected from people", "Expert bias"],
            "ideasB": ["Oversimplification", "Emotional manipulation", "Erosion of institutions"]
        },
        {
            "topic": "Patriotism as a civic virtue vs as a cognitive failure — which account is more persuasive?",
            "sideA": "Civic virtue",
            "sideB": "Cognitive failure",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Social cohesion", "Common sacrifice", "Cultural pride"],
            "ideasB": ["Tribalism risks", "Irrational bias", "Exclusive of others"]
        },
        {
            "topic": "Free speech absolutism vs regulated speech — which produces better democratic outcomes?",
            "sideA": "Absolutism",
            "sideB": "Regulated speech",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Marketplace of ideas", "Unfettered truth-seeking", "Checks on power"],
            "ideasB": ["Prevents harm", "Protects vulnerable groups", "Maintains social order"]
        },
        {
            "topic": "AI creativity vs human artistry — can machines truly create art?",
            "sideA": "AI creativity",
            "sideB": "Human artistry",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "ideasA": ["Unlimited synthesis", "New aesthetic forms", "Efficiency in creation"],
            "ideasB": ["Lived experience", "Emotional intent", "Subjective consciousness"]
        },
        {
            "topic": "Space exploration vs deep sea exploration — where should we focus resources?",
            "sideA": "Space",
            "sideB": "Deep sea",
            "level": "advanced",
            "theme": "science_tech_society_C1",
            "ideasA": ["Survival of species", "Infinite resources", "Advanced physics"],
            "ideasB": ["Immediate climate data", "Undiscovered biology", "Direct Earth impact"]
        },
        {
            "topic": "Digital privacy vs national security — is total surveillance ever justified?",
            "sideA": "Privacy",
            "sideB": "Security",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Human rights", "Protects dissent", "Digital autonomy"],
            "ideasB": ["Threat prevention", "Public safety", "Countering crime"]
        },
        {
            "topic": "Universal Basic Income vs job guarantee programs — what is the better safety net?",
            "sideA": "UBI",
            "sideB": "Job guarantee",
            "level": "advanced",
            "theme": "power_institutions_C1",
            "ideasA": ["Full autonomy", "Addresses automation", "Simple to implement"],
            "ideasB": ["Social meaning of work", "Skills maintenance", "Direct community value"]
        }
    ];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
