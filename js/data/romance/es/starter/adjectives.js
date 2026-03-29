(function() {
    const data = [
    {
        "word": "alto",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "bajo",
        "oppositeEmoji": "📏",
        "definitions": [
            {
                "text": "Una persona o cosa que es grande de abajo hacia arriba.",
                "examples": [
                    "Él es muy alto.",
                    "Ese edificio es alto."
                ]
            }
        ],
        "subtext": "un edificio alto / una persona alta / lo suficientemente alto",
        "comparative": "más alto",
        "superlative": "el más alto",
        "feminine": "alta",
        "plural": "altos",
        "femininePlural": "altas"
    },
    {
        "word": "bajo",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "alto",
        "oppositeEmoji": "🗼",
        "definitions": [
            {
                "text": "Una persona o cosa que no es alta.",
                "examples": [
                    "Ella es baja.",
                    "El lápiz es corto."
                ]
            }
        ],
        "subtext": "a short journey / short hair / too short",
        "comparative": "más bajo",
        "superlative": "el más bajo",
        "feminine": "baja",
        "plural": "bajos",
        "femininePlural": "bajas"
    },
    {
        "word": "joven",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "viejo",
        "oppositeEmoji": "👴",
        "definitions": [
            {
                "text": "Que ha vivido o existido por poco tiempo.",
                "examples": [
                    "Él es un hombre joven."
                ]
            }
        ],
        "subtext": "young person / young professional / young at heart",
        "comparative": "más joven",
        "superlative": "el más joven",
        "feminine": "joven",
        "plural": "jóvenes",
        "femininePlural": "jóvenes"
    },
    {
        "word": "viejo",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "joven",
        "oppositeEmoji": "👶",
        "definitions": [
            {
                "text": "Que ha vivido o existido por mucho tiempo.",
                "examples": [
                    "Este es un libro viejo."
                ]
            }
        ],
        "subtext": "old friend / old habits / very old",
        "comparative": "más viejo",
        "superlative": "el más viejo",
        "feminine": "vieja",
        "plural": "viejos",
        "femininePlural": "viejas"
    },
    {
        "word": "soleado",
        "level": "starter",
        "theme": "weather_A1",
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
        "subtext": "sunny day / sunny weather / sunny spell",
        "comparative": "más soleado",
        "superlative": "el más soleado",
        "feminine": "soleada",
        "plural": "soleados",
        "femininePlural": "soleadas"
    },
    {
        "word": "lluvioso",
        "level": "starter",
        "theme": "weather_A1",
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
        "subtext": "rainy day / rainy weather / rainy season",
        "comparative": "más lluvioso",
        "superlative": "el más lluvioso",
        "feminine": "lluviosa",
        "plural": "lluviosos",
        "femininePlural": "lluviosas"
    },
    {
        "word": "caliente",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "frío",
        "oppositeEmoji": "❄️",
        "subtext": "very hot, hot weather / hot weather / a hot drink / too hot",
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
        "femininePlural": "calientes"
    },
    {
        "word": "frío",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "❄️",
        "form": "adjective",
        "opposite": "caliente",
        "oppositeEmoji": "🔥",
        "subtext": "very cold, cold morning / cold weather / a cold drink / too cold",
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
        "femininePlural": "frías"
    },
    {
        "word": "ordinario",
        "level": "starter",
        "theme": "size_shape_A1",
        "form": "adjective",
        "opposite": "especial",
        "oppositeEmoji": "✨",
        "definitions": [
            {
                "text": "Normal o usual; no especial.",
                "examples": [
                    "Fue un día ordinario."
                ]
            }
        ],
        "subtext": "ordinary day / ordinary life / nothing ordinary",
        "comparative": "más ordinario",
        "superlative": "el más ordinario",
        "feminine": "ordinaria",
        "plural": "ordinarios",
        "femininePlural": "ordinarias"
    },
    {
        "word": "barato",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "form": "adjective",
        "opposite": "caro",
        "oppositeEmoji": "💎",
        "subtext": "low price, inexpensive / cheap flight / very cheap / cheap and cheerful",
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
        "femininePlural": "baratas"
    },
    {
        "word": "caro",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💎",
        "form": "adjective",
        "opposite": "barato",
        "oppositeEmoji": "🏷️",
        "subtext": "costly, high price / very expensive / expensive taste / too expensive",
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
        "femininePlural": "caras"
    },
    {
        "word": "bueno",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👍",
        "form": "adjective",
        "opposite": "malo",
        "oppositeEmoji": "👎",
        "subtext": "great, nice, pleasant / good idea / good luck / good value",
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
        "femininePlural": "buenas"
    },
    {
        "word": "malo",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "👎",
        "form": "adjective",
        "opposite": "bueno",
        "oppositeEmoji": "👍",
        "subtext": "terrible, awful, unpleasant / bad news / bad luck / bad decision",
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
        "femininePlural": "malas"
    },
    {
        "word": "grande",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐘",
        "form": "adjective",
        "opposite": "pequeño",
        "oppositeEmoji": "🐭",
        "subtext": "large, huge / a big house / a big problem / big enough",
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
        "femininePlural": "grandes"
    },
    {
        "word": "pequeño",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "🐭",
        "form": "adjective",
        "opposite": "grande",
        "oppositeEmoji": "🐘",
        "subtext": "little, tiny / a small flat / a small salary / too small",
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
        "femininePlural": "pequeñas"
    },
    {
        "word": "fácil",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difícil",
        "oppositeEmoji": "❌",
        "definitions": [
            {
                "text": "No difícil.",
                "examples": [
                    "El examen es fácil."
                ]
            }
        ],
        "subtext": "easy to do / nice and easy / not easy",
        "comparative": "más fácil",
        "superlative": "el más fácil",
        "feminine": "fácil",
        "plural": "fáciles",
        "femininePlural": "fáciles"
    },
    {
        "word": "difícil",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "❌",
        "form": "adjective",
        "opposite": "fácil",
        "oppositeEmoji": "✅",
        "definitions": [
            {
                "text": "Duro de hacer o entender.",
                "examples": [
                    "Este trabajo es difícil."
                ]
            }
        ],
        "subtext": "difficult to do / very difficult / find it difficult",
        "comparative": "más difícil",
        "superlative": "el más difícil",
        "feminine": "difícil",
        "plural": "difíciles",
        "femininePlural": "difíciles"
    },
    {
        "word": "feliz",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "form": "adjective",
        "subtext": "glad, cheerful, feel happy / feel happy / happy with something / a happy day",
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
        "femininePlural": "felices"
    },
    {
        "word": "cansado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😫",
        "form": "adjective",
        "subtext": "sleepy, exhausted, feel tired / feel tired / tired of something / very tired",
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
        "femininePlural": "cansadas"
    },
    {
        "word": "a tiempo completo",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "adjective",
        "opposite": "a tiempo parcial",
        "oppositeEmoji": "⏳",
        "definitions": [
            {
                "text": "Que trabaja el número completo de horas.",
                "examples": [
                    "Ella tiene un trabajo a tiempo completo."
                ]
            }
        ],
        "subtext": "full-time job / full-time work / full-time employee",
        "comparative": null,
        "superlative": null,
        "feminine": "a tiempo completo",
        "plural": "a tiempo completo",
        "femininePlural": "a tiempo completo"
    },
    {
        "word": "a tiempo parcial",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "form": "adjective",
        "opposite": "a tiempo completo",
        "oppositeEmoji": "⏰",
        "definitions": [
            {
                "text": "Que trabaja menos horas que una semana estándar.",
                "examples": [
                    "Él trabaja a tiempo parcial los sábados."
                ]
            }
        ],
        "subtext": "part-time job / part-time work / part-time student",
        "comparative": null,
        "superlative": null,
        "feminine": "a tiempo parcial",
        "plural": "a tiempo parcial",
        "femininePlural": "a tiempo parcial"
    },
    {
        "word": "limpio",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "✨",
        "form": "adjective",
        "opposite": "sucio",
        "oppositeEmoji": "💩",
        "subtext": "tidy, not dirty, keep it clean / clean clothes / a clean room / keep clean",
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
        "femininePlural": "limpias"
    },
    {
        "word": "saludable",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "unhealthy",
        "oppositeEmoji": "🍔",
        "subtext": "well, fit, healthy diet",
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
        "femininePlural": "saludables"
    },
    {
        "word": "enfermo",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "well",
        "oppositeEmoji": "💪",
        "subtext": "sick, feel ill",
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
        "femininePlural": "enfermas"
    },
    {
        "word": "en línea",
        "level": "starter",
        "theme": "using_a_smartphone_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "offline",
        "oppositeEmoji": "📴",
        "definitions": [
            {
                "text": "Usando el internet.",
                "examples": [
                    "Compro comida en línea a veces."
                ]
            }
        ],
        "subtext": "online shopping / online course / stay online",
        "comparative": null,
        "superlative": null,
        "feminine": "en línea",
        "plural": "en línea",
        "femininePlural": "en línea"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "together",
        "oppositeEmoji": "👫",
        "definitions": [
            {
                "text": "Sin otras personas; por ti mismo.",
                "examples": [
                    "Ella vive sola."
                ]
            }
        ],
        "subtext": "live alone / travel alone / feel alone",
        "comparative": "más solo",
        "superlative": "el más solo",
        "feminine": "sola",
        "plural": "solos",
        "femininePlural": "solas"
    },
    {
        "word": "relajado",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😌",
        "form": "adjective",
        "opposite": "estresado",
        "oppositeEmoji": "😫",
        "subtext": "calm, feeling relaxed",
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
        "femininePlural": "relajadas"
    },
    {
        "word": "preocupado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😟",
        "form": "adjective",
        "opposite": "calm",
        "oppositeEmoji": "😌",
        "subtext": "anxious",
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
        "femininePlural": "preocupadas"
    },
    {
        "word": "ocupado",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏃",
        "form": "adjective",
        "subtext": "very busy, busy day / busy schedule / very busy / too busy",
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
        "femininePlural": "ocupadas"
    },
    {
        "word": "útil",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inútil",
        "oppositeEmoji": "🗑️",
        "subtext": "helpful, practical",
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
        "femininePlural": "útiles"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "❗",
        "form": "adjective",
        "subtext": "essential / important meeting / very important / most important",
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
        "femininePlural": "importantes"
    },
    {
        "word": "rojo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟥",
        "form": "adjective",
        "subtext": "dark red, bright red / red wine / red face / red light",
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
        "femininePlural": "rojas"
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟦",
        "form": "adjective",
        "subtext": "light blue, dark blue / dark blue / light blue / blue sky",
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
        "femininePlural": "azules"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟩",
        "form": "adjective",
        "subtext": "bright green, dark green / green energy / green space / bright green",
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
        "femininePlural": "verdes"
    },
    {
        "word": "blanco",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬜",
        "form": "adjective",
        "subtext": "pure white, snow white / white wine / off-white / bright white",
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
        "femininePlural": "blancas"
    },
    {
        "word": "negro",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "⬛",
        "form": "adjective",
        "subtext": "jet black, dark as night / black coffee / black market / jet black",
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
        "femininePlural": "negras"
    },
    {
        "word": "amarillo",
        "level": "starter",
        "theme": "colours_patterns_A1",
        "emoji": "🟨",
        "form": "adjective",
        "subtext": "bright yellow, lemon yellow / yellow light / pale yellow / bright yellow",
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
        "femininePlural": "amarillas"
    },
    {
        "word": "gratis",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "form": "adjective",
        "subtext": "free of charge, free gift / free time / free of charge / free to do",
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
        "femininePlural": "gratis"
    },
    {
        "word": "abierto",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "form": "adjective",
        "opposite": "cerrado",
        "oppositeEmoji": "🔒",
        "subtext": "now open, open for business / open door / open to ideas / wide open",
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
        "femininePlural": "abiertas"
    },
    {
        "word": "cerrado",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "abierto",
        "oppositeEmoji": "📖",
        "subtext": "now closed, temporarily closed / closed for lunch / closed mind / closed door",
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
        "femininePlural": "cerradas"
    },
    {
        "word": "grande",
        "level": "starter",
        "form": "adjective",
        "subtext": "a large city / a large company / a large amount",
        "definitions": [
            {
                "text": "De tamaño o cantidad mayor al promedio.",
                "examples": [
                    "París es una ciudad muy grande."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más grande",
        "superlative": "el más grande",
        "feminine": "grande",
        "plural": "grandes",
        "femininePlural": "grandes"
    },
    {
        "word": "pequeño",
        "level": "starter",
        "form": "adjective",
        "subtext": "a little bit / a little money / too little",
        "definitions": [
            {
                "text": "Pequeño en tamaño.",
                "examples": [
                    "Él conduce un coche pequeño."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más pequeño",
        "superlative": "el más pequeño",
        "feminine": "pequeña",
        "plural": "pequeños",
        "femininePlural": "pequeñas"
    },
    {
        "word": "largo",
        "level": "starter",
        "form": "adjective",
        "subtext": "a long journey / a long day / a long time",
        "definitions": [
            {
                "text": "De gran longitud.",
                "examples": [
                    "Ella tiene un viaje largo cada día."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más largo",
        "superlative": "el más largo",
        "feminine": "larga",
        "plural": "largos",
        "femininePlural": "largas"
    },
    {
        "word": "alto",
        "level": "starter",
        "form": "adjective",
        "subtext": "high price / high rent / high quality",
        "definitions": [
            {
                "text": "De altura o nivel mayor al promedio.",
                "examples": [
                    "El alquiler en esta zona es muy alto."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más alto",
        "superlative": "el más alto",
        "feminine": "alta",
        "plural": "altos",
        "femininePlural": "altas"
    },
    {
        "word": "bajo",
        "level": "starter",
        "form": "adjective",
        "subtext": "low price / low salary / low quality",
        "definitions": [
            {
                "text": "De altura o nivel menor al promedio.",
                "examples": [
                    "El sueldo es demasiado bajo."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más bajo",
        "superlative": "el más bajo",
        "feminine": "baja",
        "plural": "bajos",
        "femininePlural": "bajas"
    },
    {
        "word": "lleno",
        "level": "starter",
        "form": "adjective",
        "subtext": "full time / a full day / full of people",
        "definitions": [
            {
                "text": "Que contiene tanto como es posible.",
                "examples": [
                    "Me siento lleno después de ese almuerzo."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más lleno",
        "superlative": "el más lleno",
        "feminine": "llena",
        "plural": "llenos",
        "femininePlural": "llenas"
    },
    {
        "word": "vacío",
        "level": "starter",
        "form": "adjective",
        "subtext": "an empty flat / an empty room / nearly empty",
        "definitions": [
            {
                "text": "Que no contiene nada.",
                "examples": [
                    "La oficina está vacía los fines de semana."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más vacío",
        "superlative": "el más vacío",
        "feminine": "vacía",
        "plural": "vacíos",
        "femininePlural": "vacías"
    },
    {
        "word": "cálido",
        "level": "starter",
        "form": "adjective",
        "subtext": "warm weather / a warm welcome / keep warm",
        "definitions": [
            {
                "text": "Ligeramente caliente; agradablemente calentado.",
                "examples": [
                    "La oficina es cálida y cómoda."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "más cálido",
        "superlative": "el más cálido",
        "feminine": "cálida",
        "plural": "cálidos",
        "femininePlural": "cálidas"
    },
    {
        "word": "fresco",
        "level": "starter",
        "form": "adjective",
        "subtext": "cool weather / a cool drink / stay cool",
        "definitions": [
            {
                "text": "Ligeramente frío.",
                "examples": [
                    "Ella prefiere el clima fresco para trabajar."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "más fresco",
        "superlative": "el más fresco",
        "feminine": "fresca",
        "plural": "frescos",
        "femininePlural": "frescas"
    },
    {
        "word": "mojado",
        "level": "starter",
        "form": "adjective",
        "subtext": "wet weather / wet clothes / get wet",
        "definitions": [
            {
                "text": "Cubierto con agua o líquido.",
                "examples": [
                    "Su chaqueta está mojada por la lluvia."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "más mojado",
        "superlative": "el más mojado",
        "feminine": "mojada",
        "plural": "mojados",
        "femininePlural": "mojadas"
    },
    {
        "word": "seco",
        "level": "starter",
        "form": "adjective",
        "subtext": "dry weather / dry skin / keep dry",
        "definitions": [
            {
                "text": "Sin agua ni líquido.",
                "examples": [
                    "El cuarto de almacenamiento debe estar seco."
                ]
            }
        ],
        "theme": "weather_A1",
        "comparative": "más seco",
        "superlative": "el más seco",
        "feminine": "seca",
        "plural": "secos",
        "femininePlural": "secas"
    },
    {
        "word": "sucio",
        "level": "starter",
        "form": "adjective",
        "subtext": "dirty hands / dirty clothes / get dirty",
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
        "femininePlural": "sucias"
    },
    {
        "word": "duro",
        "level": "starter",
        "form": "adjective",
        "subtext": "hard work / a hard decision / too hard",
        "definitions": [
            {
                "text": "Firme y sólido; difícil.",
                "examples": [
                    "La silla es muy dura."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más duro",
        "superlative": "el más duro",
        "feminine": "dura",
        "plural": "duros",
        "femininePlural": "duras"
    },
    {
        "word": "suave",
        "level": "starter",
        "form": "adjective",
        "subtext": "soft light / soft music / soft skills",
        "definitions": [
            {
                "text": "No duro; gentil al tacto.",
                "examples": [
                    "El sofá es muy suave."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más suave",
        "superlative": "el más suave",
        "feminine": "suave",
        "plural": "suaves",
        "femininePlural": "suaves"
    },
    {
        "word": "pesado",
        "level": "starter",
        "form": "adjective",
        "subtext": "heavy traffic / heavy rain / too heavy",
        "definitions": [
            {
                "text": "De gran peso; difícil de llevar.",
                "examples": [
                    "La bolsa es muy pesada."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más pesado",
        "superlative": "el más pesado",
        "feminine": "pesada",
        "plural": "pesados",
        "femininePlural": "pesadas"
    },
    {
        "word": "ligero",
        "level": "starter",
        "form": "adjective",
        "subtext": "light rain / light traffic / a light meal",
        "definitions": [
            {
                "text": "No pesado.",
                "examples": [
                    "Ella lleva una bolsa ligera."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más ligero",
        "superlative": "el más ligero",
        "feminine": "ligera",
        "plural": "ligeros",
        "femininePlural": "ligeras"
    },
    {
        "word": "marrón",
        "level": "starter",
        "form": "adjective",
        "subtext": "dark brown / light brown / brown bread",
        "definitions": [
            {
                "text": "Del color de la madera o la tierra.",
                "examples": [
                    "Ella tiene ojos marrones."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "más marrón",
        "superlative": "el más marrón",
        "feminine": "marrón",
        "plural": "marrones",
        "femininePlural": "marrones"
    },
    {
        "word": "gris",
        "level": "starter",
        "form": "adjective",
        "subtext": "grey area / grey sky / pale grey",
        "definitions": [
            {
                "text": "De un color entre blanco y negro.",
                "examples": [
                    "Él tiene el pelo gris."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "más gris",
        "superlative": "el más gris",
        "feminine": "gris",
        "plural": "grises",
        "femininePlural": "grises"
    },
    {
        "word": "rosa",
        "level": "starter",
        "form": "adjective",
        "subtext": "light pink / bright pink / hot pink",
        "definitions": [
            {
                "text": "De un color rojo pálido.",
                "examples": [
                    "Ella prefiere el rosa al rojo."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "más rosa",
        "superlative": "el más rosa",
        "feminine": "rosa",
        "plural": "rosas",
        "femininePlural": "rosas"
    },
    {
        "word": "naranja",
        "level": "starter",
        "form": "adjective",
        "subtext": "bright orange / dark orange / orange light",
        "definitions": [
            {
                "text": "Del color de una naranja.",
                "examples": [
                    "Él compró una chaqueta naranja."
                ]
            }
        ],
        "theme": "colours_patterns_A1",
        "comparative": "más naranja",
        "superlative": "el más naranja",
        "feminine": "naranja",
        "plural": "naranjas",
        "femininePlural": "naranjas"
    },
    {
        "word": "buenísimo",
        "level": "starter",
        "form": "adjective",
        "subtext": "a great idea / a great opportunity / great value",
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "Ella es una gerente buenísima."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "mejor",
        "superlative": "el mejor",
        "feminine": "buenísima",
        "plural": "buenísimos",
        "femininePlural": "buenísimas"
    },
    {
        "word": "simpático",
        "level": "starter",
        "form": "adjective",
        "subtext": "a nice day / a nice place / a nice person",
        "definitions": [
            {
                "text": "Agradable o amable.",
                "examples": [
                    "La nueva oficina es muy bonita."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más simpático",
        "superlative": "el más simpático",
        "feminine": "simpática",
        "plural": "simpáticos",
        "femininePlural": "simpáticas"
    },
    {
        "word": "maravilloso",
        "level": "starter",
        "form": "adjective",
        "subtext": "a wonderful opportunity / a wonderful time",
        "definitions": [
            {
                "text": "Extremadamente bueno; que causa deleite.",
                "examples": [
                    "Tenían un equipo maravilloso."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más maravilloso",
        "superlative": "el más maravilloso",
        "feminine": "maravillosa",
        "plural": "maravillosos",
        "femininePlural": "maravillosas"
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
        "theme": "describing_things_A1",
        "comparative": "más terrible",
        "superlative": "el más terrible",
        "feminine": "terrible",
        "plural": "terribles",
        "femininePlural": "terribles"
    },
    {
        "word": "espantoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "awful weather / awful news / simply awful",
        "definitions": [
            {
                "text": "Muy malo o desagradable.",
                "examples": [
                    "El ruido es espantoso."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más espantoso",
        "superlative": "el más espantoso",
        "feminine": "espantosa",
        "plural": "espantosos",
        "femininePlural": "espantosas"
    },
    {
        "word": "increíble",
        "level": "starter",
        "form": "adjective",
        "subtext": "an amazing result / an amazing offer / truly amazing",
        "definitions": [
            {
                "text": "Que causa gran sorpresa o admiración.",
                "examples": [
                    "Ella dio una presentación increíble."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más increíble",
        "superlative": "el más increíble",
        "feminine": "increíble",
        "plural": "increíbles",
        "femininePlural": "increíbles"
    },
    {
        "word": "fantástico",
        "level": "starter",
        "form": "adjective",
        "subtext": "fantastic news / a fantastic opportunity / truly fantastic",
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "El nuevo sistema funciona de forma fantástica."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más fantástico",
        "superlative": "el más fantástico",
        "feminine": "fantástica",
        "plural": "fantásticos",
        "femininePlural": "fantásticas"
    },
    {
        "word": "triste",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sad / a sad situation / deeply sad",
        "definitions": [
            {
                "text": "Que se siente infeliz o apenado.",
                "examples": [
                    "Él estaba triste por dejar la empresa."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más triste",
        "superlative": "el más triste",
        "feminine": "triste",
        "plural": "tristes",
        "femininePlural": "tristes"
    },
    {
        "word": "hambriento",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel hungry / very hungry / go hungry",
        "definitions": [
            {
                "text": "Que necesita comida.",
                "examples": [
                    "Tengo hambre, ya son las dos."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más hambriento",
        "superlative": "el más hambriento",
        "feminine": "hambrienta",
        "plural": "hambrientos",
        "femininePlural": "hambrientas"
    },
    {
        "word": "enfadado",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel angry / angry with someone / very angry",
        "definitions": [
            {
                "text": "Que siente un fuerte disgusto.",
                "examples": [
                    "Ella estaba enfadada por la decisión."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más enfadado",
        "superlative": "el más enfadado",
        "feminine": "enfadada",
        "plural": "enfadados",
        "femininePlural": "enfadadas"
    },
    {
        "word": "aburrido",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel bored / bored with / easily bored",
        "definitions": [
            {
                "text": "Que se siente sin interés.",
                "examples": [
                    "Él se siente aburrido en las reuniones largas."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más aburrido",
        "superlative": "el más aburrido",
        "feminine": "aburrida",
        "plural": "aburridos",
        "femininePlural": "aburridas"
    },
    {
        "word": "emocionado",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel excited / excited about / very excited",
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
        "femininePlural": "emocionadas"
    },
    {
        "word": "asustado",
        "level": "starter",
        "form": "adjective",
        "subtext": "afraid of / feel afraid / deeply afraid",
        "definitions": [
            {
                "text": "Que siente miedo.",
                "examples": [
                    "Él tiene miedo de cometer errores."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más asustado",
        "superlative": "el más asustado",
        "feminine": "asustada",
        "plural": "asustados",
        "femininePlural": "asustadas"
    },
    {
        "word": "arrepentido",
        "level": "starter",
        "form": "adjective",
        "subtext": "feel sorry / sorry for / sorry about",
        "definitions": [
            {
                "text": "Que siente pesar o tristeza.",
                "examples": [
                    "Ella siente el retraso."
                ]
            }
        ],
        "theme": "basic_negative_emotions_A1",
        "comparative": "más arrepentido",
        "superlative": "el más arrepentido",
        "feminine": "arrepentida",
        "plural": "arrepentidos",
        "femininePlural": "arrepentidas"
    },
    {
        "word": "correcto",
        "level": "starter",
        "form": "adjective",
        "subtext": "right answer / right time / absolutely right",
        "definitions": [
            {
                "text": "Correcto; adecuado.",
                "examples": [
                    "¿Es esta la oficina correcta?"
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más correcto",
        "superlative": "el más correcto",
        "feminine": "correcta",
        "plural": "correctos",
        "femininePlural": "correctas"
    },
    {
        "word": "incorrecto",
        "level": "starter",
        "form": "adjective",
        "subtext": "wrong answer / go wrong / completely wrong",
        "definitions": [
            {
                "text": "No correcto; no adecuado.",
                "examples": [
                    "Esa fue la decisión incorrecta."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más incorrecto",
        "superlative": "el más incorrecto",
        "feminine": "incorrecta",
        "plural": "incorrectos",
        "femininePlural": "incorrectas"
    },
    {
        "word": "nuevo",
        "level": "starter",
        "form": "adjective",
        "subtext": "new job / brand new / completely new",
        "definitions": [
            {
                "text": "Que no existía antes.",
                "examples": [
                    "Ella tiene un trabajo nuevo."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más nuevo",
        "superlative": "el más nuevo",
        "feminine": "nueva",
        "plural": "nuevos",
        "femininePlural": "nuevas"
    },
    {
        "word": "diferente",
        "level": "starter",
        "form": "adjective",
        "subtext": "completely different / very different / different from",
        "definitions": [
            {
                "text": "No es lo mismo que otro.",
                "examples": [
                    "Este trabajo es muy diferente al anterior."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más diferente",
        "superlative": "el más diferente",
        "feminine": "diferente",
        "plural": "diferentes",
        "femininePlural": "diferentes"
    },
    {
        "word": "mismo",
        "level": "starter",
        "form": "adjective",
        "subtext": "the same as / exactly the same / same time",
        "definitions": [
            {
                "text": "No diferente; idéntico.",
                "examples": [
                    "Ganan el mismo sueldo."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": null,
        "superlative": null,
        "feminine": "misma",
        "plural": "mismos",
        "femininePlural": "mismas"
    },
    {
        "word": "rápido",
        "level": "starter",
        "form": "adjective",
        "subtext": "fast food / fast train / very fast",
        "definitions": [
            {
                "text": "Que se mueve o sucede rápidamente.",
                "examples": [
                    "El tren al trabajo es rápido."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más rápido",
        "superlative": "el más rápido",
        "feminine": "rápida",
        "plural": "rápidos",
        "femininePlural": "rápidas"
    },
    {
        "word": "lento",
        "level": "starter",
        "form": "adjective",
        "subtext": "slow progress / slow internet / very slow",
        "definitions": [
            {
                "text": "No rápido.",
                "examples": [
                    "El nuevo sistema es muy lento."
                ]
            }
        ],
        "theme": "size_shape_A1",
        "comparative": "más lento",
        "superlative": "el más lento",
        "feminine": "lenta",
        "plural": "lentos",
        "femininePlural": "lentas"
    },
    {
        "word": "tranquilo",
        "level": "starter",
        "form": "adjective",
        "subtext": "quiet area / keep quiet / nice and quiet",
        "definitions": [
            {
                "text": "Que hace poco o ningún ruido.",
                "examples": [
                    "La oficina está tranquila a la hora del almuerzo."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más tranquilo",
        "superlative": "el más tranquilo",
        "feminine": "tranquila",
        "plural": "tranquilos",
        "femininePlural": "tranquilas"
    },
    {
        "word": "ruidoso",
        "level": "starter",
        "form": "adjective",
        "subtext": "loud noise / too loud / a loud voice",
        "definitions": [
            {
                "text": "Que hace mucho ruido.",
                "examples": [
                    "La oficina es demasiado ruidosa."
                ]
            }
        ],
        "theme": "describing_things_A1",
        "comparative": "más ruidoso",
        "superlative": "el más ruidoso",
        "feminine": "ruidosa",
        "plural": "ruidosos",
        "femininePlural": "ruidosas"
    },
    {
        "word": "seguro",
        "level": "starter",
        "form": "adjective",
        "subtext": "safe area / safe to do / feel safe",
        "definitions": [
            {
                "text": "No peligroso.",
                "examples": [
                    "Este barrio es muy seguro."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "más seguro",
        "superlative": "el más seguro",
        "feminine": "segura",
        "plural": "seguros",
        "femininePlural": "seguras"
    },
    {
        "word": "peligroso",
        "level": "starter",
        "form": "adjective",
        "subtext": "dangerous situation / very dangerous / potentially dangerous",
        "definitions": [
            {
                "text": "Que puede causar daño.",
                "examples": [
                    "Esa carretera es peligrosa."
                ]
            }
        ],
        "theme": "local_places_services_A1",
        "comparative": "más peligroso",
        "superlative": "el más peligroso",
        "feminine": "peligrosa",
        "plural": "peligrosos",
        "femininePlural": "peligrosas"
    },
    {
        "word": "infeliz",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "No se siente satisfecho o feliz.",
                "examples": [
                    "Él es infeliz con su sueldo."
                ]
            }
        ],
        "subtext": "feel unhappy / very unhappy / unhappy about",
        "comparative": "más infeliz",
        "superlative": "el más infeliz",
        "feminine": "infeliz",
        "plural": "infelices",
        "femininePlural": "infelices"
    },
    {
        "word": "nervioso",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente ansiedad.",
                "examples": [
                    "Él estaba nervioso antes de la entrevista."
                ]
            }
        ],
        "subtext": "feel nervous / nervous about / very nervous",
        "comparative": "más nervioso",
        "superlative": "el más nervioso",
        "feminine": "nerviosa",
        "plural": "nerviosos",
        "femininePlural": "nerviosas"
    },
    {
        "word": "estresado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente preocupación y tensión.",
                "examples": [
                    "Ella se siente estresada antes de cada entrega."
                ]
            }
        ],
        "subtext": "feel stressed / very stressed / stressed out",
        "comparative": "más estresado",
        "superlative": "el más estresado",
        "feminine": "estresada",
        "plural": "estresados",
        "femininePlural": "estresadas"
    },
    {
        "word": "confiado",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Seguro de tus propias habilidades.",
                "examples": [
                    "Ella tiene mucha confianza en las presentaciones."
                ]
            }
        ],
        "subtext": "feel confident / self-confident / very confident",
        "comparative": "más confiado",
        "superlative": "el más confiado",
        "feminine": "confiada",
        "plural": "confiados",
        "femininePlural": "confiadas"
    },
    {
        "word": "orgulloso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se siente complacido por un logro.",
                "examples": [
                    "Él estaba orgulloso de su ascenso."
                ]
            }
        ],
        "subtext": "feel proud / very proud / proud of",
        "comparative": "más orgulloso",
        "superlative": "el más orgulloso",
        "feminine": "orgullosa",
        "plural": "orgullosos",
        "femininePlural": "orgullosas"
    },
    {
        "word": "asustado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente miedo por algo.",
                "examples": [
                    "Ella estaba asustada por la presentación."
                ]
            }
        ],
        "subtext": "feel scared / scared of / very scared",
        "comparative": "más asustado",
        "superlative": "el más asustado",
        "feminine": "asustada",
        "plural": "asustados",
        "femininePlural": "asustadas"
    },
    {
        "word": "sorprendido",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que siente asombro ante algo inesperado.",
                "examples": [
                    "Él se sorprendió al recibir un aumento."
                ]
            }
        ],
        "subtext": "feel surprised / very surprised / pleasantly surprised",
        "comparative": "más sorprendido",
        "superlative": "el más sorprendido",
        "feminine": "sorprendida",
        "plural": "sorprendidos",
        "femininePlural": "sorprendidas"
    },
    {
        "word": "decepcionado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se siente triste porque algo no fue como se esperaba.",
                "examples": [
                    "Ella estaba decepcionada por no conseguir el trabajo."
                ]
            }
        ],
        "subtext": "feel disappointed / deeply disappointed / disappointed with",
        "comparative": "más decepcionado",
        "superlative": "el más decepcionado",
        "feminine": "decepcionada",
        "plural": "decepcionados",
        "femininePlural": "decepcionadas"
    },
    {
        "word": "hermoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Atractivo y agradable a la vista.",
                "examples": [
                    "Ella tiene una oficina hermosa."
                ]
            }
        ],
        "subtext": "beautiful view / beautiful city / absolutely beautiful",
        "comparative": "más hermoso",
        "superlative": "el más hermoso",
        "feminine": "hermosa",
        "plural": "hermosos",
        "femininePlural": "hermosas"
    },
    {
        "word": "bonito",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Agradable a la vista.",
                "examples": [
                    "La sala de reuniones es muy bonita."
                ]
            }
        ],
        "subtext": "pretty good / a pretty place / quite pretty",
        "comparative": "más bonito",
        "superlative": "el más bonito",
        "feminine": "bonita",
        "plural": "bonitos",
        "femininePlural": "bonitas"
    },
    {
        "word": "fuerte",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que tiene gran poder físico o mental.",
                "examples": [
                    "Ella es una líder fuerte."
                ]
            }
        ],
        "subtext": "strong coffee / strong opinion / very strong",
        "comparative": "más fuerte",
        "superlative": "el más fuerte",
        "feminine": "fuerte",
        "plural": "fuertes",
        "femininePlural": "fuertes"
    },
    {
        "word": "débil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que carece de fuerza o poder.",
                "examples": [
                    "La señal es débil."
                ]
            }
        ],
        "subtext": "weak connection / a weak argument / very weak",
        "comparative": "más débil",
        "superlative": "el más débil",
        "feminine": "débil",
        "plural": "débiles",
        "femininePlural": "débiles"
    },
    {
        "word": "en forma",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "En buena condición física.",
                "examples": [
                    "Ella se mantiene en forma."
                ]
            }
        ],
        "subtext": "physically fit / stay fit / keep fit",
        "comparative": "más en forma",
        "superlative": "el más en forma",
        "feminine": "en forma",
        "plural": "en forma",
        "femininePlural": "en forma"
    },
    {
        "word": "excelente",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Extremadamente bueno.",
                "examples": [
                    "Ella recibió una reseña excelente."
                ]
            }
        ],
        "subtext": "excellent work / excellent results / absolutely excellent",
        "comparative": "más excelente",
        "superlative": "el más excelente",
        "feminine": "excelente",
        "plural": "excelentes",
        "femininePlural": "excelentes"
    },
    {
        "word": "perfecto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sin fallas; completamente correcto.",
                "examples": [
                    "El momento del lanzamiento fue perfecto."
                ]
            }
        ],
        "subtext": "a perfect opportunity / perfect timing / absolutely perfect",
        "comparative": "más perfecto",
        "superlative": "el más perfecto",
        "feminine": "perfecta",
        "plural": "perfectos",
        "femininePlural": "perfectas"
    },
    {
        "word": "inútil",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Sin valor útil; no ayuda.",
                "examples": [
                    "Este software es inútil."
                ]
            }
        ],
        "subtext": "completely useless / prove useless / a useless idea",
        "comparative": "más inútil",
        "superlative": "el más inútil",
        "feminine": "inútil",
        "plural": "inútiles",
        "femininePlural": "inútiles"
    },
    {
        "word": "correcto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Verdadero o correcto.",
                "examples": [
                    "Por favor revisa que las cifras sean correctas."
                ]
            }
        ],
        "subtext": "correct answer / the correct way / completely correct",
        "comparative": "más correcto",
        "superlative": "el más correcto",
        "feminine": "correcta",
        "plural": "correctos",
        "femininePlural": "correctas"
    },
    {
        "word": "interesante",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que atrae la atención.",
                "examples": [
                    "La nueva propuesta es muy interesante."
                ]
            }
        ],
        "subtext": "find interesting / very interesting / an interesting idea",
        "comparative": "más interesante",
        "superlative": "el más interesante",
        "feminine": "interesante",
        "plural": "interesantes",
        "femininePlural": "interesantes"
    },
    {
        "word": "aburrido",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "No interesante; soso.",
                "examples": [
                    "La sesión de entrenamiento fue muy aburrida."
                ]
            }
        ],
        "subtext": "very boring / a boring meeting / find boring",
        "comparative": "más aburrido",
        "superlative": "el más aburrido",
        "feminine": "aburrida",
        "plural": "aburridos",
        "femininePlural": "aburridas"
    },
    {
        "word": "necesario",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Necesitado; requerido para hacer algo.",
                "examples": [
                    "Una buena conexión a internet es necesaria."
                ]
            }
        ],
        "subtext": "absolutely necessary / if necessary / necessary to do",
        "comparative": "más necesario",
        "superlative": "el más necesario",
        "feminine": "necesaria",
        "plural": "necesarios",
        "femininePlural": "necesarias"
    },
    {
        "word": "posible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Capaz de suceder o lograrse.",
                "examples": [
                    "¿Es posible terminar para el viernes?"
                ]
            }
        ],
        "subtext": "as soon as possible / it is possible / make possible",
        "comparative": "más posible",
        "superlative": "el más posible",
        "feminine": "posible",
        "plural": "posibles",
        "femininePlural": "posibles"
    },
    {
        "word": "imposible",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "No capaz de suceder o hacerse.",
                "examples": [
                    "Es imposible terminar en un día."
                ]
            }
        ],
        "subtext": "virtually impossible / make impossible / nearly impossible",
        "comparative": "más imposible",
        "superlative": "el más imposible",
        "feminine": "imposible",
        "plural": "imposibles",
        "femininePlural": "imposibles"
    },
    {
        "word": "especial",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Diferente de lo usual.",
                "examples": [
                    "Ella tiene un talento especial."
                ]
            }
        ],
        "subtext": "a special offer / special occasion / very special",
        "comparative": "más especial",
        "superlative": "el más especial",
        "feminine": "especial",
        "plural": "especiales",
        "femininePlural": "especiales"
    },
    {
        "word": "popular",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que le gusta a mucha gente.",
                "examples": [
                    "El nuevo café es muy popular."
                ]
            }
        ],
        "subtext": "very popular / popular choice / most popular",
        "comparative": "más popular",
        "superlative": "el más popular",
        "feminine": "popular",
        "plural": "populares",
        "femininePlural": "populares"
    },
    {
        "word": "similar",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Casi lo mismo.",
                "examples": [
                    "Nuestros enfoques son muy similares."
                ]
            }
        ],
        "subtext": "very similar / similar to / similar results",
        "comparative": "más similar",
        "superlative": "el más similar",
        "feminine": "similar",
        "plural": "similares",
        "femininePlural": "similares"
    },
    {
        "word": "amigable",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Amable y agradable.",
                "examples": [
                    "El nuevo gerente es muy amigable."
                ]
            }
        ],
        "subtext": "very friendly / a friendly face / friendly atmosphere",
        "comparative": "más amigable",
        "superlative": "el más amigable",
        "feminine": "amigable",
        "plural": "amigables",
        "femininePlural": "amigables"
    },
    {
        "word": "amable",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Generoso con los demás.",
                "examples": [
                    "Ella es amable con todos."
                ]
            }
        ],
        "subtext": "very kind / kind of you / a kind person",
        "comparative": "más amable",
        "superlative": "el más amable",
        "feminine": "amable",
        "plural": "amables",
        "femininePlural": "amables"
    },
    {
        "word": "divertido",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que hace reír.",
                "examples": [
                    "Él tiene una forma divertida de explicar."
                ]
            }
        ],
        "subtext": "very funny / funny story / find funny",
        "comparative": "más divertido",
        "superlative": "el más divertido",
        "feminine": "divertida",
        "plural": "divertidos",
        "femininePlural": "divertidas"
    },
    {
        "word": "listo",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Inteligente; rápido para entender.",
                "examples": [
                    "Ella es una negociadora lista."
                ]
            }
        ],
        "subtext": "very clever / a clever idea / clever enough",
        "comparative": "más listo",
        "superlative": "el más listo",
        "feminine": "lista",
        "plural": "listos",
        "femininePlural": "listas"
    },
    {
        "word": "educado",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que se comporta de forma respetuosa.",
                "examples": [
                    "Él siempre es educado con los clientes."
                ]
            }
        ],
        "subtext": "very polite / polite request / polite enough",
        "comparative": "más educado",
        "superlative": "el más educado",
        "feminine": "educada",
        "plural": "educados",
        "femininePlural": "educadas"
    },
    {
        "word": "grosero",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "No educado.",
                "examples": [
                    "Ese correo fue bastante grosero."
                ]
            }
        ],
        "subtext": "very rude / incredibly rude / deliberately rude",
        "comparative": "más grosero",
        "superlative": "el más grosero",
        "feminine": "grosera",
        "plural": "groseros",
        "femininePlural": "groseras"
    },
    {
        "word": "perezoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "No dispuesto a trabajar.",
                "examples": [
                    "Tiene reputación de ser perezoso."
                ]
            }
        ],
        "subtext": "very lazy / a lazy approach / too lazy",
        "comparative": "más perezoso",
        "superlative": "el más perezoso",
        "feminine": "perezosa",
        "plural": "perezosos",
        "femininePlural": "perezosas"
    },
    {
        "word": "honesto",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que dice la verdad.",
                "examples": [
                    "Ella es conocida por ser honesta."
                ]
            }
        ],
        "subtext": "very honest / brutally honest / completely honest",
        "comparative": "más honesto",
        "superlative": "el más honesto",
        "feminine": "honesta",
        "plural": "honestos",
        "femininePlural": "honestas"
    },
    {
        "word": "ruidoso",
        "level": "starter",
        "theme": "describing_things_A1",
        "form": "adjective",
        "definitions": [
            {
                "text": "Que hace mucho sonido.",
                "examples": [
                    "La oficina es muy ruidosa."
                ]
            }
        ],
        "subtext": "very noisy / noisy environment / too noisy",
        "comparative": "más ruidoso",
        "superlative": "el más ruidoso",
        "feminine": "ruidosa",
        "plural": "ruidosos",
        "femininePlural": "ruidosas"
    }
];
    const lang = "es";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();