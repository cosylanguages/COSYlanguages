// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "it_intermediate_social_063",
        "word": "fare giardinaggio",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavorare in un giardino per far crescere le piante.",
                "examples": [
                    "Gli piace fare giardinaggio nel fine settimana."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🧑‍🌾",
        "_legacy": {
            "group": "are",
            "classification": "irregular",
            "aspect": "action",
            "subtext": "",
            "v3": "fatto giardinaggio",
            "auxiliary": "avere"
        }
    },
    {
        "id": "it_intermediate_social_064",
        "word": "fare volontariato",
        "lang": "it",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "Offrirsi di fare qualcosa senza essere pagati.",
                "examples": [
                    "Fa volontariato alla banca alimentare locale."
                ]
            }
        ],
        "transcription": "-",
        "emoji": "🙋",
        "_legacy": {
            "group": "are",
            "classification": "irregular",
            "aspect": "action",
            "subtext": "",
            "v3": "fatto volontariato",
            "auxiliary": "avere"
        }
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();