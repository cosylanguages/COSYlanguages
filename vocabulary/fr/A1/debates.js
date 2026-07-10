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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_food_drink_003",
        "word": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_food_drink_005",
        "word": "Viande vs Légumes — qu'est-ce qui est le plus important dans un repas ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_places_001",
        "word": "Ville vs campagne — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_time_001",
        "word": "Matin vs Soir — quelle partie de la journée est la plus agréable ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Matin vs Soir — quelle partie de la journée est la plus agréable ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_001",
        "word": "Voiture vs Bus — quel est le meilleur moyen de voyager ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Voiture vs Bus — quel est le meilleur moyen de voyager ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_002",
        "word": "Marcher vs Conduire — qu'est-ce qui est mieux en ville ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_time_002",
        "word": "Été vs Hiver — quelle saison est la meilleure ?",
        "lang": "fr",
        "level": "starter",
        "theme": "time",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_animals_002",
        "word": "Poisson vs Oiseau — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_animals_005",
        "word": "Lion vs éléphant — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_people_001",
        "word": "Vivre en famille vs vivre seul — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_food_drink_009",
        "word": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_social_017",
        "word": "Dessiner vs Chanter — quel passe-temps est le meilleur ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Dessiner vs Chanter — quel passe-temps est le meilleur ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_social_018",
        "word": "Seul vs Amis — qu'est-ce qui est le plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "social",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Seul vs Amis — qu'est-ce qui est le plus amusant ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_health_medicine_001",
        "word": "Nager vs Courir — quel sport préférez-vous ?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Nager vs Courir — quel sport préférez-vous ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_004",
        "word": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_animals_007",
        "word": "Chats vs Chiens — quel animal de compagnie est le plus agaçant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "animals",
        "sub_theme": "pets",
        "form": "phrase",
        "definitions": [
            {
                "text": "Chats vs Chiens — quel animal de compagnie est le plus agaçant ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_places_005",
        "word": "Grande ville vs petite ville — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "places",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_people_002",
        "word": "Avoir des enfants vs ne pas avoir d'enfants — qu'est-ce qui est mieux ?",
        "lang": "fr",
        "level": "starter",
        "theme": "people",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_food_drink_018",
        "word": "Glace vs Gâteau — quel est le meilleur dessert ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": "drinks",
        "form": "phrase",
        "definitions": [
            {
                "text": "Glace vs Gâteau — quel est le meilleur dessert ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_007",
        "word": "Avion vs Train — qu'est-ce qui est le plus amusant ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Avion vs Train — qu'est-ce qui est le plus amusant ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_food_drink_019",
        "word": "Petit-déjeuner vs No breakfast — qu'est-ce qui est mieux pour toi ?",
        "lang": "fr",
        "level": "starter",
        "theme": "food_drink",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_009",
        "word": "Window vs Aisle — qu'est-ce qui est mieux en avion ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_010",
        "word": "Marcher vs Voiture — qu'est-ce qui est mieux pour la santé ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_health_medicine_005",
        "word": "Nager vs Course — quel sport préférez-vous ?",
        "lang": "fr",
        "level": "starter",
        "theme": "health_medicine",
        "sub_theme": null,
        "form": "phrase",
        "definitions": [
            {
                "text": "Nager vs Course — quel sport préférez-vous ?",
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    },
    {
        "id": "fr_starter_travel_011",
        "word": "Voiture vs Bus — qu'est-ce qui est mieux pour aller au travail ?",
        "lang": "fr",
        "level": "starter",
        "theme": "travel",
        "sub_theme": null,
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
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
        ],
        "emoji": "✨",
        "transcription": ""
    }
];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();