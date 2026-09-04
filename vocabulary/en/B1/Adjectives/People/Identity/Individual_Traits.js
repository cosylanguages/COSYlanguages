(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-PEO-017",
        "word": "equal",
        "lang": "en",
        "level": "intermediate",
        "theme": "people",
        "form": "adjective",
        "definitions": [
            {
                "text": "The same in status, rights or opportunities.",
                "examples": [
                    "The company promotes equal pay for equal work."
                ]
            }
        ],
        "transcription": "ˈiːkwəl",
        "emoji": "❓",
        "_legacy": {
            "subtext": "equal pay / equal rights / completely equal"
        },
        "legacy_id": "B1-ADJ-PEO-012",
        "level_code": "B1",
        "domain": "People",
        "subcategory": "Identity",
        "pos_section": "Adjectives",
        "sub_subcategory": "Individual_Traits"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
