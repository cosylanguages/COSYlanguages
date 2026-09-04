(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-NOUN-SCI-006",
        "lang": "en",
        "transcription": "ˌɔːtəˈmeɪʃn",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🤖",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "industrial automation, job automation",
        "definitions": [
            {
                "text": "The use of machines or computers to do work previously done by people.",
                "examples": [
                    "Automation is changing the job market significantly.",
                    "The factory has invested in full automation."
                ]
            }
        ],
        "legacy_id": "B2-SCI-01",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering",
        "word": "automation"
    },
    {
        "id": "B2-NOUN-SCI-008",
        "lang": "en",
        "transcription": "ˈdeɪtə ˈprɪvəsi",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "data protection, privacy laws",
        "definitions": [
            {
                "text": "The right to control how personal information is collected and used.",
                "examples": [
                    "Data privacy laws are getting stricter.",
                    "People are increasingly concerned about data privacy."
                ]
            }
        ],
        "legacy_id": "B2-SCI-03",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering",
        "word": "data privacy"
    },
    {
        "id": "B2-NOUN-SCI-009",
        "lang": "en",
        "transcription": "ˌmɪsɪnfəˈmeɪʃn",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🤥",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "spread misinformation, fake news",
        "definitions": [
            {
                "text": "False or inaccurate information spread widely.",
                "examples": [
                    "Social media can spread misinformation quickly.",
                    "We need to combat the spread of misinformation."
                ]
            }
        ],
        "legacy_id": "B2-SCI-04",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering",
        "word": "misinformation"
    },
    {
        "id": "B2-NOUN-SCI-010",
        "lang": "en",
        "transcription": "sɜːˈveɪləns",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "📹",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "subtext": "mass surveillance, urban surveillance",
        "definitions": [
            {
                "text": "Close observation of a person or group by authorities.",
                "examples": [
                    "CCTV is a form of urban surveillance.",
                    "The suspects were under police surveillance."
                ]
            }
        ],
        "legacy_id": "B2-SCI-05",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering",
        "word": "surveillance"
    },
    {
        "id": "B2-NOUN-SCI-011",
        "lang": "en",
        "word": "artificial intelligence",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": null,
        "transcription": "ˌɑːtɪˈfɪʃl ɪnˈtɛlɪdʒəns",
        "subtext": "AI, machine learning",
        "definitions": [
            {
                "text": "Computer systems that perform tasks normally requiring human intelligence.",
                "examples": [
                    "Artificial intelligence is transforming many professional fields."
                ]
            }
        ],
        "legacy_id": "B2-SCI-06",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering"
    },
    {
        "id": "B2-NOUN-SCI-012",
        "lang": "en",
        "word": "cybersecurity",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🛡️",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ˌsaɪbə sɪˈkjʊərɪti",
        "subtext": "online protection, network security",
        "definitions": [
            {
                "text": "The protection of computer systems and networks from attack.",
                "examples": [
                    "Cybersecurity has become a top priority for businesses."
                ]
            }
        ],
        "legacy_id": "B2-SCI-07",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering"
    },
    {
        "id": "B2-NOUN-SCI-014",
        "lang": "en",
        "word": "disinformation",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "🤥",
        "form": "noun",
        "classification": "regular",
        "plural": null,
        "transcription": "ˌdɪsɪnfəˈmeɪʃn",
        "subtext": "deliberate lies, propaganda",
        "definitions": [
            {
                "text": "False information deliberately spread to mislead.",
                "examples": [
                    "State actors have used disinformation campaigns in elections."
                ]
            }
        ],
        "legacy_id": "B2-SCI-09",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology",
        "pos_section": "Nouns",
        "sub_subcategory": "Computers_Engineering"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
