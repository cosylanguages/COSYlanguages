(function() {
    const data = [
    {
        "word": "ciao",
        "translation": "hello/goodbye",
        "level": "starter",
        "theme": "greetings",
        "language": "it",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Saluto informale usato quando ci si incontra o ci si lascia.",
                "examples": [
                    "Ciao, come stai?"
                ]
            }
        ],
        "transcription": "/ˈtʃao/"
    },
    {
        "word": "buongiorno",
        "translation": "good morning",
        "level": "starter",
        "theme": "greetings",
        "language": "it",
        "emoji": "☀️",
        "form": "interjection",
        "definitions": [
            {
                "text": "Saluto formale usato durante il giorno.",
                "examples": [
                    "Buongiorno, Signore."
                ]
            }
        ],
        "transcription": "/bwɔnˈdʒorno/"
    },
    {
        "word": "per favore",
        "translation": "please",
        "level": "starter",
        "theme": "greetings",
        "language": "it",
        "emoji": "🙏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Formula di cortesia per chiedere qualcosa.",
                "examples": [
                    "Un caffè, per favore."
                ]
            }
        ],
        "transcription": "/per faˈvore/"
    },
    {
        "word": "grazie",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
        "language": "it",
        "emoji": "😊",
        "form": "interjection",
        "definitions": [
            {
                "text": "Parola usata per esprimere gratitudine.",
                "examples": [
                    "Grazie per l'aiuto."
                ]
            }
        ],
        "transcription": "/ˈɡrattsje/"
    },
    {
        "word": "scusa",
        "translation": "sorry",
        "level": "starter",
        "theme": "greetings",
        "language": "it",
        "emoji": "🙇",
        "form": "interjection",
        "definitions": [
            {
                "text": "Parola usata per chiedere scusa.",
                "examples": [
                    "Scusa, non volevo."
                ]
            }
        ],
        "transcription": "/ˈskuza/"
    }
    ];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
