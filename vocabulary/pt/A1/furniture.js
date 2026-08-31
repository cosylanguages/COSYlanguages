// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel para comer ou trabalhar.",
                "examples": [
                    "A refeição está na mesa."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈme.zɐ",
        "id": "pt_starter_furniture_001"
    },
    {
        "word": "cadeira",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel para sentar.",
                "examples": [
                    "Senta-te na cadeira, por favor."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈdɐj.rɐ",
        "id": "pt_starter_furniture_002"
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Móvel para dormir à noite.",
                "examples": [
                    "Vou para a cama porque tenho sono."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈkɐ.mɐ",
        "id": "pt_starter_furniture_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
