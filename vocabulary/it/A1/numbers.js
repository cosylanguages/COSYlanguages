(function() {
    const data = [
    {
        "word": "uno",
        "translation": "one",
        "level": "starter",
        "theme": "numbers",
        "language": "it",
        "emoji": "1️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Il numero 1.",
                "examples": [
                    "Ho uno zaino."
                ]
            }
        ],
        "transcription": "/ˈuno/"
    },
    {
        "word": "due",
        "translation": "two",
        "level": "starter",
        "theme": "numbers",
        "language": "it",
        "emoji": "2️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Il numero 2.",
                "examples": [
                    "Ha due gatti."
                ]
            }
        ],
        "transcription": "/ˈdue/"
    },
    {
        "word": "tre",
        "translation": "three",
        "level": "starter",
        "theme": "numbers",
        "language": "it",
        "emoji": "3️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Il numero 3.",
                "examples": [
                    "Abbiamo tre mele."
                ]
            }
        ],
        "transcription": "/tre/"
    },
    {
        "word": "quattro",
        "translation": "four",
        "level": "starter",
        "theme": "numbers",
        "language": "it",
        "emoji": "4️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Il numero 4.",
                "examples": [
                    "Lei ha quattro figli."
                ]
            }
        ],
        "transcription": "/ˈkwattro/"
    },
    {
        "word": "cinque",
        "translation": "five",
        "level": "starter",
        "theme": "numbers",
        "language": "it",
        "emoji": "5️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Il numero 5.",
                "examples": [
                    "Ci sono cinque sedie."
                ]
            }
        ],
        "transcription": "/ˈtʃinkwe/"
    }
    ];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
