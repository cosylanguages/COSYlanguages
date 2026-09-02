(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-WOR-01",
        "word": "college",
        "emoji": "🎓",
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
        "transcription": "ˈkɑlɪʤ",
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
        "id": "A1-NOUN-WOR-02",
        "word": "university",
        "emoji": "🎓",
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
        "transcription": "ˌjunəˈvərsəti",
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
