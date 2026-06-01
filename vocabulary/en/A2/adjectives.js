// TODO: verify level classification
(function() {
    const data = [
    {
        "id": "en_elementary_school_001",
        "word": "absent",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "present",
        "definitions": [
            {
                "text": "Not in the place where you are expected to be, especially at school or work.",
                "examples": [
                    "Three students are absent today.",
                    "He was absent from work for a week."
                ]
            }
        ],
        "subtext": "not present, away",
        "synonyms": [
            "not present",
            "away"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈæbsənt",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "absens",
            "origin_meaning": "being away"
        }
    },
    {
        "id": "en_elementary_school_002",
        "word": "academic",
        "emoji": "🎓",
        "form": "adjective",
        "opposite": "practical",
        "definitions": [
            {
                "text": "Relating to schools, colleges, and universities.",
                "examples": [
                    "The academic year starts in September."
                ]
            }
        ],
        "subtext": "school-related",
        "synonyms": [
            "school-related"
        ],
        "comparative": "more academic",
        "superlative": "the most academic",
        "transcription": "ˌækəˈdɛmɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "school",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "akadēmia",
            "origin_meaning": "Plato's school"
        }
    },
    {
        "id": "en_elementary_giving_reasons_001",
        "word": "actual",
        "emoji": "📑",
        "form": "adjective",
        "opposite": "imaginary",
        "definitions": [
            {
                "text": "Existing in fact or reality.",
                "examples": [
                    "The actual cost was higher than we expected."
                ]
            }
        ],
        "subtext": "real, true",
        "synonyms": [
            "real",
            "true"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈæktʃuəl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "actualis",
            "origin_meaning": "active, pertaining to action"
        }
    },
    {
        "id": "en_elementary_finances_001",
        "word": "affordable",
        "emoji": "💵",
        "form": "adjective",
        "opposite": "expensive",
        "definitions": [
            {
                "text": "Within the ability of most people to pay.",
                "examples": [
                    "They are looking for affordable office space."
                ]
            }
        ],
        "subtext": "inexpensive, low-cost",
        "synonyms": [
            "inexpensive",
            "low-cost"
        ],
        "comparative": "more affordable",
        "superlative": "the most affordable",
        "transcription": "əˈfɔːrdəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "aforder",
            "origin_meaning": "to put forth, afford"
        }
    },
    {
        "id": "en_elementary_people_023",
        "word": "aggressive",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "calm",
        "definitions": [
            {
                "text": "Behaving in an angry and violent way towards another person.",
                "examples": [
                    "The dog was very aggressive."
                ]
            }
        ],
        "subtext": "violent, angry",
        "synonyms": [
            "violent",
            "angry"
        ],
        "comparative": "more aggressive",
        "superlative": "the most aggressive",
        "transcription": "əˈɡrɛsɪv",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "aggressus",
            "origin_meaning": "attacked"
        }
    },
    {
        "id": "en_elementary_career_development_040",
        "word": "ambitious",
        "emoji": "🚀",
        "form": "adjective",
        "opposite": "lazy",
        "definitions": [
            {
                "text": "Having a strong desire to succeed.",
                "examples": [
                    "He is very ambitious and wants to be a director by forty."
                ]
            }
        ],
        "subtext": "determined, aspiring",
        "synonyms": [
            "determined",
            "aspiring"
        ],
        "comparative": "more ambitious",
        "superlative": "the most ambitious",
        "transcription": "æmˈbɪʃəs",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "ambitiosus",
            "origin_meaning": "striving for favor"
        }
    },
    {
        "id": "en_elementary_giving_reasons_002",
        "word": "annual",
        "emoji": "📅",
        "form": "adjective",
        "opposite": "daily",
        "definitions": [
            {
                "text": "Happening once every year.",
                "examples": [
                    "The annual meeting is in June."
                ]
            }
        ],
        "subtext": "yearly",
        "synonyms": [
            "yearly"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈænjuəl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "annualis",
            "origin_meaning": "yearly"
        }
    },
    {
        "id": "en_elementary_emotions_003",
        "word": "anxious",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "definitions": [
            {
                "text": "Worried and nervous.",
                "examples": [
                    "I feel anxious about the exam.",
                    "The long wait made her anxious."
                ]
            }
        ],
        "subtext": "worried, nervous, uneasy",
        "synonyms": [
            "worried",
            "nervous",
            "uneasy"
        ],
        "comparative": "more anxious",
        "superlative": "the most anxious",
        "transcription": "ˈæŋkʃəs",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "anxius",
            "origin_meaning": "solicitous, uneasy"
        }
    },
    {
        "id": "en_elementary_materials_textures_001",
        "word": "artificial",
        "emoji": "🤖",
        "form": "adjective",
        "opposite": "natural",
        "definitions": [
            {
                "text": "Not natural or real, but made by people.",
                "examples": [
                    "These flowers are artificial."
                ]
            }
        ],
        "subtext": "man-made, synthetic",
        "synonyms": [
            "man-made",
            "synthetic"
        ],
        "comparative": "more artificial",
        "superlative": "the most artificial",
        "transcription": "ˌɑːrtɪˈfɪʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "materials_textures",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "artificialis",
            "origin_meaning": "belonging to art"
        }
    },
    {
        "id": "en_elementary_personal_qualities_001",
        "word": "athletic",
        "form": "adjective",
        "emoji": "🏃",
        "opposite": "lazy",
        "definitions": [
            {
                "text": "Physically strong, fit, and active.",
                "examples": [
                    "He has an athletic build because he plays football every day."
                ]
            }
        ],
        "subtext": "fit, sporty, physically active",
        "synonyms": [
            "fit",
            "sporty",
            "physically active"
        ],
        "comparative": "more athletic",
        "superlative": "the most athletic",
        "transcription": "æθˈlɛtɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "athletikos",
            "origin_meaning": "pertaining to an athlete"
        }
    },
    {
        "id": "en_elementary_condition_state_001",
        "word": "automatic",
        "emoji": "🤖",
        "form": "adjective",
        "opposite": "manual",
        "definitions": [
            {
                "text": "Working by itself without human control.",
                "examples": [
                    "The car has an automatic gearbox."
                ]
            }
        ],
        "subtext": "self-working",
        "synonyms": [
            "self-working"
        ],
        "comparative": "more automatic",
        "superlative": "the most automatic",
        "transcription": "ˌɔːtəˈmætɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "automatos",
            "origin_meaning": "self-acting"
        }
    },
    {
        "id": "en_elementary_career_development_041",
        "word": "available",
        "emoji": "🙋",
        "form": "adjective",
        "opposite": "unavailable",
        "definitions": [
            {
                "text": "Free; able to be used or reached.",
                "examples": [
                    "Is the manager available for a meeting at three?"
                ]
            }
        ],
        "subtext": "widely available / freely available / available for",
        "comparative": "more available",
        "superlative": "the most available",
        "transcription": "əˈveɪləbl",
        "synonyms": [
            "free",
            "ready"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old French",
            "origin_word": "available",
            "origin_meaning": "beneficial, valid"
        }
    },
    {
        "id": "en_elementary_giving_reasons_003",
        "word": "aware",
        "emoji": "👁️",
        "form": "adjective",
        "opposite": "unaware",
        "definitions": [
            {
                "text": "Knowing that something exists.",
                "examples": [
                    "Are you aware of the new rules?"
                ]
            }
        ],
        "subtext": "informed, conscious",
        "synonyms": [
            "informed",
            "conscious"
        ],
        "comparative": "more aware",
        "superlative": "the most aware",
        "transcription": "əˈweər",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Old English",
            "origin_word": "gewær",
            "origin_meaning": "watchful, vigilant"
        }
    },
    {
        "id": "en_elementary_condition_state_002",
        "word": "basic",
        "emoji": "🧱",
        "form": "adjective",
        "opposite": "advanced",
        "definitions": [
            {
                "text": "Simple and most important; being the main part of something.",
                "examples": [
                    "I have a basic understanding of French.",
                    "The hotel provides basic facilities."
                ]
            }
        ],
        "subtext": "simple, fundamental, essential",
        "synonyms": [
            "simple",
            "fundamental",
            "essential"
        ],
        "comparative": "more basic",
        "superlative": "the most basic",
        "transcription": "ˈbeɪsɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "basis",
            "origin_meaning": "step, pedestal"
        }
    },
    {
        "id": "en_elementary_basic_science_001",
        "word": "biological",
        "emoji": "🧬",
        "form": "adjective",
        "opposite": "physical",
        "definitions": [
            {
                "text": "Relating to biology or living things.",
                "examples": [
                    "My biological clock is waking me up early."
                ]
            }
        ],
        "subtext": "nature-related",
        "synonyms": [
            "nature-related"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "🇬🇧 ˌbaɪəˈlɒdʒɪkl | 🇺🇸 ˌbaɪəˈlɑːdʒɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "basic_science",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Greek",
            "origin_word": "bios",
            "origin_meaning": "life"
        }
    },
    {
        "id": "en_elementary_time_001",
        "word": "brief",
        "emoji": "⏱️",
        "form": "adjective",
        "opposite": "long",
        "definitions": [
            {
                "text": "Lasting only a short time or using only a few words.",
                "examples": [
                    "We had a brief meeting.",
                    "Please keep your comments brief."
                ]
            }
        ],
        "subtext": "short, quick, concise",
        "synonyms": [
            "short",
            "quick",
            "concise"
        ],
        "comparative": "briefer",
        "superlative": "the briefest",
        "transcription": "briːf",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_002",
        "word": "broke",
        "emoji": "📉",
        "form": "adjective",
        "opposite": "rich",
        "definitions": [
            {
                "text": "Having no money at all; informal.",
                "examples": [
                    "He spent too much and is completely broke."
                ]
            }
        ],
        "subtext": "flat broke / completely broke / go broke",
        "comparative": "more broke",
        "superlative": "the most broke",
        "transcription": "broʊk",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_002",
        "word": "brunette",
        "emoji": "👩🏻",
        "form": "adjective",
        "opposite": "blonde",
        "definitions": [
            {
                "text": "Having dark brown hair.",
                "examples": [
                    "She is a brunette."
                ]
            }
        ],
        "subtext": "a brunette woman",
        "synonyms": [
            "dark-haired"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "bruːˈnɛt",
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_024",
        "word": "careless",
        "emoji": "🤷",
        "form": "adjective",
        "opposite": "careful",
        "definitions": [
            {
                "text": "Not giving enough attention to what you are doing.",
                "examples": [
                    "It was a careless mistake."
                ]
            }
        ],
        "subtext": "a careless mistake / be careless",
        "synonyms": [
            "thoughtless",
            "reckless"
        ],
        "comparative": "more careless",
        "superlative": "the most careless",
        "transcription": "ˈkeərləs",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_001",
        "word": "central",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "remote",
        "definitions": [
            {
                "text": "In the middle of something.",
                "examples": [
                    "The hotel is in a central location."
                ]
            }
        ],
        "subtext": "middle, main",
        "synonyms": [
            "middle",
            "main"
        ],
        "comparative": "more central",
        "superlative": "the most central",
        "transcription": "ˈsɛntrəl",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_004",
        "word": "certain",
        "emoji": "🎯",
        "form": "adjective",
        "opposite": "uncertain",
        "definitions": [
            {
                "text": "Having no doubt or knowing exactly that something is true, or known to be true, correct, or real.",
                "examples": [
                    "Are you certain about the time?",
                    "I am certain that he is right."
                ]
            }
        ],
        "subtext": "sure, definite, positive",
        "synonyms": [
            "sure",
            "definite",
            "positive"
        ],
        "comparative": "more certain",
        "superlative": "the most certain",
        "transcription": "ˈsɜːrtn",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_025",
        "word": "cheerful",
        "emoji": "😊",
        "form": "adjective",
        "opposite": "miserable",
        "definitions": [
            {
                "text": "Happy and positive.",
                "examples": [
                    "She is always cheerful in the morning.",
                    "The room is bright and cheerful."
                ]
            }
        ],
        "subtext": "happy, joyful, upbeat",
        "synonyms": [
            "happy",
            "joyful",
            "upbeat"
        ],
        "comparative": "more cheerful",
        "superlative": "the most cheerful",
        "transcription": "ˈtʃɪərf l",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_basic_science_002",
        "word": "chemical",
        "emoji": "🧪",
        "form": "adjective",
        "opposite": "natural",
        "definitions": [
            {
                "text": "Relating to chemistry.",
                "examples": [
                    "The water contains harmful chemicals."
                ]
            }
        ],
        "subtext": "chemical substance",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈkɛmɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "basic_science",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_003",
        "word": "commercial",
        "emoji": "🏢",
        "form": "adjective",
        "opposite": "private",
        "definitions": [
            {
                "text": "Related to buying and selling things.",
                "examples": [
                    "The city center is a commercial area."
                ]
            }
        ],
        "subtext": "business-related",
        "synonyms": [
            "business-related"
        ],
        "comparative": "more commercial",
        "superlative": "the most commercial",
        "transcription": "kəˈmɜːrʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_042",
        "word": "competitive",
        "emoji": "🏃",
        "form": "adjective",
        "opposite": "uncompetitive",
        "definitions": [
            {
                "text": "Wanting very much to win or be more successful than other people.",
                "examples": [
                    "He is a very competitive person."
                ]
            }
        ],
        "subtext": "ambitious",
        "synonyms": [
            "ambitious"
        ],
        "comparative": "more competitive",
        "superlative": "the most competitive",
        "transcription": "kəmˈpɛtətɪv",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_003",
        "word": "complicated",
        "emoji": "🕸️",
        "form": "adjective",
        "opposite": "simple",
        "definitions": [
            {
                "text": "Involving many parts; not easy to understand.",
                "examples": [
                    "The contract is very complicated."
                ]
            }
        ],
        "subtext": "complex, intricate",
        "synonyms": [
            "complex",
            "intricate"
        ],
        "comparative": "more complicated",
        "superlative": "the most complicated",
        "transcription": "🇬🇧 ˈkɒmplɪkeɪtɪd | 🇺🇸 ˈkɑːmplɪkeɪtɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_003",
        "word": "confident",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "insecure",
        "definitions": [
            {
                "text": "Feeling sure of your own abilities.",
                "examples": [
                    "He presents with confidence and is very confident.",
                    "She is very confident in client presentations."
                ]
            }
        ],
        "subtext": "self-assured, bold",
        "synonyms": [
            "self-assured",
            "bold"
        ],
        "comparative": "more confident",
        "superlative": "the most confident",
        "transcription": "🇬🇧 ˈkɒnfɪdənt | 🇺🇸 ˈkɑːnfɪdənt",
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_005",
        "word": "confidential",
        "emoji": "🤐",
        "form": "adjective",
        "opposite": "public",
        "definitions": [
            {
                "text": "Secret, often in a formal business or military way.",
                "examples": [
                    "This information is strictly confidential."
                ]
            }
        ],
        "subtext": "secret, private, classified",
        "synonyms": [
            "secret",
            "private",
            "classified"
        ],
        "comparative": "more confidential",
        "superlative": "the most confidential",
        "transcription": "🇬🇧 ˌkɒnfɪˈdɛnʃl | 🇺🇸 ˌkɑːnfɪˈdɛnʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_012",
        "word": "conscious",
        "emoji": "🧠",
        "form": "adjective",
        "opposite": "unconscious",
        "definitions": [
            {
                "text": "Awake, thinking, and knowing what is happening around you.",
                "examples": [
                    "He was still conscious after the accident."
                ]
            }
        ],
        "subtext": "aware",
        "synonyms": [
            "aware"
        ],
        "comparative": "more conscious",
        "superlative": "the most conscious",
        "transcription": "🇬🇧 ˈkɒnʃəs | 🇺🇸 ˈkɑːnʃəs",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_004",
        "word": "convenient",
        "emoji": "👌",
        "form": "adjective",
        "opposite": "inconvenient",
        "definitions": [
            {
                "text": "Easy to use or well-positioned.",
                "examples": [
                    "The office is in a convenient location near the station."
                ]
            }
        ],
        "subtext": "very convenient / a convenient time",
        "synonyms": [
            "conveniently located"
        ],
        "comparative": "more convenient",
        "superlative": "the most convenient",
        "transcription": "kənˈviːniənt",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_006",
        "word": "critical",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "positive",
        "definitions": [
            {
                "text": "Saying that someone or something is bad or wrong.",
                "examples": [
                    "He was very critical of the new law."
                ]
            }
        ],
        "subtext": "judgmental, negative",
        "synonyms": [
            "judgmental",
            "negative"
        ],
        "comparative": "more critical",
        "superlative": "the most critical",
        "transcription": "ˈkrɪtɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_026",
        "word": "cruel",
        "emoji": "👿",
        "form": "adjective",
        "opposite": "kind",
        "definitions": [
            {
                "text": "Extremely unkind and unpleasant and causing pain to people or animals intentionally.",
                "examples": [
                    "It was a cruel thing to say.",
                    "Don't be cruel to animals."
                ]
            }
        ],
        "subtext": "mean, unkind",
        "synonyms": [
            "mean",
            "unkind"
        ],
        "comparative": "crueller",
        "superlative": "the cruellest",
        "transcription": "ˈkruːəl",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_society_politics_001",
        "word": "cultural",
        "emoji": "🎨",
        "form": "adjective",
        "opposite": "non-cultural",
        "definitions": [
            {
                "text": "Relating to culture.",
                "examples": [
                    "The city has many cultural attractions."
                ]
            }
        ],
        "subtext": "culture-related",
        "synonyms": [
            "culture-related"
        ],
        "comparative": "more cultural",
        "superlative": "the most cultural",
        "transcription": "ˈkʌltʃərəl",
        "lang": "en",
        "level": "elementary",
        "theme": "society_politics",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_027",
        "word": "curious",
        "emoji": "🧐",
        "form": "adjective",
        "opposite": "indifferent",
        "definitions": [
            {
                "text": "Interested in learning about people or things around you.",
                "examples": [
                    "Children are very curious.",
                    "I'm curious to know what happened."
                ]
            }
        ],
        "subtext": "interested, inquisitive",
        "synonyms": [
            "interested",
            "inquisitive"
        ],
        "comparative": "more curious",
        "superlative": "the most curious",
        "transcription": "ˈkjʊəriəs",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_sequence_order_001",
        "word": "current",
        "emoji": "📍",
        "form": "adjective",
        "opposite": "former",
        "definitions": [
            {
                "text": "Happening or existing now.",
                "examples": [
                    "What is your current salary?"
                ]
            }
        ],
        "subtext": "current situation / current employer",
        "synonyms": [
            "currently"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈkɜːrənt",
        "lang": "en",
        "level": "elementary",
        "theme": "sequence_order",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_005",
        "word": "daily",
        "emoji": "📅",
        "form": "adjective",
        "opposite": "rare",
        "definitions": [
            {
                "text": "Happening every day.",
                "examples": [
                    "She has a daily commute of forty-five minutes."
                ]
            }
        ],
        "subtext": "daily routine / on a daily basis / daily report",
        "comparative": null,
        "superlative": null,
        "transcription": "ˈdeɪli",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_007",
        "word": "deliberate",
        "emoji": "🎯",
        "form": "adjective",
        "opposite": "accidental",
        "definitions": [
            {
                "text": "Done on purpose.",
                "examples": [
                    "It was a deliberate choice."
                ]
            }
        ],
        "subtext": "planned, intentional",
        "synonyms": [
            "planned",
            "intentional"
        ],
        "comparative": "more deliberate",
        "superlative": "the most deliberate",
        "transcription": "dɪˈlɪbərət",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_social_003",
        "word": "digital",
        "emoji": "💻",
        "form": "adjective",
        "opposite": "analog",
        "definitions": [
            {
                "text": "Relating to computer technology.",
                "examples": [
                    "We live in a digital age."
                ]
            }
        ],
        "subtext": "tech-related",
        "synonyms": [
            "tech-related"
        ],
        "comparative": "more digital",
        "superlative": "the most digital",
        "transcription": "ˈdɪdʒɪtl",
        "lang": "en",
        "level": "elementary",
        "theme": "social",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_004",
        "word": "direct",
        "emoji": "➡️",
        "form": "adjective",
        "opposite": "indirect",
        "definitions": [
            {
                "text": "Going straight to the point; not indirect.",
                "examples": [
                    "He is very direct and says exactly what he thinks."
                ]
            }
        ],
        "subtext": "very direct / direct approach / a direct question",
        "comparative": "more direct",
        "superlative": "the most direct",
        "transcription": "dəˈrɛkt",
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_006",
        "word": "dishonest",
        "emoji": "🤥",
        "form": "adjective",
        "opposite": "honest",
        "definitions": [
            {
                "text": "Not honest; intended to deceive.",
                "examples": [
                    "He gave a dishonest answer to the question."
                ]
            }
        ],
        "subtext": "dishonest behavior / completely dishonest",
        "synonyms": [
            "lying",
            "deceitful"
        ],
        "comparative": "more dishonest",
        "superlative": "the most dishonest",
        "transcription": "🇬🇧 dɪsˈɒnɪst | 🇺🇸 dɪsˈɑːnɪst",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_004",
        "word": "dissatisfied",
        "emoji": "😒",
        "form": "adjective",
        "opposite": "satisfied",
        "definitions": [
            {
                "text": "Not pleased with something.",
                "examples": [
                    "He is dissatisfied with the service."
                ]
            }
        ],
        "subtext": "dissatisfied customer / feel dissatisfied",
        "synonyms": [
            "unhappy",
            "not content"
        ],
        "comparative": "more dissatisfied",
        "superlative": "the most dissatisfied",
        "transcription": "dɪˈsætɪsfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_004",
        "word": "economic",
        "emoji": "📉",
        "form": "adjective",
        "opposite": "uneconomic",
        "definitions": [
            {
                "text": "Relating to the economy.",
                "examples": [
                    "The country is experiencing economic growth."
                ]
            }
        ],
        "subtext": "economy-related",
        "synonyms": [
            "economy-related"
        ],
        "comparative": "more economic",
        "superlative": "the most economic",
        "transcription": "🇬🇧 ˌiːkəˈnɒmɪk | 🇺🇸 ˌiːkəˈnɑːmɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_043",
        "word": "efficient",
        "emoji": "⚙️",
        "form": "adjective",
        "opposite": "inefficient",
        "definitions": [
            {
                "text": "Working or operating quickly and effectively in an organized way.",
                "examples": [
                    "The new system is very efficient."
                ]
            }
        ],
        "subtext": "effective, productive",
        "synonyms": [
            "effective",
            "productive"
        ],
        "comparative": "more efficient",
        "superlative": "the most efficient",
        "transcription": "ɪˈfɪʃnt",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_005",
        "word": "emotional",
        "emoji": "🥺",
        "form": "adjective",
        "opposite": "unemotional",
        "definitions": [
            {
                "text": "Having strong feelings.",
                "examples": [
                    "It was a very emotional moment."
                ]
            }
        ],
        "subtext": "feeling-based",
        "synonyms": [
            "feeling-based"
        ],
        "comparative": "more emotional",
        "superlative": "the most emotional",
        "transcription": "ɪˈmoʊʃənl",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_028",
        "word": "energetic",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": "tired",
        "definitions": [
            {
                "text": "Having or involving a lot of energy.",
                "examples": [
                    "She is very energetic and works fast."
                ]
            }
        ],
        "subtext": "feel energetic / very energetic",
        "synonyms": [
            "active",
            "lively"
        ],
        "comparative": "more energetic",
        "superlative": "the most energetic",
        "transcription": "ˌɛnərˈdʒɛtɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_006",
        "word": "environmental",
        "emoji": "🌳",
        "form": "adjective",
        "opposite": "industrial",
        "definitions": [
            {
                "text": "Relating to the environment.",
                "examples": [
                    "We are facing an environmental crisis."
                ]
            }
        ],
        "subtext": "nature-related",
        "synonyms": [
            "nature-related"
        ],
        "comparative": "more environmental",
        "superlative": "the most environmental",
        "transcription": "ɪnˌvaɪrənˈmɛntl",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_007",
        "word": "excellent",
        "emoji": "🏆",
        "form": "adjective",
        "opposite": "poor",
        "definitions": [
            {
                "text": "Extremely good; of a very high standard.",
                "examples": [
                    "She received an excellent review."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "more excellent",
        "superlative": "the most excellent",
        "transcription": "ˈɛksələnt",
        "synonyms": [
            "wonderful",
            "great"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_044",
        "word": "experienced",
        "emoji": "🎓",
        "form": "adjective",
        "opposite": "inexperienced",
        "definitions": [
            {
                "text": "Having knowledge and skill from practice.",
                "examples": [
                    "The company needs an experienced project manager."
                ]
            }
        ],
        "subtext": "highly experienced / experienced in / experienced enough",
        "comparative": "more experienced",
        "superlative": "the most experienced",
        "transcription": "ɪkˈspɪəriənst",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_001",
        "word": "extreme",
        "emoji": "🌋",
        "form": "adjective",
        "opposite": "mild",
        "definitions": [
            {
                "text": "Very large in amount or degree.",
                "examples": [
                    "The weather was extreme."
                ]
            }
        ],
        "subtext": "very high, intense",
        "synonyms": [
            "very high",
            "intense"
        ],
        "comparative": "more extreme",
        "superlative": "the most extreme",
        "transcription": "ɪkˈstriːm",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_materials_textures_002",
        "word": "fake",
        "emoji": "🎭",
        "form": "adjective",
        "opposite": "real",
        "definitions": [
            {
                "text": "Not real, but made to look or seem real.",
                "examples": [
                    "He was wearing a fake beard."
                ]
            }
        ],
        "subtext": "fake money / a fake smile",
        "synonyms": [
            "false",
            "artificial"
        ],
        "comparative": "more fake",
        "superlative": "the most fake",
        "transcription": "feɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "materials_textures",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_008",
        "word": "familiar",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unfamiliar",
        "definitions": [
            {
                "text": "Easy to recognize because of being seen, met, or heard before.",
                "examples": [
                    "That face looks familiar."
                ]
            }
        ],
        "subtext": "well-known",
        "synonyms": [
            "well-known"
        ],
        "comparative": "more familiar",
        "superlative": "the most familiar",
        "transcription": "fəˈmɪliər",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_005",
        "word": "financial",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "non-financial",
        "definitions": [
            {
                "text": "Relating to money.",
                "examples": [
                    "They are in a difficult financial situation."
                ]
            }
        ],
        "subtext": "money-related",
        "synonyms": [
            "money-related"
        ],
        "comparative": "more financial",
        "superlative": "the most financial",
        "transcription": "faɪˈnænʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_045",
        "word": "flexible",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "rigid",
        "definitions": [
            {
                "text": "Able to change and adapt easily to different situations.",
                "examples": [
                    "The company offers flexible working hours."
                ]
            }
        ],
        "subtext": "flexible hours / flexible approach / very flexible",
        "comparative": "more flexible",
        "superlative": "the most flexible",
        "transcription": "ˈflɛksəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_029",
        "word": "foolish",
        "emoji": "🤡",
        "form": "adjective",
        "opposite": "wise",
        "definitions": [
            {
                "text": "Silly or not sensible.",
                "examples": [
                    "It was a foolish thing to do."
                ]
            }
        ],
        "subtext": "foolish mistake / feel foolish",
        "synonyms": [
            "silly",
            "stupid"
        ],
        "comparative": "more foolish",
        "superlative": "the most foolish",
        "transcription": "ˈfuːlɪʃ",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_002",
        "word": "foreign",
        "emoji": "🌍",
        "form": "adjective",
        "opposite": "domestic",
        "definitions": [
            {
                "text": "Belonging or connected to a country that is not your own or not the one you are in.",
                "examples": [
                    "I love learning foreign languages.",
                    "He has many foreign friends."
                ]
            }
        ],
        "subtext": "from another country, alien",
        "synonyms": [
            "from another country",
            "alien"
        ],
        "comparative": "more foreign",
        "superlative": "the most foreign",
        "transcription": "🇬🇧 ˈfɒrən | 🇺🇸 ˈfɑːrən",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_customs_traditions_003",
        "word": "formal",
        "emoji": "🤵",
        "form": "adjective",
        "opposite": "informal",
        "definitions": [
            {
                "text": "Public or official; following fixed rules for doing something.",
                "examples": [
                    "He wore a formal suit to the wedding.",
                    "The letter was written in a formal style."
                ]
            }
        ],
        "subtext": "official, serious",
        "synonyms": [
            "official",
            "serious"
        ],
        "comparative": "more formal",
        "superlative": "the most formal",
        "transcription": "ˈfɔːrml",
        "lang": "en",
        "level": "elementary",
        "theme": "customs_traditions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_nutrition_021",
        "word": "fresh",
        "emoji": "🍏",
        "form": "adjective",
        "opposite": "stale",
        "definitions": [
            {
                "text": "Recently made, collected, or cooked.",
                "examples": [
                    "I love the smell of fresh bread.",
                    "Eat more fresh fruit."
                ]
            }
        ],
        "subtext": "new, recently picked",
        "synonyms": [
            "new",
            "recently picked"
        ],
        "comparative": "fresher",
        "superlative": "the freshest",
        "transcription": "frɛʃ",
        "lang": "en",
        "level": "elementary",
        "theme": "diet_nutrition",
        "sub_theme": null
    },
    {
        "id": "en_elementary_time_002",
        "word": "future",
        "emoji": "🔮",
        "form": "adjective",
        "opposite": "past",
        "definitions": [
            {
                "text": "Not yet happened; relating to a later time.",
                "examples": [
                    "What are your future plans for your career?"
                ]
            }
        ],
        "subtext": "future plans / in the future / future employer",
        "comparative": null,
        "superlative": null,
        "synonyms": [
            "upcoming"
        ],
        "transcription": "ˈfjuːtʃər",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_008",
        "word": "general",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "specific",
        "definitions": [
            {
                "text": "Involving or relating to most people, things, or cases.",
                "examples": [
                    "There is a general feeling of happiness.",
                    "I gave a general description of the man."
                ]
            }
        ],
        "subtext": "common, overall",
        "synonyms": [
            "common",
            "overall"
        ],
        "comparative": "more general",
        "superlative": "the most general",
        "transcription": "ˈdʒɛnrəl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_030",
        "word": "generous",
        "emoji": "🎁",
        "form": "adjective",
        "opposite": "mean",
        "definitions": [
            {
                "text": "Willing to give money, help, kindness, etc., especially more than is usual or expected.",
                "examples": [
                    "He is very generous with his time.",
                    "It was a generous gift."
                ]
            }
        ],
        "subtext": "kind, giving",
        "synonyms": [
            "kind",
            "giving"
        ],
        "comparative": "more generous",
        "superlative": "the most generous",
        "transcription": "ˈdʒɛnərəs",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_003",
        "word": "global",
        "emoji": "🌍",
        "form": "adjective",
        "opposite": "local",
        "definitions": [
            {
                "text": "Relating to the whole world.",
                "examples": [
                    "Global warming is a serious issue."
                ]
            }
        ],
        "subtext": "worldwide",
        "synonyms": [
            "worldwide"
        ],
        "comparative": "more global",
        "superlative": "the most global",
        "transcription": "ˈɡloʊbl",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_006",
        "word": "grateful",
        "emoji": "🙏",
        "form": "adjective",
        "opposite": "ungrateful",
        "definitions": [
            {
                "text": "Feeling or showing thanks.",
                "examples": [
                    "I am very grateful for your help."
                ]
            }
        ],
        "subtext": "thankful",
        "synonyms": [
            "thankful"
        ],
        "comparative": "more grateful",
        "superlative": "the most grateful",
        "transcription": "ˈɡreɪtfl",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_right_wrong_basic_001",
        "word": "guilty",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "innocent",
        "definitions": [
            {
                "text": "Responsible for breaking a law.",
                "examples": [
                    "The jury found him guilty."
                ]
            }
        ],
        "subtext": "responsible for crime",
        "synonyms": [
            "responsible for crime"
        ],
        "comparative": "more guilty",
        "superlative": "the most guilty",
        "transcription": "ˈɡɪlti",
        "lang": "en",
        "level": "elementary",
        "theme": "right_wrong_basic",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_002",
        "word": "huge",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "tiny",
        "definitions": [
            {
                "text": "Extremely large in size or amount.",
                "examples": [
                    "They live in a huge house.",
                    "The project was a huge success."
                ]
            }
        ],
        "subtext": "very large, enormous",
        "synonyms": [
            "very large",
            "enormous"
        ],
        "comparative": "huger",
        "superlative": "the hugest",
        "transcription": "hjuːdʒ",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_right_wrong_basic_002",
        "word": "illegal",
        "emoji": "🚫",
        "form": "adjective",
        "opposite": "legal",
        "definitions": [
            {
                "text": "Not allowed by law.",
                "examples": [
                    "It is illegal to drive without a license."
                ]
            }
        ],
        "subtext": "unlawful",
        "synonyms": [
            "unlawful"
        ],
        "comparative": "more illegal",
        "superlative": "the most illegal",
        "transcription": "ɪˈliːɡl",
        "lang": "en",
        "level": "elementary",
        "theme": "right_wrong_basic",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_009",
        "word": "immediate",
        "emoji": "⚡",
        "form": "adjective",
        "opposite": "delayed",
        "definitions": [
            {
                "text": "Happening or done without delay.",
                "examples": [
                    "We need an immediate response."
                ]
            }
        ],
        "subtext": "instant, direct",
        "synonyms": [
            "instant",
            "direct"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ɪˈmiːdiət",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_031",
        "word": "impatient",
        "emoji": "⌚",
        "form": "adjective",
        "opposite": "patient",
        "definitions": [
            {
                "text": "Easily annoyed by someone's mistakes or because you have to wait.",
                "examples": [
                    "Don't be so impatient!"
                ]
            }
        ],
        "subtext": "become impatient / don't be impatient",
        "synonyms": [
            "restless"
        ],
        "comparative": "more impatient",
        "superlative": "the most impatient",
        "transcription": "ɪmˈpeɪʃnt",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_009",
        "word": "imperfect",
        "emoji": "🩹",
        "form": "adjective",
        "opposite": "perfect",
        "definitions": [
            {
                "text": "Not perfect; having some faults or mistakes.",
                "examples": [
                    "We live in an imperfect world."
                ]
            }
        ],
        "subtext": "imperfect system / imperfect world",
        "synonyms": [
            "flawed"
        ],
        "comparative": "more imperfect",
        "superlative": "the most imperfect",
        "transcription": "ɪmˈpɜːrfɪkt",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_032",
        "word": "impolite",
        "emoji": "😛",
        "form": "adjective",
        "opposite": "polite",
        "definitions": [
            {
                "text": "Not polite; rude.",
                "examples": [
                    "It is impolite to point at people."
                ]
            }
        ],
        "subtext": "an impolite answer / it is impolite",
        "synonyms": [
            "rude"
        ],
        "comparative": "more impolite",
        "superlative": "the most impolite",
        "transcription": "ˌɪmpəˈlaɪt",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_010",
        "word": "impossible",
        "emoji": "🚫",
        "form": "adjective",
        "opposite": "possible",
        "definitions": [
            {
                "text": "Not able to happen or be done.",
                "examples": [
                    "It is impossible to finish in one day."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "more impossible",
        "superlative": "the most impossible",
        "transcription": "🇬🇧 ɪmˈpɒsəbl | 🇺🇸 ɪmˈpɑːsəbl",
        "synonyms": [
            "unachievable"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_005",
        "word": "independent",
        "emoji": "🦅",
        "form": "adjective",
        "opposite": "dependent",
        "definitions": [
            {
                "text": "Not needing help or support from others.",
                "examples": [
                    "She is very independent and manages her own workload."
                ]
            }
        ],
        "subtext": "financially independent / very independent / an independent report",
        "comparative": "more independent",
        "superlative": "the most independent",
        "transcription": "ˌɪndɪˈpɛndənt",
        "synonyms": [
            "self-reliant"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_046",
        "word": "industrial",
        "emoji": "🏭",
        "form": "adjective",
        "opposite": "agricultural",
        "definitions": [
            {
                "text": "Relating to industry.",
                "examples": [
                    "The town is in an industrial area."
                ]
            }
        ],
        "subtext": "industry-related",
        "synonyms": [
            "industry-related"
        ],
        "comparative": "more industrial",
        "superlative": "the most industrial",
        "transcription": "ɪnˈdʌstriəl",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_right_wrong_basic_003",
        "word": "innocent",
        "emoji": "😇",
        "form": "adjective",
        "opposite": "guilty",
        "definitions": [
            {
                "text": "Not guilty of a particular crime.",
                "examples": [
                    "He is innocent of all charges."
                ]
            }
        ],
        "subtext": "not guilty",
        "synonyms": [
            "not guilty"
        ],
        "comparative": "more innocent",
        "superlative": "the most innocent",
        "transcription": "ˈɪnəsnt",
        "lang": "en",
        "level": "elementary",
        "theme": "right_wrong_basic",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_033",
        "word": "intelligent",
        "emoji": "🧠",
        "form": "adjective",
        "opposite": "stupid",
        "definitions": [
            {
                "text": "Able to learn and understand things easily.",
                "examples": [
                    "She is a highly intelligent student.",
                    "That was an intelligent question."
                ]
            }
        ],
        "subtext": "clever, smart",
        "synonyms": [
            "clever",
            "smart"
        ],
        "comparative": "more intelligent",
        "superlative": "the most intelligent",
        "transcription": "ɪnˈtɛlɪdʒənt",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_011",
        "word": "internal",
        "emoji": "🏢",
        "form": "adjective",
        "opposite": "external",
        "definitions": [
            {
                "text": "Inside something.",
                "examples": [
                    "The internal doors are made of wood.",
                    "The company is having an internal meeting."
                ]
            }
        ],
        "subtext": "inside, inner",
        "synonyms": [
            "inside",
            "inner"
        ],
        "comparative": "more internal",
        "superlative": "the most internal",
        "transcription": "ɪnˈtɜːrnl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_047",
        "word": "junior",
        "emoji": "👶",
        "form": "adjective",
        "opposite": "senior",
        "definitions": [
            {
                "text": "Having a low rank in an organization.",
                "examples": [
                    "He is a junior manager.",
                    "She has a junior position in the company."
                ]
            }
        ],
        "subtext": "lower rank, younger",
        "synonyms": [
            "lower rank",
            "younger"
        ],
        "comparative": "more junior",
        "superlative": "the most junior",
        "transcription": "ˈdʒuːniər",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_right_wrong_basic_004",
        "word": "legal",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "illegal",
        "definitions": [
            {
                "text": "Relating to the law.",
                "examples": [
                    "You should seek legal advice."
                ]
            }
        ],
        "subtext": "lawful",
        "synonyms": [
            "lawful"
        ],
        "comparative": "more legal",
        "superlative": "the most legal",
        "transcription": "ˈliːɡl",
        "lang": "en",
        "level": "elementary",
        "theme": "right_wrong_basic",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_010",
        "word": "likely",
        "emoji": "🎲",
        "form": "adjective",
        "opposite": "unlikely",
        "definitions": [
            {
                "text": "If something is likely, it will probably happen or is expected.",
                "examples": [
                    "It is likely to rain tomorrow."
                ]
            }
        ],
        "subtext": "probable",
        "synonyms": [
            "probable"
        ],
        "comparative": "more likely",
        "superlative": "the most likely",
        "transcription": "ˈlaɪkli",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_neighbourhood_local_024",
        "word": "local",
        "emoji": "🏘️",
        "form": "adjective",
        "opposite": "national",
        "definitions": [
            {
                "text": "Relating to a particular area, city, or town.",
                "examples": [
                    "We buy food at the local market.",
                    "The local news starts at six."
                ]
            }
        ],
        "subtext": "nearby, regional",
        "synonyms": [
            "nearby",
            "regional"
        ],
        "comparative": "more local",
        "superlative": "the most local",
        "transcription": "ˈloʊkl",
        "lang": "en",
        "level": "elementary",
        "theme": "neighbourhood_local",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_011",
        "word": "logical",
        "emoji": "🧮",
        "form": "adjective",
        "opposite": "illogical",
        "definitions": [
            {
                "text": "Based on reason.",
                "examples": [
                    "It was a logical decision."
                ]
            }
        ],
        "subtext": "rational, reasonable",
        "synonyms": [
            "rational",
            "reasonable"
        ],
        "comparative": "more logical",
        "superlative": "the most logical",
        "transcription": "🇬🇧 ˈlɒdʒɪkl | 🇺🇸 ˈlɑːdʒɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_clothes_001",
        "word": "loose",
        "emoji": "👕",
        "form": "adjective",
        "opposite": "tight",
        "definitions": [
            {
                "text": "Not fitting closely; large.",
                "examples": [
                    "I prefer loose clothes in summer.",
                    "The handle is loose."
                ]
            }
        ],
        "subtext": "baggy, not tight",
        "synonyms": [
            "baggy",
            "not tight"
        ],
        "comparative": "looser",
        "superlative": "the loosest",
        "transcription": "luːs",
        "lang": "en",
        "level": "elementary",
        "theme": "clothes",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_034",
        "word": "loyal",
        "emoji": "🐕",
        "form": "adjective",
        "opposite": "disloyal",
        "definitions": [
            {
                "text": "Firm and not changing in your friendship with or support for a person or an organization.",
                "examples": [
                    "He is a very loyal friend."
                ]
            }
        ],
        "subtext": "faithful",
        "synonyms": [
            "faithful"
        ],
        "comparative": "more loyal",
        "superlative": "the most loyal",
        "transcription": "ˈlɔɪəl",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_012",
        "word": "manual",
        "emoji": "⚙️",
        "form": "adjective",
        "opposite": "automatic",
        "definitions": [
            {
                "text": "Done with the hands; or not automatic.",
                "examples": [
                    "He prefers a manual car."
                ]
            }
        ],
        "subtext": "hand-done",
        "synonyms": [
            "hand-done"
        ],
        "comparative": "more manual",
        "superlative": "the most manual",
        "transcription": "ˈmænjuəl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_013",
        "word": "mental",
        "emoji": "🧠",
        "form": "adjective",
        "opposite": "physical",
        "definitions": [
            {
                "text": "Relating to the mind.",
                "examples": [
                    "She has great mental strength."
                ]
            }
        ],
        "subtext": "mind-related",
        "synonyms": [
            "mind-related"
        ],
        "comparative": "more mental",
        "superlative": "the most mental",
        "transcription": "ˈmɛntl",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_013",
        "word": "messy",
        "emoji": "🧺",
        "form": "adjective",
        "opposite": "neat",
        "definitions": [
            {
                "text": "Untidy or dirty.",
                "examples": [
                    "My room is very messy.",
                    "It was a messy situation."
                ]
            }
        ],
        "subtext": "untidy, disordered",
        "synonyms": [
            "untidy",
            "disordered"
        ],
        "comparative": "messier",
        "superlative": "the messiest",
        "transcription": "ˈmɛsi",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_weather_climate_002",
        "word": "mild",
        "emoji": "⛅",
        "form": "adjective",
        "opposite": "severe",
        "definitions": [
            {
                "text": "Not severe or strong.",
                "examples": [
                    "We had a mild winter this year."
                ]
            }
        ],
        "subtext": "gentle, moderate",
        "synonyms": [
            "gentle",
            "moderate"
        ],
        "comparative": "milder",
        "superlative": "the mildest",
        "transcription": "maɪld",
        "lang": "en",
        "level": "elementary",
        "theme": "weather_climate",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_035",
        "word": "modest",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "arrogant",
        "definitions": [
            {
                "text": "Not usually talking about or making obvious your own abilities and achievements.",
                "examples": [
                    "He's very modest about his success.",
                    "She is a modest person."
                ]
            }
        ],
        "subtext": "humble",
        "synonyms": [
            "humble"
        ],
        "comparative": "more modest",
        "superlative": "the most modest",
        "transcription": "🇬🇧 ˈmɒdɪst | 🇺🇸 ˈmɑːdɪst",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_014",
        "word": "neat",
        "emoji": "🧹",
        "form": "adjective",
        "opposite": "messy",
        "definitions": [
            {
                "text": "Tidy and in good order.",
                "examples": [
                    "His desk is always very neat.",
                    "She has neat handwriting."
                ]
            }
        ],
        "subtext": "tidy, organized",
        "synonyms": [
            "tidy",
            "organized"
        ],
        "comparative": "neater",
        "superlative": "the neatest",
        "transcription": "niːt",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_015",
        "word": "necessary",
        "emoji": "❗",
        "form": "adjective",
        "opposite": "unnecessary",
        "definitions": [
            {
                "text": "Needed; required in order to do something.",
                "examples": [
                    "A good internet connection is necessary for remote work."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "more necessary",
        "superlative": "the most necessary",
        "transcription": "ˈnɛsəsəri",
        "synonyms": [
            "essential",
            "needed"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_012",
        "word": "negative",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "positive",
        "definitions": [
            {
                "text": "Bad or harmful.",
                "examples": [
                    "The new law has had a negative impact."
                ]
            }
        ],
        "subtext": "bad, harmful",
        "synonyms": [
            "bad",
            "harmful"
        ],
        "comparative": "more negative",
        "superlative": "the most negative",
        "transcription": "ˈnɛɡətɪv",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_003",
        "word": "numerous",
        "emoji": "🔢",
        "form": "adjective",
        "opposite": "few",
        "definitions": [
            {
                "text": "Many.",
                "examples": [
                    "I have numerous questions."
                ]
            }
        ],
        "subtext": "many",
        "synonyms": [
            "many"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈnjuːmərəs",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_013",
        "word": "odd",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": "normal",
        "definitions": [
            {
                "text": "Strange or unexpected.",
                "examples": [
                    "He has some very odd habits."
                ]
            }
        ],
        "subtext": "strange, unusual",
        "synonyms": [
            "strange",
            "unusual"
        ],
        "comparative": "odder",
        "superlative": "the oddest",
        "transcription": "🇬🇧 ɒd | 🇺🇸 ɑːd",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_customs_traditions_004",
        "word": "official",
        "emoji": "📜",
        "form": "adjective",
        "opposite": "unofficial",
        "definitions": [
            {
                "text": "Agreed to or arranged by people in positions of authority.",
                "examples": [
                    "We are waiting for an official statement.",
                    "The official language of the country is English."
                ]
            }
        ],
        "subtext": "formal, authorized",
        "synonyms": [
            "formal",
            "authorized"
        ],
        "comparative": "more official",
        "superlative": "the most official",
        "transcription": "əˈfɪʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "customs_traditions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_036",
        "word": "optimistic",
        "emoji": "☀️",
        "form": "adjective",
        "opposite": "pessimistic",
        "definitions": [
            {
                "text": "Hoping or believing that good things will happen in the future.",
                "examples": [
                    "She is optimistic about the new job.",
                    "He has an optimistic outlook on life."
                ]
            }
        ],
        "subtext": "positive, hopeful",
        "synonyms": [
            "positive",
            "hopeful"
        ],
        "comparative": "more optimistic",
        "superlative": "the most optimistic",
        "transcription": "🇬🇧 ˌɒptɪˈmɪstɪk | 🇺🇸 ˌɑːptɪˈmɪstɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_016",
        "word": "ordinary",
        "emoji": "😐",
        "form": "adjective",
        "opposite": "special",
        "definitions": [
            {
                "text": "Normal or usual; not special.",
                "examples": [
                    "It was an ordinary day."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "more ordinary",
        "superlative": "the most ordinary",
        "transcription": "ˈɔːrdnri",
        "synonyms": [
            "normal",
            "common"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_048",
        "word": "organised",
        "emoji": "📁",
        "form": "adjective",
        "opposite": "disorganised",
        "definitions": [
            {
                "text": "Able to plan and manage things in an orderly way.",
                "examples": [
                    "You need to be very organised to meet every deadline."
                ]
            }
        ],
        "subtext": "well organised / highly organised / stay organised",
        "comparative": "more organised",
        "superlative": "the most organised",
        "transcription": "ˈɔːrɡənaɪzd",
        "synonyms": [
            "tidy",
            "efficient"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_diet_healthy_eating_001",
        "word": "overweight",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "underweight",
        "definitions": [
            {
                "text": "Heavier than is considered healthy.",
                "examples": [
                    "The doctor told him he was slightly overweight."
                ]
            }
        ],
        "subtext": "slightly overweight / become overweight / clinically overweight",
        "comparative": "more overweight",
        "superlative": "the most overweight",
        "transcription": "ˌoʊvərˈweɪt",
        "synonyms": [
            "fat",
            "heavy"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "diet_healthy_eating",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_014",
        "word": "permanent",
        "emoji": "🏗️",
        "form": "adjective",
        "opposite": "temporary",
        "definitions": [
            {
                "text": "Lasting for a long time or forever.",
                "examples": [
                    "She is looking for a permanent job."
                ]
            }
        ],
        "subtext": "constant, forever",
        "synonyms": [
            "constant",
            "forever"
        ],
        "comparative": "more permanent",
        "superlative": "the most permanent",
        "transcription": "ˈpɜːrmənənt",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_037",
        "word": "personal",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "public",
        "definitions": [
            {
                "text": "Relating to a particular person's life, rather than their business or professional life.",
                "examples": [
                    "I have some personal news to share."
                ]
            }
        ],
        "subtext": "private, individual",
        "synonyms": [
            "private",
            "individual"
        ],
        "comparative": "more personal",
        "superlative": "the most personal",
        "transcription": "ˈpɜːrsənl",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_038",
        "word": "pessimistic",
        "emoji": "☁️",
        "form": "adjective",
        "opposite": "optimistic",
        "definitions": [
            {
                "text": "Thinking that bad things are more likely to happen or emphasizing the bad part of a situation.",
                "examples": [
                    "Don't be so pessimistic.",
                    "He is pessimistic about the economy."
                ]
            }
        ],
        "subtext": "negative, hopeless",
        "synonyms": [
            "negative",
            "hopeless"
        ],
        "comparative": "more pessimistic",
        "superlative": "the most pessimistic",
        "transcription": "ˌpɛsɪˈmɪstɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_014",
        "word": "physical",
        "emoji": "💪",
        "form": "adjective",
        "opposite": "mental",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Regular physical exercise is important."
                ]
            }
        ],
        "subtext": "body-related",
        "synonyms": [
            "body-related"
        ],
        "comparative": "more physical",
        "superlative": "the most physical",
        "transcription": "ˈfɪzɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_society_politics_002",
        "word": "political",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "non-political",
        "definitions": [
            {
                "text": "Relating to politics.",
                "examples": [
                    "He is very interested in political news."
                ]
            }
        ],
        "subtext": "government-related",
        "synonyms": [
            "government-related"
        ],
        "comparative": "more political",
        "superlative": "the most political",
        "transcription": "pəˈlɪtɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "society_politics",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_017",
        "word": "popular",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "unpopular",
        "definitions": [
            {
                "text": "Liked or enjoyed by many people.",
                "examples": [
                    "This restaurant is very popular.",
                    "The new café near the office is very popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / a popular person",
        "comparative": "more popular",
        "superlative": "the most popular",
        "transcription": "🇬🇧 ˈpɒpjələr | 🇺🇸 ˈpɑːpjələr",
        "synonyms": [
            "famous",
            "liked"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_015",
        "word": "positive",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "negative",
        "definitions": [
            {
                "text": "Full of hope and confidence.",
                "examples": [
                    "Try to be more positive about your future."
                ]
            }
        ],
        "subtext": "hopeful, good",
        "synonyms": [
            "hopeful",
            "good"
        ],
        "comparative": "more positive",
        "superlative": "the most positive",
        "transcription": "🇬🇧 ˈpɒzətɪv | 🇺🇸 ˈpɑːzətɪv",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_016",
        "word": "potential",
        "emoji": "🌱",
        "form": "adjective",
        "opposite": "actual",
        "definitions": [
            {
                "text": "Possible when the necessary conditions exist.",
                "examples": [
                    "We have many potential customers."
                ]
            }
        ],
        "subtext": "possible",
        "synonyms": [
            "possible"
        ],
        "comparative": "more potential",
        "superlative": "the most potential",
        "transcription": "pəˈtɛnʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_018",
        "word": "practical",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "impractical",
        "definitions": [
            {
                "text": "Useful in real situations; sensible.",
                "examples": [
                    "She gave very practical advice."
                ]
            }
        ],
        "subtext": "very practical / highly practical / a practical solution",
        "comparative": "more practical",
        "superlative": "the most practical",
        "transcription": "ˈpræktɪkl",
        "synonyms": [
            "useful"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_time_003",
        "word": "previous",
        "emoji": "🔙",
        "form": "adjective",
        "opposite": "next",
        "definitions": [
            {
                "text": "Happening or existing before something or someone else.",
                "examples": [
                    "In my previous job, I worked in a bank."
                ]
            }
        ],
        "subtext": "previous job / previous week",
        "synonyms": [
            "former",
            "earlier"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈpriːviəs",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_019",
        "word": "private",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "public",
        "definitions": [
            {
                "text": "Only for one person or group and not for everyone.",
                "examples": [
                    "This is a private conversation.",
                    "He has a private garden."
                ]
            }
        ],
        "subtext": "personal, confidential",
        "synonyms": [
            "personal",
            "confidential"
        ],
        "comparative": "more private",
        "superlative": "the most private",
        "transcription": "ˈpraɪvət",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_049",
        "word": "productive",
        "emoji": "⚙️",
        "form": "adjective",
        "opposite": "unproductive",
        "definitions": [
            {
                "text": "Doing or producing a lot of useful work.",
                "examples": [
                    "She is most productive in the early morning hours."
                ]
            }
        ],
        "subtext": "very productive / highly productive / a productive meeting",
        "comparative": "more productive",
        "superlative": "the most productive",
        "transcription": "prəˈdʌktɪv",
        "synonyms": [
            "efficient"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_050",
        "word": "professional",
        "emoji": "👔",
        "form": "adjective",
        "opposite": "unprofessional",
        "definitions": [
            {
                "text": "Behaving in a skilled and appropriate way for a job.",
                "examples": [
                    "She always appears very professional in meetings."
                ]
            }
        ],
        "subtext": "professional advice / very professional / highly professional",
        "comparative": "more professional",
        "superlative": "the most professional",
        "transcription": "prəˈfɛʃənl",
        "synonyms": [
            "expert"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_020",
        "word": "public",
        "emoji": "🏢",
        "form": "adjective",
        "opposite": "private",
        "definitions": [
            {
                "text": "Relating to or available to everyone.",
                "examples": [
                    "Public transport is very good here.",
                    "The park is open to the public."
                ]
            }
        ],
        "subtext": "open, communal",
        "synonyms": [
            "open",
            "communal"
        ],
        "comparative": "more public",
        "superlative": "the most public",
        "transcription": "ˈpʌblɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_qualifications_exams_001",
        "word": "qualified",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "unqualified",
        "definitions": [
            {
                "text": "Having the necessary skills or training.",
                "examples": [
                    "She is fully qualified to lead the team."
                ]
            }
        ],
        "subtext": "fully qualified / well qualified / highly qualified",
        "comparative": "more qualified",
        "superlative": "the most qualified",
        "synonyms": [
            "trained"
        ],
        "transcription": "🇬🇧 ˈkwɒlɪfaɪd | 🇺🇸 ˈkwɑːlɪfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "qualifications_exams",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_004",
        "word": "rare",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "common",
        "definitions": [
            {
                "text": "Not common; very unusual.",
                "examples": [
                    "This is a rare bird in this area.",
                    "It is rare to see him so happy."
                ]
            }
        ],
        "subtext": "uncommon, unusual",
        "synonyms": [
            "uncommon",
            "unusual"
        ],
        "comparative": "rarer",
        "superlative": "the rarest",
        "transcription": "reər",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_017",
        "word": "reasonable",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "unreasonable",
        "definitions": [
            {
                "text": "Fair and sensible.",
                "examples": [
                    "That seems like a reasonable request."
                ]
            }
        ],
        "subtext": "sensible, fair",
        "synonyms": [
            "sensible",
            "fair"
        ],
        "comparative": "more reasonable",
        "superlative": "the most reasonable",
        "transcription": "ˈriːznəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_time_004",
        "word": "recent",
        "emoji": "🕒",
        "form": "adjective",
        "opposite": "old",
        "definitions": [
            {
                "text": "Having happened not long ago.",
                "examples": [
                    "Have you seen the recent changes to the policy?"
                ]
            }
        ],
        "subtext": "most recent / very recent / recent news",
        "comparative": "more recent",
        "superlative": "the most recent",
        "synonyms": [
            "new",
            "latest"
        ],
        "transcription": "ˈriːsnt",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_018",
        "word": "regular",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": "irregular",
        "definitions": [
            {
                "text": "Happening or doing something often.",
                "examples": [
                    "I have a regular exercise routine."
                ]
            }
        ],
        "subtext": "usual, normal",
        "synonyms": [
            "usual",
            "normal"
        ],
        "comparative": "more regular",
        "superlative": "the most regular",
        "transcription": "ˈrɛɡjələr",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_019",
        "word": "relevant",
        "emoji": "🎯",
        "form": "adjective",
        "opposite": "irrelevant",
        "definitions": [
            {
                "text": "Connected with what is happening or being discussed.",
                "examples": [
                    "Do you have any relevant experience?"
                ]
            }
        ],
        "subtext": "applicable",
        "synonyms": [
            "applicable"
        ],
        "comparative": "more relevant",
        "superlative": "the most relevant",
        "transcription": "ˈrɛləvənt",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_006",
        "word": "reliable",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unreliable",
        "definitions": [
            {
                "text": "Consistently good; able to be trusted.",
                "examples": [
                    "He is the most reliable person in the team."
                ]
            }
        ],
        "subtext": "very reliable / highly reliable / a reliable source",
        "comparative": "more reliable",
        "superlative": "the most reliable",
        "transcription": "rɪˈlaɪəbl",
        "synonyms": [
            "dependable"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_004",
        "word": "remote",
        "emoji": "🏔️",
        "form": "adjective",
        "opposite": "central",
        "definitions": [
            {
                "text": "Far away from other places.",
                "examples": [
                    "They live in a remote village in the mountains."
                ]
            }
        ],
        "subtext": "distant",
        "synonyms": [
            "distant"
        ],
        "comparative": "remoter",
        "superlative": "the remotest",
        "transcription": "rɪˈmoʊt",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_051",
        "word": "responsible",
        "emoji": "🛡️",
        "form": "adjective",
        "opposite": "irresponsible",
        "definitions": [
            {
                "text": "Having a duty to deal with something; reliable.",
                "examples": [
                    "He is responsible for the whole marketing budget."
                ]
            }
        ],
        "subtext": "responsible for / very responsible / highly responsible",
        "comparative": "more responsible",
        "superlative": "the most responsible",
        "transcription": "🇬🇧 rɪˈspɒnsəbl | 🇺🇸 rɪˈspɑːnsəbl",
        "synonyms": [
            "accountable"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_007",
        "word": "satisfied",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "dissatisfied",
        "definitions": [
            {
                "text": "Pleased because you have got what you wanted.",
                "examples": [
                    "She is satisfied with her new salary."
                ]
            }
        ],
        "subtext": "feel satisfied / satisfied with",
        "synonyms": [
            "content",
            "pleased"
        ],
        "comparative": "more satisfied",
        "superlative": "the most satisfied",
        "transcription": "ˈsætɪsfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_basic_science_003",
        "word": "scientific",
        "emoji": "🔬",
        "form": "adjective",
        "opposite": "unscientific",
        "definitions": [
            {
                "text": "Relating to science.",
                "examples": [
                    "She is doing scientific research."
                ]
            }
        ],
        "subtext": "science-related",
        "synonyms": [
            "science-related"
        ],
        "comparative": "more scientific",
        "superlative": "the most scientific",
        "transcription": "ˌsaɪənˈtɪfɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "basic_science",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_039",
        "word": "selfish",
        "emoji": "🤳",
        "form": "adjective",
        "opposite": "unselfish",
        "definitions": [
            {
                "text": "Someone who is selfish only thinks of their own advantage.",
                "examples": [
                    "It was selfish of him to leave all the work to you.",
                    "Don't be so selfish!"
                ]
            }
        ],
        "subtext": "self-centered",
        "synonyms": [
            "self-centered"
        ],
        "comparative": "more selfish",
        "superlative": "the most selfish",
        "transcription": "ˈsɛlfɪʃ",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_040",
        "word": "sensible",
        "emoji": "🧠",
        "form": "adjective",
        "opposite": "foolish",
        "definitions": [
            {
                "text": "Based on or acting on good judgment and practical ideas or understanding.",
                "examples": [
                    "That was a sensible decision.",
                    "She is a very sensible person."
                ]
            }
        ],
        "subtext": "practical, reasonable",
        "synonyms": [
            "practical",
            "reasonable"
        ],
        "comparative": "more sensible",
        "superlative": "the most sensible",
        "transcription": "ˈsɛnsəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_041",
        "word": "sensitive",
        "emoji": "🥺",
        "form": "adjective",
        "opposite": "insensitive",
        "definitions": [
            {
                "text": "Easily upset by the things people say or do, or causing people to be upset, embarrassed, or angry.",
                "examples": [
                    "He is very sensitive about his weight.",
                    "She is a sensitive child."
                ]
            }
        ],
        "subtext": "delicate, emotional",
        "synonyms": [
            "delicate",
            "emotional"
        ],
        "comparative": "more sensitive",
        "superlative": "the most sensitive",
        "transcription": "ˈsɛnsətɪv",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_020",
        "word": "severe",
        "emoji": "🌋",
        "form": "adjective",
        "opposite": "mild",
        "definitions": [
            {
                "text": "Very serious.",
                "examples": [
                    "The storm caused severe damage."
                ]
            }
        ],
        "subtext": "serious, extreme",
        "synonyms": [
            "serious",
            "extreme"
        ],
        "comparative": "more severe",
        "superlative": "the most severe",
        "transcription": "sɪˈvɪər",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_021",
        "word": "similar",
        "emoji": "👯",
        "form": "adjective",
        "opposite": "different",
        "definitions": [
            {
                "text": "Almost the same; having many shared features.",
                "examples": [
                    "Our approaches are very similar."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "more similar",
        "superlative": "the most similar",
        "transcription": "ˈsɪmələr",
        "synonyms": [
            "alike"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_007",
        "word": "sociable",
        "emoji": "🗣️",
        "form": "adjective",
        "opposite": "unsociable",
        "definitions": [
            {
                "text": "Enjoying spending time with other people.",
                "examples": [
                    "She is very sociable and knows everyone."
                ]
            }
        ],
        "subtext": "very sociable / naturally sociable / sociable person",
        "comparative": "more sociable",
        "superlative": "the most sociable",
        "transcription": "ˈsoʊʃəbl",
        "synonyms": [
            "friendly"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_society_politics_003",
        "word": "social",
        "emoji": "👥",
        "form": "adjective",
        "opposite": "anti-social",
        "definitions": [
            {
                "text": "Relating to society or to spending time with other people.",
                "examples": [
                    "Humans are social animals."
                ]
            }
        ],
        "subtext": "society-related",
        "synonyms": [
            "society-related"
        ],
        "comparative": "more social",
        "superlative": "the most social",
        "transcription": "ˈsoʊʃl",
        "lang": "en",
        "level": "elementary",
        "theme": "society_politics",
        "sub_theme": null
    },
    {
        "id": "en_elementary_customs_traditions_005",
        "word": "spiritual",
        "emoji": "🧘",
        "form": "adjective",
        "opposite": "physical",
        "definitions": [
            {
                "text": "Relating to deep feelings and beliefs, especially religious beliefs.",
                "examples": [
                    "He is a very spiritual person."
                ]
            }
        ],
        "subtext": "non-physical, deep",
        "synonyms": [
            "non-physical",
            "deep"
        ],
        "comparative": "more spiritual",
        "superlative": "the most spiritual",
        "transcription": "ˈspɪrɪtʃuəl",
        "lang": "en",
        "level": "elementary",
        "theme": "customs_traditions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_022",
        "word": "strange",
        "emoji": "❓",
        "form": "adjective",
        "opposite": "normal",
        "definitions": [
            {
                "text": "Unusual or surprising in a way that is hard to understand.",
                "examples": [
                    "The email from the client sounded very strange.",
                    "He heard a strange noise."
                ]
            }
        ],
        "subtext": "very strange / a strange feeling / find strange",
        "comparative": "stranger",
        "superlative": "the strangest",
        "transcription": "streɪndʒ",
        "synonyms": [
            "unusual",
            "odd"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_008",
        "word": "stressed",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxed",
        "definitions": [
            {
                "text": "Feeling worried and tense from pressure.",
                "examples": [
                    "She feels stressed about the upcoming presentation.",
                    "She feels stressed before every deadline."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / completely stressed",
        "comparative": "more stressed",
        "superlative": "the most stressed",
        "transcription": "strɛst",
        "synonyms": [
            "worried"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_009",
        "word": "stressful",
        "emoji": "😫",
        "form": "adjective",
        "opposite": "relaxing",
        "definitions": [
            {
                "text": "Causing worry or anxiety.",
                "examples": [
                    "Her job is very stressful."
                ]
            }
        ],
        "subtext": "a stressful job / very stressful / stressful situation",
        "comparative": "more stressful",
        "superlative": "the most stressful",
        "transcription": "ˈstrɛsfl",
        "synonyms": [
            "difficult"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_career_development_052",
        "word": "successful",
        "emoji": "🏆",
        "form": "adjective",
        "opposite": "unsuccessful",
        "definitions": [
            {
                "text": "Having achieved something desired.",
                "examples": [
                    "She had a very successful first year in the role."
                ]
            }
        ],
        "subtext": "highly successful / a successful career / very successful",
        "comparative": "more successful",
        "superlative": "the most successful",
        "synonyms": [
            "effective"
        ],
        "transcription": "səkˈsɛsfl",
        "lang": "en",
        "level": "elementary",
        "theme": "career_development",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_008",
        "word": "supportive",
        "emoji": "🤝",
        "form": "adjective",
        "opposite": "unsupportive",
        "definitions": [
            {
                "text": "Giving help and encouragement.",
                "examples": [
                    "Her manager is very supportive during busy periods."
                ]
            }
        ],
        "subtext": "very supportive / supportive team / be supportive",
        "comparative": "more supportive",
        "superlative": "the most supportive",
        "transcription": "səˈpɔːrtɪv",
        "synonyms": [
            "helpful"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_environment_007",
        "word": "sustainable",
        "emoji": "♻️",
        "form": "adjective",
        "opposite": "unsustainable",
        "definitions": [
            {
                "text": "Able to continue over a long period of time without damaging the environment.",
                "examples": [
                    "The company is moving towards sustainable energy sources."
                ]
            }
        ],
        "subtext": "eco-friendly",
        "synonyms": [
            "eco-friendly"
        ],
        "comparative": "more sustainable",
        "superlative": "the most sustainable",
        "transcription": "səˈsteɪnəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "environment",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_042",
        "word": "talented",
        "emoji": "🌟",
        "form": "adjective",
        "opposite": "untalented",
        "definitions": [
            {
                "text": "With talent; able to do something well.",
                "examples": [
                    "He is a talented musician.",
                    "She is a very talented artist."
                ]
            }
        ],
        "subtext": "gifted, skilled",
        "synonyms": [
            "gifted",
            "skilled"
        ],
        "comparative": "more talented",
        "superlative": "the most talented",
        "transcription": "ˈtæləntɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_animals_004",
        "word": "tame",
        "emoji": "🐈",
        "form": "adjective",
        "opposite": "wild",
        "definitions": [
            {
                "text": "Not wild; comfortable around humans.",
                "examples": [
                    "The bird is very tame and will sit on your hand."
                ]
            }
        ],
        "subtext": "tame animal / very tame",
        "synonyms": [
            "domesticated"
        ],
        "comparative": "tamer",
        "superlative": "the tamest",
        "transcription": "teɪm",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_021",
        "word": "temporary",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "permanent",
        "definitions": [
            {
                "text": "Not lasting or needed for very long.",
                "examples": [
                    "It's only a temporary solution."
                ]
            }
        ],
        "subtext": "short-term",
        "synonyms": [
            "short-term"
        ],
        "comparative": "more temporary",
        "superlative": "the most temporary",
        "transcription": "ˈtɛmprəri",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_clothes_002",
        "word": "tight",
        "emoji": "👚",
        "form": "adjective",
        "opposite": "loose",
        "definitions": [
            {
                "text": "Fitting very closely or too closely.",
                "examples": [
                    "These shoes are too tight.",
                    "The dress is a bit tight around the waist."
                ]
            }
        ],
        "subtext": "close-fitting, small",
        "synonyms": [
            "close-fitting",
            "small"
        ],
        "comparative": "tighter",
        "superlative": "the tightest",
        "transcription": "taɪt",
        "lang": "en",
        "level": "elementary",
        "theme": "clothes",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_023",
        "word": "traditional",
        "emoji": "🏛️",
        "form": "adjective",
        "opposite": "modern",
        "definitions": [
            {
                "text": "Following established customs or ways.",
                "examples": [
                    "The company has a traditional management structure."
                ]
            }
        ],
        "subtext": "very traditional / traditional approach / deeply traditional",
        "comparative": "more traditional",
        "superlative": "the most traditional",
        "transcription": "trəˈdɪʃənl",
        "synonyms": [
            "old"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_024",
        "word": "typical",
        "emoji": "🔄",
        "form": "adjective",
        "opposite": "unusual",
        "definitions": [
            {
                "text": "Having the usual qualities of a type of person or thing.",
                "examples": [
                    "This is a typical problem in large organisations."
                ]
            }
        ],
        "subtext": "very typical / a typical day / typical of",
        "comparative": "more typical",
        "superlative": "the most typical",
        "transcription": "ˈtɪpɪkl",
        "synonyms": [
            "normal"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_025",
        "word": "unable",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "able",
        "definitions": [
            {
                "text": "Not able to do something.",
                "examples": [
                    "She was unable to attend the meeting."
                ]
            }
        ],
        "subtext": "unable to do / feel unable",
        "synonyms": [
            "incapable"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ʌnˈeɪbl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_026",
        "word": "unfair",
        "emoji": "⚖️",
        "form": "adjective",
        "opposite": "fair",
        "definitions": [
            {
                "text": "Not treating people in an equal or right way.",
                "examples": [
                    "It is unfair that she has to work on Sundays."
                ]
            }
        ],
        "subtext": "unfair treatment / very unfair",
        "synonyms": [
            "unjust"
        ],
        "comparative": "more unfair",
        "superlative": "the most unfair",
        "transcription": "ˌʌnˈfɛər",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_043",
        "word": "unfriendly",
        "emoji": "😠",
        "form": "adjective",
        "opposite": "friendly",
        "definitions": [
            {
                "text": "Not friendly.",
                "examples": [
                    "The shop assistant was quite unfriendly."
                ]
            }
        ],
        "subtext": "an unfriendly person / quite unfriendly",
        "synonyms": [
            "mean"
        ],
        "comparative": "unfriendlier",
        "superlative": "the unfriendliest",
        "transcription": "ʌnˈfrɛndli",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_022",
        "word": "unlikely",
        "emoji": "🎲",
        "form": "adjective",
        "opposite": "likely",
        "definitions": [
            {
                "text": "Not probable or likely to happen.",
                "examples": [
                    "It's unlikely that he will come."
                ]
            }
        ],
        "subtext": "improbable",
        "synonyms": [
            "improbable"
        ],
        "comparative": "more unlikely",
        "superlative": "the most unlikely",
        "transcription": "ʌnˈlaɪkli",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_010",
        "word": "unlucky",
        "emoji": "😿",
        "form": "adjective",
        "opposite": "lucky",
        "definitions": [
            {
                "text": "Having or bringing bad luck.",
                "examples": [
                    "Thirteen is considered an unlucky number by some."
                ]
            }
        ],
        "subtext": "feel unlucky / an unlucky day",
        "synonyms": [
            "unfortunate"
        ],
        "comparative": "unluckier",
        "superlative": "the unluckiest",
        "transcription": "ʌnˈlʌki",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_027",
        "word": "unnecessary",
        "emoji": "🍃",
        "form": "adjective",
        "opposite": "necessary",
        "definitions": [
            {
                "text": "Not needed; more than is needed.",
                "examples": [
                    "That is an unnecessary expense."
                ]
            }
        ],
        "subtext": "unnecessary expense / absolutely unnecessary",
        "synonyms": [
            "not needed"
        ],
        "comparative": "more unnecessary",
        "superlative": "the most unnecessary",
        "transcription": "ʌnˈnɛsəsəri",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_028",
        "word": "unpopular",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "popular",
        "definitions": [
            {
                "text": "Not liked by many people.",
                "examples": [
                    "The decision was very unpopular with the staff."
                ]
            }
        ],
        "subtext": "disliked / unpopular decision / become unpopular",
        "comparative": "more unpopular",
        "superlative": "the most unpopular",
        "transcription": "🇬🇧 ʌnˈpɒpjələr | 🇺🇸 ʌnˈpɑːpjələr",
        "synonyms": [
            "disliked"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_029",
        "word": "unusual",
        "emoji": "🌀",
        "form": "adjective",
        "opposite": "usual",
        "definitions": [
            {
                "text": "Different from what is usual or expected.",
                "examples": [
                    "He has an unusual name.",
                    "It is unusual for it to snow in April."
                ]
            }
        ],
        "subtext": "strange, uncommon",
        "synonyms": [
            "strange",
            "uncommon"
        ],
        "comparative": "more unusual",
        "superlative": "the most unusual",
        "transcription": "ʌnˈjuːʒuəl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_011",
        "word": "upset",
        "emoji": "😢",
        "form": "adjective",
        "opposite": "happy",
        "definitions": [
            {
                "text": "Worried, unhappy, or angry.",
                "examples": [
                    "She was very upset when she heard the news.",
                    "Don't get upset over small things."
                ]
            }
        ],
        "subtext": "unhappy, sad",
        "synonyms": [
            "unhappy",
            "sad"
        ],
        "comparative": "more upset",
        "superlative": "the most upset",
        "transcription": "ˌʌpˈsɛt",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_030",
        "word": "useless",
        "emoji": "🗑️",
        "form": "adjective",
        "opposite": "useful",
        "definitions": [
            {
                "text": "Without any useful value; not helpful.",
                "examples": [
                    "This software is useless for our needs."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "more useless",
        "superlative": "the most useless",
        "transcription": "ˈjuːsləs",
        "synonyms": [
            "unhelpful"
        ],
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_006",
        "word": "valuable",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "worthless",
        "definitions": [
            {
                "text": "Worth a lot of money.",
                "examples": [
                    "This is a valuable painting.",
                    "Your advice was very valuable to me."
                ]
            }
        ],
        "subtext": "precious, expensive",
        "synonyms": [
            "precious",
            "expensive"
        ],
        "comparative": "more valuable",
        "superlative": "the most valuable",
        "transcription": "ˈvæljuəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_005",
        "word": "vast",
        "emoji": "🌊",
        "form": "adjective",
        "opposite": "tiny",
        "definitions": [
            {
                "text": "Extremely big.",
                "examples": [
                    "The ocean is vast.",
                    "They have a vast amount of experience."
                ]
            }
        ],
        "subtext": "huge, enormous",
        "synonyms": [
            "huge",
            "enormous"
        ],
        "comparative": "vaster",
        "superlative": "the vastest",
        "transcription": "vɑːst",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_007",
        "word": "wealthy",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "poor",
        "definitions": [
            {
                "text": "Rich.",
                "examples": [
                    "He comes from a wealthy family.",
                    "They live in a wealthy neighborhood."
                ]
            }
        ],
        "subtext": "rich, affluent",
        "synonyms": [
            "rich",
            "affluent"
        ],
        "comparative": "wealthier",
        "superlative": "the wealthiest",
        "transcription": "ˈwɛlθi",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_animals_005",
        "word": "wild",
        "emoji": "🦁",
        "form": "adjective",
        "opposite": "tame",
        "definitions": [
            {
                "text": "Living or growing in nature; not controlled by humans.",
                "examples": [
                    "I saw some wild animals in the forest."
                ]
            }
        ],
        "subtext": "wild flowers / wild cats",
        "synonyms": [
            "natural"
        ],
        "comparative": "wilder",
        "superlative": "the wildest",
        "transcription": "waɪld",
        "lang": "en",
        "level": "elementary",
        "theme": "animals",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_044",
        "word": "willing",
        "emoji": "🙋",
        "form": "adjective",
        "opposite": "unwilling",
        "definitions": [
            {
                "text": "Happy to do something if it is needed.",
                "examples": [
                    "He is a willing helper.",
                    "I am willing to try new things."
                ]
            }
        ],
        "subtext": "ready, eager",
        "synonyms": [
            "ready",
            "eager"
        ],
        "comparative": "more willing",
        "superlative": "the most willing",
        "transcription": "ˈwɪlɪŋ",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_045",
        "word": "wise",
        "emoji": "🦉",
        "form": "adjective",
        "opposite": "foolish",
        "definitions": [
            {
                "text": "Having or showing the ability to make good judgments, based on a deep understanding and experience of life.",
                "examples": [
                    "That was a wise choice.",
                    "He is a wise old man."
                ]
            }
        ],
        "subtext": "intelligent, sensible",
        "synonyms": [
            "intelligent",
            "sensible"
        ],
        "comparative": "wiser",
        "superlative": "the wisest",
        "transcription": "waɪz",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_008",
        "word": "worth",
        "emoji": "💰",
        "form": "adjective",
        "opposite": "worthless",
        "definitions": [
            {
                "text": "Having a value equal to or deserving of.",
                "examples": [
                    "The investment is worth every penny."
                ]
            }
        ],
        "subtext": "worth the money / worth doing / worth considering",
        "comparative": null,
        "superlative": null,
        "transcription": "wɜːrθ",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_finances_009",
        "word": "worthless",
        "emoji": "🗑️",
        "form": "adjective",
        "opposite": "valuable",
        "definitions": [
            {
                "text": "Having no value in money.",
                "examples": [
                    "The old car is almost worthless.",
                    "He felt worthless after losing his job."
                ]
            }
        ],
        "subtext": "cheap, useless",
        "synonyms": [
            "cheap",
            "useless"
        ],
        "comparative": "more worthless",
        "superlative": "the most worthless",
        "transcription": "ˈwɜːrθləs",
        "lang": "en",
        "level": "elementary",
        "theme": "finances",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_012",
        "word": "delighted",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very pleased.",
                "examples": [
                    "I was delighted with my exam results.",
                    "We are delighted to welcome you to our team."
                ]
            }
        ],
        "subtext": "very happy, pleased",
        "synonyms": [
            "very happy",
            "pleased"
        ],
        "comparative": "more delighted",
        "superlative": "the most delighted",
        "opposite": "miserable",
        "transcription": "dɪˈlaɪtɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_031",
        "word": "dull",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not interesting or exciting; or not bright.",
                "examples": [
                    "The movie was a bit dull.",
                    "It was a dull, grey day."
                ]
            }
        ],
        "subtext": "boring, not bright",
        "synonyms": [
            "boring",
            "not bright"
        ],
        "comparative": "duller",
        "superlative": "the dullest",
        "opposite": "bright",
        "transcription": "dʌl",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_personal_qualities_009",
        "word": "elderly",
        "emoji": "👴",
        "form": "adjective",
        "definitions": [
            {
                "text": "A polite word for old, used to describe people.",
                "examples": [
                    "The elderly man needed help crossing the road.",
                    "She looks after her elderly parents."
                ]
            }
        ],
        "subtext": "old people",
        "synonyms": [
            "old people"
        ],
        "comparative": "more elderly",
        "superlative": "the most elderly",
        "opposite": "young",
        "transcription": "ˈɛldərli",
        "lang": "en",
        "level": "elementary",
        "theme": "personal_qualities",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_006",
        "word": "frequent",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening often.",
                "examples": [
                    "The buses are quite frequent.",
                    "He is a frequent visitor to London."
                ]
            }
        ],
        "subtext": "often",
        "synonyms": [
            "often"
        ],
        "comparative": "more frequent",
        "superlative": "the most frequent",
        "opposite": "rare",
        "transcription": "ˈfriːkwənt",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_032",
        "word": "inner",
        "emoji": "🎯",
        "form": "adjective",
        "definitions": [
            {
                "text": "On the inside, or near the center of something.",
                "examples": [
                    "The inner ear is very sensitive.",
                    "She has a lot of inner strength."
                ]
            }
        ],
        "subtext": "inside",
        "synonyms": [
            "inside"
        ],
        "comparative": null,
        "superlative": "innermost",
        "opposite": "outer",
        "transcription": "ˈɪnər",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_023",
        "word": "main",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Larger, more important, or having more influence than others of the same type.",
                "examples": [
                    "The main problem is the cost.",
                    "The main office is in New York."
                ]
            }
        ],
        "subtext": "primary, chief",
        "synonyms": [
            "primary",
            "chief"
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "secondary",
        "transcription": "meɪn",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_body_015",
        "word": "medical",
        "emoji": "🩺",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to medicine and the treatment of diseases or injuries.",
                "examples": [
                    "She is a medical student.",
                    "He needs urgent medical attention."
                ]
            }
        ],
        "subtext": "health-related",
        "synonyms": [
            "health-related"
        ],
        "comparative": "more medical",
        "superlative": "the most medical",
        "opposite": "non-medical",
        "transcription": "ˈmɛdɪkl",
        "lang": "en",
        "level": "elementary",
        "theme": "body",
        "sub_theme": null
    },
    {
        "id": "en_elementary_places_005",
        "word": "nearby",
        "emoji": "📍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not far away.",
                "examples": [
                    "They live in a nearby town.",
                    "Is there a post office nearby?"
                ]
            }
        ],
        "subtext": "close, near",
        "synonyms": [
            "close",
            "near"
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "distant",
        "transcription": "ˌnɪərˈbaɪ",
        "lang": "en",
        "level": "elementary",
        "theme": "places",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_033",
        "word": "outer",
        "emoji": "🪐",
        "form": "adjective",
        "definitions": [
            {
                "text": "On the outside, or further from the center of something.",
                "examples": [
                    "The outer layer of the skin is very thin.",
                    "We live in the outer suburbs."
                ]
            }
        ],
        "subtext": "outside",
        "synonyms": [
            "outside"
        ],
        "comparative": null,
        "superlative": "outermost",
        "opposite": "inner",
        "transcription": "ˈaʊtər",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_046",
        "word": "pleasant",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Enjoyable, attractive, friendly, or easy to like.",
                "examples": [
                    "We had a very pleasant evening.",
                    "The weather was pleasant."
                ]
            }
        ],
        "subtext": "nice, enjoyable",
        "synonyms": [
            "nice",
            "enjoyable"
        ],
        "comparative": "more pleasant",
        "superlative": "the most pleasant",
        "opposite": "unpleasant",
        "transcription": "ˈplɛznt",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotions_013",
        "word": "pleased",
        "emoji": "😊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happy or satisfied.",
                "examples": [
                    "I am very pleased with my new car.",
                    "She was pleased to see him."
                ]
            }
        ],
        "subtext": "happy, satisfied",
        "synonyms": [
            "happy",
            "satisfied"
        ],
        "comparative": "more pleased",
        "superlative": "the most pleased",
        "opposite": "annoyed",
        "transcription": "pliːzd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_024",
        "word": "secondary",
        "emoji": "2️⃣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Less important than something else.",
                "examples": [
                    "The cost is a secondary consideration.",
                    "She goes to secondary school."
                ]
            }
        ],
        "subtext": "less important",
        "synonyms": [
            "less important"
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "primary",
        "transcription": "ˈsɛkəndri",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_condition_state_034",
        "word": "silent",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Without any sound.",
                "examples": [
                    "The library was completely silent.",
                    "The computer is very silent."
                ]
            }
        ],
        "subtext": "quiet",
        "synonyms": [
            "quiet"
        ],
        "comparative": "more silent",
        "superlative": "the most silent",
        "opposite": "noisy",
        "transcription": "ˈsaɪlənt",
        "lang": "en",
        "level": "elementary",
        "theme": "condition_state",
        "sub_theme": null
    },
    {
        "id": "en_elementary_time_005",
        "word": "sudden",
        "emoji": "⚡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or done quickly and unexpectedly.",
                "examples": [
                    "There was a sudden change in the weather.",
                    "He made a sudden decision."
                ]
            }
        ],
        "subtext": "unexpected",
        "synonyms": [
            "unexpected"
        ],
        "comparative": "more sudden",
        "superlative": "the most sudden",
        "opposite": "gradual",
        "transcription": "ˈsʌdn",
        "lang": "en",
        "level": "elementary",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_elementary_giving_reasons_025",
        "word": "suitable",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Right or appropriate for a particular person, purpose, or situation.",
                "examples": [
                    "This book is suitable for children.",
                    "The hotel is suitable for families."
                ]
            }
        ],
        "subtext": "appropriate",
        "synonyms": [
            "appropriate"
        ],
        "comparative": "more suitable",
        "superlative": "the most suitable",
        "opposite": "unsuitable",
        "transcription": "ˈsuːtəbl",
        "lang": "en",
        "level": "elementary",
        "theme": "giving_reasons",
        "sub_theme": null
    },
    {
        "id": "en_elementary_quantity_degree_007",
        "word": "various",
        "emoji": "🌈",
        "form": "adjective",
        "definitions": [
            {
                "text": "Many different.",
                "examples": [
                    "There are various reasons for the delay.",
                    "We sell various types of coffee."
                ]
            }
        ],
        "subtext": "different types",
        "synonyms": [
            "different types"
        ],
        "comparative": null,
        "superlative": null,
        "opposite": "uniform",
        "transcription": "ˈvɛəriəs",
        "lang": "en",
        "level": "elementary",
        "theme": "quantity_degree",
        "sub_theme": null
    },
    {
        "id": "en_elementary_weather_climate_003",
        "word": "humid",
        "emoji": "💦",
        "form": "adjective",
        "opposite": "dry",
        "definitions": [
            {
                "text": "Having a high level of water vapor in the atmosphere.",
                "examples": [
                    "The weather here is very hot and humid.",
                    "It's hard to breathe in the humid air."
                ]
            }
        ],
        "subtext": "sticky weather, moist air",
        "synonyms": [
            "sticky weather",
            "moist air"
        ],
        "comparative": "more humid",
        "superlative": "the most humid",
        "transcription": "ˈhjuːmɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "weather_climate",
        "sub_theme": null
    },
    {
        "id": "en_elementary_weather_climate_004",
        "word": "chilly",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "warm",
        "definitions": [
            {
                "text": "Cold enough to make you feel uncomfortable.",
                "examples": [
                    "It's a bit chilly outside, so wear a coat.",
                    "The room felt chilly even with the heating on."
                ]
            }
        ],
        "subtext": "cool, cold",
        "synonyms": [
            "cool",
            "cold"
        ],
        "comparative": "chillier",
        "superlative": "the chilliest",
        "transcription": "ˈtʃɪli",
        "lang": "en",
        "level": "elementary",
        "theme": "weather_climate",
        "sub_theme": null
    },
    {
        "id": "en_elementary_marriage_partnership_001",
        "word": "engaged",
        "emoji": "💍",
        "form": "adjective",
        "opposite": "single",
        "definitions": [
            {
                "text": "Having formally agreed to marry.",
                "examples": [
                    "They got engaged last Christmas.",
                    "She is engaged to a doctor she met at university."
                ]
            }
        ],
        "subtext": "promised to marry",
        "synonyms": [
            "promised to marry"
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ɪnˈɡeɪdʒd",
        "lang": "en",
        "level": "elementary",
        "theme": "marriage_partnership",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotional_intensity_001",
        "word": "furious",
        "emoji": "😡",
        "form": "adjective",
        "opposite": "calm",
        "definitions": [
            {
                "text": "Extremely angry.",
                "examples": [
                    "He was furious when he saw the damage to his car.",
                    "She was furious with herself for making such a mistake."
                ]
            }
        ],
        "subtext": "very angry, livid",
        "synonyms": [
            "very angry",
            "livid"
        ],
        "comparative": "more furious",
        "superlative": "the most furious",
        "transcription": "ˈfjʊəriəs",
        "lang": "en",
        "level": "elementary",
        "theme": "emotional_intensity",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotional_intensity_002",
        "word": "terrified",
        "emoji": "😱",
        "form": "adjective",
        "opposite": "brave",
        "definitions": [
            {
                "text": "Extremely frightened.",
                "examples": [
                    "She was terrified of heights.",
                    "The children were terrified by the loud noise."
                ]
            }
        ],
        "subtext": "very scared, frightened",
        "synonyms": [
            "very scared",
            "frightened"
        ],
        "comparative": "more terrified",
        "superlative": "the most terrified",
        "transcription": "ˈtɛrɪfaɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotional_intensity",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotional_intensity_003",
        "word": "exhausted",
        "emoji": "😴",
        "form": "adjective",
        "opposite": "energetic",
        "definitions": [
            {
                "text": "Extremely tired.",
                "examples": [
                    "I was exhausted after the long flight.",
                    "She felt exhausted from all the work."
                ]
            }
        ],
        "subtext": "very tired, worn out",
        "synonyms": [
            "very tired",
            "worn out"
        ],
        "comparative": "more exhausted",
        "superlative": "the most exhausted",
        "transcription": "ɪɡˈzɔːstɪd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotional_intensity",
        "sub_theme": null
    },
    {
        "id": "en_elementary_people_047",
        "word": "romantic",
        "emoji": "💖",
        "form": "adjective",
        "opposite": "unromantic",
        "definitions": [
            {
                "text": "Relating to love or a close loving relationship.",
                "examples": [
                    "They had a romantic dinner for two.",
                    "It was a very romantic movie."
                ]
            }
        ],
        "subtext": "loving, passionate",
        "synonyms": [
            "loving",
            "passionate"
        ],
        "comparative": "more romantic",
        "superlative": "the most romantic",
        "transcription": "roʊˈmæntɪk",
        "lang": "en",
        "level": "elementary",
        "theme": "people",
        "sub_theme": null
    },
    {
        "id": "en_elementary_emotional_intensity_004",
        "word": "confused",
        "emoji": "😕",
        "form": "adjective",
        "opposite": "clear",
        "definitions": [
            {
                "text": "Unable to think clearly or to understand something.",
                "examples": [
                    "I'm a bit confused about the new rules.",
                    "He looked confused when I asked the question."
                ]
            }
        ],
        "subtext": "puzzled, unsure",
        "synonyms": [
            "puzzled",
            "unsure"
        ],
        "comparative": "more confused",
        "superlative": "the most confused",
        "transcription": "kənˈfjuːzd",
        "lang": "en",
        "level": "elementary",
        "theme": "emotional_intensity",
        "sub_theme": null
    }
];
    const lang = "en";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();