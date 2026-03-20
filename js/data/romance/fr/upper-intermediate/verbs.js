(function() {
    const data = [
    {
        "word": "durable",
        "level": "upper-intermediate",
        "theme": "environment_policy_B2",
        "emoji": "🌱",
        "form": "verb"
    },
    {
        "word": "intelligence artificielle",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "🤖",
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
