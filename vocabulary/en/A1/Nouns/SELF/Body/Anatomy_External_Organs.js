(function() {
    const lang = "en";
    const data = [
    {
        "id": "A1-NOUN-SEL-01",
        "word": "arm",
        "emoji": "💪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "arms",
        "subtext": "broken arm, left arm",
        "definitions": [
            {
                "text": "The part of the body from the shoulder to the hand.",
                "examples": [
                    "She broke her arm."
                ]
            }
        ],
        "transcription": "ɑrm",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "limbs",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "armaz",
            "origin_meaning": "arm"
        },
        "legacy_id": "A1-SELF-01",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-02",
        "word": "back",
        "emoji": "🚶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "backs",
        "subtext": "back pain, lie on your back",
        "definitions": [
            {
                "text": "The rear part of the body, from neck to bottom.",
                "examples": [
                    "I have pain in my back."
                ]
            }
        ],
        "transcription": "bæk",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-02",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-03",
        "word": "body",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "bodies",
        "definitions": [
            {
                "text": "The whole physical form of a person or animal.",
                "examples": [
                    "Exercise is good for your body."
                ]
            }
        ],
        "subtext": "related to health body",
        "transcription": "ˈbɑdi",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-04",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-04",
        "word": "ear",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ears",
        "subtext": "left ear, right ear, earache",
        "definitions": [
            {
                "text": "The part of the body that you use for hearing.",
                "examples": [
                    "I have two ears."
                ]
            }
        ],
        "transcription": "ɪr",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "auzon",
            "origin_meaning": "ear"
        },
        "legacy_id": "A1-SELF-08",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-05",
        "word": "eye",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "eyes",
        "subtext": "blue eyes, close your eyes",
        "definitions": [
            {
                "text": "The part of your body that you use for seeing.",
                "examples": [
                    "Close your eyes.",
                    "She has blue eyes."
                ]
            }
        ],
        "transcription": "aɪ",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "face",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "augô",
            "origin_meaning": "eye"
        },
        "legacy_id": "A1-SELF-09",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-06",
        "word": "face",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "faces",
        "definitions": [
            {
                "text": "The front part of the head, with the eyes, nose, and mouth.",
                "examples": [
                    "She has a beautiful face."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "feɪs",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "face",
        "legacy_id": "A1-SELF-10",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-07",
        "word": "finger",
        "emoji": "☝️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "fingers",
        "definitions": [
            {
                "text": "One of the five long parts at the end of your hand.",
                "examples": [
                    "He pointed his finger at the map."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "ˈfɪŋgər",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-12",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-08",
        "word": "foot",
        "numberPlural": "2 foot",
        "answer": "two feet",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "feet",
        "definitions": [
            {
                "text": "The part of the body at the bottom of the leg.",
                "examples": [
                    "I have a pain in my foot.",
                    "She has small feet."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "fʊt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "limbs",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "fōts",
            "origin_meaning": "foot"
        },
        "legacy_id": "A1-SELF-13",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-09",
        "word": "hair",
        "emoji": "💇",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": null,
        "definitions": [
            {
                "text": "The mass of things like threads that grows on your head.",
                "examples": [
                    "He has short brown hair."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "heə(r)",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-14",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-10",
        "word": "hand",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hands",
        "subtext": "left hand, right hand, wash your hands",
        "definitions": [
            {
                "text": "The part of your arm that has fingers.",
                "examples": [
                    "Wash your hands before dinner.",
                    "Give me your hand."
                ]
            }
        ],
        "transcription": "hænd",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "limbs",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "handuz",
            "origin_meaning": "hand"
        },
        "legacy_id": "A1-SELF-15",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-11",
        "word": "head",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "heads",
        "subtext": "headache, shake your head",
        "definitions": [
            {
                "text": "The top part of your body that has your eyes, mouth, and brain.",
                "examples": [
                    "I have a hat on my head.",
                    "He nodded his head."
                ]
            }
        ],
        "transcription": "hɛd",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "face",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "haubidą",
            "origin_meaning": "head"
        },
        "legacy_id": "A1-SELF-16",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-12",
        "word": "heart",
        "emoji": "❤️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "hearts",
        "definitions": [
            {
                "text": "The organ in your chest that sends blood around your body.",
                "examples": [
                    "My heart is beating fast."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "hɑrt",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "organs",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "hertō"
        },
        "legacy_id": "A1-SELF-19",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-13",
        "word": "knee",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "knees",
        "definitions": [
            {
                "text": "The part in the middle of your leg where it bends.",
                "examples": [
                    "He hurt his knee playing football."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "ni",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-20",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-14",
        "word": "leg",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "legs",
        "subtext": "left leg, right leg, long legs",
        "definitions": [
            {
                "text": "The long part of the body that you use for walking.",
                "examples": [
                    "I have two legs."
                ]
            }
        ],
        "transcription": "lɛg",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "limbs",
        "legacy_id": "A1-SELF-21",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-15",
        "word": "mouth",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mouths",
        "subtext": "open your mouth, mouth shut",
        "definitions": [
            {
                "text": "The part of the face that you use for eating and speaking.",
                "examples": [
                    "Open your mouth."
                ]
            }
        ],
        "transcription": "maʊθ",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "face",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "munþaz",
            "origin_meaning": "mouth"
        },
        "legacy_id": "A1-SELF-23",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-16",
        "word": "neck",
        "emoji": "🦒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "necks",
        "definitions": [
            {
                "text": "The part of the body that connects the head to the shoulders.",
                "examples": [
                    "He wears a scarf around his neck."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "nɛk",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-24",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-17",
        "word": "nose",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "noses",
        "definitions": [
            {
                "text": "The part of the face that you use for smelling.",
                "examples": [
                    "He has a small nose."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "noʊz",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": "face",
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "nasō",
            "origin_meaning": "nose"
        },
        "legacy_id": "A1-SELF-25",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-18",
        "word": "shoulder",
        "emoji": "👤",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "shoulders",
        "definitions": [
            {
                "text": "The part of the body where the arm joins the trunk.",
                "examples": [
                    "She carried the bag on her shoulder."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "ˈʃoʊldər",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-28",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-19",
        "word": "stomach",
        "emoji": "🤰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "stomachs",
        "definitions": [
            {
                "text": "The part of your body where food goes after you eat it.",
                "examples": [
                    "I have a stomach ache."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "ˈstəmək",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-32",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-20",
        "word": "toe",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "toes",
        "definitions": [
            {
                "text": "One of the five parts at the end of your foot.",
                "examples": [
                    "She stubbed her toe on the table."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "toʊ",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "legacy_id": "A1-SELF-35",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    },
    {
        "id": "A1-NOUN-SEL-21",
        "word": "tooth",
        "emoji": "🦷",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "teeth",
        "numberPlural": "2 tooth",
        "answer": "two teeth",
        "definitions": [
            {
                "text": "One of the hard white objects in your mouth that you use for eating.",
                "examples": [
                    "Brush your teeth every day."
                ]
            }
        ],
        "subtext": "related to body parts",
        "transcription": "tuːθ",
        "lang": "en",
        "level": "starter",
        "theme": "body",
        "sub_theme": null,
        "etymology": {
            "origin_lang": "Proto-Germanic",
            "origin_word": "tanþs"
        },
        "legacy_id": "A1-SELF-36",
        "level_code": "A1",
        "domain": "SELF",
        "subcategory": "Body",
        "pos_section": "Nouns",
        "sub_subcategory": "Anatomy_External_Organs"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
