(function() {
    const data = [
    {
        "word": "Napoléon Bonaparte",
        "level": "starter",
        "theme": "identity_self_C1"
    },
    {
        "word": "Zinedine Zidane",
        "level": "starter",
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
