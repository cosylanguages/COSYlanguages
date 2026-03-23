(function() {
    const data = [
    {
        "word": "jardiner",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "definitions": [
            {
                "text": "Travailler dans un jardin pour faire pousser des plantes.",
                "examples": [
                    "Il aime jardiner le week-end."
                ]
            }
        ]
    },
    {
        "word": "faire du bénévolat",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "se porter volontaire",
        "definitions": [
            {
                "text": "Offrir de faire quelque chose sans être payé.",
                "examples": [
                    "Elle fait du bénévolat à la banque alimentaire locale."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
