(function() {
    const data = [
    {
        "word": "William Shakespeare",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Virginia Woolf",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
