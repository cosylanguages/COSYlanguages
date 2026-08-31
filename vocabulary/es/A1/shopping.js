// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "precio",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Cantidad de dinero que cuesta algo.",
                "examples": [
                    "¿Cuál es el precio de este libro?"
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈpre.θjo",
        "id": "es_starter_shopping_001"
    },
    {
        "word": "dinero",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Medio de pago para comprar cosas.",
                "examples": [
                    "Pago las compras con dinero."
                ]
            }
        ],
        "lang": "es",
        "transcription": "di.ˈne.ro",
        "id": "es_starter_shopping_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
