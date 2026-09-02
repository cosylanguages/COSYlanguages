(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-VERB-WOR-026",
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
        "legacy_id": "A1-WORK-03",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-028",
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
        "legacy_id": "A1-WORK-05",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-030",
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
        "legacy_id": "A1-WORK-07",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-032",
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
        "legacy_id": "A1-WORK-09",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-034",
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
        "legacy_id": "A1-WORK-13",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-036",
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
        "legacy_id": "A1-WORK-19",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-038",
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
        "legacy_id": "A1-WORK-21",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-040",
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
        "legacy_id": "A1-WORK-23",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-042",
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
        "legacy_id": "A1-WORK-27",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-044",
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
        "legacy_id": "A1-WORK-30",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-046",
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
        "legacy_id": "A1-WORK-33",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-048",
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
        "legacy_id": "A1-WORK-37",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-050",
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
        "legacy_id": "A1-WORK-40",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-052",
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
        "legacy_id": "A1-WORK-46",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-054",
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
        "legacy_id": "A1-WORK-49",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-056",
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
        "legacy_id": "A1-WORK-53",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-058",
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
        "legacy_id": "A1-WORK-55",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-060",
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
        "legacy_id": "A1-WORK-58",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-062",
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
        "legacy_id": "A1-WORK-60",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-064",
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
        "legacy_id": "A1-WORK-62",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-066",
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
        "legacy_id": "A1-WORK-64",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-068",
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
        "legacy_id": "A1-WORK-66",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-070",
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
        "legacy_id": "A1-WORK-69",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-072",
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
        "legacy_id": "A1-WORK-71",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-074",
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
        "legacy_id": "A1-WORK-73",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-076",
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
        "legacy_id": "A1-WORK-75",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-078",
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
        "legacy_id": "A1-WORK-77",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-080",
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
        "legacy_id": "A1-WORK-79",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-082",
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
        "legacy_id": "A1-WORK-82",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-084",
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
        "legacy_id": "A1-WORK-85",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-086",
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
        "legacy_id": "A1-WORK-89",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-088",
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
        "legacy_id": "A1-WORK-91",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-089",
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
        "legacy_id": "A1-WORK-95",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-091",
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
        "legacy_id": "A1-WORK-98",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-093",
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
        "legacy_id": "A1-WORK-100",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-095",
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
        "legacy_id": "A1-WORK-104",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-097",
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
        "legacy_id": "A1-WORK-106",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-099",
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
        "legacy_id": "A1-WORK-110",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-101",
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
        "legacy_id": "A1-WORK-113",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-103",
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
        "legacy_id": "A1-WORK-115",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-105",
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
        "legacy_id": "A1-WORK-117",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-107",
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
        "legacy_id": "A1-WORK-119",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-109",
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
        "legacy_id": "A1-WORK-124",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-111",
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
        "legacy_id": "A1-WORK-126",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-113",
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
        "legacy_id": "A1-WORK-128",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-115",
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
        "legacy_id": "A1-WORK-131",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-117",
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
        "legacy_id": "A1-WORK-135",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-119",
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
        "legacy_id": "A1-WORK-139",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-VERB-WOR-121",
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
        "legacy_id": "A1-WORK-141",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Jobs_Careers"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
