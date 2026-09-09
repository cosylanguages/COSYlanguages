(function () {
  const data = [
  {
    "id": "A2-VERB-SEL-045",
    "word": "belong",
    "emoji": "🏠",
    "form": "verb",
    "transcription": "🇬🇧 bɪˈlɒŋ | 🇺🇸 bɪˈlɑːŋ",
    "definitions": [
      {
        "text": "To be the property of someone.",
        "examples": [
          "This book belongs to me.",
          "Who does this bag belong to?"
        ]
      }
    ],
    "v2": "belonged",
    "v3": "belonged",
    "classification": "regular",
    "group": "regular",
    "subtext": "belong TO someone/something",
    "auxiliary": "have",
    "v4": "belonging",
    "lang": "en",
    "level": "elementary",
    "theme": "personal_identity",
    "sub_theme": null,
    "legacy_id": "A1-SELF-13",
    "level_code": "A2",
    "domain": "SELF",
    "subcategory": "Identity",
    "pos_section": "Verbs",
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
