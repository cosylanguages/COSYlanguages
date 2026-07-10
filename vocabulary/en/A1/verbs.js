// TODO: verify level classification
(function() {
const data = [
    {
        "id": "en_starter_name_greeting_009",
        "word": "be",
        "emoji": "👤",
        "subtext": "be tired / be happy / be at work / be ready",
        "form": "verb",
        "transcription": "biː",
        "definitions": [
            {
                "text": "To exist; to have a quality or state.",
                "examples": [
                    "I am tired.",
                    "She is a doctor.",
                    "We are late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "was / were",
        "v3": "been",
        "group": "regular",
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "am",
                    "are",
                    "is",
                    "are",
                    "are"
                ]
            },
            "past_simple": {
                "positive": [
                    "was",
                    "were",
                    "was",
                    "were",
                    "were"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "beun",
            "origin_meaning": "to be"
        },
        "antonyms": [
            "become"
        ]
    },
    {
        "id": "en_starter_work_094",
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
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_016",
        "word": "feel",
        "emoji": "🌡️",
        "subtext": "feel tired / feel better / feel ill / feel stressed",
        "form": "verb",
        "transcription": "fiːl",
        "definitions": [
            {
                "text": "To experience a physical or emotional state.",
                "examples": [
                    "She feels exhausted after a long week."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "felt",
        "v3": "felt",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "act"
        ]
    },
    {
        "id": "en_starter_shopping_022",
        "word": "give",
        "emoji": "🎁",
        "subtext": "give advice / give money / give a present / give information",
        "form": "verb",
        "transcription": "ɡɪv",
        "definitions": [
            {
                "text": "To hand or transfer something to someone.",
                "examples": [
                    "He gives me a lot of work.",
                    "She gives advice."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave",
        "v3": "given",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gebaną"
        },
        "antonyms": [
            "take"
        ]
    },
    {
        "id": "en_starter_modes_of_transport_018",
        "word": "take",
        "emoji": "👜",
        "subtext": "take the bus / take medicine / take a break / take time",
        "form": "verb",
        "transcription": "teɪk",
        "definitions": [
            {
                "text": "To hold and move something; to use or consume.",
                "examples": [
                    "I take the bus to work.",
                    "She takes medicine."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took",
        "v3": "taken",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "give"
        ]
    },
    {
        "id": "en_starter_shopping_023",
        "word": "get",
        "emoji": "📥",
        "subtext": "get a job / get tired / get better / get home",
        "form": "verb",
        "definitions": [
            {
                "text": "To receive, obtain or become.",
                "examples": [
                    "I get a good salary.",
                    "He gets tired quickly.",
                    "She gets a promotion."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "got",
        "v3": "got",
        "group": "regular",
        "transcription": "gɪt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "give"
        ]
    },
    {
        "id": "en_starter_furniture_062",
        "word": "put",
        "emoji": "📥",
        "subtext": "put on / put away / put the phone down / put money aside",
        "form": "verb",
        "definitions": [
            {
                "text": "To place something in a position.",
                "examples": [
                    "Put your bag here.",
                    "She puts money in the bank."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "put",
        "v3": "put",
        "group": "regular",
        "transcription": "pʊt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "antonyms": [
            "take"
        ]
    },
    {
        "id": "en_starter_work_095",
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
        ]
    },
    {
        "id": "en_starter_work_096",
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
        ]
    },
    {
        "id": "en_starter_technology_024",
        "word": "use",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "transcription": "juz",
        "auxiliary": "have",
        "v4": "using",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "waste"
        ]
    },
    {
        "id": "en_starter_shopping_024",
        "word": "open",
        "emoji": "📖",
        "subtext": "open a door / open an account / open a shop / open at nine",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not closed; or to start.",
                "examples": [
                    "He opens the office at eight.",
                    "She opens a bank account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "opened",
        "v3": "opened",
        "group": "regular",
        "transcription": "ˈoʊpən",
        "auxiliary": "have",
        "v4": "opening",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "closed"
        ]
    },
    {
        "id": "en_starter_shopping_025",
        "word": "close",
        "emoji": "🔒",
        "subtext": "close a door / close at six / close an account / close the meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something not open; or to finish.",
                "examples": [
                    "The office closes at six.",
                    "She closes her laptop."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "closed",
        "v3": "closed",
        "group": "regular",
        "transcription": "kloʊz",
        "auxiliary": "have",
        "v4": "closing",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "open"
        ]
    },
    {
        "id": "en_starter_work_097",
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
        ]
    },
    {
        "id": "en_starter_work_098",
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
        ]
    },
    {
        "id": "en_starter_work_099",
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
        ]
    },
    {
        "id": "en_starter_learning_studying_022",
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
        ]
    },
    {
        "id": "en_starter_asking_answering_questions_001",
        "word": "show",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "form": "verb",
        "definitions": [
            {
                "text": "To let someone see or demonstrate something.",
                "examples": [
                    "Can you show me how the system works?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "showed",
        "v3": "shown",
        "group": "regular",
        "transcription": "ʃoʊ",
        "synonyms": [
            "demonstrate"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ]
    },
    {
        "id": "en_starter_shopping_026",
        "word": "find",
        "emoji": "🔍",
        "subtext": "find a job / find out / find it difficult / find time",
        "form": "verb",
        "definitions": [
            {
                "text": "To discover or locate something.",
                "examples": [
                    "I find the work interesting.",
                    "She found a new job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "found",
        "v3": "found",
        "group": "regular",
        "transcription": "faɪnd",
        "synonyms": [
            "locate"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "lose"
        ]
    },
    {
        "id": "en_starter_work_100",
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
        ]
    },
    {
        "id": "en_starter_shopping_027",
        "word": "lose",
        "emoji": "📉",
        "subtext": "lose a job / lose money / lose weight / lose time",
        "form": "verb",
        "definitions": [
            {
                "text": "To no longer have something.",
                "examples": [
                    "I lost my keys.",
                    "She lost her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "lost",
        "v3": "lost",
        "group": "regular",
        "transcription": "luz",
        "synonyms": [
            "misplace"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "win"
        ]
    },
    {
        "id": "en_starter_cooking_methods_003",
        "word": "cut",
        "emoji": "✂️",
        "subtext": "cut costs / cut spending / cut short / cut in half",
        "form": "verb",
        "definitions": [
            {
                "text": "To divide with something sharp; to reduce.",
                "examples": [
                    "She cuts her lunch break short.",
                    "It cuts costs."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "cut",
        "v3": "cut",
        "group": "regular",
        "transcription": "kət",
        "synonyms": [
            "slice"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "cooking_methods",
        "sub_theme": null,
        "antonyms": [
            "join"
        ]
    },
    {
        "id": "en_starter_directions_navigation_007",
        "word": "turn",
        "emoji": "🔄",
        "subtext": "turn on / turn off / turn left / turn right",
        "form": "verb",
        "definitions": [
            {
                "text": "To move in a direction; to change state.",
                "examples": [
                    "Turn left at the office.",
                    "She turns off the light."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned",
        "v3": "turned",
        "group": "regular",
        "transcription": "tərn",
        "auxiliary": "have",
        "v4": "turning",
        "lang": "en",
        "level": "starter",
        "theme": "directions_navigation",
        "sub_theme": null,
        "antonyms": [
            "straighten"
        ]
    },
    {
        "id": "en_starter_meals_of_the_day_008",
        "word": "bring",
        "emoji": "🎁",
        "subtext": "bring someone / bring food / bring a document / bring up",
        "form": "verb",
        "definitions": [
            {
                "text": "To carry something to a place.",
                "examples": [
                    "Bring your ID to the interview.",
                    "He brings lunch."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought",
        "v3": "brought",
        "group": "regular",
        "transcription": "brɪŋ",
        "synonyms": [
            "carry"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "antonyms": [
            "take"
        ]
    },
    {
        "id": "en_starter_social_025",
        "word": "say",
        "emoji": "🗨️",
        "subtext": "say hello / say yes / say no / say something",
        "form": "verb",
        "definitions": [
            {
                "text": "To express something in words.",
                "examples": [
                    "She says hello every morning.",
                    "He says it is difficult."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "said",
        "v3": "said",
        "group": "regular",
        "transcription": "seɪ",
        "synonyms": [
            "tell",
            "state"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "listen"
        ]
    },
    {
        "id": "en_starter_asking_answering_questions_002",
        "word": "tell",
        "emoji": "🗣️",
        "subtext": "tell the truth / tell someone / tell a story / tell someone about",
        "form": "verb",
        "definitions": [
            {
                "text": "To give information or instructions to someone.",
                "examples": [
                    "She tells the team about changes before they happen."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "told",
        "v3": "told",
        "group": "regular",
        "transcription": "tɛl",
        "synonyms": [
            "say",
            "inform"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ]
    },
    {
        "id": "en_starter_asking_answering_questions_003",
        "word": "ask",
        "emoji": "❓",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To put a question or make a request.",
                "examples": [
                    "She asks for feedback after every presentation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asked",
        "v3": "asked",
        "group": "regular",
        "transcription": "æsk",
        "synonyms": [
            "request"
        ],
        "auxiliary": "have",
        "v4": "asking",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "answer"
        ]
    },
    {
        "id": "en_starter_social_026",
        "word": "speak",
        "emoji": "🗣️",
        "subtext": "speak to / with, speak to someone / speak English / speak clearly / speak at a meeting",
        "form": "verb",
        "definitions": [
            {
                "text": "To say words; to communicate verbally.",
                "examples": [
                    "He speaks French.",
                    "She speaks to her manager every day."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spoke",
        "v3": "spoken",
        "group": "regular",
        "transcription": "spik",
        "synonyms": [
            "talk"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sprekaną"
        },
        "antonyms": [
            "be silent"
        ]
    },
    {
        "id": "en_starter_people_017",
        "word": "talk",
        "emoji": "💬",
        "subtext": "talk to / about, talk to someone / talk about / talk openly / talk for a long time",
        "form": "verb",
        "definitions": [
            {
                "text": "To communicate by speaking.",
                "examples": [
                    "He talks to his manager about the problem."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "talked",
        "v3": "talked",
        "group": "regular",
        "transcription": "tɔk",
        "synonyms": [
            "speak",
            "chat"
        ],
        "auxiliary": "have",
        "v4": "talking",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "listen"
        ]
    },
    {
        "id": "en_starter_technology_025",
        "word": "call",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "transcription": "kɔl",
        "synonyms": [
            "phone"
        ],
        "auxiliary": "have",
        "v4": "calling",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "hang up"
        ]
    },
    {
        "id": "en_starter_learning_studying_023",
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
        ]
    },
    {
        "id": "en_starter_learning_studying_024",
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
        ]
    },
    {
        "id": "en_starter_learning_studying_025",
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
        ]
    },
    {
        "id": "en_starter_asking_answering_questions_004",
        "word": "answer",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "form": "verb",
        "definitions": [
            {
                "text": "To respond to a question or communication.",
                "examples": [
                    "He answers all emails quickly.",
                    "She answered the phone."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "answered",
        "v3": "answered",
        "group": "regular",
        "transcription": "ˈænsər",
        "synonyms": [
            "reply"
        ],
        "auxiliary": "have",
        "v4": "answering",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ]
    },
    {
        "id": "en_starter_language_020",
        "word": "repeat",
        "emoji": "🔁",
        "subtext": "repeat that / repeat yourself / repeat an order",
        "form": "verb",
        "definitions": [
            {
                "text": "To say or do something again.",
                "examples": [
                    "Please repeat that.",
                    "He repeated the instruction twice."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repeated",
        "v3": "repeated",
        "group": "regular",
        "transcription": "rɪˈpit",
        "synonyms": [
            "say again"
        ],
        "auxiliary": "have",
        "v4": "repeating",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "change"
        ]
    },
    {
        "id": "en_starter_travel_032",
        "word": "go",
        "emoji": "🚶",
        "subtext": "go to work / go home / go out / go shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To move from one place to another.",
                "examples": [
                    "I go to work by bus.",
                    "She goes to the doctor."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "went",
        "v3": "gone",
        "group": "regular",
        "transcription": "🇬🇧 ɡəʊ | 🇺🇸 ɡoʊ",
        "synonyms": [
            "move"
        ],
        "auxiliary": "have",
        "tenses": {
            "present_simple": {
                "positive": [
                    "go",
                    "go",
                    "goes",
                    "go",
                    "go"
                ]
            }
        },
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gangan",
            "origin_meaning": "to go"
        },
        "antonyms": [
            "come"
        ]
    },
    {
        "id": "en_starter_travel_033",
        "word": "come",
        "emoji": "🏃‍♂️",
        "subtext": "come home / come to work / come back / come here",
        "form": "verb",
        "definitions": [
            {
                "text": "To move towards a place or person.",
                "examples": [
                    "He comes to the office at nine.",
                    "She comes home late."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "came",
        "v3": "come",
        "group": "regular",
        "transcription": "kʌm",
        "synonyms": [
            "arrive"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "kwimaną"
        },
        "antonyms": [
            "go"
        ]
    },
    {
        "id": "en_starter_modes_of_transport_019",
        "word": "walk",
        "emoji": "🚶",
        "subtext": "walk to work / walk home / walk slowly / walk every day",
        "form": "verb",
        "definitions": [
            {
                "text": "To move on foot at a normal pace.",
                "examples": [
                    "He walks to work every day.",
                    "She walks during her lunch break."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "walked",
        "v3": "walked",
        "group": "regular",
        "transcription": "wɔk",
        "synonyms": [
            "go on foot"
        ],
        "auxiliary": "have",
        "v4": "walking",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "run"
        ]
    },
    {
        "id": "en_starter_modes_of_transport_020",
        "word": "drive",
        "emoji": "🚗",
        "subtext": "drive to work / drive a car / drive home / drive carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To operate a vehicle.",
                "examples": [
                    "She drives to work.",
                    "He drives a company car."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drove",
        "v3": "driven",
        "group": "regular",
        "transcription": "draɪv",
        "synonyms": [
            "operate"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_modes_of_transport_021",
        "word": "fly",
        "emoji": "✈️",
        "subtext": "fly to a city / fly business class / fly economy",
        "form": "verb",
        "definitions": [
            {
                "text": "To travel by plane.",
                "examples": [
                    "She flies to Paris for meetings.",
                    "He hates flying."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "flew",
        "v3": "flown",
        "group": "regular",
        "transcription": "flaɪ",
        "synonyms": [
            "travel by air"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "land"
        ]
    },
    {
        "id": "en_starter_work_101",
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
        ]
    },
    {
        "id": "en_starter_work_102",
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
        ]
    },
    {
        "id": "en_starter_household_tasks_009",
        "word": "move",
        "emoji": "📦",
        "subtext": "move to a new place / move in / move out / move house",
        "form": "verb",
        "definitions": [
            {
                "text": "To go to live or work in a different place.",
                "examples": [
                    "They moved to a larger flat when they had children."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moved",
        "v3": "moved",
        "group": "regular",
        "transcription": "muv",
        "auxiliary": "have",
        "v4": "moving",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ]
    },
    {
        "id": "en_starter_travel_034",
        "word": "return",
        "emoji": "🔙",
        "subtext": "return home / return to work / return a call / return from",
        "form": "verb",
        "definitions": [
            {
                "text": "To come or go back to a place.",
                "examples": [
                    "He returns from a trip on Friday.",
                    "She returned the call."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "returned",
        "v3": "returned",
        "group": "regular",
        "transcription": "rɪˈtərn",
        "synonyms": [
            "come back"
        ],
        "auxiliary": "have",
        "v4": "returning",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ]
    },
    {
        "id": "en_starter_public_transport_008",
        "word": "travel",
        "emoji": "✈️",
        "subtext": "travel for work / travel abroad / travel by train",
        "form": "verb",
        "definitions": [
            {
                "text": "To go from one place to another, especially far.",
                "examples": [
                    "She travels for work three times a month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "traveled",
        "v3": "traveled",
        "group": "regular",
        "transcription": "ˈtrævəl",
        "synonyms": [
            "journey"
        ],
        "auxiliary": "have",
        "v4": "traveling",
        "lang": "en",
        "level": "starter",
        "theme": "public_transport",
        "sub_theme": null,
        "antonyms": [
            "stay"
        ]
    },
    {
        "id": "en_starter_meals_of_the_day_009",
        "word": "eat",
        "emoji": "🍎",
        "subtext": "eat breakfast / eat lunch / eat dinner / eat out",
        "form": "verb",
        "definitions": [
            {
                "text": "To put food in your mouth and swallow it.",
                "examples": [
                    "We eat dinner at seven.",
                    "He eats lunch at his desk."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ate",
        "v3": "eaten",
        "group": "regular",
        "transcription": "it",
        "synonyms": [
            "have a meal"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "etan",
            "origin_meaning": "to eat"
        },
        "antonyms": [
            "drink"
        ]
    },
    {
        "id": "en_starter_food_drink_089",
        "word": "drink",
        "emoji": "🥛",
        "subtext": "drink coffee / drink tea / drink water / drink beer",
        "form": "verb",
        "definitions": [
            {
                "text": "To take liquid into your mouth and swallow it.",
                "examples": [
                    "She drinks coffee every morning.",
                    "I drink water."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drank",
        "v3": "drunk",
        "group": "regular",
        "transcription": "drɪŋk",
        "synonyms": [
            "sip"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "drinkan",
            "origin_meaning": "to drink"
        },
        "antonyms": [
            "eat"
        ]
    },
    {
        "id": "en_starter_time_040",
        "word": "sleep",
        "emoji": "😴",
        "subtext": "sleep well / sleep badly / sleep eight hours / sleep late",
        "form": "verb",
        "definitions": [
            {
                "text": "To rest with your eyes closed in a natural state of unconsciousness.",
                "examples": [
                    "He sleeps seven hours a night.",
                    "I sleep badly."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "slept",
        "v3": "slept",
        "group": "regular",
        "transcription": "slip",
        "synonyms": [
            "rest"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "slēpan",
            "origin_meaning": "to sleep"
        },
        "antonyms": [
            "wake up"
        ]
    },
    {
        "id": "en_starter_cooking_methods_004",
        "word": "cook",
        "emoji": "🍳",
        "subtext": "cook dinner / cook a meal / cook at home / cook for someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To prepare food by heating it.",
                "examples": [
                    "She cooks dinner every evening. I do not cook — I order food."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cooked",
        "v3": "cooked",
        "group": "regular",
        "transcription": "kʊk",
        "synonyms": [
            "prepare food"
        ],
        "auxiliary": "have",
        "v4": "cooking",
        "lang": "en",
        "level": "starter",
        "theme": "cooking_methods",
        "sub_theme": null,
        "antonyms": [
            "eat"
        ]
    },
    {
        "id": "en_starter_household_tasks_010",
        "word": "clean",
        "emoji": "🧹",
        "subtext": "clean the flat / clean the kitchen / clean up / clean regularly",
        "form": "verb",
        "definitions": [
            {
                "text": "To remove dirt from something.",
                "examples": [
                    "I clean the flat every Saturday. He cleans his desk every morning."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cleaned",
        "v3": "cleaned",
        "group": "regular",
        "transcription": "klin",
        "synonyms": [
            "wash",
            "tidy"
        ],
        "auxiliary": "have",
        "v4": "cleaning",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ]
    },
    {
        "id": "en_starter_items_of_clothing_024",
        "word": "wear",
        "emoji": "👕",
        "subtext": "wear a suit / wear glasses / wear casual clothes",
        "form": "verb",
        "definitions": [
            {
                "text": "To have clothing or accessories on your body.",
                "examples": [
                    "She wears a suit to work.",
                    "He wears glasses."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "wore",
        "v3": "worn",
        "group": "regular",
        "transcription": "wɛr",
        "synonyms": [
            "have on"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "undress"
        ]
    },
    {
        "id": "en_starter_household_tasks_011",
        "word": "wash",
        "emoji": "🧼",
        "subtext": "wash the dishes / wash clothes / wash your hands",
        "form": "verb",
        "definitions": [
            {
                "text": "To clean something with water.",
                "examples": [
                    "He washes his car every Sunday.",
                    "Wash your hands."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "washed",
        "v3": "washed",
        "group": "regular",
        "transcription": "wɑʃ",
        "synonyms": [
            "clean"
        ],
        "auxiliary": "have",
        "v4": "washing",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "dirty"
        ]
    },
    {
        "id": "en_starter_shopping_028",
        "word": "buy",
        "emoji": "🛒",
        "subtext": "buy food / buy a ticket / buy online / buy a house",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something in exchange for money.",
                "examples": [
                    "She buys food online.",
                    "He wants to buy a flat."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bought",
        "v3": "bought",
        "group": "regular",
        "transcription": "baɪ",
        "synonyms": [
            "purchase"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "sell"
        ]
    },
    {
        "id": "en_starter_money_payment_016",
        "word": "pay",
        "emoji": "💳",
        "subtext": "pay for, pay a bill / pay rent / pay by card / pay in cash",
        "form": "verb",
        "definitions": [
            {
                "text": "To give money in exchange for something.",
                "examples": [
                    "I pay my bills by direct debit."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "paid",
        "v3": "paid",
        "group": "regular",
        "transcription": "peɪ",
        "synonyms": [
            "spend"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "receive"
        ]
    },
    {
        "id": "en_starter_money_payment_017",
        "word": "spend",
        "emoji": "💸",
        "subtext": "spend money / spend on food / spend on rent / spend time",
        "form": "verb",
        "definitions": [
            {
                "text": "To use money to pay for things.",
                "examples": [
                    "He spends too much money on takeaway food."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spent",
        "v3": "spent",
        "group": "regular",
        "transcription": "spɛnd",
        "synonyms": [
            "pay"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "save"
        ]
    },
    {
        "id": "en_starter_money_payment_018",
        "word": "save",
        "emoji": "💰",
        "subtext": "save money / save for a holiday / save for a house",
        "form": "verb",
        "definitions": [
            {
                "text": "To keep money rather than spending it.",
                "examples": [
                    "She saves a hundred euros every month."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "saved",
        "v3": "saved",
        "group": "regular",
        "transcription": "seɪv",
        "synonyms": [
            "keep"
        ],
        "auxiliary": "have",
        "v4": "saving",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "spend"
        ]
    },
    {
        "id": "en_starter_work_103",
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
        ]
    },
    {
        "id": "en_starter_places_103",
        "word": "live",
        "emoji": "🏠",
        "subtext": "live in a flat / live alone / live with someone / live abroad",
        "form": "verb",
        "definitions": [
            {
                "text": "To have your home in a place; to be alive.",
                "examples": [
                    "He lives in a flat near the centre.",
                    "We live together."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "lived",
        "v3": "lived",
        "group": "regular",
        "transcription": "lɪv",
        "synonyms": [
            "reside"
        ],
        "auxiliary": "have",
        "v4": "living",
        "lang": "en",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "antonyms": [
            "die"
        ]
    },
    {
        "id": "en_starter_giving_opinions_019",
        "word": "think",
        "emoji": "💭",
        "subtext": "think about someone/something / think about / of, think about / think of / think it is / think carefully",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a belief or opinion; to use the mind.",
                "examples": [
                    "I think it is a good idea.",
                    "She thinks about her job."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "thought",
        "v3": "thought",
        "group": "regular",
        "transcription": "θɪŋk",
        "synonyms": [
            "believe"
        ],
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "feel"
        ]
    },
    {
        "id": "en_starter_learning_studying_026",
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
        ]
    },
    {
        "id": "en_starter_emotions_054",
        "word": "want",
        "emoji": "🙏",
        "subtext": "want a job / want to leave / want more money / want help",
        "form": "verb",
        "definitions": [
            {
                "text": "To desire or wish for something.",
                "examples": [
                    "I want a coffee.",
                    "She wants a better job.",
                    "He wants to retire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wanted",
        "v3": "wanted",
        "group": "regular",
        "transcription": "wɔnt",
        "synonyms": [
            "desire"
        ],
        "auxiliary": "have",
        "v4": "wanting",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "refuse"
        ]
    },
    {
        "id": "en_starter_emotions_055",
        "word": "need",
        "emoji": "🆘",
        "subtext": "need help / need time / need money / need to rest",
        "form": "verb",
        "definitions": [
            {
                "text": "To require something; to feel that something is necessary.",
                "examples": [
                    "I need a break.",
                    "She needs help.",
                    "We need more time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "needed",
        "v3": "needed",
        "group": "regular",
        "transcription": "nid",
        "synonyms": [
            "require"
        ],
        "auxiliary": "have",
        "v4": "needing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "have"
        ]
    },
    {
        "id": "en_starter_emotions_056",
        "word": "like",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To find something pleasant; to enjoy.",
                "examples": [
                    "I like my job.",
                    "She likes cooking.",
                    "He likes coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "liked",
        "v3": "liked",
        "group": "regular",
        "transcription": "laɪk",
        "synonyms": [
            "enjoy"
        ],
        "auxiliary": "have",
        "v4": "liking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_057",
        "word": "dislike",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "form": "verb",
        "definitions": [
            {
                "text": "To not like someone or something.",
                "examples": [
                    "I dislike loud music."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disliked",
        "v3": "disliked",
        "group": "regular",
        "transcription": "dɪsˈlaɪk",
        "auxiliary": "have",
        "v4": "disliking",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "prefer"
        ]
    },
    {
        "id": "en_starter_emotions_058",
        "word": "love",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "form": "verb",
        "definitions": [
            {
                "text": "To have strong affection for; to enjoy greatly.",
                "examples": [
                    "She loves her job.",
                    "He loves travelling for work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "loved",
        "v3": "loved",
        "group": "regular",
        "transcription": "ləv",
        "synonyms": [
            "adore"
        ],
        "auxiliary": "have",
        "v4": "loving",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ]
    },
    {
        "id": "en_starter_emotions_059",
        "word": "hate",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "form": "verb",
        "definitions": [
            {
                "text": "To strongly dislike.",
                "examples": [
                    "He hates commuting by bus.",
                    "She hates long meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hated",
        "v3": "hated",
        "group": "regular",
        "transcription": "heɪt",
        "synonyms": [
            "dislike"
        ],
        "auxiliary": "have",
        "v4": "hating",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "love"
        ]
    },
    {
        "id": "en_starter_emotions_060",
        "word": "hope",
        "emoji": "🤞",
        "subtext": "hope for / hope to do / hope that / I hope so",
        "form": "verb",
        "definitions": [
            {
                "text": "To wish for something to happen.",
                "examples": [
                    "I hope to get a promotion this year.",
                    "She hopes for better pay."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "hoped",
        "v3": "hoped",
        "group": "regular",
        "transcription": "hoʊp",
        "synonyms": [
            "wish"
        ],
        "auxiliary": "have",
        "v4": "hoping",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "fear"
        ]
    },
    {
        "id": "en_starter_learning_studying_027",
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
        ]
    },
    {
        "id": "en_starter_learning_studying_028",
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
        ]
    },
    {
        "id": "en_starter_asking_answering_questions_005",
        "word": "understand",
        "emoji": "💡",
        "subtext": "understand a problem / understand someone / understand clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To grasp the meaning of something.",
                "examples": [
                    "I understand the contract.",
                    "She understands French."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "understood",
        "v3": "understood",
        "group": "regular",
        "transcription": "ˌəndərˈstænd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "misunderstand"
        ]
    },
    {
        "id": "en_starter_giving_opinions_020",
        "word": "decide",
        "emoji": "⚖️",
        "subtext": "decide to do / decide on / hard to decide",
        "synonyms": [
            "make a decision"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make a choice.",
                "examples": [
                    "She decided to change careers.",
                    "He decides quickly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decided",
        "v3": "decided",
        "group": "regular",
        "transcription": "ˌdɪˈsaɪd",
        "auxiliary": "have",
        "v4": "deciding",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "hesitate"
        ]
    },
    {
        "id": "en_starter_emotions_061",
        "word": "enjoy",
        "emoji": "😊",
        "subtext": "enjoy doing / enjoy a meal / enjoy your work / enjoy life",
        "form": "verb",
        "definitions": [
            {
                "text": "To take pleasure from something.",
                "examples": [
                    "She really enjoys working from home three days a week."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "enjoyed",
        "v3": "enjoyed",
        "group": "regular",
        "transcription": "ˌɛnˈʤɔɪ",
        "auxiliary": "have",
        "v4": "enjoying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "hate"
        ]
    },
    {
        "id": "en_starter_body_043",
        "word": "see",
        "emoji": "👁️",
        "subtext": "see a doctor / see friends / see the problem / see clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To notice or perceive with the eyes.",
                "examples": [
                    "I see my doctor tomorrow.",
                    "She sees the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "saw",
        "v3": "seen",
        "group": "regular",
        "transcription": "si",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "sehwan",
            "origin_meaning": "to see"
        },
        "antonyms": [
            "blind"
        ]
    },
    {
        "id": "en_starter_body_044",
        "word": "hear",
        "emoji": "👂",
        "subtext": "hear news / hear from someone / hear a sound / hear clearly",
        "form": "verb",
        "definitions": [
            {
                "text": "To perceive sound through the ears.",
                "examples": [
                    "I hear the alarm every morning.",
                    "Can you hear me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "heard",
        "v3": "heard",
        "group": "regular",
        "transcription": "hir",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hauzjan",
            "origin_meaning": "to hear"
        },
        "antonyms": [
            "ignore"
        ]
    },
    {
        "id": "en_starter_work_104",
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
        ]
    },
    {
        "id": "en_starter_leisure_activities_020",
        "word": "watch",
        "emoji": "📺",
        "form": "verb",
        "subtext": "watch TV / watch a film / watch the news / watch closely",
        "definitions": [
            {
                "text": "To look at something for a period of time.",
                "examples": [
                    "She watches the market news every morning before work."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "watched",
        "v3": "watched",
        "group": "regular",
        "transcription": "wɔʧ",
        "auxiliary": "have",
        "v4": "watching",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ]
    },
    {
        "id": "en_starter_body_045",
        "word": "look",
        "emoji": "👀",
        "subtext": "look at something / look for something / look at / for, look at / look for / look like / look happy",
        "form": "verb",
        "definitions": [
            {
                "text": "To direct your eyes toward something.",
                "examples": [
                    "Look at this photo.",
                    "He is looking for his keys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "looked",
        "v3": "looked",
        "group": "regular",
        "transcription": "lʊk",
        "auxiliary": "have",
        "v4": "looking",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ]
    },
    {
        "id": "en_starter_leisure_activities_021",
        "word": "play",
        "emoji": "🎮",
        "subtext": "play sport / play a game / play music / play a role",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in a game or sport; to produce music.",
                "examples": [
                    "He plays football at the weekend to de-stress."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "played",
        "v3": "played",
        "group": "regular",
        "transcription": "pleɪ",
        "auxiliary": "have",
        "v4": "playing",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ]
    },
    {
        "id": "en_starter_sports_013",
        "word": "run",
        "emoji": "🏃",
        "subtext": "run a race / run a business / run out of / run late",
        "form": "verb",
        "definitions": [
            {
                "text": "To move very fast on your legs.",
                "examples": [
                    "I run in the park.",
                    "He runs to catch the bus."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "ran",
        "v3": "run",
        "group": "regular",
        "transcription": "rən",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_work_105",
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
        ]
    },
    {
        "id": "en_starter_work_106",
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
        ]
    },
    {
        "id": "en_starter_work_107",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_learning_studying_029",
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
        ]
    },
    {
        "id": "en_starter_work_108",
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
        ]
    },
    {
        "id": "en_starter_work_109",
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
        ]
    },
    {
        "id": "en_starter_numbers_011",
        "word": "add",
        "emoji": "➕",
        "subtext": "add some sugar / add to / add up / add a comment",
        "form": "verb",
        "definitions": [
            {
                "text": "To put things together to make a larger group.",
                "examples": [
                    "Add some sugar to the tea.",
                    "What is five plus five?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "added",
        "v3": "added",
        "group": "regular",
        "transcription": "æd",
        "auxiliary": "have",
        "v4": "adding",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "antonyms": [
            "subtract"
        ]
    },
    {
        "id": "en_starter_numbers_012",
        "word": "subtract",
        "emoji": "➖",
        "subtext": "subtract from",
        "synonyms": [
            "minus"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To take a number or amount away from another number or amount.",
                "examples": [
                    "If you subtract five from ten, you get five."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subtracted",
        "v3": "subtracted",
        "group": "regular",
        "transcription": "səbˈtrækt",
        "auxiliary": "have",
        "v4": "subtracting",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "antonyms": [
            "add"
        ]
    },
    {
        "id": "en_starter_leisure_activities_022",
        "word": "win",
        "emoji": "🏆",
        "subtext": "win a game / win a prize / win an award / win a contract",
        "form": "verb",
        "definitions": [
            {
                "text": "To be the best in a game or competition.",
                "examples": [
                    "We want to win the game."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "won",
        "v3": "won",
        "group": "regular",
        "transcription": "wɪn",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "lose"
        ]
    },
    {
        "id": "en_starter_work_110",
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
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_017",
        "word": "die",
        "emoji": "⚰️",
        "subtext": "die of / die for / die from / die out",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop living.",
                "examples": [
                    "Plants die without water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "died",
        "v3": "died",
        "group": "regular",
        "transcription": "daɪ",
        "auxiliary": "have",
        "v4": "diing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "live"
        ]
    },
    {
        "id": "en_starter_work_111",
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
        ]
    },
    {
        "id": "en_starter_types_of_accommodation_003",
        "word": "stay",
        "emoji": "🏨",
        "subtext": "stay at home / stay in a hotel / stay up late / stay with someone",
        "form": "verb",
        "definitions": [
            {
                "text": "To continue to be in a place.",
                "examples": [
                    "I stay at home on Sundays.",
                    "We are staying in a hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "stayed",
        "v3": "stayed",
        "group": "regular",
        "transcription": "steɪ",
        "auxiliary": "have",
        "v4": "staying",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_accommodation",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ]
    },
    {
        "id": "en_starter_seasons_climate_002",
        "word": "fall",
        "emoji": "🍂",
        "subtext": "fall down / fall off / fall in love / fall asleep",
        "form": "verb",
        "synonyms": [
            "🇬🇧 autumn"
        ],
        "definitions": [
            {
                "text": "To move down toward the ground.",
                "examples": [
                    "Leaves fall in autumn.",
                    "Be careful, don't fall."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fell",
        "v3": "fallen",
        "group": "regular",
        "transcription": "fɔl",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null,
        "antonyms": [
            "rise"
        ]
    },
    {
        "id": "en_starter_seasons_climate_003",
        "word": "rise",
        "emoji": "🌅",
        "subtext": "rise up / sun rise / price rise",
        "form": "verb",
        "definitions": [
            {
                "text": "To move upwards; to increase in amount or level.",
                "examples": [
                    "The sun rises in the east.",
                    "Prices are rising every year."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rose",
        "v3": "risen",
        "group": "regular",
        "transcription": "raɪz",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "seasons_climate",
        "sub_theme": null,
        "antonyms": [
            "fall"
        ]
    },
    {
        "id": "en_starter_learning_studying_030",
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
        ]
    },
    {
        "id": "en_starter_shopping_029",
        "word": "sell",
        "emoji": "🏷️",
        "subtext": "sell products / sell online / sell at the market",
        "synonyms": [
            "best seller"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To give something to someone for money.",
                "examples": [
                    "They sell fruit at the market."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sold",
        "v3": "sold",
        "group": "regular",
        "transcription": "sɛl",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "buy"
        ]
    },
    {
        "id": "en_starter_work_112",
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
        ]
    },
    {
        "id": "en_starter_work_113",
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
        ]
    },
    {
        "id": "en_starter_work_114",
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
        ]
    },
    {
        "id": "en_starter_describing_085",
        "word": "break",
        "emoji": "💔",
        "subtext": "break the glass / break a law / take a break / break down",
        "form": "verb",
        "definitions": [
            {
                "text": "To separate something into two or more pieces.",
                "examples": [
                    "Don't break the glass.",
                    "He broke his leg."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "broke",
        "v3": "broken",
        "group": "regular",
        "transcription": "breɪk",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "fix"
        ]
    },
    {
        "id": "en_starter_money_payment_019",
        "word": "receive",
        "emoji": "📩",
        "subtext": "receive an email / receive a gift / receive payment / receive news",
        "form": "verb",
        "definitions": [
            {
                "text": "To get something that someone gave or sent to you.",
                "examples": [
                    "I receive a lot of mail.",
                    "She received a gift."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "received",
        "v3": "received",
        "group": "regular",
        "transcription": "rɪˈsiv",
        "auxiliary": "have",
        "v4": "receiving",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "send"
        ]
    },
    {
        "id": "en_starter_giving_opinions_021",
        "word": "agree",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "form": "verb",
        "definitions": [
            {
                "text": "To have the same opinion as someone.",
                "examples": [
                    "I agree with you.",
                    "We agree on the plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "agreed",
        "v3": "agreed",
        "group": "regular",
        "transcription": "əˈgri",
        "auxiliary": "have",
        "v4": "agreeing",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "disagree"
        ]
    },
    {
        "id": "en_starter_cinema_film_004",
        "word": "draw",
        "emoji": "🎨",
        "subtext": "draw a picture / draw a conclusion / draw attention / draw a line",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a picture with a pen or pencil.",
                "examples": [
                    "I like to draw birds.",
                    "Can you draw a map?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew",
        "v3": "drawn",
        "group": "regular",
        "transcription": "drɔ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "cinema_film",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_018",
        "word": "share",
        "emoji": "🍕",
        "subtext": "share a room / share information / share an idea / share with",
        "form": "verb",
        "definitions": [
            {
                "text": "To give a part of something to others.",
                "examples": [
                    "Let's share the pizza.",
                    "I share a room with my brother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shared",
        "v3": "shared",
        "group": "regular",
        "transcription": "ʃɛr",
        "auxiliary": "have",
        "v4": "sharing",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "keep"
        ]
    },
    {
        "id": "en_starter_body_046",
        "word": "smile",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a happy expression with your mouth.",
                "examples": [
                    "She has a beautiful smile.",
                    "Smile for the camera."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "smiled",
        "v3": "smiled",
        "group": "regular",
        "transcription": "smaɪl",
        "auxiliary": "have",
        "v4": "smiling",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "cry"
        ]
    },
    {
        "id": "en_starter_surprise_interest_006",
        "word": "cry",
        "emoji": "😢",
        "subtext": "cry for help / cry out / cry about something",
        "synonyms": [
            "start crying"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To produce tears because you are sad or in pain.",
                "examples": [
                    "The baby is crying.",
                    "Don't cry."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cried",
        "v3": "cried",
        "group": "regular",
        "transcription": "kraɪ",
        "auxiliary": "have",
        "v4": "crying",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null,
        "antonyms": [
            "smile"
        ]
    },
    {
        "id": "en_starter_music_014",
        "word": "dance",
        "emoji": "💃",
        "subtext": "dance to music / dance together / slow dance",
        "synonyms": [
            "go dancing"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move your body to music.",
                "examples": [
                    "I love to dance.",
                    "They are dancing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "danced",
        "v3": "danced",
        "group": "regular",
        "transcription": "dæns",
        "auxiliary": "have",
        "v4": "dancing",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "sit"
        ]
    },
    {
        "id": "en_starter_music_015",
        "word": "sing",
        "emoji": "🎤",
        "subtext": "sing a song / sing along / sing well",
        "synonyms": [
            "lead singer"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To make musical sounds with your voice.",
                "examples": [
                    "I like to sing in the shower.",
                    "She sings very well."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sang",
        "v3": "sung",
        "group": "regular",
        "transcription": "sɪŋ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "music",
        "sub_theme": null,
        "antonyms": [
            "be quiet"
        ]
    },
    {
        "id": "en_starter_playing_watching_sport_002",
        "word": "jump",
        "emoji": "🦘",
        "subtext": "jump high / jump over / jump up / jump in",
        "form": "verb",
        "definitions": [
            {
                "text": "To push yourself off the ground with your legs.",
                "examples": [
                    "Can you jump high?",
                    "The cat jumped onto the table."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jumped",
        "v3": "jumped",
        "group": "regular",
        "transcription": "ʤəmp",
        "auxiliary": "have",
        "v4": "jumping",
        "lang": "en",
        "level": "starter",
        "theme": "playing_watching_sport",
        "sub_theme": null,
        "antonyms": [
            "fall"
        ]
    },
    {
        "id": "en_starter_sports_014",
        "word": "swim",
        "emoji": "🏊",
        "subtext": "swim across / swim laps / swim well",
        "synonyms": [
            "go swimming"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "To move through water using your arms and legs.",
                "examples": [
                    "I swim every morning.",
                    "Can you swim?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "swam",
        "v3": "swum",
        "group": "regular",
        "transcription": "swɪm",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "sink"
        ]
    },
    {
        "id": "en_starter_learning_studying_031",
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
        ]
    },
    {
        "id": "en_starter_learning_studying_032",
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
        ]
    },
    {
        "id": "en_starter_types_of_accommodation_004",
        "word": "rent",
        "emoji": "🏠",
        "subtext": "rent a flat / rent a property / rent out a room",
        "form": "verb",
        "definitions": [
            {
                "text": "To pay money to use property belonging to someone else.",
                "examples": [
                    "They rent a two-bedroom flat near the city centre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "rented",
        "v3": "rented",
        "group": "regular",
        "transcription": "rɛnt",
        "auxiliary": "have",
        "v4": "renting",
        "lang": "en",
        "level": "starter",
        "theme": "types_of_accommodation",
        "sub_theme": null,
        "antonyms": [
            "own"
        ]
    },
    {
        "id": "en_starter_leisure_activities_023",
        "word": "exercise",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "To do physical activity for health and fitness.",
                "examples": [
                    "He exercises four times a week at the gym."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exercised",
        "v3": "exercised",
        "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
        "group": "regular",
        "transcription": "ˈɛksərˌsaɪz",
        "auxiliary": "have",
        "v4": "exercising",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "rest"
        ]
    },
    {
        "id": "en_starter_money_payment_020",
        "word": "cost",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "To have a price of.",
                "examples": [
                    "The flat costs twelve hundred euros a month."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "cost",
        "v3": "cost",
        "subtext": "cost a lot / cost money / cost too much / cost less",
        "group": "regular",
        "transcription": "kɔst",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_019",
        "word": "invite",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "To ask someone to come to an event or place.",
                "examples": [
                    "They invited all their colleagues to the party."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invited",
        "v3": "invited",
        "subtext": "invite someone / invite to dinner / invite to a party",
        "group": "regular",
        "transcription": "ˌɪnˈvaɪt",
        "auxiliary": "have",
        "v4": "inviting",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ]
    },
    {
        "id": "en_starter_work_115",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_work_116",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_work_117",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_work_118",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_work_119",
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
        ]
    },
    {
        "id": "en_starter_travel_035",
        "word": "unpack",
        "emoji": "👜",
        "subtext": "unpack a suitcase",
        "form": "verb",
        "definitions": [
            {
                "text": "To take things out of a suitcase or bag.",
                "examples": [
                    "I need to unpack my things."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "transcription": "ənˈpæk",
        "auxiliary": "have",
        "v4": "unpacking",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "pack"
        ]
    },
    {
        "id": "en_starter_work_120",
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
        ]
    },
    {
        "id": "en_starter_work_121",
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
        ]
    },
    {
        "id": "en_starter_work_122",
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
        ]
    },
    {
        "id": "en_starter_work_123",
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
        ]
    },
    {
        "id": "en_starter_money_payment_021",
        "word": "earn",
        "definitions": [
            {
                "text": "To receive money for work done.",
                "examples": [
                    "She earns a good salary as a project manager."
                ]
            }
        ],
        "subtext": "earn a salary / earn money / earn more / earn enough",
        "classification": "regular",
        "aspect": "action",
        "v2": "earned",
        "v3": "earned",
        "emoji": "💶",
        "form": "verb",
        "group": "regular",
        "transcription": "ərn",
        "auxiliary": "have",
        "v4": "earning",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "spend"
        ]
    },
    {
        "id": "en_starter_people_020",
        "word": "visit",
        "definitions": [
            {
                "text": "To go to see a person or place.",
                "examples": [
                    "She visits her parents every second weekend."
                ]
            }
        ],
        "subtext": "visit family / visit a friend / visit a city / visit regularly",
        "classification": "regular",
        "aspect": "action",
        "v2": "visited",
        "v3": "visited",
        "emoji": "🏘️",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈvɪzɪt",
        "auxiliary": "have",
        "v4": "visiting",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ]
    },
    {
        "id": "en_starter_leisure_activities_024",
        "word": "celebrate",
        "definitions": [
            {
                "text": "To do something enjoyable for a special occasion.",
                "examples": [
                    "They celebrate every work anniversary together."
                ]
            }
        ],
        "subtext": "celebrate a birthday / celebrate success / celebrate together",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebrated",
        "v3": "celebrated",
        "emoji": "🎉",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈsɛləˌbreɪt",
        "auxiliary": "have",
        "v4": "celebrating",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "mourn"
        ]
    },
    {
        "id": "en_starter_illnesses_symptoms_018",
        "word": "hurt",
        "definitions": [
            {
                "text": "To cause pain; or to feel pain.",
                "examples": [
                    "My back hurts after sitting all day."
                ]
            }
        ],
        "subtext": "hurt your back / hurt someone / hurt yourself / it hurts",
        "classification": "irregular",
        "aspect": "both",
        "v2": "hurt",
        "v3": "hurt",
        "emoji": "🤕",
        "form": "verb",
        "group": "regular",
        "transcription": "hərt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "antonyms": [
            "heal"
        ]
    },
    {
        "id": "en_starter_work_124",
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
        ]
    },
    {
        "id": "en_starter_travel_036",
        "word": "book",
        "definitions": [
            {
                "text": "To reserve a place, ticket or service in advance.",
                "examples": [
                    "I always book hotels online."
                ]
            }
        ],
        "subtext": "book a hotel / book a flight / book a table / book in advance",
        "classification": "regular",
        "aspect": "action",
        "v2": "booked",
        "v3": "booked",
        "emoji": "📖",
        "form": "verb",
        "group": "regular",
        "transcription": "bʊk",
        "auxiliary": "have",
        "v4": "booking",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "bōks",
            "origin_meaning": "beech, book"
        },
        "antonyms": [
            "cancel"
        ]
    },
    {
        "id": "en_starter_travel_037",
        "word": "pack",
        "definitions": [
            {
                "text": "To put items into a bag or case for a journey.",
                "examples": [
                    "He packs his bag the night before a trip."
                ]
            }
        ],
        "subtext": "pack a bag / pack a suitcase / pack lightly",
        "classification": "regular",
        "aspect": "action",
        "v2": "packed",
        "v3": "packed",
        "emoji": "🎒",
        "form": "verb",
        "group": "regular",
        "transcription": "pæk",
        "auxiliary": "have",
        "v4": "packing",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "unpack"
        ]
    },
    {
        "id": "en_starter_travel_038",
        "word": "cancel",
        "definitions": [
            {
                "text": "To decide that something planned will not happen.",
                "examples": [
                    "She had to cancel her flight due to illness."
                ]
            }
        ],
        "subtext": "cancel a flight / cancel a booking / cancel a meeting",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelled",
        "v3": "cancelled",
        "emoji": "❌",
        "form": "verb",
        "group": "regular",
        "transcription": "ˈkænsəl",
        "auxiliary": "have",
        "v4": "canceling",
        "lang": "en",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "antonyms": [
            "book"
        ]
    },
    {
        "id": "en_starter_public_transport_009",
        "word": "miss",
        "definitions": [
            {
                "text": "To fail to catch a transport connection; or to feel sad about absence.",
                "examples": [
                    "He missed his train and had to wait an hour."
                ]
            }
        ],
        "subtext": "miss a train / miss a flight / miss someone / miss work",
        "classification": "regular",
        "aspect": "both",
        "v2": "missed",
        "v3": "missed",
        "emoji": "🏃‍♂️",
        "form": "verb",
        "group": "regular",
        "transcription": "mɪs",
        "auxiliary": "have",
        "v4": "missing",
        "lang": "en",
        "level": "starter",
        "theme": "public_transport",
        "sub_theme": null,
        "antonyms": [
            "attend"
        ]
    },
    {
        "id": "en_starter_work_125",
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
        ]
    },
    {
        "id": "en_starter_social_027",
        "word": "thank",
        "emoji": "🙏",
        "subtext": "thank someone / thank you for / many thanks",
        "form": "verb",
        "definitions": [
            {
                "text": "To express gratitude to someone.",
                "examples": [
                    "He thanked the team for their hard work on the project."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "thanked",
        "v3": "thanked",
        "group": "regular",
        "transcription": "θæŋk",
        "auxiliary": "have",
        "v4": "thanking",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "complain"
        ]
    },
    {
        "id": "en_starter_name_greeting_010",
        "word": "introduce",
        "emoji": "🤝",
        "subtext": "introduce yourself / introduce someone / introduce a topic",
        "form": "verb",
        "definitions": [
            {
                "text": "To present someone to another person.",
                "examples": [
                    "She introduced herself at the start of the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "introduced",
        "v3": "introduced",
        "group": "regular",
        "transcription": "ˌɪntrəˈdus",
        "auxiliary": "have",
        "v4": "introducing",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ]
    },
    {
        "id": "en_starter_leisure_activities_025",
        "word": "relax",
        "emoji": "🧘",
        "subtext": "relax at home / relax after work / relax on holiday",
        "form": "verb",
        "definitions": [
            {
                "text": "To stop working and rest; to become less tense.",
                "examples": [
                    "I relax at the weekend and never check emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "relaxed",
        "v3": "relaxed",
        "group": "regular",
        "transcription": "rɪˈlæks",
        "auxiliary": "have",
        "v4": "relaxing",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "work"
        ]
    },
    {
        "id": "en_starter_learning_studying_033",
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
        ]
    },
    {
        "id": "en_starter_work_126",
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
        ]
    },
    {
        "id": "en_starter_work_127",
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
        ]
    },
    {
        "id": "en_starter_work_128",
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
        ]
    },
    {
        "id": "en_starter_giving_opinions_022",
        "word": "choose",
        "emoji": "👉",
        "subtext": "choose between / choose to do / choose carefully / choose a career",
        "form": "verb",
        "definitions": [
            {
                "text": "To select from options.",
                "examples": [
                    "He chose to work part-time to spend more time with family."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "chose",
        "v3": "chosen",
        "group": "regular",
        "transcription": "ʧuz",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ]
    },
    {
        "id": "en_starter_work_129",
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
        ]
    },
    {
        "id": "en_starter_work_130",
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
        ]
    },
    {
        "id": "en_starter_work_131",
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
        ]
    },
    {
        "id": "en_starter_modes_of_transport_022",
        "word": "ride",
        "emoji": "🚲",
        "form": "verb",
        "subtext": "ride a bike / ride a horse",
        "definitions": [
            {
                "text": "To travel on a bike or horse.",
                "examples": [
                    "I ride my bike to work."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rode",
        "v3": "ridden",
        "group": "regular",
        "transcription": "raɪd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "modes_of_transport",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_giving_opinions_023",
        "word": "believe",
        "emoji": "🙏",
        "form": "verb",
        "subtext": "believe in / I believe so",
        "synonyms": [
            "think",
            "trust"
        ],
        "definitions": [
            {
                "text": "To think that something is true.",
                "examples": [
                    "I believe you."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "believed",
        "v3": "believed",
        "group": "regular",
        "transcription": "bɪˈliv",
        "auxiliary": "have",
        "v4": "believing",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "doubt"
        ]
    },
    {
        "id": "en_starter_giving_opinions_024",
        "word": "prefer",
        "emoji": "👉",
        "form": "verb",
        "subtext": "like better / prefer tea to coffee",
        "definitions": [
            {
                "text": "To like one thing more than another.",
                "examples": [
                    "I prefer tea to coffee."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "preferred",
        "v3": "preferred",
        "group": "regular",
        "transcription": "prɪˈfər",
        "auxiliary": "have",
        "v4": "prefering",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "dislike"
        ]
    },
    {
        "id": "en_starter_public_transport_010",
        "word": "catch",
        "emoji": "🧤",
        "form": "verb",
        "subtext": "catch a bus / catch a cold / catch a ball",
        "definitions": [
            {
                "text": "To take hold of something; to get on a bus or train.",
                "examples": [
                    "I need to catch the bus at eight."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caught",
        "v3": "caught",
        "group": "regular",
        "transcription": "kæʧ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "public_transport",
        "sub_theme": null,
        "antonyms": [
            "throw"
        ]
    },
    {
        "id": "en_starter_household_tasks_012",
        "word": "fix",
        "emoji": "🛠️",
        "form": "verb",
        "subtext": "fix a problem / fix a computer",
        "synonyms": [
            "repair"
        ],
        "definitions": [
            {
                "text": "To repair something that is broken.",
                "examples": [
                    "Can you fix my phone?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fixed",
        "v3": "fixed",
        "group": "regular",
        "transcription": "fɪks",
        "auxiliary": "have",
        "v4": "fixing",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "break"
        ]
    },
    {
        "id": "en_starter_work_132",
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
        ]
    },
    {
        "id": "en_starter_money_payment_022",
        "word": "borrow",
        "emoji": "📥",
        "form": "verb",
        "subtext": "take for a short time / borrow a book / borrow money",
        "definitions": [
            {
                "text": "To take something for a short time and then return it.",
                "examples": [
                    "Can I borrow your pen?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "borrowed",
        "v3": "borrowed",
        "group": "regular",
        "transcription": "ˈbɑˌroʊ",
        "auxiliary": "have",
        "v4": "borrowing",
        "lang": "en",
        "level": "starter",
        "theme": "shopping",
        "sub_theme": null,
        "antonyms": [
            "lend"
        ]
    },
    {
        "id": "en_starter_body_047",
        "word": "smell",
        "emoji": "👃",
        "form": "verb",
        "subtext": "smell good / smell the flowers",
        "synonyms": [
            "scent"
        ],
        "definitions": [
            {
                "text": "To notice or recognize something using your nose.",
                "examples": [
                    "I can smell the coffee."
                ]
            }
        ],
        "classification": "both",
        "aspect": "both",
        "v2": "smelled / smelt",
        "v3": "smelled / smelt",
        "group": "regular",
        "transcription": "smɛl",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "antonyms": [
            "stink"
        ]
    },
    {
        "id": "en_starter_tastes_textures_018",
        "word": "taste",
        "emoji": "👅",
        "form": "verb",
        "subtext": "taste good / have a taste",
        "synonyms": [
            "flavor"
        ],
        "definitions": [
            {
                "text": "To sense the flavor of something in your mouth.",
                "examples": [
                    "Taste this soup."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "tasted",
        "v3": "tasted",
        "group": "regular",
        "transcription": "teɪst",
        "auxiliary": "have",
        "v4": "tasting",
        "lang": "en",
        "level": "starter",
        "theme": "tastes_textures",
        "sub_theme": null,
        "antonyms": [
            "swallow"
        ]
    },
    {
        "id": "en_starter_work_133",
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
        ]
    },
    {
        "id": "en_starter_emotions_062",
        "word": "laugh",
        "emoji": "😂",
        "form": "verb",
        "subtext": "laugh at / laugh together",
        "synonyms": [
            "chuckle"
        ],
        "definitions": [
            {
                "text": "To make sounds with your voice because you think something is funny.",
                "examples": [
                    "They were laughing at his joke."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "laughed",
        "v3": "laughed",
        "group": "regular",
        "transcription": "læf",
        "auxiliary": "have",
        "v4": "laughing",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "cry"
        ]
    },
    {
        "id": "en_starter_emotions_063",
        "word": "worry",
        "emoji": "😟",
        "form": "verb",
        "subtext": "worry about / don't worry",
        "synonyms": [
            "fret"
        ],
        "definitions": [
            {
                "text": "To think about problems or unpleasant things that might happen.",
                "examples": [
                    "Don't worry, everything will be fine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "worried",
        "v3": "worried",
        "group": "regular",
        "transcription": "ˈwəri",
        "auxiliary": "have",
        "v4": "worrying",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "relax"
        ]
    },
    {
        "id": "en_starter_giving_opinions_025",
        "word": "sound",
        "emoji": "👂",
        "form": "verb",
        "subtext": "sound like / sound good",
        "synonyms": [
            "seem"
        ],
        "definitions": [
            {
                "text": "To seem like something from what you have heard or read.",
                "examples": [
                    "That sounds like a good idea."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "sounded",
        "v3": "sounded",
        "group": "regular",
        "transcription": "saʊnd",
        "auxiliary": "have",
        "v4": "sounding",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "silence"
        ]
    },
    {
        "id": "en_starter_language_021",
        "word": "spell",
        "emoji": "🔤",
        "form": "verb",
        "subtext": "spell your name / spell correctly",
        "synonyms": [
            "lettering"
        ],
        "definitions": [
            {
                "text": "To say or write the letters of a word in the correct order.",
                "examples": [
                    "How do you spell your name?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "spelled / spelt",
        "v3": "spelled / spelt",
        "group": "regular",
        "transcription": "spɛl",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "misspell"
        ]
    },
    {
        "id": "en_starter_language_022",
        "word": "point",
        "emoji": "☝️",
        "form": "verb",
        "subtext": "point at / to, point to / point at",
        "synonyms": [
            "indicate"
        ],
        "definitions": [
            {
                "text": "To show something by holding out your finger towards it.",
                "examples": [
                    "Point to the window.",
                    "He pointed at the map."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pointed",
        "v3": "pointed",
        "group": "regular",
        "transcription": "pɔɪnt",
        "auxiliary": "have",
        "v4": "pointing",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ]
    },
    {
        "id": "en_starter_language_023",
        "word": "shout",
        "emoji": "📢",
        "form": "verb",
        "subtext": "shout at / don't shout",
        "synonyms": [
            "yell"
        ],
        "definitions": [
            {
                "text": "To say something very loudly.",
                "examples": [
                    "Don't shout in the classroom."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "shouted",
        "v3": "shouted",
        "group": "regular",
        "transcription": "ʃaʊt",
        "auxiliary": "have",
        "v4": "shouting",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "whisper"
        ]
    },
    {
        "id": "en_starter_name_greeting_011",
        "word": "wave",
        "emoji": "👋",
        "form": "verb",
        "subtext": "wave at, wave goodbye / wave hello",
        "synonyms": [
            "greet"
        ],
        "definitions": [
            {
                "text": "To move your hand from side to side in the air to say hello or goodbye.",
                "examples": [
                    "Wave goodbye to your friend."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "waved",
        "v3": "waved",
        "group": "regular",
        "transcription": "weɪv",
        "auxiliary": "have",
        "v4": "waving",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ]
    },
    {
        "id": "en_starter_sports_015",
        "word": "kick",
        "emoji": "🦶",
        "form": "verb",
        "subtext": "kick a ball / kick hard",
        "synonyms": [
            "strike"
        ],
        "definitions": [
            {
                "text": "To hit something with your foot.",
                "examples": [
                    "Kick the ball!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "kicked",
        "v3": "kicked",
        "group": "regular",
        "transcription": "kɪk",
        "auxiliary": "have",
        "v4": "kicking",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ]
    },
    {
        "id": "en_starter_sports_016",
        "word": "throw",
        "emoji": "⚾",
        "form": "verb",
        "subtext": "throw a ball / throw away",
        "synonyms": [
            "toss"
        ],
        "definitions": [
            {
                "text": "To make something move through the air by pushing it out of your hand.",
                "examples": [
                    "Can you throw the ball to me?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "threw",
        "v3": "thrown",
        "group": "regular",
        "transcription": "θroʊ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "catch"
        ]
    },
    {
        "id": "en_starter_sports_017",
        "word": "bounce",
        "emoji": "🏀",
        "form": "verb",
        "subtext": "bounce a ball",
        "synonyms": [
            "rebound",
            "bouncing"
        ],
        "definitions": [
            {
                "text": "To move up or away after hitting a surface.",
                "examples": [
                    "The ball is bouncing."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bounced",
        "v3": "bounced",
        "group": "regular",
        "transcription": "baʊns",
        "auxiliary": "have",
        "v4": "bouncing",
        "lang": "en",
        "level": "starter",
        "theme": "sports",
        "sub_theme": null,
        "antonyms": [
            "stop"
        ]
    },
    {
        "id": "en_starter_leisure_023",
        "word": "paint",
        "emoji": "🎨",
        "form": "verb",
        "subtext": "paint a picture",
        "synonyms": [
            "color",
            "painting"
        ],
        "definitions": [
            {
                "text": "To make a picture using paint.",
                "examples": [
                    "I like to paint flowers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "painted",
        "v3": "painted",
        "group": "regular",
        "transcription": "peɪnt",
        "auxiliary": "have",
        "v4": "painting",
        "lang": "en",
        "level": "starter",
        "theme": "leisure",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ]
    },
    {
        "id": "en_starter_leisure_activities_026",
        "word": "hop",
        "emoji": "🐇",
        "form": "verb",
        "subtext": "hop around / hop like a rabbit",
        "synonyms": [
            "jump"
        ],
        "definitions": [
            {
                "text": "To jump on one foot.",
                "examples": [
                    "Can you hop like a rabbit?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hopped",
        "v3": "hopped",
        "group": "regular",
        "transcription": "hɑp",
        "auxiliary": "have",
        "v4": "hoping",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_leisure_activities_027",
        "word": "skip",
        "emoji": "🏃",
        "form": "verb",
        "subtext": "skip rope",
        "synonyms": [
            "jump",
            "skipping"
        ],
        "definitions": [
            {
                "text": "To move along by jumping from one foot to the other.",
                "examples": [
                    "The children are skipping in the playground."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "skipped",
        "v3": "skipped",
        "group": "regular",
        "transcription": "skɪp",
        "auxiliary": "have",
        "v4": "skiping",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "walk"
        ]
    },
    {
        "id": "en_starter_numbers_013",
        "word": "count",
        "emoji": "🔢",
        "form": "verb",
        "subtext": "count to ten / count numbers",
        "synonyms": [
            "calculate"
        ],
        "definitions": [
            {
                "text": "To say numbers in order.",
                "examples": [
                    "Can you count from one to ten?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "counted",
        "v3": "counted",
        "group": "regular",
        "transcription": "kaʊnt",
        "auxiliary": "have",
        "v4": "counting",
        "lang": "en",
        "level": "starter",
        "theme": "numbers",
        "sub_theme": null,
        "antonyms": [
            "estimate"
        ]
    },
    {
        "id": "en_starter_language_024",
        "word": "tick",
        "emoji": "✅",
        "form": "verb",
        "subtext": "tick the box / tick correctly",
        "synonyms": [
            "check"
        ],
        "definitions": [
            {
                "text": "To put a mark (✓) next to something to show it is correct.",
                "examples": [
                    "Tick the correct answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ticked",
        "v3": "ticked",
        "group": "regular",
        "transcription": "tɪk",
        "auxiliary": "have",
        "v4": "ticking",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "cross"
        ]
    },
    {
        "id": "en_starter_language_025",
        "word": "cross",
        "emoji": "❌",
        "form": "verb",
        "subtext": "cross out / cross the answer",
        "synonyms": [
            "x-mark"
        ],
        "definitions": [
            {
                "text": "To put a mark (X) next to something to show it is wrong.",
                "examples": [
                    "Cross the wrong answer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "crossed",
        "v3": "crossed",
        "group": "regular",
        "transcription": "krɔs",
        "auxiliary": "have",
        "v4": "crossing",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "tick"
        ]
    },
    {
        "id": "en_starter_language_026",
        "word": "colour",
        "emoji": "🖍️",
        "form": "verb",
        "subtext": "colour the picture / use colours",
        "synonyms": [
            "color"
        ],
        "definitions": [
            {
                "text": "To use a pen or pencil to put colour on a picture.",
                "examples": [
                    "Colour the picture blue."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coloured",
        "v3": "coloured",
        "group": "regular",
        "transcription": "ˈkələr",
        "auxiliary": "have",
        "v4": "colouring",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ]
    },
    {
        "id": "en_starter_work_134",
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
        ]
    },
    {
        "id": "en_starter_work_135",
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
        ]
    },
    {
        "id": "en_starter_emotions_064",
        "word": "fight",
        "emoji": "⚔️",
        "form": "verb",
        "subtext": "fight for / a big fight",
        "synonyms": [
            "battle"
        ],
        "definitions": [
            {
                "text": "To use physical force to try to hurt someone or win something.",
                "examples": [
                    "The two boys are fighting."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fought",
        "v3": "fought",
        "group": "regular",
        "transcription": "faɪt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null,
        "antonyms": [
            "make peace"
        ]
    },
    {
        "id": "en_starter_toys_games_010",
        "word": "hide",
        "emoji": "🙈",
        "subtext": "hide and seek / hide from someone / hide something",
        "form": "verb",
        "definitions": [
            {
                "text": "To put something or someone in a place where they cannot be seen or found.",
                "examples": [
                    "He is hiding behind the door."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hid",
        "v3": "hidden",
        "group": "regular",
        "transcription": "haɪd",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "show"
        ]
    },
    {
        "id": "en_starter_toys_games_011",
        "word": "seek",
        "emoji": "🔍",
        "form": "verb",
        "subtext": "hide and seek / seek help",
        "synonyms": [
            "look for"
        ],
        "definitions": [
            {
                "text": "To try to find or get something.",
                "examples": [
                    "They are playing hide and seek."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "sought",
        "v3": "sought",
        "group": "regular",
        "transcription": "sik",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "toys_games",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ]
    },
    {
        "id": "en_starter_technology_026",
        "word": "ring",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "regular",
        "transcription": "rɪŋ",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "be silent"
        ]
    },
    {
        "id": "en_starter_using_smartphone_010",
        "word": "text",
        "emoji": "📱",
        "form": "verb",
        "subtext": "text someone / send a text",
        "synonyms": [
            "message"
        ],
        "definitions": [
            {
                "text": "To send a message from a mobile phone.",
                "examples": [
                    "Text me when you arrive."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "texted",
        "v3": "texted",
        "group": "regular",
        "transcription": "tɛkst",
        "auxiliary": "have",
        "v4": "texting",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null,
        "antonyms": [
            "call"
        ]
    },
    {
        "id": "en_starter_language_027",
        "word": "whisper",
        "emoji": "🤫",
        "form": "verb",
        "subtext": "whisper a secret",
        "synonyms": [
            "murmur",
            "speak softly"
        ],
        "definitions": [
            {
                "text": "To speak very quietly so that other people cannot hear you.",
                "examples": [
                    "She whispered the answer to me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "whispered",
        "v3": "whispered",
        "group": "regular",
        "transcription": "ˈwɪspər",
        "auxiliary": "have",
        "v4": "whispering",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "shout"
        ]
    },
    {
        "id": "en_starter_five_senses_002",
        "word": "touch",
        "emoji": "🫱",
        "form": "verb",
        "subtext": "don't touch / touch screen",
        "synonyms": [
            "feel"
        ],
        "definitions": [
            {
                "text": "To put your hand or another part of your body on something.",
                "examples": [
                    "Don't touch the wet paint!"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "touched",
        "v3": "touched",
        "group": "regular",
        "transcription": "təʧ",
        "auxiliary": "have",
        "v4": "touching",
        "lang": "en",
        "level": "starter",
        "theme": "five_senses",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_026",
        "word": "let",
        "emoji": "🔓",
        "subtext": "let someone go / let it be / let someone know",
        "form": "verb",
        "definitions": [
            {
                "text": "To allow something to happen or someone to do something.",
                "examples": [
                    "Let me help you with those bags.",
                    "She let the dog out into the garden."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "let",
        "v3": "let",
        "group": "regular",
        "transcription": "lɛt",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_work_136",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_011",
        "word": "email",
        "emoji": "📧",
        "subtext": "email someone / send an email / reply by email",
        "form": "verb",
        "definitions": [
            {
                "text": "To send a message using the internet.",
                "examples": [
                    "Email me the details.",
                    "I'll email you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emailed",
        "v3": "emailed",
        "group": "regular",
        "transcription": "iˈmeɪl",
        "auxiliary": "have",
        "v4": "emailing",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_012",
        "word": "phone",
        "emoji": "📞",
        "subtext": "phone someone / phone back / on the phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To call someone using a telephone.",
                "examples": [
                    "I'll phone you later.",
                    "He phoned his mother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phoned",
        "v3": "phoned",
        "group": "regular",
        "transcription": "foʊn",
        "auxiliary": "have",
        "v4": "phoning",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null,
        "antonyms": [
            "text"
        ]
    },
    {
        "id": "en_starter_nature_048",
        "word": "climb",
        "emoji": "🧗",
        "subtext": "climb a mountain / climb a hill / climb stairs / climb up",
        "form": "verb",
        "definitions": [
            {
                "text": "To go up something using your hands and feet.",
                "examples": [
                    "We climbed the hill to see the view.",
                    "The cat climbed the tree."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "climbed",
        "v3": "climbed",
        "group": "regular",
        "transcription": "klaɪm",
        "auxiliary": "have",
        "v4": "climbing",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "descend"
        ]
    },
    {
        "id": "en_starter_work_137",
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
        ]
    },
    {
        "id": "en_starter_work_138",
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
        ]
    },
    {
        "id": "en_starter_technology_027",
        "word": "turn on",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn",
        "auxiliary": "have",
        "v4": "turn oning",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn off"
        ]
    },
    {
        "id": "en_starter_technology_028",
        "word": "turn off",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf",
        "auxiliary": "have",
        "v4": "turn offing",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn on"
        ]
    },
    {
        "id": "en_starter_social_028",
        "word": "welcome",
        "emoji": "👋",
        "form": "verb",
        "subtext": "welcome someone / welcome home",
        "definitions": [
            {
                "text": "To greet someone who has just arrived at a place.",
                "examples": [
                    "We welcomed the guests at the door."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "welcomed",
        "v3": "welcomed",
        "group": "regular",
        "transcription": "ˈwɛlkəm",
        "auxiliary": "have",
        "v4": "welcoming",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "reject"
        ]
    },
    {
        "id": "en_starter_leisure_activities_028",
        "word": "act",
        "emoji": "🎭",
        "form": "verb",
        "subtext": "act in a play / act quickly",
        "definitions": [
            {
                "text": "To perform in a play or movie.",
                "examples": [
                    "He acts in the school play."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acted",
        "v3": "acted",
        "group": "regular",
        "transcription": "ækt",
        "auxiliary": "have",
        "v4": "acting",
        "lang": "en",
        "level": "starter",
        "theme": "leisure_activities",
        "sub_theme": null,
        "antonyms": [
            "be natural"
        ]
    },
    {
        "id": "en_starter_work_139",
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
        ]
    },
    {
        "id": "en_starter_household_tasks_013",
        "word": "fill",
        "emoji": "🫗",
        "form": "verb",
        "subtext": "fill a glass / fill in a form",
        "definitions": [
            {
                "text": "To make something full.",
                "examples": [
                    "Please fill the glass with water."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "filled",
        "v3": "filled",
        "group": "regular",
        "transcription": "fɪl",
        "auxiliary": "have",
        "v4": "filling",
        "lang": "en",
        "level": "starter",
        "theme": "household_tasks",
        "sub_theme": null,
        "antonyms": [
            "empty"
        ]
    },
    {
        "id": "en_starter_items_of_clothing_025",
        "word": "fit",
        "emoji": "👕",
        "form": "verb",
        "subtext": "fit well / does it fit?",
        "definitions": [
            {
                "text": "To be the right size or shape for someone or something.",
                "examples": [
                    "These shoes don't fit me."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "fitted",
        "v3": "fitted",
        "group": "regular",
        "transcription": "fɪt",
        "auxiliary": "have",
        "v4": "fiting",
        "lang": "en",
        "level": "starter",
        "theme": "items_of_clothing",
        "sub_theme": null,
        "antonyms": [
            "unfit"
        ]
    },
    {
        "id": "en_starter_leisure_024",
        "word": "join",
        "emoji": "🤝",
        "form": "verb",
        "subtext": "join a club / join us",
        "definitions": [
            {
                "text": "To become a member of a group or organization.",
                "examples": [
                    "I want to join the tennis club."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "joined",
        "v3": "joined",
        "group": "regular",
        "transcription": "ʤɔɪn",
        "auxiliary": "have",
        "v4": "joining",
        "lang": "en",
        "level": "starter",
        "theme": "leisure",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ]
    },
    {
        "id": "en_starter_work_140",
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
        ]
    },
    {
        "id": "en_starter_nature_049",
        "word": "pick",
        "emoji": "🧺",
        "form": "verb",
        "subtext": "pick flowers / pick up",
        "definitions": [
            {
                "text": "To take flowers, fruit, etc. from the plant where they are growing.",
                "examples": [
                    "They are picking apples in the garden."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "picked",
        "v3": "picked",
        "group": "regular",
        "transcription": "pɪk",
        "auxiliary": "have",
        "v4": "picking",
        "lang": "en",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "antonyms": [
            "drop"
        ]
    },
    {
        "id": "en_starter_social_029",
        "word": "wish",
        "emoji": "🤞",
        "form": "verb",
        "subtext": "wish for / I wish",
        "definitions": [
            {
                "text": "To want something to happen or to be true even though it is unlikely.",
                "examples": [
                    "I wish it was summer."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "wished",
        "v3": "wished",
        "group": "regular",
        "transcription": "wɪʃ",
        "auxiliary": "have",
        "v4": "wishing",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "fear"
        ]
    },
    {
        "id": "en_starter_leisure_025",
        "word": "collect",
        "emoji": "📦",
        "form": "verb",
        "subtext": "collect things / collect stamps",
        "definitions": [
            {
                "text": "To bring things together from different places.",
                "examples": [
                    "She collects stamps."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "collected",
        "v3": "collected",
        "group": "regular",
        "transcription": "kəˈlɛkt",
        "auxiliary": "have",
        "v4": "collecting",
        "lang": "en",
        "level": "starter",
        "theme": "leisure",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ]
    },
    {
        "id": "en_starter_giving_opinions_027",
        "word": "describe",
        "emoji": "💬",
        "form": "verb",
        "subtext": "describe something / describe a person",
        "definitions": [
            {
                "text": "To say or write what someone or something is like.",
                "examples": [
                    "Can you describe your house?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "described",
        "v3": "described",
        "group": "regular",
        "transcription": "dɪˈskraɪb",
        "auxiliary": "have",
        "v4": "describing",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null,
        "antonyms": [
            "summarize"
        ]
    },
    {
        "id": "en_starter_body_048",
        "word": "breathe",
        "emoji": "🫁",
        "form": "verb",
        "definitions": [
            {
                "text": "To take air into your lungs and send it out again.",
                "examples": [
                    "Breathe deeply."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "breathed",
        "v3": "breathed",
        "group": "regular",
        "subtext": "breathe",
        "synonyms": [
            "inhale",
            "exhale"
        ],
        "transcription": "brið",
        "auxiliary": "have",
        "v4": "breathing",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_illnesses_symptoms_019",
        "word": "cough",
        "emoji": "😷",
        "form": "verb",
        "definitions": [
            {
                "text": "To force air out of your lungs with a sudden loud noise.",
                "examples": [
                    "He is coughing because he is ill."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "coughed",
        "v3": "coughed",
        "group": "regular",
        "subtext": "have a cough",
        "transcription": "kɔf",
        "auxiliary": "have",
        "v4": "coughing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null
    },
    {
        "id": "en_starter_illnesses_symptoms_020",
        "word": "sneeze",
        "emoji": "🤧",
        "form": "verb",
        "definitions": [
            {
                "text": "To suddenly force air out through your nose and mouth with a loud noise.",
                "examples": [
                    "Bless you! Did you sneeze?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sneezed",
        "v3": "sneezed",
        "group": "regular",
        "subtext": "sneeze",
        "synonyms": [
            "atchoo!"
        ],
        "transcription": "sniz",
        "auxiliary": "have",
        "v4": "sneezing",
        "lang": "en",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_049",
        "word": "yawn",
        "emoji": "🥱",
        "form": "verb",
        "definitions": [
            {
                "text": "To open your mouth wide and take a deep breath because you are tired.",
                "examples": [
                    "She yawned during the meeting."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "yawned",
        "v3": "yawned",
        "group": "regular",
        "subtext": "yawn",
        "synonyms": [
            "feel sleepy"
        ],
        "transcription": "jɔn",
        "auxiliary": "have",
        "v4": "yawning",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_028",
        "word": "explain",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ɪkˈspleɪn",
        "definitions": [
            {
                "text": "To make something clear or easy to understand by describing or giving information about it.",
                "examples": [
                    "Can you explain this rule?",
                    "The teacher explained the lesson."
                ]
            }
        ],
        "v2": "explained",
        "v3": "explained",
        "classification": "regular",
        "group": "regular",
        "subtext": "explain something to someone",
        "auxiliary": "have",
        "v4": "explaining",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_work_141",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_028",
        "word": "depend",
        "emoji": "⚖️",
        "form": "verb",
        "transcription": "dɪˈpend",
        "definitions": [
            {
                "text": "To be decided by or to change according to something else.",
                "examples": [
                    "It depends on the weather.",
                    "Our plans depend on your answer."
                ]
            }
        ],
        "v2": "depended",
        "v3": "depended",
        "classification": "regular",
        "group": "regular",
        "subtext": "depend ON someone/something",
        "auxiliary": "have",
        "v4": "depending",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_031",
        "word": "belong",
        "emoji": "🏠",
        "form": "verb",
        "transcription": "🇬🇧 bɪˈlɒŋ | 🇺🇸 bɪˈlɑːŋ",
        "definitions": [
            {
                "text": "To be the property of someone.",
                "examples": [
                    "This book belongs to me.",
                    "Who does this bag belong to?"
                ]
            }
        ],
        "v2": "belonged",
        "v3": "belonged",
        "classification": "regular",
        "group": "regular",
        "subtext": "belong TO someone/something",
        "auxiliary": "have",
        "v4": "belonging",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_029",
        "word": "can",
        "emoji": "💪",
        "form": "verb",
        "transcription": "kæn",
        "definitions": [
            {
                "text": "To be able to do something.",
                "examples": [
                    "I can speak English.",
                    "Can you help me?"
                ]
            }
        ],
        "v2": "could",
        "v3": "been able to",
        "classification": "irregular",
        "aspect": "stative",
        "group": "regular",
        "subtext": "ability, permission",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_030",
        "word": "must",
        "emoji": "⚠️",
        "form": "verb",
        "transcription": "mʌst",
        "definitions": [
            {
                "text": "Used to say that something is necessary or very important.",
                "examples": [
                    "I must go now.",
                    "You must finish your work."
                ]
            }
        ],
        "v2": "had to",
        "v3": "had to",
        "classification": "irregular",
        "aspect": "stative",
        "group": "regular",
        "subtext": "necessity, obligation",
        "auxiliary": "have",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    }
];
    const lang = "en";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();