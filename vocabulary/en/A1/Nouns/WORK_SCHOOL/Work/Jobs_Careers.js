(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-WOR-029",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-030",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-031",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-032",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-033",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-034",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-035",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-036",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-037",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-038",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-039",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-040",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-041",
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
        "sub_subcategory": "Jobs_Careers"
    },
    {
        "id": "A1-NOUN-WOR-065",
        "word": "artist",
        "emoji": "🎨",
        "form": "noun",
        "transcription": "ˈɑːrtəst",
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
        "emoji": "📋",
        "form": "noun",
        "transcription": "ˈprɑːʤɛkt",
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
        "emoji": "👤",
        "form": "noun",
        "transcription": "ˈæpləkənt",
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
        "emoji": "📋",
        "form": "noun",
        "transcription": "ˌæpləˈkeɪʃən",
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
        "emoji": "📅",
        "form": "noun",
        "transcription": "əˈpɔɪntmənt",
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
        "emoji": "👤",
        "form": "noun",
        "transcription": "əˈsɪstənt",
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
        "emoji": "🧑‍💼",
        "form": "noun",
        "transcription": "ˈkændədət",
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
        "emoji": "📄",
        "form": "noun",
        "transcription": "ˈkɑːntrækt",
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
        "emoji": "🏢",
        "form": "noun",
        "transcription": "ɪmˈplɔɪər",
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
        "emoji": "💼",
        "form": "noun",
        "transcription": "ɪmˈplɔɪmənt",
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
        "emoji": "🤝",
        "form": "noun",
        "transcription": "ˈɪntərˌvjuː",
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
        "emoji": "🔨",
        "form": "noun",
        "transcription": "ˈleɪbər",
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
        "emoji": "📈",
        "form": "noun",
        "transcription": "prəˈmoʊʃən",
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
        "emoji": "💰",
        "form": "noun",
        "transcription": "ˈsæləri",
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
        "emoji": "⏱️",
        "form": "noun",
        "transcription": "ʃɪft",
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
        "id": "A1-NOUN-WOR-100",
        "word": "worker",
        "emoji": "👷",
        "form": "noun",
        "transcription": "ˈwɜːrkər",
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
        "emoji": "📊",
        "form": "noun",
        "transcription": "əˈkaʊntənt",
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
        "emoji": "🏛️",
        "form": "noun",
        "transcription": "ˈɑːrkəˌtɛkt",
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
        "emoji": "💵",
        "form": "noun",
        "transcription": "kæˈʃɪr",
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
        "emoji": "🤝",
        "form": "noun",
        "transcription": "ˈkaʊnsələr",
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
        "emoji": "🎨",
        "form": "noun",
        "transcription": "dɪˈzaɪnər",
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
        "emoji": "⚡",
        "form": "noun",
        "transcription": "ɪˌlɛkˈtrɪʃən",
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
        "emoji": "💼",
        "form": "noun",
        "transcription": "ɪɡˈzɛkjətɪv",
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
        "emoji": "✈️",
        "form": "noun",
        "transcription": "flaɪt əˈtɛndənt",
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
        "emoji": "🧑‍🌾",
        "form": "noun",
        "transcription": "ˈɡɑːrdnər",
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
        "emoji": "🔧",
        "form": "noun",
        "transcription": "məˈkænɪk",
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
        "emoji": "💊",
        "form": "noun",
        "transcription": "ˈfɑːrməsəst",
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
        "emoji": "🔧",
        "form": "noun",
        "transcription": "ˈplʌmər",
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
        "emoji": "🛎️",
        "form": "noun",
        "transcription": "rɪˈsɛpʃənəst",
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
        "emoji": "🛍️",
        "form": "noun",
        "transcription": "ˈseɪlzˌpɜːrsən",
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
        "emoji": "👨‍⚕️",
        "form": "noun",
        "transcription": "ˈsɜːrʤən",
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
        "emoji": "🌐",
        "form": "noun",
        "transcription": "trænsˈleɪtər",
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
        "emoji": "🐾",
        "form": "noun",
        "transcription": "ˌvɛtərəˈnɛriən",
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
        "emoji": "🖥️",
        "form": "noun",
        "transcription": "ədˈmɪnəˌstreɪtər",
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
        "emoji": "📊",
        "form": "noun",
        "transcription": "ˈænələst",
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
        "emoji": "💼",
        "form": "noun",
        "transcription": "kənˈsʌltənt",
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
        "emoji": "📋",
        "form": "noun",
        "transcription": "koʊˈɔːrdənˌeɪtər",
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
        "emoji": "🎬",
        "form": "noun",
        "transcription": "dəˈrɛktər",
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
        "emoji": "✍️",
        "form": "noun",
        "transcription": "ˈɛdətər",
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
        "emoji": "🧑‍🏫",
        "form": "noun",
        "transcription": "ɪnˈstrʌktər",
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
        "emoji": "👨‍⚕️",
        "form": "noun",
        "transcription": "ˈspɛʃələst",
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
