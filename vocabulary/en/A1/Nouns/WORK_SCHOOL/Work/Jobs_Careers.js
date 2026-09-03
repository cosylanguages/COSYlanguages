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
    },
    {
        "id": "A1-NOUN-WOR-065",
        "word": "artist",
        "emoji": "\ud83c\udfa8",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0rt\u0259st",
        "definitions": [
            {
                "text": "A person who creates paintings, drawings, or sculpture.",
                "examples": [
                    "The artist painted a beautiful portrait.",
                    "Exhibits featured local artists."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-066",
        "word": "project",
        "emoji": "\ud83d\udccb",
        "form": "noun",
        "transcription": "\u02c8pr\u0251\u02d0\u02a4\u025bkt",
        "definitions": [
            {
                "text": "An individual or collaborative enterprise carefully planned.",
                "examples": [
                    "Our team finished the project on time.",
                    "She is working on a new science project."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-086",
        "word": "applicant",
        "emoji": "\ud83d\udc64",
        "form": "noun",
        "transcription": "\u02c8\u00e6pl\u0259k\u0259nt",
        "definitions": [
            {
                "text": "A person who applies for a job.",
                "examples": [
                    "Five applicants applied for the position.",
                    "HR reviewed job applicant resumes."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-087",
        "word": "application",
        "emoji": "\ud83d\udccb",
        "form": "noun",
        "transcription": "\u02cc\u00e6pl\u0259\u02c8ke\u026a\u0283\u0259n",
        "definitions": [
            {
                "text": "A formal request for a job or place.",
                "examples": [
                    "Submit your job application online.",
                    "Fill out the grant application form."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-088",
        "word": "appointment",
        "emoji": "\ud83d\udcc5",
        "form": "noun",
        "transcription": "\u0259\u02c8p\u0254\u026antm\u0259nt",
        "definitions": [
            {
                "text": "An arrangement to meet at a particular time.",
                "examples": [
                    "Book a dentist appointment.",
                    "She scheduled a doctor appointment."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-089",
        "word": "assistant",
        "emoji": "\ud83d\udc64",
        "form": "noun",
        "transcription": "\u0259\u02c8s\u026ast\u0259nt",
        "definitions": [
            {
                "text": "A person who helps in a particular work.",
                "examples": [
                    "The sales assistant was helpful.",
                    "He works as an executive assistant."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-090",
        "word": "candidate",
        "emoji": "\ud83e\uddd1\u200d\ud83d\udcbc",
        "form": "noun",
        "transcription": "\u02c8k\u00e6nd\u0259d\u0259t",
        "definitions": [
            {
                "text": "A person who applies for or is nominated for a position.",
                "examples": [
                    "Interviews were held for candidate selection.",
                    "She was a strong candidate."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-091",
        "word": "contract",
        "emoji": "\ud83d\udcc4",
        "form": "noun",
        "transcription": "\u02c8k\u0251\u02d0ntr\u00e6kt",
        "definitions": [
            {
                "text": "A written or spoken agreement.",
                "examples": [
                    "Sign the employment contract.",
                    "The contract covers two years."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-092",
        "word": "employer",
        "emoji": "\ud83c\udfe2",
        "form": "noun",
        "transcription": "\u026am\u02c8pl\u0254\u026a\u0259r",
        "definitions": [
            {
                "text": "A person or organization that employs people.",
                "examples": [
                    "Fair employers value staff.",
                    "The employer provides health benefits."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-093",
        "word": "employment",
        "emoji": "\ud83d\udcbc",
        "form": "noun",
        "transcription": "\u026am\u02c8pl\u0254\u026am\u0259nt",
        "definitions": [
            {
                "text": "The state of having paid work.",
                "examples": [
                    "Full-time employment provides stability.",
                    "Find seasonal employment in summer."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-094",
        "word": "interview",
        "emoji": "\ud83e\udd1d",
        "form": "noun",
        "transcription": "\u02c8\u026ant\u0259r\u02ccvju\u02d0",
        "definitions": [
            {
                "text": "A formal meeting in which an applicant is questioned.",
                "examples": [
                    "He prepared for his job interview.",
                    "She conducted three interviews today."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-095",
        "word": "labor",
        "emoji": "\ud83d\udd28",
        "form": "noun",
        "transcription": "\u02c8le\u026ab\u0259r",
        "definitions": [
            {
                "text": "Work, especially hard physical work.",
                "examples": [
                    "Manual labor builds strength.",
                    "Construction labor requires skill."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-096",
        "word": "promotion",
        "emoji": "\ud83d\udcc8",
        "form": "noun",
        "transcription": "pr\u0259\u02c8mo\u028a\u0283\u0259n",
        "definitions": [
            {
                "text": "Advance to a higher position.",
                "examples": [
                    "He earned a promotion at work.",
                    "Celebrate her career promotion."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-097",
        "word": "salary",
        "emoji": "\ud83d\udcb0",
        "form": "noun",
        "transcription": "\u02c8s\u00e6l\u0259ri",
        "definitions": [
            {
                "text": "A fixed regular payment made by an employer.",
                "examples": [
                    "Her monthly salary covers rent.",
                    "They negotiated starting salary."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-098",
        "word": "shift",
        "emoji": "\u23f1\ufe0f",
        "form": "noun",
        "transcription": "\u0283\u026aft",
        "definitions": [
            {
                "text": "A period of work time.",
                "examples": [
                    "Nurses work twelve-hour shifts.",
                    "He prefers the morning shift."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-099",
        "word": "wages",
        "emoji": "\ud83d\udcb5",
        "form": "noun",
        "transcription": "\u02c8we\u026a\u02a4\u0259z",
        "definitions": [
            {
                "text": "A fixed regular payment earned for work.",
                "examples": [
                    "Weekly wages are paid on Friday.",
                    "Fair wages motivate workers."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-100",
        "word": "worker",
        "emoji": "\ud83d\udc77",
        "form": "noun",
        "transcription": "\u02c8w\u025c\u02d0rk\u0259r",
        "definitions": [
            {
                "text": "A person who works, especially one who does physical work.",
                "examples": [
                    "Factory workers manufacture cars.",
                    "Hard workers achieve results."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-128",
        "word": "accountant",
        "emoji": "\ud83d\udcca",
        "form": "noun",
        "transcription": "\u0259\u02c8ka\u028ant\u0259nt",
        "definitions": [
            {
                "text": "A person who keeps or inspects financial accounts.",
                "examples": [
                    "The accountant audited the company accounts.",
                    "Consult an accountant for tax advice."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-129",
        "word": "architect",
        "emoji": "\ud83c\udfdb\ufe0f",
        "form": "noun",
        "transcription": "\u02c8\u0251\u02d0rk\u0259\u02cct\u025bkt",
        "definitions": [
            {
                "text": "A person who designs buildings.",
                "examples": [
                    "The architect drew blueprints for the library.",
                    "She works as an interior architect."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-130",
        "word": "cashier",
        "emoji": "\ud83d\udcb5",
        "form": "noun",
        "transcription": "k\u00e6\u02c8\u0283\u026ar",
        "definitions": [
            {
                "text": "A person handling payments in a shop or bank.",
                "examples": [
                    "The supermarket cashier scanned our groceries.",
                    "Pay cash directly to the cashier."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-131",
        "word": "counselor",
        "emoji": "\ud83e\udd1d",
        "form": "noun",
        "transcription": "\u02c8ka\u028ans\u0259l\u0259r",
        "definitions": [
            {
                "text": "A person trained to give guidance or advice.",
                "examples": [
                    "Talk to the school counselor about university.",
                    "A career counselor helps job seekers."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-132",
        "word": "designer",
        "emoji": "\ud83c\udfa8",
        "form": "noun",
        "transcription": "d\u026a\u02c8za\u026an\u0259r",
        "definitions": [
            {
                "text": "A person who plans the look or markings of something.",
                "examples": [
                    "A graphic designer made the logo.",
                    "She works as a fashion designer."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-133",
        "word": "electrician",
        "emoji": "\u26a1",
        "form": "noun",
        "transcription": "\u026a\u02ccl\u025bk\u02c8tr\u026a\u0283\u0259n",
        "definitions": [
            {
                "text": "A person who installs and repairs electrical wiring.",
                "examples": [
                    "Call an electrician to fix the light switch.",
                    "The electrician checked office power."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-134",
        "word": "executive",
        "emoji": "\ud83d\udcbc",
        "form": "noun",
        "transcription": "\u026a\u0261\u02c8z\u025bkj\u0259t\u026av",
        "definitions": [
            {
                "text": "A person with senior managerial responsibility.",
                "examples": [
                    "Company executives held a strategy meeting.",
                    "She was appointed chief executive officer."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-135",
        "word": "flight attendant",
        "emoji": "\u2708\ufe0f",
        "form": "noun",
        "transcription": "fla\u026at \u0259\u02c8t\u025bnd\u0259nt",
        "definitions": [
            {
                "text": "A steward or stewardess on an aircraft.",
                "examples": [
                    "The flight attendant served drinks.",
                    "Listen to flight attendant safety instructions."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-136",
        "word": "gardener",
        "emoji": "\ud83e\uddd1\u200d\ud83c\udf3e",
        "form": "noun",
        "transcription": "\u02c8\u0261\u0251\u02d0rdn\u0259r",
        "definitions": [
            {
                "text": "A person who tends and cultivates a garden.",
                "examples": [
                    "Our gardener trims lawn grass.",
                    "The community gardener planted flowers."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-137",
        "word": "mechanic",
        "emoji": "\ud83d\udd27",
        "form": "noun",
        "transcription": "m\u0259\u02c8k\u00e6n\u026ak",
        "definitions": [
            {
                "text": "A person who repairs and maintains machinery or cars.",
                "examples": [
                    "The auto mechanic repaired our brakes.",
                    "Take your car to a trusted mechanic."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-138",
        "word": "pharmacist",
        "emoji": "\ud83d\udc8a",
        "form": "noun",
        "transcription": "\u02c8f\u0251\u02d0rm\u0259s\u0259st",
        "definitions": [
            {
                "text": "A person qualified to prepare and dispense drugs.",
                "examples": [
                    "The pharmacist dispensed our prescription.",
                    "Ask the pharmacist about medicine usage."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-139",
        "word": "plumber",
        "emoji": "\ud83d\udd27",
        "form": "noun",
        "transcription": "\u02c8pl\u028cm\u0259r",
        "definitions": [
            {
                "text": "A person who installs and repairs water pipes.",
                "examples": [
                    "Call a plumber to fix the leaking pipe.",
                    "The plumber unblocked the kitchen sink."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-140",
        "word": "receptionist",
        "emoji": "\ud83d\udece\ufe0f",
        "form": "noun",
        "transcription": "r\u026a\u02c8s\u025bp\u0283\u0259n\u0259st",
        "definitions": [
            {
                "text": "A person who greets visitors at a hotel or office.",
                "examples": [
                    "The hotel receptionist handed us room keys.",
                    "Speak to the office receptionist."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-141",
        "word": "salesperson",
        "emoji": "\ud83d\udecd\ufe0f",
        "form": "noun",
        "transcription": "\u02c8se\u026alz\u02ccp\u025c\u02d0rs\u0259n",
        "definitions": [
            {
                "text": "A person whose job is selling goods.",
                "examples": [
                    "The computer salesperson explained features.",
                    "A friendly salesperson assisted us."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-142",
        "word": "surgeon",
        "emoji": "\ud83d\udc68\u200d\u2695\ufe0f",
        "form": "noun",
        "transcription": "\u02c8s\u025c\u02d0r\u02a4\u0259n",
        "definitions": [
            {
                "text": "A medical practitioner qualified to practice surgery.",
                "examples": [
                    "The heart surgeon performed a successful operation.",
                    "Surgeons work long hours in operating rooms."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-143",
        "word": "translator",
        "emoji": "\ud83c\udf10",
        "form": "noun",
        "transcription": "tr\u00e6ns\u02c8le\u026at\u0259r",
        "definitions": [
            {
                "text": "A person who translates written or spoken text.",
                "examples": [
                    "An official translator translated the contract.",
                    "She works as an online translator."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-144",
        "word": "veterinarian",
        "emoji": "\ud83d\udc3e",
        "form": "noun",
        "transcription": "\u02ccv\u025bt\u0259r\u0259\u02c8n\u025bri\u0259n",
        "definitions": [
            {
                "text": "A person qualified to treat diseased or injured animals.",
                "examples": [
                    "Take sick pets to the veterinarian.",
                    "The veterinarian examined our dog."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-145",
        "word": "administrator",
        "emoji": "\ud83d\udda5\ufe0f",
        "form": "noun",
        "transcription": "\u0259d\u02c8m\u026an\u0259\u02ccstre\u026at\u0259r",
        "definitions": [
            {
                "text": "A person responsible for running a business or organization.",
                "examples": [
                    "The school administrator processed student enrollment.",
                    "Contact the system administrator for account issues."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-146",
        "word": "analyst",
        "emoji": "\ud83d\udcca",
        "form": "noun",
        "transcription": "\u02c8\u00e6n\u0259l\u0259st",
        "definitions": [
            {
                "text": "A person who analyzes data or systems.",
                "examples": [
                    "A financial analyst prepared quarterly reports.",
                    "She works as a data analyst."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-147",
        "word": "consultant",
        "emoji": "\ud83d\udcbc",
        "form": "noun",
        "transcription": "k\u0259n\u02c8s\u028clt\u0259nt",
        "definitions": [
            {
                "text": "A professional who provides expert advice.",
                "examples": [
                    "Hire a management consultant for business guidance.",
                    "She is an IT security consultant."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-148",
        "word": "coordinator",
        "emoji": "\ud83d\udccb",
        "form": "noun",
        "transcription": "ko\u028a\u02c8\u0254\u02d0rd\u0259n\u02cce\u026at\u0259r",
        "definitions": [
            {
                "text": "A person who organizes events or activities.",
                "examples": [
                    "The event coordinator scheduled speakers.",
                    "Project coordinators manage timelines."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-149",
        "word": "director",
        "emoji": "\ud83c\udfac",
        "form": "noun",
        "transcription": "d\u0259\u02c8r\u025bkt\u0259r",
        "definitions": [
            {
                "text": "A person who supervises the actors or film production.",
                "examples": [
                    "The movie director yelled action.",
                    "She was appointed managing director."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-150",
        "word": "editor",
        "emoji": "\u270d\ufe0f",
        "form": "noun",
        "transcription": "\u02c8\u025bd\u0259t\u0259r",
        "definitions": [
            {
                "text": "A person who prepares written material for publication.",
                "examples": [
                    "The newspaper editor checked the story.",
                    "She works as a book editor."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-151",
        "word": "instructor",
        "emoji": "\ud83e\uddd1\u200d\ud83c\udfeb",
        "form": "noun",
        "transcription": "\u026an\u02c8str\u028ckt\u0259r",
        "definitions": [
            {
                "text": "A teacher or trainer.",
                "examples": [
                    "Our driving instructor was patient.",
                    "The fitness instructor led a morning class."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-152",
        "word": "specialist",
        "emoji": "\ud83d\udc68\u200d\u2695\ufe0f",
        "form": "noun",
        "transcription": "\u02c8sp\u025b\u0283\u0259l\u0259st",
        "definitions": [
            {
                "text": "A person who concentrates on a specific subject or medical field.",
                "examples": [
                    "Consult an eye specialist for vision care.",
                    "She is a marketing specialist."
                ]
            }
        ],
        "lang": "en",
        "level": "starter",
        "level_code": "A1",
        "domain": "WORK_SCHOOL",
        "subcategory": "Work",
        "pos_section": "Nouns",
        "sub_subcategory": "Jobs_Careers"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
