// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "pai",
        "level": "starter",
        "theme": "family",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "O homem que tem filhos.",
                "examples": [
                    "O meu pai trabalha num escritório."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "paj",
        "id": "pt_starter_family_001"
    },
    {
        "word": "mãe",
        "level": "starter",
        "theme": "family",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A mulher que tem filhos.",
                "examples": [
                    "A minha mãe prepara a refeição."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "mɐ̃j̃",
        "id": "pt_starter_family_002"
    },
    {
        "word": "irmão",
        "level": "starter",
        "theme": "family",
        "emoji": "👦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Filho dos mesmos pais.",
                "examples": [
                    "Tenho um irmão mais velho."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ir.ˈmɐ̃w̃",
        "id": "pt_starter_family_003"
    },
    {
        "word": "irmã",
        "level": "starter",
        "theme": "family",
        "emoji": "👧",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Filha dos mesmos pais.",
                "examples": [
                    "A minha irmã estuda na escola."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ir.ˈmɐ̃",
        "id": "pt_starter_family_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
