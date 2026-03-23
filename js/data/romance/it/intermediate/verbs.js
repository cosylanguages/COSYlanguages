(function() {
    const data = [
    {
        "word": "fare giardinaggio",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🧑‍🌾",
        "form": "verb",
        "definitions": [
            {
                "text": "Lavorare in un giardino per far crescere le piante.",
                "examples": [
                    "Gli piace fare giardinaggio nel fine settimana."
                ]
            }
        ]
    },
    {
        "word": "fare volontariato",
        "level": "intermediate",
        "theme": "society_community_B1",
        "emoji": "🙋",
        "form": "verb",
        "subtext": "prestare servizio",
        "definitions": [
            {
                "text": "Offrirsi di fare qualcosa senza essere pagati.",
                "examples": [
                    "Fa volontariato alla banca alimentare locale."
                ]
            }
        ]
    }
];
    const lang = "it";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
