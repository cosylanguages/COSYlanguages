(function() {
    const data = [
    {
        "word": "photograph",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "📷",
        "form": "verb",
        "subtext": "photograph a wedding, photograph wildlife",
        "definitions": [
            {
                "text": "To take a picture of someone or something using a camera.",
                "examples": [
                    "He spent the day photographing the local wildlife."
                ]
            }
        ],
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
        "subtext": "garden on weekends, organic gardening",
        "definitions": [
            {
                "text": "To work in a garden, taking care of plants and flowers.",
                "examples": [
                    "My grandmother loves to garden in the morning."
                ]
            }
        ],
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
        "subtext": "go fishing, fish for trout",
        "definitions": [
            {
                "text": "To try to catch fish using a net or a line.",
                "examples": [
                    "They fish in the river every summer."
                ]
            }
        ],
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
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "volunteered",
        "v3": "volunteered"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
