(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-WORK-01",
        "word": "actor",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "actors",
        "definitions": [
            {
                "text": "A person who performs in a play, film, or television program.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈæktər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_007",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-02",
        "word": "actress",
        "emoji": "🎭",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "actresses",
        "subtext": "famous actress",
        "synonyms": [
            "actor"
        ],
        "definitions": [
            {
                "text": "A woman who performs in a play or movie.",
                "examples": [
                    "She is a famous actress."
                ]
            }
        ],
        "transcription": "ˈæktrəs",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_020",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-03",
        "word": "arrive",
        "emoji": "🏁",
        "subtext": "arrive at / in, arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office at nine. The train arrives on time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "arrived",
        "group": "regular",
        "transcription": "əraɪv",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_work_049",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-04",
        "word": "arrive",
        "emoji": "🏁",
        "subtext": "arrive at / in, arrive at work / arrive late / arrive on time / arrive home",
        "form": "verb",
        "definitions": [
            {
                "text": "To reach a destination.",
                "examples": [
                    "He arrives at the office at nine. The train arrives on time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "arrived",
        "v3": "arrived",
        "group": "regular",
        "transcription": "əraɪv",
        "synonyms": [
            "reach"
        ],
        "auxiliary": "have",
        "v4": "arriving",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_work_101",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-05",
        "word": "attend",
        "definitions": [
            {
                "text": "To go to an event or meeting.",
                "examples": [
                    "I attend a management meeting every Monday."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended",
        "emoji": "📅",
        "form": "verb",
        "group": "regular",
        "transcription": "əˈtɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "miss"
        ],
        "legacy_id": "en_starter_work_069",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-06",
        "word": "attend",
        "definitions": [
            {
                "text": "To go to an event or meeting.",
                "examples": [
                    "I attend a management meeting every Monday."
                ]
            }
        ],
        "subtext": "attend a meeting / attend a course / attend an event",
        "classification": "regular",
        "aspect": "action",
        "v2": "attended",
        "v3": "attended",
        "emoji": "📅",
        "form": "verb",
        "group": "regular",
        "transcription": "əˈtɛnd",
        "auxiliary": "have",
        "v4": "attending",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "miss"
        ],
        "legacy_id": "en_starter_work_122",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-07",
        "word": "become",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "To start to be something.",
                "examples": [
                    "She became a manager after just two years in the role."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become",
        "group": "irregular",
        "transcription": "bɪˈkəm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "remain"
        ],
        "legacy_id": "en_starter_work_075",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-08",
        "word": "become",
        "emoji": "✨",
        "subtext": "become a manager / become popular / become clear / become important",
        "form": "verb",
        "definitions": [
            {
                "text": "To start to be something.",
                "examples": [
                    "She became a manager after just two years in the role."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "became",
        "v3": "become",
        "group": "regular",
        "transcription": "bɪˈkəm",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "remain"
        ],
        "legacy_id": "en_starter_work_128",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-09",
        "word": "begin",
        "emoji": "▶️",
        "form": "verb",
        "subtext": "begin a meeting / begin to work",
        "synonyms": [
            "start"
        ],
        "definitions": [
            {
                "text": "To start to do something.",
                "examples": [
                    "We begin the meeting at nine o'clock."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "began",
        "v3": "begun",
        "group": "irregular",
        "transcription": "bɪˈgɪn",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "end"
        ],
        "legacy_id": "en_starter_work_076",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-10",
        "word": "begin",
        "emoji": "▶️",
        "form": "verb",
        "subtext": "begin a meeting / begin to work",
        "synonyms": [
            "start"
        ],
        "definitions": [
            {
                "text": "To start to do something.",
                "examples": [
                    "We begin the meeting at nine o'clock."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "began",
        "v3": "begun",
        "group": "regular",
        "transcription": "bɪˈgɪn",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "end"
        ],
        "legacy_id": "en_starter_work_129",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-11",
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
        "legacy_id": "en_starter_work_030",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-12",
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
        "legacy_id": "en_starter_work_036",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-13",
        "word": "brush",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "brush your teeth",
        "synonyms": [
            "hairbrush"
        ],
        "definitions": [
            {
                "text": "To clean something with a brush.",
                "examples": [
                    "I brush my teeth every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed",
        "v3": "brushed",
        "group": "regular",
        "transcription": "brəʃ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "mess up"
        ],
        "legacy_id": "en_starter_work_078",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-14",
        "word": "brush",
        "emoji": "🪥",
        "form": "verb",
        "subtext": "brush your teeth",
        "synonyms": [
            "hairbrush"
        ],
        "definitions": [
            {
                "text": "To clean something with a brush.",
                "examples": [
                    "I brush my teeth every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "brushed",
        "v3": "brushed",
        "group": "regular",
        "transcription": "brəʃ",
        "auxiliary": "have",
        "v4": "brushing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "mess up"
        ],
        "legacy_id": "en_starter_work_131",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-15",
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
        "legacy_id": "en_starter_work_034",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-16",
        "word": "busy",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Having a lot of things to do.",
                "examples": [
                    "I am very busy this week."
                ]
            },
            {
                "text": "Having much to do; crowded.",
                "examples": [
                    "Monday morning is always very busy."
                ]
            }
        ],
        "comparative": "busier",
        "superlative": "the busiest",
        "transcription": "ˈbɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "free"
        ],
        "legacy_id": "en_starter_work_091",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-17",
        "word": "busy",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
        "definitions": [
            {
                "text": "Having a lot of things to do.",
                "examples": [
                    "I am very busy this week."
                ]
            },
            {
                "text": "Having much to do; crowded.",
                "examples": [
                    "Monday morning is always very busy."
                ]
            }
        ],
        "comparative": "busier",
        "superlative": "the busiest",
        "transcription": "ˈbɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "free"
        ],
        "legacy_id": "en_starter_work_025",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-18",
        "word": "career",
        "emoji": "📈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "careers",
        "subtext": "profession, start a career",
        "definitions": [
            {
                "text": "The series of jobs that a person has in a particular area of work.",
                "examples": [
                    "She wants to start a career in nursing."
                ]
            }
        ],
        "transcription": "kərɪr",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_017",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-19",
        "word": "carry",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and take something with you.",
                "examples": [
                    "I carry my laptop and notes to every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried",
        "group": "regular",
        "transcription": "ˈkɛri",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "drop"
        ],
        "legacy_id": "en_starter_work_061",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-20",
        "word": "carry",
        "emoji": "🎒",
        "subtext": "carry a bag / carry notes / carry out / carry on",
        "form": "verb",
        "definitions": [
            {
                "text": "To hold and take something with you.",
                "examples": [
                    "I carry my laptop and notes to every meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried",
        "v3": "carried",
        "group": "regular",
        "transcription": "ˈkɛri",
        "auxiliary": "have",
        "v4": "carrying",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "drop"
        ],
        "legacy_id": "en_starter_work_114",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-21",
        "word": "change",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "To become different; to make something different.",
                "examples": [
                    "She changed jobs twice in three years. Things change fast."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed",
        "group": "regular",
        "transcription": "ʧeɪnʤ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_work_055",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-22",
        "word": "change",
        "emoji": "🔄",
        "subtext": "change jobs / change your mind / change the plan / change something",
        "form": "verb",
        "definitions": [
            {
                "text": "To become different; to make something different.",
                "examples": [
                    "She changed jobs twice in three years. Things change fast."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "changed",
        "v3": "changed",
        "group": "regular",
        "transcription": "ʧeɪnʤ",
        "auxiliary": "have",
        "v4": "changing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ],
        "legacy_id": "en_starter_work_108",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-23",
        "word": "check",
        "definitions": [
            {
                "text": "To examine or verify something.",
                "examples": [
                    "I check my emails first thing every morning."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "checked",
        "emoji": "✅",
        "form": "verb",
        "group": "regular",
        "transcription": "ʧɛk",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_work_066",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-24",
        "word": "check",
        "definitions": [
            {
                "text": "To examine or verify something.",
                "examples": [
                    "I check my emails first thing every morning."
                ]
            }
        ],
        "subtext": "check emails / check messages / check a document / check the time",
        "classification": "regular",
        "aspect": "action",
        "v2": "checked",
        "v3": "checked",
        "emoji": "✅",
        "form": "verb",
        "group": "regular",
        "transcription": "ʧɛk",
        "auxiliary": "have",
        "v4": "checking",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_work_119",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-25",
        "word": "chef",
        "emoji": "👨‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chefs",
        "transcription": "ʃef",
        "definitions": [
            {
                "text": "A skilled and trained cook who works in a hotel or restaurant.",
                "examples": [
                    "The chef prepared a delicious meal."
                ]
            }
        ],
        "subtext": "head chef, pastry chef",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_023",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-26",
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
        "legacy_id": "en_starter_work_031",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-27",
        "word": "come back",
        "definitions": [
            {
                "text": "To return to a place.",
                "examples": [
                    "She comes back from lunch at two. He comes back home tired."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "come back",
        "emoji": "🔙",
        "form": "verb",
        "group": "irregular",
        "transcription": "kəm bæk",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_064",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-28",
        "word": "come back",
        "definitions": [
            {
                "text": "To return to a place.",
                "examples": [
                    "She comes back from lunch at two. He comes back home tired."
                ]
            }
        ],
        "subtext": "come back home / come back late / come back from a trip",
        "classification": "irregular",
        "aspect": "action",
        "v2": "came back",
        "v3": "come back",
        "emoji": "🔙",
        "form": "verb",
        "group": "regular",
        "transcription": "kəm bæk",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_117",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-29",
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
        "legacy_id": "en_starter_work_035",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-30",
        "word": "copy",
        "emoji": "📄",
        "form": "verb",
        "subtext": "copy a document / copy files",
        "definitions": [
            {
                "text": "To make something that is exactly like another thing.",
                "examples": [
                    "Can you copy this report for me?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "copied",
        "v3": "copied",
        "group": "regular",
        "transcription": "ˈkɑpi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "original"
        ],
        "legacy_id": "en_starter_work_086",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-31",
        "word": "copy",
        "emoji": "📄",
        "form": "verb",
        "subtext": "copy a document / copy files",
        "definitions": [
            {
                "text": "To make something that is exactly like another thing.",
                "examples": [
                    "Can you copy this report for me?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "copied",
        "v3": "copied",
        "group": "regular",
        "transcription": "ˈkɑpi",
        "auxiliary": "have",
        "v4": "copying",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "original"
        ],
        "legacy_id": "en_starter_work_139",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-32",
        "word": "dentist",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dentists",
        "definitions": [
            {
                "text": "A person whose job is to take care of people's teeth.",
                "examples": [
                    "I have an appointment with the dentist."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈdɛntɪst",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_012",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-33",
        "word": "do",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day.",
                    "She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done",
        "group": "irregular",
        "transcription": "du",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "dōn",
            "origin_meaning": "to do"
        },
        "antonyms": [
            "undo"
        ],
        "legacy_id": "en_starter_work_044",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-34",
        "word": "do",
        "emoji": "🛠️",
        "subtext": "do work / do the shopping / do exercise / do nothing",
        "form": "verb",
        "definitions": [
            {
                "text": "To perform an action or activity.",
                "examples": [
                    "I do my work every day.",
                    "She does the shopping."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "did",
        "v3": "done",
        "group": "regular",
        "transcription": "du",
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "do",
                    "do",
                    "does",
                    "do",
                    "do"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "dōn",
            "origin_meaning": "to do"
        },
        "antonyms": [
            "undo"
        ],
        "legacy_id": "en_starter_work_096",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-35",
        "word": "doctor",
        "etymology": "Doctor → Doctor (Latin) → Docere (to teach)",
        "numberPlural": "2 doctor",
        "answer": "two doctors",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "doctors",
        "transcription": "🇬🇧 ˈdɒktə | 🇺🇸 ˈdɑːktər",
        "subtext": "see a doctor, family doctor",
        "definitions": [
            {
                "text": "A person who helps people when they are sick.",
                "examples": [
                    "The doctor is at the hospital.",
                    "I need to see a doctor."
                ]
            },
            {
                "text": "This person usually works in a hospital or a clinic.",
                "examples": [
                    "Doctors wear white coats."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_002",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-36",
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
        "legacy_id": "en_starter_work_040",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-37",
        "word": "dress",
        "emoji": "👗",
        "subtext": "dress well / dress for work",
        "synonyms": [
            "get dressed"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To put clothes on yourself or someone else.",
                "examples": [
                    "I get dressed at seven.",
                    "She was dressed in black."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dressed",
        "v3": "dressed",
        "group": "regular",
        "transcription": "drɛs",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": "formal",
        "antonyms": [
            "undress"
        ],
        "legacy_id": "en_starter_work_084",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-38",
        "word": "dress",
        "emoji": "👗",
        "subtext": "dress well / dress for work",
        "synonyms": [
            "get dressed"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To put clothes on yourself or someone else.",
                "examples": [
                    "I get dressed at seven.",
                    "She was dressed in black."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dressed",
        "v3": "dressed",
        "group": "regular",
        "transcription": "drɛs",
        "auxiliary": "have",
        "v4": "dressing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": "formal",
        "antonyms": [
            "undress"
        ],
        "legacy_id": "en_starter_work_137",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-39",
        "word": "driver",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "drivers",
        "subtext": "bus driver, taxi driver, car driver",
        "definitions": [
            {
                "text": "A person who drives a vehicle as their job.",
                "examples": [
                    "The bus driver was friendly."
                ]
            }
        ],
        "transcription": "ˈdraɪvər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_005",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-40",
        "word": "end",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "end a class / at the end",
        "synonyms": [
            "finish",
            "stop"
        ],
        "definitions": [
            {
                "text": "To finish; to stop.",
                "examples": [
                    "The class ends at three o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ended",
        "v3": "ended",
        "group": "regular",
        "transcription": "ɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "begin"
        ],
        "legacy_id": "en_starter_work_077",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-41",
        "word": "end",
        "emoji": "🏁",
        "form": "verb",
        "subtext": "end a class / at the end",
        "synonyms": [
            "finish",
            "stop"
        ],
        "definitions": [
            {
                "text": "To finish; to stop.",
                "examples": [
                    "The class ends at three o'clock."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ended",
        "v3": "ended",
        "group": "regular",
        "transcription": "ɛnd",
        "auxiliary": "have",
        "v4": "ending",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "begin"
        ],
        "legacy_id": "en_starter_work_130",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-42",
        "word": "engineer",
        "emoji": "🧑‍💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "engineers",
        "transcription": "ˌendʒɪˈnɪə(r)",
        "definitions": [
            {
                "text": "A person whose job involves designing and building machines, systems, or structures.",
                "examples": [
                    "He is a software engineer."
                ]
            }
        ],
        "subtext": "civil engineer, electrical engineer",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_022",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-43",
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
        "legacy_id": "en_starter_work_038",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-44",
        "word": "farmer",
        "emoji": "👨‍🌾",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "farmers",
        "definitions": [
            {
                "text": "A person who owns or manages a farm.",
                "examples": [
                    "The farmer is milking the cows."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈfɑrmər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_008",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-45",
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
        "legacy_id": "en_starter_work_039",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-46",
        "word": "finish",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something.",
                "examples": [
                    "He finishes work at five. She finishes the report by noon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished",
        "group": "regular",
        "transcription": "ˈfɪnɪʃ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "end"
        ],
        "legacy_id": "en_starter_work_046",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-47",
        "word": "finish",
        "emoji": "🏁",
        "subtext": "finish work / finish a project / finish early / finish late",
        "form": "verb",
        "definitions": [
            {
                "text": "To complete something.",
                "examples": [
                    "He finishes work at five. She finishes the report by noon."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "finished",
        "v3": "finished",
        "group": "regular",
        "transcription": "ˈfɪnɪʃ",
        "synonyms": [
            "complete",
            "end"
        ],
        "auxiliary": "have",
        "v4": "finishing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "end"
        ],
        "legacy_id": "en_starter_work_098",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-48",
        "word": "firefighter",
        "emoji": "👩‍🚒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "firefighters",
        "definitions": [
            {
                "text": "A person whose job is to put out fires and rescue people.",
                "examples": [
                    "Firefighters wear heavy coats."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈfaɪrˌfaɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_014",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-49",
        "word": "follow",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "form": "verb",
        "definitions": [
            {
                "text": "To come after; to obey rules or instructions.",
                "examples": [
                    "Please follow the instructions carefully. He follows the news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed",
        "group": "regular",
        "transcription": "ˈfɑloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "lead"
        ],
        "legacy_id": "en_starter_work_073",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-50",
        "word": "follow",
        "emoji": "👣",
        "subtext": "follow instructions / follow someone / follow the news / follow up",
        "form": "verb",
        "definitions": [
            {
                "text": "To come after; to obey rules or instructions.",
                "examples": [
                    "Please follow the instructions carefully. He follows the news."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "followed",
        "v3": "followed",
        "group": "regular",
        "transcription": "ˈfɑloʊ",
        "auxiliary": "have",
        "v4": "following",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "lead"
        ],
        "legacy_id": "en_starter_work_126",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-51",
        "word": "full-time",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfʊlˌtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "part-time"
        ],
        "legacy_id": "en_starter_work_089",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-52",
        "word": "full-time",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working the complete number of hours in a working week.",
                "examples": [
                    "She has a full-time job in a bank."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfʊlˌtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "part-time"
        ],
        "legacy_id": "en_starter_work_023",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-53",
        "word": "get up",
        "definitions": [
            {
                "text": "To rise from bed after waking.",
                "examples": [
                    "He gets up at seven and makes coffee immediately."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "got up",
        "emoji": "🛌",
        "form": "verb",
        "group": "irregular",
        "transcription": "gɪt əp",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_062",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-54",
        "word": "get up",
        "definitions": [
            {
                "text": "To rise from bed after waking.",
                "examples": [
                    "He gets up at seven and makes coffee immediately."
                ]
            }
        ],
        "subtext": "get up early / get up late / get up quickly",
        "classification": "irregular",
        "aspect": "action",
        "v2": "got up",
        "v3": "got up",
        "emoji": "🛌",
        "form": "verb",
        "group": "regular",
        "transcription": "gɪt əp",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_115",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-55",
        "word": "go to bed",
        "definitions": [
            {
                "text": "To get into bed in order to sleep.",
                "examples": [
                    "They go to bed at eleven every night."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": "went to bed",
        "v3": "gone to bed",
        "emoji": "🛌",
        "form": "verb",
        "group": "irregular",
        "transcription": "goʊ tɪ bɛd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_065",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-56",
        "word": "go to bed",
        "definitions": [
            {
                "text": "To get into bed in order to sleep.",
                "examples": [
                    "They go to bed at eleven every night."
                ]
            }
        ],
        "subtext": "go to bed early / go to bed late / go to bed tired",
        "classification": "irregular",
        "aspect": "action",
        "v2": "went to bed",
        "v3": "gone to bed",
        "emoji": "🛌",
        "form": "verb",
        "group": "regular",
        "transcription": "goʊ tɪ bɛd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_118",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-57",
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
        "legacy_id": "en_starter_work_041",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-58",
        "word": "grow",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase in size or amount; to develop.",
                "examples": [
                    "The company grew by twenty percent last year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown",
        "group": "irregular",
        "transcription": "groʊ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "shrink"
        ],
        "legacy_id": "en_starter_work_074",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-59",
        "word": "grow",
        "emoji": "📈",
        "subtext": "grow a business / grow quickly / grow by / grow into",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase in size or amount; to develop.",
                "examples": [
                    "The company grew by twenty percent last year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "grew",
        "v3": "grown",
        "group": "regular",
        "transcription": "groʊ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "shrink"
        ],
        "legacy_id": "en_starter_work_127",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-60",
        "word": "have",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "transcription": "hæv",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job.",
                    "He has a car.",
                    "She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had",
        "group": "irregular",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "habjan",
            "origin_meaning": "to have"
        },
        "antonyms": [
            "need"
        ],
        "legacy_id": "en_starter_work_042",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-61",
        "word": "have",
        "emoji": "👜",
        "subtext": "have a job / have lunch / have a problem / have time",
        "form": "verb",
        "transcription": "hæv",
        "definitions": [
            {
                "text": "To possess something; to experience something.",
                "examples": [
                    "I have a job.",
                    "He has a car.",
                    "She has a headache."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "had",
        "v3": "had",
        "group": "regular",
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "have",
                    "have",
                    "has",
                    "have",
                    "have"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "habjan",
            "origin_meaning": "to have"
        },
        "antonyms": [
            "need"
        ],
        "legacy_id": "en_starter_work_094",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-62",
        "word": "have breakfast",
        "definitions": [
            {
                "text": "To eat the morning meal.",
                "examples": [
                    "She always has breakfast before leaving the house."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast",
        "synonyms": [
            "skip breakfast"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "had breakfast",
        "emoji": "🍳",
        "form": "verb",
        "group": "irregular",
        "transcription": "hæv ˈbrɛkfəst",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_063",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-63",
        "word": "have breakfast",
        "definitions": [
            {
                "text": "To eat the morning meal.",
                "examples": [
                    "She always has breakfast before leaving the house."
                ]
            }
        ],
        "subtext": "have breakfast at home / have a quick breakfast",
        "synonyms": [
            "skip breakfast"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "had breakfast",
        "v3": "had breakfast",
        "emoji": "🍳",
        "form": "verb",
        "group": "regular",
        "transcription": "hæv ˈbrɛkfəst",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_116",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-64",
        "word": "help",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "To make it easier for someone to do something.",
                "examples": [
                    "He helps new colleagues understand the systems."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped",
        "group": "regular",
        "transcription": "hɛlp",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "hinder"
        ],
        "legacy_id": "en_starter_work_047",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-65",
        "word": "help",
        "emoji": "🤝",
        "subtext": "help someone / help with a task / help out / ask for help",
        "form": "verb",
        "definitions": [
            {
                "text": "To make it easier for someone to do something.",
                "examples": [
                    "He helps new colleagues understand the systems."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "helped",
        "v3": "helped",
        "group": "regular",
        "transcription": "hɛlp",
        "synonyms": [
            "assist"
        ],
        "auxiliary": "have",
        "v4": "helping",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "hinder"
        ],
        "legacy_id": "en_starter_work_099",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-66",
        "word": "hold",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "hold my hand / hold on",
        "synonyms": [
            "grip"
        ],
        "definitions": [
            {
                "text": "To have or keep something in your hand or arms.",
                "examples": [
                    "Hold the baby carefully.",
                    "She is holding a book."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "held",
        "v3": "held",
        "group": "irregular",
        "transcription": "hoʊld",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "drop"
        ],
        "legacy_id": "en_starter_work_081",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-67",
        "word": "hold",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "hold my hand / hold on",
        "synonyms": [
            "grip"
        ],
        "definitions": [
            {
                "text": "To have or keep something in your hand or arms.",
                "examples": [
                    "Hold the baby carefully.",
                    "She is holding a book."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "held",
        "v3": "held",
        "group": "regular",
        "transcription": "hoʊld",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "drop"
        ],
        "legacy_id": "en_starter_work_134",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-68",
        "word": "job",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "jobs",
        "definitions": [
            {
                "text": "The work that a person does to earn money.",
                "examples": [
                    "She has a good job."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ʤɑb",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_004",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-69",
        "word": "keep",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue having or doing something.",
                "examples": [
                    "Keep the receipt.",
                    "She keeps her phone on all day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "kept",
        "group": "irregular",
        "transcription": "kip",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "give away"
        ],
        "legacy_id": "en_starter_work_048",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-70",
        "word": "keep",
        "emoji": "📦",
        "subtext": "keep going / keep quiet / keep a record / keep in touch",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue having or doing something.",
                "examples": [
                    "Keep the receipt.",
                    "She keeps her phone on all day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "kept",
        "v3": "kept",
        "group": "regular",
        "transcription": "kip",
        "synonyms": [
            "retain"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "give away"
        ],
        "legacy_id": "en_starter_work_100",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-71",
        "word": "lead",
        "emoji": "👤",
        "form": "verb",
        "subtext": "lead a team / follow the lead",
        "synonyms": [
            "guide",
            "direct"
        ],
        "definitions": [
            {
                "text": "To control a group of people, a country, or a situation.",
                "examples": [
                    "She leads a small team."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "led",
        "v3": "led",
        "group": "irregular",
        "transcription": "lɛd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "follow"
        ],
        "legacy_id": "en_starter_work_082",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-72",
        "word": "lead",
        "emoji": "👤",
        "form": "verb",
        "subtext": "lead a team / follow the lead",
        "synonyms": [
            "guide",
            "direct"
        ],
        "definitions": [
            {
                "text": "To control a group of people, a country, or a situation.",
                "examples": [
                    "She leads a small team."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "led",
        "v3": "led",
        "group": "regular",
        "transcription": "lɛd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "follow"
        ],
        "legacy_id": "en_starter_work_135",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-73",
        "word": "leave",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave the house at eight fifteen. She leaves work at six."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left",
        "group": "irregular",
        "transcription": "liv",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "arrive"
        ],
        "legacy_id": "en_starter_work_050",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-74",
        "word": "leave",
        "emoji": "🚪",
        "subtext": "leave home / leave work / leave early / leave late",
        "form": "verb",
        "definitions": [
            {
                "text": "To go away from a place.",
                "examples": [
                    "I leave the house at eight fifteen. She leaves work at six."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "left",
        "v3": "left",
        "group": "regular",
        "transcription": "liv",
        "synonyms": [
            "depart",
            "go away"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "arrive"
        ],
        "legacy_id": "en_starter_work_102",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-75",
        "word": "lie",
        "emoji": "🛌",
        "form": "verb",
        "subtext": "lie down / lie on the bed",
        "synonyms": [
            "recline"
        ],
        "definitions": [
            {
                "text": "To be in a horizontal position on a surface.",
                "examples": [
                    "I like to lie on the beach."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lay",
        "v3": "lain",
        "group": "irregular",
        "transcription": "laɪ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stand"
        ],
        "legacy_id": "en_starter_work_080",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-76",
        "word": "lie",
        "emoji": "🛌",
        "form": "verb",
        "subtext": "lie down / lie on the bed",
        "synonyms": [
            "recline"
        ],
        "definitions": [
            {
                "text": "To be in a horizontal position on a surface.",
                "examples": [
                    "I like to lie on the beach."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lay",
        "v3": "lain",
        "group": "regular",
        "transcription": "laɪ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stand"
        ],
        "legacy_id": "en_starter_work_133",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-77",
        "word": "make",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning.",
                    "She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made",
        "group": "irregular",
        "transcription": "meɪk",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "destroy"
        ],
        "legacy_id": "en_starter_work_043",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-78",
        "word": "make",
        "emoji": "🏗️",
        "subtext": "make coffee / make a decision / make a mistake / make money",
        "form": "verb",
        "definitions": [
            {
                "text": "To create or produce something; to cause something.",
                "examples": [
                    "I make coffee in the morning.",
                    "She makes a decision."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "made",
        "v3": "made",
        "group": "regular",
        "transcription": "meɪk",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "destroy"
        ],
        "legacy_id": "en_starter_work_095",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-79",
        "word": "manage",
        "definitions": [
            {
                "text": "To be in charge of people or a situation.",
                "examples": [
                    "She manages a team of eight people."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "emoji": "👤",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈmænɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "follow"
        ],
        "legacy_id": "en_starter_work_070",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-80",
        "word": "manage",
        "definitions": [
            {
                "text": "To be in charge of people or a situation.",
                "examples": [
                    "She manages a team of eight people."
                ]
            }
        ],
        "subtext": "manage a team / manage a project / manage time / manage stress",
        "classification": "regular",
        "aspect": "action",
        "v2": "managed",
        "v3": "managed",
        "emoji": "👤",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈmænɪʤ",
        "auxiliary": "have",
        "v4": "managing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "follow"
        ],
        "legacy_id": "en_starter_work_123",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-81",
        "word": "manager",
        "emoji": "🧑‍💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "managers",
        "subtext": "office manager, bank manager",
        "definitions": [
            {
                "text": "A person who is in charge of a team or business.",
                "examples": [
                    "My manager works very long hours."
                ]
            }
        ],
        "transcription": "ˈmænɪʤər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_006",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-82",
        "word": "meet",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To come together with someone, especially for a planned reason.",
                "examples": [
                    "We meet every Monday to discuss the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "irregular",
        "transcription": "mit",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_054",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-83",
        "word": "meet",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "To come together with someone, especially for a planned reason.",
                "examples": [
                    "We meet every Monday to discuss the week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "met",
        "v3": "met",
        "subtext": "meet a client / meet a colleague / meet for lunch / meet online",
        "group": "regular",
        "transcription": "mit",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_107",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-84",
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
        "legacy_id": "en_starter_work_032",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-85",
        "word": "note",
        "emoji": "📝",
        "form": "verb",
        "subtext": "note down / please note",
        "definitions": [
            {
                "text": "To write something down so that you will remember it.",
                "examples": [
                    "Please note the time of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "noted",
        "v3": "noted",
        "group": "regular",
        "transcription": "noʊt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "forget"
        ],
        "legacy_id": "en_starter_work_087",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-86",
        "word": "note",
        "emoji": "📝",
        "form": "verb",
        "subtext": "note down / please note",
        "definitions": [
            {
                "text": "To write something down so that you will remember it.",
                "examples": [
                    "Please note the time of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "noted",
        "v3": "noted",
        "group": "regular",
        "transcription": "noʊt",
        "auxiliary": "have",
        "v4": "noting",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "forget"
        ],
        "legacy_id": "en_starter_work_140",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-87",
        "word": "nurse",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nurses",
        "transcription": "n˃ːs",
        "definitions": [
            {
                "text": "A person whose job is to care for people who are ill or injured, especially in a hospital.",
                "examples": [
                    "The nurse gave him some medicine."
                ]
            }
        ],
        "subtext": "hospital nurse, school nurse",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_021",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-88",
        "word": "occupation",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "occupations",
        "transcription": "🇬🇧 ˌɒkjuˈpeɪʃn | 🇺🇸 ˌɑːkjuˈpeɪʃn",
        "definitions": [
            {
                "text": "A person's job or profession.",
                "examples": [
                    "Please state your occupation.",
                    "He is a teacher by occupation."
                ]
            }
        ],
        "subtext": "current occupation, professional occupation",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_024",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-89",
        "word": "order",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "To request something formally, especially food or goods.",
                "examples": [
                    "I always order lunch from the same place near the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "ordered",
        "group": "regular",
        "transcription": "ˈɔrdər",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "deliver"
        ],
        "legacy_id": "en_starter_work_072",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-90",
        "word": "order",
        "emoji": "📦",
        "subtext": "order food / order a drink / order online / order supplies",
        "form": "verb",
        "definitions": [
            {
                "text": "To request something formally, especially food or goods.",
                "examples": [
                    "I always order lunch from the same place near the office."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ordered",
        "v3": "ordered",
        "group": "regular",
        "transcription": "ˈɔrdər",
        "auxiliary": "have",
        "v4": "ordering",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "deliver"
        ],
        "legacy_id": "en_starter_work_125",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-91",
        "word": "organize",
        "emoji": "📂",
        "form": "verb",
        "transcription": "ˈɔːrɡənaɪz",
        "definitions": [
            {
                "text": "To arrange or plan something in an orderly way.",
                "examples": [
                    "She organizes weekly team meetings.",
                    "He organized his workspace carefully."
                ]
            }
        ],
        "v2": "organized",
        "v3": "organized",
        "v4": "organizing",
        "classification": "regular",
        "aspect": "action",
        "group": "regular",
        "subtext": "organize files / organize an event",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "disorganize"
        ],
        "legacy_id": "en_starter_work_142",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-92",
        "word": "part-time",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpɑrtˈtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "full-time"
        ],
        "legacy_id": "en_starter_work_090",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-93",
        "word": "part-time",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Working fewer hours than a standard working week.",
                "examples": [
                    "He works part-time on Saturdays."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpɑrtˈtaɪm",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "full-time"
        ],
        "legacy_id": "en_starter_work_024",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-94",
        "word": "pilot",
        "emoji": "🧑‍✈️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pilots",
        "definitions": [
            {
                "text": "A person who flies an aircraft.",
                "examples": [
                    "The pilot is in the cockpit."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈpaɪlət",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_009",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-95",
        "word": "plan",
        "emoji": "📅",
        "form": "verb",
        "subtext": "plan a trip / plan for the future",
        "synonyms": [
            "decide"
        ],
        "definitions": [
            {
                "text": "To decide what you are going to do.",
                "examples": [
                    "We are planning a trip."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "planned",
        "v3": "planned",
        "group": "regular",
        "transcription": "plæn",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "improvise"
        ],
        "legacy_id": "en_starter_work_079",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-96",
        "word": "plan",
        "emoji": "📅",
        "form": "verb",
        "subtext": "plan a trip / plan for the future",
        "synonyms": [
            "decide"
        ],
        "definitions": [
            {
                "text": "To decide what you are going to do.",
                "examples": [
                    "We are planning a trip."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "planned",
        "v3": "planned",
        "group": "regular",
        "transcription": "plæn",
        "auxiliary": "have",
        "v4": "planing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "improvise"
        ],
        "legacy_id": "en_starter_work_132",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-97",
        "word": "police officer",
        "emoji": "👮",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "police officers",
        "definitions": [
            {
                "text": "A member of the police force.",
                "examples": [
                    "The police officer is directing traffic."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "pəˈlis ˈɔfɪsər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_013",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-98",
        "word": "prepare",
        "emoji": "📝",
        "form": "verb",
        "transcription": "prɪˈpeə(r)",
        "definitions": [
            {
                "text": "To get someone or something ready for something that will happen in the future.",
                "examples": [
                    "I need to prepare for my exam.",
                    "She is preparing dinner."
                ]
            }
        ],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_088",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-99",
        "word": "prepare",
        "emoji": "📝",
        "form": "verb",
        "transcription": "prɪˈpeə(r)",
        "definitions": [
            {
                "text": "To get someone or something ready for something that will happen in the future.",
                "examples": [
                    "I need to prepare for my exam.",
                    "She is preparing dinner."
                ]
            }
        ],
        "v2": "prepared",
        "v3": "prepared",
        "classification": "regular",
        "group": "regular",
        "subtext": "prepare for something",
        "auxiliary": "have",
        "v4": "preparing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_141",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-100",
        "word": "present",
        "definitions": [
            {
                "text": "To show or explain something to a group.",
                "examples": [
                    "She presents the results every Friday afternoon."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "emoji": "📊",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈprɛzənt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "en_starter_work_068",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-101",
        "word": "present",
        "definitions": [
            {
                "text": "To show or explain something to a group.",
                "examples": [
                    "She presents the results every Friday afternoon."
                ]
            }
        ],
        "subtext": "present a report / present ideas / present to a client",
        "classification": "regular",
        "aspect": "action",
        "v2": "presented",
        "v3": "presented",
        "emoji": "📊",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈprɛzənt",
        "auxiliary": "have",
        "v4": "presenting",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "en_starter_work_121",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-102",
        "word": "profession",
        "emoji": "🎓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "professions",
        "subtext": "related to job titles professions",
        "synonyms": [
            "job",
            "career"
        ],
        "definitions": [
            {
                "text": "A type of job that needs special training or a high level of education.",
                "examples": [
                    "Teaching is a difficult profession."
                ]
            }
        ],
        "transcription": "prəˈfɛʃən",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_018",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-103",
        "word": "professor",
        "emoji": "👨‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "professors",
        "definitions": [
            {
                "text": "A teacher of the highest rank in a university department.",
                "examples": [
                    "He is a professor of history."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "prəˈfɛsər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_019",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-104",
        "word": "pull",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled",
        "group": "regular",
        "transcription": "pʊl",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "push"
        ],
        "legacy_id": "en_starter_work_059",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-105",
        "word": "pull",
        "emoji": "🚜",
        "subtext": "pull the door / pull something / pull up / pull away",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something toward you.",
                "examples": [
                    "Pull the door to open it."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pulled",
        "v3": "pulled",
        "group": "regular",
        "transcription": "pʊl",
        "auxiliary": "have",
        "v4": "pulling",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "push"
        ],
        "legacy_id": "en_starter_work_112",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-106",
        "word": "push",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed",
        "group": "regular",
        "transcription": "pʊʃ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "pull"
        ],
        "legacy_id": "en_starter_work_060",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-107",
        "word": "push",
        "emoji": "🛒",
        "subtext": "push the button / push a cart / push away / push through",
        "form": "verb",
        "definitions": [
            {
                "text": "To move something away from you.",
                "examples": [
                    "Push the button.",
                    "I push the shopping cart."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pushed",
        "v3": "pushed",
        "group": "regular",
        "transcription": "pʊʃ",
        "auxiliary": "have",
        "v4": "pushing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "pull"
        ],
        "legacy_id": "en_starter_work_113",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-108",
        "word": "ready",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Prepared for what you are going to do.",
                "examples": [
                    "Are you ready for work?"
                ]
            }
        ],
        "subtext": "get ready / almost ready",
        "synonyms": [
            "prepared"
        ],
        "comparative": "readier",
        "superlative": "the readiest",
        "transcription": "ˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "unready"
        ],
        "legacy_id": "en_starter_work_092",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-109",
        "word": "ready",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Prepared for what you are going to do.",
                "examples": [
                    "Are you ready for work?"
                ]
            }
        ],
        "subtext": "get ready / almost ready",
        "synonyms": [
            "prepared"
        ],
        "comparative": "readier",
        "superlative": "the readiest",
        "transcription": "ˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "unready"
        ],
        "legacy_id": "en_starter_work_026",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-110",
        "word": "reply",
        "definitions": [
            {
                "text": "To respond to a message or question.",
                "examples": [
                    "He always replies to emails the same day."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "replied",
        "emoji": "↩️",
        "form": "verb",
        "group": "regular",
        "transcription": "rɪˈplaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_work_067",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-111",
        "word": "reply",
        "definitions": [
            {
                "text": "To respond to a message or question.",
                "examples": [
                    "He always replies to emails the same day."
                ]
            }
        ],
        "subtext": "reply to an email / reply quickly / reply to a message",
        "classification": "regular",
        "aspect": "action",
        "v2": "replied",
        "v3": "replied",
        "emoji": "↩️",
        "form": "verb",
        "group": "regular",
        "transcription": "rɪˈplaɪ",
        "auxiliary": "have",
        "v4": "replying",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_work_120",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-112",
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
        "legacy_id": "en_starter_work_028",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-113",
        "word": "rest",
        "definitions": [
            {
                "text": "To stop working and relax to recover energy.",
                "examples": [
                    "He rests for an hour after lunch every day."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "rested",
        "emoji": "🛋️",
        "form": "verb",
        "group": "regular",
        "transcription": "rɛst",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "exercise"
        ],
        "legacy_id": "en_starter_work_071",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-114",
        "word": "rest",
        "definitions": [
            {
                "text": "To stop working and relax to recover energy.",
                "examples": [
                    "He rests for an hour after lunch every day."
                ]
            }
        ],
        "subtext": "rest at home / rest after work / need rest / get some rest",
        "classification": "regular",
        "aspect": "action",
        "v2": "rested",
        "v3": "rested",
        "emoji": "🛋️",
        "form": "verb",
        "group": "regular",
        "transcription": "rɛst",
        "auxiliary": "have",
        "v4": "resting",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "exercise"
        ],
        "legacy_id": "en_starter_work_124",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-115",
        "word": "send",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To transmit something to someone, especially electronically.",
                "examples": [
                    "She sends twenty emails before lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "irregular",
        "transcription": "sɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "receive"
        ],
        "legacy_id": "en_starter_work_058",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-116",
        "word": "send",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To transmit something to someone, especially electronically.",
                "examples": [
                    "She sends twenty emails before lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sent",
        "v3": "sent",
        "subtext": "send an email / send a message / send a report / send a file",
        "group": "regular",
        "transcription": "sɛnd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "receive"
        ],
        "legacy_id": "en_starter_work_111",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-117",
        "word": "set",
        "emoji": "⚙️",
        "subtext": "set an alarm / set the table / set a goal",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something in a particular place or position; to establish.",
                "examples": [
                    "I set my alarm for seven o'clock.",
                    "He set the plates on the table."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set",
        "v3": "set",
        "group": "irregular",
        "transcription": "sɛt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_083",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-118",
        "word": "set",
        "emoji": "⚙️",
        "subtext": "set an alarm / set the table / set a goal",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something in a particular place or position; to establish.",
                "examples": [
                    "I set my alarm for seven o'clock.",
                    "He set the plates on the table."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set",
        "v3": "set",
        "group": "regular",
        "transcription": "sɛt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "legacy_id": "en_starter_work_136",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-119",
        "word": "sit",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or take a seated position.",
                "examples": [
                    "He sits at his desk for eight hours a day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat",
        "group": "irregular",
        "transcription": "sɪt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sitjaną"
        },
        "antonyms": [
            "stand"
        ],
        "legacy_id": "en_starter_work_052",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-120",
        "word": "sit",
        "emoji": "🪑",
        "subtext": "sit down / sit at a desk / sit in a meeting / sit quietly",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or take a seated position.",
                "examples": [
                    "He sits at his desk for eight hours a day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sat",
        "v3": "sat",
        "group": "regular",
        "transcription": "sɪt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sitjaną"
        },
        "antonyms": [
            "stand"
        ],
        "legacy_id": "en_starter_work_105",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-121",
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
        "legacy_id": "en_starter_work_033",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-122",
        "word": "soldier",
        "emoji": "🪖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "soldiers",
        "definitions": [
            {
                "text": "A person who serves in an army.",
                "examples": [
                    "The soldier is in uniform."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈsoʊlʤər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_015",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-123",
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
        "legacy_id": "en_starter_work_037",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-124",
        "word": "stand",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or rise to an upright position.",
                "examples": [
                    "She stands when she presents to keep her energy up."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood",
        "group": "irregular",
        "transcription": "stænd",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "standaną"
        },
        "antonyms": [
            "sit"
        ],
        "legacy_id": "en_starter_work_053",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-125",
        "word": "stand",
        "emoji": "🧍",
        "subtext": "stand up / stand in a queue / stand by / stand out",
        "form": "verb",
        "definitions": [
            {
                "text": "To be in or rise to an upright position.",
                "examples": [
                    "She stands when she presents to keep her energy up."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "stood",
        "v3": "stood",
        "group": "regular",
        "transcription": "stænd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "standaną"
        },
        "antonyms": [
            "sit"
        ],
        "legacy_id": "en_starter_work_106",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-126",
        "word": "start",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin an activity or period.",
                "examples": [
                    "I start work at eight thirty. She starts a new role next month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started",
        "group": "regular",
        "transcription": "stɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ],
        "legacy_id": "en_starter_work_045",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-127",
        "word": "start",
        "emoji": "▶️",
        "subtext": "start work / start a meeting / start a new job",
        "form": "verb",
        "definitions": [
            {
                "text": "To begin an activity or period.",
                "examples": [
                    "I start work at eight thirty. She starts a new role next month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "started",
        "v3": "started",
        "group": "regular",
        "transcription": "stɑrt",
        "synonyms": [
            "begin"
        ],
        "auxiliary": "have",
        "v4": "starting",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ],
        "legacy_id": "en_starter_work_097",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-128",
        "word": "stop",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To end an activity or movement.",
                "examples": [
                    "She stopped taking the bus and cycles to work now."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped",
        "group": "regular",
        "transcription": "stɑp",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "start"
        ],
        "legacy_id": "en_starter_work_056",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-129",
        "word": "stop",
        "emoji": "🛑",
        "subtext": "stop doing / stop working / stop a habit / stop someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To end an activity or movement.",
                "examples": [
                    "She stopped taking the bus and cycles to work now."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stopped",
        "v3": "stopped",
        "group": "regular",
        "transcription": "stɑp",
        "auxiliary": "have",
        "v4": "stoping",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "start"
        ],
        "legacy_id": "en_starter_work_109",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-130",
        "word": "teacher",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "teachers",
        "subtext": "English teacher, school teacher",
        "definitions": [
            {
                "text": "A person who helps you learn new things.",
                "examples": [
                    "The teacher is in the classroom.",
                    "My teacher is very helpful."
                ]
            },
            {
                "text": "This person usually works in a school or a university.",
                "examples": [
                    "Teachers explain new topics."
                ]
            }
        ],
        "transcription": "ˈtiʧər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_003",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-131",
        "word": "undress",
        "emoji": "👕",
        "subtext": "undress quickly",
        "synonyms": [
            "get undressed"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To take clothes off yourself or someone else.",
                "examples": [
                    "He undressed and went to bed.",
                    "Get undressed and have a bath."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "undressed",
        "v3": "undressed",
        "group": "regular",
        "transcription": "ənˈdrɛs",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "dress"
        ],
        "legacy_id": "en_starter_work_085",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-132",
        "word": "undress",
        "emoji": "👕",
        "subtext": "undress quickly",
        "synonyms": [
            "get undressed"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To take clothes off yourself or someone else.",
                "examples": [
                    "He undressed and went to bed.",
                    "Get undressed and have a bath."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "undressed",
        "v3": "undressed",
        "group": "regular",
        "transcription": "ənˈdrɛs",
        "auxiliary": "have",
        "v4": "undressing",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "dress"
        ],
        "legacy_id": "en_starter_work_138",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-133",
        "word": "unready",
        "emoji": "⏳",
        "form": "adjective",
        "subtext": "unready for the change",
        "synonyms": [
            "not prepared"
        ],
        "definitions": [
            {
                "text": "Not prepared or ready for something.",
                "examples": [
                    "We were unready for such a big project."
                ]
            }
        ],
        "comparative": "more unready",
        "superlative": "the most unready",
        "transcription": "ʌnˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ready"
        ],
        "legacy_id": "en_starter_work_093",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-134",
        "word": "unready",
        "emoji": "⏳",
        "form": "adjective",
        "subtext": "unready for the change",
        "synonyms": [
            "not prepared"
        ],
        "definitions": [
            {
                "text": "Not prepared or ready for something.",
                "examples": [
                    "We were unready for such a big project."
                ]
            }
        ],
        "comparative": "more unready",
        "superlative": "the most unready",
        "transcription": "ʌnˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "ready"
        ],
        "legacy_id": "en_starter_work_027",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-135",
        "word": "wait",
        "emoji": "⏳",
        "subtext": "wait for someone / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "He waited twenty minutes for the meeting to start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited",
        "group": "regular",
        "transcription": "weɪt",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "act"
        ],
        "legacy_id": "en_starter_work_057",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-136",
        "word": "wait",
        "emoji": "⏳",
        "subtext": "wait for someone / wait for the bus / wait in a queue / wait a moment",
        "form": "verb",
        "definitions": [
            {
                "text": "To stay in a place until something happens.",
                "examples": [
                    "He waited twenty minutes for the meeting to start."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waited",
        "v3": "waited",
        "group": "regular",
        "transcription": "weɪt",
        "auxiliary": "have",
        "v4": "waiting",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "act"
        ],
        "legacy_id": "en_starter_work_110",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-137",
        "word": "waiter",
        "emoji": "🤵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "waiters",
        "definitions": [
            {
                "text": "A man whose job is to bring food and drinks to people at their tables in a restaurant.",
                "examples": [
                    "The waiter is bringing our coffee."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈweɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_010",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-138",
        "word": "waitress",
        "emoji": "👩‍🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "waitresses",
        "definitions": [
            {
                "text": "A woman whose job is to bring food and drinks to people at their tables in a restaurant.",
                "examples": [
                    "The waitress is very friendly."
                ]
            }
        ],
        "subtext": "related to job titles professions",
        "transcription": "ˈweɪtrəs",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_011",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-139",
        "word": "wake up",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "definitions": [
            {
                "text": "To stop sleeping; to become conscious after sleep.",
                "examples": [
                    "I wake up at six thirty every morning."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up",
        "group": "irregular",
        "transcription": "weɪk əp",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "sleep"
        ],
        "legacy_id": "en_starter_work_051",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-140",
        "word": "wake up",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "wake up early / wake up late / wake up tired",
        "definitions": [
            {
                "text": "To stop sleeping; to become conscious after sleep.",
                "examples": [
                    "I wake up at six thirty every morning."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "woke up",
        "v3": "woken up",
        "group": "regular",
        "transcription": "weɪk əp",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "sleep"
        ],
        "legacy_id": "en_starter_work_104",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-141",
        "word": "work",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "To do tasks as part of a job.",
                "examples": [
                    "She works from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked",
        "group": "regular",
        "transcription": "wərk",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "rest"
        ],
        "legacy_id": "en_starter_work_029",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-142",
        "word": "work",
        "emoji": "💼",
        "subtext": "work from home / work full-time / work hard / work late",
        "form": "verb",
        "definitions": [
            {
                "text": "To do tasks as part of a job.",
                "examples": [
                    "She works from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "worked",
        "v3": "worked",
        "group": "regular",
        "transcription": "wərk",
        "synonyms": [
            "do a job"
        ],
        "auxiliary": "have",
        "v4": "working",
        "lang": "en",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "antonyms": [
            "rest"
        ],
        "legacy_id": "en_starter_work_103",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    },
    {
        "id": "A1-WORK-143",
        "word": "writer",
        "emoji": "✍️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "writers",
        "subtext": "famous writer",
        "definitions": [
            {
                "text": "A person who writes books, stories, or articles.",
                "examples": [
                    "He is a famous writer."
                ]
            }
        ],
        "transcription": "ˈraɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "job_titles_professions",
        "sub_theme": null,
        "legacy_id": "en_starter_job_titles_professions_016",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
