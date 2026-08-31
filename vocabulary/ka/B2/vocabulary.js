// TODO: verify level classification
(function() {
    const lang = "ka";
    const data = [
    {
        "word": "მოქალაქეობა",
        "level": "upper_intermediate",
        "theme": "society",
        "emoji": "🏛️",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "სამართლებრივი კავშირი ადამიანსა და სახელმწიფოს შორის.",
                "examples": [
                    "მოქალაქეობის პასუხისმგებლობა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_upper_intermediate_society_001"
    },
    {
        "word": "საზოგადოება",
        "level": "upper_intermediate",
        "theme": "society",
        "emoji": "👥",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "ერთად მცხოვრები ადამიანების ერთობლიობა.",
                "examples": [
                    "საზოგადოების განვითარება."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_upper_intermediate_society_002"
    },
    {
        "word": "თანამშრომლობა",
        "level": "upper_intermediate",
        "theme": "economy",
        "emoji": "🤝",
        "form": "noun",
        "classification": "regular",
        "countability": "uncountable",
        "definitions": [
            {
                "text": "ერთობლივი მუშაობა საერთო მიზნისთვის.",
                "examples": [
                    "საერთაშორისო თანამშრომლობა."
                ]
            }
        ],
        "lang": "ka",
        "transcription": "",
        "id": "ka_upper_intermediate_economy_001"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
