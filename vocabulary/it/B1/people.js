// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "it_intermediate_identity_self_c1_001",
        "word": "Galileo Galilei",
        "lang": "it",
        "level": "intermediate",
        "theme": "identity_self_c1",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "it_intermediate_identity_self_c1_002",
        "word": "Federico Fellini",
        "lang": "it",
        "level": "intermediate",
        "theme": "identity_self_c1",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "it";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
