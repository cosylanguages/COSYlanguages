(function() {
    const data = [
    {
        "word": "giardinaggio",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪴",
        "form": "verb"
    },
    {
        "word": "caldo",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🔥",
        "form": "verb"
    },
    {
        "word": "telelavoro",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "riscaldamento globale",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "verb"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
