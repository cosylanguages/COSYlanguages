(function() {
    const lang = "en";
    const data = [
    {
        "word": "judicial",
        "form": "adjective",
        "transcription": "dʒuːˈdɪʃl",
        "emoji": "🏛️",
        "subtext": "judicial review / judicial independence",
        "definitions": [
            {
                "text": "Relating to or done by a court or judge.",
                "examples": [
                    "The Supreme Court granted judicial review to assess the constitutionality of the law."
                ]
            }
        ],
        "synonyms": [
            "court-ordered",
            "legal"
        ],
        "antonyms": [],
        "lang": "en",
        "level": "advanced",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Adjectives",
        "sub_subcategory": "Judicial_Process",
        "id": "C1-ADJ-LAW-001",
        "legacy_id": "C1-LAW-01"
    },
    {
        "word": "forensic",
        "form": "adjective",
        "transcription": "fəˈrensɪk",
        "emoji": "🔬",
        "subtext": "forensic evidence / forensic analysis",
        "definitions": [
            {
                "text": "Relating to or denoting the application of scientific methods to investigation of crime.",
                "examples": [
                    "Forensic analysis confirmed that the signature on the check was forged."
                ]
            }
        ],
        "synonyms": [
            "investigative",
            "analytical"
        ],
        "antonyms": [],
        "lang": "en",
        "level": "advanced",
        "level_code": "C1",
        "domain": "LAW",
        "subcategory": "Legal_System",
        "pos_section": "Adjectives",
        "sub_subcategory": "Judicial_Process",
        "id": "C1-ADJ-LAW-003",
        "legacy_id": "C1-LAW-03"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
