(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-FOO-001",
        "word": "fresh",
        "emoji": "🍏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Recently made, collected, or cooked.",
                "examples": [
                    "I love the smell of fresh bread.",
                    "Eat more fresh fruit."
                ]
            }
        ],
        "subtext": "new, recently picked",
        "synonyms": [
            "new",
            "recently picked"
        ],
        "comparative": "fresher",
        "superlative": "the freshest",
        "transcription": "frɛʃ",
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-10",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-ADJ-FOO-004",
        "word": "nutritious",
        "emoji": "🥗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nourishing and efficient as food.",
                "examples": [
                    "Fresh salads provide a nutritious lunch.",
                    "Eggs are nutritious and easy to cook."
                ]
            }
        ],
        "subtext": "healthy, wholesome",
        "synonyms": [
            "healthy",
            "wholesome"
        ],
        "transcription": "njuˈtrɪʃəs",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "food",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Food_Beverages"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
