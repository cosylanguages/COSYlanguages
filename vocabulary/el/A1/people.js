// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "Σωκράτης",
        "level": "starter",
        "theme": "people",
        "lang": "el",
        "transcription": "",
        "emoji": "✨",
        "id": "el_starter_people_001"
    }
];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
