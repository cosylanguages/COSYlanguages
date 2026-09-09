(function () {
  const data = [
  {
    "id": "A2-OTH-TRA-072",
    "word": "around",
    "form": "preposition",
    "definitions": [
      {
        "text": "In a circle or in various places.",
        "examples": [
          "We sat around the table.",
          "Walk around the city."
        ]
      }
    ],
    "emoji": "⭕",
    "transcription": "əˈraʊnd",
    "subtext": "around",
    "lang": "en",
    "level": "elementary",
    "theme": "prepositions_place",
    "sub_theme": null,
    "legacy_id": "A1-TRV-71",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Other_POS",
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
