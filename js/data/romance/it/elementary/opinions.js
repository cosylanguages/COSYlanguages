(function() {
    const data = [
      { t:"I fine settimana sono troppo brevi.", tag:"Daily life", h:["Cosa fai nel fine settimana?","Come ti senti la domenica sera?","Cosa faresti con un fine settimana di tre giorni?","Lavori o studi nei fine settimana?","Qual è il fine settimana perfetto per te?"] },
      { t:"È maleducato essere in ritardo.", tag:"Social life", h:["Di solito sei puntuale?","Quanto aspetti un amico?","Va bene arrivare con 10 minuti di ritardo?","La puntualità è importante nella tua cultura?","Cosa fai quando qualcuno è molto in ritardo?"] },
      { t:"Le persone sono più gentili nelle piccole città.", tag:"Society", h:["Dove vivi: in un paese o in una città?","I tuoi vicini sono amichevoli?","Le persone parlano con gli sconosciuti dove vivi?","Hai mai vissuto in un tipo di posto diverso?","Cosa rende un posto amichevole?"] },
      { t:"Avere un animale domestico ti rende più felice.", tag:"Lifestyle", h:["Hai un animale domestico?","Qual è il miglior animale domestico per una persona impegnata?","Gli animali domestici sono costosi?","Un animale domestico può essere un amico?","Cosa devi fare per prenderti cura di un animale domestico?"] },
      { t:"Si può dire molto su qualcuno dalle sue scarpe.", tag:"People", h:["Guardi le scarpe delle persone?","Cosa dicono le tue scarpe di te?","La moda è importante per te?","Puoi giudicare una persona dal suo aspetto?","Cos'altro ti dice del carattere di una persona?"] },
      { t:"Va bene mangiare da soli in un ristorante.", tag:"Social life", h:["Hai mai mangiato da solo in un ristorante?","Lo trovi comodo?","Il cibo è migliore con altre persone?","Vedi molte persone mangiare da sole?","Cosa fai quando mangi da solo?"] },
      { t:"Imparare una lingua è più facile quando si è giovani.", tag:"Language", h:["Quanti anni avevi quando hai iniziato a imparare questa lingua?","Pensi che l'età sia importante per l'apprendimento delle lingue?","Qual è la parte più difficile dell'apprendimento di una lingua?","Conosci qualcuno che ha imparato una lingua da adulto?","Cosa ti aiuta di più quando studi?"] },
      { t:"I trasporti pubblici sono meglio che avere un'auto.", tag:"Lifestyle", h:["Come ti sposti nella tua città?","I trasporti pubblici sono buoni dove vivi?","Quali sono i problemi di avere un'auto?","È costoso viaggiare con i trasporti pubblici?","Cosa cambieresti dei trasporti nella tua città?"] },
      { t:"È difficile annoiarsi quando si ha un telefono.", tag:"Technology", h:["Quante ore al giorno usi il telefono?","Per cosa lo usi di più?","Ti annoiavi prima degli smartphone?","La noia a volte fa bene?","Potresti lasciare il telefono a casa per un giorno?"] },
      { t:"Cucinare a casa è sempre meglio che mangiare fuori.", tag:"Food", h:["Quanto spesso cucini a casa?","Cosa è più facile: cucinare o andare al ristorante?","Mangiare fuori è costoso dove vivi?","Qual è il tuo ristorante preferito?","Qual è il tuo miglior pasto cucinato in casa?"] },
      { t:"Tutti dovrebbero provare a vivere all'estero per un anno.", tag:"Travel", h:["Hai vissuto in un altro paese?","Cosa ci sarebbe di difficile nel vivere all'estero?","Cosa ci sarebbe di eccitante?","Quale paese sceglieresti?","Vivere all'estero cambia una persona?"] },
      { t:"I supereroi sono più interessanti dei veri eroi.", tag:"Entertainment", h:["Chi è il tuo supereroe preferito?","Ti viene in mente un eroe della vita reale?","Cosa rende qualcuno un eroe?","Perché le persone amano i supereroi?","I veri eroi sono più importanti?"] },
      { t:"È importante rifare il letto ogni mattina.", tag:"Daily life", h:["Rifai il letto ogni giorno?","Una stanza ordinata ti fa sentire meglio?","È importante o non importante?","Qual è la tua routine mattutina?","Quali piccole abitudini hai?"] },
      { t:"Fare shopping è un hobby.", tag:"Free time", h:["Ti piace fare shopping?","Fai acquisti online o nei negozi?","Quanto tempo passi a fare shopping?","Fare shopping è rilassante?","Cosa compri più spesso?"] },
      { t:"Viaggiare da soli è meglio che viaggiare con gli amici.", tag:"Travel", h:["Hai viaggiato da solo?","Cosa c'è di bello nel viaggiare da soli?","Cosa c'è di bello nel viaggiare con gli altri?","Ti senti solo quando viaggi da solo?","Qual è il miglior viaggio che hai fatto?"] }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();