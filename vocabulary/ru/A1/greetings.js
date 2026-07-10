(function() {
    const lang = "ru";
    const data = [
    {
        "word": "привет",
        "translation": "hi",
        "level": "starter",
        "theme": "greetings",
        "language": "ru",
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
        "transcription": "/prʲɪˈvʲet/",
        "lang": "ru",
        "id": "ru_starter_greetings_001"
    },
    {
        "word": "пока",
        "translation": "bye",
        "level": "starter",
        "theme": "greetings",
        "language": "ru",
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
        "transcription": "/pɐˈka/",
        "lang": "ru",
        "id": "ru_starter_greetings_002"
    },
    {
        "word": "пожалуйста",
        "translation": "please/you're welcome",
        "level": "starter",
        "theme": "greetings",
        "language": "ru",
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
        "transcription": "/pɐˈʐalʊstə/",
        "lang": "ru",
        "id": "ru_starter_greetings_003"
    },
    {
        "word": "спасибо",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "language": "ru",
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
        "transcription": "/spɐˈsʲibə/",
        "lang": "ru",
        "id": "ru_starter_greetings_004"
    },
    {
        "word": "извините",
        "translation": "sorry/excuse me",
        "level": "starter",
        "theme": "greetings",
        "language": "ru",
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
        "transcription": "/ɪzvʲɪˈnʲitʲe/",
        "lang": "ru",
        "id": "ru_starter_greetings_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
