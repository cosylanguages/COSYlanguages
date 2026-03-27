(function() {
    const data = [
    {
        "word": "argue",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "argue that, argue for / against",
        "definitions": [
            {
                "text": "To give reasons to support a particular view.",
                "examples": [
                    "Some argue that remote work reduces innovation.",
                    "She argued for better working conditions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
