(function() {
    const data = [
    {
        "word": "ყოფნა",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👤",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "არსებობა, რაიმე მდგომარეობაში ყოფნა.",
                "examples": [
                    "მე დაღლილი ვარ. ის ექიმია."
                ]
            }
        ],
        "v3": "ყოფილი"
    },
    {
        "word": "ქონა",
        "level": "starter",
        "theme": "personal_identity_A0",
        "emoji": "👜",
        "form": "verb",
        "classification": "irregular",
        "aspect": "stative",
        "definitions": [
            {
                "text": "რაიმეს ფლობა.",
                "examples": [
                    "მე მაქვს სამსახური. მას ჰყავს მანქანა."
                ]
            }
        ],
        "v3": "ქონებული"
    },
    {
        "word": "გაკეთება",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "რაიმე მოქმედების ან საქმიანობის შესრულება.",
                "examples": [
                    "მე ვაკეთებ ჩემს საშინაო დავალებას."
                ]
            }
        ],
        "v3": "გაკეთებული"
    },
    {
        "word": "წასვლა",
        "level": "starter",
        "theme": "modes_of_transport_A0",
        "emoji": "🚶",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "ერთი ადგილიდან მეორეზე გადაადგილება.",
                "examples": [
                    "მე მივდივარ სამსახურში."
                ]
            }
        ],
        "v3": "წასული"
    },
    {
        "word": "ჭამა",
        "level": "starter",
        "theme": "basic_foods_A0",
        "emoji": "🍎",
        "form": "verb",
        "classification": "irregular",
        "aspect": "action",
        "definitions": [
            {
                "text": "საკვების მიღება.",
                "examples": [
                    "ჩვენ ვჭამთ ვახშამს შვიდ საათზე."
                ]
            }
        ],
        "v3": "ნაჭამი"
    },
    {
        "word": "დალევა",
        "level": "starter",
        "theme": "drinks_A0",
        "emoji": "🥛",
        "form": "verb",
        "classification": "regular",
        "aspect": "action",
        "definitions": [
            {
                "text": "სითხის მიღება.",
                "examples": [
                    "ის ყოველ დილით სვამს ყავას."
                ]
            }
        ],
        "v3": "დალეული"
    }
];
    const lang = "ka";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
