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
        "id": "A2-ADJ-FOO-002",
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
        "sub_subcategory": "Food_Beverages"
    },
    {
        "id": "A2-ADJ-FOO-003",
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
    },
    {
        "id": "A2-ADJ-FOO-004",
        "word": "bitter",
        "emoji": "☕",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a sharp pungent taste or smell.",
                "examples": [
                    "Dark chocolate has a slightly bitter flavor.",
                    "Black coffee can taste bitter without sugar."
                ]
            }
        ],
        "subtext": "sharp, harsh",
        "synonyms": [
            "sharp",
            "harsh"
        ],
        "transcription": "ˈbɪtə",
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

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
