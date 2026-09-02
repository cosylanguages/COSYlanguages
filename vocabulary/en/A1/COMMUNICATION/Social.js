(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-COMM-01",
        "word": "a",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ə",
        "definitions": [
            {
                "text": "Used before a noun to refer to one thing or person for the first time.",
                "examples": [
                    "I have a car.",
                    "She is a doctor."
                ]
            }
        ],
        "subtext": "indefinite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "the"
        ],
        "legacy_id": "en_starter_language_017",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-02",
        "word": "again",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "One more time.",
                "examples": [
                    "Can you say that again, please?"
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "əˈgɛn",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_frequency_adverbs_006",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-03",
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
        ],
        "legacy_id": "en_starter_giving_opinions_021",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-04",
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
        "transcription": "ˈɔlsoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_conjunctions_connectors_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-05",
        "word": "always",
        "emoji": "♾️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At all times; every time.",
                "examples": [
                    "I always drink coffee in the morning."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈɔlˌweɪz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "never"
        ],
        "legacy_id": "en_starter_language_012",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-06",
        "word": "an",
        "emoji": "🅰️",
        "form": "determiner",
        "transcription": "ən",
        "definitions": [
            {
                "text": "Used before a noun starting with a vowel sound.",
                "examples": [
                    "I have an apple.",
                    "He is an engineer."
                ]
            }
        ],
        "subtext": "indefinite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "the"
        ],
        "legacy_id": "en_starter_language_018",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-07",
        "word": "and",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to join words or parts of sentences.",
                "examples": [
                    "I like coffee and tea."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "➕",
        "transcription": "ænd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "or"
        ],
        "legacy_id": "en_starter_language_009",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-08",
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
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "en_starter_asking_answering_questions_017",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-09",
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
        ],
        "legacy_id": "en_starter_asking_answering_questions_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-10",
        "word": "any",
        "emoji": "❓",
        "form": "determiner",
        "transcription": "ˈɛni",
        "definitions": [
            {
                "text": "Used in questions and negative sentences to refer to one or more of something.",
                "examples": [
                    "Do you have any questions?",
                    "I don't have any money."
                ]
            }
        ],
        "subtext": "used in negatives and questions",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "some"
        ],
        "legacy_id": "en_starter_language_021",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-11",
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
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "answer"
        ],
        "legacy_id": "en_starter_asking_answering_questions_020",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-12",
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
        ],
        "legacy_id": "en_starter_asking_answering_questions_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-13",
        "word": "at",
        "form": "preposition",
        "transcription": "æt",
        "definitions": [
            {
                "text": "Used to show a place or position.",
                "examples": [
                    "I am at the office.",
                    "Wait at the bus stop.",
                    "He is at home."
                ]
            },
            {
                "text": "Used to show a specific time.",
                "examples": [
                    "At seven o'clock.",
                    "At night.",
                    "At the weekend."
                ]
            }
        ],
        "subtext": "at work, at school, at the top",
        "emoji": "📍",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "away from"
        ],
        "legacy_id": "en_starter_language_007",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-14",
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
        "theme": "social",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "beun",
            "origin_meaning": "to be"
        },
        "antonyms": [
            "become"
        ],
        "legacy_id": "en_starter_name_greeting_009",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-15",
        "word": "because",
        "form": "conjunction",
        "definitions": [
            {
                "text": "For the reason that.",
                "examples": [
                    "I am tired because I worked late."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "💡",
        "transcription": "🇬🇧 bɪˈkɒz | 🇺🇸 bɪˈkɑːz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "so"
        ],
        "legacy_id": "en_starter_language_011",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-16",
        "word": "behind",
        "form": "preposition",
        "definitions": [
            {
                "text": "At or towards the back of someone or something.",
                "examples": [
                    "The car is behind the house."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🫣",
        "transcription": "bɪˈhaɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "in front of"
        ],
        "legacy_id": "en_starter_language_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-17",
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
        ],
        "legacy_id": "en_starter_giving_opinions_023",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-18",
        "word": "between",
        "form": "preposition",
        "definitions": [
            {
                "text": "In the space that separates two places, people, or objects.",
                "examples": [
                    "The bank is between the school and the shop."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🧘",
        "transcription": "bɪtˈwin",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "outside"
        ],
        "legacy_id": "en_starter_language_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-19",
        "word": "but",
        "form": "conjunction",
        "definitions": [
            {
                "text": "Used to introduce a contrast.",
                "examples": [
                    "I like coffee, but I don't like milk."
                ]
            }
        ],
        "subtext": "related to conjunctions connectors",
        "emoji": "❓",
        "transcription": "bət",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "and"
        ],
        "legacy_id": "en_starter_language_010",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-20",
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
        "sub_theme": null,
        "legacy_id": "en_starter_giving_opinions_029",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-21",
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
        ],
        "legacy_id": "en_starter_giving_opinions_022",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-22",
        "word": "classroom",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "classrooms",
        "definitions": [
            {
                "text": "A room in a school where students have lessons.",
                "examples": [
                    "The students are in the classroom."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "ˈklæsˌrum",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_010",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-23",
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
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ],
        "legacy_id": "en_starter_leisure_022",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-24",
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
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "scatter"
        ],
        "legacy_id": "en_starter_leisure_025",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-25",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "en_starter_language_017",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-26",
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
        ],
        "legacy_id": "en_starter_language_026",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-27",
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
        "transcription": "ˌkɑnvərˈseɪʃən",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_015",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-28",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "tick"
        ],
        "legacy_id": "en_starter_language_016",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-29",
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
        ],
        "legacy_id": "en_starter_language_025",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-30",
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
        ],
        "legacy_id": "en_starter_giving_opinions_020",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-31",
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
        "sub_theme": null,
        "legacy_id": "en_starter_giving_opinions_028",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-32",
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
        ],
        "legacy_id": "en_starter_giving_opinions_027",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-33",
        "word": "dictionary",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dictionaries",
        "definitions": [
            {
                "text": "A book that contains a list of words in alphabetical order and explains their meanings.",
                "examples": [
                    "Look it up in the dictionary."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "ˈdɪkʃəˌnɛri",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dictionarium"
        },
        "legacy_id": "en_starter_language_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-34",
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
        "group": "irregular",
        "transcription": "drɔ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_cinema_film_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-35",
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
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_cinema_film_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-36",
        "word": "example",
        "emoji": "💡",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "examples",
        "subtext": "for example",
        "definitions": [
            {
                "text": "A thing that is representative of all such things.",
                "examples": [
                    "Can you give me an example?"
                ]
            }
        ],
        "transcription": "ɪgˈzæmpəl",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_009",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-37",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_019",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-38",
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
        "sub_theme": null,
        "legacy_id": "en_starter_language_028",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-39",
        "word": "film",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "films",
        "subtext": "movie, watch a film",
        "definitions": [
            {
                "text": "A story or series of events that is shown as a sequence of moving pictures.",
                "examples": [
                    "I like watching films."
                ]
            }
        ],
        "transcription": "fɪlm",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_cinema_film_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-40",
        "word": "globe",
        "emoji": "🌍",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "globes",
        "definitions": [
            {
                "text": "A round object with a map of the world on it.",
                "examples": [
                    "Look for Italy on the globe."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "gloʊb",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_008",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-41",
        "word": "goodbye",
        "translation": "goodbye",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used when you are leaving someone.",
                "examples": [
                    "Goodbye! See you tomorrow."
                ]
            }
        ],
        "transcription": "ɡʊdˈbaɪ",
        "lang": "en",
        "legacy_id": "en_starter_greetings_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-42",
        "word": "hello",
        "translation": "hello",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "👋",
        "form": "interjection",
        "definitions": [
            {
                "text": "Used as a greeting when you meet someone.",
                "examples": [
                    "Hello, how are you?"
                ]
            }
        ],
        "transcription": "həˈloʊ",
        "lang": "en",
        "legacy_id": "en_starter_greetings_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-43",
        "word": "hobby",
        "emoji": "🎨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hobbies",
        "definitions": [
            {
                "text": "An activity that you do for fun in your free time.",
                "examples": [
                    "My hobby is reading."
                ]
            }
        ],
        "subtext": "related to hobbies interests",
        "transcription": "ˈhɑbi",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_leisure_017",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-44",
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
        "transcription": "haʊ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_012",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-45",
        "word": "in",
        "form": "preposition",
        "transcription": "ɪn",
        "definitions": [
            {
                "text": "Inside a place or container.",
                "examples": [
                    "The keys are in the bag.",
                    "He is in the kitchen."
                ]
            },
            {
                "text": "Used with months, years, seasons, and parts of the day.",
                "examples": [
                    "In January.",
                    "In 2023.",
                    "In the morning.",
                    "In summer."
                ]
            }
        ],
        "subtext": "in the box, in London, in a car",
        "emoji": "📥",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "out"
        ],
        "legacy_id": "en_starter_language_005",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-46",
        "word": "in front of",
        "form": "preposition",
        "definitions": [
            {
                "text": "Further forward than someone or something else.",
                "examples": [
                    "There is a bus stop in front of the school."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "🚶",
        "transcription": "ɪn frənt əv",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "behind"
        ],
        "legacy_id": "en_starter_language_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-47",
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
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "en_starter_name_greeting_010",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-48",
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
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_leisure_021",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-49",
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
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "leave"
        ],
        "legacy_id": "en_starter_leisure_024",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-50",
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
        "sub_theme": null,
        "legacy_id": "en_starter_giving_opinions_026",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-51",
        "word": "map",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "maps",
        "definitions": [
            {
                "text": "A drawing of a particular area, such as a city or a country.",
                "examples": [
                    "Look at the map."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "mæp",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-52",
        "word": "movie",
        "emoji": "🎬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "movies",
        "subtext": "film, watch a movie",
        "definitions": [
            {
                "text": "A series of moving pictures that tell a story.",
                "examples": [
                    "Let's watch a movie tonight."
                ]
            }
        ],
        "transcription": "ˈmuvi",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_cinema_film_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-53",
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
        "sub_theme": null,
        "legacy_id": "en_starter_giving_opinions_030",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-54",
        "word": "never",
        "emoji": "🚫",
        "form": "adverb",
        "definitions": [
            {
                "text": "Not at any time.",
                "examples": [
                    "He never drinks alcohol."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈnɛvər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "always"
        ],
        "legacy_id": "en_starter_language_016",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-55",
        "word": "next to",
        "form": "preposition",
        "subtext": "next to",
        "synonyms": [
            "beside"
        ],
        "definitions": [
            {
                "text": "Very close to someone or something, with nothing in between.",
                "examples": [
                    "He sat next to me."
                ]
            }
        ],
        "emoji": "👫",
        "transcription": "nɛkst tɪ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "far from"
        ],
        "legacy_id": "en_starter_language_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-56",
        "word": "no",
        "emoji": "❌",
        "form": "adverb",
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
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_014",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-57",
        "word": "often",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "Many times.",
                "examples": [
                    "We often eat out on Fridays."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈɔfən",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_014",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-58",
        "word": "on",
        "form": "preposition",
        "transcription": "🇬🇧 ɒn | 🇺🇸 ɑːn",
        "definitions": [
            {
                "text": "Supported by or touching a surface.",
                "examples": [
                    "The book is on the table.",
                    "The picture is on the wall."
                ]
            },
            {
                "text": "Used with days and dates.",
                "examples": [
                    "On Monday.",
                    "On my birthday.",
                    "On the first of May."
                ]
            }
        ],
        "subtext": "on the floor, on a bus, on the phone",
        "emoji": "🔛",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "off"
        ],
        "legacy_id": "en_starter_language_006",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-59",
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
        ],
        "legacy_id": "en_starter_conjunctions_connectors_005",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-60",
        "word": "page",
        "emoji": "📄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pages",
        "definitions": [
            {
                "text": "One side of a sheet of paper in a book or magazine.",
                "examples": [
                    "The answer is on page five."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "peɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_007",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-61",
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
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "en_starter_leisure_020",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-62",
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
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "erase"
        ],
        "legacy_id": "en_starter_leisure_023",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-63",
        "word": "photo",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "photos",
        "subtext": "photograph, take a photo",
        "definitions": [
            {
                "text": "A picture made with a camera.",
                "examples": [
                    "Can I take a photo of you?"
                ]
            }
        ],
        "transcription": "ˈfoʊˌtoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_leisure_018",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-64",
        "word": "picture",
        "emoji": "🖼️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "pictures",
        "subtext": "draw a picture, take a picture",
        "definitions": [
            {
                "text": "A drawing, painting, or photo.",
                "examples": [
                    "The children are drawing pictures."
                ]
            }
        ],
        "transcription": "ˈpɪkʧər",
        "lang": "en",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "legacy_id": "en_starter_leisure_019",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-65",
        "word": "please",
        "translation": "please",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "🙏",
        "form": "adverb",
        "definitions": [
            {
                "text": "Used to be polite when asking for something.",
                "examples": [
                    "Can I have some water, please?"
                ]
            }
        ],
        "transcription": "pliz",
        "lang": "en",
        "legacy_id": "en_starter_greetings_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-66",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "en_starter_language_013",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-67",
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
        ],
        "legacy_id": "en_starter_language_022",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-68",
        "word": "possible",
        "emoji": "✅",
        "form": "adjective",
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
        "sub_theme": null,
        "antonyms": [
            "impossible"
        ],
        "legacy_id": "en_starter_giving_opinions_003",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-69",
        "word": "poster",
        "emoji": "📜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "posters",
        "definitions": [
            {
                "text": "A large printed picture or notice that you put on a wall.",
                "examples": [
                    "There is a map poster in the classroom."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "ˈpoʊstər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_005",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-70",
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
        ],
        "legacy_id": "en_starter_giving_opinions_024",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-71",
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
        "transcription": "ˈprɑbləm",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_006",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-72",
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
        "transcription": "kˈwɛʃən",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_016",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-73",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "change"
        ],
        "legacy_id": "en_starter_language_011",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-74",
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
        ],
        "legacy_id": "en_starter_language_020",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-75",
        "word": "ruler",
        "emoji": "📏",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "rulers",
        "definitions": [
            {
                "text": "A flat straight piece of wood or plastic used for measuring things.",
                "examples": [
                    "Use a ruler to draw a line."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "ˈrulər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-76",
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
        ],
        "legacy_id": "en_starter_social_025",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-77",
        "word": "sentence",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "sentences",
        "definitions": [
            {
                "text": "A group of words that expresses a complete thought.",
                "examples": [
                    "Write a sentence about your family."
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "ˈsɛntəns",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_006",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-78",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "whisper"
        ],
        "legacy_id": "en_starter_language_014",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-79",
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
        ],
        "legacy_id": "en_starter_language_023",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-80",
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
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "hide"
        ],
        "legacy_id": "en_starter_asking_answering_questions_018",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-81",
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
        ],
        "legacy_id": "en_starter_asking_answering_questions_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-82",
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
        ],
        "legacy_id": "en_starter_conjunctions_connectors_006",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-83",
        "word": "some",
        "emoji": "➕",
        "form": "determiner",
        "transcription": "səm",
        "definitions": [
            {
                "text": "An amount or number of something that is not exact.",
                "examples": [
                    "I have some bread.",
                    "There are some students in the room."
                ]
            }
        ],
        "subtext": "unspecified quantity",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "any"
        ],
        "legacy_id": "en_starter_language_020",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-84",
        "word": "sometimes",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At some times but not all the time.",
                "examples": [
                    "Sometimes I walk to the office."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈsəmˌtaɪmz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_015",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-85",
        "word": "sorry",
        "translation": "sorry",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "🙇",
        "form": "adjective",
        "definitions": [
            {
                "text": "Used to apologize for something.",
                "examples": [
                    "I am sorry I am late."
                ]
            }
        ],
        "transcription": "ˈsɑri",
        "lang": "en",
        "legacy_id": "en_starter_greetings_005",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-86",
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
        ],
        "legacy_id": "en_starter_giving_opinions_025",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-87",
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
        ],
        "legacy_id": "en_starter_social_026",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-88",
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
        "group": "irregular",
        "transcription": "spɛl",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "misspell"
        ],
        "legacy_id": "en_starter_language_012",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-89",
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
        ],
        "legacy_id": "en_starter_language_021",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-90",
        "word": "sure",
        "emoji": "✅",
        "form": "adjective",
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
        "sub_theme": null,
        "antonyms": [
            "unsure"
        ],
        "legacy_id": "en_starter_giving_opinions_001",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-91",
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
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "ask"
        ],
        "legacy_id": "en_starter_asking_answering_questions_019",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-92",
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
        ],
        "legacy_id": "en_starter_asking_answering_questions_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-93",
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
        ],
        "legacy_id": "en_starter_social_027",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-94",
        "word": "thank you",
        "translation": "thank you",
        "level": "starter",
        "theme": "social",
        "language": "en",
        "emoji": "😊",
        "form": "phrase",
        "definitions": [
            {
                "text": "Used to show that you are grateful for something.",
                "examples": [
                    "Thank you for your help."
                ]
            }
        ],
        "transcription": "θæŋk ju",
        "lang": "en",
        "legacy_id": "en_starter_greetings_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-95",
        "word": "that",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðæt",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is not close to the speaker.",
                "examples": [
                    "That is a big building.",
                    "Who is that man?"
                ]
            }
        ],
        "subtext": "singular, far",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "this"
        ],
        "legacy_id": "en_starter_language_023",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-96",
        "word": "the",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "ðə",
        "definitions": [
            {
                "text": "Used to refer to a specific thing or person.",
                "examples": [
                    "The book is on the table.",
                    "The sun is bright."
                ]
            }
        ],
        "subtext": "definite article",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "a"
        ],
        "legacy_id": "en_starter_language_019",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-97",
        "word": "these",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðiːz",
        "definitions": [
            {
                "text": "The plural form of 'this'.",
                "examples": [
                    "These are my keys.",
                    "I need these documents."
                ]
            }
        ],
        "subtext": "plural, near",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "those"
        ],
        "legacy_id": "en_starter_language_024",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-98",
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
        ],
        "legacy_id": "en_starter_giving_opinions_019",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-99",
        "word": "this",
        "emoji": "👇",
        "form": "determiner",
        "transcription": "ðɪs",
        "definitions": [
            {
                "text": "Used to refer to a person, thing, or event that is close to the speaker.",
                "examples": [
                    "This is my friend.",
                    "I like this book."
                ]
            }
        ],
        "subtext": "singular, near",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "that"
        ],
        "legacy_id": "en_starter_language_022",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-100",
        "word": "those",
        "emoji": "👉",
        "form": "determiner",
        "transcription": "🇬🇧 ðəʊz | 🇺🇸 ðoʊz",
        "definitions": [
            {
                "text": "The plural form of 'that'.",
                "examples": [
                    "Those mountains are beautiful.",
                    "Who are those people?"
                ]
            }
        ],
        "subtext": "plural, far",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "these"
        ],
        "legacy_id": "en_starter_language_025",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-101",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "cross"
        ],
        "legacy_id": "en_starter_language_015",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-102",
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
        ],
        "legacy_id": "en_starter_language_024",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-103",
        "word": "under",
        "form": "preposition",
        "definitions": [
            {
                "text": "Below or lower than something else.",
                "examples": [
                    "The cat is under the chair."
                ]
            }
        ],
        "subtext": "related to prepositions place",
        "emoji": "👇",
        "transcription": "ˈəndər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "above"
        ],
        "legacy_id": "en_starter_language_008",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-104",
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
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "antonyms": [
            "misunderstand"
        ],
        "legacy_id": "en_starter_asking_answering_questions_021",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-105",
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
        ],
        "legacy_id": "en_starter_asking_answering_questions_005",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-106",
        "word": "unsure",
        "emoji": "❓",
        "form": "adjective",
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
        "sub_theme": null,
        "antonyms": [
            "sure"
        ],
        "legacy_id": "en_starter_giving_opinions_002",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-107",
        "word": "usually",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "In the way that most often happens.",
                "examples": [
                    "I usually go to work by bus."
                ]
            }
        ],
        "subtext": "related to frequency adverbs",
        "transcription": "ˈjuʒəwəli",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_013",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-108",
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
        "theme": "social",
        "sub_theme": null,
        "antonyms": [
            "ignore"
        ],
        "legacy_id": "en_starter_name_greeting_011",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-109",
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
        ],
        "legacy_id": "en_starter_social_028",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-110",
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
        "transcription": "wət",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_008",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-111",
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
        "transcription": "wɪn",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_010",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-112",
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
        "transcription": "wɛr",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_009",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-113",
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
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "antonyms": [
            "shout"
        ],
        "legacy_id": "en_starter_language_018",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-114",
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
        ],
        "legacy_id": "en_starter_language_027",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-115",
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
        "transcription": "hu",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_007",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-116",
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
        "transcription": "waɪ",
        "lang": "en",
        "level": "starter",
        "theme": "asking_answering_questions",
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_011",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-117",
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
        ],
        "legacy_id": "en_starter_social_029",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-118",
        "word": "word",
        "emoji": "📝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "words",
        "definitions": [
            {
                "text": "A single unit of language.",
                "examples": [
                    "What does this word mean?"
                ]
            }
        ],
        "subtext": "related to classroom language",
        "transcription": "wərd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_starter_language_004",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    },
    {
        "id": "A1-COMM-119",
        "word": "yes",
        "emoji": "✅",
        "form": "adverb",
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
        "sub_theme": null,
        "legacy_id": "en_starter_asking_answering_questions_013",
        "level_code": "A1",
        "domain": "COMMUNICATION",
        "subcategory": "Social"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
