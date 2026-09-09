(function () {
  const data = [
  {
    "id": "A2-VERB-COM-143",
    "word": "turn off",
    "emoji": "🌑",
    "subtext": "turn off the light / turn off the computer / turn off your phone",
    "form": "verb",
    "definitions": [
      {
        "text": "To make a device stop working.",
        "examples": [
          "Don't forget to turn off the lights.",
          "She turns off her phone during meetings."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "turned off",
    "v3": "turned off",
    "group": "regular",
    "transcription": "tərn ɔf",
    "lang": "en",
    "level": "elementary",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "turn on"
    ],
    "legacy_id": "A1-COMM-34",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-145",
    "word": "turn on",
    "emoji": "💡",
    "subtext": "turn on the light / turn on the TV / turn on the radio",
    "form": "verb",
    "definitions": [
      {
        "text": "To make a device start working.",
        "examples": [
          "Turn on the light, please.",
          "He turns on his computer at nine."
        ]
      }
    ],
    "classification": "regular",
    "aspect": "action",
    "v2": "turned on",
    "v3": "turned on",
    "group": "regular",
    "transcription": "tərn ɔn",
    "lang": "en",
    "level": "elementary",
    "theme": "technology",
    "sub_theme": null,
    "antonyms": [
      "turn off"
    ],
    "legacy_id": "A1-COMM-36",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-155",
    "word": "click",
    "emoji": "🖱️",
    "form": "verb",
    "transcription": "klɪk",
    "definitions": [
      {
        "text": "Press a button on a computer mouse.",
        "examples": [
          "Click on the link to open the page.",
          "Double-click the file icon."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-156",
    "word": "download",
    "emoji": "📥",
    "form": "verb",
    "transcription": "ˈdaʊnˌloʊd",
    "definitions": [
      {
        "text": "Copy data from the internet to a computer.",
        "examples": [
          "Download the document to your desktop.",
          "She downloaded a new song."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-157",
    "word": "print",
    "emoji": "🖨️",
    "form": "verb",
    "transcription": "prɪnt",
    "definitions": [
      {
        "text": "Produce text or images on paper using a printer.",
        "examples": [
          "Print two copies of the contract.",
          "He printed his boarding pass."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-158",
    "word": "search",
    "emoji": "🔍",
    "form": "verb",
    "transcription": "sɜːrʧ",
    "definitions": [
      {
        "text": "Try to find something by looking carefully.",
        "examples": [
          "Search the web for information.",
          "She searched her bag for her keys."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
  },
  {
    "id": "A2-VERB-COM-159",
    "word": "type",
    "emoji": "⌨️",
    "form": "verb",
    "transcription": "taɪp",
    "definitions": [
      {
        "text": "Write using a keyboard.",
        "examples": [
          "Type your full name in the box.",
          "He types very fast on a laptop."
        ]
      }
    ],
    "lang": "en",
    "level": "elementary",
    "level_code": "A2",
    "domain": "COMMUNICATION",
    "subcategory": "Technology",
    "pos_section": "Verbs",
    "sub_subcategory": "Digital_Devices"
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
