// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "el_intermediate_identity_self_c1_001",
        "word": "Πλάτωνας",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    },
    {
        "id": "el_intermediate_identity_self_c1_002",
        "word": "Μελίνα Μερκούρη",
        "lang": "el",
        "level": "intermediate",
        "theme": "people",
        "form": "phrase",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓"
    }
];
    const lang = "el";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
