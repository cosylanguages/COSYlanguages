(function() {
    const lang = "ru";
    const data = [
    {
        "id": "ru_starter_time_008",
        "word": "каждый день",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "adverb",
        "definitions": [
            {
                "text": "Ежедневно, без исключений.",
                "examples": [
                    "Я пью кофе каждый день."
                ]
            }
        ],
        "emoji": "🔁",
        "subtext": "",
        "transcription": ""
    },
    {
        "id": "ru_starter_people_004",
        "word": "вместе",
        "lang": "ru",
        "level": "starter",
        "theme": "people",
        "form": "adverb",
        "definitions": [
            {
                "text": "С другим человеком или группой.",
                "examples": [
                    "Мы ужинаем вместе."
                ]
            }
        ],
        "emoji": "👫",
        "transcription": "/ˈvmʲestʲi/",
        "subtext": "",
        "antonyms": [
            "один"
        ]
    },
    {
        "id": "ru_starter_time_009",
        "word": "днём",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "adverb",
        "definitions": [
            {
                "text": "В дневное время.",
                "examples": [
                    "Я заканчиваю работу в пять часов дня."
                ]
            }
        ],
        "emoji": "☀️",
        "subtext": "",
        "transcription": ""
    },
    {
        "id": "ru_starter_time_010",
        "word": "сегодня",
        "lang": "ru",
        "level": "starter",
        "theme": "time",
        "form": "adverb",
        "definitions": [
            {
                "text": "В этот день.",
                "examples": [
                    "У меня сегодня встреча в десять."
                ]
            }
        ],
        "emoji": "📅",
        "subtext": "сегодняшняя встреча, начать сегодня",
        "transcription": "/sʲiˈvodnʲə/"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
