// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "հայ",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇦🇲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Հայաստանից:",
                "examples": [
                    "Ես հայ եմ:"
                ]
            }
        ],
        "id": "hy_starter_nationalities_001",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "ռուս",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇷🇺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ռուսաստանից:",
                "examples": [
                    "Նա ռուս է:"
                ]
            }
        ],
        "id": "hy_starter_nationalities_002",
        "lang": "hy",
        "transcription": ""
    },
    {
        "word": "ֆրանսիացի",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇫🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Ֆրանսիայից:",
                "examples": [
                    "Նա ֆրանսիացի է:"
                ]
            }
        ],
        "id": "hy_starter_nationalities_003",
        "lang": "hy",
        "transcription": ""
    }
];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
