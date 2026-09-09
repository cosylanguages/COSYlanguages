(function () {
  const data = [
  {
    "id": "A2-NOUN-TRA-058",
    "word": "vehicle",
    "emoji": "🚘",
    "form": "noun",
    "definitions": [
      {
        "text": "A machine with wheels used for transporting people or goods.",
        "examples": [
          "Emergency vehicles arrived quickly.",
          "Park your vehicle in the designated space."
        ]
      }
    ],
    "subtext": "car, transit",
    "synonyms": [
      "car",
      "transit"
    ],
    "transcription": "ˈviːəkl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "travel",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-069",
    "word": "fuel",
    "emoji": "⛽",
    "form": "noun",
    "definitions": [
      {
        "text": "Material such as coal, gas, or oil burned to produce heat or power.",
        "examples": [
          "The car ran out of fuel on the highway.",
          "Wood is used as fuel in stoves."
        ]
      }
    ],
    "subtext": "energy, gas",
    "synonyms": [
      "energy",
      "gas"
    ],
    "transcription": "ˈfjuːəl",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "travel",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-055",
    "word": "scooter",
    "emoji": "🛴",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "scooters",
    "definitions": [
      {
        "text": "A small vehicle with two wheels and a long handle.",
        "examples": [
          "The boy is riding his scooter."
        ]
      }
    ],
    "subtext": "related to modes of transport",
    "transcription": "ˈskutər",
    "lang": "en",
    "level": "elementary",
    "theme": "modes_of_transport",
    "sub_theme": null,
    "legacy_id": "A1-TRV-44",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-058",
    "word": "truck",
    "emoji": "🚚",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "trucks",
    "subtext": "related to modes of transport",
    "synonyms": [
      "🇬🇧 lorry"
    ],
    "definitions": [
      {
        "text": "A large, heavy vehicle with wheels used for carrying goods.",
        "examples": [
          "The truck is carrying food to the supermarket."
        ]
      }
    ],
    "transcription": "trək",
    "lang": "en",
    "level": "elementary",
    "theme": "modes_of_transport",
    "sub_theme": null,
    "legacy_id": "A1-TRV-56",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-086",
    "word": "helicopter",
    "emoji": "🚁",
    "form": "noun",
    "transcription": "ˈhɛlɪˌkɑːptər",
    "definitions": [
      {
        "text": "A type of aircraft with revolving overhead blades.",
        "examples": [
          "A rescue helicopter landed on the roof.",
          "The helicopter flew over the city."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-088",
    "word": "tram",
    "emoji": "🚊",
    "form": "noun",
    "transcription": "træm",
    "definitions": [
      {
        "text": "A passenger vehicle powered by overhead electric cables on rails.",
        "examples": [
          "Ride the tram through the town center.",
          "Trams are quiet and eco-friendly."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-154",
    "word": "subway",
    "form": "noun",
    "transcription": "ˈsʌbweɪ",
    "emoji": "🚇",
    "definitions": [
      {
        "text": "An underground railway system in a city.",
        "examples": [
          "I take the subway to work.",
          "The subway train arrives quickly."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
  },
  {
    "id": "A2-NOUN-TRA-155",
    "word": "metro",
    "form": "noun",
    "transcription": "ˈmetroʊ",
    "emoji": "🚊",
    "definitions": [
      {
        "text": "An underground train system.",
        "examples": [
          "The metro station is near my house.",
          "We ride the metro every day."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "TRAVEL",
    "subcategory": "Transport",
    "pos_section": "Nouns",
    "sub_subcategory": "Vehicles_Transit"
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
