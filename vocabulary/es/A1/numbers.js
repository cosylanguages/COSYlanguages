// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "uno",
        "level": "starter",
        "theme": "numbers",
        "emoji": "1️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Primer número cardinal.",
                "examples": [
                    "Uno, dos, tres."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈu.no",
        "id": "es_starter_numbers_001"
    },
    {
        "word": "dos",
        "level": "starter",
        "theme": "numbers",
        "emoji": "2️⃣",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Número que sigue al uno.",
                "examples": [
                    "Tengo dos gatos."
                ]
            }
        ],
        "lang": "es",
        "transcription": "dos",
        "id": "es_starter_numbers_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
