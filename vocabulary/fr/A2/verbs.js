// TODO: verify level classification
(function() {
const data = [
    {
        "word": "se brosser les dents",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🪥",
        "form": "verb",
        "group": "er",
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
        "v3": "brossé les dents",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "se brosser les denant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_furniture_007"
    },
    {
        "word": "se doucher",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🚿",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "prendre une douche"
        ],
        "definitions": [
            {
                "text": "Se laver le corps sous une douche.",
                "examples": [
                    "Je me douche tous les matins."
                ]
            }
        ],
        "v3": "douché",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "se douchant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_furniture_008"
    },
    {
        "word": "sembler",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤔",
        "form": "verb",
        "group": "er",
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
        "v3": "semblé",
        "auxiliary": "avoir",
        "v4": "semblant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_042"
    },
    {
        "word": "devenir",
        "level": "elementary",
        "theme": "people",
        "emoji": "🦋",
        "form": "verb",
        "group": "ir",
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
        "v3": "devenu",
        "auxiliary": "être",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_043"
    },
    {
        "word": "croire",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "group": "re",
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
        "v3": "cru",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_036"
    },
    {
        "word": "se passer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚡",
        "form": "verb",
        "group": "er",
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
        "v3": "passé",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "se passant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_037"
    },
    {
        "word": "inclure",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➕",
        "form": "verb",
        "group": "re",
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
        "v3": "inclus",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_038"
    },
    {
        "word": "continuer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "➡️",
        "form": "verb",
        "group": "er",
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
        "v3": "continué",
        "auxiliary": "avoir",
        "v4": "continuant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_039"
    },
    {
        "word": "régler",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⚙️",
        "form": "verb",
        "group": "er",
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
        "v3": "réglé",
        "auxiliary": "avoir",
        "v4": "réglant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_040"
    },
    {
        "word": "mener",
        "level": "elementary",
        "theme": "people",
        "emoji": "👑",
        "form": "verb",
        "group": "er",
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
        "v3": "mené",
        "auxiliary": "avoir",
        "v4": "menant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_044"
    },
    {
        "word": "suivre",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👣",
        "form": "verb",
        "group": "re",
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
        "v3": "suivi",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_041"
    },
    {
        "word": "créer",
        "level": "elementary",
        "theme": "social",
        "emoji": "✨",
        "form": "verb",
        "group": "er",
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
        "v3": "créé",
        "auxiliary": "avoir",
        "v4": "créant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_social_167"
    },
    {
        "word": "permettre",
        "level": "elementary",
        "theme": "people",
        "emoji": "✅",
        "form": "verb",
        "group": "re",
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
        "v3": "permis",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_045"
    },
    {
        "word": "grandir",
        "level": "elementary",
        "theme": "nature",
        "emoji": "🌱",
        "form": "verb",
        "group": "ir",
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
        "v3": "grandi",
        "auxiliary": "avoir",
        "v4": "grandissant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_environment_008"
    },
    {
        "word": "offrir",
        "level": "elementary",
        "theme": "people",
        "emoji": "🤲",
        "form": "verb",
        "group": "ir",
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
        "v3": "offert",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_046"
    },
    {
        "word": "considérer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤔",
        "form": "verb",
        "group": "er",
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
        "v3": "considéré",
        "auxiliary": "avoir",
        "v4": "considérant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_042"
    },
    {
        "word": "apparaître",
        "level": "elementary",
        "theme": "people",
        "emoji": "👻",
        "form": "verb",
        "group": "re",
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
        "v3": "apparu",
        "auxiliary": "être",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_047"
    },
    {
        "word": "servir",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🍽️",
        "form": "verb",
        "group": "ir",
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
        "v3": "servi",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_019"
    },
    {
        "word": "attendre",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💭",
        "form": "verb",
        "group": "re",
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
        "v3": "attendu",
        "auxiliary": "avoir",
        "v4": "attendant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_043"
    },
    {
        "word": "construire",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏗️",
        "form": "verb",
        "group": "re",
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
        "v3": "construit",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_044"
    },
    {
        "word": "atteindre",
        "level": "elementary",
        "theme": "travel",
        "emoji": "🏁",
        "form": "verb",
        "group": "re",
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
        "v3": "atteint",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_travel_008"
    },
    {
        "word": "tuer",
        "level": "elementary",
        "theme": "psychology",
        "emoji": "⚔️",
        "form": "verb",
        "group": "er",
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
        "v3": "tué",
        "auxiliary": "avoir",
        "v4": "tuant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_psychology_001"
    },
    {
        "word": "rester",
        "level": "elementary",
        "theme": "describing",
        "emoji": "⏳",
        "form": "verb",
        "group": "er",
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
        "v3": "resté",
        "auxiliary": "être",
        "v4": "restant",
        "etymology": {
            "origin_lang": "Latin",
            "origin_word": "restare"
        },
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_045"
    },
    {
        "word": "suggérer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "verb",
        "group": "er",
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
        "v3": "suggéré",
        "auxiliary": "avoir",
        "v4": "suggérant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_046"
    },
    {
        "word": "lever",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙋",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "lever la main",
        "synonyms": [
            "élever un enfant"
        ],
        "definitions": [
            {
                "text": "Soulever quelque chose ou s'occuper d'un enfant.",
                "examples": [
                    "Elle a levé la main pour poser une question."
                ]
            }
        ],
        "v3": "levé",
        "auxiliary": "avoir",
        "v4": "levant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_047"
    },
    {
        "word": "exiger",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📜",
        "form": "verb",
        "group": "er",
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
        "v3": "exigé",
        "auxiliary": "avoir",
        "v4": "exigant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_048"
    },
    {
        "word": "rapporter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📋",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rapporter un problème",
        "synonyms": [
            "signaler un crime"
        ],
        "definitions": [
            {
                "text": "Donner des informations sur quelque chose.",
                "examples": [
                    "Il a rapporté la voiture volée à la police."
                ]
            }
        ],
        "v3": "rapporté",
        "auxiliary": "avoir",
        "v4": "rapportant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_020"
    },
    {
        "word": "expliquer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👨‍🏫",
        "form": "verb",
        "group": "er",
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
        "v3": "expliqué",
        "auxiliary": "avoir",
        "v4": "expliquant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_021"
    },
    {
        "word": "développer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "💻",
        "form": "verb",
        "group": "er",
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
        "v3": "développé",
        "auxiliary": "avoir",
        "v4": "développant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_022"
    },
    {
        "word": "prendre sa retraite",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👴",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "retraite anticipée"
        ],
        "definitions": [
            {
                "text": "Arrêter de travailler parce qu'on a atteint un certain âge.",
                "examples": [
                    "Mon père prendra sa retraite l'année prochaine."
                ]
            }
        ],
        "v3": "pris sa retraite",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_023"
    },
    {
        "word": "avoir les moyens",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💰",
        "form": "verb",
        "group": "ir",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "ne pas avoir les moyens",
        "synonyms": [
            "s'offrir une maison"
        ],
        "definitions": [
            {
                "text": "Avoir assez d'argent pour payer quelque chose.",
                "examples": [
                    "Nous n'avons pas les moyens d'un plus grand appartement."
                ]
            }
        ],
        "v3": "eu les moyens",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_015"
    },
    {
        "word": "recycler",
        "level": "elementary",
        "theme": "nature",
        "emoji": "♻️",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "recycler le papier",
        "synonyms": [
            "bac de recyclage"
        ],
        "definitions": [
            {
                "text": "Traiter des matériaux usagés pour qu'ils soient réutilisés.",
                "examples": [
                    "Nous recyclons le papier et le verre."
                ]
            }
        ],
        "v3": "recyclé",
        "auxiliary": "avoir",
        "v4": "recyclant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_environment_009"
    },
    {
        "word": "frapper",
        "level": "elementary",
        "theme": "social",
        "emoji": "🥊",
        "form": "verb",
        "group": "er",
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
        "v3": "frappé",
        "auxiliary": "avoir",
        "v4": "frappant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_social_168"
    },
    {
        "word": "produire",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏭",
        "form": "verb",
        "group": "re",
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
        "v3": "produit",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_024"
    },
    {
        "word": "faire face",
        "level": "elementary",
        "theme": "people",
        "emoji": "👤",
        "form": "verb",
        "group": "re",
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
        "v3": "fait face",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_048"
    },
    {
        "word": "couvrir",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🧥",
        "form": "verb",
        "group": "ir",
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
        "v3": "couvert",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_049"
    },
    {
        "word": "décrire",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "group": "re",
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
        "v3": "décrit",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_025"
    },
    {
        "word": "attraper",
        "level": "elementary",
        "theme": "social",
        "emoji": "🎣",
        "form": "verb",
        "group": "er",
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
        "v3": "attrapé",
        "auxiliary": "avoir",
        "v4": "attrapant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_social_169"
    },
    {
        "word": "postuler",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "group": "er",
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
        "v3": "postulé",
        "auxiliary": "avoir",
        "v4": "postulant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_026"
    },
    {
        "word": "embaucher",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "embaucher quelqu'un",
        "synonyms": [
            "recruter une équipe"
        ],
        "definitions": [
            {
                "text": "Prendre officiellement quelqu'un comme employé.",
                "examples": [
                    "L'entreprise a embauché quinze nouvelles personnes le trimestre dernier."
                ]
            }
        ],
        "v3": "embauché",
        "auxiliary": "avoir",
        "v4": "embauchant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_027"
    },
    {
        "word": "promouvoir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "group": "ir",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "être promu",
            "promotion interne"
        ],
        "definitions": [
            {
                "text": "Déplacer un employé vers un poste supérieur.",
                "examples": [
                    "Il a été promu au poste de cadre supérieur après deux ans."
                ]
            }
        ],
        "v3": "promu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_028"
    },
    {
        "word": "démissionner",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🚪",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "démissionner d'un poste",
        "synonyms": [
            "remettre sa démission"
        ],
        "definitions": [
            {
                "text": "Quitter formellement un emploi par choix.",
                "examples": [
                    "Elle a démissionné après avoir été en désaccord avec la nouvelle stratégie."
                ]
            }
        ],
        "v3": "démissionné",
        "auxiliary": "avoir",
        "v4": "démissionnant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_029"
    },
    {
        "word": "licencier",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "licencier un employé",
        "synonyms": [
            "être licencié"
        ],
        "definitions": [
            {
                "text": "Retirer officiellement quelqu'un de son emploi.",
                "examples": [
                    "Il a été licencié pour absences répétées sans explication."
                ]
            }
        ],
        "v3": "licencié",
        "auxiliary": "avoir",
        "v4": "licenciant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_030"
    },
    {
        "word": "déléguer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📋",
        "form": "verb",
        "group": "er",
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
        "v3": "délégué",
        "auxiliary": "avoir",
        "v4": "déléguant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_031"
    },
    {
        "word": "négocier",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "group": "er",
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
        "v3": "négocié",
        "auxiliary": "avoir",
        "v4": "négociant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_032"
    },
    {
        "word": "évaluer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📊",
        "form": "verb",
        "group": "er",
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
        "v3": "évalué",
        "auxiliary": "avoir",
        "v4": "évaluant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_033"
    },
    {
        "word": "collaborer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👥",
        "form": "verb",
        "group": "er",
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
        "v3": "collaboré",
        "auxiliary": "avoir",
        "v4": "collaborant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_034"
    },
    {
        "word": "planifier",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📅",
        "form": "verb",
        "group": "er",
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
        "v3": "planifié",
        "auxiliary": "avoir",
        "v4": "planifiant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_035"
    },
    {
        "word": "investir",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📈",
        "form": "verb",
        "group": "ir",
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
        "v3": "investi",
        "auxiliary": "avoir",
        "v4": "investissant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_016"
    },
    {
        "word": "emprunter",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "verb",
        "group": "er",
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
        "v3": "emprunté",
        "auxiliary": "avoir",
        "v4": "empruntant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_017"
    },
    {
        "word": "prêter",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🤝",
        "form": "verb",
        "group": "er",
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
        "v3": "prêté",
        "auxiliary": "avoir",
        "v4": "prêtant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_018"
    },
    {
        "word": "budgétiser",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📊",
        "form": "verb",
        "group": "er",
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
        "v3": "budgétisé",
        "auxiliary": "avoir",
        "v4": "budgétisant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_019"
    },
    {
        "word": "retirer",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "🏧",
        "form": "verb",
        "group": "er",
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
        "v3": "retiré",
        "auxiliary": "avoir",
        "v4": "retirant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_020"
    },
    {
        "word": "transférer",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📲",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "transférer de l'argent",
        "synonyms": [
            "virement bancaire"
        ],
        "definitions": [
            {
                "text": "Déplacer de l'argent d'un compte à un autre.",
                "examples": [
                    "Elle a transféré le loyer sur le compte du propriétaire."
                ]
            }
        ],
        "v3": "transféré",
        "auxiliary": "avoir",
        "v4": "transférant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_021"
    },
    {
        "word": "facturer",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💳",
        "form": "verb",
        "group": "er",
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
        "v3": "facturé",
        "auxiliary": "avoir",
        "v4": "facturant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_022"
    },
    {
        "word": "réclamer",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "📜",
        "form": "verb",
        "group": "er",
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
        "v3": "réclamé",
        "auxiliary": "avoir",
        "v4": "réclamant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_023"
    },
    {
        "word": "se disputer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🗣️",
        "form": "verb",
        "group": "er",
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
        "v3": "disputé",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "se disputant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_050"
    },
    {
        "word": "faire confiance",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "group": "re",
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
        "v3": "fait confiance",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_051"
    },
    {
        "word": "soutenir",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "group": "ir",
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
        "v3": "soutenu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_052"
    },
    {
        "word": "ne pas être d'accord",
        "level": "elementary",
        "theme": "describing",
        "emoji": "👎",
        "form": "verb",
        "group": "er",
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
        "v3": "pas été d'accord",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_053"
    },
    {
        "word": "s'excuser",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🙏",
        "form": "verb",
        "group": "er",
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
        "v3": "excusé",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "s'excusant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_054"
    },
    {
        "word": "pardonner",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "group": "er",
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
        "v3": "pardonné",
        "auxiliary": "avoir",
        "v4": "pardonnant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_055"
    },
    {
        "word": "faire un compromis",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "faire des compromis",
            "trouver un compromis"
        ],
        "definitions": [
            {
                "text": "Accepter moins que l'idéal pour parvenir à un accord.",
                "examples": [
                    "Ils ont fait un compromis sur le prix et ont signé le contrat."
                ]
            }
        ],
        "v3": "fait un compromis",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_056"
    },
    {
        "word": "diagnostiquer",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🩺",
        "form": "verb",
        "group": "er",
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
        "v3": "diagnostiqué",
        "auxiliary": "avoir",
        "v4": "diagnostiquant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_020"
    },
    {
        "word": "traiter",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🩹",
        "form": "verb",
        "group": "er",
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
        "v3": "traité",
        "auxiliary": "avoir",
        "v4": "traitant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_021"
    },
    {
        "word": "prévenir",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "🛡️",
        "form": "verb",
        "group": "ir",
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
        "v3": "prévenu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_022"
    },
    {
        "word": "souffrir",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤕",
        "form": "verb",
        "group": "ir",
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
        "v3": "souffert",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_057"
    },
    {
        "word": "recommander",
        "level": "elementary",
        "theme": "describing",
        "emoji": "💡",
        "form": "verb",
        "group": "er",
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
        "v3": "recommandé",
        "auxiliary": "avoir",
        "v4": "recommandant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_058"
    },
    {
        "word": "améliorer",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📈",
        "form": "verb",
        "group": "er",
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
        "v3": "amélioré",
        "auxiliary": "avoir",
        "v4": "améliorant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_023"
    },
    {
        "word": "louer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏠",
        "form": "verb",
        "group": "er",
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
        "v3": "loué",
        "auxiliary": "avoir",
        "v4": "louant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_059"
    },
    {
        "word": "posséder",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🏡",
        "form": "verb",
        "group": "er",
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
        "v3": "possédé",
        "auxiliary": "avoir",
        "v4": "possédant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_060"
    },
    {
        "word": "réparer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔧",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "réparer quelque chose",
        "synonyms": [
            "effectuer des réparations"
        ],
        "definitions": [
            {
                "text": "Fixer quelque chose qui est cassé ou ne fonctionne pas.",
                "examples": [
                    "Le propriétaire est lent à réparer les choses dans l'appartement."
                ]
            }
        ],
        "v3": "réparé",
        "auxiliary": "avoir",
        "v4": "réparant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_061"
    },
    {
        "word": "déménager",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "📦",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "déménager de la maison",
        "synonyms": [
            "emménager"
        ],
        "definitions": [
            {
                "text": "Aller vivre ou travailler dans un endroit différent.",
                "examples": [
                    "Ils ont déménagé dans un plus grand appartement à la naissance de leur fille."
                ]
            }
        ],
        "v3": "déménagé",
        "auxiliary": "avoir",
        "v4": "déménagant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_furniture_009"
    },
    {
        "word": "décorer",
        "level": "elementary",
        "theme": "furniture",
        "emoji": "🎨",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "décorer une pièce",
        "synonyms": [
            "décoration d'intérieur"
        ],
        "definitions": [
            {
                "text": "Rendre un lieu plus attrayant, notamment par la peinture.",
                "examples": [
                    "Ils ont décoré l'appartement avant d'emménager."
                ]
            }
        ],
        "v3": "décoré",
        "auxiliary": "avoir",
        "v4": "décorant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_furniture_010"
    },
    {
        "word": "monter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏗️",
        "form": "verb",
        "group": "er",
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
        "v3": "monté",
        "auxiliary": "être",
        "v4": "montant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_036"
    },
    {
        "word": "découvrir",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🔎",
        "form": "verb",
        "group": "ir",
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
        "v3": "découvert",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_062"
    },
    {
        "word": "poursuivre",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏩",
        "form": "verb",
        "group": "re",
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
        "v3": "poursuivi",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_037"
    },
    {
        "word": "abandonner",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏳️",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "abandonner un emploi",
        "synonyms": [
            "arrêter de fumer"
        ],
        "definitions": [
            {
                "text": "Cesser d'essayer de faire quelque chose ; arrêter.",
                "examples": [
                    "Elle a abandonné son emploi pour créer sa propre entreprise."
                ]
            }
        ],
        "v3": "abandonné",
        "auxiliary": "avoir",
        "v4": "abandonnant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_038"
    },
    {
        "word": "résoudre",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔧",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "résoudre un problème",
        "synonyms": [
            "régler une situation"
        ],
        "definitions": [
            {
                "text": "Trouver une solution à un problème ou s'occuper de quelque chose.",
                "examples": [
                    "Pouvez-vous résoudre le problème avec le contrat ?"
                ]
            }
        ],
        "v3": "résolu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_039"
    },
    {
        "word": "s'occuper de",
        "level": "elementary",
        "theme": "people",
        "emoji": "👶",
        "form": "verb",
        "group": "er",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "s'occuper de quelqu'un",
        "synonyms": [
            "s'occuper d'un enfant"
        ],
        "definitions": [
            {
                "text": "Prendre soin de quelqu'un ou de quelque chose.",
                "examples": [
                    "Il s'occupe de sa mère âgée le week-end."
                ]
            }
        ],
        "v3": "occupé de",
        "auxiliary": "être",
        "reflexive": true,
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_people_049"
    },
    {
        "word": "limiter",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "📉",
        "form": "verb",
        "group": "er",
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
        "v3": "limité",
        "auxiliary": "avoir",
        "v4": "limitant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_024"
    },
    {
        "word": "assumer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "💪",
        "form": "verb",
        "group": "er",
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
        "v3": "assumé",
        "auxiliary": "avoir",
        "v4": "assumant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_040"
    },
    {
        "word": "rejeter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "👎",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "rejeter une offre",
        "synonyms": [
            "refuser un emploi"
        ],
        "definitions": [
            {
                "text": "Refuser une offre ou une demande.",
                "examples": [
                    "Elle a rejeté l'offre d'emploi parce que le salaire était trop bas."
                ]
            }
        ],
        "v3": "rejeté",
        "auxiliary": "avoir",
        "v4": "rejetant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_041"
    },
    {
        "word": "remettre à plus tard",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "⏳",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "reporter une réunion",
            "différer une décision"
        ],
        "definitions": [
            {
                "text": "Reporter quelque chose à plus tard.",
                "examples": [
                    "Il continue de remettre à plus tard la conversation sur son salaire."
                ]
            }
        ],
        "v3": "remis à plus tard",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_042"
    },
    {
        "word": "devoir",
        "level": "elementary",
        "theme": "numbers",
        "emoji": "💸",
        "form": "verb",
        "group": "ir",
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
        "v3": "dû",
        "auxiliary": "avoir",
        "tenses": {
            "present_simple": {
                "positive": [
                    "dois",
                    "dois",
                    "doit",
                    "devons",
                    "devez",
                    "doivent"
                ]
            }
        },
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_numbers_024"
    },
    {
        "word": "inviter",
        "level": "elementary",
        "theme": "describing",
        "emoji": "📩",
        "form": "verb",
        "group": "er",
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
        "v3": "invité",
        "auxiliary": "avoir",
        "v4": "invitant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_063"
    },
    {
        "word": "confirmer",
        "level": "elementary",
        "theme": "describing",
        "emoji": "✅",
        "form": "verb",
        "group": "er",
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
        "v3": "confirmé",
        "auxiliary": "avoir",
        "v4": "confirmant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_064"
    },
    {
        "word": "contacter",
        "level": "elementary",
        "theme": "technology",
        "emoji": "📞",
        "form": "verb",
        "group": "er",
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
        "v3": "contacté",
        "auxiliary": "avoir",
        "v4": "contactant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_technology_009"
    },
    {
        "word": "se plaindre",
        "level": "elementary",
        "theme": "describing",
        "emoji": "😠",
        "form": "verb",
        "group": "er",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "se plaindre de",
        "synonyms": [
            "porter plainte"
        ],
        "definitions": [
            {
                "text": "Exprimer son mécontentement à propos de quelque chose.",
                "examples": [
                    "Elle s'est plainte du bruit provenant de l'appartement du dessus."
                ]
            }
        ],
        "v3": "plaint",
        "auxiliary": "être",
        "reflexive": true,
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_065"
    },
    {
        "word": "discuter",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🗣️",
        "form": "verb",
        "group": "er",
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
        "v3": "discuté",
        "auxiliary": "avoir",
        "v4": "discutant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_066"
    },
    {
        "word": "présenter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📊",
        "form": "verb",
        "group": "er",
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
        "v3": "présenté",
        "auxiliary": "avoir",
        "v4": "présentant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_043"
    },
    {
        "word": "accepter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "✅",
        "form": "verb",
        "group": "er",
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
        "v3": "accepté",
        "auxiliary": "avoir",
        "v4": "acceptant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_044"
    },
    {
        "word": "refuser",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "group": "er",
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
        "v3": "refusé",
        "auxiliary": "avoir",
        "v4": "refusant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_045"
    },
    {
        "word": "perdre du poids",
        "level": "elementary",
        "theme": "food_drink",
        "emoji": "⚖️",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "essayer de perdre du poids",
        "synonyms": [
            "perdre quelques kilos"
        ],
        "definitions": [
            {
                "text": "Devenir plus léger ; réduire le poids corporel.",
                "examples": [
                    "Il a perdu dix kilos après avoir changé son alimentation et son mode de vie."
                ]
            }
        ],
        "v3": "perdu du poids",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_food_drink_025"
    },
    {
        "word": "augmenter",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "group": "er",
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
        "v3": "augmenté",
        "auxiliary": "avoir",
        "v4": "augmentant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_046"
    },
    {
        "word": "réduire",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📉",
        "form": "verb",
        "group": "re",
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
        "v3": "réduit",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_047"
    },
    {
        "word": "améliorer ses compétences",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📈",
        "form": "verb",
        "group": "er",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "",
        "synonyms": [
            "améliorer la performance",
            "s'améliorer"
        ],
        "definitions": [
            {
                "text": "Rendre quelque chose de meilleur ou devenir meilleur.",
                "examples": [
                    "Elle a considérablement amélioré ses compétences en prise de parole en public."
                ]
            }
        ],
        "v3": "amélioré ses compétences",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_048"
    },
    {
        "word": "fournir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤲",
        "form": "verb",
        "group": "ir",
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
        "v3": "fourni",
        "auxiliary": "avoir",
        "v4": "fournissant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_049"
    },
    {
        "word": "résoudre",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🧩",
        "form": "verb",
        "group": "re",
        "classification": "irregular",
        "aspect": "action",
        "subtext": "résoudre un mystère",
        "synonyms": [
            "trouver une solution"
        ],
        "definitions": [
            {
                "text": "Trouver une réponse à un problème.",
                "examples": [
                    "Il résout rapidement les problèmes sous pression."
                ]
            }
        ],
        "v3": "résolu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_050"
    },
    {
        "word": "partager",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🤝",
        "form": "verb",
        "group": "er",
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
        "v3": "partagé",
        "auxiliary": "avoir",
        "v4": "partagant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_051"
    },
    {
        "word": "rejoindre",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "➕",
        "form": "verb",
        "group": "re",
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
        "v3": "rejoint",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_052"
    },
    {
        "word": "recevoir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📩",
        "form": "verb",
        "group": "ir",
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
        "v3": "reçu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_053"
    },
    {
        "word": "contenir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📦",
        "form": "verb",
        "group": "ir",
        "classification": "irregular",
        "aspect": "stative",
        "subtext": "contenir des informations",
        "synonyms": [
            "le fichier contient"
        ],
        "definitions": [
            {
                "text": "Avoir quelque chose à l'intérieur ; inclure.",
                "examples": [
                    "Le rapport contient des projections financières détaillées."
                ]
            }
        ],
        "v3": "contenu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_054"
    },
    {
        "word": "prévoir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📅",
        "form": "verb",
        "group": "ir",
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
        "v3": "prévu",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_055"
    },
    {
        "word": "préparer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "📝",
        "form": "verb",
        "group": "er",
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
        "v3": "préparé",
        "auxiliary": "avoir",
        "v4": "préparant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_056"
    },
    {
        "word": "échouer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "❌",
        "form": "verb",
        "group": "er",
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
        "v3": "échoué",
        "auxiliary": "avoir",
        "v4": "échouant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_057"
    },
    {
        "word": "réussir",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🏆",
        "form": "verb",
        "group": "ir",
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
        "v3": "réussi",
        "auxiliary": "avoir",
        "v4": "réussissant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_058"
    },
    {
        "word": "être d'accord",
        "level": "elementary",
        "theme": "describing",
        "emoji": "🤝",
        "form": "verb",
        "group": "re",
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
        "v3": "été d'accord",
        "auxiliary": "avoir",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_describing_067"
    },
    {
        "word": "remplacer",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔄",
        "form": "verb",
        "group": "er",
        "classification": "regular",
        "aspect": "action",
        "subtext": "remplacer quelque chose",
        "synonyms": [
            "être remplacé par"
        ],
        "definitions": [
            {
                "text": "Prendre la place de quelqu'un ou de quelque chose.",
                "examples": [
                    "Le nouveau logiciel remplacera l'ancien système l'année prochaine."
                ]
            }
        ],
        "v3": "remplacé",
        "auxiliary": "avoir",
        "v4": "remplacant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_059"
    },
    {
        "word": "chercher",
        "level": "elementary",
        "theme": "jobs",
        "emoji": "🔍",
        "form": "verb",
        "group": "er",
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
        "v3": "cherché",
        "auxiliary": "avoir",
        "v4": "cherchant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_work_060"
    },
    {
        "word": "se déconnecter",
        "level": "elementary",
        "theme": "technology",
        "emoji": "🚪",
        "form": "verb",
        "group": "er",
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
        "v3": "déconnecté",
        "auxiliary": "être",
        "reflexive": true,
        "v4": "se déconnectant",
        "lang": "fr",
        "transcription": "",
        "id": "fr_elementary_technology_010"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();