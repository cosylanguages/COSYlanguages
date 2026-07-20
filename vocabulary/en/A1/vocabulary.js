(function() {
    const lang = "en";
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "theme": "language",
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
            "emoji": "❓",
            "transcription": "ɔː(r)",
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "and"
            ]
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
            "emoji": "💡",
            "transcription": "🇬🇧 səʊ | 🇺🇸 soʊ",
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "because"
            ]
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
            "theme": "language",
            "sub_theme": null
    },
    {
            "id": "en_starter_asking_answering_questions_017",
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
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "ask"
            ]
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
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "hide"
            ]
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
            "transcription": "tɛl",
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "ask"
            ]
    },
    {
            "id": "en_starter_asking_answering_questions_020",
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
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "answer"
            ]
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
            "transcription": "ˌəndərˈstænd",
            "lang": "en",
            "level": "starter",
            "theme": "language",
            "sub_theme": null,
            "antonyms": [
                    "misunderstand"
            ]
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
            "transcription": "breɪk",
            "lang": "en",
            "level": "starter",
            "theme": "describing",
            "sub_theme": null,
            "antonyms": [
                    "fix"
            ]
    },
    {
            "id": "en_starter_describing_090",
            "word": "important",
            "emoji": "❗",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unimportant"
            ]
    },
    {
            "id": "en_starter_describing_091",
            "word": "unimportant",
            "emoji": "🍃",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "important"
            ]
    },
    {
            "id": "en_starter_describing_092",
            "word": "great",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "good"
            ]
    },
    {
            "id": "en_starter_describing_093",
            "word": "nice",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "nasty"
            ]
    },
    {
            "id": "en_starter_describing_094",
            "word": "wonderful",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "awful"
            ]
    },
    {
            "id": "en_starter_describing_095",
            "word": "terrible",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "bad"
            ]
    },
    {
            "id": "en_starter_describing_096",
            "word": "awful",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "wonderful"
            ]
    },
    {
            "id": "en_starter_describing_097",
            "word": "amazing",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "ordinary"
            ]
    },
    {
            "id": "en_starter_describing_098",
            "word": "fantastic",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "good"
            ]
    },
    {
            "id": "en_starter_describing_099",
            "word": "right",
            "form": "adjective",
            "subtext": "right hand / right side / absolutely right",
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
            "sub_theme": null,
            "antonyms": [
                    "wrong"
            ]
    },
    {
            "id": "en_starter_describing_100",
            "word": "left",
            "form": "adjective",
            "subtext": "left hand / left side",
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
            "sub_theme": null,
            "antonyms": [
                    "right"
            ]
    },
    {
            "id": "en_starter_describing_101",
            "word": "wrong",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "right"
            ]
    },
    {
            "id": "en_starter_describing_102",
            "word": "different",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "same"
            ]
    },
    {
            "id": "en_starter_describing_103",
            "word": "same",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "other"
            ]
    },
    {
            "id": "en_starter_describing_104",
            "word": "quiet",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "loud"
            ]
    },
    {
            "id": "en_starter_describing_105",
            "word": "loud",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "quiet"
            ]
    },
    {
            "id": "en_starter_describing_106",
            "word": "proud",
            "form": "adjective",
            "opposite": null,
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
            "sub_theme": null,
            "antonyms": [
                    "ugly"
            ]
    },
    {
            "id": "en_starter_describing_108",
            "word": "pretty",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "ugly"
            ]
    },
    {
            "id": "en_starter_describing_109",
            "word": "strong",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "weak"
            ]
    },
    {
            "id": "en_starter_describing_110",
            "word": "weak",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "strong"
            ]
    },
    {
            "id": "en_starter_describing_111",
            "word": "perfect",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "imperfect"
            ]
    },
    {
            "id": "en_starter_describing_112",
            "word": "correct",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "incorrect"
            ]
    },
    {
            "id": "en_starter_describing_113",
            "word": "interesting",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "boring"
            ]
    },
    {
            "id": "en_starter_describing_114",
            "word": "boring",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "interesting"
            ]
    },
    {
            "id": "en_starter_describing_115",
            "word": "special",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "ordinary"
            ]
    },
    {
            "id": "en_starter_describing_116",
            "word": "friendly",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unfriendly"
            ]
    },
    {
            "id": "en_starter_describing_117",
            "word": "kind",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unkind"
            ]
    },
    {
            "id": "en_starter_describing_118",
            "word": "unkind",
            "emoji": "🥀",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "kind"
            ]
    },
    {
            "id": "en_starter_describing_119",
            "word": "funny",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "serious"
            ]
    },
    {
            "id": "en_starter_describing_120",
            "word": "clever",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "stupid"
            ]
    },
    {
            "id": "en_starter_describing_121",
            "word": "polite",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "rude"
            ]
    },
    {
            "id": "en_starter_describing_122",
            "word": "rude",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "polite"
            ]
    },
    {
            "id": "en_starter_describing_123",
            "word": "lazy",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "hardworking"
            ]
    },
    {
            "id": "en_starter_describing_124",
            "word": "honest",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "dishonest"
            ]
    },
    {
            "id": "en_starter_describing_125",
            "word": "noisy",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "quiet"
            ]
    },
    {
            "id": "en_starter_describing_126",
            "word": "helpful",
            "emoji": "🤝",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unhelpful"
            ]
    },
    {
            "id": "en_starter_describing_127",
            "word": "unhelpful",
            "emoji": "😠",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "helpful"
            ]
    },
    {
            "id": "en_starter_describing_128",
            "word": "patient",
            "emoji": "🧘",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "impatient"
            ]
    },
    {
            "id": "en_starter_describing_129",
            "word": "active",
            "emoji": "🏃",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "lazy"
            ]
    },
    {
            "id": "en_starter_describing_130",
            "word": "careful",
            "emoji": "⚠️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "careless"
            ]
    },
    {
            "id": "en_starter_describing_131",
            "word": "creative",
            "emoji": "🎨",
            "form": "adjective",
            "opposite": null,
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
            "sub_theme": null,
            "antonyms": [
                    "stupid"
            ]
    },
    {
            "id": "en_starter_describing_133",
            "word": "serious",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "funny"
            ]
    },
    {
            "id": "en_starter_describing_134",
            "word": "hardworking",
            "emoji": "🐝",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "lazy"
            ]
    },
    {
            "id": "en_starter_describing_135",
            "word": "real",
            "emoji": "💎",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "fake"
            ]
    },
    {
            "id": "en_starter_describing_136",
            "word": "simple",
            "emoji": "✅",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "complex"
            ]
    },
    {
            "id": "en_starter_describing_137",
            "word": "clear",
            "emoji": "💧",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unclear"
            ]
    },
    {
            "id": "en_starter_describing_138",
            "word": "common",
            "emoji": "🔄",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "rare"
            ]
    },
    {
            "id": "en_starter_describing_139",
            "word": "favourite",
            "emoji": "⭐",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "hated"
            ]
    },
    {
            "id": "en_starter_describing_140",
            "word": "dark",
            "emoji": "🌑",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "bright"
            ]
    },
    {
            "id": "en_starter_describing_141",
            "word": "bright",
            "emoji": "💡",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "dark"
            ]
    },
    {
            "id": "en_starter_describing_142",
            "word": "modern",
            "emoji": "🏙️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "ancient"
            ]
    },
    {
            "id": "en_starter_describing_143",
            "word": "ancient",
            "emoji": "🏛️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "modern"
            ]
    },
    {
            "id": "en_starter_describing_144",
            "word": "brave",
            "emoji": "🦁",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "cowardly"
            ]
    },
    {
            "id": "en_starter_describing_145",
            "word": "cowardly",
            "emoji": "🐭",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "brave"
            ]
    },
    {
            "id": "en_starter_describing_146",
            "word": "able",
            "emoji": "💪",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unable"
            ]
    },
    {
            "id": "en_starter_describing_147",
            "word": "fair",
            "emoji": "⚖️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "unfair"
            ]
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
            "sub_theme": null,
            "antonyms": [
                    "many"
            ]
    },
    {
            "id": "en_starter_describing_150",
            "word": "other",
            "emoji": "➕",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "same"
            ]
    },
    {
            "id": "en_starter_describing_151",
            "word": "true",
            "emoji": "✅",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "false"
            ]
    },
    {
            "id": "en_starter_describing_152",
            "word": "false",
            "emoji": "❌",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "true"
            ]
    },
    {
            "id": "en_starter_describing_153",
            "word": "incorrect",
            "emoji": "❌",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "correct"
            ]
    },
    {
            "id": "en_starter_describing_154",
            "word": "normal",
            "emoji": "😐",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "strange"
            ]
    },
    {
            "id": "en_starter_describing_155",
            "word": "shared",
            "emoji": "👥",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "own"
            ]
    },
    {
            "id": "en_starter_describing_156",
            "word": "unclear",
            "emoji": "🌫️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "clear"
            ]
    },
    {
            "id": "en_starter_describing_157",
            "word": "useful",
            "emoji": "🛠️",
            "form": "adjective",
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
            "sub_theme": null,
            "antonyms": [
                    "useless"
            ]
    },
    {
            "id": "en_starter_art_culture_002",
            "word": "manner",
            "lang": "en",
            "level": "starter",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the way in which something is done or happens.",
                            "examples": [
                                    "She speaks in a polite and friendly manner."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_art_culture_003",
            "word": "subject",
            "lang": "en",
            "level": "starter",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an area of study that you learn at school.",
                            "examples": [
                                    "English is my favorite subject at school."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_art_culture_004",
            "word": "passion",
            "lang": "en",
            "level": "starter",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a very strong feeling of liking or loving something.",
                            "examples": [
                                    "Cooking is his absolute passion in life."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_art_culture_005",
            "word": "freedom ≠ slavery",
            "lang": "en",
            "level": "starter",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the power or right to act, speak, or think as one wants ≠ the state of being a slave or completely controlled.",
                            "examples": [
                                    "They fought courageously to defend their freedom and escape from a lifetime of cruel slavery."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_art_culture_006",
            "word": "method",
            "lang": "en",
            "level": "starter",
            "theme": "art_culture",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a systematic way of doing something.",
                            "examples": [
                                    "I tried a new study method to prepare for exams."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_030",
            "word": "simple ≠ complex",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "easily understood or done; presenting no difficulty ≠ consisting of many different and connected parts.",
                            "examples": [
                                    "The basic idea was wonderfully simple, but the actual execution turned out to be incredibly complex."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_031",
            "word": "nature",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the physical world including plants, animals, landscapes, and natural features.",
                            "examples": [
                                    "Walking in nature is highly beneficial for mental wellness."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_032",
            "word": "routine",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a sequence of actions regularly followed.",
                            "examples": [
                                    "Exercising in the morning is part of her daily routine."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_033",
            "word": "declutter",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "to remove unnecessary items from an untidy or overcrowded place.",
                            "examples": [
                                    "Decluttering your desk can improve your focus while studying."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_034",
            "word": "peaceful",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "free from disturbance; tranquil and calm.",
                            "examples": [
                                    "She found a peaceful spot in the park to practice her English."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_035",
            "word": "balance",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a state where different things are equal.",
                            "examples": [
                                    "We need a good balance between work and sleep."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_036",
            "word": "relaxation",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of resting and feeling calm.",
                            "examples": [
                                    "Reading a book is a great way of relaxation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_037",
            "word": "stress",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling of worry or pressure.",
                            "examples": [
                                    "Too much work can cause a lot of stress."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_038",
            "word": "leisure",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "time when you can relax and do what you want.",
                            "examples": [
                                    "In my leisure time, I like to play football."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_039",
            "word": "task",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a small piece of work that you must do.",
                            "examples": [
                                    "Cleaning the kitchen is my daily task."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_071",
            "word": "dreaming",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "indulging in daydreams or fantasies.",
                            "examples": [
                                    "He was dreaming of a warm sunny beach in California."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_072",
            "word": "preacher",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a person who delivers sermons or religious discourses.",
                            "examples": [
                                    "The preacher delivered an inspiring sermon on Sunday morning."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_073",
            "word": "winter ≠ summer",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the coldest season of the year ≠ the warmest season of the year.",
                            "examples": [
                                    "She loves the quiet snow of winter, whereas he prefers the bright sunshine of summer."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_074",
            "word": "warm ≠ cold",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "having or showing a moderate degree of heat ≠ of or at a low or relatively low temperature.",
                            "examples": [
                                    "The warm fireplace offered a beautiful sanctuary from the freezing cold winter winds outside."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_075",
            "word": "safe ≠ dangerous",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "protected from or not exposed to danger or risk ≠ able or likely to cause harm or injury.",
                            "examples": [
                                    "Keep your precious belongings in a safe place, far away from any dangerous elements."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_076",
            "word": "sky",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the region of the atmosphere visible from the earth.",
                            "examples": [
                                    "The blue sky was dotted with fluffy white clouds."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_077",
            "word": "pray",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "address a solemn request or expression of thanks.",
                            "examples": [
                                    "They gather to pray for peace and prosperity."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_nature_078",
            "word": "sensation",
            "lang": "en",
            "level": "starter",
            "theme": "nature",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a physical feeling or perception.",
                            "examples": [
                                    "The new roller coaster gives an exciting sensation of speed."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_040",
            "word": "le salut",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "action de saluer, de dire bonjour ou adieu.",
                            "examples": [
                                    "Il a fait un geste de salut de la main avant de partir."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_041",
            "word": "le retour",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "action de revenir à son point de départ.",
                            "examples": [
                                    "Son retour au pays a été célébré par toute sa famille."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_042",
            "word": "la nostalgie",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "regret mélancolique d'un état ou d'un pays perdu.",
                            "examples": [
                                    "La nostalgie de son enfance l'inspire dans son écriture."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_043",
            "word": "le temps",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "durée mesurable, météo.",
                            "examples": [
                                    "Le temps passe si vite quand on s'amuse ensemble."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_044",
            "word": "retrouver",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "revenir en possession de ce qu'on avait perdu.",
                            "examples": [
                                    "Elle est ravie de retrouver ses anciens camarades."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_045",
            "word": "changer",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "rendre différent, modifier profondément.",
                            "examples": [
                                    "Il a décidé de changer de carrière pour être plus heureux."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_046",
            "word": "l'ami",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "personne avec qui l'on est lié par l'amitié.",
                            "examples": [
                                    "Un ami fidèle est un trésor précieux dans la vie."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_social_047",
            "word": "la gare",
            "lang": "en",
            "level": "starter",
            "theme": "social",
            "form": "noun",
            "definitions": [
                    {
                            "text": "lieu d'arrêt des trains pour les voyageurs.",
                            "examples": [
                                    "Elle l'attend patiemment sur le quai de la gare."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_065",
            "word": "individuality",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Individuality'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_066",
            "word": "belated",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Belated'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_067",
            "word": "melody",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Melody'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_068",
            "word": "choir",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Choir'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_069",
            "word": "chorus",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Chorus'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_070",
            "word": "solo",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Solo'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_071",
            "word": "inspiration",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Inspiration'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_072",
            "word": "peer",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Peer'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_073",
            "word": "path",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Path'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_emotions_074",
            "word": "harmony",
            "lang": "en",
            "level": "starter",
            "theme": "emotions",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'Make Your Own Kind of Music'.",
                            "examples": [
                                    "This is an elegant example of using 'Harmony'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_music_016",
            "word": "optimism ≠ pessimism",
            "lang": "en",
            "level": "starter",
            "theme": "music",
            "form": "noun",
            "definitions": [
                    {
                            "text": "hopefulness and confidence about the future ≠ a tendency to see the worst aspect of things.",
                            "examples": [
                                    "Her natural optimism kept her going, whereas his pessimism made him want to give up."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_music_017",
            "word": "improvement",
            "lang": "en",
            "level": "starter",
            "theme": "music",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'It's Getting Better'.",
                            "examples": [
                                    "This is an elegant example of using 'Improvement'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_music_018",
            "word": "relief",
            "lang": "en",
            "level": "starter",
            "theme": "music",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'It's Getting Better'.",
                            "examples": [
                                    "This is an elegant example of using 'Relief'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_music_019",
            "word": "sunshine",
            "lang": "en",
            "level": "starter",
            "theme": "music",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'It's Getting Better'.",
                            "examples": [
                                    "This is an elegant example of using 'Sunshine'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_music_020",
            "word": "cheer",
            "lang": "en",
            "level": "starter",
            "theme": "music",
            "form": "noun",
            "definitions": [
                    {
                            "text": "Target vocabulary word meaning in 'It's Getting Better'.",
                            "examples": [
                                    "This is an elegant example of using 'Cheer'."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_041",
            "word": "isolation",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the state of being separate from others.",
                            "examples": [
                                    "The remote cabin offered a perfect sense of isolation."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_042",
            "word": "la nostalgia ≠ la modernidad",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "sentimiento de pena por la lejanía o el tiempo pasado ≠ cualidad de lo moderno o actual.",
                            "examples": [
                                    "Sintió una profunda nostalgia por el pueblo antiguo, un contraste total con la fría modernidad."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_043",
            "word": "suburban",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "relating to or characteristic of a suburb.",
                            "examples": [
                                    "They lived in a quiet, peaceful suburban neighborhood."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_044",
            "word": "disconnect",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "an instance of breaking contact or connection.",
                            "examples": [
                                    "There was a temporary disconnect in our phone line."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_045",
            "word": "melancholy",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "a feeling of pensive sadness.",
                            "examples": [
                                    "A gentle melancholy settled over the autumn garden."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    },
    {
            "id": "en_starter_time_046",
            "word": "reflection",
            "lang": "en",
            "level": "starter",
            "theme": "time",
            "form": "noun",
            "definitions": [
                    {
                            "text": "the throwing back of light, heat, or sound.",
                            "examples": [
                                    "The quiet lake offered a beautiful reflection of the trees."
                            ]
                    }
            ],
            "transcription": "-",
            "emoji": "❓"
    }
    ];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data.filter(x => x.form === "adjective")];
})();