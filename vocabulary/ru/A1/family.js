(function() {
    const lang = "ru";
    const data = [
    {
        "word": "мама",
        "translation": "mom",
        "level": "starter",
        "theme": "family",
        "language": "ru",
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
        "transcription": "/ˈmamə/",
        "lang": "ru",
        "id": "ru_starter_family_001"
    },
    {
        "word": "папа",
        "translation": "dad",
        "level": "starter",
        "theme": "family",
        "language": "ru",
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
        "transcription": "/ˈpapə/",
        "lang": "ru",
        "id": "ru_starter_family_002"
    },
    {
        "word": "брат",
        "translation": "brother",
        "level": "starter",
        "theme": "family",
        "language": "ru",
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
        "transcription": "/brat/",
        "lang": "ru",
        "id": "ru_starter_family_003",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "bratrъ"
        }
    },
    {
        "word": "сестра",
        "translation": "sister",
        "level": "starter",
        "theme": "family",
        "language": "ru",
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
        "transcription": "/sʲɪˈstra/",
        "lang": "ru",
        "id": "ru_starter_family_004",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sestra"
        }
    },
    {
        "word": "семья",
        "translation": "family",
        "level": "starter",
        "theme": "family",
        "language": "ru",
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
        "transcription": "/sʲɪˈmʲja/",
        "lang": "ru",
        "id": "ru_starter_family_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
