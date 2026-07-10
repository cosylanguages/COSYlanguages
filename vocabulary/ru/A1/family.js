(function() {
    const data = [
    {
        "word": "мама",
        "translation": "mom",
        "level": "starter",
        "theme": "family",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Мать.",
                "examples": [
                    "Моя мама добрая."
                ]
            }
        ],
        "transcription": "ˈmamə",
        "id": "ru_starter_family_001",
        "lang": "ru"
    },
    {
        "word": "папа",
        "translation": "dad",
        "level": "starter",
        "theme": "family",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Отец.",
                "examples": [
                    "Мой папа на работе."
                ]
            }
        ],
        "transcription": "ˈpapə",
        "id": "ru_starter_family_002",
        "lang": "ru"
    },
    {
        "word": "брат",
        "translation": "brother",
        "level": "starter",
        "theme": "family",
        "emoji": "👦",
        "form": "noun",
        "definitions": [
            {
                "text": "Сын тех же родителей.",
                "examples": [
                    "У меня есть брат."
                ]
            }
        ],
        "transcription": "brat",
        "id": "ru_starter_family_003",
        "lang": "ru"
    },
    {
        "word": "сестра",
        "translation": "sister",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "definitions": [
            {
                "text": "Дочь тех же родителей.",
                "examples": [
                    "Моя сестра учится в школе."
                ]
            }
        ],
        "transcription": "sʲɪˈstra",
        "id": "ru_starter_family_004",
        "lang": "ru"
    },
    {
        "word": "семья",
        "translation": "family",
        "level": "starter",
        "theme": "family",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Группа родственников.",
                "examples": [
                    "У нас большая семья."
                ]
            }
        ],
        "transcription": "sʲɪˈmʲja",
        "id": "ru_starter_family_005",
        "lang": "ru"
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
