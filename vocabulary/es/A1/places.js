// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "casa",
        "level": "starter",
        "theme": "places",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar donde vive una persona o familia.",
                "examples": [
                    "Vuelvo a casa después de trabajar."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈka.sa",
        "id": "es_starter_places_001"
    },
    {
        "word": "ciudad",
        "level": "starter",
        "theme": "places",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Población grande con muchos edificios.",
                "examples": [
                    "Madrid es una ciudad hermosa."
                ]
            }
        ],
        "lang": "es",
        "transcription": "θju.ˈðað",
        "id": "es_starter_places_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
