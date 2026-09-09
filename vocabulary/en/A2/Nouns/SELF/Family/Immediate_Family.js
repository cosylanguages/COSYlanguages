(function () {
  const data = [
  {
    "id": "A2-NOUN-SEL-115",
    "word": "twin",
    "emoji": "👯",
    "form": "noun",
    "transcription": "twɪn",
    "definitions": [
      {
        "text": "One of two children born at the same birth.",
        "examples": [
          "She has a twin sister.",
          "The twins look almost identical."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Family",
    "pos_section": "Nouns",
    "sub_subcategory": "Immediate_Family"
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
