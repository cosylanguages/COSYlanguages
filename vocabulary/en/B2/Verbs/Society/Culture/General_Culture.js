(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-VERB-SOC-01",
        "lang": "en",
        "transcription": "ˌnɛvəðəˈlɛs",
        "level": "upper_intermediate",
        "theme": "language",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "",
        "synonyms": [
            "nonetheless",
            "even so"
        ],
        "definitions": [
            {
                "text": "In spite of that; notwithstanding.",
                "examples": [
                    "It is a difficult task. Nevertheless, we must try.",
                    "The weather was bad; nevertheless, we went for a walk."
                ]
            }
        ],
        "legacy_id": "B2-SOC-08",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-02",
        "word": "account for",
        "emoji": "📝",
        "form": "verb",
        "transcription": "əˈkaʊnt fɔː",
        "subtext": "Neutral | account for something / account for the difference / hard to account for",
        "definitions": [
            {
                "text": "To explain the reason for; to make up a proportion.",
                "examples": [
                    "How do you account for the sharp drop in performance?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accounted for",
        "v3": "accounted for",
        "group": "regular",
        "auxiliary": "have",
        "v4": "account foring",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-11",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-03",
        "word": "acknowledge",
        "emoji": "✅",
        "form": "verb",
        "transcription": "🇬🇧 əkˈnɒlɪdʒ | 🇺🇸 əkˈnɑːlɪdʒ",
        "subtext": "Neutral | acknowledge a weakness / acknowledge that / widely acknowledged",
        "definitions": [
            {
                "text": "To recognise or accept the existence of something.",
                "examples": [
                    "He acknowledged the limitations of his own argument clearly."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "acknowledged",
        "v3": "acknowledged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "acknowledging",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-12",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-04",
        "word": "adopt",
        "emoji": "✅",
        "form": "verb",
        "transcription": "🇬🇧 əˈdɒpt | 🇺🇸 əˈdɑːpt",
        "subtext": "Neutral | adopt a policy / adopt an approach / adopt a new system",
        "definitions": [
            {
                "text": "To take on a new approach, idea or policy.",
                "examples": [
                    "The company adopted a fully remote working model in 2020."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "adopted",
        "v3": "adopted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "adopting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-14",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-05",
        "word": "affect",
        "emoji": "✨",
        "form": "verb",
        "transcription": "əˈfɛkt",
        "subtext": "Neutral | affect someone / negatively affect / affect the result",
        "definitions": [
            {
                "text": "To produce a change in someone or something.",
                "examples": [
                    "The merger affected every single department in the organisation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "affected",
        "v3": "affected",
        "group": "regular",
        "auxiliary": "have",
        "v4": "affecting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-15",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-06",
        "word": "argue",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "ˈɑːɡjuː",
        "subtext": "Neutral | argue that / argue for / argue against / strongly argue",
        "definitions": [
            {
                "text": "To present reasons in support of a position.",
                "examples": [
                    "She argues that automation creates more jobs than it destroys."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "argued",
        "v3": "argued",
        "group": "regular",
        "auxiliary": "have",
        "v4": "arguing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-17",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-07",
        "word": "assert",
        "emoji": "📣",
        "form": "verb",
        "transcription": "əˈsɜːt",
        "subtext": "Formal | assert that / assert a right / boldly assert",
        "definitions": [
            {
                "text": "To state something confidently and forcefully.",
                "examples": [
                    "He asserted that the company had acted entirely within the law."
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
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-18",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-08",
        "word": "assume",
        "emoji": "🤔",
        "form": "verb",
        "transcription": "əˈsjuːm",
        "subtext": "Neutral | assume that / dangerous to assume / underlying assumption",
        "definitions": [
            {
                "text": "To accept something as true without proof.",
                "examples": [
                    "Do not assume that everyone agrees with you on this."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "assumed",
        "v3": "assumed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "assuming",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-19",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-09",
        "word": "attribute",
        "emoji": "🏷️",
        "form": "verb",
        "transcription": "əˈtrɪbjuːt",
        "subtext": "Formal | attribute to / be attributed to / wrongly attribute",
        "definitions": [
            {
                "text": "To regard something as being caused by something else.",
                "examples": [
                    "The success was attributed to strong team leadership."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "attributed",
        "v3": "attributed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "attributing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-20",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-10",
        "word": "build on",
        "emoji": "🏗️",
        "form": "verb",
        "transcription": "🇬🇧 bɪld ɒn | 🇺🇸 bɪld ɑːn",
        "subtext": "Neutral | build on success / build on experience / build on foundations",
        "definitions": [
            {
                "text": "To use something as a foundation for further development.",
                "examples": [
                    "The new strategy builds on the success of the previous one."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "built on",
        "v3": "built on",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-21",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-11",
        "word": "challenge",
        "emoji": "❓",
        "form": "verb",
        "transcription": "ˈtʃælɪndʒ",
        "subtext": "Neutral | challenge an assumption / challenge a claim / challenge the status quo",
        "definitions": [
            {
                "text": "To question the truth or validity of something.",
                "examples": [
                    "The new report challenges the assumptions behind the policy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "challenged",
        "v3": "challenged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "challenging",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-22",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-12",
        "word": "concede",
        "emoji": "🏳️",
        "form": "verb",
        "transcription": "kənˈsiːd",
        "subtext": "Formal | concede a point / concede that / forced to concede",
        "definitions": [
            {
                "text": "To admit, often reluctantly, that something is true.",
                "examples": [
                    "He conceded that the policy had produced some positive results."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "conceded",
        "v3": "conceded",
        "group": "regular",
        "auxiliary": "have",
        "v4": "conceding",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-26",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-13",
        "word": "constitute",
        "emoji": "🧱",
        "form": "verb",
        "transcription": "🇬🇧 ˈkɒnstɪtjuːt | 🇺🇸 ˈkɑːnstɪtjuːt",
        "subtext": "Formal | constitute a breach / constitute evidence / constitute a problem",
        "definitions": [
            {
                "text": "To be or form something.",
                "examples": [
                    "This behaviour constitutes a serious breach of the contract."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "constituted",
        "v3": "constituted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "constituting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-28",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-14",
        "word": "contend",
        "emoji": "🗣️",
        "form": "verb",
        "transcription": "kənˈtɛnd",
        "subtext": "Formal | contend that / strongly contend / the argument contends",
        "definitions": [
            {
                "text": "To argue or assert something strongly.",
                "examples": [
                    "She contends that the policy will widen inequality."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contended",
        "v3": "contended",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contending",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-29",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-15",
        "word": "contribute",
        "emoji": "🤝",
        "form": "verb",
        "transcription": "kənˈtrɪbjuːt",
        "subtext": "Neutral | contribute to / contribute to success / make a contribution",
        "definitions": [
            {
                "text": "To add to something; to help cause a result.",
                "examples": [
                    "Many factors contributed to the company's poor performance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contributed",
        "v3": "contributed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "contributing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-30",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-16",
        "word": "counter",
        "emoji": "🛡️",
        "form": "verb",
        "transcription": "🇬🇧 ˈkaʊntə | 🇺🇸 ˈkaʊntər",
        "subtext": "Formal | counter an argument / counter a claim / offer a counter",
        "definitions": [
            {
                "text": "To respond to an argument with an opposing one.",
                "examples": [
                    "He countered her point with strong evidence from recent studies."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "countered",
        "v3": "countered",
        "group": "regular",
        "auxiliary": "have",
        "v4": "countering",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-33",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-17",
        "word": "demonstrate",
        "emoji": "📊",
        "form": "verb",
        "transcription": "ˈdɛmənstreɪt",
        "subtext": "Neutral | demonstrate a skill / demonstrate that / demonstrate commitment",
        "definitions": [
            {
                "text": "To show or prove something clearly.",
                "examples": [
                    "She demonstrated excellent leadership skills under pressure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "demonstrated",
        "v3": "demonstrated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "demonstrating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-34",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-18",
        "word": "dispute",
        "emoji": "🚫",
        "form": "verb",
        "transcription": "dɪˈspjuːt",
        "subtext": "Formal | dispute a claim / dispute findings / hotly disputed",
        "definitions": [
            {
                "text": "To question the truth or validity of something.",
                "examples": [
                    "Several experts disputed the methodology used in the study."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "disputed",
        "v3": "disputed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "disputing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-35",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-19",
        "word": "draw on",
        "emoji": "📚",
        "form": "verb",
        "transcription": "🇬🇧 drɔː ɒn | 🇺🇸 drɔː ɑːn",
        "subtext": "Neutral | draw on experience / draw on resources / draw on expertise",
        "definitions": [
            {
                "text": "To make use of experience, knowledge or resources.",
                "examples": [
                    "She drew on ten years of experience to solve the problem."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "drew on",
        "v3": "drawn on",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-39",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-20",
        "word": "emerge",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ɪˈmɜːdʒ",
        "subtext": "Formal | emerge from / emerge as / emerge as a leader",
        "definitions": [
            {
                "text": "To become visible or known; to come out of.",
                "examples": [
                    "A clear consensus gradually emerged from the long discussion."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emerged",
        "v3": "emerged",
        "group": "regular",
        "auxiliary": "have",
        "v4": "emerging",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-40",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-21",
        "word": "emphasise",
        "emoji": "🎯",
        "form": "verb",
        "transcription": "ˈɛmfəsaɪz",
        "subtext": "Formal | emphasise the importance / emphasise a point / strongly emphasise",
        "definitions": [
            {
                "text": "To give particular importance or attention to something.",
                "examples": [
                    "The report emphasises the need for better regulation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "emphasised",
        "v3": "emphasised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "emphasising",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-41",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-22",
        "word": "enable",
        "emoji": "🔓",
        "form": "verb",
        "transcription": "ɪˈneɪbl",
        "subtext": "Formal | enable someone to / enable growth / enable change",
        "definitions": [
            {
                "text": "To make something possible.",
                "examples": [
                    "The new technology enables remote teams to collaborate better."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enabled",
        "v3": "enabled",
        "group": "regular",
        "auxiliary": "have",
        "v4": "enabling",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-42",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-23",
        "word": "enhance",
        "emoji": "✨",
        "form": "verb",
        "transcription": "ɪnˈhɑːns",
        "subtext": "Formal | enhance performance / enhance the quality / enhance productivity",
        "definitions": [
            {
                "text": "To improve or increase the quality of something.",
                "examples": [
                    "The new system significantly enhanced team communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "enhanced",
        "v3": "enhanced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "enhancing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-43",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-24",
        "word": "ensure",
        "emoji": "✅",
        "form": "verb",
        "transcription": "🇬🇧 ɪnˈʃʊə | 🇺🇸 ɪnˈʃʊər",
        "subtext": "Formal | ensure that / ensure quality / ensure compliance",
        "definitions": [
            {
                "text": "To make certain that something happens.",
                "examples": [
                    "She checked everything twice to ensure accuracy in the report."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ensured",
        "v3": "ensured",
        "group": "regular",
        "auxiliary": "have",
        "v4": "ensuring",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-45",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-25",
        "word": "expose",
        "emoji": "🔓",
        "form": "verb",
        "transcription": "🇬🇧 ɪkˈspəʊz | 🇺🇸 ɪkˈspoʊz",
        "subtext": "Neutral | expose wrongdoing / expose someone to risk / be exposed to",
        "definitions": [
            {
                "text": "To reveal something hidden; to put at risk.",
                "examples": [
                    "The investigation exposed widespread financial misconduct."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exposed",
        "v3": "exposed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "exposing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-46",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-26",
        "word": "extend",
        "emoji": "↔️",
        "form": "verb",
        "transcription": "ɪkˈstɛnd",
        "subtext": "Neutral | extend a contract / extend a deadline / extend beyond",
        "definitions": [
            {
                "text": "To make something longer, larger or wider.",
                "examples": [
                    "The company extended the contract by another twelve months."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "extended",
        "v3": "extended",
        "group": "regular",
        "auxiliary": "have",
        "v4": "extending",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-47",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-27",
        "word": "give rise to",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "ɡɪv raɪz tuː",
        "subtext": "Formal | give rise to problems / give rise to debate / give rise to concerns",
        "definitions": [
            {
                "text": "To cause something to happen.",
                "examples": [
                    "The new policy has given rise to considerable controversy."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gave rise to",
        "v3": "given rise to",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-50",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-28",
        "word": "highlight",
        "emoji": "🖍️",
        "form": "verb",
        "transcription": "ˈhaɪlaɪt",
        "subtext": "Neutral | highlight an issue / highlight a point / highlight the importance",
        "definitions": [
            {
                "text": "To draw particular attention to something important.",
                "examples": [
                    "The report highlighted several serious risks for the next year."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "highlighted",
        "v3": "highlighted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "highlighting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-51",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-29",
        "word": "indicate",
        "emoji": "👉",
        "form": "verb",
        "transcription": "ˈɪndɪkeɪt",
        "subtext": "Formal | indicate that / indicate a trend / clearly indicate",
        "definitions": [
            {
                "text": "To show or suggest something; to point towards.",
                "examples": [
                    "The data indicates a clear and consistent trend upwards."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "indicated",
        "v3": "indicated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "indicating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-53",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-30",
        "word": "infer",
        "emoji": "💡",
        "form": "verb",
        "transcription": "ɪnˈfɜː",
        "subtext": "Formal | infer from / reasonably infer / draw an inference",
        "definitions": [
            {
                "text": "To draw a conclusion from evidence without being told.",
                "examples": [
                    "From the data, we can clearly infer that demand is falling."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "inferred",
        "v3": "inferred",
        "group": "regular",
        "auxiliary": "have",
        "v4": "infering",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-54",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-31",
        "word": "justify",
        "emoji": "✅",
        "form": "verb",
        "transcription": "ˈdʒʌstɪfaɪ",
        "subtext": "Neutral | justify a decision / justify costs / hard to justify",
        "definitions": [
            {
                "text": "To show or prove that something is reasonable or right.",
                "examples": [
                    "Can the company justify the pay freeze to its employees?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "justified",
        "v3": "justified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "justifying",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-57",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-32",
        "word": "maintain",
        "emoji": "🧱",
        "form": "verb",
        "transcription": "meɪnˈteɪn",
        "subtext": "Formal | maintain that / firmly maintain / maintain a position",
        "definitions": [
            {
                "text": "To firmly state something as true despite opposition.",
                "examples": [
                    "She maintained that her decision was based entirely on evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "maintained",
        "v3": "maintained",
        "group": "regular",
        "auxiliary": "have",
        "v4": "maintaining",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-58",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-33",
        "word": "obtain",
        "emoji": "📥",
        "form": "verb",
        "transcription": "əbˈteɪn",
        "subtext": "Formal | obtain permission / obtain a qualification / obtain information",
        "definitions": [
            {
                "text": "To get or acquire something, especially with effort.",
                "examples": [
                    "She obtained her professional qualification after two years."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obtained",
        "v3": "obtained",
        "group": "regular",
        "auxiliary": "have",
        "v4": "obtaining",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-61",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-34",
        "word": "overcome",
        "emoji": "🏆",
        "form": "verb",
        "transcription": "🇬🇧 ˌəʊvəˈkʌm | 🇺🇸 ˌoʊvəˈkʌm",
        "subtext": "Neutral | overcome a challenge / overcome obstacles / overcome fear",
        "definitions": [
            {
                "text": "To succeed in dealing with a difficulty.",
                "examples": [
                    "He overcame significant obstacles to reach senior management."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "overcame",
        "v3": "overcome",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-63",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-35",
        "word": "overlook",
        "emoji": "🙈",
        "form": "verb",
        "transcription": "🇬🇧 ˌəʊvəˈlʊk | 🇺🇸 ˌoʊvəˈlʊk",
        "subtext": "Neutral | overlook a detail / easy to overlook / overlook a problem",
        "definitions": [
            {
                "text": "To fail to notice; to choose not to consider something.",
                "examples": [
                    "The report completely overlooks the impact on lower earners."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "overlooked",
        "v3": "overlooked",
        "group": "regular",
        "auxiliary": "have",
        "v4": "overlooking",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-64",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-36",
        "word": "perceive",
        "emoji": "👁️",
        "form": "verb",
        "transcription": "pəˈsiːv",
        "subtext": "Formal | perceive something / be perceived as / widely perceived",
        "definitions": [
            {
                "text": "To become aware of or understand something.",
                "examples": [
                    "He is widely perceived as a strong and fair leader."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "perceived",
        "v3": "perceived",
        "group": "regular",
        "auxiliary": "have",
        "v4": "perceiving",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-65",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-37",
        "word": "phase out",
        "emoji": "📉",
        "form": "verb",
        "transcription": "feɪz aʊt",
        "subtext": "Neutral | phase out a product / phase out gradually / be phased out",
        "definitions": [
            {
                "text": "To gradually withdraw or eliminate something.",
                "examples": [
                    "The company is phasing out all single-use plastic packaging."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "phased out",
        "v3": "phased out",
        "group": "regular",
        "auxiliary": "have",
        "v4": "phase outing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-66",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-38",
        "word": "propose",
        "emoji": "💡",
        "form": "verb",
        "transcription": "🇬🇧 prəˈpəʊz | 🇺🇸 prəˈpoʊz",
        "subtext": "Neutral | propose a solution / propose a change / propose that",
        "definitions": [
            {
                "text": "To suggest a plan or course of action formally.",
                "examples": [
                    "He proposed a new system for managing client accounts."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "proposed",
        "v3": "proposed",
        "group": "regular",
        "auxiliary": "have",
        "v4": "proposing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-67",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-39",
        "word": "pursue",
        "emoji": "🏃",
        "form": "verb",
        "transcription": "pəˈsjuː",
        "subtext": "Neutral | pursue a goal / pursue a career / pursue a claim",
        "definitions": [
            {
                "text": "To continue doing something; to try to achieve.",
                "examples": [
                    "He pursued his ambition of running his own business."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pursued",
        "v3": "pursued",
        "group": "regular",
        "auxiliary": "have",
        "v4": "pursuing",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-68",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-40",
        "word": "reflect",
        "emoji": "🪞",
        "form": "verb",
        "transcription": "rɪˈflɛkt",
        "subtext": "Neutral | reflect on / reflect a view / reflect badly on / time to reflect",
        "definitions": [
            {
                "text": "To think carefully about something; to show.",
                "examples": [
                    "Her decision reflects a long period of careful thinking."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "reflected",
        "v3": "reflected",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reflecting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-70",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-41",
        "word": "refute",
        "emoji": "❌",
        "form": "verb",
        "transcription": "rɪˈfjuːt",
        "subtext": "Formal | refute a claim / refute an argument / difficult to refute",
        "definitions": [
            {
                "text": "To prove that something is false or incorrect.",
                "examples": [
                    "She refuted the accusation with clear and detailed evidence."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "refuted",
        "v3": "refuted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "refuting",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-71",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-42",
        "word": "retain",
        "emoji": "📦",
        "form": "verb",
        "transcription": "rɪˈteɪn",
        "subtext": "Formal | retain staff / retain customers / retain information",
        "definitions": [
            {
                "text": "To keep or continue to have something.",
                "examples": [
                    "The company needs to retain its best employees at all costs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "retained",
        "v3": "retained",
        "group": "regular",
        "auxiliary": "have",
        "v4": "retaining",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "describing",
        "sub_theme": null,
        "legacy_id": "B2-SOC-74",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-43",
        "word": "stand out",
        "emoji": "🌟",
        "form": "verb",
        "transcription": "stænd aʊt",
        "subtext": "Neutral | stand out from the crowd / stand out as / make something stand out",
        "definitions": [
            {
                "text": "To be noticeably better or different from others.",
                "examples": [
                    "Her clear presentation stood out from all the other candidates."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "stood out",
        "v3": "stood out",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-77",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-44",
        "word": "stem from",
        "emoji": "🌱",
        "form": "verb",
        "transcription": "stɛm frəm",
        "subtext": "Formal | stem from a cause / problems stem from / stem from a decision",
        "definitions": [
            {
                "text": "To originate from a particular source or cause.",
                "examples": [
                    "Many workplace problems stem from poor internal communication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "stemmed from",
        "v3": "stemmed from",
        "group": "regular",
        "auxiliary": "have",
        "v4": "stem froming",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-78",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-45",
        "word": "substantiate",
        "emoji": "📄",
        "form": "verb",
        "transcription": "səbˈstænʃieɪt",
        "subtext": "Formal | substantiate a claim / substantiate allegations / require substantiation",
        "definitions": [
            {
                "text": "To provide evidence to support a claim.",
                "examples": [
                    "She was unable to substantiate her allegations with any data."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "substantiated",
        "v3": "substantiated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "substantiating",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "language",
        "sub_theme": null,
        "legacy_id": "B2-SOC-81",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    },
    {
        "id": "B2-VERB-SOC-46",
        "word": "take into account",
        "emoji": "🤔",
        "form": "verb",
        "transcription": "teɪk ˈɪntə əˈkaʊnt",
        "subtext": "Formal | take into account / fail to take into account / be taken into account",
        "definitions": [
            {
                "text": "To consider a factor when making a decision.",
                "examples": [
                    "You must take all the risks into account before you decide."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "took into account",
        "v3": "taken into account",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "upper_intermediate",
        "theme": "persuasion_rhetoric",
        "sub_theme": null,
        "legacy_id": "B2-SOC-84",
        "level_code": "B2",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Culture"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
