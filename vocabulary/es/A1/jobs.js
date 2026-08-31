// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "profesor",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona que enseña en la escuela.",
                "examples": [
                    "El profesor explica la lección."
                ]
            }
        ],
        "lang": "es",
        "transcription": "pro.fe.ˈsor",
        "id": "es_starter_jobs_001"
    },
    {
        "word": "médico",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona que cura a las personas enfermas.",
                "examples": [
                    "El médico me atendió muy bien."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈme.ði.ko",
        "id": "es_starter_jobs_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
