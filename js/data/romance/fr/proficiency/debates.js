(function() {
    const data = [{
                "topic": "L'éthique protestante du travail comme accomplissement civilisationnel vs comme source originelle de la misère adulte — quel héritage domine aujourd'hui ?",
                "sideA": "Accomplissement civilisationnel",
                "sideB": "Source de misère",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "Elle a catalysé un développement socio-économique sans précédent en institutionnalisant la diligence comme une vertu cardinale.",
                    "L'élan intériorisé vers l'industrie fournit un cadre cohérent pour le but individuel et la stabilité sociétale."
                ],
                "ideasB": [
                    "Elle a enraciné un cycle implacable de productivité performative qui précipite un épuisement professionnel généralisé et un ennui existentiel.",
                    "Lier exclusivement la dignité humaine au rendement économique facilite l'érosion systémique des loisirs et de la vie contemplative."
                ]
            },
            {
                "topic": "La marchandisation de la passion vs la libération du travail transformé en sens — « faites ce que vous aimez » est-il un conseil ou un piège ?",
                "sideA": "Conseil",
                "sideB": "Piège",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "Aligner les aspirations professionnelles sur les intérêts intrinsèques favorise un état de « flow » et un profond accomplissement psychologique.",
                    "La quête d'un travail porteur de sens transcende la simple subsistance, permettant une existence plus intégrée et authentique."
                ],
                "ideasB": [
                    "Transformer un passe-temps en carrière soumet ses sanctuaires les plus chers à la logique impitoyable de la valorisation du marché.",
                    "Le récit de la « passion » sert souvent de rideau de fumée à des conditions de travail précaires et à l'auto-exploitation."
                ]
            },
            {
                "topic": "La carrière comme identité vs la carrière comme moyen — quelle est la relation la plus cohérente pour un adulte moderne avec son travail ?",
                "sideA": "Identité",
                "sideB": "Moyen",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "L'excellence professionnelle fournit une mesure tangible pour l'accomplissement de soi et la contribution sociale dans un monde séculier.",
                    "Une identité ancrée dans la maîtrise et la vocation offre une résilience et un sentiment de continuité tout au long de la vie."
                ],
                "ideasB": [
                    "Maintenir une démarcation claire entre le soi et le rôle prévient l'effondrement identitaire pendant les périodes de chômage ou de retraite.",
                    "Considérer le travail comme une utilité purement instrumentale préserve la bande passante cognitive et émotionnelle nécessaire aux dimensions hors marché de la vie."
                ]
            },
            {
                "topic": "Le travailleur acharné vertueux vs l'oisif stratégique — lequel a été célébré de la manière la plus malhonnête dans la culture occidentale ?",
                "sideA": "Travailleur acharné",
                "sideB": "Oisif",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "La glorification de la « hustle culture » occulte les rendements décroissants de l'épuisement et le délaissement systémique de la reproduction sociale.",
                    "Les récits héroïques de surmenage servent souvent à normaliser des exigences organisationnelles exploiteuses sous couvert de mérite individuel."
                ],
                "ideasB": [
                    "La romantisation de la « classe oisive » ou du « tire-au-flanc stratégique » cache souvent le privilège économique sous-jacent qui rend l'oisiveté viable.",
                    "Célébrer la non-productivité comme un acte radical peut être une esthétisation malhonnête de la passivité face à des défis collectifs urgents."
                ]
            },
            {
                "topic": "L'ambition adulte comme admirable vs l'ambition adulte comme incapacité à accepter la finitude — quelle lecture est la plus honnête psychologiquement ?",
                "sideA": "Admirable",
                "sideB": "Incapacité à accepter la finitude",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [
                    "L'ambition représente le refus courageux de stagner, moteur de l'expansion des capacités humaines et des frontières créatives.",
                    "L'effort vers l'excellence est une expression vitale de la volonté humaine de laisser une empreinte durable et significative sur le monde."
                ],
                "ideasB": [
                    "L'effort incessant fonctionne souvent comme un mécanisme de défense névrotique contre la terrifiante réalité de notre inévitable insignifiance et mortalité.",
                    "Une vie de « devenir » constant exclut la possibilité de « l'être », menant à un état perpétuel d'insatisfaction orienté vers le futur."
                ]
            },
            {
                "topic": "L'amour romantique comme principe organisateur de la vie adulte vs comme mythe historiquement contingent et commercialement soutenu — lequel est le plus défendable ?",
                "sideA": "Principe organisateur",
                "sideB": "Mythe commercial",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Le partenariat intime offre un lieu unique de sens, fournissant un sanctuaire émotionnel et un récit partagé dans une société atomisée.",
                    "La profonde vulnérabilité de l'amour sert de puissant catalyseur pour la croissance morale et la transcendance de l'ego."
                ],
                "ideasB": [
                    "Le culte contemporain du romantisme place un fardeau insupportable sur une seule relation pour satisfaire tous les besoins psychologiques et sociaux.",
                    "Le romantisme a été coopté par le capitalisme de consommation pour vendre un style de vie idéalisé qui privilégie la gratification individuelle aux liens communautaires."
                ]
            },
            {
                "topic": "Transparence radicale dans les relations vs nécessité d'un soi privé — l'intimité et l'individuation peuvent-elles coexister ?",
                "sideA": "Transparence",
                "sideB": "Soi privé",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La vulnérabilité absolue est la seule voie vers une intimité véritable, démantelant les barrières défensives qui empêchent une connexion réelle.",
                    "La suppression des secrets favorise une culture de confiance radicale et empêche le pourrissement lent des griefs non exprimés."
                ],
                "ideasB": [
                    "Un degré d'opacité interne est essentiel pour maintenir une identité distincte et prévenir l'enchevêtrement émotionnel qui étouffe le désir.",
                    "L'impératif de « transparence totale » peut être une forme subtile de surveillance qui érode le caractère sacré du monde intérieur de l'individu."
                ]
            },
            {
                "topic": "L'éthique du soin comme correctif féministe vs comme réassignation des mêmes fardeaux — le concept a-t-il tenu sa promesse ?",
                "sideA": "Correctif féministe",
                "sideB": "Réassignation des fardeaux",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Il remet en question la domination patriarcale centrée sur les droits abstraits en privilégiant la relationnalité et le fait fondamental de la dépendance humaine.",
                    "Centrer le travail de soin élève des activités traditionnellement reléguées à la sphère privée à leur statut légitime de socle de la civilisation."
                ],
                "ideasB": [
                    "Sans redistribution structurelle radicale, la rhétorique du « soin » sert souvent à romantiser et à perpétuer les inégalités de genre dans le travail.",
                    "Se concentrer sur le soin comme vertu intrinsèque peut par inadvertance essentialiser des traits qui ont été socialisés chez les groupes marginalisés au profit des puissants."
                ]
            },
            {
                "topic": "Choisir de ne pas avoir d'enfants comme résistance à l'idéologie pronataliste vs comme décision entièrement personnelle sans dimension politique — peut-on les séparer nettement ?",
                "sideA": "Résistance",
                "sideB": "Décision personnelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Dans une société qui traite la reproduction comme un devoir moral par défaut, le choix de rester sans enfant est un acte d'autonomie intrinsèquement subversif.",
                    "Refuser de participer à la reproduction générationnelle du travail et du capital constitue une critique légitime des structures socio-économiques contemporaines."
                ],
                "ideasB": [
                    "Politiser les choix reproductifs peut être une ingérence invasive qui ignore les facteurs personnels complexes et souvent idiosyncrasiques en jeu.",
                    "De nombreuses personnes parviennent à cette décision par un processus de réflexion personnelle privée qui a peu à voir avec des cadres idéologiques plus larges."
                ]
            },
            {
                "topic": "La conscience de la mortalité comme condition préalable à une vie adulte pleine de sens vs comme son principal obstacle — quelle est la position la plus vivable ?",
                "sideA": "Condition préalable",
                "sideB": "Obstacle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La finitude du temps imprègne nos choix de gravité et d'urgence, empêchant la dérive vers un état de procrastination perpétuelle.",
                    "Reconnaître la mort favorise une appréciation profonde de la beauté éphémère du présent et encourage la priorité de ce qui compte vraiment."
                ],
                "ideasB": [
                    "L'ombre omniprésente de la non-existence peut induire un nihilisme paralysant qui rend toute entreprise humaine apparemment futile.",
                    "Une préoccupation pour la mortalité peut exclure la spontanéité joyeuse et l'investissement à long terme requis pour une vie florissante."
                ]
            },
            {
                "topic": "Le vieillissement comme déclin vs le vieillissement comme accumulation — quel récit est le plus honnête, et lequel est le plus utile ?",
                "sideA": "Déclin",
                "sideB": "Accumulation",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'érosion physiologique et cognitive associée au vieillissement est une réalité biologique dure qui nécessite une confrontation courageuse plutôt que des euphémismes.",
                    "Accepter le déclin permet un ajustement réaliste des attentes et la culture de la grâce face à la perte inévitable."
                ],
                "ideasB": [
                    "Le vieillissement offre une profondeur de perspective inégalée, une régulation émotionnelle et une synthèse d'expérience qui constitue la véritable sagesse.",
                    "Le récit de l'accumulation valorise les personnes âgées comme des dépositaires vitaux de la mémoire culturelle et des conseillers pour les générations suivantes."
                ]
            },
            {
                "topic": "La médicalisation du vieillissement comme progrès vs comme refus d'accepter la condition humaine — où placer la limite ?",
                "sideA": "Progrès",
                "sideB": "Refus",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "Les interventions technologiques qui prolongent la « durée de vie en bonne santé » soulagent d'immenses souffrances humaines et permettent des périodes plus longues de contribution à la société.",
                    "Considérer le vieillissement comme un problème biologique à résoudre est l'extension logique de la quête scientifique visant à maîtriser la nature au profit de l'homme."
                ],
                "ideasB": [
                    "Pathologiser une étape naturelle de la vie reflète une profonde phobie culturelle de la vulnérabilité et une tentative orgueilleuse d'échapper à nos limites inhérentes.",
                    "La quête de l'immortalité par la médecine peut mener à une société stagnante privée de la vitalité régénératrice fournie par la succession des générations."
                ]
            },
            {
                "topic": "La mémoire comme substance de l'identité adulte vs la mémoire comme narrateur hautement peu fiable — quelles conséquences pour la construction de soi ?",
                "sideA": "Substance",
                "sideB": "Narrateur peu fiable",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La continuité du soi dépend d'un récit autobiographique cohérent qui lie nos actions passées à nos valeurs présentes.",
                    "Les souvenirs partagés forment le fondement de nos relations les plus significatives et procurent un sentiment stable d'appartenance."
                ],
                "ideasB": [
                    "La nature malléable de la mémoire suggère que notre « identité » est une reconstruction perpétuelle, souvent intéressée, plutôt qu'un enregistrement objectif.",
                    "Reconnaître la faillibilité de notre histoire personnelle permet une relation plus flexible et indulgente avec la personne que nous étions."
                ]
            },
            {
                "topic": "La complicité du citoyen adulte dans des systèmes injustes par la consommation ordinaire vs l'impertinence structurelle de la pureté morale individuelle — quel cadre est le plus honnête ?",
                "sideA": "Complicité",
                "sideB": "Impertinence structurelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Les choix individuels s'agrègent en signaux de marché ; refuser de reconnaître ce lien causal est une forme d'abdication éthique.",
                    "Le cadre du « consommateur éthique » redonne de l'agence à l'individu, insistant sur le fait qu'aucune action n'est trop petite pour avoir un poids moral."
                ],
                "ideasB": [
                    "Se focaliser sur les choix de mode de vie personnels détourne souvent des changements institutionnels et réglementaires à grande échelle nécessaires pour lutter contre l'injustice systémique.",
                    "Dans une économie mondialisée, la pureté morale totale est une impossibilité logistique qui ne sert qu'à induire une culpabilité paralysante plutôt qu'une action efficace."
                ]
            },
            {
                "topic": "Le désenchantement politique comme réponse rationnelle aux preuves disponibles vs comme forme de privilège — quelle lecture est la plus défendable empiriquement ?",
                "sideA": "Réponse rationnelle",
                "sideB": "Privilège",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Le retrait du processus politique peut être une reconnaissance lucide de la capture systémique des institutions par des intérêts ancrés.",
                    "L'échec persistant des systèmes politiques à répondre aux menaces existentielles fait du scepticisme la position intellectuelle la plus fondée sur les preuves."
                ],
                "ideasB": [
                    "La capacité de se retirer de la politique est un luxe accordé seulement à ceux dont les droits et besoins fondamentaux ne sont pas actuellement menacés directement.",
                    "Le cynisme fonctionne souvent comme une excuse sophistiquée pour l'apathie, abdiquant la responsabilité de protéger ceux qui sont plus vulnérables aux changements de politique."
                ]
            },
            {
                "topic": "La justice intergénérationnelle comme défi moral central de notre temps vs comme concept qui occulte systématiquement les inégalités de classe et de race actuelles — quelle est la critique la plus forte ?",
                "sideA": "Défi moral",
                "sideB": "Occulte les inégalités",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'ampleur sans précédent de la dégradation de l'environnement crée une obligation non réciproque envers les êtres futurs qui ne peuvent se représenter eux-mêmes.",
                    "Ne pas tenir compte des conséquences à long terme de la consommation actuelle constitue un vol systémique envers les générations à naître."
                ],
                "ideasB": [
                    "La rhétorique sur les « générations futures » est souvent utilisée pour différer des actions redistributives urgentes qui profiteraient aux marginalisés d'aujourd'hui.",
                    "Une focalisation abstraite sur la justice chronologique peut ignorer le fait que le « futur » sera hérité par des groupes partant déjà de positions de pouvoir très différentes."
                ]
            },
            {
                "topic": "La démocratie libérale comme le moins mauvais des systèmes vs comme un système ayant structurellement épuisé sa capacité de réforme — quel verdict les preuves soutiennent-elles ?",
                "sideA": "Moins mauvais système",
                "sideB": "Capacité épuisée",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Les mécanismes de succession pacifique et de dissidence institutionnalisée restent les remparts les plus efficaces contre la tyrannie.",
                    "L'adaptabilité historique des systèmes libéraux suggère qu'ils possèdent une capacité inégalée d'autocorrection sur le long terme."
                ],
                "ideasB": [
                    "La paralysie des institutions démocratiques face à l'escalade des inégalités et au collapse climatique suggère un échec systémique terminal.",
                    "La démocratie contemporaine a été vidée de sa substance par la gouvernance technocratique et l'influence écrasante du capital concentré."
                ]
            },
            {
                "topic": "La capacité d'auto-tromperie comme défaut cognitif vs comme mécanisme adaptatif — quel récit sert le mieux l'adulte qui veut bien vivre ?",
                "sideA": "Défaut cognitif",
                "sideB": "Mécanisme adaptatif",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Un engagement envers la vérité radicale est essentiel pour prendre des décisions éclairées et construire des relations authentiques basées sur la réalité.",
                    "L'auto-tromperie systémique exclut la possibilité d'une connaissance de soi véritable et la résolution des conflits psychologiques sous-jacents."
                ],
                "ideasB": [
                    "Un degré d'« illusion positive » est souvent nécessaire pour maintenir la motivation et la résilience requises face aux épreuves inhérentes de la vie.",
                    "L'esprit humain a évolué pour donner la priorité à la cohésion sociale et à la survie plutôt qu'au traitement froid et objectif de l'information."
                ]
            },
            {
                "topic": "L'expertise comme autorité épistémique vs l'expertise comme forme de pouvoir institutionnel méritant examen — quand le scepticisme sain devient-il lâcheté épistémique ?",
                "sideA": "Autorité épistémique",
                "sideB": "Pouvoir institutionnel",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Dans un monde de plus en plus complexe, s'en remettre à des connaissances spécialisées est un dispositif nécessaire d'économie cognitive et un préalable à une politique efficace.",
                    "Les normes rigoureuses d'examen par les pairs et les standards empiriques des communautés d'experts fournissent la approximation la plus fiable de la vérité objective disponible."
                ],
                "ideasB": [
                    "La classe des « experts » reflète souvent les biais et les intérêts des institutions qui financent et légitiment leurs titres.",
                    "Démocratiser le savoir exige de remettre en question le monopole des élites diplômées sur ce qui compte comme preuve valide ou réalité vécue."
                ]
            },
            {
                "topic": "Le récit comme moyen principal pour les adultes de donner sens à leur vie vs le récit comme moyen principal pour les adultes de s'égarer — quelle fonction domine ?",
                "sideA": "Donner du sens",
                "sideB": "S'égarer",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La narration nous permet de synthétiser des expériences disparates en un tout cohérent, favorisant la cohérence psychologique et l'agence.",
                    "La culture humaine est fondamentalement narrative ; sans elle, nous habiterions un monde d'événements aléatoires sans but."
                ],
                "ideasB": [
                    "Le désir d'une « intrigue bien ficelée » nous conduit souvent à ignorer les données qui contredisent notre image de soi préférée ou nos engagements idéologiques.",
                    "Les structures narratives imposent une fausse téléologie à la vie, masquant le rôle de la pure contingence et du chaos aléatoire dans nos histoires personnelles."
                ]
            },
            {
                "topic": "L'honnêteté comme vertu inconditionnelle vs l'honnêteté comme vertu contextuelle — existe-t-il un compte-rendu cohérent de la sincérité qui survive au contact des relations adultes réelles ?",
                "sideA": "Vertu inconditionnelle",
                "sideB": "Vertu contextuelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La tromperie, même bien intentionnée, érode la réalité intersubjective requise pour une connexion humaine authentique et la confiance.",
                    "Un engagement envers la vérité reflète un respect fondamental pour l'autonomie d'autrui, lui permettant de répondre au monde tel qu'il est réellement."
                ],
                "ideasB": [
                    "L'application rigide d'une « honnêteté brutale » peut être une forme de cruauté qui donne la priorité à sa propre pureté morale sur le bien-être d'autrui.",
                    "Les « lubrifiants sociaux » pragmatiques et le partage sélectif d'informations sont essentiels pour naviguer les complexités de la vie commune et le tact professionnel."
                ]
            },
            {
                "topic": "L'adulte qui a « enfin tout compris » vs l'adulte qui a accepté qu'il ne comprendrait jamais — lequel représente une relation plus sophistiquée à la réalité ?",
                "sideA": "A tout compris",
                "sideB": "A accepté l'inconnu",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Atteindre un ensemble stable de valeurs et une compréhension claire de sa place dans le monde est la marque de la maturité psychologique.",
                    "La synthèse de l'expérience en sagesse exploitable permet un engagement plus efficace et décisif face aux défis de la vie."
                ],
                "ideasB": [
                    "La sagesse consiste en la reconnaissance socratique de l'immensité de notre ignorance et de la contingence radicale de nos perspectives.",
                    "Une ouverture à la révision perpétuelle et l'« esprit du débutant » préviennent la calcification intellectuelle qui accompagne souvent le vieillissement."
                ]
            },
            {
                "topic": "Tout dire à son thérapeute vs tout dire à son coiffeur — quelle relation professionnelle est empiriquement la plus transformative, et pourquoi la réponse nous met-elle mal à l'aise ?",
                "sideA": "Thérapeute",
                "sideB": "Coiffeur",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [
                    "Le cadre clinique offre un environnement structuré, guidé par la théorie, spécifiquement conçu pour la déconstruction des schémas psychiques profonds.",
                    "La neutralité professionnelle du thérapeute et sa formation à l'« inconscient » permettent des intuitions impossibles dans une conversation informelle."
                ],
                "ideasB": [
                    "La nature tactile et à faible enjeu du salon facilite souvent une vulnérabilité spontanée et authentique que les interventions cliniques peuvent étouffer.",
                    "Le coiffeur représente une forme de soin communautaire, « quotidien », plus intégré dans le tissu de la vie que l'artificialité de l'heure clinique."
                ]
            },
            {
                "topic": "Le langage comme constitutif de la pensée vs le langage comme simple expression — le langage façonne-t-il ou reflète-t-il la réalité ?",
                "sideA": "Constitutif",
                "sideB": "Expressif",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Les structures lexicales et grammaticales de notre langue maternelle fournissent les catégories mêmes à travers lesquelles nous percevons et conceptualisons le monde.",
                    "La relativité linguistique suggère que les concepts pour lesquels nous manquons de mots restent effectivement impensables ou nettement plus difficiles à saisir."
                ],
                "ideasB": [
                    "Le langage est un outil en aval pour communiquer des processus cognitifs pré-linguistiques et des expériences sensorielles universelles à l'espèce.",
                    "La capacité d'inventer une nouvelle terminologie pour décrire des phénomènes auparavant non cartographiés prouve que la pensée précède son articulation linguistique."
                ]
            },
            {
                "topic": "Précision vs ambiguïté — quelle est la propriété du langage la plus précieuse dans le discours public ?",
                "sideA": "Précision",
                "sideB": "Ambiguïté",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Une clarté terminologique rigoureuse est la seule défense contre l'obscurcissement intentionnel et la « langue de bois » utilisés pour manipuler l'opinion publique.",
                    "La précision technique permet le débat fondé sur les preuves et les formulations politiques spécifiques nécessaires pour résoudre des problèmes sociétaux complexes."
                ],
                "ideasB": [
                    "L'ambiguïté productive permet la formation de larges coalitions et le « flou stratégique » nécessaire au compromis diplomatique.",
                    "Un langage nuancé et polysémique est mieux adapté pour capturer les contradictions et complexités inhérentes à la réalité sociale humaine."
                ]
            },
            {
                "topic": "Rhétorique vs logique — laquelle est finalement la plus persuasive, et laquelle devrait l'être ?",
                "sideA": "Rhétorique",
                "sideB": "Logique",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Les êtres humains sont fondamentalement des créatures narratives et émotionnelles ; même l'argument le plus solide échoue s'il ne résonne pas avec les valeurs de l'auditoire.",
                    "L'éloquence et le cadrage peuvent combler le fossé entre la vérité abstraite et l'action collective, mobilisant les gens de manière que les syllogismes froids ne peuvent pas."
                ],
                "ideasB": [
                    "La logique fournit le seul standard objectif et universel de validité, protégeant le discours du pouvoir manipulateur de la démagogie charismatique.",
                    "Une société qui privilégie le style sur la substance est structurellement vulnérable à la désinformation et à l'érosion des normes épistémiques."
                ]
            },
            {
                "topic": "Sens littéral vs sens interprétatif — à qui appartient le sens d'un texte ?",
                "sideA": "Littéral",
                "sideB": "Interprétatif",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'intention de l'auteur et le contexte historico-grammatical de la création d'une œuvre fournissent la seule ancre stable pour la communication.",
                    "Le subjectivisme radical dans l'interprétation rend l'acte d'écrire futile, le texte devenant simplement un miroir pour les biais existants du lecteur.",
                ],
                "ideasB": [
                    "La « mort de l'auteur » libère le texte pour générer de nouveaux sens à travers sa rencontre avec divers contextes culturels et temporels.",
                    "Le sens est un processus co-créatif ; une œuvre ne vit vraiment que lorsqu'elle est filtrée à travers l'expérience vécue unique du destinataire."
                ]
            },
            {
                "topic": "Consensus scientifique vs humilité épistémique — quand s'en remettre à l'expertise est-il justifié ?",
                "sideA": "Consensus",
                "sideB": "Humilité",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Le poids collectif des preuves examinées par les pairs est le guide le plus fiable pour les politiques publiques, surtout concernant les risques existentiels.",
                    "La dissidence pour elle-même, sans contre-preuves rigoureuses, est souvent un exercice de vanité qui met en péril la sécurité publique."
                ],
                "ideasB": [
                    "L'histoire est parsemée de « consensus scientifiques » qui ont été renversés plus tard ; maintenir un degré de scepticisme est essentiel au progrès intellectuel.",
                    "S'en remettre à l'autorité peut devenir une forme de « scientisme » qui ignore les dimensions éthiques, sociales et philosophiques de questions complexes."
                ]
            },
            {
                "topic": "Expertise vs expérience vécue — lequel porte le plus de poids probant dans le débat public ?",
                "sideA": "Expertise",
                "sideB": "Expérience vécue",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Une formation spécialisée et une analyse fondée sur les données offrent une vue panoramique des problèmes systémiques que les anecdotes personnelles ne peuvent capturer.",
                    "L'expertise objective est nécessaire pour séparer les tendances généralisables de l'intensité émotionnelle d'événements individuels et idiosyncrasiques."
                ],
                "ideasB": [
                    "Ceux qui sont directement impactés par une politique possèdent une compréhension granulaire et qualitative de ses effets que les modèles abstraits manquent souvent.",
                    "Privilégier les titres académiques sur le témoignage de groupes marginalisés peut renforcer les déséquilibres de pouvoir existants et faire taire des vérités vitales."
                ]
            },
            {
                "topic": "Le doute comme vertu intellectuelle vs le doute comme paralysie — quand le scepticisme devient-il irresponsable ?",
                "sideA": "Vertu",
                "sideB": "Paralysie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Une volonté persistante de remettre en question ses propres présupposés est le seul rempart contre les dangers du dogmatisme idéologique.",
                    "L'intégrité intellectuelle exige la suspension du jugement jusqu'à ce que des preuves suffisantes aient été rassemblées, quelle que soit la pression sociale."
                ],
                "ideasB": [
                    "Le doute fabriqué est une tactique courante utilisée pour bloquer des actions urgentes sur des questions où les preuves sont déjà accablantes.",
                    "Un refus de s'engager sur une position peut être une forme de lâcheté épistémique qui abdique la responsabilité d'agir dans un monde d'incertitude."
                ]
            },
            {
                "topic": "Récit vs données — lequel mène le plus fidèlement vers la vérité ?",
                "sideA": "Récit",
                "sideB": "Données",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Les statistiques abstraites sont souvent psychologiquement inertes ; nous avons besoin de « l'histoire humaine » pour fournir la saillance morale nécessaire à une compréhension véritable.",
                    "Les paraboles et les histoires contextualisent les faits bruts, leur donnant une signification qui permet leur intégration dans notre vision du monde."
                ],
                "ideasB": [
                    "Les récits sont sensibles au « biais de confirmation » et à l'« heuristique de disponibilité », nous menant à généraliser abusivement à partir d'histoires frappantes mais non représentatives.",
                    "Les données quantitatives fournissent la seule carte de la réalité à l'échelle exacte, nous protégeant du pouvoir manipulateur d'anecdotes chargées d'émotion."
                ]
            },
            {
                "topic": "Légitimité par le consentement vs légitimité par le résultat — qu'est-ce qui justifie réellement l'autorité politique ?",
                "sideA": "Consentement",
                "sideB": "Résultat",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'autorité politique n'est moralement défendable que lorsqu'elle dérive de la volonté explicite et continue des gouvernés.",
                    "L'équité procédurale du processus démocratique est la source primaire du droit d'un État à exiger l'obéissance."
                ],
                "ideasB": [
                    "La justification primaire d'un gouvernement est sa capacité à fournir la sécurité, la prospérité et la prestation efficace des services essentiels.",
                    "La légitimité procédurale est vide si le système échoue systématiquement à produire les conditions matérielles nécessaires à une société florissante."
                ]
            },
            {
                "topic": "L'État comme garant de la liberté vs l'État comme sa menace principale — quelle vision est la plus défendable historiquement ?",
                "sideA": "Garant",
                "sideB": "Menace",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Sans le « monopole de la force légitime » pour faire respecter les contrats et protéger les droits, la vie serait un état de prédation privée chaotique.",
                    "L'État moderne est la seule entité capable de protéger l'individu contre le pouvoir écrasant des corporations et d'autres acteurs non étatiques."
                ],
                "ideasB": [
                    "L'histoire démontre que la capacité de l'État pour la surveillance, la mobilisation de masse et la violence en fait le prédateur le plus dangereux de tous.",
                    "L'expansion de la bureaucratie d'État mène inévitablement à la « cage d'acier » du contrôle technocratique, érodant l'agence individuelle et l'autonomie locale."
                ]
            },
            {
                "topic": "Politique fondée sur les droits vs politique fondée sur les responsabilités — qu'est-ce qui rend une culture publique plus cohérente ?",
                "sideA": "Droits",
                "sideB": "Responsabilités",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Se focaliser sur des droits individuels inaliénables fournit un bouclier robuste contre la « tyrannie de la majorité » et les excès de l'État.",
                    "Un cadre centré sur les droits donne aux groupes marginalisés le pouvoir d'exiger l'égalité de traitement et la protection devant la loi."
                ],
                "ideasB": [
                    "Une focalisation exclusive sur les droits favorise une culture atomisée et procédurière qui ignore les devoirs réciproques que nous devons à notre communauté.",
                    "Une société cohérente exige une reconnaissance partagée des fardeaux collectifs et des obligations morales nécessaires au maintien du bien commun."
                ]
            },
            {
                "topic": "L'idéal de neutralité vs l'inéluctabilité d'une gouvernance chargée de valeurs — l'État libéral peut-il être vraiment neutre ?",
                "sideA": "Neutralité",
                "sideB": "Chargée de valeurs",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "L'État doit rester strictement agnostique vis-à-vis de la « vie bonne » pour garantir que tous les citoyens puissent poursuivre leurs propres conceptions diverses du bonheur.",
                    "La neutralité procédurale est le seul moyen de maintenir la paix sociale dans une société pluraliste aux cadres moraux et religieux concurrents."
                ],
                "ideasB": [
                    "Chaque loi et politique incarne implicitement un ensemble spécifique de priorités morales et de visions de ce qui constitue une société désirable.",
                    "La revendication de « neutralité » est souvent un masque rhétorique pour les valeurs de la culture dominante, les présentant comme universelles et indiscutables."
                ]
            },
            {
                "topic": "Intention vs réception — quelle lecture d'une œuvre fait autorité ?",
                "sideA": "Intention",
                "sideB": "Réception",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Une œuvre d'art est un acte de communication ; ignorer les buts spécifiques du créateur mène à un profond échec de compréhension et à une distorsion historique.",
                    "Retrouver l'intention de l'auteur fournit une limite nécessaire contre l'approche du « tout se vaut » dans l'interprétation critique."
                ],
                "ideasB": [
                    "Une fois qu'une œuvre entre dans la sphère publique, elle devient indépendante de son créateur, acquérant de nouveaux sens basés sur la réponse du public.",
                    "La lecture « autoritaire » d'un texte est souvent utilisée comme un outil de contrôle culturel pour supprimer les interprétations subversives ou hétérodoxes."
                ]
            },
            {
                "topic": "Valeur esthétique vs valeur morale — une œuvre belle peut-elle aussi être maléfique ?",
                "sideA": "Esthétique",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'art doit être jugé par ses qualités formelles internes et sa puissance expressive, indépendamment du caractère moral de son créateur ou de son sujet.",
                    "Confondre esthétique et éthique mène à une culture didactique et moralisatrice qui étouffe l'exploration créative et la complexité."
                ],
                "ideasB": [
                    "Le pouvoir de la beauté peut être utilisé pour glamouriser des idéologies nuisibles, rendement la responsabilité morale de l'artiste inséparable de ses choix esthétiques.",
                    "La véritable « grandeur artistique » est incompatible avec une vision du monde qui dévalue fondamentalement la dignité humaine ou célèbre la souffrance."
                ]
            },
            {
                "topic": "L'avant-garde vs l'accessibilité — l'art doit-il défier ou inclure ?",
                "sideA": "Avant-garde",
                "sideB": "Accessibilité",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "La fonction première de l'art est de perturber la perception habituelle et d'élargir les frontières du possible, même si cela entraîne une aliénation initiale.",
                    "La « difficulté » de l'avant-garde est une résistance nécessaire contre les produits superficiels et standardisés de l'industrie culturelle commerciale."
                ],
                "ideasB": [
                    "L'art qui exige une éducation d'élite pour être déchiffré est une forme de distinction de classe qui renforce l'exclusion sociale.",
                    "Les œuvres d'art les plus profondes sont celles qui atteignent une résonance universelle, parlant à des expériences humaines partagées par-delà les clivages culturels."
                ]
            },
            {
                "topic": "L'art institutionnalisé vs l'art brut (outsider art) — lequel porte le poids culturel le plus authentique ?",
                "sideA": "Institutionnalisé",
                "sideB": "Brut",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Les institutions assurent la conservation, la préservation et le contexte savant nécessaires pour que l'art soit compris comme faisant partie d'une tradition historique.",
                    "Les normes rigoureuses des grands musées et académies garantissent la préservation des plus hautes réalisations de la créativité humaine."
                ],
                "ideasB": [
                    "L'art produit hors du système du « monde de l'art » possède une intensité brute, non médiatisée, souvent aseptisée par la reconnaissance institutionnelle.",
                    "La perspective « outsider » est essentielle pour remettre en question les conventions éculées et les hiérarchies insulaires de l'establishment culturel."
                ]
            },
            {
                "topic": "Le principe de précaution vs le principe de proaction — lequel doit régir les technologies émergentes ?",
                "sideA": "Précaution",
                "sideB": "Proaction",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Face à des risques potentiellement existentiels ou irréversibles, la charge de la preuve doit incomber à ceux qui proposent l'innovation pour démontrer sa sécurité.",
                    "Une approche prudente prévient l'« élan technologique aveugle » qui a mené à de précédentes catastrophes écologiques et sociales."
                ],
                "ideasB": [
                    "L'hyper-précaution peut étouffer les innovations mêmes nécessaires pour résoudre les crises actuelles, choisissant la certitude d'une souffrance présente face à des risques futurs hypothétiques.",
                    "Le progrès humain exige une approche de « gestion active » qui privilégie l'expérimentation, l'itération et l'acceptation courageuse de l'inconnu."
                ]
            },
            {
                "topic": "Le progrès scientifique comme intrinsèquement bon vs le progrès comme éthiquement neutre — qui porte la responsabilité de l'usage des connaissances ?",
                "sideA": "Intrinsèquement bon",
                "sideB": "Éthiquement neutre",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "L'expansion des connaissances humaines est un bien fondamental qui mène inévitablement à la réduction des souffrances et à l'accroissement des libertés.",
                    "Même les découvertes « dangereuses » sont préférables à un état d'ignorance forcée, qui ne fait que céder le pouvoir à ceux prêts à poursuivre le savoir en secret."
                ],
                "ideasB": [
                    "Les outils scientifiques sont moralement à « double usage » ; leur valeur dépend entièrement des cadres politiques et éthiques dans lesquels ils sont déployés.",
                    "Les scientifiques doivent accepter une « responsabilité étendue » pour les impacts sociaux et environnementaux prévisibles de leurs recherches."
                ]
            },
            {
                "topic": "Mitigation des risques existentiels vs réduction de la souffrance actuelle — où doivent se situer les priorités morales de l'humanité ?",
                "sideA": "Risque existentiel",
                "sideB": "Souffrance actuelle",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Le poids moral de billions de vies futures potentielles l'emporte sur les besoins immédiats de la génération actuelle ; nous devons assurer la survie à « long terme » de l'espèce.",
                    "Se focaliser sur le présent est une forme de « parochianisme temporel » qui risque la fin permanente de l'expérience humaine."
                ],
                "ideasB": [
                    "Notre obligation morale première va aux individus concrets qui souffrent aujourd'hui, non à des êtres hypothétiques dans un futur spéculatif.",
                    "Le moyen le plus efficace d'assurer un futur stable est de résoudre les inégalités systémiques et les crises écologiques qui se déroulent actuellement."
                ]
            },
            {
                "topic": "Conscience humaine vs intelligence artificielle générale — une machine pourrait-elle jamais être un patient moral ?",
                "sideA": "Conscience",
                "sideB": "IAG",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Le statut moral exige la capacité de « sentience » — l'expérience subjective et qualitative de la douleur et du plaisir — qui est uniquement biologique.",
                    "Une IAG, aussi sophistiquée soit-elle, est en fin de compte un ensemble d'algorithmes dépourvus de la « vie intérieure » qui justifie la considération morale."
                ],
                "ideasB": [
                    "Si une machine présente des marqueurs comportementaux d'intelligence et de souffrance indiscernables de ceux d'un humain, lui nier un statut moral est une forme de « chauvinisme du carbone ».",
                    "Nous devrions adopter une approche « précautionneuse » de l'éthique des machines, en accordant des droits aux systèmes suffisamment complexes pour éviter le risque d'une souffrance synthétique de masse."
                ]
            },
            {
                "topic": "Le progrès comme réel vs le progrès comme illusion — l'histoire va-t-elle quelque part ?",
                "sideA": "Réel",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "La nette tendance à la hausse de l'espérance de vie, de l'alphabétisation et de la réduction mondiale de l'extrême pauvreté constitue un progrès objectif indéniable.",
                    "L'élargissement du « cercle moral » pour inclure des groupes auparavant marginalisés suggère une maturation civilisationnelle lente mais réelle."
                ],
                "ideasB": [
                    "L'avancement technologique ne fait souvent que changer l'échelle de nos problèmes plutôt que de les résoudre, menant à de nouvelles formes d'aliénation et de capacité destructrice.",
                    "Le « mythe du progrès » est une téléologie sécularisée qui nous aveugle sur la nature cyclique de l'histoire et la menace constante de régression."
                ]
            },
            {
                "topic": "Ordre libéral occidental vs monde multipolaire — quelle est la base la plus stable pour les relations internationales ?",
                "sideA": "Ordre libéral",
                "sideB": "Multipolarité",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Un système fondé sur les droits de l'homme universels et le droit international fournit le cadre le plus fiable pour la paix et la coopération mondiales.",
                    "Le leadership d'une coalition libérale dominante prévient les « dilemmes de sécurité » et les conflits entre grandes puissances typiques des systèmes multipolaires."
                ],
                "ideasB": [
                    "Un monde multipolaire reflète plus fidèlement la diversité des valeurs et des intérêts mondiaux, empêchant l'impérialisme perçu d'une seule « hégémonie ».",
                    "La stabilité est mieux assurée par un « équilibre des puissances » réaliste et le respect mutuel de la souveraineté culturelle et politique."
                ]
            },
            {
                "topic": "Mémoire vs oubli — lequel est le plus essentiel à une identité collective saine ?",
                "sideA": "Mémoire",
                "sideB": "Oubli",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Le refus d'oublier les injustices passées est le seul moyen de garantir la responsabilité et d'empêcher la répétition d'atrocités historiques.",
                    "Une mémoire collective robuste fournit le récit partagé et la continuité culturelle nécessaires à la cohésion sociale et à l'identité."
                ],
                "ideasB": [
                    "Un certain degré d'« oubli stratégique » est souvent requis pour dépasser de vieux griefs communautaires et parvenir à une réconciliation civile.",
                    "Une rumination obsessionnelle sur la gloire ou les traumatismes passés peut emprisonner une société dans le passé, empêchant l'adaptation innovante requise pour le futur."
                ]
            },
            {
                "topic": "La tragédie des communs vs la possibilité de coopération — que nous dit l'histoire sur la nature humaine ?",
                "sideA": "Tragédie",
                "sideB": "Coopération",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Sans régulation coercitive ou propriété privée, les individus donneront inévitablement la priorité à leurs intérêts personnels à court terme, menant à l'épuisement des ressources partagées.",
                    "L'échec persistant à répondre aux défis environnementaux mondiaux confirme la difficulté inhérente à coordonner l'action à grande échelle."
                ],
                "ideasB": [
                    "L'histoire regorge d'exemples de communautés gérant avec succès « les communs » grâce à des systèmes complexes de normes sociales et de surveillance mutuelle.",
                    "Les êtres humains sont des « coopérateurs obligatoires » ; nos plus grandes réalisations résultent de notre capacité unique de collaboration flexible à grande échelle."
                ]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();
