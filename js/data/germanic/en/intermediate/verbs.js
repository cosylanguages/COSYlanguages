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
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
