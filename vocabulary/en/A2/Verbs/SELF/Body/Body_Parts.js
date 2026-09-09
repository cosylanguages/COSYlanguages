(function () {
  const data = [
  {
    "id": "A2-VERB-SEL-095",
    "word": "bend",
    "emoji": "🧘",
    "form": "verb",
    "definitions": [
      {
        "text": "To shape or force something straight into a curve or angle.",
        "examples": [
          "Bend your knees when lifting heavy boxes.",
          "The river bends sharply to the east."
        ]
      }
    ],
    "subtext": "flex, curve",
    "synonyms": [
      "flex",
      "curve"
    ],
    "transcription": "bend",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-009",
    "word": "breathe",
    "emoji": "🫁",
    "form": "verb",
    "definitions": [
      {
        "text": "To take air into your lungs and send it out again.",
        "examples": [
          "Breathe deeply."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "breathed",
    "v3": "breathed",
    "group": "regular",
    "subtext": "breathe",
    "synonyms": [
      "inhale",
      "exhale"
    ],
    "transcription": "brið",
    "lang": "en",
    "level": "elementary",
    "theme": "body",
    "sub_theme": null,
    "legacy_id": "A1-SELF-05",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-019",
    "word": "yawn",
    "emoji": "🥱",
    "form": "verb",
    "definitions": [
      {
        "text": "To open your mouth wide and take a deep breath because you are tired.",
        "examples": [
          "She yawned during the meeting."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "yawned",
    "v3": "yawned",
    "group": "regular",
    "subtext": "yawn",
    "synonyms": [
      "feel sleepy"
    ],
    "transcription": "jɔn",
    "lang": "en",
    "level": "elementary",
    "theme": "body",
    "sub_theme": null,
    "legacy_id": "A1-SELF-38",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-054",
    "word": "bleed",
    "emoji": "🩸",
    "form": "verb",
    "transcription": "bliːd",
    "definitions": [
      {
        "text": "Lose blood from the body.",
        "examples": [
          "Clean the wound if it bleeds.",
          "His nose started to bleed."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-055",
    "word": "blink",
    "emoji": "👁️",
    "form": "verb",
    "transcription": "blɪŋk",
    "definitions": [
      {
        "text": "Open and close eyes quickly.",
        "examples": [
          "Blink if you can hear me.",
          "She blinked in the bright sunlight."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-056",
    "word": "chew",
    "emoji": "👄",
    "form": "verb",
    "transcription": "ʧuː",
    "definitions": [
      {
        "text": "Bite and grind food in the mouth.",
        "examples": [
          "Chew your food slowly before swallowing.",
          "He was chewing gum during the walk."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-057",
    "word": "nod",
    "emoji": "🧑‍🦲",
    "form": "verb",
    "transcription": "nɑːd",
    "definitions": [
      {
        "text": "Lower and raise the head to indicate agreement.",
        "examples": [
          "She nod her head to say yes.",
          "He nodded in agreement."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-VERB-SEL-058",
    "word": "swallow",
    "emoji": "🥤",
    "form": "verb",
    "transcription": "ˈswɑːloʊ",
    "definitions": [
      {
        "text": "Cause food or drink to pass down the throat.",
        "examples": [
          "Swallow your medicine with water.",
          "He swallowed his food quickly."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Verbs",
    "sub_subcategory": "Body_Parts"
  }
];

  if (typeof window !== "undefined") {
    if (!window.vocabularyData) {
      window.vocabularyData = {};
    }
    if (!window.vocabularyData.en) {
      window.vocabularyData.en = [];
    }
    window.vocabularyData.en.push(...data);
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
})();
