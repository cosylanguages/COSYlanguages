(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-TIM-021",
        "word": "punctual",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Happening or doing something at the agreed or proper time.",
                "examples": [
                    "Please be punctual for morning meetings.",
                    "He is always punctual and reliable."
                ]
            }
        ],
        "subtext": "on time, prompt",
        "synonyms": [
            "on time",
            "prompt"
        ],
        "transcription": "ˈpʌŋktʃuəl",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Adjectives",
        "sub_subcategory": "Days_Schedule"
    },
    {
        "id": "A2-ADJ-TIM-022",
        "word": "busy",
        "emoji": "🏃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Having a great deal to do.",
                "examples": [
                    "He is very busy with office work today.",
                    "The city center streets are always busy."
                ]
            }
        ],
        "subtext": "occupied, active",
        "synonyms": [
            "occupied",
            "active"
        ],
        "transcription": "ˈbɪzi",
        "lang": "en",
        "language": "en",
        "level": "elementary",
        "level_code": "A2",
        "theme": "time",
        "domain": "TIME_NUMBERS",
        "subcategory": "Time",
        "pos_section": "Adjectives",
        "sub_subcategory": "Days_Schedule"
    }
];

    if (typeof window !== 'undefined') {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData.en = (window.vocabularyData.en || []).concat(data);
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    }
})();
