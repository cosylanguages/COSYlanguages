(function () {
  const data = [
  {
    "id": "A2-VERB-COM-116",
    "word": "depend",
    "emoji": "⚖️",
    "form": "verb",
    "transcription": "dɪˈpend",
    "definitions": [
      {
        "text": "To be decided by or to change according to something else.",
        "examples": [
          "It depends on the weather.",
          "Our plans depend on your answer."
        ]
      }
    ],
    "v2": "depended",
    "v3": "depended",
    "classification": "regular",
    "group": "regular",
    "subtext": "depend ON someone/something",
    "auxiliary": "have",
    "v4": "depending",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "legacy_id": "A1-COMM-31",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A2-VERB-COM-117",
    "word": "describe",
    "emoji": "💬",
    "form": "verb",
    "subtext": "describe something / describe a person",
    "definitions": [
      {
        "text": "To say or write what someone or something is like.",
        "examples": [
          "Can you describe your house?"
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "described",
    "v3": "described",
    "group": "regular",
    "transcription": "dɪˈskraɪb",
    "auxiliary": "have",
    "v4": "describing",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "summarize"
    ],
    "legacy_id": "A1-COMM-32",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A2-VERB-COM-118",
    "word": "let",
    "emoji": "🔓",
    "subtext": "let someone go / let it be / let someone know",
    "form": "verb",
    "definitions": [
      {
        "text": "To allow something to happen or someone to do something.",
        "examples": [
          "Let me help you with those bags.",
          "She let the dog out into the garden."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "let",
    "v3": "let",
    "group": "regular",
    "transcription": "lɛt",
    "auxiliary": "have",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "legacy_id": "A1-COMM-50",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A2-VERB-COM-120",
    "word": "prefer",
    "emoji": "👉",
    "form": "verb",
    "subtext": "like better / prefer tea to coffee",
    "definitions": [
      {
        "text": "To like one thing more than another.",
        "examples": [
          "I prefer tea to coffee."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "preferred",
    "v3": "preferred",
    "group": "regular",
    "transcription": "prɪˈfər",
    "auxiliary": "have",
    "v4": "prefering",
    "lang": "en",
    "level": "elementary",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "dislike"
    ],
    "legacy_id": "A1-COMM-70",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
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
