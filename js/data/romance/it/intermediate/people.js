(function() {
    const data = [
    {
        "word": "Galileo Galilei",
        "level": "intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Federico Fellini",
        "level": "intermediate",
        "theme": "identity_self_C1"
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
