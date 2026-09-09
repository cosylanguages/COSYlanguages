(function () {
  const data = [
  {
    "id": "A1-NOUN-TIM-016",
    "word": "date",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "dates",
    "subtext": "today's date, save the date",
    "definitions": [
      {
        "text": "A particular day of the month or year.",
        "examples": [
          "What is the date today?"
        ]
      }
    ],
    "transcription": "deɪt",
    "lang": "en",
    "level": "starter",
    "theme": "dates_years",
    "sub_theme": null,
    "legacy_id": "A1-NUM-27",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Dates_Years"
  },
  {
    "id": "A1-NOUN-TIM-017",
    "word": "month",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "months",
    "definitions": [
      {
        "text": "One of the twelve periods that a year is divided into.",
        "examples": [
          "January is the first month of the year."
        ]
      }
    ],
    "subtext": "related to dates years",
    "transcription": "mənθ",
    "lang": "en",
    "level": "starter",
    "theme": "dates_years",
    "sub_theme": null,
    "legacy_id": "A1-NUM-41",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Dates_Years"
  },
  {
    "id": "A1-NOUN-TIM-018",
    "word": "year",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "years",
    "definitions": [
      {
        "text": "A period of twelve months.",
        "examples": [
          "Happy New Year!"
        ]
      }
    ],
    "subtext": "related to dates years",
    "transcription": "jɪr",
    "lang": "en",
    "level": "starter",
    "theme": "dates_years",
    "sub_theme": null,
    "legacy_id": "A1-NUM-57",
    "level_code": "A1",
    "domain": "TIME_NUMBERS",
    "subcategory": "Time",
    "pos_section": "Nouns",
    "sub_subcategory": "Dates_Years"
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
