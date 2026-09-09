(function () {
  const data = [
  {
    "id": "A1-NOUN-NAT-039",
    "word": "autumn",
    "emoji": "🍂",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "subtext": "related to seasons climate",
    "synonyms": [
      "🇺🇸 fall"
    ],
    "definitions": [
      {
        "text": "The season between summer and winter.",
        "examples": [
          "Leaves fall in autumn."
        ]
      }
    ],
    "transcription": "ˈɔtəm",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "legacy_id": "A1-NAT-02",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A1-NOUN-NAT-040",
    "word": "season",
    "emoji": "📅",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "One of the four periods of the year (spring, summer, autumn, winter).",
        "examples": [
          "Winter is my favorite season."
        ]
      }
    ],
    "subtext": "time of year",
    "transcription": "ˈsizən",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "legacy_id": "A1-NAT-26",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A1-NOUN-NAT-041",
    "word": "spring",
    "emoji": "🌱",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "The season between winter and summer.",
        "examples": [
          "Flowers grow in spring."
        ]
      }
    ],
    "subtext": "related to seasons climate",
    "transcription": "spərɪŋ",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "legacy_id": "A1-NAT-30",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A1-NOUN-NAT-042",
    "word": "summer",
    "emoji": "☀️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "The hottest season of the year.",
        "examples": [
          "I love swimming in summer."
        ]
      }
    ],
    "subtext": "related to seasons climate",
    "transcription": "ˈsəmər",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "legacy_id": "A1-NAT-33",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A1-NOUN-NAT-043",
    "word": "winter",
    "emoji": "❄️",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "definitions": [
      {
        "text": "The coldest season of the year.",
        "examples": [
          "It snows in winter."
        ]
      }
    ],
    "subtext": "related to seasons climate",
    "transcription": "ˈwɪntər",
    "lang": "en",
    "level": "starter",
    "theme": "seasons_climate",
    "sub_theme": null,
    "legacy_id": "A1-NAT-47",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons"
  },
  {
    "id": "A1-NOUN-NAT-067",
    "word": "climate",
    "emoji": "🌡️",
    "form": "noun",
    "transcription": "ˈklaɪmət",
    "definitions": [
      {
        "text": "The weather conditions prevailing in an area over a long period.",
        "examples": [
          "The Mediterranean climate is warm and dry.",
          "Climate change affects wildlife."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons",
    "theme": "weather_environment"
  },
  {
    "id": "A1-NOUN-NAT-068",
    "word": "cloud",
    "emoji": "☁️",
    "form": "noun",
    "transcription": "klaʊd",
    "definitions": [
      {
        "text": "A visible mass of condensed water vapor floating in the atmosphere.",
        "examples": [
          "Dark storm clouds gathered above.",
          "White fluffy clouds drifted in the sky."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons",
    "theme": "weather_environment"
  },
  {
    "id": "A1-NOUN-NAT-070",
    "word": "storm",
    "emoji": "⛈️",
    "form": "noun",
    "transcription": "stɔːrm",
    "definitions": [
      {
        "text": "A violent disturbance of the atmosphere with strong winds and rain.",
        "examples": [
          "A loud thunder storm passed over the town.",
          "Secure outdoor furniture before the storm."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "NATURE",
    "subcategory": "Environment",
    "pos_section": "Nouns",
    "sub_subcategory": "Weather_Seasons",
    "theme": "weather_environment"
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
