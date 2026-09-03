(function() {
    const lang = "en";
    const data = [
    {
            "id": "A2-ADJ-WOR-017",
            "word": "competent",
            "emoji": "✅",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having the necessary ability, knowledge, or skill to do something well.",
                            "examples": [
                                    "He is a competent accountant.",
                                    "She gave a competent performance."
                            ]
                    }
            ],
            "subtext": "capable, skilled",
            "synonyms": [
                    "capable",
                    "skilled"
            ],
            "transcription": "ˈkɒmpɪtənt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-019",
            "word": "adequate",
            "emoji": "✅",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Satisfactory or acceptable in quality or quantity.",
                            "examples": [
                                    "The training provided adequate preparation.",
                                    "Ensure adequate lighting in the study room."
                            ]
                    }
            ],
            "subtext": "sufficient, enough",
            "synonyms": [
                    "sufficient",
                    "enough"
            ],
            "transcription": "ˈædɪkwət",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-020",
            "word": "administrative",
            "emoji": "📁",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relating to the running of a business, organization, etc.",
                            "examples": [
                                    "She handles administrative duties in the office.",
                                    "An administrative fee applies to booking changes."
                            ]
                    }
            ],
            "subtext": "executive, managerial",
            "synonyms": [
                    "executive",
                    "managerial"
            ],
            "transcription": "ədˈmɪnɪstrətɪv",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-022",
            "word": "alternative",
            "emoji": "🔄",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Available as another possibility or choice.",
                            "examples": [
                                    "We need an alternative route to avoid traffic.",
                                    "Solar energy is an alternative fuel source."
                            ]
                    }
            ],
            "subtext": "substitute, other",
            "synonyms": [
                    "substitute",
                    "other"
            ],
            "transcription": "ɔːlˈtɜːnətɪv",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-024",
            "word": "applicable",
            "emoji": "📋",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Relevant or appropriate.",
                            "examples": [
                                    "Fill out all applicable sections on the form.",
                                    "The rule is applicable to all employees."
                            ]
                    }
            ],
            "subtext": "relevant, fitting",
            "synonyms": [
                    "relevant",
                    "fitting"
            ],
            "transcription": "əˈplɪkəbl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-025",
            "word": "appropriate",
            "emoji": "✅",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Suitable or proper in the circumstances.",
                            "examples": [
                                    "Wear appropriate clothing for a job interview.",
                                    "The teacher gave an appropriate answer."
                            ]
                    }
            ],
            "subtext": "suitable, fitting",
            "synonyms": [
                    "suitable",
                    "fitting"
            ],
            "transcription": "əˈprəʊpriət",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-027",
            "word": "assistant",
            "emoji": "🤝",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Denoting a person who helps or aids a senior worker.",
                            "examples": [
                                    "She works as an assistant manager.",
                                    "The assistant professor led the seminar."
                            ]
                    }
            ],
            "subtext": "deputy, supporting",
            "synonyms": [
                    "deputy",
                    "supporting"
            ],
            "transcription": "əˈsɪstənt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-028",
            "word": "associated",
            "emoji": "🔗",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Connected with something else.",
                            "examples": [
                                    "There are risks associated with mountain climbing.",
                                    "Smoking carries associated health risks."
                            ]
                    }
            ],
            "subtext": "linked, connected",
            "synonyms": [
                    "linked",
                    "connected"
            ],
            "transcription": "əˈsəʊʃieɪtɪd",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-029",
            "word": "best",
            "emoji": "🥇",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Of the most excellent or desirable type or quality.",
                            "examples": [
                                    "She received the best student award.",
                                    "This bistro serves the best pizza in town."
                            ]
                    }
            ],
            "subtext": "top, finest",
            "synonyms": [
                    "top",
                    "finest"
            ],
            "transcription": "best",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    },
    {
            "id": "A2-ADJ-WOR-031",
            "word": "capable",
            "emoji": "💪",
            "form": "adjective",
            "definitions": [
                    {
                            "text": "Having the ability, fitness, or quality necessary to do something.",
                            "examples": [
                                    "She is a capable and reliable assistant.",
                                    "He is capable of managing the project."
                            ]
                    }
            ],
            "subtext": "competent, skilled",
            "synonyms": [
                    "competent",
                    "skilled"
            ],
            "transcription": "ˈkeɪpəbl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "jobs",
            "domain": "WORK_SCHOOL",
            "subcategory": "Work",
            "pos_section": "Adjectives",
            "sub_subcategory": "Jobs_Careers"
    }
    ];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
