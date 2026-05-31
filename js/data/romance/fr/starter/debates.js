(function() {
    const data = [
    {
        "id": "fr_starter_food_drink_001",
        "word": "Café vs Thé — quelle est la meilleure boisson du matin ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Café vs Thé — quelle est la meilleure boisson du matin ?",
                "examples": []
            }
        ],
        "sideA": "Café",
        "sideB": "Thé",
        "ideasA": [
            "Énergie",
            "Smells great"
        ],
        "ideasB": [
            "Sain",
            "Détente"
        ]
    },
    {
        "id": "fr_starter_food_drink_002",
        "word": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Restaurant",
        "sideB": "Cuisine maison",
        "ideasA": [
            "Pas de vaisselle",
            "Chefs professionnels"
        ],
        "ideasB": [
            "C'est moins cher",
            "C'est plus sain"
        ]
    },
    {
        "id": "fr_starter_food_drink_003",
        "word": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Petit-déjeuner",
        "sideB": "Aucun",
        "ideasA": [
            "Énergie pour le matin",
            "Bien commencer la journée"
        ],
        "ideasB": [
            "Gagne du temps",
            "Je n'ai pas faim"
        ]
    },
    {
        "id": "fr_starter_food_drink_004",
        "word": "Eau vs Jus — qu'est-ce qui est le plus sain ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Eau vs Jus — qu'est-ce qui est le plus sain ?",
                "examples": []
            }
        ],
        "sideA": "Eau",
        "sideB": "Jus",
        "ideasA": [
            "No calories",
            "Naturel"
        ],
        "ideasB": [
            "Vitamines",
            "Sucré"
        ]
    },
    {
        "id": "fr_starter_food_drink_005",
        "word": "Viande vs Légumes — qu'est-ce qui est le plus important dans un repas ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "vegetables",
        "form": "phrase",
        "definitions": [
            {
                "text": "Viande vs Légumes — qu'est-ce qui est le plus important dans un repas ?",
                "examples": []
            }
        ],
        "sideA": "Viande",
        "sideB": "Légumes",
        "ideasA": [
            "Protéines",
            "Savoureux"
        ],
        "ideasB": [
            "Vitamines",
            "Sain"
        ]
    },
    {
        "id": "fr_starter_furniture_001",
        "word": "Maison vs Appartement — qu'est-ce qui est mieux pour vivre ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Maison vs Appartement — qu'est-ce qui est mieux pour vivre ?",
                "examples": []
            }
        ],
        "sideA": "Maison",
        "sideB": "Appartement",
        "ideasA": [
            "Jardin",
            "Espace"
        ],
        "ideasB": [
            "Moins cher",
            "Plus facile à nettoyer"
        ]
    },
    {
        "id": "fr_starter_places_001",
        "word": "Ville vs campagne — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": "city",
        "form": "phrase",
        "definitions": [
            {
                "text": "Ville vs campagne — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Ville",
        "sideB": "Campagne",
        "ideasA": [
            "Magasins et cinémas",
            "Beaucoup de monde"
        ],
        "ideasB": [
            "Endroit calme",
            "Air pur"
        ]
    },
    {
        "id": "fr_starter_work_001",
        "word": "Espèces vs Carte — qu'est-ce qui est mieux pour payer ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Espèces vs Carte — qu'est-ce qui est mieux pour payer ?",
                "examples": []
            }
        ],
        "sideA": "Espèces",
        "sideB": "Carte",
        "ideasA": [
            "Voir l'argent",
            "Pas de technologie"
        ],
        "ideasB": [
            "Rapide",
            "Sûr"
        ]
    },
    {
        "id": "fr_starter_work_002",
        "word": "Économiser vs Dépenser — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Économiser vs Dépenser — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Économiser",
        "sideB": "Dépenser",
        "ideasA": [
            "Futur",
            "Acheter de grandes choses"
        ],
        "ideasB": [
            "Amusant maintenant",
            "Magasins"
        ]
    },
    {
        "id": "fr_starter_work_003",
        "word": "Louer vs Acheter — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Louer vs Acheter — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Louer",
        "sideB": "Acheter",
        "ideasA": [
            "Flexible",
            "Pas de réparations"
        ],
        "ideasB": [
            "Investissement",
            "C'est à vous"
        ]
    },
    {
        "id": "fr_starter_time_001",
        "word": "Matin vs Soir — which part of the day is nicer?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Soir — which part of the day is nicer?",
                "examples": []
            }
        ],
        "sideA": "Matin",
        "sideB": "Soir",
        "ideasA": [
            "Beaucoup d'énergie",
            "Le soleil se lève"
        ],
        "ideasB": [
            "Se reposer",
            "Regarder des films"
        ]
    },
    {
        "id": "fr_starter_travel_001",
        "word": "Voiture vs Bus — which is better to travel in?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Voiture vs Bus — which is better to travel in?",
                "examples": []
            }
        ],
        "sideA": "Voiture",
        "sideB": "Bus",
        "ideasA": [
            "Privé",
            "Rapide"
        ],
        "ideasB": [
            "Moins cher",
            "Social"
        ]
    },
    {
        "id": "fr_starter_travel_002",
        "word": "Marcher vs Conduire — qu'est-ce qui est mieux en ville ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Marcher vs Conduire — qu'est-ce qui est mieux en ville ?",
                "examples": []
            }
        ],
        "sideA": "Marcher",
        "sideB": "Conduire",
        "ideasA": [
            "Free",
            "Exercice"
        ],
        "ideasB": [
            "Pas de pluie",
            "Confortable"
        ]
    },
    {
        "id": "fr_starter_work_004",
        "word": "Bureau vs Maison — quel est le meilleur endroit pour travailler ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Bureau vs Maison — quel est le meilleur endroit pour travailler ?",
                "examples": []
            }
        ],
        "sideA": "Bureau",
        "sideB": "Maison",
        "ideasA": [
            "Concentration",
            "Colleagues"
        ],
        "ideasB": [
            "Pas de trajets",
            "Habits confortables"
        ]
    },
    {
        "id": "fr_starter_furniture_002",
        "word": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Lève-tôt",
        "sideB": "Couche-tard",
        "ideasA": [
            "Voir le soleil",
            "Temps calme"
        ],
        "ideasB": [
            "Temps créatif",
            "Pas de bruit"
        ]
    },
    {
        "id": "fr_starter_time_002",
        "word": "Été vs Hiver — quelle saison est la meilleure ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": "seasons",
        "form": "phrase",
        "definitions": [
            {
                "text": "Été vs Hiver — quelle saison est la meilleure ?",
                "examples": []
            }
        ],
        "sideA": "Été",
        "sideB": "Hiver",
        "ideasA": [
            "Ensoleillé",
            "Plage"
        ],
        "ideasB": [
            "Neige",
            "Faire du ski"
        ]
    },
    {
        "id": "fr_starter_places_002",
        "word": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Courtes",
        "sideB": "Longues",
        "ideasA": [
            "Facile à planifier",
            "Beaucoup de voyages"
        ],
        "ideasB": [
            "Se détendre plus",
            "Voir plus d'endroits"
        ]
    },
    {
        "id": "fr_starter_social_001",
        "word": "Appel téléphonique vs message — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Appel téléphonique vs message — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Appel",
        "sideB": "Message",
        "ideasA": [
            "Entendre la voix",
            "C'est plus rapide"
        ],
        "ideasB": [
            "Réfléchir avant d'écrire",
            "Lire plus tard"
        ]
    },
    {
        "id": "fr_starter_furniture_003",
        "word": "Lundi vs vendredi — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Lundi vs vendredi — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Lundi",
        "sideB": "Vendredi",
        "ideasA": [
            "Commencer des projets",
            "Nouvelle semaine"
        ],
        "ideasB": [
            "Week-end arrive",
            "Temps de fête"
        ]
    },
    {
        "id": "fr_starter_nature_001",
        "word": "Trop chaud vs trop froid — qu'est-ce qui est pire ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Trop chaud vs trop froid — qu'est-ce qui est pire ?",
                "examples": []
            }
        ],
        "sideA": "Trop chaud",
        "sideB": "Trop froid",
        "ideasA": [
            "On ne peut pas dormir",
            "Trop de soleil"
        ],
        "ideasB": [
            "Besoin de beaucoup d'habits",
            "On gèle"
        ]
    },
    {
        "id": "fr_starter_places_003",
        "word": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Hublot",
        "sideB": "Couloir",
        "ideasA": [
            "Voir les nuages",
            "Prendre des photos"
        ],
        "ideasB": [
            "Facile de marcher",
            "Plus d'espace"
        ]
    },
    {
        "id": "fr_starter_social_002",
        "word": "Rouge vs Bleu — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Rouge vs Bleu — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Rouge",
        "sideB": "Bleu",
        "ideasA": [
            "Couleur forte",
            "Amour"
        ],
        "ideasB": [
            "Couleur calme",
            "Mer et ciel"
        ]
    },
    {
        "id": "fr_starter_social_003",
        "word": "Jaune vs Vert — qu'est-ce qui est plus joyeux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Jaune vs Vert — qu'est-ce qui est plus joyeux ?",
                "examples": []
            }
        ],
        "sideA": "Jaune",
        "sideB": "Vert",
        "ideasA": [
            "Comme le soleil",
            "Brillant"
        ],
        "ideasB": [
            "Couleur de la nature",
            "Comme les arbres"
        ]
    },
    {
        "id": "fr_starter_social_004",
        "word": "Noir vs Blanc — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Noir vs Blanc — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Noir",
        "sideB": "Blanc",
        "ideasA": [
            "Élégant",
            "Va avec tout"
        ],
        "ideasB": [
            "Propre",
            "Brillant"
        ]
    },
    {
        "id": "fr_starter_social_005",
        "word": "Rose vs Violet — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Rose vs Violet — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Rose",
        "sideB": "Violet",
        "ideasA": [
            "Couleur mignonne",
            "Fleurs"
        ],
        "ideasB": [
            "Couleur royale",
            "Beau fruit"
        ]
    },
    {
        "id": "fr_starter_social_006",
        "word": "Grands vs Petits nombres — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Grands vs Petits nombres — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Grands",
        "sideB": "Petits",
        "ideasA": [
            "Plus d'argent",
            "Grands comptes"
        ],
        "ideasB": [
            "Facile à apprendre",
            "Rapide"
        ]
    },
    {
        "id": "fr_starter_social_007",
        "word": "Ballon vs Poupée — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ballon vs Poupée — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Ballon",
        "sideB": "Poupée",
        "ideasA": [
            "Jouer avec les amis",
            "Sport"
        ],
        "ideasB": [
            "Raconter des histoires",
            "Décoration"
        ]
    },
    {
        "id": "fr_starter_work_005",
        "word": "Crayon vs Stylo — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Crayon vs Stylo — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Crayon",
        "sideB": "Stylo",
        "ideasA": [
            "On peut effacer",
            "Bien pour dessiner"
        ],
        "ideasB": [
            "Permanent",
            "Écriture propre"
        ]
    },
    {
        "id": "fr_starter_work_006",
        "word": "Livre vs Image — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Livre vs Image — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Livre",
        "sideB": "Image",
        "ideasA": [
            "Lire des histoires",
            "Pas de batterie"
        ],
        "ideasB": [
            "Rapide à voir",
            "Beau"
        ]
    },
    {
        "id": "fr_starter_furniture_004",
        "word": "Chaise vs Sol — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chaise vs Sol — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaise",
        "sideB": "Sol",
        "ideasA": [
            "Bien pour le dos",
            "Travail à table"
        ],
        "ideasB": [
            "Beaucoup d'espace",
            "Relax"
        ]
    },
    {
        "id": "fr_starter_animals_001",
        "word": "Chat vs Chien — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "pets",
        "form": "phrase",
        "definitions": [
            {
                "text": "Chat vs Chien — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chat",
        "sideB": "Chien",
        "ideasA": [
            "Indépendant",
            "Calme"
        ],
        "ideasB": [
            "Ami fidèle",
            "Jouer dehors"
        ]
    },
    {
        "id": "fr_starter_animals_002",
        "word": "Poisson vs Oiseau — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "pets",
        "form": "phrase",
        "definitions": [
            {
                "text": "Poisson vs Oiseau — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Poisson",
        "sideB": "Oiseau",
        "ideasA": [
            "Belles couleurs",
            "Entretien facile"
        ],
        "ideasB": [
            "Peut chanter",
            "Sons joyeux"
        ]
    },
    {
        "id": "fr_starter_animals_003",
        "word": "Grands vs Petits animaux — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Grands vs Petits animaux — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Grands",
        "sideB": "Petits",
        "ideasA": [
            "Forts",
            "Intéressants"
        ],
        "ideasB": [
            "Mignons",
            "Petit espace"
        ]
    },
    {
        "id": "fr_starter_animals_004",
        "word": "Lapin vs Hamster — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "pets",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lapin vs Hamster — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Lapin",
        "sideB": "Hamster",
        "ideasA": [
            "Longues oreilles",
            "Doux"
        ],
        "ideasB": [
            "Petit",
            "Beau à regarder"
        ]
    },
    {
        "id": "fr_starter_food_drink_006",
        "word": "Pomme vs Banane — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "fruit",
        "form": "phrase",
        "definitions": [
            {
                "text": "Pomme vs Banane — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Pomme",
        "sideB": "Banane",
        "ideasA": [
            "Croquant",
            "Sucré"
        ],
        "ideasB": [
            "Facile à peler",
            "Mou"
        ]
    },
    {
        "id": "fr_starter_food_drink_007",
        "word": "Pain vs Riz — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Pain vs Riz — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Pain",
        "sideB": "Riz",
        "ideasA": [
            "Plusieurs types",
            "Sandwichs"
        ],
        "ideasB": [
            "Sain",
            "Bon avec la viande"
        ]
    },
    {
        "id": "fr_starter_food_drink_008",
        "word": "Lait vs Eau — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lait vs Eau — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Lait",
        "sideB": "Eau",
        "ideasA": [
            "Calcium",
            "Bien pour les os"
        ],
        "ideasB": [
            "Frais",
            "Basique"
        ]
    },
    {
        "id": "fr_starter_social_008",
        "word": "Rose vs Orange — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Rose vs Orange — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Rose",
        "sideB": "Orange",
        "ideasA": [
            "Couleur mignonne",
            "Fleurs"
        ],
        "ideasB": [
            "Brillant",
            "Comme le fruit"
        ]
    },
    {
        "id": "fr_starter_furniture_005",
        "word": "Chaise vs canapé — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chaise vs canapé — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaise",
        "sideB": "Canapé",
        "ideasA": [
            "Bien pour le dos",
            "Formel"
        ],
        "ideasB": [
            "Très mou",
            "Regarder la télé"
        ]
    },
    {
        "id": "fr_starter_furniture_006",
        "word": "Sac vs boîte — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Sac vs boîte — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Sac",
        "sideB": "Boîte",
        "ideasA": [
            "Facile à porter",
            "Pour l'école"
        ],
        "ideasB": [
            "Pour les jouets",
            "Protège les choses"
        ]
    },
    {
        "id": "fr_starter_animals_005",
        "word": "Lion vs éléphant — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "wild",
        "form": "phrase",
        "definitions": [
            {
                "text": "Lion vs éléphant — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Lion",
        "sideB": "Éléphant",
        "ideasA": [
            "Roi",
            "Fort"
        ],
        "ideasB": [
            "Grandes oreilles",
            "Très intelligent"
        ]
    },
    {
        "id": "fr_starter_furniture_007",
        "word": "Cuillère vs Fourchette — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Cuillère vs Fourchette — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Cuillère",
        "sideB": "Fourchette",
        "ideasA": [
            "Pour la soupe",
            "Facile"
        ],
        "ideasB": [
            "Pour les pâtes",
            "Viande"
        ]
    },
    {
        "id": "fr_starter_furniture_008",
        "word": "Chapeau vs Chaussures — qu'est-ce qui est plus important ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chapeau vs Chaussures — qu'est-ce qui est plus important ?",
                "examples": []
            }
        ],
        "sideA": "Chapeau",
        "sideB": "Chaussures",
        "ideasA": [
            "Style cool",
            "Protection solaire"
        ],
        "ideasB": [
            "Protéger les pieds",
            "Pour marcher"
        ]
    },
    {
        "id": "fr_starter_nature_002",
        "word": "Soleil vs lune — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Soleil vs lune — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Soleil",
        "sideB": "Lune",
        "ideasA": [
            "Chaud",
            "Lumière"
        ],
        "ideasB": [
            "Magnifique",
            "Lumière de nuit"
        ]
    },
    {
        "id": "fr_starter_furniture_009",
        "word": "Chaussettes vs Pas de chaussettes — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chaussettes vs Pas de chaussettes — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaussettes",
        "sideB": "Pas de chaussettes",
        "ideasA": [
            "Pieds chauds",
            "Confortable"
        ],
        "ideasB": [
            "Pieds frais",
            "Été"
        ]
    },
    {
        "id": "fr_starter_people_001",
        "word": "Vivre en famille vs vivre seul — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "people",
        "sub_theme": "family",
        "form": "phrase",
        "definitions": [
            {
                "text": "Vivre en famille vs vivre seul — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Famille",
        "sideB": "Seul",
        "ideasA": [
            "Jamais seul",
            "Aide pour la nourriture"
        ],
        "ideasB": [
            "Paix",
            "Tes règles"
        ]
    },
    {
        "id": "fr_starter_social_009",
        "word": "Frère vs Sœur — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Frère vs Sœur — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Frère",
        "sideB": "Sœur",
        "ideasA": [
            "Jouer à des jeux",
            "Protection"
        ],
        "ideasB": [
            "Partager des secrets",
            "Gentille"
        ]
    },
    {
        "id": "fr_starter_social_010",
        "word": "Grande famille vs Petite famille — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Grande famille vs Petite famille — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Grande famille",
        "sideB": "Petite famille",
        "ideasA": [
            "Maison animée",
            "Beaucoup d'amis"
        ],
        "ideasB": [
            "Calme",
            "Plus d'espace"
        ]
    },
    {
        "id": "fr_starter_social_011",
        "word": "Aîné vs Cadet — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Aîné vs Cadet — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Aîné",
        "sideB": "Cadet",
        "ideasA": [
            "Leader",
            "Responsable"
        ],
        "ideasB": [
            "Recevoir de l'aide",
            "Relaxé"
        ]
    },
    {
        "id": "fr_starter_work_007",
        "word": "Matin vs Après-midi — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Après-midi — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Matin",
        "sideB": "Après-midi",
        "ideasA": [
            "Après-midi libre",
            "Routine"
        ],
        "ideasB": [
            "Dormir tard",
            "Matin calme"
        ]
    },
    {
        "id": "fr_starter_social_012",
        "word": "Lecture vs maths — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Lecture vs maths — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Lecture",
        "sideB": "Maths",
        "ideasA": [
            "Histoires",
            "Nouveaux mots"
        ],
        "ideasB": [
            "Logique",
            "Nombres"
        ]
    },
    {
        "id": "fr_starter_work_008",
        "word": "École vs Maison — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "École vs Maison — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "École",
        "sideB": "Maison",
        "ideasA": [
            "Amis",
            "Professeur"
        ],
        "ideasB": [
            "Relaxé",
            "Pas de trajets"
        ]
    },
    {
        "id": "fr_starter_work_009",
        "word": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
                "examples": []
            }
        ],
        "sideA": "Devoirs",
        "sideB": "Pas de devoirs",
        "ideasA": [
            "Pratique",
            "Apprendre plus"
        ],
        "ideasB": [
            "Plus de jeu",
            "Moins de stress"
        ]
    },
    {
        "id": "fr_starter_work_010",
        "word": "Seul vs Partenaire — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Seul vs Partenaire — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "Seul",
        "sideB": "Partenaire",
        "ideasA": [
            "Concentration",
            "Rapide"
        ],
        "ideasB": [
            "Idées partagées",
            "Amusant"
        ]
    },
    {
        "id": "fr_starter_social_013",
        "word": "Écrire sur papier vs taper sur un ordinateur — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Écrire sur papier vs taper sur un ordinateur — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Papier",
        "sideB": "Ordinateur",
        "ideasA": [
            "Pas d'écran",
            "Facile"
        ],
        "ideasB": [
            "Rapide",
            "Corrige l'orthographe"
        ]
    },
    {
        "id": "fr_starter_food_drink_009",
        "word": "Petit-déjeuner vs Dîner — which meal is more important?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Petit-déjeuner vs Dîner — which meal is more important?",
                "examples": []
            }
        ],
        "sideA": "Petit-déjeuner",
        "sideB": "Dîner",
        "ideasA": [
            "Énergie matinale",
            "Commencer la journée"
        ],
        "ideasB": [
            "Temps en famille",
            "Gros repas"
        ]
    },
    {
        "id": "fr_starter_food_drink_010",
        "word": "Chaude vs Froide — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chaude vs Froide — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaude",
        "sideB": "Froide",
        "ideasA": [
            "Winter",
            "Tasty"
        ],
        "ideasB": [
            "Summer",
            "Salad"
        ]
    },
    {
        "id": "fr_starter_food_drink_011",
        "word": "Sucrée vs Salée — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Sucrée vs Salée — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "Sucrée",
        "sideB": "Salée",
        "ideasA": [
            "Delicious",
            "Treat"
        ],
        "ideasB": [
            "Real food",
            "Salt"
        ]
    },
    {
        "id": "fr_starter_food_drink_012",
        "word": "Cuisiner avec un parent vs acheter des plats préparés — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Cuisiner avec un parent vs acheter des plats préparés — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Cuisiner",
        "sideB": "Plats préparés",
        "ideasA": [
            "Apprendre une compétence",
            "Amusant"
        ],
        "ideasB": [
            "Rapide",
            "Pas de désordre"
        ]
    },
    {
        "id": "fr_starter_time_003",
        "word": "Tôt vs Tard — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Tôt vs Tard — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Tôt",
        "sideB": "Tard",
        "ideasA": [
            "Matin calme",
            "Productif"
        ],
        "ideasB": [
            "Créatif la nuit",
            "Dormir tard"
        ]
    },
    {
        "id": "fr_starter_time_004",
        "word": "Semaine vs Week-end — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": "months",
        "form": "phrase",
        "definitions": [
            {
                "text": "Semaine vs Week-end — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "Semaine",
        "sideB": "Week-end",
        "ideasA": [
            "Routine",
            "École"
        ],
        "ideasB": [
            "Amusant",
            "Hobbies"
        ]
    },
    {
        "id": "fr_starter_furniture_010",
        "word": "Chambre vs Salon — quelle pièce préfères-tu ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chambre vs Salon — quelle pièce préfères-tu ?",
                "examples": []
            }
        ],
        "sideA": "Chambre",
        "sideB": "Salon",
        "ideasA": [
            "Intimité",
            "Tes affaires"
        ],
        "ideasB": [
            "Grande télé",
            "Canapé"
        ]
    },
    {
        "id": "fr_starter_social_014",
        "word": "Intérieur vs Extérieur — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Intérieur vs Extérieur — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Intérieur",
        "sideB": "Extérieur",
        "ideasA": [
            "Pas de pluie",
            "Jeux de société"
        ],
        "ideasB": [
            "Soleil",
            "Course"
        ]
    },
    {
        "id": "fr_starter_social_015",
        "word": "Télé vs Livre — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Télé vs Livre — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Télé",
        "sideB": "Livre",
        "ideasA": [
            "Détente",
            "Visuel"
        ],
        "ideasB": [
            "Imaginer",
            "Profond"
        ]
    },
    {
        "id": "fr_starter_social_016",
        "word": "Faire du sport vs jouer à un jeu vidéo — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Faire du sport vs jouer à un jeu vidéo — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Sport",
        "sideB": "Jeu vidéo",
        "ideasA": [
            "Sain",
            "Actif"
        ],
        "ideasB": [
            "Compétences",
            "Histoire"
        ]
    },
    {
        "id": "fr_starter_social_017",
        "word": "Dessiner vs Chanter — which hobby is better?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dessiner vs Chanter — which hobby is better?",
                "examples": []
            }
        ],
        "sideA": "Dessiner",
        "sideB": "Chanter",
        "ideasA": [
            "Créer de l'art",
            "Calme"
        ],
        "ideasB": [
            "Utiliser sa voix",
            "Musique"
        ]
    },
    {
        "id": "fr_starter_social_018",
        "word": "Seul vs Amis — which is more fun?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Seul vs Amis — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Seul",
        "sideB": "Amis",
        "ideasA": [
            "Concentration",
            "Créatif"
        ],
        "ideasB": [
            "Partager",
            "Rire"
        ]
    },
    {
        "id": "fr_starter_health_medicine_001",
        "word": "Nager vs Courir — which sport do you prefer?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Nager vs Courir — which sport do you prefer?",
                "examples": []
            }
        ],
        "sideA": "Nager",
        "sideB": "Courir",
        "ideasA": [
            "Cool water",
            "Whole body"
        ],
        "ideasB": [
            "Fresh air",
            "Easy"
        ]
    },
    {
        "id": "fr_starter_social_019",
        "word": "Musique vs sport — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Musique vs sport — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Musique",
        "sideB": "Sport",
        "ideasA": [
            "Écouter",
            "Se sentir bien"
        ],
        "ideasB": [
            "Actif",
            "Santé"
        ]
    },
    {
        "id": "fr_starter_animals_006",
        "word": "Ferme vs Sauvages — qu'est-ce qui est plus interessante ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ferme vs Sauvages — qu'est-ce qui est plus interessante ?",
                "examples": []
            }
        ],
        "sideA": "Ferme",
        "sideB": "Sauvages",
        "ideasA": [
            "Utiles",
            "Nourriture"
        ],
        "ideasB": [
            "Jungle",
            "Excitant"
        ]
    },
    {
        "id": "fr_starter_nature_003",
        "word": "Pluie vs Soleil — quel temps préfères-tu ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Pluie vs Soleil — quel temps préfères-tu ?",
                "examples": []
            }
        ],
        "sideA": "Pluie",
        "sideB": "Soleil",
        "ideasA": [
            "Plantes",
            "Confortable"
        ],
        "ideasB": [
            "Plage",
            "Énergie"
        ]
    },
    {
        "id": "fr_starter_travel_003",
        "word": "Mer vs Montagne — qu'est-ce qui est mieux pour les vacances ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Mer vs Montagne — qu'est-ce qui est mieux pour les vacances ?",
                "examples": []
            }
        ],
        "sideA": "Mer",
        "sideB": "Montagne",
        "ideasA": [
            "Nager",
            "Soleil"
        ],
        "ideasB": [
            "Randonnée",
            "Magnifique"
        ]
    },
    {
        "id": "fr_starter_nature_004",
        "word": "Fleurs vs Arbres — qu'est-ce qui est plus beau ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Fleurs vs Arbres — qu'est-ce qui est plus beau ?",
                "examples": []
            }
        ],
        "sideA": "Fleurs",
        "sideB": "Arbres",
        "ideasA": [
            "Couleurs",
            "Parfums"
        ],
        "ideasB": [
            "Ombre",
            "Oxygène"
        ]
    },
    {
        "id": "fr_starter_travel_004",
        "word": "Marcher vs Vélo — which is better to get around?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Marcher vs Vélo — which is better to get around?",
                "examples": []
            }
        ],
        "sideA": "Marcher",
        "sideB": "Vélo",
        "ideasA": [
            "Free",
            "Simple"
        ],
        "ideasB": [
            "Rapide",
            "Amusant"
        ]
    },
    {
        "id": "fr_starter_places_004",
        "word": "Voyager seul vs voyager en famille — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Voyager seul vs voyager en famille — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Seul",
        "sideB": "Famille",
        "ideasA": [
            "Ton propre chemin",
            "Calme"
        ],
        "ideasB": [
            "Amusement partagé",
            "Sûr"
        ]
    },
    {
        "id": "fr_starter_social_020",
        "word": "Grands-parents vs Pas avec eux — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Grands-parents vs Pas avec eux — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Grands-parents",
        "sideB": "Pas avec eux",
        "ideasA": [
            "Recevoir de l'aide",
            "Apprendre des histoires"
        ],
        "ideasB": [
            "Plus d'espace",
            "Maison calme"
        ]
    },
    {
        "id": "fr_starter_food_drink_013",
        "word": "Maman vs Papa — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Maman vs Papa — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Maman",
        "sideB": "Papa",
        "ideasA": [
            "Pâtes savoureuses",
            "Beaucoup d'amour"
        ],
        "ideasB": [
            "Meilleure pizza",
            "Nouvelles recettes"
        ]
    },
    {
        "id": "fr_starter_social_021",
        "word": "Maths vs Art — qu'est-ce qui est plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Maths vs Art — qu'est-ce qui est plus amusant ?",
                "examples": []
            }
        ],
        "sideA": "Maths",
        "sideB": "Art",
        "ideasA": [
            "Logique",
            "Nombres"
        ],
        "ideasB": [
            "Couleurs",
            "Peinture"
        ]
    },
    {
        "id": "fr_starter_technology_001",
        "word": "Papier vs Tablette — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Papier vs Tablette — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Papier",
        "sideB": "Tablette",
        "ideasA": [
            "Pas de batterie",
            "Bonne sensation"
        ],
        "ideasB": [
            "Rapide",
            "Économise le papier"
        ]
    },
    {
        "id": "fr_starter_nature_005",
        "word": "Parc vs Plage — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Parc vs Plage — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Parc",
        "sideB": "Plage",
        "ideasA": [
            "Herbe verte",
            "Arbres"
        ],
        "ideasB": [
            "Sable",
            "Mer"
        ]
    },
    {
        "id": "fr_starter_animals_007",
        "word": "Chats vs Chiens — which pet is more annoying?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "pets",
        "form": "phrase",
        "definitions": [
            {
                "text": "Chats vs Chiens — which pet is more annoying?",
                "examples": []
            }
        ],
        "sideA": "Chats",
        "sideB": "Chiens",
        "ideasA": [
            "Verre brisé",
            "Désordre"
        ],
        "ideasB": [
            "Pas de chaussures",
            "Cher"
        ]
    },
    {
        "id": "fr_starter_food_drink_014",
        "word": "Manger une pizza avec une fourchette vs manger une pizza avec les mains — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Manger une pizza avec une fourchette vs manger une pizza avec les mains — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Fourchette",
        "sideB": "Mains",
        "ideasA": [
            "Mains propres",
            "Élégant"
        ],
        "ideasB": [
            "Rapide",
            "Vrai moyen"
        ]
    },
    {
        "id": "fr_starter_furniture_011",
        "word": "Dormir avec des chaussettes vs dormir sans chaussettes — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dormir avec des chaussettes vs dormir sans chaussettes — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaussettes",
        "sideB": "Sans chaussettes",
        "ideasA": [
            "Pieds chauds",
            "Confortable"
        ],
        "ideasB": [
            "Frais",
            "À l'aise"
        ]
    },
    {
        "id": "fr_starter_work_011",
        "word": "Plein temps vs Temps partiel — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Plein temps vs Temps partiel — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Plein temps",
        "sideB": "Temps partiel",
        "ideasA": [
            "Argent",
            "Nouveaux projets"
        ],
        "ideasB": [
            "Temps libre",
            "Moins de stress"
        ]
    },
    {
        "id": "fr_starter_work_012",
        "word": "Amour vs Argent — qu'est-ce qui est plus important ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Amour vs Argent — qu'est-ce qui est plus important ?",
                "examples": []
            }
        ],
        "sideA": "Amour",
        "sideB": "Argent",
        "ideasA": [
            "Heureux chaque jour",
            "Moins de stress"
        ],
        "ideasB": [
            "Maison",
            "No problems"
        ]
    },
    {
        "id": "fr_starter_places_005",
        "word": "Grande ville vs petite ville — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": "city",
        "form": "phrase",
        "definitions": [
            {
                "text": "Grande ville vs petite ville — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Grande ville",
        "sideB": "Petite ville",
        "ideasA": [
            "Magasins",
            "Cinémas"
        ],
        "ideasB": [
            "Amical",
            "Calme"
        ]
    },
    {
        "id": "fr_starter_people_002",
        "word": "Avoir des enfants vs ne pas avoir d'enfants — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "people",
        "sub_theme": "family",
        "form": "phrase",
        "definitions": [
            {
                "text": "Avoir des enfants vs ne pas avoir d'enfants — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Enfants",
        "sideB": "Pas d'enfants",
        "ideasA": [
            "Future famille",
            "Beaucoup de jeu"
        ],
        "ideasB": [
            "Temps libre",
            "Voyager facile"
        ]
    },
    {
        "id": "fr_starter_health_medicine_002",
        "word": "Exercice vs Repos — qu'est-ce qui est mieux pour la santé ?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Exercice vs Repos — qu'est-ce qui est mieux pour la santé ?",
                "examples": []
            }
        ],
        "sideA": "Exercice",
        "sideB": "Repos",
        "ideasA": [
            "Strong body",
            "Énergie"
        ],
        "ideasB": [
            "Recovery",
            "Détente"
        ]
    },
    {
        "id": "fr_starter_health_medicine_003",
        "word": "Docteur vs Attendre — qu'est-ce qui est mieux quand on est malade ?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Docteur vs Attendre — qu'est-ce qui est mieux quand on est malade ?",
                "examples": []
            }
        ],
        "sideA": "Docteur",
        "sideB": "Attendre",
        "ideasA": [
            "Fast help",
            "Sûr"
        ],
        "ideasB": [
            "Save money",
            "Naturel"
        ]
    },
    {
        "id": "fr_starter_health_medicine_004",
        "word": "8 heures vs Moins — qu'est-ce qui est réaliste pour un adulte ?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "8 heures vs Moins — qu'est-ce qui est réaliste pour un adulte ?",
                "examples": []
            }
        ],
        "sideA": "8 heures",
        "sideB": "Moins",
        "ideasA": [
            "Sain",
            "Rested"
        ],
        "ideasB": [
            "More work",
            "Play"
        ]
    },
    {
        "id": "fr_starter_furniture_012",
        "word": "En ligne vs Magasin — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "En ligne vs Magasin — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "En ligne",
        "sideB": "Magasin",
        "ideasA": [
            "Facile",
            "Rapide"
        ],
        "ideasB": [
            "See items",
            "Try"
        ]
    },
    {
        "id": "fr_starter_social_022",
        "word": "Objets chers vs objets bon marché — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Objets chers vs objets bon marché — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Cher",
        "sideB": "Bon marché",
        "ideasA": [
            "Bonne qualité",
            "Dure longtemps"
        ],
        "ideasB": [
            "Économiser argent",
            "Beaucoup d'objets"
        ]
    },
    {
        "id": "fr_starter_furniture_013",
        "word": "Neuf vs Occasion — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Neuf vs Occasion — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Neuf",
        "sideB": "Occasion",
        "ideasA": [
            "Cuisine propre",
            "Moderne"
        ],
        "ideasB": [
            "Moins cher",
            "Nature"
        ]
    },
    {
        "id": "fr_starter_travel_005",
        "word": "Famille vs Amis — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Famille vs Amis — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Famille",
        "sideB": "Amis",
        "ideasA": [
            "Sûr",
            "No cost"
        ],
        "ideasB": [
            "Excitant",
            "Fête"
        ]
    },
    {
        "id": "fr_starter_travel_006",
        "word": "Mon pays vs Étranger — quelles vacances sont meilleures ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Mon pays vs Étranger — quelles vacances sont meilleures ?",
                "examples": []
            }
        ],
        "sideA": "Mon pays",
        "sideB": "Étranger",
        "ideasA": [
            "Facile",
            "No plane"
        ],
        "ideasB": [
            "Culture",
            "Adventure"
        ]
    },
    {
        "id": "fr_starter_work_013",
        "word": "Tout de suite vs Plus tard — qu'est-ce qui est plus pro ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Tout de suite vs Plus tard — qu'est-ce qui est plus pro ?",
                "examples": []
            }
        ],
        "sideA": "Tout de suite",
        "sideB": "Plus tard",
        "ideasA": [
            "Rapide",
            "Professionnel"
        ],
        "ideasB": [
            "Think",
            "Pas de rush"
        ]
    },
    {
        "id": "fr_starter_furniture_014",
        "word": "Tout de suite vs Demain — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Tout de suite vs Demain — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Tout de suite",
        "sideB": "Demain",
        "ideasA": [
            "Cuisine propre",
            "Matin"
        ],
        "ideasB": [
            "Détente",
            "Plus tard"
        ]
    },
    {
        "id": "fr_starter_work_014",
        "word": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire ?",
                "examples": []
            }
        ],
        "sideA": "En avance",
        "sideB": "En retard",
        "ideasA": [
            "Attendre longtemps",
            "Ennui"
        ],
        "ideasB": [
            "Pas poli",
            "Rater le début"
        ]
    },
    {
        "id": "fr_starter_work_015",
        "word": "Organisé vs En désordre — qui est plus productif ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Organisé vs En désordre — qui est plus productif ?",
                "examples": []
            }
        ],
        "sideA": "Organisé",
        "sideB": "En désordre",
        "ideasA": [
            "Trouver les choses",
            "Concentration"
        ],
        "ideasB": [
            "Créatif",
            "Rapide"
        ]
    },
    {
        "id": "fr_starter_food_drink_015",
        "word": "Parler travail vs Pas de travail — quelle règle est la meilleure ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Parler travail vs Pas de travail — quelle règle est la meilleure ?",
                "examples": []
            }
        ],
        "sideA": "Parler travail",
        "sideB": "Pas de travail",
        "ideasA": [
            "Problèmes",
            "Partager"
        ],
        "ideasB": [
            "Détente",
            "Temps en famille"
        ]
    },
    {
        "id": "fr_starter_food_drink_016",
        "word": "Maison vs Restaurant — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Maison vs Restaurant — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Maison",
        "sideB": "Restaurant",
        "ideasA": [
            "Moins cher",
            "Plus sain"
        ],
        "ideasB": [
            "Pas de vaisselle",
            "Chefs professionnels"
        ]
    },
    {
        "id": "fr_starter_food_drink_017",
        "word": "Pizza vs Pâtes — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Pizza vs Pâtes — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Pizza",
        "sideB": "Pâtes",
        "ideasA": [
            "On peut partager",
            "Beaucoup de fromage"
        ],
        "ideasB": [
            "Plusieurs types",
            "Sauce délicieuse"
        ]
    },
    {
        "id": "fr_starter_food_drink_018",
        "word": "Glace vs Gâteau — which is a better dessert?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Glace vs Gâteau — which is a better dessert?",
                "examples": []
            }
        ],
        "sideA": "Glace",
        "sideB": "Gâteau",
        "ideasA": [
            "Froid",
            "Frais"
        ],
        "ideasB": [
            "Chaud",
            "Anniversaire"
        ]
    },
    {
        "id": "fr_starter_nature_006",
        "word": "Jours courts vs Jours longs — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Jours courts vs Jours longs — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Jours courts",
        "sideB": "Jours longs",
        "ideasA": [
            "Soirées confortables",
            "Dormir plus"
        ],
        "ideasB": [
            "Plus de soleil",
            "Jouer dehors"
        ]
    },
    {
        "id": "fr_starter_travel_007",
        "word": "Avion vs Train — which is more fun?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Avion vs Train — which is more fun?",
                "examples": []
            }
        ],
        "sideA": "Avion",
        "sideB": "Train",
        "ideasA": [
            "Rapide",
            "Nuages"
        ],
        "ideasB": [
            "Nature",
            "Espace"
        ]
    },
    {
        "id": "fr_starter_food_drink_019",
        "word": "Petit-déjeuner vs No breakfast — qu'est-ce qui est mieux pour toi ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "meals",
        "form": "phrase",
        "definitions": [
            {
                "text": "Petit-déjeuner vs No breakfast — qu'est-ce qui est mieux pour toi ?",
                "examples": []
            }
        ],
        "sideA": "Petit-déjeuner",
        "sideB": "No breakfast",
        "ideasA": [
            "Énergie matinale",
            "Bien commencer"
        ],
        "ideasB": [
            "Gagner du temps",
            "Pas faim"
        ]
    },
    {
        "id": "fr_starter_furniture_015",
        "word": "Ville vs Village — quel est le meilleur endroit pour vivre ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Ville vs Village — quel est le meilleur endroit pour vivre ?",
                "examples": []
            }
        ],
        "sideA": "Ville",
        "sideB": "Village",
        "ideasA": [
            "Magasins",
            "Cinémas"
        ],
        "ideasB": [
            "Calme",
            "Air pur"
        ]
    },
    {
        "id": "fr_starter_time_005",
        "word": "Matin vs Nuit — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Nuit — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Matin",
        "sideB": "Nuit",
        "ideasA": [
            "Soleil",
            "Productif"
        ],
        "ideasB": [
            "Créatif",
            "No noise"
        ]
    },
    {
        "id": "fr_starter_travel_008",
        "word": "Court vs Long — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Court vs Long — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Court",
        "sideB": "Long",
        "ideasA": [
            "Easy planning",
            "Many trips"
        ],
        "ideasB": [
            "Relax more",
            "Voir plus de lieux"
        ]
    },
    {
        "id": "fr_starter_technology_002",
        "word": "Call vs Message — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "technology",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Call vs Message — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Call",
        "sideB": "Message",
        "ideasA": [
            "Entendre la voix",
            "Rapide"
        ],
        "ideasB": [
            "Réfléchir avant",
            "Plus tard"
        ]
    },
    {
        "id": "fr_starter_time_006",
        "word": "Monday vs Friday — quel jour est le meilleur ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Monday vs Friday — quel jour est le meilleur ?",
                "examples": []
            }
        ],
        "sideA": "Monday",
        "sideB": "Friday",
        "ideasA": [
            "Nouveaux projets",
            "Nouvelle semaine"
        ],
        "ideasB": [
            "Week-end",
            "Fête"
        ]
    },
    {
        "id": "fr_starter_nature_007",
        "word": "Too hot vs Too cold — qu'est-ce qui est pire ?",
        "lang": "fr",
        "level": "starter",
        "theme": "nature",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Too hot vs Too cold — qu'est-ce qui est pire ?",
                "examples": []
            }
        ],
        "sideA": "Too hot",
        "sideB": "Too cold",
        "ideasA": [
            "Peut pas dormir",
            "Soleil"
        ],
        "ideasB": [
            "Habits",
            "On gèle"
        ]
    },
    {
        "id": "fr_starter_travel_009",
        "word": "Window vs Aisle — qu'est-ce qui est mieux en avion ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Window vs Aisle — qu'est-ce qui est mieux en avion ?",
                "examples": []
            }
        ],
        "sideA": "Window",
        "sideB": "Aisle",
        "ideasA": [
            "Nuages",
            "Photos"
        ],
        "ideasB": [
            "Marcher",
            "Espace"
        ]
    },
    {
        "id": "fr_starter_work_016",
        "word": "Gens vs Seul — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Gens vs Seul — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Gens",
        "sideB": "Seul",
        "ideasA": [
            "Plus d'idées",
            "Amusant"
        ],
        "ideasB": [
            "Concentration",
            "Rapide"
        ]
    },
    {
        "id": "fr_starter_furniture_016",
        "word": "Big city vs Small town — quel est le meilleur endroit pour un adulte ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Big city vs Small town — quel est le meilleur endroit pour un adulte ?",
                "examples": []
            }
        ],
        "sideA": "Big city",
        "sideB": "Small town",
        "ideasA": [
            "Jobs",
            "Culture"
        ],
        "ideasB": [
            "Friendly",
            "Moins cher"
        ]
    },
    {
        "id": "fr_starter_food_drink_020",
        "word": "À la maison vs Manger dehors — qu'est-ce qui est mieux au quotidien ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "À la maison vs Manger dehors — qu'est-ce qui est mieux au quotidien ?",
                "examples": []
            }
        ],
        "sideA": "À la maison",
        "sideB": "Manger dehors",
        "ideasA": [
            "Moins cher",
            "Plus sain"
        ],
        "ideasB": [
            "Gagner du temps",
            "No mess"
        ]
    },
    {
        "id": "fr_starter_social_023",
        "word": "Enfants vs Sans enfants — quelle vie est la meilleure ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Enfants vs Sans enfants — quelle vie est la meilleure ?",
                "examples": []
            }
        ],
        "sideA": "Enfants",
        "sideB": "Sans enfants",
        "ideasA": [
            "Famille",
            "Amusant"
        ],
        "ideasB": [
            "Temps libre",
            "Travel"
        ]
    },
    {
        "id": "fr_starter_furniture_017",
        "word": "Louer vs Acheter maison — qu'est-ce qui est mieux pour les jeunes ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Louer vs Acheter maison — qu'est-ce qui est mieux pour les jeunes ?",
                "examples": []
            }
        ],
        "sideA": "Louer",
        "sideB": "Acheter maison",
        "ideasA": [
            "Moins cher",
            "No responsibility"
        ],
        "ideasB": [
            "Investissement",
            "Espace"
        ]
    },
    {
        "id": "fr_starter_travel_010",
        "word": "Marcher vs Voiture — qu'est-ce qui est mieux pour la santé ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Marcher vs Voiture — qu'est-ce qui est mieux pour la santé ?",
                "examples": []
            }
        ],
        "sideA": "Marcher",
        "sideB": "Voiture",
        "ideasA": [
            "Exercice",
            "Air frais"
        ],
        "ideasB": [
            "Confortable",
            "Rapide"
        ]
    },
    {
        "id": "fr_starter_work_017",
        "word": "Économiser vs Profiter — qu'est-ce qui est plus sage ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Économiser vs Profiter — qu'est-ce qui est plus sage ?",
                "examples": []
            }
        ],
        "sideA": "Économiser",
        "sideB": "Profiter",
        "ideasA": [
            "Security",
            "Paix"
        ],
        "ideasB": [
            "Happy today",
            "Souvenirs"
        ]
    },
    {
        "id": "fr_starter_furniture_018",
        "word": "Chers vs Bon marché — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chers vs Bon marché — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chers",
        "sideB": "Bon marché",
        "ideasA": [
            "Quality",
            "Lasts"
        ],
        "ideasB": [
            "Money",
            "Many things"
        ]
    },
    {
        "id": "fr_starter_social_024",
        "word": "Télé vs Sortir — quelle soirée est la meilleure ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Télé vs Sortir — quelle soirée est la meilleure ?",
                "examples": []
            }
        ],
        "sideA": "Télé",
        "sideB": "Sortir",
        "ideasA": [
            "Confortable",
            "Moins cher"
        ],
        "ideasB": [
            "Amis",
            "New places"
        ]
    },
    {
        "id": "fr_starter_social_025",
        "word": "Sport vs Lecture — quel hobby est le meilleur pour un adulte ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Sport vs Lecture — quel hobby est le meilleur pour un adulte ?",
                "examples": []
            }
        ],
        "sideA": "Sport",
        "sideB": "Lecture",
        "ideasA": [
            "Sain",
            "Active"
        ],
        "ideasB": [
            "Détente",
            "Apprendre"
        ]
    },
    {
        "id": "fr_starter_social_026",
        "word": "Amis vs Temps seul — qu'est-ce qui est plus important ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Amis vs Temps seul — qu'est-ce qui est plus important ?",
                "examples": []
            }
        ],
        "sideA": "Amis",
        "sideB": "Temps seul",
        "ideasA": [
            "Amusant",
            "Souvenirs"
        ],
        "ideasB": [
            "Paix",
            "Hobbies"
        ]
    },
    {
        "id": "fr_starter_food_drink_021",
        "word": "Chaude vs Froid — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Chaude vs Froid — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Chaude",
        "sideB": "Froid",
        "ideasA": [
            "Hiver",
            "Savoureux"
        ],
        "ideasB": [
            "Été",
            "Salade"
        ]
    },
    {
        "id": "fr_starter_food_drink_022",
        "word": "Sucré vs Salée — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Sucré vs Salée — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "Sucré",
        "sideB": "Salée",
        "ideasA": [
            "Délicieux",
            "Friandise"
        ],
        "ideasB": [
            "Vraie nourriture",
            "Sel"
        ]
    },
    {
        "id": "fr_starter_health_medicine_005",
        "word": "Nager vs Course — which sport do you prefer?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Nager vs Course — which sport do you prefer?",
                "examples": []
            }
        ],
        "sideA": "Nager",
        "sideB": "Course",
        "ideasA": [
            "Eau fraîche",
            "Tout le corps"
        ],
        "ideasB": [
            "Air frais",
            "Facile"
        ]
    },
    {
        "id": "fr_starter_time_007",
        "word": "Matin vs Soir — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Soir — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Matin",
        "sideB": "Soir",
        "ideasA": [
            "Réveille",
            "Commencer frais"
        ],
        "ideasB": [
            "Relaxant",
            "Lit propre"
        ]
    },
    {
        "id": "fr_starter_travel_011",
        "word": "Voiture vs Bus — qu'est-ce qui est mieux pour aller au travail ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": "transport",
        "form": "phrase",
        "definitions": [
            {
                "text": "Voiture vs Bus — qu'est-ce qui est mieux pour aller au travail ?",
                "examples": []
            }
        ],
        "sideA": "Voiture",
        "sideB": "Bus",
        "ideasA": [
            "Privé",
            "Rapide"
        ],
        "ideasB": [
            "Moins cher",
            "Nature"
        ]
    },
    {
        "id": "fr_starter_time_008",
        "word": "Matin vs Soir — qu'est-ce qui est correct ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Soir — qu'est-ce qui est correct ?",
                "examples": []
            }
        ],
        "sideA": "Matin",
        "sideB": "Soir",
        "ideasA": [
            "Réveille",
            "Commencer frais"
        ],
        "ideasB": [
            "Relaxant",
            "Lit propre"
        ]
    },
    {
        "id": "fr_starter_work_018",
        "word": "Bureau vs Maison — qu'est-ce que tu préfères ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Bureau vs Maison — qu'est-ce que tu préfères ?",
                "examples": []
            }
        ],
        "sideA": "Bureau",
        "sideB": "Maison",
        "ideasA": [
            "Colleagues",
            "Concentration"
        ],
        "ideasB": [
            "Confortable",
            "Pas de trajets"
        ]
    },
    {
        "id": "fr_starter_travel_012",
        "word": "Court vs Long — qu'est-ce qui est plus acceptable ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Court vs Long — qu'est-ce qui est plus acceptable ?",
                "examples": []
            }
        ],
        "sideA": "Court",
        "sideB": "Long",
        "ideasA": [
            "Temps libre",
            "Moins de stress"
        ],
        "ideasB": [
            "Musique",
            "Lecture"
        ]
    },
    {
        "id": "fr_starter_furniture_019",
        "word": "Seul vs Partenaire — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Seul vs Partenaire — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Seul",
        "sideB": "Partenaire",
        "ideasA": [
            "Paix",
            "Rules"
        ],
        "ideasB": [
            "Share life",
            "Help"
        ]
    },
    {
        "id": "fr_starter_furniture_020",
        "word": "Cher vs Moins cher — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "furniture",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Cher vs Moins cher — qu'est-ce qui est mieux ?",
                "examples": []
            }
        ],
        "sideA": "Cher",
        "sideB": "Moins cher",
        "ideasA": [
            "Qualité",
            "Dure longtemps"
        ],
        "ideasB": [
            "Argent",
            "Plus d'objets"
        ]
    },
    {
        "id": "fr_starter_work_019",
        "word": "Tôt vs Tard — qu'est-ce qui est pire au travail ?",
        "lang": "fr",
        "level": "starter",
        "theme": "work",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Tôt vs Tard — qu'est-ce qui est pire au travail ?",
                "examples": []
            }
        ],
        "sideA": "Tôt",
        "sideB": "Tard",
        "ideasA": [
            "Attendre longtemps",
            "Ennui"
        ],
        "ideasB": [
            "Pas poli",
            "Rater le début"
        ]
    }
];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();