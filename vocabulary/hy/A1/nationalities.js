// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "հայ",
        "level": "starter",
        "theme": "people",
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_001"
    },
    {
        "word": "ռուս",
        "level": "starter",
        "theme": "people",
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_002"
    },
    {
        "word": "ֆրանսիացի",
        "level": "starter",
        "theme": "people",
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
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_people_003"
    }
];
    const lang = "hy";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
