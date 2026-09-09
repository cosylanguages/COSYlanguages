(function () {
  const data = [
  {
    "id": "A1-NOUN-COM-029",
    "word": "music",
    "emoji": "🎵",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": null,
    "definitions": [
      {
        "text": "The sound of people singing or playing instruments.",
        "examples": [
          "I like listening to music."
        ]
      }
    ],
    "subtext": "related to music",
    "transcription": "mˈjuzɪk",
    "lang": "en",
    "level": "starter",
    "theme": "music",
    "sub_theme": null,
    "legacy_id": "A1-COMM-39",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Music_Instruments"
  },
  {
    "id": "A1-NOUN-COM-031",
    "word": "song",
    "emoji": "🎶",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "songs",
    "definitions": [
      {
        "text": "A short piece of music with words that you sing.",
        "examples": [
          "This is a beautiful song."
        ]
      }
    ],
    "subtext": "related to music",
    "transcription": "sɔŋ",
    "lang": "en",
    "level": "starter",
    "theme": "music",
    "sub_theme": null,
    "legacy_id": "A1-COMM-57",
    "level_code": "A1",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Music_Instruments"
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
