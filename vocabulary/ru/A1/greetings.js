(function() {
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
        "transcription": "/prʲɪˈvʲet/"
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
        "transcription": "/pɐˈka/"
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
        "transcription": "/pɐˈʐalʊstə/"
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
        "transcription": "/spɐˈsʲibə/"
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
        "transcription": "/ɪzvʲɪˈnʲitʲe/"
    }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
