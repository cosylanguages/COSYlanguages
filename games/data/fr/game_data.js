(function() {
    const data = {
      fluency: [
        { text: "Votre routine du matin ☕", level: "starter" },
        { text: "Un souvenir d'enfance 🧸", level: "starter" },
        { text: "Votre saison préférée et pourquoi 🍂", level: "starter" },
        { text: "Une compétence que vous aimeriez avoir 🎸", level: "elementary" },
        { text: "Le meilleur repas que vous ayez jamais mangé 🍜", level: "elementary" },
        { text: "Un endroit que vous souhaitez visiter 🗺️", level: "elementary" },
        { text: "Votre destination de vacances idéale 🌴", level: "intermediate" },
        { text: "La personne la plus intéressante que vous connaissez 🙋", level: "intermediate" },
        { text: "Décrivez votre week-end parfait ☀️", level: "intermediate" },
        { text: "La dernière fois que vous avez essayé quelque chose de nouveau 🎯", level: "intermediate" },
        { text: "Que feriez-vous avec 1 million d'euros ? 💰", level: "upper_intermediate" },
        { text: "Un livre ou un film qui a changé votre vision 📚", level: "upper_intermediate" },
        { text: "Si vous pouviez vivre n'importe où dans le monde… 🌍", level: "upper_intermediate" },
        { text: "Quelque chose dont vous êtes fier 🏆", level: "upper_intermediate" },
        { text: "Que signifie le bonheur pour vous ? 😊", level: "advanced" }
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
        { text: "Lire des livres a plus de valeur que regarder des films.", level: "intermediate" },
        { text: "Le revenu de base universel est nécessaire pour l'économie de demain.", level: "upper_intermediate" },
        { text: "L'intelligence artificielle générative ne pourra jamais remplacer la créativité humaine.", level: "advanced" }
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
        { person: "Un chef cuisinier", clue: "Il travaille dans une cuisine et prépare de délicieux repas.", level: "elementary" },
        { person: "Un astronaute", clue: "Il voyage dans l'espace au-delà de la Terre.", level: "intermediate" },
        { person: "Un bibliothécaire", clue: "Il gère une bibliothèque et aide les gens à trouver des livres.", level: "elementary" },
        { person: "Un détective", clue: "Il mène des enquêtes et cherche des indices.", level: "intermediate" },
        { person: "Un architecte", clue: "Il conçoit des maisons et des bâtiments avant leur construction.", level: "upper_intermediate" },
        { person: "Un diplomate", clue: "Il représente son pays lors des relations internationales officielles.", level: "advanced" }
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
