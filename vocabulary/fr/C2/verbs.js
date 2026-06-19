// TODO: verify level classification
(function() {
const data = [
    {
        "word": "changement de paradigme",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔄",
        "form": "verb",
        "group": "er",
        "classification": "irregular",
        "aspect": "action",
        "v3": "changé de paradigme",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_language_001",
        "definitions": [
            {
                "text": "changement de paradigme",
                "examples": []
            }
        ]
    },
    {
        "word": "réifier",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🗿",
        "subtext": "réifier un concept / réifier le marché / réification du travail",
        "form": "verb",
        "definitions": [
            {
                "text": "Traiter un concept abstrait comme s'il s'agissait d'une chose concrète et réelle.",
                "examples": [
                    "Les modèles économiques réifient les forces du marché, les faisant paraître naturelles et inévitables."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "réifia",
        "v3": "réifié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "réifiant",
        "lang": "fr",
        "id": "fr_proficiency_language_002"
    },
    {
        "word": "sublimer",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌫️",
        "subtext": "sublimer le désir / sublimation de l'impulsion / rediriger vers",
        "form": "verb",
        "definitions": [
            {
                "text": "Rediriger un désir ou une impulsion vers une forme socialement acceptable.",
                "examples": [
                    "Il a sublimé sa frustration politique dans la recherche académique."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "sublima",
        "v3": "sublimé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "sublimant",
        "lang": "fr",
        "id": "fr_proficiency_language_003"
    },
    {
        "word": "se fonder sur",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏗️",
        "subtext": "se fonder sur / fonder une affirmation / fondé sur l'hypothèse",
        "form": "verb",
        "definitions": [
            {
                "text": "Baser une déclaration ou une action sur une condition particulière ; affirmer.",
                "examples": [
                    "Son argument se fonde sur un niveau de confiance institutionnelle qui n'existe plus."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "se fonda sur",
        "v3": "fondé sur",
        "group": "er",
        "auxiliary": "avoir",
        "reflexive": true,
        "v4": "se fonder sant",
        "lang": "fr",
        "id": "fr_proficiency_social_001"
    },
    {
        "word": "instancier",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🧱",
        "subtext": "instancier un concept / instancier dans la pratique / instanciation concrète",
        "form": "verb",
        "definitions": [
            {
                "text": "Représenter un concept abstrait par un exemple concret.",
                "examples": [
                    "L'étude de cas instancie la théorie de la capture réglementaire."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instancia",
        "v3": "instancié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "instanciant",
        "lang": "fr",
        "id": "fr_proficiency_language_004"
    },
    {
        "word": "nier",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚫",
        "subtext": "nier un argument / nier un droit / négation dialectique",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose inefficace ou en inverser l'effet.",
                "examples": [
                    "La nouvelle clause nie efficacement le droit qu'elle semble accorder."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "nia",
        "v3": "nié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "niant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_001"
    },
    {
        "word": "transcender",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌌",
        "subtext": "transcender les limites / transcender les catégories / transcender le personnel",
        "form": "verb",
        "definitions": [
            {
                "text": "Aller au-delà des limites de quelque chose.",
                "examples": [
                    "Le grand art transcende le moment historique de sa création."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "both",
        "v2": "transcenda",
        "v3": "transcendé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "transcendant",
        "lang": "fr",
        "id": "fr_proficiency_language_005"
    },
    {
        "word": "médier",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⚖️",
        "subtext": "médier entre / médier un conflit / socialement médié",
        "form": "verb",
        "definitions": [
            {
                "text": "Agir comme intermédiaire entre deux choses ou personnes ; modifier une relation.",
                "examples": [
                    "Le langage médie notre relation avec la réalité."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "média",
        "v3": "médié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "médiant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_002"
    },
    {
        "word": "élider",
        "level": "proficiency",
        "theme": "language",
        "emoji": "✂️",
        "subtext": "élider une distinction / élider la différence / délibérément élidé",
        "form": "verb",
        "definitions": [
            {
                "text": "Fusionner ou omettre quelque chose, en particulier une distinction cruciale.",
                "examples": [
                    "Le rapport élide la différence entre pauvreté et déprivation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "élida",
        "v3": "élidé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "élidant",
        "lang": "fr",
        "id": "fr_proficiency_language_006"
    },
    {
        "word": "obfusquer",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🌫️",
        "subtext": "obfusquer la vérité / obfuscation délibérée / obfusquer avec du jargon",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre délibérément quelque chose flou ou difficile à comprendre.",
                "examples": [
                    "Le langage technique a été utilisé pour obfusquer plutôt que pour clarifier."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obfusqua",
        "v3": "obfusqué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "obfusquant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_003"
    },
    {
        "word": "amalgamer",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🔀",
        "subtext": "amalgamer des questions / confondre avec / amalgamer dangereusement",
        "form": "verb",
        "definitions": [
            {
                "text": "Combiner deux choses distinctes comme s'il s'agissait de la même chose.",
                "examples": [
                    "Le débat amalgame l'immigration avec la migration irrégulière."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "amalgama",
        "v3": "amalgamé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "amalgamant",
        "lang": "fr",
        "id": "fr_proficiency_language_007"
    },
    {
        "word": "invoquer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "invoquer un droit / invoquer un précédent / invoquer un argument",
        "form": "verb",
        "definitions": [
            {
                "text": "Faire appel à ou citer quelque chose pour soutenir un argument.",
                "examples": [
                    "Elle a invoqué le droit à la liberté d'expression pour défendre la publication."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "invoqua",
        "v3": "invoqué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "invoquant",
        "lang": "fr",
        "id": "fr_proficiency_social_002"
    },
    {
        "word": "mettre en avant",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🔦",
        "subtext": "mettre en avant une question / mettre en avant une perspective",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose l'élément le plus important ou le plus visible.",
                "examples": [
                    "Le film met en avant la race comme lentille organisationnelle centrale."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "mit en avant",
        "v3": "mis en avant",
        "group": "re",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_psychology_004"
    },
    {
        "word": "récupérer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧽",
        "subtext": "récupérer un mouvement / être récupéré par / récupération culturelle",
        "form": "verb",
        "definitions": [
            {
                "text": "Absorber et neutraliser des idées subversives au sein d'un système dominant.",
                "examples": [
                    "L'industrie de la mode a récupéré l'esthétique rebelle du punk."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "récupéra",
        "v3": "récupéré",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "récupérant",
        "lang": "fr",
        "id": "fr_proficiency_social_003"
    },
    {
        "word": "déstabiliser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌪️",
        "subtext": "déstabiliser un régime / déstabiliser des hypothèses / déstabiliser délibérément",
        "form": "verb",
        "definitions": [
            {
                "text": "Affaiblir la stabilité d'un système, d'un concept ou d'une position.",
                "examples": [
                    "L'argument déstabilise la prémisse centrale du libéralisme."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "déstabilisa",
        "v3": "déstabilisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "déstabilisant",
        "lang": "fr",
        "id": "fr_proficiency_social_004"
    },
    {
        "word": "marchandiser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🏷️",
        "subtext": "marchandiser le travail / marchandiser le soin / marchandisation de l'attention",
        "form": "verb",
        "definitions": [
            {
                "text": "Traiter quelque chose qui n'est pas un produit comme une marchandise commerciale.",
                "examples": [
                    "L'industrie du bien-être marchandise la santé mentale et le soin de soi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "marchandisa",
        "v3": "marchandisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "marchandisant",
        "lang": "fr",
        "id": "fr_proficiency_social_005"
    },
    {
        "word": "instrumentaliser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛠️",
        "subtext": "instrumentaliser les gens / instrumentaliser une idée / réduire à un instrument",
        "form": "verb",
        "definitions": [
            {
                "text": "Traiter quelque chose comme un simple outil ou un moyen pour une fin.",
                "examples": [
                    "Les critiques ont soutenu que la politique instrumentalisait la santé des travailleurs."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "instrumentalisa",
        "v3": "instrumentalisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "instrumentalisant",
        "lang": "fr",
        "id": "fr_proficiency_social_006"
    },
    {
        "word": "valoriser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🎖️",
        "subtext": "valoriser le travail / valoriser un concept / être valorisé par la culture",
        "form": "verb",
        "definitions": [
            {
                "text": "Attribuer de la valeur à quelque chose, en particulier dans un sens culturel ou idéologique.",
                "examples": [
                    "La culture moderne valorise la productivité au détriment du repos."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "valorisa",
        "v3": "valorisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "valorisant",
        "lang": "fr",
        "id": "fr_proficiency_social_007"
    },
    {
        "word": "fétichiser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🧿",
        "subtext": "fétichiser une idée / fétichisme de la marchandise / fétichiser la croissance",
        "form": "verb",
        "definitions": [
            {
                "text": "Avoir une vénération excessive pour quelque chose ; ou dans la théorie marxiste, attribuer par erreur des relations sociales à des objets.",
                "examples": [
                    "La culture des startups fétichise la disruption comme une fin en soi."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "fétichisa",
        "v3": "fétichisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "fétichisant",
        "lang": "fr",
        "id": "fr_proficiency_social_008"
    },
    {
        "word": "hégémoniser",
        "level": "proficiency",
        "theme": "social",
        "emoji": "👑",
        "subtext": "hégémoniser le discours / tendance hégémonisante / résister à l'hégémonisation",
        "form": "verb",
        "definitions": [
            {
                "text": "Établir ou étendre une domination par des moyens culturels ou idéologiques.",
                "examples": [
                    "Une seule plateforme ne peut hégémoniser le discours public sans résistance.",
                    "Un cadre théorique est parvenu à hégémoniser le domaine."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "hégémonisa",
        "v3": "hégémonisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "hégémonisant",
        "lang": "fr",
        "id": "fr_proficiency_social_009"
    },
    {
        "word": "aliéner",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⛓️",
        "subtext": "aliéner quelqu'un / se sentir aliéné / aliénation marxiste",
        "form": "verb",
        "definitions": [
            {
                "text": "Dans la théorie marxiste, séparer les travailleurs du produit de leur travail ; plus largement, provoquer l'éloignement.",
                "examples": [
                    "Les conditions de travail industrielles aliènent les travailleurs de tout sens de l'artisanat."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "aliéna",
        "v3": "aliéné",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "aliénant",
        "lang": "fr",
        "id": "fr_proficiency_social_010"
    },
    {
        "word": "démarquer",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📏",
        "subtext": "démarquer une frontière / démarquer clairement / ligne de démarcation",
        "form": "verb",
        "definitions": [
            {
                "text": "Établir la limite ou les frontières de quelque chose.",
                "examples": [
                    "La loi tente de démarquer la ligne entre régulation et censure."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "démarqua",
        "v3": "démarqué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "démarquant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_005"
    },
    {
        "word": "délimiter",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚧",
        "subtext": "délimiter le champ / délimiter un concept / soigneusement délimité",
        "form": "verb",
        "definitions": [
            {
                "text": "Déterminer les limites de quelque chose.",
                "examples": [
                    "L'étude délimite délibérément son champ pour éviter les généralisations excessives."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "délimita",
        "v3": "délimité",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "délimitant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_006"
    },
    {
        "word": "militer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "⚖️",
        "subtext": "militer contre / militer fortement / militer en faveur de",
        "form": "verb",
        "definitions": [
            {
                "text": "Être un facteur puissant agissant contre quelque chose.",
                "examples": [
                    "La complexité du système milite contre une réforme efficace."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "milita",
        "v3": "milité",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "militant",
        "lang": "fr",
        "id": "fr_proficiency_social_011"
    },
    {
        "word": "vicier",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🧪",
        "subtext": "vicier une affirmation / vicier un argument / légalement vicié",
        "form": "verb",
        "definitions": [
            {
                "text": "Altérer la qualité ou l'efficacité de quelque chose ; invalider.",
                "examples": [
                    "Le défaut méthodologique vicie les conclusions de l'ensemble de l'étude."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "vicia",
        "v3": "vicié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "viciant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_007"
    },
    {
        "word": "contredire",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🗣️",
        "subtext": "difficile à contredire / personne ne peut nier / nier une affirmation",
        "form": "verb",
        "definitions": [
            {
                "text": "Nier ou contredire quelque chose.",
                "examples": [
                    "Il est difficile de contredire les preuves présentées par le comité."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contredit",
        "v3": "contredit",
        "group": "re",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_psychology_008"
    },
    {
        "word": "abroger",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔨",
        "subtext": "abroger un accord / abroger un traité / abrogation unilatérale",
        "form": "verb",
        "definitions": [
            {
                "text": "Révoquer ou abolir formellement une loi ou un accord.",
                "examples": [
                    "Le gouvernement a cherché à abroger unilatéralement l'accord commercial."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "abrogea",
        "v3": "abrogé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "abrogant",
        "lang": "fr",
        "id": "fr_proficiency_social_012"
    },
    {
        "word": "déconstruire",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🏚️",
        "subtext": "déconstruire un argument / déconstruire un texte / déconstruction derridiana",
        "form": "verb",
        "definitions": [
            {
                "text": "Analyser les hypothèses et les contradictions au sein d'un texte ou d'un argument.",
                "examples": [
                    "Elle a déconstruit le document politique pour en révéler les hypothèses idéologiques."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "déconstruisit",
        "v3": "déconstruit",
        "group": "re",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_psychology_009"
    },
    {
        "word": "problématiser",
        "level": "proficiency",
        "theme": "language",
        "emoji": "❓",
        "subtext": "problématiser un concept / résister à l'envie de problématiser",
        "form": "verb",
        "definitions": [
            {
                "text": "Identifier et articuler les aspects problématiques d'un concept ou d'une pratique.",
                "examples": [
                    "La conférence problématise la notion de choix individuel dans la société de consommation."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "problématisa",
        "v3": "problématisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "problématisant",
        "lang": "fr",
        "id": "fr_proficiency_language_008"
    },
    {
        "word": "décortiquer",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📦",
        "subtext": "décortiquer une hypothèse / décortiquer les implications",
        "form": "verb",
        "definitions": [
            {
                "text": "Décomposer et examiner les composants et les implications de quelque chose.",
                "examples": [
                    "Avant de poursuivre, laissez-nous décortiquer ce que nous entendons ici par responsabilité."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "décortiqua",
        "v3": "décortiqué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "décortiquant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_010"
    },
    {
        "word": "forclore",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚪",
        "subtext": "forclore une option / forclore le débat / forclore la possibilité de",
        "form": "verb",
        "definitions": [
            {
                "text": "Empêcher une possibilité d'être envisagée ; exclure.",
                "examples": [
                    "La formulation de la question forclot les réponses les plus intéressantes."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "forclosit",
        "v3": "forclos",
        "group": "re",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_psychology_011"
    },
    {
        "word": "dialectiser",
        "level": "proficiency",
        "theme": "language",
        "emoji": "☯️",
        "subtext": "dialectiser un binaire / méthode dialectique / thèse et antithèse",
        "form": "verb",
        "definitions": [
            {
                "text": "Aborder quelque chose par la méthode du raisonnement dialectique.",
                "examples": [
                    "Il dialectise l'opposition entre liberté et sécurité."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dialectisa",
        "v3": "dialectisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "dialectisant",
        "lang": "fr",
        "id": "fr_proficiency_language_009"
    },
    {
        "word": "contrevenir",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "contrevenir à une loi / contrevenir aux règlements",
        "form": "verb",
        "definitions": [
            {
                "text": "Agir contre une règle, une loi ou un accord.",
                "examples": [
                    "La décision a été jugée contrevenir au droit de la concurrence de l'UE."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "contrevint",
        "v3": "contrevenu",
        "group": "ir",
        "auxiliary": "être",
        "lang": "fr",
        "id": "fr_proficiency_social_013"
    },
    {
        "word": "subsumer",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📂",
        "subtext": "subsumer sous / être subsumé par / subsumer dans une catégorie",
        "form": "verb",
        "definitions": [
            {
                "text": "Inclure ou absorber quelque chose au sein d'une catégorie plus large.",
                "examples": [
                    "Sa théorie subsume tous les récits précédents au sein d'un cadre unique."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "subsuma",
        "v3": "subsumé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "subsumant",
        "lang": "fr",
        "id": "fr_proficiency_language_010"
    },
    {
        "word": "accentuer",
        "level": "proficiency",
        "theme": "language",
        "emoji": "💡",
        "subtext": "accentuer une différence / accentuer le positif / être accentué par",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre quelque chose plus proéminent ou évident.",
                "examples": [
                    "La crise a accentué les inégalités existantes au sein de la main-d'œuvre."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "accentua",
        "v3": "accentué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "accentuant",
        "lang": "fr",
        "id": "fr_proficiency_language_011"
    },
    {
        "word": "acquiescer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🤝",
        "subtext": "acquiescer à / acquiescement réticent",
        "form": "verb",
        "definitions": [
            {
                "text": "Accepter quelque chose sans s'y opposer.",
                "examples": [
                    "Il a acquiescé à la décision du conseil malgré de fortes réserves."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "acquiesça",
        "v3": "acquiescé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "acquiescant",
        "lang": "fr",
        "id": "fr_proficiency_social_014"
    },
    {
        "word": "soulager",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🩹",
        "subtext": "soulager la souffrance / soulager la pauvreté / soulager la pression",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre un problème moins grave.",
                "examples": [
                    "La nouvelle politique a peu fait pour soulager la crise du logement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "soulagea",
        "v3": "soulagé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "soulagant",
        "lang": "fr",
        "id": "fr_proficiency_social_015"
    },
    {
        "word": "contourner",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🔄",
        "subtext": "contourner les règles / contourner un problème / contourner les contrôles",
        "form": "verb",
        "definitions": [
            {
                "text": "Trouver un moyen d'éviter une règle ou une difficulté.",
                "examples": [
                    "Elle a trouvé un moyen légal de contourner l'obstacle bureaucratique."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "contourna",
        "v3": "contourné",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "contournant",
        "lang": "fr",
        "id": "fr_proficiency_social_016"
    },
    {
        "word": "corroborer",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "✅",
        "subtext": "corroborer une affirmation / corroborer des preuves",
        "form": "verb",
        "definitions": [
            {
                "text": "Confirmer ou soutenir une déclaration avec des preuves.",
                "examples": [
                    "Le témoignage du témoin a pleinement corroboré les preuves documentaires."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "corrobora",
        "v3": "corroboré",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "corroborant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_012"
    },
    {
        "word": "disséminer",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "📢",
        "subtext": "disséminer des informations / disséminer les résultats / largement disséminé",
        "form": "verb",
        "definitions": [
            {
                "text": "Répandre largement des informations ou des idées.",
                "examples": [
                    "Les résultats ont été disséminés à travers des réseaux de recherche internationaux."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "dissémina",
        "v3": "disséminé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "disséminant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_013"
    },
    {
        "word": "encapsuler",
        "level": "proficiency",
        "theme": "language",
        "emoji": "💊",
        "subtext": "encapsuler une idée / encapsuler le problème / encapsuler parfaitement",
        "form": "verb",
        "definitions": [
            {
                "text": "Exprimer les caractéristiques essentielles de quelque chose de manière concise.",
                "examples": [
                    "L'expression encapsule parfaitement le paradoxe du travail moderne."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "encapsula",
        "v3": "encapsulé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "encapsulant",
        "lang": "fr",
        "id": "fr_proficiency_language_012"
    },
    {
        "word": "engendrer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🌱",
        "subtext": "engendrer la confiance / engendrer un conflit / engendrer du ressentiment",
        "form": "verb",
        "definitions": [
            {
                "text": "Provoquer ou donner naissance à un sentiment ou à une situation.",
                "examples": [
                    "La nouvelle politique a engendré un ressentiment considérable parmi le personnel."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "engendra",
        "v3": "engendré",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "engendrant",
        "lang": "fr",
        "id": "fr_proficiency_social_017"
    },
    {
        "word": "exacerber",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📈",
        "subtext": "exacerber un problème / exacerber les tensions / exacerber l'inégalité",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre un problème ou une situation pire.",
                "examples": [
                    "Le ralentissement économique a exacerbé les inégalités sociales existantes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "exacerba",
        "v3": "exacerbé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "exacerbant",
        "lang": "fr",
        "id": "fr_proficiency_social_018"
    },
    {
        "word": "exemplifier",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🌟",
        "subtext": "exemplifier quelque chose / exemplifier le problème / exemplifier clairement",
        "form": "verb",
        "definitions": [
            {
                "text": "Être un parfait exemple de quelque chose.",
                "examples": [
                    "Sa carrière exemplifie les défis auxquels sont confrontées les femmes dans des rôles de direction."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "exemplifia",
        "v3": "exemplifié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "exemplifiant",
        "lang": "fr",
        "id": "fr_proficiency_language_013"
    },
    {
        "word": "entraver",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛑",
        "subtext": "entraver le progrès / entraver la croissance / entraver quelqu'un",
        "form": "verb",
        "definitions": [
            {
                "text": "Retarder ou empêcher la progression de quelque chose.",
                "examples": [
                    "Une réglementation excessive peut entraver l'innovation dans de nouvelles industries."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "entrava",
        "v3": "entravé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "entravant",
        "lang": "fr",
        "id": "fr_proficiency_social_019"
    },
    {
        "word": "atténuer",
        "level": "proficiency",
        "theme": "social",
        "emoji": "🛡️",
        "subtext": "atténuer le risque / atténuer l'impact / atténuer contre",
        "form": "verb",
        "definitions": [
            {
                "text": "Rendre un effet nocif moins grave.",
                "examples": [
                    "Une bonne communication peut aider à atténuer l'impact du changement."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "atténua",
        "v3": "atténué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "atténuant",
        "lang": "fr",
        "id": "fr_proficiency_social_020"
    },
    {
        "word": "obliger",
        "level": "proficiency",
        "theme": "social",
        "emoji": "📜",
        "subtext": "être obligé de / obliger quelqu'un à / se sentir obligé",
        "form": "verb",
        "definitions": [
            {
                "text": "Exiger que quelqu'un fasse quelque chose par la loi ou par devoir moral.",
                "examples": [
                    "La loi oblige tous les employeurs à fournir un environnement de travail sûr."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "obligea",
        "v3": "obligé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "obligant",
        "lang": "fr",
        "id": "fr_proficiency_social_021"
    },
    {
        "word": "imprégner",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🌊",
        "subtext": "imprégner l'organisation / être imprégné par / omniprésent",
        "form": "verb",
        "definitions": [
            {
                "text": "Se propager à travers et être présent dans chaque partie de quelque chose.",
                "examples": [
                    "Une culture de surmenage imprègne le secteur des services financiers."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "imprégna",
        "v3": "imprégné",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "imprégnant",
        "lang": "fr",
        "id": "fr_proficiency_time_001"
    },
    {
        "word": "exclure",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "🚫",
        "subtext": "exclure quelqu'un / exclure la possibilité / n'exclut pas",
        "form": "verb",
        "definitions": [
            {
                "text": "Empêcher quelque chose d'arriver.",
                "examples": [
                    "Son manque d'expérience pertinente l'a exclu de la liste restreinte."
                ]
            }
        ],
        "classification": "irregular",
        "aspect": "action",
        "v2": "exclut",
        "v3": "exclu",
        "group": "re",
        "auxiliary": "avoir",
        "lang": "fr",
        "id": "fr_proficiency_psychology_014"
    },
    {
        "word": "réconcilier",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤝",
        "subtext": "réconcilier des idées / difficile à réconcilier / réconcilier les différences",
        "form": "verb",
        "definitions": [
            {
                "text": "Rétablir des relations amicales ; rendre compatible.",
                "examples": [
                    "Elle a trouvé impossible de réconcilier ses valeurs avec la culture d'entreprise."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "réconcilia",
        "v3": "réconcilié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "réconciliant",
        "lang": "fr",
        "id": "fr_proficiency_language_014"
    },
    {
        "word": "supplanter",
        "level": "proficiency",
        "theme": "time",
        "emoji": "🚀",
        "subtext": "supplanter une loi / supplanter les directives précédentes",
        "form": "verb",
        "definitions": [
            {
                "text": "Prendre la place de quelque chose précédemment utilisé.",
                "examples": [
                    "Les nouvelles directives supplanteront toutes les versions précédentes."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "supplanta",
        "v3": "supplanté",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "supplantant",
        "lang": "fr",
        "id": "fr_proficiency_time_002"
    },
    {
        "word": "sous-tendre",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🏗️",
        "subtext": "sous-tendre un argument / sous-tendre le succès",
        "form": "verb",
        "definitions": [
            {
                "text": "Soutenir ou former le fondement de quelque chose.",
                "examples": [
                    "Une confiance solide sous-tend chaque partenariat réussi à long terme."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "sous-tendit",
        "v3": "sous-tendu",
        "group": "re",
        "auxiliary": "avoir",
        "v4": "sous-tendant",
        "lang": "fr",
        "id": "fr_proficiency_language_015"
    },
    {
        "word": "justifier",
        "level": "proficiency",
        "theme": "psychology",
        "emoji": "⚖️",
        "subtext": "justifier quelqu'un / justifier une décision / se sentir justifié",
        "form": "verb",
        "definitions": [
            {
                "text": "Dégager quelqu'un d'un blâme ; montrer que quelque chose était justifié.",
                "examples": [
                    "Les résultats ont justifié sa décision controversée deux ans plus tard."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "justifia",
        "v3": "justifié",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "justifiant",
        "lang": "fr",
        "id": "fr_proficiency_psychology_015"
    },
    {
        "word": "reposer sur",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🚪",
        "subtext": "reposer sur une décision / reposer sur un seul facteur",
        "form": "verb",
        "definitions": [
            {
                "text": "Dépendre entièrement d'un facteur particulier.",
                "examples": [
                    "Le succès total du projet repose sur l'approbation du client."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "stative",
        "v2": "reposa sur",
        "v3": "reposé sur",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "reposer sant",
        "lang": "fr",
        "id": "fr_proficiency_language_016"
    },
    {
        "word": "se débattre avec",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🤼",
        "subtext": "se débattre avec un problème / aux prises avec les implications",
        "form": "verb",
        "definitions": [
            {
                "text": "Lutter pour comprendre ou faire face à quelque chose.",
                "examples": [
                    "Les décideurs politiques se débattent encore avec les implications de l'IA."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "se débattit avec",
        "v3": "débattu avec",
        "group": "er",
        "auxiliary": "avoir",
        "reflexive": true,
        "v4": "se débattre avant",
        "lang": "fr",
        "id": "fr_proficiency_language_017"
    },
    {
        "word": "minimiser",
        "level": "proficiency",
        "theme": "language",
        "emoji": "🎨",
        "subtext": "minimiser un problème / passer sous silence les détails",
        "form": "verb",
        "definitions": [
            {
                "text": "Traiter quelque chose trop rapidement pour éviter les difficultés.",
                "examples": [
                    "Le rapport minimise les détails financiers les plus controversés."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "minimisa",
        "v3": "minimisé",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "minimisant",
        "lang": "fr",
        "id": "fr_proficiency_language_018"
    },
    {
        "word": "masquer",
        "level": "proficiency",
        "theme": "language",
        "emoji": "📄",
        "subtext": "masquer un problème / masquer les fissures / masquer les différences",
        "form": "verb",
        "definitions": [
            {
                "text": "Cacher ou obscurcir un problème sans le résoudre.",
                "examples": [
                    "L'accord a simplement masqué les profondes divisions structurelles."
                ]
            }
        ],
        "classification": "regular",
        "aspect": "action",
        "v2": "masqua",
        "v3": "masqué",
        "group": "er",
        "auxiliary": "avoir",
        "v4": "masquant",
        "lang": "fr",
        "id": "fr_proficiency_language_019"
    }
];
    const lang = "fr";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);

})();