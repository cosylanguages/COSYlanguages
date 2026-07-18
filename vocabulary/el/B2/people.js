(function() {
    const data = [
    {
        "id": "el_upper_intermediate_identity_self_001",
        "lang": "el",
        "word": "Μαρία Κάλλας",
        "level": "upper_intermediate",
        "theme": "people",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "id": "el_upper_intermediate_identity_self_002",
        "lang": "el",
        "word": "Οδυσσέας Ελύτης",
        "level": "upper_intermediate",
        "theme": "people",
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
