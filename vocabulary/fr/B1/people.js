// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "fr_intermediate_identity_self_c1_001",
        "word": "Victor Hugo",
        "lang": "fr",
        "level": "intermediate",
        "theme": "people",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "fr";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
