(function() {
    const data = [
        { t: "Um lugar que você sente como seu lar", h: ["É uma cidade, uma casa, um país?","Quando você sentiu isso pela primeira vez?","O que faz com que pareça um lar?","O lar é um lugar ou um sentimento?","Você acha que pode ter mais de um lar?"] },
        { t: "Algo sobre o qual você mudou de ideia", h: ["O que você costumava pensar?","O que mudou?","Quando aconteceu?","Foi uma mudança gradual ou repentina?","Como você se sente sobre isso agora?"] },
        { t: "O que faz de alguém um bom amigo", h: ["Quais qualidades importam mais em uma amizade?","Seus amigos mais próximos são parecidos com você ou diferentes?","As amizades podem mudar à medida que você envelhece?","O que é algo que você não toleraria em um amigo?","É fácil fazer amigos de verdade como adulto?"] },
        { t: "Algo que você gostaria de ter aprendido antes", h: ["O que é?","Por que você não aprendeu antes?","Como sua vida seria diferente?","É tarde demais para aprender agora?","Você ensinaria isso a alguém mais jovem?"] },
        { t: "Uma habilidade que você está tentando melhorar", h: ["Qual é a habilidade?","Por que você decidiu trabalhar nela?","Como você pratica?","Qual é a parte mais difícil?","Quanto progresso você fez?"] },
        { t: "O que você sente falta de ser criança", h: ["Do que você genuinamente sente falta?","Você acha que a infância era mais fácil?","Com o que as crianças se preocupavam que os adultos não?","O que os adultos faziam que você não entendia na época, mas entende agora?","Você voltaria se pudesse?"] },
        { t: "Seu dia de trabalho ideal", h: ["A que horas você começaria e terminaria?","Onde você trabalharia?","Com quem você trabalharia?","O que você estaria fazendo?","Quão diferente é do seu dia de trabalho real?"] },
        { t: "Como sua vida mudou nos últimos anos", h: ["Qual é a maior mudança?","Foi escolha sua?","Foi para melhor?","O que permaneceu igual?","O que você acha que mudará a seguir?"] },
        { t: "O que faz você se sentir mais vivo", h: ["Existe um momento ou atividade que sempre te dá energia?","Envolve outras pessoas ou a solidão?","Com que frequência você se sente assim?","Isso mudou com o tempo?","O que te impede de fazer isso com mais frequência?"] },
        { t: "Sua maior distração", h: ["O que atrai sua atenção mais facilmente?","Isso lhe custa tempo ou energia?","Você tentou mudar isso?","É totalmente ruim ou há algo de bom nisso?","O que você faria com o tempo se removesse essa distração?"] },
        { t: "Um livro, filme ou série que marcou você", h: ["Como se chamava?","Sobre o que era?","Por que marcou você?","Mudou sua forma de pensar sobre algo?","Você recomendaria e para quem?"] },
        { t: "O que o lar significa para você", h: ["O lar é uma pessoa, um lugar ou um sentimento?","Onde você se sente mais em casa?","Sua ideia de lar mudou à medida que envelheceu?","Você pode se sentir em casa em um lugar novo?","O lar é um lugar para onde você volta ou algo que você carrega consigo?"] },
        { t: "Algo que você faz de forma diferente da maioria das pessoas", h: ["O que é?","Quando você começou a fazer dessa forma?","As pessoas já questionaram você sobre isso?","Isso torna sua vida melhor?","Você acha que todos deveriam fazer do seu jeito?"] },
        { t: "Um hábito do qual você se orgulha", h: ["Qual é o hábito?","Há quanto tempo você o tem?","Como você o construiu?","Que diferença isso faz?","Alguém inspirou você?"] },
        { t: "Uma viagem que surpreendeu você", h: ["Para onde você estava indo?","O que surpreendeu você?","Foi o lugar, as pessoas ou o que aconteceu?","Isso mudou seus planos?","Você voltaria?"] },
        { t: "Sua relação com as redes sociais", h: ["Quais plataformas você usa?","Quanto tempo você passa nelas?","Isso afeta seu humor?","Você já fez uma pausa?","Como seria sua vida sem elas?"] },
        { t: "Como é o sucesso para você", h: ["Como você define o sucesso?","É dinheiro, felicidade, relacionamentos?","Sua definição mudou com o tempo?","Você se considera bem-sucedido?","A opinião das outras pessoas sobre o seu sucesso importa para você?"] },
        { t: "Sua relação com a comida", h: ["Você cozinha com frequência?","A comida é apenas combustível ou algo mais?","Você come com outras pessoas ou sozinho?","Existe uma comida que está fortemente ligada a uma memória?","Sua relação com a comida mudou?"] },
        { t: "Algo que sempre faz você rir", h: ["O que é?","Por que você acha que isso faz você rir?","Você consegue rir de coisas difíceis?","Você e seus amigos riem das mesmas coisas?","Seu senso de humor é diferente em idiomas diferentes?"] },
        { t: "Um conselho que você daria ao seu eu mais jovem", h: ["Qual seria a idade do seu eu mais jovem?","Qual seria o conselho?","Por que você não sabia disso na época?","Você acha que teria ouvido?","Quem lhe deu o melhor conselho da sua vida?"] }
    ];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();