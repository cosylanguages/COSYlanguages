// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "preto",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬛",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A cor da noite.",
                "examples": [
                    "Tenho um fato preto."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈpre.tu",
        "id": "pt_starter_colours_001"
    },
    {
        "word": "branco",
        "level": "starter",
        "theme": "colours",
        "emoji": "⬜",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A cor da neve e do leite.",
                "examples": [
                    "A neve é branca."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈbrɐ̃.ku",
        "id": "pt_starter_colours_002"
    },
    {
        "word": "vermelho",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟥",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A cor do fogo e dos morangos.",
                "examples": [
                    "Gosto da maçã vermelha."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "vɨr.ˈme.ʎu",
        "id": "pt_starter_colours_003"
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟦",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A cor do céu limpo e do mar.",
                "examples": [
                    "O céu está azul hoje."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ɐ.ˈzul",
        "id": "pt_starter_colours_004"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours",
        "emoji": "🟩",
        "form": "adjective",
        "classification": "regular",
        "countability": "null",
        "definitions": [
            {
                "text": "A cor das plantas e das folhas.",
                "examples": [
                    "A relva é verde."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈver.dɨ",
        "id": "pt_starter_colours_005"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
