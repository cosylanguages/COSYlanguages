(function() {
    const lang = "es";
    const data = [
    {
        "t": "Tu familia",
        "h": [
            "¿Cuántas personas hay en tu familia?",
            "¿Tienes hermanos o hermanas?",
            "¿Dónde vive tu familia?",
            "¿Con quién vives?",
            "¿Qué hacéis juntos en familia?"
        ],
        "level": "starter",
        "theme": "people",
        "lang": "es",
        "sub_theme": "family",
        "word": "Tu familia",
        "definitions": [
            {
                "text": "Tu familia",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_people_001"
    },
    {
        "t": "Tu casa",
        "h": [
            "¿Cuántas habitaciones tiene tu casa?",
            "¿Cuál es tu habitación favorita?",
            "¿Tu casa es grande o pequeña?",
            "¿Qué puedes ver desde tu ventana?",
            "¿Te gusta tu casa?"
        ],
        "level": "starter",
        "theme": "furniture",
        "lang": "es",
        "sub_theme": "rooms",
        "word": "Tu casa",
        "definitions": [
            {
                "text": "Tu casa",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_005"
    },
    {
        "t": "Tu comida favorita",
        "h": [
            "¿Cuál es tu comida favorita?",
            "¿Te gusta la comida dulce o salada?",
            "¿Cocinas en casa?",
            "¿Qué comida no te gusta?",
            "¿Qué desayunas?"
        ],
        "level": "starter",
        "theme": "food_drink",
        "lang": "es",
        "sub_theme": "meals",
        "word": "Tu comida favorita",
        "definitions": [
            {
                "text": "Tu comida favorita",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_009"
    },
    {
        "t": "Tu rutina matutina",
        "h": [
            "¿A qué hora te despiertas?",
            "¿Qué es lo primero que haces?",
            "¿Desayunas?",
            "¿Cómo vas al trabajo o a la escuela?",
            "¿Tu mañana es tranquila o ajetreada?"
        ],
        "level": "starter",
        "theme": "work",
        "lang": "es",
        "sub_theme": "office",
        "word": "Tu rutina matutina",
        "definitions": [
            {
                "text": "Tu rutina matutina",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_work_003"
    },
    {
        "t": "Tu mascota o una mascota que quieras",
        "h": [
            "¿Tienes mascota?",
            "¿Qué animal te gusta?",
            "¿Cuál es un buen nombre para una mascota?",
            "¿Eres de perros o de gatos?",
            "¿Es fácil tener una mascota?"
        ],
        "level": "starter",
        "theme": "animals",
        "lang": "es",
        "sub_theme": "pets",
        "word": "Tu mascota o una mascota que quieras",
        "definitions": [
            {
                "text": "Tu mascota o una mascota que quieras",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_animals_001"
    },
    {
        "t": "Un deporte que te guste",
        "h": [
            "¿Qué deporte te gusta?",
            "¿Juegas o miras?",
            "¿Cuándo practicas este deporte?",
            "¿Es un deporte de equipo o individual?",
            "¿Es el deporte importante para ti?"
        ],
        "level": "starter",
        "theme": "social",
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Un deporte que te guste",
        "definitions": [
            {
                "text": "Un deporte que te guste",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_009"
    },
    {
        "t": "Qué haces los fines de semana",
        "h": [
            "¿Qué sueles hacer el sábado?",
            "¿Sales o te quedas en casa?",
            "¿Ves a tus amigos?",
            "¿Qué te gusta hacer para relajarte?",
            "¿Tu fin de semana es ajetreado o tranquilo?"
        ],
        "level": "starter",
        "theme": "social",
        "lang": "es",
        "sub_theme": "going_out",
        "word": "Qué haces los fines de semana",
        "definitions": [
            {
                "text": "Qué haces los fines de semana",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_social_010"
    },
    {
        "t": "Tu estación favorita",
        "h": [
            "¿Cuál es tu estación favorita?",
            "¿Cómo es el clima?",
            "¿Qué hace la gente en esta estación?",
            "¿Qué te pones?",
            "¿Por qué te gusta esta estación?"
        ],
        "level": "starter",
        "theme": "nature",
        "lang": "es",
        "sub_theme": "seasons",
        "word": "Tu estación favorita",
        "definitions": [
            {
                "text": "Tu estación favorita",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_nature_005"
    },
    {
        "t": "Tu mejor amigo",
        "h": [
            "¿Cómo se llama tu mejor amigo?",
            "¿Dónde os conocisteis?",
            "¿Qué hacéis juntos?",
            "¿Cómo son físicamente?",
            "¿Por qué es tu mejor amigo?"
        ],
        "level": "starter",
        "theme": "people",
        "lang": "es",
        "sub_theme": "family",
        "word": "Tu mejor amigo",
        "definitions": [
            {
                "text": "Tu mejor amigo",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_people_002"
    },
    {
        "t": "Tu trabajo o escuela",
        "h": [
            "¿Qué haces — trabajar o estudiar?",
            "¿Qué te gusta de ello?",
            "¿A qué hora empiezas?",
            "¿Con quién trabajas o estudias?",
            "¿Es fácil o difícil?"
        ],
        "level": "starter",
        "theme": "jobs",
        "lang": "es",
        "sub_theme": "professions",
        "word": "Tu trabajo o escuela",
        "definitions": [
            {
                "text": "Tu trabajo o escuela",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_jobs_001"
    },
    {
        "t": "Cosas que te gustan y que no",
        "h": [
            "¿Qué es una cosa que te gusta mucho?",
            "¿Qué es una cosa que no te gusta?",
            "¿Te gusta el clima frío?",
            "¿Te gusta cocinar?",
            "¿Te gusta madrugar?"
        ],
        "level": "starter",
        "theme": "emotions",
        "lang": "es",
        "sub_theme": "positive",
        "word": "Cosas que te gustan y que no",
        "definitions": [
            {
                "text": "Cosas que te gustan y que no",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_emotions_002"
    },
    {
        "t": "Tu color favorito y por qué",
        "h": [
            "¿Cuál es tu color favorito?",
            "¿Dónde ves este color?",
            "¿Llevas este color?",
            "¿Está este color en tu casa?",
            "¿A tus amigos también les gusta este color?"
        ],
        "level": "starter",
        "theme": "art_culture",
        "lang": "es",
        "sub_theme": "basic",
        "word": "Tu color favorito y por qué",
        "definitions": [
            {
                "text": "Tu color favorito y por qué",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_art_culture_001"
    },
    {
        "t": "Números en tu vida",
        "h": [
            "¿Cuál es tu edad?",
            "¿Cuál es tu número de la suerte?",
            "¿Cuántas personas viven en tu casa?",
            "¿A qué hora te despiertas?",
            "¿Cuántos idiomas hablas?"
        ],
        "level": "starter",
        "theme": "maths",
        "lang": "es",
        "sub_theme": "cardinal",
        "word": "Números en tu vida",
        "definitions": [
            {
                "text": "Números en tu vida",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_maths_001"
    },
    {
        "t": "Tu bebida favorita",
        "h": [
            "¿Qué bebes por la mañana?",
            "¿Prefieres té o café?",
            "¿Bebes mucha agua?",
            "¿Cuál es una bebida especial en tu país?",
            "¿Qué bebes cuando estás feliz?"
        ],
        "level": "starter",
        "theme": "food_drink",
        "lang": "es",
        "sub_theme": "drinks",
        "word": "Tu bebida favorita",
        "definitions": [
            {
                "text": "Tu bebida favorita",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_food_drink_010"
    },
    {
        "t": "Tu país",
        "h": [
            "¿Cuál es tu país?",
            "¿Cuál es la capital?",
            "¿Cómo es el clima?",
            "¿Qué comida es famosa allí?",
            "¿Qué te gusta de tu país?"
        ],
        "level": "starter",
        "theme": "places",
        "lang": "es",
        "sub_theme": "geography",
        "word": "Tu país",
        "definitions": [
            {
                "text": "Tu país",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_places_001"
    },
    {
        "t": "Cosas en tu habitación",
        "h": [
            "¿Qué muebles hay en tu habitación?",
            "¿De qué color es tu habitación?",
            "¿Es grande o pequeña?",
            "¿Qué hay en tu escritorio o mesa?",
            "¿Te gusta tu habitación?"
        ],
        "level": "starter",
        "theme": "furniture",
        "lang": "es",
        "sub_theme": "household_items",
        "word": "Cosas en tu habitación",
        "definitions": [
            {
                "text": "Cosas en tu habitación",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_006"
    },
    {
        "t": "Tu día típico",
        "h": [
            "¿A qué hora empiezas el día?",
            "¿Qué haces por la mañana?",
            "¿Qué almuerzas?",
            "¿Qué haces por la tarde?",
            "¿A qué hora te vas a la cama?"
        ],
        "level": "starter",
        "theme": "work",
        "lang": "es",
        "sub_theme": "office",
        "word": "Tu día típico",
        "definitions": [
            {
                "text": "Tu día típico",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_work_004"
    },
    {
        "t": "Cosas que puedes ver desde tu ventana",
        "h": [
            "¿Qué hay fuera de tu ventana?",
            "¿Puedes ver árboles o edificios?",
            "¿Qué oyes?",
            "¿Es una vista tranquila o concurrida?",
            "¿Te gusta esta vista?"
        ],
        "level": "starter",
        "theme": "furniture",
        "lang": "es",
        "sub_theme": "household_items",
        "word": "Cosas que puedes ver desde tu ventana",
        "definitions": [
            {
                "text": "Cosas que puedes ver desde tu ventana",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_furniture_007"
    },
    {
        "t": "Música que te gusta",
        "h": [
            "¿Qué música escuchas?",
            "¿Quién es tu cantante favorito?",
            "¿Cuándo escuchas música?",
            "¿Sabes cantar o tocar un instrumento?",
            "¿Qué canción te hace feliz?"
        ],
        "level": "starter",
        "theme": "art_culture",
        "lang": "es",
        "sub_theme": null,
        "word": "Música que te gusta",
        "definitions": [
            {
                "text": "Música que te gusta",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_art_culture_002"
    },
    {
        "t": "Tu lugar favorito en tu ciudad",
        "h": [
            "¿Cuál es tu lugar favorito?",
            "¿Dónde está?",
            "¿Por qué te gusta?",
            "¿Vas allí a menudo?",
            "¿Con quién vas?"
        ],
        "level": "starter",
        "theme": "places",
        "lang": "es",
        "sub_theme": "city",
        "word": "Tu lugar favorito en tu ciudad",
        "definitions": [
            {
                "text": "Tu lugar favorito en tu ciudad",
                "examples": []
            }
        ],
        "form": "phrase",
        "id": "es_starter_places_002"
    }
];
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();
