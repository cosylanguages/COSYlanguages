(function() {
    const data = [
    {
        "word": "Leonardo da Vinci",
        "level": "baby",
        "theme": "identity_self_C1"
    },
    {
        "word": "Monica Bellucci",
        "level": "baby",
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
