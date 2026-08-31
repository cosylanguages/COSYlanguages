// TODO: verify level classification
(function() {
    const lang = "ba";
    const data = [
    {
        "word": "бәһа",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Товарҙың бәһаһы, аҡса суммаһы.",
                "examples": [
                    "Бәһаһын белеү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_001"
    },
    {
        "word": "аҡса",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Һатып алыу ҡоралы.",
                "examples": [
                    "Аҡса менән түләү."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_002"
    },
    {
        "word": "һатып алыу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Аҡса биреп товар алыу.",
                "examples": [
                    "Кибеттән аҙыҡ һатып алыу."
                ]
            }
        ],
        "lang": "ba",
        "transcription": "",
        "id": "ba_starter_shopping_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
