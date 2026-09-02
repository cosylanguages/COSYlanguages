(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-ADJ-SOC-01",
        "word": "accountable",
        "emoji": "👨‍⚖️",
        "subtext": "held accountable / fully accountable / accountable to",
        "form": "adjective",
        "transcription": "əˈkaʊntəbl",
        "definitions": [
            {
                "text": "Responsible for decisions and having to explain them.",
                "examples": [
                    "Every manager must be held accountable for their team."
                ]
            }
        ],
        "synonyms": [
            "responsible",
            "liable",
            "answerable"
        ],
        "antonyms": [
            "irresponsible",
            "unaccountable"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-02",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-02",
        "word": "appealing",
        "emoji": "🍏",
        "subtext": "very appealing / hugely appealing / find appealing",
        "form": "adjective",
        "transcription": "əˈpiːlɪŋ",
        "definitions": [
            {
                "text": "Attractive and interesting; having wide appeal.",
                "examples": [
                    "The idea of a four-day week is appealing to most workers."
                ]
            }
        ],
        "synonyms": [
            "attractive",
            "inviting",
            "alluring"
        ],
        "antonyms": [
            "unappealing",
            "repulsive"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-06",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-03",
        "word": "costly",
        "emoji": "💸",
        "subtext": "very costly / extremely costly / a costly mistake",
        "form": "adjective",
        "transcription": "🇬🇧 ˈkɒstli | 🇺🇸 ˈkɑːstli",
        "definitions": [
            {
                "text": "Causing a lot of harm, loss or expense.",
                "examples": [
                    "The error proved very costly for the company."
                ]
            }
        ],
        "synonyms": [
            "expensive",
            "dear",
            "ruinous"
        ],
        "antonyms": [
            "cheap",
            "inexpensive"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-13",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-04",
        "word": "desirable",
        "emoji": "⭐",
        "subtext": "highly desirable / very desirable / a desirable quality",
        "form": "adjective",
        "transcription": "dɪˈzaɪərəbl",
        "definitions": [
            {
                "text": "Worth having or wanting; attractive.",
                "examples": [
                    "Experience with data analytics is highly desirable."
                ]
            }
        ],
        "synonyms": [
            "sought-after",
            "advantageous",
            "coveted"
        ],
        "antonyms": [
            "undesirable"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-15",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-05",
        "word": "prestigious",
        "emoji": "🏛️",
        "subtext": "very prestigious / highly prestigious / a prestigious award",
        "form": "adjective",
        "transcription": "preˈstɪdʒəs",
        "definitions": [
            {
                "text": "Respected and admired by many people.",
                "examples": [
                    "She left for a more prestigious role at a larger firm."
                ]
            }
        ],
        "synonyms": [
            "reputable",
            "distinguished",
            "esteemed"
        ],
        "antonyms": [
            "obscure",
            "disreputable"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-22",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-06",
        "word": "productive",
        "emoji": "🚜",
        "subtext": "very productive / highly productive / a productive discussion",
        "form": "adjective",
        "transcription": "prəˈdʌktɪv",
        "definitions": [
            {
                "text": "Producing good results; effective.",
                "examples": [
                    "We had a very productive strategy session."
                ]
            }
        ],
        "synonyms": [
            "fruitful",
            "efficient",
            "prolific"
        ],
        "antonyms": [
            "unproductive",
            "idle"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-23",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-07",
        "word": "profitable",
        "emoji": "💰",
        "subtext": "very profitable / highly profitable / a profitable venture",
        "form": "adjective",
        "transcription": "🇬🇧 ˈprɒfɪtəbl | 🇺🇸 ˈprɑːfɪtəbl",
        "definitions": [
            {
                "text": "Producing financial gain.",
                "examples": [
                    "The new product line has been highly profitable."
                ]
            }
        ],
        "synonyms": [
            "lucrative",
            "money-making",
            "commercial"
        ],
        "antonyms": [
            "unprofitable",
            "loss-making"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-24",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-08",
        "word": "transparent",
        "emoji": "🪟",
        "subtext": "fully transparent / very transparent / openly transparent",
        "form": "adjective",
        "transcription": "trænˈspærənt",
        "definitions": [
            {
                "text": "Open and honest; not trying to hide anything.",
                "examples": [
                    "The company aims to be fully transparent with shareholders."
                ]
            }
        ],
        "synonyms": [
            "clear",
            "honest",
            "candid"
        ],
        "antonyms": [
            "opaque",
            "secretive"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-26",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-09",
        "word": "viable",
        "emoji": "🌱",
        "subtext": "fully viable / commercially viable / economically viable",
        "form": "adjective",
        "transcription": "ˈvaɪəbl",
        "definitions": [
            {
                "text": "Capable of working; feasible.",
                "examples": [
                    "The team needs to find a viable alternative solution."
                ]
            }
        ],
        "synonyms": [
            "feasible",
            "workable",
            "practical"
        ],
        "antonyms": [
            "unviable",
            "impossible"
        ],
        "lang": "en",
        "level": "advanced",
        "theme": "organisational_culture",
        "sub_theme": null,
        "legacy_id": "C1-SOC-28",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
