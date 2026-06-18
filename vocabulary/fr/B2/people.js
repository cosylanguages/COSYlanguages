(function() {
    const data = [
    {
        "id": "fr_upper_intermediate_identity_self_001",
        "lang": "fr",
        "word": "Edith Piaf",
        "level": "upper_intermediate",
        "theme": "identity_self"
    },
    {
        "id": "fr_upper_intermediate_identity_self_002",
        "lang": "fr",
        "word": "Simone de Beauvoir",
        "level": "upper_intermediate",
        "theme": "identity_self"
    }
    ];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
