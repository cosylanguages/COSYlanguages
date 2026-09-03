(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-FOO-003",
            "word": "delicious",
            "emoji": "😋",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Highly pleasant to the taste.",
                            "examples": [
                                    "The chef prepared a delicious seafood meal.",
                                    "This apple pie tastes delicious."
                            ]
                    }
            ],
            "subtext": "tasty, yummy",
            "synonyms": [
                    "tasty",
                    "yummy"
            ],
            "transcription": "dɪˈlɪʃəs",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "food",
            "domain": "FOOD",
            "subcategory": "Meals",
            "pos_section": "Adjectives",
            "sub_subcategory": "Prepared_Dishes"
    },
    {
            "id": "A2-ADJ-FOO-005",
            "word": "spicy",
            "emoji": "🌶️",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Flavored with or containing strong spices.",
                            "examples": [
                                    "I enjoy eating spicy curry.",
                                    "The soup was hot and spicy."
                            ]
                    }
            ],
            "subtext": "hot, seasoned",
            "synonyms": [
                    "hot",
                    "seasoned"
            ],
            "transcription": "ˈspaɪsi",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "food",
            "domain": "FOOD",
            "subcategory": "Meals",
            "pos_section": "Adjectives",
            "sub_subcategory": "Prepared_Dishes"
    },
    {
            "id": "A2-ADJ-FOO-007",
            "word": "authentic",
            "emoji": "🍝",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of undisputed origin; genuine.",
                            "examples": [
                                    "The bistro serves authentic Italian pasta.",
                                    "Keep authentic documents in a safe."
                            ]
                    }
            ],
            "subtext": "genuine, real",
            "synonyms": [
                    "genuine",
                    "real"
            ],
            "transcription": "ɔːˈθentɪk",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "food",
            "domain": "FOOD",
            "subcategory": "Meals",
            "pos_section": "Adjectives",
            "sub_subcategory": "Prepared_Dishes"
    },
    {
            "id": "A2-ADJ-FOO-008",
            "word": "balanced",
            "emoji": "🥗",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having different elements present in the correct proportions.",
                            "examples": [
                                    "Eat a balanced diet rich in vegetables.",
                                    "The report presented a balanced view."
                            ]
                    }
            ],
            "subtext": "even, proportional",
            "synonyms": [
                    "even",
                    "proportional"
            ],
            "transcription": "ˈbælənst",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "food",
            "domain": "FOOD",
            "subcategory": "Meals",
            "pos_section": "Adjectives",
            "sub_subcategory": "Prepared_Dishes"
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
