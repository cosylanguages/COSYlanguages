(function() {
    const lang = "en";
    const data = [
    {
        "id": "A2-ADJ-TIM-016",
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
    }
];

    if (typeof window !== "undefined") {
        if (!window.vocabularyData) window.vocabularyData = {};
        if (!window.vocabularyData[lang]) window.vocabularyData[lang] = [];
        window.vocabularyData[lang].push(...data);
    }
})();
