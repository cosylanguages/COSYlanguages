(function() {
    const data = {
      fluency: [
        { text: "La tua routine del mattino ☕", level: "starter" },
        { text: "Un ricordo d'infanzia 🧸", level: "starter" },
        { text: "La tua stagione preferita e perché 🍂", level: "starter" },
        { text: "Una capacità che vorresti avere 🎸", level: "elementary" },
        { text: "Il miglior pasto che tu abbia mai mangiato 🍜", level: "elementary" },
        { text: "Un luogo che desideri visitare 🗺️", level: "elementary" },
        { text: "La tua destinazione di vacanza ideale 🌴", level: "intermediate" },
        { text: "La persona più interessante che conosci 🙋", level: "intermediate" },
        { text: "Descrivi il tuo fine settimana perfetto ☀️", level: "intermediate" },
        { text: "Cosa faresti con 1 milione di euro? 💰", level: "upper_intermediate" },
        { text: "Un libro o un film che ha cambiato il tuo punto di vista 📚", level: "upper_intermediate" },
        { text: "Cosa significa la felicità per te? 😊", level: "advanced" }
      ],
      opinions: [
        { text: "I social media fanno più male che bene.", level: "intermediate" },
        { text: "Tutti dovrebbero imparare almeno due lingue.", level: "intermediate" },
        { text: "Il lavoro da casa è migliore del lavoro in ufficio.", level: "intermediate" },
        { text: "I soldi non comprano la felicità.", level: "intermediate" },
        { text: "La tecnologia ci rende meno sociabili.", level: "intermediate" },
        { text: "Il reddito di base universale è necessario per le economie future.", level: "upper_intermediate" },
        { text: "L'IA generativa non potrà mai sostituire la vera creatività artistica umana.", level: "advanced" }
      ],
      battle: [
        ["Montagna 🏔️", "Spiaggia 🏖️"],
        ["Caffè ☕", "Tè 🍵"],
        ["Mattiniero 🌅", "Nottambulo 🦉"],
        ["Vita in città 🏙️", "Vita in campagna 🌾"],
        ["Lettura 📚", "Guardare film 🎬"],
        ["Estate ☀️", "Inverno ❄️"]
      ],
      critic: [],
      action: {
        starter: ["Gatto", "Cane", "Casa", "Auto", "Libro", "Acqua", "Sole", "Luna", "Albero", "Telefono"],
        elementary: ["Cucina", "Giardino", "Treno", "Medico", "Insegnante", "Musica", "Compleanno"],
        intermediate: ["Museo", "Intervista", "Architetto", "Giornalista", "Parlamento", "Orchestra"],
        upper_intermediate: ["Filantropia", "Ambasciatore", "Ipotesi", "Imprenditore", "Archeologia"],
        advanced: ["Paradigma", "Accostamento", "Anacronismo", "Verosimiglianza"],
        proficiency: ["Ubiquità", "Effimero", "Perspicace", "Equanimità"]
      },
      identity: [
        { person: "Un vigile del fuoco", clue: "Indossa un elmetto e spegne gli incendi con l'acqua.", level: "elementary" },
        { person: "Uno chef", clue: "Lavora in cucina e prepara deliziosi piatti.", level: "elementary" },
        { person: "Un astronauta", clue: "Viaggia nello spazio oltre la Terra.", level: "intermediate" },
        { person: "Un bibliotecario", clue: "Gestisce una biblioteca e aiuta le persone a trovare i libri.", level: "elementary" },
        { person: "Un detective", clue: "Indaga sui misteri e cerca indizi.", level: "intermediate" },
        { person: "Un architetto", clue: "Progetta case ed edifici prima della loro costruzione.", level: "upper_intermediate" },
        { person: "Un diplomatico", clue: "Rappresenta il suo paese nelle relazioni internazionali ufficiali.", level: "advanced" }
      ],
      wordlinker: [
        { words: ["Mela", "Arancia", "Banana", "Carota"], odd: "Carota", link: "Frutta", oddReason: "La carota è una verdura" },
        { words: ["Parigi", "Roma", "Tokyo", "Amazzonia"], odd: "Amazzonia", link: "Capitali", oddReason: "L'Amazzonia è un fiume" },
        { words: ["Pianoforte", "Chitarra", "Violino", "Tromba"], odd: "none", link: "Strumenti musicali", oddReason: "Tutti sono strumenti musicali" }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['it'] = data;
})();
