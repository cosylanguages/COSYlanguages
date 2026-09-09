(function () {
  const data = [
  {
    "id": "A2-ADJ-SEL-146",
    "word": "allergic",
    "emoji": "🤧",
    "form": "adjective",
    "definitions": [
      {
        "text": "Caused by or relating to an allergy.",
        "examples": [
          "He is allergic to peanuts and cat fur.",
          "She suffered an allergic reaction."
        ]
      }
    ],
    "subtext": "sensitive",
    "synonyms": [
      "sensitive"
    ],
    "transcription": "əˈlɜːdʒɪk",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-ADJ-SEL-158",
    "word": "beneficial",
    "emoji": "🌟",
    "form": "adjective",
    "definitions": [
      {
        "text": "Favorable or advantageous; resulting in good.",
        "examples": [
          "Fresh air is beneficial for health.",
          "Small classes are beneficial for learning."
        ]
      }
    ],
    "subtext": "helpful, useful",
    "synonyms": [
      "helpful",
      "useful"
    ],
    "transcription": "ˌbenɪˈfɪʃl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-ADJ-SEL-160",
    "word": "blind",
    "emoji": "🦯",
    "form": "adjective",
    "definitions": [
      {
        "text": "Unable to see because of injury, disease, or a congenital condition.",
        "examples": [
          "Guide dogs help blind people navigate roads.",
          "The turn was a blind corner."
        ]
      }
    ],
    "subtext": "sightless",
    "synonyms": [
      "sightless"
    ],
    "transcription": "blaɪnd",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-ADJ-SEL-162",
    "word": "bloody",
    "emoji": "🩸",
    "form": "adjective",
    "definitions": [
      {
        "text": "Covered with or containing blood.",
        "examples": [
          "The boxer had a bloody nose after the fight.",
          "Wash the bloody bandage carefully."
        ]
      }
    ],
    "subtext": "bleeding",
    "synonyms": [
      "bleeding"
    ],
    "transcription": "ˈblʌdi",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "identity",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-ADJ-SEL-185",
    "word": "blonde",
    "form": "adjective",
    "subtext": "blonde hair / a blonde woman",
    "synonyms": [
      "fair-haired"
    ],
    "definitions": [
      {
        "text": "Pale gold in color.",
        "examples": [
          "She has blonde hair."
        ]
      }
    ],
    "comparative": "blonder",
    "superlative": "the blondest",
    "emoji": "👱‍♀️",
    "transcription": "blɑnd",
    "lang": "en",
    "level": "elementary",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "brunette"
    ],
    "legacy_id": "A1-SELF-03",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A2-ADJ-SEL-186",
    "word": "curly",
    "emoji": "🌀",
    "form": "adjective",
    "subtext": "curly hair / short curly hair",
    "synonyms": [
      "wavy"
    ],
    "definitions": [
      {
        "text": "Having curls or a curved shape.",
        "examples": [
          "She has curly brown hair."
        ]
      }
    ],
    "comparative": "curlier",
    "superlative": "the curliest",
    "transcription": "ˈkərli",
    "lang": "en",
    "level": "elementary",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "straight"
    ],
    "legacy_id": "A1-SELF-07",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
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
