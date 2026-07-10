// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "português",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇵🇹",
        "form": "adjective",
        "definitions": [
            {
                "text": "De Portugal.",
                "examples": [
                    "Sou português."
                ]
            }
        ],
        "id": "pt_starter_nationalities_001",
        "lang": "pt",
        "transcription": ""
    },
    {
        "word": "brasileiro",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇧🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Do Brasil.",
                "examples": [
                    "Ele é brasileiro."
                ]
            }
        ],
        "id": "pt_starter_nationalities_002",
        "lang": "pt",
        "transcription": ""
    },
    {
        "word": "inglês",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "Da Inglaterra.",
                "examples": [
                    "Ela é inglesa."
                ]
            }
        ],
        "id": "pt_starter_nationalities_003",
        "lang": "pt",
        "transcription": ""
    }
];
    const lang = "pt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
