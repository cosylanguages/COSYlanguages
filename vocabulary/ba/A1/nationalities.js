// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "башҡорт",
        "level": "starter",
        "theme": "people",
        "emoji": "⬜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Башҡортостандан.",
                "examples": [
                    "Мин башҡорт."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_001"
    },
    {
        "word": "урыҫ",
        "level": "starter",
        "theme": "people",
        "emoji": "🇷🇺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Россиянан.",
                "examples": [
                    "Ул урыҫ."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_002"
    },
    {
        "word": "татар",
        "level": "starter",
        "theme": "people",
        "emoji": "⬜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Татарстандан.",
                "examples": [
                    "Алар татар."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
