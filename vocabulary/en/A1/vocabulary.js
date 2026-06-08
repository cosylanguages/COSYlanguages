// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_starter_asking_answering_questions_006",
        "word": "problem",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "problems",
        "subtext": "big problem, no problem",
        "definitions": [
            {
                "text": "Something that is difficult to deal with.",
                "examples": [
                    "I have a problem with my car.",
                    "No problem!"
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈprɑbləm",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_007",
        "word": "who",
        "emoji": "👤",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Used to ask about a person or people.",
                "examples": [
                    "Who is your teacher?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "hu",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_008",
        "word": "what",
        "emoji": "❓",
        "form": "pronoun",
        "definitions": [
            {
                "text": "Used to ask about things or actions.",
                "examples": [
                    "What is your name?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wət",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_009",
        "word": "where",
        "emoji": "📍",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about a place or position.",
                "examples": [
                    "Where do you live?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wɛr",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_010",
        "word": "when",
        "emoji": "⏰",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about time.",
                "examples": [
                    "When is the meeting?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "wɪn",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_011",
        "word": "why",
        "emoji": "❓",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask for a reason.",
                "examples": [
                    "Why are you late?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "waɪ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_012",
        "word": "how",
        "emoji": "⚙️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to ask about the way something is done or its state.",
                "examples": [
                    "How are you?",
                    "How do you spell your name?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "haʊ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_013",
        "word": "yes",
        "emoji": "✅",
        "form": "adverb",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to give a positive answer.",
                "examples": [
                    "Yes, I am a student."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "jɛs",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_014",
        "word": "no",
        "emoji": "❌",
        "form": "adverb",
        "opposite": null,
        "definitions": [
            {
                "text": "Used to give a negative answer.",
                "examples": [
                    "No, I am not a doctor."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "transcription": "noʊ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_015",
        "word": "conversation",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "conversations",
        "definitions": [
            {
                "text": "A talk between two or more people.",
                "examples": [
                    "We had a long conversation about work."
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "ˌkɑnvərˈseɪʃən",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_conjunctions_connectors_004",
        "word": "also",
        "emoji": "➕",
        "form": "adverb",
        "definitions": [
            {
                "text": "In addition; too.",
                "examples": [
                    "I speak English and also French."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": null,
        "transcription": "ˈɔlsoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "sub_theme": null
    },
    {
        "id": "en_starter_conjunctions_connectors_005",
        "word": "or",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce another possibility.",
                "examples": [
                    "Do you want tea or coffee?"
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "and",
        "emoji": "❓",
        "transcription": "ɔː(r)",
        "lang": "en",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "sub_theme": null
    },
    {
        "id": "en_starter_conjunctions_connectors_006",
        "word": "so",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to show the result of something.",
                "examples": [
                    "It was raining, so I took an umbrella."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "opposite": "because",
        "emoji": "💡",
        "transcription": "🇬🇧 səʊ | 🇺🇸 soʊ",
        "lang": "en",
        "level": "starter",
        "theme": "conjunctions_connectors",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_086",
        "word": "something",
        "emoji": "📦",
        "form": "pronoun",
        "definitions": [
            {
                "text": "An object, event, or situation that is not named.",
                "examples": [
                    "I want to tell you something."
                ]
            }
        ],
        "subtext": "related to describing things",
        "opposite": null,
        "transcription": "ˈsəmθɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_087",
        "word": "thing",
        "emoji": "📦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "things",
        "definitions": [
            {
                "text": "An object that is not alive.",
                "examples": [
                    "What is that thing?"
                ]
            }
        ],
        "subtext": "related to describing things",
        "opposite": null,
        "transcription": "θɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_016",
        "word": "question",
        "emoji": "❓",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "questions",
        "definitions": [
            {
                "text": "A sentence that asks for information.",
                "examples": [
                    "I have a question.",
                    "Can you answer my question?"
                ]
            }
        ],
        "subtext": "related to asking answering questions",
        "opposite": null,
        "transcription": "kˈwɛʃən",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_017",
        "word": "answer",
        "emoji": "📞",
        "subtext": "answer a question / answer the phone / answer an email",
        "opposite": "ask",
        "oppositeEmoji": "❓",
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
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_088",
        "word": "list",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "lists",
        "subtext": "shopping list",
        "definitions": [
            {
                "text": "A series of names or items written one after the other.",
                "examples": [
                    "Make a shopping list."
                ]
            }
        ],
        "opposite": null,
        "transcription": "lɪst",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_018",
        "word": "show",
        "emoji": "📽️",
        "subtext": "show someone how / show a document / show interest",
        "opposite": "hide",
        "oppositeEmoji": "🙈",
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
        "group": "irregular",
        "transcription": "ʃoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_019",
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
        "group": "irregular",
        "opposite": "ask",
        "transcription": "tɛl",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_020",
        "word": "ask",
        "emoji": "❓",
        "subtext": "ask for / about, ask a question / ask for help / ask about / ask someone",
        "opposite": "answer",
        "oppositeEmoji": "📞",
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
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_asking_answering_questions_021",
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
        "group": "irregular",
        "opposite": "misunderstand",
        "transcription": "ˌəndərˈstænd",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_089",
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
        "group": "irregular",
        "opposite": "fix",
        "transcription": "breɪk",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_090",
        "word": "important",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unimportant",
        "oppositeEmoji": "🍃",
        "subtext": "important meeting / very important / most important",
        "synonyms": [
            "essential"
        ],
        "definitions": [
            {
                "text": "Having great value or effect.",
                "examples": [
                    "Sleep is very important."
                ]
            },
            {
                "text": "Having great value or significance.",
                "examples": [
                    "Sleep is very important for performance."
                ]
            }
        ],
        "comparative": "more important",
        "superlative": "the most important",
        "transcription": "ˌɪmˈpɔrtənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_091",
        "word": "unimportant",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "important",
        "oppositeEmoji": "❗",
        "subtext": "unimportant detail / feel unimportant",
        "synonyms": [
            "minor",
            "small"
        ],
        "definitions": [
            {
                "text": "Not having great value or effect.",
                "examples": [
                    "It is an unimportant mistake."
                ]
            }
        ],
        "comparative": "more unimportant",
        "superlative": "the most unimportant",
        "transcription": "ənɪmˈpɔrtənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_092",
        "word": "great",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
        "subtext": "a great idea / a great opportunity / great value",
        "synonyms": [
            "excellent",
            "big"
        ],
        "definitions": [
            {
                "text": "Extremely good; large in amount.",
                "examples": [
                    "She is a great manager."
                ]
            }
        ],
        "comparative": "greater",
        "superlative": "the greatest",
        "emoji": "🌟",
        "transcription": "greɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_093",
        "word": "nice",
        "form": "adjective",
        "opposite": "nasty",
        "oppositeEmoji": "😠",
        "subtext": "a nice day / a nice place / a nice person",
        "synonyms": [
            "pleasant",
            "kind"
        ],
        "definitions": [
            {
                "text": "Pleasant or kind.",
                "examples": [
                    "The new office is very nice."
                ]
            }
        ],
        "comparative": "nicer",
        "superlative": "the nicest",
        "emoji": "😊",
        "transcription": "nis",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_094",
        "word": "wonderful",
        "form": "adjective",
        "opposite": "awful",
        "oppositeEmoji": "🤮",
        "subtext": "a wonderful opportunity / a wonderful time",
        "synonyms": [
            "amazing",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good; causing delight.",
                "examples": [
                    "They had a wonderful team."
                ]
            }
        ],
        "comparative": "more wonderful",
        "superlative": "the most wonderful",
        "emoji": "🌈",
        "transcription": "ˈwəndərfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_095",
        "word": "terrible",
        "form": "adjective",
        "opposite": "bad",
        "oppositeEmoji": "🌟",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "synonyms": [
            "awful",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Extremely bad.",
                "examples": [
                    "The traffic this morning was terrible."
                ]
            }
        ],
        "comparative": "more terrible",
        "superlative": "the most terrible",
        "emoji": "🤮",
        "transcription": "ˈtɛrəbəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_096",
        "word": "awful",
        "form": "adjective",
        "opposite": "wonderful",
        "oppositeEmoji": "🌈",
        "subtext": "awful weather / awful news / simply awful",
        "synonyms": [
            "terrible",
            "very bad"
        ],
        "definitions": [
            {
                "text": "Very bad or unpleasant.",
                "examples": [
                    "The noise in the open office is awful."
                ]
            }
        ],
        "comparative": "more awful",
        "superlative": "the most awful",
        "emoji": "💩",
        "transcription": "ˈɔfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_097",
        "word": "amazing",
        "form": "adjective",
        "opposite": "ordinary",
        "oppositeEmoji": "😐",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "synonyms": [
            "wonderful",
            "fantastic"
        ],
        "definitions": [
            {
                "text": "Causing great surprise or admiration.",
                "examples": [
                    "She gave an amazing presentation."
                ]
            }
        ],
        "comparative": "more amazing",
        "superlative": "the most amazing",
        "emoji": "🤩",
        "transcription": "əˈmeɪzɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_098",
        "word": "fantastic",
        "form": "adjective",
        "opposite": "good",
        "oppositeEmoji": "😫",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "synonyms": [
            "excellent",
            "great"
        ],
        "definitions": [
            {
                "text": "Extremely good.",
                "examples": [
                    "The new system works in a fantastic way."
                ]
            }
        ],
        "comparative": "more fantastic",
        "superlative": "the most fantastic",
        "emoji": "🔥",
        "transcription": "fænˈtæstɪk",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_099",
        "word": "right",
        "form": "adjective",
        "subtext": "right hand / right side / absolutely right",
        "opposite": "wrong",
        "definitions": [
            {
                "text": "Correct; suitable.",
                "examples": [
                    "Is this the right office?"
                ]
            },
            {
                "text": "On or towards the side of your body that is to the east when you face north.",
                "examples": [
                    "Use your right hand."
                ]
            }
        ],
        "comparative": "more right",
        "superlative": "the most right",
        "emoji": "✅",
        "transcription": "raɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_100",
        "word": "left",
        "form": "adjective",
        "subtext": "left hand / left side",
        "opposite": "right",
        "definitions": [
            {
                "text": "On or towards the side of your body that is to the west when you face north.",
                "examples": [
                    "Turn left at the station.",
                    "She writes with her left hand."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "emoji": "⬅️",
        "transcription": "lɛft",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_101",
        "word": "wrong",
        "form": "adjective",
        "opposite": "right",
        "oppositeEmoji": "✅",
        "subtext": "wrong answer / go wrong / completely wrong",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not correct; not suitable.",
                "examples": [
                    "That was the wrong decision."
                ]
            }
        ],
        "comparative": "more wrong",
        "superlative": "the most wrong",
        "emoji": "❌",
        "transcription": "rɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_102",
        "word": "different",
        "form": "adjective",
        "opposite": "same",
        "oppositeEmoji": "👯",
        "subtext": "completely different / very different / different from",
        "synonyms": [
            "not the same"
        ],
        "definitions": [
            {
                "text": "Not the same as another.",
                "examples": [
                    "This job is very different from my last one."
                ]
            }
        ],
        "comparative": "more different",
        "superlative": "the most different",
        "emoji": "🌓",
        "transcription": "ˈdɪfərənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_103",
        "word": "same",
        "form": "adjective",
        "opposite": "other",
        "oppositeEmoji": "🌓",
        "subtext": "the same as / exactly the same / same time",
        "synonyms": [
            "identical"
        ],
        "definitions": [
            {
                "text": "Not different; identical.",
                "examples": [
                    "They earn the same salary."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "emoji": "👯",
        "transcription": "seɪm",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_104",
        "word": "quiet",
        "form": "adjective",
        "opposite": "loud",
        "oppositeEmoji": "📢",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "synonyms": [
            "silent",
            "peaceful"
        ],
        "definitions": [
            {
                "text": "Making little or no noise; peaceful.",
                "examples": [
                    "The office is quiet at lunchtime."
                ]
            }
        ],
        "comparative": "quieter",
        "superlative": "the quietest",
        "emoji": "🤫",
        "transcription": "kwaɪət",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_105",
        "word": "loud",
        "form": "adjective",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "subtext": "loud noise / too loud / a loud voice",
        "synonyms": [
            "noisy"
        ],
        "definitions": [
            {
                "text": "Making a lot of noise.",
                "examples": [
                    "The open-plan office is too loud."
                ]
            }
        ],
        "comparative": "louder",
        "superlative": "the loudest",
        "emoji": "📢",
        "transcription": "laʊd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_106",
        "word": "proud",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "🤦",
        "definitions": [
            {
                "text": "Feeling pleased about an achievement.",
                "examples": [
                    "He was proud to get his first promotion."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "synonyms": [
            "pleased",
            "satisfied"
        ],
        "comparative": "prouder",
        "superlative": "the proudest",
        "emoji": "🤳",
        "transcription": "praʊd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_107",
        "word": "beautiful",
        "form": "adjective",
        "opposite": "ugly",
        "oppositeEmoji": "👹",
        "definitions": [
            {
                "text": "Attractive and pleasing to look at.",
                "examples": [
                    "She has a beautiful, bright office with city views."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "more beautiful",
        "superlative": "the most beautiful",
        "emoji": "✨",
        "transcription": "ˈbjutəfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_108",
        "word": "pretty",
        "form": "adjective",
        "opposite": "ugly",
        "oppositeEmoji": "👹",
        "definitions": [
            {
                "text": "Pleasant to look at; quite attractive.",
                "examples": [
                    "The new meeting room is very pretty."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "prettier",
        "superlative": "the prettiest",
        "emoji": "🌸",
        "transcription": "ˈprɪti",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_109",
        "word": "strong",
        "form": "adjective",
        "opposite": "weak",
        "oppositeEmoji": "🍃",
        "definitions": [
            {
                "text": "Having great physical or mental power.",
                "examples": [
                    "She is a strong leader and very respected."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "stronger",
        "superlative": "the strongest",
        "emoji": "🏋️",
        "transcription": "strɔŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_110",
        "word": "weak",
        "form": "adjective",
        "opposite": "strong",
        "oppositeEmoji": "🏋️",
        "definitions": [
            {
                "text": "Lacking strength or power.",
                "examples": [
                    "The signal is weak on the top floor."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "weaker",
        "superlative": "the weakest",
        "emoji": "🥀",
        "transcription": "wik",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_111",
        "word": "perfect",
        "form": "adjective",
        "opposite": "imperfect",
        "oppositeEmoji": "🩹",
        "definitions": [
            {
                "text": "Without any faults; completely correct.",
                "examples": [
                    "The timing of the launch was perfect."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "more perfect",
        "superlative": "the most perfect",
        "emoji": "💯",
        "transcription": "ˈpərˌfɪkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_112",
        "word": "correct",
        "form": "adjective",
        "opposite": "incorrect",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "True or right; without errors.",
                "examples": [
                    "Please check the figures are correct."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "more correct",
        "superlative": "the most correct",
        "emoji": "✅",
        "transcription": "kərˈɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_113",
        "word": "interesting",
        "form": "adjective",
        "opposite": "boring",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Attracting attention; worth knowing about.",
                "examples": [
                    "The new proposal is very interesting."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "more interesting",
        "superlative": "the most interesting",
        "emoji": "🧐",
        "transcription": "ˈɪntəˌrɛstɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_114",
        "word": "boring",
        "form": "adjective",
        "opposite": "interesting",
        "oppositeEmoji": "🤩",
        "definitions": [
            {
                "text": "Not interesting; dull.",
                "examples": [
                    "The training session was very boring."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "more boring",
        "superlative": "the most boring",
        "emoji": "😴",
        "transcription": "ˈbɔrɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_115",
        "word": "special",
        "form": "adjective",
        "opposite": "ordinary",
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Different from what is usual; particularly important.",
                "examples": [
                    "She has a special talent for problem-solving."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "more special",
        "superlative": "the most special",
        "emoji": "💎",
        "transcription": "ˈspɛʃəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_116",
        "word": "friendly",
        "form": "adjective",
        "opposite": "unfriendly",
        "oppositeEmoji": "😠",
        "definitions": [
            {
                "text": "Kind and pleasant; easy to talk to.",
                "examples": [
                    "The new manager is very friendly and approachable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "synonyms": [
            "kind",
            "pleasant"
        ],
        "comparative": "more friendly",
        "superlative": "the most friendly",
        "emoji": "👋",
        "transcription": "ˈfrɛndli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_117",
        "word": "kind",
        "form": "adjective",
        "opposite": "unkind",
        "oppositeEmoji": "🥀",
        "definitions": [
            {
                "text": "Caring and generous to others.",
                "examples": [
                    "She is kind to everyone in the office."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "synonyms": [
            "caring",
            "generous"
        ],
        "comparative": "kinder",
        "superlative": "the kindest",
        "emoji": "🤝",
        "transcription": "kaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_118",
        "word": "unkind",
        "emoji": "🥀",
        "form": "adjective",
        "opposite": "kind",
        "oppositeEmoji": "🤝",
        "subtext": "unkind words / be unkind",
        "synonyms": [
            "mean",
            "cruel"
        ],
        "definitions": [
            {
                "text": "Not kind; mean.",
                "examples": [
                    "It was unkind to say those things."
                ]
            }
        ],
        "comparative": "more unkind",
        "superlative": "the most unkind",
        "transcription": "ənˈkaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_119",
        "word": "funny",
        "form": "adjective",
        "opposite": "serious",
        "oppositeEmoji": "😐",
        "definitions": [
            {
                "text": "Making people laugh; humorous.",
                "examples": [
                    "He has a funny way of explaining complex ideas."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "synonyms": [
            "humorous",
            "amusing"
        ],
        "comparative": "funnier",
        "superlative": "the funniest",
        "emoji": "😂",
        "transcription": "ˈfəni",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_120",
        "word": "clever",
        "form": "adjective",
        "opposite": "stupid",
        "oppositeEmoji": "🤡",
        "definitions": [
            {
                "text": "Intelligent; quick to understand.",
                "examples": [
                    "She is a clever negotiator."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "synonyms": [
            "intelligent",
            "smart"
        ],
        "comparative": "cleverer",
        "superlative": "the cleverest",
        "emoji": "🎓",
        "transcription": "ˈklɛvər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_121",
        "word": "polite",
        "form": "adjective",
        "opposite": "rude",
        "oppositeEmoji": "😛",
        "definitions": [
            {
                "text": "Behaving in a respectful and courteous way.",
                "examples": [
                    "He is always polite with clients."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "synonyms": [
            "respectful"
        ],
        "comparative": "more polite",
        "superlative": "the most polite",
        "emoji": "🙏",
        "transcription": "pəˈlaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_122",
        "word": "rude",
        "form": "adjective",
        "opposite": "polite",
        "oppositeEmoji": "🤝",
        "definitions": [
            {
                "text": "Not polite; showing a lack of respect.",
                "examples": [
                    "That email was quite rude and unprofessional."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "synonyms": [
            "impolite",
            "disrespectful"
        ],
        "comparative": "ruder",
        "superlative": "the rudest",
        "emoji": "😛",
        "transcription": "rud",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_123",
        "word": "lazy",
        "form": "adjective",
        "opposite": "hardworking",
        "oppositeEmoji": "🐝",
        "definitions": [
            {
                "text": "Not willing to work or use effort.",
                "examples": [
                    "He has a reputation for being lazy with follow-ups."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "synonyms": [
            "idle"
        ],
        "comparative": "lazier",
        "superlative": "the laziest",
        "emoji": "🛋️",
        "transcription": "ˈleɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_124",
        "word": "honest",
        "form": "adjective",
        "opposite": "dishonest",
        "oppositeEmoji": "🤥",
        "definitions": [
            {
                "text": "Telling the truth; not deceiving.",
                "examples": [
                    "She is known for being completely honest with clients."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "synonyms": [
            "truthful"
        ],
        "comparative": "more honest",
        "superlative": "the most honest",
        "emoji": "⚖️",
        "transcription": "ˈɑnəst",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_125",
        "word": "noisy",
        "form": "adjective",
        "opposite": "quiet",
        "oppositeEmoji": "🤫",
        "definitions": [
            {
                "text": "Making a lot of sound; loud.",
                "examples": [
                    "The open plan office is very noisy."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "synonyms": [
            "loud"
        ],
        "comparative": "noisier",
        "superlative": "the noisiest",
        "emoji": "📢",
        "transcription": "ˈnɔɪzi",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_126",
        "word": "helpful",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unhelpful",
        "oppositeEmoji": "😠",
        "subtext": "very helpful / a helpful person",
        "synonyms": [
            "useful",
            "kind"
        ],
        "definitions": [
            {
                "text": "Willing to help other people.",
                "examples": [
                    "My colleagues are very helpful."
                ]
            }
        ],
        "comparative": "more helpful",
        "superlative": "the most helpful",
        "transcription": "ˈhɛlpfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_127",
        "word": "unhelpful",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "helpful",
        "oppositeEmoji": "🤝",
        "subtext": "unhelpful advice / very unhelpful",
        "synonyms": [
            "useless"
        ],
        "definitions": [
            {
                "text": "Not helping in a situation.",
                "examples": [
                    "The staff were quite unhelpful when I asked for directions."
                ]
            }
        ],
        "comparative": "more unhelpful",
        "superlative": "the most unhelpful",
        "transcription": "ənˈhɛlpfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_128",
        "word": "patient",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "impatient",
        "oppositeEmoji": "⌚",
        "subtext": "be patient / a patient teacher",
        "synonyms": [
            "calm",
            "tolerant"
        ],
        "definitions": [
            {
                "text": "Able to wait for a long time without becoming angry.",
                "examples": [
                    "You need to be patient with new students."
                ]
            }
        ],
        "comparative": "more patient",
        "superlative": "the most patient",
        "transcription": "ˈpeɪʃənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_129",
        "word": "active",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "lazy",
        "oppositeEmoji": "🛋️",
        "subtext": "an active lifestyle / very active",
        "synonyms": [
            "energetic",
            "busy"
        ],
        "definitions": [
            {
                "text": "Doing a lot of things; busy.",
                "examples": [
                    "He is a very active person."
                ]
            }
        ],
        "comparative": "more active",
        "superlative": "the most active",
        "transcription": "ˈæktɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_130",
        "word": "careful",
        "emoji": "⚠️",
        "form": "adjective",
        "opposite": "careless",
        "subtext": "be careful / careful planning",
        "synonyms": [
            "cautious"
        ],
        "definitions": [
            {
                "text": "Giving a lot of attention to what you are doing so that you do not have an accident or make a mistake.",
                "examples": [
                    "Be careful when you drive."
                ]
            }
        ],
        "comparative": "more careful",
        "superlative": "the most careful",
        "transcription": "ˈkɛrfəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_131",
        "word": "creative",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": null,
        "oppositeEmoji": "😐",
        "subtext": "very creative / creative ideas",
        "synonyms": [
            "imaginative",
            "artistic"
        ],
        "definitions": [
            {
                "text": "Good at thinking of new ideas or making things.",
                "examples": [
                    "She is a very creative designer."
                ]
            }
        ],
        "comparative": "more creative",
        "superlative": "the most creative",
        "transcription": "kriˈeɪtɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_132",
        "word": "smart",
        "form": "adjective",
        "opposite": "stupid",
        "oppositeEmoji": "🤡",
        "subtext": "a smart student / smart clothes",
        "synonyms": [
            "intelligent",
            "clever"
        ],
        "definitions": [
            {
                "text": "Intelligent; clever.",
                "examples": [
                    "He is a smart student."
                ]
            }
        ],
        "comparative": "smarter",
        "superlative": "the smartest",
        "emoji": "🎓",
        "transcription": "smɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_133",
        "word": "serious",
        "form": "adjective",
        "opposite": "funny",
        "oppositeEmoji": "😂",
        "subtext": "a serious person / look serious",
        "synonyms": [
            "solemn",
            "sensible"
        ],
        "definitions": [
            {
                "text": "Thinking or acting in a careful and sensible way; not silly.",
                "examples": [
                    "He is a serious person."
                ]
            }
        ],
        "comparative": "more serious",
        "superlative": "the most serious",
        "emoji": "😐",
        "transcription": "ˈsɪriəs",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_134",
        "word": "hardworking",
        "emoji": "🐝",
        "form": "adjective",
        "opposite": "lazy",
        "oppositeEmoji": "🛋️",
        "subtext": "a hardworking student / very hardworking",
        "synonyms": [
            "diligent",
            "busy"
        ],
        "definitions": [
            {
                "text": "Putting a lot of effort into work.",
                "examples": [
                    "She is a very hardworking manager."
                ]
            }
        ],
        "comparative": "more hardworking",
        "superlative": "the most hardworking",
        "transcription": "ˈhɑrdˌwərkɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_135",
        "word": "real",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "fake",
        "oppositeEmoji": "🎭",
        "subtext": "a real person / is it real?",
        "synonyms": [
            "true",
            "authentic"
        ],
        "definitions": [
            {
                "text": "Actually existing or happening; not false.",
                "examples": [
                    "Is this a real diamond?"
                ]
            }
        ],
        "comparative": "more real",
        "superlative": "the most real",
        "transcription": "ril",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_136",
        "word": "simple",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "complex",
        "oppositeEmoji": "🧩",
        "subtext": "a simple question / nice and simple",
        "synonyms": [
            "easy",
            "basic"
        ],
        "definitions": [
            {
                "text": "Easy to understand or do; not complex.",
                "examples": [
                    "This is a simple problem."
                ]
            }
        ],
        "comparative": "simpler",
        "superlative": "the simplest",
        "transcription": "ˈsɪmpəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_137",
        "word": "clear",
        "emoji": "💧",
        "form": "adjective",
        "opposite": "unclear",
        "oppositeEmoji": "🌫️",
        "subtext": "a clear sky",
        "synonyms": [
            "obvious",
            "transparent",
            "speak clearly"
        ],
        "definitions": [
            {
                "text": "Easy to see through; easy to understand.",
                "examples": [
                    "The water is very clear.",
                    "It is a clear day."
                ]
            }
        ],
        "comparative": "clearer",
        "superlative": "the clearest",
        "transcription": "klɪr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_138",
        "word": "common",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": "rare",
        "oppositeEmoji": "💎",
        "subtext": "a common problem",
        "synonyms": [
            "usual",
            "frequent",
            "shared by all"
        ],
        "definitions": [
            {
                "text": "Happening often; shared by many people.",
                "examples": [
                    "It is a common mistake."
                ]
            }
        ],
        "comparative": "commoner",
        "superlative": "the commonest",
        "transcription": "ˈkɑmən",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_139",
        "word": "favourite",
        "emoji": "⭐",
        "form": "adjective",
        "opposite": "hated",
        "oppositeEmoji": "😡",
        "subtext": "my favourite film / favourite food",
        "synonyms": [
            "preferred"
        ],
        "definitions": [
            {
                "text": "The one that you like the most.",
                "examples": [
                    "What is your favourite colour?",
                    "Pizza is my favourite food."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈfeɪvərɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_140",
        "word": "dark",
        "emoji": "🌑",
        "form": "adjective",
        "opposite": "bright",
        "oppositeEmoji": "💡",
        "subtext": "dark blue / a dark night",
        "synonyms": [
            "not light"
        ],
        "definitions": [
            {
                "text": "With little or no light.",
                "examples": [
                    "It is dark outside.",
                    "He has dark hair."
                ]
            }
        ],
        "comparative": "darker",
        "superlative": "the darkest",
        "transcription": "dɑrk",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_141",
        "word": "bright",
        "emoji": "💡",
        "form": "adjective",
        "opposite": "dark",
        "oppositeEmoji": "🌑",
        "subtext": "bright colors / a bright day",
        "synonyms": [
            "shining",
            "light"
        ],
        "definitions": [
            {
                "text": "Full of light, or shining with much light.",
                "examples": [
                    "The sun is very bright today.",
                    "She is wearing a bright yellow dress."
                ]
            }
        ],
        "comparative": "brighter",
        "superlative": "the brightest",
        "transcription": "braɪt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_142",
        "word": "modern",
        "emoji": "🏙️",
        "form": "adjective",
        "opposite": "ancient",
        "oppositeEmoji": "🏛️",
        "subtext": "a modern building / modern life",
        "synonyms": [
            "contemporary",
            "new"
        ],
        "definitions": [
            {
                "text": "Designed and made using the most recent ideas and methods.",
                "examples": [
                    "They live in a modern house."
                ]
            }
        ],
        "comparative": "more modern",
        "superlative": "the most modern",
        "transcription": "ˈmɑdərn",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_143",
        "word": "ancient",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "oppositeEmoji": "🏙️",
        "subtext": "ancient history / an ancient city",
        "synonyms": [
            "very old",
            "antique"
        ],
        "definitions": [
            {
                "text": "From a long time ago; very old.",
                "examples": [
                    "We visited an ancient city in Greece."
                ]
            }
        ],
        "comparative": "more ancient",
        "superlative": "the most ancient",
        "transcription": "ˈeɪnʧənt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_144",
        "word": "brave",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": "cowardly",
        "oppositeEmoji": "😨",
        "subtext": "a brave soldier / be brave",
        "synonyms": [
            "courageous"
        ],
        "definitions": [
            {
                "text": "Willing to do things that are dangerous, and does not show fear in difficult situations.",
                "examples": [
                    "The firefighter was very brave."
                ]
            }
        ],
        "comparative": "braver",
        "superlative": "the bravest",
        "transcription": "breɪv",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_145",
        "word": "cowardly",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "brave",
        "oppositeEmoji": "🦁",
        "subtext": "a cowardly act / don't be cowardly",
        "synonyms": [
            "fearful"
        ],
        "definitions": [
            {
                "text": "Not brave.",
                "examples": [
                    "He was too cowardly to tell the truth."
                ]
            }
        ],
        "comparative": "more cowardly",
        "superlative": "the most cowardly",
        "transcription": "ˈkaʊərdli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_146",
        "word": "able",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "unable",
        "definitions": [
            {
                "text": "Having the power, skill, knowledge, or money to do something.",
                "examples": [
                    "She is able to speak three languages."
                ]
            }
        ],
        "subtext": "be able to / highly able",
        "synonyms": [
            "capable"
        ],
        "comparative": "abler",
        "superlative": "the ablest",
        "transcription": "ˈeɪbəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_147",
        "word": "fair",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "unfair",
        "definitions": [
            {
                "text": "Treating people equally or in a right way.",
                "examples": [
                    "It is a fair decision."
                ]
            }
        ],
        "subtext": "a fair price / be fair",
        "synonyms": [
            "just"
        ],
        "comparative": "fairer",
        "superlative": "the fairest",
        "transcription": "fɛr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_148",
        "word": "fine",
        "emoji": "😊",
        "form": "adjective",
        "opposite": null,
        "definitions": [
            {
                "text": "Good or acceptable; healthy.",
                "examples": [
                    "I am fine, thank you.",
                    "The weather is fine today."
                ]
            }
        ],
        "subtext": "feel fine / a fine day",
        "synonyms": [
            "okay",
            "good"
        ],
        "comparative": "finer",
        "superlative": "the finest",
        "transcription": "faɪn",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_149",
        "word": "only",
        "emoji": "1️⃣",
        "form": "adjective",
        "opposite": "many",
        "definitions": [
            {
                "text": "Used to show that there is only one or a few of something.",
                "examples": [
                    "She is the only student in the classroom."
                ]
            }
        ],
        "subtext": "the only one / only child",
        "synonyms": [
            "sole"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊnli",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_150",
        "word": "other",
        "emoji": "➕",
        "form": "adjective",
        "opposite": "same",
        "definitions": [
            {
                "text": "Used to refer to people or things that are different from the ones already mentioned.",
                "examples": [
                    "Where are the other students?"
                ]
            }
        ],
        "subtext": "the other one / some other",
        "synonyms": [
            "different"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈəðər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_151",
        "word": "true",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "false",
        "definitions": [
            {
                "text": "Based on facts and not imaginary.",
                "examples": [
                    "Is the story true?"
                ]
            }
        ],
        "subtext": "come true",
        "synonyms": [
            "real",
            "truly"
        ],
        "comparative": "truer",
        "superlative": "the truest",
        "transcription": "tru",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_152",
        "word": "false",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "true",
        "oppositeEmoji": "✅",
        "subtext": "true or false / false information",
        "synonyms": [
            "incorrect"
        ],
        "definitions": [
            {
                "text": "Not true; incorrect.",
                "examples": [
                    "The statement is false."
                ]
            }
        ],
        "comparative": "falser",
        "superlative": "the falsest",
        "transcription": "fɔls",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_153",
        "word": "incorrect",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "correct",
        "oppositeEmoji": "✅",
        "subtext": "incorrect answer / absolutely incorrect",
        "synonyms": [
            "wrong",
            "false"
        ],
        "definitions": [
            {
                "text": "Not correct; wrong.",
                "examples": [
                    "The information in the report was incorrect."
                ]
            }
        ],
        "comparative": "more incorrect",
        "superlative": "the most incorrect",
        "transcription": "ˌɪnkərˈɛkt",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_154",
        "word": "normal",
        "emoji": "😐",
        "form": "adjective",
        "opposite": "strange",
        "oppositeEmoji": "❓",
        "subtext": "normal day / back to normal",
        "synonyms": [
            "usual",
            "ordinary"
        ],
        "definitions": [
            {
                "text": "Usual, ordinary, or expected.",
                "examples": [
                    "It was a normal working day."
                ]
            }
        ],
        "comparative": "more normal",
        "superlative": "the most normal",
        "transcription": "ˈnɔrməl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_155",
        "word": "shared",
        "emoji": "👥",
        "form": "adjective",
        "opposite": "own",
        "oppositeEmoji": "👤",
        "subtext": "shared room / shared office",
        "synonyms": [
            "common"
        ],
        "definitions": [
            {
                "text": "Used or owned by more than one person.",
                "examples": [
                    "We work in a shared office."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ʃɛrd",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_156",
        "word": "unclear",
        "emoji": "🌫️",
        "form": "adjective",
        "opposite": "clear",
        "oppositeEmoji": "💧",
        "subtext": "unclear instructions / feel unclear",
        "synonyms": [
            "confusing",
            "vague"
        ],
        "definitions": [
            {
                "text": "Not easy to understand; not clear.",
                "examples": [
                    "The instructions were unclear."
                ]
            }
        ],
        "comparative": "more unclear",
        "superlative": "the most unclear",
        "transcription": "ənˈklɪr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    },
    {
        "id": "en_starter_describing_157",
        "word": "useful",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "useless",
        "transcription": "ˈjuːsfl",
        "definitions": [
            {
                "text": "Helping you to do or achieve something.",
                "examples": [
                    "This is a very useful book.",
                    "The internet is useful for studying."
                ]
            }
        ],
        "comparative": "more useful",
        "superlative": "the most useful",
        "subtext": "very useful, useful information",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();