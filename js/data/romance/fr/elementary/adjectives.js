(function() {
    const data = [
    {
        "word": "beau",
        "feminine": "belle",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "✨",
        "form": "adjective",
        "plural": "beaux",
        "femininePlural": "belles",
        "definitions": [
            {
                "text": "Qui plaît à l'œil ou à l'esprit.",
                "examples": [
                    "La vue depuis le sommet de la montagne était magnifique."
                ]
            }
        ],
        "subtext": "très beau",
        "synonyms": ["une belle journée", "une belle vue"],
        "comparative": "plus beau",
        "superlative": "le plus beau",
        "opposite": "laid"
    },
    {
        "word": "fort",
        "feminine": "forte",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "💪",
        "form": "adjective",
        "plural": "forts",
        "femininePlural": "fortes",
        "definitions": [
            {
                "text": "Qui a de la force physique ou morale.",
                "examples": [
                    "C'est un nageur fort qui peut traverser le lac facilement."
                ]
            }
        ],
        "subtext": "muscles forts / très fort / assez fort",
        "comparative": "plus fort",
        "superlative": "le plus fort",
        "opposite": "faible"
    },
    {
        "word": "blond",
        "feminine": "blonde",
        "level": "elementary",
        "theme": "physical_appearance_A1",
        "emoji": "👱",
        "form": "adjective",
        "plural": "blonds",
        "femininePlural": "blondes",
        "definitions": [
            {
                "text": "Qui a des cheveux d'un jaune pâle.",
                "examples": [
                    "Elle a de longs cheveux blonds et des yeux bleus."
                ]
            }
        ],
        "subtext": "blond naturel / cheveux blonds / blond clair",
        "comparative": "plus blond",
        "superlative": "le plus blond",
        "opposite": "brun"
    },
    {
        "word": "neigeux",
        "feminine": "neigeuse",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "❄️",
        "form": "adjective",
        "plural": "neigeux",
        "femininePlural": "neigeuses",
        "definitions": [
            {
                "text": "Couvert de neige ou caractérisé par la neige.",
                "examples": [
                    "C'était une matinée neigeuse, les enfants sont sortis jouer."
                ]
            }
        ],
        "subtext": "temps neigeux / froid et neigeux",
        "synonyms": ["journée neigeuse"],
        "comparative": "plus neigeux",
        "superlative": "le plus neigeux",
        "opposite": "dégagé"
    },
    {
        "word": "venteux",
        "feminine": "venteuse",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "💨",
        "form": "adjective",
        "plural": "venteux",
        "femininePlural": "venteuses",
        "definitions": [
            {
                "text": "Exposé au vent ou caractérisé par le vent.",
                "examples": [
                    "Il y a beaucoup de vent aujourd'hui, faites attention à votre parapluie."
                ]
            }
        ],
        "subtext": "très venteux / froid et venteux",
        "synonyms": ["journée venteuse"],
        "comparative": "plus venteux",
        "superlative": "le plus venteux",
        "opposite": "calme"
    },
    {
        "word": "nuageux",
        "feminine": "nuageuse",
        "level": "elementary",
        "theme": "weather_climate_A2",
        "emoji": "☁️",
        "form": "adjective",
        "plural": "nuageux",
        "femininePlural": "nuageuses",
        "definitions": [
            {
                "text": "Couvert de nuages.",
                "examples": [
                    "C'est un après-midi nuageux, mais il ne pleuvra peut-être pas."
                ]
            }
        ],
        "subtext": "ciel nuageux / très nuageux / partiellement nuageux",
        "comparative": "plus nuageux",
        "superlative": "le plus nuageux",
        "opposite": "dégagé"
    },
    {
        "word": "athlétique",
        "feminine": "athlétique",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "athlétiques",
        "femininePlural": "athlétiques",
        "definitions": [
            {
                "text": "Qui a la constitution d'un athlète ; robuste.",
                "examples": [
                    "Il a une carrure athlétique parce qu'il joue au football tous les jours."
                ]
            }
        ],
        "subtext": "carrure athlétique / très athlétique / performance athlétique",
        "comparative": "plus athlétique",
        "superlative": "le plus athlétique",
        "opposite": "paresseux"
    },
    {
        "word": "en forme",
        "feminine": "en forme",
        "level": "elementary",
        "theme": "exercise_fitness_A2",
        "emoji": "💪",
        "form": "adjective",
        "plural": "en forme",
        "femininePlural": "en forme",
        "definitions": [
            {
                "text": "En bonne condition physique.",
                "examples": [
                    "Il reste en forme en allant à la salle de sport trois fois par semaine."
                ]
            }
        ],
        "subtext": "physiquement en forme / très en forme / rester en forme",
        "comparative": "plus en forme",
        "superlative": "le plus en forme",
        "opposite": "malade"
    },
    {
        "word": "en surpoids",
        "feminine": "en surpoids",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "en surpoids",
        "femininePlural": "en surpoids",
        "definitions": [
            {
                "text": "Qui pèse plus que ce qui est considéré comme sain.",
                "examples": [
                    "Le médecin lui a dit qu'il était légèrement en surpoids."
                ]
            }
        ],
        "subtext": "légèrement en surpoids / devenir en surpoids / cliniquement en surpoids",
        "comparative": "plus en surpoids",
        "superlative": "le plus en surpoids",
        "opposite": "maigre"
    },
    {
        "word": "commode",
        "feminine": "commode",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👌",
        "form": "adjective",
        "plural": "commodes",
        "femininePlural": "commodes",
        "definitions": [
            {
                "text": "Facile à utiliser ou bien situé.",
                "examples": [
                    "Le bureau est dans un endroit commode près de la gare."
                ]
            }
        ],
        "subtext": "très commode / un moment commode",
        "synonyms": ["idéalement situé"],
        "comparative": "plus commode",
        "superlative": "le plus commode",
        "opposite": "peu commode"
    },
    {
        "word": "stressant",
        "feminine": "stressante",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "stressants",
        "femininePlural": "stressantes",
        "definitions": [
            {
                "text": "Qui cause du souci ou de l'anxiété.",
                "examples": [
                    "Son travail est très stressant."
                ]
            }
        ],
        "subtext": "un travail stressant / très stressant",
        "synonyms": ["situation stressante"],
        "comparative": "plus stressant",
        "superlative": "le plus stressant",
        "opposite": "relaxant"
    },
    {
        "word": "confortable",
        "feminine": "confortable",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛋️",
        "form": "adjective",
        "plural": "confortables",
        "femininePlural": "confortables",
        "definitions": [
            {
                "text": "Qui procure un bien-être physique.",
                "examples": [
                    "Les nouvelles chaises sont beaucoup plus confortables."
                ]
            }
        ],
        "subtext": "très confortable / se sentir confortable",
        "synonyms": ["à l'aise avec"],
        "comparative": "plus confortable",
        "superlative": "le plus confortable",
        "opposite": "inconfortable"
    },
    {
        "word": "pratique",
        "feminine": "pratique",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🛠️",
        "form": "adjective",
        "plural": "pratiques",
        "femininePlural": "pratiques",
        "definitions": [
            {
                "text": "Utile dans des situations réelles ; sensé.",
                "examples": [
                    "Elle a donné des conseils très pratiques."
                ]
            }
        ],
        "subtext": "très pratique / hautement pratique / une solution pratique",
        "comparative": "plus pratique",
        "superlative": "le plus pratique",
        "opposite": "peu pratique"
    },
    {
        "word": "populaire",
        "feminine": "populaire",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "🌟",
        "form": "adjective",
        "plural": "populaires",
        "femininePlural": "populaires",
        "definitions": [
            {
                "text": "Aimé ou apprécié par beaucoup de gens.",
                "examples": [
                    "Ce restaurant est très populaire."
                ]
            }
        ],
        "subtext": "très populaire / choix populaire / une personne populaire",
        "comparative": "plus populaire",
        "superlative": "le plus populaire",
        "opposite": "impopulaire"
    },
    {
        "word": "occupé",
        "feminine": "occupée",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏃",
        "form": "adjective",
        "plural": "occupés",
        "femininePlural": "occupées",
        "definitions": [
            {
                "text": "Qui a beaucoup de travail ou d'activité.",
                "examples": [
                    "Elle a un emploi du temps occupé cette semaine avec trois visites de clients."
                ]
            }
        ],
        "subtext": "très occupé / trop occupé pour parler",
        "synonyms": ["une journée chargée"],
        "comparative": "plus occupé",
        "superlative": "le plus occupé",
        "opposite": "libre"
    },
    {
        "word": "flexible",
        "feminine": "flexible",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🧘",
        "form": "adjective",
        "plural": "flexibles",
        "femininePlural": "flexibles",
        "definitions": [
            {
                "text": "Capable de changer et de s'adapter facilement à différentes situations.",
                "examples": [
                    "L'entreprise propose des horaires de travail flexibles."
                ]
            }
        ],
        "subtext": "horaires flexibles / approche flexible / très flexible",
        "comparative": "plus flexible",
        "superlative": "le plus flexible",
        "opposite": "rigide"
    },
    {
        "word": "organisé",
        "feminine": "organisée",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "📁",
        "form": "adjective",
        "plural": "organisés",
        "femininePlural": "organisées",
        "definitions": [
            {
                "text": "Capable de planifier et de gérer les choses de manière ordonnée.",
                "examples": [
                    "Il faut être très organisé pour respecter chaque échéance."
                ]
            }
        ],
        "subtext": "bien organisé / très organisé / rester organisé",
        "comparative": "plus organisé",
        "superlative": "le plus organisé",
        "opposite": "désorganisé"
    },
    {
        "word": "professionnel",
        "feminine": "professionnelle",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "professionnels",
        "femininePlural": "professionnelles",
        "definitions": [
            {
                "text": "Se comporter de manière compétente et appropriée pour un travail.",
                "examples": [
                    "Elle a toujours l'air très professionnelle en réunion."
                ]
            }
        ],
        "subtext": "conseils professionnels / très professionnel / hautement professionnel",
        "comparative": "plus professionnel",
        "superlative": "le plus professionnel",
        "opposite": "amateur"
    },
    {
        "word": "responsable",
        "feminine": "responsable",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🛡️",
        "form": "adjective",
        "plural": "responsables",
        "femininePlural": "responsables",
        "definitions": [
            {
                "text": "Ayant le devoir de s'occuper de quelque chose ; fiable.",
                "examples": [
                    "Il est responsable de l'ensemble du budget marketing."
                ]
            }
        ],
        "subtext": "responsable de / très responsable / hautement responsable",
        "comparative": "plus responsable",
        "superlative": "le plus responsable",
        "opposite": "irresponsable"
    },
    {
        "word": "expérimenté",
        "feminine": "expérimentée",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🎓",
        "form": "adjective",
        "plural": "expérimentés",
        "femininePlural": "expérimentées",
        "definitions": [
            {
                "text": "Ayant des connaissances et des compétences issues de la pratique.",
                "examples": [
                    "L'entreprise a besoin d'un chef de projet expérimenté."
                ]
            }
        ],
        "subtext": "très expérimenté / expérimenté en / assez expérimenté",
        "comparative": "plus expérimenté",
        "superlative": "le plus expérimenté",
        "opposite": "inexpérimenté"
    },
    {
        "word": "qualifié",
        "feminine": "qualifiée",
        "level": "elementary",
        "theme": "qualifications_exams_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "qualifiés",
        "femininePlural": "qualifiées",
        "definitions": [
            {
                "text": "Ayant les compétences ou la formation nécessaires.",
                "examples": [
                    "Elle est pleinement qualifiée pour diriger l'équipe."
                ]
            }
        ],
        "subtext": "pleinement qualifié / bien qualifié / hautement qualifié",
        "comparative": "plus qualifié",
        "superlative": "le plus qualifié",
        "opposite": "non qualifié"
    },
    {
        "word": "disponible",
        "feminine": "disponible",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🙋",
        "form": "adjective",
        "plural": "disponibles",
        "femininePlural": "disponibles",
        "definitions": [
            {
                "text": "Libre ; capable d'être utilisé ou joint.",
                "examples": [
                    "Le responsable est-il disponible pour une réunion à trois heures ?"
                ]
            }
        ],
        "subtext": "largement disponible / librement disponible / disponible pour",
        "comparative": "plus disponible",
        "superlative": "le plus disponible",
        "opposite": "indisponible"
    },
    {
        "word": "réussi",
        "feminine": "réussie",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🏆",
        "form": "adjective",
        "plural": "réussis",
        "femininePlural": "réussies",
        "definitions": [
            {
                "text": "Ayant atteint un résultat souhaité.",
                "examples": [
                    "Elle a eu une première année très réussie dans ce rôle."
                ]
            }
        ],
        "subtext": "très réussi",
        "synonyms": ["une carrière réussie", "très performant"],
        "comparative": "plus réussi",
        "superlative": "le plus réussi",
        "opposite": "infructueux"
    },
    {
        "word": "ambitieux",
        "feminine": "ambitieuse",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🚀",
        "form": "adjective",
        "plural": "ambitieux",
        "femininePlural": "ambitieuses",
        "definitions": [
            {
                "text": "Ayant un fort désir de réussir.",
                "examples": [
                    "Il est très ambitieux et veut être directeur à quarante ans."
                ]
            }
        ],
        "subtext": "très ambitieux / extrêmement ambitieux / un plan ambitieux",
        "comparative": "plus ambitieux",
        "superlative": "le plus ambitieux",
        "opposite": "sans ambition"
    },
    {
        "word": "créatif",
        "feminine": "créative",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🎨",
        "form": "adjective",
        "plural": "créatifs",
        "femininePlural": "créatives",
        "definitions": [
            {
                "text": "Capable de produire des idées nouvelles et originales.",
                "examples": [
                    "L'équipe de conception est très créative et travailleuse."
                ]
            }
        ],
        "subtext": "très créatif",
        "synonyms": ["pensée créative", "solution créative"],
        "comparative": "plus créatif",
        "superlative": "le plus créatif",
        "opposite": "peu créatif"
    },
    {
        "word": "productif",
        "feminine": "productive",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "⚙️",
        "form": "adjective",
        "plural": "productifs",
        "femininePlural": "productives",
        "definitions": [
            {
                "text": "Qui fait ou produit beaucoup de travail utile.",
                "examples": [
                    "Elle est plus productive tôt le matin."
                ]
            }
        ],
        "subtext": "très productif / hautement productif",
        "synonyms": ["une réunion productive"],
        "comparative": "plus productif",
        "superlative": "le plus productif",
        "opposite": "improductif"
    },
    {
        "word": "fiable",
        "feminine": "fiable",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "fiables",
        "femininePlural": "fiables",
        "definitions": [
            {
                "text": "Sur qui on peut compter ; de confiance.",
                "examples": [
                    "C'est la personne la plus fiable de l'équipe."
                ]
            }
        ],
        "subtext": "très fiable / hautement fiable / une source fiable",
        "comparative": "plus fiable",
        "superlative": "le plus fiable",
        "opposite": "peu fiable"
    },
    {
        "word": "indépendant",
        "feminine": "indépendante",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🦅",
        "form": "adjective",
        "plural": "indépendants",
        "femininePlural": "indépendantes",
        "definitions": [
            {
                "text": "Qui n'a pas besoin de l'aide ou du soutien des autres.",
                "examples": [
                    "Elle est très indépendante et gère sa propre charge de travail."
                ]
            }
        ],
        "subtext": "financièrement indépendant / très indépendant / un rapport indépendant",
        "comparative": "plus indépendant",
        "superlative": "le plus indépendant",
        "opposite": "dépendant"
    },
    {
        "word": "bon marché",
        "feminine": "bon marché",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏷️",
        "form": "adjective",
        "plural": "bon marché",
        "femininePlural": "bon marché",
        "definitions": [
            {
                "text": "À bas prix ; pas cher.",
                "examples": [
                    "Cette solution est beaucoup moins chère que d'embaucher du personnel supplémentaire."
                ]
            }
        ],
        "subtext": "très bon marché / option bon marché / simple et pas cher",
        "comparative": "plus bon marché",
        "superlative": "le plus bon marché",
        "opposite": "cher"
    },
    {
        "word": "cher",
        "feminine": "chère",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "chers",
        "femininePlural": "chères",
        "definitions": [
            {
                "text": "À prix élevé ; coûtant beaucoup.",
                "examples": [
                    "L'espace de bureau central est extrêmement cher."
                ]
            }
        ],
        "subtext": "très cher / trop cher",
        "synonyms": ["goûts de luxe"],
        "comparative": "plus cher",
        "superlative": "le plus cher",
        "opposite": "bon marché"
    },
    {
        "word": "abordable",
        "feminine": "abordable",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💵",
        "form": "adjective",
        "plural": "abordables",
        "femininePlural": "abordables",
        "definitions": [
            {
                "text": "À la portée de la bourse de la plupart des gens.",
                "examples": [
                    "Ils recherchent des bureaux abordables."
                ]
            }
        ],
        "subtext": "prix abordable / plus abordable / option abordable",
        "comparative": "plus abordable",
        "superlative": "le plus abordable",
        "opposite": "excessif"
    },
    {
        "word": "valoir la peine",
        "feminine": "valoir la peine",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "💰",
        "form": "adjective",
        "plural": "valoir la peine",
        "femininePlural": "valoir la peine",
        "definitions": [
            {
                "text": "Ayant une valeur égale à ou méritant.",
                "examples": [
                    "L'investissement en vaut chaque centime."
                ]
            }
        ],
        "subtext": "vaut la peine d'être considéré",
        "synonyms": ["vaut l'argent", "vaut le coup"],
        "comparative": "plus valoir la peine",
        "superlative": "le plus valoir la peine",
        "opposite": "sans valeur"
    },
    {
        "word": "gratuit",
        "feminine": "gratuite",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🎁",
        "form": "adjective",
        "plural": "gratuits",
        "femininePlural": "gratuites",
        "definitions": [
            {
                "text": "Qui ne coûte rien.",
                "examples": [
                    "Le parking est gratuit pour tous les employés."
                ]
            }
        ],
        "subtext": "gratuit / complètement gratuit / essai gratuit",
        "comparative": "plus gratuit",
        "superlative": "le plus gratuit",
        "opposite": "payant"
    },
    {
        "word": "fauché",
        "feminine": "fauchée",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "📉",
        "form": "adjective",
        "plural": "fauchés",
        "femininePlural": "fauchées",
        "definitions": [
            {
                "text": "N'ayant plus d'argent du tout ; familier.",
                "examples": [
                    "Il a trop dépensé et est complètement fauché."
                ]
            }
        ],
        "subtext": "complètement fauché / être fauché / se retrouver fauché",
        "comparative": "plus fauché",
        "superlative": "le plus fauché",
        "opposite": "riche"
    },
    {
        "word": "riche",
        "feminine": "riche",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏦",
        "form": "adjective",
        "plural": "riches",
        "femininePlural": "riches",
        "definitions": [
            {
                "text": "Ayant beaucoup d'argent.",
                "examples": [
                    "Elle est devenue très riche après avoir vendu son entreprise."
                ]
            }
        ],
        "subtext": "très riche / assez riche / immensément riche",
        "comparative": "plus riche",
        "superlative": "le plus riche",
        "opposite": "pauvre"
    },
    {
        "word": "pauvre",
        "feminine": "pauvre",
        "level": "elementary",
        "theme": "finances_A2",
        "emoji": "🏚️",
        "form": "adjective",
        "plural": "pauvres",
        "femininePlural": "pauvres",
        "definitions": [
            {
                "text": "Ayant très peu d'argent.",
                "examples": [
                    "L'entreprise a commencé très pauvre et s'est construite d'elle-même."
                ]
            }
        ],
        "subtext": "très pauvre / de pauvre qualité / extrêmement pauvre",
        "comparative": "plus pauvre",
        "superlative": "le plus pauvre",
        "opposite": "riche"
    },
    {
        "word": "sain",
        "feminine": "saine",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍎",
        "form": "adjective",
        "plural": "sains",
        "femininePlural": "saines",
        "definitions": [
            {
                "text": "En bonne santé ; bon pour vous.",
                "examples": [
                    "Elle suit un mode de vie sain en dehors du travail."
                ]
            }
        ],
        "subtext": "très sain / rester sain",
        "synonyms": ["alimentation saine"],
        "comparative": "plus sain",
        "superlative": "le plus sain",
        "opposite": "malsain"
    },
    {
        "word": "malsain",
        "feminine": "malsaine",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🍔",
        "form": "adjective",
        "plural": "malsains",
        "femininePlural": "malsaines",
        "definitions": [
            {
                "text": "Pas bon pour la santé.",
                "examples": [
                    "Rester assis à un bureau toute la journée est malsain."
                ]
            }
        ],
        "subtext": "très malsain / profondément malsain",
        "synonyms": ["habitudes malsaines"],
        "comparative": "plus malsain",
        "superlative": "le plus malsain",
        "opposite": "sain"
    },
    {
        "word": "malade",
        "feminine": "malade",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤒",
        "form": "adjective",
        "plural": "malades",
        "femininePlural": "malades",
        "definitions": [
            {
                "text": "Qui n'est pas bien ; souffrant d'une maladie.",
                "examples": [
                    "Elle est malade et travaille à domicile cette semaine."
                ]
            }
        ],
        "subtext": "gravement malade / tomber malade / se sentir malade",
        "comparative": "plus malade",
        "superlative": "le plus malade",
        "opposite": "en bonne santé"
    },
    {
        "word": "malade",
        "feminine": "malade",
        "level": "elementary",
        "theme": "diet_healthy_eating_A2",
        "emoji": "🤢",
        "form": "adjective",
        "plural": "malades",
        "femininePlural": "malades",
        "definitions": [
            {
                "text": "Se sentir physiquement mal ; avoir la nausée.",
                "examples": [
                    "Il s'est fait porter pâle lundi matin."
                ]
            }
        ],
        "subtext": "se sentir malade / se faire porter pâle / très malade",
        "comparative": "plus malade",
        "superlative": "le plus malade",
        "opposite": "bien"
    },
    {
        "word": "fatigué",
        "feminine": "fatiguée",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😴",
        "form": "adjective",
        "plural": "fatigués",
        "femininePlural": "fatiguées",
        "definitions": [
            {
                "text": "Ressentant le besoin de se reposer.",
                "examples": [
                    "Je me sens très fatigué après ce long voyage d'affaires."
                ]
            }
        ],
        "subtext": "se sentir fatigué / épuisé et fatigué / trop fatigué",
        "comparative": "plus fatigué",
        "superlative": "le plus fatigué",
        "opposite": "en forme"
    },
    {
        "word": "stressé",
        "feminine": "stressée",
        "level": "elementary",
        "theme": "social_emotions_A2",
        "emoji": "😫",
        "form": "adjective",
        "plural": "stressés",
        "femininePlural": "stressées",
        "definitions": [
            {
                "text": "Se sentir inquiet et tendu.",
                "examples": [
                    "Elle se sent stressée par la présentation à venir."
                ]
            }
        ],
        "subtext": "se sentir stressé / très stressé / complètement stressé",
        "comparative": "plus stressé",
        "superlative": "le plus stressé",
        "opposite": "détendu"
    },
    {
        "word": "amical",
        "feminine": "amicale",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "👋",
        "form": "adjective",
        "plural": "amicaux",
        "femininePlural": "amicales",
        "definitions": [
            {
                "text": "Aimable, plaisant et facile à qui parler.",
                "examples": [
                    "Tout le personnel de ce bureau est très amical."
                ]
            }
        ],
        "subtext": "très amical / assez amical",
        "synonyms": ["une atmosphère amicale"],
        "comparative": "plus amical",
        "superlative": "le plus amical",
        "opposite": "inamical"
    },
    {
        "word": "gentil",
        "feminine": "gentille",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "❤️",
        "form": "adjective",
        "plural": "gentils",
        "femininePlural": "gentilles",
        "definitions": [
            {
                "text": "Généreux et attentionné envers les autres.",
                "examples": [
                    "Elle est gentille avec tout le monde, même sous pression."
                ]
            }
        ],
        "subtext": "très gentil / gentil de votre part / un geste gentil",
        "comparative": "plus gentil",
        "superlative": "le plus gentil",
        "opposite": "méchant"
    },
    {
        "word": "honnête",
        "feminine": "honnête",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⚖️",
        "form": "adjective",
        "plural": "honnêtes",
        "femininePlural": "honnêtes",
        "definitions": [
            {
                "text": "Disant la vérité ; ne trompant pas les gens.",
                "examples": [
                    "Il est complètement honnête avec les clients et les collègues."
                ]
            }
        ],
        "subtext": "brutalement honnête / très honnête / tout à fait honnête",
        "comparative": "plus honnête",
        "superlative": "le plus honnête",
        "opposite": "malhonnête"
    },
    {
        "word": "patient",
        "feminine": "patiente",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "⏳",
        "form": "adjective",
        "plural": "patients",
        "femininePlural": "patientes",
        "definitions": [
            {
                "text": "Capable d'attendre sans se plaindre.",
                "examples": [
                    "Un bon formateur doit être extrêmement patient."
                ]
            }
        ],
        "subtext": "très patient / patient avec / incroyablement patient",
        "comparative": "plus patient",
        "superlative": "le plus patient",
        "opposite": "impatient"
    },
    {
        "word": "poli",
        "feminine": "polie",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🙇",
        "form": "adjective",
        "plural": "polis",
        "femininePlural": "polies",
        "definitions": [
            {
                "text": "Se comportant avec courtoisie et respect.",
                "examples": [
                    "Elle est toujours polie, même dans les conversations difficiles."
                ]
            }
        ],
        "subtext": "très poli / être poli",
        "synonyms": ["refuser poliment"],
        "comparative": "plus poli",
        "superlative": "le plus poli",
        "opposite": "impoli"
    },
    {
        "word": "solidaire",
        "feminine": "solidaire",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🤝",
        "form": "adjective",
        "plural": "solidaires",
        "femininePlural": "solidaires",
        "definitions": [
            {
                "text": "Apportant aide et encouragement.",
                "examples": [
                    "Son responsable est très solidaire pendant les périodes de forte activité."
                ]
            }
        ],
        "subtext": "très solidaire / équipe solidaire / être d'un grand soutien",
        "comparative": "plus solidaire",
        "superlative": "le plus solidaire",
        "opposite": "peu solidaire"
    },
    {
        "word": "confiant",
        "feminine": "confiante",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "✨",
        "form": "adjective",
        "plural": "confiants",
        "femininePlural": "confiantes",
        "definitions": [
            {
                "text": "Sûr de sa propre capacité.",
                "examples": [
                    "Il présente avec assurance et est très confiant."
                ]
            }
        ],
        "subtext": "très confiant / se sentir confiant",
        "synonyms": ["sûr de soi"],
        "comparative": "plus confiant",
        "superlative": "le plus confiant",
        "opposite": "peu sûr de soi"
    },
    {
        "word": "sociable",
        "feminine": "sociable",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "🗣️",
        "form": "adjective",
        "plural": "sociables",
        "femininePlural": "sociables",
        "definitions": [
            {
                "text": "Aimant passer du temps avec d'autres personnes.",
                "examples": [
                    "Elle est très sociable et connaît tout le monde."
                ]
            }
        ],
        "subtext": "très sociable / naturellement sociable / une personne sociable",
        "comparative": "plus sociable",
        "superlative": "le plus sociable",
        "opposite": "insociable"
    },
    {
        "word": "moderne",
        "feminine": "moderne",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏙️",
        "form": "adjective",
        "plural": "modernes",
        "femininePlural": "modernes",
        "definitions": [
            {
                "text": "Conçu pour l'époque actuelle ; à jour.",
                "examples": [
                    "L'entreprise a emménagé dans un bureau moderne en espace ouvert."
                ]
            }
        ],
        "subtext": "très moderne / design moderne / ultra-moderne",
        "comparative": "plus moderne",
        "superlative": "le plus moderne",
        "opposite": "ancien"
    },
    {
        "word": "traditionnel",
        "feminine": "traditionnelle",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🏛️",
        "form": "adjective",
        "plural": "traditionnels",
        "femininePlural": "traditionnelles",
        "definitions": [
            {
                "text": "Suivant les coutumes ou les manières établies.",
                "examples": [
                    "L'entreprise a une structure de gestion traditionnelle."
                ]
            }
        ],
        "subtext": "très traditionnel / profondément traditionnel",
        "synonyms": ["approche traditionnelle"],
        "comparative": "plus traditionnel",
        "superlative": "le plus traditionnel",
        "opposite": "moderne"
    },
    {
        "word": "local",
        "feminine": "locale",
        "level": "elementary",
        "theme": "neighbourhood_local_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "locaux",
        "femininePlural": "locales",
        "definitions": [
            {
                "text": "Relatif à la zone voisine.",
                "examples": [
                    "Elle préfère utiliser des fournisseurs locaux."
                ]
            }
        ],
        "subtext": "un problème local",
        "synonyms": ["zone locale", "entreprise locale"],
        "comparative": "plus local",
        "superlative": "le plus local",
        "opposite": "international"
    },
    {
        "word": "international",
        "feminine": "internationale",
        "level": "elementary",
        "theme": "career_development_A2",
        "emoji": "🌎",
        "form": "adjective",
        "plural": "internationaux",
        "femininePlural": "internationales",
        "definitions": [
            {
                "text": "Impliquant plus d'un pays.",
                "examples": [
                    "L'entreprise travaille avec des clients internationaux."
                ]
            }
        ],
        "subtext": "commerce international / pleinement international",
        "synonyms": ["équipe internationale"],
        "comparative": "plus international",
        "superlative": "le plus international",
        "opposite": "local"
    },
    {
        "word": "intéressant",
        "feminine": "intéressante",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "intéressants",
        "femininePlural": "intéressantes",
        "definitions": [
            {
                "text": "Attirant l'attention ; valant la peine d'être connu.",
                "examples": [
                    "La session de la conférence sur l'IA était très intéressante."
                ]
            }
        ],
        "subtext": "très intéressant / trouver intéressant / un point intéressant",
        "comparative": "plus intéressant",
        "superlative": "le plus intéressant",
        "opposite": "ennuyeux"
    },
    {
        "word": "ennuyeux",
        "feminine": "ennuyeuse",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💤",
        "form": "adjective",
        "plural": "ennuyeux",
        "femininePlural": "ennuyeuses",
        "definitions": [
            {
                "text": "Pas intéressant ; terne.",
                "examples": [
                    "La formation sur la conformité était très ennuyeuse."
                ]
            }
        ],
        "subtext": "très ennuyeux / trouver ennuyeux",
        "synonyms": ["une réunion ennuyeuse"],
        "comparative": "plus ennuyeux",
        "superlative": "le plus ennuyeux",
        "opposite": "intéressant"
    },
    {
        "word": "étrange",
        "feminine": "étrange",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "❓",
        "form": "adjective",
        "plural": "étranges",
        "femininePlural": "étranges",
        "definitions": [
            {
                "text": "Inhabituel ou surprenant d'une manière difficile à comprendre.",
                "examples": [
                    "L'e-mail du client semblait très étrange."
                ]
            }
        ],
        "subtext": "très étrange / un sentiment étrange / trouver étrange",
        "comparative": "plus étrange",
        "superlative": "le plus étrange",
        "opposite": "normal"
    },
    {
        "word": "normal",
        "feminine": "normale",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "✅",
        "form": "adjective",
        "plural": "normaux",
        "femininePlural": "normales",
        "definitions": [
            {
                "text": "Typique ou habituel ; ce à quoi on s'attendrait.",
                "examples": [
                    "Il est normal de se sentir nerveux avant une présentation importante."
                ]
            }
        ],
        "subtext": "complètement normal / parfaitement normal / se sentir normal",
        "comparative": "plus normal",
        "superlative": "le plus normal",
        "opposite": "étrange"
    },
    {
        "word": "typique",
        "feminine": "typique",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔄",
        "form": "adjective",
        "plural": "typiques",
        "femininePlural": "typiques",
        "definitions": [
            {
                "text": "Ayant les qualités habituelles d'un type de personne ou de chose.",
                "examples": [
                    "C'est un problème typique dans les grandes organisations."
                ]
            }
        ],
        "subtext": "très typique / une journée typique / typique de",
        "comparative": "plus typique",
        "superlative": "le plus typique",
        "opposite": "atypique"
    },
    {
        "word": "commun",
        "feminine": "commune",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "communs",
        "femininePlural": "communes",
        "definitions": [
            {
                "text": "Se produisant souvent ; trouvé dans de nombreux endroits.",
                "examples": [
                    "Le burnout est un problème commun dans cette industrie."
                ]
            }
        ],
        "subtext": "très commun / problème commun",
        "synonyms": ["bon sens"],
        "comparative": "plus commun",
        "superlative": "le plus commun",
        "opposite": "rare"
    },
    {
        "word": "rare",
        "feminine": "rare",
        "level": "elementary",
        "theme": "quantity_degree_A2",
        "emoji": "💎",
        "form": "adjective",
        "plural": "rares",
        "femininePlural": "rares",
        "definitions": [
            {
                "text": "Ne se produisant pas souvent ; pas trouvé dans de nombreux endroits.",
                "examples": [
                    "Un manager vraiment solidaire est rare."
                ]
            }
        ],
        "subtext": "très rare / opportunité rare / un événement rare",
        "comparative": "plus rare",
        "superlative": "le plus rare",
        "opposite": "commun"
    },
    {
        "word": "certain",
        "feminine": "certaine",
        "level": "elementary",
        "theme": "comparison_A2",
        "emoji": "🎯",
        "form": "adjective",
        "plural": "certains",
        "femininePlural": "certaines",
        "definitions": [
            {
                "text": "Défini ; sans aucun doute.",
                "examples": [
                    "Elle est certaine d'avoir fait le bon choix."
                ]
            }
        ],
        "subtext": "absolument certain / être certain / se sentir certain",
        "comparative": "plus certain",
        "superlative": "le plus certain",
        "opposite": "incertain"
    },
    {
        "word": "clair",
        "feminine": "claire",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔍",
        "form": "adjective",
        "plural": "clairs",
        "femininePlural": "claires",
        "definitions": [
            {
                "text": "Facile à comprendre ; exempt de confusion.",
                "examples": [
                    "Les instructions sont très claires."
                ]
            }
        ],
        "subtext": "clair comme de l'eau de roche / très clair / rendre clair",
        "comparative": "plus clair",
        "superlative": "le plus clair",
        "opposite": "confus"
    },
    {
        "word": "difficile",
        "feminine": "difficile",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🧩",
        "form": "adjective",
        "plural": "difficiles",
        "femininePlural": "difficiles",
        "definitions": [
            {
                "text": "Pas facile ; nécessitant de l'effort ou de la compétence.",
                "examples": [
                    "La négociation a été très difficile."
                ]
            }
        ],
        "subtext": "très difficile / trouver difficile / difficile à comprendre",
        "comparative": "plus difficile",
        "superlative": "le plus difficile",
        "opposite": "facile"
    },
    {
        "word": "simple",
        "feminine": "simple",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "💡",
        "form": "adjective",
        "plural": "simples",
        "femininePlural": "simples",
        "definitions": [
            {
                "text": "Facile à comprendre ou à faire ; pas compliqué.",
                "examples": [
                    "La solution est en fait très simple."
                ]
            }
        ],
        "subtext": "très simple / assez simple / rester simple",
        "comparative": "plus simple",
        "superlative": "le plus simple",
        "opposite": "compliqué"
    },
    {
        "word": "compliqué",
        "feminine": "compliquée",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🕸️",
        "form": "adjective",
        "plural": "compliqués",
        "femininePlural": "compliquées",
        "definitions": [
            {
                "text": "Impliquant de nombreuses parties ; pas facile à comprendre.",
                "examples": [
                    "Le contrat est très compliqué."
                ]
            }
        ],
        "subtext": "très compliqué / devenir compliqué / trop compliqué",
        "comparative": "plus compliqué",
        "superlative": "le plus compliqué",
        "opposite": "simple"
    },
    {
        "word": "sérieux",
        "feminine": "sérieuse",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "👔",
        "form": "adjective",
        "plural": "sérieux",
        "femininePlural": "sérieuses",
        "definitions": [
            {
                "text": "Important ; nécessitant une réflexion approfondie.",
                "examples": [
                    "C'est un problème sérieux qui nécessite de l'attention."
                ]
            }
        ],
        "subtext": "très sérieux / tout à fait sérieux",
        "synonyms": ["une question sérieuse"],
        "comparative": "plus sérieux",
        "superlative": "le plus sérieux",
        "opposite": "drôle"
    },
    {
        "word": "drôle",
        "feminine": "drôle",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "😂",
        "form": "adjective",
        "plural": "drôles",
        "femininePlural": "drôles",
        "definitions": [
            {
                "text": "Qui fait rire ; humoristique.",
                "examples": [
                    "Le client a partagé une histoire drôle pour briser la glace."
                ]
            }
        ],
        "subtext": "très drôle / une situation drôle / trouver drôle",
        "comparative": "plus drôle",
        "superlative": "le plus drôle",
        "opposite": "sérieux"
    },
    {
        "word": "direct",
        "feminine": "directe",
        "level": "elementary",
        "theme": "personal_qualities_A2",
        "emoji": "➡️",
        "form": "adjective",
        "plural": "directs",
        "femininePlural": "directes",
        "definitions": [
            {
                "text": "Allant droit au but ; pas indirect.",
                "examples": [
                    "Il est très direct et dit exactement ce qu'il pense."
                ]
            }
        ],
        "subtext": "très direct",
        "synonyms": ["approche directe", "une question directe"],
        "comparative": "plus direct",
        "superlative": "le plus direct",
        "opposite": "indirect"
    },
    {
        "word": "quotidien",
        "feminine": "quotidienne",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "📅",
        "form": "adjective",
        "plural": "quotidiens",
        "femininePlural": "quotidiennes",
        "definitions": [
            {
                "text": "Se produisant chaque jour.",
                "examples": [
                    "Elle a un trajet quotidien de quarante-cinq minutes."
                ]
            }
        ],
        "subtext": "rapport quotidien",
        "synonyms": ["routine quotidienne", "quotidiennement"],
        "comparative": "plus quotidien",
        "superlative": "le plus quotidien",
        "opposite": "mensuel"
    },
    {
        "word": "régulier",
        "feminine": "régulière",
        "level": "elementary",
        "theme": "condition_state_A2",
        "emoji": "🔁",
        "form": "adjective",
        "plural": "réguliers",
        "femininePlural": "régulières",
        "definitions": [
            {
                "text": "Se produisant à des moments ou intervalles fixes.",
                "examples": [
                    "Ils ont des réunions d'équipe régulières le lundi."
                ]
            }
        ],
        "subtext": "très régulier / client régulier",
        "synonyms": ["base régulière"],
        "comparative": "plus régulier",
        "superlative": "le plus régulier",
        "opposite": "irrégulier"
    },
    {
        "word": "récent",
        "feminine": "récente",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "🕒",
        "form": "adjective",
        "plural": "récents",
        "femininePlural": "récentes",
        "definitions": [
            {
                "text": "S'étant produit il n'y a pas longtemps.",
                "examples": [
                    "Avez-vous vu les récents changements à la politique ?"
                ]
            }
        ],
        "subtext": "le plus récent / très récent",
        "synonyms": ["actualités récentes"],
        "comparative": "plus récent",
        "superlative": "le plus récent",
        "opposite": "ancien"
    },
    {
        "word": "actuel",
        "feminine": "actuelle",
        "level": "elementary",
        "theme": "sequence_order_A2",
        "emoji": "📍",
        "form": "adjective",
        "plural": "actuels",
        "femininePlural": "actuelles",
        "definitions": [
            {
                "text": "Se produisant ou existant maintenant.",
                "examples": [
                    "Quel est votre salaire actuel ?"
                ]
            }
        ],
        "subtext": "employeur actuel",
        "synonyms": ["situation actuelle", "actuellement"],
        "comparative": "plus actuel",
        "superlative": "le plus actuel",
        "opposite": "passé"
    },
    {
        "word": "futur",
        "feminine": "future",
        "level": "elementary",
        "theme": "future_time_A2",
        "emoji": "🔮",
        "form": "adjective",
        "plural": "futurs",
        "femininePlural": "futures",
        "definitions": [
            {
                "text": "Pas encore produit ; relatif à un moment ultérieur.",
                "examples": [
                    "Quels sont vos futurs projets pour votre carrière ?"
                ]
            }
        ],
        "subtext": "projets futurs / futur employeur",
        "synonyms": ["à l'avenir"],
        "comparative": "plus futur",
        "superlative": "le plus futur",
        "opposite": "passé"
    },
    {
        "word": "précédent",
        "feminine": "précédente",
        "level": "elementary",
        "theme": "past_time_A2",
        "emoji": "⬅️",
        "form": "adjective",
        "plural": "précédents",
        "femininePlural": "précédentes",
        "definitions": [
            {
                "text": "S'étant produit ou ayant existé avant le présent.",
                "examples": [
                    "Elle a mentionné son employeur précédent lors de l'entretien."
                ]
            }
        ],
        "subtext": "travail précédent / employeur précédent",
        "synonyms": ["expérience précédente"],
        "comparative": "plus précédent",
        "superlative": "le plus précédent",
        "opposite": "suivant"
    }
];
})();