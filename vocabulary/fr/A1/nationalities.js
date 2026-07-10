// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "français",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "fr_starter_nationalities_001",
        "lang": "fr",
        "transcription": ""
    },
    {
        "word": "anglais",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "fr_starter_nationalities_002",
        "lang": "fr",
        "transcription": ""
    },
    {
        "word": "italien",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "fr_starter_nationalities_003",
        "lang": "fr",
        "transcription": ""
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
