(function() {
    const data = [
    {
        "word": "красный",
        "translation": "red",
        "level": "starter",
        "theme": "colours",
        "emoji": "🔴",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвет крови.",
                "examples": [
                    "Красное яблоко."
                ]
            }
        ],
        "transcription": "ˈkrasnɨj",
        "id": "ru_starter_colours_001",
        "lang": "ru"
    },
    {
        "word": "синий",
        "translation": "blue",
        "level": "starter",
        "theme": "colours",
        "emoji": "🔵",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвет неба.",
                "examples": [
                    "Синее море."
                ]
            }
        ],
        "transcription": "ˈsʲinʲɪj",
        "id": "ru_starter_colours_002",
        "lang": "ru",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "sinьjь"
        }
    },
    {
        "word": "зелёный",
        "translation": "green",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвет травы.",
                "examples": [
                    "Зелёный лист."
                ]
            }
        ],
        "transcription": "zʲɪˈlʲonɨj",
        "id": "ru_starter_colours_003",
        "lang": "ru"
    },
    {
        "word": "жёлтый",
        "translation": "yellow",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвет солнца.",
                "examples": [
                    "Жёлтый цветок."
                ]
            }
        ],
        "transcription": "ˈʐoltɨj",
        "id": "ru_starter_colours_004",
        "lang": "ru"
    },
    {
        "word": "белый",
        "translation": "white",
        "level": "starter",
        "theme": "colours",
        "emoji": "⚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Цвет снега.",
                "examples": [
                    "Белый снег."
                ]
            }
        ],
        "transcription": "ˈbʲelɨj",
        "id": "ru_starter_colours_005",
        "lang": "ru",
        "etymology": {
            "origin_lang": "Proto-Slavic",
            "origin_word": "bělъ"
        }
    }
];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
