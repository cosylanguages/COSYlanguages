(function () {
  const data = [
  {
    "id": "A1-NOUN-SEL-032",
    "word": "list",
    "emoji": "📝",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "lists",
    "subtext": "shopping list",
    "definitions": [
      {
        "text": "A series of names or items written one after the other.",
        "examples": [
          "Make a shopping list."
        ]
      }
    ],
    "transcription": "lɪst",
    "lang": "en",
    "level": "starter",
    "theme": "describing",
    "sub_theme": null,
    "legacy_id": "A1-SELF-103",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Descriptive_Traits"
  },
  {
    "id": "A1-NOUN-SEL-033",
    "word": "something",
    "emoji": "📦",
    "form": "pronoun",
    "definitions": [
      {
        "text": "An object, event, or situation that is not named.",
        "examples": [
          "I want to tell you something."
        ]
      }
    ],
    "subtext": "related to describing things",
    "transcription": "ˈsəmθɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "describing",
    "sub_theme": null,
    "legacy_id": "A1-SELF-180",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Descriptive_Traits"
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
