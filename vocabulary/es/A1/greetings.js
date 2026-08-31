// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "hola",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palabra que se usa para saludar.",
                "examples": [
                    "¡Hola! ¿Cómo estás?"
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈo.la",
        "id": "es_starter_greetings_001"
    },
    {
        "word": "adiós",
        "level": "starter",
        "theme": "greetings",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palabra para despedirse.",
                "examples": [
                    "Adiós, nos vemos mañana."
                ]
            }
        ],
        "lang": "es",
        "transcription": "a.ˈðjos",
        "id": "es_starter_greetings_002"
    },
    {
        "word": "gracias",
        "level": "starter",
        "theme": "greetings",
        "emoji": "🙏",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Palabra para agradecer algo.",
                "examples": [
                    "Muchas gracias por tu ayuda."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈɡra.θjas",
        "id": "es_starter_greetings_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
