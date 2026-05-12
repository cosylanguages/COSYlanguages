(function() {
    const data = [
        { t: "Una vacanza che ricordi", h: ["Dove sei andato?","Con chi sei andato?","Cosa hai fatto lì?","Com'era il tempo?","Qual è stato il momento migliore?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Il tuo ristorante o bar preferito", h: ["Dove si trova?","Che cibo servono?","Perché ti piace?","Con chi ci vai?","Quando è stata l'ultima volta che ci sei andato?"], level: "elementary", theme: "restaurants_ordering_A2" },
        { t: "Come vai al lavoro o a scuola", h: ["Come viaggi — autobus, macchina, bici?","Quanto tempo ci vuole?","Ti piace il viaggio?","È costoso?","Cosa fai durante il tragitto?"], level: "elementary", theme: "transport_travel_A2" },
        { t: "Cosa fai per rilassarti", h: ["Cosa ti aiuta a rilassarti?","Preferisci stare da solo o con altre persone?","Quanto spesso ti rilassi davvero?","Hai un posto preferito per rilassarti?","È facile rilassarsi o lo trovi difficile?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Un film che hai guardato di recente", h: ["Come si chiamava il film?","Di cosa parlava?","Ti è piaciuto?","Chi c'era nel cast?","Lo consiglieresti?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Il tuo fine settimana ideale", h: ["Cosa faresti il venerdì sera?","Usciresti o resteresti a casa?","Viaggeresti da qualche parte?","Con chi passeresti il tempo?","Cosa mangeresti?"], level: "elementary", theme: "leisure_hobbies_A2" },
        { t: "Una persona che ammiri", h: ["Chi è questa persona?","Cosa fa?","Perché la ammiri?","L'hai mai incontrata?","Cosa puoi imparare da lei?"], level: "elementary", theme: "personality_character_A2" },
        { t: "La meta delle tue vacanze da sogno", h: ["Dove andresti?","Perché questo posto?","Con chi andresti?","Cosa faresti lì?","Quanto tempo rimarresti?"], level: "elementary", theme: "booking_planning_a_trip_A2" },
        { t: "Il tuo rapporto con il telefono", h: ["Quante ore al giorno usi il telefono?","Per cosa lo usi di più?","Potresti vivere senza per una settimana?","Ti aiuta o ti distrae?","Lo controlli come prima cosa al mattino?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Qualcosa di divertente che ti è successo", h: ["Quando è successo?","Dove eri?","Con chi eri?","Cosa è successo esattamente?","Ci ridi ancora adesso?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "I tuoi hobby", h: ["Cosa fai nel tuo tempo libero?","Quando hai iniziato questo hobby?","Lo fai da solo o con altri?","È costoso?","Cosa ami di questo hobby?"], level: "elementary", theme: "interests_hobbies_A2" },
        { t: "Il tempo dove vivi", h: ["Com'è di solito il tempo?","Qual è il tuo tipo di tempo preferito?","Il tempo influenza il tuo umore?","Qual è il tempo peggiore che ricordi?","Cosa fai nei giorni di pioggia?"], level: "elementary", theme: "weather_climate_A2" },
        { t: "Un compleanno che ricordi", h: ["Di chi era il compleanno?","Dove si è svolta la festa?","Cosa avete fatto?","C'è stata una sorpresa?","Cosa l'ha reso speciale?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Cose che ami di dove vivi", h: ["Qual è la cosa che preferisci della tua città?","È un buon posto per le famiglie?","Cosa c'è da fare?","Cosa cambieresti?","La consiglieresti a un amico?"], level: "elementary", theme: "neighbourhood_local_A2" },
        { t: "Una domenica tipica", h: ["A che ora ti svegli la domenica?","Hai una routine?","Cucini un pasto abbondante?","Ti riposi o resti impegnato?","La domenica è il tuo giorno preferito?"], level: "elementary", theme: "daily_work_routines_A2" },
        { t: "Cibo del tuo paese", h: ["Qual è un piatto tradizionale?","Lo cucini a casa?","Quando lo mangia la gente?","È difficile da preparare?","Lo consiglieresti a uno straniero?"], level: "elementary", theme: "customs_traditions_A2" },
        { t: "Qualcosa che hai comprato di recente", h: ["Cosa hai comprato?","Dove l'hai comprato?","Era costoso?","Ne avevi bisogno o lo volevi e basta?","Sei felice dell'acquisto?"], level: "elementary", theme: "shopping_consumerism_A2" },
        { t: "La tua app preferita", h: ["Quale app usi di più?","Per cosa la usi?","Quando hai iniziato a usarla?","La consiglieresti?","Potresti vivere senza?"], level: "elementary", theme: "internet_social_media_A2" },
        { t: "Un ricordo d'infanzia", h: ["Quanti anni avevi?","Dove eri?","Con chi eri?","Cosa è successo?","Perché lo ricordi?"], level: "elementary", theme: "social_emotions_A2" },
        { t: "Cosa hai mangiato ieri", h: ["Cosa hai mangiato a colazione?","Cosa hai mangiato a pranzo?","Hai cucinato o mangiato fuori?","È stata una giornata tipica dal punto di vista alimentare?","Qual è stata la cosa migliore che hai mangiato?"], level: "elementary", theme: "diet_nutrition_A2" }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();