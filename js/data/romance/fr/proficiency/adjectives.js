// TODO: verify level classification
(function() {
    const lang = "fr";
    const data = [
    {
        "word": "abrupt",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⏱️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Soudain et inattendu ; brusque et impoli dans sa manière d'agir.",
                "examples": [
                    "La conversation a pris une fin abrupte et inattendue."
                ]
            }
        ],
        "subtext": "une fin abrupte / une manière abrupte / s'arrêter abruptement",
        "comparative": "plus abrupt",
        "superlative": "le plus abrupt",
        "synonyms": [
            "soudain",
            "brusque"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_001",
        "antonyms": [
            "graduel"
        ],
        "transcription": ""
    },
    {
        "word": "abstrus",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧐",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile à comprendre ; obscur ou complexe.",
                "examples": [
                    "L'article a été critiqué pour son cadre théorique abstrus."
                ]
            }
        ],
        "subtext": "très abstrus / plutôt abstrus / un argument abstrus",
        "comparative": "plus abstrus",
        "superlative": "le plus abstrus",
        "synonyms": [
            "obscur",
            "recondit"
        ],
        "lang": "fr",
        "id": "fr_proficiency_psychology_001",
        "antonyms": [
            "simple"
        ],
        "transcription": ""
    },
    {
        "word": "anachronique",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Démodé ; appartenant à une époque antérieure.",
                "examples": [
                    "La politique semble totalement anachronique dans le contexte actuel."
                ]
            }
        ],
        "subtext": "totalement anachronique / de plus en plus anachronique / profondément anachronique",
        "comparative": "plus anachronique",
        "superlative": "le plus anachronique",
        "synonyms": [
            "démodé",
            "archaïque"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_001",
        "antonyms": [
            "contemporain"
        ],
        "transcription": ""
    },
    {
        "word": "antithétique",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Directement opposé ou contraire à quelque chose.",
                "examples": [
                    "Ses actions étaient antithétiques aux valeurs qu'il prétendait défendre."
                ]
            }
        ],
        "subtext": "directement antithétique / totalement antithétique / antithétique à",
        "comparative": "plus antithétique",
        "superlative": "le plus antithétique",
        "synonyms": [
            "contraire",
            "opposé"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_002",
        "antonyms": [
            "identique"
        ],
        "transcription": ""
    },
    {
        "word": "arcane",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔮",
        "form": "adjective",
        "definitions": [
            {
                "text": "Connu seulement de quelques personnes ; mystérieux et secret.",
                "examples": [
                    "La procédure était inutilement arcane et inaccessible."
                ]
            }
        ],
        "subtext": "très arcane / totalement arcane / connaissance arcane",
        "comparative": "plus arcane",
        "superlative": "le plus arcane",
        "synonyms": [
            "mystérieux",
            "secret"
        ],
        "lang": "fr",
        "id": "fr_proficiency_psychology_002",
        "antonyms": [
            "commun"
        ],
        "transcription": ""
    },
    {
        "word": "atypique",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🦄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas typique ; pas normal ou habituel.",
                "examples": [
                    "C'était un cas atypique qui ne reflète pas la norme."
                ]
            }
        ],
        "subtext": "très atypique / hautement atypique / statistiquement atypique",
        "comparative": "plus atypique",
        "superlative": "le plus atypique",
        "synonyms": [
            "inhabituel",
            "anormal"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_003",
        "antonyms": [
            "typique"
        ],
        "transcription": ""
    },
    {
        "word": "binaire",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Composé de deux choses ; basé sur une dichotomie.",
                "examples": [
                    "Le débat présente un faux binaire entre croissance et justice."
                ]
            }
        ],
        "subtext": "un faux binaire / un choix binaire / pas purement binaire",
        "comparative": "plus binaire",
        "superlative": "le plus binaire",
        "synonyms": [
            "dual",
            "double"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_004",
        "antonyms": [
            "unitaire"
        ],
        "transcription": ""
    },
    {
        "word": "catégorique",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Absolu ; exprimé sans aucune exception ou condition.",
                "examples": [
                    "Elle a donné un déni catégorique des accusations."
                ]
            }
        ],
        "subtext": "un déni catégorique / refusé catégoriquement / absolument catégorique",
        "comparative": "plus catégorique",
        "superlative": "le plus catégorique",
        "synonyms": [
            "absolu",
            "inconditionnel"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_005",
        "antonyms": [
            "nuancé"
        ],
        "transcription": ""
    },
    {
        "word": "circonspect",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Prudent en considérant toutes les circonstances ; précautionneux.",
                "examples": [
                    "Il a été circonspect dans ses déclarations publiques."
                ]
            }
        ],
        "subtext": "très circonspect / extrêmement circonspect / rester circonspect",
        "comparative": "plus circonspect",
        "superlative": "le plus circonspect",
        "synonyms": [
            "prudent",
            "discret"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_001",
        "antonyms": [
            "téméraire"
        ],
        "transcription": ""
    },
    {
        "word": "clandestin",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🕵️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Caché ; secret ; non reconnu ouvertement.",
                "examples": [
                    "L'opération impliquait une surveillance clandestine du groupe."
                ]
            }
        ],
        "subtext": "totalement clandestin / une opération clandestine / profondément clandestin",
        "comparative": "plus clandestin",
        "superlative": "le plus clandestin",
        "synonyms": [
            "secret",
            "furtif"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_002",
        "antonyms": [
            "ouvert"
        ],
        "transcription": ""
    },
    {
        "word": "dialectique",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relatif à la discussion logique des idées à travers les opposés.",
                "examples": [
                    "L'analyse emploie une méthode dialectique de bout en bout."
                ]
            }
        ],
        "subtext": "une approche dialectique / tension dialectique / résolu dialectiquement",
        "comparative": "plus dialectique",
        "superlative": "le plus dialectique",
        "synonyms": [
            "logique",
            "analytique"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_006",
        "transcription": ""
    },
    {
        "word": "diffus",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Répandu sur une large zone ; manquant de clarté.",
                "examples": [
                    "L'argument était trop diffus pour faire une forte impression."
                ]
            }
        ],
        "subtext": "très diffus / plutôt diffus / une réponse diffuse",
        "comparative": "plus diffus",
        "superlative": "le plus diffus",
        "synonyms": [
            "dispersé",
            "vague"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_007",
        "antonyms": [
            "concentré"
        ],
        "transcription": ""
    },
    {
        "word": "élusif",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌬️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile à trouver, à capturer ou à atteindre.",
                "examples": [
                    "La vérité dans cette affaire s'est avérée remarquablement élusive."
                ]
            },
            {
                "text": "Difficile à saisir ou à se rappeler.",
                "examples": [
                    "Un consensus clair reste élusif."
                ]
            }
        ],
        "subtext": "très élusif / reste élusif / un objectif élusif / une qualité élusive",
        "comparative": "plus élusif",
        "superlative": "le plus élusif",
        "synonyms": [
            "fuyant",
            "évanescent"
        ],
        "lang": "fr",
        "id": "fr_proficiency_psychology_003",
        "antonyms": [
            "accessible"
        ],
        "transcription": ""
    },
    {
        "word": "ésotérique",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗝️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Compris par ou destiné à un petit groupe restreint.",
                "examples": [
                    "Le débat est devenu trop ésotérique pour un public général."
                ]
            }
        ],
        "subtext": "très ésotérique / plutôt ésotérique / profondément ésotérique",
        "comparative": "plus ésotérique",
        "superlative": "le plus ésotérique",
        "synonyms": [
            "arcane",
            "obscur"
        ],
        "lang": "fr",
        "id": "fr_proficiency_psychology_004",
        "antonyms": [
            "exotérique"
        ],
        "transcription": ""
    },
    {
        "word": "fallacieux",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❌",
        "form": "adjective",
        "definitions": [
            {
                "text": "Basé sur un raisonnement faux ; trompeur.",
                "examples": [
                    "Votre argument est fondamentalement fallacieux."
                ]
            }
        ],
        "subtext": "profondément fallacieux / logiquement fallacieux / une affirmation fallacieuse",
        "comparative": "plus fallacieux",
        "superlative": "le plus fallacieux",
        "synonyms": [
            "faux",
            "erroné"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_008",
        "antonyms": [
            "solide"
        ],
        "transcription": ""
    },
    {
        "word": "immuable",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Incapable d'être changé ; fixe et permanent.",
                "examples": [
                    "La langue n'est pas immuable — elle évolue constamment."
                ]
            }
        ],
        "subtext": "totalement immuable / pas immuable / un fait immuable",
        "comparative": "plus immuable",
        "superlative": "le plus immuable",
        "synonyms": [
            "fixe",
            "permanent"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_009",
        "antonyms": [
            "muable"
        ],
        "transcription": ""
    },
    {
        "word": "impartial",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui ne favorise pas un côté plutôt qu'un autre ; juste.",
                "examples": [
                    "Le panel doit être complètement impartial dans son jugement."
                ]
            }
        ],
        "subtext": "totalement impartial / strictement impartial / un observateur impartial",
        "comparative": "plus impartial",
        "superlative": "le plus impartial",
        "synonyms": [
            "juste",
            "neutre"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_003",
        "antonyms": [
            "partial"
        ],
        "transcription": ""
    },
    {
        "word": "incident",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🍃",
        "form": "adjective",
        "definitions": [
            {
                "text": "Arrivant comme une partie mineure de quelque chose d'autre.",
                "examples": [
                    "L'économie était incidente plutôt que l'objectif principal."
                ]
            }
        ],
        "subtext": "purement incident / simplement incident / incident à",
        "comparative": "plus incident",
        "superlative": "le plus incident",
        "synonyms": [
            "secondaire",
            "mineur"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_010",
        "antonyms": [
            "central"
        ],
        "transcription": ""
    },
    {
        "word": "inhérent",
        "level": "proficiency",
        "theme": "language",
        "emoji": "⚛️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Existant dans quelque chose comme une qualité naturelle et permanente.",
                "examples": [
                    "Le système est inhéremment défectueux et doit être repensé."
                ]
            }
        ],
        "subtext": "inhéremment défectueux / inhéremment biaisé / inhéremment problématique",
        "comparative": "plus inhérent",
        "superlative": "le plus inhérent",
        "synonyms": [
            "inné",
            "intrinsèque"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_011",
        "antonyms": [
            "extrinsèque"
        ],
        "transcription": ""
    },
    {
        "word": "inimitable",
        "level": "proficiency",
        "theme": "art_culture",
        "emoji": "🌟",
        "form": "adjective",
        "definitions": [
            {
                "text": "Si bon ou inhabituel qu'il est impossible de le copier.",
                "examples": [
                    "Elle a une manière inimitable de rendre claires les idées complexes."
                ]
            }
        ],
        "subtext": "vraiment inimitable / absolument inimitable / un style inimitable",
        "comparative": "plus inimitable",
        "superlative": "le plus inimitable",
        "synonyms": [
            "unique",
            "inégalable"
        ],
        "lang": "fr",
        "id": "fr_proficiency_art_culture_001",
        "antonyms": [
            "commun"
        ],
        "transcription": ""
    },
    {
        "word": "insidieux",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🐍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui progresse graduellement de manière préjudiciable.",
                "examples": [
                    "Les effets du stress à long terme peuvent être insidieux."
                ]
            }
        ],
        "subtext": "très insidieux / profondément insidieux / un processus insidieux",
        "comparative": "plus insidieux",
        "superlative": "le plus insidieux",
        "synonyms": [
            "sournois",
            "subtil"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_004",
        "antonyms": [
            "direct"
        ],
        "transcription": ""
    },
    {
        "word": "irréconciliable",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Incapable d'être concilié ou rendu compatible.",
                "examples": [
                    "Les deux positions sont fondamentalement irréconciliables."
                ]
            }
        ],
        "subtext": "fondamentalement irréconciliable / totalement irréconciliable / différences irréconciliables",
        "comparative": "plus irréconciliable",
        "superlative": "le plus irréconciliable",
        "synonyms": [
            "incompatible",
            "conflit"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_012",
        "antonyms": [
            "compatible"
        ],
        "transcription": ""
    },
    {
        "word": "liminal",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relatif à un état de transition ou intermédiaire.",
                "examples": [
                    "Les mois suivant le licenciement sont une période vraiment liminale."
                ]
            }
        ],
        "subtext": "un espace liminal / une phase liminale / profondément liminal",
        "comparative": "plus liminal",
        "superlative": "le plus liminal",
        "synonyms": [
            "transitionnel",
            "seuil"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_013",
        "transcription": ""
    },
    {
        "word": "multiple",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Nombreux et de plusieurs sortes différentes.",
                "examples": [
                    "Les implications de cette décision sont multiples."
                ]
            }
        ],
        "subtext": "implications multiples / problèmes multiples / défis multiples",
        "comparative": "plus multiple",
        "superlative": "le plus multiple",
        "synonyms": [
            "nombreux",
            "divers"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_014",
        "antonyms": [
            "unique"
        ],
        "transcription": ""
    },
    {
        "word": "nébuleux",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "☁️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas clair ; vague et mal défini.",
                "examples": [
                    "Le concept reste un peu nébuleux dans le rapport."
                ]
            }
        ],
        "subtext": "très nébuleux / plutôt nébuleux / dangereusement nébuleux",
        "comparative": "plus nébuleux",
        "superlative": "le plus nébuleux",
        "synonyms": [
            "vague",
            "diffus"
        ],
        "lang": "fr",
        "id": "fr_proficiency_psychology_005",
        "antonyms": [
            "distinct"
        ],
        "transcription": ""
    },
    {
        "word": "normatif",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📏",
        "form": "adjective",
        "definitions": [
            {
                "text": "Relatif à une norme ; prescrivant ce qui devrait être.",
                "examples": [
                    "C'est une affirmation normative, pas descriptive."
                ]
            }
        ],
        "subtext": "un cadre normatif / présupposé normatif / affirmation normative",
        "comparative": "plus normatif",
        "superlative": "le plus normatif",
        "synonyms": [
            "prescriptif",
            "standard"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_005",
        "antonyms": [
            "descriptif"
        ],
        "transcription": ""
    },
    {
        "word": "nuancé",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Montrant des distinctions subtiles ; pas simple ou extrême.",
                "examples": [
                    "Le rapport donne un compte-rendu très nuancé de la question."
                ]
            }
        ],
        "subtext": "très nuancé / hautement nuancé / un argument nuancé",
        "comparative": "plus nuancé",
        "superlative": "le plus nuancé",
        "synonyms": [
            "subtil",
            "raffiné"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_015",
        "antonyms": [
            "grossier"
        ],
        "transcription": ""
    },
    {
        "word": "oblique",
        "level": "proficiency",
        "theme": "language",
        "emoji": "↗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas direct ; indirect ; qui n'est pas droit ou ouvert.",
                "examples": [
                    "Il a donné une réponse oblique qui n'a satisfait personne."
                ]
            }
        ],
        "subtext": "un peu oblique / très oblique / une référence oblique",
        "comparative": "plus oblique",
        "superlative": "le plus oblique",
        "synonyms": [
            "indirect",
            "biaisé"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_016",
        "antonyms": [
            "direct"
        ],
        "transcription": ""
    },
    {
        "word": "opaque",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌑",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas transparent ; difficile à comprendre.",
                "examples": [
                    "Le raisonnement du gouvernement était totalement opaque."
                ]
            }
        ],
        "subtext": "très opaque / totalement opaque / profondément opaque",
        "comparative": "plus opaque",
        "superlative": "le plus opaque",
        "synonyms": [
            "obscur",
            "peu clair"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_017",
        "antonyms": [
            "transparent"
        ],
        "transcription": ""
    },
    {
        "word": "ostensible",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎭",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui semble être quelque chose ; déclaré comme réel ou vrai.",
                "examples": [
                    "L'objectif ostensible était l'efficacité ; le vrai était le contrôle."
                ]
            }
        ],
        "subtext": "l'objectif ostensible / ostensiblement correct / motivation ostensible",
        "comparative": "plus ostensible",
        "superlative": "le plus ostensible",
        "synonyms": [
            "apparent",
            "supposé"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_018",
        "antonyms": [
            "véritable"
        ],
        "transcription": ""
    },
    {
        "word": "paradoxal",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui se contredit mais contient une vérité.",
                "examples": [
                    "Il est paradoxal que faire moins puisse parfois accomplir plus."
                ]
            }
        ],
        "subtext": "apparemment paradoxal / profondément paradoxal / une situation paradoxale",
        "comparative": "plus paradoxal",
        "superlative": "le plus paradoxal",
        "synonyms": [
            "contradictoire",
            "ironique"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_019",
        "antonyms": [
            "cohérent"
        ],
        "transcription": ""
    },
    {
        "word": "pervasif",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "form": "adjective",
        "definitions": [
            {
                "text": "Présent partout ; qui se répand largement.",
                "examples": [
                    "Une culture de surmenage est pervasive dans ce secteur."
                ]
            }
        ],
        "subtext": "très pervasif / de plus en plus pervasif / pervasif",
        "comparative": "plus pervasif",
        "superlative": "le plus pervasif",
        "synonyms": [
            "diffus",
            "prévalent"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_002",
        "antonyms": [
            "rare"
        ],
        "transcription": ""
    },
    {
        "word": "polarisant",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧲",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui amène les gens à prendre des positions opposées.",
                "examples": [
                    "La proposition était profondément polarisante au sein de l'organisation."
                ]
            }
        ],
        "subtext": "profondément polarisant / extrêmement polarisant / hautement polarisant",
        "comparative": "plus polarisant",
        "superlative": "le plus polarisant",
        "synonyms": [
            "divisif",
            "conflictuel"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_006",
        "antonyms": [
            "unificateur"
        ],
        "transcription": ""
    },
    {
        "word": "précaire",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧗",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas sûr ou certain ; dépendant du hasard.",
                "examples": [
                    "Elle a quitté une vie de freelance précaire pour un poste stable."
                ]
            }
        ],
        "subtext": "très précaire / profondément précaire / une position précaire",
        "comparative": "plus précaire",
        "superlative": "le plus précaire",
        "synonyms": [
            "instable",
            "risqué"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_020",
        "antonyms": [
            "stable"
        ],
        "transcription": ""
    },
    {
        "word": "prescriptif",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui dicte ce qui doit être fait ; qui fixe des règles.",
                "examples": [
                    "Les directives sont trop prescriptives pour permettre la créativité."
                ]
            }
        ],
        "subtext": "très prescriptif / hautement prescriptif / excessivement prescriptif",
        "comparative": "plus prescriptif",
        "superlative": "le plus prescriptif",
        "synonyms": [
            "dictatorial",
            "rigide"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_021",
        "antonyms": [
            "descriptif"
        ],
        "transcription": ""
    },
    {
        "word": "prolongé",
        "level": "proficiency",
        "theme": "time",
        "emoji": "⌛",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui dure plus longtemps que prévu.",
                "examples": [
                    "Le différend juridique a été long et prolongé."
                ]
            }
        ],
        "subtext": "très prolongé / extrêmement prolongé / un processus prolongé",
        "comparative": "plus prolongé",
        "superlative": "le plus prolongé",
        "synonyms": [
            "étendu",
            "long"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_003",
        "antonyms": [
            "bref"
        ],
        "transcription": ""
    },
    {
        "word": "réducteur",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📉",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui simplifie à l'excès quelque chose de complexe.",
                "examples": [
                    "Il serait réducteur d'expliquer tout uniquement par l'avidité."
                ]
            }
        ],
        "subtext": "très réducteur / profondément réducteur / une analyse réductrice",
        "comparative": "plus réducteur",
        "superlative": "le plus réducteur",
        "synonyms": [
            "simpliste",
            "minimaliste"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_022",
        "antonyms": [
            "complexe"
        ],
        "transcription": ""
    },
    {
        "word": "séminal",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌱",
        "form": "adjective",
        "definitions": [
            {
                "text": "Très important et influent ; original.",
                "examples": [
                    "Ce fut un moment séminal dans l'histoire de l'entreprise."
                ]
            }
        ],
        "subtext": "vraiment séminal / une œuvre séminale / une figure séminale",
        "comparative": "plus séminal",
        "superlative": "le plus séminal",
        "synonyms": [
            "influent",
            "novateur"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_004",
        "antonyms": [
            "insignifiant"
        ],
        "transcription": ""
    },
    {
        "word": "spécieux",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤥",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui semble correct mais est en réalité faux ; trompeur.",
                "examples": [
                    "L'argument est superficiellement attrayant, mais finalement spécieux."
                ]
            }
        ],
        "subtext": "très spécieux / une affirmation spécieuse / fondamentalement spécieux",
        "comparative": "plus spécieux",
        "superlative": "le plus spécieux",
        "synonyms": [
            "trompeur",
            "illusoire"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_023",
        "antonyms": [
            "valide"
        ],
        "transcription": ""
    },
    {
        "word": "spurieux",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤡",
        "form": "adjective",
        "definitions": [
            {
                "text": "Non authentique ; basé sur un raisonnement faux.",
                "examples": [
                    "C'est une comparaison spurieuse qui déforme le débat."
                ]
            }
        ],
        "subtext": "totalement spurieux / tout à fait spurieux / un argument spurieux",
        "comparative": "plus spurieux",
        "superlative": "le plus spurieux",
        "synonyms": [
            "faux",
            "fictif"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_024",
        "antonyms": [
            "authentique"
        ],
        "transcription": ""
    },
    {
        "word": "subversif",
        "level": "proficiency",
        "theme": "social",
        "emoji": "💣",
        "form": "adjective",
        "definitions": [
            {
                "text": "Destiné à miner un système établi.",
                "examples": [
                    "L'œuvre d'art a été jugée subversive par les autorités."
                ]
            }
        ],
        "subtext": "discrètement subversif / profondément subversif / ouvertement subversif",
        "comparative": "plus subversif",
        "superlative": "le plus subversif",
        "synonyms": [
            "rebelle",
            "disruptif"
        ],
        "lang": "fr",
        "id": "fr_proficiency_social_007",
        "antonyms": [
            "conformiste"
        ],
        "transcription": ""
    },
    {
        "word": "tacite",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤫",
        "form": "adjective",
        "definitions": [
            {
                "text": "Compris ou convenu sans être déclaré.",
                "examples": [
                    "Il y avait une entente tacite entre eux."
                ]
            }
        ],
        "subtext": "un accord tacite / approbation tacite / rester tacite",
        "comparative": "plus tacite",
        "superlative": "le plus tacite",
        "synonyms": [
            "implicite",
            "sous-entendu"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_025",
        "antonyms": [
            "explicite"
        ],
        "transcription": ""
    },
    {
        "word": "ténu",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🕸️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Très faible ou léger ; pas fermement établi.",
                "examples": [
                    "Le lien entre les deux événements est très ténu."
                ]
            }
        ],
        "subtext": "très ténu / plutôt ténu / un lien ténu",
        "comparative": "plus ténu",
        "superlative": "le plus ténu",
        "synonyms": [
            "fragile",
            "faible"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_026",
        "antonyms": [
            "fort"
        ],
        "transcription": ""
    },
    {
        "word": "transitoire",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌅",
        "form": "adjective",
        "definitions": [
            {
                "text": "Pas permanent ; qui passe rapidement.",
                "examples": [
                    "Les bénéfices étaient transitoires et ont disparu en quelques mois."
                ]
            }
        ],
        "subtext": "très transitoire / simplement transitoire / un effet transitoire",
        "comparative": "plus transitoire",
        "superlative": "le plus transitoire",
        "synonyms": [
            "temporaire",
            "fugace"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_005",
        "antonyms": [
            "permanent"
        ],
        "transcription": ""
    },
    {
        "word": "ubiquiste",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui apparaît partout ; très commun.",
                "examples": [
                    "Les smartphones sont devenus ubiquistes dans la vie quotidienne."
                ]
            }
        ],
        "subtext": "vraiment ubiquiste / apparemment ubiquiste / devenir ubiquiste",
        "comparative": "plus ubiquiste",
        "superlative": "le plus ubiquiste",
        "synonyms": [
            "omniprésent",
            "partout"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_006",
        "antonyms": [
            "rare"
        ],
        "transcription": ""
    },
    {
        "word": "univoque",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📢",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui ne laisse aucun doute ; tout à fait clair.",
                "examples": [
                    "Son soutien à la décision était univoque."
                ]
            }
        ],
        "subtext": "totalement univoque / absolument univoque / un rejet univoque",
        "comparative": "plus univoque",
        "superlative": "le plus univoque",
        "synonyms": [
            "clair",
            "catégorique"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_027",
        "antonyms": [
            "ambigu"
        ],
        "transcription": ""
    },
    {
        "word": "sans précédent",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "form": "adjective",
        "definitions": [
            {
                "text": "Qui n'est jamais arrivé auparavant.",
                "examples": [
                    "L'entreprise a atteint une croissance sans précédent en cinq ans."
                ]
            }
        ],
        "subtext": "vraiment sans précédent / totalement sans précédent / un événement sans précédent",
        "comparative": "plus inouï",
        "superlative": "le plus inouï",
        "synonyms": [
            "unique",
            "novateur"
        ],
        "lang": "fr",
        "id": "fr_proficiency_time_007",
        "antonyms": [
            "commun"
        ],
        "transcription": ""
    },
    {
        "word": "insoutenable",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "form": "adjective",
        "definitions": [
            {
                "text": "Incapable d'être maintenu ou défendu.",
                "examples": [
                    "Sa position est devenue totalement insoutenable."
                ]
            }
        ],
        "subtext": "totalement insoutenable / tout à fait insoutenable / un argument insoutenable",
        "comparative": "plus insoutenable",
        "superlative": "le plus insoutenable",
        "synonyms": [
            "indéfendable",
            "instable"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_028",
        "antonyms": [
            "défendable"
        ],
        "transcription": ""
    },
    {
        "word": "lourd",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📦",
        "form": "adjective",
        "definitions": [
            {
                "text": "Difficile à manipuler ou à gérer à cause de sa taille ou de sa complexité.",
                "examples": [
                    "Le processus est devenu lourd et inefficace."
                ]
            }
        ],
        "subtext": "très lourd / plutôt lourd / un système lourd",
        "comparative": "plus lourd",
        "superlative": "le plus lourd",
        "synonyms": [
            "encombrant",
            "laborieux"
        ],
        "lang": "fr",
        "id": "fr_proficiency_language_029",
        "antonyms": [
            "maniable"
        ],
        "transcription": ""
    }
];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data,
{
        "word": "herméneutique",
        "level": "proficiency",
        "theme": "philosophy_language",
        "emoji": "📜",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relatif à l'interprétation des textes ou du sens.",
                        "examples": [
                                "Il a adopté une approche herméneutique pour analyser les discours politiques."
                        ]
                }
        ]
},
{
        "word": "tautologique",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🔄",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Dire la même chose deux fois avec des mots différents ; raisonnement circulaire.",
                        "examples": [
                                "L'argument est tautologique : il suppose ce qu'il entend prouver."
                        ]
                }
        ]
},
{
        "word": "polysémique",
        "level": "proficiency",
        "theme": "linguistics_theory",
        "emoji": "🔠",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Ayant plusieurs sens.",
                        "examples": [
                                "Le mot 'liberté' est profondément polysémique dans le discours politique."
                        ]
                }
        ]
},
{
        "word": "post-colonial",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌍",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Relatif à la période suivant la domination coloniale, ou à la critique des héritages coloniaux.",
                        "examples": [
                                "La théorie post-coloniale remet en question les hypothèses occidentales sur le progrès."
                        ]
                }
        ]
},
{
        "word": "multipolaire",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🌐",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Décrivant un ordre mondial avec plusieurs centres de pouvoir plutôt qu'un ou deux.",
                        "examples": [
                                "Un monde multipolaire peut être plus instable mais plus représentatif."
                        ]
                }
        ]
},
{
        "word": "cosmopolite",
        "level": "proficiency",
        "theme": "political_theory",
        "emoji": "🏙️",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Familier avec et à l'aise dans de nombreux pays et cultures différents.",
                        "examples": [
                                "Elle avait une vision cosmopolite de l'obligation politique."
                        ]
                }
        ]
},
{
        "word": "narcissique",
        "level": "proficiency",
        "theme": "psychoanalysis_unconscious",
        "emoji": "🪞",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Ayant un intérêt excessif pour soi-même et son apparence ou ses réalisations.",
                        "examples": [
                                "Certains critiques décrivent la culture des célébrités comme narcissique."
                        ]
                }
        ]
},
{
        "word": "hétérodoxe",
        "level": "proficiency",
        "theme": "meta_argument_deconstruction",
        "emoji": "🚩",
        "form": "adjective",
        "definitions": [
                {
                        "text": "Contraire aux croyances ou à la doctrine établies ou acceptées.",
                        "examples": [
                                "Ses opinions économiques hétérodoxes n'étaient pas populaires dans les milieux universitaires traditionnels."
                        ]
                }
        ]
}
    ];

    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];

    if ("adjectivesData" !== "vocabularyData") {
        window.vocabularyData = window.vocabularyData || {};
        window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
    }
})();