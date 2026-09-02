(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-WOR-01",
        "word": "boss",
        "emoji": "💼",
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
        "transcription": "bɔs",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-11",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-02",
        "word": "break",
        "emoji": "☕",
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
        "transcription": "breɪk",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-12",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-03",
        "word": "business",
        "emoji": "💼",
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
        "transcription": "ˈbɪznɪs",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-15",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-04",
        "word": "colleague",
        "emoji": "🧑‍💼",
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
        "transcription": "ˈkɑlig",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-26",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-05",
        "word": "company",
        "emoji": "🏢",
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
        "transcription": "ˈkəmpəˌni",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-29",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-06",
        "word": "document",
        "emoji": "📄",
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
        "transcription": "ˈdɑkjəmɛnt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-36",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-07",
        "word": "factory",
        "emoji": "🏭",
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
        "transcription": "ˈfæktəri",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-43",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-08",
        "word": "file",
        "emoji": "📁",
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
        "transcription": "faɪl",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-45",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-09",
        "word": "group",
        "emoji": "👥",
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
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-10",
        "word": "meeting",
        "emoji": "🤝",
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
        "transcription": "ˈmitɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-84",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-11",
        "word": "report",
        "emoji": "📄",
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
        "transcription": "rɪˈpɔːt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-112",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-12",
        "word": "sleep",
        "emoji": "😴",
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
            "origin_word": "slēpan",
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
        "sub_subcategory": "Jobs_Careers_Occupations"
    },
    {
        "id": "A1-NOUN-WOR-13",
        "word": "staff",
        "emoji": "👥",
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
        "transcription": "stæf",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "A1-WORK-123",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers_Occupations"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
