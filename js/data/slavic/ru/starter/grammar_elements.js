(function() {
    const data = [
    {
        "word": "каждый день",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Ежедневно, без исключений.",
                "examples": [
                    "Я пью кофе каждый день."
                ]
            }
        ],
        "subtext": ""
    },
    {
        "word": "вместе",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👫",
        "form": "adverb",
        "opposite": "один",
        "oppositeEmoji": "🧍",
        "definitions": [
            {
                "text": "С другим человеком или группой.",
                "examples": [
                    "Мы ужинаем вместе."
                ]
            }
        ],
        "transcription": "/ˈvmʲestʲi/",
        "subtext": ""
    },
    {
        "word": "днём",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "adverb",
        "definitions": [
            {
                "text": "В дневное время.",
                "examples": [
                    "Я заканчиваю работу в пять часов дня."
                ]
            }
        ],
        "subtext": ""
    },
    {
        "word": "сегодня",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "adverb",
        "subtext": "сегодняшняя встреча, начать сегодня",
        "definitions": [
            {
                "text": "В этот день.",
                "examples": [
                    "У меня сегодня встреча в десять."
                ]
            }
        ],
        "transcription": "/sʲiˈvodnʲə/"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();