// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "deutsch",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "de_starter_nationalities_001",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "österreichisch",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "de_starter_nationalities_002",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "schweizerisch",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "de_starter_nationalities_003",
        "lang": "de",
        "transcription": ""
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
