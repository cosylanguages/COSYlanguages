(function() {
    const data = [
    {
        "word": "soutenir que",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "prétendre, affirmer",
        "definitions": [
            {
                "text": "Donner des raisons pour appuyer un point de vue particulier.",
                "examples": [
                    "Certains soutiennent que le travail à distance réduit l'innovation."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v3": "soutenu",
        "group": "ir"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
