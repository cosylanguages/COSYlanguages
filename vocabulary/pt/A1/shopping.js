// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "preço",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Quantidade de dinheiro que custa algo.",
                "examples": [
                    "Qual é o preço deste livro?"
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈpre.su",
        "id": "pt_starter_shopping_001"
    },
    {
        "word": "dinheiro",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Meio de pagamento para comprar coisas.",
                "examples": [
                    "Pago as compras com dinheiro."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "di.ˈɲɐj.ru",
        "id": "pt_starter_shopping_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
