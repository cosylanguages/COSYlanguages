(function() {
    const data = [
        { t: "Sua família", h: ["Quantas pessoas há na sua família?","Você tem irmãos ou irmãs?","Onde sua família mora?","Com quem você mora?","O que vocês fazem juntos em família?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Sua casa", h: ["Quantos quartos sua casa tem?","Qual é o seu quarto favorito?","Sua casa é grande ou pequena?","O que você consegue ver da sua janela?","Você gosta da sua casa?"], level: "starter", theme: "rooms_of_a_home_A1" },
        { t: "Sua comida favorita", h: ["Qual é a sua refeição favorita?","Você gosta de comida doce ou salgada?","Você cozinha em casa?","De que comida você não gosta?","O que você come no café da manhã?"], level: "starter", theme: "basic_foods_A1" },
        { t: "Sua rotina matinal", h: ["A que horas você acorda?","Qual é a primeira coisa que você faz?","Você toma café da manhã?","Como você vai para o trabalho ou escola?","Sua manhã é calma ou agitada?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Seu animal de estimação ou um animal que você quer", h: ["Você tem um animal de estimação?","De qual animal você gosta?","Qual é um bom nome para um animal de estimação?","Você é uma pessoa de cachorros ou de gatos?","É fácil ter um animal de estimação?"], level: "starter", theme: "animals_A1" },
        { t: "Um esporte que você gosta", h: ["De qual esporte você gosta?","Você joga ou assiste?","Quando você pratica esse esporte?","É um esporte de equipe ou individual?","O esporte é importante para você?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "O que você faz nos fins de semana", h: ["O que você costuma fazer no sábado?","Você sai ou fica em casa?","Você vê amigos?","O que você gosta de fazer para relaxar?","Seu fim de semana é agitado ou tranquilo?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Sua estação favorita", h: ["Qual é a sua estação favorita?","Como está o tempo?","O que as pessoas fazem nesta estação?","O que você veste?","Por que você gosta desta estação?"], level: "starter", theme: "seasons_climate_A1" },
        { t: "Seu melhor amigo", h: ["Qual é o nome do seu melhor amigo?","Onde vocês se conheceram?","O que vocês fazem juntos?","Como eles são fisicamente?","Por que eles são seu melhor amigo?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Seu trabalho ou escola", h: ["O que você faz — trabalha ou estuda?","O que você gosta nisso?","A que horas você começa?","Com quem você trabalha ou estuda?","É fácil ou difícil?"], level: "starter", theme: "job_titles_professions_A1" },
        { t: "Coisas que você gosta e não gosta", h: ["Qual é uma coisa que você realmente gosta?","Qual é uma coisa que você não gosta?","Você gosta de tempo frio?","Você gosta de cozinhar?","Você gosta de acordar cedo?"], level: "starter", theme: "basic_positive_emotions_A1" },
        { t: "Sua cor favorita e por quê", h: ["Qual é a sua cor favorita?","Onde você vê essa cor?","Você usa essa cor?","Essa cor está na sua casa?","Seus amigos também gostam dessa cor?"], level: "starter", theme: "colours_patterns_A1" },
        { t: "Números na sua vida", h: ["Qual é a sua idade?","Qual é o seu número da sorte?","Quantas pessoas moram na sua casa?","A que horas você acorda?","Quantos idiomas você fala?"], level: "starter", theme: "numbers_0_9_A1" },
        { t: "Sua bebida favorita", h: ["O que você bebe de manhã?","Você prefere chá ou café?","Você bebe muita água?","Qual é uma bebida especial no seu país?","O que você bebe quando está feliz?"], level: "starter", theme: "drinks_A1" },
        { t: "Seu país", h: ["Qual é o seu país?","Qual é a capital?","Como está o tempo?","Que comida é famosa lá?","O que você ama no seu país?"], level: "starter", theme: "countries_capitals_A1" },
        { t: "Coisas no seu quarto", h: ["Que móveis há no seu quarto?","De que cor é o seu quarto?","É grande ou pequeno?","O que há na sua mesa ou escrivaninha?","Você gosta do seu quarto?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Seu dia típico", h: ["A que horas você começa o dia?","O que você faz de manhã?","O que você come no almoço?","O que você faz à noite?","A que horas você vai para a cama?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Coisas que você pode ver da sua janela", h: ["O que há fora da sua janela?","Você consegue ver árvores ou prédios?","O que você ouve?","É uma vista tranquila ou movimentada?","Você gosta desta vista?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Música que você gosta", h: ["Que música você ouve?","Quem é seu cantor favorito?","Quando você ouve música?","Você sabe cantar ou tocar um instrumento?","Qual música te faz feliz?"], level: "starter", theme: "music_A1" },
        { t: "Seu lugar favorito na sua cidade", h: ["Qual é o seu lugar favorito?","Onde fica?","Por que você gosta?","Você vai lá com frequência?","Com quem você vai?"], level: "starter", theme: "local_places_services_A1" }
    ];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();