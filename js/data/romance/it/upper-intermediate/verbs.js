(function() {
    const data = [
    {
        "word": "sostenere che",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "affermare, argomentare",
        "definitions": [
            {
                "text": "Fornire ragioni per supportare un particolare punto di vista.",
                "examples": [
                    "Alcuni sostengono che il lavoro a distanza riduca l'innovazione."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "sostenuto",
        "group": "ere"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
