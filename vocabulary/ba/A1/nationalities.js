// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "башҡорт",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ba_starter_nationalities_001",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "урыҫ",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ba_starter_nationalities_002",
        "lang": "ba",
        "transcription": ""
    },
    {
        "word": "татар",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "ba_starter_nationalities_003",
        "lang": "ba",
        "transcription": ""
    }
];
    const lang = "ba";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
