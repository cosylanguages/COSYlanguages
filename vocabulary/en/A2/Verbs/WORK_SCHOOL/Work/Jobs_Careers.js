(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-WOR-049",
        "word": "supervise",
        "emoji": "👁️",
        "form": "verb",
        "definitions": [
            {
                "text": "To observe and direct the execution of a task.",
                "examples": [
                    "A senior manager supervises the project.",
                    "Teachers supervise students during recess."
                ]
            }
        ],
        "subtext": "oversee, manage",
        "synonyms": [
            "oversee",
            "manage"
        ],
        "transcription": "ˈsuːpəvaɪz",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-051",
        "word": "accomplish",
        "emoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "To achieve or complete successfully.",
                "examples": [
                    "They accomplished the task ahead of schedule.",
                    "Setting goals helps you accomplish more."
                ]
            }
        ],
        "subtext": "achieve, fulfill",
        "synonyms": [
            "achieve",
            "fulfill"
        ],
        "transcription": "əˈkʌmplɪʃ",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-053",
        "word": "advance",
        "emoji": "📈",
        "form": "verb",
        "definitions": [
            {
                "text": "To move forward in a purposeful way.",
                "examples": [
                    "Technology advances rapidly every decade.",
                    "She advanced to the rank of manager."
                ]
            }
        ],
        "subtext": "progress, move forward",
        "synonyms": [
            "progress",
            "move forward"
        ],
        "transcription": "ədˈvɑːns",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-054",
        "word": "appoint",
        "emoji": "👔",
        "form": "verb",
        "definitions": [
            {
                "text": "To assign a job or role to someone.",
                "examples": [
                    "The board appointed a new director.",
                    "They appointed him team leader."
                ]
            }
        ],
        "subtext": "designate, assign",
        "synonyms": [
            "designate",
            "assign"
        ],
        "transcription": "əˈpɔɪnt",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-055",
        "word": "approve",
        "emoji": "👍",
        "form": "verb",
        "definitions": [
            {
                "text": "To officially accept or agree to something.",
                "examples": [
                    "The city council approved the budget.",
                    "My manager approved my vacation leave."
                ]
            }
        ],
        "subtext": "accept, endorse",
        "synonyms": [
            "accept",
            "endorse"
        ],
        "transcription": "əˈpruːv",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-057",
        "word": "assign",
        "emoji": "📋",
        "form": "verb",
        "definitions": [
            {
                "text": "To allocate a job or duty to someone.",
                "examples": [
                    "The manager assigned tasks to the team.",
                    "They assigned him a desk by the window."
                ]
            }
        ],
        "subtext": "allocate, delegate",
        "synonyms": [
            "allocate",
            "delegate"
        ],
        "transcription": "əˈsaɪn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-060",
        "word": "ban",
        "emoji": "🚫",
        "form": "verb",
        "definitions": [
            {
                "text": "To officially or legally prohibit something.",
                "examples": [
                    "The city banned plastic bags in shops.",
                    "Smoking is banned in all public spaces."
                ]
            }
        ],
        "subtext": "prohibit, forbid",
        "synonyms": [
            "prohibit",
            "forbid"
        ],
        "transcription": "bæn",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A2-VERB-WOR-062",
        "word": "boost",
        "emoji": "🚀",
        "form": "verb",
        "definitions": [
            {
                "text": "To help or encourage something to increase or improve.",
                "examples": [
                    "Good publicity boosted ticket sales.",
                    "Coffee boosts energy in the morning."
                ]
            }
        ],
        "subtext": "increase, lift",
        "synonyms": [
            "increase",
            "lift"
        ],
        "transcription": "buːst",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "jobs",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
