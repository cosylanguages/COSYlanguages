(function () {
  const data = [
  {
    "id": "A1-NOUN-HOM-003",
    "word": "pan",
    "emoji": "🍳",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "pans",
    "definitions": [
      {
        "text": "A metal container used for cooking food in.",
        "examples": [
          "Put the pan on the stove."
        ]
      }
    ],
    "subtext": "related to kitchen items",
    "transcription": "pæn",
    "lang": "en",
    "level": "starter",
    "theme": "kitchen_items",
    "sub_theme": null,
    "legacy_id": "A1-HOME-03",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances"
  },
  {
    "id": "A1-NOUN-HOM-004",
    "word": "pot",
    "emoji": "🍲",
    "form": "noun",
    "classification": "regular",
    "countability": "countable",
    "plural": "pots",
    "definitions": [
      {
        "text": "A deep round container used for cooking things in.",
        "examples": [
          "The pot is full of soup."
        ]
      }
    ],
    "subtext": "related to kitchen items",
    "transcription": "pɑt",
    "lang": "en",
    "level": "starter",
    "theme": "kitchen_items",
    "sub_theme": null,
    "legacy_id": "A1-HOME-04",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances"
  },
  {
    "id": "A1-NOUN-HOM-083",
    "word": "microwave",
    "emoji": "📻",
    "form": "noun",
    "transcription": "ˈmaɪkroʊˌweɪv",
    "definitions": [
      {
        "text": "An oven that uses micro-radiation to cook food quickly.",
        "examples": [
          "Heat your lunch in the microwave.",
          "The microwave beeped when done."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances",
    "theme": "house_furniture"
  },
  {
    "id": "A1-NOUN-HOM-084",
    "word": "refrigerator",
    "emoji": "🧊",
    "form": "noun",
    "transcription": "rɪˈfrɪʤəˌreɪtər",
    "definitions": [
      {
        "text": "An appliance used to keep food cold.",
        "examples": [
          "Put milk back into the refrigerator.",
          "The refrigerator was full of groceries."
        ]
      }
    ],
    "lang": "en",
    "level": "starter",
    "level_code": "A1",
    "domain": "HOME",
    "subcategory": "Appliances",
    "pos_section": "Nouns",
    "sub_subcategory": "Kitchen_Appliances",
    "theme": "house_furniture"
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
