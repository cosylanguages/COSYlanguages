// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "sol",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Estrela que dá luz e calor à Terra.",
                "examples": [
                    "Hoje o sol brilha no céu."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "sɔl",
        "id": "pt_starter_nature_001"
    },
    {
        "word": "lua",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Satélite natural que se vê à noite.",
                "examples": [
                    "A lua está cheia esta noite."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈlu.ɐ",
        "id": "pt_starter_nature_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
