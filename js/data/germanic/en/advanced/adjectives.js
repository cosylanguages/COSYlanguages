(function() {
    const data = [
    {
        "word": "charismatic",
        "level": "advanced",
        "theme": "power_institutions_C1",
        "form": "adjective"
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
