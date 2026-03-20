(function() {
    const data = [
    {
        "word": "Пётр I",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    },
    {
        "word": "Фёдор Достоевский",
        "level": "upper-intermediate",
        "theme": "identity_self_C1"
    }
];
    const lang = "ru";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
