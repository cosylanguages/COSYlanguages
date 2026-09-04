(function() {
    const lang = "en";
    const data = [
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
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
