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
        "subtext": "un edificio alto / lo suficientemente alto",
        "synonyms": [
            "una persona alta"
        ],
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
        "oppositeEmoji": "🦒",
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
        "subtext": "persona joven / joven profesional / joven de corazón",
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
        "opposite": "nuevo",
        "oppositeEmoji": "✨",
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
        "subtext": "día soleado / tiempo soleado / periodo soleado",
        "comparative": "más soleado",
        "superlative": "el más soleado",
        "feminine": "soleada",
        "plural": "soleados",
        "femininePlural": "soleadas",
        "opposite": "lluvioso",
        "oppositeEmoji": "🌧️"
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
        "subtext": "día lluvioso / tiempo lluvioso",
        "synonyms": [
            "temporada de lluvias"
        ],
        "comparative": "más lluvioso",
        "superlative": "el más lluvioso",
        "feminine": "lluviosa",
        "plural": "lluviosos",
        "femininePlural": "lluviosas",
        "opposite": "soleado",
        "oppositeEmoji": "☀️"
    },
    {
        "word": "caliente",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🔥",
        "form": "adjective",
        "opposite": "frío",
        "oppositeEmoji": "❄️",
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
        "subtext": "día ordinario / nada fuera de lo común",
        "synonyms": [
            "vida ordinaria"
        ],
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
        "femininePlural": "pequeñas"
    },
    {
        "word": "fácil",
        "level": "starter",
        "theme": "size_shape_A1",
        "emoji": "✅",
        "form": "adjective",
        "opposite": "difícil",
        "oppositeEmoji": "🧩",
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
        "subtext": "difícil de hacer / muy difícil / resultarle difícil",
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
        "opposite": "triste",
        "oppositeEmoji": "😢"
    },
    {
        "word": "cansado",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
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
        "opposite": "enérgico",
        "oppositeEmoji": "⚡"
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
        "subtext": "trabajo a tiempo completo / empleo a tiempo completo / empleado a tiempo completo",
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
        "subtext": "trabajo a tiempo parcial / empleo a tiempo parcial / estudiante a tiempo parcial",
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
        "femininePlural": "limpias"
    },
    {
        "word": "saludable",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥗",
        "form": "adjective",
        "opposite": "insalubre",
        "oppositeEmoji": "🍔",
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
        "femininePlural": "saludables"
    },
    {
        "word": "enfermo",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤒",
        "form": "adjective",
        "opposite": "sano",
        "oppositeEmoji": "💪",
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
        "femininePlural": "enfermas"
    },
    {
        "word": "en línea",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🌐",
        "form": "adjective",
        "opposite": "desconectado",
        "oppositeEmoji": "📴",
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
        "femininePlural": "en línea"
    },
    {
        "word": "solo",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "👤",
        "form": "adjective",
        "opposite": "acompañado",
        "oppositeEmoji": "👫",
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
        "subtext": "",
        "synonyms": [
            "anxious"
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
        "femininePlural": "preocupadas"
    },
    {
        "word": "ocupado",
        "level": "starter",
        "theme": "daily_work_routines_A1",
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
        "opposite": "libre",
        "oppositeEmoji": "🆓"
    },
    {
        "word": "útil",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "🛠️",
        "form": "adjective",
        "opposite": "inútil",
        "oppositeEmoji": "🗑️",
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
        "femininePlural": "útiles"
    },
    {
        "word": "importante",
        "level": "starter",
        "theme": "describing_things_A1",
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
        "opposite": "poco importante",
        "oppositeEmoji": "🍃"
    },
    {
        "word": "rojo",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "rojas"
    },
    {
        "word": "azul",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "azules"
    },
    {
        "word": "verde",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "verdes"
    },
    {
        "word": "blanco",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "blancas"
    },
    {
        "word": "negro",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "negras"
    },
    {
        "word": "amarillo",
        "level": "starter",
        "theme": "colours_patterns_A1",
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
        "femininePlural": "amarillas"
    },
    {
        "word": "gratis",
        "level": "starter",
        "theme": "everyday_shopping_A1",
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
        "femininePlural": "abiertas"
    },
    {
        "word": "cerrado",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "form": "adjective",
        "opposite": "abierto",
        "oppositeEmoji": "🔓",
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
        "femininePlural": "cerradas"
    },
    {
        "word": "grande",
        "level": "starter",
        "form": "adjective",
        "subtext": "una ciudad grande / una empresa grande",
        "synonyms": [
            "una gran cantidad"
        ],
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
        "subtext": "",
        "synonyms": [
            "a little bit",
            "a little money",
            "too little"
        ],
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
        "subtext": "",
        "synonyms": [
            "high price",
            "high rent",
            "high quality"
        ],
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
        "subtext": "",
        "synonyms": [
            "low price",
            "low salary",
            "low quality"
        ],
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
        "theme": "size_shape_A1",
        "comparative": "más lleno",
        "superlative": "el más lleno",
        "feminine": "llena",
        "plural": "llenos",
        "femininePlural": "llenas",
        "opposite": "vacío",
        "oppositeEmoji": "🫙"
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
        "theme": "size_shape_A1",
        "comparative": "más vacío",
        "superlative": "el más vacío",
        "feminine": "vacía",
        "plural": "vacíos",
        "femininePlural": "vacías",
        "opposite": "lleno",
        "oppositeEmoji": "🍷"
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
        "theme": "household_tasks_A1",
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
        "opposite": "limpio",
        "oppositeEmoji": "✨"
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
        "theme": "size_shape_A1",
        "comparative": "más duro",
        "superlative": "el más duro",
        "feminine": "dura",
        "plural": "duros",
        "femininePlural": "duras",
        "opposite": "suave",
        "oppositeEmoji": "🧸"
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
        "theme": "size_shape_A1",
        "comparative": "más suave",
        "superlative": "el más suave",
        "feminine": "suave",
        "plural": "suaves",
        "femininePlural": "suaves",
        "opposite": "duro",
        "oppositeEmoji": "🪨"
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
        "theme": "size_shape_A1",
        "comparative": "más pesado",
        "superlative": "el más pesado",
        "feminine": "pesada",
        "plural": "pesados",
        "femininePlural": "pesadas",
        "opposite": "claro",
        "oppositeEmoji": "🪶"
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
        "subtext": "sentirse triste / una situación triste / profundamente triste",
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
        "femininePlural": "tristes",
        "opposite": "feliz",
        "oppositeEmoji": "😊"
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
        "theme": "basic_positive_emotions_A1",
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
        "femininePlural": "emocionadas"
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
        "theme": "describing_things_A1",
        "comparative": "más correcto",
        "superlative": "el más correcto",
        "feminine": "correcta",
        "plural": "correctos",
        "femininePlural": "correctas",
        "opposite": "incorrecto",
        "oppositeEmoji": "❌"
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
        "theme": "describing_things_A1",
        "comparative": "más incorrecto",
        "superlative": "el más incorrecto",
        "feminine": "incorrecta",
        "plural": "incorrectos",
        "femininePlural": "incorrectas",
        "opposite": "correcto",
        "oppositeEmoji": "✅"
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
        "theme": "size_shape_A1",
        "comparative": "más nuevo",
        "superlative": "el más nuevo",
        "feminine": "nueva",
        "plural": "nuevos",
        "femininePlural": "nuevas",
        "opposite": "viejo",
        "oppositeEmoji": "📦"
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
        "theme": "size_shape_A1",
        "comparative": "más rápido",
        "superlative": "el más rápido",
        "feminine": "rápida",
        "plural": "rápidos",
        "femininePlural": "rápidas",
        "opposite": "lento",
        "oppositeEmoji": "🐢"
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
        "theme": "size_shape_A1",
        "comparative": "más lento",
        "superlative": "el más lento",
        "feminine": "lenta",
        "plural": "lentos",
        "femininePlural": "lentas",
        "opposite": "rápido",
        "oppositeEmoji": "🏎️"
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
        "theme": "describing_things_A1",
        "comparative": "más ruidoso",
        "superlative": "el más ruidoso",
        "feminine": "ruidosa",
        "plural": "ruidosos",
        "femininePlural": "ruidosas",
        "opposite": "silencioso",
        "oppositeEmoji": "🤫"
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
        "subtext": "sentirse infeliz / muy infeliz",
        "synonyms": [
            "descontento con"
        ],
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
        "subtext": "sentirse nervioso / nervioso por / muy nervioso",
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
        "subtext": "sentirse estresado / muy estresado / estresado",
        "comparative": "más estresado",
        "superlative": "el más estresado",
        "feminine": "estresada",
        "plural": "estresados",
        "femininePlural": "estresadas",
        "opposite": "relajado",
        "oppositeEmoji": "😌"
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
        "subtext": "sentirse confiado / seguro de sí mismo / muy confiado",
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
        "subtext": "sentirse orgulloso / muy orgulloso / orgulloso de",
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
        "subtext": "sentirse asustado / asustado de / muy asustado",
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
        "subtext": "sentirse sorprendido / muy sorprendido / gratamente sorprendido",
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
        "subtext": "sentirse decepcionado / muy decepcionado / decepcionado con",
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
        "opposite": "feo",
        "oppositeEmoji": "👹"
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
        "subtext": "un lugar bonito / bastante bonito",
        "synonyms": [
            "bastante bien"
        ],
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
        "subtext": "café fuerte / muy fuerte",
        "synonyms": [
            "opinión firme"
        ],
        "comparative": "más fuerte",
        "superlative": "el más fuerte",
        "feminine": "fuerte",
        "plural": "fuertes",
        "femininePlural": "fuertes",
        "opposite": "débil",
        "oppositeEmoji": "🧣"
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
        "subtext": "conexión débil / argumento débil / muy débil",
        "comparative": "más débil",
        "superlative": "el más débil",
        "feminine": "débil",
        "plural": "débiles",
        "femininePlural": "débiles",
        "opposite": "fuerte",
        "oppositeEmoji": "💪"
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
        "subtext": "trabajo excelente / excelentes resultados / absolutamente excelente",
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
        "subtext": "totalmente correcto",
        "synonyms": [
            "respuesta correcta",
            "la forma correcta"
        ],
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
        "subtext": "encontrarlo interesante / muy interesante / una idea interesante",
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
        "subtext": "muy aburrido / resultarle aburrido",
        "synonyms": [
            "una reunión aburrida"
        ],
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
        "subtext": "as soon as possible",
        "synonyms": [
            "it is possible",
            "make possible"
        ],
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
        "subtext": "una oferta especial / ocasión especial / muy especial",
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
        "subtext": "muy popular / elección popular / el más popular",
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
        "subtext": "muy similar",
        "synonyms": [
            "parecido a",
            "resultados similares"
        ],
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
        "subtext": "muy amable / amable de su parte / una persona amable",
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
        "subtext": "muy divertido / resultarle divertido",
        "synonyms": [
            "historia divertida"
        ],
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
        "subtext": "muy educado / bastante educado",
        "synonyms": [
            "petición educada"
        ],
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
        "subtext": "muy grosero / increíblemente grosero / deliberadamente grosero",
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
        "subtext": "muy perezoso / un enfoque perezoso / demasiado perezoso",
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
        "subtext": "muy honesto / brutalmente honesto / completamente honesto",
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
        "subtext": "muy ruidoso / entorno ruidoso / demasiado ruidoso",
        "comparative": "más ruidoso",
        "superlative": "el más ruidoso",
        "feminine": "ruidosa",
        "plural": "ruidosos",
        "femininePlural": "ruidosas"
    },
    {
        "word": "sediento",
        "level": "starter",
        "theme": "health_body_A1",
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
        ]
    },
    {
        "word": "tímido",
        "level": "starter",
        "theme": "personal_identity_A1",
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
        ]
    }
];
    const lang = "es";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();