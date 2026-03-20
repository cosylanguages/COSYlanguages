(function() {
    const data = [
    {
        "word": "avvocato",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "avvocati",
        "definitions": [
            {
                "text": "Una persona che dà consigli legali e rappresenta le persone in tribunale.",
                "examples": [
                    "Devo parlare con il mio avvocato.",
                    "L'avvocato è in tribunale."
                ]
            },
            {
                "text": "Questa persona lavora spesso in un ufficio o in un tribunale.",
                "examples": [
                    "Gli avvocati leggono molti documenti."
                ]
            }
        ]
    },
    {
        "word": "farmacia",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "💊",
        "form": "noun",
        "plural": "farmacie",
        "definitions": [
            {
                "text": "Un negozio dove si comprano le medicine.",
                "examples": [
                    "Devo andare in farmacia a prendere uno sciroppo.",
                    "La farmacia è aperta anche di notte."
                ]
            },
            {
                "text": "È il luogo dove si portano le ricette del medico.",
                "examples": [
                    "Il farmacista prepara i medicinali."
                ]
            }
        ]
    },
    {
        "word": "psicologo",
        "level": "upper-intermediate",
        "theme": "academic_vocabulary_B2",
        "emoji": "🧠",
        "form": "noun",
        "plural": "psicologi"
    },
    {
        "word": "sostenibile",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "emoji": "🌱",
        "form": "noun",
        "plural": "sostenibili"
    }
];
    const lang = "it";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
