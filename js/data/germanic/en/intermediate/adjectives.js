(function() {
    const data = [
    {
        "word": "thin",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "adjective"
    },
    {
        "word": "stormy",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "⛈️",
        "form": "adjective"
    },
    {
        "word": "self-employed",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "🧑‍💻",
        "form": "adjective",
        "subtext": "freelance, work for yourself",
        "opposite": "employed",
        "definitions": [
            {
                "text": "Working for yourself rather than for a company.",
                "examples": [
                    "She is self-employed as a graphic designer.",
                    "Being self-employed gives you more freedom."
                ]
            }
        ]
    },
    {
        "word": "sustainable",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "♻️",
        "form": "adjective",
        "subtext": "sustainable development, eco-friendly",
        "definitions": [
            {
                "text": "Using resources in a way that does not damage the environment for the future.",
                "examples": [
                    "We need more sustainable ways of living.",
                    "This wood comes from a sustainable source."
                ]
            }
        ]
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
