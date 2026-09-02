(function() {
    const lang = "en";
    const data = [
    {
        "id": "B2-SCI-01",
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
        "legacy_id": "en_upper_intermediate_applied_sciences_engineering_001",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-02",
        "lang": "en",
        "transcription": "ˈælɡərɪðəm",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "💻",
        "form": "noun",
        "classification": "regular",
        "plural": "algorithms",
        "subtext": "computer algorithm, social media algorithm",
        "definitions": [
            {
                "text": "A set of rules followed by a computer to solve a problem.",
                "examples": [
                    "Social media algorithms determine what you see.",
                    "The search engine uses a complex algorithm."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_technology_privacy_001",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-03",
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
        "legacy_id": "en_upper_intermediate_technology_privacy_002",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-04",
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
        "legacy_id": "en_upper_intermediate_media_misinformation_001",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-05",
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
        "legacy_id": "en_upper_intermediate_technology_privacy_003",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-06",
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
        "legacy_id": "en_upper_intermediate_applied_sciences_engineering_002",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-07",
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
        "legacy_id": "en_upper_intermediate_technology_privacy_005",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-08",
        "lang": "en",
        "word": "data",
        "level": "upper_intermediate",
        "theme": "technology",
        "emoji": "📊",
        "form": "noun",
        "classification": "regular",
        "plural": "data",
        "transcription": "ˈdeɪtə",
        "subtext": "information, statistics",
        "definitions": [
            {
                "text": "Information stored and processed by computers.",
                "examples": [
                    "Companies collect enormous amounts of personal data."
                ]
            }
        ],
        "legacy_id": "en_upper_intermediate_technology_privacy_004",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    },
    {
        "id": "B2-SCI-09",
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
        "legacy_id": "en_upper_intermediate_media_misinformation_002",
        "level_code": "B2",
        "domain": "Science",
        "subcategory": "Technology"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
