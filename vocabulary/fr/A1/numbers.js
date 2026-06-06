(function() {
    const data = [
    {
        "word": "un",
        "translation": "one",
        "level": "starter",
        "theme": "numbers",
        "language": "fr",
        "emoji": "1️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Le nombre 1.",
                "examples": [
                    "J'ai un frère."
                ]
            }
        ],
        "transcription": "/œ̃/"
    },
    {
        "word": "deux",
        "translation": "two",
        "level": "starter",
        "theme": "numbers",
        "language": "fr",
        "emoji": "2️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Le nombre 2.",
                "examples": [
                    "Il a deux chats."
                ]
            }
        ],
        "transcription": "/dø/"
    },
    {
        "word": "trois",
        "translation": "three",
        "level": "starter",
        "theme": "numbers",
        "language": "fr",
        "emoji": "3️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Le nombre 3.",
                "examples": [
                    "Nous avons trois pommes."
                ]
            }
        ],
        "transcription": "/tʁwa/"
    },
    {
        "word": "quatre",
        "translation": "four",
        "level": "starter",
        "theme": "numbers",
        "language": "fr",
        "emoji": "4️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Le nombre 4.",
                "examples": [
                    "Elle a quatre enfants."
                ]
            }
        ],
        "transcription": "/katʁ/"
    },
    {
        "word": "cinq",
        "translation": "five",
        "level": "starter",
        "theme": "numbers",
        "language": "fr",
        "emoji": "5️⃣",
        "form": "number",
        "definitions": [
            {
                "text": "Le nombre 5.",
                "examples": [
                    "Il y a cinq chaises."
                ]
            }
        ],
        "transcription": "/sɛ̃k/"
    }
    ];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
