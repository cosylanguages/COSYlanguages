// TODO: verify level classification
(function() {
    const lang = "es";
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Una persona o cosa que es grande de abajo hacia arriba.",
                "examples": [
                    "Él es muy alto.",
                    "Ese edificio es alto."
                ]
            }
        ],
        "subtext": "un edificio alto / lo suficientemente alto",
        "synonyms": [
            "una persona alta"
        ],
        "comparative": "más alto",
        "superlative": "el más alto",
        "feminine": "alta",
        "plural": "altos",
        "femininePlural": "altas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_001",
        "antonyms": [
            "bajo"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "bajo",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Una persona o cosa que no es alta.",
                "examples": [
                    "Ella es baja.",
                    "El lápiz es corto."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "un viaje corto",
            "pelo corto",
            "demasiado corto"
        ],
        "comparative": "más bajo",
        "superlative": "el más bajo",
        "feminine": "baja",
        "plural": "bajos",
        "femininePlural": "bajas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_002",
        "antonyms": [
            "alto"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "joven",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que ha vivido o existido por poco tiempo.",
                "examples": [
                    "Él es un hombre joven."
                ]
            }
        ],
        "subtext": "persona joven / joven profesional / joven de corazón",
        "comparative": "más joven",
        "superlative": "el más joven",
        "feminine": "joven",
        "plural": "jóvenes",
        "femininePlural": "jóvenes",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_003",
        "antonyms": [
            "viejo"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "viejo",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que ha vivido o existido por mucho tiempo.",
                "examples": [
                    "Este es un libro viejo."
                ]
            }
        ],
        "subtext": "viejo amigo / viejos hábitos / muy viejo",
        "comparative": "más viejo",
        "superlative": "el más viejo",
        "feminine": "vieja",
        "plural": "viejos",
        "femininePlural": "viejas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_004",
        "antonyms": [
            "nuevo"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "soleado",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene mucha luz del sol.",
                "examples": [
                    "Es un día soleado."
                ]
            }
        ],
        "subtext": "día soleado / tiempo soleado / periodo soleado",
        "comparative": "más soleado",
        "superlative": "el más soleado",
        "feminine": "soleada",
        "plural": "soleados",
        "femininePlural": "soleadas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_007",
        "antonyms": [
            "lluvioso"
        ],
        "transcription": ""
    },
    {
        "word": "lluvioso",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene mucha lluvia.",
                "examples": [
                    "Es un día lluvioso."
                ]
            }
        ],
        "subtext": "día lluvioso / tiempo lluvioso",
        "synonyms": [
            "temporada de lluvias"
        ],
        "comparative": "más lluvioso",
        "superlative": "el más lluvioso",
        "feminine": "lluviosa",
        "plural": "lluviosos",
        "femininePlural": "lluviosas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_008",
        "antonyms": [
            "soleado"
        ],
        "transcription": ""
    },
    {
        "word": "caliente",
        "level": "starter",
        "theme": "nature",
        "emoji": "🔥",
        "form": "adjective",
        "subtext": "muy caliente / una bebida caliente / demasiado caliente",
        "synonyms": [
            "tiempo caluroso"
        ],
        "definitions": [
            {
                "text": "Que tiene una temperatura alta.",
                "examples": [
                    "El café está caliente."
                ]
            }
        ],
        "comparative": "más caliente",
        "superlative": "el más caliente",
        "feminine": "caliente",
        "plural": "calientes",
        "femininePlural": "calientes",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_009",
        "antonyms": [
            "frío"
        ],
        "transcription": ""
    },
    {
        "word": "frío",
        "level": "starter",
        "theme": "nature",
        "emoji": "❄️",
        "form": "adjective",
        "subtext": "muy frío / tiempo frío / demasiado frío",
        "synonyms": [
            "mañana fría",
            "una bebida fría"
        ],
        "definitions": [
            {
                "text": "Que tiene una temperatura baja.",
                "examples": [
                    "El agua está fría."
                ]
            }
        ],
        "comparative": "más frío",
        "superlative": "el más frío",
        "feminine": "fría",
        "plural": "fríos",
        "femininePlural": "frías",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_010",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "frigidus"
        },
        "antonyms": [
            "caliente"
        ],
        "transcription": ""
    },
    {
        "word": "ordinario",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Normal o usual; no especial.",
                "examples": [
                    "Fue un día ordinario."
                ]
            }
        ],
        "subtext": "día ordinario / nada fuera de lo común",
        "synonyms": [
            "vida ordinaria"
        ],
        "comparative": "más ordinario",
        "superlative": "el más ordinario",
        "feminine": "ordinaria",
        "plural": "ordinarios",
        "femininePlural": "ordinarias",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_005",
        "antonyms": [
            "especial"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "barato",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🏷️",
        "form": "adjective",
        "subtext": "precio bajo, barato / vuelo barato / muy barato",
        "synonyms": [
            "sencillo y bueno"
        ],
        "definitions": [
            {
                "text": "No caro; de bajo precio.",
                "examples": [
                    "Este café es barato."
                ]
            }
        ],
        "comparative": "más barato",
        "superlative": "el más barato",
        "feminine": "barata",
        "plural": "baratos",
        "femininePlural": "baratas",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_001",
        "antonyms": [
            "caro"
        ],
        "transcription": ""
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💎",
        "form": "adjective",
        "subtext": "muy caro / gusto caro / demasiado caro",
        "synonyms": [
            "costoso"
        ],
        "definitions": [
            {
                "text": "Que cuesta mucho dinero.",
                "examples": [
                    "Ese coche es caro."
                ]
            }
        ],
        "comparative": "más caro",
        "superlative": "el más caro",
        "feminine": "cara",
        "plural": "caros",
        "femininePlural": "caras",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_002",
        "antonyms": [
            "barato"
        ],
        "transcription": ""
    },
    {
        "word": "bueno",
        "level": "starter",
        "theme": "describing",
        "emoji": "👍",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "genial",
            "agradable",
            "buena idea",
            "buena suerte",
            "buen valor"
        ],
        "definitions": [
            {
                "text": "De alta calidad o agradable.",
                "examples": [
                    "Este es un buen trabajo."
                ]
            }
        ],
        "comparative": "mejor",
        "superlative": "el mejor",
        "feminine": "buena",
        "plural": "buenos",
        "femininePlural": "buenas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_006",
        "antonyms": [
            "malo"
        ],
        "transcription": ""
    },
    {
        "word": "malo",
        "level": "starter",
        "theme": "describing",
        "emoji": "👎",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "terrible",
            "horrible",
            "malas noticias",
            "mala suerte",
            "mala decisión"
        ],
        "definitions": [
            {
                "text": "No bueno; desagradable.",
                "examples": [
                    "El tiempo es malo hoy."
                ]
            }
        ],
        "comparative": "peor",
        "superlative": "el peor",
        "feminine": "mala",
        "plural": "malos",
        "femininePlural": "malas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_007",
        "antonyms": [
            "bueno"
        ],
        "transcription": ""
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐘",
        "form": "adjective",
        "subtext": "grande, enorme / una casa grande / suficientemente grande",
        "synonyms": [
            "un gran problema"
        ],
        "definitions": [
            {
                "text": "De gran tamaño.",
                "examples": [
                    "Es una oficina grande."
                ]
            }
        ],
        "comparative": "más grande",
        "superlative": "el más grande",
        "feminine": "grande",
        "plural": "grandes",
        "femininePlural": "grandes",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_008",
        "antonyms": [
            "pequeño"
        ],
        "transcription": ""
    },
    {
        "word": "pequeño",
        "level": "starter",
        "theme": "describing",
        "emoji": "🐭",
        "form": "adjective",
        "subtext": "pequeño, diminuto / un piso pequeño / un sueldo pequeño / demasiado pequeño",
        "definitions": [
            {
                "text": "De pequeño tamaño.",
                "examples": [
                    "Ella tiene un piso pequeño."
                ]
            }
        ],
        "comparative": "más pequeño",
        "superlative": "el más pequeño",
        "feminine": "pequeña",
        "plural": "pequeños",
        "femininePlural": "pequeñas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_009",
        "antonyms": [
            "grande"
        ],
        "transcription": ""
    },
    {
        "word": "fácil",
        "level": "starter",
        "theme": "describing",
        "emoji": "✅",
        "form": "adjective",
        "definitions": [
            {
                "text": "No difícil.",
                "examples": [
                    "El examen es fácil."
                ]
            }
        ],
        "subtext": "fácil de hacer / no es fácil",
        "synonyms": [
            "pan comido"
        ],
        "comparative": "más fácil",
        "superlative": "el más fácil",
        "feminine": "fácil",
        "plural": "fáciles",
        "femininePlural": "fáciles",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_010",
        "antonyms": [
            "difícil"
        ],
        "transcription": ""
    },
    {
        "word": "difícil",
        "level": "starter",
        "theme": "describing",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Duro de hacer o entender.",
                "examples": [
                    "Este trabajo es difícil."
                ]
            }
        ],
        "subtext": "difícil de hacer / muy difícil / resultarle difícil",
        "comparative": "más difícil",
        "superlative": "el más difícil",
        "feminine": "difícil",
        "plural": "difíciles",
        "femininePlural": "difíciles",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_011",
        "antonyms": [
            "fácil"
        ],
        "transcription": ""
    },
    {
        "word": "feliz",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "sentirse feliz / feliz con algo / un día feliz",
        "synonyms": [
            "alegre",
            "contento"
        ],
        "definitions": [
            {
                "text": "Que siente placer o alegría.",
                "examples": [
                    "Estoy feliz hoy."
                ]
            }
        ],
        "comparative": "más feliz",
        "superlative": "el más feliz",
        "feminine": "feliz",
        "plural": "felices",
        "femininePlural": "felices",
        "lang": "es",
        "sub_theme": "positive",
        "id": "es_starter_emotions_003",
        "antonyms": [
            "triste"
        ],
        "transcription": ""
    },
    {
        "word": "cansado",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sentirse cansado / cansado de algo / muy cansado",
        "synonyms": [
            "somnoliento",
            "agotado"
        ],
        "definitions": [
            {
                "text": "Que necesita descanso o sueño.",
                "examples": [
                    "Estoy muy cansado después del trabajo."
                ]
            }
        ],
        "comparative": "más cansado",
        "superlative": "el más cansado",
        "feminine": "cansada",
        "plural": "cansados",
        "femininePlural": "cansadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_004",
        "antonyms": [
            "enérgico"
        ],
        "transcription": ""
    },
    {
        "word": "a tiempo completo",
        "level": "starter",
        "theme": "work",
        "emoji": "⏰",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que trabaja el número completo de horas.",
                "examples": [
                    "Ella tiene un trabajo a tiempo completo."
                ]
            }
        ],
        "subtext": "trabajo a tiempo completo / empleo a tiempo completo / empleado a tiempo completo",
        "comparative": null,
        "superlative": null,
        "feminine": "a tiempo completo",
        "plural": "a tiempo completo",
        "femininePlural": "a tiempo completo",
        "lang": "es",
        "sub_theme": "office",
        "id": "es_starter_work_005",
        "antonyms": [
            "a tiempo parcial"
        ],
        "transcription": ""
    },
    {
        "word": "a tiempo parcial",
        "level": "starter",
        "theme": "work",
        "emoji": "⏳",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que trabaja menos horas que una semana estándar.",
                "examples": [
                    "Él trabaja a tiempo parcial los sábados."
                ]
            }
        ],
        "subtext": "trabajo a tiempo parcial / empleo a tiempo parcial / estudiante a tiempo parcial",
        "comparative": null,
        "superlative": null,
        "feminine": "a tiempo parcial",
        "plural": "a tiempo parcial",
        "femininePlural": "a tiempo parcial",
        "lang": "es",
        "sub_theme": "office",
        "id": "es_starter_work_006",
        "antonyms": [
            "a tiempo completo"
        ],
        "transcription": ""
    },
    {
        "word": "limpio",
        "level": "starter",
        "theme": "furniture",
        "emoji": "✨",
        "form": "adjective",
        "subtext": "ordenado, limpio / mantener limpio",
        "synonyms": [
            "ropa limpia",
            "una habitación limpia"
        ],
        "definitions": [
            {
                "text": "Libre de suciedad.",
                "examples": [
                    "El piso está limpio ahora."
                ]
            }
        ],
        "comparative": "más limpio",
        "superlative": "el más limpio",
        "feminine": "limpia",
        "plural": "limpios",
        "femininePlural": "limpias",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_008",
        "antonyms": [
            "sucio"
        ],
        "transcription": ""
    },
    {
        "word": "saludable",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥗",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "bien",
            "en forma",
            "dieta sana"
        ],
        "definitions": [
            {
                "text": "Bueno para tu cuerpo; no enfermo.",
                "examples": [
                    "Las verduras son comida saludable."
                ]
            }
        ],
        "comparative": "más saludable",
        "superlative": "el más saludable",
        "feminine": "saludable",
        "plural": "saludables",
        "femininePlural": "saludables",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_016",
        "antonyms": [
            "poco saludable"
        ],
        "transcription": ""
    },
    {
        "word": "enfermo",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🤒",
        "form": "adjective",
        "subtext": "enfermo",
        "synonyms": [
            "sentirse mal"
        ],
        "definitions": [
            {
                "text": "No bien; enfermo.",
                "examples": [
                    "Me siento enfermo hoy."
                ]
            }
        ],
        "comparative": "más enfermo",
        "superlative": "el más enfermo",
        "feminine": "enferma",
        "plural": "enfermos",
        "femininePlural": "enfermas",
        "lang": "es",
        "sub_theme": "symptoms",
        "id": "es_starter_health_medicine_002",
        "antonyms": [
            "bien"
        ],
        "transcription": ""
    },
    {
        "word": "en línea",
        "level": "starter",
        "theme": "technology",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Usando el internet.",
                "examples": [
                    "Compro comida en línea a veces."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "compras online",
            "curso online",
            "seguir conectado"
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "en línea",
        "plural": "en línea",
        "femininePlural": "en línea",
        "lang": "es",
        "sub_theme": "devices",
        "id": "es_starter_technology_005",
        "antonyms": [
            "desconectado"
        ],
        "transcription": ""
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "people",
        "emoji": "👤",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sin otras personas; por ti mismo.",
                "examples": [
                    "Ella vive sola."
                ]
            }
        ],
        "subtext": "vivir solo / viajar solo / sentirse solo",
        "comparative": "más solo",
        "superlative": "el más solo",
        "feminine": "sola",
        "plural": "solos",
        "femininePlural": "solas",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_012",
        "antonyms": [
            "together"
        ],
        "transcription": ""
    },
    {
        "word": "relajado",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😌",
        "form": "adjective",
        "subtext": "sentirse relajado",
        "synonyms": [
            "tranquilo"
        ],
        "definitions": [
            {
                "text": "Tranquilo; no preocupado ni estresado.",
                "examples": [
                    "Me siento relajado el fin de semana."
                ]
            }
        ],
        "comparative": "más relajado",
        "superlative": "el más relajado",
        "feminine": "relajada",
        "plural": "relajados",
        "femininePlural": "relajadas",
        "lang": "es",
        "sub_theme": "positive",
        "id": "es_starter_emotions_005",
        "antonyms": [
            "estresado"
        ],
        "transcription": ""
    },
    {
        "word": "preocupado",
        "level": "starter",
        "theme": "emotions",
        "emoji": "😟",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "ansioso"
        ],
        "definitions": [
            {
                "text": "Que siente ansiedad por algo que podría pasar.",
                "examples": [
                    "Ella está preocupada por su trabajo."
                ]
            }
        ],
        "comparative": "más preocupado",
        "superlative": "el más preocupado",
        "feminine": "preocupada",
        "plural": "preocupados",
        "femininePlural": "preocupadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_006",
        "antonyms": [
            "calm"
        ],
        "transcription": ""
    },
    {
        "word": "ocupado",
        "level": "starter",
        "theme": "work",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "muy ocupado / demasiado ocupado",
        "synonyms": [
            "día ajetreado",
            "agenda apretada"
        ],
        "definitions": [
            {
                "text": "Que tiene muchas cosas que hacer.",
                "examples": [
                    "Estoy muy ocupado esta semana."
                ]
            }
        ],
        "comparative": "más ocupado",
        "superlative": "el más ocupado",
        "feminine": "ocupada",
        "plural": "ocupados",
        "femininePlural": "ocupadas",
        "lang": "es",
        "sub_theme": "office",
        "id": "es_starter_work_007",
        "antonyms": [
            "libre"
        ],
        "transcription": ""
    },
    {
        "word": "útil",
        "level": "starter",
        "theme": "describing",
        "emoji": "🛠️",
        "form": "adjective",
        "subtext": "útil",
        "synonyms": [
            "práctico"
        ],
        "definitions": [
            {
                "text": "Útil; que tiene un propósito práctico.",
                "examples": [
                    "Un coche es muy útil en el campo."
                ]
            }
        ],
        "comparative": "más útil",
        "superlative": "el más útil",
        "feminine": "útil",
        "plural": "útiles",
        "femininePlural": "útiles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_012",
        "antonyms": [
            "inútil"
        ],
        "transcription": ""
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "reunión importante / muy importante / lo más importante",
        "synonyms": [
            "esencial"
        ],
        "definitions": [
            {
                "text": "Que tiene gran valor o efecto.",
                "examples": [
                    "Dormir es muy importante."
                ]
            }
        ],
        "comparative": "más importante",
        "superlative": "el más importante",
        "feminine": "importante",
        "plural": "importantes",
        "femininePlural": "importantes",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_013",
        "antonyms": [
            "poco importante"
        ],
        "transcription": ""
    },
    {
        "word": "rojo",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "rojo oscuro, rojo brillante / semáforo rojo",
        "synonyms": [
            "vino tinto",
            "cara roja"
        ],
        "definitions": [
            {
                "text": "Del color de la sangre.",
                "examples": [
                    "Ella tiene una bolsa roja."
                ]
            }
        ],
        "comparative": "más rojo",
        "superlative": "el más rojo",
        "feminine": "roja",
        "plural": "rojos",
        "femininePlural": "rojas",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_004",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "russus"
        },
        "transcription": ""
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "azul claro, azul oscuro / azul oscuro / azul claro / cielo azul",
        "definitions": [
            {
                "text": "Del color de un cielo despejado.",
                "examples": [
                    "Su coche es azul."
                ]
            }
        ],
        "comparative": "más azul",
        "superlative": "el más azul",
        "feminine": "azul",
        "plural": "azules",
        "femininePlural": "azules",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_005",
        "etymology": {
            "origin_lang": "Arabic",
            "origin_word": "lāzaward"
        },
        "transcription": ""
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "verde claro, verde oscuro / energía verde / zona verde / verde brillante",
        "definitions": [
            {
                "text": "Del color de la hierba.",
                "examples": [
                    "Ella lleva un vestido verde."
                ]
            }
        ],
        "comparative": "más verde",
        "superlative": "el más verde",
        "feminine": "verde",
        "plural": "verdes",
        "femininePlural": "verdes",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_006",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "viridis"
        },
        "transcription": ""
    },
    {
        "word": "blanco",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "blanco puro, blanco nieve / vino blanco / blanco roto / blanco brillante",
        "definitions": [
            {
                "text": "Del color de la nieve.",
                "examples": [
                    "Las paredes son blancas."
                ]
            }
        ],
        "comparative": "más blanco",
        "superlative": "el más blanco",
        "feminine": "blanca",
        "plural": "blancos",
        "femininePlural": "blancas",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_007",
        "etymology": {
            "origin_lang": "Germanic",
            "origin_word": "blank"
        },
        "transcription": ""
    },
    {
        "word": "negro",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "negro azabache, oscuro / mercado negro / negro intenso",
        "synonyms": [
            "café solo"
        ],
        "definitions": [
            {
                "text": "Del color más oscuro.",
                "examples": [
                    "Él lleva un abrigo negro."
                ]
            }
        ],
        "comparative": "más negro",
        "superlative": "el más negro",
        "feminine": "negra",
        "plural": "negros",
        "femininePlural": "negras",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_008",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "niger"
        },
        "transcription": ""
    },
    {
        "word": "amarillo",
        "level": "starter",
        "theme": "art_culture",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "amarillo brillante, limón / amarillo pálido / amarillo brillante",
        "synonyms": [
            "luz amarilla"
        ],
        "definitions": [
            {
                "text": "Del color del sol.",
                "examples": [
                    "Ella tiene un paraguas amarillo."
                ]
            }
        ],
        "comparative": "más amarillo",
        "superlative": "el más amarillo",
        "feminine": "amarilla",
        "plural": "amarillos",
        "femininePlural": "amarillas",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_009",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "amarellus"
        },
        "transcription": ""
    },
    {
        "word": "gratis",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "gratis, regalo",
        "synonyms": [
            "tiempo libre",
            "sin cargo",
            "libre de hacer"
        ],
        "definitions": [
            {
                "text": "Que no cuesta dinero.",
                "examples": [
                    "El museo es gratis los domingos."
                ]
            }
        ],
        "comparative": null,
        "superlative": null,
        "feminine": "gratis",
        "plural": "gratis",
        "femininePlural": "gratis",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_003",
        "transcription": ""
    },
    {
        "word": "abierto",
        "level": "starter",
        "theme": "shopping",
        "emoji": "📖",
        "form": "adjective",
        "subtext": "abierto, abierto al público / abierto a ideas / abierto de par en par",
        "synonyms": [
            "puerta abierta"
        ],
        "definitions": [
            {
                "text": "No cerrado.",
                "examples": [
                    "La tienda está abierta hasta las ocho."
                ]
            }
        ],
        "comparative": "más abierto",
        "superlative": "el más abierto",
        "feminine": "abierta",
        "plural": "abiertos",
        "femininePlural": "abiertas",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_004",
        "antonyms": [
            "cerrado"
        ],
        "transcription": ""
    },
    {
        "word": "cerrado",
        "level": "starter",
        "theme": "shopping",
        "emoji": "🔒",
        "form": "adjective",
        "subtext": "cerrado, cerrado temporalmente / cerrado por almuerzo",
        "synonyms": [
            "mente cerrada",
            "puerta cerrada"
        ],
        "definitions": [
            {
                "text": "No abierto.",
                "examples": [
                    "El banco está cerrado los domingos."
                ]
            }
        ],
        "comparative": "más cerrado",
        "superlative": "el más cerrado",
        "feminine": "cerrada",
        "plural": "cerrados",
        "femininePlural": "cerradas",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_005",
        "antonyms": [
            "abierto"
        ],
        "transcription": ""
    },
    {
        "word": "largo",
        "level": "starter",
        "form": "adjective",
        "subtext": "un viaje largo / un día largo",
        "synonyms": [
            "mucho tiempo"
        ],
        "definitions": [
            {
                "text": "De gran longitud.",
                "examples": [
                    "Ella tiene un viaje largo cada día."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más largo",
        "superlative": "el más largo",
        "feminine": "larga",
        "plural": "largos",
        "femininePlural": "largas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_014",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "largus"
        },
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "lleno",
        "level": "starter",
        "form": "adjective",
        "subtext": "lleno de gente",
        "synonyms": [
            "tiempo completo",
            "un día completo"
        ],
        "definitions": [
            {
                "text": "Que contiene tanto como es posible.",
                "examples": [
                    "Me siento lleno después de ese almuerzo."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más lleno",
        "superlative": "el más lleno",
        "feminine": "llena",
        "plural": "llenos",
        "femininePlural": "llenas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_015",
        "antonyms": [
            "vacío"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "vacío",
        "level": "starter",
        "form": "adjective",
        "subtext": "un piso vacío / casi vacío",
        "synonyms": [
            "una habitación vacía"
        ],
        "definitions": [
            {
                "text": "Que no contiene nada.",
                "examples": [
                    "La oficina está vacía los fines de semana."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más vacío",
        "superlative": "el más vacío",
        "feminine": "vacía",
        "plural": "vacíos",
        "femininePlural": "vacías",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_016",
        "antonyms": [
            "lleno"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "cálido",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "warm weather",
            "a warm welcome",
            "keep warm"
        ],
        "definitions": [
            {
                "text": "Ligeramente caliente; agradablemente calentado.",
                "examples": [
                    "La oficina es cálida y cómoda."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "más cálido",
        "superlative": "el más cálido",
        "feminine": "cálida",
        "plural": "cálidos",
        "femininePlural": "cálidas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_011",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "fresco",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "cool weather",
            "a cool drink",
            "stay cool"
        ],
        "definitions": [
            {
                "text": "Ligeramente frío.",
                "examples": [
                    "Ella prefiere el clima fresco para trabajar."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "más fresco",
        "superlative": "el más fresco",
        "feminine": "fresca",
        "plural": "frescos",
        "femininePlural": "frescas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_012",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "mojado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "wet weather",
            "wet clothes",
            "get wet"
        ],
        "definitions": [
            {
                "text": "Cubierto con agua o líquido.",
                "examples": [
                    "Su chaqueta está mojada por la lluvia."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "más mojado",
        "superlative": "el más mojado",
        "feminine": "mojada",
        "plural": "mojados",
        "femininePlural": "mojadas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_013",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "seco",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "dry weather",
            "dry skin",
            "keep dry"
        ],
        "definitions": [
            {
                "text": "Sin agua ni líquido.",
                "examples": [
                    "El cuarto de almacenamiento debe estar seco."
                ]
            }
        ],
        "theme": "nature",
        "comparative": "más seco",
        "superlative": "el más seco",
        "feminine": "seca",
        "plural": "secos",
        "femininePlural": "secas",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_014",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "sucio",
        "level": "starter",
        "theme": "furniture",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "manos sucias",
            "ropa sucia",
            "ensuciarse"
        ],
        "definitions": [
            {
                "text": "Cubierto de suciedad.",
                "examples": [
                    "Sus manos están sucias."
                ]
            }
        ],
        "comparative": "más sucio",
        "superlative": "el más sucio",
        "feminine": "sucia",
        "plural": "sucios",
        "femininePlural": "sucias",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_009",
        "antonyms": [
            "limpio"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "duro",
        "level": "starter",
        "form": "adjective",
        "subtext": "trabajo duro",
        "synonyms": [
            "una decisión difícil",
            "demasiado difícil"
        ],
        "definitions": [
            {
                "text": "Firme y sólido; difícil.",
                "examples": [
                    "La silla es muy dura."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más duro",
        "superlative": "el más duro",
        "feminine": "dura",
        "plural": "duros",
        "femininePlural": "duras",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_017",
        "antonyms": [
            "suave"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "suave",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "soft light",
            "soft music",
            "soft skills"
        ],
        "definitions": [
            {
                "text": "No duro; gentil al tacto.",
                "examples": [
                    "El sofá es muy suave."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más suave",
        "superlative": "el más suave",
        "feminine": "suave",
        "plural": "suaves",
        "femininePlural": "suaves",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_018",
        "antonyms": [
            "duro"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "pesado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "heavy traffic",
            "heavy rain",
            "too heavy"
        ],
        "definitions": [
            {
                "text": "De gran peso; difícil de llevar.",
                "examples": [
                    "La bolsa es muy pesada."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más pesado",
        "superlative": "el más pesado",
        "feminine": "pesada",
        "plural": "pesados",
        "femininePlural": "pesadas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_019",
        "antonyms": [
            "claro"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "ligero",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "light rain",
            "light traffic",
            "a light meal"
        ],
        "definitions": [
            {
                "text": "No pesado.",
                "examples": [
                    "Ella lleva una bolsa ligera."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más ligero",
        "superlative": "el más ligero",
        "feminine": "ligera",
        "plural": "ligeros",
        "femininePlural": "ligeras",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_020",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "marrón",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "dark brown",
            "light brown",
            "brown bread"
        ],
        "definitions": [
            {
                "text": "Del color de la madera o la tierra.",
                "examples": [
                    "Ella tiene ojos marrones."
                ]
            }
        ],
        "theme": "art_culture",
        "comparative": "más marrón",
        "superlative": "el más marrón",
        "feminine": "marrón",
        "plural": "marrones",
        "femininePlural": "marrones",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_010",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "gris",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "grey area",
            "grey sky",
            "pale grey"
        ],
        "definitions": [
            {
                "text": "De un color entre blanco y negro.",
                "examples": [
                    "Él tiene el pelo gris."
                ]
            }
        ],
        "theme": "art_culture",
        "comparative": "más gris",
        "superlative": "el más gris",
        "feminine": "gris",
        "plural": "grises",
        "femininePlural": "grises",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_011",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "light pink",
            "bright pink",
            "hot pink"
        ],
        "definitions": [
            {
                "text": "De un color rojo pálido.",
                "examples": [
                    "Ella prefiere el rosa al rojo."
                ]
            }
        ],
        "theme": "art_culture",
        "comparative": "más rosa",
        "superlative": "el más rosa",
        "feminine": "rosa",
        "plural": "rosas",
        "femininePlural": "rosas",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_012",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "naranja",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "bright orange",
            "dark orange",
            "orange light"
        ],
        "definitions": [
            {
                "text": "Del color de una naranja.",
                "examples": [
                    "Él compró una chaqueta naranja."
                ]
            }
        ],
        "theme": "art_culture",
        "comparative": "más naranja",
        "superlative": "el más naranja",
        "feminine": "naranja",
        "plural": "naranjas",
        "femininePlural": "naranjas",
        "lang": "es",
        "sub_theme": "basic",
        "id": "es_starter_art_culture_013",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "buenísimo",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "una gran idea",
            "una gran oportunidad",
            "gran valor"
        ],
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "Ella es una gerente buenísima."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "mejor",
        "superlative": "el mejor",
        "feminine": "buenísima",
        "plural": "buenísimos",
        "femininePlural": "buenísimas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_021",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "simpático",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "un buen día",
            "un buen lugar",
            "una buena persona"
        ],
        "definitions": [
            {
                "text": "Agradable o amable.",
                "examples": [
                    "La nueva oficina es muy bonita."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más simpático",
        "superlative": "el más simpático",
        "feminine": "simpática",
        "plural": "simpáticos",
        "femininePlural": "simpáticas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_022",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "maravilloso",
        "level": "starter",
        "form": "adjective",
        "subtext": "un tiempo maravilloso",
        "synonyms": [
            "una oportunidad maravillosa"
        ],
        "definitions": [
            {
                "text": "Extremadamente bueno; que causa deleite.",
                "examples": [
                    "Tenían un equipo maravilloso."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más maravilloso",
        "superlative": "el más maravilloso",
        "feminine": "maravillosa",
        "plural": "maravillosos",
        "femininePlural": "maravillosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_023",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "terrible",
        "level": "starter",
        "form": "adjective",
        "subtext": "terrible weather / a terrible mistake / terrible news",
        "definitions": [
            {
                "text": "Extremadamente malo.",
                "examples": [
                    "El tráfico esta mañana fue terrible."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más terrible",
        "superlative": "el más terrible",
        "feminine": "terrible",
        "plural": "terribles",
        "femininePlural": "terribles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_024",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "espantoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "awful weather",
            "awful news",
            "simply awful"
        ],
        "definitions": [
            {
                "text": "Muy malo o desagradable.",
                "examples": [
                    "El ruido es espantoso."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más espantoso",
        "superlative": "el más espantoso",
        "feminine": "espantosa",
        "plural": "espantosos",
        "femininePlural": "espantosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_025",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "increíble",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "an amazing result",
            "an amazing offer",
            "truly amazing"
        ],
        "definitions": [
            {
                "text": "Que causa gran sorpresa o admiración.",
                "examples": [
                    "Ella dio una presentación increíble."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más increíble",
        "superlative": "el más increíble",
        "feminine": "increíble",
        "plural": "increíbles",
        "femininePlural": "increíbles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_026",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "fantástico",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "fantastic news",
            "a fantastic opportunity",
            "truly fantastic"
        ],
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "El nuevo sistema funciona de forma fantástica."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más fantástico",
        "superlative": "el más fantástico",
        "feminine": "fantástica",
        "plural": "fantásticos",
        "femininePlural": "fantásticas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_027",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "triste",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentirse triste / una situación triste / profundamente triste",
        "definitions": [
            {
                "text": "Que se siente infeliz o apenado.",
                "examples": [
                    "Él estaba triste por dejar la empresa."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más triste",
        "superlative": "el más triste",
        "feminine": "triste",
        "plural": "tristes",
        "femininePlural": "tristes",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_007",
        "antonyms": [
            "feliz"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "hambriento",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "tener hambre",
            "mucha hambre",
            "pasar hambre"
        ],
        "definitions": [
            {
                "text": "Que necesita comida.",
                "examples": [
                    "Tengo hambre, ya son las dos."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más hambriento",
        "superlative": "el más hambriento",
        "feminine": "hambrienta",
        "plural": "hambrientos",
        "femininePlural": "hambrientas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_008",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "enfadado",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "sentirse enojado",
            "enojado con alguien",
            "muy enojado"
        ],
        "definitions": [
            {
                "text": "Que siente un fuerte disgusto.",
                "examples": [
                    "Ella estaba enfadada por la decisión."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más enfadado",
        "superlative": "el más enfadado",
        "feminine": "enfadada",
        "plural": "enfadados",
        "femininePlural": "enfadadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_009",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "aburrido",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentirse aburrido / aburrido de",
        "synonyms": [
            "se aburre fácilmente"
        ],
        "definitions": [
            {
                "text": "Que se siente sin interés.",
                "examples": [
                    "Él se siente aburrido en las reuniones largas."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más aburrido",
        "superlative": "el más aburrido",
        "feminine": "aburrida",
        "plural": "aburridos",
        "femininePlural": "aburridas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_010",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "emocionado",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "subtext": "sentirse emocionado / emocionado por / muy emocionado",
        "definitions": [
            {
                "text": "Que siente entusiasmo.",
                "examples": [
                    "Ella está emocionada por su nuevo trabajo."
                ]
            }
        ],
        "comparative": "más emocionado",
        "superlative": "el más emocionado",
        "feminine": "emocionada",
        "plural": "emocionados",
        "femininePlural": "emocionadas",
        "lang": "es",
        "sub_theme": "positive",
        "id": "es_starter_emotions_011",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "asustado",
        "level": "starter",
        "form": "adjective",
        "subtext": "muy asustado",
        "synonyms": [
            "miedo a",
            "tener miedo"
        ],
        "definitions": [
            {
                "text": "Que siente miedo.",
                "examples": [
                    "Él tiene miedo de cometer errores."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más asustado",
        "superlative": "el más asustado",
        "feminine": "asustada",
        "plural": "asustados",
        "femininePlural": "asustadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_012",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "arrepentido",
        "level": "starter",
        "form": "adjective",
        "subtext": "sentirse arrepentido",
        "synonyms": [
            "lo siento por",
            "perdón por"
        ],
        "definitions": [
            {
                "text": "Que siente pesar o tristeza.",
                "examples": [
                    "Ella siente el retraso."
                ]
            }
        ],
        "theme": "emotions",
        "comparative": "más arrepentido",
        "superlative": "el más arrepentido",
        "feminine": "arrepentida",
        "plural": "arrepentidos",
        "femininePlural": "arrepentidas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_013",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "correcto",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "respuesta correcta",
            "momento adecuado",
            "toda la razón"
        ],
        "definitions": [
            {
                "text": "Correcto; adecuado.",
                "examples": [
                    "¿Es esta la oficina correcta?"
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más correcto",
        "superlative": "el más correcto",
        "feminine": "correcta",
        "plural": "correctos",
        "femininePlural": "correctas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_028",
        "antonyms": [
            "incorrecto"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "incorrecto",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "wrong answer",
            "go wrong",
            "completely wrong"
        ],
        "definitions": [
            {
                "text": "No correcto; no adecuado.",
                "examples": [
                    "Esa fue la decisión incorrecta."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más incorrecto",
        "superlative": "el más incorrecto",
        "feminine": "incorrecta",
        "plural": "incorrectos",
        "femininePlural": "incorrectas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_029",
        "antonyms": [
            "correcto"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "nuevo",
        "level": "starter",
        "form": "adjective",
        "subtext": "trabajo nuevo / completamente nuevo",
        "synonyms": [
            "flamante"
        ],
        "definitions": [
            {
                "text": "Que no existía antes.",
                "examples": [
                    "Ella tiene un trabajo nuevo."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más nuevo",
        "superlative": "el más nuevo",
        "feminine": "nueva",
        "plural": "nuevos",
        "femininePlural": "nuevas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_030",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "novus"
        },
        "antonyms": [
            "viejo"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "diferente",
        "level": "starter",
        "form": "adjective",
        "subtext": "completamente diferente / muy diferente / diferente de",
        "definitions": [
            {
                "text": "No es lo mismo que otro.",
                "examples": [
                    "Este trabajo es muy diferente al anterior."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más diferente",
        "superlative": "el más diferente",
        "feminine": "diferente",
        "plural": "diferentes",
        "femininePlural": "diferentes",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_031",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "mismo",
        "level": "starter",
        "form": "adjective",
        "subtext": "el mismo que / exactamente el mismo / al mismo tiempo",
        "synonyms": [
            "exactamente igual"
        ],
        "definitions": [
            {
                "text": "No diferente; idéntico.",
                "examples": [
                    "Ganan el mismo sueldo."
                ]
            }
        ],
        "theme": "describing",
        "comparative": null,
        "superlative": null,
        "feminine": "misma",
        "plural": "mismos",
        "femininePlural": "mismas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_032",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "rápido",
        "level": "starter",
        "form": "adjective",
        "subtext": "tren rápido / muy rápido",
        "synonyms": [
            "comida rápida"
        ],
        "definitions": [
            {
                "text": "Que se mueve o sucede rápidamente.",
                "examples": [
                    "El tren al trabajo es rápido."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más rápido",
        "superlative": "el más rápido",
        "feminine": "rápida",
        "plural": "rápidos",
        "femininePlural": "rápidas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_033",
        "antonyms": [
            "lento"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "lento",
        "level": "starter",
        "form": "adjective",
        "subtext": "progreso lento / internet lento / muy lento",
        "definitions": [
            {
                "text": "No rápido.",
                "examples": [
                    "El nuevo sistema es muy lento."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más lento",
        "superlative": "el más lento",
        "feminine": "lenta",
        "plural": "lentos",
        "femininePlural": "lentas",
        "lang": "es",
        "sub_theme": "size_shape",
        "id": "es_starter_describing_034",
        "antonyms": [
            "rápido"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "tranquilo",
        "level": "starter",
        "form": "adjective",
        "subtext": "agradable y tranquilo",
        "synonyms": [
            "zona tranquila",
            "guardar silencio"
        ],
        "definitions": [
            {
                "text": "Que hace poco o ningún ruido.",
                "examples": [
                    "La oficina está tranquila a la hora del almuerzo."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más tranquilo",
        "superlative": "el más tranquilo",
        "feminine": "tranquila",
        "plural": "tranquilos",
        "femininePlural": "tranquilas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_035",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "ruidoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "",
        "synonyms": [
            "loud noise",
            "too loud",
            "a loud voice"
        ],
        "definitions": [
            {
                "text": "Que hace mucho ruido.",
                "examples": [
                    "La oficina es demasiado ruidosa."
                ]
            }
        ],
        "theme": "describing",
        "comparative": "más ruidoso",
        "superlative": "el más ruidoso",
        "feminine": "ruidosa",
        "plural": "ruidosos",
        "femininePlural": "ruidosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_036",
        "antonyms": [
            "silencioso"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "seguro",
        "level": "starter",
        "form": "adjective",
        "subtext": "seguro de hacer / sentirse seguro",
        "synonyms": [
            "zona segura"
        ],
        "definitions": [
            {
                "text": "No peligroso.",
                "examples": [
                    "Este barrio es muy seguro."
                ]
            }
        ],
        "theme": "places",
        "comparative": "más seguro",
        "superlative": "el más seguro",
        "feminine": "segura",
        "plural": "seguros",
        "femininePlural": "seguras",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_004",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "peligroso",
        "level": "starter",
        "form": "adjective",
        "subtext": "muy peligroso / potencialmente peligroso",
        "synonyms": [
            "situación peligrosa"
        ],
        "definitions": [
            {
                "text": "Que puede causar daño.",
                "examples": [
                    "Esa carretera es peligrosa."
                ]
            }
        ],
        "theme": "places",
        "comparative": "más peligroso",
        "superlative": "el más peligroso",
        "feminine": "peligrosa",
        "plural": "peligrosos",
        "femininePlural": "peligrosas",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_005",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "infeliz",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "No se siente satisfecho o feliz.",
                "examples": [
                    "Él es infeliz con su sueldo."
                ]
            }
        ],
        "subtext": "sentirse infeliz / muy infeliz",
        "synonyms": [
            "descontento con"
        ],
        "comparative": "más infeliz",
        "superlative": "el más infeliz",
        "feminine": "infeliz",
        "plural": "infelices",
        "femininePlural": "infelices",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_014",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "nervioso",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente ansiedad.",
                "examples": [
                    "Él estaba nervioso antes de la entrevista."
                ]
            }
        ],
        "subtext": "sentirse nervioso / nervioso por / muy nervioso",
        "comparative": "más nervioso",
        "superlative": "el más nervioso",
        "feminine": "nerviosa",
        "plural": "nerviosos",
        "femininePlural": "nerviosas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_015",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "estresado",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente preocupación y tensión.",
                "examples": [
                    "Ella se siente estresada antes de cada entrega."
                ]
            }
        ],
        "subtext": "sentirse estresado / muy estresado / estresado",
        "comparative": "más estresado",
        "superlative": "el más estresado",
        "feminine": "estresada",
        "plural": "estresados",
        "femininePlural": "estresadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_016",
        "antonyms": [
            "relajado"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "confiado",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Seguro de tus propias habilidades.",
                "examples": [
                    "Ella tiene mucha confianza en las presentaciones."
                ]
            }
        ],
        "subtext": "sentirse confiado / seguro de sí mismo / muy confiado",
        "comparative": "más confiado",
        "superlative": "el más confiado",
        "feminine": "confiada",
        "plural": "confiados",
        "femininePlural": "confiadas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_037",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "orgulloso",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se siente complacido por un logro.",
                "examples": [
                    "Él estaba orgulloso de su ascenso."
                ]
            }
        ],
        "subtext": "sentirse orgulloso / muy orgulloso / orgulloso de",
        "comparative": "más orgulloso",
        "superlative": "el más orgulloso",
        "feminine": "orgullosa",
        "plural": "orgullosos",
        "femininePlural": "orgullosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_038",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "sorprendido",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente asombro ante algo inesperado.",
                "examples": [
                    "Él se sorprendió al recibir un aumento."
                ]
            }
        ],
        "subtext": "sentirse sorprendido / muy sorprendido / gratamente sorprendido",
        "comparative": "más sorprendido",
        "superlative": "el más sorprendido",
        "feminine": "sorprendida",
        "plural": "sorprendidos",
        "femininePlural": "sorprendidas",
        "lang": "es",
        "sub_theme": "positive",
        "id": "es_starter_emotions_017",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "decepcionado",
        "level": "starter",
        "theme": "emotions",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se siente triste porque algo no fue como se esperaba.",
                "examples": [
                    "Ella estaba decepcionada por no conseguir el trabajo."
                ]
            }
        ],
        "subtext": "sentirse decepcionado / muy decepcionado / decepcionado con",
        "comparative": "más decepcionado",
        "superlative": "el más decepcionado",
        "feminine": "decepcionada",
        "plural": "decepcionados",
        "femininePlural": "decepcionadas",
        "lang": "es",
        "sub_theme": "negative",
        "id": "es_starter_emotions_018",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "hermoso",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Atractivo y agradable a la vista.",
                "examples": [
                    "Ella tiene una oficina hermosa."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "beautiful view",
            "beautiful city",
            "absolutely beautiful"
        ],
        "comparative": "más hermoso",
        "superlative": "el más hermoso",
        "feminine": "hermosa",
        "plural": "hermosos",
        "femininePlural": "hermosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_039",
        "antonyms": [
            "feo"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "bonito",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Agradable a la vista.",
                "examples": [
                    "La sala de reuniones es muy bonita."
                ]
            }
        ],
        "subtext": "un lugar bonito / bastante bonito",
        "synonyms": [
            "bastante bien"
        ],
        "comparative": "más bonito",
        "superlative": "el más bonito",
        "feminine": "bonita",
        "plural": "bonitos",
        "femininePlural": "bonitas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_040",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "fuerte",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene gran poder físico o mental.",
                "examples": [
                    "Ella es una líder fuerte."
                ]
            }
        ],
        "subtext": "café fuerte / muy fuerte",
        "synonyms": [
            "opinión firme"
        ],
        "comparative": "más fuerte",
        "superlative": "el más fuerte",
        "feminine": "fuerte",
        "plural": "fuertes",
        "femininePlural": "fuertes",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_041",
        "antonyms": [
            "débil"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "débil",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que carece de fuerza o poder.",
                "examples": [
                    "La señal es débil."
                ]
            }
        ],
        "subtext": "conexión débil / argumento débil / muy débil",
        "comparative": "más débil",
        "superlative": "el más débil",
        "feminine": "débil",
        "plural": "débiles",
        "femininePlural": "débiles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_042",
        "antonyms": [
            "fuerte"
        ],
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "en forma",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "definitions": [
            {
                "text": "En buena condición física.",
                "examples": [
                    "Ella se mantiene en forma."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "physically fit",
            "stay fit",
            "keep fit"
        ],
        "comparative": "más en forma",
        "superlative": "el más en forma",
        "feminine": "en forma",
        "plural": "en forma",
        "femininePlural": "en forma",
        "lang": "es",
        "sub_theme": "symptoms",
        "id": "es_starter_health_medicine_003",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "excelente",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "Ella recibió una reseña excelente."
                ]
            }
        ],
        "subtext": "trabajo excelente / excelentes resultados / absolutamente excelente",
        "comparative": "más excelente",
        "superlative": "el más excelente",
        "feminine": "excelente",
        "plural": "excelentes",
        "femininePlural": "excelentes",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_043",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "perfecto",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sin fallas; completamente correcto.",
                "examples": [
                    "El momento del lanzamiento fue perfecto."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "a perfect opportunity",
            "perfect timing",
            "absolutely perfect"
        ],
        "comparative": "más perfecto",
        "superlative": "el más perfecto",
        "feminine": "perfecta",
        "plural": "perfectos",
        "femininePlural": "perfectas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_044",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "inútil",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sin valor útil; no ayuda.",
                "examples": [
                    "Este software es inútil."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "completely useless",
            "prove useless",
            "a useless idea"
        ],
        "comparative": "más inútil",
        "superlative": "el más inútil",
        "feminine": "inútil",
        "plural": "inútiles",
        "femininePlural": "inútiles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_045",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "interesante",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que atrae la atención.",
                "examples": [
                    "La nueva propuesta es muy interesante."
                ]
            }
        ],
        "subtext": "encontrarlo interesante / muy interesante / una idea interesante",
        "comparative": "más interesante",
        "superlative": "el más interesante",
        "feminine": "interesante",
        "plural": "interesantes",
        "femininePlural": "interesantes",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_046",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "necesario",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Necesitado; requerido para hacer algo.",
                "examples": [
                    "Una buena conexión a internet es necesaria."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "absolutely necessary",
            "if necessary",
            "necessary to do"
        ],
        "comparative": "más necesario",
        "superlative": "el más necesario",
        "feminine": "necesaria",
        "plural": "necesarios",
        "femininePlural": "necesarias",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_047",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "posible",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Capaz de suceder o lograrse.",
                "examples": [
                    "¿Es posible terminar para el viernes?"
                ]
            }
        ],
        "subtext": "as soon as possible",
        "synonyms": [
            "it is possible",
            "make possible"
        ],
        "comparative": "más posible",
        "superlative": "el más posible",
        "feminine": "posible",
        "plural": "posibles",
        "femininePlural": "posibles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_048",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "imposible",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "No capaz de suceder o hacerse.",
                "examples": [
                    "Es imposible terminar en un día."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "virtually impossible",
            "make impossible",
            "nearly impossible"
        ],
        "comparative": "más imposible",
        "superlative": "el más imposible",
        "feminine": "imposible",
        "plural": "imposibles",
        "femininePlural": "imposibles",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_049",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "especial",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diferente de lo usual.",
                "examples": [
                    "Ella tiene un talento especial."
                ]
            }
        ],
        "subtext": "una oferta especial / ocasión especial / muy especial",
        "comparative": "más especial",
        "superlative": "el más especial",
        "feminine": "especial",
        "plural": "especiales",
        "femininePlural": "especiales",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_050",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "popular",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que le gusta a mucha gente.",
                "examples": [
                    "El nuevo café es muy popular."
                ]
            }
        ],
        "subtext": "muy popular / elección popular / el más popular",
        "comparative": "más popular",
        "superlative": "el más popular",
        "feminine": "popular",
        "plural": "populares",
        "femininePlural": "populares",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_051",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "similar",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Casi lo mismo.",
                "examples": [
                    "Nuestros enfoques son muy similares."
                ]
            }
        ],
        "subtext": "muy similar",
        "synonyms": [
            "parecido a",
            "resultados similares"
        ],
        "comparative": "más similar",
        "superlative": "el más similar",
        "feminine": "similar",
        "plural": "similares",
        "femininePlural": "similares",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_052",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "amigable",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Amable y agradable.",
                "examples": [
                    "El nuevo gerente es muy amigable."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "muy amable",
            "una cara amable",
            "ambiente agradable"
        ],
        "comparative": "más amigable",
        "superlative": "el más amigable",
        "feminine": "amigable",
        "plural": "amigables",
        "femininePlural": "amigables",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_053",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "amable",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Generoso con los demás.",
                "examples": [
                    "Ella es amable con todos."
                ]
            }
        ],
        "subtext": "muy amable / amable de su parte / una persona amable",
        "comparative": "más amable",
        "superlative": "el más amable",
        "feminine": "amable",
        "plural": "amables",
        "femininePlural": "amables",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_054",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "divertido",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que hace reír.",
                "examples": [
                    "Él tiene una forma divertida de explicar."
                ]
            }
        ],
        "subtext": "muy divertido / resultarle divertido",
        "synonyms": [
            "historia divertida"
        ],
        "comparative": "más divertido",
        "superlative": "el más divertido",
        "feminine": "divertida",
        "plural": "divertidos",
        "femininePlural": "divertidas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_055",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "listo",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Inteligente; rápido para entender.",
                "examples": [
                    "Ella es una negociadora lista."
                ]
            }
        ],
        "subtext": "",
        "synonyms": [
            "muy inteligente",
            "una idea inteligente",
            "bastante inteligente"
        ],
        "comparative": "más listo",
        "superlative": "el más listo",
        "feminine": "lista",
        "plural": "listos",
        "femininePlural": "listas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_056",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "educado",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se comporta de forma respetuosa.",
                "examples": [
                    "Él siempre es educado con los clientes."
                ]
            }
        ],
        "subtext": "muy educado / bastante educado",
        "synonyms": [
            "petición educada"
        ],
        "comparative": "más educado",
        "superlative": "el más educado",
        "feminine": "educada",
        "plural": "educados",
        "femininePlural": "educadas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_057",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "grosero",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "No educado.",
                "examples": [
                    "Ese correo fue bastante grosero."
                ]
            }
        ],
        "subtext": "muy grosero / increíblemente grosero / deliberadamente grosero",
        "comparative": "más grosero",
        "superlative": "el más grosero",
        "feminine": "grosera",
        "plural": "groseros",
        "femininePlural": "groseras",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_058",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "perezoso",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "No dispuesto a trabajar.",
                "examples": [
                    "Tiene reputación de ser perezoso."
                ]
            }
        ],
        "subtext": "muy perezoso / un enfoque perezoso / demasiado perezoso",
        "comparative": "más perezoso",
        "superlative": "el más perezoso",
        "feminine": "perezosa",
        "plural": "perezosos",
        "femininePlural": "perezosas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_059",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "honesto",
        "level": "starter",
        "theme": "describing",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que dice la verdad.",
                "examples": [
                    "Ella es conocida por ser honesta."
                ]
            }
        ],
        "subtext": "muy honesto / brutalmente honesto / completamente honesto",
        "comparative": "más honesto",
        "superlative": "el más honesto",
        "feminine": "honesta",
        "plural": "honestos",
        "femininePlural": "honestas",
        "lang": "es",
        "sub_theme": "quality",
        "id": "es_starter_describing_060",
        "transcription": "",
        "emoji": "✨"
    },
    {
        "word": "sediento",
        "level": "starter",
        "theme": "health_medicine",
        "form": "adjective",
        "transcription": "se.ˈðjen.to",
        "feminine": "sedienta",
        "plural": "sedientos",
        "subtext": "estar sediento",
        "definitions": [
            {
                "text": "Que tiene sed.",
                "examples": [
                    "Estoy sediento después de correr."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "health",
        "id": "es_starter_health_medicine_004",
        "emoji": "✨"
    },
    {
        "word": "tímido",
        "level": "starter",
        "theme": "people",
        "form": "adjective",
        "transcription": "ˈti.mi.ðo",
        "feminine": "tímida",
        "plural": "tímidos",
        "subtext": "un chico tímido",
        "definitions": [
            {
                "text": "Que siente vergüenza ante los demás.",
                "examples": [
                    "Mi hermano es muy tímido."
                ]
            }
        ],
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_013",
        "emoji": "✨"
    }
];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
