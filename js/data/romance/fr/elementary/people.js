(function() {
    const data = [
    {
        "word": "Marie Curie",
        "level": "elementary",
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
