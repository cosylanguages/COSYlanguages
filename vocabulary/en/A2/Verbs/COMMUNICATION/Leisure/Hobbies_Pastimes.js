(function () {
  const data = [
  {
    "id": "A2-VERB-COM-015",
    "word": "act",
    "emoji": "🎭",
    "form": "verb",
    "subtext": "act in a play / act quickly",
    "definitions": [
      {
        "text": "To perform in a play or movie.",
        "examples": [
          "He acts in the school play."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "acted",
    "v3": "acted",
    "group": "regular",
    "transcription": "ækt",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "be natural"
    ],
    "legacy_id": "A1-COMM-01",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-VERB-COM-017",
    "word": "celebrate",
    "definitions": [
      {
        "text": "To do something enjoyable for a special occasion.",
        "examples": [
          "They celebrate every work anniversary together."
        ]
      }
    ],
    "subtext": "celebrate a birthday / celebrate success / celebrate together",
    "classification": "regular",
    "aspect": "action",
    "v2": "celebrated",
    "v3": "celebrated",
    "emoji": "🎉",
    "form": "verb",
    "group": "regular",
    "transcription": "ˈsɛləˌbreɪt",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "mourn"
    ],
    "legacy_id": "A1-COMM-12",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-VERB-COM-019",
    "word": "exercise",
    "emoji": "🏋️",
    "form": "verb",
    "definitions": [
      {
        "text": "To do physical activity for health and fitness.",
        "examples": [
          "He exercises four times a week at the gym."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "exercised",
    "v3": "exercised",
    "subtext": "exercise regularly / exercise at the gym / exercise outdoors",
    "group": "regular",
    "transcription": "ˈɛksərˌsaɪz",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "rest"
    ],
    "legacy_id": "A1-COMM-19",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-VERB-COM-021",
    "word": "hop",
    "emoji": "🐇",
    "form": "verb",
    "subtext": "hop around / hop like a rabbit",
    "synonyms": [
      "jump"
    ],
    "definitions": [
      {
        "text": "To jump on one foot.",
        "examples": [
          "Can you hop like a rabbit?"
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "hopped",
    "v3": "hopped",
    "group": "regular",
    "transcription": "hɑp",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "walk"
    ],
    "legacy_id": "A1-COMM-31",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A2-VERB-COM-027",
    "word": "skip",
    "emoji": "🏃",
    "form": "verb",
    "subtext": "skip rope",
    "synonyms": [
      "jump",
      "skipping"
    ],
    "definitions": [
      {
        "text": "To move along by jumping from one foot to the other.",
        "examples": [
          "The children are skipping in the playground."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "skipped",
    "v3": "skipped",
    "group": "regular",
    "transcription": "skɪp",
    "lang": "en",
    "level": "elementary",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "walk"
    ],
    "legacy_id": "A1-COMM-55",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
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
