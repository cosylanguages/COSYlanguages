// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "word": "français",
        "level": "starter",
        "theme": "people",
        "emoji": "🇫🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "De France.",
                "examples": [
                    "Je suis français."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "",
        "id": "fr_starter_people_001"
    },
    {
        "word": "anglais",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "D'Angleterre.",
                "examples": [
                    "Il est anglais."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "",
        "id": "fr_starter_people_002"
    },
    {
        "word": "italien",
        "level": "starter",
        "theme": "people",
        "emoji": "🇮🇹",
        "form": "adjective",
        "definitions": [
            {
                "text": "D'Italie.",
                "examples": [
                    "Elle est italienne."
                ]
            }
        ],
        "lang": "fr",
        "transcription": "",
        "id": "fr_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
