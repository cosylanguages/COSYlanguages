(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-SOC-01",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "-",
        "emoji": "❓",
        "legacy_id": "en_intermediate_social_096",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-02",
        "word": "adequate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enough or satisfactory for the purpose.",
                "examples": [
                    "The salary is adequate but not exceptional."
                ]
            }
        ],
        "transcription": "ˈædɪkwət",
        "emoji": "❓",
        "_legacy": {
            "subtext": "barely adequate / more than adequate / quite adequate"
        },
        "legacy_id": "en_intermediate_structured_argument_001",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-03",
        "word": "against",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "preposition",
        "definitions": [
            {
                "text": "Opposed to something.",
                "examples": [
                    "He is strongly against the new policy."
                ]
            }
        ],
        "transcription": "əˈɡɛnst",
        "emoji": "🚫",
        "_legacy": {
            "subtext": "be against, vote against"
        },
        "legacy_id": "en_intermediate_social_094",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-04",
        "word": "airport",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A place where planes land and take off.",
                "examples": [
                    "I am going to the airport.",
                    "The airport is very big."
                ]
            },
            {
                "text": "This is the place where you go to catch a flight.",
                "examples": [
                    "We need to be at the airport two hours before the flight."
                ]
            }
        ],
        "transcription": "ˈeəpɔːt",
        "emoji": "✈️",
        "_legacy": {
            "classification": "regular",
            "plural": "airports",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_travel_006",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-05",
        "word": "algorithm",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈælɡərɪðəm",
        "emoji": "💻",
        "_legacy": {
            "classification": "regular",
            "plural": "algorithms",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_077",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-06",
        "word": "although",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "conjunction",
        "definitions": [
            {
                "text": "In spite of the fact that; even though.",
                "examples": [
                    "Although she is tired, she goes to the gym.",
                    "Although it was raining, we went for a walk."
                ]
            }
        ],
        "transcription": "🇬🇧 ɔːlˈðəʊ | 🇺🇸 ɔːlˈðoʊ",
        "emoji": "🔄",
        "_legacy": {
            "subtext": "even though, despite the fact"
        },
        "legacy_id": "en_intermediate_language_003",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-07",
        "word": "appropriate",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Suitable or right for a particular situation.",
                "examples": [
                    "Her response was very appropriate given the circumstances."
                ]
            }
        ],
        "transcription": "🇬🇧 əˈprəʊpriət | 🇺🇸 əˈproʊpriət",
        "emoji": "❓",
        "_legacy": {
            "subtext": "entirely appropriate / highly appropriate / deemed appropriate"
        },
        "legacy_id": "en_intermediate_structured_argument_002",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-08",
        "word": "argue",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "verb",
        "definitions": [
            {
                "text": "To present reasons supporting a particular view.",
                "examples": [
                    "She argued that remote work reduces productivity."
                ]
            }
        ],
        "transcription": "ˈɑːɡjuː",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "argue about, argue for",
            "classification": "regular",
            "aspect": "action",
            "v2": "argued",
            "v3": "argued",
            "group": "regular",
            "auxiliary": "have",
            "v4": "arguing"
        },
        "legacy_id": "en_intermediate_structured_argument_006",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-09",
        "word": "as a result",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Because of this; consequently.",
                "examples": [
                    "He worked hard. As a result, he got a promotion.",
                    "It rained heavily. As a result, the match was cancelled."
                ]
            }
        ],
        "transcription": "æz ə rɪˈzʌlt",
        "emoji": "🔚",
        "_legacy": {
            "subtext": ""
        },
        "legacy_id": "en_intermediate_language_005",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-10",
        "word": "carrot",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A long orange root vegetable.",
                "examples": [
                    "Carrots are good for your eyes.",
                    "I like raw carrots."
                ]
            },
            {
                "text": "Rabbits love eating carrots.",
                "examples": [
                    "You can use carrots in a cake."
                ]
            }
        ],
        "transcription": "ˈkærət",
        "emoji": "🥕",
        "_legacy": {
            "explanation": "Carrot is a vegetable, the others are fruits.",
            "classification": "regular",
            "plural": "carrots",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_066",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-11",
        "word": "charity",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "An organisation that collects money to help people in need.",
                "examples": [
                    "He donates to several charities each year."
                ]
            }
        ],
        "transcription": "ˈtʃærɪti",
        "emoji": "🎗️",
        "_legacy": {
            "classification": "regular",
            "plural": "charities",
            "countability": "countable",
            "subtext": "donate to charity, registered charity"
        },
        "legacy_id": "en_intermediate_social_090",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-12",
        "word": "child",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A young human who is not yet an adult.",
                "examples": [
                    "The child is playing with a toy.",
                    "How many children do they have?"
                ]
            }
        ],
        "transcription": "tʃaɪld",
        "emoji": "🧒",
        "_legacy": {
            "numberPlural": "5 child",
            "answer": "five children",
            "classification": "regular",
            "plural": "children",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_081",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-13",
        "word": "claim",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "verb",
        "definitions": [
            {
                "text": "To state something as true without necessarily proving it.",
                "examples": [
                    "He claims the new system will reduce costs by thirty percent."
                ]
            }
        ],
        "transcription": "kleɪm",
        "emoji": "📢",
        "_legacy": {
            "subtext": "claim that / make a claim / claim responsibility",
            "classification": "regular",
            "aspect": "action",
            "v2": "claimed",
            "v3": "claimed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "claiming"
        },
        "legacy_id": "en_intermediate_structured_argument_007",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-14",
        "word": "community",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A group of people sharing a common location, identity or interest.",
                "examples": [
                    "He is very active in his local community.",
                    "The online community is very supportive."
                ]
            }
        ],
        "transcription": "kəˈmjuːnɪti",
        "emoji": "🏘️",
        "_legacy": {
            "classification": "regular",
            "plural": "communities",
            "countability": "countable",
            "subtext": "local community, sense of community"
        },
        "legacy_id": "en_intermediate_social_087",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-15",
        "word": "commuter",
        "lang": "en",
        "level": "intermediate",
        "theme": "travel",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who travels some distance to work on a regular basis.",
                "examples": [
                    "The train is full of commuters.",
                    "I am a daily commuter."
                ]
            },
            {
                "text": "This person often uses public transport like trains or buses.",
                "examples": [
                    "Commuters often travel during rush hour."
                ]
            }
        ],
        "transcription": "🇬🇧 kəˈmjuːtə | 🇺🇸 kəˈmjuːtər",
        "emoji": "🚆",
        "_legacy": {
            "classification": "regular",
            "plural": "commuters",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_travel_007",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-16",
        "word": "cultural",
        "lang": "en",
        "level": "intermediate",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the arts, ideas and customs of a society.",
                "examples": [
                    "She has a very strong cultural awareness."
                ]
            }
        ],
        "transcription": "ˈkʌltʃərəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "cultural differences / cultural event / culturally diverse"
        },
        "legacy_id": "en_intermediate_cultural_heritage_002",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-17",
        "word": "democracy",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 dɪˈmɒkrəsi | 🇺🇸 dɪˈmɑːkrəsi",
        "emoji": "🗳️",
        "_legacy": {
            "classification": "regular",
            "plural": "democracies",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_079",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-18",
        "word": "doubt",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "verb",
        "definitions": [
            {
                "text": "To feel uncertain about something.",
                "examples": [
                    "She doubts the new strategy will work in practice."
                ]
            }
        ],
        "transcription": "daʊt",
        "emoji": "❓",
        "_legacy": {
            "subtext": "doubt that / have doubts / seriously doubt",
            "classification": "regular",
            "aspect": "stative",
            "v2": "doubted",
            "v3": "doubted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "doubting"
        },
        "legacy_id": "en_intermediate_probability_certainty_003",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-19",
        "word": "economic",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to money, trade and industry.",
                "examples": [
                    "The economic situation is improving."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌiːkəˈnɒmɪk | 🇺🇸 ˌiːkəˈnɑːmɪk",
        "emoji": "❓",
        "_legacy": {
            "subtext": "economic growth / economic crisis / economic policy"
        },
        "legacy_id": "en_intermediate_finances_investment_002",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-20",
        "word": "elephant",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈɛlɪfənt",
        "emoji": "🐘",
        "_legacy": {
            "classification": "regular",
            "plural": "elephants",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_075",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-21",
        "word": "equality",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "The state of being equal in rights and opportunities.",
                "examples": [
                    "They fight for gender equality at work.",
                    "Equality of opportunity is a key goal.",
                    "She campaigns for equality in the workplace."
                ]
            }
        ],
        "transcription": "🇬🇧 iˈkwɒlɪti | 🇺🇸 iˈkwɑːlɪti",
        "emoji": "⚖️",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "gender equality, racial equality",
            "antonyms": [
                "inequality"
            ]
        },
        "legacy_id": "en_intermediate_social_083",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-22",
        "word": "equity",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The value of a property minus the amount still owed on the mortgage.",
                "examples": [
                    "They have built up significant equity in their home."
                ]
            }
        ],
        "transcription": "ˈɛkwɪti",
        "emoji": "📈",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "home equity, negative equity"
        },
        "legacy_id": "en_intermediate_places_024",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-23",
        "word": "evidence",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "Facts or information used to support a claim.",
                "examples": [
                    "There is strong evidence that exercise reduces stress."
                ]
            }
        ],
        "transcription": "ˈɛvɪdəns",
        "emoji": "🔍",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "scientific evidence, lack of evidence"
        },
        "legacy_id": "en_intermediate_social_092",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-24",
        "word": "evolution",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˌiːvəˈluːʃn",
        "emoji": "🐒",
        "_legacy": {
            "classification": "regular",
            "plural": "evolutions",
            "countability": "uncountable"
        },
        "legacy_id": "en_intermediate_social_078",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-25",
        "word": "fish",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To try to catch fish using a net or a line.",
                "examples": [
                    "They fish in the river every summer."
                ]
            }
        ],
        "transcription": "fɪʃ",
        "emoji": "🎣",
        "_legacy": {
            "image": "images/vocabulary/actions/to fish.png",
            "subtext": "go fishing, fish for trout",
            "classification": "regular",
            "aspect": "action",
            "v2": "fished",
            "v3": "fished",
            "group": "regular",
            "auxiliary": "have",
            "v4": "fishing",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "fiskaz"
            }
        },
        "legacy_id": "en_intermediate_social_056",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-26",
        "word": "freedom",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "The right to act and think without restriction.",
                "examples": [
                    "Freedom of speech is very important.",
                    "They are fighting for their freedom."
                ]
            }
        ],
        "transcription": "ˈfriːdəm",
        "emoji": "🗽",
        "_legacy": {
            "classification": "regular",
            "plural": "freedoms",
            "countability": "uncountable",
            "subtext": "freedom of speech, individual freedom",
            "antonyms": [
                "slavery"
            ]
        },
        "legacy_id": "en_intermediate_social_084",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-27",
        "word": "garden",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "transcription": "-",
        "emoji": "🌳",
        "_legacy": {
            "image": "images/vocabulary/places/garden.png",
            "classification": "regular",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_places_019",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-28",
        "word": "garden",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To work in a garden, taking care of plants and flowers.",
                "examples": [
                    "My grandmother loves to garden in the morning."
                ]
            }
        ],
        "transcription": "ˈɡɑːdn",
        "emoji": "🪴",
        "_legacy": {
            "subtext": "garden on weekends, organic gardening",
            "classification": "regular",
            "aspect": "action",
            "v2": "gardened",
            "v3": "gardened",
            "group": "regular",
            "auxiliary": "have",
            "v4": "gardening"
        },
        "legacy_id": "en_intermediate_social_055",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-29",
        "word": "generation",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "All the people of a similar age in a society.",
                "examples": [
                    "Each generation faces different challenges.",
                    "My generation grew up with the internet.",
                    "Each generation faces different economic pressures."
                ]
            }
        ],
        "transcription": "ˌdʒɛnəˈreɪʃn",
        "emoji": "👪",
        "_legacy": {
            "classification": "regular",
            "plural": "generations",
            "countability": "countable",
            "subtext": "future generations, gap between generations"
        },
        "legacy_id": "en_intermediate_social_088",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-30",
        "word": "global",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Climate change is a global problem."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɡləʊbl | 🇺🇸 ˈɡloʊbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "global issue / global market / on a global scale"
        },
        "legacy_id": "en_intermediate_social_028",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-31",
        "word": "however",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to introduce a contrast or opposite idea.",
                "examples": [
                    "I like the city. However, it is very expensive.",
                    "The hotel was beautiful. However, the service was poor."
                ]
            }
        ],
        "transcription": "🇬🇧 haʊˈɛvə | 🇺🇸 haʊˈɛvər",
        "emoji": "🤔",
        "_legacy": {
            "subtext": "nevertheless, on the other hand"
        },
        "legacy_id": "en_intermediate_language_002",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-32",
        "word": "in favour of",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Supporting or agreeing with something.",
                "examples": [
                    "Most employees are in favour of flexible working."
                ]
            }
        ],
        "transcription": "ɪn ˈfeɪvər əv",
        "emoji": "✅",
        "_legacy": {
            "subtext": "be in favour of, vote in favour of"
        },
        "legacy_id": "en_intermediate_social_095",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-33",
        "word": "in my opinion",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to introduce your personal view.",
                "examples": [
                    "In my opinion, remote work is more productive.",
                    "In my opinion, the movie was too long.",
                    "In my opinion, working from home is more productive."
                ]
            }
        ],
        "transcription": "ɪn maɪ əˈpɪnjən",
        "emoji": "🗣️",
        "_legacy": {
            "subtext": "from my perspective, I think"
        },
        "legacy_id": "en_intermediate_social_089",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-34",
        "word": "increase",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To become or make something larger in amount or level.",
                "examples": [
                    "Stress levels have increased significantly since the restructure."
                ]
            }
        ],
        "transcription": "ɪnˈkriːs",
        "emoji": "📈",
        "_legacy": {
            "subtext": "increase productivity / increase costs / dramatically increase",
            "classification": "regular",
            "aspect": "action",
            "v2": "increased",
            "v3": "increased",
            "group": "regular",
            "auxiliary": "have",
            "v4": "increasing"
        },
        "legacy_id": "en_intermediate_finances_investment_003",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-35",
        "word": "inequality",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "An unfair situation in which some people have more than others.",
                "examples": [
                    "Income inequality is growing in many countries.",
                    "We must address the inequality in our schools.",
                    "Income inequality has grown in recent decades."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌɪnɪˈkwɒlɪti | 🇺🇸 ˌɪnɪˈkwɑːlɪti",
        "emoji": "🚫⚖️",
        "_legacy": {
            "classification": "regular",
            "plural": "inequalities",
            "countability": "uncountable",
            "subtext": "income inequality, social inequality",
            "antonyms": [
                "equality"
            ]
        },
        "legacy_id": "en_intermediate_social_085",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-36",
        "word": "journalism",
        "form": "noun",
        "transcription": "ˈdʒɜːrnəlɪzəm",
        "definitions": [
            {
                "text": "The work of collecting and writing news stories.",
                "examples": [
                    "She studied journalism at university."
                ]
            }
        ],
        "emoji": "📰",
        "lang": "en",
        "level": "b1",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-37",
        "word": "laptop",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈlæptɒp | 🇺🇸 ˈlæptɑːp",
        "emoji": "💻",
        "_legacy": {
            "classification": "regular",
            "plural": "laptops",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_074",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-38",
        "word": "library",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈlaɪbrəri",
        "emoji": "📚",
        "_legacy": {
            "explanation": "A library is a place for books, while the others might be related to food or travel.",
            "classification": "regular",
            "plural": "libraries",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_places_020",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-39",
        "word": "likely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably going to happen.",
                "examples": [
                    "A pay rise this year seems likely."
                ]
            }
        ],
        "transcription": "ˈlaɪkli",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very likely / highly likely / most likely"
        },
        "legacy_id": "en_intermediate_probability_certainty_002",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-40",
        "word": "local",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a nearby area.",
                "examples": [
                    "The company supports local charities."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈləʊkl | 🇺🇸 ˈloʊkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "local area / local community / at a local level"
        },
        "legacy_id": "en_intermediate_social_029",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-41",
        "word": "logical",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Following a sensible and reasonable way of thinking.",
                "examples": [
                    "His argument is very logical and well-structured."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈlɒdʒɪkl | 🇺🇸 ˈlɑːdʒɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "perfectly logical / very logical / a logical conclusion"
        },
        "legacy_id": "en_intermediate_structured_argument_004",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-42",
        "word": "milkshake",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A cold drink made of milk, ice cream, and flavorings.",
                "examples": [
                    "I'll have a chocolate milkshake.",
                    "The milkshake is very thick."
                ]
            },
            {
                "text": "This is a sweet and thick drink.",
                "examples": [
                    "Milkshakes are popular in American diners."
                ]
            }
        ],
        "transcription": "ˈmɪlkʃeɪk",
        "emoji": "🥤",
        "_legacy": {
            "classification": "regular",
            "plural": "milkshakes",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_067",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-43",
        "word": "mirror",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈmɪrə | 🇺🇸 ˈmɪrər",
        "emoji": "🪞",
        "_legacy": {
            "classification": "regular",
            "plural": "mirrors",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_072",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-44",
        "word": "monkey",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ˈmʌŋki",
        "emoji": "🐒",
        "_legacy": {
            "classification": "regular",
            "plural": "monkeys",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_076",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-45",
        "word": "mortgage",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A bank loan secured against a property, repaid over many years.",
                "examples": [
                    "The mortgage is spread over twenty-five years."
                ]
            }
        ],
        "transcription": "ˈmɔːɡɪdʒ",
        "emoji": "🏠",
        "_legacy": {
            "classification": "regular",
            "plural": "mortgages",
            "countability": "countable",
            "subtext": "take out a mortgage, pay off a mortgage"
        },
        "legacy_id": "en_intermediate_places_022",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-46",
        "word": "museum",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [],
        "transcription": "mjuˈziːəm",
        "emoji": "🏛️",
        "_legacy": {
            "classification": "regular",
            "plural": "museums",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_places_021",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-47",
        "word": "national",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to a whole country.",
                "examples": [
                    "The new policy will affect national healthcare."
                ]
            }
        ],
        "transcription": "ˈnæʃnəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "national interest / national policy / on a national level"
        },
        "legacy_id": "en_intermediate_social_030",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-48",
        "word": "obvious",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Easy to see or understand; clear to everyone.",
                "examples": [
                    "It is obvious that the system needs updating."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈɒbviəs | 🇺🇸 ˈɑːbviəs",
        "emoji": "❓",
        "_legacy": {
            "subtext": "perfectly obvious / very obvious / make obvious"
        },
        "legacy_id": "en_intermediate_structured_argument_005",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-49",
        "word": "on the other hand",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to introduce a contrasting point.",
                "examples": [
                    "City life is exciting. On the other hand, it is stressful.",
                    "Laptops are portable. On the other hand, they are less powerful."
                ]
            }
        ],
        "transcription": "🇬🇧 ɒn ði ˈʌðə hænd | 🇺🇸 ɑːn ði ˈʌðə hænd",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": ""
        },
        "legacy_id": "en_intermediate_language_004",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-50",
        "word": "opinion",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A personal view or judgement not necessarily based on facts.",
                "examples": [
                    "In my opinion, working from home is more productive."
                ]
            }
        ],
        "transcription": "əˈpɪnjən",
        "emoji": "🗣️",
        "_legacy": {
            "classification": "regular",
            "plural": "opinions",
            "countability": "countable",
            "subtext": "public opinion, give an opinion"
        },
        "legacy_id": "en_intermediate_social_093",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-51",
        "word": "original",
        "lang": "en",
        "level": "intermediate",
        "theme": "art_culture",
        "form": "adjective",
        "definitions": [
            {
                "text": "New and creative; not a copy.",
                "examples": [
                    "Her proposal was very original and well received."
                ]
            }
        ],
        "transcription": "əˈrɪdʒənl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very original / completely original / an original idea"
        },
        "legacy_id": "en_intermediate_cultural_heritage_001",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-52",
        "word": "pancake",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A flat, round cake cooked in a pan.",
                "examples": [
                    "She is making pancakes.",
                    "I like pancakes with honey."
                ]
            },
            {
                "text": "People often eat this for breakfast with syrup.",
                "examples": [
                    "Pancakes are soft and sweet."
                ]
            }
        ],
        "transcription": "ˈpænkeɪk",
        "emoji": "🥞",
        "_legacy": {
            "classification": "regular",
            "plural": "pancakes",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_065",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-53",
        "word": "participate",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To take part in something.",
                "examples": [
                    "He participates actively in community meetings."
                ]
            }
        ],
        "transcription": "pɑːˈtɪsɪpeɪt",
        "emoji": "🙋",
        "_legacy": {
            "subtext": "participate in / actively participate / participation rate",
            "classification": "regular",
            "aspect": "action",
            "v2": "participated",
            "v3": "participated",
            "group": "regular",
            "auxiliary": "have",
            "v4": "participating"
        },
        "legacy_id": "en_intermediate_social_059",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-54",
        "word": "photograph",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To take a picture of someone or something using a camera.",
                "examples": [
                    "He spent the day photographing the local wildlife."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈfəʊtəɡrɑːf | 🇺🇸 ˈfoʊtəɡrɑːf",
        "emoji": "📷",
        "_legacy": {
            "subtext": "photograph a wedding, photograph wildlife",
            "classification": "regular",
            "aspect": "action",
            "v2": "photographed",
            "v3": "photographed",
            "group": "regular",
            "auxiliary": "have",
            "v4": "photographing"
        },
        "legacy_id": "en_intermediate_social_054",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-55",
        "word": "point of view",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A particular way of thinking about something; an opinion.",
                "examples": [
                    "From my point of view, the policy is unfair."
                ]
            }
        ],
        "transcription": "pɔɪnt əv vjuː",
        "emoji": "👁️",
        "_legacy": {
            "plural": "points of view",
            "countability": "countable",
            "subtext": "from my point of view, different point of view"
        },
        "legacy_id": "en_intermediate_social_091",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-56",
        "word": "property",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A building and the land it stands on; also a legal right to own something.",
                "examples": [
                    "Property prices have risen sharply in this city."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈprɒpəti | 🇺🇸 ˈprɑːpəti",
        "emoji": "🏡",
        "_legacy": {
            "classification": "regular",
            "plural": "properties",
            "countability": "countable",
            "subtext": "property market, rental property"
        },
        "legacy_id": "en_intermediate_places_023",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-57",
        "word": "protest",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To express disagreement or opposition publicly.",
                "examples": [
                    "Workers protested against the proposed pay cuts."
                ]
            }
        ],
        "transcription": "prəˈtɛst",
        "emoji": "📢",
        "_legacy": {
            "subtext": "protest against / stage a protest / peaceful protest",
            "classification": "regular",
            "aspect": "action",
            "v2": "protested",
            "v3": "protested",
            "group": "regular",
            "auxiliary": "have",
            "v4": "protesting"
        },
        "legacy_id": "en_intermediate_social_060",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-58",
        "word": "raise",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To increase knowledge or concern about an issue.",
                "examples": [
                    "The campaign raised awareness of workplace mental health."
                ]
            }
        ],
        "transcription": "reɪz",
        "emoji": "📈",
        "_legacy": {
            "subtext": "raise awareness / raise a concern / raise an issue",
            "classification": "regular",
            "aspect": "action",
            "v2": "raised",
            "v3": "raised",
            "group": "regular",
            "auxiliary": "have",
            "v4": "raising"
        },
        "legacy_id": "en_intermediate_social_062",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-59",
        "word": "reasonable",
        "lang": "en",
        "level": "intermediate",
        "theme": "language",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sensible and fair; not extreme.",
                "examples": [
                    "The price is very reasonable for what you get."
                ]
            }
        ],
        "transcription": "ˈriːznəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very reasonable / perfectly reasonable / more than reasonable"
        },
        "legacy_id": "en_intermediate_structured_argument_003",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-60",
        "word": "reduce",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something smaller in size, amount or degree.",
                "examples": [
                    "The company is trying to reduce its carbon footprint."
                ]
            }
        ],
        "transcription": "rɪˈdjuːs",
        "emoji": "📉",
        "_legacy": {
            "subtext": "reduce costs / reduce stress / significantly reduce",
            "classification": "regular",
            "aspect": "action",
            "v2": "reduced",
            "v3": "reduced",
            "group": "regular",
            "auxiliary": "have",
            "v4": "reducing"
        },
        "legacy_id": "en_intermediate_finances_investment_004",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-61",
        "word": "remote work",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Working from a location other than the office, usually home.",
                "examples": [
                    "Remote work has become normal for many professionals."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˈməʊt wɜːk | 🇺🇸 rɪˈmoʊt wɜːk",
        "emoji": "💻",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "remote work policy, shift to remote work"
        },
        "legacy_id": "en_intermediate_social_080",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-62",
        "word": "renovation",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "The process of improving a building by repairing or updating it.",
                "examples": [
                    "They spent a year on renovations before moving in."
                ]
            }
        ],
        "transcription": "ˌrɛnəˈveɪʃn",
        "emoji": "🔨",
        "_legacy": {
            "classification": "regular",
            "plural": "renovations",
            "countability": "countable",
            "subtext": "home renovation, undergo renovations"
        },
        "legacy_id": "en_intermediate_places_025",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-63",
        "word": "run out",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "verb",
        "definitions": [
            {
                "text": "To have no more of something left.",
                "examples": [
                    "The project ran out of budget three weeks early."
                ]
            }
        ],
        "transcription": "rʌn aʊt",
        "emoji": "📉",
        "_legacy": {
            "subtext": "run out of money / run out of time / run out of ideas",
            "classification": "phrasal",
            "aspect": "action",
            "v2": "ran out",
            "v3": "run out",
            "group": "regular",
            "auxiliary": "have"
        },
        "legacy_id": "en_intermediate_finances_investment_005",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-64",
        "word": "scarf",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "skɑːf",
        "emoji": "🧣",
        "_legacy": {
            "classification": "regular",
            "plural": "scarves",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_069",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-65",
        "word": "shelf",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ʃɛlf",
        "emoji": "📚",
        "_legacy": {
            "classification": "regular",
            "plural": "shelves",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_071",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-66",
        "word": "social",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to society and its organisation.",
                "examples": [
                    "The company has strong social values."
                ]
            }
        ],
        "transcription": "🇬🇧 ˈsəʊʃl | 🇺🇸 ˈsoʊʃl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "social media / social skills / socially responsible"
        },
        "legacy_id": "en_intermediate_social_031",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-67",
        "word": "stand for",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To represent or tolerate something.",
                "examples": [
                    "What values does your company stand for?"
                ]
            }
        ],
        "transcription": "stænd fɔː",
        "emoji": "🛡️",
        "_legacy": {
            "subtext": "stand for something / not stand for / what does it stand for",
            "classification": "phrasal",
            "aspect": "stative",
            "v2": "stood for",
            "v3": "stood for",
            "group": "regular",
            "auxiliary": "have"
        },
        "legacy_id": "en_intermediate_social_063",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-68",
        "word": "support",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To agree with and help a cause or person.",
                "examples": [
                    "She supports the campaign for better public transport."
                ]
            }
        ],
        "transcription": "səˈpɔːt",
        "emoji": "🤝",
        "_legacy": {
            "subtext": "support a cause / support someone / show support",
            "classification": "regular",
            "aspect": "both",
            "v2": "supported",
            "v3": "supported",
            "group": "regular",
            "auxiliary": "have",
            "v4": "supporting"
        },
        "legacy_id": "en_intermediate_social_061",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-69",
        "word": "survey",
        "lang": "en",
        "level": "intermediate",
        "theme": "places",
        "form": "noun",
        "definitions": [
            {
                "text": "A professional inspection of a property's condition before purchase.",
                "examples": [
                    "The survey revealed serious problems with the roof."
                ]
            }
        ],
        "transcription": "ˈsɜːveɪ",
        "emoji": "📝",
        "_legacy": {
            "classification": "regular",
            "plural": "surveys",
            "countability": "countable",
            "subtext": "property survey, conduct a survey"
        },
        "legacy_id": "en_intermediate_places_026",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-70",
        "word": "sushi",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A Japanese dish with rice and raw fish.",
                "examples": [
                    "I like eating sushi with soy sauce.",
                    "We are going to a sushi restaurant."
                ]
            },
            {
                "text": "This food is originally from Japan.",
                "examples": [
                    "Sushi is often served with ginger and wasabi."
                ]
            }
        ],
        "transcription": "ˈsuːʃi",
        "emoji": "🍣",
        "_legacy": {
            "classification": "regular",
            "plural": "sushi",
            "countability": "uncountable"
        },
        "legacy_id": "en_intermediate_social_064",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-71",
        "word": "sweater",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈswɛtə | 🇺🇸 ˈswɛtər",
        "emoji": "🧶",
        "_legacy": {
            "classification": "regular",
            "plural": "sweaters",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_068",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-72",
        "word": "thin",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "adjective",
        "definitions": [
            {
                "text": "thin",
                "examples": []
            }
        ],
        "transcription": "θɪn",
        "emoji": "❓",
        "_legacy": {
            "subtext": "paper thin / exceptionally thin / growing thin"
        },
        "legacy_id": "en_intermediate_social_027",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-73",
        "word": "trust",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A firm belief in the honesty and reliability of someone.",
                "examples": [
                    "Trust is the foundation of a good relationship.",
                    "It takes years to build trust and seconds to break it."
                ]
            }
        ],
        "transcription": "trʌst",
        "emoji": "🤝",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "mutual trust, lack of trust",
            "antonyms": [
                "distrust"
            ]
        },
        "legacy_id": "en_intermediate_social_082",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-74",
        "word": "typical",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Showing the most usual qualities.",
                "examples": [
                    "This is a typical example of the problem."
                ]
            }
        ],
        "transcription": "ˈtɪpɪkl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very typical / typical of / a typical case"
        },
        "legacy_id": "en_intermediate_spatial_description_001",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-75",
        "word": "umbrella",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "ʌmˈbrɛlə",
        "emoji": "☂️",
        "_legacy": {
            "classification": "regular",
            "plural": "umbrellas",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_073",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-76",
        "word": "unlikely",
        "lang": "en",
        "level": "intermediate",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Probably not going to happen.",
                "examples": [
                    "It is unlikely that prices will fall this year."
                ]
            }
        ],
        "transcription": "ʌnˈlaɪkli",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very unlikely / highly unlikely / completely unlikely"
        },
        "legacy_id": "en_intermediate_probability_certainty_001",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-77",
        "word": "valuable",
        "lang": "en",
        "level": "intermediate",
        "theme": "shopping",
        "form": "adjective",
        "definitions": [
            {
                "text": "Worth a lot; very useful or important.",
                "examples": [
                    "Her experience is extremely valuable to the team."
                ]
            }
        ],
        "transcription": "ˈvæljuəbl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "very valuable / invaluable / highly valuable"
        },
        "legacy_id": "en_intermediate_finances_investment_001",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-78",
        "word": "volunteer",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A person who offers to do something without being paid.",
                "examples": [
                    "He is a volunteer at the hospital.",
                    "Many volunteers helped clean up the park.",
                    "She volunteers at the local food bank every Saturday."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌvɒlənˈtɪə | 🇺🇸 ˌvɑːlənˈtɪər",
        "emoji": "🙋",
        "_legacy": {
            "classification": "regular",
            "plural": "volunteers",
            "countability": "countable",
            "subtext": "volunteer work, unpaid work"
        },
        "legacy_id": "en_intermediate_social_086",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-79",
        "word": "volunteer",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To offer to do something without being paid.",
                "examples": [
                    "She volunteers at the local food bank.",
                    "I want to volunteer for the charity event.",
                    "She volunteers at the local food bank every Saturday."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌvɒlənˈtɪə | 🇺🇸 ˌvɑːlənˈtɪər",
        "emoji": "🙋",
        "_legacy": {
            "subtext": "volunteer work, unpaid work",
            "classification": "regular",
            "aspect": "action",
            "v2": "volunteered",
            "v3": "volunteered",
            "group": "regular",
            "auxiliary": "have",
            "v4": "volunteering"
        },
        "legacy_id": "en_intermediate_social_057",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-80",
        "word": "vote",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "verb",
        "definitions": [
            {
                "text": "To express a choice formally, especially in an election.",
                "examples": [
                    "She votes in every local and national election."
                ]
            }
        ],
        "transcription": "🇬🇧 vəʊt | 🇺🇸 voʊt",
        "emoji": "🗳️",
        "_legacy": {
            "subtext": "vote for / vote against / vote in an election",
            "classification": "regular",
            "aspect": "action",
            "v2": "voted",
            "v3": "voted",
            "group": "regular",
            "auxiliary": "have",
            "v4": "voting"
        },
        "legacy_id": "en_intermediate_social_058",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    },
    {
        "id": "B1-SOC-81",
        "word": "wardrobe",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈwɔːdrəʊb | 🇺🇸 ˈwɔːdroʊb",
        "emoji": "👗",
        "_legacy": {
            "classification": "regular",
            "plural": "wardrobes",
            "countability": "countable"
        },
        "legacy_id": "en_intermediate_social_070",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
