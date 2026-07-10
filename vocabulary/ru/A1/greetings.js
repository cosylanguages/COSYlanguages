(function() {
    const data = [
    {
        "word": "привет",
        "translation": "hi",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Неформальное приветствие.",
                "examples": [
                    "Привет! Как дела?"
                ]
            }
        ],
        "transcription": "prʲɪˈvʲet",
        "id": "ru_starter_greetings_001",
        "lang": "ru"
    },
    {
        "word": "пока",
        "translation": "bye",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Неформальное прощание.",
                "examples": [
                    "Пока! До завтра."
                ]
            }
        ],
        "transcription": "pɐˈka",
        "id": "ru_starter_greetings_002",
        "lang": "ru"
    },
    {
        "word": "пожалуйста",
        "translation": "please/you're welcome",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙏",
        "form": "particle",
        "definitions": [
            {
                "text": "Слово вежливости.",
                "examples": [
                    "Дайте, пожалуйста, воды."
                ]
            }
        ],
        "transcription": "pɐˈʐalʊstə",
        "id": "ru_starter_greetings_003",
        "lang": "ru"
    },
    {
        "word": "спасибо",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "emoji": "😊",
        "form": "interjection",
        "definitions": [
            {
                "text": "Выражение благодарности.",
                "examples": [
                    "Спасибо за помощь."
                ]
            }
        ],
        "transcription": "spɐˈsʲibə",
        "id": "ru_starter_greetings_004",
        "lang": "ru"
    },
    {
        "word": "извините",
        "translation": "sorry/excuse me",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙇",
        "form": "verb",
        "definitions": [
            {
                "text": "Просьба о прощении.",
                "examples": [
                    "Извините, я опоздал."
                ]
            }
        ],
        "transcription": "ɪzvʲɪˈnʲitʲe",
        "id": "ru_starter_greetings_005",
        "lang": "ru"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
