// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "ordenador",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Máquina electrónica para procesar datos.",
                "examples": [
                    "Trabajo con mi ordenador."
                ]
            }
        ],
        "lang": "es",
        "transcription": "or.ðe.na.ˈðor",
        "id": "es_starter_technology_001"
    },
    {
        "word": "teléfono",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dispositivo para hablar a distancia.",
                "examples": [
                    "Llamo a mi madre por teléfono."
                ]
            }
        ],
        "lang": "es",
        "transcription": "te.ˈle.fo.no",
        "id": "es_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
