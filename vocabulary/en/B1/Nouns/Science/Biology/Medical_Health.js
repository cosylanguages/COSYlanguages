(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-NOUN-SCI-01",
        "word": "anxiety",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A feeling of worry, nervousness and unease about uncertain outcomes.",
                "examples": [
                    "He suffers from anxiety before presentations."
                ]
            }
        ],
        "transcription": "æŋˈzaɪəti",
        "emoji": "😟",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "social anxiety, anxiety attack"
        },
        "legacy_id": "B1-SCI-01",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-02",
        "word": "burnout",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A state of exhaustion caused by too much stress over a long time.",
                "examples": [
                    "She suffered from burnout after working without a break.",
                    "Burnout is common in high-pressure jobs.",
                    "She took sick leave after suffering from burnout."
                ]
            }
        ],
        "transcription": "ˈbɜːnaʊt",
        "emoji": "🔋",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "emotional exhaustion, work stress"
        },
        "legacy_id": "B1-SCI-02",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-03",
        "word": "depression",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A medical condition causing persistent sadness and lack of energy.",
                "examples": [
                    "Depression affects millions of working adults."
                ]
            }
        ],
        "transcription": "dɪˈprɛʃn",
        "emoji": "😔",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "clinical depression, suffer from depression"
        },
        "legacy_id": "B1-SCI-05",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-04",
        "word": "mental health",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun phrase",
        "definitions": [
            {
                "text": "A person's psychological and emotional state.",
                "examples": [
                    "Companies are taking mental health more seriously.",
                    "Stress can affect your mental health."
                ]
            }
        ],
        "transcription": "ˈmɛntl hɛlθ",
        "emoji": "🧠",
        "_legacy": {
            "plural": null,
            "countability": "uncountable",
            "subtext": "mental health awareness, psychological state"
        },
        "legacy_id": "B1-SCI-08",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-05",
        "word": "mindfulness",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "The practice of focusing on the present moment to reduce stress.",
                "examples": [
                    "He practises mindfulness for ten minutes every morning."
                ]
            }
        ],
        "transcription": "ˈmaɪndflnəs",
        "emoji": "🧘",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "practise mindfulness, mindfulness meditation"
        },
        "legacy_id": "B1-SCI-10",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-06",
        "word": "prevention",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Action taken to stop something bad from happening.",
                "examples": [
                    "Prevention is better than cure.",
                    "The focus is on the prevention of disease."
                ]
            }
        ],
        "transcription": "prɪˈvɛnʃn",
        "emoji": "🛡️",
        "_legacy": {
            "classification": "regular",
            "plural": "preventions",
            "countability": "uncountable",
            "subtext": "prevention is better than cure, crime prevention"
        },
        "legacy_id": "B1-SCI-14",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-07",
        "word": "resilience",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "The ability to recover quickly from difficult situations.",
                "examples": [
                    "Resilience is one of the most valuable qualities in adult life."
                ]
            }
        ],
        "transcription": "rɪˈzɪliəns",
        "emoji": "🌱",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "build resilience, emotional resilience"
        },
        "legacy_id": "B1-SCI-17",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-08",
        "word": "self-care",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Activities done deliberately to maintain physical or mental health.",
                "examples": [
                    "Self-care is not a luxury — it is a necessity."
                ]
            }
        ],
        "transcription": "🇬🇧 sɛlf ˈkeə | 🇺🇸 sɛlf ˈkeər",
        "emoji": "🛁",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "self-care routine, importance of self-care"
        },
        "legacy_id": "B1-SCI-18",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-09",
        "word": "symptoms",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Signs that suggest a person has a particular illness.",
                "examples": [
                    "The symptoms started last week.",
                    "If you have any symptoms, stay at home."
                ]
            }
        ],
        "transcription": "ˈsɪmptəmz",
        "emoji": "🤒",
        "_legacy": {
            "classification": "regular",
            "plural": "symptoms",
            "countability": "countable",
            "subtext": "flu symptoms, show symptoms"
        },
        "legacy_id": "B1-SCI-20",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-10",
        "word": "therapy",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "Treatment for mental or physical problems, often through talking.",
                "examples": [
                    "He goes to therapy once a week.",
                    "Therapy helped her cope with anxiety.",
                    "She started therapy after losing her job."
                ]
            }
        ],
        "transcription": "ˈθɛrəpi",
        "emoji": "🗣️",
        "_legacy": {
            "classification": "regular",
            "plural": "therapies",
            "countability": "countable",
            "subtext": "speech therapy, cognitive behavioral therapy"
        },
        "legacy_id": "B1-SCI-21",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-11",
        "word": "tooth",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [],
        "transcription": "tuːθ",
        "emoji": "🦷",
        "_legacy": {
            "numberPlural": "32 tooth",
            "answer": "thirty-two teeth",
            "classification": "regular",
            "plural": "teeth",
            "countability": "countable",
            "etymology": {
                "origin_lang": "Proto-Germanic",
                "origin_word": "tanþs"
            }
        },
        "legacy_id": "B1-SCI-22",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-NOUN-SCI-12",
        "word": "wellbeing",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "noun",
        "definitions": [
            {
                "text": "A general feeling of being comfortable, healthy and happy.",
                "examples": [
                    "Exercise is important for mental wellbeing.",
                    "The company cares about employee wellbeing.",
                    "The company has introduced wellbeing initiatives."
                ]
            }
        ],
        "transcription": "ˌwɛlˈbiːɪŋ",
        "emoji": "🧘",
        "_legacy": {
            "classification": "regular",
            "plural": null,
            "countability": "uncountable",
            "subtext": "mental wellbeing, emotional wellbeing"
        },
        "legacy_id": "B1-SCI-23",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Nouns",
        "sub_subcategory": "Medical_Health"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
