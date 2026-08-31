// TODO: verify level classification
(function() {
    const lang = "tt";
    const data = [
    {
        "word": "бәя",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Товарның бәясе, акча суммасы.",
                "examples": [
                    "Нинди бәя бу товарда?"
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_001"
    },
    {
        "word": "акча",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💶",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "Сатып алу коралы.",
                "examples": [
                    "Акча белән түләү."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_002"
    },
    {
        "word": "сатып алу",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🛒",
        "form": "verb",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "Акча биреп товар алу.",
                "examples": [
                    "Кибеттән ризык сатып алу."
                ]
            }
        ],
        "lang": "tt",
        "transcription": "",
        "id": "tt_starter_shopping_003"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
