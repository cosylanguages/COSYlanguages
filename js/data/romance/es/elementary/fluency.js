(function() {
    const data = [
        { t: "Una vacación que recuerdas", h: ["¿Adónde fuiste?","¿Con quién fuiste?","¿Qué hiciste allí?","¿Cómo era el clima?","¿Cuál fue el mejor momento?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Tu restaurante o café favorito", h: ["¿Dónde está?","¿Qué comida sirven?","¿Por qué te gusta?","¿Con quién vas?","¿Cuándo fue la última vez que fuiste?"], level: "elementary", theme: "restaurants_ordering_A2" },
        { t: "Cómo vas al trabajo o a la escuela", h: ["¿Cómo viajas — autobús, coche, bici?","¿Cuánto tiempo tardas?","¿Disfrutas del viaje?","¿Es caro?","¿Qué haces por el camino?"], level: "elementary", theme: "transport_travel_A2" },
        { t: "Lo que haces para relajarte", h: ["¿Qué te ayuda a relajarte?","¿Prefieres estar solo o con gente?","¿Con qué frecuencia te relajas de verdad?","¿Tienes un lugar favorito para relajarte?","¿Es fácil relajarse o te resulta difícil?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Una película que viste hace poco", h: ["¿Cómo se llamaba la película?","¿De qué trataba?","¿Te gustó?","¿Quién salía en ella?","¿La recomendarías?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Tu fin de semana ideal", h: ["¿Qué harías el viernes por la noche?","¿Saldrías o te quedarías en casa?","¿Viajarías a algún lugar?","¿Con quién pasarías el tiempo?","¿Qué comerías?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Una persona a la que admiras", h: ["¿Quién es esta persona?","¿A qué se dedica?","¿Por qué la admiras?","¿La has conocido en persona?","¿Qué puedes aprender de ella?"], level: "elementary", theme: "personality_character_A2" },
        { t: "El destino de vacaciones de tus sueños", h: ["¿Adónde irías?","¿Por qué este lugar?","¿Con quién irías?","¿Qué harías allí?","¿Cuánto tiempo te quedarías?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Tu relación con tu teléfono", h: ["¿Cuántas horas al día usas el teléfono?","¿Para qué lo usas más?","¿Podrías vivir sin él una semana?","¿Te ayuda o te distrae?","¿Lo miras nada más levantarte por la mañana?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Algo divertido que te pasó", h: ["¿Cuándo pasó esto?","¿Dónde estabas?","¿Con quién estabas?","¿Qué pasó exactamente?","¿Todavía te ríes de ello ahora?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "Tus aficiones", h: ["¿Qué haces en tu tiempo libre?","¿Cuándo empezaste esta afición?","¿La haces solo o con otros?","¿Es cara?","¿Qué es lo que te gusta de ella?"], level: "elementary", theme: "interests_hobbies_A2" },
        { t: "El clima donde vives", h: ["¿Cómo es el clima normalmente?","¿Cuál es tu tipo de clima favorito?","¿Afecta el clima a tu estado de ánimo?","¿Cuál es el peor clima que recuerdas?","¿Qué haces los días de lluvia?"], level: "elementary", theme: "weather_climate_A2" },
        { t: "Un cumpleaños que recuerdas", h: ["¿De quién era el cumpleaños?","¿Dónde fue la celebración?","¿Qué hicisteis?","¿Hubo alguna sorpresa?","¿Qué lo hizo especial?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Cosas que te gustan de donde vives", h: ["¿Qué es lo que más te gusta de tu pueblo o ciudad?","¿Es un buen lugar para las familias?","¿Qué hay para hacer allí?","¿Qué cambiarías?","¿Se lo recomendarías a un amigo?"], level: "elementary", theme: "neighbourhood_local_A2" },
        { t: "Un domingo típico", h: ["¿A qué hora te despiertas el domingo?","¿Tienes una rutina?","¿Cocinas una comida grande?","¿Descansas o estás ocupado?","¿Es el domingo tu día favorito?"], level: "elementary", theme: "daily_work_routines_A2" },
        { t: "Comida de tu país", h: ["¿Cuál es un plato tradicional?","¿Lo cocinas en casa?","¿Cuándo lo come la gente?","¿Es difícil de preparar?","¿Se lo recomendarías a un extranjero?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Algo que compraste hace poco", h: ["¿Qué compraste?","¿Dónde lo compraste?","¿Fue caro?","¿Lo necesitabas o simplemente lo querías?","¿Estás contento con la compra?"], level: "elementary", theme: "shopping_consumerism_A2" },
        { t: "Tu aplicación favorita", h: ["¿Qué aplicación usas más?","¿Para qué la usas?","¿Cuándo empezaste a usarla?","¿La recomendarías?","¿Podrías vivir sin ella?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Un recuerdo de la infancia", h: ["¿Qué edad tenías?","¿Dónde estabas?","¿Con quién estabas?","¿Qué pasó?","¿Por qué lo recuerdas?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "Lo que comiste ayer", h: ["¿Qué desayunaste?","¿Qué almorzaste?","¿Cocinaste o comiste fuera?","¿Fue un día típico de comidas?","¿Qué fue lo mejor que comiste?"], level: "elementary", theme: "diet_nutrition_A2" }
    ];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();