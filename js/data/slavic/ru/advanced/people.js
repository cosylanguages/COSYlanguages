(function() {
    const data = [
    {
        "word": "Мария Шарапова",
        "level": "advanced",
        "theme": "identity_self_C1"
    },
    {
        "word": "Анна Ахматова",
        "level": "advanced",
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
