// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "ფასი",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ნივთის ღირებულება ფულში.",
                "examples": [
                    "რა ღირს ეს ნივთი?"
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_shopping_001"
    },
    {
        "word": "ფული",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "გადახდის საშუალება.",
                "examples": [
                    "ფულით გადახდა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_shopping_002"
    },
    {
        "word": "ყიდვა",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "ნივთის მიღება ფულის გადახდით.",
                "examples": [
                    "მაღაზიაში პროდუქტების ყიდვა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_starter_shopping_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
