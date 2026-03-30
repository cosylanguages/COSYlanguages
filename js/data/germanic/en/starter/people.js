(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Taylor Swift",
        "level": "starter",
        "theme": "marital_status_A1"
    }
];
    const lang = "en";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
