(function() {
    const data = [
    {
        "word": "philosophe",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun",
        "plural": "philosophes",
        "definitions": [
            {
                "text": "Une personne qui réfléchit au sens de la vie.",
                "examples": [
                    "Platon était un grand philosophe.",
                    "Il étudie les oeuvres des philosophes."
                ]
            },
            {
                "text": "Cette personne lit beaucoup de livres et pose des questions.",
                "examples": [
                    "Les philosophes débattent de l'éthique."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
