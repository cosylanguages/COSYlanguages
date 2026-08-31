// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "sol",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Estrella que da luz y calor a la Tierra.",
                "examples": [
                    "Hoy brilla el sol en el cielo."
                ]
            }
        ],
        "lang": "es",
        "transcription": "sol",
        "id": "es_starter_nature_001"
    },
    {
        "word": "luna",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Satelite natural que se ve por la noche.",
                "examples": [
                    "La luna está llena esta noche."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈlu.na",
        "id": "es_starter_nature_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
