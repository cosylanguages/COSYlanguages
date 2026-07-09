// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "ru_starter_people_007",
        "word": "русский",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Из России.",
                "examples": [
                    "Я русский."
                ]
            }
        ],
        "emoji": "🇷🇺",
        "transcription": ""
    },
    {
        "id": "ru_starter_people_008",
        "word": "американец",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Из Америки.",
                "examples": [
                    "Он американец."
                ]
            }
        ],
        "emoji": "🇺🇸",
        "transcription": ""
    },
    {
        "id": "ru_starter_people_009",
        "word": "китаец",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "Из Китая.",
                "examples": [
                    "Она китаянка."
                ]
            }
        ],
        "emoji": "🇨🇳",
        "transcription": ""
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
