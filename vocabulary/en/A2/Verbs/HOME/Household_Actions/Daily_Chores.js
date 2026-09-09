(function () {
  const data = [
  {
    "id": "A2-VERB-HOM-009",
    "word": "fill",
    "emoji": "🫗",
    "form": "verb",
    "subtext": "fill a glass / fill in a form",
    "definitions": [
      {
        "text": "To make something full.",
        "examples": [
          "Please fill the glass with water."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "filled",
    "v3": "filled",
    "group": "regular",
    "transcription": "fɪl",
    "lang": "en",
    "level": "elementary",
    "theme": "household_tasks",
    "sub_theme": null,
    "antonyms": [
      "empty"
    ],
    "legacy_id": "A1-HOME-06",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A2-VERB-HOM-016",
    "word": "dust",
    "emoji": "🧹",
    "form": "verb",
    "transcription": "dʌst",
    "definitions": [
      {
        "text": "Remove dust from the surface of.",
        "examples": [
          "Dust the shelves once a week.",
          "He dusted the wooden furniture."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A2-VERB-HOM-018",
    "word": "iron",
    "emoji": "👔",
    "form": "verb",
    "transcription": "ˈaɪərn",
    "definitions": [
      {
        "text": "Smooth clothes with a heated appliance.",
        "examples": [
          "Iron your shirt before the meeting.",
          "He irons his trousers every Sunday."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
  },
  {
    "id": "A2-VERB-HOM-022",
    "word": "wipe",
    "emoji": "🧻",
    "form": "verb",
    "transcription": "waɪp",
    "definitions": [
      {
        "text": "Clean or dry something by rubbing a cloth over it.",
        "examples": [
          "Wipe the table after finishing lunch.",
          "She wiped the counter with a cloth."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Household_Actions",
    "pos_section": "Verbs",
    "sub_subcategory": "Daily_Chores"
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
