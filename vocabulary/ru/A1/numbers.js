(function() {
    const data = [
    {
        "word": "один",
        "translation": "one",
        "level": "starter",
        "theme": "numbers",
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
        "transcription": "ɐˈdʲin",
        "id": "ru_starter_numbers_001",
        "lang": "ru"
    },
    {
        "word": "два",
        "translation": "two",
        "level": "starter",
        "theme": "numbers",
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
        "transcription": "dva",
        "id": "ru_starter_numbers_002",
        "lang": "ru",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "dъva"
        }
    },
    {
        "word": "три",
        "translation": "three",
        "level": "starter",
        "theme": "numbers",
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
        "transcription": "trʲi",
        "id": "ru_starter_numbers_003",
        "lang": "ru"
    },
    {
        "word": "четыре",
        "translation": "four",
        "level": "starter",
        "theme": "numbers",
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
        "transcription": "tɕɪˈtɨrʲe",
        "id": "ru_starter_numbers_004",
        "lang": "ru"
    },
    {
        "word": "пять",
        "translation": "five",
        "level": "starter",
        "theme": "numbers",
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
        "transcription": "pʲatʲ",
        "id": "ru_starter_numbers_005",
        "lang": "ru"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
