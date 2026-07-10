(function() {
    const lang = "en";
    const data = [
    {
        "id": "en_starter_time_017",
        "word": "morning",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "early morning, good morning",
        "definitions": [
            {
                "text": "The part of the day before 12 o'clock.",
                "examples": [
                    "I start work in the morning."
                ]
            }
        ],
        "transcription": "ˈmɔrnɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "evening"
        ]
    },
    {
        "id": "en_starter_time_018",
        "word": "evening",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "this evening, good evening",
        "definitions": [
            {
                "text": "The part of the day after afternoon and before night.",
                "examples": [
                    "We eat dinner in the evening."
                ]
            }
        ],
        "transcription": "ˈivnɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "morning"
        ]
    },
    {
        "id": "en_starter_time_019",
        "word": "day",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "days",
        "definitions": [
            {
                "text": "A period of 24 hours.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "deɪ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "dagaz"
        },
        "antonyms": [
            "night"
        ]
    },
    {
        "id": "en_starter_time_020",
        "word": "week",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "weeks",
        "subtext": "next week, last week",
        "definitions": [
            {
                "text": "A period of seven days.",
                "examples": [
                    "I work five days a week."
                ]
            }
        ],
        "opposite": null,
        "transcription": "wik",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_021",
        "word": "weekend",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "weekends",
        "subtext": "at the weekend, on weekends",
        "definitions": [
            {
                "text": "Saturday and Sunday.",
                "examples": [
                    "I relax at the weekend."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈwiˌkɪnd",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_022",
        "word": "afternoon",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "this afternoon, good afternoon",
        "definitions": [
            {
                "text": "The part of the day from noon until the evening.",
                "examples": [
                    "I finish work at five in the afternoon."
                ]
            }
        ],
        "transcription": "ˌæftərˈnun",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "evening"
        ]
    },
    {
        "id": "en_starter_time_023",
        "word": "night",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "nights",
        "subtext": "good night, at night",
        "definitions": [
            {
                "text": "The period of darkness between evening and morning.",
                "examples": [
                    "I sleep eight hours every night."
                ]
            }
        ],
        "transcription": "naɪt",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "nahts"
        },
        "antonyms": [
            "day"
        ]
    },
    {
        "id": "en_starter_time_024",
        "word": "time",
        "emoji": "⌚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "subtext": "what time is it?, spend time",
        "definitions": [
            {
                "text": "What is measured in minutes, hours, days, etc.",
                "examples": [
                    "What time is it?",
                    "I don't have much time."
                ]
            }
        ],
        "opposite": null,
        "transcription": "taɪm",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "tīmô"
        }
    },
    {
        "id": "en_starter_days_week_001",
        "word": "Monday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The first day of the week.",
                "examples": [
                    "I start work on Monday."
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈmənˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_002",
        "word": "Tuesday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The second day of the week.",
                "examples": [
                    "We have a meeting on Tuesday."
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈtuzˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_003",
        "word": "Wednesday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The third day of the week.",
                "examples": [
                    "Is it Wednesday today?"
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈwɛnzˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_004",
        "word": "Thursday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The fourth day of the week.",
                "examples": [
                    "I am busy on Thursday."
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈθərzˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_005",
        "word": "Friday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The fifth day of the week.",
                "examples": [
                    "I love Fridays!"
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈfraɪˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_006",
        "word": "Saturday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The sixth day of the week.",
                "examples": [
                    "I relax on Saturday."
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈsæˌtɪˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_days_week_007",
        "word": "Sunday",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The seventh day of the week.",
                "examples": [
                    "The shop is closed on Sunday."
                ]
            }
        ],
        "subtext": "related to days week",
        "opposite": null,
        "transcription": "ˈsənˌdi",
        "lang": "en",
        "level": "starter",
        "theme": "days_week",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_001",
        "word": "January",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The first month of the year.",
                "examples": [
                    "It is cold in January."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈʤænjuˌɛri",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_002",
        "word": "February",
        "emoji": "❄️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The second month of the year.",
                "examples": [
                    "February is a short month."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈfɛbruˌɛri",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_003",
        "word": "March",
        "emoji": "🌱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The third month of the year.",
                "examples": [
                    "Spring begins in March."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "mɑrʧ",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_004",
        "word": "April",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The fourth month of the year.",
                "examples": [
                    "It rains a lot in April."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈeɪprəl",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_005",
        "word": "May",
        "emoji": "🌸",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The fifth month of the year.",
                "examples": [
                    "The weather is beautiful in May."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "meɪ",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_006",
        "word": "June",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The sixth month of the year.",
                "examples": [
                    "Summer starts in June."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ʤun",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_007",
        "word": "July",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The seventh month of the year.",
                "examples": [
                    "We go on holiday in July."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˌʤuˈlaɪ",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_008",
        "word": "August",
        "emoji": "🏖️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The eighth month of the year.",
                "examples": [
                    "It is very hot in August."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ˈɔgəst",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_009",
        "word": "September",
        "emoji": "🍂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The ninth month of the year.",
                "examples": [
                    "Children go back to school in September."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "sɛpˈtɛmbər",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_010",
        "word": "October",
        "emoji": "🎃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The tenth month of the year.",
                "examples": [
                    "October is in autumn."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "ɑkˈtoʊbər",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_011",
        "word": "November",
        "emoji": "🌫️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The eleventh month of the year.",
                "examples": [
                    "It is often grey in November."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "noʊˈvɛmbər",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_months_year_012",
        "word": "December",
        "emoji": "🎄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "The twelfth month of the year.",
                "examples": [
                    "Christmas is in December."
                ]
            }
        ],
        "subtext": "related to months year",
        "opposite": null,
        "transcription": "dɪˈsɛmbər",
        "lang": "en",
        "level": "starter",
        "theme": "months_year",
        "sub_theme": null
    },
    {
        "id": "en_starter_frequency_adverbs_006",
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
        "opposite": null,
        "transcription": "əˈgɛn",
        "lang": "en",
        "level": "starter",
        "theme": "language",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_001",
        "word": "ago",
        "emoji": "🕰️",
        "form": "adverb",
        "definitions": [
            {
                "text": "Back in time from now.",
                "examples": [
                    "He left ten minutes ago."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "əˈgoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_025",
        "word": "for",
        "form": "preposition",
        "definitions": [
            {
                "text": "Used to show purpose or destination.",
                "examples": [
                    "This gift is for you."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "opposite": null,
        "emoji": "🎁",
        "transcription": "fər",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_026",
        "word": "yesterday",
        "emoji": "📅",
        "form": "adverb",
        "definitions": [
            {
                "text": "On the day before today.",
                "examples": [
                    "I was at home yesterday."
                ]
            }
        ],
        "subtext": "related to times day",
        "transcription": "ˈjɛstərˌdeɪ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "tomorrow"
        ]
    },
    {
        "id": "en_starter_duration_expressions_002",
        "word": "now",
        "emoji": "⏱️",
        "form": "adverb",
        "definitions": [
            {
                "text": "At the present time.",
                "examples": [
                    "I am busy now."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "naʊ",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_003",
        "word": "soon",
        "emoji": "🔜",
        "form": "adverb",
        "definitions": [
            {
                "text": "In a short time from now.",
                "examples": [
                    "See you soon!"
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "sun",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_004",
        "word": "later",
        "emoji": "🕙",
        "form": "adverb",
        "definitions": [
            {
                "text": "At a time in the future.",
                "examples": [
                    "I will call you later."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "ˈleɪtər",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_027",
        "word": "hour",
        "emoji": "⏰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hours",
        "definitions": [
            {
                "text": "A period of sixty minutes.",
                "examples": [
                    "I work eight hours a day."
                ]
            }
        ],
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "aʊər",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_028",
        "word": "minute",
        "emoji": "⏲️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "minutes",
        "definitions": [
            {
                "text": "A period of sixty seconds.",
                "examples": [
                    "Wait a minute, please."
                ]
            }
        ],
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "ˈmɪnət",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_029",
        "word": "second",
        "emoji": "⏱️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "seconds",
        "definitions": [
            {
                "text": "One of the sixty parts that a minute is divided into.",
                "examples": [
                    "The light changes every thirty seconds."
                ]
            }
        ],
        "subtext": "related to telling time",
        "opposite": null,
        "transcription": "ˈsɛkənd",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_dates_years_001",
        "word": "year",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "years",
        "definitions": [
            {
                "text": "A period of twelve months.",
                "examples": [
                    "Happy New Year!"
                ]
            }
        ],
        "subtext": "related to dates years",
        "opposite": null,
        "transcription": "jɪr",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_005",
        "word": "already",
        "emoji": "⏳",
        "form": "adverb",
        "definitions": [
            {
                "text": "Before now or before a particular time.",
                "examples": [
                    "I have already finished my work."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "ɔˈrɛdi",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_006",
        "word": "still",
        "emoji": "🔄",
        "form": "adverb",
        "definitions": [
            {
                "text": "Continuing to happen or exist until now.",
                "examples": [
                    "I am still at the office."
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "stɪl",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_duration_expressions_007",
        "word": "yet",
        "emoji": "❓",
        "form": "adverb",
        "definitions": [
            {
                "text": "Until now (used in questions and negative sentences).",
                "examples": [
                    "Is it time yet?"
                ]
            }
        ],
        "subtext": "related to duration expressions",
        "opposite": null,
        "transcription": "jɛt",
        "lang": "en",
        "level": "starter",
        "theme": "duration_expressions",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_030",
        "word": "tonight",
        "emoji": "🌙",
        "form": "adverb",
        "definitions": [
            {
                "text": "On this night.",
                "examples": [
                    "What are you doing tonight?"
                ]
            }
        ],
        "subtext": "related to times day",
        "opposite": null,
        "transcription": "təˈnaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_dates_years_002",
        "word": "date",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "dates",
        "subtext": "today's date, save the date",
        "definitions": [
            {
                "text": "A particular day of the month or year.",
                "examples": [
                    "What is the date today?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "deɪt",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null
    },
    {
        "id": "en_starter_dates_years_003",
        "word": "month",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "months",
        "definitions": [
            {
                "text": "One of the twelve periods that a year is divided into.",
                "examples": [
                    "January is the first month of the year."
                ]
            }
        ],
        "subtext": "related to dates years",
        "opposite": null,
        "transcription": "mənθ",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_031",
        "word": "during",
        "form": "preposition",
        "definitions": [
            {
                "text": "From the beginning to the end of a particular period of time.",
                "examples": [
                    "I sleep during the night."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "opposite": null,
        "emoji": "⌛",
        "transcription": "ˈdʊrɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_032",
        "word": "before",
        "form": "preposition",
        "definitions": [
            {
                "text": "At an earlier time; in front of.",
                "examples": [
                    "Wash your hands before dinner."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "⏮️",
        "transcription": "ˌbiˈfɔr",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "after"
        ]
    },
    {
        "id": "en_starter_time_033",
        "word": "after",
        "form": "preposition",
        "definitions": [
            {
                "text": "At a later time; following.",
                "examples": [
                    "We have a meeting after lunch."
                ]
            }
        ],
        "subtext": "related to prepositions time",
        "emoji": "⏭️",
        "transcription": "ˈæftər",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "before"
        ]
    },
    {
        "id": "en_starter_time_034",
        "word": "last",
        "emoji": "🔚",
        "form": "adjective",
        "comparative": null,
        "superlative": null,
        "definitions": [
            {
                "text": "Coming after all others in time or order.",
                "examples": [
                    "She was the last person to leave."
                ]
            }
        ],
        "subtext": "related to sequence order A2",
        "transcription": "læst",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "first"
        ]
    },
    {
        "id": "en_starter_time_035",
        "word": "next",
        "emoji": "⏭️",
        "form": "adjective",
        "comparative": null,
        "superlative": null,
        "definitions": [
            {
                "text": "Coming immediately after the present one.",
                "examples": [
                    "We will meet next week."
                ]
            }
        ],
        "subtext": "related to sequence order A2",
        "transcription": "nɛkst",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "previous"
        ]
    },
    {
        "id": "en_starter_dates_years_004",
        "word": "calendar",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "calendars",
        "definitions": [
            {
                "text": "A table that shows the days, weeks, and months of a year.",
                "examples": [
                    "Check the calendar for the meeting date."
                ]
            }
        ],
        "subtext": "related to dates years",
        "synonyms": [
            "date planner"
        ],
        "transcription": "ˈkæləndər",
        "lang": "en",
        "level": "starter",
        "theme": "dates_years",
        "sub_theme": null
    },
    {
        "id": "en_starter_time_036",
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
        "group": "irregular",
        "transcription": "slip",
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
        "id": "en_starter_time_037",
        "word": "early",
        "emoji": "🌅",
        "form": "adjective",
        "subtext": "early morning / early riser",
        "synonyms": [
            "soon"
        ],
        "definitions": [
            {
                "text": "Happening or arriving before the usual or expected time.",
                "examples": [
                    "I had an early breakfast."
                ]
            }
        ],
        "comparative": "earlier",
        "superlative": "the earliest",
        "transcription": "ˈərli",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "late"
        ]
    },
    {
        "id": "en_starter_time_038",
        "word": "late",
        "emoji": "🌙",
        "form": "adjective",
        "subtext": "late night / too late",
        "synonyms": [
            "tardy"
        ],
        "definitions": [
            {
                "text": "Happening or arriving after the usual or expected time.",
                "examples": [
                    "I had a late dinner."
                ]
            }
        ],
        "comparative": "later",
        "superlative": "the latest",
        "transcription": "leɪt",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "antonyms": [
            "early"
        ]
    },
    {
        "id": "en_starter_time_039",
        "word": "about",
        "form": "preposition",
        "definitions": [
            {
                "text": "On the subject of; or approximately.",
                "examples": [
                    "A book about animals.",
                    "It is about six o'clock."
                ]
            }
        ],
        "emoji": "📖",
        "transcription": "əˈbaʊt",
        "subtext": "about",
        "lang": "en",
        "level": "starter",
        "theme": "time",
        "sub_theme": null
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
