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
        "v3": "photographed",
        "transcription": "ˈfəʊtəɡrɑːf"
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
        "v3": "gardened",
        "transcription": "ˈɡɑːdn"
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
        "v3": "fished",
        "transcription": "fɪʃ"
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
                    "I want to volunteer for the charity event.",
                    "She volunteers at the local food bank every Saturday."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "volunteered",
        "v3": "volunteered",
        "transcription": "ˌvɒlənˈtɪə"
    },
    {
        "word": "recycle",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "verb",
        "subtext": "recycle plastic, recycling bin",
        "definitions": [
            {
                "text": "To convert waste into reusable material.",
                "examples": [
                    "They recycle glass, paper and plastic every week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recycled",
        "v3": "recycled",
        "transcription": "ˌriːˈsaɪkl"
    },
    {
        "word": "argue",
        "level": "intermediate",
        "theme": "structured_argument_B1",
        "emoji": "🗣️",
        "form": "verb",
        "subtext": "argue about, argue for",
        "definitions": [
            {
                "text": "To present reasons supporting a particular view.",
                "examples": [
                    "She argued that remote work reduces productivity."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "transcription": "ˈɑːɡjuː"
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
