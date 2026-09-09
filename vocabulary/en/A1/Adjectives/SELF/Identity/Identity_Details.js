(function () {
  const data = [
  {
    "id": "A1-ADJ-SEL-223",
    "word": "own",
    "emoji": "👤",
    "form": "adjective",
    "definitions": [
      {
        "text": "Belonging to or done by a particular person.",
        "examples": [
          "I have my own room."
        ]
      }
    ],
    "subtext": "on my own / my own car",
    "synonyms": [
      "personal"
    ],
    "comparative": null,
    "superlative": null,
    "transcription": "oʊn",
    "lang": "en",
    "level": "starter",
    "theme": "personal_identity",
    "sub_theme": null,
    "antonyms": [
      "shared"
    ],
    "legacy_id": "A1-SELF-47",
    "level_code": "A1",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Adjectives",
    "sub_subcategory": "Identity_Details"
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
