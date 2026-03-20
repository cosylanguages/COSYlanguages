(function() {
    const data = [
    {
        "word": "Leonardo da Vinci",
        "level": "intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Stephen Hawking",
        "level": "intermediate",
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
