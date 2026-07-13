(function() {
    const data = [
    {
        "word": "Umberto Eco",
        "level": "advanced",
        "theme": "identity_self_c1",
        "lang": "it",
        "id": "it_advanced_identity_self_c1_misc_umberto_eco",
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();