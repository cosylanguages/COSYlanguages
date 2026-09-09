(function () {
  const data = [
  {
    "id": "A1-VERB-NAT-001",
    "word": "climb",
    "emoji": "🧗",
    "subtext": "climb a mountain / climb a hill / climb stairs / climb up",
    "form": "verb",
    "definitions": [
      {
        "text": "To go up something using your hands and feet.",
        "examples": [
          "We climbed the hill to see the view.",
          "The cat climbed the tree."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "climbed",
    "v3": "climbed",
    "group": "regular",
    "transcription": "klaɪm",
    "auxiliary": "have",
    "v4": "climbing",
    "lang": "en",
    "level": "starter",
    "theme": "nature",
    "sub_theme": null,
    "antonyms": [
      "descend"
    ],
    "legacy_id": "A1-NAT-03",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Verbs",
    "sub_subcategory": "Natural_World"
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
