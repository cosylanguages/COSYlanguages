(function() {
    const data = [
    {
        "word": "обезьяна",
        "level": "intermediate",
        "theme": "society_community_B1",
        "form": "verb"
    },
    {
        "word": "садоводство",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪴",
        "form": "verb"
    },
    {
        "word": "коллега",
        "level": "intermediate",
        "theme": "career_development_B1",
        "emoji": "👥",
        "form": "verb"
    },
    {
        "word": "удаленная работа",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "💻",
        "form": "verb"
    },
    {
        "word": "глобальное потепление",
        "level": "intermediate",
        "theme": "environment_sustainability_B1",
        "emoji": "🌡️",
        "form": "verb"
    }
];
    const lang = "ru";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
