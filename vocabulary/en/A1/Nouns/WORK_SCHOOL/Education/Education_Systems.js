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
    },
    {
        "id": "A1-NOUN-WOR-078",
        "word": "course",
        "emoji": "\ud83d\udcda",
        "form": "noun",
        "transcription": "k\u0254\u02d0rs",
        "definitions": [
            {
                "text": "A series of lessons or lectures in a particular subject.",
                "examples": [
                    "I registered for an online English course.",
                    "The course lasts twelve weeks."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-079",
        "word": "degree",
        "emoji": "\ud83c\udf93",
        "form": "noun",
        "transcription": "d\u026a\u02c8\u0261ri\u02d0",
        "definitions": [
            {
                "text": "An academic title awarded by a university.",
                "examples": [
                    "She earned a degree in computer science.",
                    "A university degree opens career options."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-080",
        "word": "diploma",
        "emoji": "\ud83d\udcdc",
        "form": "noun",
        "transcription": "d\u026a\u02c8plo\u028am\u0259",
        "definitions": [
            {
                "text": "A certificate awarded for completing a course of study.",
                "examples": [
                    "He proudly framed his high school diploma.",
                    "Receive your diploma at graduation."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-081",
        "word": "grade",
        "emoji": "\ud83c\udd70\ufe0f",
        "form": "noun",
        "transcription": "\u0261re\u026ad",
        "definitions": [
            {
                "text": "A mark indicating a student's level of accomplishment.",
                "examples": [
                    "He received an A grade on his essay.",
                    "Good grades require consistent effort."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-082",
        "word": "subject",
        "emoji": "\ud83d\udcda",
        "form": "noun",
        "transcription": "\u02c8s\u028cb\u02a4\u0259kt",
        "definitions": [
            {
                "text": "A branch of knowledge studied in school.",
                "examples": [
                    "History is my favorite school subject.",
                    "Which subjects do you enjoy most?"
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    },
    {
        "id": "A1-NOUN-WOR-083",
        "word": "term",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "transcription": "t\u025c\u02d0rm",
        "definitions": [
            {
                "text": "One of the periods into which an academic year is divided.",
                "examples": [
                    "The autumn term begins in September.",
                    "Students take exams at the end of term."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Nouns",
        "sub_subcategory": "Education_Systems"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
