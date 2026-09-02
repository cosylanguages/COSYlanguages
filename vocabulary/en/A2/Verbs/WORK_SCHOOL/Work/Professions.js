(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-VERB-WOR-01",
        "word": "accept",
        "emoji": "✅",
        "form": "verb",
        "transcription": "əkˈsept",
        "subtext": "agree to, take, receive",
        "synonyms": [
            "agree to",
            "take",
            "receive"
        ],
        "definitions": [
            {
                "text": "To agree to take or receive something.",
                "examples": [
                    "She accepted the job offer after negotiating the salary."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "accepted",
        "v3": "accepted",
        "auxiliary": "have",
        "v4": "accepting",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "acceptare",
            "origin_meaning": "take or receive willingly"
        },
        "legacy_id": "A2-WORK-01",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-02",
        "word": "achieve",
        "emoji": "🎯",
        "form": "verb",
        "transcription": "əˈtʃiːv",
        "subtext": "succeed, reach, accomplish",
        "synonyms": [
            "succeed",
            "reach",
            "accomplish"
        ],
        "definitions": [
            {
                "text": "To succeed in finishing something or reaching a goal, especially after a lot of work or effort.",
                "examples": [
                    "She worked hard to achieve her goals.",
                    "The team achieved a great victory."
                ]
            }
        ],
        "classification": "regular",
        "group": "regular",
        "aspect": "action",
        "v2": "achieved",
        "v3": "achieved",
        "auxiliary": "have",
        "v4": "achieving",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "achever",
            "origin_meaning": "to finish, to bring to a head"
        },
        "legacy_id": "A2-WORK-02",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-03",
        "word": "apply",
        "emoji": "📝",
        "form": "verb",
        "subtext": "apply for a job / apply to university",
        "definitions": [
            {
                "text": "To make a formal request for a job, a place at university, etc.",
                "examples": [
                    "I am going to apply for that position."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied",
        "v3": "applied",
        "transcription": "əˈplaɪ",
        "synonyms": [
            "request"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "applying",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "applicare",
            "origin_meaning": "to join, attach"
        },
        "legacy_id": "A2-WORK-05",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-04",
        "word": "apply for",
        "emoji": "📝",
        "form": "verb",
        "subtext": "apply for a job / apply for a position",
        "synonyms": [
            "apply online"
        ],
        "definitions": [
            {
                "text": "To make a formal written request for a job or position.",
                "examples": [
                    "She applied for three different management positions."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "applied for",
        "v3": "applied for",
        "transcription": "əˈplaɪ fɔːr",
        "group": "regular",
        "auxiliary": "have",
        "v4": "apply foring",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-06",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-05",
        "word": "assist",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "help, support, aid",
        "synonyms": [
            "help",
            "support",
            "aid"
        ],
        "definitions": [
            {
                "text": "To help.",
                "examples": [
                    "The clerk assisted the customer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "assisted",
        "v3": "assisted",
        "transcription": "əˈsɪst",
        "group": "regular",
        "auxiliary": "have",
        "v4": "assisting",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "assistere",
            "origin_meaning": "stand by"
        },
        "legacy_id": "A2-WORK-08",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-06",
        "word": "build",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "build a career / build a team / build experience / build trust",
        "definitions": [
            {
                "text": "To make something by putting parts together; to construct.",
                "examples": [
                    "They are building a new office block.",
                    "She built a strong reputation over ten years."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built",
        "v3": "built",
        "transcription": "bɪld",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-10",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-07",
        "word": "carry on",
        "emoji": "⏩",
        "form": "verb",
        "subtext": "carry on working / carry on regardless / carry on with something",
        "definitions": [
            {
                "text": "To continue doing something.",
                "examples": [
                    "He carried on working despite feeling ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "carried on",
        "v3": "carried on",
        "transcription": "🇬🇧 ˈkæri ɒn | 🇺🇸 ˈkæri ɑːn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "carry oning",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-11",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-08",
        "word": "challenge",
        "emoji": "🏔️",
        "form": "verb",
        "subtext": "challenge yourself / difficult challenge",
        "definitions": [
            {
                "text": "To test someone's ability or determination.",
                "examples": [
                    "The new job will challenge me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "challenged",
        "v3": "challenged",
        "transcription": "ˈtʃælɪndʒ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "challenging",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-13",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-09",
        "word": "collaborate",
        "emoji": "👥",
        "form": "verb",
        "subtext": "collaborate with / collaborate on a project",
        "synonyms": [
            "work collaboratively"
        ],
        "definitions": [
            {
                "text": "To work jointly with others on a shared project.",
                "examples": [
                    "They collaborated with a team in Berlin on the campaign."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collaborated",
        "v3": "collaborated",
        "transcription": "kəˈlæbəreɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "collaborating",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "collaborare",
            "origin_meaning": "work together"
        },
        "legacy_id": "A2-WORK-15",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-10",
        "word": "contract",
        "emoji": "📄",
        "form": "verb",
        "subtext": "contract with",
        "synonyms": [
            "be contracted to"
        ],
        "definitions": [
            {
                "text": "To make a legal agreement with someone.",
                "examples": [
                    "They contracted the company to build the bridge."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contracted",
        "v3": "contracted",
        "transcription": "🇬🇧 ˈkɒntrækt | 🇺🇸 ˈkɑːntrækt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contracting",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-18",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-11",
        "word": "delegate",
        "emoji": "📋",
        "form": "verb",
        "subtext": "delegate a task / delegate responsibility / delegate to a colleague",
        "definitions": [
            {
                "text": "To give a task or responsibility to someone else.",
                "examples": [
                    "A good manager knows how to delegate effectively."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "delegated",
        "v3": "delegated",
        "transcription": "ˈdɛlɪɡeɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "delegating",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-21",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-12",
        "word": "destroy",
        "emoji": "💣",
        "form": "verb",
        "subtext": "destroy a file / destroy completely",
        "synonyms": [
            "damage"
        ],
        "definitions": [
            {
                "text": "To damage something so badly that it cannot be used or does not exist any more.",
                "examples": [
                    "Be careful not to destroy important files."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "destroyed",
        "v3": "destroyed",
        "transcription": "dɪˈstrɔɪ",
        "group": "regular",
        "auxiliary": "have",
        "v4": "destroying",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-22",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-13",
        "word": "develop",
        "emoji": "💻",
        "form": "verb",
        "subtext": "develop a product / develop a skill",
        "synonyms": [
            "research and development"
        ],
        "definitions": [
            {
                "text": "To grow or change into something more advanced.",
                "examples": [
                    "The company is developing a new app.",
                    "She is developing her photography skills."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "developed",
        "v3": "developed",
        "transcription": "dɪˈvɛləp",
        "group": "regular",
        "auxiliary": "have",
        "v4": "developing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-23",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-14",
        "word": "dismiss",
        "emoji": "❌",
        "form": "verb",
        "subtext": "dismiss an employee",
        "synonyms": [
            "be dismissed",
            "dismissal proceedings"
        ],
        "definitions": [
            {
                "text": "To officially remove someone from their job.",
                "examples": [
                    "He was dismissed for repeated absence without explanation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dismissed",
        "v3": "dismissed",
        "transcription": "dɪsˈmɪs",
        "group": "regular",
        "auxiliary": "have",
        "v4": "dismissing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-24",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-15",
        "word": "dream",
        "emoji": "💭",
        "form": "verb",
        "subtext": "dream about / have a dream",
        "definitions": [
            {
                "text": "To experience pictures or ideas in your mind while sleeping.",
                "examples": [
                    "I dreamed about a holiday last night."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "dreamed / dreamt",
        "v3": "dreamed / dreamt",
        "transcription": "driːm",
        "synonyms": [
            "imagine"
        ],
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-25",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-16",
        "word": "evaluate",
        "emoji": "📊",
        "form": "verb",
        "subtext": "evaluate performance / evaluate results / evaluate a proposal",
        "definitions": [
            {
                "text": "To judge the quality or value of something.",
                "examples": [
                    "The manager evaluates each team member's performance annually."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "evaluated",
        "v3": "evaluated",
        "transcription": "ɪˈvæljueɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "evaluating",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-30",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-17",
        "word": "give up",
        "emoji": "🏳️",
        "form": "verb",
        "subtext": "give up a job / give up smoking / give up trying",
        "definitions": [
            {
                "text": "To stop trying to do something; to quit.",
                "examples": [
                    "She gave up her job to start her own company."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave up",
        "v3": "given up",
        "transcription": "ɡɪv ʌp",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-34",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-18",
        "word": "hire",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "hire someone / hire a team / hire for a role",
        "definitions": [
            {
                "text": "To formally take someone on as an employee.",
                "examples": [
                    "The company hired fifteen new people last quarter."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hired",
        "v3": "hired",
        "transcription": "ˈhaɪər",
        "synonyms": [
            "rent",
            "employ"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "hiring",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-36",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-19",
        "word": "improve",
        "emoji": "📈",
        "form": "verb",
        "subtext": "improve performance, improve health, room for improvement",
        "synonyms": [
            "improve performance",
            "improve health",
            "room for improvement"
        ],
        "definitions": [
            {
                "text": "To become or make something better.",
                "examples": [
                    "She improved her public speaking skills significantly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "improved",
        "v3": "improved",
        "transcription": "ɪmˈpruːv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "improving",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-37",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-20",
        "word": "interview",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "interview someone",
        "synonyms": [
            "talk to"
        ],
        "definitions": [
            {
                "text": "To ask someone questions in a formal meeting.",
                "examples": [
                    "They interviewed five candidates for the job."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interviewed",
        "v3": "interviewed",
        "transcription": "ˈɪntərvjuː",
        "group": "regular",
        "auxiliary": "have",
        "v4": "interviewing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-41",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-21",
        "word": "look for",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "look for a job / look for something / look for a solution",
        "definitions": [
            {
                "text": "To try to find something.",
                "examples": [
                    "He is looking for a new job with better work-life balance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "looked for",
        "v3": "looked for",
        "transcription": "lʊk fɔːr",
        "group": "regular",
        "auxiliary": "have",
        "v4": "look foring",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-43",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-22",
        "word": "negotiate",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "negotiate a salary / negotiate terms / negotiate a deal",
        "definitions": [
            {
                "text": "To discuss something to reach an agreement.",
                "examples": [
                    "She negotiated a higher salary before signing the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negotiated",
        "v3": "negotiated",
        "transcription": "nəˈɡoʊʃieɪt",
        "synonyms": [
            "discuss"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "negotiating",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-46",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-23",
        "word": "obtain",
        "emoji": "📥",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something, especially by making an effort.",
                "examples": [
                    "He obtained a degree from Oxford.",
                    "You need to obtain permission first."
                ]
            }
        ],
        "subtext": "get, receive",
        "synonyms": [
            "get",
            "receive"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obtained",
        "v3": "obtained",
        "transcription": "əbˈteɪn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "obtaining",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-47",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-24",
        "word": "operate",
        "emoji": "⚙️",
        "form": "verb",
        "definitions": [
            {
                "text": "To work or cause a machine to work.",
                "examples": [
                    "Do you know how to operate this machine?",
                    "The company operates in three countries."
                ]
            }
        ],
        "subtext": "run, work",
        "synonyms": [
            "run",
            "work"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "operated",
        "v3": "operated",
        "transcription": "🇬🇧 ˈɒpəreɪt | 🇺🇸 ˈɑːpəreɪt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "operating",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-48",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-25",
        "word": "organize",
        "emoji": "📂",
        "form": "verb",
        "subtext": "organize a meeting / organize a trip",
        "synonyms": [
            "plan",
            "arrange"
        ],
        "definitions": [
            {
                "text": "To make arrangements for something to happen.",
                "examples": [
                    "She is organizing the office party.",
                    "I need to organize my desk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "organized",
        "v3": "organized",
        "transcription": "ˈɔːrɡənaɪz",
        "group": "regular",
        "auxiliary": "have",
        "v4": "organizing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-50",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-26",
        "word": "produce",
        "emoji": "🏭",
        "form": "verb",
        "subtext": "produce energy, produce goods / produce results",
        "definitions": [
            {
                "text": "To make or create something.",
                "examples": [
                    "The factory produces cars."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "produced",
        "v3": "produced",
        "transcription": "prəˈdjuːs",
        "synonyms": [
            "make",
            "create"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "producing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-52",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-27",
        "word": "promote",
        "emoji": "📈",
        "form": "verb",
        "subtext": "promote someone / promote from within",
        "synonyms": [
            "advance"
        ],
        "definitions": [
            {
                "text": "To move an employee to a higher position.",
                "examples": [
                    "He was promoted to senior manager after two years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "promoted",
        "v3": "promoted",
        "transcription": "prəˈmoʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "promoting",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-55",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-28",
        "word": "provide",
        "emoji": "🤲",
        "form": "verb",
        "subtext": "provide support / provide information / provide a service",
        "definitions": [
            {
                "text": "To give or supply something to someone.",
                "examples": [
                    "The company provides all employees with a laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "provided",
        "v3": "provided",
        "transcription": "prəˈvaɪd",
        "synonyms": [
            "give",
            "supply"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "providing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-57",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-29",
        "word": "put off",
        "emoji": "⏳",
        "form": "verb",
        "subtext": "put off a meeting / put off a decision / stop putting things off",
        "definitions": [
            {
                "text": "To postpone something to a later time.",
                "examples": [
                    "He keeps putting off the conversation about his salary."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put off",
        "v3": "put off",
        "transcription": "🇬🇧 pʊt ɒf | 🇺🇸 pʊt ɑːf",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-58",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-30",
        "word": "reduce",
        "emoji": "📉",
        "form": "verb",
        "subtext": "reduce costs / reduce stress / significantly reduce",
        "definitions": [
            {
                "text": "To make something smaller in size or amount.",
                "examples": [
                    "They reduced the team from twelve to eight members."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reduced",
        "v3": "reduced",
        "transcription": "rɪˈdjuːs",
        "synonyms": [
            "decrease",
            "cut"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "reducing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-59",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-31",
        "word": "refuse",
        "emoji": "❌",
        "form": "verb",
        "subtext": "refuse an offer / refuse to do / refuse permission",
        "definitions": [
            {
                "text": "To say no to something; to decline.",
                "examples": [
                    "He refused to sign the contract without legal advice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "refused",
        "v3": "refused",
        "transcription": "rɪˈfjuːz",
        "synonyms": [
            "say no",
            "reject"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "refusing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-60",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-32",
        "word": "replace",
        "emoji": "🔄",
        "form": "verb",
        "subtext": "replace something / replace someone",
        "synonyms": [
            "change"
        ],
        "definitions": [
            {
                "text": "To take the place of someone or something.",
                "examples": [
                    "The new software will replace the old system next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "replaced",
        "v3": "replaced",
        "transcription": "rɪˈpleɪs",
        "group": "regular",
        "auxiliary": "have",
        "v4": "replacing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-61",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-33",
        "word": "resign",
        "emoji": "🚪",
        "form": "verb",
        "subtext": "resign from a job / resign formally / hand in your resignation",
        "definitions": [
            {
                "text": "To formally leave a job by choice.",
                "examples": [
                    "She resigned after disagreeing with the new strategy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resigned",
        "v3": "resigned",
        "transcription": "rɪˈzaɪn",
        "synonyms": [
            "quit",
            "leave"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "resigning",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-62",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-34",
        "word": "retire",
        "emoji": "👴",
        "form": "verb",
        "subtext": "retire from work, early retirement",
        "definitions": [
            {
                "text": "To stop working because you have reached a certain age.",
                "examples": [
                    "My father will retire next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "retired",
        "v3": "retired",
        "transcription": "rɪˈtaɪər",
        "synonyms": [
            "stop working"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "retiring",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-64",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-35",
        "word": "schedule",
        "emoji": "📅",
        "form": "verb",
        "subtext": "schedule a meeting / schedule time / schedule a call",
        "definitions": [
            {
                "text": "To arrange a time for something to happen.",
                "examples": [
                    "Can we schedule a meeting for Thursday afternoon?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "scheduled",
        "v3": "scheduled",
        "transcription": "ˈskɛdʒuːl",
        "group": "regular",
        "auxiliary": "have",
        "v4": "scheduling",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-65",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-36",
        "word": "set up",
        "emoji": "🏗️",
        "form": "verb",
        "subtext": "set up a business / set up a meeting / set up an account",
        "definitions": [
            {
                "text": "To start or establish something.",
                "examples": [
                    "He set up his own consulting business at the age of thirty."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set up",
        "v3": "set up",
        "transcription": "sɛt ʌp",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-66",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-37",
        "word": "solve",
        "emoji": "🧩",
        "form": "verb",
        "subtext": "solve a problem / solve a riddle",
        "synonyms": [
            "fix",
            "resolve"
        ],
        "definitions": [
            {
                "text": "To find an answer to a problem.",
                "examples": [
                    "He solved the mystery.",
                    "We need to solve this problem quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "solved",
        "v3": "solved",
        "transcription": "🇬🇧 sɒlv | 🇺🇸 sɑːlv",
        "group": "regular",
        "auxiliary": "have",
        "v4": "solving",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-67",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-38",
        "word": "sort out",
        "emoji": "🔧",
        "form": "verb",
        "subtext": "sort out a problem / sort out a situation",
        "synonyms": [
            "sort something out"
        ],
        "definitions": [
            {
                "text": "To resolve a problem or deal with something.",
                "examples": [
                    "Can you sort out the problem with the contract?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sorted out",
        "v3": "sorted out",
        "transcription": "sɔːrt aʊt",
        "group": "regular",
        "auxiliary": "have",
        "v4": "sort outing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-68",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-39",
        "word": "succeed",
        "emoji": "🏆",
        "form": "verb",
        "subtext": "succeed in doing / succeed at something / succeed against the odds",
        "definitions": [
            {
                "text": "To achieve what you set out to do.",
                "examples": [
                    "He succeeded in closing the deal after three months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "succeeded",
        "v3": "succeeded",
        "transcription": "səkˈsiːd",
        "synonyms": [
            "win",
            "do well"
        ],
        "group": "regular",
        "auxiliary": "have",
        "v4": "succeeding",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-69",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-40",
        "word": "take on",
        "emoji": "💪",
        "form": "verb",
        "subtext": "take on responsibility / take on extra work / take on a project",
        "definitions": [
            {
                "text": "To accept a responsibility or piece of work.",
                "examples": [
                    "He took on a second job to pay off the mortgage faster."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took on",
        "v3": "taken on",
        "transcription": "🇬🇧 teɪk ɒn | 🇺🇸 teɪk ɑːn",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-71",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    },
    {
        "id": "A2-VERB-WOR-41",
        "word": "turn down",
        "emoji": "👎",
        "form": "verb",
        "subtext": "turn down an offer / turn down a job / turn down a request",
        "definitions": [
            {
                "text": "To refuse an offer or request.",
                "examples": [
                    "She turned down the job because the salary was too low."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned down",
        "v3": "turned down",
        "transcription": "tɜːrn daʊn",
        "group": "regular",
        "auxiliary": "have",
        "v4": "turn downing",
        "lang": "en",
        "level": "elementary",
        "theme": "jobs",
        "sub_theme": null,
        "legacy_id": "A2-WORK-73",
        "level_code": "A2",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Verbs",
        "sub_subcategory": "Professions"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
