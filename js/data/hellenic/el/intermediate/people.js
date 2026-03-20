(function() {
    const data = [
    {
        "word": "Πλάτωνας",
        "level": "intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Μελίνα Μερκούρη",
        "level": "intermediate",
        "theme": "identity_self_C1"
    }
];
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
