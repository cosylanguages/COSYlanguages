(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-ADJ-SEL-027",
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
        ],
        "legacy_id": "A1-SELF-01",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-029",
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
        ],
        "legacy_id": "A1-SELF-03",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-031",
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
        ],
        "legacy_id": "A1-SELF-05",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-033",
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
        ],
        "legacy_id": "A1-SELF-07",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-035",
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
        ],
        "legacy_id": "A1-SELF-09",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-037",
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
        ],
        "legacy_id": "A1-SELF-11",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-039",
        "word": "bitter",
        "emoji": "☕",
        "form": "adjective",
        "subtext": "a bitter taste / bitter coffee",
        "synonyms": [
            "strong",
            "sharp"
        ],
        "definitions": [
            {
                "text": "Having a strong sharp taste that is not sweet.",
                "examples": [
                    "This coffee is very bitter."
                ]
            }
        ],
        "comparative": "bitterer",
        "superlative": "the bitterest",
        "transcription": "ˈbɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "sweet"
        ],
        "legacy_id": "A1-SELF-14",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-041",
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
        ],
        "legacy_id": "A1-SELF-21",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-043",
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
        ],
        "legacy_id": "A1-SELF-23",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-045",
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
        ],
        "legacy_id": "A1-SELF-27",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-047",
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
        ],
        "legacy_id": "A1-SELF-31",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-049",
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
        ],
        "legacy_id": "A1-SELF-33",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-051",
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
        ],
        "legacy_id": "A1-SELF-35",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-053",
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
        ],
        "legacy_id": "A1-SELF-40",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-055",
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
        ],
        "legacy_id": "A1-SELF-42",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-057",
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
        ],
        "legacy_id": "A1-SELF-44",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-059",
        "word": "creative",
        "emoji": "🎨",
        "form": "adjective",
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
        "sub_theme": null,
        "legacy_id": "A1-SELF-46",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-061",
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
        ],
        "legacy_id": "A1-SELF-48",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-063",
        "word": "delicious",
        "emoji": "😋",
        "form": "adjective",
        "subtext": "delicious meal / smell delicious",
        "synonyms": [
            "tasty",
            "yummy"
        ],
        "definitions": [
            {
                "text": "Having a very pleasant taste or smell.",
                "examples": [
                    "The food is delicious."
                ]
            }
        ],
        "comparative": "more delicious",
        "superlative": "the most delicious",
        "transcription": "dɪˈlɪʃəs",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "disgusting"
        ],
        "legacy_id": "A1-SELF-50",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-065",
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
        ],
        "legacy_id": "A1-SELF-52",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-067",
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
        ],
        "legacy_id": "A1-SELF-55",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-069",
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
        ],
        "legacy_id": "A1-SELF-57",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-071",
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
        ],
        "legacy_id": "A1-SELF-59",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-073",
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
        ],
        "legacy_id": "A1-SELF-61",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-075",
        "word": "fine",
        "emoji": "😊",
        "form": "adjective",
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
        "sub_theme": null,
        "legacy_id": "A1-SELF-63",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-077",
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
        ],
        "legacy_id": "A1-SELF-67",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-079",
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
        ],
        "legacy_id": "A1-SELF-69",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-081",
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
        ],
        "legacy_id": "A1-SELF-75",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-083",
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
        ],
        "legacy_id": "A1-SELF-81",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-085",
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
        ],
        "legacy_id": "A1-SELF-84",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-087",
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
        ],
        "legacy_id": "A1-SELF-86",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-089",
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
        ],
        "legacy_id": "A1-SELF-88",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-091",
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
        ],
        "legacy_id": "A1-SELF-90",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-093",
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
        ],
        "legacy_id": "A1-SELF-92",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-095",
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
        ],
        "legacy_id": "A1-SELF-97",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-097",
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
        ],
        "legacy_id": "A1-SELF-99",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-099",
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
        ],
        "legacy_id": "A1-SELF-101",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-101",
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
        ],
        "legacy_id": "A1-SELF-104",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-103",
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
        ],
        "legacy_id": "A1-SELF-106",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-105",
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
        ],
        "legacy_id": "A1-SELF-109",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-107",
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
        ],
        "legacy_id": "A1-SELF-111",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-109",
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
        ],
        "legacy_id": "A1-SELF-113",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-111",
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
        ],
        "legacy_id": "A1-SELF-115",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-113",
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
        ],
        "legacy_id": "A1-SELF-119",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-115",
        "word": "oval",
        "emoji": "🥚",
        "form": "adjective",
        "subtext": "an oval mirror",
        "synonyms": [
            "egg-shaped"
        ],
        "definitions": [
            {
                "text": "Shaped like an egg.",
                "examples": [
                    "The mirror is oval."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈoʊvəl",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "round"
        ],
        "legacy_id": "A1-SELF-121",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-117",
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
        ],
        "legacy_id": "A1-SELF-124",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-119",
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
        ],
        "legacy_id": "A1-SELF-126",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-121",
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
        ],
        "legacy_id": "A1-SELF-131",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-123",
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
        ],
        "legacy_id": "A1-SELF-133",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-125",
        "word": "proud",
        "form": "adjective",
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
        "sub_theme": null,
        "legacy_id": "A1-SELF-135",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-127",
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
        ],
        "legacy_id": "A1-SELF-140",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-129",
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
        ],
        "legacy_id": "A1-SELF-142",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-131",
        "word": "rectangular",
        "emoji": "▭",
        "form": "adjective",
        "subtext": "a rectangular room",
        "synonyms": [
            "four-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a rectangle.",
                "examples": [
                    "We have a rectangular table in the kitchen."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "rɛkˈtæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "round"
        ],
        "legacy_id": "A1-SELF-144",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-133",
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
        ],
        "legacy_id": "A1-SELF-148",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-135",
        "word": "rough",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not smooth.",
                "examples": [
                    "The dog has rough fur."
                ]
            }
        ],
        "subtext": "rough skin / rough sea",
        "synonyms": [
            "uneven"
        ],
        "comparative": "rougher",
        "superlative": "the roughest",
        "transcription": "rəf",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "smooth"
        ],
        "legacy_id": "A1-SELF-151",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-137",
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
        ],
        "legacy_id": "A1-SELF-153",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-139",
        "word": "salty",
        "emoji": "🧂",
        "form": "adjective",
        "subtext": "salty snacks / too salty",
        "synonyms": [
            "tasting of salt"
        ],
        "definitions": [
            {
                "text": "Containing or tasting of salt.",
                "examples": [
                    "The popcorn is very salty."
                ]
            }
        ],
        "comparative": "saltier",
        "superlative": "the saltiest",
        "transcription": "ˈsɔlti",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "A1-SELF-155",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-141",
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
        ],
        "legacy_id": "A1-SELF-157",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-143",
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
        ],
        "legacy_id": "A1-SELF-160",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-145",
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
        ],
        "legacy_id": "A1-SELF-162",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-147",
        "word": "sharp",
        "emoji": "🔪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a thin edge that is able to cut things or a fine point which is able to make a hole in things.",
                "examples": [
                    "This knife is very sharp."
                ]
            }
        ],
        "subtext": "a sharp knife / very sharp",
        "synonyms": [
            "pointed"
        ],
        "comparative": "sharper",
        "superlative": "the sharpest",
        "transcription": "ʃɑrp",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "A1-SELF-164",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-149",
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
        ],
        "legacy_id": "A1-SELF-172",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-151",
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
        ],
        "legacy_id": "A1-SELF-175",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-153",
        "word": "smooth",
        "emoji": "🧼",
        "form": "adjective",
        "subtext": "smooth skin / smooth surface",
        "synonyms": [
            "flat",
            "even"
        ],
        "definitions": [
            {
                "text": "Having an even and regular surface or consistency; not rough.",
                "examples": [
                    "The table has a very smooth surface."
                ]
            }
        ],
        "comparative": "smoother",
        "superlative": "the smoothest",
        "transcription": "smuð",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "rough"
        ],
        "legacy_id": "A1-SELF-177",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-155",
        "word": "sour",
        "emoji": "🍋",
        "form": "adjective",
        "subtext": "a sour taste / sour lemons",
        "synonyms": [
            "sharp-tasting"
        ],
        "definitions": [
            {
                "text": "Having a sharp taste like that of a lemon.",
                "examples": [
                    "Lemons are sour."
                ]
            }
        ],
        "comparative": "sourer",
        "superlative": "the sourest",
        "transcription": "saʊər",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "sweet"
        ],
        "legacy_id": "A1-SELF-181",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-157",
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
        ],
        "legacy_id": "A1-SELF-183",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-159",
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
        ],
        "legacy_id": "A1-SELF-185",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-161",
        "word": "sweet",
        "emoji": "🍬",
        "form": "adjective",
        "subtext": "sweet fruit / sweet tooth / very sweet",
        "synonyms": [
            "sugary"
        ],
        "definitions": [
            {
                "text": "Having a taste like sugar.",
                "examples": [
                    "I like sweet things."
                ]
            }
        ],
        "comparative": "sweeter",
        "superlative": "the sweetest",
        "transcription": "swit",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "bitter"
        ],
        "legacy_id": "A1-SELF-190",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-163",
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
        ],
        "legacy_id": "A1-SELF-195",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-165",
        "word": "triangular",
        "emoji": "🔺",
        "form": "adjective",
        "subtext": "a triangular shape",
        "synonyms": [
            "three-sided"
        ],
        "definitions": [
            {
                "text": "Shaped like a triangle.",
                "examples": [
                    "The sign is triangular."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "traɪˈæŋgjələr",
        "lang": "en",
        "level": "starter",
        "theme": "describing",
        "sub_theme": null,
        "antonyms": [
            "square"
        ],
        "legacy_id": "A1-SELF-200",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-167",
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
        ],
        "legacy_id": "A1-SELF-202",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-169",
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
        ],
        "legacy_id": "A1-SELF-204",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-171",
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
        ],
        "legacy_id": "A1-SELF-206",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-173",
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
        ],
        "legacy_id": "A1-SELF-208",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-175",
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
        ],
        "legacy_id": "A1-SELF-210",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-177",
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
        ],
        "legacy_id": "A1-SELF-212",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-179",
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
        ],
        "legacy_id": "A1-SELF-215",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-181",
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
        ],
        "legacy_id": "A1-SELF-221",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-183",
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
        ],
        "legacy_id": "A1-SELF-223",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-241",
        "word": "slim",
        "form": "adjective",
        "transcription": "slɪm",
        "emoji": "🧘",
        "definitions": [
            {
                "text": "Attractively thin.",
                "examples": [
                    "She has a slim figure.",
                    "He stays slim by swimming."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    },
    {
        "id": "A1-ADJ-SEL-242",
        "word": "handsome",
        "form": "adjective",
        "transcription": "ˈhænsəm",
        "emoji": "🕺",
        "definitions": [
            {
                "text": "Good-looking (usually for men).",
                "examples": [
                    "A handsome man.",
                    "He wore a handsome suit."
                ]
            }
        ],
        "level": "starter",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Appearance",
        "pos_section": "Adjectives",
        "sub_subcategory": "Descriptive_Traits"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
