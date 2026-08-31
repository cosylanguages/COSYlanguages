// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "amigo",
        "level": "starter",
        "theme": "social",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona cercana a la que se tiene afecto.",
                "examples": [
                    "Mi amigo vive cerca de mi casa."
                ]
            }
        ],
        "lang": "es",
        "transcription": "a.ˈmi.ɣo",
        "id": "es_starter_social_001"
    },
    {
        "word": "fiesta",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Reunión alegre para celebrar algo.",
                "examples": [
                    "Vamos a una fiesta de cumpleaños."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈfjes.ta",
        "id": "es_starter_social_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
