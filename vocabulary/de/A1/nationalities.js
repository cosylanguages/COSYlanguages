// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "deutsch",
        "level": "starter",
        "theme": "people",
        "emoji": "🇩🇪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Aus Deutschland.",
                "examples": [
                    "Ich bin deutsch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_001"
    },
    {
        "word": "österreichisch",
        "level": "starter",
        "theme": "people",
        "emoji": "🇦🇹",
        "form": "adjective",
        "definitions": [
            {
                "text": "Aus Österreich.",
                "examples": [
                    "Er ist österreichisch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_002"
    },
    {
        "word": "schweizerisch",
        "level": "starter",
        "theme": "people",
        "emoji": "🇨🇭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Aus der Schweiz.",
                "examples": [
                    "Sie ist schweizerisch."
                ]
            }
        ],
        "lang": "de",
        "transcription": "",
        "id": "de_starter_people_003"
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
