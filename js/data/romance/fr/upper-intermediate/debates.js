(function() {
    const data = [{
                "topic": "La semaine de travail de quatre jours vs la semaine de cinq jours — quel modèle profite le plus aux travailleurs et aux employeurs ?",
                "sideA": "Semaine de 4 jours",
                "sideB": "Semaine de 5 jours",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Améliore le bien-être des employés et réduit l'épuisement professionnel, ce qui entraîne une productivité accrue pendant les heures de travail.", "Permet un meilleur équilibre entre vie professionnelle et vie privée, ce qui peut améliorer considérablement les taux de rétention du personnel."],
                "ideasB": ["Pourrait entraîner une augmentation du stress si la même quantité de travail doit être compressée en moins de jours.", "Pourrait poser des défis opérationnels pour les entreprises qui doivent être disponibles pour les clients cinq ou sept jours par semaine."]
            },
            {
                "topic": "Revenu de base universel vs protection sociale ciblée — quel est le filet de sécurité le plus efficace pour les adultes qui travaillent ?",
                "sideA": "RBU",
                "sideB": "Protection ciblée",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Élimine le 'piège de la pauvreté' où les individus perdent leurs allocations dès qu'ils commencent à percevoir un revenu modeste.", "Réduit les coûts administratifs et les obstacles bureaucratiques associés aux conditions de ressources."],
                "ideasB": ["Les systèmes ciblés garantissent que les ressources publiques limitées sont dirigées vers ceux qui en ont le plus besoin.", "Un versement universel pourrait être excessivement coûteux et pourrait potentiellement décourager certains de chercher un emploi."]
            },
            {
                "topic": "L'économie à la tâche vs l'emploi permanent — quel modèle sert le mieux les travailleurs sur le long terme ?",
                "sideA": "Gig economy",
                "sideB": "Emploi permanent",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Offre une flexibilité inégalée, permettant aux individus de choisir quand et où ils travaillent.", "Offre la possibilité de diversifier ses compétences en travaillant sur une variété de projets différents simultanément."],
                "ideasB": ["Les rôles permanents offrent des avantages essentiels tels que les congés payés, l'assurance maladie et les cotisations de retraite.", "Fournit un revenu stable et prévisible, ce qui est crucial pour la planification financière et la sécurité à long terme."]
            },
            {
                "topic": "Méritocratie vs avantage structurel — qu'est-ce qui explique le mieux le succès professionnel ?",
                "sideA": "Méritocratie",
                "sideB": "Avantage structurel",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Le travail acharné et le talent sont les principaux moteurs de l'avancement dans un marché équitable et compétitif.", "Mettre l'accent sur le mérite encourage les individus à améliorer constamment leurs compétences et à donner le meilleur d'eux-mêmes."],
                "ideasB": ["Des facteurs tels que le milieu socio-économique et le réseautage jouent souvent un rôle décisif dans l'ouverture des portes.", "Les inégalités systémiques peuvent empêcher même les individus les plus talentueux d'atteindre leur plein potentiel."]
            },
            {
                "topic": "Transparence salariale vs confidentialité des salaires — qu'est-ce qui crée un lieu de travail plus juste ?",
                "sideA": "Transparence",
                "sideB": "Confidentialité",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Aide à identifier et à combler les écarts salariaux entre les sexes et les ethnies en rendant les disparités visibles.", "Favorise une culture de confiance et garantit que la rémunération est basée sur des critères objectifs plutôt que sur les compétences de négociation."],
                "ideasB": ["Révéler les salaires peut entraîner du ressentiment et des frictions entre collègues, nuisant potentiellement au moral de l'équipe.", "Le respect de la vie privée permet plus de flexibilité pour récompenser les performances exceptionnelles sans provoquer de polémique publique."]
            },
            {
                "topic": "Automatisation vs travail humain — quelle est la plus grande menace à long terme pour l'emploi des adultes ?",
                "sideA": "Automatisation",
                "sideB": "Travail humain",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA et la robotique peuvent effectuer des tâches répétitives plus efficacement et de manière plus rentable que les humains.", "Les progrès technologiques menacent de plus en plus des rôles complexes que l'on pensait auparavant à l'abri."],
                "ideasB": ["Les travailleurs humains possèdent des qualités uniques comme l'empathie, la créativité et la pensée critique que les machines ne peuvent pas reproduire.", "Les nouvelles technologies créent souvent des industries et des catégories d'emplois entièrement nouvelles qui nécessitent une supervision humaine."]
            },
            {
                "topic": "Télétravail vs présence au bureau — qu'est-ce qui est mieux pour la progression de carrière et la culture d'équipe ?",
                "sideA": "Télétravail",
                "sideB": "Présence au bureau",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Éliminer les trajets domicile-travail permet d'économiser du temps et de l'énergie, permettant aux employés d'être plus concentrés et productifs.", "L'accès à un vivier mondial de talents permet aux entreprises d'embaucher les meilleures personnes quel que soit leur emplacement géographique."],
                "ideasB": ["Les interactions spontanées en face à face mènent souvent à une résolution de problèmes et à une innovation plus créatives.", "Le fait d'être physiquement présent facilite la création de liens avec les mentors et permet de rester visible auprès de la direction générale."]
            },
            {
                "topic": "Congé parental égal pour les hommes et les femmes vs congé de maternité plus long — quelle politique est la plus juste ?",
                "sideA": "Congé égal",
                "sideB": "Maternité plus longue",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Encourage une division plus égale des responsabilités de garde d'enfants dès le début.", "Réduit la 'pénalité de la maternité' en garantissant que les deux parents s'absentent du marché du travail."],
                "ideasB": ["Reconnaît la réalité physique de l'accouchement et l'importance de la récupération maternelle et de l'allaitement.", "Un soutien ciblé pour les mères pourrait être plus approprié culturellement et pratiquement pour de nombreuses familles."]
            },
            {
                "topic": "Choisir de ne pas avoir d'enfants vs pression sociale pour avoir une famille — qu'est-ce qui mérite le plus de respect ?",
                "sideA": "Sans enfant",
                "sideB": "Pression familiale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Les individus devraient avoir l'autonomie de décider comment mener leur vie sans subir de jugement.", "Renoncer à la parentalité peut être un choix responsable compte tenu des préoccupations environnementales et des contraintes financières."],
                "ideasB": ["Les cellules familiales sont fondamentales pour la stabilité et la pérennité de la société et de ses valeurs culturelles.", "Le désir de fonder une famille est un instinct humain profondément enraciné qui devrait être soutenu et célébré."]
            },
            {
                "topic": "Le mariage en tant qu'institution vs la cohabitation sans mariage — qu'est-ce qui est le plus pertinent aujourd'hui ?",
                "sideA": "Mariage",
                "sideB": "Cohabitation",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Fournit un cadre juridique et financier clair qui protège les deux partenaires et leurs enfants.", "Représente un engagement public qui peut renforcer le lien entre les partenaires et assurer une stabilité sociale."],
                "ideasB": ["Les relations modernes devraient être basées sur la confiance et l'engagement mutuels plutôt que sur un contrat légal.", "La cohabitation offre plus de flexibilité et évite le processus coûteux et compliqué d'un divorce potentiel."]
            },
            {
                "topic": "Ménages à double revenu vs un partenaire restant à la maison — quel modèle est le meilleur pour les enfants et les adultes ?",
                "sideA": "Double revenu",
                "sideB": "Partenaire au foyer",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Assure une plus grande sécurité financière et permet aux deux partenaires de poursuivre leurs ambitions professionnelles.", "Donne un exemple positif aux enfants en démontrant l'égalité des sexes tant au travail qu'à la maison."],
                "ideasB": ["Avoir un parent à la maison garantit un soutien émotionnel et une surveillance constants pendant les années formatives de l'enfant.", "Réduit le stress lié à l'équilibre entre deux carrières exigeantes et la complexité de la gestion du foyer."]
            },
            {
                "topic": "L'écart salarial entre les sexes comme problème structurel vs une question de choix individuels — quelle explication a le plus de poids ?",
                "sideA": "Problème structurel",
                "sideB": "Choix individuels",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Les préjugés inconscients et les barrières systémiques empêchent souvent les femmes d'accéder à des rôles de direction bien rémunérés.", "La société a tendance à sous-évaluer les professions traditionnellement dominées par les femmes, comme le soin et l'éducation."],
                "ideasB": ["Les différences de revenus peuvent souvent être attribuées à des décisions personnelles concernant les heures de travail et les interruptions de carrière.", "Les femmes peuvent choisir des cheminements de carrière plus flexibles ou moins risqués qui offrent naturellement des rémunérations différentes."]
            },
            {
                "topic": "La propriété immobilière comme objectif vs un marché locatif professionnel — quel modèle de logement convient le mieux aux adultes modernes ?",
                "sideA": "Propriété",
                "sideB": "Marché locatif",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Assure une sécurité financière à long terme et un actif qui peut être transmis aux générations futures.", "Permet aux individus d'avoir un contrôle total sur leur environnement de vie et d'apporter des améliorations permanentes."],
                "ideasB": ["Un secteur locatif professionnel offre une plus grande mobilité pour ceux qui doivent déménager pour le travail ou leur style de vie.", "La location élimine le fardeau des coûts d'entretien et les risques financiers liés aux fluctuations du marché immobilier."]
            },
            {
                "topic": "La gentrification comme amélioration vs la gentrification comme déplacement — quel cadrage est le plus honnête ?",
                "sideA": "Amélioration",
                "sideB": "Déplacement",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["L'investissement peut revitaliser des zones négligées, menant à de meilleures infrastructures et des rues plus sûres.", "L'augmentation de la valeur des propriétés peut stimuler l'économie locale et créer de nouvelles opportunités commerciales pour les résidents."],
                "ideasB": ["La hausse des loyers oblige souvent les résidents de longue date et les petites entreprises à quitter leur propre communauté.", "La gentrification peut effacer l'histoire culturelle et le tissu social d'un quartier, le rendant inabordable."]
            },
            {
                "topic": "Densité urbaine vs étalement suburbain — quel est le meilleur modèle pour des villes vivables ?",
                "sideA": "Densité urbaine",
                "sideB": "Étalement suburbain",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": ["Les villes compactes sont plus durables car elles réduisent le besoin de voitures et soutiennent des transports publics efficaces.", "Une densité plus élevée favorise des communautés plus dynamiques avec un accès facile à la culture, au commerce et aux services essentiels."],
                "ideasB": ["La vie en banlieue offre plus d'espace, d'intimité et un environnement plus calme pour les familles pour élever des enfants.", "Une densité plus faible peut réduire l'effet d'îlot de chaleur urbain et offrir plus d'accès aux espaces verts."]
            },
            {
                "topic": "Vivre près de sa famille vs s'éloigner pour les opportunités — quel choix produit le meilleur bien-être à long terme ?",
                "sideA": "Vivre près",
                "sideB": "S'éloigner",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["La proximité de la famille offre un filet de sécurité émotionnel crucial et un soutien pratique, surtout pour les parents.", "Maintenir des racines locales fortes contribue à un sentiment d'appartenance et à l'identité communautaire."],
                "ideasB": ["Le déménagement peut ouvrir des perspectives de carrière nettement meilleures et un potentiel de gain plus élevé.", "Vivre de manière indépendante dans un nouvel environnement favorise la croissance personnelle, la résilience et une perspective plus large sur la vie."]
            },
            {
                "topic": "Une population vieillissante comme crise vs comme ressource — quel cadrage est le plus productif ?",
                "sideA": "Crise",
                "sideB": "Ressource",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["L'augmentation du ratio de dépendance exerce une pression immense sur les systèmes de santé et les fonds de pension.", "Une main-d'œuvre en déclin pourrait mener à une stagnation économique et à un manque d'innovation à long terme."],
                "ideasB": ["Les adultes plus âgés possèdent une richesse d'expérience, de sagesse et de connaissances institutionnelles inestimable pour la société.", "La 'silver économie' crée de nouveaux marchés et des opportunités de bénévolat et de mentorat intergénérationnel."]
            },
            {
                "topic": "Responsabilité personnelle pour la santé vs facteurs systémiques — qu'est-ce qui pèse le plus dans l'explication des résultats de santé ?",
                "sideA": "Responsabilité personnelle",
                "sideB": "Facteurs systémiques",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["Les choix individuels concernant l'alimentation, l'exercice et le tabagisme sont les causes les plus directes de nombreuses maladies chroniques.", "Responsabiliser les gens pour leur propre santé peut mener à de meilleurs résultats et à des coûts publics moindres."],
                "ideasB": ["Le statut socio-économique et l'accès à une nourriture saine et abordable sont souvent hors du contrôle direct d'un individu.", "Les facteurs environnementaux comme la pollution et les conditions de travail ont un impact profond sur la santé d'une population."]
            },
            {
                "topic": "Les jours de santé mentale comme droit légitime au travail vs source d'abus — où les employeurs doivent-ils placer la limite ?",
                "sideA": "Droit légitime",
                "sideB": "Source d'abus",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Reconnaître la santé mentale comme aussi importante que la santé physique réduit la stigmatisation et prévient l'épuisement à long terme.", "Soutenir le bien-être des employés mène à un moral plus élevé et à une meilleure productivité sur le long terme."],
                "ideasB": ["Sans directives claires, certains employés pourraient utiliser les jours de santé mentale pour éviter les échéances ou prendre des congés supplémentaires.", "Une fréquence élevée d'absences imprévues peut perturber les flux de travail et peser injustement sur les autres membres de l'équipe."]
            },
            {
                "topic": "Médecine préventive vs médecine curative — laquelle devrait recevoir plus de fonds publics ?",
                "sideA": "Préventive",
                "sideB": "Curative",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["Investir dans les vaccins et les initiatives de mode de vie sain peut prévenir les maladies avant même qu'elles ne surviennent.", "La prévention est bien plus rentable que le traitement de maladies avancées, économisant des milliards au système de santé."],
                "ideasB": ["L'éthique sociétale exige que nous fournissions les meilleurs soins possibles à ceux qui souffrent actuellement d'une maladie.", "La médecine curative est essentielle pour gérer les urgences et les conditions chroniques qui ne peuvent être prévenues."]
            },
            {
                "topic": "Médecine anti-âge vs vieillir avec grâce — quelle attitude est la plus cohérente ?",
                "sideA": "Anti-âge",
                "sideB": "Vieillir avec grâce",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": ["Les progrès scientifiques devraient être utilisés pour prolonger la durée de vie humaine et améliorer la qualité de vie des personnes âgées.", "Combattre les processus biologiques du vieillissement pourrait alléger l'énorme fardeau des maladies liées à l'âge."],
                "ideasB": ["Le vieillissement est une partie naturelle de l'expérience humaine qui devrait être acceptée et embrassée avec dignité.", "L'obsession de la jeunesse peut mener à des procédures médicales inutiles et à un échec à valoriser la sagesse de l'âge."]
            },
            {
                "topic": "Technologie de surveillance pour la sécurité publique vs droit à la vie privée — où doit se situer l'équilibre ?",
                "sideA": "Sécurité publique",
                "sideB": "Vie privée",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'utilisation généralisée de la vidéosurveillance et de la reconnaissance faciale peut agir comme un puissant moyen de dissuasion contre le crime.", "La surveillance des données est essentielle pour identifier les menaces et répondre rapidement aux urgences en temps réel."],
                "ideasB": ["La surveillance de masse peut mener à un 'effet de refroidissement' où les gens ont peur de s'exprimer ou de protester.", "La protection des données personnelles est un droit humain fondamental qui empêche l'abus de pouvoir par les gouvernements ou les entreprises."]
            },
            {
                "topic": "Les réseaux sociaux comme outil d'engagement civique vs comme moteur de polarisation — quel effet domine ?",
                "sideA": "Engagement civique",
                "sideB": "Polarisation",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Les plateformes permettent la diffusion rapide de l'information et l'organisation de mouvements citoyens.", "Donne une voix aux groupes marginalisés qui sont souvent négligés par les médias traditionnels."],
                "ideasB": ["Les algorithmes ont tendance à créer des chambres d'écho qui renforcent les préjugés existants et l'hostilité envers les opinions opposées.", "La propagation de la désinformation et des 'fake news' peut saper les processus démocratiques et la cohésion sociale."]
            },
            {
                "topic": "L'IA dans le recrutement vs le jugement humain — qu'est-ce qui produit des décisions d'embauche plus justes ?",
                "sideA": "IA",
                "sideB": "Jugement humain",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA peut être programmée pour ignorer les informations démographiques, réduisant potentiellement les biais et la discrimination.", "Les algorithmes peuvent analyser efficacement de vastes quantités de données pour trouver les candidats les plus qualifiés."],
                "ideasB": ["Les algorithmes peuvent par inadvertance apprendre et reproduire les biais existants présents dans les données historiques.", "Les recruteurs humains peuvent évaluer les 'soft skills' et l'adéquation culturelle d'une manière que les logiciels ne peuvent pas encore égaler."]
            },
            {
                "topic": "Le droit à l'oubli en ligne vs le droit du public à l'information — qu'est-ce qui devrait primer ?",
                "sideA": "Droit à l'oubli",
                "sideB": "Droit à l'info",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Les individus devraient pouvoir tourner la page sur leurs erreurs passées sans être hantés éternellement en ligne.", "La vie privée devrait inclure le droit de supprimer des informations obsolètes ou non pertinentes des résultats de recherche."],
                "ideasB": ["Le public a un intérêt légitime à accéder à des archives historiques exactes, surtout concernant les personnalités publiques.", "Censurer les résultats de recherche pourrait mener à une vision déformée de la vérité et nuire à la liberté de la presse."]
            },
            {
                "topic": "Vote obligatoire vs vote volontaire — qu'est-ce qui produit des démocraties plus saines ?",
                "sideA": "Obligatoire",
                "sideB": "Volontaire",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Garantit que le gouvernement a un mandat clair de l'ensemble de la population, pas seulement des plus actifs politiquement.", "Encourage les citoyens à rester informés sur les enjeux politiques et à prendre leurs responsabilités civiques au sérieux."],
                "ideasB": ["Le droit de vote devrait inclure le droit de choisir de ne pas participer si l'on ne se sent pas représenté.", "Les systèmes volontaires garantissent que ceux qui votent sont réellement engagés et motivés par leurs convictions."]
            },
            {
                "topic": "Engagement politique par la protestation vs par les canaux institutionnels — qu'est-ce qui est le plus efficace pour les adultes aujourd'hui ?",
                "sideA": "Protestation",
                "sideB": "Institutionnel",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Les protestations peuvent porter des questions urgentes sur le devant de la scène et forcer une action politique immédiate.", "L'action directe offre aux gens un moyen d'exprimer leur frustration lorsque les systèmes traditionnels semblent inertes."],
                "ideasB": ["Travailler au sein des canaux établis mène à un changement plus durable et légal.", "L'engagement institutionnel permet un débat nuancé et la négociation complexe nécessaire pour adopter une législation efficace."]
            },
            {
                "topic": "Identité nationale vs identité européenne ou mondiale — qu'est-ce qui a le plus de sens pour les adultes en 2026 ?",
                "sideA": "Identité nationale",
                "sideB": "Identité mondiale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Une histoire, une langue et une culture nationales partagées procurent un fort sentiment d'appartenance et de solidarité.", "Des institutions nationales fortes sont souvent les plus efficaces pour protéger les droits et le bien-être de leurs citoyens."],
                "ideasB": ["Les défis mondiaux comme le changement climatique nécessitent une identité unifiée et une coopération internationale.", "Dans un monde interconnecté, beaucoup se sentent plus alignés avec des valeurs universelles qu'avec des intérêts nationaux étroits."]
            },
            {
                "topic": "Augmentations d'impôts pour financer les services publics vs coupes budgétaires — quel est le choix politique le plus défendable ?",
                "sideA": "Augmentation impôts",
                "sideB": "Coupes budgétaires",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Des impôts plus élevés permettent de fournir une éducation et des soins de santé de haute qualité au bénéfice de tous.", "L'investissement public est nécessaire pour maintenir les infrastructures et soutenir les membres les plus vulnérables de la société."],
                "ideasB": ["Baisser les impôts peut stimuler la croissance économique en laissant plus d'argent aux individus et aux entreprises.", "Les coupes budgétaires forcent les gouvernements à être plus efficaces et à éliminer les programmes gaspilleurs."]
            },
            {
                "topic": "Admettre que vous n'avez aucune idée de la façon dont fonctionne votre retraite vs prétendre avec assurance que vous le savez — quelle est l'expérience adulte la plus universelle ?",
                "sideA": "Admettre ignorance",
                "sideB": "Prétendre savoir",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Les systèmes financiers sont si complexes que l'aveu de confusion est la position la plus honnête pour la plupart des gens.", "L'honnêteté sur ses connaissances financières peut mener à de meilleurs résultats en encourageant à chercher des conseils."],
                "ideasB": ["La pression de paraître compétent pousse souvent les adultes à feindre des connaissances en matière financière.", "Prétendre comprendre des sujets complexes est une stratégie de survie sociale courante dans de nombreux contextes."]
            },
            {
                "topic": "Être la personne qui planifie toujours les événements sociaux vs être toujours celle qui se contente de venir — quel rôle est le plus épuisant ?",
                "sideA": "L'organisateur",
                "sideB": "L'invité",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Organiser des événements demande du temps et de l'énergie mentale, en plus du stress lié à la gestion des attentes de chacun.", "Les planificateurs ressentent souvent le poids de la responsabilité pour le succès d'un événement et le plaisir des invités."],
                "ideasB": ["Être toujours l'invité peut mener à un sentiment de manque de contrôle et à l'effort de s'adapter constamment aux plans des autres.", "La socialisation peut être mentalement épuisante même pour ceux qui n'ont pas la responsabilité de l'organisation."]
            },
            {
                "topic": "Avoir une opinion tranchée sur les habitudes de cuisine de vos collègues vs ne pas s'en soucier du tout — quelle personne est la plus tolérable ?",
                "sideA": "Opinion tranchée",
                "sideB": "S'en fiche",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Maintenir des normes de propreté et de respect dans les espaces partagés est essentiel pour un environnement de travail productif.", "Ceux qui se soucient des habitudes communes veillent souvent à la santé et au confort de toute l'équipe."],
                "ideasB": ["Une attitude détendue prévient les conflits inutiles et favorise un lieu de travail plus tolérant et moins stressant.", "Se concentrer sur le travail plutôt que sur les habitudes domestiques triviales fait de vous un collègue plus professionnel."]
            },
            {
                "topic": "Assister à chaque événement social facultatif au travail vs n'assister à aucun — quelle stratégie est la meilleure pour votre carrière et votre santé mentale ?",
                "sideA": "Tout assister",
                "sideB": "Rien assister",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Socialiser avec ses collègues hors du travail peut construire des relations solides et ouvrir des opportunités de réseautage.", "Montrer son engagement envers la vie sociale de l'équipe peut rendre un individu plus accessible et intégré."],
                "ideasB": ["Fixer des limites claires entre travail et vie privée est essentiel pour maintenir une bonne santé mentale à long terme.", "La santé mentale est mieux préservée en passant du temps de qualité avec ses proches plutôt qu'en se sentant obligé d'assister à des événements."],
            },
            {
                "topic": "Les adultes qui sont encore perplexes devant leur déclaration d'impôts vs les adultes qui aiment la faire — quel groupe est le plus digne de confiance ?",
                "sideA": "Perplexe",
                "sideB": "Aime ça",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Les personnes perplexes sont souvent plus sincères concernant les frustrations liées aux systèmes bureaucratiques.", "Admettre une difficulté avec des tâches complexes est un signe d'authenticité plutôt que de vouloir projeter une image parfaite."],
                "ideasB": ["Prendre plaisir à des tâches méticuleuses suggère un haut niveau de compétence, d'attention aux détails et de fiabilité.", "Les personnes qui aiment l'organisation et la conformité sont susceptibles d'être responsables dans d'autres domaines de la vie."]
            },
            {
                "topic": "Se plaindre du coût de la vie auprès de ses amis vs prétendre que tout va bien — quelle est la réponse adulte la plus honnête ?",
                "sideA": "Se plaindre",
                "sideB": "Prétendre que tout va bien",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Partager ses difficultés financières crée un sentiment de solidarité et permet aux amis de se soutenir mutuellement.", "Discuter ouvertement des défis économiques est un reflet plus fidèle de la réalité actuelle pour beaucoup de gens."],
                "ideasB": ["Maintenir une attitude positive peut être une façon de gérer le stress et d'éviter que les soucis financiers ne dominent la vie sociale.", "Certains préfèrent garder leur situation financière privée pour préserver leur dignité et éviter de peser sur les autres."]
            },
            {
                "topic": "Réseaux sociaux vs interactions en face à face — qu'est-ce qui est mieux pour construire des relations ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permet une communication constante et la possibilité de maintenir des liens malgré les grandes distances.", "Offre une plateforme pour trouver et se connecter avec des communautés partageant des intérêts spécifiques."],
                "ideasB": ["La présence physique et les indices non verbaux sont essentiels pour construire une confiance profonde et une intimité émotionnelle.", "Les interactions en personne sont moins susceptibles d'être mal interprétées et favorisent des connexions plus authentiques."]
            },
            {
                "topic": "Vie urbaine vs vie rurale — laquelle offre une meilleure qualité de vie ?",
                "sideA": "Urbain",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": ["Les villes offrent une richesse d'opportunités culturelles, éducatives et professionnelles indisponibles dans les zones rurales.", "Les transports publics et les services concentrés rendent la vie urbaine plus pratique et diversifiée."],
                "ideasB": ["Les zones rurales offrent un environnement paisible avec moins de pollution, plus d'espace et un lien plus fort avec la nature.", "Un rythme de vie plus lent et des communautés plus petites peuvent mener à moins de stress et à des liens sociaux plus profonds."]
            },
            {
                "topic": "Apprentissage en ligne vs salle de classe traditionnelle — quel est l'avenir de l'éducation ?",
                "sideA": "En ligne",
                "sideB": "Classe",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Offre la flexibilité d'apprendre à son propre rythme et d'équilibrer l'éducation avec d'autres engagements.", "Les outils technologiques peuvent offrir des expériences d'apprentissage personnalisées et un accès à des ressources mondiales."],
                "ideasB": ["L'interaction directe avec les enseignants et les pairs est cruciale pour développer les compétences sociales et collaboratives.", "Une salle de classe physique offre un environnement structuré plus propice à la concentration et à la discipline."]
            },
            {
                "topic": "Énergie renouvelable vs énergie nucléaire — quelle est la meilleure solution pour le climat ?",
                "sideA": "Renouvelable",
                "sideB": "Nucléaire",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Le solaire et l'éolien sont de plus en plus rentables et fournissent de l'énergie sans produire de déchets radioactifs.", "Investir dans les renouvelables encourage la production d'énergie décentralisée et favorise l'innovation."],
                "ideasB": ["L'énergie nucléaire fournit une 'charge de base' constante et fiable qui ne dépend pas des conditions météorologiques.", "La technologie nucléaire moderne permet de générer massivement de l'électricité avec des émissions de carbone extrêmement faibles."]
            },
            {
                "topic": "Mode éphémère vs vêtements durables — pouvons-nous nous permettre d'être éthiques ?",
                "sideA": "Mode éphémère",
                "sideB": "Durable",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Fournit des vêtements abordables et élégants pour les bas revenus, rendant la mode plus démocratique.", "L'industrie de la mode éphémère crée des millions d'emplois dans les pays en développement et contribue au commerce mondial."],
                "ideasB": ["Les vêtements durables sont de meilleure qualité et durent plus longtemps, ce qui est plus économique et écologique à long terme.", "Soutenir des marques éthiques aide à lutter contre l'exploitation des travailleurs et les dommages environnementaux massifs."]
            },
            {
                "topic": "Spécialisation précoce vs éducation générale large — qu'est-ce qui prépare le mieux les étudiants à la vie ?",
                "sideA": "Spécialisation",
                "sideB": "Éducation large",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Développer une expertise approfondie dans un domaine spécifique tôt peut mener à une carrière plus ciblée.", "La spécialisation précoce permet de maîtriser des compétences complexes hautement valorisées sur le marché du travail."],
                "ideasB": ["Une éducation large favorise la pensée critique entre les disciplines et prépare à un avenir imprévisible.", "Apprendre une variété de sujets aide à découvrir ses vraies passions et à devenir un citoyen plus complet."]
            },
            {
                "topic": "Compétences de pensée critique vs connaissances disciplinaires — sur quoi les écoles devraient-elles se concentrer ?",
                "sideA": "Pensée critique",
                "sideB": "Connaissances",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Enseigner à analyser, évaluer et synthétiser l'information est plus important que de mémoriser des faits.", "La pensée critique est une compétence transférable essentielle pour la résolution de problèmes dans tout contexte."],
                "ideasB": ["Une base solide de connaissances spécifiques est nécessaire avant de pouvoir penser de manière critique sur un sujet.", "Une connaissance approfondie fournit le contexte et les preuves nécessaires pour une analyse significative et précise."]
            },
            {
                "topic": "Frais de scolarité vs université gratuite — quel modèle est le plus juste ?",
                "sideA": "Frais de scolarité",
                "sideB": "Université gratuite",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Les frais peuvent garantir que les universités soient bien financées et inciter les étudiants à prendre leurs études au sérieux.", "Un système de frais garantit que ceux qui bénéficient le plus d'un diplôme contribuent au coût de leur éducation."],
                "ideasB": ["L'enseignement supérieur devrait être un droit fondamental accessible à tous, quel que soit le revenu.", "L'université gratuite empêche les étudiants d'obtenir leur diplôme avec des dettes énormes et encourage la mobilité sociale."]
            },
            {
                "topic": "Tests standardisés vs évaluation par portfolio — qu'est-ce qui reflète le mieux les capacités ?",
                "sideA": "Tests standardisés",
                "sideB": "Portfolio",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Offre un moyen objectif et cohérent de comparer les performances des élèves entre différentes écoles.", "Les tests chronométrés préparent les élèves aux environnements à haute pression qu'ils pourraient rencontrer dans leur carrière."],
                "ideasB": ["Les portfolios montrent les progrès sur une longue période, offrant une vue plus complète des compétences.", "Une variété d'échantillons de travail permet d'évaluer la créativité, la persévérance et l'application pratique."]
            },
            {
                "topic": "Intelligence académique vs intelligence émotionnelle — qu'est-ce qui compte le plus pour le succès ?",
                "sideA": "Académique",
                "sideB": "Émotionnelle",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Des capacités cognitives élevées et une expertise technique sont souvent les conditions premières pour des professions exigeantes.", "La réussite académique est un indicateur de discipline, de capacité d'analyse et de maîtrise d'informations complexes."],
                "ideasB": ["La capacité à gérer ses émotions et à établir des relations est cruciale pour le leadership et le travail d'équipe.", "L'intelligence émotionnelle aide à naviguer dans les complexités sociales et à s'adapter aux défis du monde moderne."]
            },
            {
                "topic": "Enseigner la créativité vs enseigner la discipline — quel devrait être l'objectif de l'éducation moderne ?",
                "sideA": "Créativité",
                "sideB": "Discipline",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Favoriser la créativité est essentiel pour l'innovation et pour trouver de nouvelles solutions à des problèmes complexes.", "L'éducation devrait encourager les élèves à penser hors des sentiers battus et à développer leurs talents uniques."],
                "ideasB": ["Développer la discipline et une forte éthique de travail est fondamental pour atteindre des objectifs à long terme.", "Un environnement structuré aide les élèves à construire la persévérance et la concentration nécessaires pour des tâches difficiles."]
            },
            {
                "topic": "Réglementation des réseaux sociaux vs liberté d'expression — que faut-il privilégier ?",
                "sideA": "Réglementation",
                "sideB": "Liberté d'expression",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["La surveillance gouvernementale est nécessaire pour prévenir la propagation de la désinformation et des discours de haine.", "La réglementation peut tenir les géants de la technologie responsables de l'impact de leurs algorithmes sur le débat public."],
                "ideasB": ["Le droit de s'exprimer sans censure est un pilier de la démocratie et doit être protégé à tout prix.", "Une réglementation excessive pourrait mener à la suppression des voix dissidentes et donner trop de pouvoir aux gouvernements."]
            },
            {
                "topic": "Curation algorithmique vs sélection éditoriale — quelle est la manière la plus fiable de s'informer ?",
                "sideA": "Algorithmes",
                "sideB": "Sélection éditoriale",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Les algorithmes peuvent fournir une gamme plus large de perspectives basées sur les données plutôt que sur les biais d'un éditeur.", "Les systèmes automatisés peuvent traiter l'information beaucoup plus rapidement, offrant des mises à jour en temps réel."],
                "ideasB": ["Les éditeurs humains fournissent un contexte essentiel, une surveillance éthique et un engagement envers l'exactitude.", "Les journalistes professionnels peuvent enquêter sur des histoires complexes d'une manière que les algorithmes ne peuvent égaler."]
            },
            {
                "topic": "Cresissance économique vs protection de l'environnement — peuvent-ils coexister ?",
                "sideA": "Croissance",
                "sideB": "Environnement",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Une croissance économique continue est nécessaire pour financer la recherche et le développement de technologies vertes.", "La prospérité croissante permet aux sociétés d'investir davantage dans la conservation et la transition écologique."],
                "ideasB": ["Une croissance infinie sur une planète finie est impossible ; nous devons donner la priorité à la santé de la planète.", "Protéger la biodiversité et le climat est un prérequis à toute stabilité économique ou bien-être humain à long terme."]
            },
            {
                "topic": "Taxes carbone vs subventions vertes — quelle politique climatique est la plus efficace ?",
                "sideA": "Taxes carbone",
                "sideB": "Subventions vertes",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Donner un prix au carbone offre une incitation claire du marché à réduire les émissions pour les entreprises et les individus.", "Les recettes fiscales peuvent financer les services publics ou être rendues aux citoyens pour compenser le coût de l'énergie."],
                "ideasB": ["Les incitations financières pour les énergies renouvelables et les véhicules électriques peuvent accélérer la transition.", "Les subventions aident à abaisser le coût initial des technologies vertes, les rendant plus accessibles au grand public."]
            },
            {
                "topic": "Décroissance vs croissance durable — quelle est la bonne réponse à la crise climatique ?",
                "sideA": "Décroissance",
                "sideB": "Croissance durable",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Nous devons réduire intentionnellement la production et la consommation dans les pays riches pour rester dans les limites planétaires.", "Mettre l'accent sur le bien-être plutôt que sur la richesse matérielle peut mener à une société plus durable."],
                "ideasB": ["Nous pouvons découpler la croissance de l'impact environnemental grâce à l'innovation, l'efficacité et les énergies renouvelables.", "La croissance durable fournit les ressources pour sortir les gens de la pauvreté tout en protégeant l'environnement."]
            },
            {
                "topic": "Responsabilité individuelle vs responsabilité d'entreprise — qui est le plus coupable des dommages environnementaux ?",
                "sideA": "Responsabilité individuelle",
                "sideB": "Responsabilité d'entreprise",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Les changements collectifs de comportement individuel peuvent avoir un impact massif sur l'environnement.", "Les consommateurs ont le pouvoir de stimuler le changement en choisissant des produits durables et en exigeant plus des entreprises."],
                "ideasB": ["Un petit nombre de grandes entreprises est responsable de la grande majorité des émissions mondiales de gaz à effet de serre.", "Le changement systémique doit être mené par ceux qui ont le plus de pouvoir plutôt que de faire peser le fardeau sur les individus."]
            },
            {
                "topic": "Démocratie directe vs démocratie représentative — laquelle est la plus efficace ?",
                "sideA": "Démocratie directe",
                "sideB": "Représentative",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permettre aux citoyens de voter directement sur les lois garantit que le gouvernement reflète fidèlement la volonté du peuple.", "La participation directe favorise une citoyenneté plus engagée qui assume la responsabilité de sa société."],
                "ideasB": ["Les représentants élus ont le temps et l'expertise pour étudier des questions complexes et prendre des décisions éclairées.", "Les systèmes représentatifs protègent contre la 'tyrannie de la majorité' et garantissent le respect des droits des minorités."]
            },
            {
                "topic": "Gouvernement central fort vs autonomie régionale — qu'est-ce qui sert le mieux les citoyens ?",
                "sideA": "Gouvernement central",
                "sideB": "Autonomie régionale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Une autorité centrale forte peut garantir des normes cohérentes et des droits égaux pour tous les citoyens dans une nation.", "Les gouvernements nationaux sont mieux équipés pour gérer les défis à grande échelle comme la sécurité nationale."],
                "ideasB": ["Les gouvernements régionaux sont plus proches des gens et peuvent mieux comprendre et répondre aux besoins locaux.", "L'autonomie permet d'expérimenter différentes politiques qui peuvent ensuite être adoptées par d'autres régions."]
            },
            {
                "topic": "Méritocratie vs action positive — quelle est la base la plus juste pour l'égalité des chances ?",
                "sideA": "Méritocratie",
                "sideB": "Action positive",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Récompenser les individus uniquement sur leur talent et leur effort est la manière la plus objective d'attribuer les chances.", "Un système basé sur le mérite encourage chacun à viser l'excellence et garantit que les plus capables occupent les postes clés."],
                "ideasB": ["Des mesures proactives sont nécessaires pour égaliser les chances et corriger les inégalités historiques et systémiques.", "La diversité au travail et dans l'éducation enrichit la société et garantit la représentation de différentes perspectives."]
            },
            {
                "topic": "Frontières ouvertes vs immigration contrôlée — qu'est-ce qui sert le mieux les communautés ?",
                "sideA": "Frontières ouvertes",
                "sideB": "Immigration contrôlée",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Permettre aux gens de circuler librement peut stimuler la croissance économique et combler les pénuries de main-d'œuvre.", "Le droit de circuler est une liberté humaine fondamentale qui permet d'échapper à la pauvreté et de chercher une vie meilleure."],
                "ideasB": ["Les systèmes contrôlés permettent aux gouvernements de gérer les services publics et d'assurer l'intégration des nouveaux arrivants.", "Réguler l'immigration peut aider à protéger les salaires et les conditions de travail de la main-d'œuvre existante."]
            },
            {
                "topic": "Utilitarisme vs éthique déontologique — quel est le meilleur cadre moral ?",
                "sideA": "Utilitarisme",
                "sideB": "Déontologie",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Se concentrer sur le plus grand bien pour le plus grand nombre offre un moyen pratique de prendre des décisions morales.", "Les conséquences d'une action sont ce qui compte vraiment lors de l'évaluation de sa valeur éthique."],
                "ideasB": ["Certaines actions sont intrinsèquement bonnes ou mauvaises, quelles que soient leurs conséquences ; nous devons suivre des règles.", "Respecter les droits et devoirs individuels est le seul moyen de garantir une véritable justice et la dignité humaine."]
            },
            {
                "topic": "Liberté d'expression vs protection contre les préjudices — où faut-il placer la limite ?",
                "sideA": "Liberté d'expression",
                "sideB": "Protection",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Le libre échange des idées, même controversées, est essentiel au progrès et à la recherche de la vérité.", "L'expression ne devrait être restreinte que dans les cas les plus extrêmes, comme l'incitation directe à la violence."],
                "ideasB": ["La société a le devoir de protéger les groupes vulnérables contre les discours de haine qui mènent à des préjudices réels.", "Le droit à la libre expression n'inclut pas le droit de diffuser de la désinformation qui met en danger la santé publique."]
            },
            {
                "topic": "Relativisme culturel vs droits de l'homme universels — quelle est la position la plus forte ?",
                "sideA": "Relativisme culturel",
                "sideB": "Droits universels",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Nous devons respecter les différentes valeurs des autres cultures plutôt que de leur imposer nos propres convictions.", "La moralité est souvent le produit d'une culture, et il n'y a pas de moyen objectif de dire qu'un système est meilleur qu'un autre."],
                "ideasB": ["Les droits fondamentaux, comme le droit à la vie et à la liberté, devraient être protégés partout quelle que soit la culture.", "Des normes universelles sont nécessaires pour prévenir l'oppression d'individus sous couvert de tradition."]
            },
            {
                "topic": "Punition vs réhabilitation — quel devrait être l'objectif du système judiciaire ?",
                "sideA": "Punition",
                "sideB": "Réhabilitation",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["La justice rétributive garantit que les délinquants subissent les conséquences de leurs actes et apaise les victimes.", "Des punitions strictes peuvent agir comme un moyen de dissuasion, empêchant d'autres de commettre des crimes similaires."],
                "ideasB": ["L'objectif premier devrait être d'aider les délinquants à se réintégrer et à traiter les causes profondes de leur comportement.", "La réhabilitation est plus efficace pour réduire la récidive et construire une société plus sûre à long terme."]
            },
            {
                "topic": "Savoir trop vs savoir trop peu — quelle condition est la plus dangereuse pour l'adulte moderne ?",
                "sideA": "Savoir trop",
                "sideB": "Savoir trop peu",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["L'excès d'analyse peut mener à une paralysie décisionnelle, où l'abondance d'informations empêche une action rapide.", "La conscience constante des crises mondiales et des risques complexes peut augmenter l'anxiété et diminuer le bien-être général."],
                "ideasB": ["L'ignorance d'informations critiques peut mener à de mauvais choix de vie et à une vulnérabilité à l'exploitation.", "Un manque de connaissances empêche les individus de participer efficacement aux processus démocratiques et au discours social."]
            },
            {
                "topic": "Être en avance partout vs être toujours légèrement en retard — quel est le plus grand crime social ?",
                "sideA": "Être en avance",
                "sideB": "Être en retard",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Arriver trop tôt peut imposer un fardeau injuste à l'hôte, le forçant à précipiter ses préparatifs.", "Cela peut signaler un manque de conscience sociale ou un empressement excessif qui met les autres mal à l'aise."],
                "ideasB": ["Le retard constant démontre un manque fondamental de respect pour le temps des autres et les horaires professionnels.", "Cela peut nuire à la réputation de fiabilité et perturber le déroulement des réunions ou des rencontres sociales."]
            },
            {
                "topic": "Plier le linge immédiatement vs vivre avec une pile — quel choix de vie est le plus défendable ?",
                "sideA": "Plier tout de suite",
                "sideB": "Vivre avec une pile",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Maintenir l'ordre dans l'environnement domestique réduit le désordre mental et contribue à un mode de vie discipliné.", "Les vêtements pliés sont mieux préservés, ce qui permet d'économiser du temps de repassage et de l'argent."],
                "ideasB": ["Donner la priorité à des activités plus significatives plutôt qu'à des tâches ménagères banales peut mener à une vie plus épanouie.", "Une approche plus relaxée permet d'économiser du temps et de l'énergie immédiats pour le travail, la famille ou la détente."]
            },
            {
                "topic": "L'invention du réveil vs l'invention du bouton 'snooze' — lequel a fait le plus de mal à l'humanité ?",
                "sideA": "Réveil",
                "sideB": "Bouton snooze",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Le réveil a perturbé les rythmes circadiens naturels de l'homme, menant à une privation de sommeil chronique et au stress.", "Il a formalisé une approche rigide et industrielle du temps qui privilégie la productivité sur le bien-être biologique."],
                "ideasB": ["Le bouton snooze encourage la 'fragmentation du sommeil', ce qui peut laisser les individus plus groggys et moins alertes.", "Il favorise une habitude de procrastination et de report des responsabilités qui peut nuire aux performances professionnelles."]
            },
            {
                "topic": "Fantômes vs extraterrestres — quelle serait la découverte la plus perturbatrice pour la société moderne ?",
                "sideA": "Fantômes",
                "sideB": "Extraterrestres",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["La preuve d'une vie après la mort renverserait fondamentalement tous les cadres religieux, philosophiques et scientifiques.", "Cela soulèverait de profondes questions éthiques et juridiques concernant les droits et l'influence des défunts sur les vivants."],
                "ideasB": ["Le contact avec une vie extraterrestre forcerait l'humanité à reconsidérer sa place dans l'univers et son statut unique.", "Cela pourrait poser des risques de sécurité importants ou des défis technologiques que la société n'est pas prête à gérer."]
            },
            {
                "topic": "Céréales avant le lait vs lait avant les céréales — est-ce une question de préférence ou de fait objectif ?",
                "sideA": "Céréales d'abord",
                "sideB": "Lait d'abord",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Ajouter les céréales en premier permet un meilleur contrôle des portions et garantit le ratio optimal de croquant.", "C'est l'approche la plus logique et systématique, empêchant le lait d'éclabousser et de créer du désordre."],
                "ideasB": ["Ajouter le lait d'abord permet de chauffer le liquide précisément avant d'ajouter les céréales, maintenant la température voulue.", "Cela garantit que les céréales restent croustillantes plus longtemps, car elles ne sont pas immédiatement immergées."]
            },
            {
                "topic": "Alerte éthique (whistleblowing) vs loyauté institutionnelle — quel est le choix le plus éthique ?",
                "sideA": "Alerte éthique",
                "sideB": "Loyauté",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Dénoncer les actes répréhensibles est un devoir fondamental envers le public qui prime sur les intérêts de l'organisation.", "Le whistleblowing favorise la transparence et tient les institutions puissantes pour responsables de leurs actes."],
                "ideasB": ["La loyauté envers son institution est essentielle pour maintenir la stabilité et l'efficacité des organisations complexes.", "Les problèmes internes devraient être résolus par les canaux établis pour éviter des dommages réputationnels inutiles."]
            },
            {
                "topic": "Optimisme vs réalisme — quelle est la vision du monde la plus productive pour une carrière ?",
                "sideA": "Optimisme",
                "sideB": "Réalisme",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Une perspective positive favorise la résilience et encourage les individus à prendre les risques nécessaires à l'innovation.", "L'optimisme est contagieux et peut améliorer considérablement le morale de l'équipe et la résolution collective de problèmes."],
                "ideasB": ["Une évaluation réaliste des défis empêche le gaspillage de ressources sur des objectifs inatteignables ou trop ambitieux.", "Le réalisme permet une planification d'urgence et une gestion des risques plus efficaces dans des environnements volatils."]
            },
            {
                "topic": "Entrepreneuriat vs salariat — qu'est-ce qui contribue le plus à la société ?",
                "sideA": "Entrepreneuriat",
                "sideB": "Salariat",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": ["Les entrepreneurs stimulent l'innovation et créent les nouveaux emplois et industries qui alimentent le progrès économique.", "La volonté de prendre des risques personnels mène au développement de solutions novatrices aux problèmes sociétaux complexes."],
                "ideasB": ["Les efforts collectifs de millions d'employés fournissent la stabilité et l'expertise essentielles au fonctionnement de la société.", "L'emploi fournit une base fiscale constante et soutient l'infrastructure établie de l'économie mondiale."]
            },
            {
                "topic": "Nationalisme vs globalisme — quel est le cadre le plus cohérent pour le 21e siècle ?",
                "sideA": "Nationalisme",
                "sideB": "Globalisme",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": ["Se concentrer sur l'État-nation garantit que les gouvernements restent responsables envers leurs propres citoyens.", "L'identità nationale procure un fort sentiment d'appartenance et de cohésion sociale nécessaire à une société stable."],
                "ideasB": ["Les défis mondiaux comme le changement climatique nécessitent une approche internationale unifiée qui transcende les frontières.", "Une économie mondiale interconnectée favorise la paix et la prospérité en rendant les nations interdépendantes."]
            },
            {
                "topic": "École à la maison vs école traditionnelle — qu'est-ce qui produit des individus plus équilibrés ?",
                "sideA": "École à la maison",
                "sideB": "École traditionnelle",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["L'instruction personnalisée permet aux enfants de suivre leurs propres intérêts et d'apprendre à leur propre rythme.", "L'école à la maison peut protéger les enfants des influences sociales négatives comme le harcèlement scolaire."],
                "ideasB": ["Les écoles traditionnelles offrent un environnement social diversifié où les enfants apprennent à interagir avec tous.", "Le cadre structuré d'une école favorise des compétences de vie essentielles comme la discipline et le travail d'équipe."]
            },
            {
                "topic": "Systèmes de notation vs feedback descriptif — qu'est-ce qui motive les élèves le plus efficacement ?",
                "sideA": "Notes",
                "sideB": "Feedback descriptif",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": ["Les notes fournissent une métrique claire et objective qui permet aux élèves de suivre leurs progrès et de se comparer.", "La nature compétitive des notes peut inciter les élèves à travailler plus dur pour atteindre l'excellence académique."],
                "ideasB": ["Un feedback détaillé donne des indications spécifiques pour s'améliorer, favorisant une mentalité de croissance.", "Supprimer la pression des notes peut réduire l'anxiété et encourager un amour plus sincère de l'apprentissage."]
            },
            {
                "topic": "Intelligence artificielle vs jugement humain — qu'est-ce qui devrait guider les décisions clés en entreprise ?",
                "sideA": "IA",
                "sideB": "Jugement humain",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["L'IA peut traiter de vastes quantités de données sans biais émotionnel, menant à des décisions plus objectives.", "Les algorithmes peuvent identifier des modèles complexes souvent invisibles même pour les experts humains les plus chevronnés."],
                "ideasB": ["Les dirigeants humains peuvent considérer les nuances éthiques et le contexte social que les machines ne saisissent pas.", "Le jugement implique l'empathie et l'intuition, cruciales pour naviguer dans des situations interpersonnelles complexes."]
            },
            {
                "topic": "Optimisme technologique vs scepticisme technologique — quelle est la posture par défaut la plus rationnelle aujourd'hui ?",
                "sideA": "Optimisme tech",
                "sideB": "Scepticisme tech",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["La technologie a historiquement résolu nos plus grands défis et continue d'améliorer l'espérance de vie mondiale.", "Maintenir une posture positive encourage l'investissement et l'innovation nécessaires pour résoudre les crises actuelles."],
                "ideasB": ["Une approche sceptique est nécessaire pour identifier et atténuer les conséquences imprévues du progrès technologique rapide.", "Remettre en question les motivations des géants de la tech aide à protéger la vie privée et les valeurs démocratiques."]
            },
            {
                "topic": "Identité numérique vs identité réelle — qu'est-ce qui nous définit le plus aujourd'hui ?",
                "sideA": "Identité numérique",
                "sideB": "Identité réelle",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": ["Notre présence en ligne est souvent le premier point de contact, façonnant la perception qu'ont les autres de nous.", "Les empreintes numériques fournissent un record plus complet et permanent de nos intérêts, actions et connexions sociales."],
                "ideasB": ["Les interactions réelles comportent un niveau de profondeur et d'authenticité qui ne peut être répliqué numériquement.", "Nos expériences physiques et nos relations immédiates restent les moteurs les plus significatifs de nos valeurs."]
            },
            {
                "topic": "Éco-anxiété vs optimisme climatique — quelle est la réponse la plus constructive à la crise ?",
                "sideA": "Éco-anxiété",
                "sideB": "Optimisme climatique",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": ["Un sentiment d'urgence sain peut motiver les individus à faire les changements de mode de vie radicaux nécessaires.", "Reconnaître la gravité de la situation prévient la complaisance et maintient la pression sur les gouvernements."],
                "ideasB": ["L'optimisme prévient le désespoir et la paralysie, permettant aux gens de se concentrer sur les solutions et l'action positive.", "Croire que le changement est possible est un prérequis à l'effort soutenu requis pour construire un avenir durable."]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();