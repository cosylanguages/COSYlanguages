(function() {
    const speakingData = {
    "fr": {
        "opinionArena": [
            {
                "text": "Les réseaux sociaux détruisent-ils nos compétences sociales ?",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "text": "Les transports publics devraient-ils être gratuits ?",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2"
            }
        ],
        "criticsCorner": [
            {
                "text": "La seule constante est le changement.",
                "author": "Heraclitus",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2"
            }
        ],
        "debates": [
            {
                "topic": "La semaine de quatre jours vs la semaine de cinq jours — quel modèle profite le plus aux travailleurs et aux employeurs ?",
                "sideA": "Semaine de 4 jours",
                "sideB": "Semaine de 5 jours",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Revenu universel de base vs aide sociale ciblée — quel est le filet de sécurité le plus efficace pour les adultes actifs ?",
                "sideA": "Revenu universel",
                "sideB": "Aide ciblée",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'économie à la tâche (gig economy) vs l'emploi permanent — quel modèle sert le mieux les travailleurs à long terme ?",
                "sideA": "Économie à la tâche",
                "sideB": "Emploi permanent",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Méritocratie vs avantage structurel — qu'est-ce qui explique le mieux la réussite professionnelle ?",
                "sideA": "Méritocratie",
                "sideB": "Avantage structurel",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Transparence des salaires vs confidentialité des salaires — qu'est-ce qui crée un lieu de travail plus juste ?",
                "sideA": "Transparence",
                "sideB": "Confidentialité",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Automatisation vs travail humain — quelle est la plus grande menace à long terme pour l'emploi des adultes ?",
                "sideA": "Automatisation",
                "sideB": "Travail humain",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Télétravail vs présence au bureau — qu'est-ce qui est le mieux pour la progression de carrière et la culture d'équipe ?",
                "sideA": "Télétravail",
                "sideB": "Bureau",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Congé parental égal pour les hommes et les femmes vs congé maternité plus long — quelle politique est la plus juste ?",
                "sideA": "Congé égal",
                "sideB": "Maternité plus longue",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choisir de ne pas avoir d'enfants vs pression sociale pour avoir une famille — qu'est-ce qui mérite le plus de respect ?",
                "sideA": "Pas d'enfants",
                "sideB": "Pression sociale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le mariage comme institution vs la cohabitation sans mariage — qu'est-ce qui est le plus pertinent aujourd'hui ?",
                "sideA": "Mariage",
                "sideB": "Cohabitation",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Foyers à deux revenus vs un partenaire restant à la maison — quel modèle est le mieux pour les enfants et les adultes ?",
                "sideA": "Deux revenus",
                "sideB": "Un au foyer",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'écart salarial entre hommes et femmes comme problème structurel vs une question de choix individuels — quelle explication a le plus de poids ?",
                "sideA": "Problème structurel",
                "sideB": "Choix individuels",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La propriété immobilière comme objectif vs un marché locatif professionnel — quel modèle de logement convient le mieux aux adultes modernes ?",
                "sideA": "Propriété",
                "sideB": "Location pro",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La gentrification comme amélioration vs la gentrification comme déplacement — quelle approche est la plus honnête ?",
                "sideA": "Amélioration",
                "sideB": "Déplacement",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Densité urbaine vs étalement suburbain — quel est le meilleur modèle pour des villes vivables ?",
                "sideA": "Densité urbaine",
                "sideB": "Étalement",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vivre près de sa famille vs s'éloigner pour les opportunités — quel choix produit un meilleur bien-être à long terme ?",
                "sideA": "Proche famille",
                "sideB": "S'éloigner",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Une population vieillissante comme une crise vs comme une ressource — quel cadrage est le plus productif ?",
                "sideA": "Crise",
                "sideB": "Ressource",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Responsabilité personnelle pour la santé vs facteurs systémiques — qu'est-ce qui pèse le plus dans l'explication des résultats de santé ?",
                "sideA": "Resp. personnelle",
                "sideB": "Facteurs systémiques",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Les jours de santé mentale comme un droit légitime au travail vs une source d'abus — où les employeurs doivent-ils fixer la limite ?",
                "sideA": "Droit légitime",
                "sideB": "Source d'abus",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Médecine préventive vs médecine curative — laquelle devrait recevoir plus de financement public ?",
                "sideA": "Préventive",
                "sideB": "Curative",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Médecine anti-âge vs vieillir avec grâce — quelle attitude est la plus cohérente ?",
                "sideA": "Anti-âge",
                "sideB": "Vieillir avec grâce",
                "level": "upper-intermediate",
                "theme": "healthcare_systems_B1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Technologie de surveillance pour la sécurité publique vs droit à la vie privée — où doit se situer l'équilibre ?",
                "sideA": "Sécurité publique",
                "sideB": "Vie privée",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Les réseaux sociaux comme outil d'engagement civique vs comme moteur de polarisation — quel effet domine ?",
                "sideA": "Engagement civique",
                "sideB": "Polarisation",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'IA dans le recrutement vs le jugement humain — qu'est-ce qui produit des décisions d'embauche plus justes ?",
                "sideA": "IA",
                "sideB": "Jugement humain",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le droit à l'oubli en ligne vs le droit du public à l'information — qu'est-ce qui devrait primer ?",
                "sideA": "Droit à l'oubli",
                "sideB": "Droit à l'info",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vote obligatoire vs vote volontaire — qu'est-ce qui produit des démocraties plus saines ?",
                "sideA": "Obligatoire",
                "sideB": "Volontaire",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Engagement politique par la protestation vs par les canaux institutionnels — qu'est-ce qui est le plus efficace pour les adultes aujourd'hui ?",
                "sideA": "Protestation",
                "sideB": "Institutionnel",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Identité nationale vs identité européenne ou mondiale — qu'est-ce qui a le plus de sens pour les adultes en 2026 ?",
                "sideA": "Identité nationale",
                "sideB": "Identité mondiale",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Augmentations d'impôts pour financer les services publics vs coupes budgétaires — quel est le choix politique le plus défendable ?",
                "sideA": "Augmentation impôts",
                "sideB": "Coupes budgétaires",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Admettre que vous n'avez aucune idée de la façon dont fonctionne votre retraite vs prétendre avec assurance que vous le savez — quelle est l'expérience adulte la plus universelle ?",
                "sideA": "Admettre ignorance",
                "sideB": "Prétendre savoir",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Être la personne qui planifie toujours les événements sociaux vs être toujours celle qui se contente de venir — quel rôle est le plus épuisant ?",
                "sideA": "L'organisateur",
                "sideB": "L'invité",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Avoir une opinion tranchée sur les habitudes de cuisine de vos collègues vs ne pas s'en soucier du tout — quelle personne est la plus tolérable ?",
                "sideA": "Opinion tranchée",
                "sideB": "S'en fiche",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Assister à chaque événement social facultatif au travail vs n'assister à aucun — quelle stratégie est la meilleure pour votre carrière et votre santé mentale ?",
                "sideA": "Tout assister",
                "sideB": "Rien assister",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Les adultes qui sont encore perplexes devant leur déclaration d'impôts vs les adultes qui aiment la faire — quel groupe est le plus digne de confiance ?",
                "sideA": "Perplexe",
                "sideB": "Aime ça",
                "level": "upper-intermediate",
                "theme": "economy_labour_market_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Se plaindre du coût de la vie auprès de ses amis vs prétendre que tout va bien — quelle est la réponse adulte la plus honnête ?",
                "sideA": "Se plaindre",
                "sideB": "Prétendre que tout va bien",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Réseaux sociaux vs interactions en face à face — qu'est-ce qui est mieux pour construire des relations ?",
                "sideA": "Réseaux sociaux",
                "sideB": "Face à face",
                "level": "upper-intermediate",
                "theme": "politics_governance_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Vie urbaine vs vie rurale — laquelle offre une meilleure qualité de vie ?",
                "sideA": "Urbain",
                "sideB": "Rural",
                "level": "upper-intermediate",
                "theme": "globalisation_trade_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Apprentissage en ligne vs salle de classe traditionnelle — quel est l'avenir de l'éducation ?",
                "sideA": "En ligne",
                "sideB": "Classe",
                "level": "upper-intermediate",
                "theme": "academic_vocabulary_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Énergie renouvelable vs énergie nucléaire — quelle est la meilleure solution pour le climat ?",
                "sideA": "Renouvelable",
                "sideB": "Nucléaire",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Mode éphémère vs vêtements durables — pouvons-nous nous permettre d'être éthiques ?",
                "sideA": "Mode éphémère",
                "sideB": "Durable",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2",
                "ideasA": [],
                "ideasB": []
            }
        ],
        "talkThatTalk": [
            {
                "topic": "L'avenir du monde dans 50 ans",
                "level": "upper-intermediate",
                "theme": "technology_privacy_B2"
            },
            {
                "topic": "L'impact du changement climatique sur les communautés locales",
                "level": "upper-intermediate",
                "theme": "environment_policy_B2"
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
