(function() {
    const data = [
    {
        "word": "Napoléon Bonaparte",
        "level": "starter",
        "theme": "marital_status_A1"
    },
    {
        "word": "Zinedine Zidane",
        "level": "starter",
        "theme": "marital_status_A1"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
