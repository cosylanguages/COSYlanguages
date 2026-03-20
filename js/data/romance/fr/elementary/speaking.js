(function() {
    const speakingData = {
    "fr": {
        "opinionArena": [
            {
                "text": "Les enfants devraient-ils avoir des téléphones portables ?",
                "level": "elementary",
                "theme": "technology_A2"
            },
            {
                "text": "Est-il préférable de vivre dans une maison ou un appartement ?",
                "level": "elementary",
                "theme": "neighbourhood_A2"
            }
        ],
        "criticsCorner": [
            {
                "text": "La vie, c'est ce qui arrive quand on est occupé à faire d'autres projets.",
                "author": "John Lennon",
                "level": "elementary",
                "theme": "relationships_dating_A2"
            }
        ],
        "debates": [
            {
                "topic": "Un salaire élevé vs un court trajet — qu'est-ce qui compte le plus dans un travail ?",
                "sideA": "Salaire élevé",
                "sideB": "Court trajet",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changer souvent d'emploi vs rester dans la même entreprise — qu'est-ce qui est le mieux pour votre carrière ?",
                "sideA": "Changer d'emploi",
                "sideB": "Rester",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire des heures supplémentaires vs partir à l'heure tous les jours — quelle est la meilleure habitude ?",
                "sideA": "Heures sup",
                "sideB": "À l'heure",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un patron strict vs un patron détendu — pour qui est-il préférable de travailler ?",
                "sideA": "Patron strict",
                "sideB": "Patron détendu",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler dans une grande entreprise vs une petite entreprise — qu'est-ce qui est mieux ?",
                "sideA": "Grande entreprise",
                "sideB": "Petite entreprise",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Obtenir une promotion vs obtenir plus de temps libre — que choisiriez-vous ?",
                "sideA": "Promotion",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acheter une maison vs louer toute sa vie — quelle est la décision financière la plus intelligente ?",
                "sideA": "Acheter",
                "sideB": "Louer",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en centre-ville vs vivre en banlieue — qu'est-ce qui est mieux ?",
                "sideA": "Centre-ville",
                "sideB": "Banlieue",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dépenser de l'argent pour des expériences vs pour des objets — qu'est-ce qui vous rend plus heureux ?",
                "sideA": "Expériences",
                "sideB": "Objets",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner tous les jours vs préparer les repas une fois par semaine — qu'est-ce qui est le plus pratique ?",
                "sideA": "Cuisine quotidienne",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir une femme de ménage vs faire son propre ménage — quel est le meilleur choix ?",
                "sideA": "Ménage pro",
                "sideB": "Soi-même",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre avec un partenaire vs vivre seul — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Avec partenaire",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir des enfants tôt vs avoir des enfants plus tard dans la vie — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Plus tard",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Relations familiales étroites vs indépendance vis-à-vis de la famille — qu'est-ce qui est le plus important à l'âge adulte ?",
                "sideA": "Relations étroites",
                "sideB": "Indépendance",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rencontrer de nouvelles personnes vs garder d'anciennes amitiés — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Nouvelles personnes",
                "sideB": "Anciens amis",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Socialiser après le travail vs rentrer directement à la maison — qu'est-ce qui est mieux pour les relations de travail ?",
                "sideA": "Socialiser",
                "sideB": "Rentrer",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice à l'extérieur — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Salle de sport",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Régime strict vs manger de tout avec modération — qu'est-ce qui est plus sain ?",
                "sideA": "Régime strict",
                "sideB": "Modération",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voir un médecin tôt vs attendre de voir si on va mieux — qu'est-ce qui est le plus sage ?",
                "sideA": "Tôt",
                "sideB": "Attendre",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormir huit heures vs dormir six heures mais faire de l'exercice — qu'est-ce qui est mieux pour l'énergie ?",
                "sideA": "8 heures",
                "sideB": "6h + sport",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réduire le stress par le sport vs par la relaxation — qu'est-ce qui fonctionne le mieux ?",
                "sideA": "Sport",
                "sideB": "Relaxation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smartphones vs conversation en face à face — qu'utilisons-nous le plus, et est-ce un problème ?",
                "sideA": "Smartphones",
                "sideB": "Face à face",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Banque en ligne vs aller à la banque — qu'est-ce qui est mieux ?",
                "sideA": "En ligne",
                "sideB": "Aller à la banque",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler avec du papier vs travailler numériquement — qu'est-ce qui est le plus efficace ?",
                "sideA": "Papier",
                "sideB": "Numérique",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux pour le réseautage vs rencontrer les gens en personne — qu'est-ce qui est le plus utile professionnellement ?",
                "sideA": "Réseaux sociaux",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyage organisé vs voyage indépendant — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Organisé",
                "sideB": "Indépendant",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Séjour en ville vs vacances à la plage — quelle est la meilleure façon de se détendre ?",
                "sideA": "Séjour en ville",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Une seule longue vacance par an vs plusieurs courts séjours — qu'est-ce qui est mieux ?",
                "sideA": "Une seule longue",
                "sideB": "Plusieurs courtes",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager en couple vs voyager seul — qu'est-ce qui est le plus agréable ?",
                "sideA": "En couple",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parler à son partenaire de chaque petit problème vs garder les choses pour soi — qu'est-ce qui est le plus sain ?",
                "sideA": "Tout dire",
                "sideB": "Garder pour soi",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Consulter son téléphone dès le matin vs attendre après le petit-déjeuner — quelle est la meilleure habitude ?",
                "sideA": "Dès le matin",
                "sideB": "Après petit-déj",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Connaître le nom de ses voisins vs ne pas les connaître — quelle est l'expérience adulte la plus normale aujourd'hui ?",
                "sideA": "Connaître",
                "sideB": "Ne pas connaître",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire les courses avec une liste vs sans liste — quel type de personne a une meilleure vie ?",
                "sideA": "Avec liste",
                "sideB": "Sans liste",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dire à son patron qu'on est malade vs aller travailler malade — quel est le choix le plus courageux ?",
                "sideA": "Le dire",
                "sideB": "Aller travailler",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à temps plein vs travailler à temps partiel — qu'est-ce qui est mieux ?",
                "sideA": "Temps plein",
                "sideB": "Temps partiel",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler dans un bureau vs travailler à domicile — que préférez-vous ?",
                "sideA": "Bureau",
                "sideB": "Domicile",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un travail qu'on aime vs un travail bien payé — qu'est-ce qui est le plus important ?",
                "sideA": "Travail aimé",
                "sideB": "Bien payé",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler avec d'autres personnes vs travailler seul — qu'est-ce qui est mieux ?",
                "sideA": "Avec les autres",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un trajet court vs un trajet long — qu'est-ce qui est le plus acceptable ?",
                "sideA": "Court",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre seul vs vivre avec un partenaire — qu'est-ce qui est mieux ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grande ville vs petite ville — quel est le meilleur endroit pour vivre en tant qu'adulte ?",
                "sideA": "Grande ville",
                "sideB": "Petite ville",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner à la maison vs manger à l'extérieur — qu'est-ce qui est mieux pour la vie quotidienne ?",
                "sideA": "À la maison",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir des enfants vs ne pas avoir d'enfants — quelle vie est la meilleure ?",
                "sideA": "Enfants",
                "sideB": "Pas d'enfants",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Louer un appartement vs acheter une maison — qu'est-ce qui est mieux pour les jeunes adultes ?",
                "sideA": "Louer",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire de l'exercice tous les jours vs se reposer — qu'est-ce qui est mieux pour votre santé ?",
                "sideA": "Exercice",
                "sideB": "Repos",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller chez le médecin vs attendre — qu'est-ce qui est mieux quand on se sent malade ?",
                "sideA": "Médecin",
                "sideB": "Attendre",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormir huit heures vs dormir moins — qu'est-ce qui est le plus réaliste pour les adultes ?",
                "sideA": "8 heures",
                "sideB": "Moins",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller au travail à pied vs prendre la voiture — qu'est-ce qui est mieux pour votre santé ?",
                "sideA": "À pied",
                "sideB": "Voiture",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Achats en ligne vs achats en magasin — que préférez-vous ?",
                "sideA": "En ligne",
                "sideB": "Magasin",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Économiser pour l'avenir vs profiter de l'argent maintenant — qu'est-ce qui est le plus sage ?",
                "sideA": "Économiser",
                "sideB": "Profiter maintenant",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choses chères vs choses bon marché — qu'est-ce qui a le meilleur rapport qualité-prix ?",
                "sideA": "Chères",
                "sideB": "Bon marché",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acheter neuf vs acheter d'occasion — qu'est-ce qui est mieux ?",
                "sideA": "Neuf",
                "sideB": "Occasion",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Regarder la télé à la maison vs sortir — quelle est la meilleure soirée ?",
                "sideA": "Télé",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances en famille vs vacances entre amis — qu'est-ce qui est mieux ?",
                "sideA": "Famille",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rester dans son pays vs voyager à l'étranger — quelles sont les meilleures vacances ?",
                "sideA": "Son pays",
                "sideB": "Étranger",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le sport vs la lecture — quel est le meilleur passe-temps pour les adultes ?",
                "sideA": "Sport",
                "sideB": "Lecture",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voir des amis souvent vs avoir du temps seul — qu'est-ce qui est le plus important ?",
                "sideA": "Amis",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Répondre aux e-mails immédiatement vs les laisser pour plus tard — qu'est-ce qui est le plus professionnel ?",
                "sideA": "Immédiatement",
                "sideB": "Plus tard",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire la vaisselle immédiatement vs la laisser jusqu'à demain — qu'est-ce qui est mieux ?",
                "sideA": "Immédiatement",
                "sideB": "Demain",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire au travail ?",
                "sideA": "En avance",
                "sideB": "En retard",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir un bureau très organisé vs un bureau en désordre — quelle personne est la plus productive ?",
                "sideA": "Organisé",
                "sideB": "Désordre",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parler de travail au dîner vs pas de discussion de travail au dîner — quelle règle est la meilleure ?",
                "sideA": "Parler travail",
                "sideB": "Pas de travail",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en famille vs Seul — qu'est-ce qui est mieux ?",
                "sideA": "En famille",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir un frère vs une sœur — qu'est-ce qui est mieux ?",
                "sideA": "Frère",
                "sideB": "Sœur",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Grande vs Petite famille — laquelle est la plus agréable ?",
                "sideA": "Grande",
                "sideB": "Petite",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'aîné vs Le cadet — qu'est-ce qui est mieux ?",
                "sideA": "Aîné",
                "sideB": "Cadet",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École le matin vs après-midi — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Après-midi",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lecture vs Maths — lequel est le plus amusant ?",
                "sideA": "Lecture",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "École vs Maison — qu'est-ce qui est mieux ?",
                "sideA": "École",
                "sideB": "Maison",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
                "sideA": "Devoirs",
                "sideB": "Aucun",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Seul vs Avec un partenaire — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Papier vs Ordinateur — lequel est le mieux ?",
                "sideA": "Papier",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Dîner",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chaud vs Froid — lequel est le mieux ?",
                "sideA": "Chaud",
                "sideB": "Froid",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Restaurant — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sucré vs Salé — que préférez-vous ?",
                "sideA": "Sucré",
                "sideB": "Salé",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs Acheter — qu'est-ce qui est plus agréable ?",
                "sideA": "Cuisiner",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se lever tôt vs tard — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Matin vs Soir — quel moment de la journée est le plus agréable ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Semaine vs Week-end — que préférez-vous ?",
                "sideA": "Semaine",
                "sideB": "Week-end",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Été vs Hiver — quelle saison est la meilleure ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se coucher tôt vs tard — qu'est-ce qui est le plus sain ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maison vs Appartement — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ville vs Campagne — où est-il préférable de vivre ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chambre vs Salon — quelle pièce préférez-vous ?",
                "sideA": "Chambre",
                "sideB": "Salon",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux d'intérieur vs d'extérieur — lesquels sont les plus amusants ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "TV vs Livre — lequel est le mieux ?",
                "sideA": "TV",
                "sideB": "Livre",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport vs Jeu vidéo — lequel est le plus amusant ?",
                "sideA": "Sport",
                "sideB": "Jeu vidéo",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dessin vs Chant — quel passe-temps est le meilleur ?",
                "sideA": "Dessin",
                "sideB": "Chant",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jouer seul vs avec des amis — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Natation vs Course — quel sport préférez-vous ?",
                "sideA": "Natation",
                "sideB": "Course",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique vs Sport — quel passe-temps est le meilleur ?",
                "sideA": "Musique",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Animaux de ferme vs sauvages — lesquels sont les plus intéressants ?",
                "sideA": "Ferme",
                "sideB": "Sauvages",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pluie vs Soleil — quel temps préférez-vous ?",
                "sideA": "Pluie",
                "sideB": "Soleil",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mer vs Montagne — lequel est le mieux pour les vacances ?",
                "sideA": "Mer",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fleurs vs Arbres — lesquels sont les plus beaux ?",
                "sideA": "Fleurs",
                "sideB": "Arbres",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voiture vs Bus — lequel est le mieux ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
                "sideA": "Marcher",
                "sideB": "Vélo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances courtes vs longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager seul vs en famille — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Famille",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Achats en ligne vs Achats en personne",
                "sideA": "En ligne",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [
                    "Commodité",
                    "Meilleurs prix"
                ],
                "ideasB": [
                    "Essayer les articles",
                    "Gratification instantanée"
                ]
            },
            {
                "topic": "Livres papier vs E-books",
                "sideA": "Papier",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [
                    "Odeur/Toucher",
                    "Collectionnable"
                ],
                "ideasB": [
                    "Portabilité",
                    "Gain de place"
                ]
            },
            {
                "topic": "Étudier le matin ou étudier le soir — quand est-ce mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Professeurs sévères ou professeurs sympas — qui aide le plus les élèves ?",
                "sideA": "Sévères",
                "sideB": "Sympas",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre avec un manuel ou apprendre avec des vidéos — qu'est-ce qui est plus efficace ?",
                "sideA": "Manuel",
                "sideB": "Vidéos",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cours courts ou cours longs — lesquels aident à mieux apprendre ?",
                "sideA": "Courts",
                "sideB": "Longs",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Projets de groupe ou travaux individuels — que préférez-vous ?",
                "sideA": "Groupe",
                "sideB": "Individuel",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Uniforme scolaire ou vêtements décontractés à l'école — qu'est-ce qui est mieux ?",
                "sideA": "Uniforme",
                "sideB": "Décontracté",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Repas faits maison ou restauration rapide — qu'est-ce qui est mieux ?",
                "sideA": "Fait maison",
                "sideB": "Fast-food",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Trois gros repas ou plusieurs petites collations — qu'est-ce qui est plus sain ?",
                "sideA": "Gros repas",
                "sideB": "Collations",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Nourriture végétarienne ou viande — quel régime est le meilleur ?",
                "sideA": "Végétarien",
                "sideB": "Viande",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Boire du thé ou boire du café — qu'est-ce qui est mieux ?",
                "sideA": "Thé",
                "sideB": "Café",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger seul ou manger avec d'autres — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Avec d'autres",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pratiquer un sport d'équipe ou un sport individuel — qu'est-ce qui est mieux ?",
                "sideA": "Sport d'équipe",
                "sideB": "Sport individuel",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer son temps libre à l'intérieur ou à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou théâtre — quelle est la meilleure sortie ?",
                "sideA": "Cinéma",
                "sideB": "Théâtre",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écouter de la musique ou jouer d'un instrument — qu'est-ce qui est plus agréable ?",
                "sideA": "Écouter",
                "sideB": "Jouer",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jeux vidéo ou jeux de société — lesquels sont les plus amusants ?",
                "sideA": "Jeux vidéo",
                "sideB": "Jeux de société",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Faire du shopping ou rester à la maison — quelle est la meilleure façon de passer le week-end ?",
                "sideA": "Shopping",
                "sideB": "Rester chez soi",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Téléphone portable ou ordinateur — lequel est le plus utile dans la vie quotidienne ?",
                "sideA": "Portable",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Envoyer un message ou passer un appel téléphonique — qu'est-ce qui est mieux ?",
                "sideA": "Message",
                "sideB": "Appel",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Livre numérique ou livre papier — lequel préférez-vous lire ?",
                "sideA": "E-book",
                "sideB": "Livre papier",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prendre des photos avec son téléphone ou avec un appareil photo — lequel donne de meilleurs résultats ?",
                "sideA": "Téléphone",
                "sideB": "Appareil photo",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vacances à la plage ou vacances à la montagne — qu'est-ce qui est mieux ?",
                "sideA": "Plage",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager en train ou voyager en avion — qu'est-ce qui est mieux ?",
                "sideA": "Train",
                "sideB": "Avion",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Visiter une ville célèbre ou visiter un petit village — qu'est-ce qui est plus intéressant ?",
                "sideA": "Ville",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Séjourner à l'hôtel ou chez l'habitant — que préférez-vous ?",
                "sideA": "Hôtel",
                "sideB": "Chez l'habitant",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Voyager à l'étranger ou explorer son propre pays — qu'est-ce qui en vaut le plus la peine ?",
                "sideA": "Étranger",
                "sideB": "Propre pays",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir beaucoup d'amis ou avoir quelques amis proches — qu'est-ce qui est mieux ?",
                "sideA": "Beaucoup",
                "sideB": "Amis proches",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rencontrer des amis en personne ou discuter en ligne — qu'est-ce qui est plus satisfaisant ?",
                "sideA": "En personne",
                "sideB": "En ligne",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre chez ses parents ou vivre dans un appartement étudiant — qu'est-ce qui est mieux pour les jeunes ?",
                "sideA": "Parents",
                "sideB": "Appartement étudiant",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Fêter son anniversaire à la maison ou sortir — qu'est-ce qui est le plus sympa ?",
                "sideA": "Maison",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Économiser de l'argent ou dépenser de l'argent — qu'est-ce qui est plus sage ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à temps partiel pendant ses études ou se concentrer uniquement sur l'école — qu'est-ce qui est mieux ?",
                "sideA": "Temps partiel",
                "sideB": "Études seules",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Gagner beaucoup d'argent ou avoir du temps libre — qu'est-ce qui compte le plus ?",
                "sideA": "Argent",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre avec ses grands-parents vs ne pas vivre avec eux — qu'est-ce qui est le plus agréable ?",
                "sideA": "Avec les grands-parents",
                "sideB": "Sans les grands-parents",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La cuisine de maman vs la cuisine de papa — laquelle est la meilleure ?",
                "sideA": "Maman",
                "sideB": "Papa",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Maths vs art — quelle matière est la plus amusante ?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écrire sur papier vs taper sur une tablette — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Tablette",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pizza vs pâtes — qu'est-ce qui est le plus bon ?",
                "sideA": "Pizza",
                "sideB": "Pâtes",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Glace vs gâteau — quel est le meilleur dessert ?",
                "sideA": "Glace",
                "sideB": "Gâteau",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Jours courts vs jours longs — qu'est-ce qui est mieux ?",
                "sideA": "Jours courts",
                "sideB": "Jours longs",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Journée au parc vs journée à la plage — qu'est-ce qui est mieux ?",
                "sideA": "Parc",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avion vs train — qu'est-ce qui est le plus amusant ?",
                "sideA": "Avion",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats qui renversent des choses vs chiens qui mâchent des chaussures — quel animal est le plus agaçant ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger de la pizza avec une fourchette vs avec les mains — qu'est-ce qui est correct ?",
                "sideA": "Fourchette",
                "sideB": "Mains",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Dormir avec des chaussettes vs sans chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Château de sable vs bonhomme de neige — qu'est-ce qui est le plus amusant à construire ?",
                "sideA": "Château de sable",
                "sideB": "Bonhomme de neige",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Beaucoup d'examens vs très peu d'examens — qu'est-ce qui est le plus juste ?",
                "sideA": "Beaucoup d'examens",
                "sideB": "Très peu d'examens",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Commencer l'école à 7 ans vs commencer à 5 ans — qu'est-ce qui est mieux pour les enfants ?",
                "sideA": "À 7 ans",
                "sideB": "À 5 ans",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Manger lentement vs manger rapidement — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Lentement",
                "sideB": "Rapidement",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner à la maison vs commander en ligne — qu'est-ce qui est mieux ?",
                "sideA": "Cuisiner",
                "sideB": "Commander",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cuisiner vs faire de la pâtisserie — qu'est-ce qui est le plus amusant comme passe-temps ?",
                "sideA": "Cuisiner",
                "sideB": "Pâtisser",
                "level": "elementary",
                "theme": "leisure_hobbies_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice dehors — qu'est-ce qui est mieux ?",
                "sideA": "Salle de sport",
                "sideB": "Dehors",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Photos sur téléphone vs photos imprimées — qu'est-ce qui est mieux ?",
                "sideA": "Téléphone",
                "sideB": "Imprimées",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Smart TV vs écran d'ordinateur — qu'est-ce qui est mieux pour regarder des films ?",
                "sideA": "Smart TV",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Pays chaud vs pays froid — quelle est la meilleure destination de vacances ?",
                "sideA": "Pays chaud",
                "sideB": "Pays froid",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Offrir des cadeaux vs recevoir des cadeaux — que préférez-vous ?",
                "sideA": "Offrir",
                "sideB": "Recevoir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à l'intérieur vs travailler à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "career_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ananas sur la pizza vs pas d'ananas — qu'est-ce qui est correct ?",
                "sideA": "Ananas",
                "sideB": "Pas d'ananas",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mettre le lait en premier vs mettre le thé — qu'est-ce qui est mieux ?",
                "sideA": "Lait d'abord",
                "sideB": "Thé d'abord",
                "level": "elementary",
                "theme": "food_nutrition_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lundi vs Vendredi — quel jour est réellement le pire ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se réveiller cinq minutes avant l'alarme vs dormir jusqu'à l'alarme — qu'est-ce qui est le plus agaçant ?",
                "sideA": "Avant l'alarme",
                "sideB": "Jusqu'à l'alarme",
                "level": "elementary",
                "theme": "neighbourhood_A2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Chats vs chiens — quel animal est secrètement le patron de la maison ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir trop chaud vs avoir trop froid — qu'est-ce qui est le pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Les dernières vacances que j'ai prises",
                "level": "elementary",
                "theme": "transport_travel_A2"
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
