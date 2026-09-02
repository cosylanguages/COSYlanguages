(function() {
    const lang = "en";
    const data = [
    {
        "id": "B1-ADJ-SCI-001",
        "word": "cheerful",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling or showing happiness.",
                "examples": [
                    "He is always cheerful, which lifts team morale."
                ]
            }
        ],
        "transcription": "\u02c8t\u0283\u026a\u0259fl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very cheerful / naturally cheerful / cheerful attitude"
        },
        "legacy_id": "B1-SCI-03",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-002",
        "word": "chronic",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Lasting a long time; persistent.",
                "examples": [
                    "She suffers from chronic back pain from desk work."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8kr\u0252n\u026ak | \ud83c\uddfa\ud83c\uddf8 \u02c8kr\u0251\u02d0n\u026ak",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "chronic illness / chronic pain / chronic stress"
        },
        "legacy_id": "B1-SCI-04",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-003",
        "word": "lonely",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling unhappy because you are without company.",
                "examples": [
                    "He felt lonely when he first moved to a new city."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8l\u0259\u028anli | \ud83c\uddfa\ud83c\uddf8 \u02c8lo\u028anli",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "feel lonely / very lonely / desperately lonely"
        },
        "legacy_id": "B1-SCI-06",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-004",
        "word": "mental",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the mind and emotions.",
                "examples": [
                    "Mental health support is essential in the workplace."
                ]
            }
        ],
        "transcription": "\u02c8m\u025bntl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "mental health / mental wellbeing / mental strength"
        },
        "legacy_id": "B1-SCI-07",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-005",
        "word": "mild",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not extreme; gentle.",
                "examples": [
                    "He has a mild form of work-related anxiety."
                ]
            }
        ],
        "transcription": "ma\u026ald",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very mild / relatively mild / a mild case"
        },
        "legacy_id": "B1-SCI-09",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-006",
        "word": "negative",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Not hopeful or constructive; bad.",
                "examples": [
                    "The feedback had a very negative impact on morale."
                ]
            }
        ],
        "transcription": "\u02c8n\u025b\u0261\u0259t\u026av",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very negative / extremely negative / a negative outcome"
        },
        "legacy_id": "B1-SCI-11",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-007",
        "word": "physical",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relating to the body rather than the mind.",
                "examples": [
                    "Physical exercise reduces stress significantly."
                ]
            }
        ],
        "transcription": "\u02c8f\u026az\u026akl",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "physical health / physical activity / physical condition"
        },
        "legacy_id": "B1-SCI-12",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-008",
        "word": "positive",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Feeling hopeful and confident; good.",
                "examples": [
                    "We had a very positive response from clients."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 \u02c8p\u0252z\u0259t\u026av | \ud83c\uddfa\ud83c\uddf8 \u02c8p\u0251\u02d0z\u0259t\u026av",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very positive / extremely positive / stay positive"
        },
        "legacy_id": "B1-SCI-13",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    },
    {
        "id": "B1-ADJ-SCI-009",
        "word": "severe",
        "lang": "en",
        "level": "intermediate",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "Very serious or extreme.",
                "examples": [
                    "The injury was quite severe and needed surgery."
                ]
            }
        ],
        "transcription": "\ud83c\uddec\ud83c\udde7 s\u026a\u02c8v\u026a\u0259 | \ud83c\uddfa\ud83c\uddf8 s\u026a\u02c8v\u026a\u0259r",
        "emoji": "\u2753",
        "_legacy": {
            "subtext": "very severe / extremely severe / severe consequences"
        },
        "legacy_id": "B1-SCI-19",
        "level_code": "B1",
        "domain": "Science",
        "subcategory": "Biology",
        "pos_section": "Adjectives",
        "sub_subcategory": "Medical_Health"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
