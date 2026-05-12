(function() {
    const data = [
      { t:"Os gatos são melhores que os cães.", tag:"Pets", h:["Você tem um gato ou um cão?","O que você gosta nos gatos? O que você gosta nos cães?","Os gatos são fáceis ou difíceis?","Qual é um bom nome para um animal de estimação?","Seus amigos têm animais de estimação?"] },
      { t:"A manhã é a melhor hora do dia.", tag:"Daily life", h:["A que horas você acorda?","O que você faz de manhã?","Você se sente bem de manhã?","A noite é melhor para você?","O que você come de manhã?"] },
      { t:"O chá é melhor que o café.", tag:"Drinks", h:["Você bebe chá ou café?","Quantas xícaras você bebe todos os dias?","Você bebe bebidas quentes ou frias?","O que você bebe de manhã?","Qual é uma bebida popular no seu país?"] },
      { t:"Cozinhar é divertido.", tag:"Food", h:["Você cozinha em casa?","O que você cozinha?","É fácil ou difícil?","Quem cozinha na sua família?","Qual é a sua coisa favorita de preparar?"] },
      { t:"O tempo frio é agradável.", tag:"Weather", h:["Como está o tempo hoje?","Você gosta de chuva ou sol?","O que você veste no tempo frio?","O que você faz quando está frio?","Qual é a sua estação favorita?"] },
      { t:"Segunda-feira é um dia ruim.", tag:"Daily life", h:["O que você faz na segunda-feira?","Qual é o seu dia da semana favorito?","O fim de semana é curto demais?","O que você faz na sexta-feira?","Você gosta da sua rotina semanal?"] },
      { t:"O chocolate è muito bom.", tag:"Food", h:["Você gosta de chocolate?","Qual é o seu doce favorito?","Você come muito chocolate?","O chocolate é saudável?","O que você come quando está feliz?"] },
      { t:"Cidades pequenas são melhores que cidades grandes.", tag:"Places", h:["Você mora em uma vila ou em uma cidade?","O que há de bom em uma cidade pequena?","O que há de bom em uma cidade grande?","Sua cidade é barulhenta?","Onde você quer morar no futuro?"] },
      { t:"É bom ter muitos amigos.", tag:"People", h:["Quantos amigos você tem?","O que você faz com seus amigos?","Um bom amigo é melhor que muitos amigos?","Onde você encontra seus amigos?","O que é um bom amigo?"] },
      { t:"Dormir é a melhor atividade.", tag:"Daily life", h:["Quantas horas você dorme?","Você dorme bem?","A que horas você vai para a cama?","Você dorme à tarde?","Dormir é a sua coisa favorita?"] },
      { t:"A música é melhor que a TV.", tag:"Free time", h:["Você ouve música todos os dias?","Que música você gosta?","Quantas horas de TV você assiste?","Qual é o seu programa favorito?","O que você faz à noite?"] },
      { t:"É importante tomar o café da manhã.", tag:"Food", h:["Você toma café da manhã todos os dias?","O que você come de manhã?","O café da manhã é uma refeição grande para você?","Você toma café da manhã em casa?","Qual é um café da manhã típico no seu país?"] },
      { t:"Nadar é divertido.", tag:"Sport", h:["Você sabe nadar?","Você gosta de água?","Onde você nada — na piscina ou no mar?","De qual esporte você gosta?","O esporte é importante para você?"] },
      { t:"Filmes antigos são chatos.", tag:"Entertainment", h:["De quais filmes você gosta?","Você assiste a filmes antigos ou novos?","Quem é seu ator favorito?","O que é um bom filme?","Onde você assiste a filmes?"] },
      { t:"Abacaxi na pizza é uma ótima ideia.", tag:"Food", h:["Você gosta de pizza?","Qual é a sua cobertura favorita?","Você coloca fruta em comida salgada?","Isso é popular no seu país?","Qual é a pior cobertura de pizza para você?"] }
    ];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();