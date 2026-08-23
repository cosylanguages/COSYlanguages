(function() {
    const data = {
      fluency: [
        "La tua destinazione di vacanza ideale 🌴",
        "Una capacità che vorresti avere 🎸",
        "Il miglior pasto che tu abbia mai mangiato 🍜",
        "Un luogo che desideri visitare 🗺️",
        "La tua stagione preferita e perché 🍂",
        "Un ricordo d'infanzia 🧸",
        "La persona più interessante che conosci 🙋",
        "Cosa faresti con 1 milione di euro? 💰",
        "Descrivi il tuo fine settimana perfetto ☀️",
        "Un libro o un film che ha cambiato il tuo punto di vista 📚"
      ],
      opinions: [
        { text: "I social media fanno più male che bene.", level: "intermediate" },
        { text: "Tutti dovrebbero imparare almeno due lingue.", level: "intermediate" },
        { text: "Il lavoro da casa è migliore del lavoro in ufficio.", level: "intermediate" },
        { text: "I soldi non comprano la felicità.", level: "intermediate" },
        { text: "La tecnologia ci rende meno sociabili.", level: "intermediate" }
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
        { person: "Uno chef", clue: "Lavora in cucina e prepara i piatti.", level: "elementary" },
        { person: "Un astronauta", clue: "Viaggia oltre il nostro pianeta.", level: "intermediate" }
      ],
      wordlinker: [
        { words: ["Mela", "Arancia", "Banana", "Carota"], odd: "Carota", link: "Frutta", oddReason: "La carota è una verdura" },
        { words: ["Parigi", "Roma", "Tokyo", "Amazzonia"], odd: "Amazzonia", link: "Capitali", oddReason: "L'Amazzonia è un fiume" }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['it'] = data;
})();
