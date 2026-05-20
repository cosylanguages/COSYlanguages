(function() {
    const data = [
    {
        "word": "jardiner",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "jardiner le week-end",
        "synonyms": [
            "jardinage bio"
        ],
        "definitions": [
            {
                "text": "Travailler dans un jardin pour faire pousser des plantes.",
                "examples": [
                    "Il aime jardiner le week-end."
                ]
            }
        ],
        "v3": "jardiné",
        "auxiliary": "avoir"
    },
    {
        "word": "faire du bénévolat",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "se porter volontaire"
        ],
        "definitions": [
            {
                "text": "Offrir de faire quelque chose sans être payé.",
                "examples": [
                    "Elle fait du bénévolat à la banque alimentaire locale."
                ]
            }
        ],
        "v3": "fait du bénévolat",
        "auxiliary": "avoir"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();