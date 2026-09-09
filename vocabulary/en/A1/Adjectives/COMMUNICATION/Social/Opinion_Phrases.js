(function () {
  const data = [
  {
    "id": "A1-ADJ-COM-016",
    "word": "sure",
    "emoji": "✅",
    "form": "adjective",
    "definitions": [
      {
        "text": "Certain; having no doubt.",
        "examples": [
          "I am sure about the answer.",
          "Are you sure?"
        ]
      }
    ],
    "subtext": "make sure / pretty sure",
    "synonyms": [
      "certain"
    ],
    "comparative": "surer",
    "superlative": "the surest",
    "transcription": "ʃʊr",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "unsure"
    ],
    "legacy_id": "A1-COMM-90",
    "level_code": "A1",
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
