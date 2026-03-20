(function() {
    const data = [
    {
        "word": "Elon Musk",
        "level": "advanced",
        "theme": "identity_self_C1"
    },
    {
        "word": "Nelson Mandela",
        "level": "advanced",
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
