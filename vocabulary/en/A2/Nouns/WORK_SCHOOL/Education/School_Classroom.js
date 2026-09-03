(function() {
    const lang = "en";
    const data = [
    {
            "word": "certificate",
            "level": "elementary",
            "theme": "school",
            "emoji": "📜",
            "form": "noun",
            "classification": "regular",
            "countability": "countable",
            "plural": "certificates",
            "definitions": [
                    {
                            "text": "An official document that gives information or proves something.",
                            "examples": [
                                    "I received a certificate for completing the course.",
                                    "You need a medical certificate if you are ill."
                            ]
                    }
            ],
            "subtext": "official document, diploma",
            "synonyms": [
                    "official document",
                    "diploma"
            ],
            "transcription": "sərˈtɪfɪkət",
            "language": "en",
            "lang": "en",
            "id": "A2-NOUN-WOR-001",
            "legacy_id": "A2-WORK-03",
            "level_code": "A2",
            "domain": "WORK_SCHOOL",
            "subcategory": "Education",
            "pos_section": "Nouns",
            "sub_subcategory": "School_Classroom"
    },
    {
            "word": "degree",
            "level": "elementary",
            "theme": "school",
            "emoji": "🎓",
            "form": "noun",
            "classification": "regular",
            "definitions": [
                    {
                            "text": "A course of study at a college or university, or the qualification given to a student after completing it.",
                            "examples": [
                                    "She has a degree in history.",
                                    "I want to get a university degree."
                            ]
                    }
            ],
            "subtext": "university qualification",
            "synonyms": [
                    "university qualification"
            ],
            "countability": "countable",
            "transcription": "dɪˈɡriː",
            "language": "en",
            "lang": "en",
            "id": "A2-NOUN-WOR-002",
            "legacy_id": "A2-WORK-06",
            "level_code": "A2",
            "domain": "WORK_SCHOOL",
            "subcategory": "Education",
            "pos_section": "Nouns",
            "sub_subcategory": "School_Classroom"
    },
    {
            "word": "grade",
            "level": "elementary",
            "theme": "school",
            "emoji": "🅰️",
            "form": "noun",
            "classification": "regular",
            "countability": "countable",
            "plural": "grades",
            "definitions": [
                    {
                            "text": "A number or letter that shows how good your work is.",
                            "examples": [
                                    "He got a high grade in the exam.",
                                    "What is your average grade this semester?"
                            ]
                    }
            ],
            "subtext": "mark, score",
            "synonyms": [
                    "mark",
                    "score"
            ],
            "transcription": "ɡreɪd",
            "language": "en",
            "lang": "en",
            "id": "A2-NOUN-WOR-003",
            "legacy_id": "A2-WORK-08",
            "level_code": "A2",
            "domain": "WORK_SCHOOL",
            "subcategory": "Education",
            "pos_section": "Nouns",
            "sub_subcategory": "School_Classroom"
    },
    {
            "id": "A2-NOUN-WOR-067",
            "word": "subject",
            "emoji": "📖",
            "form": "noun",
            "definitions": [
                    {
                            "text": "An area of knowledge studied in a school or college.",
                            "examples": [
                                    "Maths is my favorite subject.",
                                    "She teaches three different subjects."
                            ]
                    }
            ],
            "subtext": "topic",
            "synonyms": [
                    "topic"
            ],
            "transcription": "ˈsʌbdʒɪkt",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "school",
            "domain": "WORK_SCHOOL",
            "subcategory": "Education",
            "pos_section": "Nouns",
            "sub_subcategory": "School_Classroom"
    },
    {
            "id": "A2-NOUN-WOR-068",
            "word": "timetable",
            "emoji": "🗓️",
            "form": "noun",
            "definitions": [
                    {
                            "text": "A chart showing the times when classes take place.",
                            "examples": [
                                    "Check your class timetable for room numbers.",
                                    "The timetable changed this term."
                            ]
                    }
            ],
            "subtext": "schedule",
            "synonyms": [
                    "schedule"
            ],
            "transcription": "ˈtaɪmteɪbl",
            "lang": "en",
            "language": "en",
            "level": "elementary",
            "level_code": "A2",
            "theme": "school",
            "domain": "WORK_SCHOOL",
            "subcategory": "Education",
            "pos_section": "Nouns",
            "sub_subcategory": "School_Classroom"
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
