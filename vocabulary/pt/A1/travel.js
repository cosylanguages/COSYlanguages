// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "carro",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Veículo de quatro rodas para viajar.",
                "examples": [
                    "Viajamos de carro para a praia."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈka.ru",
        "id": "pt_starter_travel_001"
    },
    {
        "word": "comboio",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Meio de transporte sobre carris.",
                "examples": [
                    "O comboio chega às dez horas."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kõ.ˈbɔj.u",
        "id": "pt_starter_travel_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
