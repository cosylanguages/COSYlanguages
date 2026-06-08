(function() {
    const data = [
    {
        "topic": "Café vs té — ¿qué bebida de la mañana es mejor?",
        "sideA": "Café",
        "sideB": "Té",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Energía",
            "Huele bien"
        ],
        "ideasB": [
            "Sano",
            "Relajación"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Café vs té — ¿qué bebida de la mañana es mejor?",
        "definitions": [
            {
                "text": "Café vs té — ¿qué bebida de la mañana es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_001"
    },
    {
        "topic": "Restaurante vs cocina en casa — ¿qué es mejor?",
        "sideA": "Restaurante",
        "sideB": "Cocina en casa",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "No hay platos que lavar",
            "Cocineros profesionales"
        ],
        "ideasB": [
            "Es más barato",
            "Es más sano"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Restaurante vs cocina en casa — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Restaurante vs cocina en casa — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_002"
    },
    {
        "topic": "Verano vs invierno — ¿qué estación es mejor?",
        "sideA": "Verano",
        "sideB": "Invierno",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Sol",
            "Playa"
        ],
        "ideasB": [
            "Nieve",
            "Esquí"
        ],
        "lang": "es",
        "sub_theme": "seasons",
        "word": "Verano vs invierno — ¿qué estación es mejor?",
        "definitions": [
            {
                "text": "Verano vs invierno — ¿qué estación es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_nature_001"
    },
    {
        "topic": "Libro vs película — ¿qué es mejor?",
        "sideA": "Libro",
        "sideB": "Película",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Usa tu imaginación",
            "Aprende muchas cosas"
        ],
        "ideasB": [
            "Es rápido",
            "Ver con amigos"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Libro vs película — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Libro vs película — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_001"
    },
    {
        "topic": "Bicicleta vs coche — ¿qué es mejor para la ciudad?",
        "sideA": "Bicicleta",
        "sideB": "Coche",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Bueno para tu cuerpo",
            "Es gratis"
        ],
        "ideasB": [
            "Es muy rápido",
            "Cálido cuando llueve"
        ],
        "lang": "es",
        "sub_theme": "transport",
        "word": "Bicicleta vs coche — ¿qué es mejor para la ciudad?",
        "definitions": [
            {
                "text": "Bicicleta vs coche — ¿qué es mejor para la ciudad?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_001"
    },
    {
        "topic": "Pizza vs hamburguesa — ¿qué es mejor?",
        "sideA": "Pizza",
        "sideB": "Hamburguesa",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Puedes compartirla",
            "Mucho queso"
        ],
        "ideasB": [
            "Fácil de comer",
            "Bueno con patatas fritas"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Pizza vs hamburguesa — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Pizza vs hamburguesa — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_003"
    },
    {
        "topic": "Ciudad vs campo — ¿cuál es un lugar mejor para vivir?",
        "sideA": "Ciudad",
        "sideB": "Campo",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Muchas tiendas",
            "Salir por la noche"
        ],
        "ideasB": [
            "Es muy tranquilo",
            "Aire limpio"
        ],
        "lang": "es",
        "sub_theme": "rooms",
        "word": "Ciudad vs campo — ¿cuál es un lugar mejor para vivir?",
        "definitions": [
            {
                "text": "Ciudad vs campo — ¿cuál es un lugar mejor para vivir?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_001"
    },
    {
        "topic": "Mañana vs tarde — ¿qué parte del día es más bonita?",
        "sideA": "Mañana",
        "sideB": "Tarde",
        "level": "starter",
        "theme": "time",
        "ideasA": [
            "Mucha energía",
            "El sol sale"
        ],
        "ideasB": [
            "Puedes descansar",
            "Ver películas"
        ],
        "lang": "es",
        "sub_theme": "periods",
        "word": "Mañana vs tarde — ¿qué parte del día es más bonita?",
        "definitions": [
            {
                "text": "Mañana vs tarde — ¿qué parte del día es más bonita?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_time_001"
    },
    {
        "topic": "Tren vs avión — ¿qué es mejor para viajar?",
        "sideA": "Tren",
        "sideB": "Avión",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Ver el paisaje",
            "Mejor para la naturaleza"
        ],
        "ideasB": [
            "Es muy rápido",
            "Ir muy lejos"
        ],
        "lang": "es",
        "sub_theme": "tourism",
        "word": "Tren vs avión — ¿qué es mejor para viajar?",
        "definitions": [
            {
                "text": "Tren vs avión — ¿qué es mejor para viajar?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_002"
    },
    {
        "topic": "Mar vs montañas — ¿qué es mejor para las vacaciones?",
        "sideA": "Mar",
        "sideB": "Montañas",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Nadar",
            "Sol"
        ],
        "ideasB": [
            "Caminar",
            "Bonito"
        ],
        "lang": "es",
        "sub_theme": "tourism",
        "word": "Mar vs montañas — ¿qué es mejor para las vacaciones?",
        "definitions": [
            {
                "text": "Mar vs montañas — ¿qué es mejor para las vacaciones?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_003"
    },
    {
        "topic": "Trabajo solo vs con compañero — ¿qué es mejor?",
        "sideA": "Solo",
        "sideB": "Compañero",
        "level": "starter",
        "theme": "work",
        "ideasA": [
            "Concentrarse mejor",
            "Ir más rápido"
        ],
        "ideasB": [
            "Más ideas",
            "Más divertido"
        ],
        "lang": "es",
        "sub_theme": "office",
        "word": "Trabajo solo vs con compañero — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Trabajo solo vs con compañero — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_work_001"
    },
    {
        "topic": "Llamada vs mensaje de texto — ¿qué es mejor?",
        "sideA": "Llamada",
        "sideB": "Mensaje",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Más directo",
            "Escuchar la voz"
        ],
        "ideasB": [
            "Es más rápido",
            "Responder más tarde"
        ],
        "lang": "es",
        "sub_theme": "devices",
        "word": "Llamada vs mensaje de texto — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Llamada vs mensaje de texto — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_technology_001"
    },
    {
        "topic": "Ropa cómoda vs ropa elegante — ¿qué es mejor?",
        "sideA": "Cómoda",
        "sideB": "Elegante",
        "level": "starter",
        "theme": "clothes",
        "ideasA": [
            "Sentirse bien",
            "Práctica"
        ],
        "ideasB": [
            "Muy bonita",
            "Buena para el trabajo"
        ],
        "lang": "es",
        "sub_theme": "everyday",
        "word": "Ropa cómoda vs ropa elegante — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Ropa cómoda vs ropa elegante — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_clothes_001"
    },
    {
        "topic": "Azúcar vs sal — ¿qué es más importante?",
        "sideA": "Azúcar",
        "sideB": "Sal",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Para postres",
            "Todo el mundo ama el chocolate"
        ],
        "ideasB": [
            "Para comidas principales",
            "Da sabor"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Azúcar vs sal — ¿qué es más importante?",
        "definitions": [
            {
                "text": "Azúcar vs sal — ¿qué es más importante?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_004"
    },
    {
        "topic": "Fiestas grandes vs cenas pequeñas — ¿qué es mejor?",
        "sideA": "Fiestas grandes",
        "sideB": "Cenas pequeñas",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Conocer gente nueva",
            "Música alta"
        ],
        "ideasB": [
            "Hablar tranquilo",
            "Es relajante"
        ],
        "lang": "es",
        "sub_theme": "celebrations",
        "word": "Fiestas grandes vs cenas pequeñas — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Fiestas grandes vs cenas pequeñas — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_002"
    },
    {
        "topic": "Casa vs piso — ¿qué es mejor para vivir?",
        "sideA": "Casa",
        "sideB": "Piso",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Jardín",
            "Espacio"
        ],
        "ideasB": [
            "Barato",
            "Fácil de limpiar"
        ],
        "lang": "es",
        "sub_theme": "rooms",
        "word": "Casa vs piso — ¿qué es mejor para vivir?",
        "definitions": [
            {
                "text": "Casa vs piso — ¿qué es mejor para vivir?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_002"
    },
    {
        "topic": "Dinero vs tiempo libre — ¿qué es más importante?",
        "sideA": "Dinero",
        "sideB": "Tiempo libre",
        "level": "starter",
        "theme": "emotions",
        "ideasA": [
            "Puedes comprar cosas",
            "Es seguridad"
        ],
        "ideasB": [
            "Disfrutar la vida",
            "Menos estrés"
        ],
        "lang": "es",
        "sub_theme": "complex",
        "word": "Dinero vs tiempo libre — ¿qué es más importante?",
        "definitions": [
            {
                "text": "Dinero vs tiempo libre — ¿qué es más importante?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_emotions_001"
    },
    {
        "topic": "Chocolate negro vs chocolate con leche — ¿qué es mejor?",
        "sideA": "Negro",
        "sideB": "Leche",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Bueno para tu corazón",
            "Menos azúcar"
        ],
        "ideasB": [
            "Muy dulce",
            "Bueno con café"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Chocolate negro vs chocolate con leche — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Chocolate negro vs chocolate con leche — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_005"
    },
    {
        "topic": "Cine vs Netflix en casa — ¿qué es mejor?",
        "sideA": "Cine",
        "sideB": "Netflix",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Pantalla grande",
            "El sonido es genial"
        ],
        "ideasB": [
            "Estás cómodo",
            "Puedes parar la película"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Cine vs Netflix en casa — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Cine vs Netflix en casa — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_003"
    },
    {
        "topic": "Viajar solo vs viajar con amigos — ¿qué es mejor?",
        "sideA": "Solo",
        "sideB": "Amigos",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Eliges todo",
            "Conocer más gente"
        ],
        "ideasB": [
            "Compartir recuerdos",
            "Es más barato"
        ],
        "lang": "es",
        "sub_theme": "tourism",
        "word": "Viajar solo vs viajar con amigos — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Viajar solo vs viajar con amigos — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_004"
    },
    {
        "topic": "Podcasts vs música — ¿qué es mejor en el coche?",
        "sideA": "Podcasts",
        "sideB": "Música",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Aprender cosas",
            "Historias interesantes"
        ],
        "ideasB": [
            "Puedes cantar",
            "Da energía"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Podcasts vs música — ¿qué es mejor en el coche?",
        "definitions": [
            {
                "text": "Podcasts vs música — ¿qué es mejor en el coche?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_004"
    },
    {
        "topic": "Lluvia vs viento — ¿qué es peor?",
        "sideA": "Lluvia",
        "sideB": "Viento",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Todo está mojado",
            "Humor triste"
        ],
        "ideasB": [
            "Hace frío",
            "Mal para el pelo"
        ],
        "lang": "es",
        "sub_theme": "landscape",
        "word": "Lluvia vs viento — ¿qué es peor?",
        "definitions": [
            {
                "text": "Lluvia vs viento — ¿qué es peor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_nature_002"
    },
    {
        "topic": "Regalo sorpresa vs elegir tu regalo — ¿qué es mejor?",
        "sideA": "Sorpresa",
        "sideB": "Elegir",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Emoción fuerte",
            "Es amable"
        ],
        "ideasB": [
            "Obtener lo que quieres",
            "Sin malas sorpresas"
        ],
        "lang": "es",
        "sub_theme": "celebrations",
        "word": "Regalo sorpresa vs elegir tu regalo — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Regalo sorpresa vs elegir tu regalo — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_005"
    },
    {
        "topic": "Escribir en papel vs escribir en tableta — ¿qué es mejor?",
        "sideA": "Papel",
        "sideB": "Tableta",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Sin batería",
            "Buena sensación"
        ],
        "ideasB": [
            "Rápido",
            "Ahorrar papel"
        ],
        "lang": "es",
        "sub_theme": "devices",
        "word": "Escribir en papel vs escribir en tableta — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Escribir en papel vs escribir en tableta — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_technology_002"
    },
    {
        "topic": "Sándwich vs ensalada — ¿qué es mejor para el almuerzo?",
        "sideA": "Sándwich",
        "sideB": "Ensalada",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Fácil de llevar",
            "Estómago lleno"
        ],
        "ideasB": [
            "Comida ligera",
            "Muchas vitaminas"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Sándwich vs ensalada — ¿qué es mejor para el almuerzo?",
        "definitions": [
            {
                "text": "Sándwich vs ensalada — ¿qué es mejor para el almuerzo?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_006"
    },
    {
        "topic": "Hotel vs camping — ¿qué es mejor para las vacaciones?",
        "sideA": "Hotel",
        "sideB": "Camping",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Cómodo",
            "Tiene desayuno"
        ],
        "ideasB": [
            "En la naturaleza",
            "Es una aventura"
        ],
        "lang": "es",
        "sub_theme": "tourism",
        "word": "Hotel vs camping — ¿qué es mejor para las vacaciones?",
        "definitions": [
            {
                "text": "Hotel vs camping — ¿qué es mejor para las vacaciones?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_005"
    },
    {
        "topic": "Hablar vs escuchar — ¿qué es más importante?",
        "sideA": "Hablar",
        "sideB": "Escuchar",
        "level": "starter",
        "theme": "work",
        "ideasA": [
            "Compartir tus ideas",
            "Importante para el líder"
        ],
        "ideasB": [
            "Aprender de otros",
            "Es amable"
        ],
        "lang": "es",
        "sub_theme": "office",
        "word": "Hablar vs escuchar — ¿qué es más importante?",
        "definitions": [
            {
                "text": "Hablar vs escuchar — ¿qué es más importante?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_work_002"
    },
    {
        "topic": "Primavera vs otoño — ¿qué es mejor?",
        "sideA": "Primavera",
        "sideB": "Otoño",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Las flores crecen",
            "Tiempo más cálido"
        ],
        "ideasB": [
            "Hojas bonitas",
            "Agradable para caminar"
        ],
        "lang": "es",
        "sub_theme": "seasons",
        "word": "Primavera vs otoño — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Primavera vs otoño — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_nature_003"
    },
    {
        "topic": "Fruta vs verduras — ¿qué es mejor?",
        "sideA": "Fruta",
        "sideB": "Verduras",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Son dulces",
            "Genial para meriendas"
        ],
        "ideasB": [
            "Muy sano",
            "Bueno para cocinar"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Fruta vs verduras — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Fruta vs verduras — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_007"
    },
    {
        "topic": "Películas de acción vs comedias — ¿qué es mejor?",
        "sideA": "Acción",
        "sideB": "Comedia",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Emocionante y rápido",
            "Efectos geniales"
        ],
        "ideasB": [
            "Te hacen reír",
            "Bueno para relajarse"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Películas de acción vs comedias — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Películas de acción vs comedias — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_006"
    },
    {
        "topic": "Lavar platos vs pasar la aspiradora — ¿qué es mejor?",
        "sideA": "Platos",
        "sideB": "Aspiradora",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "El agua caliente es agradable",
            "Trabajo tranquilo"
        ],
        "ideasB": [
            "Es rápido",
            "Ver resultado inmediato"
        ],
        "lang": "es",
        "sub_theme": "rooms",
        "word": "Lavar platos vs pasar la aspiradora — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Lavar platos vs pasar la aspiradora — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_003"
    },
    {
        "topic": "Música pop vs música rock — ¿qué es mejor?",
        "sideA": "Pop",
        "sideB": "Rock",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Canciones pegadizas",
            "Bueno para bailar"
        ],
        "ideasB": [
            "Instrumentos geniales",
            "Energía fuerte"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Música pop vs música rock — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Música pop vs música rock — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_007"
    },
    {
        "topic": "Madrugador vs noctámbulo — ¿qué es mejor?",
        "sideA": "Madrugador",
        "sideB": "Noctámbulo",
        "level": "starter",
        "theme": "time",
        "ideasA": [
            "Mañana tranquila",
            "Día productivo"
        ],
        "ideasB": [
            "Creativo por la noche",
            "Dormir tarde"
        ],
        "lang": "es",
        "sub_theme": "periods",
        "word": "Madrugador vs noctámbulo — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Madrugador vs noctámbulo — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_time_002"
    },
    {
        "topic": "Caminar vs correr — ¿qué es mejor?",
        "sideA": "Caminar",
        "sideB": "Correr",
        "level": "starter",
        "theme": "health_medicine",
        "ideasA": [
            "Relajante",
            "Puedes ver la naturaleza"
        ],
        "ideasB": [
            "Bueno para el corazón",
            "Muy rápido"
        ],
        "lang": "es",
        "sub_theme": "wellbeing",
        "word": "Caminar vs correr — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Caminar vs correr — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_health_medicine_001"
    },
    {
        "topic": "Portátil vs ordenador de sobremesa — ¿qué es mejor?",
        "sideA": "Portátil",
        "sideB": "Sobremesa",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Puedes moverlo",
            "Trabajar en cualquier lugar"
        ],
        "ideasB": [
            "Pantalla más grande",
            "Más potente"
        ],
        "lang": "es",
        "sub_theme": "devices",
        "word": "Portátil vs ordenador de sobremesa — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Portátil vs ordenador de sobremesa — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_technology_003"
    },
    {
        "topic": "Transporte público vs taxi — ¿qué es mejor?",
        "sideA": "Bus/Tren",
        "sideB": "Taxi",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Más barato",
            "Mejor para la naturaleza"
        ],
        "ideasB": [
            "Directo a casa",
            "Más cómodo"
        ],
        "lang": "es",
        "sub_theme": "transport",
        "word": "Transporte público vs taxi — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Transporte público vs taxi — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_006"
    },
    {
        "topic": "Helado vs tarta — ¿qué es un postre mejor?",
        "sideA": "Helado",
        "sideB": "Tarta",
        "level": "starter",
        "theme": "food_drink",
        "ideasA": [
            "Frío",
            "Fresco"
        ],
        "ideasB": [
            "Caliente",
            "Cumpleaños"
        ],
        "lang": "es",
        "sub_theme": "meals",
        "word": "Helado vs tarta — ¿qué es un postre mejor?",
        "definitions": [
            {
                "text": "Helado vs tarta — ¿qué es un postre mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_008"
    },
    {
        "topic": "Email vs carta — ¿qué es mejor?",
        "sideA": "Email",
        "sideB": "Carta",
        "level": "starter",
        "theme": "technology",
        "ideasA": [
            "Muy rápido",
            "Gratis"
        ],
        "ideasB": [
            "Más personal",
            "Bonito de guardar"
        ],
        "lang": "es",
        "sub_theme": "devices",
        "word": "Email vs carta — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Email vs carta — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_technology_004"
    },
    {
        "topic": "Playa vs parque — ¿qué es mejor?",
        "sideA": "Playa",
        "sideB": "Parque",
        "level": "starter",
        "theme": "nature",
        "ideasA": [
            "Puedes nadar",
            "La arena es divertida"
        ],
        "ideasB": [
            "Árboles y sombra",
            "Bueno para picnics"
        ],
        "lang": "es",
        "sub_theme": "landscape",
        "word": "Playa vs parque — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Playa vs parque — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_nature_004"
    },
    {
        "topic": "Cocinar vs limpiar — ¿qué es mejor?",
        "sideA": "Cocinar",
        "sideB": "Limpiar",
        "level": "starter",
        "theme": "furniture",
        "ideasA": [
            "Creativo",
            "Resultado delicioso"
        ],
        "ideasB": [
            "Casa organizada",
            "Tarea relajante"
        ],
        "lang": "es",
        "sub_theme": "rooms",
        "word": "Cocinar vs limpiar — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Cocinar vs limpiar — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_004"
    },
    {
        "topic": "Vacaciones cortas vs vacaciones largas — ¿qué es mejor?",
        "sideA": "Cortas",
        "sideB": "Largas",
        "level": "starter",
        "theme": "travel",
        "ideasA": [
            "Planificación fácil",
            "Muchos viajes"
        ],
        "ideasB": [
            "Relajarse más",
            "Ver más"
        ],
        "lang": "es",
        "sub_theme": "tourism",
        "word": "Vacaciones cortas vs vacaciones largas — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Vacaciones cortas vs vacaciones largas — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_travel_007"
    },
    {
        "topic": "Ficción vs no ficción — ¿qué es mejor?",
        "sideA": "Ficción",
        "sideB": "No ficción",
        "level": "starter",
        "theme": "social",
        "ideasA": [
            "Historias emocionantes",
            "Escapismo"
        ],
        "ideasB": [
            "Aprender hechos",
            "Información del mundo real"
        ],
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Ficción vs no ficción — ¿qué es mejor?",
        "definitions": [
            {
                "text": "Ficción vs no ficción — ¿qué es mejor?",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_008"
    }
];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
