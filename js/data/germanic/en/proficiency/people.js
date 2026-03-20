(function() {
    const data = [
    {
        "word": "Marilyn Monroe",
        "level": "proficiency",
        "theme": "identity_self_C1"
    },
    {
        "word": "Aristotle",
        "level": "proficiency",
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
