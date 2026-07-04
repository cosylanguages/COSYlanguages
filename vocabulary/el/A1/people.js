// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Σωκράτης",
        "level": "starter",
        "theme": "marital_status"
    }
]
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
