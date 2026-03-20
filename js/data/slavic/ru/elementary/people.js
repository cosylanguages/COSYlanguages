(function() {
    const data = [
    {
        "word": "Лев Толстой",
        "level": "elementary",
        "theme": "identity_self_C1"
    },
    {
        "word": "Виктор Цой",
        "level": "elementary",
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
