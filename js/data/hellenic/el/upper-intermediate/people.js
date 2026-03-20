(function() {
    const data = [
    {
        "word": "Μαρία Κάλλας",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Οδυσσέας Ελύτης",
        "level": "upper-intermediate",
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
