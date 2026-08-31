// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "día",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Periodo de 24 horas.",
                "examples": [
                    "Hoy es un buen día."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈdi.a",
        "id": "es_starter_time_001"
    },
    {
        "word": "noche",
        "level": "starter",
        "theme": "time",
        "emoji": "🌃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Tiempo entre el atardecer y el amanecer.",
                "examples": [
                    "Buenas noches a todos."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈno.tʃe",
        "id": "es_starter_time_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
