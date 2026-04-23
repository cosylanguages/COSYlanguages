(function() {
    const data = [
    {
        "word": "next to",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "nɛkst tɪ"
    },
    {
        "word": "between",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "bɪtˈwin"
    },
    {
        "word": "behind",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "bɪˈhaɪnd"
    },
    {
        "word": "in front of",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ɪn frənt əv"
    },
    {
        "word": "every day",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "ˈɛvəri deɪ"
    },
    {
        "word": "together",
        "level": "starter",
        "theme": "family_life_A1",
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
        "transcription": "təˈgɛðər"
    },
    {
        "word": "today",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "təˈdeɪ"
    },
    {
        "word": "tomorrow",
        "level": "starter",
        "theme": "times_day_A1",
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
        "transcription": "təˈmɑˌroʊ"
    },
    {
        "word": "in",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "emoji": "📥"
    },
    {
        "word": "on",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "emoji": "🔛"
    },
    {
        "word": "at",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "emoji": "📍"
    },
    {
        "word": "under",
        "level": "starter",
        "theme": "prepositions_place_A1",
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
        "transcription": "ˈəndər"
    },
    {
        "word": "and",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "ænd"
    },
    {
        "word": "but",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "bət"
    },
    {
        "word": "because",
        "level": "starter",
        "theme": "conjunctions_connectors_A1",
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
        "transcription": "🇬🇧 bɪˈkɒz | 🇺🇸 bɪˈkɑːz"
    },
    {
        "word": "always",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈɔlˌweɪz"
    },
    {
        "word": "usually",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈjuʒəwəli"
    },
    {
        "word": "often",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈɔfən"
    },
    {
        "word": "sometimes",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈsəmˌtaɪmz"
    },
    {
        "word": "never",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
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
        "transcription": "ˈnɛvər"
    },
    {
        "word": "a",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "the"
    },
    {
        "word": "an",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "the"
    },
    {
        "word": "the",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "a"
    },
    {
        "word": "some",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "any"
    },
    {
        "word": "any",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "some"
    },
    {
        "word": "I",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "subject pronoun"
    },
    {
        "word": "you",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "subject or object pronoun"
    },
    {
        "word": "he",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "she"
    },
    {
        "word": "she",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "he"
    },
    {
        "word": "it",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "subject or object pronoun"
    },
    {
        "word": "we",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "they"
    },
    {
        "word": "they",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "we"
    },
    {
        "word": "me",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "object pronoun"
    },
    {
        "word": "him",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "her"
    },
    {
        "word": "her",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "him"
    },
    {
        "word": "us",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "them"
    },
    {
        "word": "them",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "us"
    },
    {
        "word": "my",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "possessive determiner"
    },
    {
        "word": "your",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "possessive determiner"
    },
    {
        "word": "his",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "her"
    },
    {
        "word": "its",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "subtext": "possessive determiner"
    },
    {
        "word": "our",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "their"
    },
    {
        "word": "their",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        "opposite": "our"
    },
    {
        "word": "this",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "that"
    },
    {
        "word": "that",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "this"
    },
    {
        "word": "these",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "those"
    },
    {
        "word": "those",
        "level": "starter",
        "theme": "prepositions_grammar_A1",
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
        "opposite": "these"
    },
    {
        "word": "always",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🔄",
        "form": "adverb",
        "transcription": "ˈɔːlweɪz",
        "definitions": [
            {
                "text": "At all times.",
                "examples": [
                    "I always drink coffee in the morning."
                ]
            }
        ],
        "opposite": "never",
        "subtext": "100% of the time"
    },
    {
        "word": "never",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "❌",
        "form": "adverb",
        "transcription": "ˈnevə(r)",
        "definitions": [
            {
                "text": "Not at any time.",
                "examples": [
                    "I never arrive late for work."
                ]
            }
        ],
        "opposite": "always",
        "subtext": "0% of the time"
    },
    {
        "word": "sometimes",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🌗",
        "form": "adverb",
        "transcription": "ˈsʌmtaɪmz",
        "definitions": [
            {
                "text": "At some times but not all the time.",
                "examples": [
                    "I sometimes walk to work."
                ]
            }
        ],
        "subtext": "on some occasions"
    },
    {
        "word": "often",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "📈",
        "form": "adverb",
        "transcription": "🇬🇧 ˈɒfn | 🇺🇸 ˈɑːfn",
        "definitions": [
            {
                "text": "Many times; frequently.",
                "examples": [
                    "We often have meetings on Mondays."
                ]
            }
        ],
        "subtext": "frequently",
        "opposite": "seldom"
    },
    {
        "word": "usually",
        "level": "starter",
        "theme": "frequency_adverbs_A1",
        "emoji": "🔄",
        "form": "adverb",
        "transcription": "ˈjuːʒuəli",
        "definitions": [
            {
                "text": "In the way that most often happens.",
                "examples": [
                    "I usually wake up at seven."
                ]
            }
        ],
        "subtext": "normally"
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();