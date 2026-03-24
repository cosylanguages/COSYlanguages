(function() {
    const data = [
    {
        "word": "philosopher",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🧐",
        "form": "noun",
        "plural": "philosophers",
        "definitions": [
            {
                "text": "A person who thinks about the meaning of life and truth.",
                "examples": [
                    "Socrates was a famous philosopher.",
                    "The philosopher wrote many essays."
                ]
            },
            {
                "text": "This person reads many books and asks difficult questions.",
                "examples": [
                    "Philosophers discuss ethics and logic."
                ]
            }
        ]
    },
    {
        "word": "blockchain",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "⛓️",
        "form": "noun",
        "plural": "blockchains"
    },
    {
        "word": "existentialism",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "👤",
        "form": "noun",
        "plural": "existentialisms"
    },
    {
        "word": "paradigm shift",
        "level": "proficiency",
        "theme": "ontology_metaphysics_C2",
        "emoji": "🔄",
        "form": "noun",
        "plural": "paradigm shifts"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
