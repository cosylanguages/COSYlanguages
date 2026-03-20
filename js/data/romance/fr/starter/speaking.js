(function() {
    const speakingData = {
    "fr": {
        "opinionArena": [
            {
                "text": "Le petit-déjeuner est-il le repas le plus important ?",
                "level": "starter",
                "theme": "food_drink_A0"
            },
            {
                "text": "Les chiens sont-ils de meilleurs animaux de compagnie que les chats ?",
                "level": "starter",
                "theme": "leisure_A1"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "Café vs thé — quelle est la meilleure boisson du matin ?",
                "sideA": "Café",
                "sideB": "Thé",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?",
                "sideA": "Restaurant",
                "sideB": "Cuisine maison",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Aucun",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eau vs jus — qu'est-ce qui est plus sain ?",
                "sideA": "Eau",
                "sideB": "Jus",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Viande vs légumes — qu'est-ce qui est le plus important dans un repas ?",
                "sideA": "Viande",
                "sideB": "Légumes",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs appartement — où est-il préférable de vivre ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ville vs village — quel est le meilleur endroit pour vivre ?",
                "sideA": "Ville",
                "sideB": "Village",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Espèces vs carte — avec quoi est-il préférable de payer ?",
                "sideA": "Espèces",
                "sideB": "Carte",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Économiser de l'argent vs dépenser de l'argent — qu'est-ce qui est mieux ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Louer vs acheter — qu'est-ce qui est mieux ?",
                "sideA": "Louer",
                "sideB": "Acheter",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travail du matin vs travail du soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voiture vs bus — qu'est-ce qui est mieux pour aller au travail ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Marcher vs conduire — qu'est-ce qui est mieux en ville ?",
                "sideA": "Marcher",
                "sideB": "Conduire",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bureau vs maison — quel est le meilleur endroit pour travailler ?",
                "sideA": "Bureau",
                "sideB": "Maison",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?",
                "sideA": "Lève-tôt",
                "sideB": "Couche-tard",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Été vs hiver — quelle saison est la meilleure ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Appel téléphonique vs message — qu'est-ce qui est mieux ?",
                "sideA": "Appel",
                "sideB": "Message",
                "level": "starter",
                "theme": "technology_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est correct ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lundi vs vendredi — quel jour est le meilleur ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trop chaud vs trop froid — qu'est-ce qui est le pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux dans un avion ?",
                "sideA": "Hublot",
                "sideB": "Couloir",
                "level": "starter",
                "theme": "places_streets_locations_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rouge vs Bleu — quelle couleur est la meilleure ?",
                "sideA": "Rouge",
                "sideB": "Bleu",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jaune vs Vert — quelle couleur est la plus joyeuse ?",
                "sideA": "Jaune",
                "sideB": "Vert",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Noir vs Blanc — quelle couleur préférez-vous ?",
                "sideA": "Noir",
                "sideB": "Blanc",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Violet — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Violet",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cercle vs Carré — quelle forme est la plus utile ?",
                "sideA": "Cercle",
                "sideB": "Carré",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits nombres — lesquels sont les plus amusants ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Triangle vs Rectangle — quelle forme est la meilleure ?",
                "sideA": "Triangle",
                "sideB": "Rectangle",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ballon vs Poupée — quel jouet est le meilleur ?",
                "sideA": "Ballon",
                "sideB": "Poupée",
                "level": "starter",
                "theme": "leisure_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Crayon vs Stylo — avec quoi est-il préférable d'écrire ?",
                "sideA": "Crayon",
                "sideB": "Stylo",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre vs Image — d'où est-il préférable d'apprendre ?",
                "sideA": "Livre",
                "sideB": "Image",
                "level": "starter",
                "theme": "work_A1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs Sol — où est-il préférable de s'asseoir ?",
                "sideA": "Chaise",
                "sideB": "Sol",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chat vs Chien — quel animal est le meilleur ?",
                "sideA": "Chat",
                "sideB": "Chien",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Poisson vs Oiseau — quel est le meilleur animal de compagnie ?",
                "sideA": "Poisson",
                "sideB": "Oiseau",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grands vs Petits animaux — lesquels sont les plus gentils ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lapin vs Hamster — lequel est le plus mignon ?",
                "sideA": "Lapin",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Eau vs Jus — qu'est-il préférable de boire ?",
                "sideA": "Eau",
                "sideB": "Jus",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pomme vs Banane — quel fruit est le meilleur ?",
                "sideA": "Pomme",
                "sideB": "Banane",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pain vs Riz — qu'est-il préférable de manger ?",
                "sideA": "Pain",
                "sideB": "Riz",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lait vs Eau — lequel préférez-vous ?",
                "sideA": "Lait",
                "sideB": "Eau",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rose vs Orange — quelle couleur est la plus jolie ?",
                "sideA": "Rose",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colours_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le chiffre 1 vs le chiffre 10 — quel chiffre est le meilleur ?",
                "sideA": "1",
                "sideB": "10",
                "level": "starter",
                "theme": "numbers_1_20_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaise vs canapé — lequel est le plus confortable ?",
                "sideA": "Chaise",
                "sideB": "Canapé",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sac vs boîte — lequel est le plus utile ?",
                "sideA": "Sac",
                "sideB": "Boîte",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lion vs éléphant — quel animal est le meilleur ?",
                "sideA": "Lion",
                "sideB": "Éléphant",
                "level": "starter",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chocolat vs bonbons — lequel est le meilleur ?",
                "sideA": "Chocolat",
                "sideB": "Bonbons",
                "level": "starter",
                "theme": "food_drink_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuillère vs fourchette — laquelle est la meilleure ?",
                "sideA": "Cuillère",
                "sideB": "Fourchette",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chapeau vs chaussures — lequel est le plus important ?",
                "sideA": "Chapeau",
                "sideB": "Chaussures",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Soleil vs lune — lequel est le meilleur ?",
                "sideA": "Soleil",
                "sideB": "Lune",
                "level": "starter",
                "theme": "weather_A0",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaussettes vs pas de chaussettes — qu'est-ce qui est le mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans chaussettes",
                "level": "starter",
                "theme": "home_A0",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Mon souvenir d'enfance préféré",
                "level": "starter",
                "theme": "immediate_family_A0"
            },
            {
                "topic": "Le métier de mes rêves et pourquoi",
                "level": "starter",
                "theme": "work_A1"
            }
        ]
    }
};

    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData["fr"]) window.speakingData["fr"] = {};

    for (const cat in speakingData["fr"]) {
        if (!window.speakingData["fr"][cat]) window.speakingData["fr"][cat] = [];
        window.speakingData["fr"][cat].push(...speakingData["fr"][cat]);
    }
})();
