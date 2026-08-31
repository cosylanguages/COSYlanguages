// TODO: verify level classification
(function() {
    const lang = "pt";
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
                "text": "Pessoa próxima a quem se tem afeto.",
                "examples": [
                    "O meu amigo vive perto da minha casa."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ɐ.ˈmi.ɣu",
        "id": "pt_starter_social_001"
    },
    {
        "word": "festa",
        "level": "starter",
        "theme": "social",
        "emoji": "🎉",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Reunião alegre para celebrar algo.",
                "examples": [
                    "Vamos a uma festa de aniversário."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈfɛʃ.tɐ",
        "id": "pt_starter_social_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
