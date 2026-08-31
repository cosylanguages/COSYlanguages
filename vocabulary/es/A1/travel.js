// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "coche",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Vehículo de cuatro ruedas para viajar.",
                "examples": [
                    "Viajamos en coche a la playa."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈko.tʃe",
        "id": "es_starter_travel_001"
    },
    {
        "word": "tren",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Medio de transporte sobre raíles.",
                "examples": [
                    "El tren llega a las diez."
                ]
            }
        ],
        "lang": "es",
        "transcription": "tren",
        "id": "es_starter_travel_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
