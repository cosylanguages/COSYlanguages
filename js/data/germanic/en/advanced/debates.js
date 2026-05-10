(function() {
    const data = [{
                "topic": "Flat organisational hierarchies vs vertical management structures — which better serves the adults who work within them?",
                "sideA": "Flat hierarchy",
                "sideB": "Vertical structure",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The cult of productivity vs the case for idleness — which better reflects what humans actually need from work?",
                "sideA": "Productivity",
                "sideB": "Idleness",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Leadership as a learnable skill vs leadership as an innate quality — which account is more empirically defensible?",
                "sideA": "Learnable skill",
                "sideB": "Innate quality",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Hustle culture vs slow living — which is winning, and which should win?",
                "sideA": "Hustle culture",
                "sideB": "Slow living",
                "level": "advanced",
                "theme": "routine_A1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Corporate social responsibility as genuine commitment vs as reputational management — which framing is more honest?",
                "sideA": "Genuine commitment",
                "sideB": "Reputational management",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Adult identity as fixed vs perpetually in construction — which account better reflects lived experience?",
                "sideA": "Fixed identity",
                "sideB": "In construction",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The domestication of feminism by consumer culture vs feminism genuinely reshaping adult life — which is more true?",
                "sideA": "Consumer feminism",
                "sideB": "Genuine reshape",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Midlife crisis as pathology vs midlife crisis as legitimate reassessment — which framing is more useful?",
                "sideA": "Pathology",
                "sideB": "Reassessment",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The pressure to be extraordinary vs the dignity of an ordinary life — which is the more humane ideal to hold?",
                "sideA": "Extraordinary",
                "sideB": "Ordinary dignity",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The obligation to care for ageing parents vs the state's responsibility — where should the burden fall?",
                "sideA": "Family obligation",
                "sideB": "State responsibility",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Radical honesty in relationships vs strategic silence — which is the more ethical approach to intimacy?",
                "sideA": "Radical honesty",
                "sideB": "Strategic silence",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Choosing your social circle deliberately vs letting relationships form organically — which produces more authentic adult friendships?",
                "sideA": "Deliberate choice",
                "sideB": "Organic formation",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The nuclear family as the optimal social unit vs as a historically contingent arrangement — which view is more defensible?",
                "sideA": "Optimal unit",
                "sideB": "Historical arrangement",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Technocratic governance vs democratic populism — which poses the greater long-term risk to adult citizens?",
                "sideA": "Technocracy",
                "sideB": "Populism",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Intergenerational justice vs present welfare — which should take priority in public policy?",
                "sideA": "Intergenerational justice",
                "sideB": "Present welfare",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The obligation to vote vs the right to abstain — which is the more defensible civic position?",
                "sideA": "Obligation to vote",
                "sideB": "Right to abstain",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Patriotism as a civic virtue vs patriotism as a cognitive failure — which account is more persuasive?",
                "sideA": "Civic virtue",
                "sideB": "Cognitive failure",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Free speech absolutism vs regulated speech — which produces better outcomes for adult democratic societies?",
                "sideA": "Absolutism",
                "sideB": "Regulated speech",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "A meaningful career vs a job that funds a meaningful private life — which is the more honest adult ambition?",
                "sideA": "Meaningful career",
                "sideB": "Funding private life",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Religion vs secular philosophy — which more effectively addresses the existential needs of modern adults?",
                "sideA": "Religion",
                "sideB": "Secular philosophy",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The examined life vs the absorbed life — which is more worth living, and who gets to decide?",
                "sideA": "Examined life",
                "sideB": "Absorbed life",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Legacy vs presence — which is a more coherent thing for an adult to strive for?",
                "sideA": "Legacy",
                "sideB": "Presence",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The adult who has \"finally figured it out\" vs the adult who has accepted they never will — which is more self-aware?",
                "sideA": "Figured it out",
                "sideB": "Accepted never will",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Telling your therapist everything vs telling your hairdresser everything — which professional relationship is more therapeutically effective?",
                "sideA": "Therapist",
                "sideB": "Hairdresser",
                "level": "advanced",
                "theme": "psychological_concepts_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "The Sunday anxiety of an adult with a full schedule vs the Sunday anxiety of an adult with an empty one — which is more existentially troubling?",
                "sideA": "Full schedule",
                "sideB": "Empty schedule",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Overthinking every major life decision vs making them impulsively — which strategy has the better empirical track record?",
                "sideA": "Overthinking",
                "sideB": "Impulsiveness",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Adults who read self-help books vs adults who refuse to — which group is harder to talk to at a dinner party?",
                "sideA": "Self-help readers",
                "sideB": "Refuse to read",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "AI creativity vs human artistry — can machines truly create art?",
                "sideA": "AI creativity",
                "sideB": "Human artistry",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Space exploration vs deep sea exploration — where should we focus our resources?",
                "sideA": "Space",
                "sideB": "Deep sea",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Digital privacy vs national security — is total surveillance ever justified?",
                "sideA": "Privacy",
                "sideB": "Security",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Genetically modified food vs organic farming — how should we feed the world?",
                "sideA": "GMOs",
                "sideB": "Organic",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            },
            {
                "topic": "Universal Basic Income vs job guarantee programs — what is the best social safety net?",
                "sideA": "UBI",
                "sideB": "Job guarantee",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Pro idea 1", "Pro idea 2"],
                "ideasB": ["Con idea 1", "Con idea 2"]
            }];
    const lang = "en";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();