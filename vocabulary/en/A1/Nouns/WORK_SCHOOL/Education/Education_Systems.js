(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-WOR-001",
        "word": "college",
        "emoji": "\ud83c\udf93",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "colleges",
        "definitions": [
            {
                "text": "A place where students study after they leave school.",
                "examples": [
                    "She is at college."
                ]
            }
        ],
        "subtext": "related to types of education",
        "transcription": "\u02c8k\u0251l\u026a\u02a4",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_education",
        "sub_theme": null,
        "legacy_id": "A1-WORK-07",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-002",
        "word": "university",
        "emoji": "\ud83c\udf93",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "universities",
        "subtext": "study at university",
        "definitions": [
            {
                "text": "A place where people study for a degree.",
                "examples": [
                    "She is studying at university."
                ]
            }
        ],
        "transcription": "\u02ccjun\u0259\u02c8v\u0259rs\u0259ti",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_education",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "universitas",
            "origin_meaning": "the whole"
        },
        "legacy_id": "A1-WORK-51",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
