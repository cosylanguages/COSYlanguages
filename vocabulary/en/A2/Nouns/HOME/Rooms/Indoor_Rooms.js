(function () {
  const data = [
  {
    "id": "A2-NOUN-HOM-001",
    "word": "basement",
    "emoji": "🏚️",
    "form": "noun",
    "definitions": [
      {
        "text": "The floor of a building partly or entirely below ground level.",
        "examples": [
          "We store old boxes in the basement.",
          "The laundry room is down in the basement."
        ]
      }
    ],
    "subtext": "cellar",
    "synonyms": [
      "cellar"
    ],
    "transcription": "ˈbeɪsmənt",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-002",
    "word": "cellar",
    "emoji": "🍷",
    "form": "noun",
    "definitions": [
      {
        "text": "A room below ground level in a house, often used for storage.",
        "examples": [
          "He kept a collection of wine in the cellar.",
          "The storm cellar stayed cool during summer."
        ]
      }
    ],
    "subtext": "basement",
    "synonyms": [
      "basement"
    ],
    "transcription": "ˈselə",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-004",
    "word": "corridor",
    "emoji": "🚪",
    "form": "noun",
    "definitions": [
      {
        "text": "A long passage in a building with doors on each side.",
        "examples": [
          "Walk down the corridor to room 102.",
          "The hotel corridor was quiet and dimly lit."
        ]
      }
    ],
    "subtext": "hallway, passage",
    "synonyms": [
      "hallway",
      "passage"
    ],
    "transcription": "ˈkɒrɪdɔː",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-023",
    "word": "interior",
    "emoji": "🛋️",
    "form": "noun",
    "definitions": [
      {
        "text": "The inland part of a country or the inside of a building.",
        "examples": [
          "The interior of the house was painted white.",
          "Explore the island's interior region."
        ]
      }
    ],
    "subtext": "inside, indoor",
    "synonyms": [
      "inside",
      "indoor"
    ],
    "transcription": "ɪnˈtɪəriə",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-028",
    "word": "layout",
    "emoji": "📐",
    "form": "noun",
    "definitions": [
      {
        "text": "The way in which the parts of something are arranged.",
        "examples": [
          "The open-plan layout makes the room feel spacious.",
          "Check the magazine layout before printing."
        ]
      }
    ],
    "subtext": "design, plan",
    "synonyms": [
      "design",
      "plan"
    ],
    "transcription": "ˈleɪaʊt",
    "lang": "en",
    "language": "en",
    "level": "elementary",
    "level_code": "A2",
    "theme": "home",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-075",
    "word": "attic",
    "emoji": "🏠",
    "form": "noun",
    "transcription": "ˈætɪk",
    "definitions": [
      {
        "text": "A space or room inside the roof of a building.",
        "examples": [
          "Old trunks were stored in the attic.",
          "She converted the attic into a bedroom."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-076",
    "word": "hallway",
    "emoji": "🚪",
    "form": "noun",
    "transcription": "ˈhɔːlˌweɪ",
    "definitions": [
      {
        "text": "An entrance hall or corridor.",
        "examples": [
          "Leave your shoes in the hallway.",
          "The hallway lights were turned on."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
  },
  {
    "id": "A2-NOUN-HOM-126",
    "word": "hall",
    "form": "noun",
    "transcription": "hɔːl",
    "emoji": "🚪",
    "definitions": [
      {
        "text": "A passage inside a building with doors leading into rooms.",
        "examples": [
          "Walk down the hall to the left.",
          "The hall is clean and bright."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "HOME",
    "subcategory": "Rooms",
    "pos_section": "Nouns",
    "sub_subcategory": "Indoor_Rooms"
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
