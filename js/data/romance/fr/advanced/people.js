(function() {
    const data = [
    {
        "word": "Claude Monet",
        "level": "advanced",
        "theme": "identity_self_C1"
    },
    {
        "word": "Jean-Paul Sartre",
        "level": "advanced",
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
