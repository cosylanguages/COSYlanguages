// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "computador",
        "level": "starter",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Máquina eletrónica para processar dados.",
                "examples": [
                    "Trabalho com o meu computador."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kõ.pu.tɐ.ˈdor",
        "id": "pt_starter_technology_001"
    },
    {
        "word": "telemóvel",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dispositivo para falar à distância.",
                "examples": [
                    "Ligo à minha mãe pelo telemóvel."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "tɛ.lɛ.ˈmɔ.vɛl",
        "id": "pt_starter_technology_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
