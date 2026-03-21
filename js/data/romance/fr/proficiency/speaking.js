(function() {
    const speakingData = {
    "fr": {
        "opinionArena": [
            {
                "text": "Le libre arbitre existe-t-il vraiment ou est-ce une illusion ?",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
            },
            {
                "text": "L'éthique de la colonisation d'autres planètes.",
                "level": "proficiency",
                "theme": "epistemology_truth_C2"
            }
        ],
        "criticsCorner": [],
        "debates": [
            {
                "topic": "L'éthique protestante du travail comme réussite civilisationnelle vs comme source originelle de la misère adulte — quel héritage domine aujourd'hui ?",
                "sideA": "Réussite civilisationnelle",
                "sideB": "Source de misère",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La marchandisation de la passion vs la libération de transformer le travail en sens — « faites ce que vous aimez » est-il un conseil ou un piège ?",
                "sideA": "Conseil",
                "sideB": "Piège",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La carrière comme identité vs la carrière comme moyen — quelle est la relation la plus cohérente qu'un adulte moderne puisse entretenir avec son travail ?",
                "sideA": "Identité",
                "sideB": "Moyen",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le travailleur acharné vertueux vs l'oisif stratégique — lequel a été célébré de la manière la plus malhonnête dans la culture occidentale ?",
                "sideA": "Travailleur acharné",
                "sideB": "Oisif",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'ambition adulte comme admirable vs l'ambition adulte comme incapacité à accepter la finitude — quelle lecture est la plus honnête psychologiquement ?",
                "sideA": "Admirable",
                "sideB": "Incapacité à accepter la finitude",
                "level": "proficiency",
                "theme": "work_identity_meaning_C1",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'amour romantique comme principe organisateur de la vie adulte vs comme mythe historiquement contingent et commercialement soutenu — lequel est le plus défendable ?",
                "sideA": "Principe organisateur",
                "sideB": "Mythe commercial",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La transparence radicale dans les relations vs la nécessité d'un moi privé — l'intimité et l'individuation peuvent-elles coexister ?",
                "sideA": "Transparence",
                "sideB": "Moi privé",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'éthique du « care » comme correctif féministe vs comme réassignation des mêmes fardeaux — le concept a-t-il tenu ses promesses ?",
                "sideA": "Correctif féministe",
                "sideB": "Réassignation des fardeaux",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Choisir de ne pas avoir d'enfants comme résistance à l'idéologie nataliste vs comme décision entièrement personnelle sans dimension politique — peuvent-elles être séparées proprement ?",
                "sideA": "Résistance",
                "sideB": "Décision personnelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La conscience de la mortalité comme condition préalable à une vie adulte pleine de sens vs comme son principal obstacle — quelle est la position la plus vivable ?",
                "sideA": "Condition préalable",
                "sideB": "Obstacle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le vieillissement comme déclin vs le vieillissement comme accumulation — quel récit est le plus honnête, et lequel est le plus utile ?",
                "sideA": "Déclin",
                "sideB": "Accumulation",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La médicalisation du vieillissement comme progrès vs comme refus d'accepter la condition humaine — où faut-il tracer la limite ?",
                "sideA": "Progrès",
                "sideB": "Refus",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La mémoire comme substance de l'identité adulte vs la mémoire comme narrateur hautement peu fiable — quelles sont les implications pour la construction du soi ?",
                "sideA": "Substance",
                "sideB": "Narrateur peu fiable",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La complicité du citoyen adulte dans des systèmes injustes par la consommation ordinaire vs l'irrélevance structurelle de la pureté morale individuelle — quel est le cadrage le plus honnête ?",
                "sideA": "Complicité",
                "sideB": "Irrélevance structurelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le désenchantement politique comme réponse rationnelle aux preuves disponibles vs comme forme de privilège — quelle lecture est la plus défendable empiriquement ?",
                "sideA": "Réponse rationnelle",
                "sideB": "Privilège",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La justice intergénérationnelle comme défi moral central de notre temps vs comme concept obscurcissant systématiquement les inégalités sociales et raciales actuelles — quelle est la critique la plus forte ?",
                "sideA": "Défi moral",
                "sideB": "Obscurcissement des inégalités",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La démocratie libérale comme le moins mauvais des systèmes vs comme un système ayant structurellement épuisé sa capacité de réforme — quel verdict les preuves soutiennent-elles ?",
                "sideA": "Moins mauvais système",
                "sideB": "Capacité épuisée",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "La capacité d'auto-tromperie comme défaut cognitif vs comme mécanisme adaptatif — quel récit sert le mieux l'adulte qui veut bien vivre ?",
                "sideA": "Défaut cognitif",
                "sideB": "Mécanisme adaptatif",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'expertise comme autorité épistémique vs l'expertise comme forme de pouvoir institutionnel méritant examen — quand le scepticisme sain devient-il une lâcheté épistémique ?",
                "sideA": "Autorité épistémique",
                "sideB": "Pouvoir institutionnel",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Le récit comme principal moyen pour les adultes de donner un sens à leur vie vs le récit comme principal moyen pour les adultes de s'égarer — quelle fonction domine ?",
                "sideA": "Donner du sens",
                "sideB": "S'égarer",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'honnêteté comme vertu inconditionnelle vs l'honnêteté comme vertu contextuelle — existe-t-il un compte rendu cohérent de la véracité qui survive au contact des relations adultes réelles ?",
                "sideA": "Vertu inconditionnelle",
                "sideB": "Vertu contextuelle",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "L'adulte qui a « enfin tout compris » vs l'adulte qui a accepté qu'il ne comprendrait jamais — lequel représente une relation plus sophistiquée à la réalité ?",
                "sideA": "Tout compris",
                "sideB": "Accepté l'inconnu",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Tout dire à son thérapeute vs tout dire à son coiffeur — quelle relation professionnelle est empiriquement plus transformatrice, et pourquoi la réponse nous met-elle mal à l'aise ?",
                "sideA": "Thérapeute",
                "sideB": "Coiffeur",
                "level": "proficiency",
                "theme": "psychoanalysis_unconscious_C2",
                "ideasA": [],
                "ideasB": []
            },
            {
                "topic": "Langage : Constitutif vs Expressif",
                "sideA": "Constitutif",
                "sideB": "Expressif",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Façonne la réalité",
                    "Limite la pensée"
                ],
                "ideasB": [
                    "Reflète la réalité",
                    "Outil pour la pensée"
                ]
            },
            {
                "topic": "Précision vs Ambiguïté",
                "sideA": "Précision",
                "sideB": "Ambiguïté",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Clarté",
                    "Efficacité"
                ],
                "ideasB": [
                    "Nuance",
                    "Diplomatie"
                ]
            },
            {
                "topic": "Rhétorique vs Logique",
                "sideA": "Rhétorique",
                "sideB": "Logique",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pouvoir persuasif",
                    "Appel émotionnel"
                ],
                "ideasB": [
                    "Vérité objective",
                    "Validité structurelle"
                ]
            },
            {
                "topic": "Sens littéral vs Sens interprétatif",
                "sideA": "Littéral",
                "sideB": "Interprétatif",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Intention de l'auteur",
                    "Stabilité"
                ],
                "ideasB": [
                    "Réponse du lecteur",
                    "Contexte évolutif"
                ]
            },
            {
                "topic": "Consensus scientifique vs Humilité épistémique",
                "sideA": "Consensus",
                "sideB": "Humilité",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Connaissances établies",
                    "Autorité d'expert"
                ],
                "ideasB": [
                    "Ouverture à la correction",
                    "Reconnaissance des limites"
                ]
            },
            {
                "topic": "Expertise vs Expérience vécue",
                "sideA": "Expertise",
                "sideB": "Expérience vécue",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Rigueur scientifique",
                    "Données objectives"
                ],
                "ideasB": [
                    "Vérité authentique",
                    "Aperçu contextuel"
                ]
            },
            {
                "topic": "Le doute : Vertu vs Paralysie",
                "sideA": "Vertu",
                "sideB": "Paralysie",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Pensée critique",
                    "Scepticisme"
                ],
                "ideasB": [
                    "Indécision",
                    "Manque d'action"
                ]
            },
            {
                "topic": "Récit vs Données",
                "sideA": "Récit",
                "sideB": "Données",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Impact émotionnel",
                    "Connexion humaine"
                ],
                "ideasB": [
                    "Vérité statistique",
                    "Scalabilité"
                ]
            },
            {
                "topic": "Légitimité : Consentement vs Résultat",
                "sideA": "Consentement",
                "sideB": "Résultat",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Processus démocratique",
                    "Droit moral"
                ],
                "ideasB": [
                    "Efficacité",
                    "Gouvernance efficace"
                ]
            },
            {
                "topic": "État : Garant de la liberté vs Menace",
                "sideA": "Garant",
                "sideB": "Menace",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "État de droit",
                    "Protection des droits"
                ],
                "ideasB": [
                    "Abus de pouvoir",
                    "Surveillance"
                ]
            },
            {
                "topic": "Politique des droits vs Politique des responsabilités",
                "sideA": "Droits",
                "sideB": "Responsabilités",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Liberté individuelle",
                    "Protection juridique"
                ],
                "ideasB": [
                    "Devoir collectif",
                    "Cohésion sociale"
                ]
            },
            {
                "topic": "Neutralité vs Gouvernance orientée par les valeurs",
                "sideA": "Neutralité",
                "sideB": "Orientée valeurs",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Impartialité",
                    "Équité"
                ],
                "ideasB": [
                    "Direction morale",
                    "Objectif social"
                ]
            },
            {
                "topic": "Intention vs Réception en art",
                "sideA": "Intention",
                "sideB": "Réception",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Vision de l'auteur",
                    "Contexte original"
                ],
                "ideasB": [
                    "Sens pour le public",
                    "Impact culturel"
                ]
            },
            {
                "topic": "Valeur esthétique vs Valeur morale",
                "sideA": "Esthétique",
                "sideB": "Morale",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "L'art pour l'art",
                    "Pure beauté"
                ],
                "ideasB": [
                    "Utilité sociale",
                    "Impact éthique"
                ]
            },
            {
                "topic": "L'avant-garde vs Accessibilité",
                "sideA": "Avant-garde",
                "sideB": "Accessibilité",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Repousser les limites",
                    "Défi intellectuel"
                ],
                "ideasB": [
                    "Inclusivité",
                    "Art démocratique"
                ]
            },
            {
                "topic": "Art institutionnel vs Art brut",
                "sideA": "Institutionnel",
                "sideB": "Art brut",
                "level": "proficiency",
                "theme": "aesthetics_criticism_C2",
                "ideasA": [
                    "Préservation historique",
                    "Normes"
                ],
                "ideasB": [
                    "Authenticité brute",
                    "Anti-establishment"
                ]
            },
            {
                "topic": "Principe de précaution vs proaction",
                "sideA": "Précaution",
                "sideB": "Proaction",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Évitement des risques",
                    "La sécurité d'abord"
                ],
                "ideasB": [
                    "Innovation",
                    "Accepter le changement"
                ]
            },
            {
                "topic": "Progrès scientifique : Intrinsèquement bon vs Neutre",
                "sideA": "Intrinsèquement bon",
                "sideB": "Éthiquement neutre",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Valeurs des Lumières",
                    "Résolution de problèmes"
                ],
                "ideasB": [
                    "Préoccupation du double usage",
                    "Responsabilité humaine"
                ]
            },
            {
                "topic": "Risque existentiel vs Souffrance actuelle",
                "sideA": "Risque existentiel",
                "sideB": "Souffrance actuelle",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Survie à long terme",
                    "Générations futures"
                ],
                "ideasB": [
                    "Soulagement immédiat",
                    "Pauvreté urgente"
                ]
            },
            {
                "topic": "Conscience humaine vs Intelligence artificielle générale",
                "sideA": "Conscience",
                "sideB": "IA Générale",
                "level": "proficiency",
                "theme": "epistemology_truth_C2",
                "ideasA": [
                    "Unicité biologique",
                    "Expérience subjective"
                ],
                "ideasB": [
                    "Puissance de calcul",
                    "Logique algorithmique"
                ]
            },
            {
                "topic": "Le progrès : Réel vs Illusion",
                "sideA": "Réel",
                "sideB": "Illusion",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Avancement technologique",
                    "Qualité de vie améliorée"
                ],
                "ideasB": [
                    "Histoire cyclique",
                    "Nouveaux problèmes"
                ]
            },
            {
                "topic": "Ordre libéral vs Monde multipolaire",
                "sideA": "Ordre libéral",
                "sideB": "Multipolarité",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Valeurs universelles",
                    "Stabilité mondiale"
                ],
                "ideasB": [
                    "Puissance diversifiée",
                    "Souveraineté culturelle"
                ]
            },
            {
                "topic": "Mémoire vs Oubli",
                "sideA": "Mémoire",
                "sideB": "Oubli",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Apprendre de l'histoire",
                    "Identité"
                ],
                "ideasB": [
                    "Aller de l'avant",
                    "Surmonter les traumatismes"
                ]
            },
            {
                "topic": "Tragédie des communs vs Coopération",
                "sideA": "Tragédie",
                "sideB": "Coopération",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2",
                "ideasA": [
                    "Intérêt personnel",
                    "Épuisement des ressources"
                ],
                "ideasB": [
                    "Bénéfice mutuel",
                    "Gestion collective"
                ]
            }
        ],
        "talkThatTalk": [
            {
                "topic": "La complexité de la conscience humaine",
                "level": "proficiency",
                "theme": "ontology_metaphysics_C2"
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
