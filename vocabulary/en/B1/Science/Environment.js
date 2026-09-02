(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-SCI-01",
        "word": "affect",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To have an impact on something or someone.",
                "examples": [
                    "Remote working has affected team communication."
                ]
            }
        ],
        "transcription": "əˈfɛkt",
        "emoji": "⚖️",
        "_legacy": {
            "subtext": "affect someone / affect the result / negatively affect",
            "classification": "regular",
            "aspect": "action",
            "v2": "affected",
            "v3": "affected",
            "group": "regular",
            "auxiliary": "have",
            "v4": "affecting"
        },
        "legacy_id": "en_intermediate_environment_011",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-02",
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
        "legacy_id": "en_intermediate_environment_018",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-03",
        "word": "cause",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To make something happen, especially something bad.",
                "examples": [
                    "Long commutes can cause significant stress and fatigue."
                ]
            }
        ],
        "transcription": "kɔːz",
        "emoji": "⚡",
        "_legacy": {
            "subtext": "cause a problem / cause stress / cause damage",
            "classification": "regular",
            "aspect": "action",
            "v2": "caused",
            "v3": "caused",
            "group": "regular",
            "auxiliary": "have",
            "v4": "causing"
        },
        "legacy_id": "en_intermediate_environment_012",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-04",
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
        "legacy_id": "en_intermediate_environment_016",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-05",
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
        "legacy_id": "en_intermediate_environment_013",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-06",
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
        "legacy_id": "en_intermediate_environment_020",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-07",
        "word": "environmental",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the natural world and its protection.",
                "examples": [
                    "The company has an excellent environmental record."
                ]
            }
        ],
        "transcription": "ɪnˌvaɪrənˈmɛntl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "environmental impact / environmental policy / environmentally friendly"
        },
        "legacy_id": "en_intermediate_environment_009",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-08",
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
        "legacy_id": "en_intermediate_environment_014",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-09",
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
        "legacy_id": "en_intermediate_environment_015",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-10",
        "word": "recycle",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "verb",
        "definitions": [
            {
                "text": "To convert waste into reusable material.",
                "examples": [
                    "They recycle glass, paper and plastic every week."
                ]
            }
        ],
        "transcription": "ˌriːˈsaɪkl",
        "emoji": "♻️",
        "_legacy": {
            "subtext": "recycle plastic, recycling bin",
            "classification": "regular",
            "aspect": "action",
            "v2": "recycled",
            "v3": "recycled",
            "group": "regular",
            "auxiliary": "have",
            "v4": "recycling"
        },
        "legacy_id": "en_intermediate_environment_010",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-11",
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
        "legacy_id": "en_intermediate_environment_017",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-12",
        "word": "stormy",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "stormy",
                "examples": []
            }
        ],
        "transcription": "ˈstɔːmi",
        "emoji": "⛈️",
        "_legacy": {
            "subtext": "stormy weather / a stormy relationship / stormy skies"
        },
        "legacy_id": "en_intermediate_environment_007",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-13",
        "word": "sustainable",
        "lang": "en",
        "level": "intermediate",
        "theme": "environment",
        "form": "adjective",
        "definitions": [
            {
                "text": "Using resources in a way that does not damage the environment for the future.",
                "examples": [
                    "We need more sustainable ways of living.",
                    "This wood comes from a sustainable source.",
                    "The company is committed to sustainable practices."
                ]
            }
        ],
        "transcription": "səˈsteɪnəbl",
        "emoji": "♻️",
        "_legacy": {
            "subtext": "sustainable development, eco-friendly"
        },
        "legacy_id": "en_intermediate_environment_008",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    },
    {
        "id": "B1-SCI-14",
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
        "legacy_id": "en_intermediate_environment_019",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Environment"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
