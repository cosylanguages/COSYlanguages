(function() {
    const data = [
    {
        "word": "photography",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "📷",
        "form": "verb"
    },
    {
        "word": "gardening",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪴",
        "form": "verb"
    },
    {
        "word": "fishing",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🎣",
        "form": "verb"
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
