(function () {
  const data = [
  {
    "id": "A2-VERB-HOM-001",
    "word": "renovate",
    "emoji": "🔨",
    "form": "verb",
    "definitions": [
      {
        "text": "To restore a building to a good state of repair.",
        "examples": [
          "They bought an old house and renovated it.",
          "The museum was renovated last year."
        ]
      }
    ],
    "subtext": "restore, remodel",
    "synonyms": [
      "restore",
      "remodel"
    ],
    "transcription": "ˈrenəveɪt",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Buildings",
    "pos_section": "Verbs",
    "sub_subcategory": "Housing_Types"
  },
  {
    "id": "A2-VERB-HOM-001",
    "word": "rent",
    "emoji": "🏠",
    "subtext": "rent a flat / rent a property / rent out a room",
    "form": "verb",
    "definitions": [
      {
        "text": "To pay money to use property belonging to someone else.",
        "examples": [
          "They rent a two-bedroom flat near the city centre."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "rented",
    "v3": "rented",
    "group": "regular",
    "transcription": "rɛnt",
    "lang": "en",
    "level": "elementary",
    "theme": "types_of_accommodation",
    "sub_theme": null,
    "antonyms": [
      "own"
    ],
    "legacy_id": "A1-HOME-01",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Buildings",
    "pos_section": "Verbs",
    "sub_subcategory": "Housing_Types"
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
