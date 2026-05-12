(function() {
    const data = [
        { t: "Tu familia", h: ["¿Cuántas personas hay en tu familia?","¿Tienes hermanos o hermanas?","¿Dónde vive tu familia?","¿Con quién vives?","¿Qué hacéis juntos en familia?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Tu casa", h: ["¿Cuántas habitaciones tiene tu casa?","¿Cuál es tu habitación favorita?","¿Tu casa es grande o pequeña?","¿Qué puedes ver desde tu ventana?","¿Te gusta tu casa?"], level: "starter", theme: "rooms_of_a_home_A1" },
        { t: "Tu comida favorita", h: ["¿Cuál es tu comida favorita?","¿Te gusta la comida dulce o salada?","¿Cocinas en casa?","¿Qué comida no te gusta?","¿Qué desayunas?"], level: "starter", theme: "basic_foods_A1" },
        { t: "Tu rutina matutina", h: ["¿A qué hora te despiertas?","¿Qué es lo primero que haces?","¿Desayunas?","¿Cómo vas al trabajo o a la escuela?","¿Tu mañana es tranquila o ajetreada?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Tu mascota o una mascota que quieras", h: ["¿Tienes mascota?","¿Qué animal te gusta?","¿Cuál es un buen nombre para una mascota?","¿Eres de perros o de gatos?","¿Es fácil tener una mascota?"], level: "starter", theme: "animals_A1" },
        { t: "Un deporte que te guste", h: ["¿Qué deporte te gusta?","¿Juegas o miras?","¿Cuándo practicas este deporte?","¿Es un deporte de equipo o individual?","¿Es el deporte importante para ti?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Qué haces los fines de semana", h: ["¿Qué sueles hacer el sábado?","¿Sales o te quedas en casa?","¿Ves a tus amigos?","¿Qué te gusta hacer para relajarte?","¿Tu fin de semana es ajetreado o tranquilo?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Tu estación favorita", h: ["¿Cuál es tu estación favorita?","¿Cómo es el clima?","¿Qué hace la gente en esta estación?","¿Qué te pones?","¿Por qué te gusta esta estación?"], level: "starter", theme: "seasons_climate_A1" },
        { t: "Tu mejor amigo", h: ["¿Cómo se llama tu mejor amigo?","¿Dónde os conocisteis?","¿Qué hacéis juntos?","¿Cómo son físicamente?","¿Por qué es tu mejor amigo?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Tu trabajo o escuela", h: ["¿Qué haces — trabajar o estudiar?","¿Qué te gusta de ello?","¿A qué hora empiezas?","¿Con quién trabajas o estudias?","¿Es fácil o difícil?"], level: "starter", theme: "job_titles_professions_A1" },
        { t: "Cosas que te gustan y que no", h: ["¿Qué es una cosa que te gusta mucho?","¿Qué es una cosa que no te gusta?","¿Te gusta el clima frío?","¿Te gusta cocinar?","¿Te gusta madrugar?"], level: "starter", theme: "basic_positive_emotions_A1" },
        { t: "Tu color favorito y por qué", h: ["¿Cuál es tu color favorito?","¿Dónde ves este color?","¿Llevas este color?","¿Está este color en tu casa?","¿A tus amigos también les gusta este color?"], level: "starter", theme: "colours_patterns_A1" },
        { t: "Números en tu vida", h: ["¿Cuál es tu edad?","¿Cuál es tu número de la suerte?","¿Cuántas personas viven en tu casa?","¿A qué hora te despiertas?","¿Cuántos idiomas hablas?"], level: "starter", theme: "numbers_0_9_A1" },
        { t: "Tu bebida favorita", h: ["¿Qué bebes por la mañana?","¿Prefieres té o café?","¿Bebes mucha agua?","¿Cuál es una bebida especial en tu país?","¿Qué bebes cuando estás feliz?"], level: "starter", theme: "drinks_A1" },
        { t: "Tu país", h: ["¿Cuál es tu país?","¿Cuál es la capital?","¿Cómo es el clima?","¿Qué comida es famosa allí?","¿Qué te gusta de tu país?"], level: "starter", theme: "countries_capitals_A1" },
        { t: "Cosas en tu habitación", h: ["¿Qué muebles hay en tu habitación?","¿De qué color es tu habitación?","¿Es grande o pequeña?","¿Qué hay en tu escritorio o mesa?","¿Te gusta tu habitación?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Tu día típico", h: ["¿A qué hora empiezas el día?","¿Qué haces por la mañana?","¿Qué almuerzas?","¿Qué haces por la tarde?","¿A qué hora te vas a la cama?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Cosas que puedes ver desde tu ventana", h: ["¿Qué hay fuera de tu ventana?","¿Puedes ver árboles o edificios?","¿Qué oyes?","¿Es una vista tranquila o concurrida?","¿Te gusta esta vista?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Música que te gusta", h: ["¿Qué música escuchas?","¿Quién es tu cantante favorito?","¿Cuándo escuchas música?","¿Sabes cantar o tocar un instrumento?","¿Qué canción te hace feliz?"], level: "starter", theme: "music_A1" },
        { t: "Tu lugar favorito en tu ciudad", h: ["¿Cuál es tu lugar favorito?","¿Dónde está?","¿Por qué te gusta?","¿Vas allí a menudo?","¿Con quién vas?"], level: "starter", theme: "local_places_services_A1" }
    ];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();