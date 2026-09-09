(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-010",
    "word": "doll",
    "emoji": "🪆",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "dolls",
    "definitions": [
      {
        "text": "A toy that looks like a small person or baby.",
        "examples": [
          "She likes playing with her dolls."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "dɑl",
    "lang": "en",
    "level": "starter",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-17",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A1-NOUN-COM-014",
    "word": "toy",
    "emoji": "🧸",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "toys",
    "definitions": [
      {
        "text": "An object for children to play with.",
        "examples": [
          "The child is playing with a toy car."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "tɔɪ",
    "lang": "en",
    "level": "starter",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-65",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
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
