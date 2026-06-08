// TODO: verify level classification
(function() {
    const data = [
    {
        "word": "garden",
        "image": "images/vocabulary/places/garden.png",
        "level": "starter",
        "theme": "places",
        "emoji": "🌳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "A public garden or large green area in a city for everyone to use.",
                "examples": []
            }
        ],
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_074"
    },
    {
        "word": "médico",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona que ayuda a los enfermos.",
                "examples": [
                    "El médico trabaja en el hospital."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈmeðiko",
        "lang": "es",
        "sub_theme": "professions",
        "id": "es_starter_jobs_002"
    },
    {
        "word": "pie",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🦶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo al final de la pierna.",
                "examples": [
                    "Me duele el pie."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈpje",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_011",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pes"
        }
    },
    {
        "word": "profesor",
        "level": "starter",
        "theme": "jobs",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona que ayuda a aprender.",
                "examples": [
                    "El profesor está en el aula."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈprofesor",
        "lang": "es",
        "sub_theme": "professions",
        "id": "es_starter_jobs_003"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Pan plano con queso y tomate.",
                "examples": [
                    "Me gusta la pizza con queso."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈpizza",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_025"
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍝",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Comida hecha de harina y huevos.",
                "examples": [
                    "Comemos pasta hoy."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈpasta",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_026"
    },
    {
        "word": "manzana",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍎",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fruta redonda, roja o verde.",
                "examples": [
                    "La manzana es roja."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈmanzana",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_027"
    },
    {
        "word": "pan",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Comida común de harina y agua.",
                "examples": [
                    "Compro pan cada mañana."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈpan",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_028",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "panis"
        }
    },
    {
        "word": "huevo",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥚",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Objeto ovalado puesto por una gallina.",
                "examples": [
                    "Un huevo para el desayuno."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈhuevo",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_029"
    },
    {
        "word": "leche",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🥛",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Líquido blanco de las vacas.",
                "examples": [
                    "Bebo leche fría."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈleche",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_030",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "lac"
        }
    },
    {
        "word": "plátano",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Fruta larga y amarilla.",
                "examples": [
                    "El plátano es amarillo."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈplátano",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_031"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "☕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bebida marrón caliente.",
                "examples": [
                    "Tomo café sin azúcar."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈcafé",
        "lang": "es",
        "sub_theme": "drinks",
        "id": "es_starter_food_drink_032"
    },
    {
        "word": "té",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Bebida caliente de hojas.",
                "examples": [
                    "Un té caliente, por favor."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈté",
        "lang": "es",
        "sub_theme": "drinks",
        "id": "es_starter_food_drink_033"
    },
    {
        "word": "agua",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🚰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Líquido transparente para beber.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈagua",
        "lang": "es",
        "sub_theme": "drinks",
        "id": "es_starter_food_drink_034",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "aqua"
        }
    },
    {
        "word": "escuela",
        "level": "starter",
        "theme": "places",
        "emoji": "🏫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar donde los niños aprenden.",
                "examples": [
                    "La escuela abre a las ocho."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈescuela",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_075",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "schola"
        }
    },
    {
        "word": "camiseta",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👕",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Camisa casual de manga corta.",
                "examples": [
                    "Llevo una camiseta azul."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈcamiseta",
        "lang": "es",
        "sub_theme": "everyday",
        "id": "es_starter_clothes_002"
    },
    {
        "word": "pantalones",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Ropa para las piernas.",
                "examples": [
                    "Estos pantalones son nuevos."
                ]
            }
        ],
        "article": "los",
        "gender": "masculine",
        "transcription": "ˈpantalones",
        "lang": "es",
        "sub_theme": "everyday",
        "id": "es_starter_clothes_003"
    },
    {
        "word": "zapato",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👞",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Algo que se usa en los pies.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈzapato",
        "lang": "es",
        "sub_theme": "everyday",
        "id": "es_starter_clothes_004"
    },
    {
        "word": "sombrero",
        "level": "starter",
        "theme": "clothes",
        "emoji": "👒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Algo que se usa en la cabeza.",
                "examples": [
                    "Lleva un sombrero para el sol."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈsombrero",
        "lang": "es",
        "sub_theme": "everyday",
        "id": "es_starter_clothes_005"
    },
    {
        "word": "silla",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🪑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mueble con respaldo, generalmente de cuatro patas, para sentarse una persona.",
                "examples": [
                    "Me siento en la silla."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈsi.ʝa",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_015",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sella"
        }
    },
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "table",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mueble formado por un tablero horizontal sostenido por uno o varios pies.",
                "examples": [
                    "Pon el libro sobre la mesa."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈme.sa",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_016",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mensa"
        }
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🛏️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mueble para dormir o descansar.",
                "examples": [
                    "Me voy a la cama a las diez."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈka.ma",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_017",
        "etymology": {
            "origin_lang": "Vulgar Latin",
            "origin_word": "cama"
        }
    },
    {
        "word": "llave",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🔑",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Instrumento metálico para abrir o cerrar una cerradura.",
                "examples": [
                    "He perdido mi llave."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈʝa.βe",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_018"
    },
    {
        "word": "teléfono",
        "level": "starter",
        "theme": "technology",
        "emoji": "📱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Dispositivo para hablar.",
                "examples": [
                    "Mi teléfono no funciona."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈteléfono",
        "lang": "es",
        "sub_theme": "devices",
        "id": "es_starter_technology_008"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture",
        "emoji": "📖",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Conjunto de hojas de papel impresas y encuadernadas.",
                "examples": [
                    "Leo un libro interesante."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈli.βɾo",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_019",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "liber"
        }
    },
    {
        "word": "bolsa",
        "level": "starter",
        "theme": "furniture",
        "emoji": "👜",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Contenedor para llevar cosas.",
                "examples": [
                    "Llevo mis cosas en la bolsa."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈbolsa",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_020"
    },
    {
        "word": "bolígrafo",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🖊️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Objeto para escribir con tinta.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈbolígrafo",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_021"
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
                "text": "Animal pequeño con pelo.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈgato",
        "lang": "es",
        "sub_theme": "pets",
        "id": "es_starter_animals_003",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "cattus"
        }
    },
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
                "text": "El mejor amigo del hombre.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈperro",
        "lang": "es",
        "sub_theme": "pets",
        "id": "es_starter_animals_004",
        "etymology": {
            "origin_lang": "Onomatopoeic",
            "origin_word": "perro"
        }
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "✋",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del brazo con dedos.",
                "examples": [
                    "Lávate las manos."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈmano",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_012",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "manus"
        }
    },
    {
        "word": "pierna",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "🦵",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo para caminar.",
                "examples": [
                    "Ella tiene piernas largas."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈpierna",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_013"
    },
    {
        "word": "ojo",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "👁️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo para ver.",
                "examples": [
                    "Él tiene ojos verdes."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈojo",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_014",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "oculus"
        }
    },
    {
        "word": "nariz",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "👃",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte de la cara para oler.",
                "examples": [
                    "Respiramos por la nariz."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈnariz",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_015",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nasus"
        }
    },
    {
        "word": "boca",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "👄",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte de la cara para comer.",
                "examples": [
                    "Abre la boca."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈboca",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_016",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "bucca"
        }
    },
    {
        "word": "oreja",
        "level": "starter",
        "theme": "health_medicine",
        "emoji": "👂",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del cuerpo para oír.",
                "examples": [
                    "Escuchamos con las orejas."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈoreja",
        "lang": "es",
        "sub_theme": "limbs",
        "id": "es_starter_health_medicine_017",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "auricula"
        }
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mujer que es madre.",
                "examples": [
                    "La mujer lee el periódico."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈmadre",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_022",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mater"
        }
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hombre que es padre.",
                "examples": [
                    "Ese hombre es mi tío."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈpadre",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_023",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pater"
        }
    },
    {
        "word": "trabajo",
        "level": "starter",
        "theme": "jobs",
        "emoji": "💼",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Empleo; lugar para ganar dinero.",
                "examples": [
                    "Busco un trabajo nuevo."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈtrabajo",
        "lang": "es",
        "sub_theme": "professions",
        "id": "es_starter_jobs_004"
    },
    {
        "word": "hogar",
        "level": "starter",
        "theme": "furniture",
        "emoji": "🏠",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar donde vives.",
                "examples": [
                    "Vuelvo al hogar tarde."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈhogar",
        "lang": "es",
        "sub_theme": "rooms",
        "id": "es_starter_furniture_022"
    },
    {
        "word": "coche",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚗",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Vehículo de cuatro ruedas.",
                "examples": [
                    "Conduzco un coche rojo."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈcoche",
        "lang": "es",
        "sub_theme": "transport",
        "id": "es_starter_travel_023"
    },
    {
        "word": "autobús",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚌",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Vehículo grande para mucha gente.",
                "examples": [
                    "El autobús llega pronto."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈautobús",
        "lang": "es",
        "sub_theme": "transport",
        "id": "es_starter_travel_024"
    },
    {
        "word": "tren",
        "level": "starter",
        "theme": "travel",
        "emoji": "🚆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Vehículo sobre raíles.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈtren",
        "lang": "es",
        "sub_theme": "transport",
        "id": "es_starter_travel_025"
    },
    {
        "word": "dinero",
        "level": "starter",
        "theme": "shopping",
        "emoji": "💰",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Monedas y billetes que se usan para comprar.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "di.ˈne.ɾo",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_023",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "denarius"
        }
    },
    {
        "word": "tienda",
        "level": "starter",
        "theme": "places",
        "emoji": "🛒",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Lugar para comprar.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈtienda",
        "lang": "es",
        "sub_theme": "city",
        "id": "es_starter_places_076"
    },
    {
        "word": "familia",
        "level": "starter",
        "theme": "people",
        "emoji": "👪",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Grupo de parientes.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈfamilia",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_024"
    },
    {
        "word": "amigo",
        "level": "starter",
        "theme": "people",
        "emoji": "👫",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona que te gusta.",
                "examples": [
                    "Él es mi mejor amigo."
                ]
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈamigo",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_025"
    },
    {
        "word": "día",
        "level": "starter",
        "theme": "time",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Periodo de 24 horas.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈdía",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_006",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "dies"
        }
    },
    {
        "word": "semana",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Periodo de siete días.",
                "examples": [
                    "Hoy es un buen día."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈsemana",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_007"
    },
    {
        "word": "comida",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍲",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Cosas que la gente come.",
                "examples": [
                    "El almuerzo está listo."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈcomida",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_035"
    },
    {
        "word": "desayuno",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍳",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Primera comida del día.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈdesayuno",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_036"
    },
    {
        "word": "almuerzo",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍱",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Comida del mediodía.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈalmuerzo",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_037"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Comida de la noche.",
                "examples": [
                    "Cenamos a las ocho."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈcena",
        "lang": "es",
        "sub_theme": "meals",
        "id": "es_starter_food_drink_038"
    },
    {
        "word": "mañana",
        "level": "starter",
        "theme": "time",
        "emoji": "🌅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del día antes del mediodía.",
                "examples": [
                    "Hace frío esta mañana."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈmañana",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_008"
    },
    {
        "word": "tarde",
        "level": "starter",
        "theme": "time",
        "emoji": "🌆",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Parte del día después de comer.",
                "examples": [
                    "Salimos por la noche."
                ]
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈtarde",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_009"
    },
    {
        "word": "noche",
        "level": "starter",
        "theme": "time",
        "emoji": "🌙",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Periodo de oscuridad.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈnoche",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_010",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "nox"
        }
    },
    {
        "word": "hoy",
        "level": "starter",
        "theme": "time",
        "emoji": "📅",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "En este día.",
                "examples": []
            }
        ],
        "article": "hoy",
        "gender": "adverb",
        "transcription": "ˈhoy",
        "lang": "es",
        "sub_theme": "clock",
        "id": "es_starter_time_011"
    },
    {
        "word": "marido",
        "level": "starter",
        "theme": "people",
        "emoji": "👨",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Hombre casado.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈmarido",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_026"
    },
    {
        "word": "mujer",
        "level": "starter",
        "theme": "people",
        "emoji": "👩",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Mujer casada.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈmujer",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_027",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mulier"
        }
    },
    {
        "word": "niño",
        "level": "starter",
        "theme": "people",
        "emoji": "👶",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Persona joven.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈniño",
        "lang": "es",
        "sub_theme": "family",
        "id": "es_starter_people_028"
    },
    {
        "word": "sol",
        "level": "starter",
        "theme": "nature",
        "emoji": "☀️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Estrella que da luz.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine",
        "transcription": "ˈsol",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_016",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "sol",
            etymology: {
                "origin_lang": "Latin",
                "origin_word": "sol",
                etymology: {
                    "origin_lang": "Latin",
                    "origin_word": "sol"
                }
            }
        }
    },
    {
        "word": "lluvia",
        "level": "starter",
        "theme": "nature",
        "emoji": "🌧️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "definitions": [
            {
                "text": "Agua que cae de las nubes.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine",
        "transcription": "ˈlluvia",
        "lang": "es",
        "sub_theme": "weather",
        "id": "es_starter_nature_017",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "pluvia"
        }
    },
    {
        "word": "sí",
        "level": "starter",
        "theme": "language",
        "emoji": "✅",
        "form": "adverb",
        "transcription": "ˈsi",
        "definitions": [
            {
                "text": "Expresa afirmación.",
                "examples": [
                    "Sí, por favor."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "no"
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_014"
    },
    {
        "word": "no",
        "level": "starter",
        "theme": "language",
        "emoji": "❌",
        "form": "adverb",
        "transcription": "ˈno",
        "definitions": [
            {
                "text": "Expresa negación.",
                "examples": [
                    "No, gracias."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "sí"
        ],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_015"
    },
    {
        "word": "quién",
        "level": "starter",
        "theme": "language",
        "emoji": "👤",
        "form": "pronoun",
        "transcription": "ˈkjen",
        "definitions": [
            {
                "text": "Usado para preguntar por la identidad de una persona.",
                "examples": [
                    "¿Quién es él?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "pronombre interrogativo",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_016"
    },
    {
        "word": "dónde",
        "level": "starter",
        "theme": "language",
        "emoji": "📍",
        "form": "adverb",
        "transcription": "ˈdonde",
        "definitions": [
            {
                "text": "Usado para preguntar por un lugar.",
                "examples": [
                    "¿Dónde vives?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "adverbio interrogativo",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_017"
    },
    {
        "word": "cuándo",
        "level": "starter",
        "theme": "language",
        "emoji": "⌚",
        "form": "adverb",
        "transcription": "ˈkwando",
        "definitions": [
            {
                "text": "Usado para preguntar por el tiempo.",
                "examples": [
                    "¿Cuándo llegas?"
                ]
            }
        ],
        "synonyms": [],
        "subtext": "adverbio interrogativo",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_018"
    },
    {
        "word": "ciudad",
        "level": "starter",
        "theme": "places",
        "article": "la",
        "gender": "feminine",
        "emoji": "🏙️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "ciudades",
        "transcription": "θju.ˈðað",
        "definitions": [
            {
                "text": "Población grande donde viven muchas personas.",
                "examples": []
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [
            "campo"
        ],
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_077",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "civitas"
        }
    },
    {
        "word": "mapa",
        "level": "starter",
        "theme": "school",
        "article": "el",
        "gender": "masculine",
        "emoji": "🗺️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "mapas",
        "transcription": "ˈmapa",
        "definitions": [
            {
                "text": "Representación gráfica de un territorio.",
                "examples": [
                    "Mira el mapa de la ciudad."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "classroom",
        "id": "es_starter_school_015"
    },
    {
        "word": "palabra",
        "level": "starter",
        "theme": "school",
        "article": "la",
        "gender": "feminine",
        "emoji": "🗣️",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "palabras",
        "transcription": "paˈlaβra",
        "definitions": [
            {
                "text": "Conjunto de sonidos con un significado.",
                "examples": [
                    "No entiendo esta palabra."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "classroom",
        "id": "es_starter_school_016"
    },
    {
        "word": "regalo",
        "level": "starter",
        "theme": "social",
        "article": "el",
        "gender": "masculine",
        "emoji": "🎁",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "plural": "regalos",
        "transcription": "reˈɣalo",
        "definitions": [
            {
                "text": "Cosa que se da a alguien sin querer dinero.",
                "examples": [
                    "Este es un regalo para ti."
                ]
            }
        ],
        "synonyms": [],
        "subtext": "",
        "antonyms": [],
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_036"
    },
    {
        "word": "puerta",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🚪",
        "definitions": [
            {
                "text": "Abertura en una pared para entrar o salir.",
                "examples": []
            }
        ],
        "transcription": "ˈpweɾ.ta",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_023"
    },
    {
        "word": "ventana",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪟",
        "definitions": [
            {
                "text": "Abertura en una pared para dar luz y ventilación.",
                "examples": []
            }
        ],
        "transcription": "ben.ˈta.na",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_024"
    },
    {
        "word": "plato",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍽️",
        "definitions": [
            {
                "text": "Recipiente bajo y circular para servir comida.",
                "examples": []
            }
        ],
        "transcription": "ˈpla.to",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_025"
    },
    {
        "word": "taza",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "☕",
        "definitions": [
            {
                "text": "Término para cup.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_026"
    },
    {
        "word": "vaso",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍷",
        "definitions": [
            {
                "text": "Término para glass.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_027"
    },
    {
        "word": "tenedor",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍴",
        "definitions": [
            {
                "text": "Término para fork.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_028"
    },
    {
        "word": "cuchara",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🥄",
        "definitions": [
            {
                "text": "Término para spoon.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_029"
    },
    {
        "word": "cuchillo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🔪",
        "definitions": [
            {
                "text": "Término para knife.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_030"
    },
    {
        "word": "escritorio",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🖥️",
        "definitions": [
            {
                "text": "Término para desk.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_031"
    },
    {
        "word": "lámpara",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "💡",
        "definitions": [
            {
                "text": "Término para lamp.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_032"
    },
    {
        "word": "reloj",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "⏰",
        "definitions": [
            {
                "text": "Término para clock.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_033"
    },
    {
        "word": "espejo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪞",
        "definitions": [
            {
                "text": "Término para mirror.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_034"
    },
    {
        "word": "botella",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🍾",
        "definitions": [
            {
                "text": "Término para bottle.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_035"
    },
    {
        "word": "caja",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "📦",
        "definitions": [
            {
                "text": "Término para box.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_036"
    },
    {
        "word": "lápiz",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "✏️",
        "definitions": [
            {
                "text": "Término para pencil.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_037"
    },
    {
        "word": "papel",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "📄",
        "definitions": [
            {
                "text": "Término para paper.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_038"
    },
    {
        "word": "nevera",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧊",
        "definitions": [
            {
                "text": "Término para fridge.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_039"
    },
    {
        "word": "horno",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🥯",
        "definitions": [
            {
                "text": "Término para oven.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_040"
    },
    {
        "word": "jabón",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧼",
        "definitions": [
            {
                "text": "Término para soap.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_041"
    },
    {
        "word": "toalla",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧖",
        "definitions": [
            {
                "text": "Término para towel.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_042"
    },
    {
        "word": "sofá",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🛋️",
        "definitions": [
            {
                "text": "Término para sofa.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_043"
    },
    {
        "word": "estante",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪜",
        "definitions": [
            {
                "text": "Término para shelf.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_044"
    },
    {
        "word": "cepillo de dientes",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪥",
        "definitions": [
            {
                "text": "Término para toothbrush.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_045"
    },
    {
        "word": "pasta de dientes",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🦷",
        "definitions": [
            {
                "text": "Término para toothpaste.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_046"
    },
    {
        "word": "champú",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧴",
        "definitions": [
            {
                "text": "Término para shampoo.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_047"
    },
    {
        "word": "peine",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪮",
        "definitions": [
            {
                "text": "Término para comb.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_048"
    },
    {
        "word": "armario",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👗",
        "definitions": [
            {
                "text": "Término para wardrobe.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_049"
    },
    {
        "word": "pared",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧱",
        "definitions": [
            {
                "text": "Término para wall.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_050"
    },
    {
        "word": "suelo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🪵",
        "definitions": [
            {
                "text": "Término para floor.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_051"
    },
    {
        "word": "techo",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏠",
        "definitions": [
            {
                "text": "Término para roof.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_052"
    },
    {
        "word": "jardín",
        "level": "starter",
        "theme": "furniture",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏡",
        "definitions": [
            {
                "text": "Término para garden.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "household_items",
        "id": "es_starter_furniture_053"
    },
    {
        "word": "por favor",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙏",
        "definitions": [
            {
                "text": "Término para please.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_037"
    },
    {
        "word": "gracias",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙏",
        "definitions": [
            {
                "text": "Término para thanks.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_038"
    },
    {
        "word": "hola",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👋",
        "definitions": [
            {
                "text": "Término para hello.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_039"
    },
    {
        "word": "adiós",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "👋",
        "definitions": [
            {
                "text": "Término para goodbye.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_040"
    },
    {
        "word": "perdón",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🙇",
        "definitions": [
            {
                "text": "Término para excuse me.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_041"
    },
    {
        "word": "bienvenido",
        "level": "starter",
        "theme": "social",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤝",
        "definitions": [
            {
                "text": "Término para welcome.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "going_out",
        "id": "es_starter_social_042"
    },
    {
        "word": "qué",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "❓",
        "definitions": [
            {
                "text": "Término para what.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_019"
    },
    {
        "word": "por qué",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤷",
        "definitions": [
            {
                "text": "Término para why.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_020"
    },
    {
        "word": "cómo",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🤔",
        "definitions": [
            {
                "text": "Término para how.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_021"
    },
    {
        "word": "cuántos",
        "level": "starter",
        "theme": "language",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🔢",
        "definitions": [
            {
                "text": "Término para how many.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "discourse",
        "id": "es_starter_language_022"
    },
    {
        "word": "país",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🗺️",
        "definitions": [
            {
                "text": "Término para country.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_078"
    },
    {
        "word": "montaña",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "⛰️",
        "definitions": [
            {
                "text": "Término para mountain.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_079"
    },
    {
        "word": "mar",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌊",
        "definitions": [
            {
                "text": "Término para sea.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_080",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "mare"
        }
    },
    {
        "word": "río",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏞️",
        "definitions": [
            {
                "text": "Término para river.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_081"
    },
    {
        "word": "playa",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏖️",
        "definitions": [
            {
                "text": "Término para beach.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_082"
    },
    {
        "word": "bosque",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌲",
        "definitions": [
            {
                "text": "Término para forest.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_083"
    },
    {
        "word": "calle",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🛣️",
        "definitions": [
            {
                "text": "Término para street.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_084"
    },
    {
        "word": "parque",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌳",
        "definitions": [
            {
                "text": "Término para park.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_085"
    },
    {
        "word": "puente",
        "level": "starter",
        "theme": "places",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🌉",
        "definitions": [
            {
                "text": "Término para bridge.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "geography",
        "id": "es_starter_places_086"
    },
    {
        "word": "precio",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🏷️",
        "definitions": [
            {
                "text": "Término para price.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_024"
    },
    {
        "word": "recibo",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧾",
        "definitions": [
            {
                "text": "Término para receipt.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_025"
    },
    {
        "word": "mercado",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "🧺",
        "definitions": [
            {
                "text": "Término para market.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_026"
    },
    {
        "word": "tarjeta",
        "level": "starter",
        "theme": "shopping",
        "form": "noun",
        "classification": "regular",
        "countability": "countable",
        "emoji": "💳",
        "definitions": [
            {
                "text": "Término para card.",
                "examples": []
            }
        ],
        "transcription": "",
        "lang": "es",
        "sub_theme": "money",
        "id": "es_starter_shopping_027"
    }
];

    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
