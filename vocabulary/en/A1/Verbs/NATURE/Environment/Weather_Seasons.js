(function () {
  const data = [
  {
    "id": "A1-VERB-NAT-003",
    "word": "fall",
    "emoji": "🍂",
    "subtext": "fall down / fall off / fall in love / fall asleep",
    "form": "verb",
    "synonyms": [
      "🇬🇧 autumn"
    ],
    "definitions": [
      {
        "text": "To move down toward the ground.",
        "examples": [
          "Leaves fall in autumn.",
          "Be careful, don't fall."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "fell",
    "v3": "fallen",
    "group": "irregular",
    "transcription": "fɔl",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "antonyms": [
      "rise"
    ],
    "legacy_id": "A1-NAT-12",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Verbs",
    "sub_subcategory": "Weather_Seasons"
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
