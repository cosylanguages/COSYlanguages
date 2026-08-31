// TODO: verify level classification
(function() {
    const lang = "pt";
    const data = [
    {
        "word": "cão",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal doméstico leal e amigo do ser humano.",
                "examples": [
                    "O cão corre no jardim."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ̃w̃",
        "id": "pt_starter_animals_001"
    },
    {
        "word": "gato",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐈",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pequeno animal doméstico com pelo suave.",
                "examples": [
                    "O gato dorme no sofá."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈɡa.tu",
        "id": "pt_starter_animals_002"
    },
    {
        "word": "pássaro",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal com penas que voa no ar.",
                "examples": [
                    "O pássaro canta na árvore."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈpa.sɐ.ru",
        "id": "pt_starter_animals_003"
    },
    {
        "word": "peixe",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal aquático que vive na água.",
                "examples": [
                    "O peixe nada no rio."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈpɐj.ʃɨ",
        "id": "pt_starter_animals_004"
    },
    {
        "word": "vaca",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal grande da quinta que dá leite.",
                "examples": [
                    "A vaca come erva."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "ˈva.kɐ",
        "id": "pt_starter_animals_005"
    },
    {
        "word": "cavalo",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal forte e rápido que se pode montar.",
                "examples": [
                    "O cavalo corre velozmente."
                ]
            }
        ],
        "lang": "pt",
        "transcription": "kɐ.ˈva.lu",
        "id": "pt_starter_animals_006"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
