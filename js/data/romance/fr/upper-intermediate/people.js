(function() {
    const data = [
    {
        "id": "fr_upper_intermediate_identity_self_001",
        "lang": "fr",
        "word": "Edith Piaf",
        "level": "upper_intermediate",
        "theme": "people",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "id": "fr_upper_intermediate_identity_self_002",
        "lang": "fr",
        "word": "Simone de Beauvoir",
        "level": "upper_intermediate",
        "theme": "people",
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
