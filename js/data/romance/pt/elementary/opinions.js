(function() {
    const data = [
      { t:"Os fins de semana são demasiado curtos.", tag:"Daily life", h:["O que faz aos fins de semana?","Como se sente no domingo à noite?","O que faria com um fim de semana de três dias?","Trabalha ou estuda aos fins de semana?","Qual é o fim de semana perfeito para si?"] },
      { t:"É falta de educação chegar atrasado.", tag:"Social life", h:["Costuma ser pontual?","Quanto tempo espera por um amigo?","Não há problema em chegar 10 minutos atrasado?","A pontualidade é importante na sua cultura?","O que faz quando alguém se atrasa muito?"] },
      { t:"As pessoas são mais simpáticas nas cidades pequenas.", tag:"Society", h:["Onde mora — vila ou cidade?","Os seus vizinhos são amigáveis?","As pessoas falam com estranhos onde mora?","Já viveu num tipo de lugar diferente?","O que torna um lugar amigável?"] },
      { t:"Ter um animal de estimação torna-o mais feliz.", tag:"Lifestyle", h:["Tem um animal de estimação?","Qual é o melhor animal de estimação para uma pessoa ocupada?","Os animais de estimação são caros?","Um animal de estimação pode ser um amigo?","O que precisa de fazer para cuidar bem de um animal de estimação?"] },
      { t:"Pode-se dizer muito sobre alguém pelos seus sapatos.", tag:"People", h:["Repara nos sapatos das pessoas?","O que é que os seus sapatos dizem sobre si?","A moda é importante para si?","Pode julgar uma pessoa pela sua aparência?","O que mais lhe diz algo sobre o carácter de uma pessoa?"] },
      { t:"Não há problema em comer sozinho num restaurante.", tag:"Social life", h:["Já comeu sozinho num restaurante?","Acha confortável?","A comida é melhor com outras pessoas?","Vê muitas pessoas a comer sozinhas?","O que faz quando come sozinho?"] },
      { t:"Aprender uma língua é mais fácil quando se é jovem.", tag:"Language", h:["Que idade tinha quando começou a aprender esta língua?","Acha que a idade é importante para a aprendizagem de línguas?","Qual é a parte mais difícil de aprender uma língua?","Conhece alguém que tenha aprendido uma língua em adulto?","O que o ajuda mais quando estuda?"] },
      { t:"O transporte público é melhor do que ter um carro.", tag:"Lifestyle", h:["Como se desloca na sua cidade?","O transporte público é bom onde mora?","Quais são os problemas de ter um carro?","É caro viajar em transporte público?","O que mudaria no transporte na sua cidade?"] },
      { t:"É difícil ficar entediado quando se tem um telemóvel.", tag:"Technology", h:["Quantas horas por dia usa o telemóvel?","Para que o usa mais?","Ficava entediado antes dos smartphones?","O tédio às vezes é bom?","Poderia deixar o telemóvel em casa por um dia?"] },
      { t:"Cozinhar em casa é sempre melhor do que comer fora.", tag:"Food", h:["Com que frequência cozinha em casa?","O que é mais fácil — cozinhar ou ir a um restaurante?","Comer fora é caro onde mora?","Qual é o seu restaurante favorito?","Qual é a sua melhor refeição caseira?"] },
      { t:"Todos deveriam tentar viver no estrangeiro durante um ano.", tag:"Travel", h:["Já viveu noutro país?","O que seria difícil em viver no estrangeiro?","O que seria emocionante?","Que país escolheria?","Viver no estrangeiro muda uma pessoa?"] },
      { t:"Os super-heróis são mais interessantes do que os heróis reais.", tag:"Entertainment", h:["Quem é o seu super-herói favorito?","Consegue pensar num herói da vida real?","O que faz de alguém um herói?","Porque é que as pessoas adoram super-heróis?","Os heróis reais são mais importantes?"] },
      { t:"É importante fazer a cama todas as manhãs.", tag:"Daily life", h:["Faz a cama todos os dias?","Um quarto arrumado fá-lo sentir-se melhor?","Isto é importante ou não?","Qual é a sua rotina matinal?","Que pequenos hábitos tem?"] },
      { t:"Fazer compras é um passatempo.", tag:"Free time", h:["Gosta de fazer compras?","Faz compras online ou em lojas?","Quanto tempo passa a fazer compras?","Fazer compras é relaxante?","O que compra com mais frequência?"] },
      { t:"Viajar sozinho é melhor do que viajar com amigos.", tag:"Travel", h:["Já viajou sozinho?","O que há de bom em viajar sozinho?","O que há de bom em viajar com outros?","Sente-se sozinho quando viaja sozinho?","Qual foi a melhor viagem que fez?"] }
    ];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();