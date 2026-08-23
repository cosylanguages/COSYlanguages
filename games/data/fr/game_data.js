(function() {
    const data = {
      fluency: [
        "Votre destination de vacances idéale 🌴",
        "Une compétence que vous aimeriez avoir 🎸",
        "Le meilleur repas que vous ayez jamais mangé 🍜",
        "Un endroit que vous souhaitez visiter 🗺️",
        "Votre saison préférée et pourquoi 🍂",
        "Un souvenir d'enfance 🧸",
        "La personne la plus intéressante que vous connaissez 🙋",
        "Que feriez-vous avec 1 million d'euros ? 💰",
        "Décrivez votre week-end parfait ☀️",
        "Un livre ou un film qui a changé votre vision 📚",
        "Si vous pouviez vivre n'importe où dans le monde… 🌍",
        "Votre routine du matin ☕",
        "Quelque chose dont vous êtes fier 🏆",
        "Que signifie le bonheur pour vous ? 😊",
        "La dernière fois que vous avez essayé quelque chose de nouveau 🎯"
      ],
      opinions: [
        { text: "Les réseaux sociaux font plus de mal que de bien.", level: "intermediate" },
        { text: "Tout le monde devrait apprendre au moins deux langues.", level: "intermediate" },
        { text: "Le télétravail est meilleur que le travail au bureau.", level: "intermediate" },
        { text: "L'argent ne fait pas le bonheur.", level: "intermediate" },
        { text: "La technologie nous rend moins sociables.", level: "intermediate" },
        { text: "Il n'est jamais trop tard pour apprendre quelque chose de nouveau.", level: "intermediate" },
        { text: "Les voyages sont la meilleure forme d'éducation.", level: "intermediate" },
        { text: "Les animaux ne devraient pas être gardés dans des zoos.", level: "intermediate" },
        { text: "La restauration rapide est l'une des pires inventions.", level: "intermediate" },
        { text: "Lire des livres a plus de valeur que regarder des films.", level: "intermediate" }
      ],
      battle: [
        ["Montagnes 🏔️", "Plage 🏖️"],
        ["Café ☕", "Thé 🍵"],
        ["Lève-tôt 🌅", "Couche-tard 🦉"],
        ["Vie en ville 🏙️", "Vie à la campagne 🌾"],
        ["Lecture 📚", "Regarder des films 🎬"],
        ["Été ☀️", "Hiver ❄️"],
        ["Chats 🐱", "Chiens 🐶"],
        ["Télétravail 🏠", "Travail au bureau 🏢"],
        ["Sucré 🍰", "Salé 🧀"],
        ["Voyager seul ✈️", "Voyager entre amis 👥"]
      ],
      critic: [],
      action: {
        starter: ["Chat", "Chien", "Maison", "Voiture", "Livre", "Eau", "Soleil", "Lune", "Arbre", "Téléphone"],
        elementary: ["Cuisine", "Jardin", "Train", "Médecin", "Professeur", "Musique", "Anniversaire", "Natation"],
        intermediate: ["Musée", "Entretien", "Architecte", "Journaliste", "Parlement", "Orchestre", "Marathon"],
        upper_intermediate: ["Philanthropie", "Ambassadeur", "Hypothèse", "Entrepreneur", "Archéologie", "Télescope"],
        advanced: ["Paradigme", "Juxtaposition", "Anachronisme", "Vraisemblance", "Magnanime"],
        proficiency: ["Ubiquité", "Éphémère", "Pugnace", "Perspicace", "Sycophante", "Équanamité"]
      },
      identity: [
        { person: "Un pompier", clue: "Il porte un casque et éteint les incendies avec de l'eau.", level: "elementary" },
        { person: "Un chef cuisinier", clue: "Il travaille dans une cuisine et prépare des plats.", level: "elementary" },
        { person: "Un astronaute", clue: "Il voyage au-delà de notre planète.", level: "intermediate" },
        { person: "Un bibliothécaire", clue: "Il est entouré de livres toute la journée.", level: "elementary" },
        { person: "Un détective", clue: "Il résout des mystères et cherche des indices.", level: "intermediate" }
      ],
      wordlinker: [
        { words: ["Pomme", "Orange", "Banane", "Carotte"], odd: "Carotte", link: "Fruits", oddReason: "La carotte est un légume" },
        { words: ["Paris", "Rome", "Tokyo", "Amazone"], odd: "Amazone", link: "Capitales", oddReason: "L'Amazone est un fleuve, pas une ville" },
        { words: ["Piano", "Guitare", "Violon", "Trompette"], odd: "none", link: "Instruments de musique", oddReason: "Tous sont des instruments" },
        { words: ["Heureux", "Joyeux", "Mélancolique", "Chaleureux"], odd: "Mélancolique", link: "Adjectifs positifs", oddReason: "Mélancolique signifie triste" }
      ],
      etymology: [],
      storychain: []
    };

    window.gameData = window.gameData || {};
    window.gameData['fr'] = data;
})();
