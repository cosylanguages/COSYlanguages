// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "brezhon",
        "level": "starter",
        "theme": "people",
        "emoji": "⬜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eus Breizh.",
                "examples": [
                    "Brezhon on-me."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_001"
    },
    {
        "word": "gall",
        "level": "starter",
        "theme": "people",
        "emoji": "🇫🇷",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eus Bro-C'hall.",
                "examples": [
                    "Gall eo eñ."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_002"
    },
    {
        "word": "saoz",
        "level": "starter",
        "theme": "people",
        "emoji": "🇬🇧",
        "form": "adjective",
        "definitions": [
            {
                "text": "Eus Bro-Saoz.",
                "examples": [
                    "Saoz eo hi."
                ]
            }
        ],
        "lang": "br",
        "transcription": "",
        "id": "br_starter_people_003"
    }
];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
