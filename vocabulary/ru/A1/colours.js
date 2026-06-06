(function() {
    const data = [
    {
        "word": "красный",
        "translation": "red",
        "level": "starter",
        "theme": "colours",
        "language": "ru",
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
        "transcription": "/ˈkrasnɨj/"
    },
    {
        "word": "синий",
        "translation": "blue",
        "level": "starter",
        "theme": "colours",
        "language": "ru",
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
        "transcription": "/ˈsʲinʲɪj/"
    },
    {
        "word": "зелёный",
        "translation": "green",
        "level": "starter",
        "theme": "colours",
        "language": "ru",
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
        "transcription": "/zʲɪˈlʲonɨj/"
    },
    {
        "word": "жёлтый",
        "translation": "yellow",
        "level": "starter",
        "theme": "colours",
        "language": "ru",
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
        "transcription": "/ˈʐoltɨj/"
    },
    {
        "word": "белый",
        "translation": "white",
        "level": "starter",
        "theme": "colours",
        "language": "ru",
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
        "transcription": "/ˈbʲelɨj/"
    }
    ];
    const lang = "ru";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
