// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "livro",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Conjunto de páginas impressas para ler.",
                "examples": [
                    "Lio um livro de português."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈli.vru",
        "id": "pt_starter_school_001"
    },
    {
        "word": "caderno",
        "level": "starter",
        "theme": "school",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Livro com folhas em branco para escrever.",
                "examples": [
                    "Escrevo as minhas notas no caderno."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈðɛr.nu",
        "id": "pt_starter_school_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
