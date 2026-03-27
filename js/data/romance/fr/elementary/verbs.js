(function() {
    const data = [
    {
        "word": "se brosser les dents",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🪥",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "se brosser les dents deux fois par jour",
        "definitions": [
            {
                "text": "Nettoyer ses dents avec une brosse.",
                "examples": [
                    "Je me brosse les dents matin et soir."
                ]
            }
        ],
        "v3": "brossé les dents"
    },
    {
        "word": "se doucher",
        "level": "elementary",
        "theme": "household_tasks_A1",
        "emoji": "🚿",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "prendre une douche",
        "definitions": [
            {
                "text": "Se laver le corps sous une douche.",
                "examples": [
                    "Je me douche tous les matins."
                ]
            }
        ],
        "v3": "douché"
    },
    {
        "word": "sembler",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "sembler heureux / sembler être",
        "definitions": [
            {
                "text": "Donner l'impression d'être quelque chose.",
                "examples": [
                    "Tu sembles fatigué aujourd'hui."
                ]
            }
        ],
        "v3": "semblé"
    },
    {
        "word": "devenir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🦋",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "devenir médecin / devenir célèbre",
        "definitions": [
            {
                "text": "Commencer à être quelque chose.",
                "examples": [
                    "Il veut devenir pilote."
                ]
            }
        ],
        "v3": "devenu"
    },
    {
        "word": "croire",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🙏",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "croire en quelque chose / croire quelqu'un",
        "definitions": [
            {
                "text": "Tenir pour vrai.",
                "examples": [
                    "Je te crois."
                ]
            }
        ],
        "v3": "cru"
    },
    {
        "word": "se passer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "⚡",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "qu'est-ce qui se passe ?",
        "definitions": [
            {
                "text": "Arriver, avoir lieu.",
                "examples": [
                    "L'accident s'est passé hier."
                ]
            }
        ],
        "v3": "passé"
    },
    {
        "word": "inclure",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➕",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "tout inclure / le prix inclut les taxes",
        "definitions": [
            {
                "text": "Contenir quelque chose comme partie d'un tout.",
                "examples": [
                    "Le petit-déjeuner est inclus dans le prix."
                ]
            }
        ],
        "v3": "inclus"
    },
    {
        "word": "continuer",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "➡️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "continuer à travailler / continuer de faire",
        "definitions": [
            {
                "text": "Poursuivre une action sans s'arrêter.",
                "examples": [
                    "Veuillez continuer à lire."
                ]
            }
        ],
        "v3": "continué"
    },
    {
        "word": "régler",
        "level": "elementary",
        "theme": "daily_work_routines_A1",
        "emoji": "⚙️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "régler un réveil / régler un problème",
        "definitions": [
            {
                "text": "Mettre au point, ajuster.",
                "examples": [
                    "Je règle mon réveil pour 7h."
                ]
            }
        ],
        "v3": "réglé"
    },
    {
        "word": "mener",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "👑",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "mener une équipe / mener la danse",
        "definitions": [
            {
                "text": "Diriger un groupe ou montrer le chemin.",
                "examples": [
                    "Elle mène une grande équipe de chercheurs."
                ]
            }
        ],
        "v3": "mené"
    },
    {
        "word": "suivre",
        "level": "elementary",
        "theme": "directions_navigation_A1",
        "emoji": "👣",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "suivre les règles / suivre quelqu'un",
        "definitions": [
            {
                "text": "Aller derrière quelqu'un ou obéir à quelque chose.",
                "examples": [
                    "Veuillez me suivre à la salle de réunion."
                ]
            }
        ],
        "v3": "suivi"
    },
    {
        "word": "créer",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "✨",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "créer un site web / créer un compte",
        "definitions": [
            {
                "text": "Faire quelque chose de nouveau.",
                "examples": [
                    "Il a créé une magnifique œuvre d'art."
                ]
            }
        ],
        "v3": "créé"
    },
    {
        "word": "permettre",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "permettre à quelqu'un de faire",
        "definitions": [
            {
                "text": "Donner l'autorisation ou rendre possible.",
                "examples": [
                    "Fumer n'est pas permis ici."
                ]
            }
        ],
        "v3": "permis"
    },
    {
        "word": "grandir",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "🌱",
        "form": "verb",
        "group": "2ème groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "grandir vite / faire grandir",
        "definitions": [
            {
                "text": "Augmenter en taille ou se développer.",
                "examples": [
                    "Les enfants grandissent très vite."
                ]
            }
        ],
        "v3": "grandi"
    },
    {
        "word": "offrir",
        "level": "elementary",
        "theme": "relationships_dating_A2",
        "emoji": "🤲",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "offrir un emploi / offrir de l'aide",
        "definitions": [
            {
                "text": "Demander à quelqu'un s'il aimerait quelque chose.",
                "examples": [
                    "Il m'a offert un café."
                ]
            }
        ],
        "v3": "offert"
    },
    {
        "word": "considérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "🤔",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "both",
        "subtext": "considérer une option / considérer comme",
        "definitions": [
            {
                "text": "Examiner attentivement quelque chose.",
                "examples": [
                    "Nous devons considérer toutes les options."
                ]
            }
        ],
        "v3": "considéré"
    },
    {
        "word": "apparaître",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👻",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "apparaître soudainement / apparaître à l'écran",
        "definitions": [
            {
                "text": "Devenir visible ou sembler être.",
                "examples": [
                    "Il est apparu très heureux."
                ]
            }
        ],
        "v3": "apparu"
    },
    {
        "word": "servir",
        "level": "elementary",
        "theme": "restaurants_ordering_A2",
        "emoji": "🍽️",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "servir le dîner / servir à quelque chose",
        "definitions": [
            {
                "text": "Fournir de la nourriture ou un service.",
                "examples": [
                    "Ils servent le petit-déjeuner jusqu'à 11h."
                ]
            }
        ],
        "v3": "servi"
    },
    {
        "word": "attendre",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💭",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "attendre un bébé / attendre quelqu'un",
        "definitions": [
            {
                "text": "Penser que quelque chose va arriver.",
                "examples": [
                    "Je les attends bientôt."
                ]
            }
        ],
        "v3": "attendu"
    },
    {
        "word": "construire",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "construire une maison / construire un projet",
        "definitions": [
            {
                "text": "Faire quelque chose en assemblant des parties.",
                "examples": [
                    "Ils construisent un nouvel immeuble de bureaux."
                ]
            }
        ],
        "v3": "construit"
    },
    {
        "word": "atteindre",
        "level": "elementary",
        "theme": "booking_planning_a_trip_A2",
        "emoji": "🏁",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "atteindre le sommet / atteindre un accord",
        "definitions": [
            {
                "text": "Arriver à un lieu ou un niveau.",
                "examples": [
                    "Nous avons atteint l'hôtel tard dans la nuit."
                ]
            }
        ],
        "v3": "atteint"
    },
    {
        "word": "tuer",
        "level": "elementary",
        "theme": "right_wrong_basic_A2",
        "emoji": "⚔️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "tuer le temps / tuer un insecte",
        "definitions": [
            {
                "text": "Causer la mort de quelqu'un ou quelque chose.",
                "examples": [
                    "Le froid a tué les plantes."
                ]
            }
        ],
        "v3": "tué"
    },
    {
        "word": "rester",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "rester calme / rester à la maison",
        "definitions": [
            {
                "text": "Demeurer au même endroit ou dans le même état.",
                "examples": [
                    "Veuillez rester assis jusqu'à l'arrêt de l'avion."
                ]
            }
        ],
        "v3": "resté"
    },
    {
        "word": "suggérer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "suggérer un plan / suggérer de faire",
        "definitions": [
            {
                "text": "Mentionner une idée ou un plan.",
                "examples": [
                    "Je suggère que nous allions nous promener."
                ]
            }
        ],
        "v3": "suggéré"
    },
    {
        "word": "lever",
        "level": "elementary",
        "theme": "family_life_A1",
        "emoji": "🙋",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "lever la main / élever un enfant",
        "definitions": [
            {
                "text": "Soulever quelque chose ou s'occuper d'un enfant.",
                "examples": [
                    "Elle a levé la main pour poser une question."
                ]
            }
        ],
        "v3": "levé"
    },
    {
        "word": "exiger",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "exiger de l'aide / exiger un passeport",
        "definitions": [
            {
                "text": "Avoir besoin de quelque chose.",
                "examples": [
                    "Ce travail exige beaucoup de voyages."
                ]
            }
        ],
        "v3": "exigé"
    },
    {
        "word": "rapporter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "signaler un crime / rapporter un problème",
        "definitions": [
            {
                "text": "Donner des informations sur quelque chose.",
                "examples": [
                    "Il a rapporté la voiture volée à la police."
                ]
            }
        ],
        "v3": "rapporté"
    },
    {
        "word": "expliquer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "expliquer les règles / expliquer pourquoi",
        "definitions": [
            {
                "text": "Rendre quelque chose clair en donnant des détails.",
                "examples": [
                    "Pouvez-vous m'expliquer ce mot ?"
                ]
            }
        ],
        "v3": "expliqué"
    },
    {
        "word": "développer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💻",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "développer une compétence / développer un produit",
        "definitions": [
            {
                "text": "Faire croître ou changer vers quelque chose de plus avancé.",
                "examples": [
                    "L'entreprise développe une nouvelle application."
                ]
            }
        ],
        "v3": "développé"
    },
    {
        "word": "prendre sa retraite",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👴",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "retraite anticipée",
        "definitions": [
            {
                "text": "Arrêter de travailler parce qu'on a atteint un certain âge.",
                "examples": [
                    "Mon père prendra sa retraite l'année prochaine."
                ]
            }
        ],
        "v3": "pris sa retraite"
    },
    {
        "word": "avoir les moyens",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "ne pas avoir les moyens / s'offrir une maison",
        "definitions": [
            {
                "text": "Avoir assez d'argent pour payer quelque chose.",
                "examples": [
                    "Nous n'avons pas les moyens d'un plus grand appartement."
                ]
            }
        ],
        "v3": "eu les moyens"
    },
    {
        "word": "recycler",
        "level": "elementary",
        "theme": "environmental_protection_A2",
        "emoji": "♻️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "recycler le papier / bac de recyclage",
        "definitions": [
            {
                "text": "Traiter des matériaux usagés pour qu'ils soient réutilisés.",
                "examples": [
                    "Nous recyclons le papier et le verre."
                ]
            }
        ],
        "v3": "recyclé"
    },
    {
        "word": "frapper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🥊",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "frapper la balle / frapper une cible",
        "definitions": [
            {
                "text": "Toucher quelque chose avec une force soudaine.",
                "examples": [
                    "Il a frappé la balle avec la batte."
                ]
            }
        ],
        "v3": "frappé"
    },
    {
        "word": "produire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏭",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "produire de l'énergie / produire un film",
        "definitions": [
            {
                "text": "Faire ou créer quelque chose.",
                "examples": [
                    "L'usine produit des voitures."
                ]
            }
        ],
        "v3": "produit"
    },
    {
        "word": "faire face",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👤",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "faire face à un problème / faire face à la réalité",
        "definitions": [
            {
                "text": "Gérer une situation difficile.",
                "examples": [
                    "Nous devons faire face à nos peurs."
                ]
            }
        ],
        "v3": "fait face"
    },
    {
        "word": "couvrir",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🧥",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "couvrir avec une couverture",
        "definitions": [
            {
                "text": "Mettre quelque chose sur autre chose.",
                "examples": [
                    "Elle a couvert la table avec une nappe."
                ]
            }
        ],
        "v3": "couvert"
    },
    {
        "word": "décrire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "décrire quelqu'un / décrire une situation",
        "definitions": [
            {
                "text": "Dire à quoi ressemble quelqu'un ou quelque chose.",
                "examples": [
                    "Pouvez-vous décrire l'homme que vous avez vu ?"
                ]
            }
        ],
        "v3": "décrit"
    },
    {
        "word": "attraper",
        "level": "elementary",
        "theme": "interests_hobbies_A2",
        "emoji": "🎣",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "attraper une balle / attraper un rhume",
        "definitions": [
            {
                "text": "Prendre quelque chose qui bouge.",
                "examples": [
                    "Essaie d'attraper la balle !"
                ]
            }
        ],
        "v3": "attrapé"
    },
    {
        "word": "postuler",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "postuler à un emploi / postuler en ligne",
        "definitions": [
            {
                "text": "Faire une demande écrite formelle pour un emploi ou un poste.",
                "examples": [
                    "Elle a postulé pour trois postes de direction différents."
                ]
            }
        ],
        "v3": "postulé"
    },
    {
        "word": "embaucher",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "embaucher quelqu'un / recruter une équipe",
        "definitions": [
            {
                "text": "Prendre officiellement quelqu'un comme employé.",
                "examples": [
                    "L'entreprise a embauché quinze nouvelles personnes le trimestre dernier."
                ]
            }
        ],
        "v3": "embauché"
    },
    {
        "word": "promouvoir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "être promu / promotion interne",
        "definitions": [
            {
                "text": "Déplacer un employé vers un poste supérieur.",
                "examples": [
                    "Il a été promu au poste de cadre supérieur après deux ans."
                ]
            }
        ],
        "v3": "promu"
    },
    {
        "word": "démissionner",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚪",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "démissionner d'un poste / remettre sa démission",
        "definitions": [
            {
                "text": "Quitter formellement un emploi par choix.",
                "examples": [
                    "Elle a démissionné après avoir été en désaccord avec la nouvelle stratégie."
                ]
            }
        ],
        "v3": "démissionné"
    },
    {
        "word": "licencier",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "licencier un employé / être licencié",
        "definitions": [
            {
                "text": "Retirer officiellement quelqu'un de son emploi.",
                "examples": [
                    "Il a été licencié pour absences répétées sans explication."
                ]
            }
        ],
        "v3": "licencié"
    },
    {
        "word": "déléguer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📋",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "déléguer une tâche / déléguer des responsabilités",
        "definitions": [
            {
                "text": "Donner une tâche ou une responsabilité à quelqu'un d'autre.",
                "examples": [
                    "Un bon manager sait comment déléguer efficacement."
                ]
            }
        ],
        "v3": "délégué"
    },
    {
        "word": "négocier",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "négocier un salaire / négocier les termes",
        "definitions": [
            {
                "text": "Discuter de quelque chose pour parvenir à un accord.",
                "examples": [
                    "Elle a négocié un salaire plus élevé avant de signer le contrat."
                ]
            }
        ],
        "v3": "négocié"
    },
    {
        "word": "évaluer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "évaluer la performance / évaluer les résultats",
        "definitions": [
            {
                "text": "Juger de la qualité ou de la valeur de quelque chose.",
                "examples": [
                    "Le manager évalue la performance de chaque membre de l'équipe annuellement."
                ]
            }
        ],
        "v3": "évalué"
    },
    {
        "word": "collaborer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👥",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "collaborer avec / collaborer sur un projet",
        "definitions": [
            {
                "text": "Travailler conjointement avec d'autres sur un projet commun.",
                "examples": [
                    "Ils ont collaboré avec une équipe à Berlin pour la campagne."
                ]
            }
        ],
        "v3": "collaboré"
    },
    {
        "word": "planifier",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "planifier une réunion / planifier son temps",
        "definitions": [
            {
                "text": "Organiser un moment pour que quelque chose se produise.",
                "examples": [
                    "Pouvons-nous planifier une réunion pour jeudi après-midi ?"
                ]
            }
        ],
        "v3": "planifié"
    },
    {
        "word": "investir",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "2ème groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "investir de l'argent / investir dans l'immobilier",
        "definitions": [
            {
                "text": "Placer de l'argent dans quelque chose en attendant un retour futur.",
                "examples": [
                    "Il investit une partie de son salaire dans un fonds indiciel chaque mois."
                ]
            }
        ],
        "v3": "investi"
    },
    {
        "word": "emprunter",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "emprunter de l'argent / emprunter à la banque",
        "definitions": [
            {
                "text": "Prendre quelque chose avec l'intention de le rendre.",
                "examples": [
                    "Elle a emprunté de l'argent à ses parents pour le dépôt."
                ]
            }
        ],
        "v3": "emprunté"
    },
    {
        "word": "prêter",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "prêter de l'argent / prêter main-forte",
        "definitions": [
            {
                "text": "Donner temporairement quelque chose à quelqu'un.",
                "examples": [
                    "La banque a refusé de lui prêter plus d'argent."
                ]
            }
        ],
        "v3": "prêté"
    },
    {
        "word": "budgétiser",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "budgétiser soigneusement / budgétiser mensuellement",
        "definitions": [
            {
                "text": "Planifier comment l'argent sera dépensé.",
                "examples": [
                    "Ils budgétisent soigneusement pour économiser pour une maison."
                ]
            }
        ],
        "v3": "budgétisé"
    },
    {
        "word": "retirer",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "🏧",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "retirer de l'argent / retirer d'un compte",
        "definitions": [
            {
                "text": "Prendre de l'argent d'un compte bancaire.",
                "examples": [
                    "Je retire de l'argent tous les lundis pour la semaine."
                ]
            }
        ],
        "v3": "retiré"
    },
    {
        "word": "transférer",
        "level": "elementary",
        "theme": "banking_A2",
        "emoji": "📲",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "transférer de l'argent / virement bancaire",
        "definitions": [
            {
                "text": "Déplacer de l'argent d'un compte à un autre.",
                "examples": [
                    "Elle a transféré le loyer sur le compte du propriétaire."
                ]
            }
        ],
        "v3": "transféré"
    },
    {
        "word": "facturer",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💳",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "facturer des frais / facturer un service",
        "definitions": [
            {
                "text": "Demander une somme d'argent pour un service.",
                "examples": [
                    "Le mécanicien a facturé plus que le devis."
                ]
            }
        ],
        "v3": "facturé"
    },
    {
        "word": "réclamer",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📜",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "réclamer une assurance / réclamer un remboursement",
        "definitions": [
            {
                "text": "Demander formellement de l'argent qui vous est dû.",
                "examples": [
                    "Il a fait une réclamation à son assurance après l'accident."
                ]
            }
        ],
        "v3": "réclamé"
    },
    {
        "word": "se disputer",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "se disputer à propos de / se disputer avec quelqu'un",
        "definitions": [
            {
                "text": "Ne pas être d'accord avec quelqu'un de façon colérique ou énergique.",
                "examples": [
                    "Ils se disputent souvent à propos de l'argent et des horaires de travail."
                ]
            }
        ],
        "v3": "disputé"
    },
    {
        "word": "faire confiance",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "faire confiance à quelqu'un / faire confiance à son instinct",
        "definitions": [
            {
                "text": "Avoir confiance en l'honnêteté et la fiabilité de quelqu'un.",
                "examples": [
                    "Elle fait entièrement confiance à son partenaire commercial."
                ]
            }
        ],
        "v3": "fait confiance"
    },
    {
        "word": "soutenir",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "soutenir quelqu'un / soutenir une décision",
        "definitions": [
            {
                "text": "Aider et encourager quelqu'un dans les difficultés.",
                "examples": [
                    "Il soutient sa partenaire pendant une période difficile au travail."
                ]
            }
        ],
        "v3": "soutenu"
    },
    {
        "word": "ne pas être d'accord",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "👎",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "être en désaccord avec quelqu'un",
        "definitions": [
            {
                "text": "Avoir une opinion différente de celle de quelqu'un d'autre.",
                "examples": [
                    "Elle n'était respectueusement pas d'accord avec la décision du manager."
                ]
            }
        ],
        "v3": "pas été d'accord"
    },
    {
        "word": "s'excuser",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🙏",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "s'excuser pour / s'excuser auprès de quelqu'un",
        "definitions": [
            {
                "text": "Exprimer ses regrets pour quelque chose que l'on a mal fait.",
                "examples": [
                    "Il s'est excusé d'avoir manqué la réunion."
                ]
            }
        ],
        "v3": "excusé"
    },
    {
        "word": "pardonner",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "pardonner à quelqu'un / pardonner une erreur",
        "definitions": [
            {
                "text": "Cesser d'être en colère contre quelqu'un pour ce qu'il a fait.",
                "examples": [
                    "Elle a fini par lui pardonner son erreur."
                ]
            }
        ],
        "v3": "pardonné"
    },
    {
        "word": "faire un compromis",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "faire des compromis / trouver un compromis",
        "definitions": [
            {
                "text": "Accepter moins que l'idéal pour parvenir à un accord.",
                "examples": [
                    "Ils ont fait un compromis sur le prix et ont signé le contrat."
                ]
            }
        ],
        "v3": "fait un compromis"
    },
    {
        "word": "diagnostiquer",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩺",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "diagnostiquer une maladie / diagnostiquer tôt",
        "definitions": [
            {
                "text": "Identifier une maladie ou un problème après examen.",
                "examples": [
                    "Le médecin lui a diagnostiqué une hypertension artérielle."
                ]
            }
        ],
        "v3": "diagnostiqué"
    },
    {
        "word": "traiter",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🩹",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "traiter un patient / traiter une maladie",
        "definitions": [
            {
                "text": "Donner des soins médicaux à quelqu'un qui est malade ou blessé.",
                "examples": [
                    "Le spécialiste a traité sa blessure au genou par physiothérapie."
                ]
            }
        ],
        "v3": "traité"
    },
    {
        "word": "prévenir",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🛡️",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "prévenir les maladies / prendre des mesures pour prévenir",
        "definitions": [
            {
                "text": "Empêcher quelque chose de mal de se produire.",
                "examples": [
                    "L'exercice et l'alimentation peuvent prévenir de nombreuses maladies courantes."
                ]
            }
        ],
        "v3": "prévenu"
    },
    {
        "word": "souffrir",
        "level": "elementary",
        "theme": "human_body_A2",
        "emoji": "🤕",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "souffrir de / souffrir la douleur",
        "definitions": [
            {
                "text": "Éprouver de la douleur ou de la détresse.",
                "examples": [
                    "Elle souffre de maux de dos chroniques dus au travail de bureau."
                ]
            }
        ],
        "v3": "souffert"
    },
    {
        "word": "recommander",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "💡",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "recommander un traitement / recommander de se reposer",
        "definitions": [
            {
                "text": "Suggérer une ligne de conduite comme bonne ou appropriée.",
                "examples": [
                    "Le médecin a recommandé plus de sommeil et moins de caféine."
                ]
            }
        ],
        "v3": "recommandé"
    },
    {
        "word": "améliorer",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "améliorer la santé / améliorer la forme physique",
        "definitions": [
            {
                "text": "Rendre meilleur ou devenir meilleur.",
                "examples": [
                    "Sa santé s'est améliorée après avoir changé de régime et d'habitudes."
                ]
            }
        ],
        "v3": "amélioré"
    },
    {
        "word": "louer",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏠",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "louer un appartement / louer une chambre",
        "definitions": [
            {
                "text": "Payer régulièrement pour utiliser un bien appartenant à quelqu'un d'autre.",
                "examples": [
                    "Ils louent un appartement de deux chambres près du centre-ville."
                ]
            }
        ],
        "v3": "loué"
    },
    {
        "word": "posséder",
        "level": "elementary",
        "theme": "renting_landlords_A2",
        "emoji": "🏡",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "stative",
        "subtext": "posséder une propriété / posséder une voiture",
        "definitions": [
            {
                "text": "Avoir la propriété légale de quelque chose.",
                "examples": [
                    "Elle possède un petit appartement en banlieue."
                ]
            }
        ],
        "v3": "possédé"
    },
    {
        "word": "réparer",
        "level": "elementary",
        "theme": "home_repairs_maintenance_A2",
        "emoji": "🔧",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "réparer quelque chose / effectuer des réparations",
        "definitions": [
            {
                "text": "Fixer quelque chose qui est cassé ou ne fonctionne pas.",
                "examples": [
                    "Le propriétaire est lent à réparer les choses dans l'appartement."
                ]
            }
        ],
        "v3": "réparé"
    },
    {
        "word": "déménager",
        "level": "elementary",
        "theme": "moving_home_A2",
        "emoji": "📦",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "emménager / déménager de la maison",
        "definitions": [
            {
                "text": "Aller vivre ou travailler dans un endroit différent.",
                "examples": [
                    "Ils ont déménagé dans un plus grand appartement à la naissance de leur fille."
                ]
            }
        ],
        "v3": "déménagé"
    },
    {
        "word": "décorer",
        "level": "elementary",
        "theme": "home_furnishings_A2",
        "emoji": "🎨",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "décorer une pièce / décoration d'intérieur",
        "definitions": [
            {
                "text": "Rendre un lieu plus attrayant, notamment par la peinture.",
                "examples": [
                    "Ils ont décoré l'appartement avant d'emménager."
                ]
            }
        ],
        "v3": "décoré"
    },
    {
        "word": "monter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏗️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "monter une entreprise / monter une affaire",
        "definitions": [
            {
                "text": "Commencer ou établir quelque chose (comme une entreprise).",
                "examples": [
                    "Il a monté sa propre entreprise de conseil à l'âge de trente ans."
                ]
            }
        ],
        "v3": "monté"
    },
    {
        "word": "découvrir",
        "level": "elementary",
        "theme": "news_media_A2",
        "emoji": "🔎",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "découvrir la vérité / découvrir plus tard",
        "definitions": [
            {
                "text": "Trouver ou apprendre une information.",
                "examples": [
                    "Elle a découvert que le loyer allait augmenter."
                ]
            }
        ],
        "v3": "découvert"
    },
    {
        "word": "poursuivre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏩",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "poursuivre son travail / poursuivre malgré tout",
        "definitions": [
            {
                "text": "Continuer à faire quelque chose.",
                "examples": [
                    "Il a poursuivi son travail malgré son état de fatigue."
                ]
            }
        ],
        "v3": "poursuivi"
    },
    {
        "word": "abandonner",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏳️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "abandonner un emploi / arrêter de fumer",
        "definitions": [
            {
                "text": "Cesser d'essayer de faire quelque chose ; arrêter.",
                "examples": [
                    "Elle a abandonné son emploi pour créer sa propre entreprise."
                ]
            }
        ],
        "v3": "abandonné"
    },
    {
        "word": "résoudre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔧",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "résoudre un problème / régler une situation",
        "definitions": [
            {
                "text": "Trouver une solution à un problème ou s'occuper de quelque chose.",
                "examples": [
                    "Pouvez-vous résoudre le problème avec le contrat ?"
                ]
            }
        ],
        "v3": "résolu"
    },
    {
        "word": "s'occuper de",
        "level": "elementary",
        "theme": "relationships_family_A2",
        "emoji": "👶",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "s'occuper de quelqu'un / s'occuper d'un enfant",
        "definitions": [
            {
                "text": "Prendre soin de quelqu'un ou de quelque chose.",
                "examples": [
                    "Il s'occupe de sa mère âgée le week-end."
                ]
            }
        ],
        "v3": "occupé de"
    },
    {
        "word": "limiter",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "📉",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "limiter ses dépenses / limiter le sucre",
        "definitions": [
            {
                "text": "Réduire la quantité de quelque chose que vous faites ou consommez.",
                "examples": [
                    "Elle a limité sa consommation de caféine pour améliorer son sommeil."
                ]
            }
        ],
        "v3": "limité"
    },
    {
        "word": "assumer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "💪",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "assumer une responsabilité / assumer un projet",
        "definitions": [
            {
                "text": "Accepter une responsabilité ou un travail.",
                "examples": [
                    "Il a assumé un deuxième emploi pour rembourser son prêt plus rapidement."
                ]
            }
        ],
        "v3": "assumé"
    },
    {
        "word": "rejeter",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "👎",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rejeter une offre / refuser un emploi",
        "definitions": [
            {
                "text": "Refuser une offre ou une demande.",
                "examples": [
                    "Elle a rejeté l'offre d'emploi parce que le salaire était trop bas."
                ]
            }
        ],
        "v3": "rejeté"
    },
    {
        "word": "remettre à plus tard",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⏳",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "reporter une réunion / différer une décision",
        "definitions": [
            {
                "text": "Reporter quelque chose à plus tard.",
                "examples": [
                    "Il continue de remettre à plus tard la conversation sur son salaire."
                ]
            }
        ],
        "v3": "remis à plus tard"
    },
    {
        "word": "devoir",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💸",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "devoir de l'argent / devoir beaucoup",
        "definitions": [
            {
                "text": "Être tenu de payer de l'argent à quelqu'un.",
                "examples": [
                    "Il doit cinquante mille euros à la banque pour son prêt."
                ]
            }
        ],
        "v3": "dû"
    },
    {
        "word": "inviter",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "📩",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "inviter à dîner / inviter à une fête",
        "definitions": [
            {
                "text": "Demander à quelqu'un de venir à un événement.",
                "examples": [
                    "Elle a invité toute l'équipe à dîner après la fin du projet."
                ]
            }
        ],
        "v3": "invité"
    },
    {
        "word": "confirmer",
        "level": "elementary",
        "theme": "giving_reasons_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "confirmer une réservation / confirmer par écrit",
        "definitions": [
            {
                "text": "Dire définitivement que quelque chose est vrai ou va se produire.",
                "examples": [
                    "Veuillez confirmer votre présence avant vendredi matin."
                ]
            }
        ],
        "v3": "confirmé"
    },
    {
        "word": "contacter",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "📞",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "contacter par e-mail / nous contacter",
        "definitions": [
            {
                "text": "Entrer en contact avec quelqu'un.",
                "examples": [
                    "Je vous contacterai d'ici la fin de la semaine avec une réponse."
                ]
            }
        ],
        "v3": "contacté"
    },
    {
        "word": "se plaindre",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "😠",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "se plaindre de / porter plainte",
        "definitions": [
            {
                "text": "Exprimer son mécontentement à propos de quelque chose.",
                "examples": [
                    "Elle s'est plainte du bruit provenant de l'appartement du dessus."
                ]
            }
        ],
        "v3": "plaint"
    },
    {
        "word": "discuter",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🗣️",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "discuter en détail / discuter avec quelqu'un",
        "definitions": [
            {
                "text": "Parler de quelque chose en détail.",
                "examples": [
                    "Nous avons discuté des nouveaux termes du contrat pendant deux heures."
                ]
            }
        ],
        "v3": "discuté"
    },
    {
        "word": "présenter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📊",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "présenter des données / présenter à un client",
        "definitions": [
            {
                "text": "Montrer ou expliquer quelque chose à un groupe.",
                "examples": [
                    "Elle présente les résultats des ventes au conseil d'administration chaque trimestre."
                ]
            }
        ],
        "v3": "présenté"
    },
    {
        "word": "accepter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "✅",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "accepter une offre / accepter un défi",
        "definitions": [
            {
                "text": "Accepter de prendre ou de recevoir quelque chose.",
                "examples": [
                    "Elle a accepté l'offre d'emploi après avoir négocié le salaire."
                ]
            }
        ],
        "v3": "accepté"
    },
    {
        "word": "refuser",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "refuser une offre / refuser la permission",
        "definitions": [
            {
                "text": "Dire non à quelque chose ; décliner.",
                "examples": [
                    "Il a refusé de signer le contrat sans avis juridique."
                ]
            }
        ],
        "v3": "refusé"
    },
    {
        "word": "perdre du poids",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "perdre quelques kilos / essayer de perdre du poids",
        "definitions": [
            {
                "text": "Devenir plus léger ; réduire le poids corporel.",
                "examples": [
                    "Il a perdu dix kilos après avoir changé son alimentation et son mode de vie."
                ]
            }
        ],
        "v3": "perdu du poids"
    },
    {
        "word": "augmenter",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "augmenter de / augmenter rapidement",
        "definitions": [
            {
                "text": "Devenir ou rendre quelque chose plus grand.",
                "examples": [
                    "L'entreprise a augmenté les salaires de trois pour cent."
                ]
            }
        ],
        "v3": "augmenté"
    },
    {
        "word": "réduire",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📉",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "réduire les coûts / réduire le stress",
        "definitions": [
            {
                "text": "Rendre quelque chose plus petit en taille ou en quantité.",
                "examples": [
                    "Ils ont réduit l'équipe de douze à huit membres."
                ]
            }
        ],
        "v3": "réduit"
    },
    {
        "word": "améliorer ses compétences",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📈",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "améliorer la performance / s'améliorer",
        "definitions": [
            {
                "text": "Rendre quelque chose de meilleur ou devenir meilleur.",
                "examples": [
                    "Elle a considérablement amélioré ses compétences en prise de parole en public."
                ]
            }
        ],
        "v3": "amélioré ses compétences"
    },
    {
        "word": "fournir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤲",
        "form": "verb",
        "group": "2ème groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "fournir une aide / fournir un service",
        "definitions": [
            {
                "text": "Donner ou apporter quelque chose à quelqu'un.",
                "examples": [
                    "L'entreprise fournit un ordinateur portable à tous les employés."
                ]
            }
        ],
        "v3": "fourni"
    },
    {
        "word": "résoudre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧩",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "résoudre un mystère / trouver une solution",
        "definitions": [
            {
                "text": "Trouver une réponse à un problème.",
                "examples": [
                    "Il résout rapidement les problèmes sous pression."
                ]
            }
        ],
        "v3": "résolu"
    },
    {
        "word": "partager",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "partager des informations / partager un repas / partager des idées",
        "definitions": [
            {
                "text": "Diviser quelque chose entre plusieurs personnes ; dire aux autres.",
                "examples": [
                    "Elle a partagé le rapport avec toute l'équipe lundi."
                ]
            }
        ],
        "v3": "partagé"
    },
    {
        "word": "rejoindre",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "➕",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "rejoindre une entreprise / rejoindre une équipe",
        "definitions": [
            {
                "text": "Devenir membre d'un groupe ou d'une organisation.",
                "examples": [
                    "Il a rejoint l'entreprise en tant que stagiaire il y a sept ans."
                ]
            }
        ],
        "v3": "rejoint"
    },
    {
        "word": "recevoir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📩",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "recevoir une lettre / recevoir un paiement",
        "definitions": [
            {
                "text": "Recevoir quelque chose qui vous est donné ou présenté.",
                "examples": [
                    "Il a reçu l'offre d'emploi par e-mail un vendredi après-midi."
                ]
            }
        ],
        "v3": "reçu"
    },
    {
        "word": "contenir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📦",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "contenir des informations / le fichier contient",
        "definitions": [
            {
                "text": "Avoir quelque chose à l'intérieur ; inclure.",
                "examples": [
                    "Le rapport contient des projections financières détaillées."
                ]
            }
        ],
        "v3": "contenu"
    },
    {
        "word": "prévoir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📅",
        "form": "verb",
        "group": "3ème groupe",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "prévoir un voyage / prévoir à l'avance",
        "definitions": [
            {
                "text": "Réfléchir à et organiser des actions futures.",
                "examples": [
                    "Elle prévoit toute sa semaine chaque dimanche soir."
                ]
            }
        ],
        "v3": "prévu"
    },
    {
        "word": "préparer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📝",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "préparer une réunion / préparer un rapport",
        "definitions": [
            {
                "text": "Rendre quelque chose prêt ; se préparer soi-même.",
                "examples": [
                    "Il prépare un ordre du jour détaillé avant chaque réunion."
                ]
            }
        ],
        "v3": "préparé"
    },
    {
        "word": "échouer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "❌",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "échouer à un examen / échouer à faire",
        "definitions": [
            {
                "text": "Ne pas réussir ; ne pas faire quelque chose de requis.",
                "examples": [
                    "Elle a échoué à son premier examen mais a réussi la deuxième tentative."
                ]
            }
        ],
        "v3": "échoué"
    },
    {
        "word": "réussir",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "verb",
        "group": "2ème groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "réussir à faire / réussir quelque chose",
        "definitions": [
            {
                "text": "Accomplir ce que l'on s'est fixé.",
                "examples": [
                    "Il a réussi à conclure l'affaire après trois mois."
                ]
            }
        ],
        "v3": "réussi"
    },
    {
        "word": "être d'accord",
        "level": "elementary",
        "theme": "agreeing_disagreeing_A2",
        "emoji": "🤝",
        "form": "verb",
        "group": "locution",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "être d'accord avec quelqu'un / être d'accord sur",
        "definitions": [
            {
                "text": "Avoir la même opinion ; dire oui à quelque chose.",
                "examples": [
                    "Ils ont convenu de se revoir le mardi suivant."
                ]
            }
        ],
        "v3": "été d'accord"
    },
    {
        "word": "remplacer",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🔄",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "remplacer quelque chose / être remplacé par",
        "definitions": [
            {
                "text": "Prendre la place de quelqu'un ou de quelque chose.",
                "examples": [
                    "Le nouveau logiciel remplacera l'ancien système l'année prochaine."
                ]
            }
        ],
        "v3": "remplacé"
    },
    {
        "word": "chercher",
        "level": "elementary",
        "theme": "job_apps_interviews_A2",
        "emoji": "🔍",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "chercher un emploi / chercher une solution",
        "definitions": [
            {
                "text": "Essayer de trouver quelque chose.",
                "examples": [
                    "Il cherche un nouvel emploi avec un meilleur équilibre entre vie professionnelle et vie privée."
                ]
            }
        ],
        "v3": "cherché"
    },
    {
        "word": "se déconnecter",
        "level": "elementary",
        "theme": "internet_social_media_A2",
        "emoji": "🚪",
        "form": "verb",
        "group": "1er groupe",
        "classification": "regular",
        "aspect": "action",
        "subtext": "se déconnecter d'un compte",
        "definitions": [
            {
                "text": "Se déconnecter d'un système informatique.",
                "examples": [
                    "Veuillez vous déconnecter du système lorsque vous quittez le bureau."
                ]
            }
        ],
        "v3": "déconnecté"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    if (window.vocabularyData) {
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();
