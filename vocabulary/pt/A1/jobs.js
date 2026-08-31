// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "professor",
        "level": "starter",
        "theme": "jobs",
        "emoji": "👨‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pessoa que ensina na escola.",
                "examples": [
                    "O professor explica a lição."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "pro.fɛ.ˈsor",
        "id": "pt_starter_jobs_001"
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
                "text": "Pessoa que trata das pessoas doentes.",
                "examples": [
                    "O médico atendeu-me muito bem."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈmɛ.ði.ku",
        "id": "pt_starter_jobs_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
