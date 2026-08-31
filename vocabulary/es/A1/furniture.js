// TODO: verify level classification
(function() {
    const lang = "es";
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
                "text": "Mueble para comer o trabajar.",
                "examples": [
                    "La comida está en la mesa."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈme.sa",
        "id": "es_starter_furniture_001"
    },
    {
        "word": "silla",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mueble para sentarse.",
                "examples": [
                    "Siéntate en la silla, por favor."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈsi.ʝa",
        "id": "es_starter_furniture_002"
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
                "text": "Mueble para dormir por la noche.",
                "examples": [
                    "Me voy a la cama porque tengo sueño."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈka.ma",
        "id": "es_starter_furniture_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
