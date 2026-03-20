(function() {
    const data = [
    {
        "word": "jardiner",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "verb"
    },
    {
        "word": "collègue",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "verb"
    },
    {
        "word": "télétravail",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "réchauffement climatique",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "verb"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
