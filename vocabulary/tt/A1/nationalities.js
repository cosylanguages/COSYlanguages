// TODO: verify level classification
(function() {
    const lang = "tt";
    const data = [
    {
        "word": "татар",
        "level": "starter",
        "theme": "people",
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_001"
    },
    {
        "word": "урыс",
        "level": "starter",
        "theme": "people",
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_002"
    },
    {
        "word": "төрек",
        "level": "starter",
        "theme": "people",
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
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_people_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
