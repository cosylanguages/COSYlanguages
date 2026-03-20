(function() {
    const data = [
    {
        "word": "infrastruttura",
        "level": "advanced",
        "theme": "science_tech_society_C1",
        "emoji": "🏗️",
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
