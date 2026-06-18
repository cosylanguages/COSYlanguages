(function() {
    const data = [
    {
        "id": "it_upper_intermediate_identity_self_001",
        "lang": "it",
        "word": "Sophia Loren",
        "level": "upper_intermediate",
        "theme": "identity_self"
    }
    ];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
