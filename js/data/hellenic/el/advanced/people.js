(function() {
    const data = [
    {
        "word": "Νίκος Καζαντζάκης",
        "level": "advanced",
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
