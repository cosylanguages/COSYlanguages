(function () {
  const data = [
  {
    "id": "A1-VERB-TRA-003",
    "word": "there",
    "emoji": "👉",
    "form": "adverb",
    "definitions": [
      {
        "text": "In, at, or to that place.",
        "examples": [
          "The book is over there."
        ]
      }
    ],
    "subtext": "related to prepositions place",
    "transcription": "ðɛr",
    "lang": "en",
    "level": "starter",
    "theme": "prepositions_place",
    "sub_theme": null,
    "legacy_id": "A1-TRV-112",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Verbs",
    "sub_subcategory": "Position_Markers"
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
