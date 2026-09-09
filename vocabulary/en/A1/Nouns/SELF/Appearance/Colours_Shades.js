(function () {
  const data = [
  {
    "id": "A1-NOUN-SEL-031",
    "word": "color",
    "emoji": "🎨",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "Red, blue, green, etc. (American spelling)",
        "examples": [
          "What is your favorite color?"
        ]
      }
    ],
    "subtext": "visual property",
    "transcription": "ˈkələr",
    "lang": "en",
    "level": "starter",
    "theme": "colours",
    "sub_theme": null,
    "legacy_id": "A1-SELF-39",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Appearance",
    "pos_section": "Nouns",
    "sub_subcategory": "Colours_Shades"
  },
  {
    "id": "A1-NEW-120",
    "word": "gray",
    "emoji": "📝",
    "form": "adjective",
    "definitions": [
      "Basic A1 English adjective: 'gray'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Adjectives",
    "sub_subcategory": "General",
    "theme": "colors"
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
