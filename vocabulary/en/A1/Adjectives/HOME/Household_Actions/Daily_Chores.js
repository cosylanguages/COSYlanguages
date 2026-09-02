(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-HOM-005",
        "word": "clean",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
        "definitions": [
            {
                "text": "Free from dirt.",
                "examples": [
                    "The flat is clean now.",
                    "Keep the workspace clean and tidy."
                ]
            }
        ],
        "comparative": "cleaner",
        "superlative": "the cleanest",
        "transcription": "klin",
        "synonyms": [
            "tidy",
            "neat"
        ],
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ],
        "legacy_id": "A1-HOME-02",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Daily_Chores"
    },
    {
        "id": "A1-ADJ-HOM-006",
        "word": "dirty",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
        "definitions": [
            {
                "text": "Covered in dirt or impurities.",
                "examples": [
                    "His hands are dirty after fixing the car."
                ]
            }
        ],
        "comparative": "dirtier",
        "superlative": "the dirtiest",
        "emoji": "💩",
        "transcription": "ˈdərti",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "clean"
        ],
        "legacy_id": "A1-HOME-04",
        "level_code": "A1",
        "domain": "HOME",
        "subcategory": "Household_Actions",
        "pos_section": "Adjectives",
        "sub_subcategory": "Daily_Chores"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
