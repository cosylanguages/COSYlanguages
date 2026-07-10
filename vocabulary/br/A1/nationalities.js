// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "brezhon",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "br_starter_nationalities_001",
        "lang": "br",
        "transcription": ""
    },
    {
        "word": "gall",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "br_starter_nationalities_002",
        "lang": "br",
        "transcription": ""
    },
    {
        "word": "saoz",
        "level": "starter",
        "theme": "nationalities",
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
        "id": "br_starter_nationalities_003",
        "lang": "br",
        "transcription": ""
    }
];
    const lang = "br";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
