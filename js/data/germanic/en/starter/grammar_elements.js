(function() {
    const data = [
    {
        "id": "en_starter_language_001",
        "word": "next to",
        "image": "images/grammar/prepositions/next to. by.png",
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
        "opposite": "far from",
        "emoji": "👫",
        "transcription": "nɛkst tɪ",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_002",
        "word": "between",
        "image": "images/grammar/prepositions/between.png",
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
        "opposite": "outside",
        "emoji": "🧘",
        "transcription": "bɪtˈwin",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_003",
        "word": "behind",
        "image": "images/grammar/prepositions/behind.png",
        "form": "preposition",
        "opposite": "in front of",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_language_004",
        "word": "in front of",
        "image": "images/grammar/prepositions/in front of.png",
        "form": "preposition",
        "opposite": "behind",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_time_001",
        "word": "every day",
        "emoji": "🔁",
        "form": "adverb",
        "definitions": [
            {
                "text": "On each day without exception.",
                "examples": [
                    "I drink coffee every day."
                ]
            }
        ],
        "subtext": "related to times day",
        "opposite": null,
        "transcription": "ˈɛvəri deɪ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_people_001",
        "word": "together",
        "emoji": "👫",
        "form": "adverb",
        "opposite": null,
        "oppositeEmoji": "👤",
        "definitions": [
            {
                "text": "With another person or group.",
                "examples": [
                    "We eat dinner together."
                ]
            }
        ],
        "subtext": "related to family life",
        "transcription": "təˈgɛðər",
        "lang": "en",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "gaduri"
        }
    },
    {
        "id": "en_starter_time_002",
        "word": "today",
        "emoji": "📅",
        "form": "adverb",
        "opposite": "tomorrow",
        "subtext": "today's meeting, start today",
        "definitions": [
            {
                "text": "On this day; the current day.",
                "examples": [
                    "I have a meeting today at ten."
                ]
            }
        ],
        "transcription": "təˈdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_003",
        "word": "tomorrow",
        "emoji": "⏭️",
        "form": "adverb",
        "opposite": "yesterday",
        "subtext": "tomorrow morning, see you tomorrow",
        "definitions": [
            {
                "text": "On the day after today.",
                "examples": [
                    "She has a doctor's appointment tomorrow."
                ]
            }
        ],
        "transcription": "təˈmɑˌroʊ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_005",
        "word": "in",
        "image": "images/grammar/prepositions/in.png",
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
        "opposite": "out",
        "emoji": "📥",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_006",
        "word": "on",
        "image": "images/grammar/prepositions/on.png",
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
        "opposite": "off",
        "emoji": "🔛",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_007",
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
        "opposite": "away from",
        "emoji": "📍",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_008",
        "word": "under",
        "form": "preposition",
        "opposite": "above",
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
        "sub_theme": null
    },
    {
        "id": "en_starter_language_009",
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
        "opposite": "or",
        "emoji": "➕",
        "transcription": "ænd",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_010",
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
        "opposite": "and",
        "emoji": "❓",
        "transcription": "bət",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_011",
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
        "opposite": "so",
        "emoji": "💡",
        "transcription": "🇬🇧 bɪˈkɒz | 🇺🇸 bɪˈkɑːz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_012",
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
        "opposite": "never",
        "transcription": "ˈɔlˌweɪz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_013",
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
        "opposite": null,
        "transcription": "ˈjuʒəwəli",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_014",
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
        "opposite": null,
        "transcription": "ˈɔfən",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_015",
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
        "opposite": null,
        "transcription": "ˈsəmˌtaɪmz",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_016",
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
        "opposite": "always",
        "transcription": "ˈnɛvər",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_017",
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
        "opposite": "the",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_018",
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
        "opposite": "the",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_019",
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
        "opposite": "a",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_020",
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
        "opposite": "any",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_021",
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
        "opposite": "some",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_001",
        "word": "I",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "aɪ",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself.",
                "examples": [
                    "I am a student.",
                    "I like coffee."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_002",
        "word": "you",
        "emoji": "🫵",
        "form": "pronoun",
        "transcription": "ju",
        "definitions": [
            {
                "text": "Used to refer to the person or people the speaker is addressing.",
                "examples": [
                    "How are you?",
                    "You are helpful."
                ]
            }
        ],
        "subtext": "subject or object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_003",
        "word": "he",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hi",
        "definitions": [
            {
                "text": "Used to refer to a male person or animal already mentioned.",
                "examples": [
                    "He is my brother.",
                    "He works in an office."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "she",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_004",
        "word": "she",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "ʃi",
        "definitions": [
            {
                "text": "Used to refer to a female person or animal already mentioned.",
                "examples": [
                    "She is my sister.",
                    "She likes to dance."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "he",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_005",
        "word": "it",
        "emoji": "📦",
        "form": "pronoun",
        "transcription": "ɪt",
        "definitions": [
            {
                "text": "Used to refer to a thing, animal, or situation already mentioned.",
                "examples": [
                    "It is a big house.",
                    "I like it."
                ]
            }
        ],
        "subtext": "subject or object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_006",
        "word": "we",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "wi",
        "definitions": [
            {
                "text": "Used to refer to the speaker and one or more other people.",
                "examples": [
                    "We are friends.",
                    "We live in London."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "they",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_007",
        "word": "they",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðeɪ",
        "definitions": [
            {
                "text": "Used to refer to two or more people or things already mentioned.",
                "examples": [
                    "They are my parents.",
                    "They work together."
                ]
            }
        ],
        "subtext": "subject pronoun",
        "opposite": "we",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_008",
        "word": "me",
        "emoji": "🙋",
        "form": "pronoun",
        "transcription": "mi",
        "definitions": [
            {
                "text": "Used by a speaker to refer to himself or herself as the object of a verb or preposition.",
                "examples": [
                    "Help me, please.",
                    "This gift is for me."
                ]
            }
        ],
        "subtext": "object pronoun",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_009",
        "word": "him",
        "emoji": "👨",
        "form": "pronoun",
        "transcription": "hɪm",
        "definitions": [
            {
                "text": "The object form of 'he'.",
                "examples": [
                    "I know him.",
                    "Give it to him."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "her",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_010",
        "word": "her",
        "emoji": "👩",
        "form": "pronoun",
        "transcription": "hər",
        "definitions": [
            {
                "text": "The object form of 'she'.",
                "examples": [
                    "I see her.",
                    "Talk to her."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "him",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_011",
        "word": "us",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "əs",
        "definitions": [
            {
                "text": "The object form of 'we'.",
                "examples": [
                    "Join us.",
                    "He invited us to the party."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "them",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_012",
        "word": "them",
        "emoji": "👥",
        "form": "pronoun",
        "transcription": "ðɛm",
        "definitions": [
            {
                "text": "The object form of 'they'.",
                "examples": [
                    "I like them.",
                    "Tell them the news."
                ]
            }
        ],
        "subtext": "object pronoun",
        "opposite": "us",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_013",
        "word": "my",
        "emoji": "🙋",
        "form": "determiner",
        "transcription": "maɪ",
        "definitions": [
            {
                "text": "Belonging to me.",
                "examples": [
                    "My name is John.",
                    "Where is my bag?"
                ]
            }
        ],
        "subtext": "possessive determiner",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_014",
        "word": "your",
        "emoji": "🫵",
        "form": "determiner",
        "transcription": "jɔː(r)",
        "definitions": [
            {
                "text": "Belonging to you.",
                "examples": [
                    "What is your name?",
                    "Is this your phone?"
                ]
            }
        ],
        "subtext": "possessive determiner",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_015",
        "word": "his",
        "emoji": "👨",
        "form": "determiner",
        "transcription": "hɪz",
        "definitions": [
            {
                "text": "Belonging to him.",
                "examples": [
                    "His car is red.",
                    "That is his office."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "her",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_016",
        "word": "its",
        "emoji": "📦",
        "form": "determiner",
        "transcription": "ɪts",
        "definitions": [
            {
                "text": "Belonging to it.",
                "examples": [
                    "The cat is eating its food.",
                    "The company changed its name."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_017",
        "word": "our",
        "emoji": "👥",
        "form": "determiner",
        "transcription": "ˈaʊə(r)",
        "definitions": [
            {
                "text": "Belonging to us.",
                "examples": [
                    "This is our house.",
                    "Our manager is friendly."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "their",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_psychology_018",
        "word": "their",
        "emoji": "👥",
        "form": "determiner",
        "transcription": "ðeə(r)",
        "definitions": [
            {
                "text": "Belonging to them.",
                "examples": [
                    "They love their job.",
                    "Their office is in the city centre."
                ]
            }
        ],
        "subtext": "possessive determiner",
        "opposite": "our",
        "lang": "en",
        "level": "starter",
        "theme": "psychology",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_022",
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
        "opposite": "that",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_023",
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
        "opposite": "this",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_024",
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
        "opposite": "those",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_language_025",
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
        "opposite": "these",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();