(function() {
    const data = [
    {
        "word": "intelligenza artificiale",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "emoji": "🤖",
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
