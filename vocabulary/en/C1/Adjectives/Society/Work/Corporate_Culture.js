(function() {
    const lang = "en";
    const data = [
    {
        "id": "C1-ADJ-SOC-003",
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
        "legacy_id": "C1-SOC-03",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-004",
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
        "legacy_id": "C1-SOC-04",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-005",
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
        "legacy_id": "C1-SOC-05",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-007",
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
        "legacy_id": "C1-SOC-07",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-008",
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
        "legacy_id": "C1-SOC-08",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    },
    {
        "id": "C1-ADJ-SOC-009",
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
        "legacy_id": "C1-SOC-09",
        "level_code": "C1",
        "domain": "Society",
        "subcategory": "Work",
        "pos_section": "Adjectives",
        "sub_subcategory": "Corporate_Culture"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
