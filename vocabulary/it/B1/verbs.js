// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "fare giardinaggio",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "group": "are",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "giardinaggio biologico"
        ],
        "definitions": [
            {
                "text": "Lavorare in un giardino per far crescere le piante.",
                "examples": [
                    "Gli piace fare giardinaggio nel fine settimana."
                ]
            }
        ],
        "v3": "fatto giardinaggio",
        "auxiliary": "avere"
    },
    {
        "word": "fare volontariato",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "group": "are",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "prestare servizio"
        ],
        "definitions": [
            {
                "text": "Offrirsi di fare qualcosa senza essere pagati.",
                "examples": [
                    "Fa volontariato alla banca alimentare locale."
                ]
            }
        ],
        "v3": "fatto volontariato",
        "auxiliary": "avere"
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = (window.vocabularyData[lang] || []).concat(data);
})();