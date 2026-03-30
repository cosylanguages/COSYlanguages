(function() {
    const data = [
    {
        "word": "Leonardo da Vinci",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Monica Bellucci",
        "level": "starter",
        "theme": "marital_status_A1"
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
