(function () {
  const data = [
  {
    "id": "A2-VERB-COM-001",
    "word": "beat",
    "emoji": "🥊",
    "form": "verb",
    "subtext": "beat a record / beat an opponent",
    "definitions": [
      {
        "text": "To defeat someone in a game, competition, election, or battle.",
        "examples": [
          "Our team beat them 3-1."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "beat",
    "v3": "beaten",
    "transcription": "biːt",
    "synonyms": [
      "win against",
      "defeat"
    ],
    "group": "regular",
    "auxiliary": "have",
    "lang": "en",
    "level": "elementary",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A2-COMM-01",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A2-VERB-COM-002",
    "word": "compete",
    "emoji": "🏃",
    "form": "verb",
    "subtext": "compete in a race",
    "synonyms": [
      "competitive"
    ],
    "definitions": [
      {
        "text": "To try to be more successful than someone or something else.",
        "examples": [
          "She competed in the Olympic Games."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "competed",
    "v3": "competed",
    "transcription": "kəmˈpiːt",
    "group": "regular",
    "auxiliary": "have",
    "v4": "competing",
    "lang": "en",
    "level": "elementary",
    "theme": "sports",
    "sub_theme": null,
    "legacy_id": "A2-COMM-02",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Athletic_Sports"
  },
  {
    "id": "A2-VERB-COM-001",
    "word": "bounce",
    "emoji": "🏀",
    "form": "verb",
    "subtext": "bounce a ball",
    "synonyms": [
      "rebound",
      "bouncing"
    ],
    "definitions": [
      {
        "text": "To move up or away after hitting a surface.",
        "examples": [
          "The ball is bouncing."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "bounced",
    "v3": "bounced",
    "group": "regular",
    "transcription": "baʊns",
    "lang": "en",
    "level": "elementary",
    "theme": "sports",
    "sub_theme": null,
    "antonyms": [
      "stop"
    ],
    "legacy_id": "A1-COMM-10",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Verbs",
    "sub_subcategory": "Athletic_Sports"
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
