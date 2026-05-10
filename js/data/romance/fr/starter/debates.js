(function() {
    const data = [{
                "topic": "Café vs thé — qu'est-ce qui est mieux ?",
                "sideA": "Café",
                "sideB": "Thé",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Cela donne de l'énergie", "Ça sent bon"],
                "ideasB": ["C'est très sain", "Cela aide à se détendre"]
            },
            {
                "topic": "Restaurant vs cuisine maison — qu'est-ce qui est mieux ?",
                "sideA": "Restaurant",
                "sideB": "Cuisine maison",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Pas de vaisselle", "Chefs professionnels"],
                "ideasB": ["C'est moins cher", "C'est plus sain"]
            },
            {
                "topic": "Petit-déjeuner vs pas de petit-déjeuner — qu'est-ce qui est mieux ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Aucun",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Énergie pour le matin", "Bien commencer la journée"],
                "ideasB": ["Gagne du temps", "Je n'ai pas faim"]
            },
            {
                "topic": "Eau vs jus — qu'est-ce qui est mieux ?",
                "sideA": "Eau",
                "sideB": "Jus",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Zéro calorie", "Très sain"],
                "ideasB": ["Goût sucré", "Bonnes vitamines"]
            },
            {
                "topic": "Viande vs légumes — qu'est-ce qui est le plus important ?",
                "sideA": "Viande",
                "sideB": "Légumes",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Beaucoup de protéines", "Très savoureux"],
                "ideasB": ["Beaucoup de vitamines", "Bon pour la santé"]
            },
            {
                "topic": "Maison vs appartement — qu'est-ce qui est mieux ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Plus d'espace", "Un jardin privé"],
                "ideasB": ["C'est plus sûr", "Facile à nettoyer"]
            },
            {
                "topic": "Ville vs campagne — qu'est-ce qui est mieux ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Magasins et cinémas", "Beaucoup de monde"],
                "ideasB": ["Endroit calme", "Air pur"]
            },
            {
                "topic": "Espèces vs carte — qu'est-ce qui est mieux ?",
                "sideA": "Espèces",
                "sideB": "Carte",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Facile de voir l'argent", "Pas de technologie"],
                "ideasB": ["Très rapide", "Sûr à porter"]
            },
            {
                "topic": "Économiser vs dépenser — qu'est-ce qui est mieux ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Bien pour l'avenir", "Acheter de grandes choses"],
                "ideasB": ["Amusant maintenant", "Aide les magasins"]
            },
            {
                "topic": "Louer vs acheter — qu'est-ce qui est mieux ?",
                "sideA": "Louer",
                "sideB": "Acheter",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["C'est flexible", "Pas de réparations"],
                "ideasB": ["C'est à vous", "Bon investissement"]
            },
            {
                "topic": "Travail du matin vs travail du soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Fini tôt", "Soirée libre"],
                "ideasB": ["Dormir tard", "Temps calme"]
            },
            {
                "topic": "Voiture vs bus — qu'est-ce qui est mieux ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Privé et rapide", "Aller partout"],
                "ideasB": ["C'est bon marché", "Bien pour la nature"]
            },
            {
                "topic": "Marcher vs conduire — qu'est-ce qui est mieux ?",
                "sideA": "Marcher",
                "sideB": "Conduire",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["C'est gratuit", "Bon exercice"],
                "ideasB": ["Pas de pluie", "Très confortable"]
            },
            {
                "topic": "Bureau vs maison — qu'est-ce qui est mieux pour travailler ?",
                "sideA": "Bureau",
                "sideB": "Maison",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Voir les amis", "Meilleure concentration"],
                "ideasB": ["Pas de trajets", "Vêtements confortables"]
            },
            {
                "topic": "Lève-tôt vs couche-tard — qu'est-ce qui est mieux ?",
                "sideA": "Lève-tôt",
                "sideB": "Couche-tard",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Voir le soleil", "Temps calme"],
                "ideasB": ["Temps créatif", "Pas de bruit"]
            },
            {
                "topic": "Été vs hiver — qu'est-ce qui est mieux ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Temps de plage", "Temps ensoleillé"],
                "ideasB": ["Neige", "Chocolat chaud"]
            },
            {
                "topic": "Vacances courtes vs vacances longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Facile à planifier", "Beaucoup de voyages"],
                "ideasB": ["Se détendre plus", "Voir plus d'endroits"]
            },
            {
                "topic": "Appel téléphonique vs message — qu'est-ce qui est mieux ?",
                "sideA": "Appel",
                "sideB": "Message",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Entendre la voix", "C'est plus rapide"],
                "ideasB": ["Réfléchir avant d'écrire", "Lire plus tard"]
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Réveille", "Commencer frais"],
                "ideasB": ["Aide à se détendre", "Lit propre"]
            },
            {
                "topic": "Lundi vs vendredi — qu'est-ce qui est mieux ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Commencer des projets", "Nouvelle semaine"],
                "ideasB": ["Week-end arrive", "Temps de fête"]
            },
            {
                "topic": "Trop chaud vs trop froid — qu'est-ce qui est pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["On ne peut pas dormir", "Trop de soleil"],
                "ideasB": ["Besoin de beaucoup d'habits", "On gèle"]
            },
            {
                "topic": "Siège côté hublot vs siège côté couloir — qu'est-ce qui est mieux ?",
                "sideA": "Hublot",
                "sideB": "Couloir",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Voir les nuages", "Prendre des photos"],
                "ideasB": ["Facile de marcher", "Plus d'espace"]
            },
            {
                "topic": "Rouge vs Bleu — qu'est-ce qui est mieux ?",
                "sideA": "Rouge",
                "sideB": "Bleu",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Couleur forte", "Amour"],
                "ideasB": ["Couleur calme", "Mer et ciel"]
            },
            {
                "topic": "Jaune vs Vert — qu'est-ce qui est plus joyeux ?",
                "sideA": "Jaune",
                "sideB": "Vert",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Comme le soleil", "Brillant"],
                "ideasB": ["Couleur de la nature", "Comme les arbres"]
            },
            {
                "topic": "Noir vs Blanc — qu'est-ce qui est mieux ?",
                "sideA": "Noir",
                "sideB": "Blanc",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Élégant", "Va avec tout"],
                "ideasB": ["Propre", "Brillant"]
            },
            {
                "topic": "Rose vs Violet — qu'est-ce qui est mieux ?",
                "sideA": "Rose",
                "sideB": "Violet",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Couleur mignonne", "Fleurs"],
                "ideasB": ["Couleur royale", "Beau fruit"]
            },
            {
                "topic": "Grands vs Petits nombres — qu'est-ce qui est plus amusant ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "numbers_0_9_A1",
                "ideasA": ["Plus d'argent", "Grands comptes"],
                "ideasB": ["Facile à apprendre", "Rapide"]
            },
            {
                "topic": "Ballon vs Poupée — qu'est-ce qui est mieux ?",
                "sideA": "Ballon",
                "sideB": "Poupée",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Jouer avec les amis", "Sport"],
                "ideasB": ["Raconter des histoires", "Décoration"]
            },
            {
                "topic": "Crayon vs Stylo — qu'est-ce qui est mieux ?",
                "sideA": "Crayon",
                "sideB": "Stylo",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["On peut effacer", "Bien pour dessiner"],
                "ideasB": ["Permanent", "Écriture propre"]
            },
            {
                "topic": "Livre vs Image — qu'est-ce qui est mieux ?",
                "sideA": "Livre",
                "sideB": "Image",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Lire des histoires", "Pas de batterie"],
                "ideasB": ["Rapide à voir", "Beau"]
            },
            {
                "topic": "Chaise vs Sol — qu'est-ce qui est mieux ?",
                "sideA": "Chaise",
                "sideB": "Sol",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Bien pour le dos", "Travail à table"],
                "ideasB": ["Beaucoup d'espace", "Relax"]
            },
            {
                "topic": "Chat vs Chien — qu'est-ce qui est mieux ?",
                "sideA": "Chat",
                "sideB": "Chien",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Indépendant", "Calme"],
                "ideasB": ["Ami fidèle", "Jouer dehors"]
            },
            {
                "topic": "Poisson vs Oiseau — qu'est-ce qui est mieux ?",
                "sideA": "Poisson",
                "sideB": "Oiseau",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Belles couleurs", "Entretien facile"],
                "ideasB": ["Peut chanter", "Sons joyeux"]
            },
            {
                "topic": "Grands vs Petits animaux — qu'est-ce qui est mieux ?",
                "sideA": "Grands",
                "sideB": "Petits",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Forts", "Intéressants"],
                "ideasB": ["Mignons", "Petit espace"]
            },
            {
                "topic": "Lapin vs Hamster — qu'est-ce qui est mieux ?",
                "sideA": "Lapin",
                "sideB": "Hamster",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Longues oreilles", "Doux"],
                "ideasB": ["Petit", "Beau à regarder"]
            },
            {
                "topic": "Pomme vs Banane — qu'est-ce qui est mieux ?",
                "sideA": "Pomme",
                "sideB": "Banane",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Croquant", "Sucré"],
                "ideasB": ["Facile à peler", "Mou"]
            },
            {
                "topic": "Pain vs Riz — qu'est-ce qui est mieux ?",
                "sideA": "Pain",
                "sideB": "Riz",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Plusieurs types", "Sandwichs"],
                "ideasB": ["Sain", "Bon avec la viande"]
            },
            {
                "topic": "Lait vs Eau — qu'est-ce qui est mieux ?",
                "sideA": "Lait",
                "sideB": "Eau",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Calcium", "Bien pour les os"],
                "ideasB": ["Frais", "Basique"]
            },
            {
                "topic": "Rose vs Orange — qu'est-ce qui est mieux ?",
                "sideA": "Rose",
                "sideB": "Orange",
                "level": "starter",
                "theme": "colours_patterns_A1",
                "ideasA": ["Couleur mignonne", "Fleurs"],
                "ideasB": ["Brillant", "Comme le fruit"]
            },
            {
                "topic": "Chaise vs canapé — qu'est-ce qui est mieux ?",
                "sideA": "Chaise",
                "sideB": "Canapé",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Bien pour le dos", "Formel"],
                "ideasB": ["Très mou", "Regarder la télé"]
            },
            {
                "topic": "Sac vs boîte — qu'est-ce qui est mieux ?",
                "sideA": "Sac",
                "sideB": "Boîte",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Facile à porter", "Pour l'école"],
                "ideasB": ["Pour les jouets", "Protège les choses"]
            },
            {
                "topic": "Lion vs éléphant — qu'est-ce qui est mieux ?",
                "sideA": "Lion",
                "sideB": "Éléphant",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Roi", "Fort"],
                "ideasB": ["Grandes oreilles", "Très intelligent"]
            },
            {
                "topic": "Cuillère vs fourchette — qu'est-ce qui est mieux ?",
                "sideA": "Cuillère",
                "sideB": "Fourchette",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Pour la soupe", "Facile"],
                "ideasB": ["Pour les pâtes", "Viande"]
            },
            {
                "topic": "Chapeau vs chaussures — qu'est-ce qui est mieux ?",
                "sideA": "Chapeau",
                "sideB": "Chaussures",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Style cool", "Protection solaire"],
                "ideasB": ["Protège les pieds", "Pour marcher"]
            },
            {
                "topic": "Soleil vs lune — qu'est-ce qui est mieux ?",
                "sideA": "Soleil",
                "sideB": "Lune",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Chaud", "Lumière"],
                "ideasB": ["Magnifique", "Lumière de nuit"]
            },
            {
                "topic": "Chaussettes vs pas de chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Pas de chaussettes",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Pieds chauds", "Confortable"],
                "ideasB": ["Pieds frais", "Été"]
            },
            {
                "topic": "Vivre en famille vs vivre seul — qu'est-ce qui est mieux ?",
                "sideA": "Famille",
                "sideB": "Seul",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Jamais seul", "Aide pour la nourriture"],
                "ideasB": ["Paix", "Tes règles"]
            },
            {
                "topic": "Avoir un frère vs avoir une sœur — qu'est-ce qui est mieux ?",
                "sideA": "Frère",
                "sideB": "Sœur",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Jouer à des jeux", "Protection"],
                "ideasB": ["Partager des secrets", "Gentille"]
            },
            {
                "topic": "Grande famille vs petite famille — qu'est-ce qui est mieux ?",
                "sideA": "Grande famille",
                "sideB": "Petite famille",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Maison animée", "Beaucoup d'amis"],
                "ideasB": ["Calme", "Plus d'espace"]
            },
            {
                "topic": "Être l'aîné vs être le cadet — qu'est-ce qui est mieux ?",
                "sideA": "Aîné",
                "sideB": "Cadet",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Leader", "Responsable"],
                "ideasB": ["Recevoir de l'aide", "Relaxé"]
            },
            {
                "topic": "École le matin vs école l'après-midi — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Après-midi",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Après-midi libre", "Routine"],
                "ideasB": ["Dormir tard", "Matin calme"]
            },
            {
                "topic": "Lecture vs maths — qu'est-ce qui est plus amusant ?",
                "sideA": "Lecture",
                "sideB": "Maths",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Histoires", "Nouveaux mots"],
                "ideasB": ["Logique", "Nombres"]
            },
            {
                "topic": "Apprendre à l'école vs apprendre à la maison — qu'est-ce qui est mieux ?",
                "sideA": "École",
                "sideB": "Maison",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Amis", "Professeur"],
                "ideasB": ["Relaxé", "Pas de trajets"]
            },
            {
                "topic": "Faire ses devoirs vs ne pas faire ses devoirs — qu'est-ce qui aide le plus ?",
                "sideA": "Devoirs",
                "sideB": "Pas de devoirs",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Pratique", "Apprendre plus"],
                "ideasB": ["Plus de jeu", "Moins de stress"]
            },
            {
                "topic": "Travailler seul vs travailler avec un partenaire — qu'est-ce qui est mieux ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Concentration", "Rapide"],
                "ideasB": ["Idées partagées", "Amusant"]
            },
            {
                "topic": "Écrire sur papier vs taper sur un ordinateur — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Ordinateur",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Pas d'écran", "Facile"],
                "ideasB": ["Rapide", "Corrige l'orthographe"]
            },
            {
                "topic": "Petit-déjeuner vs dîner — qu'est-ce qui est plus important ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Dîner",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Énergie matinale", "Commencer la journée"],
                "ideasB": ["Temps en famille", "Gros repas"]
            },
            {
                "topic": "Nourriture chaude vs nourriture froide — qu'est-ce qui est mieux ?",
                "sideA": "Chaude",
                "sideB": "Froide",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Hiver", "Savoureux"],
                "ideasB": ["Été", "Salade"]
            },
            {
                "topic": "Nourriture sucrée vs nourriture salée — qu'est-ce qui est mieux ?",
                "sideA": "Sucrée",
                "sideB": "Salée",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Délicieux", "Friandise"],
                "ideasB": ["Vraie nourriture", "Sel"]
            },
            {
                "topic": "Cuisiner avec un parent vs acheter des plats préparés — qu'est-ce qui est mieux ?",
                "sideA": "Cuisiner",
                "sideB": "Plats préparés",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Apprendre une compétence", "Amusant"],
                "ideasB": ["Rapide", "Pas de désordre"]
            },
            {
                "topic": "Se réveiller tôt vs se réveiller tard — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Plus de temps", "Productif"],
                "ideasB": ["Plus de sommeil", "Relaxé"]
            },
            {
                "topic": "Matin vs soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Frais", "Soleil"],
                "ideasB": ["Calme", "Repos"]
            },
            {
                "topic": "Jours de semaine vs week-end — qu'est-ce qui est mieux ?",
                "sideA": "Semaine",
                "sideB": "Week-end",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Routine", "École"],
                "ideasB": ["Amusement", "Hobbies"]
            },
            {
                "topic": "Se coucher tôt vs rester debout tard — qu'est-ce qui est plus sain ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Sain", "Reposé"],
                "ideasB": ["Amusant", "Films"]
            },
            {
                "topic": "Ta chambre vs le salon — qu'est-ce qui est mieux ?",
                "sideA": "Chambre",
                "sideB": "Salon",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Intimité", "Tes affaires"],
                "ideasB": ["Grande télé", "Canapé"]
            },
            {
                "topic": "Jeux d'intérieur vs jeux d'extérieur — qu'est-ce qui est plus amusant ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Pas de pluie", "Jeux de société"],
                "ideasB": ["Soleil", "Course"]
            },
            {
                "topic": "Regarder la télé vs lire un livre — qu'est-ce qui est mieux ?",
                "sideA": "Télé",
                "sideB": "Livre",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Détente", "Visuel"],
                "ideasB": ["Imaginer", "Profond"]
            },
            {
                "topic": "Faire du sport vs jouer à un jeu vidéo — qu'est-ce qui est plus amusant ?",
                "sideA": "Sport",
                "sideB": "Jeu vidéo",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Sain", "Actif"],
                "ideasB": ["Compétences", "Histoire"]
            },
            {
                "topic": "Dessiner vs chanter — qu'est-ce qui est mieux ?",
                "sideA": "Dessiner",
                "sideB": "Chanter",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Créer de l'art", "Calme"],
                "ideasB": ["Utiliser sa voix", "Musique"]
            },
            {
                "topic": "Jouer seul vs jouer avec des amis — qu'est-ce qui est plus amusant ?",
                "sideA": "Seul",
                "sideB": "Amis",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Concentration", "Créatif"],
                "ideasB": ["Partager", "Rire"]
            },
            {
                "topic": "Nager vs courir — qu'est-ce qui est mieux ?",
                "sideA": "Nager",
                "sideB": "Courir",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Eau fraîche", "Tout le corps"],
                "ideasB": ["Air frais", "Facile"]
            },
            {
                "topic": "Musique vs sport — qu'est-ce qui est mieux ?",
                "sideA": "Musique",
                "sideB": "Sport",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Écouter", "Se sentir bien"],
                "ideasB": ["Actif", "Santé"]
            },
            {
                "topic": "Animaux de la ferme vs animaux sauvages — qu'est-ce qui est plus intéressant ?",
                "sideA": "Ferme",
                "sideB": "Sauvages",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Nourriture", "Utiles"],
                "ideasB": ["Jungle", "Excitant"]
            },
            {
                "topic": "Pluie vs soleil — qu'est-ce qui est mieux ?",
                "sideA": "Pluie",
                "sideB": "Soleil",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Plantes", "Confortable"],
                "ideasB": ["Plage", "Énergie"]
            },
            {
                "topic": "La mer vs la montagne — qu'est-ce qui est mieux pour les vacances ?",
                "sideA": "Mer",
                "sideB": "Montagne",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Nager", "Sable"],
                "ideasB": ["Randonnée", "Vue"]
            },
            {
                "topic": "Fleurs vs arbres — qu'est-ce qui est plus beau ?",
                "sideA": "Fleurs",
                "sideB": "Arbres",
                "level": "starter",
                "theme": "weather_A1",
                "ideasA": ["Parfums", "Couleurs"],
                "ideasB": ["Ombre", "Oxygène"]
            },
            {
                "topic": "Marcher vs faire du vélo — qu'est-ce qui est mieux pour se déplacer ?",
                "sideA": "Marcher",
                "sideB": "Vélo",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Gratuit", "Simple"],
                "ideasB": ["Rapide", "Amusant"]
            },
            {
                "topic": "Voyager seul vs voyager en famille — qu'est-ce qui est plus amusant ?",
                "sideA": "Seul",
                "sideB": "Famille",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Ton propre chemin", "Calme"],
                "ideasB": ["Amusement partagé", "Sûr"]
            },
            {
                "topic": "Vivre avec les grands-parents vs ne pas vivre avec eux — qu'est-ce qui est mieux ?",
                "sideA": "Grands-parents",
                "sideB": "Pas avec eux",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Recevoir de l'aide", "Apprendre des histoires"],
                "ideasB": ["Plus d'espace", "Maison calme"]
            },
            {
                "topic": "La cuisine de maman vs la cuisine de papa — qu'est-ce qui est mieux ?",
                "sideA": "Maman",
                "sideB": "Papa",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Pâtes savoureuses", "Beaucoup d'amour"],
                "ideasB": ["Meilleure pizza", "Nouvelles recettes"]
            },
            {
                "topic": "Maths vs art — qu'est-ce qui est mieux ?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Nombres", "Logique"],
                "ideasB": ["Couleurs", "Peinture"]
            },
            {
                "topic": "Écrire sur papier vs écrire sur une tablette — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Tablette",
                "level": "starter",
                "theme": "basic_technology_devices_A1",
                "ideasA": ["Pas de batterie", "Bonne sensation"],
                "ideasB": ["Rapide", "Économise le papier"]
            },
            {
                "topic": "Journée au parc vs journée à la plage — qu'est-ce qui est mieux ?",
                "sideA": "Parc",
                "sideB": "Plage",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Herbe verte", "Arbres"],
                "ideasB": ["Sable", "Mer bleue"]
            },
            {
                "topic": "Chats qui font tomber des objets vs chiens qui mâchent des chaussures — qu'est-ce qui est pire ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "starter",
                "theme": "animals_A1",
                "ideasA": ["Verre brisé", "Désordre"],
                "ideasB": ["Pas de chaussures", "Cher"]
            },
            {
                "topic": "Manger une pizza avec une fourchette vs manger une pizza avec les mains — qu'est-ce qui est mieux ?",
                "sideA": "Fourchette",
                "sideB": "Mains",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Mains propres", "Élégant"],
                "ideasB": ["Rapide", "Vrai moyen"]
            },
            {
                "topic": "Dormir avec des chaussettes vs dormir sans chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans chaussettes",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Pieds chauds", "Confortable"],
                "ideasB": ["Frais", "À l'aise"]
            },
            {
                "topic": "Travailler à plein temps vs travailler à temps partiel — qu'est-ce qui est mieux ?",
                "sideA": "Plein temps",
                "sideB": "Temps partiel",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Plus d'argent", "Gros projets"],
                "ideasB": ["Plus de temps libre", "Moins de stress"]
            },
            {
                "topic": "Un métier qu'on aime vs un métier qui paye bien — qu'est-ce qui est mieux ?",
                "sideA": "Amour",
                "sideB": "Argent",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Heureux chaque jour", "Pas de stress"],
                "ideasB": ["Acheter grande maison", "Pas de soucis d'argent"]
            },
            {
                "topic": "Grande ville vs petite ville — qu'est-ce qui est mieux ?",
                "sideA": "Grande ville",
                "sideB": "Petite ville",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Magasins", "Cinémas"],
                "ideasB": ["Amical", "Calme"]
            },
            {
                "topic": "Avoir des enfants vs ne pas avoir d'enfants — qu'est-ce qui est mieux ?",
                "sideA": "Enfants",
                "sideB": "Pas d'enfants",
                "level": "starter",
                "theme": "immediate_family_A1",
                "ideasA": ["Future famille", "Beaucoup de jeu"],
                "ideasB": ["Temps libre", "Voyager facile"]
            },
            {
                "topic": "Faire de l'exercice chaque jour vs se reposer — qu'est-ce qui est mieux ?",
                "sideA": "Exercice",
                "sideB": "Repos",
                "level": "starter",
                "theme": "leisure_activities_A1",
                "ideasA": ["Corps fort", "Énergie"],
                "ideasB": ["Récupérer", "Détente"]
            },
            {
                "topic": "Aller chez le docteur vs attendre — qu'est-ce qui est mieux ?",
                "sideA": "Docteur",
                "sideB": "Attendre",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Aide rapide", "Sûr"],
                "ideasB": ["Économiser argent", "Naturel"]
            },
            {
                "topic": "Dormir huit heures vs dormir moins — qu'est-ce qui est mieux ?",
                "sideA": "8 heures",
                "sideB": "Moins",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Reposé", "Sain"],
                "ideasB": ["Finir travail", "Plus de jeu"]
            },
            {
                "topic": "Achats en ligne vs achats en magasin — qu'est-ce qui est mieux ?",
                "sideA": "En ligne",
                "sideB": "Magasin",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Facile", "Rapide"],
                "ideasB": ["Voir objets", "Essayer habits"]
            },
            {
                "topic": "Objets chers vs objets bon marché — qu'est-ce qui est mieux ?",
                "sideA": "Cher",
                "sideB": "Bon marché",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Bonne qualité", "Dure longtemps"],
                "ideasB": ["Économiser argent", "Beaucoup d'objets"]
            },
            {
                "topic": "Acheter neuf vs acheter d'occasion — qu'est-ce qui est mieux ?",
                "sideA": "Neuf",
                "sideB": "Occasion",
                "level": "starter",
                "theme": "shopping_basics_A1",
                "ideasA": ["Propre", "Pas de problèmes"],
                "ideasB": ["Pas cher", "Sauver la nature"]
            },
            {
                "topic": "Vacances en famille vs vacances entre amis — qu'est-ce qui est mieux ?",
                "sideA": "Famille",
                "sideB": "Amis",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Sûr", "Pas de coût"],
                "ideasB": ["Excitant", "Fête"]
            },
            {
                "topic": "Rester dans son pays vs voyager à l'étranger — qu'est-ce qui est mieux ?",
                "sideA": "Mon pays",
                "sideB": "Étranger",
                "level": "starter",
                "theme": "address_location_A1",
                "ideasA": ["Facile", "Pas d'avion"],
                "ideasB": ["Nouvelle culture", "Aventure"]
            },
            {
                "topic": "Répondre aux emails tout de suite vs les laisser pour plus tard — qu'est-ce qui est mieux ?",
                "sideA": "Tout de suite",
                "sideB": "Plus tard",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Professionnel", "Fini vite"],
                "ideasB": ["Bien réfléchir", "Pas de précipitation"]
            },
            {
                "topic": "Faire la vaisselle tout de suite vs la laisser jusqu'à demain — qu'est-ce qui est mieux ?",
                "sideA": "Tout de suite",
                "sideB": "Demain",
                "level": "starter",
                "theme": "furniture_objects_A1",
                "ideasA": ["Cuisine propre", "Matin frais"],
                "ideasB": ["Détente maintenant", "Tout faire après"]
            },
            {
                "topic": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire ?",
                "sideA": "En avance",
                "sideB": "En retard",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Attendre longtemps", "Ennui"],
                "ideasB": ["Pas poli", "Rater le début"]
            },
            {
                "topic": "Avoir un bureau très organisé vs un bureau en désordre — qu'est-ce qui est mieux ?",
                "sideA": "Organisé",
                "sideB": "En désordre",
                "level": "starter",
                "theme": "workplace_basics_A1",
                "ideasA": ["Trouver les choses", "Concentration"],
                "ideasB": ["Créatif", "Rapide"]
            },
            {
                "topic": "Parler de travail au dîner vs pas de discussion de travail au dîner — qu'est-ce qui est mieux ?",
                "sideA": "Parler travail",
                "sideB": "Pas de travail",
                "level": "starter",
                "theme": "basic_foods_A1",
                "ideasA": ["Régler problèmes", "Partager journée"],
                "ideasB": ["Repos", "Temps en famille"]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();