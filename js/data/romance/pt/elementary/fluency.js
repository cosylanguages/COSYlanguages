(function() {
    const data = [
        { t: "Umas férias de que você se lembra", h: ["Para onde você foi?","Com quem você foi?","O que você fez lá?","Como estava o tempo?","Qual foi o melhor momento?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Seu restaurante ou café favorito", h: ["Onde fica?","Que comida eles servem?","Por que você gosta?","Com quem você vai?","Quando foi a última vez que você foi?"], level: "elementary", theme: "restaurants_ordering_A2" },
        { t: "Como você vai para o trabalho ou escola", h: ["Como você viaja — ônibus, carro, bicicleta?","Quanto tempo leva?","Você gosta do trajeto?","É caro?","O que você faz no caminho?"], level: "elementary", theme: "transport_travel_A2" },
        { t: "O que você faz para relaxar", h: ["O que ajuda você a relaxar?","Você prefere estar sozinho ou com pessoas?","Com que frequência você relaxa de verdade?","Você tem um lugar favorito para relaxar?","É fácil relaxar ou você acha difícil?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Um filme que você assistiu recentemente", h: ["Como se chamava o filme?","Sobre o que era?","Você gostou?","Quem estava no elenco?","Você o recomendaria?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Seu fim de semana ideal", h: ["O que você faria na sexta-feira à noite?","Você sairia ou ficaria em casa?","Você viajaria para algum lugar?","Com quem você passaria o tempo?","O que você comeria?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Uma pessoa que você admira", h: ["Quem é essa pessoa?","O que ela faz?","Por que você a admira?","Você já a conheceu?","O que você pode aprender com ela?"], level: "elementary", theme: "personality_character_A2" },
        { t: "O destino das suas férias dos sonhos", h: ["Para onde você iria?","Por que este lugar?","Com quem você iria?","O que você faria lá?","Quanto tempo você ficaria?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Sua relação com seu telefone", h: ["Quantas horas por dia você usa seu telefone?","Para que você o usa mais?","Você conseguiria viver sem ele por uma semana?","Ele ajuda você ou distrai?","Você o checa logo de manhã?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Algo engraçado que aconteceu com você", h: ["Quando isso aconteceu?","Onde você estava?","Com quem você estava?","O que exatamente aconteceu?","Você ainda ri disso agora?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "Seus hobbies", h: ["O que você faz no seu tempo livre?","Quando você começou este hobby?","Você o faz sozinho ou com outros?","É caro?","O que você ama nele?"], level: "elementary", theme: "interests_hobbies_A2" },
        { t: "O tempo onde você mora", h: ["Como é o tempo geralmente?","Qual é o seu tipo de tempo favorito?","O tempo afeta seu humor?","Qual é o pior tempo de que você se lembra?","O que você faz em dias de chuva?"], level: "elementary", theme: "weather_climate_A2" },
        { t: "Um aniversário de que você se lembra", h: ["De quem era o aniversário?","Onde foi a celebração?","O que vocês fizeram?","Houve alguma surpresa?","O que o tornou especial?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Coisas que você ama onde mora", h: ["Qual é a sua coisa favorita na sua cidade?","É um bom lugar para famílias?","O que há para fazer lá?","O que você mudaria?","Você a recomendaria a um amigo?"], level: "elementary", theme: "neighbourhood_local_A2" },
        { t: "Um domingo típico", h: ["A que horas você acorda no domingo?","Você tem uma rotina?","Você cozinha uma refeição grande?","Você descansa ou fica ocupado?","O domingo é seu dia favorito?"], level: "elementary", theme: "daily_work_routines_A2" },
        { t: "Comida do seu país", h: ["Qual é um prato tradicional?","Você o cozinha em casa?","Quando as pessoas o comem?","É difícil de fazer?","Você o recomendaria a um estrangeiro?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Algo que você comprou recentemente", h: ["O que você comprou?","Onde você comprou?","Foi caro?","Você precisava ou apenas queria?","Você está feliz com a compra?"], level: "elementary", theme: "shopping_consumerism_A2" },
        { t: "Seu aplicativo favorito", h: ["Qual aplicativo você mais usa?","Para que você o usa?","Quando começou a usá-lo?","Você o recomendaria?","Conseguiria viver sem ele?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Uma lembrança de infância", h: ["Quantos anos você tinha?","Onde você estava?","Com quem você estava?","O que aconteceu?","Por que você se lembra disso?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "O que você comeu ontem", h: ["O que você comeu no café da manhã?","O que você comeu no almoço?","Você cozinhou ou comeu fora?","Foi um dia típico de alimentação?","Qual foi a melhor coisa que você comeu?"], level: "elementary", theme: "diet_nutrition_A2" }
    ];
    const lang = "pt";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();