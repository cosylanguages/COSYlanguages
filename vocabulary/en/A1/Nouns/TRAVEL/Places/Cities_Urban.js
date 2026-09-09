(function () {
  const data = [
  {
    "id": "A1-NOUN-TRA-001",
    "word": "city",
    "emoji": "🏙️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "cities",
    "definitions": [
      {
        "text": "A large and important town.",
        "examples": [
          "London is a big city."
        ]
      }
    ],
    "subtext": "related to cities towns",
    "transcription": "ˈsɪti",
    "lang": "en",
    "level": "starter",
    "theme": "cities_towns",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Latin",
      "origin_word": "civitas"
    },
    "legacy_id": "A1-TRV-80",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A1-NOUN-TRA-002",
    "word": "town",
    "emoji": "🏘️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "towns",
    "definitions": [
      {
        "text": "A place where people live that is larger than a village but smaller than a city.",
        "examples": [
          "He lives in a small town."
        ]
      }
    ],
    "subtext": "related to cities towns",
    "transcription": "taʊn",
    "lang": "en",
    "level": "starter",
    "theme": "cities_towns",
    "sub_theme": null,
    "etymology": {
      "origin_lang": "Proto-Germanic",
      "origin_word": "tūnaz"
    },
    "legacy_id": "A1-TRV-114",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A1-NOUN-TRA-003",
    "word": "village",
    "emoji": "🏡",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "villages",
    "definitions": [
      {
        "text": "A very small town in the country.",
        "examples": [
          "My grandmother lives in a quiet village."
        ]
      }
    ],
    "subtext": "related to cities towns",
    "transcription": "ˈvɪlɪʤ",
    "lang": "en",
    "level": "starter",
    "theme": "cities_towns",
    "sub_theme": null,
    "legacy_id": "A1-TRV-116",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban"
  },
  {
    "id": "A1-NOUN-TRA-060",
    "word": "capital",
    "emoji": "🏛️",
    "form": "noun",
    "transcription": "ˈkæpətəl",
    "definitions": [
      {
        "text": "The most important city of a country or region.",
        "examples": [
          "Paris is the capital of France.",
          "They visited the national capital."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban",
    "theme": "house_furniture"
  },
  {
    "id": "A1-NOUN-TRA-061",
    "word": "center",
    "emoji": "📍",
    "form": "noun",
    "transcription": "ˈsɛntər",
    "definitions": [
      {
        "text": "The middle point or part of a city or area.",
        "examples": [
          "Meet me in the city center.",
          "The shopping center opens at nine."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban",
    "theme": "directions_location"
  },
  {
    "id": "A1-NOUN-TRA-062",
    "word": "corner",
    "emoji": "📐",
    "form": "noun",
    "transcription": "ˈkɔːrnər",
    "definitions": [
      {
        "text": "The place where two streets or walls meet.",
        "examples": [
          "The cafe is on the corner.",
          "Wait for me on the street corner."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban",
    "theme": "places_transport"
  },
  {
    "id": "A1-NOUN-TRA-066",
    "word": "square",
    "emoji": "🏙️",
    "form": "noun",
    "transcription": "skwɛr",
    "definitions": [
      {
        "text": "An open typical four-sided area in a town.",
        "examples": [
          "Monuments line the central town square.",
          "People gather in the main square."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Cities_Urban",
    "theme": "numbers_measurement"
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
