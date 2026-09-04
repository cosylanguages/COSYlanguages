(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-WOR-001",
        "word": "absent",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not in the place where you are expected to be, especially at school or work.",
                "examples": [
                    "Three students are absent today.",
                    "He was absent from work for a week."
                ]
            }
        ],
        "subtext": "not present, away",
        "synonyms": [
            "not present",
            "away"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈæbsənt",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "absens",
            "origin_meaning": "being away"
        },
        "legacy_id": "A2-WORK-01",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Adjectives",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-ADJ-WOR-002",
        "word": "academic",
        "emoji": "🎓",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to schools, colleges, and universities.",
                "examples": [
                    "The academic year starts in September."
                ]
            }
        ],
        "subtext": "school-related",
        "synonyms": [
            "school-related"
        ],
        "comparative": "more academic",
        "superlative": "the most academic",
        "transcription": "ˌækəˈdɛmɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "akadēmia",
            "origin_meaning": "Plato's school"
        },
        "legacy_id": "A2-WORK-02",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Adjectives",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-ADJ-WOR-003",
        "word": "qualified",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having the necessary skills or training.",
                "examples": [
                    "She is fully qualified to lead the team."
                ]
            }
        ],
        "subtext": "fully qualified / well qualified / highly qualified",
        "comparative": "more qualified",
        "superlative": "the most qualified",
        "synonyms": [
            "trained"
        ],
        "transcription": "🇬🇧 ˈkwɒlɪfaɪd | 🇺🇸 ˈkwɑːlɪfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-12",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Adjectives",
        "sub_subcategory": "School_Classroom"
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
