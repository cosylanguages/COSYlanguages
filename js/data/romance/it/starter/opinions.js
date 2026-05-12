(function() {
    const data = [
      { t:"I gatti sono meglio dei cani.", tag:"Pets", h:["Hai un gatto o un cane?","Cosa ti piace dei gatti? Cosa ti piace dei cani?","I gatti sono facili o difficili?","Qual è un buon nome per un animale domestico?","I tuoi amici hanno animali domestici?"] },
      { t:"La mattina è il momento migliore della giornata.", tag:"Daily life", h:["A che ora ti svegli?","Cosa fai la mattina?","Ti senti bene la mattina?","La sera è meglio per te?","Cosa mangi la mattina?"] },
      { t:"Il tè è meglio del caffè.", tag:"Drinks", h:["Bevi tè o caffè?","Quante tazze bevi ogni giorno?","Bevi bevande calde o fredde?","Cosa bevi la mattina?","Qual è una bevanda popolare nel tuo paese?"] },
      { t:"Cucinare è divertente.", tag:"Food", h:["Cucini a casa?","Cosa cucini?","È facile o difficile?","Chi cucina nella tua famiglia?","Qual è la tua cosa preferita da preparare?"] },
      { t:"Il freddo è piacevole.", tag:"Weather", h:["Com'è il tempo oggi?","Ti piace la pioggia o il sole?","Cosa indossi quando fa freddo?","Cosa fai quando fa freddo?","Qual è la tua stagione preferita?"] },
      { t:"Il lunedì è un brutto giorno.", tag:"Daily life", h:["Cosa fai il lunedì?","Qual è il tuo giorno della settimana preferito?","Il fine settimana è troppo corto?","Cosa fai il venerdì?","Ti piace la tua routine settimanale?"] },
      { t:"Il cioccolato è molto buono.", tag:"Food", h:["Ti piace il cioccolato?","Qual è il tuo dolce preferito?","Mangi molto cioccolato?","Il cioccolato è salutare?","Cosa mangi quando sei felice?"] },
      { t:"Le piccole città sono meglio delle grandi città.", tag:"Places", h:["Vivi in un paese o in una città?","Cosa c'è di bello in una piccola città?","Cosa c'è di bello in una grande città?","La tua città è rumorosa?","Dove vuoi vivere in futuro?"] },
      { t:"È bene avere molti amici.", tag:"People", h:["Quanti amici hai?","Cosa fai con i tuoi amici?","Un buon amico è meglio di molti amici?","Dove incontri i tuoi amici?","Cos'è un buon amico?"] },
      { t:"Dormire è la migliore attività.", tag:"Daily life", h:["Quante ore dormi?","Dormi bene?","A che ora vai a letto?","Dormi nel pomeriggio?","Dormire è la tua cosa preferita?"] },
      { t:"La musica è meglio della TV.", tag:"Free time", h:["Ascolti musica ogni giorno?","Che musica ti piace?","Quante ore di TV guardi?","Qual è il tuo programma preferito?","Cosa fai la sera?"] },
      { t:"È importante fare colazione.", tag:"Food", h:["Fai colazione ogni giorno?","Cosa mangi la mattina?","La colazione è un pasto abbondante per te?","Fai colazione a casa?","Qual è una colazione tipica nel tuo paese?"] },
      { t:"Nuotare è divertente.", tag:"Sport", h:["Sai nuotare?","Ti piace l'acqua?","Dove nuoti: in piscina o al mare?","Quale sport ti piace?","Lo sport è importante per te?"] },
      { t:"I vecchi film sono noiosi.", tag:"Entertainment", h:["Che film ti piacciono?","Guardi film vecchi o nuovi?","Chi è il tuo attore preferito?","Cos'è un buon film?","Dove guardi i film?"] },
      { t:"L'ananas sulla pizza è un'ottima idea.", tag:"Food", h:["Ti piace la pizza?","Qual è il tuo condimento preferito?","Metti la frutta sui cibi salati?","È popolare nel tuo paese?","Qual è il peggior condimento per pizza per te?"] }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["opinions"]) window.speakingData[lang]["opinions"] = [];
    window.speakingData[lang]["opinions"].push(...data);
})();