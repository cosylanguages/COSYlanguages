(function() {
    const data = [{
                "topic": "Un salaire élevé vs un court trajet — qu'est-ce qui compte le plus dans un travail ?",
                "sideA": "Salaire élevé",
                "sideB": "Court trajet",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Augmenter la sécurité financière", "Acheter des produits de meilleure qualité"],
                "ideasB": ["Réduire le stress des trajets quotidiens", "Plus de temps pour la vie personnelle"]
            },
            {
                "topic": "Changer souvent d'emploi vs rester dans la même entreprise — qu'est-ce qui est le mieux pour votre carrière ?",
                "sideA": "Changer d'emploi",
                "sideB": "Rester",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Acquérir des expériences professionnelles variées", "Négocier un meilleur salaire"],
                "ideasB": ["Construire une confiance professionnelle à long terme", "Opportunités de promotion interne"]
            },
            {
                "topic": "Faire des heures supplémentaires vs partir à l'heure tous les jours — quelle est la meilleure habitude ?",
                "sideA": "Heures sup",
                "sideB": "À l'heure",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Terminer les projets urgents plus rapidement", "Démontrer un engagement fort"],
                "ideasB": ["Prévenir le burnout professionnel", "Maintenir un bon équilibre vie-travail"]
            },
            {
                "topic": "Un patron strict vs un patron détendu — pour qui est-il préférable de travailler ?",
                "sideA": "Patron strict",
                "sideB": "Patron détendu",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Attentes et règles claires", "Normes professionnelles plus élevées"],
                "ideasB": ["Encourager la pensée créative", "Moins de pression au travail"]
            },
            {
                "topic": "Travailler dans une grande entreprise vs une petite entreprise — qu'est-ce qui est mieux ?",
                "sideA": "Grande entreprise",
                "sideB": "Petite entreprise",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Parcours de carrière structurés", "Meilleurs avantages sociaux"],
                "ideasB": ["Atmosphère amicale et proche", "Responsabilités plus variées"]
            },
            {
                "topic": "Obtenir une promotion vs obtenir plus de temps libre — que choisiriez-vous ?",
                "sideA": "Promotion",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Croissance professionnelle et statut", "Responsabilité financière accrue"],
                "ideasB": ["Se concentrer sur les activités familiales", "Développer des loisirs personnels"]
            },
            {
                "topic": "Acheter une maison vs louer toute sa vie — quelle est la décision financière la plus intelligente ?",
                "sideA": "Acheter",
                "sideB": "Louer",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Investissement stable à long terme", "Liberté de rénover la propriété"],
                "ideasB": ["Plus grande flexibilité pour déménager", "Aucune responsabilité pour les réparations"]
            },
            {
                "topic": "Vivre en centre-ville vs vivre en banlieue — qu'est-ce qui est mieux ?",
                "sideA": "Centre-ville",
                "sideB": "Banlieue",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Magasins accessibles à pied", "Accès à une vie nocturne animée"],
                "ideasB": ["Environnement plus calme et sûr", "Plus d'espace pour les familles"]
            },
            {
                "topic": "Dépenser de l'argent pour des expériences vs pour des objets — qu'est-ce qui vous rend plus heureux ?",
                "sideA": "Expériences",
                "sideB": "Objets",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Créer des souvenirs durables", "Opportunités de croissance personnelle"],
                "ideasB": ["Utilisation pratique quotidienne", "Valeur physique durable"]
            },
            {
                "topic": "Cuisiner tous les jours vs préparer les repas une fois par semaine — qu'est-ce qui est le plus pratique ?",
                "sideA": "Cuisine quotidienne",
                "sideB": "Meal prepping",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Utiliser des ingrédients frais chaque jour", "Plus de variété dans l'alimentation"],
                "ideasB": ["Gagner un temps considérable", "Meilleure organisation de la cuisine"]
            },
            {
                "topic": "Avoir une femme de ménage vs faire son propre ménage — quel est le meilleur choix ?",
                "sideA": "Ménage pro",
                "sideB": "Soi-même",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Gagner du temps et de l'énergie", "Qualité de nettoyage professionnelle"],
                "ideasB": ["Économiser de l'argent", "Garder un contrôle total"]
            },
            {
                "topic": "Vivre avec un partenaire vs vivre seul — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Avec partenaire",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Partager les frais du foyer", "Soutien émotionnel constant"],
                "ideasB": ["Indépendance personnelle totale", "Paix et tranquillité"]
            },
            {
                "topic": "Avoir des enfants tôt vs avoir des enfants plus tard dans la vie — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Plus tard",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Plus d'énergie pour l'éducation", "Grandir avec ses enfants"],
                "ideasB": ["Meilleure stabilité financière", "Plus d'expérience de vie à partager"]
            },
            {
                "topic": "Relations familiales étroites vs indépendance vis-à-vis de la famille — qu'est-ce qui est le plus important à l'âge adulte ?",
                "sideA": "Relations étroites",
                "sideB": "Indépendance",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Soutien émotionnel fort", "Maintenir les traditions familiales"],
                "ideasB": ["Liberté personnelle", "Prendre des décisions indépendantes"]
            },
            {
                "topic": "Rencontrer de nouvelles personnes vs garder d'anciennes amitiés — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Nouvelles personnes",
                "sideB": "Anciens amis",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Apprendre de nouvelles perspectives", "Élargir son réseau professionnel"],
                "ideasB": ["Histoire personnelle partagée", "Niveau de confiance plus élevé"]
            },
            {
                "topic": "Socialiser après le travail vs rentrer directement à la maison — qu'est-ce qui est mieux pour les relations de travail ?",
                "sideA": "Socialiser",
                "sideB": "Rentrer",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Améliorer la collaboration d'équipe", "Communication informelle détendue"],
                "ideasB": ["Récupérer de l'énergie mentale", "Temps de qualité avec la famille"]
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice à l'extérieur — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Salle de sport",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Accès à des équipements modernes", "Travailler avec des entraîneurs pro"],
                "ideasB": ["Profiter de l'air frais", "Pas de frais d'adhésion mensuels"]
            },
            {
                "topic": "Régime strict vs manger de tout avec modération — qu'est-ce qui est plus sain ?",
                "sideA": "Régime strict",
                "sideB": "Modération",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Obtenir des résultats plus rapides", "Développer une discipline forte"],
                "ideasB": ["Équilibre durable à long terme", "Profiter de différents aliments"]
            },
            {
                "topic": "Voir un médecin tôt vs attendre de voir si on va mieux — qu'est-ce qui est le plus sage ?",
                "sideA": "Tôt",
                "sideB": "Attendre",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Recevoir un traitement rapide", "Prévenir des problèmes graves"],
                "ideasB": ["Laisser la récupération naturelle", "Éviter les médicaments inutiles"]
            },
            {
                "topic": "Dormir huit heures vs dormir six heures mais faire de l'exercice — qu'est-ce qui est mieux pour l'énergie ?",
                "sideA": "8 heures",
                "sideB": "6h + sport",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Récupération physique complète", "Meilleure humeur quotidienne"],
                "ideasB": ["Meilleure forme physique", "Maintenir le corps actif"]
            },
            {
                "topic": "Réduire le stress par le sport vs par la relaxation — qu'est-ce qui fonctionne le mieux ?",
                "sideA": "Sport",
                "sideB": "Relaxation",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Évacuation du stress physique", "Niveaux d'énergie plus élevés"],
                "ideasB": ["Paix mentale", "Calmer l'esprit"]
            },
            {
                "topic": "Smartphones vs conversation en face à face — qu'utilisons-nous le plus, et est-ce un problème ?",
                "sideA": "Smartphones",
                "sideB": "Face à face",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Accès mondial instantané", "Rester connecté en permanence"],
                "ideasB": ["Exprimer de réelles émotions", "Meilleure concentration personnelle"]
            },
            {
                "topic": "Banque en ligne vs aller à la banque — qu'est-ce qui est mieux ?",
                "sideA": "En ligne",
                "sideB": "Aller à la banque",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Très pratique", "Disponible 24h/24 et 7j/7"],
                "ideasB": ["Conseils d'experts personnels", "Sécurité physique"]
            },
            {
                "topic": "Travailler avec du papier vs travailler numériquement — qu'est-ce qui est le plus efficace ?",
                "sideA": "Papier",
                "sideB": "Numérique",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Meilleure concentration mentale", "Réduire la fatigue oculaire"],
                "ideasB": ["Stockage numérique efficace", "Recherche rapide d'informations"]
            },
            {
                "topic": "Réseaux sociaux pour le réseautage vs rencontrer les gens en personne — qu'est-ce qui est le plus utile professionnellement ?",
                "sideA": "Réseaux sociaux",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Atteindre un public mondial", "Contact professionnel rapide"],
                "ideasB": ["Construire une confiance plus forte", "Avoir un impact personnel"]
            },
            {
                "topic": "Voyage organisé vs voyage indépendant — qu'est-ce qui est mieux pour les adultes ?",
                "sideA": "Organisé",
                "sideB": "Indépendant",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Réduire le stress de la planification", "Normes de sécurité garanties"],
                "ideasB": ["Aventure authentique", "Expériences locales uniques"]
            },
            {
                "topic": "Séjour en ville vs vacances à la plage — quelle est la meilleure façon de se détendre ?",
                "sideA": "Séjour en ville",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Visites culturelles intéressantes", "Goûter la cuisine locale"],
                "ideasB": ["Brise marine relaxante", "Détente physique complète"]
            },
            {
                "topic": "Une seule longue vacance par an vs plusieurs courts séjours — qu'est-ce qui est mieux ?",
                "sideA": "Une seule longue",
                "sideB": "Plusieurs courtes",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Repos mental profond", "Voyager dans des endroits lointains"],
                "ideasB": ["Pauses régulières du travail", "Visiter plus de destinations"]
            },
            {
                "topic": "Voyager en couple vs voyager seul — qu'est-ce qui est le plus agréable ?",
                "sideA": "En couple",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Partager des souvenirs spéciaux", "Frais partagés réduits"],
                "ideasB": ["Choix personnel complet", "Rencontrer plus de locaux"]
            },
            {
                "topic": "Parler à son partenaire de chaque petit problème vs garder les choses pour soi — qu'est-ce qui est le plus sain ?",
                "sideA": "Tout dire",
                "sideB": "Garder pour soi",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Pleine honnêteté émotionnelle", "Recevoir un soutien mutuel"],
                "ideasB": ["Éviter les drames inutiles", "Paix mentale intérieure"]
            },
            {
                "topic": "Consulter son téléphone dès le matin vs attendre après le petit-déjeuner — quelle est la meilleure habitude ?",
                "sideA": "Dès le matin",
                "sideB": "Après petit-déj",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Vérifier les nouvelles urgentes", "Planifier sa journée tôt"],
                "ideasB": ["Début de journée tranquille", "Pratiquer l'alimentation consciente"]
            },
            {
                "topic": "Connaître le nom de ses voisins vs ne pas les connaître — quelle est l'expérience adulte la plus normale aujourd'hui ?",
                "sideA": "Connaître",
                "sideB": "Ne pas connaître",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Fort sentiment de communauté", "Entraide et sécurité"],
                "ideasB": ["Garder une vie privée totale", "Éviter les commérages"]
            },
            {
                "topic": "Faire les courses avec une liste vs sans liste — quel type de personne a une meilleure vie ?",
                "sideA": "Avec liste",
                "sideB": "Sans liste",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Mode de vie organisé", "Économiser de l'argent"],
                "ideasB": ["Choix spontanés", "Idées de cuisine créatives"]
            },
            {
                "topic": "Dire à son patron qu'on est malade vs aller travailler malade — quel est le choix le plus courageux ?",
                "sideA": "Le dire",
                "sideB": "Aller travailler",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Protéger ses collègues", "Récupérer plus rapidement"],
                "ideasB": ["Montrer son engagement", "Respecter les délais importants"]
            },
            {
                "topic": "Travailler à temps plein vs travailler à temps partiel — qu'est-ce qui est mieux ?",
                "sideA": "Temps plein",
                "sideB": "Temps partiel",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Croissance de carrière stable", "Meilleure stabilité financière"],
                "ideasB": ["Meilleur équilibre de vie", "Plus de temps pour étudier"]
            },
            {
                "topic": "Travailler dans un bureau vs travailler à domicile — que préférez-vous ?",
                "sideA": "Bureau",
                "sideB": "Domicile",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Contact social important", "Espace de travail pro"],
                "ideasB": ["Pas de temps de trajet", "Horaires flexibles"]
            },
            {
                "topic": "Un travail qu'on aime vs un travail bien payé — qu'est-ce qui est le plus important ?",
                "sideA": "Travail aimé",
                "sideB": "Bien payé",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Passion professionnelle quotidienne", "Moins de stress"],
                "ideasB": ["Grande liberté financière", "Qualité de vie supérieure"]
            },
            {
                "topic": "Travailler avec d'autres personnes vs travailler seul — qu'est-ce qui est mieux ?",
                "sideA": "Avec les autres",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Recevoir le soutien de l'équipe", "Échanger des idées variées"],
                "ideasB": ["Concentration mentale calme", "Style de travail indépendant"]
            },
            {
                "topic": "Un trajet court vs un trajet long — qu'est-ce qui est le plus acceptable ?",
                "sideA": "Court",
                "sideB": "Long",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Plus de temps libre quotidien", "Moins de fatigue de trajet"],
                "ideasB": ["Logement moins cher", "Temps pour les podcasts"]
            },
            {
                "topic": "Vivre seul vs vivre avec un partenaire — qu'est-ce qui est mieux ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Espace personnel privé", "Indépendance totale"],
                "ideasB": ["Vie quotidienne partagée", "Soutien dans les problèmes"]
            },
            {
                "topic": "Grande ville vs petite ville — quel est le meilleur endroit pour vivre en tant qu'adulte ?",
                "sideA": "Grande ville",
                "sideB": "Petite ville",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Marchés du travail dynamiques", "Divertissements infinis"],
                "ideasB": ["Coût de la vie moins élevé", "Air pur et frais"]
            },
            {
                "topic": "Cuisiner à la maison vs manger à l'extérieur — qu'est-ce qui est mieux pour la vie quotidienne ?",
                "sideA": "À la maison",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Repas beaucoup plus sains", "Réduire les coûts du foyer"],
                "ideasB": ["Pas de nettoyage de cuisine", "Goûter de la cuisine pro"]
            },
            {
                "topic": "Avoir des enfants vs ne pas avoir d'enfants — quelle vie est la meilleure ?",
                "sideA": "Enfants",
                "sideB": "Pas d'enfants",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Créer un héritage familial", "Vivre l'amour et la joie"],
                "ideasB": ["Liberté totale de voyager", "Forte concentration sur la carrière"]
            },
            {
                "topic": "Louer un appartement vs acheter une maison — qu'est-ce qui est mieux pour les jeunes adultes ?",
                "sideA": "Louer",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Plus grande mobilité sociale", "Moins de soucis financiers"],
                "ideasB": ["Se constituer un capital", "Espace pour un jardin"]
            },
            {
                "topic": "Faire de l'exercice tous les jours vs se reposer — qu'est-ce qui est mieux pour votre santé ?",
                "sideA": "Exercice",
                "sideB": "Repos",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Meilleure forme physique", "Augmenter les niveaux d'énergie"],
                "ideasB": ["Récupération musculaire essentielle", "Soutenir la santé mentale"]
            },
            {
                "topic": "Aller chez le médecin vs attendre — qu'est-ce qui est mieux quand on se sent malade ?",
                "sideA": "Médecin",
                "sideB": "Attendre",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Obtenir des conseils pro", "Récupération médicale rapide"],
                "ideasB": ["Éviter les cliniques bondées", "Favoriser la guérison naturelle"]
            },
            {
                "topic": "Dormir huit heures vs dormir moins — qu'est-ce qui est le plus réaliste pour les adultes ?",
                "sideA": "8 heures",
                "sideB": "Moins",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Concentration mentale maximale", "Meilleure humeur"],
                "ideasB": ["Faire face à la réalité", "Temps pour les loisirs"]
            },
            {
                "topic": "Aller au travail à pied vs prendre la voiture — qu'est-ce qui est mieux pour votre santé ?",
                "sideA": "À pied",
                "sideB": "Voiture",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Mouvement physique actif", "Bon départ pour la journée"],
                "ideasB": ["Protection contre la météo", "Économiser son énergie"]
            },
            {
                "topic": "Achats en ligne vs achats en magasin — que préférez-vous ?",
                "sideA": "En ligne",
                "sideB": "Magasin",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Praticité des achats", "Trouver de meilleurs prix"],
                "ideasB": ["Essayer les vêtements", "Soutenir les commerces locaux"]
            },
            {
                "topic": "Économiser pour l'avenir vs profiter de l'argent maintenant — qu'est-ce qui est le plus sage ?",
                "sideA": "Économiser",
                "sideB": "Profiter maintenant",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Sécurité financière future", "Investissement à long terme"],
                "ideasB": ["Augmenter le bonheur mental", "Vivre pleinement sa vie"]
            },
            {
                "topic": "Choses chères vs choses bon marché — qu'est-ce qui a le meilleur rapport qualité-prix ?",
                "sideA": "Chères",
                "sideB": "Bon marché",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Meilleure qualité de produit", "Grande durabilité"],
                "ideasB": ["Faible risque financier", "Économiser plus d'argent"]
            },
            {
                "topic": "Acheter neuf vs acheter d'occasion — qu'est-ce qui est mieux ?",
                "sideA": "Neuf",
                "sideB": "Occasion",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["En parfait état", "Garanties sur le produit"],
                "ideasB": ["Choix écologique", "Prix très bas"]
            },
            {
                "topic": "Regarder la télé à la maison vs sortir — quelle est la meilleure soirée ?",
                "sideA": "Télé",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Détente complète", "Coût financier nul"],
                "ideasB": ["Contact social", "Atmosphère vibrante"]
            },
            {
                "topic": "Vacances en famille vs vacances entre amis — qu'est-ce qui est mieux ?",
                "sideA": "Famille",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Lien émotionnel profond", "Aide financière supplémentaire"],
                "ideasB": ["Partager les mêmes loisirs", "Niveaux d'énergie dynamiques"]
            },
            {
                "topic": "Rester dans son pays vs voyager à l'étranger — quelles sont les meilleures vacances ?",
                "sideA": "Son pays",
                "sideB": "Étranger",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Facilité de voyage", "Soutenir le tourisme local"],
                "ideasB": ["Découvrir d'autres cultures", "Pratiquer de nouvelles langues"]
            },
            {
                "topic": "Le sport vs la lecture — quel est le meilleur passe-temps pour les adultes ?",
                "sideA": "Sport",
                "sideB": "Lecture",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Améliorer la santé physique", "Esprit d'équipe"],
                "ideasB": ["Stimuler la croissance mentale", "Détente mentale profonde"]
            },
            {
                "topic": "Voir des amis souvent vs avoir du temps seul — qu'est-ce qui est le plus important ?",
                "sideA": "Amis",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Soutien social vital", "Rires partagés"],
                "ideasB": ["Espace de réflexion", "Paix mentale totale"]
            },
            {
                "topic": "Répondre aux e-mails immédiatement vs les laisser pour plus tard — qu'est-ce qui est le plus professionnel ?",
                "sideA": "Immediatement",
                "sideB": "Plus tard",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Grande efficacité", "Augmenter la fiabilité"],
                "ideasB": ["Préparer des réponses réfléchies", "Garder sa concentration"]
            },
            {
                "topic": "Faire la vaisselle immédiatement vs la laisser jusqu'à demain — qu'est-ce qui est mieux ?",
                "sideA": "Immédiatement",
                "sideB": "Demain",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Garder une cuisine propre", "Début de journée serein"],
                "ideasB": ["Profiter du repos du soir", "Passer du temps en famille"]
            },
            {
                "topic": "Être toujours en avance vs toujours cinq minutes en retard — qu'est-ce qui est pire au travail ?",
                "sideA": "En avance",
                "sideB": "En retard",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Temps d'attente perdu", "Écart de productivité"],
                "ideasB": ["Manque de professionnalisme", "Rater le début des réunions"]
            },
            {
                "topic": "Avoir un bureau très organisé vs un bureau en désordre — quelle personne est la plus productive ?",
                "sideA": "Organisé",
                "sideB": "Désordre",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Trouver les documents vite", "Esprit clair"],
                "ideasB": ["Favorise le chaos créatif", "Accès rapide aux outils"]
            },
            {
                "topic": "Parler de travail au dîner vs pas de discussion de travail au dîner — quelle règle est la meilleure ?",
                "sideA": "Parler travail",
                "sideB": "Pas de travail",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Partager ses problèmes", "Lien professionnel"],
                "ideasB": ["Se déconnecter", "Repos de qualité"]
            },
            {
                "topic": "Vivre en famille vs Seul — qu'est-ce qui est mieux ?",
                "sideA": "En famille",
                "sideB": "Seul",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Compagnie constante", "Système de soutien"],
                "ideasB": ["Indépendance totale", "Vie privée absolue"]
            },
            {
                "topic": "Avoir un frère vs une sœur — qu'est-ce qui est mieux ?",
                "sideA": "Frère",
                "sideB": "Sœur",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Faire du sport", "Sentiment de protection"],
                "ideasB": ["Discussions profondes", "Partager des secrets"]
            },
            {
                "topic": "Grande vs Petite famille — laquelle est la plus agréable ?",
                "sideA": "Grande",
                "sideB": "Petite",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Maison vivante et animée", "Beaucoup d'amusement"],
                "ideasB": ["Vie tranquille", "Liens émotionnels forts"]
            },
            {
                "topic": "L'aîné vs Le cadet — qu'est-ce qui est mieux ?",
                "sideA": "Aîné",
                "sideB": "Cadet",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Sens du leadership", "Apprendre la responsabilité"],
                "ideasB": ["Plus d'attention", "Règles plus souples"]
            },
            {
                "topic": "École le matin vs après-midi — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Après-midi",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Temps libre l'après-midi", "Garder une routine"],
                "ideasB": ["Dormir plus tard", "Début de journée calme"]
            },
            {
                "topic": "Lecture vs Maths — lequel est le plus amusant ?",
                "sideA": "Lecture",
                "sideB": "Maths",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Histoires captivantes", "Enrichir son vocabulaire"],
                "ideasB": ["Résolution de problèmes", "Pensée logique"]
            },
            {
                "topic": "École vs Maison — qu'est-ce qui est mieux ?",
                "sideA": "École",
                "sideB": "Maison",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Contact social direct", "Aide du professeur"],
                "ideasB": ["Confort", "Horaires flexibles"]
            },
            {
                "topic": "Devoirs vs Pas de devoirs — qu'est-ce qui aide le plus ?",
                "sideA": "Devoirs",
                "sideB": "Aucun",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Renforcer les leçons", "Autodiscipline"],
                "ideasB": ["Temps libre", "Période de repos mental"]
            },
            {
                "topic": "Seul vs Avec un partenaire — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Partenaire",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Concentration individuelle", "Étude indépendante"],
                "ideasB": ["Partager le savoir", "Amusement collaboratif"]
            },
            {
                "topic": "Papier vs Ordinateur — lequel est le mieux ?",
                "sideA": "Papier",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Sensation de l'écriture", "Améliorer la mémoire"],
                "ideasB": ["Vitesse de frappe", "Recherche numérique"]
            },
            {
                "topic": "Petit-déjeuner vs Dîner — quel repas est le plus important ?",
                "sideA": "Petit-déjeuner",
                "sideB": "Dîner",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Énergie matinale", "Habitudes saines"],
                "ideasB": ["Moment familial", "Repas principal"]
            },
            {
                "topic": "Chaud vs Froid — lequel est le mieux ?",
                "sideA": "Chaud",
                "sideB": "Froid",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Réconfortant en hiver", "Goût traditionnel"],
                "ideasB": ["Frais pour l'été", "Variété de salades"]
            },
            {
                "topic": "Maison vs Restaurant — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Restaurant",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Contrôle des ingrédients", "Coût réduit"],
                "ideasB": ["Chefs professionnels", "Pas de ménage"]
            },
            {
                "topic": "Sucré vs Salé — que préférez-vous ?",
                "sideA": "Sucré",
                "sideB": "Salé",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Énergie instantanée", "Délicieuses douceurs"],
                "ideasB": ["Valeur nutritionnelle", "Rassasié plus longtemps"]
            },
            {
                "topic": "Cuisiner vs Acheter — qu'est-ce qui est plus agréable ?",
                "sideA": "Cuisiner",
                "sideB": "Acheter",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Processus créatif", "Ingrédients sains"],
                "ideasB": ["Grande praticité", "Gagner du temps"]
            },
            {
                "topic": "Se lever tôt vs tard — qu'est-ce qui est mieux ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Heures productives", "Lever de soleil calme"],
                "ideasB": ["Repos complet", "Énergie nocturne"]
            },
            {
                "topic": "Matin vs Soir — quel moment de la journée est le plus agréable ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Atmosphère fraîche", "Nouveau départ"],
                "ideasB": ["Moment social", "Relaxation totale"]
            },
            {
                "topic": "Semaine vs Week-end — que préférez-vous ?",
                "sideA": "Semaine",
                "sideB": "Week-end",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Travail productif", "Structure régulière"],
                "ideasB": ["Liberté totale", "Temps pour les loisirs"]
            },
            {
                "topic": "Été vs Hiver — quelle saison est la meilleure ?",
                "sideA": "Été",
                "sideB": "Hiver",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Plages ensoleillées", "Vie en plein air"],
                "ideasB": ["Activités de neige", "Ambiance cosy"]
            },
            {
                "topic": "Se coucher tôt vs tard — qu'est-ce qui est le plus sain ?",
                "sideA": "Tôt",
                "sideB": "Tard",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Rythme naturel", "Meilleure humeur"],
                "ideasB": ["Créativité du soir", "Temps pour les films"]
            },
            {
                "topic": "Maison vs Appartement — lequel est le mieux ?",
                "sideA": "Maison",
                "sideB": "Appartement",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Jardin privé", "Plus d'espace"],
                "ideasB": ["Ménage facile", "Position centrale"]
            },
            {
                "topic": "Ville vs Campagne — où est-il préférable de vivre ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Vie culturelle", "Marché du travail"],
                "ideasB": ["Air pur", "Nature calme"]
            },
            {
                "topic": "Chambre vs Salon — quelle pièce préférez-vous ?",
                "sideA": "Chambre",
                "sideB": "Salon",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Vie privée", "Refuge pour dormir"],
                "ideasB": ["Espace familial", "Grand écran TV"]
            },
            {
                "topic": "Jeux d'intérieur vs d'extérieur — lesquels sont les plus amusants ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Jeux de société", "Pas de météo"],
                "ideasB": ["Mouvement", "Bienfaits du soleil"]
            },
            {
                "topic": "TV vs Livre — lequel est le mieux ?",
                "sideA": "TV",
                "sideB": "Livre",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Histoires visuelles", "Détente facile"],
                "ideasB": ["Imagination profonde", "Vocabulaire"]
            },
            {
                "topic": "Sport vs Jeu vidéo — lequel est le plus amusant ?",
                "sideA": "Sport",
                "sideB": "Jeu vidéo",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Forme physique", "Équipe sociale"],
                "ideasB": ["Compétences strat.", "Mondes digitaux"]
            },
            {
                "topic": "Dessin vs Chant — quel passe-temps est le meilleur ?",
                "sideA": "Dessin",
                "sideB": "Chant",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Créativité visuelle", "Temps pour soi"],
                "ideasB": ["Libération émotionnelle", "Expression"]
            },
            {
                "topic": "Jouer seul vs avec des amis — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Amis",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Concentration", "Indépendance"],
                "ideasB": ["Rires partagés", "Jeu collaboratif"]
            },
            {
                "topic": "Natation vs Course — quel sport préférez-vous ?",
                "sideA": "Natation",
                "sideB": "Course",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Eau rafraîchissante", "Articulations"],
                "ideasB": ["Facile à commencer", "Vues extérieures"]
            },
            {
                "topic": "Musique vs Sport — quel passe-temps est le meilleur ?",
                "sideA": "Musique",
                "sideB": "Sport",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Paix émotionnelle", "Culture"],
                "ideasB": ["Santé physique", "Succès d'équipe"]
            },
            {
                "topic": "Animaux de ferme vs sauvages — lesquels sont les plus intéressants ?",
                "sideA": "Ferme",
                "sideB": "Sauvages",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Produits utiles", "Compagnons amicaux"],
                "ideasB": ["Biomes exotiques", "Mystère naturel"]
            },
            {
                "topic": "Pluie vs Soleil — quel temps préférez-vous ?",
                "sideA": "Pluie",
                "sideB": "Soleil",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Essentiel aux plantes", "Ambiance cocooning"],
                "ideasB": ["Temps de plage", "Vitamine D"]
            },
            {
                "topic": "Mer vs Montagne — lequel est le mieux pour les vacances ?",
                "sideA": "Mer",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Baignade", "Vagues relaxantes"],
                "ideasB": ["Air pur", "Vues magnifiques"]
            },
            {
                "topic": "Fleurs vs Arbres — lesquels sont les plus beaux ?",
                "sideA": "Fleurs",
                "sideB": "Arbres",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Couleurs vives", "Doux parfums"],
                "ideasB": ["Hauteur majestueuse", "Fournissent de l'oxygène"]
            },
            {
                "topic": "Voiture vs Bus — lequel est le mieux ?",
                "sideA": "Voiture",
                "sideB": "Bus",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Trajet privé", "Porte-à-porte"],
                "ideasB": ["Coûts réduits", "Écologique"]
            },
            {
                "topic": "Marcher vs Vélo — quel est le meilleur moyen de se déplacer ?",
                "sideA": "Marcher",
                "sideB": "Vélo",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Simple", "Bienfaits santé"],
                "ideasB": ["Vitesse", "Plus longue distance"]
            },
            {
                "topic": "Vacances courtes vs longues — qu'est-ce qui est mieux ?",
                "sideA": "Courtes",
                "sideB": "Longues",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Pauses régulières", "Petit budget"],
                "ideasB": ["Réinitialisation", "Immersion culturelle"]
            },
            {
                "topic": "Voyager seul vs en famille — lequel est le plus amusant ?",
                "sideA": "Seul",
                "sideB": "Famille",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Croissance", "Liberté totale"],
                "ideasB": ["Joie partagée", "Soutien financier"]
            },
            {
                "topic": "Achats en ligne vs Achats en personne",
                "sideA": "En ligne",
                "sideB": "En personne",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Praticité", "Meilleurs prix"],
                "ideasB": ["Essayer", "Gratification instantanée"]
            },
            {
                "topic": "Livres papier vs E-books",
                "sideA": "Papier",
                "sideB": "E-books",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Toucher traditionnel", "Collection"],
                "ideasB": ["Portabilité", "Gain de place"]
            },
            {
                "topic": "Étudier le matin ou étudier le soir — quand est-ce mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Cerveau frais", "Pas de distractions"],
                "ideasB": ["Calme nocturne", "Révision du jour"]
            },
            {
                "topic": "Professeurs sévères ou professeurs sympas — qui aide le plus les élèves ?",
                "sideA": "Sévères",
                "sideB": "Sympas",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Haute discipline", "Normes claires"],
                "ideasB": ["Motivation", "Questions ouvertes"]
            },
            {
                "topic": "Apprendre avec un manuel ou apprendre avec des vidéos — qu'est-ce qui est plus efficace ?",
                "sideA": "Manuel",
                "sideB": "Vidéos",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Leçons structurées", "Expérience tactile"],
                "ideasB": ["Bases visuelles", "Contenu dynamique"]
            },
            {
                "topic": "Cours courts ou cours longs — lesquels aident à mieux apprendre ?",
                "sideA": "Courts",
                "sideB": "Longs",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Meilleure concentration", "Moins de fatigue"],
                "ideasB": ["Immersion profonde", "Étude détaillée"]
            },
            {
                "topic": "Projets de groupe ou travaux individuels — que préférez-vous ?",
                "sideA": "Groupe",
                "sideB": "Individuel",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Améliorer la collab", "Échanger des idées"],
                "ideasB": ["Autosuffisance", "Focus personnel"]
            },
            {
                "topic": "Uniforme scolaire ou vêtements décontractés à l'école — qu'est-ce qui est mieux ?",
                "sideA": "Uniforme",
                "sideB": "Décontracté",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Égalité des élèves", "Simplicité"],
                "ideasB": ["Expression de soi", "Confort"]
            },
            {
                "topic": "Repas faits maison ou restauration rapide — qu'est-ce qui est mieux ?",
                "sideA": "Fait maison",
                "sideB": "Fast-food",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Choix sains", "Recettes spécifiques"],
                "ideasB": ["Service instantané", "Pratique"]
            },
            {
                "topic": "Trois gros repas ou plusieurs petites collations — qu'est-ce qui est plus sain ?",
                "sideA": "Gros repas",
                "sideB": "Collations",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Rythme cohérent", "Satiété"],
                "ideasB": ["Énergie stable", "Métabolisme"]
            },
            {
                "topic": "Nourriture végétarienne ou viande — quel régime est le meilleur ?",
                "sideA": "Végétarien",
                "sideB": "Viande",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Écologique", "Digestion légère"],
                "ideasB": ["Protéines", "Gout traditionnel"]
            },
            {
                "topic": "Boire du thé ou boire du café — qu'est-ce qui est mieux ?",
                "sideA": "Thé",
                "sideB": "Café",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Calmant", "Plantes saines"],
                "ideasB": ["Énergie", "Culture sociale"]
            },
            {
                "topic": "Manger seul ou manger avec d'autres — que préférez-vous ?",
                "sideA": "Seul",
                "sideB": "Avec d'autres",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Calme", "Alimentation consciente"],
                "ideasB": ["Lien social", "Partager la joie"]
            },
            {
                "topic": "Pratiquer un sport d'équipe ou un sport individuel — qu'est-ce qui est mieux ?",
                "sideA": "Sport d'équipe",
                "sideB": "Sport individuel",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Coopération", "Soutien social"],
                "ideasB": ["Objectifs persos", "Autonomie"]
            },
            {
                "topic": "Passer son temps libre à l'intérieur ou à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Confort intérieur", "Loisirs digitaux"],
                "ideasB": ["Santé", "Mouvement physique"]
            },
            {
                "topic": "Cinéma ou théâtre — quelle est la meilleure sortie ?",
                "sideA": "Cinéma",
                "sideB": "Théâtre",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Écran immersif", "Effets sonores"],
                "ideasB": ["Jeu en direct", "Tradition culturelle"]
            },
            {
                "topic": "Écouter de la musique ou jouer d'un instrument — qu'est-ce qui est plus agréable ?",
                "sideA": "Écouter",
                "sideB": "Jouer",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Joie sans effort", "Variété musicale"],
                "ideasB": ["Développement", "Expression créative"]
            },
            {
                "topic": "Jeux vidéo ou jeux de société — lesquels sont les plus amusants ?",
                "sideA": "Jeux vidéo",
                "sideB": "Jeux de société",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Mondes profonds", "Amis en ligne"],
                "ideasB": ["Face-à-face", "Pièces tactiles"]
            },
            {
                "topic": "Faire du shopping ou rester à la maison — quelle est la meilleure façon de passer le week-end ?",
                "sideA": "Shopping",
                "sideB": "Rester chez soi",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Activité sociale", "Découvrir"],
                "ideasB": ["Détente mentale", "Récupération physique"]
            },
            {
                "topic": "Téléphone portable ou ordinateur — lequel est le plus utile dans la vie quotidienne ?",
                "sideA": "Portable",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Portabilité", "Alertes instantanées"],
                "ideasB": ["Grand écran", "Outils de travail"]
            },
            {
                "topic": "Envoyer un message ou passer un appel téléphonique — qu'est-ce qui est mieux ?",
                "sideA": "Message",
                "sideB": "Appel",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Communication asynchrone", "Édition facile"],
                "ideasB": ["Émotion vocale", "Résultats directs"]
            },
            {
                "topic": "Livre numérique ou livre papier — lequel préférez-vous lire ?",
                "sideA": "E-book",
                "sideB": "Livre papier",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Gain de place", "Dictionnaire intégré"],
                "ideasB": ["Toucher tactile", "Pas de batterie"]
            },
            {
                "topic": "Prendre des photos avec son téléphone ou avec un appareil photo — lequel donne de meilleurs résultats ?",
                "sideA": "Téléphone",
                "sideB": "Appareil photo",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Pratique", "Partage direct"],
                "ideasB": ["Qualité optique", "Contrôle manuel"]
            },
            {
                "topic": "Vacances à la plage ou vacances à la montagne — qu'est-ce qui est mieux ?",
                "sideA": "Plage",
                "sideB": "Montagne",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Vibes côtières", "Baignade"],
                "ideasB": ["Randonnée", "Vues panoramiques"]
            },
            {
                "topic": "Voyager en train ou voyager en avion — qu'est-ce qui est mieux ?",
                "sideA": "Train",
                "sideB": "Avion",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Routes panoramiques", "Écologique"],
                "ideasB": ["Vitesse", "Longue distance"]
            },
            {
                "topic": "Visiter une ville célèbre ou visiter un petit village — qu'est-ce qui est plus intéressant ?",
                "sideA": "Ville",
                "sideB": "Village",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Monuments", "Vie culturelle"],
                "ideasB": ["Traditions", "Charme tranquille"]
            },
            {
                "topic": "Séjourner à l'hôtel ou chez l'habitant — que préférez-vous ?",
                "sideA": "Hôtel",
                "sideB": "Chez l'habitant",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Vie privée", "Service pro"],
                "ideasB": ["Échange culturel", "Pratique langue"]
            },
            {
                "topic": "Voyager à l'étranger ou explorer son propre pays — qu'est-ce qui en vaut le plus la peine ?",
                "sideA": "Étranger",
                "sideB": "Propre pays",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Horizons mondiaux", "Langues"],
                "ideasB": ["Trésors cachés", "Planification"]
            },
            {
                "topic": "Avoir beaucoup d'amis ou avoir quelques amis proches — qu'est-ce qui est mieux ?",
                "sideA": "Beaucoup",
                "sideB": "Amis proches",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Réseau social", "Loisirs variés"],
                "ideasB": ["Loyauté profonde", "Lien de confiance"]
            },
            {
                "topic": "Rencontrer des amis en personne ou discuter en ligne — qu'est-ce qui est plus satisfaisant ?",
                "sideA": "En personne",
                "sideB": "En ligne",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Énergie directe", "Partager un repas"],
                "ideasB": ["Efficacité", "Rester connecté"]
            },
            {
                "topic": "Vivre chez ses parents ou vivre dans un appartement étudiant — qu'est-ce qui est mieux pour les jeunes ?",
                "sideA": "Parents",
                "sideB": "Appartement étudiant",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Aide financière", "Repas maison"],
                "ideasB": ["Vie sociale", "Autosuffisance"]
            },
            {
                "topic": "Fêter son anniversaire à la maison ou sortir — qu'est-ce qui est le plus sympa ?",
                "sideA": "Maison",
                "sideB": "Sortir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Touche personnelle", "Ambiance cosy"],
                "ideasB": ["Pas de ménage", "Cuisine pro"]
            },
            {
                "topic": "Économiser de l'argent ou dépenser de l'argent — qu'est-ce qui est plus sage ?",
                "sideA": "Économiser",
                "sideB": "Dépenser",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Paix mentale future", "Gros achats"],
                "ideasB": ["Joie instantanée", "Santé économique"]
            },
            {
                "topic": "Travailler à temps partiel pendant ses études ou se concentrer uniquement sur l'école — qu'est-ce qui est mieux ?",
                "sideA": "Temps partiel",
                "sideB": "Études seules",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Indépendance", "Expérience pro"],
                "ideasB": ["Excellence", "Moins de stress"]
            },
            {
                "topic": "Gagner beaucoup d'argent ou avoir du temps libre — qu'est-ce qui compte le plus ?",
                "sideA": "Argent",
                "sideB": "Temps libre",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Qualité de vie", "Épargne retraite"],
                "ideasB": ["Santé mentale", "Famille et loisirs"]
            },
            {
                "topic": "Vivre avec ses grands-parents vs ne pas vivre avec eux — qu'est-ce qui est le plus agréable ?",
                "sideA": "Avec les grands-parents",
                "sideB": "Sans les grands-parents",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Sagesse", "Aide avec les enfants"],
                "ideasB": ["Plus d'intimité", "Calme"]
            },
            {
                "topic": "La cuisine de maman vs la cuisine de papa — laquelle est la meilleure ?",
                "sideA": "Maman",
                "sideB": "Papa",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Gout traditionnel", "Réconfortant"],
                "ideasB": ["Nouvelles recettes", "Douceurs du week-end"]
            },
            {
                "topic": "Maths vs art — quelle matière est la plus amusante ?",
                "sideA": "Maths",
                "sideB": "Art",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Résolution", "Logique"],
                "ideasB": ["Expression de soi", "Libération"]
            },
            {
                "topic": "Écrire sur papier vs taper sur une tablette — qu'est-ce qui est mieux ?",
                "sideA": "Papier",
                "sideB": "Tablette",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Mémoire physique", "Santé oculaire"],
                "ideasB": ["Rangement", "Correction auto"]
            },
            {
                "topic": "Pizza vs pâtes — qu'est-ce qui est le plus bon ?",
                "sideA": "Pizza",
                "sideB": "Pâtes",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Partager", "Variété de garnitures"],
                "ideasB": ["Formes de pâtes", "Sauces riches"]
            },
            {
                "topic": "Glace vs gâteau — quel est le meilleur dessert ?",
                "sideA": "Glace",
                "sideB": "Gâteau",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Rafraîchissant", "Goûts intenses"],
                "ideasB": ["Réconfort chaud", "Célébration"]
            },
            {
                "topic": "Jours courts vs jours longs — qu'est-ce qui est mieux ?",
                "sideA": "Jours courts",
                "sideB": "Jours longs",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Nuits cosy", "Vie intérieure"],
                "ideasB": ["Vitamine D", "Plus d'extérieur"]
            },
            {
                "topic": "Journée au parc vs journée à la plage — qu'est-ce qui est mieux ?",
                "sideA": "Parc",
                "sideB": "Plage",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Nature locale", "Picnic"],
                "ideasB": ["Brise marine", "Activités nautiques"]
            },
            {
                "topic": "Avion vs train — qu'est-ce qui est le plus amusant ?",
                "sideA": "Avion",
                "sideB": "Train",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Au-dessus des nuages", "Transit rapide"],
                "ideasB": ["Paysages", "Espace pour marcher"]
            },
            {
                "topic": "Douche le matin vs douche le soir — qu'est-ce qui est mieux ?",
                "sideA": "Matin",
                "sideB": "Soir",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Énergie mentale", "Départ frais"],
                "ideasB": ["Détente totale", "Draps propres"]
            },
            {
                "topic": "Chats qui renversent des choses vs chiens qui mâchent des chaussures — quel animal est le plus agaçant ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Verres brisés", "Bêtises"],
                "ideasB": ["Dégâts matériels", "Réparation de chaussures"]
            },
            {
                "topic": "Manger de la pizza avec une fourchette vs avec les mains — qu'est-ce qui est correct ?",
                "sideA": "Fourchette",
                "sideB": "Mains",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Étiquette formelle", "Doigts propres"],
                "ideasB": ["Plaisir direct", "Style authentique"]
            },
            {
                "topic": "Dormir avec des chaussettes vs sans chaussettes — qu'est-ce qui est mieux ?",
                "sideA": "Chaussettes",
                "sideB": "Sans",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Circulation", "Pieds au chaud"],
                "ideasB": ["Refroidissement", "Sensation naturelle"]
            },
            {
                "topic": "Château de sable vs bonhomme de neige — qu'est-ce qui est le plus amusant à construire ?",
                "sideA": "Château de sable",
                "sideB": "Bonhomme de neige",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Été à la plage", "Travail de détail"],
                "ideasB": ["Magie hivernale", "Amusement collectif"]
            },
            {
                "topic": "Beaucoup d'examens vs très peu d'examens — qu'est-ce qui est le plus juste ?",
                "sideA": "Beaucoup d'examens",
                "sideB": "Très peu d'examens",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Audit des compétences", "Cohérence académique"],
                "ideasB": ["Focus projets", "Moins de stress"]
            },
            {
                "topic": "Commencer l'école à 7 ans vs commencer à 5 ans — qu'est-ce qui est mieux pour les enfants ?",
                "sideA": "À 7 ans",
                "sideB": "À 5 ans",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Focus sur le jeu", "Prendre en compte la maturité"],
                "ideasB": ["Alphabétisation précoce", "Début structuré"]
            },
            {
                "topic": "Manger lentement vs manger rapidement — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Lentement",
                "sideB": "Rapidement",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Meilleure digestion", "Signaux de satiété"],
                "ideasB": ["Gain de temps", "Habitudes efficaces"]
            },
            {
                "topic": "Cuisiner à la maison vs commander en ligne — qu'est-ce qui est mieux ?",
                "sideA": "Cuisiner à la maison",
                "sideB": "Commander en ligne",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Qualité des ingrédients", "Développement de compétences"],
                "ideasB": ["Grande facilité", "Zéro effort physique"]
            },
            {
                "topic": "Cuisiner vs faire de la pâtisserie — qu'est-ce qui est le plus amusant comme passe-temps ?",
                "sideA": "Cuisiner",
                "sideB": "Pâtisser",
                "level": "elementary",
                "theme": "interests_hobbies_A2",
                "ideasA": ["Utilité quotidienne", "Flair culinaire"],
                "ideasB": ["Précision scientifique", "Récompenses sucrées"]
            },
            {
                "topic": "Aller à la salle de sport vs faire de l'exercice dehors — qu'est-ce qui est mieux ?",
                "sideA": "Salle de sport",
                "sideB": "Dehors",
                "level": "elementary",
                "theme": "health_body_A2",
                "ideasA": ["Équipement standard", "Climat contrôlé"],
                "ideasB": ["Air frais", "Terrain changeant"]
            },
            {
                "topic": "Photos sur téléphone vs photos imprimées — qu'est-ce qui est mieux ?",
                "sideA": "Téléphone",
                "sideB": "Imprimées",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Stockage infini", "Édition numérique rapide"],
                "ideasB": ["Histoire tactile", "Valeur déco"]
            },
            {
                "topic": "Smart TV vs écran d'ordinateur — qu'est-ce qui est mieux pour regarder des films ?",
                "sideA": "Smart TV",
                "sideB": "Ordinateur",
                "level": "elementary",
                "theme": "technology_A2",
                "ideasA": ["Grande vue immersive", "Qualité audio"],
                "ideasB": ["Intimité", "Vision de près"]
            },
            {
                "topic": "Pays chaud vs pays froid — quelle est la meilleure destination de vacances ?",
                "sideA": "Pays chaud",
                "sideB": "Pays froid",
                "level": "elementary",
                "theme": "transport_travel_A2",
                "ideasA": ["Détente plage", "Vibes de glaces"],
                "ideasB": ["Bienfaits du ski", "Aurores boréales"]
            },
            {
                "topic": "Offrir des cadeaux vs recevoir des cadeaux — que préférez-vous ?",
                "sideA": "Offrir",
                "sideB": "Recevoir",
                "level": "elementary",
                "theme": "relationships_dating_A2",
                "ideasA": ["Joie altruiste", "Impact social"],
                "ideasB": ["Surprise excitante", "Se sentir apprécié"]
            },
            {
                "topic": "Travailler à l'intérieur vs travailler à l'extérieur — qu'est-ce qui est mieux ?",
                "sideA": "Intérieur",
                "sideB": "Extérieur",
                "level": "elementary",
                "theme": "career_development_A2",
                "ideasA": ["Climat contrôlé", "Espace ergonomique"],
                "ideasB": ["Santé physique", "Vues changeantes"]
            },
            {
                "topic": "Ananas sur la pizza vs pas d'ananas — qu'est-ce qui est correct ?",
                "sideA": "Ananas",
                "sideB": "Pas d'ananas",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Mix sucré-salé", "Saveurs tropicales"],
                "ideasB": ["Règles traditionnelles", "Éviter les chocs"]
            },
            {
                "topic": "Mettre le lait en premier vs mettre le thé — qu'est-ce qui est mieux ?",
                "sideA": "Lait d'abord",
                "sideB": "Thé d'abord",
                "level": "elementary",
                "theme": "diet_nutrition_A2",
                "ideasA": ["Protéines de lait", "Température fraîche"],
                "ideasB": ["Processus d'infusion", "Goût intense"]
            },
            {
                "topic": "Lundi vs Vendredi — quel jour est réellement le pire ?",
                "sideA": "Lundi",
                "sideB": "Vendredi",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Début de semaine", "Énergie basse"],
                "ideasB": ["Attente du week-end", "Fatigue du travail"]
            },
            {
                "topic": "Se réveiller cinq minutes avant l'alarme vs dormir jusqu'à l'alarme — qu'est-ce qui est le plus agaçant ?",
                "sideA": "Avant l'alarme",
                "sideB": "Jusqu'à l'alarme",
                "level": "elementary",
                "theme": "neighbourhood_local_A2",
                "ideasA": ["Repos interrompu", "Zone grise"],
                "ideasB": ["Choc", "Pas de préparation"]
            },
            {
                "topic": "Chats vs chiens — quel animal est secrètement le patron de la maison ?",
                "sideA": "Chats",
                "sideB": "Chiens",
                "level": "elementary",
                "theme": "animals_nature_A2",
                "ideasA": ["Stratégie mentale", "Contrôle calme"],
                "ideasB": ["Énergie physique", "Loyauté manifeste"]
            },
            {
                "topic": "Avoir trop chaud vs avoir trop froid — qu'est-ce qui est le pire ?",
                "sideA": "Trop chaud",
                "sideB": "Trop froid",
                "level": "elementary",
                "theme": "environment_A2",
                "ideasA": ["Sueur et fatigue", "Mal dormir"],
                "ideasB": ["Frissons", "Vêtements d'hiver lourds"]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();