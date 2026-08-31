// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "dia",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Período de 24 horas.",
                "examples": [
                    "Hoje é um bom dia."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈdi.ɐ",
        "id": "pt_starter_time_001"
    },
    {
        "word": "noite",
        "level": "starter",
        "theme": "time",
        "emoji": "🌃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Tempo entre o anoitecer e o amanhecer.",
                "examples": [
                    "Boa noite a todos."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈnoj.tɨ",
        "id": "pt_starter_time_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
