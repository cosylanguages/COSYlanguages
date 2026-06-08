(function() {
    const data = [
    {
        "word": "мама",
        "translation": "mom",
        "level": "starter",
        "theme": "family",
        "language": "ru",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Мать.",
                "examples": [
                    "Моя мама добрая."
                ]
            }
        ],
        "transcription": "/ˈmamə/"
    },
    {
        "word": "папа",
        "translation": "dad",
        "level": "starter",
        "theme": "family",
        "language": "ru",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Отец.",
                "examples": [
                    "Мой папа на работе."
                ]
            }
        ],
        "transcription": "/ˈpapə/"
    },
    {
        "word": "брат",
        "translation": "brother",
        "level": "starter",
        "theme": "family",
        "language": "ru",
        "emoji": "👦",
        "form": "noun",
        "definitions": [
            {
                "text": "Сын тех же родителей.",
                "examples": [
                    "У меня есть брат."
                ]
            }
        ],
        "transcription": "/brat/"
    },
    {
        "word": "сестра",
        "translation": "sister",
        "level": "starter",
        "theme": "family",
        "language": "ru",
        "emoji": "👧",
        "form": "noun",
        "definitions": [
            {
                "text": "Дочь тех же родителей.",
                "examples": [
                    "Моя сестра учится в школе."
                ]
            }
        ],
        "transcription": "/sʲɪˈstra/"
    },
    {
        "word": "семья",
        "translation": "family",
        "level": "starter",
        "theme": "family",
        "language": "ru",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Группа родственников.",
                "examples": [
                    "У нас большая семья."
                ]
            }
        ],
        "transcription": "/sʲɪˈmʲja/"
    }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
