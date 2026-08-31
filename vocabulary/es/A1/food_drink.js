// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "pan",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Alimento básico hecho con harina y agua.",
                "examples": [
                    "Comemos pan fresco todos los días."
                ]
            }
        ],
        "lang": "es",
        "transcription": "pan",
        "id": "es_starter_food_drink_001"
    },
    {
        "word": "leche",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Bebida blanca que producen las vacas.",
                "examples": [
                    "Bebo leche caliente por la mañana."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈle.tʃe",
        "id": "es_starter_food_drink_002"
    },
    {
        "word": "agua",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "💧",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Líquido transparente e indispensable para la vida.",
                "examples": [
                    "Bebo mucha agua durante el día."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈa.ɣwa",
        "id": "es_starter_food_drink_003"
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
                "text": "Bebida caliente y estimulante.",
                "examples": [
                    "Tomo un café con leche por la mañana."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ka.ˈfe",
        "id": "es_starter_food_drink_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
