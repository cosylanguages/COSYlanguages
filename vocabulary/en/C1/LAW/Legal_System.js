(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-LAW-01",
        "word": "AI literacy",
        "lang": "en",
        "transcription": "ˌeɪ ˈaɪ ˈlɪtərəsi",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🤖",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The ability to understand, use, and critically evaluate artificial intelligence technologies.",
                "examples": [
                    "Teachers need to develop AI literacy to guide their students in the ethical use of large language models.",
                    "AI literacy includes knowing when a machine-generated answer might be biased or incorrect."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_013",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-02",
        "word": "Task-Based Learning",
        "lang": "en",
        "transcription": "tɑːsk beɪst ˈlɜːnɪŋ",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "📋",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "An approach to language teaching where the planning and instruction are based around a series of communicative tasks.",
                "examples": [
                    "Task-Based Learning focuses on the use of authentic language to complete meaningful goals.",
                    "In a TBL lesson, the focus is on the successful completion of the task rather than on specific grammatical forms."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_009",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-03",
        "word": "Total Physical Response",
        "lang": "en",
        "transcription": "ˈtəʊtl ˈfɪzɪkl rɪˈspɒns",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🏃",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A language teaching method based on the coordination of speech and action; it attempts to teach language through physical activity.",
                "examples": [
                    "Total Physical Response is particularly effective for teaching young children and absolute beginners.",
                    "The teacher used TPR to teach imperatives like 'stand up' and 'sit down'."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_008",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-04",
        "word": "abstract",
        "emoji": "🎨",
        "subtext": "very abstract / purely abstract / an abstract idea",
        "form": "adjective",
        "transcription": "ˈæbstrækt",
        "definitions": [
            {
                "text": "Existing as an idea; not concrete.",
                "examples": [
                    "The report deals with abstract concepts of value."
                ]
            }
        ],
        "synonyms": [
            "theoretical",
            "conceptual",
            "ideational"
        ],
        "antonyms": [
            "concrete",
            "actual"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_abstract",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-05",
        "word": "absurd",
        "emoji": "🤡",
        "subtext": "utterly absurd / completely absurd / sound absurd",
        "form": "adjective",
        "transcription": "əbˈsɜːd",
        "definitions": [
            {
                "text": "Completely unreasonable; making no sense at all.",
                "examples": [
                    "The whole situation seemed utterly absurd."
                ]
            }
        ],
        "synonyms": [
            "ridiculous",
            "ludicrous",
            "preposterous"
        ],
        "antonyms": [
            "reasonable",
            "logical"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_absurd",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-06",
        "word": "accelerate",
        "emoji": "🚀",
        "subtext": "accelerate growth / accelerate change / accelerate the process",
        "form": "verb",
        "transcription": "əkˈseləreɪt",
        "definitions": [
            {
                "text": "To increase the speed of something; to cause to happen sooner.",
                "examples": [
                    "The pandemic accelerated the shift to remote working by years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accelerated",
        "v3": "accelerated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "accelerating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_accelerate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-07",
        "word": "acute",
        "emoji": "🗡️",
        "subtext": "an acute problem / very acute / acute shortage",
        "form": "adjective",
        "transcription": "əˈkjuːt",
        "definitions": [
            {
                "text": "Very serious; strong and sharp.",
                "examples": [
                    "There is an acute shortage of affordable housing."
                ]
            }
        ],
        "synonyms": [
            "sharp",
            "severe",
            "intense"
        ],
        "antonyms": [
            "mild",
            "chronic"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_acute",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-08",
        "word": "adhere",
        "emoji": "📎",
        "subtext": "adhere to a rule / adhere to a principle / strict adherence",
        "form": "verb",
        "transcription": "🇬🇧 ədˈhɪə | 🇺🇸 ədˈhɪər",
        "definitions": [
            {
                "text": "To follow or stick to a rule or principle.",
                "examples": [
                    "The company must adhere strictly to data protection regulations."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "adhered",
        "v3": "adhered",
        "group": "regular",
        "auxiliary": "have",
        "v4": "adhering",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_adhere",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-09",
        "word": "affective filter",
        "lang": "en",
        "transcription": "əˈfektɪv ˈfɪltə",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🛡️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A theoretical construct in second language acquisition that attempts to explain the emotional variables that can hinder or facilitate learning.",
                "examples": [
                    "A high affective filter, caused by anxiety or boredom, can block language acquisition.",
                    "The teacher's goal is to lower the affective filter to create a safe and welcoming environment."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_010",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-10",
        "word": "applicable",
        "emoji": "📎",
        "subtext": "fully applicable / directly applicable / applicable to",
        "form": "adjective",
        "transcription": "əˈplɪkəbl",
        "definitions": [
            {
                "text": "Relevant; able to be applied to a situation.",
                "examples": [
                    "The new rules are applicable to all employees."
                ]
            }
        ],
        "synonyms": [
            "relevant",
            "appropriate",
            "fitting"
        ],
        "antonyms": [
            "inapplicable",
            "irrelevant"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_applicable",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-11",
        "word": "arbitrary",
        "emoji": "🎲",
        "subtext": "entirely arbitrary / seemingly arbitrary / an arbitrary decision",
        "form": "adjective",
        "transcription": "ˈɑːbɪtrəri",
        "definitions": [
            {
                "text": "Based on random choice; not based on reason.",
                "examples": [
                    "The decision seemed completely arbitrary."
                ]
            }
        ],
        "synonyms": [
            "random",
            "chance",
            "capricious"
        ],
        "antonyms": [
            "rational",
            "reasoned"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_arbitrary",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-12",
        "word": "articulate",
        "emoji": "🗣️",
        "subtext": "articulate an idea / well-articulated / articulate clearly",
        "form": "verb",
        "transcription": "ɑːˈtɪkjuleɪt",
        "definitions": [
            {
                "text": "To express thoughts or feelings fluently and coherently.",
                "examples": [
                    "He articulates the problem more clearly than anyone else."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "articulated",
        "v3": "articulated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "articulating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_articulate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-13",
        "word": "assert",
        "emoji": "‼️",
        "subtext": "assert a right / assert yourself / assertive communication",
        "form": "verb",
        "transcription": "əˈsɜːt",
        "definitions": [
            {
                "text": "To state something confidently and directly.",
                "examples": [
                    "She asserted her right to see the original documents."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "asserted",
        "v3": "asserted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "asserting",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_assert",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-14",
        "word": "attain",
        "emoji": "🏆",
        "subtext": "attain a qualification / attain a goal / attain a standard",
        "form": "verb",
        "transcription": "əˈteɪn",
        "definitions": [
            {
                "text": "To achieve something after effort.",
                "examples": [
                    "He attained a professional qualification while working full-time."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attained",
        "v3": "attained",
        "group": "regular",
        "auxiliary": "have",
        "v4": "attaining",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_attain",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-15",
        "word": "authentic",
        "emoji": "📜",
        "subtext": "truly authentic / completely authentic / an authentic voice",
        "form": "adjective",
        "transcription": "ɔːˈθentɪk",
        "definitions": [
            {
                "text": "Genuine; real; not a copy.",
                "examples": [
                    "The restaurant offers an authentic experience."
                ]
            }
        ],
        "synonyms": [
            "genuine",
            "real",
            "true"
        ],
        "antonyms": [
            "fake",
            "counterfeit"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_authentic",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-16",
        "word": "authentic assessment",
        "lang": "en",
        "transcription": "ɔːˈθentɪk əˈsesmənt",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🛠️",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A form of evaluation that requires students to perform real-world tasks that demonstrate meaningful application of essential knowledge and skills.",
                "examples": [
                    "Asking students to write a real letter to a local politician is a form of authentic assessment.",
                    "Authentic assessment is harder for AI to replicate than traditional multiple-choice tests."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_014",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-17",
        "word": "bizarre",
        "emoji": "🌀",
        "subtext": "very bizarre / quite bizarre / find bizarre",
        "form": "adjective",
        "transcription": "bɪˈzɑː",
        "definitions": [
            {
                "text": "Very strange and unusual.",
                "examples": [
                    "He gave a rather bizarre explanation for the delay."
                ]
            }
        ],
        "synonyms": [
            "strange",
            "peculiar",
            "weird"
        ],
        "antonyms": [
            "normal",
            "ordinary"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_bizarre",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-18",
        "word": "bring about",
        "emoji": "✨",
        "subtext": "bring about change / bring about a result / bring about reform",
        "form": "verb",
        "transcription": "brɪŋ əˈbaʊt",
        "definitions": [
            {
                "text": "To cause something to happen.",
                "examples": [
                    "The new management brought about a major cultural change."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "brought about",
        "v3": "brought about",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_bring_about",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-19",
        "word": "cease",
        "emoji": "🛑",
        "subtext": "cease operations / cease to exist / cease trading",
        "form": "verb",
        "transcription": "siːs",
        "definitions": [
            {
                "text": "To stop doing something; to come to an end.",
                "examples": [
                    "The company ceased operations in three markets last year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ceased",
        "v3": "ceased",
        "group": "regular",
        "auxiliary": "have",
        "v4": "ceasing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_cease",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-20",
        "word": "characterise",
        "emoji": "🖋️",
        "subtext": "characterise something as / be characterised by / characterise a period",
        "form": "verb",
        "transcription": "ˈkærəktəraɪz",
        "definitions": [
            {
                "text": "To describe the nature or key features of something.",
                "examples": [
                    "The period was characterised by rapid economic uncertainty."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "characterised",
        "v3": "characterised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "characterising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_characterise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-21",
        "word": "chronic",
        "emoji": "⌛",
        "subtext": "a chronic problem / chronically underfunded / chronic shortage",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkrɒnɪk | 🇺🇸 ˈkrɑːnɪk",
        "definitions": [
            {
                "text": "Lasting a long time; recurring.",
                "examples": [
                    "Chronic underfunding has damaged the public sector."
                ]
            }
        ],
        "synonyms": [
            "persistent",
            "long-standing",
            "incurable"
        ],
        "antonyms": [
            "acute",
            "temporary"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_chronic",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-22",
        "word": "classroom management",
        "lang": "en",
        "transcription": "ˈklɑːsruːm ˈmænɪdʒmənt",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🏫",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The wide variety of skills and techniques teachers use to keep students organized, orderly, focused, attentive, on task, and academically productive.",
                "examples": [
                    "Effective classroom management is the key to preventing disruptive behavior.",
                    "The new teacher struggled with classroom management in the large, energetic group."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_017",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-23",
        "word": "cognitive",
        "emoji": "🧠",
        "subtext": "cognitive ability / cognitive bias / a cognitive approach",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkɒɡnətɪv | 🇺🇸 ˈkɑːɡnətɪv",
        "definitions": [
            {
                "text": "Relating to mental processes of understanding.",
                "examples": [
                    "Stress has a serious impact on cognitive performance."
                ]
            }
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_cognitive",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-24",
        "word": "comparable",
        "emoji": "↔️",
        "subtext": "directly comparable / not really comparable / fully comparable",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkɒmpərəbl | 🇺🇸 ˈkɑːmpərəbl",
        "definitions": [
            {
                "text": "Similar enough to compare; of equivalent quality.",
                "examples": [
                    "The two contracts are not really comparable."
                ]
            }
        ],
        "synonyms": [
            "similar",
            "equivalent",
            "akin"
        ],
        "antonyms": [
            "incomparable",
            "different"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_comparable",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-25",
        "word": "compelling",
        "emoji": "🧲",
        "subtext": "very compelling / highly compelling / a compelling argument",
        "form": "adjective",
        "transcription": "kəmˈpelɪŋ",
        "definitions": [
            {
                "text": "Very convincing; creating a strong desire.",
                "examples": [
                    "She made a very compelling case for the investment."
                ]
            }
        ],
        "synonyms": [
            "convincing",
            "persuasive",
            "gripping"
        ],
        "antonyms": [
            "unconvincing",
            "weak"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_compelling",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-26",
        "word": "comprehensible input",
        "lang": "en",
        "transcription": "ˌkɒmprɪˈhensəbl ˈɪnpʊt",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "👂",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Language input that can be understood by listeners despite them not understanding all the words and structures in it.",
                "examples": [
                    "Krashen argued that comprehensible input is the essential ingredient for language acquisition.",
                    "Teachers use visuals and gestures to ensure their speech remains comprehensible input."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_005",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-27",
        "word": "comprise",
        "emoji": "🧩",
        "subtext": "comprise of / be comprised of / comprise several elements",
        "form": "verb",
        "transcription": "kəmˈpraɪz",
        "definitions": [
            {
                "text": "To consist of or be made up of parts.",
                "examples": [
                    "The board comprises seven independent non-executive directors."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "comprised",
        "v3": "comprised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "comprising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_comprise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-28",
        "word": "conceal",
        "emoji": "🙈",
        "subtext": "conceal information / conceal the truth / deliberately conceal",
        "form": "verb",
        "transcription": "kənˈsiːl",
        "definitions": [
            {
                "text": "To hide something or keep it secret.",
                "examples": [
                    "The report concealed several significant conflicts of interest."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "concealed",
        "v3": "concealed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "concealing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_conceal",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-29",
        "word": "contextualise",
        "emoji": "🖼️",
        "subtext": "contextualise findings / contextualise within / contextualise an argument",
        "form": "verb",
        "transcription": "kənˈtekstʃuəlaɪz",
        "definitions": [
            {
                "text": "To place something in its broader context to aid understanding.",
                "examples": [
                    "We must contextualise these statistics within a global framework."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contextualised",
        "v3": "contextualised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contextualising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_contextualise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-30",
        "word": "convey",
        "emoji": "✉️",
        "subtext": "convey a message / convey information / convey clearly",
        "form": "verb",
        "transcription": "kənˈveɪ",
        "definitions": [
            {
                "text": "To communicate or make known a message or idea.",
                "examples": [
                    "The email failed to convey the urgency of the situation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conveyed",
        "v3": "conveyed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "conveying",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_convey",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-31",
        "word": "credible",
        "emoji": "🤝",
        "subtext": "very credible / a credible source / entirely credible",
        "form": "adjective",
        "transcription": "ˈkredəbl",
        "definitions": [
            {
                "text": "Able to be believed; trustworthy.",
                "examples": [
                    "The company needs a credible response to the allegations."
                ]
            }
        ],
        "synonyms": [
            "believable",
            "trustworthy",
            "reliable"
        ],
        "antonyms": [
            "incredible",
            "untrustworthy"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_credible",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-32",
        "word": "cultivate",
        "emoji": "🌱",
        "subtext": "cultivate a skill / cultivate relationships / cultivate an interest",
        "form": "verb",
        "transcription": "ˈkʌltɪveɪt",
        "definitions": [
            {
                "text": "To develop and nurture a skill, relationship or attitude.",
                "examples": [
                    "She deliberately cultivated relationships with industry leaders."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cultivated",
        "v3": "cultivated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "cultivating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_cultivate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-33",
        "word": "definitive",
        "emoji": "🏁",
        "subtext": "truly definitive / the definitive guide / a definitive answer",
        "form": "adjective",
        "transcription": "dɪˈfɪnətɪv",
        "definitions": [
            {
                "text": "Final; clearly established and not in doubt.",
                "examples": [
                    "This is the definitive account of what happened."
                ]
            }
        ],
        "synonyms": [
            "final",
            "conclusive",
            "ultimate"
        ],
        "antonyms": [
            "tentative",
            "provisional"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_definitive",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-34",
        "word": "delicate",
        "emoji": "🌸",
        "subtext": "a delicate balance / very delicate / extremely delicate",
        "form": "adjective",
        "transcription": "ˈdelɪkət",
        "definitions": [
            {
                "text": "Requiring careful handling; sensitive.",
                "examples": [
                    "Peace in the region depends on a delicate balance."
                ]
            }
        ],
        "synonyms": [
            "fragile",
            "sensitive",
            "subtle"
        ],
        "antonyms": [
            "robust",
            "strong"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_delicate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-35",
        "word": "devote",
        "emoji": "❤️",
        "subtext": "devote time to / devote yourself to / be devoted to",
        "form": "verb",
        "transcription": "🇬🇧 dɪˈvəʊt | 🇺🇸 dɪˈvoʊt",
        "definitions": [
            {
                "text": "To give time or effort exclusively to something.",
                "examples": [
                    "He devoted three years to developing the new system."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "devoted",
        "v3": "devoted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "devoting",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_devote",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-36",
        "word": "differentiated instruction",
        "lang": "en",
        "transcription": "ˌdɪfəˈrenʃieɪtɪd ɪnˈstrʌkʃn",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🧩",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "An approach to teaching that involves providing different students with different avenues to learning, often in the same classroom.",
                "examples": [
                    "Differentiated instruction is essential when teaching a class with widely varying proficiency levels.",
                    "The teacher used differentiated instruction by giving more complex readings to the advanced students."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_011",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-37",
        "word": "distinctive",
        "emoji": "🆔",
        "subtext": "very distinctive / highly distinctive / a distinctive feature",
        "form": "adjective",
        "transcription": "dɪˈstɪŋktɪv",
        "definitions": [
            {
                "text": "Different from others in a noticeable way.",
                "examples": [
                    "She has a very distinctive writing style."
                ]
            }
        ],
        "synonyms": [
            "unique",
            "characteristic",
            "individual"
        ],
        "antonyms": [
            "common",
            "ordinary"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_distinctive",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-38",
        "word": "elaborate",
        "emoji": "➕",
        "subtext": "elaborate on / elaborate further / need to elaborate",
        "form": "verb",
        "transcription": "ɪˈlæbəreɪt",
        "definitions": [
            {
                "text": "To add more detail or explanation to something said or written.",
                "examples": [
                    "Could you elaborate further on that point about wellbeing?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elaborated",
        "v3": "elaborated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "elaborating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_elaborate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-39",
        "word": "eligible",
        "emoji": "✅",
        "subtext": "fully eligible / not eligible / eligible for",
        "form": "adjective",
        "transcription": "ˈelɪdʒəbl",
        "definitions": [
            {
                "text": "Having the right to receive or do something.",
                "examples": [
                    "Only permanent employees are eligible for the bonus."
                ]
            }
        ],
        "synonyms": [
            "qualified",
            "entitled",
            "fit"
        ],
        "antonyms": [
            "ineligible",
            "unqualified"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_eligible",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-40",
        "word": "elucidate",
        "emoji": "💡",
        "subtext": "elucidate a point / elucidate the relationship / help elucidate",
        "form": "verb",
        "transcription": "ɪˈluːsɪdeɪt",
        "definitions": [
            {
                "text": "To make something clear by explaining it in detail.",
                "examples": [
                    "The paper elucidates the relationship between poverty and health."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elucidated",
        "v3": "elucidated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "elucidating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_elucidate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-41",
        "word": "embrace",
        "emoji": "🤗",
        "subtext": "embrace change / embrace an idea / embrace new technology",
        "form": "verb",
        "transcription": "ɪmˈbreɪs",
        "definitions": [
            {
                "text": "To accept something enthusiastically.",
                "examples": [
                    "The company enthusiastically embraced the new remote working model."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "embraced",
        "v3": "embraced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "embracing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_embrace",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-42",
        "word": "empirical",
        "emoji": "🧪",
        "subtext": "purely empirical / strictly empirical / empirical research",
        "form": "adjective",
        "transcription": "ɪmˈpɪrɪkl",
        "definitions": [
            {
                "text": "Based on observation or experiment, not theory.",
                "examples": [
                    "The argument is supported by strong empirical evidence."
                ]
            }
        ],
        "synonyms": [
            "observed",
            "practical",
            "experimental"
        ],
        "antonyms": [
            "theoretical",
            "conjectural"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_empirical",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-43",
        "word": "ethical",
        "emoji": "⚖️",
        "subtext": "deeply ethical / an ethical question / entirely ethical",
        "form": "adjective",
        "transcription": "ˈeθɪkl",
        "definitions": [
            {
                "text": "Relating to moral principles of right and wrong.",
                "examples": [
                    "The company is committed to ethical sourcing."
                ]
            }
        ],
        "synonyms": [
            "moral",
            "principled",
            "virtuous"
        ],
        "antonyms": [
            "unethical",
            "immoral"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_ethical",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-44",
        "word": "exceptional",
        "emoji": "🌟",
        "subtext": "truly exceptional / quite exceptional / of exceptional quality",
        "form": "adjective",
        "transcription": "ɪkˈsepʃənl",
        "definitions": [
            {
                "text": "Unusually good; far above average.",
                "examples": [
                    "The candidate showed exceptional leadership skills."
                ]
            }
        ],
        "synonyms": [
            "outstanding",
            "extraordinary",
            "remarkable"
        ],
        "antonyms": [
            "average",
            "mediocre"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_exceptional",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-45",
        "word": "explicit",
        "emoji": "📢",
        "subtext": "very explicit / entirely explicit / make explicit",
        "form": "adjective",
        "transcription": "ɪkˈsplɪsɪt",
        "definitions": [
            {
                "text": "Clearly and fully expressed; nothing left out.",
                "examples": [
                    "The contract contains explicit terms about working hours."
                ]
            }
        ],
        "synonyms": [
            "clear",
            "plain",
            "overt"
        ],
        "antonyms": [
            "implicit",
            "vague"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_explicit",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-46",
        "word": "extrapolate",
        "emoji": "📈",
        "subtext": "extrapolate from / extrapolate data / extrapolate conclusions",
        "form": "verb",
        "transcription": "ɪkˈstræpəleɪt",
        "definitions": [
            {
                "text": "To extend conclusions from known data to unknown situations.",
                "examples": [
                    "It is dangerous to extrapolate from one country's experience."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "extrapolated",
        "v3": "extrapolated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "extrapolating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_extrapolate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-47",
        "word": "facilitate",
        "emoji": "🤝",
        "subtext": "facilitate a process / facilitate communication / facilitate change",
        "form": "verb",
        "transcription": "fəˈsɪlɪteɪt",
        "definitions": [
            {
                "text": "To make something easier or help it happen.",
                "examples": [
                    "Good leadership facilitates open and honest communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "facilitated",
        "v3": "facilitated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "facilitating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_facilitate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-48",
        "word": "favourable",
        "emoji": "📈",
        "subtext": "very favourable / highly favourable / a favourable outcome",
        "form": "adjective",
        "transcription": "ˈfeɪvərəbl",
        "definitions": [
            {
                "text": "Showing approval; helpful or positive.",
                "examples": [
                    "The response from clients was very favourable."
                ]
            }
        ],
        "synonyms": [
            "positive",
            "advantageous",
            "beneficial"
        ],
        "antonyms": [
            "unfavourable",
            "negative"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_favourable",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-49",
        "word": "fierce",
        "emoji": "🔥",
        "subtext": "fierce competition / very fierce / a fierce debate",
        "form": "adjective",
        "transcription": "fɪəs",
        "definitions": [
            {
                "text": "Very strong or intense; showing strong emotion.",
                "examples": [
                    "There was fierce competition for the contract."
                ]
            }
        ],
        "synonyms": [
            "intense",
            "powerful",
            "vehement"
        ],
        "antonyms": [
            "mild",
            "gentle"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_fierce",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-50",
        "word": "formative assessment",
        "lang": "en",
        "transcription": "ˈfɔːmətɪv əˈsesmənt",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "📝",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A range of formal and informal assessment procedures conducted by teachers during the learning process in order to modify teaching and learning activities.",
                "examples": [
                    "Formative assessment provides immediate feedback to both students and teachers.",
                    "Quizzes and exit tickets are common tools for formative assessment."
                ]
            }
        ],
        "antonyms": [
            "summative assessment"
        ],
        "legacy_id": "en_advanced_language_006",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-51",
        "word": "fossilization",
        "lang": "en",
        "transcription": "ˌfɒsəlaɪˈzeɪʃn",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🦴",
        "form": "noun",
        "definitions": [
            {
                "text": "The process in which incorrect language features become a permanent part of the way a person speaks or writes a new language.",
                "examples": [
                    "Fossilization often occurs when learners are not corrected during the early stages of acquisition.",
                    "The teacher tried to address the fossilization of certain grammatical errors in the advanced class."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_003",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-52",
        "word": "fragile",
        "emoji": "📦",
        "subtext": "very fragile / extremely fragile / a fragile situation",
        "form": "adjective",
        "transcription": "ˈfrædʒaɪl",
        "definitions": [
            {
                "text": "Easily broken or damaged; delicate.",
                "examples": [
                    "The country's economy is in a fragile state."
                ]
            }
        ],
        "synonyms": [
            "delicate",
            "flimsy",
            "vulnerable"
        ],
        "antonyms": [
            "robust",
            "sturdy"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_fragile",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-53",
        "word": "generate",
        "emoji": "⚡",
        "subtext": "generate revenue / generate ideas / generate interest",
        "form": "verb",
        "transcription": "ˈdʒenəreɪt",
        "definitions": [
            {
                "text": "To produce something; to create.",
                "examples": [
                    "The new marketing strategy generated excellent results."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "generated",
        "v3": "generated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "generating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_generate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-54",
        "word": "give way to",
        "emoji": "⬇️",
        "subtext": "give way to pressure / give way to a trend",
        "form": "verb",
        "transcription": "ɡɪv weɪ tuː",
        "definitions": [
            {
                "text": "To be replaced by something else; to yield to pressure.",
                "examples": [
                    "Traditional offices slowly gave way to open-plan workspaces."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave way to",
        "v3": "given way to",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_give_way_to",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-55",
        "word": "growth mindset",
        "lang": "en",
        "transcription": "ɡrəʊθ ˈmaɪndset",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🌱",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The belief that abilities and intelligence can be developed through dedication and hard work.",
                "examples": [
                    "Encouraging a growth mindset helps students persevere when they face difficult language tasks.",
                    "Students with a growth mindset view mistakes as opportunities to learn."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_020",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-56",
        "word": "harsh",
        "emoji": "🌵",
        "subtext": "very harsh / extremely harsh / harsh criticism",
        "form": "adjective",
        "transcription": "hɑːʃ",
        "definitions": [
            {
                "text": "Cruel or unpleasant; very difficult.",
                "examples": [
                    "The harsh reality is that redundancies are unavoidable."
                ]
            }
        ],
        "synonyms": [
            "severe",
            "stringent",
            "cruel"
        ],
        "antonyms": [
            "mild",
            "soft"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_harsh",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-57",
        "word": "higher-order thinking skills",
        "lang": "en",
        "transcription": "ˈhaɪər ˈɔːdə ˈθɪŋkɪŋ skɪlz",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🔝",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Skills such as analysis, evaluation, and creation, which go beyond the basic recall of facts.",
                "examples": [
                    "The lesson was designed to challenge the students' higher-order thinking skills.",
                    "HOTS (Higher-Order Thinking Skills) are crucial for developing critical and creative minds."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_015",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-58",
        "word": "hinder",
        "emoji": "🚧",
        "subtext": "hinder progress / hinder growth / hinder someone from doing",
        "form": "verb",
        "transcription": "🇬🇧 ˈhɪndə | 🇺🇸 ˈhɪndər",
        "definitions": [
            {
                "text": "To slow down or make something difficult.",
                "examples": [
                    "Bureaucracy can seriously hinder innovation in large organisations."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hindered",
        "v3": "hindered",
        "group": "regular",
        "auxiliary": "have",
        "v4": "hindering",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_hinder",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-59",
        "word": "hypothesise",
        "emoji": "🧪",
        "subtext": "hypothesise that / hypothesise a connection / working hypothesis",
        "form": "verb",
        "transcription": "🇬🇧 haɪˈpɒθəsaɪz | 🇺🇸 haɪˈpɑːθəsaɪz",
        "definitions": [
            {
                "text": "To put forward a hypothesis or tentative explanation.",
                "examples": [
                    "The researchers hypothesised a link between sleep and decision quality."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hypothesised",
        "v3": "hypothesised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "hypothesising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_hypothesise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-60",
        "word": "implicit",
        "emoji": "🤫",
        "subtext": "largely implicit / an implicit assumption / implicit bias",
        "form": "adjective",
        "transcription": "ɪmˈplɪsɪt",
        "definitions": [
            {
                "text": "Suggested though not directly expressed.",
                "examples": [
                    "There is an implicit understanding that loyalty is rewarded."
                ]
            }
        ],
        "synonyms": [
            "implied",
            "tacit",
            "unspoken"
        ],
        "antonyms": [
            "explicit",
            "direct"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_implicit",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-61",
        "word": "inadequate",
        "emoji": "📉",
        "subtext": "wholly inadequate / completely inadequate / deeply inadequate",
        "form": "adjective",
        "transcription": "ɪnˈædɪkwət",
        "definitions": [
            {
                "text": "Not enough; below the required standard.",
                "examples": [
                    "The funding was totally inadequate for the scale of the project."
                ]
            }
        ],
        "synonyms": [
            "insufficient",
            "deficient",
            "scanty"
        ],
        "antonyms": [
            "adequate",
            "sufficient"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_inadequate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-62",
        "word": "inherent",
        "emoji": "🧬",
        "subtext": "inherent risk / an inherent problem / naturally inherent",
        "form": "adjective",
        "transcription": "ɪnˈhɪərənt",
        "definitions": [
            {
                "text": "Existing in something as a permanent feature.",
                "examples": [
                    "There are inherent risks in any start-up business."
                ]
            }
        ],
        "synonyms": [
            "intrinsic",
            "innate",
            "built-in"
        ],
        "antonyms": [
            "extrinsic",
            "acquired"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_inherent",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-63",
        "word": "initiate",
        "emoji": "▶️",
        "subtext": "initiate a process / initiate a conversation / initiate change",
        "form": "verb",
        "transcription": "ɪˈnɪʃieɪt",
        "definitions": [
            {
                "text": "To cause something to begin.",
                "examples": [
                    "She initiated the performance review process six months early."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "initiated",
        "v3": "initiated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "initiating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_initiate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-64",
        "word": "inquiry-based learning",
        "lang": "en",
        "transcription": "ɪnˈkwaɪəri beɪst ˈlɜːnɪŋ",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🔍",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A form of active learning that starts by posing questions, problems or scenarios—rather than simply presenting established facts.",
                "examples": [
                    "Inquiry-based learning encourages students to conduct their own research and find solutions.",
                    "The science fair project is a classic example of inquiry-based learning."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_016",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-65",
        "word": "interlanguage",
        "lang": "en",
        "transcription": "ˌɪntəˈlæŋɡwɪdʒ",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🌉",
        "form": "noun",
        "definitions": [
            {
                "text": "An idiosyncratic version of a target language used by a learner, which preserves some features of their native language.",
                "examples": [
                    "The student's interlanguage showed a mix of English syntax and Spanish vocabulary.",
                    "Interlanguage is seen as a natural stage in the language learning process."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_004",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-66",
        "word": "intriguing",
        "emoji": "🤔",
        "subtext": "very intriguing / quite intriguing / find intriguing",
        "form": "adjective",
        "transcription": "ɪnˈtriːɡɪŋ",
        "definitions": [
            {
                "text": "Very interesting; arousing curiosity.",
                "examples": [
                    "She raised an intriguing point about the data."
                ]
            }
        ],
        "synonyms": [
            "fascinating",
            "compelling",
            "captivating"
        ],
        "antonyms": [
            "boring",
            "uninteresting"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_intriguing",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-67",
        "word": "irrelevant",
        "emoji": "🗑️",
        "subtext": "totally irrelevant / completely irrelevant / largely irrelevant",
        "form": "adjective",
        "transcription": "ɪˈreləvənt",
        "definitions": [
            {
                "text": "Not connected to the topic; not important now.",
                "examples": [
                    "That point is completely irrelevant to the discussion."
                ]
            }
        ],
        "synonyms": [
            "unrelated",
            "extraneous",
            "beside the point"
        ],
        "antonyms": [
            "relevant",
            "germane"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_irrelevant",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-68",
        "word": "jurisdiction",
        "form": "noun",
        "transcription": "ˌdʒʊrɪsˈdɪkʃn",
        "definitions": [
            {
                "text": "The official power to make legal decisions and judgments.",
                "examples": [
                    "The court has jurisdiction over international disputes."
                ]
            }
        ],
        "emoji": "⚖️",
        "lang": "en",
        "level": "c1",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-69",
        "word": "marginal",
        "emoji": "↔️",
        "subtext": "very marginal / only marginal / a marginal difference",
        "form": "adjective",
        "transcription": "ˈmɑːdʒɪnl",
        "definitions": [
            {
                "text": "Small and not very important; relating to the edges.",
                "examples": [
                    "The improvement was marginal and barely noticeable."
                ]
            }
        ],
        "synonyms": [
            "slight",
            "minor",
            "insignificant"
        ],
        "antonyms": [
            "significant",
            "major"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_marginal",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-70",
        "word": "metacognition",
        "lang": "en",
        "transcription": "ˌmetəkɒɡˈnɪʃn",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "Awareness and understanding of one's own thought processes; 'thinking about thinking'.",
                "examples": [
                    "Metacognition helps students choose the best strategies for memorizing new vocabulary.",
                    "Developing metacognition allows learners to become more autonomous and self-regulated."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_007",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-71",
        "word": "misleading",
        "emoji": "🤥",
        "subtext": "highly misleading / deeply misleading / potentially misleading",
        "form": "adjective",
        "transcription": "ˌmɪsˈliːdɪŋ",
        "definitions": [
            {
                "text": "Giving a false impression; deceptive.",
                "examples": [
                    "The advertisement was ruled to be deliberately misleading."
                ]
            }
        ],
        "synonyms": [
            "deceptive",
            "confusing",
            "ambiguous"
        ],
        "antonyms": [
            "accurate",
            "informative"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_misleading",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-72",
        "word": "mitigate",
        "emoji": "🛡️",
        "subtext": "mitigate risk / mitigate the impact / mitigate against",
        "form": "verb",
        "transcription": "ˈmɪtɪɡeɪt",
        "definitions": [
            {
                "text": "To make something less severe or serious.",
                "examples": [
                    "The new policy aims to mitigate the impact on low earners."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "mitigated",
        "v3": "mitigated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "mitigating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_mitigate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-73",
        "word": "moderate",
        "emoji": "⚖️",
        "subtext": "quite moderate / fairly moderate / a moderate improvement",
        "form": "adjective",
        "transcription": "🇬🇧 ˈmɒdərət | 🇺🇸 ˈmɑːdərət",
        "definitions": [
            {
                "text": "Not extreme; somewhere in the middle.",
                "examples": [
                    "The team achieved moderate success in the first quarter."
                ]
            }
        ],
        "synonyms": [
            "average",
            "modest",
            "temperate"
        ],
        "antonyms": [
            "extreme",
            "excessive"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_moderate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-74",
        "word": "negotiate",
        "emoji": "🤝",
        "subtext": "negotiate terms / negotiate a deal / negotiate a salary",
        "form": "verb",
        "transcription": "🇬🇧 nɪˈɡəʊʃieɪt | 🇺🇸 nɪˈɡoʊʃieɪt",
        "definitions": [
            {
                "text": "To discuss to reach an agreement.",
                "examples": [
                    "The union successfully negotiated better terms for all workers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "negotiated",
        "v3": "negotiated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "negotiating",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_negotiate",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-75",
        "word": "neurodiversity",
        "lang": "en",
        "transcription": "ˌnjʊərəʊdaɪˈvɜːsəti",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🧠",
        "form": "noun",
        "definitions": [
            {
                "text": "The idea that neurological differences like autism and ADHD are natural variations in the human genome, rather than deficits.",
                "examples": [
                    "Inclusive education requires an understanding of neurodiversity in the classroom.",
                    "Teachers should adapt their methods to support neurodiversity among their students."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_018",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-76",
        "word": "peculiar",
        "emoji": "🥨",
        "subtext": "very peculiar / quite peculiar / find peculiar",
        "form": "adjective",
        "transcription": "🇬🇧 pɪˈkjuːliə | 🇺🇸 pɪˈkjuːliər",
        "definitions": [
            {
                "text": "Strange; unlike what is normal.",
                "examples": [
                    "There was something peculiar about the way the data was collected."
                ]
            }
        ],
        "synonyms": [
            "odd",
            "strange",
            "unusual"
        ],
        "antonyms": [
            "normal",
            "ordinary"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_peculiar",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-77",
        "word": "pedagogy",
        "lang": "en",
        "transcription": "ˈpedəɡɒdʒi",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "👩‍🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "The method and practice of teaching, especially as an academic subject or theoretical concept.",
                "examples": [
                    "Modern pedagogy emphasizes student-centered learning over traditional lecturing.",
                    "She is an expert in the pedagogy of second language acquisition."
                ]
            }
        ],
        "collocations": [
            "critical pedagogy",
            "modern pedagogy",
            "pedagogical approach"
        ],
        "legacy_id": "en_advanced_language_002",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-78",
        "word": "plausible",
        "emoji": "🤨",
        "subtext": "very plausible / quite plausible / a plausible explanation",
        "form": "adjective",
        "transcription": "ˈplɔːzəbl",
        "definitions": [
            {
                "text": "Seeming reasonable or probable.",
                "examples": [
                    "His explanation sounded plausible enough."
                ]
            }
        ],
        "synonyms": [
            "believable",
            "reasonable",
            "credible"
        ],
        "antonyms": [
            "implausible",
            "unlikely"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_plausible",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-79",
        "word": "posit",
        "emoji": "📍",
        "subtext": "posit a theory / posit that / posit the existence of",
        "form": "verb",
        "transcription": "🇬🇧 ˈpɒzɪt | 🇺🇸 ˈpɑːzɪt",
        "definitions": [
            {
                "text": "To suggest or assume the existence of something as a basis for argument.",
                "examples": [
                    "She posits that late-stage capitalism generates its own critique."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "posited",
        "v3": "posited",
        "group": "regular",
        "auxiliary": "have",
        "v4": "positing",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_posit",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-80",
        "word": "preliminary",
        "emoji": "🆕",
        "subtext": "very preliminary / purely preliminary / a preliminary finding",
        "form": "adjective",
        "transcription": "prɪˈlɪmɪnəri",
        "definitions": [
            {
                "text": "Coming before the main event; preparatory.",
                "examples": [
                    "The preliminary results are very encouraging."
                ]
            }
        ],
        "synonyms": [
            "initial",
            "introductory",
            "early"
        ],
        "antonyms": [
            "final",
            "concluding"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_preliminary",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-81",
        "word": "prevalent",
        "emoji": "🌍",
        "subtext": "very prevalent / increasingly prevalent / remain prevalent",
        "form": "adjective",
        "transcription": "ˈprevələnt",
        "definitions": [
            {
                "text": "Widespread; commonly found.",
                "examples": [
                    "Burnout is increasingly prevalent in senior management."
                ]
            }
        ],
        "synonyms": [
            "widespread",
            "common",
            "ubiquitous"
        ],
        "antonyms": [
            "rare",
            "uncommon"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_prevalent",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-82",
        "word": "problematic",
        "emoji": "⚠️",
        "subtext": "very problematic / highly problematic / deeply problematic",
        "form": "adjective",
        "transcription": "🇬🇧 ˌprɒbləˈmætɪk | 🇺🇸 ˌprɑːbləˈmætɪk",
        "definitions": [
            {
                "text": "Involving or presenting a problem.",
                "examples": [
                    "The new regulation could prove highly problematic."
                ]
            }
        ],
        "synonyms": [
            "troublesome",
            "difficult",
            "unsettled"
        ],
        "antonyms": [
            "simple",
            "straightforward"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_problematic",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-83",
        "word": "problematise",
        "emoji": "❓",
        "subtext": "problematise a concept / problematise the idea / problematise assumptions",
        "form": "verb",
        "transcription": "🇬🇧 ˈprɒbləmətaɪz | 🇺🇸 ˈprɑːbləmətaɪz",
        "definitions": [
            {
                "text": "To treat something as a problem worthy of critical analysis.",
                "examples": [
                    "The seminar sought to problematise the concept of meritocracy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "problematised",
        "v3": "problematised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "problematising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_problematise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-84",
        "word": "prone",
        "emoji": "📉",
        "subtext": "prone to / highly prone / be prone to errors",
        "form": "adjective",
        "transcription": "🇬🇧 prəʊn | 🇺🇸 proʊn",
        "definitions": [
            {
                "text": "Likely to be affected by something negative.",
                "examples": [
                    "This sector is prone to sudden and unpredictable change."
                ]
            }
        ],
        "synonyms": [
            "susceptible",
            "vulnerable",
            "liable"
        ],
        "antonyms": [
            "resistant",
            "immune"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_prone",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-85",
        "word": "scaffolding",
        "lang": "en",
        "transcription": "ˈskæfəldɪŋ",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🏗️",
        "form": "noun",
        "definitions": [
            {
                "text": "Instructional techniques used to move students toward stronger understanding and, ultimately, greater independence in the learning process.",
                "examples": [
                    "The teacher provided scaffolding by giving the students a list of useful phrases before the debate.",
                    "Effective scaffolding helps learners bridge the gap between what they can do alone and what they can do with guidance."
                ]
            }
        ],
        "collocations": [
            "instructional scaffolding",
            "provide scaffolding",
            "scaffolding techniques"
        ],
        "legacy_id": "en_advanced_language_001",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-86",
        "word": "stagnant",
        "emoji": "💧",
        "subtext": "completely stagnant / remain stagnant / a stagnant market",
        "form": "adjective",
        "transcription": "ˈstæɡnənt",
        "definitions": [
            {
                "text": "Not growing or developing.",
                "examples": [
                    "The economy has remained largely stagnant."
                ]
            }
        ],
        "synonyms": [
            "still",
            "motionless",
            "static"
        ],
        "antonyms": [
            "flowing",
            "active",
            "dynamic"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_stagnant",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-87",
        "word": "structural",
        "emoji": "🏗️",
        "subtext": "deep structural / a structural problem / structural change",
        "form": "adjective",
        "transcription": "ˈstrʌktʃərəl",
        "definitions": [
            {
                "text": "Relating to the way something is built or organised.",
                "examples": [
                    "The economy faces some deep structural problems."
                ]
            }
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_structural",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-88",
        "word": "summative assessment",
        "lang": "en",
        "transcription": "ˈsʌmətɪv əˈsesmənt",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🏁",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The assessment of participants where the focus is on the outcome of a program or course.",
                "examples": [
                    "Final exams are the most common form of summative assessment.",
                    "Unlike formative assessment, summative assessment takes place at the end of a unit."
                ]
            }
        ],
        "antonyms": [
            "formative assessment"
        ],
        "legacy_id": "en_advanced_language_019",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-89",
        "word": "superb",
        "emoji": "💎",
        "subtext": "absolutely superb / truly superb / simply superb",
        "form": "adjective",
        "transcription": "suːˈpɜːb",
        "definitions": [
            {
                "text": "Excellent; of the best quality.",
                "examples": [
                    "She gave a superb presentation to the board."
                ]
            }
        ],
        "synonyms": [
            "excellent",
            "magnificent",
            "splendid"
        ],
        "antonyms": [
            "poor",
            "inferior"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_superb",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-90",
        "word": "symbolic",
        "emoji": "🕊️",
        "subtext": "purely symbolic / deeply symbolic / a symbolic gesture",
        "form": "adjective",
        "transcription": "🇬🇧 sɪmˈbɒlɪk | 🇺🇸 sɪmˈbɑːlɪk",
        "definitions": [
            {
                "text": "Representing something; not having real significance.",
                "examples": [
                    "The gesture was largely symbolic but well received."
                ]
            }
        ],
        "synonyms": [
            "emblematic",
            "representative",
            "figurative"
        ],
        "antonyms": [
            "literal",
            "real"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_symbolic",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-91",
        "word": "systematic",
        "emoji": "⚙️",
        "subtext": "very systematic / highly systematic / a systematic review",
        "form": "adjective",
        "transcription": "ˌsɪstəˈmætɪk",
        "definitions": [
            {
                "text": "Done according to a plan; methodical.",
                "examples": [
                    "She took a very systematic approach to the problem."
                ]
            }
        ],
        "synonyms": [
            "methodical",
            "orderly",
            "organised"
        ],
        "antonyms": [
            "disorderly",
            "chaotic"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_systematic",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-92",
        "word": "theoretical",
        "emoji": "📚",
        "subtext": "purely theoretical / very theoretical / a theoretical framework",
        "form": "adjective",
        "transcription": "ˌθɪəˈretɪkl",
        "definitions": [
            {
                "text": "Based on theory rather than practice.",
                "examples": [
                    "The problem is theoretical — it does not arise in practice."
                ]
            }
        ],
        "synonyms": [
            "abstract",
            "academic",
            "hypothetical"
        ],
        "antonyms": [
            "practical",
            "applied"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_theoretical",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-93",
        "word": "theorise",
        "emoji": "🎓",
        "subtext": "theorise about / theorise that / theorise a connection",
        "form": "verb",
        "transcription": "ˈθɪəraɪz",
        "definitions": [
            {
                "text": "To develop or propose a theory about something.",
                "examples": [
                    "He theorised that social media amplifies existing inequalities."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "theorised",
        "v3": "theorised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "theorising",
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_verb_theorise",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-94",
        "word": "translanguaging",
        "lang": "en",
        "transcription": "trænzˈlæŋɡwɪdʒɪŋ",
        "level": "advanced",
        "theme": "language",
        "sub_theme": "learning",
        "emoji": "🔄",
        "form": "noun",
        "definitions": [
            {
                "text": "The process where multilingual speakers use their languages as an integrated communication system rather than as separate entities.",
                "examples": [
                    "Translanguaging allows students to use their first language to help them understand complex concepts in the target language.",
                    "Modern bilingual pedagogy often encourages translanguaging in the classroom."
                ]
            }
        ],
        "legacy_id": "en_advanced_language_012",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-95",
        "word": "vicious",
        "emoji": "🦂",
        "subtext": "utterly vicious / a vicious circle / a vicious attack",
        "form": "adjective",
        "transcription": "ˈvɪʃəs",
        "definitions": [
            {
                "text": "Deliberately cruel; savage.",
                "examples": [
                    "The review process was described as a vicious cycle."
                ]
            }
        ],
        "synonyms": [
            "cruel",
            "ferocious",
            "malicious"
        ],
        "antonyms": [
            "gentle",
            "kind"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_vicious",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-96",
        "word": "vulnerable",
        "emoji": "🛡️",
        "subtext": "very vulnerable / highly vulnerable / left vulnerable",
        "form": "adjective",
        "transcription": "ˈvʌlnərəbl",
        "definitions": [
            {
                "text": "Open to being harmed or attacked.",
                "examples": [
                    "Young workers are particularly vulnerable in this economy."
                ]
            }
        ],
        "synonyms": [
            "exposed",
            "defenceless",
            "at risk"
        ],
        "antonyms": [
            "invulnerable",
            "protected"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_vulnerable",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    },
    {
        "id": "C1-LAW-97",
        "word": "worthwhile",
        "emoji": "✔️",
        "subtext": "very worthwhile / well worthwhile / prove worthwhile",
        "form": "adjective",
        "transcription": "ˌwɜːθˈwaɪl",
        "definitions": [
            {
                "text": "Worth the time or effort involved.",
                "examples": [
                    "Learning another language is a worthwhile investment."
                ]
            }
        ],
        "synonyms": [
            "valuable",
            "beneficial",
            "useful"
        ],
        "antonyms": [
            "pointless",
            "useless"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "en_advanced_language_adjective_worthwhile",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal System"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
