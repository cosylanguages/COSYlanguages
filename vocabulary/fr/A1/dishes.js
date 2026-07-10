// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "ratatouille",
        "level": "starter",
        "theme": "food_drink",
        "article": "la",
        "form": "noun",
        "transcription": "ʁa.ta.tuj",
        "plural": "ratatouilles",
        "definitions": [
            {
                "text": "Un plat provençal composé de légumes cuits.",
                "examples": [
                    "On met des aubergines dans la ratatouille.",
                    "La ratatouille est un plat sain."
                ]
            }
        ],
        "countability": "countable",
        "id": "fr_starter_dishes_001",
        "lang": "fr",
        "emoji": "✨"
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();