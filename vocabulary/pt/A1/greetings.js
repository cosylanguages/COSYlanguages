// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "olá",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palavra que se usa para saudar.",
                "examples": [
                    "Olá! Como estás?"
                ]
            }
        ],
        "lang": "pt",
        "transcription": "o.ˈla",
        "id": "pt_starter_greetings_001"
    },
    {
        "word": "adeus",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palavra para despedir.",
                "examples": [
                    "Adeus, até amanhã."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ɐ.ˈdewʃ",
        "id": "pt_starter_greetings_002"
    },
    {
        "word": "obrigado",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙏",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palavra para agradecer algo.",
                "examples": [
                    "Muito obrigado pela tua ajuda."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "o.βri.ˈɡa.ðu",
        "id": "pt_starter_greetings_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
