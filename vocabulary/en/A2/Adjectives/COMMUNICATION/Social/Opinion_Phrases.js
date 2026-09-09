(function () {
  const data = [
  {
    "id": "A2-ADJ-COM-015",
    "word": "possible",
    "emoji": "✅",
    "form": "adjective",
    "transcription": "🇬🇧 ˈpɒsəbl | 🇺🇸 ˈpɑːsəbl",
    "definitions": [
      {
        "text": "Able to be done or achieved.",
        "examples": [
          "Is it possible to come tomorrow?",
          "Everything is possible if you try."
        ]
      }
    ],
    "comparative": "more possible",
    "superlative": "the most possible",
    "subtext": "as soon as possible, if possible",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "impossible"
    ],
    "legacy_id": "A1-COMM-68",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Adjectives",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A2-ADJ-COM-017",
    "word": "unsure",
    "emoji": "❓",
    "form": "adjective",
    "subtext": "feel unsure / unsure about",
    "synonyms": [
      "uncertain"
    ],
    "definitions": [
      {
        "text": "Not certain about something.",
        "examples": [
          "I am unsure about what to do next."
        ]
      }
    ],
    "comparative": "more unsure",
    "superlative": "the most unsure",
    "transcription": "ənˈʃʊr",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "sure"
    ],
    "legacy_id": "A1-COMM-106",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Adjectives",
    "sub_subcategory": "Opinion_Phrases"
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
