// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "татар",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "⬜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Татарстаннан.",
                "examples": [
                    "Мин татар."
                ]
            }
        ],
        "id": "tt_starter_nationalities_001",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "урыс",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇷🇺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Россиядән.",
                "examples": [
                    "Ул урыс."
                ]
            }
        ],
        "id": "tt_starter_nationalities_002",
        "lang": "tt",
        "transcription": ""
    },
    {
        "word": "төрек",
        "level": "starter",
        "theme": "nationalities",
        "emoji": "🇹🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Төркиядән.",
                "examples": [
                    "Алар төрек."
                ]
            }
        ],
        "id": "tt_starter_nationalities_003",
        "lang": "tt",
        "transcription": ""
    }
];
    const lang = "tt";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
