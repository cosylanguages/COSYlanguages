(function() {
    const data = [
    {
        "word": "инфраструктура",
        "level": "advanced",
        "theme": "science_tech_society_C1",
        "emoji": "🏗️",
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
