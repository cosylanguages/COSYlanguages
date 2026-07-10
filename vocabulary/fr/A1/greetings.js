(function() {
    const data = [
    {
        "word": "bonjour",
        "translation": "hello",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Salutation utilisée le matin ou pendant la journée.",
                "examples": [
                    "Bonjour, comment ça va ?"
                ]
            }
        ],
        "transcription": "bɔ̃.ʒuʁ",
        "id": "fr_starter_greetings_001",
        "lang": "fr"
    },
    {
        "word": "au revoir",
        "translation": "goodbye",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "phrase",
        "definitions": [
            {
                "text": "Salutation utilisée en partant.",
                "examples": [
                    "Au revoir, à demain !"
                ]
            }
        ],
        "transcription": "o ʁə.vwaʁ",
        "id": "fr_starter_greetings_002",
        "lang": "fr"
    },
    {
        "word": "s'il vous plaît",
        "translation": "please",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Formule de politesse pour demander quelque chose.",
                "examples": [
                    "Un café, s'il vous plaît."
                ]
            }
        ],
        "transcription": "s‿il vu plɛ",
        "id": "fr_starter_greetings_003",
        "lang": "fr"
    },
    {
        "word": "merci",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "emoji": "😊",
        "form": "interjection",
        "definitions": [
            {
                "text": "Mot utilisé pour exprimer la gratitude.",
                "examples": [
                    "Merci pour votre aide."
                ]
            }
        ],
        "transcription": "mɛʁ.si",
        "id": "fr_starter_greetings_004",
        "lang": "fr"
    },
    {
        "word": "pardon",
        "translation": "sorry",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙇",
        "form": "interjection",
        "definitions": [
            {
                "text": "Mot utilisé pour s'excuser.",
                "examples": [
                    "Pardon, je ne savais pas."
                ]
            }
        ],
        "transcription": "paʁ.dɔ̃",
        "id": "fr_starter_greetings_005",
        "lang": "fr"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
