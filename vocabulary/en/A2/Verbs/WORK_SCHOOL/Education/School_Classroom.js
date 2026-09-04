(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-WOR-002",
        "word": "complete",
        "emoji": "✅",
        "form": "verb",
        "subtext": "complete a task / complete a form",
        "synonyms": [
            "finish"
        ],
        "definitions": [
            {
                "text": "To finish doing something.",
                "examples": [
                    "Please complete the application form.",
                    "He completed the race in record time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "completed",
        "v3": "completed",
        "transcription": "kəmˈpliːt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "completing",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-04",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-VERB-WOR-003",
        "word": "continue",
        "emoji": "➡️",
        "form": "verb",
        "subtext": "continue working / continue the journey",
        "synonyms": [
            "go on",
            "keep doing"
        ],
        "definitions": [
            {
                "text": "To keep happening, or to keep doing something without stopping.",
                "examples": [
                    "The rain continued all day.",
                    "Please continue reading."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "continued",
        "v3": "continued",
        "transcription": "kənˈtɪnjuː",
        "group": "regular",
        "auxiliary": "have",
        "v4": "continuing",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-05",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-VERB-WOR-004",
        "word": "fail",
        "emoji": "❌",
        "form": "verb",
        "subtext": "fail an exam / fail to do / fail a test / fail to meet a deadline",
        "definitions": [
            {
                "text": "To not succeed; to not do something required.",
                "examples": [
                    "She failed the first exam but passed the second attempt.",
                    "I failed my driving test three times."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "failed",
        "v3": "failed",
        "transcription": "feɪl",
        "synonyms": [
            "not pass"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "failing",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-07",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-VERB-WOR-005",
        "word": "graduate",
        "emoji": "🎓",
        "form": "verb",
        "subtext": "graduate from university / graduate high school / recent graduate",
        "definitions": [
            {
                "text": "To complete a school, college, or university course.",
                "examples": [
                    "She graduated from Oxford last year.",
                    "My brother is graduating this summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "graduated",
        "v3": "graduated",
        "transcription": "ˈɡrædʒueɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "graduating",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-09",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-VERB-WOR-006",
        "word": "improve",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve your English / improve performance",
        "synonyms": [
            "get better"
        ],
        "definitions": [
            {
                "text": "To get better, or to make something better.",
                "examples": [
                    "I want to improve my speaking skills.",
                    "The weather is improving."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "improved",
        "v3": "improved",
        "transcription": "ɪmˈpruːv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "improving",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-10",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "School_Classroom"
    },
    {
        "id": "A2-VERB-WOR-007",
        "word": "memorise",
        "emoji": "🧠",
        "form": "verb",
        "subtext": "memorise words",
        "definitions": [
            {
                "text": "To learn something so that you remember it exactly.",
                "examples": [
                    "You need to memorise these irregular verbs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "memorised",
        "v3": "memorised",
        "transcription": "ˈmɛməraɪz",
        "synonyms": [
            "learn by heart"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "memorising",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "A2-WORK-11",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
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
