(function() {
    const data = [
    {
        "word": "один",
        "translation": "one",
        "level": "starter",
        "theme": "numbers",
        "language": "ru",
        "emoji": "1️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Число 1.",
                "examples": [
                    "У меня один брат."
                ]
            }
        ],
        "transcription": "/ɐˈdʲin/"
    },
    {
        "word": "два",
        "translation": "two",
        "level": "starter",
        "theme": "numbers",
        "language": "ru",
        "emoji": "2️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Число 2.",
                "examples": [
                    "У него два кота."
                ]
            }
        ],
        "transcription": "/dva/"
    },
    {
        "word": "три",
        "translation": "three",
        "level": "starter",
        "theme": "numbers",
        "language": "ru",
        "emoji": "3️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Число 3.",
                "examples": [
                    "У нас три яблока."
                ]
            }
        ],
        "transcription": "/trʲi/"
    },
    {
        "word": "четыре",
        "translation": "four",
        "level": "starter",
        "theme": "numbers",
        "language": "ru",
        "emoji": "4️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Число 4.",
                "examples": [
                    "У неё четыре сына."
                ]
            }
        ],
        "transcription": "/tɕɪˈtɨrʲe/"
    },
    {
        "word": "пять",
        "translation": "five",
        "level": "starter",
        "theme": "numbers",
        "language": "ru",
        "emoji": "5️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Число 5.",
                "examples": [
                    "Здесь пять стульев."
                ]
            }
        ],
        "transcription": "/pʲatʲ/"
    }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
