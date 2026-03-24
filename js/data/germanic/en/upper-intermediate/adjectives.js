(function() {
    const data = [
    {
        "word": "civic",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "emoji": "🏛️",
        "form": "adjective",
        "subtext": "civic duty, civic engagement",
        "definitions": [
            {
                "text": "Relating to a town, city, or the people who live there.",
                "examples": [
                    "Voting is a civic duty.",
                    "The city was awarded a prize for civic improvement."
                ]
            }
        ]
    },
    {
        "word": "chronic",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "⏳🤒",
        "form": "adjective",
        "subtext": "chronic pain, chronic illness",
        "opposite": "acute",
        "definitions": [
            {
                "text": "Lasting a long time; of a health condition that is persistent.",
                "examples": [
                    "She suffers from chronic back pain.",
                    "He has a chronic respiratory condition."
                ]
            }
        ]
    },
    {
        "word": "preventive",
        "level": "upper-intermediate",
        "theme": "serious_illness_treatment_B2",
        "emoji": "🛡️",
        "form": "adjective",
        "subtext": "preventive medicine, preventive measure",
        "definitions": [
            {
                "text": "Designed to stop something bad from happening.",
                "examples": [
                    "Preventive medicine reduces long-term costs.",
                    "They took preventive action to avoid a strike."
                ]
            }
        ]
    },
    {
        "word": "moral",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "⚖️",
        "form": "adjective",
        "subtext": "moral decision, moral obligation",
        "definitions": [
            {
                "text": "Relating to principles of right and wrong behaviour.",
                "examples": [
                    "She made a moral decision to refuse the money.",
                    "Is it a moral issue or a legal one?"
                ]
            }
        ]
    },
    {
        "word": "ethical",
        "level": "upper-intermediate",
        "theme": "ethical_dilemmas_B2",
        "emoji": "🤔⚖️",
        "form": "adjective",
        "subtext": "ethical investment, ethical standards",
        "definitions": [
            {
                "text": "Relating to ethics; following accepted rules of right conduct.",
                "examples": [
                    "Companies must operate in an ethical way.",
                    "Is it ethical to experiment on animals?"
                ]
            }
        ]
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
