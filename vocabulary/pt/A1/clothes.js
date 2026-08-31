// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "camisa",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👔",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Roupa com botões para a parte superior do corpo.",
                "examples": [
                    "Visto uma camisa branca."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈmi.zɐ",
        "id": "pt_starter_clothes_001"
    },
    {
        "word": "calças",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Roupa que cobre as pernas.",
                "examples": [
                    "Comprei umas calças azuis."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈkal.sɐʃ",
        "id": "pt_starter_clothes_002"
    },
    {
        "word": "vestido",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Peça de vestuário feminina de uma só peça.",
                "examples": [
                    "Ela veste um vestido vermelho muito bonito."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "vɨʃ.ˈti.ðu",
        "id": "pt_starter_clothes_003"
    },
    {
        "word": "sapato",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Calçado para proteger os pés.",
                "examples": [
                    "Os meus sapatos novos são confortáveis."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "sɐ.ˈpa.tu",
        "id": "pt_starter_clothes_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
