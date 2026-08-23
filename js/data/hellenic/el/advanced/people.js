(function() {
    const data = [
    {
        "word": "Νίκος Καζαντζάκης",
        "level": "advanced",
        "theme": "people",
        "lang": "el",
        "id": "el_advanced_identity_self_c1_misc_c82f9ffeb5",
        "transcription": "",
        "emoji": "✨"
    }
];
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];

    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();