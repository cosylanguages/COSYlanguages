// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "it_intermediate_environment_007",
        "word": "sostenibile",
        "lang": "it",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Usare le risorse in modo da non danneggiare l'ambiente per il futuro.",
                "examples": [
                    "Abbiamo bisogno di stili di vita più sostenibili."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "♻️",
        "_legacy": {
            "opposite": "insostenibile"
        }
    }
];
    const lang = "it";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
