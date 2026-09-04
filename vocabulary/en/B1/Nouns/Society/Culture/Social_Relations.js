(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-NOUN-SOC-015",
        "word": "democracy",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [],
        "transcription": "🇬🇧 dɪˈmɒkrəsi | 🇺🇸 dɪˈmɑːkrəsi",
        "emoji": "🗳️",
        "_legacy": {
            "classification": "regular",
            "plural": "democracies",
            "countability": "countable"
        },
        "legacy_id": "B1-NOUN-SOC-016",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-NOUN-SOC-022",
        "word": "inequality",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "An unfair situation in which some people have more than others.",
                "examples": [
                    "Income inequality is growing in many countries.",
                    "We must address the inequality in our schools.",
                    "Income inequality has grown in recent decades."
                ]
            }
        ],
        "transcription": "🇬🇧 ˌɪnɪˈkwɒlɪti | 🇺🇸 ˌɪnɪˈkwɑːlɪti",
        "emoji": "🚫⚖️",
        "_legacy": {
            "classification": "regular",
            "plural": "inequalities",
            "countability": "uncountable",
            "subtext": "income inequality, social inequality",
            "antonyms": [
                "equality"
            ]
        },
        "legacy_id": "B1-NOUN-SOC-023",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-NOUN-SOC-024",
        "word": "milkshake",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A cold drink made of milk, ice cream, and flavorings.",
                "examples": [
                    "I'll have a chocolate milkshake.",
                    "The milkshake is very thick."
                ]
            },
            {
                "text": "This is a sweet and thick drink.",
                "examples": [
                    "Milkshakes are popular in American diners."
                ]
            }
        ],
        "transcription": "ˈmɪlkʃeɪk",
        "emoji": "🥤",
        "_legacy": {
            "classification": "regular",
            "plural": "milkshakes",
            "countability": "countable"
        },
        "legacy_id": "B1-NOUN-SOC-025",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-NOUN-SOC-031",
        "word": "remote work",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "Working from a location other than the office, usually home.",
                "examples": [
                    "Remote work has become normal for many professionals."
                ]
            }
        ],
        "transcription": "🇬🇧 rɪˈməʊt wɜːk | 🇺🇸 rɪˈmoʊt wɜːk",
        "emoji": "💻",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "remote work policy, shift to remote work"
        },
        "legacy_id": "B1-NOUN-SOC-032",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "Social_Relations"
    },
    {
        "id": "B1-NOUN-SOC-034",
        "word": "sushi",
        "lang": "en",
        "level": "intermediate",
        "theme": "social",
        "form": "noun",
        "definitions": [
            {
                "text": "A Japanese dish with rice and raw fish.",
                "examples": [
                    "I like eating sushi with soy sauce.",
                    "We are going to a sushi restaurant."
                ]
            },
            {
                "text": "This food is originally from Japan.",
                "examples": [
                    "Sushi is often served with ginger and wasabi."
                ]
            }
        ],
        "transcription": "ˈsuːʃi",
        "emoji": "🍣",
        "_legacy": {
            "classification": "regular",
            "plural": "sushi",
            "countability": "uncountable"
        },
        "legacy_id": "B1-NOUN-SOC-035",
        "level_code": "B1",
        "domain": "Society",
        "subcategory": "Culture",
        "pos_section": "Nouns",
        "sub_subcategory": "Social_Relations"
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
