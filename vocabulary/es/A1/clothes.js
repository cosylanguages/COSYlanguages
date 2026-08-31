// TODO: verify level classification
(function() {
    const lang = "es";
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
                "text": "Ropa con botones para la parte superior del cuerpo.",
                "examples": [
                    "Llevo una camisa blanca."
                ]
            }
        ],
        "lang": "es",
        "transcription": "ka.ˈmi.sa",
        "id": "es_starter_clothes_001"
    },
    {
        "word": "pantalón",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ropa que cubre las piernas.",
                "examples": [
                    "Me compré un pantalón azul."
                ]
            }
        ],
        "lang": "es",
        "transcription": "pan.ta.ˈlon",
        "id": "es_starter_clothes_002"
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
                "text": "Prenda de vestir femenina de una sola pieza.",
                "examples": [
                    "Lleva un vestido rojo muy bonito."
                ]
            }
        ],
        "lang": "es",
        "transcription": "bes.ˈti.ðo",
        "id": "es_starter_clothes_003"
    },
    {
        "word": "zapato",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👟",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Calzado para proteger los pies.",
                "examples": [
                    "Mis zapatos nuevos son cómodos."
                ]
            }
        ],
        "lang": "es",
        "transcription": "θa.ˈpa.to",
        "id": "es_starter_clothes_004"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
