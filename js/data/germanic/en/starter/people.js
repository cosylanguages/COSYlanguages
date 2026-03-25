(function() {
    const data = [
    {
        "word": "Albert Einstein",
        "level": "baby",
        "theme": "identity_self_C1"
    },
    {
        "word": "Taylor Swift",
        "level": "baby",
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
