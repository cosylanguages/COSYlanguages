(function () {
  const data = [
  {
    "id": "A1-ADJ-SEL-187",
    "word": "fat",
    "emoji": "🍔",
    "form": "adjective",
    "subtext": "a fat cat",
    "synonyms": [
      "overweight",
      "gain weight"
    ],
    "definitions": [
      {
        "text": "Having a lot of extra flesh on your body.",
        "examples": [
          "The cat is fat because it eats a lot."
        ]
      }
    ],
    "comparative": "fatter",
    "superlative": "the fattest",
    "transcription": "fæt",
    "lang": "en",
    "level": "starter",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "thin"
    ],
    "legacy_id": "A1-SELF-11",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A1-ADJ-SEL-188",
    "word": "straight",
    "emoji": "📏",
    "form": "adjective",
    "subtext": "straight hair / long straight hair",
    "synonyms": [
      "not curly"
    ],
    "definitions": [
      {
        "text": "Not curving or bending.",
        "examples": [
          "He has straight black hair."
        ]
      }
    ],
    "comparative": "straighter",
    "superlative": "the straightest",
    "transcription": "streɪt",
    "lang": "en",
    "level": "starter",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "curly"
    ],
    "legacy_id": "A1-SELF-33",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A1-ADJ-SEL-189",
    "word": "thin",
    "emoji": "🥬",
    "form": "adjective",
    "subtext": "he is thin / thin legs",
    "synonyms": [
      "slim",
      "skinny"
    ],
    "definitions": [
      {
        "text": "Having very little extra flesh on your body.",
        "examples": [
          "He is very tall and thin."
        ]
      }
    ],
    "comparative": "thinner",
    "superlative": "the thinnest",
    "transcription": "θɪn",
    "lang": "en",
    "level": "starter",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "thick"
    ],
    "legacy_id": "A1-SELF-34",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Body",
    "pos_section": "Adjectives",
    "sub_subcategory": "Body_Parts"
  },
  {
    "id": "A1-ADJ-SEL-190",
    "word": "ugly",
    "form": "adjective",
    "subtext": "ugly building / ugly duckling",
    "synonyms": [
      "unattractive"
    ],
    "definitions": [
      {
        "text": "Unpleasant to look at.",
        "examples": [
          "It was an ugly building."
        ]
      }
    ],
    "comparative": "uglier",
    "superlative": "the ugliest",
    "emoji": "👹",
    "transcription": "ˈəgli",
    "lang": "en",
    "level": "starter",
    "theme": "body",
    "sub_theme": null,
    "antonyms": [
      "beautiful"
    ],
    "legacy_id": "A1-SELF-37",
    "level_code": "A1",
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
