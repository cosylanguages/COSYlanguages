(function() {
    const data = [
    {
        "id": "en_starter_using_smartphone_001",
        "word": "phone",
        "emoji": "📞",
        "subtext": "phone someone / phone back / on the phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To call someone using a telephone.",
                "examples": [
                    "I'll phone you later.",
                    "He phoned his mother."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phoned",
        "v3": "phoned",
        "group": "regular",
        "transcription": "foʊn",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null,
        "antonyms": [
            "text"
        ]
    },
    {
        "id": "en_starter_technology_003",
        "word": "smartphone",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "smartphones",
        "definitions": [
            {
                "text": "A mobile phone that can also connect to the internet.",
                "examples": [
                    "I use my smartphone every day."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈsmɑːrtfoʊn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_004",
        "word": "laptop",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "laptops",
        "definitions": [
            {
                "text": "A small computer that you can carry.",
                "examples": [
                    "I use my laptop for work."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈlæpˌtɑp",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_005",
        "word": "television",
        "emoji": "📺",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "televisions",
        "subtext": "TV, watch television",
        "definitions": [
            {
                "text": "A device with a screen for watching programs.",
                "examples": [
                    "We watch the news on television."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈtɛləˌvɪʒən",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_006",
        "word": "camera",
        "emoji": "📷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "cameras",
        "definitions": [
            {
                "text": "A device for taking photos or videos.",
                "examples": [
                    "I have a new digital camera."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈkæmərə",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_007",
        "word": "computer",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "computers",
        "definitions": [
            {
                "text": "An electronic machine that can store and find information.",
                "examples": [
                    "I use a computer at work."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "kəmˈpjutər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_002",
        "word": "internet",
        "emoji": "🌐",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The international network of computers.",
                "examples": [
                    "I use the internet every day."
                ]
            }
        ],
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈɪntərˌnɛt",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_003",
        "word": "website",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "websites",
        "definitions": [
            {
                "text": "A set of pages on the internet with information about a subject.",
                "examples": [
                    "This is a useful website for learning English."
                ]
            }
        ],
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈwɛbˌsaɪt",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_004",
        "word": "email",
        "emoji": "📧",
        "subtext": "email someone / send an email / reply by email",
        "form": "verb",
        "definitions": [
            {
                "text": "To send a message using the internet.",
                "examples": [
                    "Email me the details.",
                    "I'll email you tomorrow."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emailed",
        "v3": "emailed",
        "group": "regular",
        "transcription": "iˈmeɪl",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_005",
        "word": "message",
        "emoji": "💬",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "messages",
        "definitions": [
            {
                "text": "A piece of information that you send to someone.",
                "examples": [
                    "I sent her a message on WhatsApp."
                ]
            }
        ],
        "subtext": "related to using smartphone",
        "opposite": null,
        "transcription": "ˈmɛsɪʤ",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_008",
        "word": "newspaper",
        "emoji": "📰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "newspapers",
        "definitions": [
            {
                "text": "Large sheets of paper with news and advertisements.",
                "examples": [
                    "He reads the newspaper every morning."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈnuzˌpeɪpər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_009",
        "word": "magazine",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "magazines",
        "definitions": [
            {
                "text": "A thin book with a paper cover and many pictures.",
                "examples": [
                    "I like reading fashion magazines."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈmægəˌzin",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_010",
        "word": "keyboard",
        "emoji": "⌨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "keyboards",
        "definitions": [
            {
                "text": "A set of keys on a computer or piano.",
                "examples": [
                    "Type your name on the keyboard."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈkiˌbɔrd",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_011",
        "word": "screen",
        "emoji": "🖥️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "screens",
        "definitions": [
            {
                "text": "The flat part of a television or computer where you see the pictures.",
                "examples": [
                    "Look at the computer screen."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "skrin",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_006",
        "word": "information",
        "emoji": "ℹ️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "info, give information",
        "definitions": [
            {
                "text": "Facts or details about something or someone.",
                "examples": [
                    "Can you give me some information about the hotel?",
                    "I found the information on the website."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˌɪnfəˈmeɪʃn",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_007",
        "word": "news",
        "emoji": "📰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "subtext": "latest news, good news",
        "definitions": [
            {
                "text": "Information about recent events.",
                "examples": [
                    "I watch the news every evening.",
                    "Have you heard the news?"
                ]
            }
        ],
        "opposite": null,
        "transcription": "nuz",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_using_smartphone_008",
        "word": "letter",
        "emoji": "✉️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "letters",
        "subtext": "write a letter",
        "definitions": [
            {
                "text": "A message that you write on paper and send to someone.",
                "examples": [
                    "He is writing a letter to his parents."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈlɛtər",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_012",
        "word": "mobile",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mobiles",
        "subtext": "mobile phone, cell phone",
        "definitions": [
            {
                "text": "A phone that you can carry with you.",
                "examples": [
                    "I lost my mobile."
                ]
            }
        ],
        "opposite": null,
        "transcription": "ˈmoʊbəl",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_013",
        "word": "radio",
        "emoji": "📻",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "radios",
        "definitions": [
            {
                "text": "A device used for listening to music and news programs.",
                "examples": [
                    "I listen to the radio in the morning."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈreɪdiˌoʊ",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_014",
        "word": "printer",
        "emoji": "🖨️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "printers",
        "definitions": [
            {
                "text": "A machine used for printing documents from a computer.",
                "examples": [
                    "We need more paper for the printer."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "opposite": null,
        "transcription": "ˈprɪnər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_015",
        "word": "battery",
        "emoji": "🔋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "batteries",
        "definitions": [
            {
                "text": "An object that provides electricity for a device.",
                "examples": [
                    "My phone battery is low."
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "synonyms": [
            "power source",
            "charging"
        ],
        "transcription": "ˈbætəri",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_016",
        "word": "charger",
        "emoji": "🔌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "chargers",
        "definitions": [
            {
                "text": "A device used to put electricity into a battery.",
                "examples": [
                    "Can I borrow your phone charger?"
                ]
            }
        ],
        "subtext": "related to basic technology devices",
        "synonyms": [
            "charging cable"
        ],
        "transcription": "ˈʧɑrʤər",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null
    },
    {
        "id": "en_starter_technology_017",
        "word": "use",
        "emoji": "🛠️",
        "subtext": "use a phone / use public transport / use a computer / use time",
        "form": "verb",
        "definitions": [
            {
                "text": "To employ something for a purpose.",
                "examples": [
                    "I use my phone for everything.",
                    "She uses public transport."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "used",
        "v3": "used",
        "group": "regular",
        "transcription": "juz",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "waste"
        ]
    },
    {
        "id": "en_starter_technology_018",
        "word": "call",
        "emoji": "📞",
        "subtext": "call someone / call back / call a meeting / call in sick",
        "form": "verb",
        "definitions": [
            {
                "text": "To telephone someone.",
                "examples": [
                    "I call my clients every morning before checking emails."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called",
        "v3": "called",
        "group": "regular",
        "transcription": "kɔl",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "hang up"
        ]
    },
    {
        "id": "en_starter_technology_019",
        "word": "ring",
        "emoji": "🔔",
        "form": "verb",
        "subtext": "ring a bell",
        "synonyms": [
            "chime",
            "phone is ringing"
        ],
        "definitions": [
            {
                "text": "To make a sound like a bell.",
                "examples": [
                    "The phone is ringing."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rang",
        "v3": "rung",
        "group": "irregular",
        "transcription": "rɪŋ",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "be silent"
        ]
    },
    {
        "id": "en_starter_using_smartphone_009",
        "word": "text",
        "emoji": "📱",
        "form": "verb",
        "subtext": "text someone / send a text",
        "synonyms": [
            "message"
        ],
        "definitions": [
            {
                "text": "To send a message from a mobile phone.",
                "examples": [
                    "Text me when you arrive."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "texted",
        "v3": "texted",
        "group": "regular",
        "transcription": "tɛkst",
        "lang": "en",
        "level": "starter",
        "theme": "using_smartphone",
        "sub_theme": null,
        "antonyms": [
            "call"
        ]
    },
    {
        "id": "en_starter_technology_020",
        "word": "turn on",
        "emoji": "💡",
        "subtext": "turn on the light / turn on the TV / turn on the radio",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device start working.",
                "examples": [
                    "Turn on the light, please.",
                    "He turns on his computer at nine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned on",
        "v3": "turned on",
        "group": "regular",
        "transcription": "tərn ɔn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn off"
        ]
    },
    {
        "id": "en_starter_technology_021",
        "word": "turn off",
        "emoji": "🌑",
        "subtext": "turn off the light / turn off the computer / turn off your phone",
        "form": "verb",
        "definitions": [
            {
                "text": "To make a device stop working.",
                "examples": [
                    "Don't forget to turn off the lights.",
                    "She turns off her phone during meetings."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "turned off",
        "v3": "turned off",
        "group": "regular",
        "transcription": "tərn ɔf",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "turn on"
        ]
    },
    {
        "id": "en_starter_technology_022",
        "word": "online",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Using the internet.",
                "examples": [
                    "I buy food online sometimes."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": "more online",
        "superlative": "the most online",
        "transcription": "ˈɔnˌlaɪn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "offline"
        ]
    },
    {
        "id": "en_starter_technology_023",
        "word": "offline",
        "emoji": "📴",
        "form": "adjective",
        "subtext": "work offline / go offline",
        "synonyms": [
            "disconnected"
        ],
        "definitions": [
            {
                "text": "Not using or connected to the internet.",
                "examples": [
                    "You can read this document offline."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "transcription": "ˈɔˌflaɪn",
        "lang": "en",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "antonyms": [
            "online"
        ]
    }
];
    const lang = "en";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();