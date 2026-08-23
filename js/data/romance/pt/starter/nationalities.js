// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "português",
        "level": "starter",
        "theme": "people",
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
        "lang": "pt",
        "transcription": "",
        "id": "pt_starter_people_001"
    },
    {
        "word": "brasileiro",
        "level": "starter",
        "theme": "people",
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
        "lang": "pt",
        "transcription": "",
        "id": "pt_starter_people_002"
    },
    {
        "word": "inglês",
        "level": "starter",
        "theme": "people",
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
        "lang": "pt",
        "transcription": "",
        "id": "pt_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
