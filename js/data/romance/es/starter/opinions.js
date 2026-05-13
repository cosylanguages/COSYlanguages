(function() {
    const data = [
      { t:"Los gatos son mejores que los perros.", tag:"Pets", h:["¿Tienes un gato o un perro?","¿Qué te gusta de los gatos? ¿Qué te gusta de los perros?","¿Los gatos son fáciles o difíciles?","¿Cuál es un buen nombre para una mascota?","¿Tienen mascotas tus amigos?"] },
      { t:"La mañana es el mejor momento del día.", tag:"Daily life", h:["¿A qué hora te despiertas?","¿Qué haces por la mañana?","¿Te sientes bien por la mañana?","¿Es mejor la tarde/noche para ti?","¿Qué comes por la mañana?"] },
      { t:"El té es mejor que el café.", tag:"Drinks", h:["¿Bebes té o café?","¿Cuántas tazas bebes cada día?","¿Bebes bebidas calientes o frías?","¿Qué bebes por la mañana?","¿Cuál es una bebida popular en tu país?"] },
      { t:"Es divertido cocinar.", tag:"Food", h:["¿Cocinas en casa?","¿Qué cocinas?","¿Es fácil o difícil?","¿Quién cocina en tu familia?","¿Qué es lo que más te gusta preparar?"] },
      { t:"El clima frío es agradable.", tag:"Weather", h:["¿Cómo está el clima hoy?","¿Te gusta la lluvia o el sol?","¿Qué ropa usas cuando hace frío?","¿Qué haces cuando hace frío?","¿Cuál es tu estación favorita?"] },
      { t:"El lunes es un mal día.", tag:"Daily life", h:["¿Qué haces el lunes?","¿Cuál es tu día favorito de la semana?","¿Es el fin de semana demasiado corto?","¿Qué haces el viernes?","¿Te gusta tu rutina semanal?"] },
      { t:"El chocolate es muy bueno.", tag:"Food", h:["¿Te gusta el chocolate?","¿Cuál es tu dulce favorito?","¿Comes mucho chocolate?","¿Es saludable el chocolate?","¿Qué comes cuando estás feliz?"] },
      { t:"Los pueblos pequeños son mejores que las ciudades grandes.", tag:"Places", h:["¿Vives en un pueblo o en una ciudad?","¿Qué tiene de bueno un pueblo pequeño?","¿Qué tiene de bueno una ciudad grande?","¿Es ruidosa tu ciudad?","¿Dónde quieres vivir en el futuro?"] },
      { t:"Es bueno tener muchos amigos.", tag:"People", h:["¿Cuántos amigos tienes?","¿Qué haces con tus amigos?","¿Es mejor un buen amigo que muchos amigos?","¿Dónde conoces a tus amigos?","¿Qué es un buen amigo?"] },
      { t:"Dormir es la mejor actividad.", tag:"Daily life", h:["¿Cuántas horas duermes?","¿Duermes bien?","¿A qué hora te vas a la cama?","¿Duermes por la tarde (siesta)?","¿Dormir es tu actividad favorita?"] },
      { t:"La música es mejor que la tele.", tag:"Free time", h:["¿Escuchas música todos los días?","¿Qué música te gusta?","¿Cuántas horas de tele ves?","¿Cuál es tu programa favorito?","¿Qué haces por la noche?"] },
      { t:"Es importante desayunar.", tag:"Food", h:["¿Desayunas todos los días?","¿Qué comes por la mañana?","¿Es el desayuno una comida importante para ti?","¿Desayunas en casa?","¿Cuál es un desayuno típico en tu país?"] },
      { t:"Nadar es divertido.", tag:"Sport", h:["¿Sabes nadar?","¿Te gusta el agua?","¿Dónde nadas: en la piscina o en el mar?","¿Qué deporte te gusta?","¿Es el deporte importante para ti?"] },
      { t:"Las películas viejas son aburridas.", tag:"Entertainment", h:["¿Qué películas te gustan?","¿Ves películas viejas o nuevas?","¿Quién es tu actor favorito?","¿Qué es una buena película?","¿Dónde ves películas?"] },
      { t:"La piña en la pizza es una gran idea.", tag:"Food", h:["¿Te gusta la pizza?","¿Cuál es tu ingrediente favorito?","¿Le pones fruta a la comida salada?","¿Es esto popular en tu país?","¿Cuál es el peor ingrediente para una pizza según tú?"] }
    ];
    const lang = "es";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();