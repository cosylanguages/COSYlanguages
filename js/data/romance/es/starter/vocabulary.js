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
                "examples": ["El médico trabaja en el hospital."]
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
                "examples": ["Me duele el pie."]
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
                "examples": ["El profesor está en el aula."]
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
                "examples": ["Me gusta la pizza con queso."]
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
                "examples": ["Comemos pasta hoy."]
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
                "examples": ["La manzana es roja."]
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
                "examples": ["Compro pan cada mañana."]
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
                "examples": ["Un huevo para el desayuno."]
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
                "examples": ["Bebo leche fría."]
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
                "examples": ["El plátano es amarillo."]
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
                "examples": ["Tomo café sin azúcar."]
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
                "examples": ["Un té caliente, por favor."]
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
                "examples": ["La escuela abre a las ocho."]
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
                "examples": ["Llevo una camiseta azul."]
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
                "examples": ["Estos pantalones son nuevos."]
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
                "examples": ["Lleva un sombrero para el sol."]
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
                "examples": ["Siéntate en esta silla."]
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
                "examples": ["El libro está sobre la mesa."]
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
                "examples": ["La cama es muy grande."]
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
                "examples": ["He perdido mi llave."]
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
                "examples": ["Mi teléfono no funciona."]
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
                "examples": ["Llevo mis cosas en la bolsa."]
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
                "examples": ["Lávate las manos."]
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
                "examples": ["Ella tiene piernas largas."]
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
                "examples": ["Él tiene ojos verdes."]
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
                "examples": ["Respiramos por la nariz."]
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
                "examples": ["Abre la boca."]
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
                "examples": ["Escuchamos con las orejas."]
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
                "examples": ["La mujer lee el periódico."]
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
                "examples": ["Ese hombre es mi tío."]
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
                "examples": ["Busco un trabajo nuevo."]
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
                "examples": ["Vuelvo al hogar tarde."]
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
                "examples": ["Conduzco un coche rojo."]
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
                "examples": ["El autobús llega pronto."]
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
                "examples": ["Él es mi mejor amigo."]
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
                "examples": ["Hoy es un buen día."]
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
                "examples": ["El almuerzo está listo."]
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
                "examples": ["Cenamos a las ocho."]
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
                "examples": ["Hace frío esta mañana."]
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
                "examples": ["Salimos por la noche."]
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