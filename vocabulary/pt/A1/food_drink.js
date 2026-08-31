// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "pão",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Alimento básico feito com farinha e água.",
                "examples": [
                    "Comemos pão fresco todos os dias."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "pɐ̃w̃",
        "id": "pt_starter_food_drink_001"
    },
    {
        "word": "leite",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Bebida branca produzida pelas vacas.",
                "examples": [
                    "Bebo leite quente de manhã."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈlɐj.tɨ",
        "id": "pt_starter_food_drink_002"
    },
    {
        "word": "água",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "💧",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Líquido transparente indispensável para a vida.",
                "examples": [
                    "Bebo muita água durante o dia."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈa.ɡwɐ",
        "id": "pt_starter_food_drink_003"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bebida quente e estimulante.",
                "examples": [
                    "Tomo um café de manhã."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈfɛ",
        "id": "pt_starter_food_drink_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
