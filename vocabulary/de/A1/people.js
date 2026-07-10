// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Mensch",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine Person.",
                "examples": [
                    "Ein netter Mensch."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "id": "de_starter_people_001",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Frau",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine erwachsene weibliche Person.",
                "examples": [
                    "Die Frau ist Lehrerin."
                ]
            }
        ],
        "article": "die",
        "gender": "feminine",
        "etymology": {
            "origin_lang": "Old High German",
            "origin_word": "frouwa"
        },
        "id": "de_starter_people_002",
        "lang": "de",
        "transcription": ""
    },
    {
        "word": "Mann",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Eine erwachsene männliche Person.",
                "examples": [
                    "Der Mann arbeitet hier."
                ]
            }
        ],
        "article": "der",
        "gender": "masculine",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "mann-"
        },
        "id": "de_starter_people_003",
        "lang": "de",
        "transcription": ""
    }
];
    const lang = "de";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
