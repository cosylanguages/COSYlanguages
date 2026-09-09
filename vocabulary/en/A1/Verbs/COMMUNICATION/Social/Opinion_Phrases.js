(function () {
  const data = [
  {
    "id": "A1-VERB-COM-111",
    "word": "agree",
    "emoji": "👍",
    "subtext": "agree with someone / agree to do / agree on / I agree",
    "form": "verb",
    "definitions": [
      {
        "text": "To have the same opinion as someone.",
        "examples": [
          "I agree with you.",
          "We agree on the plan."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "agreed",
    "v3": "agreed",
    "group": "regular",
    "transcription": "əˈgri",
    "auxiliary": "have",
    "v4": "agreeing",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "disagree"
    ],
    "legacy_id": "A1-COMM-03",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-112",
    "word": "believe",
    "emoji": "🙏",
    "form": "verb",
    "subtext": "believe in / I believe so",
    "synonyms": [
      "think",
      "trust"
    ],
    "definitions": [
      {
        "text": "To think that something is true.",
        "examples": [
          "I believe you."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "believed",
    "v3": "believed",
    "group": "regular",
    "transcription": "bɪˈliv",
    "auxiliary": "have",
    "v4": "believing",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "doubt"
    ],
    "legacy_id": "A1-COMM-17",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-113",
    "word": "can",
    "emoji": "💪",
    "form": "verb",
    "transcription": "kæn",
    "definitions": [
      {
        "text": "To be able to do something.",
        "examples": [
          "I can speak English.",
          "Can you help me?"
        ]
      }
    ],
    "v2": "could",
    "v3": "been able to",
    "classification": "irregular",
    "aspect": "stative",
    "group": "regular",
    "subtext": "ability, permission",
    "auxiliary": "have",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "legacy_id": "A1-COMM-20",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-114",
    "word": "choose",
    "emoji": "👉",
    "subtext": "choose between / choose to do / choose carefully / choose a career",
    "form": "verb",
    "definitions": [
      {
        "text": "To select from options.",
        "examples": [
          "He chose to work part-time to spend more time with family."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "action",
    "v2": "chose",
    "v3": "chosen",
    "group": "regular",
    "transcription": "ʧuz",
    "auxiliary": "have",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "reject"
    ],
    "legacy_id": "A1-COMM-21",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-115",
    "word": "decide",
    "emoji": "⚖️",
    "subtext": "decide to do / decide on / hard to decide",
    "synonyms": [
      "make a decision"
    ],
    "form": "verb",
    "definitions": [
      {
        "text": "To make a choice.",
        "examples": [
          "She decided to change careers.",
          "He decides quickly."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "decided",
    "v3": "decided",
    "group": "regular",
    "transcription": "ˌdɪˈsaɪd",
    "auxiliary": "have",
    "v4": "deciding",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "hesitate"
    ],
    "legacy_id": "A1-COMM-30",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-119",
    "word": "must",
    "emoji": "⚠️",
    "form": "verb",
    "transcription": "mʌst",
    "definitions": [
      {
        "text": "Used to say that something is necessary or very important.",
        "examples": [
          "I must go now.",
          "You must finish your work."
        ]
      }
    ],
    "v2": "had to",
    "v3": "had to",
    "classification": "irregular",
    "aspect": "stative",
    "group": "regular",
    "subtext": "necessity, obligation",
    "auxiliary": "have",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "legacy_id": "A1-COMM-53",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-121",
    "word": "sound",
    "emoji": "👂",
    "form": "verb",
    "subtext": "sound like / sound good",
    "synonyms": [
      "seem"
    ],
    "definitions": [
      {
        "text": "To seem like something from what you have heard or read.",
        "examples": [
          "That sounds like a good idea."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "stative",
    "v2": "sounded",
    "v3": "sounded",
    "group": "regular",
    "transcription": "saʊnd",
    "auxiliary": "have",
    "v4": "sounding",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "silence"
    ],
    "legacy_id": "A1-COMM-86",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Social",
    "pos_section": "Verbs",
    "sub_subcategory": "Opinion_Phrases"
  },
  {
    "id": "A1-VERB-COM-122",
    "word": "think",
    "emoji": "💭",
    "subtext": "think about someone/something / think about / of, think about / think of / think it is / think carefully",
    "form": "verb",
    "definitions": [
      {
        "text": "To have a belief or opinion; to use the mind.",
        "examples": [
          "I think it is a good idea.",
          "She thinks about her job."
        ]
      }
    ],
    "classification": "irregular",
    "aspect": "both",
    "v2": "thought",
    "v3": "thought",
    "group": "regular",
    "transcription": "θɪŋk",
    "synonyms": [
      "believe"
    ],
    "auxiliary": "have",
    "lang": "en",
    "level": "starter",
    "theme": "giving_opinions",
    "sub_theme": null,
    "antonyms": [
      "feel"
    ],
    "legacy_id": "A1-COMM-98",
    "level_code": "A1",
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
