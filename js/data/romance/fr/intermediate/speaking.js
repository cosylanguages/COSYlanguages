(function() {
    const speakingData = {
    "fr": {
        "opinionArena": [
            {
                "text": "Pouvons-nous vivre sans Internet pendant une semaine ?",
                "level": "intermediate",
                "theme": "media_news_B1"
            },
            {
                "text": "Tout le monde devrait-il apprendre une deuxième langue ?",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "criticsCorner": [
            {
                "text": "Je pense, donc je suis.",
                "author": "Descartes",
                "level": "intermediate",
                "theme": "society_community_B1"
            }
        ],
        "debates": [
            {
                "topic": "Télétravail vs travail de bureau — qu'est-ce qui est le mieux pour la productivité et le bien-être ?",
                "sideA": "Télétravail",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sécurité d'emploi vs évolution de carrière — que devraient prioriser les adultes ?",
                "sideA": "Sécurité",
                "sideB": "Évolution",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Créer sa propre entreprise vs travailler pour un employeur — quel est le meilleur choix à 30 ans ?",
                "sideA": "Propre entreprise",
                "sideB": "Employeur",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Ambition vs équilibre vie pro-vie perso — peut-on vraiment avoir les deux ?",
                "sideA": "Ambition",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseautage vs renforcement des compétences — qu'est-ce qui fait avancer votre carrière le plus ?",
                "sideA": "Réseautage",
                "sideB": "Compétences",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Commentaires honnêtes d'un manager vs être laissé à travailler de manière indépendante — qu'est-ce qui motive le plus les adultes ?",
                "sideA": "Commentaires",
                "sideB": "Indépendance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changer de carrière à 40 ans vs rester dans son domaine — quelle est la décision la plus sage ?",
                "sideA": "Changer",
                "sideB": "Rester",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Rembourser son prêt immobilier par anticipation vs investir cet argent — qu'est-ce qui est le plus intelligent ?",
                "sideA": "Rembourser",
                "sideB": "Investir",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être propriétaire vs louer en permanence — qu'est-ce qui convient le mieux à la vie adulte moderne ?",
                "sideA": "Propriétaire",
                "sideB": "Locataire",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Épargner pour la retraite tôt vs profiter de l'argent dans la trentaine — qu'est-ce qui est le plus sage ?",
                "sideA": "Épargner tôt",
                "sideB": "Profiter maintenant",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en dessous de ses moyens vs dépenser pour profiter de la vie maintenant — quelle approche est la plus saine ?",
                "sideA": "Moins dépenser",
                "sideB": "Profiter maintenant",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Deux revenus dans un foyer vs un partenaire restant à la maison — qu'est-ce qui fonctionne le mieux pour les familles ?",
                "sideA": "Deux revenus",
                "sideB": "Un au foyer",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir des enfants vs choisir de ne pas en avoir — qu'est-ce qui est une vie d'adulte plus épanouissante ?",
                "sideA": "Enfants",
                "sideB": "Sans enfants",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Éducation stricte vs éducation permissive — qu'est-ce qui produit des adultes plus heureux ?",
                "sideA": "Stricte",
                "sideB": "Permissive",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Relation à long terme vs rester célibataire — qu'est-ce qui est le mieux pour l'épanouissement personnel ?",
                "sideA": "Relation",
                "sideB": "Célibataire",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Séparer vie professionnelle et vie privée vs les intégrer — qu'est-ce qui est plus sain ?",
                "sideA": "Séparer",
                "sideB": "Intégrer",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Partir à l'étranger en couple vs rester proche de sa famille — quel est le bon choix ?",
                "sideA": "Étranger",
                "sideB": "Rester proche",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prioriser la santé physique vs la santé mentale — sur quoi les adultes devraient-ils se concentrer en premier ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé privée vs s'appuyer sur le système public — quelle est la meilleure stratégie pour un adulte ?",
                "sideA": "Privée",
                "sideB": "Publique",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Examens médicaux réguliers vs n'y aller que quand on est malade — quelle est l'approche la plus intelligente ?",
                "sideA": "Réguliers",
                "sideB": "Quand malade",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réduire l'alcool vs réduire le stress — qu'est-ce qui a le plus grand impact sur la santé des adultes ?",
                "sideA": "Moins d'alcool",
                "sideB": "Moins de stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Liberté individuelle vs responsabilité communautaire — qu'est-ce qui devrait guider les décisions des adultes ?",
                "sideA": "Liberté",
                "sideB": "Responsabilité",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Optimisme quant à l'avenir vs réalisme — quelle est l'attitude la plus utile pour les adultes ?",
                "sideA": "Optimisme",
                "sideB": "Réalisme",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changer le monde vs se construire une vie personnelle stable — quelle est l'ambition la plus honnête ?",
                "sideA": "Changer le monde",
                "sideB": "Vie stable",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Consacrer son temps au bénévolat vs donner de l'argent — qu'est-ce qui fait le plus de bien ?",
                "sideA": "Bénévolat",
                "sideB": "Don d'argent",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Suivre les valeurs de sa génération vs les remettre en question — qu'est-ce qui est le plus admirable ?",
                "sideA": "Suivre",
                "sideB": "Questionner",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Savoir combien gagnent vos collègues vs ne pas le savoir — qu'est-ce qui est le mieux pour l'harmonie au bureau ?",
                "sideA": "Savoir",
                "sideB": "Ne pas savoir",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Répondre aux messages immédiatement vs prendre son temps — qu'est-ce qui est le plus respectueux dans la vie adulte ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Admettre qu'on n'a aucune idée de ce qu'est un fonds de pension vs prétendre qu'on le sait — quelle est l'expérience adulte la plus parlante ?",
                "sideA": "Admettre",
                "sideB": "Prétendre",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Annuler des plans à la dernière minute vs sortir quand on n'en a pas envie — quelle est la pire habitude adulte ?",
                "sideA": "Annuler",
                "sideB": "Sortir quand même",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Parler ouvertement d'argent avec ses amis vs garder cela privé — quelle est l'approche la plus mature ?",
                "sideA": "Parler ouvertement",
                "sideB": "Garder privé",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Télétravail vs Travail au bureau",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "Pas de trajet",
                    "Flexibilité"
                ],
                "ideasB": [
                    "Socialisation",
                    "Meilleure concentration"
                ]
            },
            {
                "topic": "Voitures électriques vs Voitures à essence",
                "sideA": "Électrique",
                "sideB": "Essence",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Environnement",
                    "Silencieux"
                ],
                "ideasB": [
                    "Autonomie",
                    "Vitesse de charge"
                ]
            },
            {
                "topic": "Apprentissage en ligne ou apprentissage en classe — qu'est-ce qui est plus efficace ?",
                "sideA": "En ligne",
                "sideB": "En classe",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mémoriser des faits ou apprendre à trouver l'information — quelle compétence est la plus importante ?",
                "sideA": "Faits",
                "sideB": "Trouver l'info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Études universitaires ou formation professionnelle — quelle est la meilleure voie ?",
                "sideA": "Université",
                "sideB": "Pro",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Examens ou contrôle continu — quelle est la manière la plus juste d'évaluer les élèves ?",
                "sideA": "Examens",
                "sideB": "Continu",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre une langue étrangère à l'école ou vivre à l'étranger — qu'est-ce qui est plus efficace ?",
                "sideA": "École",
                "sideB": "Vivre à l'étranger",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Écoles non mixtes ou écoles mixtes — lesquelles sont meilleures pour les élèves ?",
                "sideA": "Non mixte",
                "sideB": "Mixte",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux ou communication en face à face — qu'est-ce qui est mieux pour rester en contact ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Services de streaming ou télévision traditionnelle — qu'est-ce qui est mieux ?",
                "sideA": "Streaming",
                "sideB": "TV classique",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler à domicile ou travailler dans un bureau — qu'est-ce qui est plus productif ?",
                "sideA": "Maison",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lire les actualités en ligne ou lire un journal — qu'est-ce qui est plus fiable ?",
                "sideA": "Actualités en ligne",
                "sideB": "Journal papier",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Passer du temps sur les réseaux sociaux ou passer du temps dans la nature — qu'est-ce qui est mieux pour votre santé mentale ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Utiliser les transports en commun ou conduire une voiture — qu'est-ce qui est mieux pour la société ?",
                "sideA": "Transports publics",
                "sideB": "Voiture",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Acheter des vêtements d'occasion ou acheter des vêtements neufs — quelle est la meilleure habitude ?",
                "sideA": "Occasion",
                "sideB": "Neuf",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en ville ou vivre à la campagne — qu'est-ce qui convient le mieux aux jeunes ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Végétarisme ou manger de la viande — qu'est-ce qui est mieux pour la planète ?",
                "sideA": "Végétarisme",
                "sideB": "Viande",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Changements de mode de vie individuels ou action gouvernementale — qu'est-ce qui fait le plus pour l'environnement ?",
                "sideA": "Individuel",
                "sideB": "Gouvernement",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Un emploi stable ou une carrière créative — quel est le meilleur choix de vie ?",
                "sideA": "Emploi stable",
                "sideB": "Carrière créative",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Lancer sa propre entreprise ou travailler pour une société — qu'est-ce qui est mieux ?",
                "sideA": "Propre entreprise",
                "sideB": "Société",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Salaire élevé ou satisfaction au travail — qu'est-ce qui compte le plus au travail ?",
                "sideA": "Salaire",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Travailler de longues heures ou avoir un équilibre vie professionnelle-vie privée — qu'est-ce qui mène au succès ?",
                "sideA": "Longues heures",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choisir une carrière par passion ou en fonction des perspectives d'emploi — qu'est-ce qui est plus sage ?",
                "sideA": "Passion",
                "sideB": "Perspectives",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre en tant qu'individu ou donner la priorité à la communauté — qu'est-ce qui est plus important ?",
                "sideA": "Individu",
                "sideB": "Communauté",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Valeurs traditionnelles ou valeurs modernes — lesquelles est-il plus important de conserver ?",
                "sideA": "Traditionnelles",
                "sideB": "Modernes",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Bénévolat ou don d'argent à une œuvre caritative — qu'est-ce qui aide le plus ?",
                "sideA": "Bénévolat",
                "sideB": "Don",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Célébrité ou faire une différence discrètement — quel est le meilleur objectif de vie ?",
                "sideA": "Célébrité",
                "sideB": "Différence discrète",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Suivre les règles ou penser par soi-même — qu'est-ce qui compte le plus ?",
                "sideA": "Règles",
                "sideB": "Pensée propre",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé physique ou santé mentale — quelle devrait être la priorité ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Prévention ou traitement — quelle est la meilleure approche des soins de santé ?",
                "sideA": "Prévention",
                "sideB": "Traitement",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sport de compétition ou exercice pour le plaisir — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Compétition",
                "sideB": "Plaisir",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Santé privée ou santé publique — quel système est le plus juste ?",
                "sideA": "Privé",
                "sideB": "Public",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Cinéma ou littérature — quelle est la forme d'art la plus puissante ?",
                "sideA": "Cinéma",
                "sideB": "Littérature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Art moderne ou art classique — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Moderne",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Préserver les vieux bâtiments ou en construire de nouveaux — qu'est-ce qui compte le plus ?",
                "sideA": "Préserver",
                "sideB": "Construire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Culture locale ou mondialisation — qu'est-ce qui enrichit le plus les communautés ?",
                "sideA": "Locale",
                "sideB": "Mondialisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprendre de ses erreurs vs apprendre de ses succès — qu'est-ce qui instruit le plus ?",
                "sideA": "Erreurs",
                "sideB": "Succès",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tablettes en classe vs cahiers traditionnels — qu'est-ce qui aide le plus les élèves ?",
                "sideA": "Tablettes",
                "sideB": "Cahiers",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être toujours joignable vs avoir du temps libre numérique — qu'est-ce qui est mieux ?",
                "sideA": "Joignable",
                "sideB": "Temps libre",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réutiliser les objets vs recycler — qu'est-ce qui est le plus efficace ?",
                "sideA": "Réutiliser",
                "sideB": "Recycler",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Une seule carrière pour la vie vs changer de carrière souvent — qu'est-ce qui est mieux ?",
                "sideA": "Une carrière",
                "sideB": "Changer souvent",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le sommeil vs l'exercice — qu'est-ce qui a le plus d'impact sur votre santé ?",
                "sideA": "Sommeil",
                "sideB": "Exercice",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Musique pop vs musique classique — laquelle a le plus d'impact culturel ?",
                "sideA": "Pop",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Savoir comment quelque chose se termine vs être surpris — qu'est-ce qui est mieux ?",
                "sideA": "Savoir",
                "sideB": "Surpris",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Répondre immédiatement aux messages vs prendre son temps — qu'est-ce qui est le plus respectueux ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Regarder une série d'un coup vs regarder un épisode par semaine — quelle est la bonne manière ?",
                "sideA": "D'un coup",
                "sideB": "Hebdomadaire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Siège côté fenêtre vs siège côté couloir — lequel est objectivement le meilleur ?",
                "sideA": "Fenêtre",
                "sideB": "Couloir",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Sauter la salle une fois vs y aller et avoir une mauvaise séance — qu'est-ce qui est le pire ?",
                "sideA": "Sauter",
                "sideB": "Mauvaise séance",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se parler à soi-même vs parler à son animal — qu'est-ce qui est le plus raisonnable ?",
                "sideA": "À soi-même",
                "sideB": "À son animal",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "Une personne qui m'a inspiré",
                "level": "intermediate",
                "theme": "society_community_B1"
            },
            {
                "topic": "L'importance de la sensibilisation à la santé mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1"
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
