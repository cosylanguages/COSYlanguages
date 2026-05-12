(function() {
    const data = [
        { t: "Un lugar que sientes como tu hogar", h: ["¿Es una ciudad, una casa, un país?","¿Cuándo sentiste esto por primera vez?","¿Qué hace que se sienta como un hogar?","¿El hogar es un lugar o un sentimiento?","¿Crees que se puede tener más de un hogar?"] },
        { t: "Algo sobre lo que hayas cambiado de opinión", h: ["¿Qué solías pensar?","¿Qué cambió?","¿Cuándo sucedió?","¿Fue un cambio gradual o repentino?","¿Cómo te sientes al respecto ahora?"] },
        { t: "Qué hace a un buen amigo", h: ["¿Qué cualidades importan más en una amistad?","¿Tus amigos más cercanos son similares a ti o diferentes?","¿Pueden cambiar las amistades al envejecer?","¿Qué es algo que no tolerarías en un amigo?","¿Es fácil hacer amigos de verdad siendo adulto?"] },
        { t: "Algo que desearías haber aprendido antes", h: ["¿Qué es?","¿Por qué no lo aprendiste antes?","¿Cómo sería tu vida diferente?","¿Es demasiado tarde para aprenderlo ahora?","¿Se lo enseñarías a alguien más joven?"] },
        { t: "Una habilidad que estés intentando mejorar", h: ["¿Cuál es la habilidad?","¿Por qué decidiste trabajar en ella?","¿Cómo practicas?","¿Cuál es la parte más difícil?","¿Cuánto progreso has hecho?"] },
        { t: "Lo que extrañas de ser niño", h: ["¿Qué es algo que extrañas sinceramente?","¿Crees que la infancia era más fácil?","¿Qué les preocupaba a los niños que a los adultos no?","¿Qué hacían los adultos que no entendías entonces pero ahora sí?","¿Volverías si pudieras?"] },
        { t: "Tu día de trabajo ideal", h: ["¿A qué hora empezarías y terminarías?","¿Dónde trabajarías?","¿Con quién trabajarías?","¿Qué estarías haciendo?","¿Qué tan diferente es de tu día de trabajo real?"] },
        { t: "Cómo ha cambiado tu vida en los últimos años", h: ["¿Cuál es el cambio más grande?","¿Fue tu elección?","¿Ha sido para mejor?","¿Qué se mantuvo igual?","¿Qué crees que cambiará después?"] },
        { t: "Qué te hace sentir más vivo", h: ["¿Hay un momento o actividad que siempre te dé energía?","¿Involucra a otras personas o la soledad?","¿Qué tan a menudo te sientes así?","¿Ha cambiado esto con el tiempo?","¿Qué te impide hacerlo más a menudo?"] },
        { t: "Tu mayor distracción", h: ["¿Qué atrae tu atención más fácilmente?","¿Te cuesta tiempo o energía?","¿Has intentado cambiar esto?","¿Es completamente malo o hay algo bueno en ello?","¿Qué harías con el tiempo si eliminaras esta distracción?"] },
        { t: "Un libro, película o serie que se haya quedado contigo", h: ["¿Cómo se llamaba?","¿De qué trataba?","¿Por qué se quedó contigo?","¿Cambió tu forma de pensar sobre algo?","¿Lo recomendarías y a quién?"] },
        { t: "Qué significa el hogar para ti", h: ["¿El hogar es una persona, un lugar o un sentimiento?","¿Dónde te sientes más en casa?","¿Cambió tu idea del hogar al envejecer?","¿Puedes sentirte como en casa en un lugar nuevo?","¿Es el hogar un lugar al que regresas o algo que llevas contigo?"] },
        { t: "Algo que haces diferente a la mayoría de la gente", h: ["¿Qué es?","¿Cuándo empezaste a hacerlo así?","¿Te ha preguntado la gente alguna vez al respecto?","¿Hace tu vida mejor?","¿Crees que todos deberían hacerlo a tu manera?"] },
        { t: "Un hábito del que estés orgulloso", h: ["¿Cuál es el hábito?","¿Cuánto tiempo hace que lo tienes?","¿Cómo lo construiste?","¿Qué diferencia hace?","¿Alguien te inspiró?"] },
        { t: "Un viaje que te sorprendió", h: ["¿A dónde ibas?","¿Qué te sorprendió?","¿Fue el lugar, la gente o lo que pasó?","¿Cambió tus planes?","¿Volverías?"] },
        { t: "Tu relación con las redes sociales", h: ["¿Qué plataformas usas?","¿Cuánto tiempo pasas en ellas?","¿Afecta tu estado de ánimo?","¿Alguna vez te has tomado un descanso?","¿Cómo sería tu vida sin ellas?"] },
        { t: "Cómo se ve el éxito para ti", h: ["¿Cómo defines el éxito?","¿Es dinero, felicidad, relaciones?","¿Ha cambiado tu definición con el tiempo?","¿Te consideras exitoso?","¿Te importa la opinión de los demás sobre tu éxito?"] },
        { t: "Tu relación con la comida", h: ["¿Cocinas a menudo?","¿La comida es solo combustible o algo más?","¿Comes con otros o solo?","¿Hay alguna comida fuertemente conectada a un recuerdo?","¿Ha cambiado tu relación con la comida?"] },
        { t: "Algo que siempre te haga reír", h: ["¿Qué es?","¿Por qué crees que te hace reír?","¿Puedes reírte de cosas difíciles?","¿Tú y tus amigos se ríen de lo mismo?","¿Es tu sentido del humor diferente en diferentes idiomas?"] },
        { t: "Un consejo que le darías a tu yo más joven", h: ["¿Qué edad tendría tu yo más joven?","¿Cuál sería el consejo?","¿Por qué no lo sabías entonces?","¿Crees que habrías escuchado?","¿Quién te dio el mejor consejo de tu vida?"] }
    ];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();