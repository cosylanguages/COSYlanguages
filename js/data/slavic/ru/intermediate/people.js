(function() {
    const data = [
    {
        "word": "Юрий Гагарин",
        "level": "intermediate",
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
