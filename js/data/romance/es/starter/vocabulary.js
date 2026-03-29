(function() {
    const data = [
    {
        "word": "médico",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍⚕️",
        "form": "noun",
        "definitions": [
            {
                "text": "Persona que ayuda a los enfermos.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "pie",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦶",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del cuerpo al final de la pierna.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "profesor",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "🧑‍🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Persona que ayuda a aprender.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "pizza",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍕",
        "form": "noun",
        "definitions": [
            {
                "text": "Pan plano con queso y tomate.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "pasta",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍝",
        "form": "noun",
        "definitions": [
            {
                "text": "Comida hecha de harina y huevos.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "manzana",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍎",
        "form": "noun",
        "definitions": [
            {
                "text": "Fruta redonda, roja o verde.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "pan",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍞",
        "form": "noun",
        "definitions": [
            {
                "text": "Comida común de harina y agua.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "huevo",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥚",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto ovalado puesto por una gallina.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "leche",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🥛",
        "form": "noun",
        "definitions": [
            {
                "text": "Líquido blanco de las vacas.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "plátano",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍌",
        "form": "noun",
        "definitions": [
            {
                "text": "Fruta larga y amarilla.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "café",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "☕",
        "form": "noun",
        "definitions": [
            {
                "text": "Bebida marrón caliente.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "té",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🍵",
        "form": "noun",
        "definitions": [
            {
                "text": "Bebida caliente de hojas.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "agua",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🚰",
        "form": "noun",
        "definitions": [
            {
                "text": "Líquido transparente para beber.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "escuela",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🏫",
        "form": "noun",
        "definitions": [
            {
                "text": "Lugar donde los niños aprenden.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "camiseta",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "form": "noun",
        "definitions": [
            {
                "text": "Camisa casual de manga corta.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "pantalones",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👖",
        "form": "noun",
        "definitions": [
            {
                "text": "Ropa para las piernas.",
                "examples": []
            }
        ],
        "article": "los",
        "gender": "masculine"
    },
    {
        "word": "zapato",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👞",
        "form": "noun",
        "definitions": [
            {
                "text": "Algo que se usa en los pies.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "sombrero",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👒",
        "form": "noun",
        "definitions": [
            {
                "text": "Algo que se usa en la cabeza.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "silla",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Mueble para sentarse.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "mesa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🪑",
        "form": "noun",
        "definitions": [
            {
                "text": "Mueble con cuatro patas.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "cama",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🛏️",
        "form": "noun",
        "definitions": [
            {
                "text": "Mueble para dormir.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "llave",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🔑",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto para abrir puertas.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "teléfono",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📱",
        "form": "noun",
        "definitions": [
            {
                "text": "Dispositivo para hablar.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "libro",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📚",
        "form": "noun",
        "definitions": [
            {
                "text": "Muchas páginas para leer.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "bolsa",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "👜",
        "form": "noun",
        "definitions": [
            {
                "text": "Contenedor para llevar cosas.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "bolígrafo",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "🖊️",
        "form": "noun",
        "definitions": [
            {
                "text": "Objeto para escribir con tinta.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "gato",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐈",
        "form": "noun",
        "definitions": [
            {
                "text": "Animal pequeño con pelo.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "perro",
        "level": "starter",
        "theme": "animals_A1",
        "emoji": "🐕",
        "form": "noun",
        "definitions": [
            {
                "text": "El mejor amigo del hombre.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "mano",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "✋",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del brazo con dedos.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "pierna",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "🦵",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del cuerpo para caminar.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "ojo",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del cuerpo para ver.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "nariz",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👃",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte de la cara para oler.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "boca",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👄",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte de la cara para comer.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "oreja",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del cuerpo para oír.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "madre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Mujer que es madre.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "padre",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Hombre que es padre.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "trabajo",
        "level": "starter",
        "theme": "job_titles_professions_A1",
        "emoji": "💼",
        "form": "noun",
        "definitions": [
            {
                "text": "Empleo; lugar para ganar dinero.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "hogar",
        "level": "starter",
        "theme": "rooms_of_a_home_A1",
        "emoji": "🏠",
        "form": "noun",
        "definitions": [
            {
                "text": "Lugar donde vives.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "coche",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "form": "noun",
        "definitions": [
            {
                "text": "Vehículo de cuatro ruedas.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "autobús",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚌",
        "form": "noun",
        "definitions": [
            {
                "text": "Vehículo grande para mucha gente.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "tren",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚆",
        "form": "noun",
        "definitions": [
            {
                "text": "Vehículo sobre raíles.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "dinero",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "💰",
        "form": "noun",
        "definitions": [
            {
                "text": "Monedas o billetes.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "tienda",
        "level": "starter",
        "theme": "local_places_services_A1",
        "emoji": "🛒",
        "form": "noun",
        "definitions": [
            {
                "text": "Lugar para comprar.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "familia",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👪",
        "form": "noun",
        "definitions": [
            {
                "text": "Grupo de parientes.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "amigo",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👫",
        "form": "noun",
        "definitions": [
            {
                "text": "Persona que te gusta.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "día",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Periodo de 24 horas.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "semana",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "Periodo de siete días.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "comida",
        "level": "starter",
        "theme": "basic_foods_A1",
        "emoji": "🍲",
        "form": "noun",
        "definitions": [
            {
                "text": "Cosas que la gente come.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "desayuno",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍳",
        "form": "noun",
        "definitions": [
            {
                "text": "Primera comida del día.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "almuerzo",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍱",
        "form": "noun",
        "definitions": [
            {
                "text": "Comida del mediodía.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "cena",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍽️",
        "form": "noun",
        "definitions": [
            {
                "text": "Comida de la noche.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "mañana",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌅",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del día antes del mediodía.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "tarde",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌆",
        "form": "noun",
        "definitions": [
            {
                "text": "Parte del día después de comer.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "noche",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "🌙",
        "form": "noun",
        "definitions": [
            {
                "text": "Periodo de oscuridad.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "hoy",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "📅",
        "form": "noun",
        "definitions": [
            {
                "text": "En este día.",
                "examples": []
            }
        ],
        "article": "hoy",
        "gender": "adverb"
    },
    {
        "word": "mañana",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "⏭️",
        "form": "noun",
        "definitions": [
            {
                "text": "El día después de hoy.",
                "examples": []
            }
        ],
        "article": "mañana",
        "gender": "adverb"
    },
    {
        "word": "marido",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👨",
        "form": "noun",
        "definitions": [
            {
                "text": "Hombre casado.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "mujer",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👩",
        "form": "noun",
        "definitions": [
            {
                "text": "Mujer casada.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    },
    {
        "word": "niño",
        "level": "starter",
        "theme": "immediate_family_A1",
        "emoji": "👶",
        "form": "noun",
        "definitions": [
            {
                "text": "Persona joven.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "sol",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "☀️",
        "form": "noun",
        "definitions": [
            {
                "text": "Estrella que da luz.",
                "examples": []
            }
        ],
        "article": "el",
        "gender": "masculine"
    },
    {
        "word": "lluvia",
        "level": "starter",
        "theme": "weather_A1",
        "emoji": "🌧️",
        "form": "noun",
        "definitions": [
            {
                "text": "Agua que cae de las nubes.",
                "examples": []
            }
        ],
        "article": "la",
        "gender": "feminine"
    }
];
    const lang = "es";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();