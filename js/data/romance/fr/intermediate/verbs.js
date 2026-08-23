// TODO: verify level classification
(function() {
const data = [
    {
        "id": "fr_intermediate_social_122",
        "word": "jardiner",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Travailler dans un jardin pour faire pousser des plantes.",
                "examples": [
                    "Il aime jardiner le week-end."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍🌾",
        "_legacy": {
            "group": "er",
            "classification": "regular",
            "aspect": "action",
            "subtext": "jardiner le week-end",
            "v3": "jardiné",
            "auxiliary": "avoir",
            "v4": "jardinant"
        }
    },
    {
        "id": "fr_intermediate_social_123",
        "word": "faire du bénévolat",
        "lang": "fr",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Offrir de faire quelque chose sans être payé.",
                "examples": [
                    "Elle fait du bénévolat à la banque alimentaire locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "group": "re",
            "classification": "irregular",
            "aspect": "action",
            "subtext": "",
            "v3": "fait du bénévolat",
            "auxiliary": "avoir"
        }
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);


    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();