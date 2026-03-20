(function() {
    const data = [
    {
        "word": "Edith Piaf",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Simone de Beauvoir",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
