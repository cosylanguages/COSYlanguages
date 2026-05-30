(function() {
    const data = [
    {
        "id": "en_starter_people_009",
        "word": "person",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "people",
        "numberPlural": "2 person",
        "answer": "two people",
        "transcription": "ˈpɜːsn",
        "definitions": [
            {
                "text": "A human being.",
                "examples": [
                    "She is a nice person."
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_033",
        "word": "man",
        "numberPlural": "2 man",
        "answer": "two men",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "men",
        "definitions": [
            {
                "text": "An adult male person.",
                "examples": [
                    "That man is my teacher.",
                    "A tall man is standing there.",
                    "That man is my boss."
                ]
            }
        ],
        "subtext": "related to physical appearance",
        "opposite": null,
        "transcription": "mæn",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_034",
        "word": "woman",
        "numberPlural": "2 woman",
        "answer": "two women",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "women",
        "definitions": [
            {
                "text": "An adult female person.",
                "examples": [
                    "She is a very strong woman.",
                    "There are three women in the office.",
                    "That woman is a doctor."
                ]
            }
        ],
        "subtext": "related to physical appearance",
        "opposite": null,
        "transcription": "ˈwʊmən",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_marital_status_003",
        "word": "partner",
        "emoji": "💑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "partners",
        "subtext": "husband, wife, boyfriend, girlfriend",
        "definitions": [
            {
                "text": "The person you live with or are in a relationship with.",
                "examples": [
                    "My partner works here."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈpɑrtnər",
        "lang": "en",
        "level": "starter",
        "theme": "marital_status",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_022",
        "word": "stress",
        "emoji": "😫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "under stress, a lot of stress",
        "definitions": [
            {
                "text": "A feeling of worry caused by a difficult situation.",
                "examples": [
                    "I have a lot of stress at work."
                ]
            }
        ],
        "opposite": null,
        "transcription": "strɛs",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_001",
        "word": "hello",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "opposite": null,
        "definitions": [
            {
                "text": "A common greeting used when meeting someone.",
                "examples": [
                    "Hello! How are you?"
                ]
            }
        ],
        "subtext": "related to name greeting",
        "transcription": "hɛˈloʊ",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_002",
        "word": "goodbye",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "opposite": null,
        "definitions": [
            {
                "text": "A common greeting used when leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "subtext": "related to name greeting",
        "transcription": "ˌgʊdˈbaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_012",
        "word": "please",
        "emoji": "🙏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to be polite when asking for something.",
                "examples": [
                    "A coffee, please."
                ]
            }
        ],
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "pliz",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_013",
        "word": "thank you",
        "emoji": "🙏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Used to show gratitude.",
                "examples": [
                    "Thank you for the help."
                ]
            }
        ],
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "θæŋk ju",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_003",
        "word": "name",
        "emoji": "🆔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "What a person or thing is called.",
                "examples": [
                    "My name is John."
                ]
            }
        ],
        "subtext": "related to name greeting",
        "opposite": null,
        "transcription": "neɪm",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "namô",
            "origin_meaning": "name"
        }
    },
    {
        "id": "en_starter_people_010",
        "word": "boy",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boys",
        "opposite": null,
        "oppositeEmoji": "👧",
        "definitions": [
            {
                "text": "A male child.",
                "examples": [
                    "The boy is playing with a ball."
                ]
            }
        ],
        "subtext": "related to people",
        "transcription": "bɔɪ",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_011",
        "word": "girl",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "girls",
        "opposite": null,
        "oppositeEmoji": "👦",
        "definitions": [
            {
                "text": "A female child.",
                "examples": [
                    "She is a clever girl."
                ]
            }
        ],
        "subtext": "related to people",
        "transcription": "gərl",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_marital_status_004",
        "word": "boyfriend",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "boyfriends",
        "opposite": null,
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A man with whom someone has a romantic relationship.",
                "examples": [
                    "Her boyfriend lives in London."
                ]
            }
        ],
        "subtext": "related to marital status",
        "transcription": "ˈbɔɪˌfrɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "marital_status",
        "sub_theme": null
    },
    {
        "id": "en_starter_marital_status_005",
        "word": "girlfriend",
        "emoji": "🧑‍🤝‍🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "girlfriends",
        "opposite": null,
        "oppositeEmoji": "🧑‍🤝‍🧑",
        "definitions": [
            {
                "text": "A woman with whom someone has a romantic relationship.",
                "examples": [
                    "His girlfriend is a doctor."
                ]
            }
        ],
        "subtext": "related to marital status",
        "transcription": "ˈgərlˌfrɛnd",
        "lang": "en",
        "level": "starter",
        "theme": "marital_status",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_012",
        "word": "adult",
        "emoji": "🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "adults",
        "opposite": "child",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "A person who is fully grown.",
                "examples": [
                    "Tickets are cheaper for children than for adults."
                ]
            }
        ],
        "subtext": "related to people",
        "transcription": "ˈædəlt",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_014",
        "word": "advice",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "An opinion that someone gives you about what you should do.",
                "examples": [
                    "Can you give me some advice?"
                ]
            }
        ],
        "subtext": "related to greetings social phrases",
        "opposite": null,
        "transcription": "ədˈvaɪs",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_age_001",
        "word": "age",
        "emoji": "🎂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ages",
        "definitions": [
            {
                "text": "The number of years that someone has lived.",
                "examples": [
                    "What is your age?"
                ]
            }
        ],
        "subtext": "related to age",
        "opposite": null,
        "transcription": "eɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "age",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_021",
        "word": "birthday",
        "emoji": "🎂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "birthdays",
        "definitions": [
            {
                "text": "The day on which someone was born.",
                "examples": [
                    "When is your birthday?"
                ]
            }
        ],
        "subtext": "related to personal identity",
        "opposite": null,
        "transcription": "ˈbərθˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_basic_intensifiers_001",
        "word": "really",
        "emoji": "‼️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Very; truly.",
                "examples": [
                    "The coffee is really hot.",
                    "I really like this song."
                ]
            }
        ],
        "subtext": "related to basic intensifiers",
        "opposite": null,
        "transcription": "ˈrɪli",
        "lang": "en",
        "level": "starter",
        "theme": "basic_intensifiers",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_013",
        "word": "someone",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "A person who is not named.",
                "examples": [
                    "Someone is at the door."
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈsəmˌwən",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_014",
        "word": "everyone",
        "emoji": "👥",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Every person.",
                "examples": [
                    "Hello everyone!"
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈɛvriˌwən",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_022",
        "word": "life",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lives",
        "definitions": [
            {
                "text": "The period between birth and death.",
                "examples": [
                    "She has a busy life."
                ]
            }
        ],
        "subtext": "related to personal identity",
        "opposite": null,
        "transcription": "laɪf",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_023",
        "word": "language",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "languages",
        "subtext": "foreign language, speak a language",
        "definitions": [
            {
                "text": "The system of communication used by people in a particular country.",
                "examples": [
                    "How many languages do you speak?",
                    "English is a global language."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈlæŋɡwɪdʒ",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_024",
        "word": "first name",
        "emoji": "🆔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "first names",
        "opposite": null,
        "subtext": "legal name",
        "synonyms": [
            "given name"
        ],
        "definitions": [
            {
                "text": "The name that was given to you when you were born and that comes before your family name.",
                "examples": [
                    "My first name is David.",
                    "Please write your first name here."
                ]
            }
        ],
        "transcription": "fɜːst neɪm",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_025",
        "word": "surname",
        "emoji": "🆔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "surnames",
        "opposite": null,
        "subtext": "last name, family name",
        "definitions": [
            {
                "text": "The name that you share with other members of your family.",
                "examples": [
                    "His surname is Smith.",
                    "What is your surname?"
                ]
            }
        ],
        "transcription": "ˈsɜːneɪm",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_004",
        "word": "idea",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ideas",
        "subtext": "good idea",
        "definitions": [
            {
                "text": "A thought or a plan.",
                "examples": [
                    "I have a good idea."
                ]
            }
        ],
        "opposite": null,
        "transcription": "aɪˈdiə",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_005",
        "word": "opinion",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "opinions",
        "subtext": "in my opinion",
        "definitions": [
            {
                "text": "What you think about something or someone.",
                "examples": [
                    "What is your opinion about the new office?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "əˈpɪnjən",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_015",
        "word": "teenager",
        "emoji": "🧑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "teenagers",
        "definitions": [
            {
                "text": "A person who is between 13 and 19 years old.",
                "examples": [
                    "He is a typical teenager."
                ]
            }
        ],
        "subtext": "related to people",
        "opposite": null,
        "transcription": "ˈtiˌneɪʤər",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_015",
        "word": "excuse me",
        "emoji": "👋",
        "form": "phrase",
        "subtext": "excuse me",
        "synonyms": [
            "pardon me"
        ],
        "definitions": [
            {
                "text": "A polite way of starting to talk to someone you do not know.",
                "examples": [
                    "Excuse me, is this the way to the station?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ɪkˈskjuz mi",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_004",
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
        "group": "irregular",
        "opposite": "become",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "beun",
            "origin_meaning": "to be"
        }
    },
    {
        "id": "en_starter_social_016",
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
        "group": "irregular",
        "opposite": "listen",
        "transcription": "seɪ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_017",
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
        "group": "irregular",
        "opposite": "be silent",
        "transcription": "spik",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_006",
        "word": "think",
        "emoji": "💭",
        "subtext": "think about / of, think about / think of / think it is / think carefully",
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
        "group": "irregular",
        "opposite": "feel",
        "transcription": "θɪŋk",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_023",
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
        "opposite": "refuse",
        "transcription": "wɔnt",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_024",
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
        "opposite": "have",
        "transcription": "nid",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_025",
        "word": "like",
        "emoji": "👍",
        "subtext": "like work / like to travel / like someone / like the idea",
        "opposite": null,
        "oppositeEmoji": "👎",
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
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_026",
        "word": "dislike",
        "emoji": "👎",
        "subtext": "not like / dislike doing",
        "opposite": "prefer",
        "oppositeEmoji": "👍",
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
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_027",
        "word": "love",
        "emoji": "❤️",
        "subtext": "love someone / love doing / love a place / love the idea",
        "opposite": "hate",
        "oppositeEmoji": "😡",
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
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_028",
        "word": "hate",
        "emoji": "😡",
        "subtext": "hate doing / hate someone / hate meetings / hate commuting",
        "opposite": "love",
        "oppositeEmoji": "❤️",
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
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_029",
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
        "opposite": "fear",
        "transcription": "hoʊp",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_007",
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
        "opposite": "hesitate",
        "transcription": "ˌdɪˈsaɪd",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_030",
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
        "opposite": "hate",
        "transcription": "ˌɛnˈʤɔɪ",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_035",
        "word": "look",
        "emoji": "👀",
        "subtext": "look at / for, look at / look for / look like / look happy",
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
        "opposite": "ignore",
        "transcription": "lʊk",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_008",
        "word": "agree",
        "emoji": "👍",
        "subtext": "agree with someone / agree to do / agree on / I agree",
        "opposite": "disagree",
        "oppositeEmoji": "👎",
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
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_036",
        "word": "smile",
        "emoji": "😊",
        "subtext": "smile at someone / a big smile / smile broadly",
        "opposite": "cry",
        "oppositeEmoji": "😢",
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
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_surprise_interest_003",
        "word": "cry",
        "emoji": "😢",
        "subtext": "cry for help / cry out / cry about something",
        "synonyms": [
            "start crying"
        ],
        "opposite": "smile",
        "oppositeEmoji": "😊",
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
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_018",
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
        "opposite": "complain",
        "transcription": "θæŋk",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_005",
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
        "opposite": "hide",
        "transcription": "ˌɪntrəˈdus",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_009",
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
        "group": "irregular",
        "opposite": "reject",
        "transcription": "ʧuz",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_010",
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
        "opposite": "doubt",
        "transcription": "bɪˈliv",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_011",
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
        "opposite": "dislike",
        "transcription": "prɪˈfər",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_031",
        "word": "laugh",
        "emoji": "😂",
        "form": "verb",
        "opposite": "cry",
        "oppositeEmoji": "😢",
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
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_032",
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
        "opposite": "relax",
        "transcription": "ˈwəri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_012",
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
        "opposite": "silence",
        "transcription": "saʊnd",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_006",
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
        "opposite": "ignore",
        "transcription": "weɪv",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_033",
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
        "group": "irregular",
        "opposite": "make peace",
        "transcription": "faɪt",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_013",
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
        "group": "irregular",
        "opposite": null,
        "transcription": "lɛt",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_019",
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
        "opposite": "reject",
        "transcription": "ˈwɛlkəm",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_020",
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
        "opposite": "fear",
        "transcription": "wɪʃ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_014",
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
        "opposite": "summarize",
        "transcription": "dɪˈskraɪb",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_015",
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
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_026",
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
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_034",
        "word": "happy",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "sad",
        "oppositeEmoji": "😢",
        "subtext": "feel happy / happy with something / a happy day",
        "synonyms": [
            "glad",
            "joyful",
            "cheerful"
        ],
        "definitions": [
            {
                "text": "Feeling pleasure or joy.",
                "examples": [
                    "I am happy today."
                ]
            },
            {
                "text": "Feeling pleasure or satisfaction.",
                "examples": [
                    "She is happy in her new role."
                ]
            }
        ],
        "comparative": "happier",
        "superlative": "the happiest",
        "transcription": "ˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_035",
        "word": "tired",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "energetic",
        "oppositeEmoji": "⚡",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
        "definitions": [
            {
                "text": "Needing rest or sleep.",
                "examples": [
                    "I am very tired after work.",
                    "I feel tired after a long week."
                ]
            }
        ],
        "comparative": "more tired",
        "superlative": "the most tired",
        "transcription": "taɪərd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_036",
        "word": "thirsty",
        "emoji": "🥤",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Needing or wanting to drink.",
                "examples": [
                    "I am thirsty — can I have some water?"
                ]
            }
        ],
        "subtext": "feel thirsty",
        "synonyms": [
            "parched",
            "dehydrated"
        ],
        "comparative": "thirstier",
        "superlative": "the thirstiest",
        "transcription": "ˈθərsti",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_037",
        "word": "relaxed",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stressed",
        "oppositeEmoji": "😫",
        "subtext": "feeling relaxed",
        "synonyms": [
            "calm",
            "peaceful",
            "chilled"
        ],
        "definitions": [
            {
                "text": "Calm; not worried or stressed.",
                "examples": [
                    "I feel relaxed at the weekend."
                ]
            }
        ],
        "comparative": "more relaxed",
        "superlative": "the most relaxed",
        "transcription": "rɪˈlækst",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_038",
        "word": "worried",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "worried about / deeply worried",
        "synonyms": [
            "anxious",
            "nervous",
            "uneasy"
        ],
        "definitions": [
            {
                "text": "Feeling anxious about something that might happen.",
                "examples": [
                    "She is worried about her job."
                ]
            }
        ],
        "comparative": "more worried",
        "superlative": "the most worried",
        "transcription": "ˈwərid",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_039",
        "word": "sad",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "feel sad / a sad situation / deeply sad",
        "synonyms": [
            "unhappy",
            "miserable",
            "gloomy"
        ],
        "definitions": [
            {
                "text": "Feeling unhappy or sorrowful.",
                "examples": [
                    "He was sad to leave the company."
                ]
            }
        ],
        "comparative": "sadder",
        "superlative": "the saddest",
        "emoji": "😢",
        "transcription": "sæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_040",
        "word": "hungry",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤰",
        "subtext": "feel hungry / very hungry / go hungry",
        "synonyms": [
            "starving",
            "famished"
        ],
        "definitions": [
            {
                "text": "Needing food.",
                "examples": [
                    "I am hungry — it is already two o'clock."
                ]
            }
        ],
        "comparative": "hungrier",
        "superlative": "the hungriest",
        "emoji": "🍔",
        "transcription": "ˈhəŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_041",
        "word": "angry",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "feel angry / angry with someone / very angry",
        "synonyms": [
            "mad",
            "furious",
            "annoyed"
        ],
        "definitions": [
            {
                "text": "Feeling strong displeasure.",
                "examples": [
                    "She was angry about the decision."
                ]
            }
        ],
        "comparative": "angrier",
        "superlative": "the angriest",
        "emoji": "😠",
        "transcription": "ˈæŋgri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_042",
        "word": "bored",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🧐",
        "subtext": "feel bored / bored with / easily bored",
        "synonyms": [
            "uninterested",
            "weary"
        ],
        "definitions": [
            {
                "text": "Feeling uninterested or restless.",
                "examples": [
                    "He feels bored in long meetings."
                ]
            }
        ],
        "comparative": "more bored",
        "superlative": "the most bored",
        "emoji": "😴",
        "transcription": "bɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_043",
        "word": "excited",
        "form": "adjective",
        "opposite": "bored",
        "oppositeEmoji": "😴",
        "subtext": "feel excited / excited about / very excited",
        "definitions": [
            {
                "text": "Feeling enthusiasm and eagerness.",
                "examples": [
                    "She is excited about her new job."
                ]
            }
        ],
        "comparative": "more excited",
        "superlative": "the most excited",
        "emoji": "🤩",
        "transcription": "ɪkˈsaɪtɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_044",
        "word": "afraid",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "synonyms": [
            "scared",
            "frightened",
            "terrified"
        ],
        "definitions": [
            {
                "text": "Feeling fear.",
                "examples": [
                    "He is afraid of making mistakes."
                ]
            }
        ],
        "comparative": "more afraid",
        "superlative": "the most afraid",
        "emoji": "😨",
        "transcription": "əˈfreɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_045",
        "word": "sorry",
        "form": "adjective",
        "opposite": null,
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Feeling regret or sadness.",
                "examples": [
                    "She is sorry for the delay."
                ]
            }
        ],
        "comparative": "sorrier",
        "superlative": "the sorriest",
        "emoji": "🙏",
        "transcription": "ˈsɑri",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_046",
        "word": "unhappy",
        "form": "adjective",
        "opposite": "happy",
        "oppositeEmoji": "😊",
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "synonyms": [
            "sad",
            "miserable"
        ],
        "definitions": [
            {
                "text": "Not feeling pleased; dissatisfied.",
                "examples": [
                    "He is unhappy with his current salary."
                ]
            }
        ],
        "comparative": "unhappier",
        "superlative": "the unhappiest",
        "emoji": "😢",
        "transcription": "ənˈhæpi",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_047",
        "word": "nervous",
        "form": "adjective",
        "opposite": "confident",
        "oppositeEmoji": "🦁",
        "subtext": "feel nervous / nervous about / very nervous",
        "synonyms": [
            "anxious",
            "worried"
        ],
        "definitions": [
            {
                "text": "Feeling anxious or uneasy.",
                "examples": [
                    "He was nervous before the job interview."
                ]
            }
        ],
        "comparative": "more nervous",
        "superlative": "the most nervous",
        "emoji": "😟",
        "transcription": "ˈnərvəs",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_048",
        "word": "scared",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "definitions": [
            {
                "text": "Feeling fear about something.",
                "examples": [
                    "She was scared about giving the presentation."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "synonyms": [
            "afraid",
            "frightened"
        ],
        "comparative": "more scared",
        "superlative": "the most scared",
        "emoji": "😨",
        "transcription": "skɛrd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_049",
        "word": "surprised",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Feeling shock at something unexpected.",
                "examples": [
                    "He was surprised to get a pay rise."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "synonyms": [
            "amazed",
            "astonished"
        ],
        "comparative": "more surprised",
        "superlative": "the most surprised",
        "emoji": "😲",
        "transcription": "səˈpraɪzd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_050",
        "word": "disappointed",
        "form": "adjective",
        "opposite": "satisfied",
        "oppositeEmoji": "😌",
        "definitions": [
            {
                "text": "Feeling sad because something was not as good as expected.",
                "examples": [
                    "She was disappointed not to get the job."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "synonyms": [
            "sad",
            "let down"
        ],
        "comparative": "more disappointed",
        "superlative": "the most disappointed",
        "emoji": "😞",
        "transcription": "ˌdɪsəˈpɔɪnɪd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_037",
        "word": "blonde",
        "form": "adjective",
        "opposite": "brunette",
        "oppositeEmoji": "👩🏻",
        "subtext": "blonde hair / a blonde woman",
        "synonyms": [
            "fair-haired"
        ],
        "definitions": [
            {
                "text": "Pale gold in color.",
                "examples": [
                    "She has blonde hair."
                ]
            }
        ],
        "comparative": "blonder",
        "superlative": "the blondest",
        "emoji": "👱‍♀️",
        "transcription": "blɑnd",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_038",
        "word": "ugly",
        "form": "adjective",
        "opposite": "beautiful",
        "oppositeEmoji": "✨",
        "subtext": "ugly building / ugly duckling",
        "synonyms": [
            "unattractive"
        ],
        "definitions": [
            {
                "text": "Unpleasant to look at.",
                "examples": [
                    "It was an ugly building."
                ]
            }
        ],
        "comparative": "uglier",
        "superlative": "the ugliest",
        "emoji": "👹",
        "transcription": "ˈəgli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_surprise_interest_004",
        "word": "exciting",
        "emoji": "🤩",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😴",
        "subtext": "an exciting trip / very exciting",
        "synonyms": [
            "thrilling",
            "interesting"
        ],
        "definitions": [
            {
                "text": "Making you feel very happy and enthusiastic.",
                "examples": [
                    "It was an exciting game."
                ]
            }
        ],
        "comparative": "more exciting",
        "superlative": "the most exciting",
        "transcription": "ɪkˈsaɪtɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_016",
        "word": "famous",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unknown",
        "oppositeEmoji": "👤",
        "subtext": "a famous person / become famous",
        "synonyms": [
            "well-known",
            "popular"
        ],
        "definitions": [
            {
                "text": "Known by many people.",
                "examples": [
                    "He is a famous actor."
                ]
            }
        ],
        "comparative": "more famous",
        "superlative": "the most famous",
        "transcription": "ˈfeɪməs",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_039",
        "word": "fat",
        "emoji": "🍔",
        "form": "adjective",
        "opposite": "thin",
        "oppositeEmoji": "🥬",
        "subtext": "a fat cat",
        "synonyms": [
            "overweight",
            "gain weight"
        ],
        "definitions": [
            {
                "text": "Having a lot of extra flesh on your body.",
                "examples": [
                    "The cat is fat because it eats a lot."
                ]
            }
        ],
        "comparative": "fatter",
        "superlative": "the fattest",
        "transcription": "fæt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_040",
        "word": "thin",
        "emoji": "🥬",
        "form": "adjective",
        "opposite": "thick",
        "oppositeEmoji": "🍔",
        "subtext": "he is thin / thin legs",
        "synonyms": [
            "slim",
            "skinny"
        ],
        "definitions": [
            {
                "text": "Having very little extra flesh on your body.",
                "examples": [
                    "He is very tall and thin."
                ]
            }
        ],
        "comparative": "thinner",
        "superlative": "the thinnest",
        "transcription": "θɪn",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_041",
        "word": "curly",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": "straight",
        "oppositeEmoji": "📏",
        "subtext": "curly hair / short curly hair",
        "synonyms": [
            "wavy"
        ],
        "definitions": [
            {
                "text": "Having curls or a curved shape.",
                "examples": [
                    "She has curly brown hair."
                ]
            }
        ],
        "comparative": "curlier",
        "superlative": "the curliest",
        "transcription": "ˈkərli",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_body_042",
        "word": "straight",
        "emoji": "📏",
        "form": "adjective",
        "opposite": "curly",
        "oppositeEmoji": "🌀",
        "subtext": "straight hair / long straight hair",
        "synonyms": [
            "not curly"
        ],
        "definitions": [
            {
                "text": "Not curving or bending.",
                "examples": [
                    "He has straight black hair."
                ]
            }
        ],
        "comparative": "straighter",
        "superlative": "the straightest",
        "transcription": "streɪt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_051",
        "word": "lucky",
        "emoji": "🍀",
        "form": "adjective",
        "opposite": "unlucky",
        "oppositeEmoji": "😿",
        "subtext": "a lucky person / feel lucky",
        "synonyms": [
            "fortunate"
        ],
        "definitions": [
            {
                "text": "Having good luck.",
                "examples": [
                    "He is very lucky to have such a good job."
                ]
            }
        ],
        "comparative": "luckier",
        "superlative": "the luckiest",
        "transcription": "ˈləki",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_052",
        "word": "calm",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "stormy",
        "oppositeEmoji": "😟",
        "subtext": "stay calm / a calm sea",
        "synonyms": [
            "peaceful",
            "quiet"
        ],
        "definitions": [
            {
                "text": "Peaceful, quiet, and without worry.",
                "examples": [
                    "The sea is very calm today.",
                    "Please stay calm."
                ]
            }
        ],
        "comparative": "calmer",
        "superlative": "the calmest",
        "transcription": "kɑm",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_marital_status_006",
        "word": "married",
        "emoji": "💍",
        "form": "adjective",
        "opposite": "single",
        "oppositeEmoji": "👤",
        "subtext": "having a husband or wife / a married couple / get married",
        "definitions": [
            {
                "text": "Having a husband or wife.",
                "examples": [
                    "Are you married?"
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈmɛrid",
        "lang": "en",
        "level": "starter",
        "theme": "marital_status",
        "sub_theme": null
    },
    {
        "id": "en_starter_marital_status_007",
        "word": "single",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "married",
        "oppositeEmoji": "💍",
        "subtext": "a single man",
        "synonyms": [
            "not married"
        ],
        "definitions": [
            {
                "text": "Not married or in a serious relationship.",
                "examples": [
                    "He is single and lives alone."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈsɪŋgəl",
        "lang": "en",
        "level": "starter",
        "theme": "marital_status",
        "sub_theme": null
    },
    {
        "id": "en_starter_emotions_053",
        "word": "glad",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "happy",
        "definitions": [
            {
                "text": "Happy and pleased.",
                "examples": [
                    "I am glad to see you."
                ]
            }
        ],
        "subtext": "glad that / so glad",
        "synonyms": [
            "happy",
            "pleased"
        ],
        "comparative": "gladder",
        "superlative": "the gladdest",
        "transcription": "glæd",
        "lang": "en",
        "level": "starter",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_starter_surprise_interest_005",
        "word": "interested",
        "emoji": "🧐",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Wanting to give your attention to something or learn more about it.",
                "examples": [
                    "I am interested in history."
                ]
            }
        ],
        "subtext": "interested in / very interested",
        "synonyms": [
            "curious"
        ],
        "comparative": "more interested",
        "superlative": "the most interested",
        "transcription": "ˈɪntəˌrɛstɪd",
        "lang": "en",
        "level": "starter",
        "theme": "surprise_interest",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_027",
        "word": "own",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "shared",
        "definitions": [
            {
                "text": "Belonging to or done by a particular person.",
                "examples": [
                    "I have my own room."
                ]
            }
        ],
        "subtext": "on my own / my own car",
        "synonyms": [
            "personal"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "oʊn",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personality_traits_004",
        "word": "shy",
        "emoji": "😳",
        "form": "adjective",
        "opposite": "confident",
        "definitions": [
            {
                "text": "Nervous and uncomfortable about meeting and talking to other people.",
                "examples": [
                    "He is a shy boy."
                ]
            }
        ],
        "subtext": "feel shy / quite shy",
        "synonyms": [
            "timid"
        ],
        "comparative": "shyer",
        "superlative": "the shyest",
        "transcription": "ʃaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "personality_traits",
        "sub_theme": null
    },
    {
        "id": "en_starter_personality_traits_005",
        "word": "stupid",
        "emoji": "🤡",
        "form": "adjective",
        "opposite": "smart",
        "definitions": [
            {
                "text": "Silly or not intelligent.",
                "examples": [
                    "It was a stupid mistake."
                ]
            }
        ],
        "subtext": "don't be stupid / very stupid",
        "synonyms": [
            "silly"
        ],
        "comparative": "stupider",
        "superlative": "the stupidest",
        "transcription": "ˈstupɪd",
        "lang": "en",
        "level": "starter",
        "theme": "personality_traits",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_016",
        "word": "sure",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "unsure",
        "definitions": [
            {
                "text": "Certain; having no doubt.",
                "examples": [
                    "I am sure about the answer.",
                    "Are you sure?"
                ]
            }
        ],
        "subtext": "make sure / pretty sure",
        "synonyms": [
            "certain"
        ],
        "comparative": "surer",
        "superlative": "the surest",
        "transcription": "ʃʊr",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_017",
        "word": "unsure",
        "emoji": "❓",
        "form": "adjective",
        "opposite": "sure",
        "oppositeEmoji": "✅",
        "subtext": "feel unsure / unsure about",
        "synonyms": [
            "uncertain"
        ],
        "definitions": [
            {
                "text": "Not certain about something.",
                "examples": [
                    "I am unsure about what to do next."
                ]
            }
        ],
        "comparative": "more unsure",
        "superlative": "the most unsure",
        "transcription": "ənˈʃʊr",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_personality_traits_006",
        "word": "nasty",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "nice",
        "oppositeEmoji": "😊",
        "subtext": "a nasty person / nasty weather",
        "synonyms": [
            "unpleasant",
            "mean"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant; unkind.",
                "examples": [
                    "Don't be nasty to your colleagues."
                ]
            }
        ],
        "comparative": "nastier",
        "superlative": "the nastiest",
        "transcription": "ˈnæsti",
        "lang": "en",
        "level": "starter",
        "theme": "personality_traits",
        "sub_theme": null
    },
    {
        "id": "en_starter_giving_opinions_018",
        "word": "possible",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "impossible",
        "transcription": "🇬🇧 ˈpɒsəbl | 🇺🇸 ˈpɑːsəbl",
        "definitions": [
            {
                "text": "Able to be done or achieved.",
                "examples": [
                    "Is it possible to come tomorrow?",
                    "Everything is possible if you try."
                ]
            }
        ],
        "comparative": "more possible",
        "superlative": "the most possible",
        "subtext": "as soon as possible, if possible",
        "lang": "en",
        "level": "starter",
        "theme": "giving_opinions",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_007",
        "word": "hi",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A friendly greeting.",
                "examples": [
                    "Hi, how are you?"
                ]
            }
        ],
        "subtext": "greeting",
        "transcription": "haɪ",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_021",
        "word": "thanks",
        "emoji": "🙏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A way of saying thank you.",
                "examples": [
                    "Thanks for your help."
                ]
            }
        ],
        "subtext": "gratitude",
        "transcription": "θæŋks",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_name_greeting_008",
        "word": "bye",
        "emoji": "👋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A way of saying goodbye.",
                "examples": [
                    "Bye! See you tomorrow."
                ]
            }
        ],
        "subtext": "farewell",
        "transcription": "baɪ",
        "lang": "en",
        "level": "starter",
        "theme": "name_greeting",
        "sub_theme": null
    },
    {
        "id": "en_starter_contact_details_001",
        "word": "email address",
        "emoji": "📧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈiːmeɪl əˈdres",
        "definitions": [
            {
                "text": "The series of letters and symbols used to send and receive emails.",
                "examples": [
                    "What is your email address?"
                ]
            }
        ],
        "subtext": "contact information",
        "lang": "en",
        "level": "starter",
        "theme": "contact_details",
        "sub_theme": null
    },
    {
        "id": "en_starter_contact_details_002",
        "word": "phone number",
        "emoji": "📞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "🇬🇧 fəʊn ˈnʌmbə(r) | 🇺🇸 foʊn ˈnʌmbə(r)",
        "definitions": [
            {
                "text": "The set of numbers that you use to call someone on the phone.",
                "examples": [
                    "Can I have your phone number?"
                ]
            }
        ],
        "subtext": "contact information",
        "lang": "en",
        "level": "starter",
        "theme": "contact_details",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_028",
        "word": "Mr",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈmɪstər",
        "definitions": [
            {
                "text": "A title for a man, used before his surname.",
                "examples": [
                    "Hello, Mr. Smith."
                ]
            }
        ],
        "subtext": "title for a man",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_029",
        "word": "Mrs",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈmɪsɪz",
        "definitions": [
            {
                "text": "A title for a married woman, used before her surname.",
                "examples": [
                    "Nice to meet you, Mrs. Jones."
                ]
            }
        ],
        "subtext": "title for a married woman",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_personal_identity_030",
        "word": "Ms",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "mɪz",
        "definitions": [
            {
                "text": "A title for a woman, regardless of her marital status.",
                "examples": [
                    "Is Ms. Miller here?"
                ]
            }
        ],
        "subtext": "title for a woman",
        "lang": "en",
        "level": "starter",
        "theme": "personal_identity",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_022",
        "word": "pardon",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈpɑːrdn",
        "definitions": [
            {
                "text": "Used to ask someone to repeat what they said because you did not hear it.",
                "examples": [
                    "Pardon? Can you say that again?"
                ]
            }
        ],
        "subtext": "social phrase",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_023",
        "word": "sir",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "sɜːr",
        "definitions": [
            {
                "text": "A polite way to address a man.",
                "examples": [
                    "Can I help you, sir?"
                ]
            }
        ],
        "subtext": "polite address",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_starter_social_024",
        "word": "madam",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "transcription": "ˈmædəm",
        "definitions": [
            {
                "text": "A polite way to address a woman.",
                "examples": [
                    "This way, madam."
                ]
            }
        ],
        "subtext": "polite address",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();