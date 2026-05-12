(function() {
    const data = [
        { t: "La tua famiglia", h: ["Quante persone ci sono nella tua famiglia?","Hai fratelli o sorelle?","Dove vive la tua famiglia?","Con chi vivi?","Cosa fate insieme come famiglia?"], level: "starter", theme: "immediate_family_A1" },
        { t: "La tua casa", h: ["Quante stanze ha la tua casa?","Qual è la tua stanza preferita?","La tua casa è grande o piccola?","Cosa vedi dalla tua finestra?","Ti piace la tua casa?"], level: "starter", theme: "rooms_of_a_home_A1" },
        { t: "Il tuo cibo preferito", h: ["Qual è il tuo piatto preferito?","Ti piace il cibo dolce o salato?","Cucini a casa?","Quale cibo non ti piace?","Cosa mangi a colazione?"], level: "starter", theme: "basic_foods_A1" },
        { t: "La tua routine mattutina", h: ["A che ora ti svegli?","Qual è la prima cosa che fai?","Fai colazione?","Come vai al lavoro o a scuola?","La tua mattina è calma o impegnata?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Il tuo animale domestico o un animale che vorresti", h: ["Hai un animale domestico?","Quale animale ti piace?","Qual è un buon nome per un animale domestico?","Sei un tipo da cani o da gatti?","È facile avere un animale domestico?"], level: "starter", theme: "animals_A1" },
        { t: "Uno sport che ti piace", h: ["Quale sport ti piace?","Giochi o guardi?","Quando pratichi questo sport?","È uno sport di squadra o individuale?","Lo sport è importante per te?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "Cosa fai nei fine settimana", h: ["Cosa fai di solito il sabato?","Esci o stai a casa?","Vedi gli amici?","Cosa ti piace fare per rilassarti?","Il tuo fine settimana è impegnato o tranquillo?"], level: "starter", theme: "leisure_activities_A1" },
        { t: "La tua stagione preferita", h: ["Qual è la tua stagione preferita?","Com'è il tempo?","Cosa fa la gente in questa stagione?","Cosa indossi?","Perché ti piace questa stagione?"], level: "starter", theme: "seasons_climate_A1" },
        { t: "Il tuo migliore amico", h: ["Come si chiama il tuo migliore amico?","Dove vi siete conosciuti?","Cosa fate insieme?","Com'è fisicamente?","Perché è il tuo migliore amico?"], level: "starter", theme: "immediate_family_A1" },
        { t: "Il tuo lavoro o la tua scuola", h: ["Cosa fai — lavori o studi?","Cosa ti piace di questo?","A che ora inizi?","Con chi lavori o studi?","È facile o difficile?"], level: "starter", theme: "job_titles_professions_A1" },
        { t: "Cose che ti piacciono e che non ti piacciono", h: ["Qual è una cosa che ti piace molto?","Qual è una cosa che non ti piace?","Ti piace il tempo freddo?","Ti piace cucinare?","Ti piace svegliarti presto?"], level: "starter", theme: "basic_positive_emotions_A1" },
        { t: "Il tuo colore preferito e perché", h: ["Qual è il tuo colore preferito?","Dove vedi questo colore?","Indossi questo colore?","Questo colore è presente nella tua casa?","Anche ai tuoi amici piace questo colore?"], level: "starter", theme: "colours_patterns_A1" },
        { t: "Numeri nella tua vita", h: ["Quanti anni hai?","Qual è il tuo numero fortunato?","Quante persone vivono in casa tua?","A che ora ti svegli?","Quante lingue parli?"], level: "starter", theme: "numbers_0_9_A1" },
        { t: "La tua bevanda preferita", h: ["Cosa bevi al mattino?","Preferisci il tè o il caffè?","Bevi molta acqua?","Qual è una bevanda speciale nel tuo paese?","Cosa bevi quando sei felice?"], level: "starter", theme: "drinks_A1" },
        { t: "Il tuo paese", h: ["Qual è il tuo paese?","Qual è la capitale?","Com'è il tempo?","Quale cibo è famoso lì?","Cosa ami del tuo paese?"], level: "starter", theme: "countries_capitals_A1" },
        { t: "Cose nella tua camera da letto", h: ["Quali mobili ci sono nella tua camera da letto?","Di che colore è la tua camera da letto?","È grande o piccola?","Cosa c'è sulla tua scrivania o sul tavolo?","Ti piace la tua camera da letto?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "La tua giornata tipo", h: ["A che ora inizi la giornata?","Cosa fai al mattino?","Cosa mangi a pranzo?","Cosa fai la sera?","A che ora vai a dormire?"], level: "starter", theme: "daily_work_routines_A1" },
        { t: "Cose che vedi dalla tua finestra", h: ["Cosa c'è fuori dalla tua finestra?","Vedi alberi o edifici?","Cosa senti?","È una vista tranquilla o trafficata?","Ti piace questa vista?"], level: "starter", theme: "furniture_objects_A1" },
        { t: "Musica che ti piace", h: ["Che musica ascolti?","Chi è il tuo cantante preferito?","Quando ascolti la musica?","Sai cantare o suonare uno strumento?","Quale canzone ti rende felice?"], level: "starter", theme: "music_A1" },
        { t: "Il tuo posto preferito nella tua città", h: ["Qual è il tuo posto preferito?","Dove si trova?","Perché ti piace?","Ci vai spesso?","Con chi ci vai?"], level: "starter", theme: "local_places_services_A1" }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();