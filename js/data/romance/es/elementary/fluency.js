(function() {
    const data = [
    {
        "id": "es_elementary_travel_001",
        "word": "Una vacación que recuerdas",
        "lang": "es",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": "tourism",
        "form": "phrase",
        "definitions": [
            {
                "text": "Una vacación que recuerdas",
                "examples": []
            }
        ],
        "h": [
            "¿Adónde fuiste?",
            "¿Con quién fuiste?",
            "¿Qué hiciste allí?",
            "¿Cómo era el clima?",
            "¿Cuál fue el mejor momento?"
        ]
    },
    {
        "id": "es_elementary_food_drink_001",
        "word": "Tu restaurante o café favorito",
        "lang": "es",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Tu restaurante o café favorito",
                "examples": []
            }
        ],
        "h": [
            "¿Dónde está?",
            "¿Qué comida sirven?",
            "¿Por qué te gusta?",
            "¿Con quién vas?",
            "¿Cuándo fue la última vez que fuiste?"
        ]
    },
    {
        "id": "es_elementary_travel_002",
        "word": "Cómo vas al trabajo o a la escuela",
        "lang": "es",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Cómo vas al trabajo o a la escuela",
                "examples": []
            }
        ],
        "h": [
            "¿Cómo viajas — autobús, coche, bici?",
            "¿Cuánto tiempo tardas?",
            "¿Disfrutas del viaje?",
            "¿Es caro?",
            "¿Qué haces por el camino?"
        ]
    },
    {
        "id": "es_elementary_social_001",
        "word": "Lo que haces para relajarte",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "going_out",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lo que haces para relajarte",
                "examples": []
            }
        ],
        "h": [
            "¿Qué te ayuda a relajarte?",
            "¿Prefieres estar solo o con gente?",
            "¿Con qué frecuencia te relajas de verdad?",
            "¿Tienes un lugar favorito para relajarte?",
            "¿Es fácil relajarse o te resulta difícil?"
        ]
    },
    {
        "id": "es_elementary_social_002",
        "word": "Una película que viste hace poco",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "going_out",
        "form": "phrase",
        "definitions": [
            {
                "text": "Una película que viste hace poco",
                "examples": []
            }
        ],
        "h": [
            "¿Cómo se llamaba la película?",
            "¿De qué trataba?",
            "¿Te gustó?",
            "¿Quién salía en ella?",
            "¿La recomendarías?"
        ]
    },
    {
        "id": "es_elementary_social_003",
        "word": "Tu fin de semana ideal",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "going_out",
        "form": "phrase",
        "definitions": [
            {
                "text": "Tu fin de semana ideal",
                "examples": []
            }
        ],
        "h": [
            "¿Qué harías el viernes por la noche?",
            "¿Saldrías o te quedarías en casa?",
            "¿Viajarías a algún lugar?",
            "¿Con quién pasarías el tiempo?",
            "¿Qué comerías?"
        ]
    },
    {
        "id": "es_elementary_people_001",
        "word": "Una persona a la que admiras",
        "lang": "es",
        "level": "elementary",
        "theme": "people",
        "sub_theme": "physical_desc",
        "form": "phrase",
        "definitions": [
            {
                "text": "Una persona a la que admiras",
                "examples": []
            }
        ],
        "h": [
            "¿Quién es esta persona?",
            "¿A qué se dedica?",
            "¿Por qué la admiras?",
            "¿La has conocido en persona?",
            "¿Qué puedes aprender de ella?"
        ]
    },
    {
        "id": "es_elementary_travel_003",
        "word": "El destino de vacaciones de tus sueños",
        "lang": "es",
        "level": "elementary",
        "theme": "travel",
        "sub_theme": "tourism",
        "form": "phrase",
        "definitions": [
            {
                "text": "El destino de vacaciones de tus sueños",
                "examples": []
            }
        ],
        "h": [
            "¿Adónde irías?",
            "¿Por qué este lugar?",
            "¿Con quién irías?",
            "¿Qué harías allí?",
            "¿Cuánto tiempo te quedarías?"
        ]
    },
    {
        "id": "es_elementary_technology_001",
        "word": "Tu relación con tu teléfono",
        "lang": "es",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": "internet",
        "form": "phrase",
        "definitions": [
            {
                "text": "Tu relación con tu teléfono",
                "examples": []
            }
        ],
        "h": [
            "¿Cuántas horas al día usas el teléfono?",
            "¿Para qué lo usas más?",
            "¿Podrías vivir sin él una semana?",
            "¿Te ayuda o te distrae?",
            "¿Lo miras nada más levantarte por la mañana?"
        ]
    },
    {
        "id": "es_elementary_emotions_001",
        "word": "Algo divertido que te pasó",
        "lang": "es",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": "complex",
        "form": "phrase",
        "definitions": [
            {
                "text": "Algo divertido que te pasó",
                "examples": []
            }
        ],
        "h": [
            "¿Cuándo pasó esto?",
            "¿Dónde estabas?",
            "¿Con quién estabas?",
            "¿Qué pasó exactamente?",
            "¿Todavía te ríes de ello ahora?"
        ]
    },
    {
        "id": "es_elementary_social_004",
        "word": "Tus aficiones",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "going_out",
        "form": "phrase",
        "definitions": [
            {
                "text": "Tus aficiones",
                "examples": []
            }
        ],
        "h": [
            "¿Qué haces en tu tiempo libre?",
            "¿Cuándo empezaste esta afición?",
            "¿La haces solo o con otros?",
            "¿Es cara?",
            "¿Qué es lo que te gusta de ella?"
        ]
    },
    {
        "id": "es_elementary_nature_001",
        "word": "El clima donde vives",
        "lang": "es",
        "level": "elementary",
        "theme": "nature",
        "sub_theme": "weather",
        "form": "phrase",
        "definitions": [
            {
                "text": "El clima donde vives",
                "examples": []
            }
        ],
        "h": [
            "¿Cómo es el clima normalmente?",
            "¿Cuál es tu tipo de clima favorito?",
            "¿Afecta el clima a tu estado de ánimo?",
            "¿Cuál es el peor clima que recuerdas?",
            "¿Qué haces los días de lluvia?"
        ]
    },
    {
        "id": "es_elementary_social_005",
        "word": "Un cumpleaños que recuerdas",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "celebrations",
        "form": "phrase",
        "definitions": [
            {
                "text": "Un cumpleaños que recuerdas",
                "examples": []
            }
        ],
        "h": [
            "¿De quién era el cumpleaños?",
            "¿Dónde fue la celebración?",
            "¿Qué hicisteis?",
            "¿Hubo alguna sorpresa?",
            "¿Qué lo hizo especial?"
        ]
    },
    {
        "id": "es_elementary_places_001",
        "word": "Cosas que te gustan de donde vives",
        "lang": "es",
        "level": "elementary",
        "theme": "places",
        "sub_theme": "city",
        "form": "phrase",
        "definitions": [
            {
                "text": "Cosas que te gustan de donde vives",
                "examples": []
            }
        ],
        "h": [
            "¿Qué es lo que más te gusta de tu pueblo o ciudad?",
            "¿Es un buen lugar para las familias?",
            "¿Qué hay para hacer allí?",
            "¿Qué cambiarías?",
            "¿Se lo recomendarías a un amigo?"
        ]
    },
    {
        "id": "es_elementary_work_001",
        "word": "Un domingo típico",
        "lang": "es",
        "level": "elementary",
        "theme": "work",
        "sub_theme": "office",
        "form": "phrase",
        "definitions": [
            {
                "text": "Un domingo típico",
                "examples": []
            }
        ],
        "h": [
            "¿A qué hora te despiertas el domingo?",
            "¿Tienes una rutina?",
            "¿Cocinas una comida grande?",
            "¿Descansas o estás ocupado?",
            "¿Es el domingo tu día favorito?"
        ]
    },
    {
        "id": "es_elementary_social_006",
        "word": "Comida de tu país",
        "lang": "es",
        "level": "elementary",
        "theme": "social",
        "sub_theme": "celebrations",
        "form": "phrase",
        "definitions": [
            {
                "text": "Comida de tu país",
                "examples": []
            }
        ],
        "h": [
            "¿Cuál es un plato tradicional?",
            "¿Lo cocinas en casa?",
            "¿Cuándo lo come la gente?",
            "¿Es difícil de preparar?",
            "¿Se lo recomendarías a un extranjero?"
        ]
    },
    {
        "id": "es_elementary_shopping_001",
        "word": "Algo que compraste hace poco",
        "lang": "es",
        "level": "elementary",
        "theme": "shopping",
        "sub_theme": "money",
        "form": "phrase",
        "definitions": [
            {
                "text": "Algo que compraste hace poco",
                "examples": []
            }
        ],
        "h": [
            "¿Qué compraste?",
            "¿Dónde lo compraste?",
            "¿Fue caro?",
            "¿Lo necesitabas o simplemente lo querías?",
            "¿Estás contento con la compra?"
        ]
    },
    {
        "id": "es_elementary_technology_002",
        "word": "Tu aplicación favorita",
        "lang": "es",
        "level": "elementary",
        "theme": "technology",
        "sub_theme": "internet",
        "form": "phrase",
        "definitions": [
            {
                "text": "Tu aplicación favorita",
                "examples": []
            }
        ],
        "h": [
            "¿Qué aplicación usas más?",
            "¿Para qué la usas?",
            "¿Cuándo empezaste a usarla?",
            "¿La recomendarías?",
            "¿Podrías vivir sin ella?"
        ]
    },
    {
        "id": "es_elementary_emotions_002",
        "word": "Un recuerdo de la infancia",
        "lang": "es",
        "level": "elementary",
        "theme": "emotions",
        "sub_theme": "complex",
        "form": "phrase",
        "definitions": [
            {
                "text": "Un recuerdo de la infancia",
                "examples": []
            }
        ],
        "h": [
            "¿Qué edad tenías?",
            "¿Dónde estabas?",
            "¿Con quién estabas?",
            "¿Qué pasó?",
            "¿Por qué lo recuerdas?"
        ]
    },
    {
        "id": "es_elementary_food_drink_002",
        "word": "Lo que comiste ayer",
        "lang": "es",
        "level": "elementary",
        "theme": "food_drink",
        "sub_theme": "cooking",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lo que comiste ayer",
                "examples": []
            }
        ],
        "h": [
            "¿Qué desayunaste?",
            "¿Qué almorzaste?",
            "¿Cocinaste o comiste fuera?",
            "¿Fue un día típico de comidas?",
            "¿Qué fue lo mejor que comiste?"
        ]
    }
];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();