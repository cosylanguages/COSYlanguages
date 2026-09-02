(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-WOR-029",
        "word": "boss",
        "emoji": "\ud83d\udcbc",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bosses",
        "subtext": "work, profession, get a job",
        "definitions": [
            {
                "text": "The person who is in charge at work.",
                "examples": [
                    "My boss is very friendly."
                ]
            }
        ],
        "transcription": "b\u0254s",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-11",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-030",
        "word": "break",
        "emoji": "\u2615",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "breaks",
        "subtext": "lunch break, take a break",
        "definitions": [
            {
                "text": "A short period of time when you stop working or studying to rest or eat.",
                "examples": [
                    "Let's take a fifteen-minute break."
                ]
            }
        ],
        "transcription": "bre\u026ak",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-12",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-031",
        "word": "business",
        "emoji": "\ud83d\udcbc",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "businesses",
        "definitions": [
            {
                "text": "The activity of making, buying, or selling goods or services for money.",
                "examples": [
                    "He is in the family business."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "\u02c8b\u026azn\u026as",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-15",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-032",
        "word": "colleague",
        "emoji": "\ud83e\uddd1\u200d\ud83d\udcbc",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "colleagues",
        "definitions": [
            {
                "text": "A person you work with.",
                "examples": [
                    "My colleagues are helpful."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "\u02c8k\u0251lig",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-26",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-033",
        "word": "company",
        "emoji": "\ud83c\udfe2",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "companies",
        "definitions": [
            {
                "text": "An organization that sells goods or services in order to make money.",
                "examples": [
                    "He works for a large insurance company."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "\u02c8k\u0259mp\u0259\u02ccni",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-29",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-034",
        "word": "document",
        "emoji": "\ud83d\udcc4",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "documents",
        "definitions": [
            {
                "text": "An official paper that gives information or proof of something.",
                "examples": [
                    "Please sign this document."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "\u02c8d\u0251kj\u0259m\u025bnt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-36",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-035",
        "word": "factory",
        "emoji": "\ud83c\udfed",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "factories",
        "definitions": [
            {
                "text": "A building where goods are made using machines.",
                "examples": [
                    "He works in a car factory."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "\u02c8f\u00e6kt\u0259ri",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-43",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-036",
        "word": "file",
        "emoji": "\ud83d\udcc1",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "files",
        "definitions": [
            {
                "text": "A collection of information stored on a computer or in a folder.",
                "examples": [
                    "I am looking for the sales file."
                ]
            }
        ],
        "subtext": "related to workplace basics",
        "transcription": "fa\u026al",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-45",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-037",
        "word": "group",
        "emoji": "\ud83d\udc65",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "groups",
        "subtext": "a small group / group work",
        "synonyms": [
            "set"
        ],
        "definitions": [
            {
                "text": "A number of people or things that are together.",
                "examples": [
                    "We work in a small group."
                ]
            }
        ],
        "transcription": "grup",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-57",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-038",
        "word": "meeting",
        "emoji": "\ud83e\udd1d",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "meetings",
        "subtext": "have a meeting, go to a meeting",
        "definitions": [
            {
                "text": "A time when people come together to talk about something.",
                "examples": [
                    "We have a meeting every Monday.",
                    "The meeting is in the office."
                ]
            }
        ],
        "transcription": "\u02c8mit\u026a\u014b",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-84",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-039",
        "word": "report",
        "emoji": "\ud83d\udcc4",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "reports",
        "subtext": "write a report",
        "definitions": [
            {
                "text": "A document that gives information about a subject.",
                "examples": [
                    "I am writing a report."
                ]
            }
        ],
        "transcription": "r\u026a\u02c8p\u0254\u02d0t",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-112",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-040",
        "word": "sleep",
        "emoji": "\ud83d\ude34",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The natural rest your body needs each night.",
                "examples": [
                    "I need eight hours of sleep."
                ]
            }
        ],
        "subtext": "related to daily work routines",
        "transcription": "slip",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sl\u0113pan",
            "origin_meaning": "to sleep"
        },
        "antonyms": [
            "wake up"
        ],
        "legacy_id": "A1-WORK-121",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-041",
        "word": "staff",
        "emoji": "\ud83d\udc65",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "related to workplace basics",
        "synonyms": [
            "employees",
            "workers"
        ],
        "definitions": [
            {
                "text": "The group of people who work for an organization.",
                "examples": [
                    "The hospital staff are very helpful."
                ]
            }
        ],
        "transcription": "st\u00e6f",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-123",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
