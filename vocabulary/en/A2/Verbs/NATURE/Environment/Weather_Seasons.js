(function () {
  const data = [
  {
    "id": "A2-VERB-NAT-022",
    "word": "blow",
    "emoji": "💨",
    "form": "verb",
    "definitions": [
      {
        "text": "To move creating an air current (of wind).",
        "examples": [
          "Strong wind blew autumn leaves across the lawn.",
          "Blow out the birthday candles."
        ]
      }
    ],
    "subtext": "puff, gust",
    "synonyms": [
      "puff",
      "gust"
    ],
    "transcription": "bləʊ",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "nature",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Verbs",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A2-VERB-NAT-005",
    "word": "rise",
    "emoji": "🌅",
    "subtext": "rise up / sun rise / price rise",
    "form": "verb",
    "definitions": [
      {
        "text": "To move upwards; to increase in amount or level.",
        "examples": [
          "The sun rises in the east.",
          "Prices are rising every year."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "rose",
    "v3": "risen",
    "group": "irregular",
    "transcription": "raɪz",
    "lang": "en",
    "level": "elementary",
    "theme": "seasons_climate",
    "sub_theme": null,
    "antonyms": [
      "fall"
    ],
    "legacy_id": "A1-NAT-24",
    "level_code": "A2",
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
