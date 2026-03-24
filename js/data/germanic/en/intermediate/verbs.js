(function() {
    const data = [
    {
        "word": "photograph",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "📷",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "photographed",
        "v3": "photographed"
    },
    {
        "word": "garden",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪴",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "gardened",
        "v3": "gardened"
    },
    {
        "word": "fish",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🎣",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "v2": "fished",
        "v3": "fished"
    },
    {
        "word": "volunteer",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "volunteer work, unpaid work",
        "definitions": [
            {
                "text": "To offer to do something without being paid.",
                "examples": [
                    "She volunteers at the local food bank.",
                    "I want to volunteer for the charity event."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
