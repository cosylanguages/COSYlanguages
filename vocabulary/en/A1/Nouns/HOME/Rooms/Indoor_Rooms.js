(function () {
  const data = [
  {
    "id": "A1-NOUN-HOM-074",
    "word": "office",
    "emoji": "🏢",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "offices",
    "subtext": "workplace, big office, work in an office",
    "definitions": [
      {
        "text": "A room or building where people work.",
        "examples": [
          "He is in the office."
        ]
      }
    ],
    "transcription": "ˈɔfəs",
    "lang": "en",
    "level": "starter",
    "theme": "rooms_indoor_spaces",
    "sub_theme": null,
    "legacy_id": "A1-HOME-02",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A1-NOUN-HOM-127",
    "word": "ceiling",
    "form": "noun",
    "transcription": "ˈsiːlɪŋ",
    "emoji": "🏠",
    "definitions": [
      {
        "text": "The top inside surface of a room.",
        "examples": [
          "The ceiling is painted white.",
          "A lamp hangs from the ceiling."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms",
    "theme": "house_furniture"
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
