(function () {
  const data = [
  {
    "id": "A2-VERB-COM-032",
    "word": "amuse",
    "emoji": "😄",
    "form": "verb",
    "definitions": [
      {
        "text": "To cause someone to find something funny or entertaining.",
        "examples": [
          "The clown's tricks amused the children.",
          "She amused herself by reading novels."
        ]
      }
    ],
    "subtext": "entertain, delight",
    "synonyms": [
      "entertain",
      "delight"
    ],
    "transcription": "əˈmjuːz",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "communication",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-VERB-COM-035",
    "word": "bet",
    "emoji": "🎲",
    "form": "verb",
    "definitions": [
      {
        "text": "To risk a sum of money on the outcome of an unpredictable event.",
        "examples": [
          "I bet five dollars on the horse race.",
          "I bet you will love this new film."
        ]
      }
    ],
    "subtext": "wager, gamble",
    "synonyms": [
      "wager",
      "gamble"
    ],
    "transcription": "bet",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "communication",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-VERB-COM-011",
    "word": "hide",
    "emoji": "🙈",
    "subtext": "hide and seek / hide from someone / hide something",
    "form": "verb",
    "definitions": [
      {
        "text": "To put something or someone in a place where they cannot be seen or found.",
        "examples": [
          "He is hiding behind the door."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "hid",
    "v3": "hidden",
    "group": "irregular",
    "transcription": "haɪd",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "antonyms": [
      "show"
    ],
    "legacy_id": "A1-COMM-28",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-VERB-COM-013",
    "word": "seek",
    "emoji": "🔍",
    "form": "verb",
    "subtext": "hide and seek / seek help",
    "synonyms": [
      "look for"
    ],
    "definitions": [
      {
        "text": "To try to find or get something.",
        "examples": [
          "They are playing hide and seek."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "sought",
    "v3": "sought",
    "group": "irregular",
    "transcription": "sik",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "antonyms": [
      "hide"
    ],
    "legacy_id": "A1-COMM-51",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Games_Play"
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
