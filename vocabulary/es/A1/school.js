// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "libro",
        "level": "starter",
        "theme": "school",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Conjunto de páginas impresas para leer.",
                "examples": [
                    "Leo un libro de español."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈli.βro",
        "id": "es_starter_school_001"
    },
    {
        "word": "cuaderno",
        "level": "starter",
        "theme": "school",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Libro de hojas en blanco para escribir.",
                "examples": [
                    "Escribo mis notas en el cuaderno."
                ]
            }
        ],
        "lang": "es",
        "transcription": "kwa.ˈðer.no",
        "id": "es_starter_school_002"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
