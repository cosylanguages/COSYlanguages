(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-VERB-LAW-01",
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
        "legacy_id": "C1-LAW-06",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-02",
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
        "legacy_id": "C1-LAW-08",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-03",
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
        "legacy_id": "C1-LAW-12",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-04",
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
        "legacy_id": "C1-LAW-13",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-05",
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
        "legacy_id": "C1-LAW-14",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-06",
        "word": "bear out",
        "emoji": "✅",
        "subtext": "bear out a theory / be borne out by evidence",
        "form": "verb",
        "transcription": "beə aʊt",
        "definitions": [
            {
                "text": "To confirm or support a theory or claim.",
                "examples": [
                    "The results clearly bear out everything the report predicted."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bore out",
        "v3": "borne out",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-07",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-07",
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
        "legacy_id": "C1-LAW-18",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-08",
        "word": "call into question",
        "emoji": "❓",
        "subtext": "call into question / be called into question",
        "form": "verb",
        "transcription": "kɔːl ˈɪntə ˈkwestʃən",
        "definitions": [
            {
                "text": "To cause doubt about something.",
                "examples": [
                    "The new evidence calls into question the entire official account."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "called into question",
        "v3": "called into question",
        "group": "regular",
        "auxiliary": "have",
        "v4": "call into questioning",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-09",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-09",
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
        "legacy_id": "C1-LAW-19",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-10",
        "word": "challenge",
        "emoji": "🥊",
        "subtext": "challenge assumptions / challenge authority / challenge the status quo",
        "form": "verb",
        "transcription": "ˈtʃælɪndʒ",
        "definitions": [
            {
                "text": "To question the validity or truth of something.",
                "examples": [
                    "She challenged the premise of the argument itself."
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
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-11",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-11",
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
        "legacy_id": "C1-LAW-20",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-12",
        "word": "commodify",
        "emoji": "🏷️",
        "subtext": "commodify relationships / commodify culture / process of commodification",
        "form": "verb",
        "transcription": "🇬🇧 kəˈmɒdɪfaɪ | 🇺🇸 kəˈmɑːdɪfaɪ",
        "definitions": [
            {
                "text": "To treat something as a commercial product, especially something that should not be.",
                "examples": [
                    "Modern culture tends to commodify personal relationships."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "commodified",
        "v3": "commodified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "commodifying",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-12",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-13",
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
        "legacy_id": "C1-LAW-27",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-14",
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
        "legacy_id": "C1-LAW-28",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-15",
        "word": "contend",
        "emoji": "🗣️",
        "subtext": "contend that / strongly contend / the argument contends",
        "form": "verb",
        "transcription": "kənˈtend",
        "definitions": [
            {
                "text": "To argue or assert something strongly.",
                "examples": [
                    "She contends that the new policy will widen inequality."
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
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-15",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-16",
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
        "legacy_id": "C1-LAW-29",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-17",
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
        "legacy_id": "C1-LAW-30",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-18",
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
        "legacy_id": "C1-LAW-32",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-19",
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
        "legacy_id": "C1-LAW-35",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-20",
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
        "legacy_id": "C1-LAW-38",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-21",
        "word": "elide",
        "emoji": "🌫️",
        "subtext": "elide distinctions / elide differences / elide details",
        "form": "verb",
        "transcription": "ɪˈlaɪd",
        "definitions": [
            {
                "text": "To omit or ignore a distinction; to merge or obscure differences.",
                "examples": [
                    "The report elides the distinction between correlation and causation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "elided",
        "v3": "elided",
        "group": "regular",
        "auxiliary": "have",
        "v4": "eliding",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-22",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-22",
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
        "legacy_id": "C1-LAW-40",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-23",
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
        "legacy_id": "C1-LAW-41",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-24",
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
        "legacy_id": "C1-LAW-46",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-25",
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
        "legacy_id": "C1-LAW-47",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-26",
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
        "legacy_id": "C1-LAW-53",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-27",
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
        "legacy_id": "C1-LAW-54",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-28",
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
        "legacy_id": "C1-LAW-58",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-29",
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
        "legacy_id": "C1-LAW-59",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-30",
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
        "legacy_id": "C1-LAW-63",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-31",
        "word": "interrogate",
        "emoji": "🔍",
        "subtext": "interrogate assumptions / interrogate data / interrogate a text",
        "form": "verb",
        "transcription": "ɪnˈterəɡeɪt",
        "definitions": [
            {
                "text": "To question something very closely and critically.",
                "examples": [
                    "We need to interrogate the assumptions behind this policy."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "interrogated",
        "v3": "interrogated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "interrogating",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-26",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-32",
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
        "legacy_id": "C1-LAW-72",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-33",
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
        "legacy_id": "C1-LAW-74",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-34",
        "word": "normalise",
        "emoji": "📏",
        "subtext": "normalise a behaviour / normalise the idea / increasingly normalised",
        "form": "verb",
        "transcription": "ˈnɔːməlaɪz",
        "definitions": [
            {
                "text": "To cause something unusual to be regarded as normal.",
                "examples": [
                    "Social media has normalised constant availability."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "normalised",
        "v3": "normalised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "normalising",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-32",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-35",
        "word": "nuance",
        "emoji": "🎨",
        "subtext": "nuance an argument / a nuanced position / lack nuance",
        "form": "verb",
        "transcription": "ˈnjuːɑːns",
        "definitions": [
            {
                "text": "To give subtle and fine distinctions to an argument or position.",
                "examples": [
                    "She nuanced her argument to acknowledge the complexity involved."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "nuanced",
        "v3": "nuanced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "nuancing",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-34",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-36",
        "word": "perpetuate",
        "emoji": "🔄",
        "subtext": "perpetuate a myth / perpetuate inequality / perpetuate a cycle",
        "form": "verb",
        "transcription": "pəˈpetʃueɪt",
        "definitions": [
            {
                "text": "To make something continue indefinitely, especially something bad.",
                "examples": [
                    "Stereotyping perpetuates inequality across generations."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "perpetuated",
        "v3": "perpetuated",
        "group": "regular",
        "auxiliary": "have",
        "v4": "perpetuating",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-36",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-37",
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
        "legacy_id": "C1-LAW-79",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-38",
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
        "legacy_id": "C1-LAW-83",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-39",
        "word": "qualify",
        "emoji": "🏷️",
        "subtext": "qualify a statement / with the caveat / qualifying remark",
        "form": "verb",
        "transcription": "🇬🇧 ˈkwɒlɪfaɪ | 🇺🇸 ˈkwɑːlɪfaɪ",
        "definitions": [
            {
                "text": "To modify a statement to limit its scope or add conditions.",
                "examples": [
                    "He qualified his optimism with a list of serious reservations."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "qualified",
        "v3": "qualified",
        "group": "regular",
        "auxiliary": "have",
        "v4": "qualifying",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-38",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-40",
        "word": "reconcile",
        "emoji": "⚖️",
        "subtext": "reconcile ideas / hard to reconcile / reconcile differences",
        "form": "verb",
        "transcription": "ˈrekənsaɪl",
        "definitions": [
            {
                "text": "To make two apparently conflicting things compatible.",
                "examples": [
                    "She struggled to reconcile her ambitions with her values."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reconciled",
        "v3": "reconciled",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reconciling",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-39",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-41",
        "word": "reinforce",
        "emoji": "🏗️",
        "subtext": "reinforce a belief / reinforce inequality / mutually reinforce",
        "form": "verb",
        "transcription": "ˌriːɪnˈfɔːs",
        "definitions": [
            {
                "text": "To strengthen or support something already existing.",
                "examples": [
                    "Poor pay structures reinforce the gender pay gap."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reinforced",
        "v3": "reinforced",
        "group": "regular",
        "auxiliary": "have",
        "v4": "reinforcing",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-41",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-42",
        "word": "resist",
        "emoji": "🛡️",
        "subtext": "resist change / resist pressure / offer resistance",
        "form": "verb",
        "transcription": "rɪˈzɪst",
        "definitions": [
            {
                "text": "To oppose or struggle against something.",
                "examples": [
                    "Workers resisted the attempts to increase surveillance."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "resisted",
        "v3": "resisted",
        "group": "regular",
        "auxiliary": "have",
        "v4": "resisting",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-42",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-43",
        "word": "set out",
        "emoji": "🗺️",
        "subtext": "set out a plan / set out to achieve / set out clearly",
        "form": "verb",
        "transcription": "set aʊt",
        "definitions": [
            {
                "text": "To begin a journey; to explain something in detail.",
                "examples": [
                    "The document sets out the company's environmental commitments."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "set out",
        "v3": "set out",
        "group": "regular",
        "auxiliary": "have",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-44",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-44",
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
        "legacy_id": "C1-LAW-93",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-45",
        "word": "unpack",
        "emoji": "📦",
        "subtext": "unpack an idea / unpack assumptions / unpack the implications",
        "form": "verb",
        "transcription": "ʌnˈpæk",
        "definitions": [
            {
                "text": "To examine the components or implications of something in detail.",
                "examples": [
                    "Let us unpack what is meant by the term 'flexible working'."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "unpacked",
        "v3": "unpacked",
        "group": "regular",
        "auxiliary": "have",
        "v4": "unpacking",
        "lang": "en",
        "level": "advanced",
        "theme": "discourse_argument",
        "sub_theme": null,
        "legacy_id": "C1-SOC-50",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    },
    {
        "id": "C1-VERB-LAW-46",
        "word": "valorise",
        "emoji": "💎",
        "subtext": "valorise productivity / valorise tradition / valorise the individual",
        "form": "verb",
        "transcription": "ˈvæləraɪz",
        "definitions": [
            {
                "text": "To give or assign value to something, often in a cultural or ideological context.",
                "examples": [
                    "Contemporary culture valorises productivity above all else."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorised",
        "v3": "valorised",
        "group": "regular",
        "auxiliary": "have",
        "v4": "valorising",
        "lang": "en",
        "level": "advanced",
        "theme": "sociology_structures_c1",
        "sub_theme": null,
        "legacy_id": "C1-SOC-51",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Verbs",
        "sub_subcategory": "General_Law"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
