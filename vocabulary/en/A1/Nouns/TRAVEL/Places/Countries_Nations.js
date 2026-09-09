(function () {
  const data = [
  {
    "id": "A1-NOUN-TRA-004",
    "word": "country",
    "emoji": "🏳️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "countries",
    "definitions": [
      {
        "text": "An area of land that has its own government and army.",
        "examples": [
          "France is a beautiful country."
        ]
      }
    ],
    "subtext": "related to countries capitals",
    "transcription": "ˈkəntri",
    "lang": "en",
    "level": "starter",
    "theme": "countries_capitals",
    "sub_theme": null,
    "legacy_id": "A1-TRV-81",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Countries_Nations"
  },
  {
    "id": "A1-NOUN-TRA-005",
    "word": "world",
    "emoji": "🌎",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "worlds",
    "definitions": [
      {
        "text": "The Earth and all the people, places, and things on it.",
        "examples": [
          "Travel around the world."
        ]
      }
    ],
    "subtext": "related to countries capitals",
    "transcription": "wərld",
    "lang": "en",
    "level": "starter",
    "theme": "countries_capitals",
    "sub_theme": null,
    "legacy_id": "A1-TRV-119",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Countries_Nations"
  },
  {
    "id": "A1-NOUN-TRA-068",
    "word": "border",
    "emoji": "🗺️",
    "form": "noun",
    "transcription": "ˈbɔːrdər",
    "definitions": [
      {
        "text": "A line separating two political or geographical areas.",
        "examples": [
          "Show passports at the border checkpoint.",
          "The river forms a natural border."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Countries_Nations",
    "theme": "house_furniture"
  },
  {
    "id": "A1-NOUN-TRA-069",
    "word": "island",
    "emoji": "🏝️",
    "form": "noun",
    "transcription": "ˈaɪlənd",
    "definitions": [
      {
        "text": "A piece of land surrounded by water.",
        "examples": [
          "They spent summer on a tropical island.",
          "Majorca is a popular island destination."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Countries_Nations",
    "theme": "animals_nature"
  },
  {
    "id": "A1-NOUN-TRA-070",
    "word": "nation",
    "emoji": "🇺🇳",
    "form": "noun",
    "transcription": "ˈneɪʃən",
    "definitions": [
      {
        "text": "A large body of people united by common descent.",
        "examples": [
          "Nations signed an international agreement.",
          "His nation celebrates independence."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "TRAVEL",
    "subcategory": "Places",
    "pos_section": "Nouns",
    "sub_subcategory": "Countries_Nations",
    "theme": "countries_languages"
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
