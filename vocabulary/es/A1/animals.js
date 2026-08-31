// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "perro",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal doméstico leal y amigo del ser humano.",
                "examples": [
                    "El perro corre en el parque."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈpe.ro",
        "id": "es_starter_animals_001"
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
                "text": "Pequeño animal doméstico con pelo suave.",
                "examples": [
                    "El gato duerme en el sofá."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈɡa.to",
        "id": "es_starter_animals_002"
    },
    {
        "word": "pájaro",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐦",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal con plumas que vuela en el aire.",
                "examples": [
                    "El pájaro canta en el árbol."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈpa.xa.ro",
        "id": "es_starter_animals_003"
    },
    {
        "word": "pez",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal acuático que vive en el agua.",
                "examples": [
                    "El pez nada en el río."
                ]
            }
        ],
        "lang": "es",
        "transcription": "peθ",
        "id": "es_starter_animals_004"
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
                "text": "Animal grande de granja que da leche.",
                "examples": [
                    "La vaca come hierba."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ˈba.ka",
        "id": "es_starter_animals_005"
    },
    {
        "word": "caballo",
        "level": "starter",
        "theme": "animals",
        "emoji": "🐎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Animal fuerte y rápido que se puede montar.",
                "examples": [
                    "El caballo corre velozmente."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ka.ˈβa.ʝo",
        "id": "es_starter_animals_006"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
