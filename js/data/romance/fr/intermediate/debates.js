(function() {
    const data = [{
                "topic": "Travail à distance vs travail au bureau — qu'est-ce qui est le mieux pour la productivité et le bien-être ?",
                "sideA": "À distance",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["On économise du temps et de l'argent car il n'y a pas de trajet quotidien.", "Cela permet un emploi du temps plus flexible pour gérer les tâches personnelles."],
                "ideasB": ["La communication en face à face rend le travail d'équipe beaucoup plus rapide et facile.", "Travailler dans un bureau aide à séparer la vie professionnelle de la vie privée."]
            },
            {
                "topic": "Sécurité d'emploi vs évolution de carrière — sur quoi les adultes devraient-ils donner la priorité ?",
                "sideA": "Sécurité",
                "sideB": "Croissance",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un emploi stable réduit le stress lié à l'argent et à l'avenir.", "C'est mieux pour planifier des objectifs à long terme comme l'achat d'une maison."],
                "ideasB": ["Prendre des risques peut mener à de meilleures opportunités et à un salaire plus élevé.", "Changer souvent d'emploi aide à apprendre de nouvelles compétences plus rapidement."]
            },
            {
                "topic": "Créer sa propre entreprise vs travailler pour un employeur — quel est le meilleur choix à 30 ans ?",
                "sideA": "Propre entreprise",
                "sideB": "Employeur",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Vous avez la liberté de prendre vos propres décisions et d'être votre propre patron.", "Il n'y a pas de limite à ce que vous pouvez gagner si vous réussissez."],
                "ideasB": ["Travailler pour une entreprise offre un revenu régulier et des avantages.", "Vous n'avez pas à vous soucier de l'administration et des risques d'une entreprise."]
            },
            {
                "topic": "Ambition vs équilibre vie-travail — peut-on vraiment avoir les deux ?",
                "sideA": "Ambition",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Être ambitieux aide à atteindre le sommet de son domaine.", "Le travail acharné est nécessaire si l'on veut avoir un grand impact sur le monde."],
                "ideasB": ["Passer du temps avec sa famille et ses amis est plus important pour le bonheur.", "Le burnout peut arriver si l'on se concentre uniquement sur sa carrière trop longtemps."]
            },
            {
                "topic": "Réseautage vs développement des compétences — qu'est-ce qui fait progresser le plus votre carrière ?",
                "sideA": "Réseautage",
                "sideB": "Compétences",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Qui vous connaissez est souvent plus important que ce que vous savez pour trouver un emploi.", "Établir des relations peut ouvrir des portes que les seules compétences ne peuvent pas."],
                "ideasB": ["Si vous êtes excellent dans ce que vous faites, les opportunités vous trouveront toujours.", "Les compétences techniques sont la base d'une carrière réussie et durable."]
            },
            {
                "topic": "Feedback honnête d'un manager vs être laissé à travailler de manière autonome — qu'est-ce qui motive le plus les adultes ?",
                "sideA": "Feedback",
                "sideB": "Autonomie",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un feedback régulier aide à comprendre ses erreurs et à s'améliorer rapidement.", "C'est motivant de savoir que son manager prête attention à son travail."],
                "ideasB": ["Faire confiance aux employés pour travailler seuls montre du respect pour leurs capacités.", "L'indépendance permet d'être plus créatif et de trouver ses propres solutions."]
            },
            {
                "topic": "Changer de carrière à 40 ans vs rester dans son domaine — quelle est la décision la plus sage ?",
                "sideA": "Changer",
                "sideB": "Rester",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Il n'est jamais trop tard pour suivre sa passion et trouver un métier que l'on aime.", "Commencer quelque chose de nouveau peut donner une nouvelle énergie et motivation."],
                "ideasB": ["À 40 ans, vous avez une expérience précieuse qu'il vaut la peine de garder dans votre domaine actuel.", "Partir de zéro peut être très risqué si vous avez des responsabilités familiales."]
            },
            {
                "topic": "Rembourser son hypothèque par anticipation vs investir cet argent — qu'est-ce qui est le plus intelligent ?",
                "sideA": "Rembourser tôt",
                "sideB": "Investir",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Être libre de ses dettes apporte la tranquillité d'esprit et la liberté financière.", "On économise beaucoup d'argent sur les intérêts au fil des ans."],
                "ideasB": ["Investir en bourse peut donner un rendement plus élevé que l'intérêt payé.", "Il est préférable d'avoir des actifs liquides utilisables en cas d'urgence."]
            },
            {
                "topic": "Posséder une maison vs louer en permanence — qu'est-ce qui convient le mieux à la vie adulte moderne ?",
                "sideA": "Posséder",
                "sideB": "Louer",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Acheter une maison est un excellent investissement à long terme pour son avenir.", "Vous avez la liberté de décorer et de modifier la maison comme vous le souhaitez."],
                "ideasB": ["Louer vous donne la flexibilité de déménager facilement pour le travail.", "Le propriétaire est responsable de toutes les réparations et des frais d'entretien."]
            },
            {
                "topic": "Épargner tôt pour la retraite vs profiter de son argent à la trentaine — qu'est-ce qui est plus sage ?",
                "sideA": "Épargner tôt",
                "sideB": "Profiter maintenant",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Si vous commencez à épargner tôt, votre argent a plus de temps pour fructifier.", "Vous pourrez vous détendre et profiter de la vie quand vous serez plus vieux."],
                "ideasB": ["On n'est jeune qu'une fois, il faut donc voyager et vivre des expériences maintenant.", "L'avenir est incertain, il vaut donc mieux profiter de son argent tant qu'on le peut."]
            },
            {
                "topic": "Vivre en dessous de ses moyens vs dépenser pour profiter de la vie maintenant — quelle approche est la plus saine ?",
                "sideA": "Sous ses moyens",
                "sideB": "Profiter maintenant",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["Vivre simplement aide à éviter les dettes et les problèmes financiers.", "Il est plus facile d'épargner pour de grands objectifs comme une maison."],
                "ideasB": ["Acheter des choses de haute qualité peut rendre la vie quotidienne plus confortable.", "S'offrir de belles choses est une bonne récompense pour son travail acharné."]
            },
            {
                "topic": "Deux revenus dans un foyer vs un partenaire qui reste à la maison — qu'est-ce qui fonctionne le mieux pour les familles ?",
                "sideA": "Deux revenus",
                "sideB": "Un au foyer",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Deux salaires signifient plus de sécurité financière et un niveau de vie plus élevé.", "Les deux parents peuvent développer leur carrière et partager les tâches ménagères."],
                "ideasB": ["Avoir un parent à la maison est très bénéfique pour le développement des enfants.", "Une personne peut se concentrer sur le foyer, rendant la vie familiale moins stressante."]
            },
            {
                "topic": "Avoir des enfants vs choisir de ne pas en avoir — qu'est-ce qui rend la vie adulte plus épanouissante ?",
                "sideA": "Avoir des enfants",
                "sideB": "Pas d'enfants",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Élever des enfants est une expérience unique qui apporte beaucoup de joie et d'amour.", "Les enfants peuvent s'occuper de vous et vous soutenir quand vous vieillissez."],
                "ideasB": ["Choisir de ne pas avoir d'enfants permet plus de liberté et des voyages spontanés.", "Vous pouvez concentrer toute votre énergie sur votre carrière, vos loisirs et votre partenaire."]
            },
            {
                "topic": "Parentalité stricte vs parentalité permissive — qu'est-ce qui produit des adultes plus heureux ?",
                "sideA": "Stricte",
                "sideB": "Permissive",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Des règles claires aident les enfants à apprendre la discipline et le respect des autres.", "Une parentalité stricte peut mener à de meilleurs résultats académiques."],
                "ideasB": ["Donner de la liberté aux enfants les aide à devenir plus créatifs et indépendants.", "Un environnement chaleureux et flexible construit un lien plus fort avec les parents."]
            },
            {
                "topic": "Relation à long terme vs rester célibataire — qu'est-ce qui est le mieux pour la croissance personnelle ?",
                "sideA": "Relation",
                "sideB": "Célibataire",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Un partenaire offre un soutien émotionnel et partage les défis de la vie.", "Être en couple aide à apprendre à faire des compromis et à prendre soin des autres."],
                "ideasB": ["Être célibataire vous permet de vous concentrer entièrement sur vos propres objectifs.", "Vous avez la liberté de prendre chaque décision sans consulter personne."]
            },
            {
                "topic": "Garder la vie professionnelle et la vie privée séparées vs les intégrer — qu'est-ce qui est le plus sain ?",
                "sideA": "Séparées",
                "sideB": "Intégrées",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Fixer des limites claires empêche le travail de prendre le dessus sur la vie privée.", "Il est plus facile de se détendre quand on ne pense pas à son travail à la maison."],
                "ideasB": ["L'intégration permet d'être plus flexible avec son temps pendant la journée.", "Si vous aimez votre travail, il est naturel qu'il fasse partie de qui vous êtes."]
            },
            {
                "topic": "S'installer à l'étranger en couple vs rester proche de la famille — quel est le bon choix ?",
                "sideA": "À l'étranger",
                "sideB": "Proche famille",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Vivre dans un nouveau pays est une grande aventure qui élargit les horizons.", "Déménager à l'étranger en couple peut rendre la relation beaucoup plus forte."],
                "ideasB": ["Rester proche de la famille offre un réseau de soutien pour élever les enfants.", "Il est important de garder ses racines culturelles et de rester proche de ses anciens amis."]
            },
            {
                "topic": "Donner la priorité à la santé physique vs la santé mentale — sur quoi les adultes devraient-ils se concentrer en premier ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Un corps fort est la base d'une vie longue et active.", "L'exercice régulier aide à prévenir de nombreuses maladies graves."],
                "ideasB": ["Le bien-être mental est essentiel pour le bonheur et de bonnes relations.", "Si vous n'êtes pas en bonne santé mentale, il est difficile de prendre soin de votre corps."]
            },
            {
                "topic": "Santé privée vs s'appuyer sur le système public — quelle est la meilleure stratégie pour un adulte ?",
                "sideA": "Privée",
                "sideB": "Publique",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["L'assurance privée offre généralement des délais d'attente plus courts et de meilleures installations.", "Vous avez plus de choix concernant les médecins et les spécialistes que vous consultez."],
                "ideasB": ["Un système public est plus juste car il fournit des soins à tous, peu importe l'argent.", "Les soins de santé essentiels devraient être un droit, pas quelque chose à acheter."]
            },
            {
                "topic": "Contrôles médicaux réguliers vs n'y aller que lorsqu'on est malade — quelle est l'approche la plus intelligente ?",
                "sideA": "Contrôles réguliers",
                "sideB": "Seulement si malade",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La prévention est meilleure que la guérison car on peut détecter les problèmes tôt.", "Des contrôles réguliers peuvent vous apporter la tranquillité d'esprit concernant votre santé."],
                "ideasB": ["Il ne faut pas faire perdre son temps au médecin si l'on se sent parfaitement bien.", "Notre corps peut souvent se guérir seul sans intervention médicale."]
            },
            {
                "topic": "Réduire l'alcool vs réduire le stress — qu'est-ce qui a le plus d'impact sur la santé des adultes ?",
                "sideA": "Moins d'alcool",
                "sideB": "Moins de stress",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["L'alcool est une toxine qui affecte directement le foie, le cœur et le cerveau.", "Arrêter l'alcool peut rapidement améliorer le sommeil et les niveaux d'énergie."],
                "ideasB": ["Le stress chronique est un tueur silencieux qui cause de nombreux problèmes de santé modernes.", "Apprendre à se détendre est plus important que de s'inquiéter de ce que l'on boit."]
            },
            {
                "topic": "Liberté individuelle vs responsabilité communautaire — qu'est-ce qui devrait guider les décisions des adultes ?",
                "sideA": "Liberté",
                "sideB": "Responsabilité",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Les adultes devraient être libres de vivre leur vie comme ils le souhaitent.", "La liberté individuelle est la valeur la plus importante dans une société moderne."],
                "ideasB": ["Nous avons tous le devoir d'aider nos voisins et d'améliorer notre communauté.", "Une société ne fonctionne bien que si tout le monde pense au bien commun."]
            },
            {
                "topic": "Optimisme pour l'avenir vs réalisme — quelle est l'attitude la plus utile pour les adultes ?",
                "sideA": "Optimisme",
                "sideB": "Réalisme",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Une attitude positive aide à surmonter les obstacles et à rester motivé.", "Les optimistes sont généralement plus heureux et réussissent mieux dans la vie."],
                "ideasB": ["Le réalisme aide à se préparer aux défis et à prendre de meilleures décisions.", "Il vaut mieux voir le monde tel qu'il est, pas comme on voudrait qu'il soit."]
            },
            {
                "topic": "Changer le monde vs construire une vie personnelle stable — quelle est l'ambition la plus honnête ?",
                "sideA": "Changer le monde",
                "sideB": "Vie stable",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Nous devrions tous essayer de laisser le monde meilleur que nous l'avons trouvé.", "Travailler pour une cause donne à la vie un sens et un but plus profonds."],
                "ideasB": ["Prendre soin de sa famille et être une bonne personne est suffisant.", "Essayer de changer le monde est souvent irréaliste et mène à la frustration."]
            },
            {
                "topic": "Consacrer son temps au bénévolat vs donner de l'argent — qu'est-ce qui fait le plus de bien ?",
                "sideA": "Bénévolat",
                "sideB": "Dons",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Consacrer son temps permet de voir directement l'impact de son aide.", "Le bénévolat aide à rencontrer de nouvelles personnes et de nouvelles perspectives."],
                "ideasB": ["Les associations peuvent utiliser l'argent pour acheter des ressources professionnelles.", "Donner est plus efficace si vous avez un travail prenant et un salaire élevé."]
            },
            {
                "topic": "Suivre les valeurs de sa génération vs les remettre en question — qu'est-ce qui est le plus admirable ?",
                "sideA": "Suivre",
                "sideB": "Remettre en question",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Les valeurs traditionnelles fournissent une base stable pour une société réussie.", "Respecter la sagesse des anciens aide à maintenir l'harmonie sociale."],
                "ideasB": ["Chaque génération devrait décider quelles valeurs sont encore pertinentes aujourd'hui.", "Remettre en question le statu quo est nécessaire pour le progrès."]
            },
            {
                "topic": "Savoir combien vos collègues gagnent vs ne pas savoir — qu'est-ce qui est le mieux pour l'harmonie au bureau ?",
                "sideA": "Savoir",
                "sideB": "Ne pas savoir",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Connaître les salaires aide à garantir que tout le monde est payé équitablement.", "La transparence réduit l'écart de rémunération entre les sexes et encourage l'honnêteté."],
                "ideasB": ["L'argent est une question privée et en parler peut causer de la jalousie.", "La vie privée évite les compétitions inutiles et les tensions entre collègues."]
            },
            {
                "topic": "Répondre aux messages immédiatement vs prendre son temps — qu'est-ce qui est le plus respectueux dans la vie adulte ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Répondre rapidement montre que vous respectez le temps de l'autre personne.", "Dans un monde rapide, la communication immédiate est nécessaire pour l'efficacité."],
                "ideasB": ["Prendre son temps permet de donner une réponse plus réfléchie et meilleure.", "Il est important d'avoir des limites et de ne pas être l'esclave de son téléphone."]
            },
            {
                "topic": "Admettre qu'on n'a aucune idée de ce qu'est un fonds de pension vs prétendre qu'on le sait — quelle est l'expérience adulte la plus courante ?",
                "sideA": "Admettre",
                "sideB": "Prétendre",
                "level": "intermediate",
                "theme": "buying_property_B1",
                "ideasA": ["L'honnêteté est préférable car elle permet de poser des questions et d'apprendre.", "Beaucoup d'adultes sont confus par la finance, l'admettre est donc normal."],
                "ideasB": ["Prétendre savoir aide à paraître professionnel et sûr de soi.", "Il vaut mieux faire des recherches privées plus tard que de paraître ignorant maintenant."]
            },
            {
                "topic": "Annuler des plans à la dernière minute vs sortir quand on n'en a pas envie — quelle est la pire habitude adulte ?",
                "sideA": "Annuler",
                "sideB": "Sortir quand même",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Si vous êtes épuisé, il vaut mieux rester chez soi et reposer son esprit.", "Se forcer à sortir quand on n'est pas heureux n'est amusant pour personne."],
                "ideasB": ["Il faut tenir ses promesses même si l'on n'en a pas envie.", "Une fois sur place, vous vous amuserez probablement et serez content d'être venu."]
            },
            {
                "topic": "Parler ouvertement d'argent avec ses amis vs garder cela privé — quelle est l'approche la plus mature ?",
                "sideA": "Ouvertement",
                "sideB": "Privé",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Discuter d'argent avec ses amis aide tout le monde à faire de meilleurs choix financiers.", "Être ouvert sur les coûts facilite la planification d'activités ensemble."],
                "ideasB": ["L'argent peut créer une division entre amis qui gagnent des sommes différentes.", "Il est plus poli de garder les détails financiers pour soi dans les situations sociales."]
            },
            {
                "topic": "Télétravail vs Travail au bureau",
                "sideA": "Télétravail",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": [
                    "On peut mieux se concentrer à la maison sans le bruit d'un bureau bondé.",
                    "Il est plus facile de rester en bonne santé en cuisinant son propre déjeuner."
                ],
                "ideasB": [
                    "L'environnement de bureau encourage la créativité grâce aux idées spontanées.",
                    "Séparer le travail et la maison aide à 'débrancher' en fin de journée."
                ]
            },
            {
                "topic": "Voitures électriques vs Voitures à essence",
                "sideA": "Électriques",
                "sideB": "Essence",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": [
                    "Les voitures électriques sont bien meilleures pour l'environnement car elles n'ont pas d'émissions.",
                    "Elles sont moins chères à utiliser et à entretenir à long terme."
                ],
                "ideasB": [
                    "Les voitures à essence sont meilleures pour les longs trajets car on peut faire le plein vite.",
                    "L'infrastructure de recharge n'est pas encore suffisante partout."
                ]
            },
            {
                "topic": "Apprentissage en ligne ou apprentissage en classe — qu'est-ce qui est le plus efficace ?",
                "sideA": "En ligne",
                "sideB": "En classe",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Les cours en ligne sont plus flexibles et vous pouvez étudier à votre rythme.", "Vous pouvez accéder aux meilleurs enseignants du monde depuis chez vous."],
                "ideasB": ["En classe, vous pouvez interagir directement avec les autres élèves et l'enseignant.", "Une école physique offre un meilleur environnement pour se concentrer sur ses études."]
            },
            {
                "topic": "Mémoriser des faits ou apprendre à trouver des informations — quelle compétence est la plus importante ?",
                "sideA": "Faits",
                "sideB": "Trouver l'info",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Avoir des faits de base en tête aide à comprendre le monde plus rapidement.", "On ne peut pas toujours compter sur Internet pour des informations précises."],
                "ideasB": ["Il est plus utile de savoir rechercher et analyser des données que de les mémoriser.", "Les faits changent, mais la capacité à trouver l'information reste pour toujours."]
            },
            {
                "topic": "Études universitaires ou formation professionnelle — quelle est la meilleure voie ?",
                "sideA": "Université",
                "sideB": "Professionnel",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un diplôme offre une éducation large et plus d'options de carrière à long terme.", "La vie universitaire aide à développer la pensée critique et les compétences sociales."],
                "ideasB": ["La formation professionnelle vous prépare à un emploi spécifique avec des compétences pratiques.", "Vous pouvez commencer à gagner de l'argent plus tôt et éviter d'importantes dettes."]
            },
            {
                "topic": "Examens ou évaluation continue — quel est le moyen le plus juste d'évaluer les élèves ?",
                "sideA": "Examens",
                "sideB": "Continue",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Les examens sont un moyen équitable de tester les connaissances de tous dans les mêmes conditions.", "Ils motivent les élèves à étudier dur et à retenir ce qu'ils ont appris."],
                "ideasB": ["L'évaluation continue est moins stressante et montre le véritable progrès de l'élève.", "Elle encourage un travail constant tout au long de l'année plutôt qu'un seul jour."]
            },
            {
                "topic": "Apprendre une langue étrangère à l'école ou vivre à l'étranger — qu'est-ce qui est le plus efficace ?",
                "sideA": "École",
                "sideB": "Vivre à l'étranger",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["L'école offre un environnement structuré pour apprendre la grammaire et le vocabulaire.", "C'est un moyen sûr et économique de commencer à apprendre avant de voyager."],
                "ideasB": ["Vivre à l'étranger vous force à parler la langue dans des situations réelles chaque jour.", "On apprend la culture et la façon naturelle de parler beaucoup plus vite."]
            },
            {
                "topic": "Écoles non mixtes ou écoles mixtes — lesquelles sont les meilleures pour les élèves ?",
                "sideA": "Non mixte",
                "sideB": "Mixte",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Les élèves pourraient se sentir plus à l'aise sans le sexe opposé.", "Les enseignants peuvent adapter les méthodes aux besoins spécifiques des garçons ou des filles."],
                "ideasB": ["Les écoles mixtes reflètent le monde réel où hommes et femmes travaillent ensemble.", "Interagir avec tout le monde aide à développer de meilleures compétences sociales."]
            },
            {
                "topic": "Réseaux sociaux ou communication en face à face — qu'est-ce qui est le mieux pour rester en contact ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Les réseaux sociaux vous permettent de rester en contact avec de nombreuses personnes à la fois.", "C'est le moyen le plus simple de partager des photos et des nouvelles avec des amis lointains."],
                "ideasB": ["La communication en face à face permet de voir le langage corporel.", "Se rencontrer en personne construit des relations beaucoup plus profondes et significatives."]
            },
            {
                "topic": "Services de streaming ou télévision traditionnelle — qu'est-ce qui est le mieux ?",
                "sideA": "Streaming",
                "sideB": "Télévision",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Vous pouvez regarder ce que vous voulez, quand vous voulez, sans publicité.", "Les services de streaming offrent une vaste gamme de programmes internationaux."],
                "ideasB": ["La télévision traditionnelle est meilleure pour les événements en direct comme les infos et le sport.", "Regarder le même programme en même temps que les autres crée une communauté."]
            },
            {
                "topic": "Travailler de chez soi ou travailler dans un bureau — qu'est-ce qui est le plus productif ?",
                "sideA": "À domicile",
                "sideB": "Bureau",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Beaucoup de gens découvrent qu'ils font plus de travail à la maison avec moins d'interruptions.", "Un bureau à domicile confortable peut améliorer la concentration."],
                "ideasB": ["Les managers peuvent soutenir leur équipe plus efficacement dans un bureau.", "Il est plus facile de faire des réunions rapides et de résoudre des problèmes quand tout le monde est là."]
            },
            {
                "topic": "Lire les infos en ligne ou lire un journal — qu'est-ce qui est le plus fiable ?",
                "sideA": "Infos en ligne",
                "sideB": "Journal",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Les infos en ligne sont mises à jour instantanément, on sait toujours ce qui se passe.", "C'est gratuit et on peut lire de nombreuses sources différentes pour une vision équilibrée."],
                "ideasB": ["Les journaux ont souvent un journalisme de qualité supérieure et des articles approfondis.", "Lire un journal papier est un bon moyen de déconnecter des écrans."]
            },
            {
                "topic": "Passer du temps sur les réseaux sociaux ou passer du temps dans la nature — qu'est-ce qui est le mieux pour votre santé mentale ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Nature",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Les réseaux sociaux vous aident à vous sentir connecté à votre communauté en ligne.", "C'est une excellente source d'inspiration et de messages positifs."],
                "ideasB": ["Passer du temps dans la nature réduit le stress et améliore significativement l'humeur.", "Être en plein air aide à s'éclaircir les idées et à profiter du présent."]
            },
            {
                "topic": "Utiliser les transports publics ou conduire une voiture — qu'est-ce qui est le mieux pour la société ?",
                "sideA": "Transports publics",
                "sideB": "Voiture",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Le transport public est mieux pour l'environnement car il réduit la pollution.", "C'est souvent moins cher que de posséder, assurer et garer une voiture."],
                "ideasB": ["Conduire une voiture vous donne plus de liberté et fait gagner du temps sur de nombreux trajets.", "C'est plus confortable et privé que de voyager dans un bus ou un train bondé."]
            },
            {
                "topic": "Acheter des vêtements d'occasion ou acheter des vêtements neufs — quelle est la meilleure habitude ?",
                "sideA": "Occasion",
                "sideB": "Neuf",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Acheter d'occasion est bien meilleur pour la planète et réduit les déchets.", "On peut trouver des pièces uniques et des marques de haute qualité à prix très bas."],
                "ideasB": ["Les vêtements neufs sont généralement en meilleur état et durent plus longtemps.", "Suivre les nouvelles tendances est une façon amusante d'exprimer son style."]
            },
            {
                "topic": "Vivre en ville ou vivre à la campagne — qu'est-ce qui convient le mieux aux jeunes ?",
                "sideA": "Ville",
                "sideB": "Campagne",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Les villes offrent plus d'opportunités d'emploi, de vie nocturne et d'événements culturels.", "Les transports publics dans les villes facilitent les déplacements des jeunes."],
                "ideasB": ["La campagne offre un environnement plus sain avec plus d'espace et de nature.", "Vivre hors de la ville est beaucoup moins cher, on peut donc épargner plus."]
            },
            {
                "topic": "Végétarisme ou manger de la viande — qu'est-ce qui est le mieux pour la planète ?",
                "sideA": "Végétarisme",
                "sideB": "Viande",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Produire de la viande consomme beaucoup d'eau et de terre, ce qui nuit à l'environnement.", "Un régime à base de plantes réduit les émissions de carbone."],
                "ideasB": ["La viande est une bonne source de protéines et de vitamines essentielles pour beaucoup.", "Des pratiques agricoles durables peuvent rendre la production de viande moins nocive."]
            },
            {
                "topic": "Changements de mode de vie individuels ou action gouvernementale — qu'est-ce qui fait le plus pour l'environnement ?",
                "sideA": "Individuel",
                "sideB": "Gouvernement",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Si tout le monde fait de petits changements, l'impact total sera très grand.", "Les choix individuels envoient un message aux entreprises pour qu'elles soient durables."],
                "ideasB": ["Seuls les gouvernements peuvent faire des lois pour stopper la pollution des grandes industries.", "Les accords internationaux sont nécessaires pour résoudre les problèmes mondiaux."]
            },
            {
                "topic": "Un emploi stable ou une carrière créative — quel est le meilleur choix de vie ?",
                "sideA": "Emploi stable",
                "sideB": "Carrière créative",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un emploi stable vous permet de planifier votre vie et d'éviter le stress.", "Vous pouvez suivre vos passions créatives comme hobby pendant votre temps libre."],
                "ideasB": ["Une carrière créative est plus épanouissante car vous pouvez vous exprimer.", "Faire ce qu'on aime chaque jour est mieux que d'avoir un salaire élevé."]
            },
            {
                "topic": "Créer sa propre entreprise ou travailler pour une entreprise — qu'est-ce qui est mieux ?",
                "sideA": "Propre entreprise",
                "sideB": "Entreprise",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Lancer une activité vous permet de créer quelque chose de nouveau et d'être indépendant.", "Vous pouvez construire votre propre équipe et votre culture de zéro."],
                "ideasB": ["Travailler pour une entreprise offre plus de sécurité et un meilleur équilibre vie-travail.", "Vous avez des collègues qui vous soutiennent et vous pouvez apprendre de vos managers."]
            },
            {
                "topic": "Salaire élevé ou satisfaction au travail — qu'est-ce qui compte le plus au travail ?",
                "sideA": "Salaire",
                "sideB": "Satisfaction",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Un salaire élevé vous permet de vous offrir une vie confortable et de voyager.", "L'argent peut acheter des expériences et de la sécurité pour vous et votre famille."],
                "ideasB": ["Si vous êtes heureux au travail, vous serez plus productif et moins stressé.", "Nous passons la majeure partie de notre vie à travailler, cela devrait donc nous plaire."]
            },
            {
                "topic": "Travailler de longues heures ou avoir un équilibre vie-travail — qu'est-ce qui mène à plus de succès ?",
                "sideA": "Longues heures",
                "sideB": "Équilibre",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Le travail acharné et les longues heures sont souvent nécessaires pour un grand succès.", "Les gens qui réussissent dans le monde sont souvent très dévoués à leur travail."],
                "ideasB": ["Un bon équilibre vous aide à rester créatif et productif à long terme.", "Le succès n'est pas que le travail ; c'est aussi la santé et les relations."]
            },
            {
                "topic": "Choisir une carrière basée sur la passion ou sur les perspectives d'emploi — qu'est-ce qui est le plus sage ?",
                "sideA": "Passion",
                "sideB": "Perspectives",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Si vous aimez votre travail, vous travaillerez plus dur et réussirez.", "Suivre sa propre passion mène à une vie plus significative et heureuse."],
                "ideasB": ["Il est plus sage de choisir un métier très demandé et bien payé.", "Vous pouvez utiliser l'argent d'un bon job pour suivre vos passions pendant vos loisirs."]
            },
            {
                "topic": "Vivre en tant qu'individu ou faire passer la communauté en premier — qu'est-ce qui est le plus important ?",
                "sideA": "Individu",
                "sideB": "Communauté",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Se concentrer sur soi-même permet d'atteindre son plein potentiel.", "La liberté individuelle est le droit le plus important dans une société moderne."],
                "ideasB": ["Aider les autres et faire partie d'un groupe rend la vie plus gratifiante.", "Une communauté forte fournit soutien et sécurité pour tout le monde."]
            },
            {
                "topic": "Valeurs traditionnelles ou valeurs modernes — lesquelles sont les plus importantes à conserver ?",
                "sideA": "Traditionnelles",
                "sideB": "Modernes",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Les valeurs traditionnelles comme la famille et le respect sont la base de la société.", "Maintenir les traditions nous aide à rester liés à notre histoire."],
                "ideasB": ["Les valeurs modernes comme l'égalité rendent la société plus juste pour tous.", "Nous devons mettre à jour nos valeurs pour résoudre les défis du XXIe siècle."]
            },
            {
                "topic": "Faire du bénévolat ou donner de l'argent à des œuvres de charité — qu'est-ce qui aide le plus ?",
                "sideA": "Bénévolat",
                "sideB": "Dons",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Consacrer son temps est plus personnel et montre que l'on tient vraiment à la cause.", "On peut acquérir de nouvelles compétences en faisant du bénévolat directement."],
                "ideasB": ["L'argent peut être utilisé pour payer des aides professionnelles plus efficaces.", "Donner est un moyen rapide pour les gens occupés de soutenir une cause."]
            },
            {
                "topic": "La célébrité ou faire la différence discrètement — quel est le meilleur but dans la vie ?",
                "sideA": "Célébrité",
                "sideB": "Différence discrète",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["La célébrité vous donne une plateforme pour influencer de nombreuses personnes.", "Être reconnu pour son travail est une grande récompense."],
                "ideasB": ["Aider les gens en silence est plus sincère et évite le stress de la célébrité.", "Avoir un impact réel dans la communauté locale est plus important que la gloire."]
            },
            {
                "topic": "Suivre les règles ou penser par soi-même — qu'est-ce qui compte le plus ?",
                "sideA": "Règles",
                "sideB": "Pensée propre",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Les règles sont nécessaires pour maintenir l'ordre et la sécurité dans la société.", "Suivre les règles établies est souvent le moyen le plus efficace d'agir."],
                "ideasB": ["Le progrès n'arrive que lorsque les gens remettent en question les règles.", "Il est important d'avoir ses propres opinions et de ne pas simplement suivre la masse."]
            },
            {
                "topic": "Santé physique ou santé mentale — quelle devrait être la priorité ?",
                "sideA": "Physique",
                "sideB": "Mentale",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Si vous êtes physiquement sain, vous avez l'énergie pour affronter les défis mentaux.", "Un corps sain mène souvent à un esprit plus positif et sain."],
                "ideasB": ["La santé mentale est la base de la façon dont nous vivons le monde.", "Sans un esprit sain, il est très difficile de maintenir un corps sain."]
            },
            {
                "topic": "Prévention ou traitement — quelle est la meilleure approche des soins de santé ?",
                "sideA": "Prévention",
                "sideB": "Traitement",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La prévention est moins chère et plus facile que de soigner une maladie déjà commencée.", "Un mode de vie sain peut prévenir la plupart des problèmes de santé."],
                "ideasB": ["La science médicale devrait se concentrer sur la recherche de meilleurs remèdes.", "On aura toujours besoin de soins efficaces pour les accidents et maladies imprévues."]
            },
            {
                "topic": "Sport de compétition ou exercice pour le plaisir — qu'est-ce qui est mieux pour vous ?",
                "sideA": "Compétition",
                "sideB": "Plaisir",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["La compétition vous motive à travailler plus dur et à donner le maximum.", "Jouer dans une équipe enseigne la discipline et la gestion de la pression."],
                "ideasB": ["L'exercice pour le plaisir est plus durable et réduit le risque de blessures.", "Il devrait s'agir de détente et de plaisir du mouvement, pas de victoire."]
            },
            {
                "topic": "Santé privée ou santé publique — quel système est le plus juste ?",
                "sideA": "Privée",
                "sideB": "Publique",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Un système privé encourage la concurrence, menant à des soins de qualité.", "Les gens devraient être libres de dépenser leur argent pour de meilleurs soins."],
                "ideasB": ["La santé publique garantit que tout le monde reçoive de l'aide, peu importe le revenu.", "Une société juste devrait fournir le même niveau de soins à chaque citoyen."]
            },
            {
                "topic": "Cinéma ou littérature — quelle est une forme d'art plus puissante ?",
                "sideA": "Cinéma",
                "sideB": "Littérature",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Les films sont une puissante expérience visuelle qui peut toucher un vaste public.", "La combinaison d'images et de musique crée un fort impact émotionnel."],
                "ideasB": ["Les livres vous permettent d'imaginer le monde et les personnages à votre façon.", "La littérature peut explorer les pensées internes plus profondément que les films."]
            },
            {
                "topic": "Art moderne ou art classique — qu'est-ce qui a le plus de valeur ?",
                "sideA": "Moderne",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["L'art moderne est précieux car il nous met au défi de penser au présent.", "Il peut être plus créatif et expérimental que les formes d'art traditionnelles."],
                "ideasB": ["L'art classique montre une incroyable habileté technique et a passé l'épreuve du temps.", "La beauté des peintures et sculptures traditionnelles est plus universelle."]
            },
            {
                "topic": "Préserver les vieux bâtiments ou en construire de nouveaux — qu'est-ce qui compte le plus ?",
                "sideA": "Préserver",
                "sideB": "Construire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Les vieux bâtiments font partie de notre histoire et donnent du caractère aux villes.", "Il est plus durable de rénover des bâtiments existants que de les détruire."],
                "ideasB": ["Les nouveaux bâtiments peuvent être plus efficaces d'un point de vue énergétique.", "L'architecture moderne peut être belle et représenter notre époque."]
            },
            {
                "topic": "Culture locale ou mondialisation — qu'est-ce qui enrichit le plus les communautés ?",
                "sideA": "Locale",
                "sideB": "Mondialisation",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Protéger la culture locale aide à maintenir notre identité et nos traditions.", "Les produits et coutumes locaux sont souvent meilleurs pour l'environnement."],
                "ideasB": ["La mondialisation nous permet de partager des idées et des produits du monde entier.", "Elle rapproche les gens et aide à comprendre des cultures différentes."]
            },
            {
                "topic": "Apprendre de ses erreurs vs apprendre de ses succès — qu'est-ce qui instruit le plus ?",
                "sideA": "Erreurs",
                "sideB": "Succès",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Les erreurs enseignent ce qui ne fonctionne pas et aident à être plus résilient.", "On se souvient souvent des échecs plus clairement, la leçon est donc plus forte."],
                "ideasB": ["Le succès montre le bon chemin et donne la confiance nécessaire pour continuer.", "Apprendre de ce qui fonctionne est plus efficace que de répéter les erreurs."]
            },
            {
                "topic": "Tablettes en classe vs cahiers traditionnels — qu'est-ce qui aide le plus les élèves ?",
                "sideA": "Tablettes",
                "sideB": "Cahiers",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Les tablettes permettent aux élèves d'accéder à des contenus interactifs.", "Elles sont plus portables et peuvent remplacer de nombreux livres lourds."],
                "ideasB": ["Écrire à la main aide à mieux retenir les informations que de taper.", "Les cahiers n'ont pas de distractions comme les jeux ou les notifications."]
            },
            {
                "topic": "Être toujours joignable vs avoir du temps libre numérique — qu'est-ce qui est mieux ?",
                "sideA": "Joignable",
                "sideB": "Temps libre",
                "level": "intermediate",
                "theme": "media_news_B1",
                "ideasA": ["Être joignable est important pour les urgences et la vie professionnelle.", "La technologie moderne nous permet de rester connectés aux proches facilement."],
                "ideasB": ["Le temps libre numérique est nécessaire pour réduire le stress et améliorer la santé.", "Il faut débrancher du monde virtuel pour profiter du monde réel."]
            },
            {
                "topic": "Réutiliser les choses vs recycler — qu'est-ce qui est le plus efficace ?",
                "sideA": "Réutiliser",
                "sideB": "Recycler",
                "level": "intermediate",
                "theme": "environment_sustainability_B1",
                "ideasA": ["Réutiliser les objets est mieux car cela ne nécessite pas d'énergie pour les traiter.", "Cela encourage un mode de vie plus durable et moins gaspilleur."],
                "ideasB": ["Le recyclage est plus pratique pour de grandes quantités de déchets comme le plastique.", "Il permet de transformer de vieux matériaux en nouveaux produits à grande échelle."]
            },
            {
                "topic": "Une seule carrière pour toute la vie vs changer de carrière souvent — qu'est-ce qui est mieux ?",
                "sideA": "Une carrière",
                "sideB": "Changer souvent",
                "level": "intermediate",
                "theme": "career_development_B1",
                "ideasA": ["Rester dans une carrière aide à devenir un vrai expert et à obtenir du respect.", "Cela offre plus de stabilité à long terme et un parcours de vie prévisible."],
                "ideasB": ["Changer de carrière permet d'explorer différents intérêts et de rester motivé.", "Cela vous rend plus adaptable aux changements du marché du travail moderne."]
            },
            {
                "topic": "Sommeil vs exercice — qu'est-ce qui a le plus d'impact sur votre santé ?",
                "sideA": "Sommeil",
                "sideB": "Exercice",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Le sommeil est essentiel pour que le corps se répare et le cerveau fonctionne.", "Si vous êtes fatigué, vous ne pouvez pas être productif, peu importe l'exercice."],
                "ideasB": ["L'exercice régulier renforce le cœur, les muscles et améliore l'humeur.", "Être actif donne plus d'énergie et aide à mieux dormir la nuit."]
            },
            {
                "topic": "Musique pop vs musique classique — laquelle a le plus d'impact culturel ?",
                "sideA": "Pop",
                "sideB": "Classique",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["La musique pop reflète la culture actuelle et unit des millions de personnes.", "Elle est plus accessible et tout le monde peut l'apprécier."],
                "ideasB": ["La musique classique a une beauté intemporelle et a influencé tous les genres.", "Elle demande un haut niveau d'habileté et peut exprimer des émotions complexes."]
            },
            {
                "topic": "Savoir comment quelque chose se termine vs être surpris — qu'est-ce qui est mieux ?",
                "sideA": "Savoir",
                "sideB": "Surpris",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Savoir la fin aide à se détendre et à apprécier comment l'histoire est racontée.", "Si vous n'aimez pas la fin, vous pouvez éviter de perdre du temps avec le show."],
                "ideasB": ["La surprise et le suspense rendent une histoire excitante et mémorable.", "Vivre les rebondissements pour la première fois est une expérience unique."]
            },
            {
                "topic": "Répondre immédiatement aux messages vs prendre son temps — qu'est-ce qui est plus respectueux ?",
                "sideA": "Immédiatement",
                "sideB": "Prendre son temps",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Répondre rapidement montre que vous respectez le temps de l'autre personne.", "Dans un monde rapide, la communication immédiate est nécessaire pour l'efficacité."],
                "ideasB": ["Prendre son temps permet de donner une réponse plus réfléchie et meilleure.", "Il est important d'avoir des limites et de ne pas être l'esclave de son téléphone."]
            },
            {
                "topic": "Regarder une série d'un coup vs regarder un épisode par semaine — quelle est la bonne manière ?",
                "sideA": "D'un coup",
                "sideB": "Hebdomadaire",
                "level": "intermediate",
                "theme": "opinion_debate_B1",
                "ideasA": ["Regarder une série vite aide à se souvenir de tous les détails et personnages.", "On n'a pas à attendre une semaine pour découvrir ce qui se passe après."],
                "ideasB": ["Regarder un épisode par semaine donne du temps pour réfléchir et en parler.", "Cela fait durer l'expérience plus longtemps et crée plus d'attente."]
            },
            {
                "topic": "Siège côté fenêtre vs siège côté couloir — lequel est objectivement le meilleur ?",
                "sideA": "Fenêtre",
                "sideB": "Couloir",
                "level": "intermediate",
                "theme": "travel_cultural_B1",
                "ideasA": ["Le siège fenêtre offre des vues incroyables et une paroi sur laquelle s'appuyer.", "Personne ne vous dérangera s'il doit se lever pendant le vol."],
                "ideasB": ["Le siège couloir vous donne plus d'espace pour les jambes et vous pouvez vous lever.", "Vous n'avez pas à demander à quelqu'un de bouger si vous devez aller aux toilettes."]
            },
            {
                "topic": "Sauter la salle une fois vs y aller et avoir une mauvaise séance — qu'est-ce qui est le pire ?",
                "sideA": "Sauter",
                "sideB": "Mauvaise séance",
                "level": "intermediate",
                "theme": "mental_health_wellbeing_B1",
                "ideasA": ["Mieux vaut sauter un jour et se reposer que de se forcer si on est fatigué.", "Une mauvaise séance peut décourager et pourrait mener à une blessure."],
                "ideasB": ["Y aller même quand on n'en a pas envie aide à construire de la discipline.", "Même un entraînement léger ou 'mauvais' est mieux pour le corps que rien."]
            },
            {
                "topic": "Se parler à soi-même vs parler à son animal — qu'est-ce qui est le plus raisonnable ?",
                "sideA": "À soi-même",
                "sideB": "À son animal",
                "level": "intermediate",
                "theme": "society_community_B1",
                "ideasA": ["Se parler à soi-même aide à organiser ses pensées et résoudre des problèmes.", "C'est un moyen naturel de traiter l'information et de rester concentré."],
                "ideasB": ["Les animaux sont d'excellents auditeurs et offrent un réconfort émotionnel.", "Parler à un animal semble plus social et moins solitaire que de se parler à soi-même."]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();