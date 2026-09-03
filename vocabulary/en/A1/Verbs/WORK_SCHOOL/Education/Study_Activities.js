(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-WOR-001",
        "word": "forget",
        "emoji": "\ud83e\udd14",
        "subtext": "forget a name / forget to do / forget about / completely forget",
        "form": "verb",
        "definitions": [
            {
                "text": "To fail to remember.",
                "examples": [
                    "Don't forget the meeting.",
                    "He always forgets passwords."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "forgot",
        "v3": "forgotten",
        "group": "irregular",
        "transcription": "f\u0259r\u02c8g\u025bt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "remember"
        ],
        "legacy_id": "A1-WORK-11",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-003",
        "word": "improve",
        "emoji": "\ud83d\udcc8",
        "form": "verb",
        "transcription": "\u026am\u02c8pru\u02d0v",
        "definitions": [
            {
                "text": "To make or become better in quality or skill.",
                "examples": [
                    "He works hard to improve his English pronunciation.",
                    "Our customer feedback has improved significantly."
                ]
            }
        ],
        "v2": "improved",
        "v3": "improved",
        "v4": "improving",
        "classification": "regular",
        "aspect": "action",
        "group": "regular",
        "subtext": "improve skills / improve quality",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "worsen"
        ],
        "legacy_id": "A1-WORK-17",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-004",
        "word": "know",
        "emoji": "\ud83e\udde0",
        "subtext": "know someone / know the answer / know a place / know how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have information or awareness about something.",
                "examples": [
                    "I know his name.",
                    "She knows the answer.",
                    "Do you know him?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "knew",
        "v3": "known",
        "group": "irregular",
        "transcription": "no\u028a",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "wonder"
        ],
        "legacy_id": "A1-WORK-18",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-006",
        "word": "learn",
        "emoji": "\ud83d\udcda",
        "subtext": "learn a language / learn a skill / learn from / learn how to",
        "form": "verb",
        "definitions": [
            {
                "text": "To gain knowledge or skill.",
                "examples": [
                    "She is learning Spanish for her new job abroad."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "learned / learnt",
        "v3": "learned / learnt",
        "group": "both",
        "transcription": "l\u0259rn",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "teach"
        ],
        "legacy_id": "A1-WORK-20",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-008",
        "word": "listen",
        "emoji": "\ud83c\udfa7",
        "subtext": "listen to music / listen carefully / listen to a podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay attention to sounds or speech.",
                "examples": [
                    "I listen to podcasts at work.",
                    "She listens carefully."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "listened",
        "v3": "listened",
        "group": "regular",
        "transcription": "\u02c8l\u026as\u0259n",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "say"
        ],
        "legacy_id": "A1-WORK-23",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-010",
        "word": "mean",
        "emoji": "\u2754",
        "subtext": "mean something / what does it mean / mean to do / I didn't mean to",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a particular meaning; to intend.",
                "examples": [
                    "What does this clause in the contract mean?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "meant",
        "v3": "meant",
        "group": "irregular",
        "transcription": "min",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "nonsense"
        ],
        "legacy_id": "A1-WORK-26",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-012",
        "word": "pass",
        "emoji": "\ud83c\udfd4\ufe0f",
        "subtext": "pass an exam / pass the ball / pass time / pass the sugar",
        "form": "verb",
        "definitions": [
            {
                "text": "To go past something or to succeed in an exam.",
                "examples": [
                    "I pass the park on my way home.",
                    "I hope I pass the test."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "passed",
        "v3": "passed",
        "group": "regular",
        "transcription": "p\u00e6s",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "fail"
        ],
        "legacy_id": "A1-WORK-29",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-014",
        "word": "read",
        "emoji": "\ud83d\udcd6",
        "subtext": "read a book / read the news / read a contract / read carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To look at and understand written words.",
                "examples": [
                    "She reads the news every morning.",
                    "He reads contracts."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "read",
        "v3": "read",
        "group": "irregular",
        "transcription": "r\u025bd",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "write"
        ],
        "legacy_id": "A1-WORK-32",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-016",
        "word": "remember",
        "emoji": "\ud83e\udde0",
        "subtext": "remember to do / remember a name / remember clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a memory of; to not forget.",
                "examples": [
                    "Please remember the deadline.",
                    "She remembers every client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "remembered",
        "v3": "remembered",
        "group": "regular",
        "transcription": "r\u026a\u02c8m\u025bmb\u0259r",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "forget"
        ],
        "legacy_id": "A1-WORK-34",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-018",
        "word": "study",
        "emoji": "\ud83d\udcd6",
        "subtext": "study English / study for an exam / study hard / self-study",
        "form": "verb",
        "definitions": [
            {
                "text": "To read and practise to gain knowledge.",
                "examples": [
                    "He is studying for a professional qualification."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "studied",
        "v3": "studied",
        "group": "regular",
        "transcription": "\u02c8st\u0259di",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "play"
        ],
        "legacy_id": "A1-WORK-42",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-020",
        "word": "teach",
        "emoji": "\ud83d\udc68\u200d\ud83c\udfeb",
        "subtext": "teach someone / teach a subject / teach how to / teach a class",
        "form": "verb",
        "definitions": [
            {
                "text": "To give instruction in a subject.",
                "examples": [
                    "She teaches communication skills to senior managers."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "taught",
        "v3": "taught",
        "group": "irregular",
        "transcription": "ti\u02a7",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "learn"
        ],
        "legacy_id": "A1-WORK-45",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-022",
        "word": "try",
        "emoji": "\ud83c\udfaf",
        "subtext": "try to do / try hard / try something new / give it a try",
        "form": "verb",
        "definitions": [
            {
                "text": "To attempt to do something; to test something.",
                "examples": [
                    "I always try to reply to all messages within an hour."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tried",
        "v3": "tried",
        "group": "regular",
        "transcription": "tra\u026a",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "give up"
        ],
        "legacy_id": "A1-WORK-49",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-024",
        "word": "write",
        "emoji": "\u270d\ufe0f",
        "subtext": "write to, write an email / write a report / write a letter / write notes",
        "form": "verb",
        "definitions": [
            {
                "text": "To put words on paper or screen.",
                "examples": [
                    "I write emails all day.",
                    "She writes a report every Friday."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wrote",
        "v3": "written",
        "group": "irregular",
        "transcription": "ra\u026at",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "read"
        ],
        "legacy_id": "A1-WORK-52",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-122",
        "word": "fail",
        "emoji": "\u274c",
        "form": "verb",
        "transcription": "fe\u026al",
        "definitions": [
            {
                "text": "Be unsuccessful in achieving a goal or passing a test.",
                "examples": [
                    "Study so you do not fail the test.",
                    "He passed math but failed chemistry."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    },
    {
        "id": "A1-VERB-WOR-123",
        "word": "memorize",
        "emoji": "\ud83e\udde0",
        "form": "verb",
        "transcription": "\u02c8m\u025bm\u0259\u02ccra\u026az",
        "definitions": [
            {
                "text": "Commit to memory; learn by heart.",
                "examples": [
                    "Memorize ten new vocabulary words.",
                    "She memorized the poem."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education",
        "pos_section": "Verbs",
        "sub_subcategory": "Study_Activities"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
