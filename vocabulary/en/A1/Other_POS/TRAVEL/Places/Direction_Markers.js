(function () {
  const data = [
  {
    "id": "A1-OTH-TRA-001",
    "word": "down",
    "emoji": "⬇️",
    "form": "preposition",
    "definitions": [
      {
        "text": "Towards a lower place or position.",
        "examples": [
          "Sit down, please."
        ]
      }
    ],
    "subtext": "related to prepositions movement",
    "transcription": "daʊn",
    "lang": "en",
    "level": "starter",
    "theme": "prepositions_movement",
    "sub_theme": null,
    "antonyms": [
      "up"
    ],
    "legacy_id": "A1-TRV-84",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Other_POS",
    "sub_subcategory": "Direction_Markers"
  },
  {
    "id": "A1-OTH-TRA-002",
    "word": "to",
    "form": "preposition",
    "definitions": [
      {
        "text": "Used to show the direction or destination of movement.",
        "examples": [
          "I go to work by bus."
        ]
      }
    ],
    "subtext": "related to prepositions movement",
    "emoji": "➡️",
    "transcription": "tɪ",
    "lang": "en",
    "level": "starter",
    "theme": "prepositions_movement",
    "sub_theme": null,
    "legacy_id": "A1-TRV-113",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Other_POS",
    "sub_subcategory": "Direction_Markers"
  },
  {
    "id": "A1-OTH-TRA-003",
    "word": "up",
    "emoji": "⬆️",
    "form": "preposition",
    "definitions": [
      {
        "text": "Towards a higher place or position.",
        "examples": [
          "Go up the stairs."
        ]
      }
    ],
    "subtext": "related to prepositions movement",
    "transcription": "əp",
    "lang": "en",
    "level": "starter",
    "theme": "prepositions_movement",
    "sub_theme": null,
    "antonyms": [
      "down"
    ],
    "legacy_id": "A1-TRV-115",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Other_POS",
    "sub_subcategory": "Direction_Markers"
  },
  {
    "id": "A1-NEW-066",
    "word": "edge",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'edge'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "directions_location"
  },
  {
    "id": "A1-NEW-188",
    "word": "middle",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'middle'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "directions_location"
  },
  {
    "id": "A1-NEW-275",
    "word": "side",
    "emoji": "📝",
    "form": "noun",
    "definitions": [
      "Basic A1 English noun: 'side'."
    ],
    "transcription": "",
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "General",
    "pos_section": "Nouns",
    "sub_subcategory": "General",
    "theme": "directions_location"
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
