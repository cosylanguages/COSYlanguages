(function() {
    const data = [
    {
        "word": "sostenibile",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "adjective",
        "opposite": "insostenibile",
        "definitions": [
            {
                "text": "Usare le risorse in modo da non danneggiare l'ambiente per il futuro.",
                "examples": [
                    "Abbiamo bisogno di stili di vita più sostenibili."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
