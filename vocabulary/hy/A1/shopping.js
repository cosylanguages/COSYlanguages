// TODO: verify level classification
(function() {
    const lang = "hy";
    const data = [
    {
        "word": "գին",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ապրանքի արժեքը դրամով:",
                "examples": [
                    "Ի՞նչ արժե այս ապրանքը:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_shopping_001"
    },
    {
        "word": "դրամ",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Վճարման միջոց:",
                "examples": [
                    "Դրամով վճարել:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_shopping_002"
    },
    {
        "word": "գնել",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Ապրանք ստանալ դրամ վճարելով:",
                "examples": [
                    "Խանութից ուտելիք գնել:"
                ]
            }
        ],
        "lang": "hy",
        "transcription": "",
        "id": "hy_starter_shopping_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
