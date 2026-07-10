(function() {
    const data = [
    {
        "word": "ciao",
        "translation": "hello/goodbye",
        "level": "starter",
        "theme": "greetings",
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
        "transcription": "ˈtʃao",
        "id": "it_starter_greetings_001",
        "lang": "it"
    },
    {
        "word": "buongiorno",
        "translation": "good morning",
        "level": "starter",
        "theme": "greetings",
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
        "transcription": "bwɔnˈdʒorno",
        "id": "it_starter_greetings_002",
        "lang": "it"
    },
    {
        "word": "per favore",
        "translation": "please",
        "level": "starter",
        "theme": "greetings",
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
        "transcription": "per faˈvore",
        "id": "it_starter_greetings_003",
        "lang": "it"
    },
    {
        "word": "grazie",
        "translation": "thank you",
        "level": "starter",
        "theme": "greetings",
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
        "transcription": "ˈɡrattsje",
        "id": "it_starter_greetings_004",
        "lang": "it"
    },
    {
        "word": "scusa",
        "translation": "sorry",
        "level": "starter",
        "theme": "greetings",
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
        "transcription": "ˈskuza",
        "id": "it_starter_greetings_005",
        "lang": "it"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
