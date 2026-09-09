(function () {
  const data = [
  {
    "id": "A1-VERB-COM-023",
    "word": "play",
    "emoji": "🎮",
    "subtext": "play sport / play a game / play music / play a role",
    "form": "verb",
    "definitions": [
      {
        "text": "To take part in a game or sport; to produce music.",
        "examples": [
          "He plays football at the weekend to de-stress."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "played",
    "v3": "played",
    "group": "regular",
    "transcription": "pleɪ",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "work"
    ],
    "legacy_id": "A1-COMM-42",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-VERB-COM-025",
    "word": "relax",
    "emoji": "🧘",
    "subtext": "relax at home / relax after work / relax on holiday",
    "form": "verb",
    "definitions": [
      {
        "text": "To stop working and rest; to become less tense.",
        "examples": [
          "I relax at the weekend and never check emails."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "relaxed",
    "v3": "relaxed",
    "group": "regular",
    "transcription": "rɪˈlæks",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "work"
    ],
    "legacy_id": "A1-COMM-46",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-VERB-COM-029",
    "word": "watch",
    "emoji": "📺",
    "form": "verb",
    "subtext": "watch TV / watch a film / watch the news / watch closely",
    "definitions": [
      {
        "text": "To look at something for a period of time.",
        "examples": [
          "She watches the market news every morning before work."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "watched",
    "v3": "watched",
    "group": "regular",
    "transcription": "wɔʧ",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "ignore"
    ],
    "legacy_id": "A1-COMM-67",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Hobbies_Pastimes"
  },
  {
    "id": "A1-VERB-COM-031",
    "word": "win",
    "emoji": "🏆",
    "subtext": "win a game / win a prize / win an award / win a contract",
    "form": "verb",
    "definitions": [
      {
        "text": "To be the best in a game or competition.",
        "examples": [
          "We want to win the game."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "won",
    "v3": "won",
    "group": "irregular",
    "transcription": "wɪn",
    "lang": "en",
    "level": "starter",
    "theme": "leisure_activities",
    "sub_theme": null,
    "antonyms": [
      "lose"
    ],
    "legacy_id": "A1-COMM-69",
    "level_code": "A1",
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
