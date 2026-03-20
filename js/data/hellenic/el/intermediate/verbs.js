(function() {
    const data = [
    {
        "word": "κηπουρική",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🪴",
        "form": "verb"
    }
];
    const lang = "el";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
