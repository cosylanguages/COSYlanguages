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
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
