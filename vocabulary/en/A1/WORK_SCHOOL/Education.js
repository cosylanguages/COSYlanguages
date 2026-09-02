(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-WORK-01",
        "word": "alphabet",
        "emoji": "🔤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A set of letters used for writing a language.",
                "examples": [
                    "The English alphabet has 26 letters."
                ]
            }
        ],
        "subtext": "letters",
        "transcription": "ˈælfəˌbɛt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "alpha + beta"
        },
        "legacy_id": "en_starter_learning_studying_021",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-02",
        "word": "backpack",
        "emoji": "🎒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "backpacks",
        "definitions": [
            {
                "text": "A bag that you carry on your back.",
                "examples": [
                    "I put my books in my backpack."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈbækˌpæk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_010",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-03",
        "word": "board",
        "emoji": "📋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boards",
        "definitions": [
            {
                "text": "A flat surface at the front of a classroom that a teacher writes on.",
                "examples": [
                    "Look at the board.",
                    "The teacher writes the date on the board."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "bɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_005",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-04",
        "word": "calculator",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "calculators",
        "definitions": [
            {
                "text": "A small electronic device used for adding, subtracting, etc.",
                "examples": [
                    "I use a calculator for my maths homework."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈkælkjəˌleɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_016",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-05",
        "word": "class",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classes",
        "subtext": "English class, go to class",
        "definitions": [
            {
                "text": "A group of students who are taught together.",
                "examples": [
                    "I have an English class at nine o'clock."
                ]
            }
        ],
        "transcription": "klæs",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_008",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-06",
        "word": "classmate",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classmates",
        "definitions": [
            {
                "text": "A person who is in the same class as you at school.",
                "examples": [
                    "She is my classmate."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "transcription": "ˈklæsˌmeɪt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_002",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-07",
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
        "legacy_id": "en_starter_types_of_education_001",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-08",
        "word": "envelope",
        "emoji": "✉️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "envelopes",
        "definitions": [
            {
                "text": "A flat paper container used for sending letters.",
                "examples": [
                    "Put the letter in the envelope."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈɛnvəˌloʊp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_011",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-09",
        "word": "eraser",
        "emoji": "🧽",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "erasers",
        "subtext": "related to school stationery",
        "synonyms": [
            "🇬🇧 rubber"
        ],
        "definitions": [
            {
                "text": "A small piece of rubber or plastic used to remove pencil marks.",
                "examples": [
                    "Can I borrow your eraser?"
                ]
            }
        ],
        "transcription": "ɪˈreɪsər",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_006",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-10",
        "word": "exam",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "exams",
        "subtext": "examination, pass an exam, fail an exam",
        "definitions": [
            {
                "text": "A formal test of a person's knowledge or proficiency in a particular subject.",
                "examples": [
                    "I have an English exam tomorrow."
                ]
            }
        ],
        "transcription": "ɪgˈzæm",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_005",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-11",
        "word": "forget",
        "emoji": "🤔",
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
        "transcription": "fərˈgɛt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "remember"
        ],
        "legacy_id": "en_starter_learning_studying_015",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-12",
        "word": "forget",
        "emoji": "🤔",
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
        "group": "regular",
        "transcription": "fərˈgɛt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "remember"
        ],
        "legacy_id": "en_starter_learning_studying_028",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-13",
        "word": "geography",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the systems and processes that involve the Earth's surfaces.",
                "examples": [
                    "We use maps in geography class."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "transcription": "ʤiˈɑgrəfi",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "geographia",
            "origin_meaning": "earth description"
        },
        "legacy_id": "en_starter_school_004",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-14",
        "word": "glue",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "A sticky substance used for joining things together.",
                "examples": [
                    "Use some glue to fix the picture."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "glu",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_014",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-15",
        "word": "history",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of past events.",
                "examples": [
                    "I like learning about history."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "transcription": "ˈhɪstəri",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "historia",
            "origin_meaning": "inquiry"
        },
        "legacy_id": "en_starter_school_001",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-16",
        "word": "homework",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "Work that a teacher gives a student to do at home.",
                "examples": [
                    "I need to do my homework."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "transcription": "ˈhoʊmˌwərk",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_004",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-17",
        "word": "improve",
        "emoji": "📈",
        "form": "verb",
        "transcription": "ɪmˈpruːv",
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
        "legacy_id": "en_starter_learning_034",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-18",
        "word": "know",
        "emoji": "🧠",
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
        "transcription": "noʊ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "wonder"
        ],
        "legacy_id": "en_starter_learning_studying_013",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-19",
        "word": "know",
        "emoji": "🧠",
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
        "group": "regular",
        "transcription": "noʊ",
        "synonyms": [
            "understand"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "wonder"
        ],
        "legacy_id": "en_starter_learning_studying_026",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-20",
        "word": "learn",
        "emoji": "📚",
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
        "transcription": "lərn",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "teach"
        ],
        "legacy_id": "en_starter_learning_studying_016",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-21",
        "word": "learn",
        "emoji": "📚",
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
        "group": "regular",
        "transcription": "lərn",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "teach"
        ],
        "legacy_id": "en_starter_learning_studying_029",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-22",
        "word": "lesson",
        "emoji": "📚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lessons",
        "definitions": [
            {
                "text": "A period of time when you learn something with a teacher.",
                "examples": [
                    "I have an English lesson today."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "transcription": "ˈlɛsən",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lectio",
            "origin_meaning": "reading"
        },
        "legacy_id": "en_starter_learning_studying_003",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-23",
        "word": "listen",
        "emoji": "🎧",
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
        "transcription": "ˈlɪsən",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "say"
        ],
        "legacy_id": "en_starter_learning_studying_012",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-24",
        "word": "listen",
        "emoji": "🎧",
        "subtext": "listen to music / listen to someone / listen carefully / listen to a podcast",
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
        "transcription": "ˈlɪsən",
        "synonyms": [
            "hear"
        ],
        "auxiliary": "have",
        "v4": "listening",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "say"
        ],
        "legacy_id": "en_starter_learning_studying_025",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-25",
        "word": "maths",
        "emoji": "🔢",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "related to school subjects",
        "synonyms": [
            "mathematics"
        ],
        "definitions": [
            {
                "text": "The study of numbers, shapes, and quantities.",
                "examples": [
                    "Maths is my favorite subject."
                ]
            }
        ],
        "transcription": "mæθs",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "mathema",
            "origin_meaning": "that which is learnt"
        },
        "legacy_id": "en_starter_school_003",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-26",
        "word": "mean",
        "emoji": "❔",
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
        "legacy_id": "en_starter_learning_studying_020",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-27",
        "word": "mean",
        "emoji": "❔",
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
        "group": "regular",
        "transcription": "min",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "nonsense"
        ],
        "legacy_id": "en_starter_learning_studying_033",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-28",
        "word": "notebook",
        "emoji": "📓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "notebooks",
        "definitions": [
            {
                "text": "A book with empty pages that you write in.",
                "examples": [
                    "I write my lessons in a notebook."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈnoʊtˌbʊk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_008",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-29",
        "word": "pass",
        "emoji": "🏔️",
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
        "transcription": "pæs",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "fail"
        ],
        "legacy_id": "en_starter_learning_studying_017",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-30",
        "word": "pass",
        "emoji": "🏔️",
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
        "transcription": "pæs",
        "auxiliary": "have",
        "v4": "passing",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "fail"
        ],
        "legacy_id": "en_starter_learning_studying_030",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-31",
        "word": "pencil case",
        "emoji": "✏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pencil cases",
        "definitions": [
            {
                "text": "A small bag or box for keeping pencils and pens.",
                "examples": [
                    "My pens are in my pencil case."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈpɛnsəl keɪs",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_007",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-32",
        "word": "read",
        "emoji": "📖",
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
        "transcription": "rɛd",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "write"
        ],
        "legacy_id": "en_starter_learning_studying_011",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-33",
        "word": "read",
        "emoji": "📖",
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
        "group": "regular",
        "transcription": "rɛd",
        "synonyms": [
            "look at"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "write"
        ],
        "legacy_id": "en_starter_learning_studying_024",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-34",
        "word": "remember",
        "emoji": "🧠",
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
        "transcription": "rɪˈmɛmbər",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "forget"
        ],
        "legacy_id": "en_starter_learning_studying_014",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-35",
        "word": "remember",
        "emoji": "🧠",
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
        "transcription": "rɪˈmɛmbər",
        "auxiliary": "have",
        "v4": "remembering",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "forget"
        ],
        "legacy_id": "en_starter_learning_studying_027",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-36",
        "word": "science",
        "emoji": "🧪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The study of the natural world based on facts learned through experiments.",
                "examples": [
                    "We have science class on Tuesdays."
                ]
            }
        ],
        "subtext": "related to school subjects",
        "transcription": "saɪəns",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "scientia",
            "origin_meaning": "knowledge"
        },
        "legacy_id": "en_starter_school_002",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-37",
        "word": "scissors",
        "emoji": "✂️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "scissors",
        "definitions": [
            {
                "text": "A tool used for cutting paper, cloth, etc.",
                "examples": [
                    "Where are the scissors? I need to cut this paper."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈsɪzərz",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_015",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-38",
        "word": "skill",
        "emoji": "🧠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "skills",
        "subtext": "language skills",
        "definitions": [
            {
                "text": "The ability to do something well.",
                "examples": [
                    "She has good communication skills."
                ]
            }
        ],
        "transcription": "skɪl",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_007",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-39",
        "word": "stamp",
        "emoji": "🧧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stamps",
        "definitions": [
            {
                "text": "A small piece of paper that you buy and stick onto an envelope.",
                "examples": [
                    "I need a stamp for this letter."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "stæmp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_012",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-40",
        "word": "stapler",
        "emoji": "🖇️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "staplers",
        "definitions": [
            {
                "text": "A small device used for joining together sheets of paper with a small piece of metal.",
                "examples": [
                    "I need a stapler for these reports."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈsteɪpələr",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_013",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-41",
        "word": "student",
        "emoji": "🧑‍🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "students",
        "definitions": [
            {
                "text": "A person who is studying at a school or university.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "subtext": "related to learning studying",
        "transcription": "ˈstudənt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "studere",
            "origin_meaning": "to be eager"
        },
        "legacy_id": "en_starter_learning_studying_001",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-42",
        "word": "study",
        "emoji": "📖",
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
        "transcription": "ˈstədi",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "play"
        ],
        "legacy_id": "en_starter_learning_studying_018",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-43",
        "word": "study",
        "emoji": "📖",
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
        "transcription": "ˈstədi",
        "auxiliary": "have",
        "v4": "studying",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "play"
        ],
        "legacy_id": "en_starter_learning_studying_031",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-44",
        "word": "tape",
        "emoji": "🎞️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tapes",
        "definitions": [
            {
                "text": "A long, thin piece of plastic that is sticky on one side.",
                "examples": [
                    "Use some tape to fix the envelope."
                ]
            }
        ],
        "subtext": "sticky tape",
        "transcription": "teɪp",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_017",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-45",
        "word": "teach",
        "emoji": "👨‍🏫",
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
        "transcription": "tiʧ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "learn"
        ],
        "legacy_id": "en_starter_learning_studying_019",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-46",
        "word": "teach",
        "emoji": "👨‍🏫",
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
        "group": "regular",
        "transcription": "tiʧ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "learn"
        ],
        "legacy_id": "en_starter_learning_studying_032",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-47",
        "word": "test",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "tests",
        "subtext": "take a test, pass a test",
        "definitions": [
            {
                "text": "A set of questions or practical activities used to measure someone's knowledge or ability.",
                "examples": [
                    "I have a maths test today."
                ]
            }
        ],
        "transcription": "tɛst",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "legacy_id": "en_starter_learning_studying_006",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-48",
        "word": "textbook",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "textbooks",
        "definitions": [
            {
                "text": "A book that contains information about a subject that people study.",
                "examples": [
                    "Open your English textbooks to page ten."
                ]
            }
        ],
        "subtext": "related to school stationery",
        "transcription": "ˈtɛkstˌbʊk",
        "lang": "en",
        "level": "starter",
        "theme": "school",
        "sub_theme": null,
        "legacy_id": "en_starter_school_009",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-49",
        "word": "try",
        "emoji": "🎯",
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
        "transcription": "traɪ",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "give up"
        ],
        "legacy_id": "en_starter_learning_studying_009",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-50",
        "word": "try",
        "emoji": "🎯",
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
        "transcription": "traɪ",
        "synonyms": [
            "attempt"
        ],
        "auxiliary": "have",
        "v4": "trying",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "give up"
        ],
        "legacy_id": "en_starter_learning_studying_022",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-51",
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
        "legacy_id": "en_starter_types_of_education_002",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-52",
        "word": "write",
        "emoji": "✍️",
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
        "transcription": "raɪt",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "read"
        ],
        "legacy_id": "en_starter_learning_studying_010",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    },
    {
        "id": "A1-WORK-53",
        "word": "write",
        "emoji": "✍️",
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
        "group": "regular",
        "transcription": "raɪt",
        "synonyms": [
            "note down"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "learning_studying",
        "sub_theme": null,
        "antonyms": [
            "read"
        ],
        "legacy_id": "en_starter_learning_studying_023",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Education"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
