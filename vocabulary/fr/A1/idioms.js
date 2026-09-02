(function() {
  const lang = "fr";
  const data = [
  {
    "id": "fr_starter_idioms_001",
    "word": "avoir faim",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir le besoin physique de manger.",
        "examples": [
          "J'ai très faim, allons manger quelque chose."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "fr_starter_idioms_002",
    "word": "avoir soif",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir le besoin physique de boire.",
        "examples": [
          "Après cette marche, j'ai vraiment soif."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "fr_starter_idioms_003",
    "word": "avoir chaud",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir une température élevée au niveau du corps.",
        "examples": [
          "Ouvre la fenêtre, j'ai très chaud."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "weather"
  },
  {
    "id": "fr_starter_idioms_004",
    "word": "avoir froid",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir une température basse au niveau du corps.",
        "examples": [
          "En hiver, il faut bien s'habiller pour ne pas avoir froid."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "weather"
  },
  {
    "id": "fr_starter_idioms_005",
    "word": "avoir peur",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir de la crainte ou de l'inquiétude.",
        "examples": [
          "Le petit garçon a peur du noir."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_006",
    "word": "avoir besoin de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nécessiter quelque chose ou quelqu'un.",
        "examples": [
          "J'ai besoin d'un stylo pour écrire cette lettre."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_007",
    "word": "avoir l'air",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sembler ou paraître d'une certaine façon.",
        "examples": [
          "Tu as l'air très content aujourd'hui."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_008",
    "word": "avoir mal à",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir une douleur physique dans une partie du corps.",
        "examples": [
          "J'ai mal à la tête depuis ce matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "fr_starter_idioms_009",
    "word": "avoir envie de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Désirer faire quelque chose ou avoir un objet.",
        "examples": [
          "J'ai envie de prendre une glace à la vanille."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_010",
    "word": "avoir de la chance",
    "form": "idiom",
    "definitions": [
      {
        "text": "Bénéficier d'une situation très favorable.",
        "examples": [
          "Elle a de la chance de vivre près de la mer."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_011",
    "word": "avoir le temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Disposer de la durée nécessaire pour faire une chose.",
        "examples": [
          "Nous avons le temps de boire un café ensemble."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_012",
    "word": "avoir hâte de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Être très impatient de faire quelque chose.",
        "examples": [
          "J'ai hâte d'aller en vacances la semaine prochaine."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_013",
    "word": "avoir raison",
    "form": "idiom",
    "definitions": [
      {
        "text": "Penser ou exprimer ce qui est vrai et correct.",
        "examples": [
          "Tu as raison, ce restaurant est excellent."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_014",
    "word": "avoir tort",
    "form": "idiom",
    "definitions": [
      {
        "text": "Se tromper dans son opinion ou ses actes.",
        "examples": [
          "Il a reconnu qu'il avait tort de partir si vite."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_015",
    "word": "avoir sommeil",
    "form": "idiom",
    "definitions": [
      {
        "text": "Être fatigué et ressentir le besoin de dormir.",
        "examples": [
          "Les enfants ont sommeil, il faut aller au lit."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "fr_starter_idioms_016",
    "word": "être en retard",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arriver après l'heure qui était convenue.",
        "examples": [
          "Désolé, je suis en retard à cause des embouteillages."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_017",
    "word": "être en avance",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arriver avant l'heure prévue pour un rendez-vous.",
        "examples": [
          "Elle est arrivée au bureau avec dix minutes d'avance."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_018",
    "word": "être à l'heure",
    "form": "idiom",
    "definitions": [
      {
        "text": "Arriver exactement au moment convenu.",
        "examples": [
          "Le train pour Paris est arrivé parfaitement à l'heure."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_019",
    "word": "être en forme",
    "form": "idiom",
    "definitions": [
      {
        "text": "Se sentir fort, vigoureux et en excellente santé.",
        "examples": [
          "Je fais du sport tous les jours pour être en forme."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "fr_starter_idioms_020",
    "word": "être d'accord",
    "form": "idiom",
    "definitions": [
      {
        "text": "Partager l'opinion ou l'avis de quelqu'un.",
        "examples": [
          "Je suis tout à fait d'accord avec ta proposition."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_021",
    "word": "être prêt",
    "form": "idiom",
    "definitions": [
      {
        "text": "Être totalement préparé pour une activité.",
        "examples": [
          "Tout le monde est prêt pour commencer la réunion."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_022",
    "word": "être occupé",
    "form": "idiom",
    "definitions": [
      {
        "text": "Avoir beaucoup de choses à faire à un moment donné.",
        "examples": [
          "Il ne peut pas répondre, il est très occupé."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "work"
  },
  {
    "id": "fr_starter_idioms_023",
    "word": "être désolé",
    "form": "idiom",
    "definitions": [
      {
        "text": "Regretter profondément une situation ou s'excuser.",
        "examples": [
          "Je suis désolé d'avoir oublié ton prénom."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_024",
    "word": "être",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir de l'étonnement face à un événement inattendu.",
        "examples": [
          "Elle a été surprise de recevoir ce magnifique cadeau."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_025",
    "word": "faire du sport",
    "form": "idiom",
    "definitions": [
      {
        "text": "Pratiquer régulièrement une activité physique.",
        "examples": [
          "Mon frère aime faire du sport le samedi matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_026",
    "word": "faire les courses",
    "form": "idiom",
    "definitions": [
      {
        "text": "Acheter de la nourriture et des produits pour la maison.",
        "examples": [
          "Nous faisons les courses dans ce grand supermarché."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "fr_starter_idioms_027",
    "word": "faire la fête",
    "form": "idiom",
    "definitions": [
      {
        "text": "S'amuser joyeusement lors d'une célébration.",
        "examples": [
          "Toute la famille s'est réunie pour faire la fête."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "fr_starter_idioms_028",
    "word": "faire la cuisine",
    "form": "idiom",
    "definitions": [
      {
        "text": "Préparer des repas et cuisiner des plats.",
        "examples": [
          "Son père adore faire la cuisine pour ses invités."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "fr_starter_idioms_029",
    "word": "faire attention",
    "form": "idiom",
    "definitions": [
      {
        "text": "Être prudent et vigilant face à un danger.",
        "examples": [
          "Fais attention en traversant la rue à cette heure."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "fr_starter_idioms_030",
    "word": "faire la connaissance de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Rencontrer une personne pour la toute première fois.",
        "examples": [
          "Je suis ravi de faire votre connaissance aujourd'hui."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "fr_starter_idioms_031",
    "word": "faire la queue",
    "form": "idiom",
    "definitions": [
      {
        "text": "Attendre son tour dans une file d'attente.",
        "examples": [
          "Nous avons dû faire la queue pour acheter les billets."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_032",
    "word": "faire du vélo",
    "form": "idiom",
    "definitions": [
      {
        "text": "Se déplacer ou se promener à bicyclette.",
        "examples": [
          "Le week-end, ils font du vélo dans le grand parc."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_033",
    "word": "faire la vaisselle",
    "form": "idiom",
    "definitions": [
      {
        "text": "Laver la vaisselle sale après le repas.",
        "examples": [
          "C'est à mon tour de faire la vaisselle ce soir."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "fr_starter_idioms_034",
    "word": "faire le ménage",
    "form": "idiom",
    "definitions": [
      {
        "text": "Nettoyer et ranger les pièces d'un logement.",
        "examples": [
          "Elle fait le ménage tous les samedis matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "fr_starter_idioms_035",
    "word": "prendre une douche",
    "form": "idiom",
    "definitions": [
      {
        "text": "Se laver le corps sous un jet d'eau.",
        "examples": [
          "Je prends une douche bien chaude tous les matins."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_036",
    "word": "prendre un bain",
    "form": "idiom",
    "definitions": [
      {
        "text": "Se laver ou se détendre dans une baignoire.",
        "examples": [
          "Rien de tel que prendre un bain chaud après le travail."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_037",
    "word": "prendre un café",
    "form": "idiom",
    "definitions": [
      {
        "text": "Boire une tasse de café, souvent en compagnie.",
        "examples": [
          "Voulez-vous prendre un café avec moi cet après-midi ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "fr_starter_idioms_038",
    "word": "prendre son temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Agir calmement sans se presser.",
        "examples": [
          "Prends ton temps pour lire la première page du livre."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_039",
    "word": "prendre le bus",
    "form": "idiom",
    "definitions": [
      {
        "text": "Emprunter l'autobus comme moyen de transport.",
        "examples": [
          "Elle prend le bus chaque matin pour aller au lycée."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "fr_starter_idioms_040",
    "word": "prendre une décision",
    "form": "idiom",
    "definitions": [
      {
        "text": "Faire un choix ferme après avoir réfléchi.",
        "examples": [
          "Il doit prendre une décision importante pour son avenir."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_041",
    "word": "tomber amoureux",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir soudainement de l'amour pour quelqu'un.",
        "examples": [
          "Il est tombé amoureux pendant ses vacances en France."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "relationships"
  },
  {
    "id": "fr_starter_idioms_042",
    "word": "tomber malade",
    "form": "idiom",
    "definitions": [
      {
        "text": "Devenir subitement malade.",
        "examples": [
          "Mon collègue est tombé malade juste avant les vacances."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "health"
  },
  {
    "id": "fr_starter_idioms_043",
    "word": "poser une question",
    "form": "idiom",
    "definitions": [
      {
        "text": "Demander une information à une personne.",
        "examples": [
          "Puis-je vous poser une question sur votre parcours ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_044",
    "word": "passer du temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Consacrer des moments à une activité ou des proches.",
        "examples": [
          "J'aime passer du temps en famille pendant le week-end."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "social"
  },
  {
    "id": "fr_starter_idioms_045",
    "word": "passer un examen",
    "form": "idiom",
    "definitions": [
      {
        "text": "Subir une épreuve d'évaluation scolaire ou professionnelle.",
        "examples": [
          "Les étudiants passent leur examen de français demain."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "education"
  },
  {
    "id": "fr_starter_idioms_046",
    "word": "c'est la vie",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression pour accepter une déception inévitable.",
        "examples": [
          "Notre train est parti, mais c'est la vie."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "philosophy"
  },
  {
    "id": "fr_starter_idioms_047",
    "word": "d'accord",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression marquant l'approbation ou l'acceptation.",
        "examples": [
          "D'accord, nous pouvons nous retrouver devant le cinéma."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_048",
    "word": "tout à fait",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression marquant un accord absolu et total.",
        "examples": [
          "Vous avez tout à fait raison sur ce sujet précis."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_049",
    "word": "du coup",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression familière signifiant par conséquent ou alors.",
        "examples": [
          "Il pleuvait fort, du coup nous sommes restés chez nous."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_050",
    "word": "en tout cas",
    "form": "idiom",
    "definitions": [
      {
        "text": "De toute façon, quelles que soient les circonstances.",
        "examples": [
          "En tout cas, merci beaucoup pour ton aide précieuse."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_051",
    "word": "s'il vous plaît",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule de politesse pour demander quelque chose.",
        "examples": [
          "Un café s'il vous plaît, monsieur le serveur."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_052",
    "word": "au revoir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule traditionnelle pour se saluer en se quittant.",
        "examples": [
          "Au revoir et à la semaine prochaine !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_053",
    "word": "à bientôt",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation utilisée quand on compte se revoir sous peu.",
        "examples": [
          "Merci pour la visite et à bientôt mes amis !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_054",
    "word": "à tout à l'heure",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation utilisée quand on doit se revoir le jour même.",
        "examples": [
          "Je vais à la poste, à tout à l'heure !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_055",
    "word": "bon voyage",
    "form": "idiom",
    "definitions": [
      {
        "text": "Souhait adressé à quelqu'un qui part en déplacement.",
        "examples": [
          "Bon voyage et amusez-vous bien en Italie !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "travel"
  },
  {
    "id": "fr_starter_idioms_056",
    "word": "bonne chance",
    "form": "idiom",
    "definitions": [
      {
        "text": "Souhait d'encouragement face à une épreuve.",
        "examples": [
          "Bonne chance pour votre entretien d'embauche !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "success"
  },
  {
    "id": "fr_starter_idioms_057",
    "word": "bon appétit",
    "form": "idiom",
    "definitions": [
      {
        "text": "Souhait amical formulé au début d'un repas.",
        "examples": [
          "Le dîner est servi, bon appétit à tous !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "fr_starter_idioms_058",
    "word": "de rien",
    "form": "idiom",
    "definitions": [
      {
        "text": "Réponse polie à quelqu'un qui vous remercie.",
        "examples": [
          "Merci pour l'aide ! — De rien, c'est normal."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_059",
    "word": "pas de problème",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression rassurante indiquant qu'il n'y a pas de difficulté.",
        "examples": [
          "Tu peux arriver en retard, pas de problème."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_060",
    "word": "avec plaisir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule chaleureuse pour accepter une invitation ou rendre service.",
        "examples": [
          "Veux-tu venir dîner ? — Avec plaisir !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_061",
    "word": "par exemple",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule introduisant une illustration ou un modèle.",
        "examples": [
          "J'aime les fruits d'été, par exemple les pêches."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_062",
    "word": "par contre",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression introduisant un contraste ou une opposition.",
        "examples": [
          "Ce livre est long, par contre l'histoire est passionnante."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_063",
    "word": "en fait",
    "form": "idiom",
    "definitions": [
      {
        "text": "Expression précisant ou rectifiant une affirmation.",
        "examples": [
          "Je croyais qu'il était chez lui, mais en fait il travaille."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_064",
    "word": "au fait",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule pour introduire une nouvelle idée dans la conversation.",
        "examples": [
          "Au fait, as-tu des nouvelles de ta sœur ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_065",
    "word": "en plus",
    "form": "idiom",
    "definitions": [
      {
        "text": "De surcroît ou en supplément d'une chose.",
        "examples": [
          "Il fait très chaud et en plus il n'y a pas de vent."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_066",
    "word": "comme ci comme ça",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ni très bien ni très mal, de manière moyenne.",
        "examples": [
          "Comment vas-tu ce matin ? — Comme ci comme ça."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_067",
    "word": "à demain",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation employée en quittant quelqu'un qu'on revoit le lendemain.",
        "examples": [
          "Bonne soirée et à demain matin au bureau !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_068",
    "word": "à ce soir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation employée quand on retrouve quelqu'un le soir même.",
        "examples": [
          "Je pars travailler, à ce soir mon cher."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_069",
    "word": "à plus tard",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation amicale quand on se revoit plus tard.",
        "examples": [
          "Je dois y aller maintenant, à plus tard !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_070",
    "word": "en haut",
    "form": "idiom",
    "definitions": [
      {
        "text": "Situé à une hauteur élevée ou à l'étage supérieur.",
        "examples": [
          "Les chambres se trouvent en haut de l'escalier."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_071",
    "word": "en bas",
    "form": "idiom",
    "definitions": [
      {
        "text": "Situé au niveau du sol ou au rez-de-chaussée.",
        "examples": [
          "Le jardinier attend en bas près de la porte."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_072",
    "word": "à gauche",
    "form": "idiom",
    "definitions": [
      {
        "text": "Situé du côté gauche par rapport au corps.",
        "examples": [
          "Tournez à gauche après la boulangerie."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_073",
    "word": "à droite",
    "form": "idiom",
    "definitions": [
      {
        "text": "Situé du côté droit par rapport au corps.",
        "examples": [
          "La pharmacie se trouve juste sur votre droite."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_074",
    "word": "en face",
    "form": "idiom",
    "definitions": [
      {
        "text": "Directement opposé dans l'espace.",
        "examples": [
          "Le musée est situé juste en face de la gare."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_075",
    "word": "tout droit",
    "form": "idiom",
    "definitions": [
      {
        "text": "En suivant une ligne directe sans tourner.",
        "examples": [
          "Continuez tout droit pendant cent mètres."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_076",
    "word": "à pied",
    "form": "idiom",
    "definitions": [
      {
        "text": "En marchant sans véhicule.",
        "examples": [
          "Nous allons au marché à pied ce matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "fr_starter_idioms_077",
    "word": "en bus",
    "form": "idiom",
    "definitions": [
      {
        "text": "En utilisant l'autobus.",
        "examples": [
          "Il voyage souvent en bus pour aller en ville."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "fr_starter_idioms_078",
    "word": "en voiture",
    "form": "idiom",
    "definitions": [
      {
        "text": "En utilisant une automobile.",
        "examples": [
          "Partons-nous en voiture ou en train ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "fr_starter_idioms_079",
    "word": "en train",
    "form": "idiom",
    "definitions": [
      {
        "text": "En utilisant le chemin de fer.",
        "examples": [
          "Le trajet en train est rapide et confortable."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "transport"
  },
  {
    "id": "fr_starter_idioms_080",
    "word": "bonne journée",
    "form": "idiom",
    "definitions": [
      {
        "text": "Souhait amical adressé le matin ou dans la journée.",
        "examples": [
          "Au revoir madame, passe une excellente journée !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_081",
    "word": "bonsoir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Salutation employée en fin d'après-midi ou le soir.",
        "examples": [
          "Bonsoir à tous et bienvenue à la soirée."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_082",
    "word": "bonne nuit",
    "form": "idiom",
    "definitions": [
      {
        "text": "Souhait adressé à quelqu'un qui va dormir.",
        "examples": [
          "Il est tard, bonne nuit les enfants."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_083",
    "word": "en ce moment",
    "form": "idiom",
    "definitions": [
      {
        "text": "Actuellement ou à l'époque présente.",
        "examples": [
          "Il habite à Lyon en ce moment pour ses études."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_084",
    "word": "ce soir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Pendant la soirée du jour même.",
        "examples": [
          "Nous allons au cinéma ce soir avec des amis."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_085",
    "word": "demain matin",
    "form": "idiom",
    "definitions": [
      {
        "text": "Pendant la première partie de la journée de demain.",
        "examples": [
          "Le rendez-vous est fixé à demain matin neuf heures."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_086",
    "word": "hier soir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Pendant la soirée de la journée précédente.",
        "examples": [
          "Hier soir, nous avons regardé un très bon film."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_087",
    "word": "tous les jours",
    "form": "idiom",
    "definitions": [
      {
        "text": "Chaque jour sans exception.",
        "examples": [
          "Elle prend une marche dans le parc tous les jours."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_088",
    "word": "tout le temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Continuellement ou très fréquemment.",
        "examples": [
          "Mon voisin écoute de la musique tout le temps."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_089",
    "word": "un peu de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Une petite quantité de quelque chose.",
        "examples": [
          "Voulez-vous un peu de sucre dans votre café ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_090",
    "word": "beaucoup de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Une grande quantité de personnes ou d'objets.",
        "examples": [
          "Il y a beaucoup de monde sur la plage aujourd'hui."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_091",
    "word": "trop de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Une quantité excessive de quelque chose.",
        "examples": [
          "Ne mets pas trop de sel dans la soupe."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_092",
    "word": "assez de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Une quantité suffisante de quelque chose.",
        "examples": [
          "Avez-vous assez d'argent pour le billet ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_093",
    "word": "en train de",
    "form": "idiom",
    "definitions": [
      {
        "text": "En cours de réalisation d'une action.",
        "examples": [
          "Chut, le bébé est en train de dormir dans sa chambre."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "fr_starter_idioms_094",
    "word": "sur le point de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Très proche d'accomplir une action.",
        "examples": [
          "Le train est sur le point de partir du quai."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_095",
    "word": "au bout de",
    "form": "idiom",
    "definitions": [
      {
        "text": "À l'extrémité spatiale ou temporelle de quelque chose.",
        "examples": [
          "Au bout de la rue, tournez à la première à droite."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_096",
    "word": "en face de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Vis-à-vis de quelque chose ou quelqu'un.",
        "examples": [
          "J'habite juste en face du grand parc municipal."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_097",
    "word": "à côté de",
    "form": "idiom",
    "definitions": [
      {
        "text": "À proximité immédiate d'un lieu ou d'une personne.",
        "examples": [
          "La boulangerie est située à côté de la poste."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_098",
    "word": "au milieu de",
    "form": "idiom",
    "definitions": [
      {
        "text": "Au centre d'un espace ou d'un groupe.",
        "examples": [
          "Il y a un grand arbre au milieu du jardin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_099",
    "word": "en dessous de",
    "form": "idiom",
    "definitions": [
      {
        "text": "À un niveau inférieur à un autre objet.",
        "examples": [
          "Le chat dort paisiblement en dessous de la table."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_100",
    "word": "au-dessus de",
    "form": "idiom",
    "definitions": [
      {
        "text": "À un niveau supérieur à un autre objet.",
        "examples": [
          "Il y a une belle peinture au-dessus du lit."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_101",
    "word": "à cause de",
    "form": "idiom",
    "definitions": [
      {
        "text": "En raison de quelque chose de généralement négatif.",
        "examples": [
          "Le match est annulé à cause de la forte pluie."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "reasons"
  },
  {
    "id": "fr_starter_idioms_102",
    "word": "grâce à",
    "form": "idiom",
    "definitions": [
      {
        "text": "Grâce au secours ou à l'aide favorable de quelqu'un.",
        "examples": [
          "J'ai réussi mon examen grâce à tes conseils."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "reasons"
  },
  {
    "id": "fr_starter_idioms_103",
    "word": "selon moi",
    "form": "idiom",
    "definitions": [
      {
        "text": "D'après mon opinion personnelle.",
        "examples": [
          "Selon moi, c'est la meilleure idée de la journée."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_104",
    "word": "à mon avis",
    "form": "idiom",
    "definitions": [
      {
        "text": "Selon ma manière de juger une situation.",
        "examples": [
          "À mon avis, ce film mérite de gagner un prix."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_105",
    "word": "pour l'instant",
    "form": "idiom",
    "definitions": [
      {
        "text": "Actuellement et jusqu'à nouvel ordre.",
        "examples": [
          "Pour l'instant, tout se passe très bien."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_106",
    "word": "en général",
    "form": "idiom",
    "definitions": [
      {
        "text": "De manière habituelle et ordinaire.",
        "examples": [
          "En général, je me lève à sept heures le matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_107",
    "word": "d'habitude",
    "form": "idiom",
    "definitions": [
      {
        "text": "Selon les coutumes ou l'usage ordinaire.",
        "examples": [
          "D'habitude, elle prend son petit-déjeuner au balcon."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "daily_life"
  },
  {
    "id": "fr_starter_idioms_108",
    "word": "en effet",
    "form": "idiom",
    "definitions": [
      {
        "text": "Confirmant une affirmation ou apportant une preuve.",
        "examples": [
          "Il fait froid, en effet le thermomètre indique zéro."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_109",
    "word": "tout de suite",
    "form": "idiom",
    "definitions": [
      {
        "text": "Immédiatement et sans attendre.",
        "examples": [
          "Venez ici tout de suite, s'il vous plaît !"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_110",
    "word": "à l'avenir",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans le temps futur à venir.",
        "examples": [
          "À l'avenir, faites attention à bien vérifier l'adresse."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_111",
    "word": "par terre",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sur le sol.",
        "examples": [
          "Attention, ton sac est tombé par terre."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_112",
    "word": "au début",
    "form": "idiom",
    "definitions": [
      {
        "text": "À la première étape ou période d'un événement.",
        "examples": [
          "Au début du film, la musique est très douce."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_113",
    "word": "à la fin",
    "form": "idiom",
    "definitions": [
      {
        "text": "Au moment qui termine une période ou un livre.",
        "examples": [
          "À la fin de la journée, nous étions très fatigués."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_114",
    "word": "de plus",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ajoutant un élément supplémentaire d'information.",
        "examples": [
          "Le logement est grand, de plus le loyer est abordable."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_115",
    "word": "d'un côté",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule introduisant une première perspective.",
        "examples": [
          "D'un côté le travail est dur, de l'autre il est passionnant."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_116",
    "word": "de l'autre côté",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule introduisant un aspect opposé.",
        "examples": [
          "Le magasin se trouve de l'autre côté de la rue."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_117",
    "word": "tout à coup",
    "form": "idiom",
    "definitions": [
      {
        "text": "Soudainement et de manière imprévue.",
        "examples": [
          "Tout à coup, les lumières de la salle s'éteignent."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_118",
    "word": "de nouveau",
    "form": "idiom",
    "definitions": [
      {
        "text": "Une seconde fois ou encore une fois.",
        "examples": [
          "Il a essayé de nouveau et il a réussi."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "fr_starter_idioms_119",
    "word": "en même temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Simultanément au même moment exact.",
        "examples": [
          "Ils sont arrivés en même temps à la gare."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_120",
    "word": "c'est-à-dire",
    "form": "idiom",
    "definitions": [
      {
        "text": "Formule employée pour expliciter ou reformuler.",
        "examples": [
          "Nous partons demain, c'est-à-dire samedi matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_121",
    "word": "au moins",
    "form": "idiom",
    "definitions": [
      {
        "text": "En indiquant une quantité minimale.",
        "examples": [
          "Prends au moins un fruit pour ton goûter."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_122",
    "word": "plus ou moins",
    "form": "idiom",
    "definitions": [
      {
        "text": "De manière approximative et estimée.",
        "examples": [
          "Le trajet dure plus ou moins trente minutes."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "quantities"
  },
  {
    "id": "fr_starter_idioms_123",
    "word": "sans doute",
    "form": "idiom",
    "definitions": [
      {
        "text": "Très probablement et avec une grande chance.",
        "examples": [
          "Il viendra sans doute nous voir ce week-end."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "mind"
  },
  {
    "id": "fr_starter_idioms_124",
    "word": "en vacances",
    "form": "idiom",
    "definitions": [
      {
        "text": "En période de repos ou de congés payés.",
        "examples": [
          "Mes voisins sont partis en vacances en Espagne."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "travel"
  },
  {
    "id": "fr_starter_idioms_125",
    "word": "en cours",
    "form": "idiom",
    "definitions": [
      {
        "text": "En train de se dérouler ou d'être exécuté.",
        "examples": [
          "La réunion est actuellement en cours dans la salle."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "work"
  },
  {
    "id": "fr_starter_idioms_126",
    "word": "en panne",
    "form": "idiom",
    "definitions": [
      {
        "text": "Qui a cessé de fonctionner en raison d'un problème.",
        "examples": [
          "L'ascenseur est en panne depuis ce matin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "tech"
  },
  {
    "id": "fr_starter_idioms_127",
    "word": "en paix",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans un état de tranquillité et sans conflit.",
        "examples": [
          "Laissez-moi lire mon livre en paix, s'il vous plaît."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_128",
    "word": "en colère",
    "form": "idiom",
    "definitions": [
      {
        "text": "Ressentir un très fort mécontentement.",
        "examples": [
          "Le client était très en colère après l'erreur."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "emotions"
  },
  {
    "id": "fr_starter_idioms_129",
    "word": "en solde",
    "form": "idiom",
    "definitions": [
      {
        "text": "Vendu à prix réduit pendant les promotions.",
        "examples": [
          "J'ai acheté cette belle veste en solde."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "fr_starter_idioms_130",
    "word": "au marché",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sur la place où l'on vend des vivres.",
        "examples": [
          "Elle achète des légumes frais au marché tous les dimanches."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "shopping"
  },
  {
    "id": "fr_starter_idioms_131",
    "word": "au restaurant",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans un établissement où l'on sert des repas.",
        "examples": [
          "Ce soir, nous allons dîner au restaurant italien."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  },
  {
    "id": "fr_starter_idioms_132",
    "word": "au cinéma",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans une salle de projection de films.",
        "examples": [
          "Que voulez-vous aller voir au cinéma ce soir ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "fr_starter_idioms_133",
    "word": "à la maison",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans son domicile ou chez soi.",
        "examples": [
          "Dimanche, nous restons au chaud à la maison."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "fr_starter_idioms_134",
    "word": "en ville",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans la zone urbaine ou le centre-ville.",
        "examples": [
          "J'ai plusieurs démarches à faire en ville."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_135",
    "word": "à la campagne",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans les zones rurales hors des villes.",
        "examples": [
          "Ils ont une petite maison agréable à la campagne."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_136",
    "word": "à la montagne",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans une région élevée de relief.",
        "examples": [
          "En hiver, nous aimons skier à la montagne."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "locations"
  },
  {
    "id": "fr_starter_idioms_137",
    "word": "à la plage",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sur le bord de mer de sable ou de galets.",
        "examples": [
          "Les enfants adorent jouer avec le sable à la plage."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "fr_starter_idioms_138",
    "word": "de temps en temps",
    "form": "idiom",
    "definitions": [
      {
        "text": "Occasionnellement et parfois.",
        "examples": [
          "Je vais au théâtre de temps en temps."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_139",
    "word": "un jour",
    "form": "idiom",
    "definitions": [
      {
        "text": "À un moment indéterminé dans le passé ou futur.",
        "examples": [
          "Un jour, j'aimerais voyager autour du monde."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_140",
    "word": "toujours",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sans cesse ou en tout temps.",
        "examples": [
          "Il dit toujours la vérité à ses amis."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_141",
    "word": "jamais",
    "form": "idiom",
    "definitions": [
      {
        "text": "En aucun temps et aucune occasion.",
        "examples": [
          "Elle n'est jamais en retard pour le travail."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_142",
    "word": "souvent",
    "form": "idiom",
    "definitions": [
      {
        "text": "De nombreuses fois ou fréquemment.",
        "examples": [
          "Nous allons souvent nous promener près du lac."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_143",
    "word": "parfois",
    "form": "idiom",
    "definitions": [
      {
        "text": "De temps à autre mais pas fréquemment.",
        "examples": [
          "Parfois, il préfère cuisiner seul au calme."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_144",
    "word": "rarement",
    "form": "idiom",
    "definitions": [
      {
        "text": "Presque jamais et à de très rares occasions.",
        "examples": [
          "Elle mange rarement des sucreries le soir."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "time"
  },
  {
    "id": "fr_starter_idioms_145",
    "word": "en chantant",
    "form": "idiom",
    "definitions": [
      {
        "text": "Tout en poussant des chansons.",
        "examples": [
          "Elle prépare le petit-déjeuner en chantant."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "actions"
  },
  {
    "id": "fr_starter_idioms_146",
    "word": "à haute voix",
    "form": "idiom",
    "definitions": [
      {
        "text": "En parlant fort pour être entendu de tous.",
        "examples": [
          "Le professeur lit le texte à haute voix."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_147",
    "word": "en silence",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sans faire le moindre bruit.",
        "examples": [
          "Les étudiants travaillent en silence dans la bibliothèque."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "communication"
  },
  {
    "id": "fr_starter_idioms_148",
    "word": "à la fois",
    "form": "idiom",
    "definitions": [
      {
        "text": "En même temps de manière simultanée.",
        "examples": [
          "Il est gentil et intelligent à la fois."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "character"
  },
  {
    "id": "fr_starter_idioms_149",
    "word": "de près",
    "form": "idiom",
    "definitions": [
      {
        "text": "En observant à une courte distance.",
        "examples": [
          "Regarde ce tableau de près pour voir les détails."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "perception"
  },
  {
    "id": "fr_starter_idioms_150",
    "word": "de loin",
    "form": "idiom",
    "definitions": [
      {
        "text": "En observant depuis une grande distance.",
        "examples": [
          "On aperçoit la tour Eiffel de loin."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "perception"
  },
  {
    "id": "fr_starter_idioms_151",
    "word": "en liberté",
    "form": "idiom",
    "definitions": [
      {
        "text": "Sans être enfermé ni retenu.",
        "examples": [
          "Les animaux vivent en liberté dans cette réserve."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "nature"
  },
  {
    "id": "fr_starter_idioms_152",
    "word": "en sécurité",
    "form": "idiom",
    "definitions": [
      {
        "text": "À l'abri de tout danger ou risque.",
        "examples": [
          "Les enfants sont en sécurité dans la maison."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "safety"
  },
  {
    "id": "fr_starter_idioms_153",
    "word": "en danger",
    "form": "idiom",
    "definitions": [
      {
        "text": "Exposé à un risque grave ou un péril.",
        "examples": [
          "Le randonneur égaré était en danger dans la montagne."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "safety"
  },
  {
    "id": "fr_starter_idioms_154",
    "word": "au chaud",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans un endroit à température agréable.",
        "examples": [
          "Restons au chaud pendant que la tempête sévit."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "fr_starter_idioms_155",
    "word": "au frais",
    "form": "idiom",
    "definitions": [
      {
        "text": "Dans un endroit où la température est basse.",
        "examples": [
          "Gardez les fruits au frais dans le réfrigérateur."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "home"
  },
  {
    "id": "fr_starter_idioms_156",
    "word": "en direct",
    "form": "idiom",
    "definitions": [
      {
        "text": "Transmis sans délai au moment où cela se produit.",
        "examples": [
          "Le match de football est diffusé en direct à la télévision."
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "leisure"
  },
  {
    "id": "fr_starter_idioms_157",
    "word": "sur place",
    "form": "idiom",
    "definitions": [
      {
        "text": "À l'endroit même où l'on se trouve.",
        "examples": [
          "Préférez-vous manger sur place ou emporter ?"
        ]
      }
    ],
    "subtext": "expression idiomatique",
    "lang": "fr",
    "level": "starter",
    "theme": "idioms",
    "sub_theme": "food"
  }
];

  if (typeof window !== "undefined") {
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [
      ...(window.vocabularyData[lang] || []),
      ...data
    ];
  }
})();
