(function() {
    const data = [
        { t: "Una persona che mi ha ispirato", h: ["Chi è questa persona?","Cosa ha fatto?","Come ha cambiato la tua prospettiva?","Segui ancora il suo lavoro o la sua vita?","Ti piacerebbe incontrarla?"] },
        { t: "L'importanza della consapevolezza sulla salute mentale", h: ["Perché è importante parlare di salute mentale?","È diventata più accettata recentemente?","Come possiamo sostenere gli altri?","Quali sono alcuni malintesi comuni?","Come ti prendi cura della tua salute mentale?"] },
        { t: "Un luogo che ti fa sentire a casa", h: ["È una città, una casa, un paese?","Quando l'hai provato per la prima volta?","Cosa lo fa sentire come casa?","La casa è un luogo o una sensazione?","Pensi di poter avere più di una casa?"] },
        { t: "Qualcosa su cui hai cambiato idea", h: ["Cosa pensavi prima?","Cosa è cambiato?","Quando è successo?","È stato un cambiamento graduale o improvviso?","Come ti senti al riguardo ora?"] },
        { t: "Cosa rende un amico un buon amico", h: ["Quali qualità contano di più in un'amicizia?","I tuoi amici più cari sono simili a te o diversi?","Le amicizie possono cambiare invecchiando?","Cosa non tollereresti in un amico?","È facile farsi veri amici da adulti?"] },
        { t: "Qualcosa che avresti voluto imparare prima", h: ["Di cosa si tratta?","Perché non l'hai imparato prima?","Come sarebbe diversa la tua vita?","È troppo tardi per impararlo ora?","Lo insegneresti a qualcuno più giovane?"] },
        { t: "Una abilità che stai cercando di migliorare", h: ["Qual è l'abilità?","Perché hai deciso di lavorarci su?","Come ti eserciti?","Qual è la parte più difficile?","Quanti progressi hai fatto?"] },
        { t: "Cosa ti manca dell'essere bambino", h: ["Cosa ti manca sinceramente?","Pensi che l'infanzia fosse più facile?","Cosa preoccupava i bambini che gli adulti non considerano?","Cosa facevano gli adulti che allora non capivi ma ora sì?","Torneresti indietro se potessi?"] },
        { t: "La tua giornata lavorativa ideale", h: ["A che ora inizieresti e finiresti?","Dove lavoreresti?","Con chi lavoreresti?","Cosa faresti?","Quanto è diversa dalla tua reale giornata lavorativa?"] },
        { t: "Come è cambiata la tua vita negli ultimi anni", h: ["Qual è il cambiamento più grande?","È stata una tua scelta?","È stato in meglio?","Cosa è rimasto uguale?","Cosa pensi cambierà in seguito?"] },
        { t: "Cosa ti fa sentire più vivo", h: ["C'è un momento o un'attività che ti dà sempre energia?","Coinvolge altre persone o la solitudine?","Quanto spesso ti senti così?","Questo è cambiato nel tempo?","Cosa ti impedisce di farlo più spesso?"] },
        { t: "La tua più grande distrazione", h: ["Cosa attira più facilmente la tua attenzione?","Ti costa tempo o energia?","Hai provato a cambiare questo aspetto?","È del tutto negativo o c'è qualcosa di buono?","Cosa faresti con il tempo risparmiato se eliminassi questa distrazione?"] },
        { t: "Un libro, un film o una serie che ti è rimasta impressa", h: ["Come si chiamava?","Di cosa parlava?","Perché ti è rimasta impressa?","Ha cambiato il tuo modo di pensare a qualcosa?","Lo consiglieresti e a chi?"] },
        { t: "Cosa significa \"casa\" per te", h: ["La casa è una persona, un luogo o una sensazione?","Dove ti senti più a casa?","La tua idea di casa è cambiata crescendo?","Puoi sentirti a casa in un posto nuovo?","La casa è un posto dove torni o un posto che porti con te?"] },
        { t: "Qualcosa che fai diversamente dalla maggior parte delle persone", h: ["Di cosa si tratta?","Quando hai iniziato a farlo in questo modo?","Qualcuno ti ha mai fatto domande al riguardo?","Rende la tua vita migliore?","Pensi che tutti dovrebbero farlo a modo tuo?"] },
        { t: "Un'abitudine di cui sei orgoglioso", h: ["Qual è l'abitudine?","Da quanto tempo ce l'hai?","Come l'hai costruita?","Che differenza fa?","Qualcuno ti ha ispirato?"] },
        { t: "Un viaggio che ti ha sorpreso", h: ["Dove stavi andando?","Cosa ti ha sorpreso?","È stato il posto, le persone o quello che è successo?","Ha cambiato i tuoi piani?","Ci torneresti?"] },
        { t: "Il tuo rapporto con i social media", h: ["Quali piattaforme usi?","Quanto tempo ci passi sopra?","Infuenzano il tuo umore?","Ti sei mai preso una pausa?","Come sarebbe la tua vita senza di essi?"] },
        { t: "Cos'è per te il successo", h: ["Come definisci il successo?","Si tratta di soldi, felicità, relazioni?","La tua definizione è cambiata nel tempo?","Ti consideri una persona di successo?","L'opinione degli altri sul tuo successo conta per te?"] },
        { t: "Il tuo rapporto con il cibo", h: ["Cucini spesso?","Il cibo è solo carburante o qualcosa di più?","Mangi con gli altri o da solo?","C'è un cibo fortemente legato a un ricordo?","Il tuo rapporto con il cibo è cambiato?"] },
        { t: "Qualcosa che ti fa sempre ridere", h: ["Di cosa si tratta?","Perché pensi che ti faccia ridere?","Riesci a ridere delle cose difficili?","Tu e i tuoi amici ridete per le stesse cose?","Il tuo senso dell'umorismo è diverso in lingue diverse?"] },
        { t: "Un consiglio che daresti a te stesso da giovane", h: ["Quanti anni avrebbe il tuo io più giovane?","Quale sarebbe il consiglio?","Perché non lo sapevi allora?","Pensi che avresti ascoltato?","Chi ti ha dato il miglior consiglio della tua vita?"] }
    ];
    const lang = "it";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["talkThatTalk"]) window.speakingData[lang]["talkThatTalk"] = [];
    window.speakingData[lang]["talkThatTalk"].push(...data);
})();