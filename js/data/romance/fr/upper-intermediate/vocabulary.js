(function() {
    const data = [
    {
        "word": "avocat",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "l'",
        "emoji": "⚖️",
        "form": "noun",
        "plural": "avocats",
        "definitions": [
            {
                "text": "Une personne qui donne des conseils juridiques et représente les gens au tribunal.",
                "examples": [
                    "Je dois parler à mon avocat.",
                    "L'avocat est au tribunal."
                ]
            }
        ]
    },
    {
        "word": "psychologue",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "le",
        "emoji": "🧠",
        "form": "noun",
        "plural": "psychologues",
        "definitions": [
            {
                "text": "Une personne qui étudie le comportement et la pensée.",
                "examples": [
                    "Le psychologue écoute son patient."
                ]
            }
        ]
    },
    {
        "word": "responsabilité",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "la",
        "emoji": "📑",
        "form": "noun",
        "plural": "responsabilités",
        "subtext": "obligation de rendre compte",
        "definitions": [
            {
                "text": "Le fait de devoir répondre de ses actes devant une autorité.",
                "examples": [
                    "Il y a peu de responsabilité dans cette organisation."
                ]
            }
        ]
    },
    {
        "word": "incitation",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "l'",
        "emoji": "🥕",
        "form": "noun",
        "plural": "incitations",
        "subtext": "incitation financière, encouragement",
        "definitions": [
            {
                "text": "Ce qui pousse quelqu'un à agir d'une certaine manière.",
                "examples": [
                    "Les incitations financières peuvent améliorer la productivité."
                ]
            }
        ]
    },
    {
        "word": "autonomie",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "article": "l'",
        "emoji": "🔓",
        "form": "noun",
        "plural": null,
        "subtext": "indépendance, liberté d'action",
        "opposite": "dépendance",
        "definitions": [
            {
                "text": "Le droit ou la capacité d'agir de manière indépendante.",
                "examples": [
                    "Les employés sont plus performants lorsqu'ils ont de l'autonomie."
                ]
            }
        ]
    },
    {
        "word": "précarité",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "la",
        "emoji": "🧗",
        "form": "noun",
        "plural": null,
        "subtext": "instabilité d'emploi, fragilité sociale",
        "opposite": "stabilité",
        "definitions": [
            {
                "text": "Un état d'insécurité et d'incertitude quant à l'emploi ou aux conditions de vie.",
                "examples": [
                    "L'économie à la demande a augmenté la précarité de l'emploi."
                ]
            }
        ]
    },
    {
        "word": "écart de rémunération",
        "level": "upper-intermediate",
        "theme": "gender_equality_B2",
        "article": "l'",
        "emoji": "⚖️📉",
        "form": "noun phrase",
        "plural": "écarts de rémunération",
        "subtext": "écart salarial entre hommes et femmes",
        "definitions": [
            {
                "text": "Une différence de revenus moyens entre des groupes, notamment entre hommes et femmes.",
                "examples": [
                    "L'écart de rémunération entre les sexes reste important dans de nombreux secteurs."
                ]
            }
        ]
    },
    {
        "word": "prime de licenciement",
        "level": "upper-intermediate",
        "theme": "employment_law_rights_B2",
        "article": "la",
        "emoji": "📦",
        "form": "noun phrase",
        "plural": "primes de licenciement",
        "subtext": "indemnités de départ",
        "definitions": [
            {
                "text": "L'argent et les avantages versés lorsqu'une personne perd son emploi.",
                "examples": [
                    "Elle a reçu une généreuse prime de licenciement."
                ]
            }
        ]
    },
    {
        "word": "entrepreneuriat",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "l'",
        "emoji": "💡",
        "form": "noun",
        "plural": null,
        "subtext": "esprit d'entreprise, création de business",
        "definitions": [
            {
                "text": "L'activité consistant à créer et à gérer une entreprise.",
                "examples": [
                    "L'entrepreneuriat exige une prise de risque et de la créativité."
                ]
            }
        ]
    },
    {
        "word": "productivité",
        "level": "upper-intermediate",
        "theme": "economy_labour_market_B2",
        "article": "la",
        "emoji": "⚡",
        "form": "noun",
        "plural": null,
        "subtext": "rendement, efficacité",
        "definitions": [
            {
                "text": "Le rythme auquel les biens sont produits ou le travail est accompli.",
                "examples": [
                    "Le travail à distance peut augmenter la productivité pour certaines personnes."
                ]
            }
        ]
    },
    {
        "word": "externalisation",
        "level": "upper-intermediate",
        "theme": "globalisation_trade_B2",
        "article": "l'",
        "emoji": "🌐",
        "form": "noun",
        "plural": "externalisations",
        "subtext": "sous-traitance, outsourcing",
        "definitions": [
            {
                "text": "Fait de confier une activité à une entreprise extérieure.",
                "examples": [
                    "Ils externalisent le service client pour réduire les coûts."
                ]
            }
        ]
    },
    {
        "word": "automatisation",
        "level": "upper-intermediate",
        "theme": "applied_sciences_engineering_B2",
        "article": "l'",
        "emoji": "🤖",
        "form": "noun",
        "plural": null,
        "subtext": "automatisation industrielle",
        "definitions": [
            {
                "text": "L'utilisation de machines ou d'ordinateurs pour effectuer un travail auparavant fait par des personnes.",
                "examples": [
                    "L'automatisation change considérablement le marché du travail."
                ]
            }
        ]
    },
    {
        "word": "gentrification",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "la",
        "emoji": "🏘️📈",
        "form": "noun",
        "plural": null,
        "subtext": "embourgeoisement urbain",
        "definitions": [
            {
                "text": "Processus de transformation d'un quartier populaire par l'arrivée de populations plus aisées.",
                "examples": [
                    "La gentrification a changé le caractère du quartier."
                ]
            }
        ]
    },
    {
        "word": "logement abordable",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "le",
        "emoji": "🏠💰",
        "form": "noun phrase",
        "plural": "logements abordables",
        "subtext": "logement social",
        "definitions": [
            {
                "text": "Logement dont le coût est adapté aux revenus des ménages modestes.",
                "examples": [
                    "La ville a besoin de plus de logements abordables."
                ]
            }
        ]
    },
    {
        "word": "étalement urbain",
        "level": "upper-intermediate",
        "theme": "housing_society_B2",
        "article": "l'",
        "emoji": "🏙️↔️",
        "form": "noun phrase",
        "plural": null,
        "subtext": "expansion urbaine incontrôlée",
        "definitions": [
            {
                "text": "Le développement spatial incontrôlé des villes vers les zones environnantes.",
                "examples": [
                    "L'étalement urbain augmente la dépendance à la voiture."
                ]
            }
        ]
    },
    {
        "word": "infrastructure",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "l'",
        "emoji": "🏗️",
        "form": "noun",
        "plural": "infrastructures",
        "subtext": "infrastructures de transport",
        "definitions": [
            {
                "text": "Ensemble des installations nécessaires à une collectivité (routes, réseaux).",
                "examples": [
                    "L'infrastructure de la ville a besoin d'investissements."
                ]
            }
        ]
    },
    {
        "word": "État-providence",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "l'",
        "emoji": "🛡️🏛️",
        "form": "noun phrase",
        "plural": "États-providence",
        "subtext": "protection sociale",
        "definitions": [
            {
                "text": "Système dans lequel l'État assure une protection sociale aux citoyens.",
                "examples": [
                    "L'État-providence fournit des soins de santé et des retraites."
                ]
            }
        ]
    },
    {
        "word": "polarisation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "la",
        "emoji": "↔️❌",
        "form": "noun",
        "plural": "polarisations",
        "subtext": "polarisation politique",
        "definitions": [
            {
                "text": "Division d'un groupe en deux camps opposés sur un sujet.",
                "examples": [
                    "Les réseaux sociaux ont augmenté la polarisation politique."
                ]
            }
        ]
    },
    {
        "word": "discours",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "le",
        "emoji": "🗣️",
        "form": "noun",
        "plural": "discours",
        "subtext": "discours public, débat",
        "definitions": [
            {
                "text": "Communication écrite ou parlée sur un sujet particulier.",
                "examples": [
                    "Le discours public autour de l'immigration est très animé."
                ]
            }
        ]
    },
    {
        "word": "examen approfondi",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "l'",
        "emoji": "🔍",
        "form": "noun phrase",
        "plural": "examens approfondis",
        "subtext": "scrutin, analyse détaillée",
        "definitions": [
            {
                "text": "Étude minutieuse et attentive de quelqu'un ou de quelque chose.",
                "examples": [
                    "La décision du gouvernement fait l'objet d'un examen approfondi."
                ]
            }
        ]
    },
    {
        "word": "consensus",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "le",
        "emoji": "🤝",
        "form": "noun",
        "plural": "consensus",
        "subtext": "accord général",
        "definitions": [
            {
                "text": "Accord général parmi un groupe de personnes.",
                "examples": [
                    "Il y a un consensus croissant sur l'action climatique."
                ]
            }
        ]
    },
    {
        "word": "législation",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "la",
        "emoji": "📜",
        "form": "noun",
        "plural": "législations",
        "subtext": "ensemble des lois",
        "definitions": [
            {
                "text": "Ensemble des lois faites par un gouvernement.",
                "examples": [
                    "Une nouvelle législation sur la confidentialité des données est entrée en vigueur."
                ]
            }
        ]
    },
    {
        "word": "parti pris",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "article": "le",
        "emoji": "⚖️❌",
        "form": "noun phrase",
        "plural": "partis pris",
        "subtext": "biais, préjugé",
        "opposite": "impartialité",
        "definitions": [
            {
                "text": "Tendance injuste à favoriser ou à s'opposer à quelqu'un ou à quelque chose.",
                "examples": [
                    "Le parti pris inconscient peut affecter les décisions d'embauche."
                ]
            }
        ]
    },
    {
        "word": "obésité",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "l'",
        "emoji": "⚖️⬆️",
        "form": "noun",
        "plural": null,
        "subtext": "excès de poids",
        "definitions": [
            {
                "text": "État d'un individu ayant un excès de poids nuisible à sa santé.",
                "examples": [
                    "Les taux d'obésité ont fortement augmenté au cours des dernières décennies."
                ]
            }
        ]
    },
    {
        "word": "espérance de vie",
        "level": "upper-intermediate",
        "theme": "health_society_B2",
        "article": "l'",
        "emoji": "⏳👴",
        "form": "noun phrase",
        "plural": "espérances de vie",
        "subtext": "durée de vie moyenne",
        "definitions": [
            {
                "text": "Nombre moyen d'années qu'une personne peut espérer vivre.",
                "examples": [
                    "L'espérance de vie a augmenté dans la plupart des pays."
                ]
            }
        ]
    },
    {
        "word": "justice",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "la",
        "emoji": "⚖️",
        "form": "noun",
        "plural": null,
        "subtext": "justice sociale, système judiciaire",
        "opposite": "injustice",
        "definitions": [
            {
                "text": "Traitement juste et qualité de ce qui est conforme au droit.",
                "examples": [
                    "Le système judiciaire doit protéger tous les citoyens."
                ]
            }
        ]
    },
    {
        "word": "réinsertion",
        "level": "upper-intermediate",
        "theme": "crime_punishment_B2",
        "article": "la",
        "emoji": "🔄🏢",
        "form": "noun",
        "plural": "réinsertions",
        "subtext": "réhabilitation, retour à la vie normale",
        "definitions": [
            {
                "text": "Processus consistant à aider quelqu'un à reprendre une vie normale après un crime ou une maladie.",
                "examples": [
                    "La prison devrait se concentrer sur la réinsertion."
                ]
            }
        ]
    },
    {
        "word": "transparence",
        "level": "upper-intermediate",
        "theme": "politics_governance_B2",
        "article": "la",
        "emoji": "🪟",
        "form": "noun",
        "plural": "transparences",
        "subtext": "plus de transparence, honnêteté",
        "opposite": "opacité",
        "definitions": [
            {
                "text": "Fait d'être ouvert et honnête sur les actions et les décisions.",
                "examples": [
                    "Le public exige une plus grande transparence de la part des politiciens."
                ]
            }
        ]
    },
    {
        "word": "algorithme",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "l'",
        "emoji": "💻",
        "form": "noun",
        "plural": "algorithmes",
        "subtext": "algorithme informatique",
        "definitions": [
            {
                "text": "Une suite d'instructions permettant de résoudre un problème.",
                "examples": [
                    "Les algorithmes des réseaux sociaux déterminent ce que vous voyez."
                ]
            }
        ]
    },
    {
        "word": "confidentialité des données",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "la",
        "emoji": "🔒",
        "form": "noun phrase",
        "plural": null,
        "subtext": "protection des données",
        "definitions": [
            {
                "text": "Le droit de contrôler la manière dont les informations personnelles sont collectées.",
                "examples": [
                    "Les lois sur la confidentialité des données deviennent plus strictes."
                ]
            }
        ]
    },
    {
        "word": "désinformation",
        "level": "upper-intermediate",
        "theme": "media_misinformation_B2",
        "article": "la",
        "emoji": "🤥",
        "form": "noun",
        "plural": null,
        "subtext": "fausses informations, fake news",
        "definitions": [
            {
                "text": "Informations fausses ou inexactes largement diffusées.",
                "examples": [
                    "Les réseaux sociaux peuvent propager la désinformation rapidement."
                ]
            }
        ]
    },
    {
        "word": "surveillance",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "la",
        "emoji": "📹",
        "form": "noun",
        "plural": "surveillances",
        "subtext": "surveillance de masse",
        "definitions": [
            {
                "text": "Observation étroite d'une personne ou d'un groupe par les autorités.",
                "examples": [
                    "La vidéosurveillance est une forme de surveillance urbaine."
                ]
            }
        ]
    },
    {
        "word": "alors que",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "⚖️",
        "form": "conjunction",
        "subtext": "tandis que",
        "definitions": [
            {
                "text": "Indique un contraste entre deux faits.",
                "examples": [
                    "Les villes sont chères, alors que les petites villes sont abordables."
                ]
            }
        ]
    },
    {
        "word": "néanmoins",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🏃‍♂️",
        "form": "adverb",
        "subtext": "pourtant, cependant",
        "definitions": [
            {
                "text": "Malgré ce qui vient d'être dit.",
                "examples": [
                    "C'est une tâche difficile ; néanmoins, nous devons essayer."
                ]
            }
        ]
    },
    {
        "word": "dans quelle mesure",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "📏",
        "form": "phrase",
        "definitions": [
            {
                "text": "Utilisé pour demander ou discuter à quel point quelque chose est vrai.",
                "examples": [
                    "Dans quelle mesure l'éducation détermine-t-elle le succès ?"
                ]
            }
        ]
    },
    {
        "word": "par contre",
        "level": "upper-intermediate",
        "theme": "formal_debate_vocab_B2",
        "emoji": "🌓",
        "form": "phrase",
        "subtext": "en revanche",
        "definitions": [
            {
                "text": "Utilisé pour montrer une différence entre deux choses.",
                "examples": [
                    "La Suède a un long congé parental. Par contre, les États-Unis en ont très peu."
                ]
            }
        ]
    },
    {
        "word": "intelligence artificielle",
        "level": "upper-intermediate",
        "theme": "technology_privacy_B2",
        "article": "l'",
        "emoji": "🤖",
        "form": "noun phrase",
        "plural": "intelligences artificielles",
        "definitions": [
            {
                "text": "Programmes informatiques capables de simuler l'intelligence humaine.",
                "examples": [
                    "L'intelligence artificielle transforme l'industrie."
                ]
            }
        ]
    }
];
    const lang = "fr";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];
})();
