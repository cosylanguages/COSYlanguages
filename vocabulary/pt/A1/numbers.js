// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "um",
        "level": "starter",
        "theme": "numbers",
        "emoji": "1️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Primeiro número cardinal.",
                "examples": [
                    "Um, dois, três."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ũ",
        "id": "pt_starter_numbers_001"
    },
    {
        "word": "dois",
        "level": "starter",
        "theme": "numbers",
        "emoji": "2️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Número que segue o um.",
                "examples": [
                    "Tenho dois gatos."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "dojʃ",
        "id": "pt_starter_numbers_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
