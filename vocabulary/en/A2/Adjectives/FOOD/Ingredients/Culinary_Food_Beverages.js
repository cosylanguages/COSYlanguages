(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-FOO-01",
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
        "sub_subcategory": "Culinary_Food_Beverages"
    },
    {
        "id": "A2-ADJ-FOO-02",
        "word": "overweight",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Heavier than is considered healthy.",
                "examples": [
                    "The doctor told him he was slightly overweight."
                ]
            }
        ],
        "subtext": "slightly overweight / become overweight / clinically overweight",
        "comparative": "more overweight",
        "superlative": "the most overweight",
        "transcription": "ˌoʊvərˈweɪt",
        "synonyms": [
            "fat",
            "heavy"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": null,
        "legacy_id": "A2-FOOD-15",
        "level_code": "A2",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Culinary_Food_Beverages"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
