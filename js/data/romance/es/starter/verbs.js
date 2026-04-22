(function() {
    const data = [

    {
        "word": "ser",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "👤",
        "subtext": "ser feliz / estar en el trabajo",
        "synonyms": [
            "estar cansado",
            "estar listo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Existir; tener una cualidad o estado permanente.",
                "examples": [
                    "Soy estudiante.",
                    "El coche es rojo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "fui",
        "v3": "sido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "tener",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "👜",
        "subtext": "tener un trabajo / tener un problema / tener tiempo",
        "synonyms": [
            "almorzar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Poseer algo.",
                "examples": [
                    "Tengo un perro.",
                    "Tienes hambre."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "tuve",
        "v3": "tenido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "sentir",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🌡️",
        "subtext": "",
        "synonyms": [
            "sentirse cansado",
            "sentirse mejor",
            "sentirse enfermo",
            "sentirse estresado"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Experimentar un estado físico o emocional.",
                "examples": [
                    "Ella se siente agotada después de una semana larga."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "sentí",
        "v3": "sentido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "dar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🎁",
        "subtext": "dar consejos / dar dinero / dar un regalo / dar información",
        "opposite": "tomar",
        "oppositeEmoji": "👜",
        "form": "verb",
        "definitions": [
            {
                "text": "Entregar o transferir algo a alguien.",
                "examples": [
                    "Él me da mucho trabajo.",
                    "Ella da consejos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "di",
        "v3": "dado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "tomar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "👜",
        "subtext": "tomar el autobús / tomar medicina / tomar un descanso / tomar tiempo",
        "opposite": "dar",
        "oppositeEmoji": "🎁",
        "form": "verb",
        "definitions": [
            {
                "text": "Sostener y mover algo; usar o consumir.",
                "examples": [
                    "Tomo el autobús al trabajo.",
                    "Ella toma medicina."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "tomé",
        "v3": "tomado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "obtener",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "conseguir un trabajo",
            "cansarse",
            "mejorar",
            "llegar a casa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Recibir, obtener o llegar a ser.",
                "examples": [
                    "Recibo un buen sueldo.",
                    "Él se cansa rápido.",
                    "Ella obtiene un ascenso."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "obtuve",
        "v3": "obtenido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "poner",
        "level": "starter",
        "theme": "furniture_objects_A1",
        "emoji": "📥",
        "subtext": "",
        "synonyms": [
            "ponerse",
            "guardar",
            "colgar el teléfono",
            "ahorrar dinero"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Colocar algo en una posición.",
                "examples": [
                    "Pon tu bolsa aquí.",
                    "Ella pone dinero en el banco."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "puse",
        "v3": "puesto",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "hacer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏗️",
        "subtext": "hacer café",
        "synonyms": [
            "tomar una decisión",
            "cometer un error",
            "ganar dinero"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Crear o producir algo; causar algo.",
                "examples": [
                    "Hago café por la mañana.",
                    "Ella toma una decisión."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hice",
        "v3": "hecho",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "hacer",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛠️",
        "subtext": "hacer el trabajo / hacer la compra / hacer ejercicio / no hacer nada",
        "form": "verb",
        "definitions": [
            {
                "text": "Realizar una acción o actividad.",
                "examples": [
                    "Hago mi trabajo todos los días.",
                    "Ella hace las compras."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hice",
        "v3": "hecho",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "usar",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "🛠️",
        "subtext": "usar un teléfono / usar el transporte público / usar un ordenador / usar el tiempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Emplear algo para un propósito.",
                "examples": [
                    "Uso mi teléfono para todo.",
                    "Ella usa el transporte público."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "usé",
        "v3": "usado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "abrir",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📖",
        "subtext": "abrir una puerta / abrir una cuenta / abrir una tienda / abrir a las nueve",
        "opposite": "cerrar",
        "oppositeEmoji": "🔒",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo no esté cerrado; o comenzar.",
                "examples": [
                    "Él abre la oficina a las ocho.",
                    "Ella abre una cuenta bancaria."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abrí",
        "v3": "abierto",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "cerrar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔒",
        "subtext": "cerrar una puerta / cerrar a las seis / cerrar una cuenta / cerrar la reunión",
        "opposite": "abrir",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo no esté abierto; o terminar.",
                "examples": [
                    "La oficina cierra a las seis.",
                    "Ella cierra su portátil."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cerré",
        "v3": "cerrado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "empezar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "▶️",
        "subtext": "empezar a trabajar / empezar una reunión / empezar un nuevo trabajo",
        "opposite": "terminar",
        "oppositeEmoji": "🏁",
        "form": "verb",
        "definitions": [
            {
                "text": "Comenzar una actividad o período.",
                "examples": [
                    "Empiezo a trabajar a las ocho y media. Ella empieza un nuevo puesto el mes que viene."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "empecé",
        "v3": "empezado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "terminar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "terminar el trabajo / terminar un proyecto / terminar temprano / terminar tarde",
        "opposite": "empezar",
        "oppositeEmoji": "▶️",
        "form": "verb",
        "definitions": [
            {
                "text": "Completar algo.",
                "examples": [
                    "Él termina de trabajar a las cinco. Ella termina el informe al mediodía."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "terminé",
        "v3": "terminado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "ayudar",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "subtext": "ayudar a alguien / ayudar con una tarea",
        "synonyms": [
            "echar una mano",
            "pedir ayuda"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer más fácil para alguien hacer algo.",
                "examples": [
                    "Él ayuda a los nuevos colegas a entender los sistemas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ayudé",
        "v3": "ayudado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "intentar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎯",
        "subtext": "intentar hacer / intentar algo nuevo",
        "synonyms": [
            "esforzarse",
            "intentarlo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tratar de hacer algo; probar algo.",
                "examples": [
                    "Siempre intento responder a todos los mensajes en una hora."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "intenté",
        "v3": "intentado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "mostrar",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📽️",
        "subtext": "mostrar cómo / mostrar un documento / mostrar interés",
        "form": "verb",
        "definitions": [
            {
                "text": "Dejar que alguien vea o demostrar algo.",
                "examples": [
                    "¿Puedes mostrarme cómo funciona el sistema?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mostré",
        "v3": "mostrado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "encontrar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🔍",
        "subtext": "encontrar un trabajo / encontrar tiempo",
        "synonyms": [
            "descubrir",
            "resultarle difícil"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Descubrir o localizar algo.",
                "examples": [
                    "Encuentro el trabajo interesante.",
                    "Ella encontró un nuevo trabajo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "encontré",
        "v3": "encontrado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "mantener",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "📦",
        "subtext": "",
        "synonyms": [
            "seguir adelante",
            "guardar silencio",
            "llevar un registro",
            "mantenerse en contacto"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Continuar teniendo o haciendo algo.",
                "examples": [
                    "Guarda el recibo.",
                    "Ella mantiene su teléfono encendido todo el día."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "mantuve",
        "v3": "mantenido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "perder",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "📉",
        "subtext": "perder un trabajo / perder dinero / perder peso / perder tiempo",
        "opposite": "ganar",
        "oppositeEmoji": "🏆",
        "form": "verb",
        "definitions": [
            {
                "text": "Dejar de tener algo; fallar en ganar.",
                "examples": [
                    "Perdí mis llaves.",
                    "Ella perdió su trabajo.",
                    "Él nunca pierde."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "perdí",
        "v3": "perdido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "cortar",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "✂️",
        "subtext": "cortar por la mitad",
        "synonyms": [
            "reducir costes",
            "reducir gastos",
            "interrumpir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dividir con algo afilado; reducir.",
                "examples": [
                    "Ella acorta su descanso para el almuerzo.",
                    "Reduce los costos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "corté",
        "v3": "cortado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "girar",
        "level": "starter",
        "theme": "directions_navigation_A1",
        "emoji": "🔄",
        "subtext": "girar a la izquierda / girar a la derecha",
        "synonyms": [
            "encender",
            "apagar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse en una dirección; cambiar de estado.",
                "examples": [
                    "Gira a la izquierda en la oficina.",
                    "Ella apaga la luz."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "giré",
        "v3": "girado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "traer",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🎁",
        "subtext": "traer a alguien / traer comida / traer un documento",
        "synonyms": [
            "mencionar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Llevar algo a un lugar.",
                "examples": [
                    "Trae tu identificación a la entrevista.",
                    "Él trae el almuerzo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "traje",
        "v3": "traído",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "decir",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗨️",
        "subtext": "decir hola / decir que sí / decir que no / decir algo",
        "form": "verb",
        "definitions": [
            {
                "text": "Expresar algo en palabras.",
                "examples": [
                    "Ella dice hola cada mañana.",
                    "Él dice que es difícil."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dije",
        "v3": "dicho",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "decir",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "🗣️",
        "subtext": "decir la verdad / contarle a alguien sobre",
        "synonyms": [
            "decirle a alguien",
            "contar una historia"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dar información o instrucciones a alguien.",
                "examples": [
                    "Ella le cuenta al equipo los cambios antes de que ocurran."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dije",
        "v3": "dicho",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "preguntar",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "❓",
        "subtext": "preguntar sobre",
        "synonyms": [
            "hacer una pregunta",
            "pedir ayuda",
            "preguntarle a alguien"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer una pregunta o realizar una solicitud.",
                "examples": [
                    "Ella pide comentarios después de cada presentación."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pregunté",
        "v3": "preguntado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "hablar",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🗣️",
        "subtext": "hablar con alguien / hablar inglés / hablar con claridad / hablar en una reunión",
        "form": "verb",
        "definitions": [
            {
                "text": "Decir palabras; comunicarse verbalmente.",
                "examples": [
                    "Él habla francés.",
                    "Ella habla con su gerente todos los días."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "hablé",
        "v3": "hablado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "hablar",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "💬",
        "subtext": "hablar con alguien / hablar sobre / hablar abiertamente / hablar durante mucho tiempo",
        "form": "verb",
        "definitions": [
            {
                "text": "Comunicarse hablando.",
                "examples": [
                    "Él habla con su gerente sobre el problema."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hablé",
        "v3": "hablado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "llamar",
        "level": "starter",
        "theme": "basic_technology_devices_A1",
        "emoji": "📞",
        "subtext": "llamar a alguien / llamar para decir que estás enfermo",
        "synonyms": [
            "devolver la llamada",
            "convocar una reunión"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Telefonear a alguien.",
                "examples": [
                    "Llamo a mi cliente cada mañana antes de revisar los correos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "llamé",
        "v3": "llamado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "escribir",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "✍️",
        "subtext": "escribir un correo / escribir un informe / escribir una carta",
        "synonyms": [
            "tomar notas"
        ],
        "opposite": "leer",
        "oppositeEmoji": "📖",
        "form": "verb",
        "definitions": [
            {
                "text": "Poner palabras en papel o pantalla.",
                "examples": [
                    "Escribo correos todo el día.",
                    "Ella escribe un informe cada viernes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "escribí",
        "v3": "escrito",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "leer",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "leer un libro / leer las noticias / leer un contrato / leer atentamente",
        "opposite": "escribir",
        "oppositeEmoji": "✍️",
        "form": "verb",
        "definitions": [
            {
                "text": "Mirar y entender palabras escritas.",
                "examples": [
                    "Ella lee las noticias cada mañana.",
                    "Él lee contratos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "leí",
        "v3": "leído",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "escuchar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🎧",
        "subtext": "escuchar música / escuchar atentamente / escuchar un podcast",
        "form": "verb",
        "definitions": [
            {
                "text": "Prestar atención a los sonidos o al habla.",
                "examples": [
                    "Escucho podcasts en el trabajo.",
                    "Ella escucha atentamente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "escuché",
        "v3": "escuchado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "responder",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "📞",
        "subtext": "responder una pregunta / responder al teléfono / responder un correo",
        "form": "verb",
        "definitions": [
            {
                "text": "Responder a una pregunta o comunicación.",
                "examples": [
                    "Él responde todos los correos rápidamente.",
                    "Ella respondió al teléfono."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "respondí",
        "v3": "respondido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "repetir",
        "level": "starter",
        "theme": "classroom_language_A1",
        "emoji": "🔁",
        "subtext": "repetir eso / repetir un pedido",
        "synonyms": [
            "repetirse"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Decir o hacer algo de nuevo.",
                "examples": [
                    "Por favor repite eso.",
                    "Él repitió la instrucción dos veces."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "repetí",
        "v3": "repetido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "ir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🚶",
        "subtext": "ir al trabajo / ir a casa / ir de compras",
        "synonyms": [
            "salir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse de un lugar a otro.",
                "examples": [
                    "Voy al trabajo en autobús.",
                    "Ella va al médico."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "fui",
        "v3": "ido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "venir",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🏃‍♂️",
        "subtext": "venir a casa / venir al trabajo / venir aquí",
        "synonyms": [
            "volver"
        ],
        "opposite": "ir",
        "oppositeEmoji": "🚶",
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse hacia un lugar o persona.",
                "examples": [
                    "Él viene a la oficina a las nueve.",
                    "Ella viene a casa tarde."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vine",
        "v3": "venido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "caminar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚶",
        "subtext": "caminar al trabajo / caminar a casa / caminar despacio / caminar todos los días",
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse a pie a un ritmo normal.",
                "examples": [
                    "Él camina al trabajo todos los días.",
                    "Ella camina durante su descanso para el almuerzo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "caminé",
        "v3": "caminado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "conducir",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "🚗",
        "subtext": "conducir al trabajo / conducir un coche / conducir a casa / conducir con cuidado",
        "form": "verb",
        "definitions": [
            {
                "text": "Operar un vehículo.",
                "examples": [
                    "Ella conduce al trabajo.",
                    "Él conduce un auto de la empresa."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "conduje",
        "v3": "conducido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "volar",
        "level": "starter",
        "theme": "modes_of_transport_A1",
        "emoji": "✈️",
        "subtext": "volar a una ciudad / volar en clase ejecutiva / volar en clase turista",
        "form": "verb",
        "definitions": [
            {
                "text": "Viajar en avión.",
                "examples": [
                    "Ella vuela a París para reuniones.",
                    "Él odia volar."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "volé",
        "v3": "volado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "llegar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🏁",
        "subtext": "llegar al trabajo / llegar tarde / llegar a tiempo / llegar a casa",
        "form": "verb",
        "definitions": [
            {
                "text": "Llegar a un destino.",
                "examples": [
                    "Él llega a la oficina a las nueve. El tren llega a tiempo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "llegué",
        "v3": "llegado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "salir",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚪",
        "subtext": "salir de casa / salir del trabajo / salir temprano / salir tarde",
        "form": "verb",
        "definitions": [
            {
                "text": "Alejarse de un lugar.",
                "examples": [
                    "Salgo de casa a las ocho y cuarto. Ella sale del trabajo a las seis."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "salí",
        "v3": "salido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "mover",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "📦",
        "subtext": "mudarse a un nuevo lugar",
        "synonyms": [
            "instalarse",
            "mudarse",
            "cambiar de casa"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ir a vivir o trabajar en un lugar diferente.",
                "examples": [
                    "Se mudaron a un apartamento más grande cuando tuvieron hijos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "moví",
        "v3": "movido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "volver",
        "level": "starter",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🔙",
        "subtext": "volver a casa / volver al trabajo / volver de",
        "synonyms": [
            "devolver una llamada"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Venir o volver a un lugar.",
                "examples": [
                    "Él vuelve de un viaje el viernes.",
                    "Ella devolvió la llamada."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "volví",
        "v3": "vuelto",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "viajar",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "✈️",
        "subtext": "viajar por trabajo / viajar al extranjero / viajar en tren",
        "form": "verb",
        "definitions": [
            {
                "text": "Ir de un lugar a otro, especialmente lejos.",
                "examples": [
                    "Viaja por trabajo tres veces al mes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viajé",
        "v3": "viajado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "comer",
        "level": "starter",
        "theme": "meals_of_the_day_A1",
        "emoji": "🍎",
        "subtext": "comer fuera",
        "synonyms": [
            "desayunar",
            "almorzar",
            "cenar"
        ],
        "opposite": "beber",
        "oppositeEmoji": "🥛",
        "form": "verb",
        "definitions": [
            {
                "text": "Meter comida en la boca y tragarla.",
                "examples": [
                    "Cenamos a las siete.",
                    "Él almuerza en su escritorio."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "comí",
        "v3": "comido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "beber",
        "level": "starter",
        "theme": "drinks_A1",
        "emoji": "🥛",
        "subtext": "beber café / beber té / beber agua / beber cerveza",
        "opposite": "comer",
        "oppositeEmoji": "🍎",
        "form": "verb",
        "definitions": [
            {
                "text": "Meter líquido en la boca y tragarlo.",
                "examples": [
                    "Ella bebe café cada mañana.",
                    "Bebo agua."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "bebí",
        "v3": "bebido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "dormir",
        "level": "starter",
        "theme": "times_day_A1",
        "emoji": "😴",
        "subtext": "dormir bien / dormir mal / dormir ocho horas / dormir hasta tarde",
        "opposite": "despertarse",
        "oppositeEmoji": "⏰",
        "form": "verb",
        "definitions": [
            {
                "text": "Descansar con los ojos cerrados en un estado natural de inconsciencia.",
                "examples": [
                    "Duerme siete horas por noche.",
                    "Duermo mal."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dormí",
        "v3": "dormido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "cocinar",
        "level": "starter",
        "theme": "cooking_methods_A1",
        "emoji": "🍳",
        "subtext": "cocinar la cena / cocinar una comida / cocinar en casa / cocinar para alguien",
        "form": "verb",
        "definitions": [
            {
                "text": "Preparar comida calentándola.",
                "examples": [
                    "Ella cocina la cena cada noche. Yo no cocino, pido comida."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cociné",
        "v3": "cocinado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "limpiar",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧹",
        "subtext": "limpiar el piso / limpiar la cocina / limpiar regularmente",
        "synonyms": [
            "recoger"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Eliminar la suciedad de algo.",
                "examples": [
                    "Limpio el apartamento cada sábado. Él limpia su escritorio cada mañana."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "limpié",
        "v3": "limpiado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "llevar",
        "level": "starter",
        "theme": "items_of_clothing_A1",
        "emoji": "👕",
        "subtext": "llevar traje / llevar gafas / llevar ropa informal",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener ropa o accesorios en el cuerpo.",
                "examples": [
                    "Ella lleva un traje al trabajo.",
                    "Él usa anteojos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "llevé",
        "v3": "llevado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "lavar",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🧼",
        "subtext": "lavar los platos / lavar la ropa",
        "synonyms": [
            "lavarse las manos"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Limpiar algo con agua.",
                "examples": [
                    "Lava su auto cada domingo.",
                    "Lávate las manos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lavé",
        "v3": "lavado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "comprar",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🛒",
        "subtext": "comprar comida / comprar un billete / comprar en línea / comprar una casa",
        "opposite": "vender",
        "oppositeEmoji": "🏷️",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtener algo a cambio de dinero.",
                "examples": [
                    "Ella compra comida en línea.",
                    "Él quiere comprar un apartamento."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "compré",
        "v3": "comprado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "pagar",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "subtext": "pagar una factura / pagar el alquiler / pagar con tarjeta / pagar en efectivo",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar dinero a cambio de algo.",
                "examples": [
                    "Pago mis facturas por débito directo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "pagué",
        "v3": "pagado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "gastar",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "subtext": "gastar dinero / gastar en comida / gastar en alquiler",
        "synonyms": [
            "pasar tiempo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Usar dinero para pagar cosas.",
                "examples": [
                    "Gasta demasiado dinero en comida para llevar."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gasté",
        "v3": "gastado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "ahorrar",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "subtext": "ahorrar dinero / ahorrar para unas vacaciones / ahorrar para una casa",
        "opposite": "gastar",
        "oppositeEmoji": "💸",
        "form": "verb",
        "definitions": [
            {
                "text": "Guardar dinero en lugar de gastarlo.",
                "examples": [
                    "Ahorra cien euros cada mes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "ahorré",
        "v3": "ahorrado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "trabajar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "💼",
        "subtext": "trabajar desde casa / trabajar a tiempo completo / trabajar duro / trabajar hasta tarde",
        "form": "verb",
        "definitions": [
            {
                "text": "Realizar tareas como parte de un trabajo.",
                "examples": [
                    "Trabaja desde casa tres días a la semana."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "trabajé",
        "v3": "trabajado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "vivir",
        "level": "starter",
        "theme": "address_location_A1",
        "emoji": "🏠",
        "subtext": "vivir en un piso / vivir solo / vivir con alguien / vivir en el extranjero",
        "opposite": "morir",
        "oppositeEmoji": "⚰️",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener tu hogar en un lugar; estar vivo.",
                "examples": [
                    "Él vive en un apartamento cerca del centro.",
                    "Vivimos juntos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "viví",
        "v3": "vivido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "pensar",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "💭",
        "subtext": "pensar sobre / pensar en / pensar detenidamente",
        "synonyms": [
            "creer que es"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tener una creencia u opinión; usar la mente.",
                "examples": [
                    "Creo que es una buena idea.",
                    "Ella piensa en su trabajo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "pensé",
        "v3": "pensado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "saber",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "saber la respuesta / saber cómo",
        "synonyms": [
            "conocer a alguien",
            "conocer un lugar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tener información o conciencia sobre algo.",
                "examples": [
                    "Sé su nombre.",
                    "Ella sabe la respuesta.",
                    "¿Lo conoces?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "supe",
        "v3": "sabido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "querer",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🙏",
        "subtext": "querer un trabajo / querer irse / querer más dinero / querer ayuda",
        "form": "verb",
        "definitions": [
            {
                "text": "Desear algo.",
                "examples": [
                    "Quiero un café.",
                    "Ella quiere un mejor trabajo.",
                    "Él quiere jubilarse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "quise",
        "v3": "querido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "necesitar",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "🆘",
        "subtext": "necesitar ayuda / necesitar tiempo / necesitar dinero / necesitar descansar",
        "form": "verb",
        "definitions": [
            {
                "text": "Requerir algo; sentir que algo es necesario.",
                "examples": [
                    "Necesito un descanso.",
                    "Ella necesita ayuda.",
                    "Necesitamos más tiempo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "necesité",
        "v3": "necesitado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "gustar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "👍",
        "subtext": "gustar el trabajo / gustar viajar / gustar alguien / gustar la idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Encontrar algo agradable; disfrutar.",
                "examples": [
                    "Me gusta mi trabajo.",
                    "A ella le gusta cocinar.",
                    "A él le gusta el café."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "gustó",
        "v3": "gustado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "amar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "❤️",
        "subtext": "amar a alguien / amar hacer / amar un lugar / amar la idea",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener un fuerte afecto por; disfrutar enormemente.",
                "examples": [
                    "Ella ama su trabajo.",
                    "Él ama viajar por trabajo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "amé",
        "v3": "amado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "odiar",
        "level": "starter",
        "theme": "basic_negative_emotions_A1",
        "emoji": "😡",
        "subtext": "odiar hacer / odiar a alguien / odiar las reuniones / odiar el trayecto al trabajo",
        "form": "verb",
        "definitions": [
            {
                "text": "Sentir una fuerte antipatía.",
                "examples": [
                    "Él odia viajar en autobús.",
                    "Ella odia las reuniones largas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "odié",
        "v3": "odiado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "esperar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "🤞",
        "subtext": "esperar algo / esperar hacer / esperar que",
        "synonyms": [
            "espero que sí"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Desear que algo suceda.",
                "examples": [
                    "Espero obtener un ascenso este año.",
                    "Ella espera un mejor sueldo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "esperé",
        "v3": "esperado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "recordar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🧠",
        "subtext": "recordar hacer / recordar un nombre / recordar con claridad",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener un recuerdo de; no olvidar.",
                "examples": [
                    "Por favor recuerda la fecha límite.",
                    "Ella recuerda a cada cliente."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "recordé",
        "v3": "recordado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "olvidar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🤔",
        "subtext": "olvidar un nombre / olvidar hacer / olvidar por completo",
        "synonyms": [
            "olvidarse de"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "No recordar.",
                "examples": [
                    "No olvides la reunión.",
                    "Él siempre olvida las contraseñas."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "olvidé",
        "v3": "olvidado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "entender",
        "level": "starter",
        "theme": "asking_answering_questions_A1",
        "emoji": "💡",
        "subtext": "entender un problema / entender a alguien / entender claramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Captar el significado de algo.",
                "examples": [
                    "Entiendo el contrato.",
                    "Ella entiende el francés."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "entendí",
        "v3": "entendido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "decidir",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "⚖️",
        "subtext": "decidir hacer / decidir sobre / difícil de decidir",
        "synonyms": [
            "tomar una decisión"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tomar una decisión.",
                "examples": [
                    "Decidió cambiar de carrera.",
                    "Él decide rápido."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "decidí",
        "v3": "decidido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "disfrutar",
        "level": "starter",
        "theme": "basic_positive_emotions_A1",
        "emoji": "😊",
        "subtext": "disfrutar haciendo / disfrutar una comida / disfrutar tu trabajo / disfrutar la vida",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtener placer de algo.",
                "examples": [
                    "Ella realmente disfruta trabajar desde casa tres días a la semana."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "disfruté",
        "v3": "disfrutado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "ver",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👁️",
        "subtext": "ver a un médico / ver a amigos / ver el problema / ver claramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Notar o percibir con los ojos.",
                "examples": [
                    "Veo a mi médico mañana.",
                    "Ella ve el problema."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "vi",
        "v3": "visto",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "oír",
        "level": "starter",
        "theme": "body_parts_A1",
        "emoji": "👂",
        "subtext": "oír noticias / tener noticias de alguien / oír un sonido / oír claramente",
        "form": "verb",
        "definitions": [
            {
                "text": "Percibir el sonido a través de los oídos.",
                "examples": [
                    "Oigo la alarma cada mañana.",
                    "¿Puedes oírme?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "oí",
        "v3": "oído",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "despertarse",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏰",
        "form": "verb",
        "subtext": "despertarse temprano / despertarse tarde / despertarse cansado",
        "opposite": "dormir",
        "oppositeEmoji": "😴",
        "definitions": [
            {
                "text": "Dejar de dormir; volver a estar consciente después del sueño.",
                "examples": [
                    "Me despierto a las seis y media cada mañana."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "me desperté",
        "v3": "despertado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "mirar",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "📺",
        "form": "verb",
        "subtext": "mirar de cerca",
        "synonyms": [
            "ver la televisión",
            "ver una película",
            "ver las noticias"
        ],
        "definitions": [
            {
                "text": "Mirar algo durante un período de tiempo.",
                "examples": [
                    "Ella mira las noticias del mercado cada mañana antes del trabajo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "miré",
        "v3": "mirado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "mirar",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "👀",
        "subtext": "mirar",
        "synonyms": [
            "buscar",
            "parecerse a",
            "parecer feliz"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dirigir tus ojos hacia algo.",
                "examples": [
                    "Mira esta foto.",
                    "Él está buscando sus llaves."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "miré",
        "v3": "mirado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "jugar",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🎮",
        "subtext": "jugar a un deporte / jugar a un juego",
        "synonyms": [
            "tocar música",
            "interpretar un papel"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Participar en un juego o deporte; producir música.",
                "examples": [
                    "Juega al fútbol el fin de semana para desestresarse."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "jugué",
        "v3": "jugado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "correr",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏃",
        "subtext": "correr una carrera",
        "synonyms": [
            "dirigir un negocio",
            "quedarse sin",
            "llegar tarde"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse muy rápido sobre tus piernas.",
                "examples": [
                    "Corro en el parque.",
                    "Él corre para alcanzar el autobús."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "corrí",
        "v3": "corrido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "sentarse",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🪑",
        "subtext": "sentarse / sentarse en un escritorio / estar en una reunión / sentarse en silencio",
        "opposite": "estar de pie",
        "oppositeEmoji": "🧍",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar en o tomar una posición sentada.",
                "examples": [
                    "Se sienta en su escritorio durante ocho horas al día."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "me senté",
        "v3": "sentado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "estar de pie",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🧍",
        "subtext": "",
        "synonyms": [
            "levantarse",
            "hacer cola",
            "estar al lado",
            "destacar"
        ],
        "opposite": "sentarse",
        "oppositeEmoji": "🪑",
        "form": "verb",
        "definitions": [
            {
                "text": "Estar en o levantarse a una posición erguida.",
                "examples": [
                    "Ella se pone de pie cuando presenta para mantener su energía."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "estuve de pie",
        "v3": "estado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "conocer",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🤝",
        "form": "verb",
        "definitions": [
            {
                "text": "Reunirse con alguien, especialmente por una razón planeada.",
                "examples": [
                    "Nos reunimos cada lunes para discutir la semana."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "conocí",
        "v3": "conocido",
        "subtext": "conocer a un cliente / conocer a un colega",
        "synonyms": [
            "quedar para almorzar",
            "conocerse en línea"
        ],
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "aprender",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📚",
        "subtext": "aprender un idioma / aprender una habilidad / aprender de / aprender cómo",
        "form": "verb",
        "definitions": [
            {
                "text": "Adquirir conocimiento o habilidad.",
                "examples": [
                    "Ella está aprendiendo español para su nuevo trabajo en el extranjero."
                ]
            }
        ],
        "classification": "both",
        "aspect": "action",
        "v2": "aprendí",
        "v3": "aprendido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "cambiar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🔄",
        "subtext": "cambiar de trabajo / cambiar de opinión / cambiar el plan / cambiar algo",
        "form": "verb",
        "definitions": [
            {
                "text": "Llegar a ser diferente; hacer algo diferente.",
                "examples": [
                    "Cambió de trabajo dos veces en tres años. Las cosas cambian rápido."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "cambié",
        "v3": "cambiado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "parar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛑",
        "subtext": "parar a alguien",
        "synonyms": [
            "dejar de hacer",
            "dejar de trabajar",
            "dejar un hábito"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Terminar una actividad o movimiento.",
                "examples": [
                    "Dejó de tomar el autobús y ahora va en bicicleta al trabajo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "paré",
        "v3": "parado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "añadir",
        "level": "starter",
        "theme": "numbers_100_999_A1",
        "emoji": "➕",
        "subtext": "añadir un poco de azúcar / añadir a / añadir un comentario",
        "synonyms": [
            "sumar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Juntar cosas para hacer un grupo más grande.",
                "examples": [
                    "Añade un poco de azúcar al té.",
                    "¿Cuánto es cinco más cinco?"
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "añadí",
        "v3": "añadido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "ganar",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏆",
        "subtext": "ganar un juego / ganar un premio / ganar un galardón / ganar un contrato",
        "opposite": "perder",
        "oppositeEmoji": "📉",
        "form": "verb",
        "definitions": [
            {
                "text": "Ser el mejor en un juego o competencia.",
                "examples": [
                    "Queremos ganar el juego."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "gané",
        "v3": "ganado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "esperar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "⏳",
        "subtext": "esperar a alguien / esperar en la cola / esperar un momento",
        "form": "verb",
        "definitions": [
            {
                "text": "Permanecer en un lugar hasta que algo suceda.",
                "examples": [
                    "Esperó veinte minutos para que comenzara la reunión."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "esperé",
        "v3": "esperado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "morir",
        "level": "starter",
        "theme": "illnesses_symptoms_A1",
        "emoji": "⚰️",
        "subtext": "morir de / morir por / morir a causa de",
        "synonyms": [
            "extinguirse"
        ],
        "opposite": "vivir",
        "oppositeEmoji": "🏠",
        "form": "verb",
        "definitions": [
            {
                "text": "Dejar de vivir.",
                "examples": [
                    "Las plantas mueren sin agua."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "morí",
        "v3": "muerto",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "enviar",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Transmitir algo a alguien, especialmente de forma electrónica.",
                "examples": [
                    "Envía veinte correos antes del almuerzo."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "envié",
        "v3": "enviado",
        "subtext": "enviar un correo / enviar un mensaje / enviar un informe / enviar un archivo",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "quedarse",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏨",
        "subtext": "quedarse en casa / alojarse en un hotel / quedarse levantado hasta tarde / quedarse con alguien",
        "form": "verb",
        "definitions": [
            {
                "text": "Continuar estando en un lugar.",
                "examples": [
                    "Me quedo en casa los domingos.",
                    "Nos estamos quedando en un hotel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "me quedé",
        "v3": "quedado",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "caer",
        "level": "starter",
        "theme": "seasons_climate_A1",
        "emoji": "🍂",
        "subtext": "caer de",
        "synonyms": [
            "caerse",
            "enamorarse",
            "quedarse dormido"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse hacia abajo hacia el suelo.",
                "examples": [
                    "Las hojas caen en otoño.",
                    "Ten cuidado, no te caigas."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "caí",
        "v3": "caído",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "pasar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "🏔️",
        "subtext": "pasar la pelota / pasar el tiempo / pasar el azúcar",
        "synonyms": [
            "aprobar un examen"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Pasar por delante de algo o tener éxito en un examen.",
                "examples": [
                    "Paso por el parque de camino a casa.",
                    "Espero aprobar el examen."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pasé",
        "v3": "pasado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "vender",
        "level": "starter",
        "theme": "everyday_shopping_A1",
        "emoji": "🏷️",
        "subtext": "vender productos / vender en línea / vender en el mercado",
        "synonyms": [
            "éxito de ventas"
        ],
        "opposite": "comprar",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar algo a alguien por dinero.",
                "examples": [
                    "Venden fruta en el mercado."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "vendí",
        "v3": "vendido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "tirar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🚜",
        "subtext": "tirar de la puerta / tirar de algo",
        "synonyms": [
            "detenerse",
            "alejarse"
        ],
        "opposite": "empujar",
        "oppositeEmoji": "🛒",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover algo hacia ti.",
                "examples": [
                    "Tira de la puerta para abrirla."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "tiré",
        "v3": "tirado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "empujar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🛒",
        "subtext": "empujar un carrito",
        "synonyms": [
            "presionar el botón",
            "apartar",
            "salir adelante"
        ],
        "opposite": "tirar",
        "oppositeEmoji": "🚜",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover algo lejos de ti.",
                "examples": [
                    "Presiona el botón.",
                    "Empujo el carrito de la compra."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "empujé",
        "v3": "empujado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "llevar",
        "level": "starter",
        "theme": "daily_work_routines_A1",
        "emoji": "🎒",
        "subtext": "llevar una bolsa / llevar notas / llevar a cabo",
        "synonyms": [
            "continuar"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Sostener y llevar algo contigo.",
                "examples": [
                    "Llevo mi portátil y mis notas a cada reunión."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "llevé",
        "v3": "llevado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "romper",
        "level": "starter",
        "theme": "describing_things_A1",
        "emoji": "💔",
        "subtext": "romper el cristal",
        "synonyms": [
            "infringir una ley",
            "tomarse un descanso",
            "averiarse"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Separar algo en dos o más piezas.",
                "examples": [
                    "No rompas el vaso.",
                    "Se rompió la pierna."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "rompí",
        "v3": "roto",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "recibir",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "📩",
        "subtext": "recibir un correo / recibir un regalo / recibir un pago / recibir noticias",
        "form": "verb",
        "definitions": [
            {
                "text": "Obtener algo que alguien te dio o envió.",
                "examples": [
                    "Recibo mucho correo.",
                    "Recibió un regalo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "recibí",
        "v3": "recibido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "estar de acuerdo",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "subtext": "estar de acuerdo con alguien",
        "synonyms": [
            "aceptar hacer",
            "acordar sobre",
            "estoy de acuerdo"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tener la misma opinión que alguien.",
                "examples": [
                    "Estoy de acuerdo contigo.",
                    "Estamos de acuerdo con el plan."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "estuve de acuerdo",
        "v3": "estado",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "dibujar",
        "level": "starter",
        "theme": "cinema_film_A1",
        "emoji": "🎨",
        "subtext": "dibujar un cuadro / dibujar una línea",
        "synonyms": [
            "sacar una conclusión",
            "llamar la atención"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer un dibujo con un bolígrafo o lápiz.",
                "examples": [
                    "Me gusta dibujar pájaros.",
                    "¿Puedes dibujar un mapa?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "dibujé",
        "v3": "dibujado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "compartir",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "🍕",
        "subtext": "compartir una habitación / compartir información / compartir una idea / compartir con",
        "form": "verb",
        "definitions": [
            {
                "text": "Dar una parte de algo a otros.",
                "examples": [
                    "Compartamos la pizza.",
                    "Comparto habitación con mi hermano."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "compartí",
        "v3": "compartido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "sonreír",
        "level": "starter",
        "theme": "physical_appearance_A1",
        "emoji": "😊",
        "subtext": "sonreír a alguien / sonreír ampliamente",
        "synonyms": [
            "una gran sonrisa"
        ],
        "opposite": "llorar",
        "oppositeEmoji": "😢",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer una expresión feliz con la boca.",
                "examples": [
                    "Ella tiene una sonrisa hermosa.",
                    "Sonríe para la cámara."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sonreí",
        "v3": "sonreído",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "llorar",
        "level": "starter",
        "theme": "surprise_interest_A1",
        "emoji": "😢",
        "subtext": "empezar a llorar / llorar por algo",
        "synonyms": [
            "pedir socorro",
            "gritar"
        ],
        "opposite": "sonreír",
        "oppositeEmoji": "😊",
        "form": "verb",
        "definitions": [
            {
                "text": "Producir lágrimas porque estás triste o tienes dolor.",
                "examples": [
                    "El bebé está llorando.",
                    "No llores."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "lloré",
        "v3": "llorado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "bailar",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "💃",
        "subtext": "bailar con música / ir a bailar / bailar juntos / bailar lento",
        "form": "verb",
        "definitions": [
            {
                "text": "Mover tu cuerpo con la música.",
                "examples": [
                    "Me encanta bailar.",
                    "Están bailando."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "bailé",
        "v3": "bailado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "cantar",
        "level": "starter",
        "theme": "music_A1",
        "emoji": "🎤",
        "subtext": "cantar una canción / cantar a coro / cantar bien",
        "synonyms": [
            "cantante principal"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer sonidos musicales con la voz.",
                "examples": [
                    "Me gusta cantar en la ducha.",
                    "Ella canta muy bien."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "canté",
        "v3": "cantado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "saltar",
        "level": "starter",
        "theme": "playing_watching_sport_A1",
        "emoji": "🦘",
        "subtext": "saltar alto / saltar por encima / saltar dentro",
        "synonyms": [
            "dar un salto"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Impulsarte desde el suelo con las piernas.",
                "examples": [
                    "¿Puedes saltar alto?",
                    "El gato saltó a la mesa."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "salté",
        "v3": "saltado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "nadar",
        "level": "starter",
        "theme": "common_sports_A1",
        "emoji": "🏊",
        "subtext": "ir a nadar / nadar bien",
        "synonyms": [
            "cruzar nadando",
            "hacer largos"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Moverse por el agua usando los brazos y las piernas.",
                "examples": [
                    "Nado cada mañana.",
                    "¿Puedes nadar?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "nadé",
        "v3": "nadado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "estudiar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "📖",
        "subtext": "estudiar inglés / estudiar para un examen / estudiar mucho / estudiar por cuenta propia",
        "form": "verb",
        "definitions": [
            {
                "text": "Leer y practicar para adquirir conocimientos.",
                "examples": [
                    "Está estudiando para una calificación profesional."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "estudié",
        "v3": "estudiado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "enseñar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "👨‍🏫",
        "subtext": "enseñar a alguien / enseñar una materia / enseñar cómo",
        "synonyms": [
            "dar clase"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Dar instrucción en una materia.",
                "examples": [
                    "Ella enseña habilidades de comunicación a los altos directivos."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "enseñé",
        "v3": "enseñado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "viajar diariamente",
        "level": "starter",
        "theme": "public_transport_A1",
        "emoji": "🚆",
        "subtext": "",
        "synonyms": [
            "viajar al trabajo",
            "trayecto diario",
            "trayecto largo",
            "viajar en tren"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Viajar cierta distancia entre el hogar y el lugar de trabajo de forma regular.",
                "examples": [
                    "Viajo diariamente a la ciudad en tren."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "viajé diariamente",
        "v3": "viajado diariamente",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "alquilar",
        "level": "starter",
        "theme": "types_of_accommodation_A1",
        "emoji": "🏠",
        "subtext": "alquilar un piso / alquilar una propiedad / alquilar una habitación",
        "form": "verb",
        "definitions": [
            {
                "text": "Pagar dinero por usar una propiedad que pertenece a otra persona.",
                "examples": [
                    "Alquilan un apartamento de dos habitaciones cerca del centro de la ciudad."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "alquilé",
        "v3": "alquilado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "hacer ejercicio",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🏋️",
        "form": "verb",
        "definitions": [
            {
                "text": "Realizar actividad física para la salud y el fitness.",
                "examples": [
                    "Hace ejercicio cuatro veces por semana en el gimnasio."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hice ejercicio",
        "v3": "hecho",
        "subtext": "hacer ejercicio regularmente / hacer ejercicio en el gimnasio / hacer ejercicio al aire libre",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "costar",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "💰",
        "form": "verb",
        "definitions": [
            {
                "text": "Tener un precio de.",
                "examples": [
                    "El apartamento cuesta mil doscientos euros al mes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "costó",
        "v3": "costado",
        "subtext": "costar mucho / costar dinero / costar demasiado / costar menos",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "invitar",
        "level": "starter",
        "theme": "family_life_A1",
        "emoji": "✉️",
        "form": "verb",
        "definitions": [
            {
                "text": "Pedirle a alguien que venga a un evento o lugar.",
                "examples": [
                    "Invitaron a todos sus colegas a la fiesta."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invité",
        "v3": "invitado",
        "subtext": "invitar a alguien / invitar a cenar / invitar a una fiesta",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "levantarse",
        "definitions": [
            {
                "text": "Levantarse de la cama después de despertar.",
                "examples": [
                    "Se levanta a las siete y hace café inmediatamente."
                ]
            }
        ],
        "subtext": "levantarse temprano / levantarse tarde / levantarse rápido",
        "classification": "irregular",
        "aspect": "action",
        "v2": "me levanté",
        "v3": "levantado",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "desayunar",
        "definitions": [
            {
                "text": "Comer la comida de la mañana.",
                "examples": [
                    "Ella siempre desayuna antes de salir de casa."
                ]
            }
        ],
        "subtext": "desayunar en casa / tomar un desayuno rápido",
        "synonyms": [
            "saltarse el desayuno"
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "desayuné",
        "v3": "desayunado",
        "theme": "daily_work_routines_A1",
        "emoji": "🍳",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "volver",
        "definitions": [
            {
                "text": "Regresar a un lugar.",
                "examples": [
                    "Vuelve del almuerzo a las dos. Vuelve a casa cansado."
                ]
            }
        ],
        "subtext": "volver a casa / volver tarde / volver de un viaje",
        "classification": "irregular",
        "aspect": "action",
        "v2": "volví",
        "v3": "vuelto",
        "theme": "daily_work_routines_A1",
        "emoji": "🔙",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "acostarse",
        "definitions": [
            {
                "text": "Meterse en la cama para dormir.",
                "examples": [
                    "Se acuestan a las once todas las noches."
                ]
            }
        ],
        "subtext": "acostarse temprano / acostarse tarde / acostarse cansado",
        "classification": "irregular",
        "aspect": "action",
        "v2": "me acosté",
        "v3": "acostado",
        "theme": "daily_work_routines_A1",
        "emoji": "🛌",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "revisar",
        "definitions": [
            {
                "text": "Examinar o verificar algo.",
                "examples": [
                    "Reviso mis correos a primera hora cada mañana."
                ]
            }
        ],
        "subtext": "revisar los correos / revisar los mensajes / revisar un documento",
        "synonyms": [
            "mirar la hora"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "revisé",
        "v3": "revisado",
        "theme": "workplace_basics_A1",
        "emoji": "✅",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "responder",
        "definitions": [
            {
                "text": "Responder a un mensaje o pregunta.",
                "examples": [
                    "Él siempre responde a los correos el mismo día."
                ]
            }
        ],
        "subtext": "responder a un correo / responder rápido / responder a un mensaje",
        "classification": "regular",
        "aspect": "action",
        "v2": "respondí",
        "v3": "respondido",
        "theme": "workplace_basics_A1",
        "emoji": "↩️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "presentar",
        "definitions": [
            {
                "text": "Mostrar o explicar algo a un grupo.",
                "examples": [
                    "Ella presenta los resultados cada viernes por la tarde."
                ]
            }
        ],
        "subtext": "presentar un informe / presentar ideas / presentar a un cliente",
        "classification": "regular",
        "aspect": "action",
        "v2": "presenté",
        "v3": "presentado",
        "theme": "workplace_basics_A1",
        "emoji": "📊",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "asistir",
        "definitions": [
            {
                "text": "Ir a un evento o reunión.",
                "examples": [
                    "Asisto a una reunión de gestión todos los lunes."
                ]
            }
        ],
        "subtext": "asistir a una reunión / asistir a un curso / asistir a un evento",
        "classification": "regular",
        "aspect": "action",
        "v2": "asistí",
        "v3": "asistido",
        "theme": "workplace_basics_A1",
        "emoji": "📅",
        "level": "starter",
        "form": "verb",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "gestionar",
        "definitions": [
            {
                "text": "Estar a cargo de personas o de una situación.",
                "examples": [
                    "Ella gestiona un equipo de ocho personas."
                ]
            }
        ],
        "subtext": "gestionar un equipo / gestionar un proyecto / gestionar el tiempo / gestionar el estrés",
        "classification": "regular",
        "aspect": "action",
        "v2": "gestioné",
        "v3": "gestionado",
        "theme": "workplace_basics_A1",
        "emoji": "👤",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "cobrar",
        "definitions": [
            {
                "text": "Pedir una cantidad de dinero por un servicio.",
                "examples": [
                    "El mecánico cobró trescientos euros."
                ]
            }
        ],
        "subtext": "cobrar una tarifa / cobrar por un servicio / cobrar extra",
        "classification": "regular",
        "aspect": "action",
        "v2": "cobré",
        "v3": "cobrado",
        "theme": "money_payment_A1",
        "emoji": "💳",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "permitirse",
        "definitions": [
            {
                "text": "Tener suficiente dinero para algo.",
                "examples": [
                    "No pueden permitirse comprar un apartamento en el centro de la ciudad."
                ]
            }
        ],
        "subtext": "permitirse una casa / permitirse viajar / permitirse algo",
        "classification": "regular",
        "aspect": "stative",
        "v2": "me permití",
        "v3": "permitido",
        "theme": "money_payment_A1",
        "emoji": "🏦",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "deber",
        "definitions": [
            {
                "text": "Estar obligado a pagar dinero a alguien.",
                "examples": [
                    "Le debe al banco cincuenta mil euros."
                ]
            }
        ],
        "subtext": "deber dinero / deber mucho / no deber nada",
        "synonyms": [
            "deberle a alguien"
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "debí",
        "v3": "debido",
        "theme": "money_payment_A1",
        "emoji": "💸",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "ganar",
        "definitions": [
            {
                "text": "Recibir dinero por el trabajo realizado.",
                "examples": [
                    "Ella gana un buen sueldo como gerente de proyectos."
                ]
            }
        ],
        "subtext": "ganar un sueldo / ganar dinero / ganar más / ganar lo suficiente",
        "classification": "regular",
        "aspect": "action",
        "v2": "gané",
        "v3": "ganado",
        "theme": "money_payment_A1",
        "emoji": "💶",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "visitar",
        "definitions": [
            {
                "text": "Ir a ver a una persona o lugar.",
                "examples": [
                    "Visita a sus padres cada segundo fin de semana."
                ]
            }
        ],
        "subtext": "visitar a la familia / visitar a un amigo / visitar una ciudad / visitar regularmente",
        "classification": "regular",
        "aspect": "action",
        "v2": "visité",
        "v3": "visitado",
        "theme": "family_life_A1",
        "emoji": "🏘️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "celebrar",
        "definitions": [
            {
                "text": "Hacer algo agradable para una ocasión especial.",
                "examples": [
                    "Celebran cada aniversario de trabajo juntos."
                ]
            }
        ],
        "subtext": "celebrar un cumpleaños / celebrar el éxito / celebrar juntos",
        "classification": "regular",
        "aspect": "action",
        "v2": "celebré",
        "v3": "celebrado",
        "theme": "leisure_activities_A1",
        "emoji": "🎉",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "recomendar",
        "definitions": [
            {
                "text": "Sugerir algo como bueno o adecuado.",
                "examples": [
                    "¿Puedes recomendar un buen restaurante cerca de la oficina?"
                ]
            }
        ],
        "subtext": "recomendar un lugar / recomendar a alguien / recomendar una película",
        "classification": "regular",
        "aspect": "action",
        "v2": "recomendé",
        "v3": "recomendado",
        "theme": "giving_opinions_A1",
        "emoji": "👍",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "doler",
        "definitions": [
            {
                "text": "Causar dolor; o sentir dolor.",
                "examples": [
                    "Me duele la espalda después de estar sentado todo el día."
                ]
            }
        ],
        "subtext": "hacer daño a alguien",
        "synonyms": [
            "dolor de espalda",
            "hacerse daño",
            "duele"
        ],
        "classification": "irregular",
        "aspect": "both",
        "v2": "dolió",
        "v3": "dolido",
        "theme": "illnesses_symptoms_A1",
        "emoji": "🤕",
        "level": "starter",
        "form": "verb",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "descansar",
        "definitions": [
            {
                "text": "Dejar de trabajar y relajarse para recuperar energía.",
                "examples": [
                    "Él descansa una hora después del almuerzo cada día."
                ]
            }
        ],
        "subtext": "descansar en casa / descansar después del trabajo / descansar un poco",
        "synonyms": [
            "necesitar descanso"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "descansé",
        "v3": "descansado",
        "theme": "daily_work_routines_A1",
        "emoji": "🛋️",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "recuperarse",
        "definitions": [
            {
                "text": "Volver a tener buena salud después de una enfermedad o lesión.",
                "examples": [
                    "Se está recuperando de una lesión en la espalda."
                ]
            }
        ],
        "subtext": "recuperarse de una enfermedad / recuperarse rápido / recuperarse por completo",
        "classification": "regular",
        "aspect": "action",
        "v2": "me recuperé",
        "v3": "recuperado",
        "theme": "medical_appointments_A1",
        "emoji": "🩹",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "reservar",
        "definitions": [
            {
                "text": "Reservar un lugar, boleto o servicio con anticipación.",
                "examples": [
                    "Siempre reservo hoteles en línea."
                ]
            }
        ],
        "subtext": "reservar un hotel / reservar un vuelo / reservar una mesa / reservar con antelación",
        "classification": "regular",
        "aspect": "action",
        "v2": "reservé",
        "v3": "reservado",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "📖",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "hacer la maleta",
        "definitions": [
            {
                "text": "Poner artículos en una bolsa o maleta para un viaje.",
                "examples": [
                    "Él hace su maleta la noche anterior a un viaje."
                ]
            }
        ],
        "subtext": "hacer la maleta",
        "synonyms": [
            "hacer la bolsa",
            "viajar ligero"
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hice la maleta",
        "v3": "hecho",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "🎒",
        "level": "starter",
        "form": "verb",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "cancelar",
        "definitions": [
            {
                "text": "Decidir que algo planeado no sucederá.",
                "examples": [
                    "Ella tuvo que cancelar su vuelo debido a una enfermedad."
                ]
            }
        ],
        "subtext": "cancelar un vuelo / cancelar una reserva / cancelar una reunión",
        "classification": "regular",
        "aspect": "action",
        "v2": "cancelé",
        "v3": "cancelado",
        "theme": "travel_vocabulary_basics_A1",
        "emoji": "❌",
        "level": "starter",
        "form": "verb",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "perder",
        "definitions": [
            {
                "text": "No alcanzar una conexión de transporte; o sentirse triste por la ausencia.",
                "examples": [
                    "Perdió su tren y tuvo que esperar una hora."
                ]
            }
        ],
        "subtext": "perder un tren / perder un vuelo / echar de menos a alguien",
        "synonyms": [
            "faltar al trabajo"
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "perdí",
        "v3": "perdido",
        "theme": "public_transport_A1",
        "emoji": "🏃‍♂️",
        "level": "starter",
        "form": "verb",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "pedir",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📦",
        "subtext": "pedir comida / pedir una bebida / pedir en línea / pedir suministros",
        "form": "verb",
        "definitions": [
            {
                "text": "Solicitar algo formalmente, especialmente comida o bienes.",
                "examples": [
                    "Siempre pido el almuerzo en el mismo lugar cerca de la oficina."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pedí",
        "v3": "pedido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "explicar",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "💡",
        "subtext": "explicar un proceso / explicar claramente / explicar a alguien",
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer algo claro dando detalles.",
                "examples": [
                    "Él siempre explica el proceso a los nuevos miembros del equipo."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "expliqué",
        "v3": "explicado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "agradecer",
        "level": "starter",
        "theme": "greetings_social_phrases_A1",
        "emoji": "🙏",
        "subtext": "agradecer a alguien",
        "synonyms": [
            "gracias por",
            "muchas gracias"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Expresar gratitud a alguien.",
                "examples": [
                    "Agradeció al equipo por su arduo trabajo en el proyecto."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "agradecí",
        "v3": "agradecido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "presentar",
        "level": "starter",
        "theme": "name_greeting_A1",
        "emoji": "🤝",
        "subtext": "presentar a alguien / presentar un tema",
        "synonyms": [
            "presentarse"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Presentar a alguien a otra persona.",
                "examples": [
                    "Se presentó al comienzo de la reunión."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "presenté",
        "v3": "presentado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "relajarse",
        "level": "starter",
        "theme": "leisure_activities_A1",
        "emoji": "🧘",
        "subtext": "relajarse en casa / relajarse después del trabajo / relajarse en vacaciones",
        "form": "verb",
        "definitions": [
            {
                "text": "Dejar de trabajar y descansar; estar menos tenso.",
                "examples": [
                    "Me relajo el fin de semana y nunca reviso los correos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "me relajé",
        "v3": "relajado",
        "group": "regular",
        "auxiliary": "haber"
    },
    {
        "word": "reparar",
        "level": "starter",
        "theme": "household_tasks_A1",
        "emoji": "🛠️",
        "subtext": "reparar algo / mandar reparar",
        "synonyms": [
            "costes de reparación"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Arreglar algo que está roto.",
                "examples": [
                    "El dueño es lento para reparar cosas en el apartamento."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "reparé",
        "v3": "reparado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "pasar",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "❔",
        "subtext": "suele pasar / pasar de nuevo",
        "synonyms": [
            "qué pasó",
            "pasarle a alguien"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tener lugar; ocurrir.",
                "examples": [
                    "¿Qué pasó en la reunión? Algo salió mal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "pasó",
        "v3": "pasado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "parecer",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "🎭",
        "subtext": "parecer bien / parecer preocupado / parecer feliz",
        "synonyms": [
            "parecerse a"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aparecer como algo; dar una impresión.",
                "examples": [
                    "Parece muy segura de sí misma en las reuniones con clientes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "parecí",
        "v3": "parecido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "significar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "❔",
        "subtext": "significar algo / no era mi intención",
        "synonyms": [
            "qué significa",
            "querer decir"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Tener un significado particular; tener la intención.",
                "examples": [
                    "¿Qué significa esta cláusula en el contrato?"
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "stative",
        "v2": "significó",
        "v3": "significado",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "seguir",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "👣",
        "subtext": "seguir instrucciones / seguir a alguien / seguir las noticias",
        "synonyms": [
            "hacer un seguimiento"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ir después; obedecer reglas o instrucciones.",
                "examples": [
                    "Por favor sigue las instrucciones cuidadosamente. Él sigue las noticias."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "seguí",
        "v3": "seguido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "continuar",
        "level": "starter",
        "theme": "learning_studying_A1",
        "emoji": "⏩",
        "subtext": "continuar trabajando / continuar haciendo / continuar con / continuar una tarea",
        "form": "verb",
        "definitions": [
            {
                "text": "Seguir haciendo algo sin parar.",
                "examples": [
                    "Continuó trabajando después de las seis a pesar de sentirse mal."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "continué",
        "v3": "continuado",
        "group": "ar",
        "auxiliary": "haber"
    },
    {
        "word": "crecer",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📈",
        "subtext": "hacer crecer un negocio / crecer rápido / crecer un...",
        "synonyms": [
            "convertirse en"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Aumentar de tamaño o cantidad; desarrollarse.",
                "examples": [
                    "La empresa creció un veinte por ciento el año pasado."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "crecí",
        "v3": "crecido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "incluir",
        "level": "starter",
        "theme": "money_payment_A1",
        "emoji": "➕",
        "subtext": "incluir algo / incluir en",
        "synonyms": [
            "no incluido",
            "el precio incluye"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Hacer que algo sea parte de un todo.",
                "examples": [
                    "El precio incluye el desayuno y la cena."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "incluí",
        "v3": "incluido",
        "group": "ir",
        "auxiliary": "haber"
    },
    {
        "word": "hacerse",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "✨",
        "subtext": "llegar a ser gerente / hacerse popular / hacerse importante",
        "synonyms": [
            "aclararse"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Empezar a ser algo.",
                "examples": [
                    "Se convirtió en gerente después de solo dos años en el puesto."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "me hice",
        "v3": "hecho",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "pertenecer",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "📎",
        "subtext": "pertenecer a alguien / pertenecer a",
        "synonyms": [
            "sentir que encajas"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Ser propiedad de alguien; ser un miembro.",
                "examples": [
                    "Esa cuenta pertenece al departamento de finanzas."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "pertenecí",
        "v3": "pertenecido",
        "group": "er",
        "auxiliary": "haber"
    },
    {
        "word": "elegir",
        "level": "starter",
        "theme": "giving_opinions_A1",
        "emoji": "👉",
        "subtext": "elegir entre / elegir hacer / elegir con cuidado / elegir una carrera",
        "form": "verb",
        "definitions": [
            {
                "text": "Seleccionar entre opciones.",
                "examples": [
                    "Eligió trabajar a tiempo parcial para pasar más tiempo con la familia."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "elegí",
        "v3": "elegido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "construir",
        "level": "starter",
        "theme": "workplace_basics_A1",
        "emoji": "🏗️",
        "subtext": "construir una carrera",
        "synonyms": [
            "formar un equipo",
            "ganar experiencia",
            "generar confianza"
        ],
        "form": "verb",
        "definitions": [
            {
                "text": "Construir algo; desarrollar algo con el tiempo.",
                "examples": [
                    "Construyó una sólida reputación durante diez años."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "construí",
        "v3": "construido",
        "group": "irregular",
        "auxiliary": "haber"
    },
    {
        "word": "producir",
        "level": "starter",
        "theme": "work_employment_A1",
        "form": "verb",
        "transcription": "pɾo.ðu.ˈθiɾ",
        "group": "ir",
        "classification": "irregular",
        "v3": "producido",
        "auxiliary": "haber",
        "subtext": "producir energía",
        "definitions": [
            {
                "text": "Crear o fabricar algo.",
                "examples": [
                    "La empresa produce muebles."
                ]
            }
        ]
    },
    {
        "word": "proyectar",
        "level": "starter",
        "theme": "work_employment_A1",
        "form": "verb",
        "transcription": "pɾo.jek.ˈtaɾ",
        "group": "ar",
        "classification": "regular",
        "v3": "proyectado",
        "auxiliary": "haber",
        "subtext": "proyectar un edificio",
        "definitions": [
            {
                "text": "Idear o planear un proyecto.",
                "examples": [
                    "Proyectan construir una nueva escuela."
                ]
            }
        ]
    }
]
    const lang = "es";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();