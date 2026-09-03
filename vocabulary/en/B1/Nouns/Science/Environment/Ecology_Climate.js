(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-NOUN-SCI-013",
        "word": "carbon footprint",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "The total amount of greenhouse gases produced by a person's activities.",
                "examples": [
                    "Flying increases your carbon footprint.",
                    "How can I reduce my carbon footprint?",
                    "Flying significantly increases your carbon footprint."
                ]
            }
        ],
        "transcription": "ˈkɑːbən ˈfʊtprɪnt",
        "emoji": "👣",
        "_legacy": {
            "plural": "carbon footprints",
            "countability": "countable",
            "subtext": "reduce carbon footprint, environmental impact"
        },
        "legacy_id": "B1-SCI-02",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-014",
        "word": "climate change",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Long-term changes in global temperatures and weather patterns.",
                "examples": [
                    "Climate change is the biggest challenge of our time.",
                    "We must take action to combat climate change.",
                    "Climate change affects food prices worldwide."
                ]
            }
        ],
        "transcription": "ˈklaɪmət tʃeɪndʒ",
        "emoji": "🌍🌡️",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "global warming, environmental impact"
        },
        "legacy_id": "B1-SCI-04",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-015",
        "word": "ecosystem",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 ˈiːkəʊˌsɪstəm | 🇺🇸 ˈiːkoʊˌsɪstəm",
        "emoji": "🌲",
        "_legacy": {
            "classification": "regular",
            "plural": "ecosystems",
            "countability": "countable"
        },
        "legacy_id": "B1-SCI-05",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-016",
        "word": "emissions",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Gases or other substances released into the atmosphere.",
                "examples": [
                    "The government wants to reduce carbon emissions."
                ]
            }
        ],
        "transcription": "iˈmɪʃnz",
        "emoji": "💨",
        "_legacy": {
            "classification": "regular",
            "plural": "emissions",
            "countability": "uncountable",
            "subtext": "carbon emissions, reduce emissions"
        },
        "legacy_id": "B1-SCI-06",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-017",
        "word": "global warming",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [],
        "transcription": "🇬🇧 ˈɡləʊbl ˈwɔːmɪŋ | 🇺🇸 ˈɡloʊbl ˈwɔːmɪŋ",
        "emoji": "🌡️",
        "_legacy": {
            "plural": null,
            "countability": "uncountable"
        },
        "legacy_id": "B1-SCI-08",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-018",
        "word": "leaf",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [],
        "transcription": "liːf",
        "emoji": "🍃",
        "_legacy": {
            "numberPlural": "many leaf",
            "answer": "many leaves",
            "classification": "regular",
            "plural": "leaves",
            "countability": "countable",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "laubą"
            }
        },
        "legacy_id": "B1-SCI-09",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-019",
        "word": "renewable energy",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Energy from natural sources that are not used up, such as wind or solar.",
                "examples": [
                    "The company switched to renewable energy.",
                    "Renewable energy is becoming cheaper.",
                    "They installed solar panels to use renewable energy."
                ]
            }
        ],
        "transcription": "rɪˈnjuːəbl ˈɛnədʒi",
        "emoji": "☀️💨",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "solar power, wind energy",
            "antonyms": [
                "fossil fuels"
            ]
        },
        "legacy_id": "B1-SCI-11",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    },
    {
        "id": "B1-NOUN-SCI-020",
        "word": "waste",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "noun",
        "definitions": [
            {
                "text": "Material that is no longer needed and thrown away.",
                "examples": [
                    "We need to reduce food waste.",
                    "The factory produces a lot of chemical waste."
                ]
            }
        ],
        "transcription": "weɪst",
        "emoji": "🗑️",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "food waste, zero waste, waste of time"
        },
        "legacy_id": "B1-SCI-14",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment",
        "pos_section": "Nouns",
        "sub_subcategory": "Ecology_Climate"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
