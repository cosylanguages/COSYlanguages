(function() {
    const data = [
    {
        "word": "bonjour",
        "translation": "hello",
        "level": "starter",
        "theme": "greetings",
        "language": "fr",
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
        "transcription": "/bɔ̃.ʒuʁ/",
        "lang": "fr",
        "id": "fr_starter_greetings_001"
    },
    {
        "word": "au revoir",
        "translation": "goodbye",
        "level": "starter",
        "theme": "greetings",
        "language": "fr",
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
        "transcription": "/o ʁə.vwaʁ/",
        "lang": "fr",
        "id": "fr_starter_greetings_002"
    },
    {
        "word": "s'il vous plaît",
        "translation": "please",
        "level": "starter",
        "theme": "greetings",
        "language": "fr",
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
        "transcription": "/s‿il vu plɛ/",
        "lang": "fr",
        "id": "fr_starter_greetings_003"
    },
    {
        "word": "merci",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "language": "fr",
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
        "transcription": "/mɛʁ.si/",
        "lang": "fr",
        "id": "fr_starter_greetings_004"
    },
    {
        "word": "pardon",
        "translation": "sorry",
        "level": "starter",
        "theme": "greetings",
        "language": "fr",
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
        "transcription": "/paʁ.dɔ̃/",
        "lang": "fr",
        "id": "fr_starter_greetings_005"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
