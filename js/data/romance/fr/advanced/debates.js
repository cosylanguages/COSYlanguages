(function() {
    const data = [{
                "topic": "Hiérarchies organisationnelles horizontales vs structures de gestion verticales — qu'est-ce qui sert le mieux les adultes qui y travaillent ?",
                "sideA": "Hiérarchie horizontale",
                "sideB": "Structure verticale",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Le culte de la productivité vs l'éloge de l'oisiveté — qu'est-ce qui reflète le mieux ce dont les humains ont réellement besoin au travail ?",
                "sideA": "Productivité",
                "sideB": "Oisiveté",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Le leadership comme compétence s'apprenant vs le leadership comme qualité innée — quel récit est le plus défendable empiriquement ?",
                "sideA": "Compétence acquise",
                "sideB": "Qualité innée",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Culture de la performance (hustle culture) vs slow living — qui gagne, et qui devrait gagner ?",
                "sideA": "Hustle culture",
                "sideB": "Slow living",
                "level": "advanced",
                "theme": "routine_A1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La responsabilité sociale des entreprises comme engagement sincère vs comme gestion de la réputation — quel cadrage est le plus honnête ?",
                "sideA": "Engagement sincère",
                "sideB": "Gestion réputation",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'identité adulte comme fixe vs perpétuellement en construction — quel récit reflète le mieux l'expérience vécue ?",
                "sideA": "Identité fixe",
                "sideB": "En construction",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La domestication du féminisme par la culture de consommation vs le féminisme remodelant réellement la vie adulte — qu'est-ce qui est le plus vrai ?",
                "sideA": "Féminisme de conso",
                "sideB": "Remodelage réel",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La crise de la quarantaine comme pathologie vs la crise de la quarantaine comme réévaluation légitime — quel cadrage est le plus utile ?",
                "sideA": "Pathologie",
                "sideB": "Réévaluation",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La pression d'être extraordinaire vs la dignité d'une vie ordinaire — quel est l'idéal le plus humain à défendre ?",
                "sideA": "Extraordinaire",
                "sideB": "Dignité ordinaire",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'obligation de s'occuper de parents vieillissants vs la responsabilité de l'État — où la charge doit-elle retomber ?",
                "sideA": "Obligation familiale",
                "sideB": "Resp. de l'État",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'honnêteté radicale dans les relations vs le silence stratégique — quelle est l'approche la plus éthique de l'intimité ?",
                "sideA": "Honnêteté radicale",
                "sideB": "Silence stratégique",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Choisir son cercle social délibérément vs laisser les relations se former organiquement — qu'est-ce qui produit des amitiés adultes plus authentiques ?",
                "sideA": "Choix délibéré",
                "sideB": "Formation organique",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La famille nucléaire comme unité sociale optimale vs comme arrangement historiquement contingent — quelle vue est la plus défendable ?",
                "sideA": "Unité optimale",
                "sideB": "Arrangement historique",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Gouvernance technocratique vs populisme démocratique — qu'est-ce qui pose le plus grand risque à long terme pour les citoyens adultes ?",
                "sideA": "Technocratie",
                "sideB": "Populisme",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Justice intergénérationnelle vs bien-être actuel — qu'est-ce qui devrait être prioritaire dans les politiques publiques ?",
                "sideA": "Justice intergén.",
                "sideB": "Bien-être actuel",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'obligation de voter vs le droit de s'abstenir — quelle est la position civique la plus défendable ?",
                "sideA": "Obligation de voter",
                "sideB": "Droit de s'abstenir",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Le patriotisme comme vertu civique vs le patriotisme comme défaillance cognitive — quel récit est le plus convaincant ?",
                "sideA": "Vertu civique",
                "sideB": "Défaillance cognitive",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'absolutisme de la liberté d'expression vs la parole régulée — qu'est-ce qui produit de meilleurs résultats pour les sociétés démocratiques adultes ?",
                "sideA": "Absolutisme",
                "sideB": "Parole régulée",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Une carrière pleine de sens vs un travail qui finance une vie privée pleine de sens — quelle est l'ambition adulte la plus honnête ?",
                "sideA": "Carrière sensée",
                "sideB": "Financer vie privée",
                "level": "advanced",
                "theme": "organisational_culture_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Religion vs philosophie séculière — qu'est-ce qui répond le mieux aux besoins existentiels des adultes modernes ?",
                "sideA": "Religion",
                "sideB": "Phil. séculière",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "La vie examinée vs la vie absorbée — laquelle vaut le plus la peine d'être vécue, et qui peut en décider ?",
                "sideA": "Vie examinée",
                "sideB": "Vie absorbée",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'héritage (legacy) vs la présence — quelle est la chose la plus cohérente à rechercher pour un adulte ?",
                "sideA": "Héritage",
                "sideB": "Présence",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'adulte qui a « enfin compris » vs l'adulte qui a accepté qu'il ne comprendra jamais — qui est le plus conscient de soi ?",
                "sideA": "A enfin compris",
                "sideB": "Accepté l'ignorance",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Tout dire à son thérapeute vs tout dire à son coiffeur — quelle relation professionnelle est la plus efficace sur le plan thérapeutique ?",
                "sideA": "Thérapeute",
                "sideB": "Coiffeur",
                "level": "advanced",
                "theme": "psychological_concepts_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "L'anxiété du dimanche d'un adulte au planning chargé vs l'anxiété du dimanche d'un adulte au planning vide — qu'est-ce qui est le plus troublant existentiellement ?",
                "sideA": "Planning chargé",
                "sideB": "Planning vide",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Suranalyser chaque décision majeure de la vie vs les prendre impulsivement — quelle stratégie a le meilleur bilan empirique ?",
                "sideA": "Suranalyser",
                "sideB": "Impulsivité",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Les adultes qui lisent des livres de développement personnel vs les adultes qui refusent de le faire — quel groupe est le plus difficile à supporter lors d'un dîner ?",
                "sideA": "Lecteurs dév. perso",
                "sideB": "Refuse de lire",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Créativité de l'IA vs art humain — les machines peuvent-elles vraiment créer de l'art ?",
                "sideA": "Créativité IA",
                "sideB": "Art humain",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Exploration spatiale vs exploration des grands fonds — où devrions-nous concentrer nos ressources ?",
                "sideA": "Espace",
                "sideB": "Grands fonds",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Vie privée numérique vs sécurité nationale — la surveillance totale est-elle jamais justifiée ?",
                "sideA": "Vie privée",
                "sideB": "Sécurité",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Aliments génétiquement modifiés vs agriculture biologique — comment devrions-nous nourrir le monde ?",
                "sideA": "OGM",
                "sideB": "Bio",
                "level": "advanced",
                "theme": "science_tech_society_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            },
            {
                "topic": "Revenu universel vs programmes de garantie d'emploi — quel est le meilleur filet de sécurité sociale ?",
                "sideA": "Revenu universel",
                "sideB": "Garantie d'emploi",
                "level": "advanced",
                "theme": "power_institutions_C1",
                "ideasA": ["Idée pour 1", "Idée pour 2"],
                "ideasB": ["Idée contre 1", "Idée contre 2"]
            }];
    const lang = "fr";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["debates"]) window.speakingData[lang]["debates"] = [];
    window.speakingData[lang]["debates"].push(...data);
})();