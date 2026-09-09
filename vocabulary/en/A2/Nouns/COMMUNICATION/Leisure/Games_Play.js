(function () {
  const data = [
  {
    "id": "A2-NOUN-COM-008",
    "word": "alien",
    "emoji": "👽",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "aliens",
    "definitions": [
      {
        "text": "A creature from another planet.",
        "examples": [
          "Do you believe in aliens?"
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "ˈeɪliən",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-03",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-009",
    "word": "balloon",
    "emoji": "🎈",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "balloons",
    "definitions": [
      {
        "text": "A small colored rubber bag filled with air.",
        "examples": [
          "We have many balloons for the party."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "bəˈlun",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-05",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-011",
    "word": "kite",
    "emoji": "🪁",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "kites",
    "definitions": [
      {
        "text": "A toy made of paper or cloth that flies in the wind on a long string.",
        "examples": [
          "Let's fly a kite in the park."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "kaɪt",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-37",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-012",
    "word": "monster",
    "emoji": "👹",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "monsters",
    "definitions": [
      {
        "text": "A large, scary, imaginary creature.",
        "examples": [
          "The story is about a friendly monster."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "ˈmɑnstər",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-38",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-013",
    "word": "robot",
    "emoji": "🤖",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "robots",
    "definitions": [
      {
        "text": "A machine that can do work by itself.",
        "examples": [
          "I have a toy robot."
        ]
      }
    ],
    "subtext": "related to toys games",
    "transcription": "ˈroʊˌbət",
    "lang": "en",
    "level": "elementary",
    "theme": "toys_games",
    "sub_theme": null,
    "legacy_id": "A1-COMM-48",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-089",
    "word": "board game",
    "emoji": "🎲",
    "form": "noun",
    "transcription": "bɔːrd ɡeɪm",
    "definitions": [
      {
        "text": "A game played with counters or cards on a board.",
        "examples": [
          "Chess is a strategic board game.",
          "We played board games on rainy days."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-090",
    "word": "chess",
    "emoji": "♟️",
    "form": "noun",
    "transcription": "ʧɛs",
    "definitions": [
      {
        "text": "A two-player strategy board game.",
        "examples": [
          "My father taught me to play chess.",
          "Chess requires careful concentration."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
    "sub_subcategory": "Games_Play"
  },
  {
    "id": "A2-NOUN-COM-091",
    "word": "puzzle",
    "emoji": "🧩",
    "form": "noun",
    "transcription": "ˈpʌzəl",
    "definitions": [
      {
        "text": "A game or problem designed to test ingenuity.",
        "examples": [
          "Solve the jigsaw puzzle.",
          "Crossword puzzles keep the mind active."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Leisure",
    "pos_section": "Nouns",
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
