(function() {
    const data = [
    {
        "word": "хлеб",
        "translation": "bread",
        "level": "starter",
        "theme": "food",
        "language": "ru",
        "emoji": "🍞",
        "form": "noun",
        "definitions": [
            {
                "text": "Пищевой продукт из муки.",
                "examples": [
                    "Я ем хлеб."
                ]
            }
        ],
        "transcription": "/xlʲep/"
    },
    {
        "word": "вода",
        "translation": "water",
        "level": "starter",
        "theme": "food",
        "language": "ru",
        "emoji": "💧",
        "form": "noun",
        "definitions": [
            {
                "text": "Прозрачная жидкость для питья.",
                "examples": [
                    "Дайте воды, пожалуйста."
                ]
            }
        ],
        "transcription": "/vɐˈda/"
    },
    {
        "word": "яблоко",
        "translation": "apple",
        "level": "starter",
        "theme": "food",
        "language": "ru",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "Круглый плод яблони.",
                "examples": [
                    "Красное яблоко."
                ]
            }
        ],
        "transcription": "/ˈjabləkə/"
    },
    {
        "word": "молоко",
        "translation": "milk",
        "level": "starter",
        "theme": "food",
        "language": "ru",
        "emoji": "🥛",
        "form": "noun",
        "definitions": [
            {
                "text": "Белая жидкость, вырабатываемая коровами.",
                "examples": [
                    "Дети пьют молоко."
                ]
            }
        ],
        "transcription": "/məlɐˈko/"
    },
    {
        "word": "чай",
        "translation": "tea",
        "level": "starter",
        "theme": "food",
        "language": "ru",
        "emoji": "☕",
        "form": "noun",
        "definitions": [
            {
                "text": "Напиток из листьев чайного куста.",
                "examples": [
                    "Я люблю чай с лимоном."
                ]
            }
        ],
        "transcription": "/tɕaj/"
    }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
