(function() {
    const data = [
      { t:"Los fines de semana son demasiado cortos.", tag:"Daily life", h:["¿Qué haces los fines de semana?","¿Cómo te sientes el domingo por la noche?","¿Qué harías con un fin de semana de tres días?","¿Trabajas o estudias los fines de semana?","¿Cuál es el fin de semana perfecto para ti?"] },
      { t:"Es de mala educación llegar tarde.", tag:"Social life", h:["¿Sueles llegar a tiempo?","¿Cuánto tiempo esperas a un amigo?","¿Está bien llegar 10 minutos tarde?","¿Es importante la puntualidad en tu cultura?","¿Qué haces cuando alguien llega muy tarde?"] },
      { t:"La gente es más amable en los pueblos pequeños.", tag:"Society", h:["¿Dónde vives: en un pueblo o en una ciudad?","¿Son amigables tus vecinos?","¿Habla la gente con extraños donde vives?","¿Has vivido alguna vez en un tipo de lugar diferente?","¿Qué hace que un lugar sea amigable?"] },
      { t:"Tener una mascota te hace más feliz.", tag:"Lifestyle", h:["¿Tienes mascota?","¿Cuál es la mejor mascota para una person ocupada?","¿Son caras las mascotas?","¿Puede una mascota ser un amigo?","¿Qué hay que hacer para cuidar bien a una mascota?"] },
      { t:"Se puede saber mucho de alguien por sus zapatos.", tag:"People", h:["¿Miras los zapatos de la gente?","¿Qué dicen tus zapatos de ti?","¿Es importante la moda para ti?","¿Se puede juzgar a una persona por su apariencia?","¿Qué más te dice algo sobre el carácter de una persona?"] },
      { t:"Está bien comer solo en un restaurante.", tag:"Social life", h:["¿Has comido solo en un restaurante?","¿Te resulta cómodo?","¿Es mejor la comida con otras personas?","¿Ves a mucha gente comiendo sola?","¿Qué haces cuando comes solo?"] },
      { t:"Aprender un idioma es más fácil cuando eres joven.", tag:"Language", h:["¿Qué edad tenías cuando empezaste a aprender este idioma?","¿Crees que la edad importa para aprender idiomas?","¿Qué es lo más difícil de aprender un idioma?","¿Conoces a alguien que haya aprendido un idioma de adulto?","¿Qué es lo que más te ayuda cuando estudias?"] },
      { t:"El transporte público es mejor que tener un coche.", tag:"Lifestyle", h:["¿Cómo te desplazas por tu ciudad?","¿Es bueno el transporte público donde vives?","¿Cuáles son los problemas de tener un coche?","¿Es caro viajar en transporte público?","¿Qué cambiarías del transporte en tu ciudad?"] },
      { t:"Es difícil aburrirse cuando tienes un teléfono.", tag:"Technology", h:["¿Cuántas horas al día usas el teléfono?","¿Para qué lo usas más?","¿Te aburrias antes de los smartphones?","¿Es bueno el aburrimiento a veces?","¿Podrías dejar tu teléfono en casa por un día?"] },
      { t:"Cocinar en casa siempre es mejor que comer fuera.", tag:"Food", h:["¿Con qué frecuencia cocinas en casa?","¿Qué es más fácil: cocinar o ir a un restaurante?","¿Es caro comer fuera donde vives?","¿Cuál es tu restaurante favorito?","¿Cuál es tu mejor comida casera?"] },
      { t:"Todo el mundo debería intentar vivir en el extranjero durante un año.", tag:"Travel", h:["¿Has vivido en otro país?","¿Qué sería difícil de vivir en el extranjero?","¿Qué sería emocionante?","¿Qué país elegirías?","¿Vivir en el extranjero cambia a una persona?"] },
      { t:"Los superhéroes son más interesantes que los héroes reales.", tag:"Entertainment", h:["¿Quién es tu superhéroe favorito?","¿Se te ocurre un héroe de la vida real?","¿Qué hace que alguien sea un héroe?","¿Por qué la gente ama a los superhéroes?","¿Son más importantes los héroes reales?"] },
      { t:"Es importante hacer la cama todas las mañanas.", tag:"Daily life", h:["¿Haces la cama todos los días?","¿Te hace sentir mejor una habitación ordenada?","¿Es esto importante o no?","¿Cuál es tu rutina matutina?","¿Qué pequeños hábitos tienes?"] },
      { t:"Ir de compras es un pasatiempo.", tag:"Free time", h:["¿Te gusta ir de compras?","¿Compras online o en tiendas?","¿Cuánto tiempo pasas comprando?","¿Es relajante ir de compras?","¿Qué compras con más frecuencia?"] },
      { t:"Viajar solo es mejor que viajar con amigos.", tag:"Travel", h:["¿Has viajado solo?","¿Qué tiene de bueno viajar solo?","¿Qué tiene de bueno viajar con otros?","¿Te sientes solo cuando viajas solo?","¿Cuál es el mejor viaje que has hecho?"] }
    ];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();