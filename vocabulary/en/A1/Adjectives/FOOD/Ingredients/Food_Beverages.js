(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-FOO-001",
        "word": "healthy",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "well, fit, healthy diet",
        "definitions": [
            {
                "text": "Good for your body; not ill.",
                "examples": [
                    "Vegetables are healthy food."
                ]
            }
        ],
        "comparative": "healthier",
        "superlative": "the healthiest",
        "transcription": "ˈhɛlθi",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "unhealthy"
        ],
        "legacy_id": "A1-FOOD-42",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-ADJ-FOO-003",
        "word": "unhealthy",
        "emoji": "🍔",
        "form": "adjective",
        "subtext": "unhealthy food / unhealthy lifestyle",
        "synonyms": [
            "ill",
            "unfit"
        ],
        "definitions": [
            {
                "text": "Not good for your body; not healthy.",
                "examples": [
                    "Fast food is often unhealthy."
                ]
            }
        ],
        "comparative": "more unhealthy",
        "superlative": "the most unhealthy",
        "transcription": "ənˈhɛlθi",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "healthy"
        ],
        "legacy_id": "A1-FOOD-78",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A1-ADJ-FOO-004",
        "word": "fresh",
        "form": "adjective",
        "transcription": "freʃ",
        "emoji": "🥬",
        "definitions": [
            {
                "text": "Recently made or gathered; not stale.",
                "examples": [
                    "Fresh green salad.",
                    "Fresh orange juice."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "FOOD",
        "subcategory": "Ingredients",
        "pos_section": "Adjectives",
        "sub_subcategory": "Food_Beverages"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
