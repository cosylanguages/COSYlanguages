/**
 * COSY Languages - Multilingual Question Banks (FR, IT, RU, EL)
 * CEFR-aligned items for Grammar, Vocabulary, and Reading across supported languages.
 * Fully monolingual: every question, prompt, passage, distractor, and explanation is written
 * exclusively in the target language.
 */

const MULTILINGUAL_QUESTION_BANKS = {
  "fr": [
    {
      "id": "fr_grammar_a0_01",
      "skill": "grammar",
      "subskill": "subject_pronouns",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "___ m'appelle Pierre.",
      "options": [
        "Je",
        "Tu",
        "Il"
      ],
      "correctAnswer": 0,
      "explanation": "'Je' correspond à la première personne.",
      "distractorExplanations": [
        "Choix incorrect."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Structures de base A0",
      "provisional": true
    },
    {
      "id": "fr_vocab_a0_01",
      "skill": "vocabulary",
      "subskill": "greetings",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Quelle expression utilise-t-on pour saluer quelqu'un le matin ?",
      "options": [
        "Bonjour",
        "Au revoir",
        "Merci"
      ],
      "correctAnswer": 0,
      "explanation": "'Bonjour' est la salutation standard.",
      "distractorExplanations": [
        "Traduction incorrecte."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Mots usuels A0",
      "provisional": true
    },
    {
      "id": "fr_read_a0_01",
      "skill": "reading",
      "subskill": "notices",
      "band": "A0",
      "difficulty": 1.0,
      "type": "reading_passage",
      "passage": "ENTRÉE LIBRE",
      "question": "Faut-il payer pour entrer ?",
      "options": [
        "Non, c'est gratuit",
        "Oui, 10 euros",
        "Uniquement les adultes"
      ],
      "correctAnswer": 0,
      "explanation": "'Entrée libre' signifie accès gratuit.",
      "distractorExplanations": [
        "Interprétation incorrecte."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Panneaux simples A0",
      "provisional": true
    },
    {
      "id": "fr_grammar_a1_01",
      "skill": "grammar",
      "subskill": "verb_aller",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Bonjour ! Comment ___ vous ?",
      "options": [
        "allez",
        "vas",
        "vont"
      ],
      "correctAnswer": 0,
      "explanation": "'Vous' prend la forme 'allez'.",
      "distractorExplanations": [
        "Mauvaise conjugaison."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Conjugaison A1",
      "provisional": true
    },
    {
      "id": "fr_vocab_a1_01",
      "skill": "vocabulary",
      "subskill": "prepositions_places",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "J'habite ___ Paris, une très belle ville. 🇫🇷",
      "options": [
        "à",
        "en",
        "au"
      ],
      "correctAnswer": 0,
      "explanation": "Les villes sont précédées de la préposition 'à'.",
      "distractorExplanations": [
        "Préposition incorrecte pour une ville."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Vocabulaire courant A1",
      "provisional": true
    },
    {
      "id": "fr_read_a1_01",
      "skill": "reading",
      "subskill": "schedules",
      "band": "A1",
      "difficulty": 2.0,
      "type": "reading_passage",
      "passage": "FERMETURE LE LUNDI. Ouvert du mardi au dimanche de 10h à 18h.",
      "question": "Le musée est-il ouvert le lundi ?",
      "options": [
        "Non",
        "Oui",
        "Uniquement le matin"
      ],
      "correctAnswer": 0,
      "explanation": "Le texte indique la fermeture le lundi.",
      "distractorExplanations": [
        "Contresens."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Horaires A1",
      "provisional": true
    },
    {
      "id": "fr_grammar_a2_01",
      "skill": "grammar",
      "subskill": "passe_compose",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Hier, nous ___ un excellent film au cinéma.",
      "options": [
        "avons regardé",
        "regardions",
        "regarderons"
      ],
      "correctAnswer": 0,
      "explanation": "Action ponctuelle passée : passé composé.",
      "distractorExplanations": [
        "Temps incorrect."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Temps du passé A2",
      "provisional": true
    },
    {
      "id": "fr_vocab_a2_01",
      "skill": "vocabulary",
      "subskill": "imparfait_habits",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Pendant mes vacances d'enfance, je ___ tous les jours à la plage.",
      "options": [
        "allais",
        "suis allé",
        "irai"
      ],
      "correctAnswer": 0,
      "explanation": "L'habitude passée utilise l'imparfait 'allais'.",
      "distractorExplanations": [
        "Temps inadéquat."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Habitudes passées A2",
      "provisional": true
    },
    {
      "id": "fr_read_a2_01",
      "skill": "reading",
      "subskill": "emails",
      "band": "A2",
      "difficulty": 3.0,
      "type": "reading_passage",
      "passage": "Chers collègues, la réunion de projet est reportée à jeudi 14h en salle 3.",
      "question": "Quand aura lieu la réunion ?",
      "options": [
        "Jeudi à 14h",
        "Mercredi à 14h",
        "Vendredi matin"
      ],
      "correctAnswer": 0,
      "explanation": "Le message indique jeudi à 14h.",
      "distractorExplanations": [
        "Inexactitude."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Notes de service A2",
      "provisional": true
    },
    {
      "id": "fr_grammar_b1_01",
      "skill": "grammar",
      "subskill": "conditionnel_present",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Si j'avais assez d'argent, je ___ un voyage autour du monde.",
      "options": [
        "ferais",
        "ferai",
        "faisais"
      ],
      "correctAnswer": 0,
      "explanation": "Hypothèse avec 'si + imparfait' -> conditionnel présent.",
      "distractorExplanations": [
        "Mode incorrect."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Conditionnel B1",
      "provisional": true
    },
    {
      "id": "fr_vocab_b1_01",
      "skill": "vocabulary",
      "subskill": "depuis_pendant",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Elle habite en France ___ trois ans et parle couramment français.",
      "options": [
        "depuis",
        "pendant",
        "pour"
      ],
      "correctAnswer": 0,
      "explanation": "Action continue dans le présent : 'depuis'.",
      "distractorExplanations": [
        "Préposition temporelle erronée."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Marqueurs temporels B1",
      "provisional": true
    },
    {
      "id": "fr_read_b1_01",
      "skill": "reading",
      "subskill": "articles",
      "band": "B1",
      "difficulty": 4.0,
      "type": "reading_passage",
      "passage": "Le recyclage des plastiques a progressé de 15% cette année grâce aux nouvelles consignes de tri sélectif adoptées par les municipalités.",
      "question": "Quelle est la cause principale de cette hausse ?",
      "options": [
        "Les nouvelles consignes de tri sélectif",
        "L'augmentation du prix du plastique",
        "La fermeture des décharges"
      ],
      "correctAnswer": 0,
      "explanation": "Le texte attribue le progrès aux nouvelles consignes de tri.",
      "distractorExplanations": [
        "Fausse cause."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Compréhension d'articles B1",
      "provisional": true
    },
    {
      "id": "fr_grammar_b2_01",
      "skill": "grammar",
      "subskill": "subjonctif",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Bien que ce travail ___ fatigant, il l'adore.",
      "options": [
        "soit",
        "est",
        "était"
      ],
      "correctAnswer": 0,
      "explanation": "'Bien que' est suivi du subjonctif 'soit'.",
      "distractorExplanations": [
        "Indicatif incorrect après bien que."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Subjonctif B2",
      "provisional": true
    },
    {
      "id": "fr_vocab_b2_01",
      "skill": "vocabulary",
      "subskill": "conditionnel_passe_regret",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Tu ___ me prévenir de ton retard, je me suis beaucoup inquiété !",
      "options": [
        "aurais dû",
        "devrais",
        "as dû"
      ],
      "correctAnswer": 0,
      "explanation": "Reproche ou regret sur le passé : conditionnel passé 'aurais dû'.",
      "distractorExplanations": [
        "Nuance temporelle fausse."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Nuances d'expression B2",
      "provisional": true
    },
    {
      "id": "fr_read_b2_01",
      "skill": "reading",
      "subskill": "opinion_texts",
      "band": "B2",
      "difficulty": 5.0,
      "type": "reading_passage",
      "passage": "L'essor du télétravail redéfinit les dynamiques urbaines. Si certains saluent un meilleur équilibre de vie, d'autres redoutent l'affaiblissement du tissu social dans les bureaux.",
      "question": "Quelle crainte est exprimée concernant le télétravail ?",
      "options": [
        "La perte de liens sociaux en entreprise",
        "La baisse des salaires",
        "L'augmentation des transports"
      ],
      "correctAnswer": 0,
      "explanation": "Le texte mentionne 'l'affaiblissement du tissu social dans les bureaux'.",
      "distractorExplanations": [
        "Élément absent."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Analyse d'opinions B2",
      "provisional": true
    },
    {
      "id": "fr_grammar_c1_01",
      "skill": "grammar",
      "subskill": "subjonctif_avance",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Quoi que vous ___ , ne révélez pas ce secret.",
      "options": [
        "disiez",
        "dites",
        "direz"
      ],
      "correctAnswer": 0,
      "explanation": "'Quoi que' entraîne le subjonctif 'disiez'.",
      "distractorExplanations": [
        "Confusion subjonctif/indicatif."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Structures complexes C1",
      "provisional": true
    },
    {
      "id": "fr_vocab_c1_01",
      "skill": "vocabulary",
      "subskill": "registre_soigne",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Sa décision a suscité une vive ___ au sein de l'assemblée.",
      "options": [
        "polémique",
        "causerie",
        "bavardage"
      ],
      "correctAnswer": 0,
      "explanation": "'Polémique' convient au contexte formel et soutenu.",
      "distractorExplanations": [
        "Registre inadéquat."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Vocabulaire soutenu C1",
      "provisional": true
    },
    {
      "id": "fr_read_c1_01",
      "skill": "reading",
      "subskill": "essays",
      "band": "C1",
      "difficulty": 6.0,
      "type": "reading_passage",
      "passage": "L'éthique de l'intelligence artificielle ne saurait se réduire à un simple audit réglementaire a posteriori ; elle exige d'intégrer des garanties morales dès la conception algorithmique.",
      "question": "Que préconise l'auteur ?",
      "options": [
        "Intégrer l'éthique dès la conception des algorithmes",
        "Interdire toute régulation a posteriori",
        "Déléguer l'éthique aux seuls juristes"
      ],
      "correctAnswer": 0,
      "explanation": "L'auteur exige d'intégrer des garanties morales dès la conception.",
      "distractorExplanations": [
        "Interprétation erronée."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Essais philosophiques C1",
      "provisional": true
    },
    {
      "id": "fr_grammar_c2_01",
      "skill": "grammar",
      "subskill": "formules_figees",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Pourriez-vous, le cas ___ , nous envoyer un justificatif ?",
      "options": [
        "échéant",
        "arrivant",
        "survenant"
      ],
      "correctAnswer": 0,
      "explanation": "Formule figée juridique/administrative : 'le cas échéant'.",
      "distractorExplanations": [
        "Locution incorrecte."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Expression idiomatique C2",
      "provisional": true
    },
    {
      "id": "fr_vocab_c2_01",
      "skill": "vocabulary",
      "subskill": "locutions_idiomatiques",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Il a fait preuve d'une perspicacité ___ lors de cette négociation.",
      "options": [
        "hors pair",
        "sans égal",
        "pas mal"
      ],
      "correctAnswer": 0,
      "explanation": "'Hors pair' exprime une qualité exceptionnelle dans un registre élevé.",
      "distractorExplanations": [
        "Moins soutenu."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Subtilités de la langue C2",
      "provisional": true
    },
    {
      "id": "fr_read_c2_01",
      "skill": "reading",
      "subskill": "hermeneutique",
      "band": "C2",
      "difficulty": 7.0,
      "type": "reading_passage",
      "passage": "La déconstruction derridienne ne vise nullement la destruction du sens, mais la mise au jour des apories métaphysiques qui sous-tendent le discours occidental.",
      "question": "Quel est le véritable objectif de la déconstruction selon ce texte ?",
      "options": [
        "Révéler les contradictions internes du discours",
        "Anéantir toute possibilité de communication",
        "Remplacer la philosophie par la littérature"
      ],
      "correctAnswer": 0,
      "explanation": "Mise au jour des apories signifie révéler les contradictions fondamentales.",
      "distractorExplanations": [
        "Contresens philosophique."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Analyse herméneutique C2",
      "provisional": true
    },
    {
      "id": "fr_grammar_a0_02", "skill": "grammar", "subskill": "interrogatifs", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "___ âge as-tu ?", "options": ["Quel", "Quelle", "Quels"], "correctAnswer": 0,
      "explanation": "« Quel » s'accorde avec « âge », nom masculin singulier.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Interrogatifs de base A0", "provisional": true
    },
    {
      "id": "fr_vocab_a0_02", "skill": "vocabulary", "subskill": "nombres", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "Quel nombre vient juste après sept ?", "options": ["huit", "neuf", "six"], "correctAnswer": 0,
      "explanation": "La suite est : six, sept, huit, neuf.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Nombres usuels A0", "provisional": true
    },
    {
      "id": "fr_read_a0_02", "skill": "reading", "subskill": "notices", "band": "A0", "difficulty": 1,
      "type": "reading_passage", "passage": "BOULANGERIE — FERMÉ LE LUNDI", "question": "Peut-on acheter du pain le lundi ?",
      "options": ["Non, c'est fermé", "Oui, le matin", "Oui, l'après-midi"], "correctAnswer": 0,
      "explanation": "« Fermé le lundi » indique que la boutique est close ce jour-là.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Panneaux simples A0", "provisional": true
    },
    {
      "id": "fr_grammar_a1_02", "skill": "grammar", "subskill": "articles_definis", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "___ livres sont sur la table.", "options": ["Les", "Le", "La"], "correctAnswer": 0,
      "explanation": "« Livres » est un nom masculin pluriel : article défini « les ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Articles définis A1", "provisional": true
    },
    {
      "id": "fr_vocab_a1_02", "skill": "vocabulary", "subskill": "famille", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "Le père de ma mère est mon ___.", "options": ["grand-père", "oncle", "frère"], "correctAnswer": 0,
      "explanation": "Le père de la mère est le grand-père maternel.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Liens familiaux A1", "provisional": true
    },
    {
      "id": "fr_read_a1_02", "skill": "reading", "subskill": "horaires", "band": "A1", "difficulty": 2,
      "type": "reading_passage", "passage": "PISCINE MUNICIPALE — Ouvert de 9h à 19h — Dernière entrée : 18h15",
      "question": "À quelle heure faut-il entrer au plus tard ?",
      "options": ["18h15", "19h", "9h"], "correctAnswer": 0,
      "explanation": "La dernière entrée est autorisée à 18h15, avant la fermeture.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Informations pratiques A1", "provisional": true
    },
    {
      "id": "fr_grammar_a2_02", "skill": "grammar", "subskill": "passe_compose", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Hier, elle ___ au cinéma avec sa sœur.", "options": ["est allée", "a allé", "va"], "correctAnswer": 0,
      "explanation": "« Aller » se conjugue avec « être » et le participe s'accorde : « elle est allée ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Passé composé A2", "provisional": true
    },
    {
      "id": "fr_vocab_a2_02", "skill": "vocabulary", "subskill": "travail", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "À quoi sert un entretien d'embauche ?",
      "options": ["À rencontrer un employeur pour un poste", "À réserver un billet d'avion", "À payer ses impôts"], "correctAnswer": 0,
      "explanation": "L'entretien d'embauche est la rencontre entre le candidat et l'employeur.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Vocabulaire professionnel A2", "provisional": true
    },
    {
      "id": "fr_read_a2_02", "skill": "reading", "subskill": "courriel", "band": "A2", "difficulty": 3,
      "type": "reading_passage", "passage": "Bonjour Sophie, je suis malade aujourd'hui et je ne pourrai pas venir mardi. Peut-on reporter la réunion à jeudi ? Merci, Marc",
      "question": "Pourquoi Marc écrit-il ?",
      "options": ["Pour demander de déplacer une réunion", "Pour annuler un cours de sport", "Pour commander un repas"], "correctAnswer": 0,
      "explanation": "Il explique sa maladie puis demande de reporter la réunion à jeudi.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Courriel simple A2", "provisional": true
    },
    {
      "id": "fr_grammar_b1_02", "skill": "grammar", "subskill": "subjonctif", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Il faut que tu ___ plus tôt demain.", "options": ["partes", "pars", "partiras"], "correctAnswer": 0,
      "explanation": "« Il faut que » exige le subjonctif : « que tu partes ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Subjonctif présent B1", "provisional": true
    },
    {
      "id": "fr_vocab_b1_02", "skill": "vocabulary", "subskill": "collocations", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Après une longue réflexion, il a ___ une décision difficile.",
      "options": ["pris", "fait", "donné"], "correctAnswer": 0,
      "explanation": "La collocation correcte est « prendre une décision ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Collocations courantes B1", "provisional": true
    },
    {
      "id": "fr_read_b1_02", "skill": "reading", "subskill": "article", "band": "B1", "difficulty": 4,
      "type": "reading_passage", "passage": "La médiathèque du quartier change ses horaires à partir du 1er octobre. Elle ouvrira désormais jusqu'à 20h du mardi au samedi, mais restera fermée le lundi matin pour permettre le réaménagement des salles.",
      "question": "Pourquoi la médiathèque ferme-t-elle le lundi matin ?",
      "options": ["Pour réaménager les salles", "Parce que le personnel est en vacances", "Parce qu'il n'y a pas assez de visiteurs"], "correctAnswer": 0,
      "explanation": "Le texte indique explicitement que la fermeture sert au réaménagement des salles.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Article informatif B1", "provisional": true
    },
    {
      "id": "fr_grammar_b2_02", "skill": "grammar", "subskill": "voix_passive", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Les travaux ___ avant la fin de l'année.", "options": ["seront achevés", "seront achever", "achèveront"], "correctAnswer": 0,
      "explanation": "Voix passive au futur : « seront achevés » (être + participe passé).",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Voix passive B2", "provisional": true
    },
    {
      "id": "fr_vocab_b2_02", "skill": "vocabulary", "subskill": "expressions", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Que signifie « à titre indicatif » ?",
      "options": ["À titre d'information, sans valeur définitive", "De manière obligatoire", "Sous forme de contrat"], "correctAnswer": 0,
      "explanation": "L'expression signale une information donnée pour orienter, sans caractère contraignant.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Expressions abstraites B2", "provisional": true
    },
    {
      "id": "fr_read_b2_02", "skill": "reading", "subskill": "argumentation", "band": "B2", "difficulty": 5,
      "type": "reading_passage", "passage": "Le télétravail a séduit par sa souplesse, mais les entreprises qui l'ont généralisé sans cadre constatent aujourd'hui un affaiblissement du lien entre équipes. Plutôt que de revenir au bureau à temps plein, plusieurs directions choisissent d'imposer des journées de présence communes.",
      "question": "Quelle solution les entreprises retiennent-elles ?",
      "options": ["Des journées de présence fixes et partagées", "Le retour complet au bureau", "La suppression du télétravail"], "correctAnswer": 0,
      "explanation": "Le texte oppose explicitement cette solution au retour à temps plein.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Texte argumentatif B2", "provisional": true
    },
    {
      "id": "fr_grammar_c1_02", "skill": "grammar", "subskill": "concession", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Bien qu'il ___ toutes les conditions requises, sa candidature n'a pas été retenue.",
      "options": ["remplisse", "remplit", "remplissait"], "correctAnswer": 0,
      "explanation": "« Bien que » impose le subjonctif : « qu'il remplisse ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Concession et subjonctif C1", "provisional": true
    },
    {
      "id": "fr_vocab_c1_02", "skill": "vocabulary", "subskill": "nuances", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Dans « une mesure prise à titre provisoire », « provisoire » signifie :",
      "options": ["Temporaire, destinée à être remplacée", "Définitive et irrévocable", "Confidentielle"], "correctAnswer": 0,
      "explanation": "« Provisoire » s'oppose à « définitif » : la mesure est temporaire.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Nuances lexicales C1", "provisional": true
    },
    {
      "id": "fr_read_c1_02", "skill": "reading", "subskill": "stance", "band": "C1", "difficulty": 6,
      "type": "reading_passage", "passage": "On reproche souvent aux régulateurs leur lenteur. Le reproche n'est pas infondé, mais il méconnaît une contrainte structurelle : une norme adoptée trop vite risque d'être obsolète avant d'être appliquée, tandis qu'une norme trop tardive laisse s'installer des pratiques difficiles à défaire.",
      "question": "Quelle est la position de l'auteur ?",
      "options": ["La critique de la lenteur est partiellement juste mais ignore un dilemme réel", "Les régulateurs sont totalement incompétents", "Il faut réguler le plus vite possible"], "correctAnswer": 0,
      "explanation": "L'auteur concède le reproche puis le nuance en exposant un compromis temporel.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Nuance argumentative C1", "provisional": true
    },
    {
      "id": "fr_grammar_c2_02", "skill": "grammar", "subskill": "subjonctif_imparfait", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "Qu'il ___ refusé, cela n'aurait rien changé à l'issue du vote.",
      "options": ["eût", "avait", "aurait"], "correctAnswer": 0,
      "explanation": "Le subjonctif plus-que-parfait (« qu'il eût refusé ») marque l'antériorité dans un registre soutenu.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Subjonctif littéraire C2", "provisional": true
    },
    {
      "id": "fr_vocab_c2_02", "skill": "vocabulary", "subskill": "lexique_soutenu", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "Un propos « lénifiant » est un propos qui :",
      "options": ["apaise, en adoucissant les tensions", "accuse avec virulence", "déstabilise par son ambiguïté"], "correctAnswer": 0,
      "explanation": "« Lénifiant » qualifie ce qui calme, adoucit, parfois excessivement.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Lexique soutenu C2", "provisional": true
    },
    {
      "id": "fr_read_c2_02", "skill": "reading", "subskill": "synthese", "band": "C2", "difficulty": 7,
      "type": "reading_passage", "passage": "L'argument selon lequel l'automatisation libérerait du temps de travail suppose une répartition équitable des gains de productivité. Or rien, dans l'histoire des mutations techniques, n'indique qu'une telle répartition s'opère spontanément : elle a toujours résulté de rapports de force, non de la technique elle-même.",
      "question": "Que conteste l'auteur ?",
      "options": ["Le caractère automatique du partage des gains de productivité", "L'existence des gains de productivité", "La possibilité historique du progrès technique"], "correctAnswer": 0,
      "explanation": "L'auteur ne nie pas les gains : il conteste l'idée qu'ils se distribuent d'eux-mêmes.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Synthèse critique C2", "provisional": true
    },
  ],
  "it": [
    {
      "id": "it_grammar_a0_01",
      "skill": "grammar",
      "subskill": "verb_essere",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Io ___ Marco.",
      "options": [
        "sono",
        "sei",
        "è"
      ],
      "correctAnswer": 0,
      "explanation": "Prima persona 'Io' -> 'sono'.",
      "distractorExplanations": [
        "Persona sbagliata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Base A0",
      "provisional": true
    },
    {
      "id": "it_vocab_a0_01",
      "skill": "vocabulary",
      "subskill": "greetings",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Quale parola si usa per salutare un amico?",
      "options": [
        "Ciao",
        "Grazie",
        "Prego"
      ],
      "correctAnswer": 0,
      "explanation": "'Ciao' è il saluto informale di base.",
      "distractorExplanations": [
        "Parola errata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Vocabolario A0",
      "provisional": true
    },
    {
      "id": "it_read_a0_01",
      "skill": "reading",
      "subskill": "signs",
      "band": "A0",
      "difficulty": 1.0,
      "type": "reading_passage",
      "passage": "INGRESSO LIBERO",
      "question": "Si deve pagare l'ingresso?",
      "options": [
        "No, è gratis",
        "Sì, 5 euro",
        "Solo gli adulti"
      ],
      "correctAnswer": 0,
      "explanation": "'Ingresso libero' significa gratis.",
      "distractorExplanations": [
        "Significato errato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Cartelli A0",
      "provisional": true
    },
    {
      "id": "it_grammar_a1_01",
      "skill": "grammar",
      "subskill": "presente_indicativo",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Ciao! Io ___ Marco e vengo da Roma.",
      "options": [
        "sono",
        "sei",
        "è"
      ],
      "correctAnswer": 0,
      "explanation": "Verbo essere alla 1a persona.",
      "distractorExplanations": [
        "Forma verbale errata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Verbi base A1",
      "provisional": true
    },
    {
      "id": "it_vocab_a1_01",
      "skill": "vocabulary",
      "subskill": "preposizioni_articolate",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "La borsa è ___ tavolo in cucina.",
      "options": [
        "sul",
        "nel",
        "con"
      ],
      "correctAnswer": 0,
      "explanation": "Sopra una superficie con articolo determinativo il -> sul.",
      "distractorExplanations": [
        "Preposizione errata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Preposizioni A1",
      "provisional": true
    },
    {
      "id": "it_read_a1_01",
      "skill": "reading",
      "subskill": "notices",
      "band": "A1",
      "difficulty": 2.0,
      "type": "reading_passage",
      "passage": "ORARIO FARMACIA: Lun-Ven 8:30 - 19:30. Sabato 8:30 - 13:00.",
      "question": "La farmacia è aperta sabato pomeriggio?",
      "options": [
        "No",
        "Sì",
        "Solo su prenotazione"
      ],
      "correctAnswer": 0,
      "explanation": "Sabato chiude alle 13:00.",
      "distractorExplanations": [
        "Errata comprensione."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Orari A1",
      "provisional": true
    },
    {
      "id": "it_grammar_a2_01",
      "skill": "grammar",
      "subskill": "passato_prossimo",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Sabato scorso noi ___ al mare con gli amici.",
      "options": [
        "siamo andati",
        "abbiamo andato",
        "andiamo"
      ],
      "correctAnswer": 0,
      "explanation": "Verbo di movimento 'andare' richiede l'ausiliare essere.",
      "distractorExplanations": [
        "Ausiliare errato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Passato prossimo A2",
      "provisional": true
    },
    {
      "id": "it_vocab_a2_01",
      "skill": "vocabulary",
      "subskill": "imperfetto_abitudini",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Da piccolo, mio nonno ___ sempre a piedi a scuola.",
      "options": [
        "andava",
        "è stato andato",
        "andrà"
      ],
      "correctAnswer": 0,
      "explanation": "Abitudine nel passato richiede l'imperfetto.",
      "distractorExplanations": [
        "Tempo inadatto."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Abitudini passate A2",
      "provisional": true
    },
    {
      "id": "it_read_a2_01",
      "skill": "reading",
      "subskill": "avvisi",
      "band": "A2",
      "difficulty": 3.0,
      "type": "reading_passage",
      "passage": "TRENO REGIONALE 2104 per Firenze in partenza dal binario 4 con 10 minuti di ritardo.",
      "question": "Da quale binario parte il treno?",
      "options": [
        "Binario 4",
        "Binario 10",
        "Binario 2"
      ],
      "correctAnswer": 0,
      "explanation": "Il testo indica chiaramente il binario 4.",
      "distractorExplanations": [
        "Scelta errata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Annunci stazione A2",
      "provisional": true
    },
    {
      "id": "it_grammar_b1_01",
      "skill": "grammar",
      "subskill": "congiuntivo_presente",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Non penso che Maria ___ ancora arrivata in ufficio.",
      "options": [
        "sia",
        "è",
        "sarà"
      ],
      "correctAnswer": 0,
      "explanation": "I verbi d'opinione richiedono il congiuntivo.",
      "distractorExplanations": [
        "Modo indicativo errato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Congiuntivo B1",
      "provisional": true
    },
    {
      "id": "it_vocab_b1_01",
      "skill": "vocabulary",
      "subskill": "periodo_ipotetico",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Se io ___ più tempo, farei un corso di cucina.",
      "options": [
        "avessi",
        "avrei",
        "ho"
      ],
      "correctAnswer": 0,
      "explanation": "Periodo ipotetico della possibilità: se + congiuntivo imperfetto.",
      "distractorExplanations": [
        "Modo errato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ipotesi B1",
      "provisional": true
    },
    {
      "id": "it_read_b1_01",
      "skill": "reading",
      "subskill": "articoli_giornale",
      "band": "B1",
      "difficulty": 4.0,
      "type": "reading_passage",
      "passage": "La dieta mediterranea è stata riconosciuta patrimonio immateriale UNESCO per la sua combinazione unica di salute, sostenibilità e tradizione gastronomica.",
      "question": "Per quale motivo è stata premiata la dieta mediterranea?",
      "options": [
        "Per l'equilibrio tra salute, sostenibilità e tradizione",
        "Per il basso costo degli ingredienti",
        "Per la rapidità di preparazione"
      ],
      "correctAnswer": 0,
      "explanation": "Il testo sottolinea salute, sostenibilità e tradizione.",
      "distractorExplanations": [
        "Motivazione inventata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Lettura articoli B1",
      "provisional": true
    },
    {
      "id": "it_grammar_b2_01",
      "skill": "grammar",
      "subskill": "periodo_ipotetico_impossibilita",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Se mi avessi ascoltato, non ___ in questo pasticcio!",
      "options": [
        "ti saresti trovato",
        "ti fossi trovato",
        "ti troverai"
      ],
      "correctAnswer": 0,
      "explanation": "Periodo ipotetico dell'impossibilità: condizionale passato nell'apodosi.",
      "distractorExplanations": [
        "Tempo sbagliato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Strutture B2",
      "provisional": true
    },
    {
      "id": "it_vocab_b2_01",
      "skill": "vocabulary",
      "subskill": "lessico_astratto",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Le due aziende hanno siglato un accordo per ___ i costi di gestione.",
      "options": [
        "abbattere",
        "demolire",
        "distruggere"
      ],
      "correctAnswer": 0,
      "explanation": "'Abbattere i costi' è la collocazione economica corretta.",
      "distractorExplanations": [
        "Verbo improprio."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Collocazioni B2",
      "provisional": true
    },
    {
      "id": "it_read_b2_01",
      "skill": "reading",
      "subskill": "saggi",
      "band": "B2",
      "difficulty": 5.0,
      "type": "reading_passage",
      "passage": "L'innovazione tecnologica sta ridisegnando le professioni tradizionali. Piuttosto che eliminare posti di lavoro, la sfida consiste nella riqualificazione delle competenze digitali.",
      "question": "Qual è la sfida principale secondo il testo?",
      "options": [
        "Formare i lavoratori nelle competenze digitali",
        "Aumentare le ore lavorative",
        "Ridurre l'uso dei computer"
      ],
      "correctAnswer": 0,
      "explanation": "Il testo evidenzia la riqualificazione delle competenze digitali.",
      "distractorExplanations": [
        "Interpretazione distorta."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Comprensione critica B2",
      "provisional": true
    },
    {
      "id": "it_grammar_c1_01",
      "skill": "grammar",
      "subskill": "congiuntivo_passato_trapassato",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Sebbene ___ molto stanco, ha continuato a lavorare tutta la notte.",
      "options": [
        "fosse",
        "era",
        "sarebbe"
      ],
      "correctAnswer": 0,
      "explanation": "'Sebbene' richiede il congiuntivo imperfetto/trapassato.",
      "distractorExplanations": [
        "Uso errato dell'indicativo."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Sintassi complessa C1",
      "provisional": true
    },
    {
      "id": "it_vocab_c1_01",
      "skill": "vocabulary",
      "subskill": "espressioni_formali",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Il direttore ha espresso un parere ___ sulla fattibilità del progetto.",
      "options": [
        "favorevole",
        "simpatico",
        "amichevole"
      ],
      "correctAnswer": 0,
      "explanation": "'Parere favorevole' è il registro formale appropriato.",
      "distractorExplanations": [
        "Registro colloquiale."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Lessico formale C1",
      "provisional": true
    },
    {
      "id": "it_read_c1_01",
      "skill": "reading",
      "subskill": "analisi_politica",
      "band": "C1",
      "difficulty": 6.0,
      "type": "reading_passage",
      "passage": "La transizione ecologica non può prescindere da un'analisi dell'impatto redistributivo: ignorare le disuguaglianze rischia di alimentare resistenze sociali deleterie.",
      "question": "Cosa raccomanda l'autore?",
      "options": [
        "Valutare le ricadute sociali ed economiche della transizione",
        "Sospendere ogni misura ecologica",
        "Affidare le decisioni solo agli ingegneri"
      ],
      "correctAnswer": 0,
      "explanation": "L'autore mette in guardia contro l'ignorare le disuguaglianze.",
      "distractorExplanations": [
        "Errata deduzione."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Analisi sociopolitica C1",
      "provisional": true
    },
    {
      "id": "it_grammar_c2_01",
      "skill": "grammar",
      "subskill": "modi_finiti_e_indefiniti",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "È un circolo vizioso, un cane che si ___ la coda. 🐕",
      "options": [
        "morde",
        "rincorre",
        "scuote"
      ],
      "correctAnswer": 0,
      "explanation": "Modo di dire italiano collaudato: 'il cane che si morde la coda'.",
      "distractorExplanations": [
        "Espressione errata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Espressioni idiomatiche C2",
      "provisional": true
    },
    {
      "id": "it_vocab_c2_01",
      "skill": "vocabulary",
      "subskill": "subtilita_lessicali",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Il suo discorso si è distinto per un'eloquenza ___ e rigorosa.",
      "options": [
        "incisiva",
        "tagliente",
        "affilata"
      ],
      "correctAnswer": 0,
      "explanation": "'Incisiva' ben si adatta al rigore espressivo elevato.",
      "distractorExplanations": [
        "Meno appropriato."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Nuances stilistiche C2",
      "provisional": true
    },
    {
      "id": "it_read_c2_01",
      "skill": "reading",
      "subskill": "critica_letteraria",
      "band": "C2",
      "difficulty": 7.0,
      "type": "reading_passage",
      "passage": "L'ermeneutica contemporanea intende la lettura non come mera decodifica di un significato cristallizzato, bensì come atto cooperativo in cui il testo si rigenera ad ogni fruizione.",
      "question": "Come viene definita la lettura nel brano?",
      "options": [
        "Un processo dinamico e cooperativo di rielaborazione del senso",
        "La ricerca passiva dell'intenzione dell'autore",
        "Un esercizio puramente grammaticale"
      ],
      "correctAnswer": 0,
      "explanation": "Il testo definisce la lettura come atto cooperativo che rigenera il significato.",
      "distractorExplanations": [
        "Visione obsoleta esplicitamente confutata."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ermeneutica avanzata C2",
      "provisional": true
    },
    {
      "id": "it_grammar_a0_02", "skill": "grammar", "subskill": "interrogativi", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "___ è il tuo nome?", "options": ["Quale", "Quali", "Qual"], "correctAnswer": 0,
      "explanation": "« Nome » è singolare: si usa « quale ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Interrogativi di base A0", "provisional": true
    },
    {
      "id": "it_vocab_a0_02", "skill": "vocabulary", "subskill": "numeri", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "Quale numero viene subito dopo otto?", "options": ["nove", "dieci", "sette"], "correctAnswer": 0,
      "explanation": "La sequenza è: sette, otto, nove, dieci.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Numeri di base A0", "provisional": true
    },
    {
      "id": "it_read_a0_02", "skill": "reading", "subskill": "avvisi", "band": "A0", "difficulty": 1,
      "type": "reading_passage", "passage": "FARMACIA — CHIUSO LA DOMENICA", "question": "La domenica la farmacia è aperta?",
      "options": ["No, è chiusa", "Sì, solo al mattino", "Sì, tutto il giorno"], "correctAnswer": 0,
      "explanation": "« Chiuso la domenica » significa che è chiusa quel giorno.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Avvisi semplici A0", "provisional": true
    },
    {
      "id": "it_grammar_a1_02", "skill": "grammar", "subskill": "articoli_determinativi", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "___ libri sono sul tavolo.", "options": ["I", "Il", "La"], "correctAnswer": 0,
      "explanation": "« Libri » è maschile plurale: articolo determinativo « i ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Articoli determinativi A1", "provisional": true
    },
    {
      "id": "it_vocab_a1_02", "skill": "vocabulary", "subskill": "famiglia", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "Il padre di mia madre è mio ___.", "options": ["nonno", "zio", "fratello"], "correctAnswer": 0,
      "explanation": "Il padre della madre è il nonno materno.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Relazioni familiari A1", "provisional": true
    },
    {
      "id": "it_read_a1_02", "skill": "reading", "subskill": "orari", "band": "A1", "difficulty": 2,
      "type": "reading_passage", "passage": "BIBLIOTECA CIVICA — Aperta dalle 9 alle 18 — Ultimo ingresso: 17:30",
      "question": "Entro che ora si può entrare?", "options": ["17:30", "18:00", "9:00"], "correctAnswer": 0,
      "explanation": "L'ultimo ingresso è consentito fino alle 17:30.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Informazioni pratiche A1", "provisional": true
    },
    {
      "id": "it_grammar_a2_02", "skill": "grammar", "subskill": "passato_prossimo", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Ieri sera Anna ___ al cinema con sua sorella.", "options": ["è andata", "ha andato", "va"], "correctAnswer": 0,
      "explanation": "« Andare » vuole l'ausiliare « essere » e il participio concorda: « è andata ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Passato prossimo A2", "provisional": true
    },
    {
      "id": "it_vocab_a2_02", "skill": "vocabulary", "subskill": "lavoro", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "A che cosa serve un colloquio di lavoro?",
      "options": ["A incontrare un datore di lavoro per una posizione", "A prenotare un treno", "A pagare le tasse"], "correctAnswer": 0,
      "explanation": "Il colloquio è l'incontro tra candidato e datore di lavoro.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Lessico del lavoro A2", "provisional": true
    },
    {
      "id": "it_read_a2_02", "skill": "reading", "subskill": "email", "band": "A2", "difficulty": 3,
      "type": "reading_passage", "passage": "Ciao Luca, oggi sono malato e domani non potrò venire. Possiamo spostare la riunione a giovedì? Grazie, Marco",
      "question": "Perché Marco scrive?", "options": ["Per chiedere di spostare una riunione", "Per annullare una lezione", "Per ordinare un pranzo"], "correctAnswer": 0,
      "explanation": "Spiega di essere malato e chiede di rinviare la riunione.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Email semplice A2", "provisional": true
    },
    {
      "id": "it_grammar_b1_02", "skill": "grammar", "subskill": "congiuntivo", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Bisogna che tu ___ prima domani.", "options": ["parta", "parti", "partirai"], "correctAnswer": 0,
      "explanation": "« Bisogna che » richiede il congiuntivo: « che tu parta ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Congiuntivo presente B1", "provisional": true
    },
    {
      "id": "it_vocab_b1_02", "skill": "vocabulary", "subskill": "collocazioni", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Dopo una lunga riflessione, ha ___ una decisione difficile.",
      "options": ["preso", "fatto", "dato"], "correctAnswer": 0,
      "explanation": "La collocazione corretta è « prendere una decisione ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Collocazioni comuni B1", "provisional": true
    },
    {
      "id": "it_read_b1_02", "skill": "reading", "subskill": "articolo", "band": "B1", "difficulty": 4,
      "type": "reading_passage", "passage": "Da ottobre la biblioteca di quartiere resterà aperta fino alle 20 dal martedì al sabato. Il lunedì mattina sarà chiusa per permettere il riordino delle sale.",
      "question": "Perché la biblioteca è chiusa il lunedì mattina?",
      "options": ["Per riordinare le sale", "Per le ferie del personale", "Perché ci sono pochi visitatori"], "correctAnswer": 0,
      "explanation": "Il testo dice esplicitamente che la chiusura serve al riordino delle sale.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Articolo informativo B1", "provisional": true
    },
    {
      "id": "it_grammar_b2_02", "skill": "grammar", "subskill": "passivo", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "I lavori ___ entro la fine dell'anno.", "options": ["saranno completati", "saranno completare", "completeranno"], "correctAnswer": 0,
      "explanation": "Passivo al futuro: « saranno completati » (essere + participio passato).",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Forma passiva B2", "provisional": true
    },
    {
      "id": "it_vocab_b2_02", "skill": "vocabulary", "subskill": "espressioni", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Che cosa significa « a titolo informativo »?",
      "options": ["Come informazione, senza valore definitivo", "In modo obbligatorio", "Sotto forma di contratto"], "correctAnswer": 0,
      "explanation": "L'espressione indica un'informazione orientativa, non vincolante.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Espressioni astratte B2", "provisional": true
    },
    {
      "id": "it_read_b2_02", "skill": "reading", "subskill": "argomentazione", "band": "B2", "difficulty": 5,
      "type": "reading_passage", "passage": "Il lavoro da remoto ha conquistato per la sua flessibilità, ma molte aziende che lo hanno generalizzato senza regole notano oggi un indebolimento dei legami tra i team. Invece di tornare in ufficio a tempo pieno, diverse direzioni scelgono di imporre giornate di presenza comuni.",
      "question": "Quale soluzione scelgono diverse aziende?",
      "options": ["Giornate di presenza fisse e condivise", "Il ritorno completo in ufficio", "L'abolizione del lavoro da remoto"], "correctAnswer": 0,
      "explanation": "Il testo contrappone questa soluzione al ritorno a tempo pieno.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Testo argomentativo B2", "provisional": true
    },
    {
      "id": "it_grammar_c1_02", "skill": "grammar", "subskill": "concessione", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Benché ___ tutti i requisiti, la sua candidatura non è stata accettata.",
      "options": ["soddisfacesse", "soddisfa", "soddisferà"], "correctAnswer": 0,
      "explanation": "« Benché » richiede il congiuntivo: « soddisfacesse ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Concessione e congiuntivo C1", "provisional": true
    },
    {
      "id": "it_vocab_c1_02", "skill": "vocabulary", "subskill": "sfumature", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "In « un provvedimento adottato in via provvisoria », « provvisorio » significa:",
      "options": ["Temporaneo, destinato a essere sostituito", "Definitivo e irrevocabile", "Riservato"], "correctAnswer": 0,
      "explanation": "« Provvisorio » si oppone a « definitivo ».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Sfumature lessicali C1", "provisional": true
    },
    {
      "id": "it_read_c1_02", "skill": "reading", "subskill": "posizione", "band": "C1", "difficulty": 6,
      "type": "reading_passage", "passage": "Si rimprovera spesso ai regolatori la loro lentezza. Il rimprovero non è infondato, ma ignora un vincolo strutturale: una norma approvata troppo in fretta rischia di essere obsoleta prima di essere applicata, mentre una norma troppo tardiva lascia consolidarsi pratiche difficili da smontare.",
      "question": "Qual è la posizione dell'autore?",
      "options": ["La critica è in parte giusta ma trascura un dilemma reale", "I regolatori sono del tutto incompetenti", "Bisogna regolare il più rapidamente possibile"], "correctAnswer": 0,
      "explanation": "L'autore concede il rimprovero e poi lo sfuma mostrando un compromesso temporale.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Argomentazione sfumata C1", "provisional": true
    },
    {
      "id": "it_grammar_c2_02", "skill": "grammar", "subskill": "congiuntivo_trapassato", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "Che ___ rifiutato, non avrebbe cambiato l'esito della votazione.",
      "options": ["avesse", "aveva", "avrebbe"], "correctAnswer": 0,
      "explanation": "Congiuntivo trapassato: « che avesse rifiutato » indica anteriorità.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Congiuntivo letterario C2", "provisional": true
    },
    {
      "id": "it_vocab_c2_02", "skill": "vocabulary", "subskill": "lessico_colto", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "Un discorso « lenitivo » è un discorso che:",
      "options": ["placa, attenuando le tensioni", "accusa con durezza", "confonde per la sua ambiguità"], "correctAnswer": 0,
      "explanation": "« Lenitivo » indica ciò che calma e attenua.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Lessico colto C2", "provisional": true
    },
    {
      "id": "it_read_c2_02", "skill": "reading", "subskill": "sintesi", "band": "C2", "difficulty": 7,
      "type": "reading_passage", "passage": "L'argomento secondo cui l'automazione libererebbe tempo di lavoro presuppone una distribuzione equa dei guadagni di produttività. Ebbene, nulla nella storia delle trasformazioni tecniche indica che tale distribuzione avvenga spontaneamente: è sempre derivata da rapporti di forza, non dalla tecnica in sé.",
      "question": "Che cosa contesta l'autore?",
      "options": ["Il carattere automatico della distribuzione dei guadagni", "L'esistenza dei guadagni di produttività", "La possibilità storica del progresso tecnico"], "correctAnswer": 0,
      "explanation": "Non nega i guadagni: contesta l'idea che si distribuiscano da soli.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Sintesi critica C2", "provisional": true
    },
  ],
  "ru": [
    {
      "id": "ru_grammar_a0_01",
      "skill": "grammar",
      "subskill": "basic_verbs",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Привет! Меня ___ Анна.",
      "options": [
        "зовут",
        "зовутт",
        "звать"
      ],
      "correctAnswer": 0,
      "explanation": "Форма 'Меня зовут' является базовой.",
      "distractorExplanations": [
        "Ошибочная форма."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Базовые фразы A0",
      "provisional": true
    },
    {
      "id": "ru_vocab_a0_01",
      "skill": "vocabulary",
      "subskill": "common_words",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Какое слово выражает благодарность?",
      "options": [
        "Спасибо",
        "Привет",
        "Пожалуйста"
      ],
      "correctAnswer": 0,
      "explanation": "'Спасибо' означает благодарность.",
      "distractorExplanations": [
        "Неверный перевод."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Словарь A0",
      "provisional": true
    },
    {
      "id": "ru_read_a0_01",
      "skill": "reading",
      "subskill": "signs",
      "band": "A0",
      "difficulty": 1.0,
      "type": "reading_passage",
      "passage": "ВХОД СВОБОДНЫЙ",
      "question": "Нужно ли платить за вход?",
      "options": [
        "Нет, вход бесплатный",
        "Да, 100 рублей",
        "Только для студентов"
      ],
      "correctAnswer": 0,
      "explanation": "'Вход свободный' означает бесплатный вход.",
      "distractorExplanations": [
        "Неверное понимание."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Таблички A0",
      "provisional": true
    },
    {
      "id": "ru_grammar_a1_01",
      "skill": "grammar",
      "subskill": "prepositional_case",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Где моя книга? Она лежит ___ столе. 📕",
      "options": [
        "на",
        "в",
        "у"
      ],
      "correctAnswer": 0,
      "explanation": "Предложный падеж места на поверхности: 'на столе'.",
      "distractorExplanations": [
        "Неверный предлог."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Падежи местоположения A1",
      "provisional": true
    },
    {
      "id": "ru_vocab_a1_01",
      "skill": "vocabulary",
      "subskill": "family",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Сестра моей мамы — это моя ___.",
      "options": [
        "тётя",
        "бабушка",
        "сестра"
      ],
      "correctAnswer": 0,
      "explanation": "Сестра мамы называется тётей.",
      "distractorExplanations": [
        "Неверный родственный термин."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Семья A1",
      "provisional": true
    },
    {
      "id": "ru_read_a1_01",
      "skill": "reading",
      "subskill": "hours",
      "band": "A1",
      "difficulty": 2.0,
      "type": "reading_passage",
      "passage": "МАГАЗИН РАБОТАЕТ С 9:00 ДО 21:00 БЕЗ ВЫХОДНЫХ.",
      "question": "Открыт ли магазин в воскресенье?",
      "options": [
        "Да",
        "Нет",
        "Только до обеда"
      ],
      "correctAnswer": 0,
      "explanation": "'Без выходных' означает работу во все дни.",
      "distractorExplanations": [
        "Ошибка."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Режим работы A1",
      "provisional": true
    },
    {
      "id": "ru_grammar_a2_01",
      "skill": "grammar",
      "subskill": "verbs_of_motion",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Вчера мы ___ в новый ресторан в центре города.",
      "options": [
        "ходили",
        "шли",
        "поедем"
      ],
      "correctAnswer": 0,
      "explanation": "Глагол движения туда и обратно в прошлом: 'ходили'.",
      "distractorExplanations": [
        "Вид/время не совпадает."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Глаголы движения A2",
      "provisional": true
    },
    {
      "id": "ru_vocab_a2_01",
      "skill": "vocabulary",
      "subskill": "comparatives",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Моя сестра ___ меня на три года.",
      "options": [
        "старше",
        "старый",
        "самый старый"
      ],
      "correctAnswer": 0,
      "explanation": "Сравнительная степень прилагательного: 'старше'.",
      "distractorExplanations": [
        "Форма не подходит."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Сравнения A2",
      "provisional": true
    },
    {
      "id": "ru_read_a2_01",
      "skill": "reading",
      "subskill": "announcements",
      "band": "A2",
      "difficulty": 3.0,
      "type": "reading_passage",
      "passage": "УВАЖАЕМЫЕ ПАССАЖИРЫ! Поезд до Санкт-Петербурга отправляется с Московского вокзала с 3-й платформы.",
      "question": "С какой платформы отправляется поезд?",
      "options": [
        "С 3-й платформы",
        "С 1-й платформы",
        "С 5-й платформы"
      ],
      "correctAnswer": 0,
      "explanation": "В тексте сказано: 'с 3-й платформы'.",
      "distractorExplanations": [
        "Неверный ответ."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Объявления A2",
      "provisional": true
    },
    {
      "id": "ru_grammar_b1_01",
      "skill": "grammar",
      "subskill": "conditional_mood",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Если бы у меня было больше времени, я ___ на гитаре.",
      "options": [
        "играл бы",
        "буду играть",
        "играю"
      ],
      "correctAnswer": 0,
      "explanation": "Сослагательное наклонение: глагол в прошлом времени + частицa 'бы'.",
      "distractorExplanations": [
        "Форма наклонения."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Условные предложения B1",
      "provisional": true
    },
    {
      "id": "ru_vocab_b1_01",
      "skill": "vocabulary",
      "subskill": "time_expressions",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Я учусь в этом университете ___ двух лет.",
      "options": [
        "в течение",
        "за",
        "через"
      ],
      "correctAnswer": 0,
      "explanation": "Продолжительность действия во времени: 'в течение'.",
      "distractorExplanations": [
        "Предлог времени."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Временные обороты B1",
      "provisional": true
    },
    {
      "id": "ru_read_b1_01",
      "skill": "reading",
      "subskill": "articles",
      "band": "B1",
      "difficulty": 4.0,
      "type": "reading_passage",
      "passage": "Согласно новому исследованию, регулярные прогулки на свежем воздухе снижают уровень стресса и улучшают концентрацию внимания.",
      "question": "Какой главный вывод исследования?",
      "options": [
        "Прогулки снижают стресс и улучшают внимание",
        "Спорт вреден для здоровья",
        "Гулять нужно только по вечерам"
      ],
      "correctAnswer": 0,
      "explanation": "Текст прямо говорит о снижении стресса и улучшении внимания.",
      "distractorExplanations": [
        "Ложный вывод."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Чтение статей B1",
      "provisional": true
    },
    {
      "id": "ru_grammar_b2_01",
      "skill": "grammar",
      "subskill": "prepositional_phrases",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Мы решили отложить прогулку, несмотря ___ плохую погоду.",
      "options": [
        "на",
        "за",
        "против"
      ],
      "correctAnswer": 0,
      "explanation": "Устойчивый предлог уступки: 'несмотря на'.",
      "distractorExplanations": [
        "Ошибочный предлог."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Сложные предлоги B2",
      "provisional": true
    },
    {
      "id": "ru_vocab_b2_01",
      "skill": "vocabulary",
      "subskill": "collocations",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Вам ___ предупредить нас об изменениях заранее!",
      "options": [
        "следовало",
        "должны",
        "нужно"
      ],
      "correctAnswer": 0,
      "explanation": "'Следовало' выражает рекомендацию или сожаление о невыполненном действии в прошлом.",
      "distractorExplanations": [
        "Неточная модальность."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Модальные нюансы B2",
      "provisional": true
    },
    {
      "id": "ru_read_b2_01",
      "skill": "reading",
      "subskill": "analytical_texts",
      "band": "B2",
      "difficulty": 5.0,
      "type": "reading_passage",
      "passage": "Развитие возобновляемой энергетики требует значительных инвестиций на начальном этапе, однако в долгосрочной перспективе приводит к снижению затрат на топливо.",
      "question": "Каково главное экономическое свойство зеленой энергетики по тексту?",
      "options": [
        "Высокие начальные вложения, но экономия в будущем",
        "Полное отсутствие затрат",
        "Быстрая окупаемость за один месяц"
      ],
      "correctAnswer": 0,
      "explanation": "Текст противопоставляет начальные инвестиции будущему снижению затрат.",
      "distractorExplanations": [
        "Искажение смысла."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Аналитическое чтение B2",
      "provisional": true
    },
    {
      "id": "ru_grammar_c1_01",
      "skill": "grammar",
      "subskill": "participle_construction",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Этот проект заслуживает внимания, ___ его высокую стоимость.",
      "options": [
        "невзирая на",
        "благодаря",
        "согласно"
      ],
      "correctAnswer": 0,
      "explanation": "'Невзирая на' выражает уступку высокого стиля.",
      "distractorExplanations": [
        "Оборот с противоположным смыслом."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Синтаксис C1",
      "provisional": true
    },
    {
      "id": "ru_vocab_c1_01",
      "skill": "vocabulary",
      "subskill": "formal_register",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Докладчик предоставил ___ анализ текущей экономической ситуации.",
      "options": [
        "исчерпывающий",
        "глубокий весьма",
        "большой очень"
      ],
      "correctAnswer": 0,
      "explanation": "'Исчерпывающий' — точный академический эпитет.",
      "distractorExplanations": [
        "Стилистическая неточность."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Лексика C1",
      "provisional": true
    },
    {
      "id": "ru_read_c1_01",
      "skill": "reading",
      "subskill": "scientific_essays",
      "band": "C1",
      "difficulty": 6.0,
      "type": "reading_passage",
      "passage": "Внедрение искусственного интеллекта в медицину требует жесткого этического контроля: алгоритмы должны служить вспомогательным инструментом, а не заменять врачебную ответственность.",
      "question": "Какую роль автор отводит искусственному интеллекту в медицине?",
      "options": [
        "Вспомогательный инструмент под контролем врача",
        "Полная замена врачей",
        "Исключительно административная функция"
      ],
      "correctAnswer": 0,
      "explanation": "Автор настаивает на вспомогательной роли без замены ответственности.",
      "distractorExplanations": [
        "Ошибка интерпретации."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Публицистика C1",
      "provisional": true
    },
    {
      "id": "ru_grammar_c2_01",
      "skill": "grammar",
      "subskill": "idioms",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "После долгих дебатов стороны наконец пришли ___ .",
      "options": [
        "к общему знаменателю",
        "в тупик",
        "на попятную"
      ],
      "correctAnswer": 0,
      "explanation": "Идиома 'прийти к общему знаменателю' означает достичь согласия.",
      "distractorExplanations": [
        "Противоположная идиома."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Идиоматика C2",
      "provisional": true
    },
    {
      "id": "ru_vocab_c2_01",
      "skill": "vocabulary",
      "subskill": "stylistic_nuances",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Его речь отличалась редкой образностью и ___ слога.",
      "options": [
        "изяществом",
        "красотой простой",
        "милотой"
      ],
      "correctAnswer": 0,
      "explanation": "'Изящество слога' — высокий стилистический оборот.",
      "distractorExplanations": [
        "Разговорный вариант."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Стилистическая нюансировка C2",
      "provisional": true
    },
    {
      "id": "ru_read_c2_01",
      "skill": "reading",
      "subskill": "literary_critique",
      "band": "C2",
      "difficulty": 7.0,
      "type": "reading_passage",
      "passage": "Философский герменевтический анализ утверждает, что смысл текста не зафиксирован статично, а актуализируется заново в процессе диалога между читателем и историческим контекстом.",
      "question": "Как трактуется смысл текста в данном отрывке?",
      "options": [
        "Как динамический результат диалога читателя и контекста",
        "Как неизменная воля автора",
        "Как случайный набор знаков"
      ],
      "correctAnswer": 0,
      "explanation": "Текст определяет смысл как актуализирующийся в диалоге.",
      "distractorExplanations": [
        "Догматическая интерпретация."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Герменевтика C2",
      "provisional": true
    },
    {
      "id": "ru_grammar_a0_02", "skill": "grammar", "subskill": "вопросы", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "___ тебя зовут?", "options": ["Как", "Кто", "Что"], "correctAnswer": 0,
      "explanation": "Вопрос об имени строится с «как»: «Как тебя зовут?»",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Вопросительные слова A0", "provisional": true
    },
    {
      "id": "ru_vocab_a0_02", "skill": "vocabulary", "subskill": "числа", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "Какое число идёт сразу после семи?", "options": ["восемь", "девять", "шесть"], "correctAnswer": 0,
      "explanation": "Ряд такой: шесть, семь, восемь, девять.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Базовые числительные A0", "provisional": true
    },
    {
      "id": "ru_read_a0_02", "skill": "reading", "subskill": "объявления", "band": "A0", "difficulty": 1,
      "type": "reading_passage", "passage": "АПТЕКА — ЗАКРЫТО В ВОСКРЕСЕНЬЕ", "question": "Можно ли купить лекарства в воскресенье?",
      "options": ["Нет, аптека закрыта", "Да, утром", "Да, вечером"], "correctAnswer": 0,
      "explanation": "«Закрыто в воскресенье» означает, что аптека не работает.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Простые объявления A0", "provisional": true
    },
    {
      "id": "ru_grammar_a1_02", "skill": "grammar", "subskill": "падежи", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "Я живу в ___ .", "options": ["Москве", "Москва", "Москву"], "correctAnswer": 0,
      "explanation": "После «в» в значении места нужен предложный падеж: «в Москве».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Предложный падеж A1", "provisional": true
    },
    {
      "id": "ru_vocab_a1_02", "skill": "vocabulary", "subskill": "семья", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "Отец моей мамы — это мой ___.", "options": ["дедушка", "дядя", "брат"], "correctAnswer": 0,
      "explanation": "Отец матери — дедушка.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Семья A1", "provisional": true
    },
    {
      "id": "ru_read_a1_02", "skill": "reading", "subskill": "расписание", "band": "A1", "difficulty": 2,
      "type": "reading_passage", "passage": "БАССЕЙН — Открыт с 9 до 20 часов — Последний вход: 19:00",
      "question": "До какого времени можно войти?",
      "options": ["до 19:00", "до 20:00", "до 9:00"], "correctAnswer": 0,
      "explanation": "Последний вход разрешён в 19:00, за час до закрытия.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Практическая информация A1", "provisional": true
    },
    {
      "id": "ru_grammar_a2_02", "skill": "grammar", "subskill": "вид_глагола", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Вчера я ___ книгу до конца.", "options": ["прочитал", "читал", "читаю"], "correctAnswer": 0,
      "explanation": "Завершённое действие с результатом требует совершенного вида: «прочитал».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Совершенный вид A2", "provisional": true
    },
    {
      "id": "ru_vocab_a2_02", "skill": "vocabulary", "subskill": "работа", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Для чего нужно собеседование?",
      "options": ["Чтобы познакомиться с работодателем и получить работу", "Чтобы купить билет на поезд", "Чтобы заплатить налоги"], "correctAnswer": 0,
      "explanation": "Собеседование — встреча кандидата с работодателем.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Лексика работы A2", "provisional": true
    },
    {
      "id": "ru_read_a2_02", "skill": "reading", "subskill": "письмо", "band": "A2", "difficulty": 3,
      "type": "reading_passage", "passage": "Привет, Ольга! Я заболел и завтра не смогу прийти. Можно перенести встречу на четверг? Спасибо, Иван",
      "question": "Зачем Иван пишет?",
      "options": ["Чтобы перенести встречу", "Чтобы отменить урок", "Чтобы заказать обед"], "correctAnswer": 0,
      "explanation": "Он объясняет болезнь и просит перенести встречу на четверг.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Простое письмо A2", "provisional": true
    },
    {
      "id": "ru_grammar_b1_02", "skill": "grammar", "subskill": "условное", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Если бы у меня было время, я ___ больше читать.", "options": ["стал бы", "стану", "стал"], "correctAnswer": 0,
      "explanation": "Нереальное условие требует сослагательного наклонения с частицей «бы»: «стал бы».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Сослагательное наклонение B1", "provisional": true
    },
    {
      "id": "ru_vocab_b1_02", "skill": "vocabulary", "subskill": "сочетаемость", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "После долгих размышлений он ___ трудное решение.",
      "options": ["принял", "сделал", "дал"], "correctAnswer": 0,
      "explanation": "Правильное сочетание — «принять решение».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Устойчивые сочетания B1", "provisional": true
    },
    {
      "id": "ru_read_b1_02", "skill": "reading", "subskill": "статья", "band": "B1", "difficulty": 4,
      "type": "reading_passage", "passage": "С октября районная библиотека будет работать до 20 часов со вторника по субботу. По понедельникам утром она закрыта: в это время переставляют мебель и обновляют фонд.",
      "question": "Почему библиотека закрыта в понедельник утром?",
      "options": ["Чтобы обновить залы и фонд", "Потому что сотрудники в отпуске", "Потому что мало посетителей"], "correctAnswer": 0,
      "explanation": "В тексте прямо сказано, что в это время переставляют мебель и обновляют фонд.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Информационная статья B1", "provisional": true
    },
    {
      "id": "ru_grammar_b2_02", "skill": "grammar", "subskill": "причастие", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Работы ___ до конца года.", "options": ["будут завершены", "завершат", "будут завершать"], "correctAnswer": 0,
      "explanation": "Страдательный залог будущего времени: «будут завершены».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Страдательный залог B2", "provisional": true
    },
    {
      "id": "ru_vocab_b2_02", "skill": "vocabulary", "subskill": "выражения", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Что означает «в справочном порядке»?",
      "options": ["Для информации, без окончательного значения", "Обязательно к исполнению", "В форме договора"], "correctAnswer": 0,
      "explanation": "Выражение указывает на ориентировочную, необязательную информацию.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Абстрактные выражения B2", "provisional": true
    },
    {
      "id": "ru_read_b2_02", "skill": "reading", "subskill": "аргументация", "band": "B2", "difficulty": 5,
      "type": "reading_passage", "passage": "Удалённая работа привлекла гибкостью, но компании, которые ввели её без правил, сегодня отмечают ослабление связей внутри команд. Вместо полного возвращения в офис многие руководители выбирают обязательные общие дни присутствия.",
      "question": "Какое решение выбирают компании?",
      "options": ["Общие фиксированные дни в офисе", "Полный возврат в офис", "Отмену удалённой работы"], "correctAnswer": 0,
      "explanation": "Текст противопоставляет это решение полному возвращению в офис.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Аргументирующий текст B2", "provisional": true
    },
    {
      "id": "ru_grammar_c1_02", "skill": "grammar", "subskill": "уступка", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Хотя он ___ все требования, его кандидатуру не утвердили.",
      "options": ["выполнил", "выполняет", "выполнит"], "correctAnswer": 0,
      "explanation": "После «хотя» в прошедшем времени употребляется форма прошедшего времени: «выполнил».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Уступительные конструкции C1", "provisional": true
    },
    {
      "id": "ru_vocab_c1_02", "skill": "vocabulary", "subskill": "оттенки", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "В выражении «временная мера» слово «временная» означает:",
      "options": ["действующая ограниченный срок", "окончательная и неизменная", "секретная"], "correctAnswer": 0,
      "explanation": "«Временный» противоположно «постоянному»: мера действует ограниченный срок.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Лексические оттенки C1", "provisional": true
    },
    {
      "id": "ru_read_c1_02", "skill": "reading", "subskill": "позиция", "band": "C1", "difficulty": 6,
      "type": "reading_passage", "passage": "Регуляторов часто упрекают в медлительности. Упрёк не лишён оснований, но он не учитывает структурное ограничение: норма, принятая слишком быстро, рискует устареть до применения, а слишком поздняя норма позволяет закрепиться практикам, которые потом трудно отменить.",
      "question": "Какова позиция автора?",
      "options": ["Критика отчасти справедлива, но не учитывает реальную дилемму", "Регуляторы полностью некомпетентны", "Регулировать нужно как можно быстрее"], "correctAnswer": 0,
      "explanation": "Автор признаёт упрёк, но уточняет его, показывая временную дилемму.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Нюансированная аргументация C1", "provisional": true
    },
    {
      "id": "ru_grammar_c2_02", "skill": "grammar", "subskill": "деепричастие", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "___ все обстоятельства, он всё же принял это предложение.",
      "options": ["Взвесив", "Взвешивая", "Взвешенный"], "correctAnswer": 0,
      "explanation": "Совершённое добавочное действие передаётся деепричастием совершенного вида: «взвесив».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Деепричастные обороты C2", "provisional": true
    },
    {
      "id": "ru_vocab_c2_02", "skill": "vocabulary", "subskill": "книжная_лексика", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "«Куртуазный» поступок — это поступок:",
      "options": ["изысканно вежливый, галантный", "грубый и резкий", "необдуманный"], "correctAnswer": 0,
      "explanation": "«Куртуазный» означает подчёркнуто вежливый, галантный.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Книжная лексика C2", "provisional": true
    },
    {
      "id": "ru_read_c2_02", "skill": "reading", "subskill": "синтез", "band": "C2", "difficulty": 7,
      "type": "reading_passage", "passage": "Утверждение, будто автоматизация освободит время для труда, предполагает справедливое распределение выгод от роста производительности. Однако ничто в истории технических изменений не говорит о том, что такое распределение происходит само собой: оно всегда было результатом соотношения сил, а не самой техники.",
      "question": "Что оспаривает автор?",
      "options": ["Автоматический характер распределения выгод", "Существование роста производительности", "Историческую возможность технического прогресса"], "correctAnswer": 0,
      "explanation": "Автор не отрицает выгоды, а оспаривает их самостоятельное распределение.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Критический синтез C2", "provisional": true
    },
  ],
  "el": [
    {
      "id": "el_grammar_a0_01",
      "skill": "grammar",
      "subskill": "verb_be",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Γεια σας! Πώς ___ ;",
      "options": [
        "είστε",
        "είμαι",
        "είναι"
      ],
      "correctAnswer": 0,
      "explanation": "Πληθυντικός ευγενείας / 2ο πληθυντικό: 'είστε'.",
      "distractorExplanations": [
        "Λάθος πρόσωπο."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Βασικές εκφράσεις A0",
      "provisional": true
    },
    {
      "id": "el_vocab_a0_01",
      "skill": "vocabulary",
      "subskill": "greetings",
      "band": "A0",
      "difficulty": 1.0,
      "type": "multiple_choice",
      "question": "Ποια λέξη χρησιμοποιούμε για να ευχαριστήσουμε κάποιον;",
      "options": [
        "Ευχαριστώ",
        "Γεια σου",
        "Παρακαλώ"
      ],
      "correctAnswer": 0,
      "explanation": "'Ευχαριστώ' σημαίνει thank you.",
      "distractorExplanations": [
        "Λάθος λέξη."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Λεξιλόγιο A0",
      "provisional": true
    },
    {
      "id": "el_read_a0_01",
      "skill": "reading",
      "subskill": "signs",
      "band": "A0",
      "difficulty": 1.0,
      "type": "reading_passage",
      "passage": "ΕΙΣΟΔΟΣ ΕΛΕΥΘΕΡΗ",
      "question": "Πρέπει να πληρώσετε για να μπείτε;",
      "options": [
        "Όχι, είναι δωρεάν",
        "Ναι, 5 ευρώ",
        "Μόνο οι ενήλικες"
      ],
      "correctAnswer": 0,
      "explanation": "'Είσοδος ελεύθερη' σημαίνει δωρεάν.",
      "distractorExplanations": [
        "Λανθασμένη ερμηνεία."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Πινακίδες A0",
      "provisional": true
    },
    {
      "id": "el_grammar_a1_01",
      "skill": "grammar",
      "subskill": "present_tense",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Εγώ ___ από την Ελλάδα.",
      "options": [
        "είμαι",
        "είσαι",
        "είναι"
      ],
      "correctAnswer": 0,
      "explanation": "1ο πρόσωπο ενικού: 'είμαι'.",
      "distractorExplanations": [
        "Λάθος τύπος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ρήματα A1",
      "provisional": true
    },
    {
      "id": "el_vocab_a1_01",
      "skill": "vocabulary",
      "subskill": "prepositions",
      "band": "A1",
      "difficulty": 2.0,
      "type": "multiple_choice",
      "question": "Το βιβλίο μου είναι ___ στο τραπέζι. 📘",
      "options": [
        "πάνω",
        "κάτω",
        "μέσα"
      ],
      "correctAnswer": 0,
      "explanation": "Επάνω σε επιφάνεια: 'πάνω'.",
      "distractorExplanations": [
        "Λάθος πρόθεση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Τοποθεσία A1",
      "provisional": true
    },
    {
      "id": "el_read_a1_01",
      "skill": "reading",
      "subskill": "hours",
      "band": "A1",
      "difficulty": 2.0,
      "type": "reading_passage",
      "passage": "ΩΡΕΣ ΛΕΙΤΟΥΡΓΙΑΣ: Δευτέρα - Παρασκευή 09:00 - 17:00.",
      "question": "Είναι ανοιχτά το Σάββατο;",
      "options": [
        "Όχι",
        "Ναι",
        "Μόνο το πρωί"
      ],
      "correctAnswer": 0,
      "explanation": "Λειτουργεί μόνο Δευτέρα έως Παρασκευή.",
      "distractorExplanations": [
        "Λάθος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ωράριο A1",
      "provisional": true
    },
    {
      "id": "el_grammar_a2_01",
      "skill": "grammar",
      "subskill": "past_simple",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Χθες ___ στο σινεμά και είδαμε μια ωραία ταινία.",
      "options": [
        "πήγαμε",
        "πηγαίνουμε",
        "θα πάμε"
      ],
      "correctAnswer": 0,
      "explanation": "Αόριστος για ολοκληρωμένη πράξη στο παρελθόν.",
      "distractorExplanations": [
        "Λάθος χρόνος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Αόριστος A2",
      "provisional": true
    },
    {
      "id": "el_vocab_a2_01",
      "skill": "vocabulary",
      "subskill": "comparatives",
      "band": "A2",
      "difficulty": 3.0,
      "type": "multiple_choice",
      "question": "Αυτό το αυτοκίνητο είναι ___ από το δικό μου. 🚗",
      "options": [
        "γρηγορότερο",
        "γρήγορο",
        "γρηγορότερα"
      ],
      "correctAnswer": 0,
      "explanation": "Συγκριτικός βαθμός επιθέτου.",
      "distractorExplanations": [
        "Ακατάλληλος τύπος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Σύγκριση A2",
      "provisional": true
    },
    {
      "id": "el_read_a2_01",
      "skill": "reading",
      "subskill": "announcements",
      "band": "A2",
      "difficulty": 3.0,
      "type": "reading_passage",
      "passage": "ΑΝΑΚΟΙΝΩΣΗ: Το λεωφορείο για το αεροδρόμιο αναχωρεί από την Αποβάθρα 2.",
      "question": "Από πού αναχωρεί το λεωφορείο;",
      "options": [
        "Από την Αποβάθρα 2",
        "Από την Αποβάθρα 1",
        "Από τον σταθμό τρένου"
      ],
      "correctAnswer": 0,
      "explanation": "Το κείμενο αναφέρει Αποβάθρα 2.",
      "distractorExplanations": [
        "Λάθος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ανακοινώσεις A2",
      "provisional": true
    },
    {
      "id": "el_grammar_b1_01",
      "skill": "grammar",
      "subskill": "conditionals",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Αν ___ χρόνο, θα ερχόμουν μαζί σας στο πάρτι.",
      "options": [
        "είχα",
        "έχω",
        "θα έχω"
      ],
      "correctAnswer": 0,
      "explanation": "Υποθετικός λόγος (μη πραγματικό στο παρόν): αν + παρατατικός.",
      "distractorExplanations": [
        "Λάθος έγκλιση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Υποθετικοί λόγοι B1",
      "provisional": true
    },
    {
      "id": "el_vocab_b1_01",
      "skill": "vocabulary",
      "subskill": "time_phrases",
      "band": "B1",
      "difficulty": 4.0,
      "type": "multiple_choice",
      "question": "Μαθαίνω ελληνικά ___ δύο χρόνια και μου αρέσουν πολύ.",
      "options": [
        "εδώ και",
        "από",
        "για"
      ],
      "correctAnswer": 0,
      "explanation": "'Εδώ και' δηλώνει διάρκεια που συνεχίζεται στο παρόν.",
      "distractorExplanations": [
        "Λάθος πρόθεση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Χρονικές εκφράσεις B1",
      "provisional": true
    },
    {
      "id": "el_read_b1_01",
      "skill": "reading",
      "subskill": "articles",
      "band": "B1",
      "difficulty": 4.0,
      "type": "reading_passage",
      "passage": "Η μεσογειακή διατροφή συμβάλλει σημαντικά στη μακροζωία και τη μείωση των καρδιαγγειακών παθήσεων σύμφωνα με πρόσφατες μελέτες.",
      "question": "Ποιο είναι το κύριο όφελος της μεσογειακής διατροφής;",
      "options": [
        "Προστασία της υγείας της καρδιάς και μακροζωία",
        "Μείωση του κόστους τροφίμων",
        "Γρήγορο μαγείρεμα"
      ],
      "correctAnswer": 0,
      "explanation": "Το κείμενο εστιάζει στη μακροζωία και την καρδιαγγειακή υγεία.",
      "distractorExplanations": [
        "Αυθαίρετη απάντηση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Κατανόηση άρθρων B1",
      "provisional": true
    },
    {
      "id": "el_grammar_b2_01",
      "skill": "grammar",
      "subskill": "concessive_clauses",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Παρόλο που ___ κουρασμένος, συνέχισε να διαβάζει.",
      "options": [
        "ήταν",
        "είναι",
        "θα είναι"
      ],
      "correctAnswer": 0,
      "explanation": "'Παρόλο που' με παρατατικό για εναντιωματική πρόταση στο παρελθόν.",
      "distractorExplanations": [
        "Λάθος χρόνος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Εναντιωματικές προτάσεις B2",
      "provisional": true
    },
    {
      "id": "el_vocab_b2_01",
      "skill": "vocabulary",
      "subskill": "advanced_verbs",
      "band": "B2",
      "difficulty": 5.0,
      "type": "multiple_choice",
      "question": "Δεν μπορώ να ___ αυτή την απαράδεκτη συμπεριφορά.",
      "options": [
        "ανεχτώ",
        "αντέξω",
        "κάνω"
      ],
      "correctAnswer": 0,
      "explanation": "'Ανεχτώ' σημαίνει tolerating inappropriate behavior.",
      "distractorExplanations": [
        "Λιγότερο ακριβές."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Σύνθετο λεξιλόγιο B2",
      "provisional": true
    },
    {
      "id": "el_read_b2_01",
      "skill": "reading",
      "subskill": "analytical",
      "band": "B2",
      "difficulty": 5.0,
      "type": "reading_passage",
      "passage": "Η μετάβαση στις ανανεώσιμες πηγές ενέργειας απαιτεί σημαντικές επενδύσεις υποδομής, αλλά διασφαλίζει την ενεργειακή αυτονομία μακροπρόθεσμα.",
      "question": "Ποιο είναι το κύριο μακροπρόθεσμο όφελος;",
      "options": [
        "Η ενεργειακή αυτονομία",
        "Η άμεση κατάργηση των φόρων",
        "Η μείωση της κατανάλωσης"
      ],
      "correctAnswer": 0,
      "explanation": "Το κείμενο αναφέρει ρητά την ενεργειακή αυτονομία.",
      "distractorExplanations": [
        "Λανθασμένος ισχυρισμός."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Αναλυτική ανάγνωση B2",
      "provisional": true
    },
    {
      "id": "el_grammar_c1_01",
      "skill": "grammar",
      "subskill": "formal_syntax",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Υπό την προϋπόθεση ότι όλοι ___ σύμφωνοι, μπορούμε να ξεκινήσουμε.",
      "options": [
        "είναι",
        "θα είναι",
        "ήταν"
      ],
      "correctAnswer": 0,
      "explanation": "Τυπική σύνταξη: 'Υπό την προϋπόθεση ότι' + οριστική παρόντος.",
      "distractorExplanations": [
        "Λάθος χρόνος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Τυπικές δομές C1",
      "provisional": true
    },
    {
      "id": "el_vocab_c1_01",
      "skill": "vocabulary",
      "subskill": "formal_register",
      "band": "C1",
      "difficulty": 6.0,
      "type": "multiple_choice",
      "question": "Η απόφαση του συμβουλίου προκάλεσε έντονες ___ στην κοινή γνώμη.",
      "options": [
        "αντιδράσεις",
        "κουβέντες",
        "φωνές"
      ],
      "correctAnswer": 0,
      "explanation": "'Εντονες αντιδράσεις' είναι η επίσημη δημοσιογραφική διατύπωση.",
      "distractorExplanations": [
        "Ομιλούμενος λόγος."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Επίσημο ύφος C1",
      "provisional": true
    },
    {
      "id": "el_read_c1_01",
      "skill": "reading",
      "subskill": "essays",
      "band": "C1",
      "difficulty": 6.0,
      "type": "reading_passage",
      "passage": "Η ηθική της τεχνητής νοημοσύνης δεν αποτελεί πολυτέλεια αλλά αναγκαιότητα: οι αλγόριθμοι οφείλουν να διέπονται από διαφάνεια και λογοδοσία.",
      "question": "Τι αξιώνει το κείμενο για τους αλγορίθμους;",
      "options": [
        "Διαφάνεια και λογοδοσία",
        "Απόλυτη μυστικότητα",
        "Ταχύτητα χωρίς ελέγχους"
      ],
      "correctAnswer": 0,
      "explanation": "Το κείμενο απαιτεί διαφάνεια και λογοδοσία.",
      "distractorExplanations": [
        "Διαστρέβλωση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Δοκίμια C1",
      "provisional": true
    },
    {
      "id": "el_grammar_c2_01",
      "skill": "grammar",
      "subskill": "idiomatic_expressions",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Η προσπάθειά του να τους πείσει απέβη ___ , καθώς κανείς δεν τον πίστεψε.",
      "options": [
        "άκαρπη",
        "άδικη",
        "άτοπη"
      ],
      "correctAnswer": 0,
      "explanation": "Έκφραση: 'απέβη άκαρπη' (bore no fruit/yielded no result).",
      "distractorExplanations": [
        "Λάθος επίθετο."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ιδιωματισμοί C2",
      "provisional": true
    },
    {
      "id": "el_vocab_c2_01",
      "skill": "vocabulary",
      "subskill": "rare_words",
      "band": "C2",
      "difficulty": 7.0,
      "type": "multiple_choice",
      "question": "Ο λόγος του διακρινόταν για την ευγλωττία και τη βαθιά ___ του.",
      "options": [
        "διορατικότητα",
        "επιφάνεια",
        "απλότητα"
      ],
      "correctAnswer": 0,
      "explanation": "'Διορατικότητα' (insight/perceptiveness) ταιριάζει σε υψηλό επίπεδο.",
      "distractorExplanations": [
        "Λιγότερο απαιτητικό."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Λεξιλογική οξύτητα C2",
      "provisional": true
    },
    {
      "id": "el_read_c2_01",
      "skill": "reading",
      "subskill": "hermeneutics",
      "band": "C2",
      "difficulty": 7.0,
      "type": "reading_passage",
      "passage": "Η φαινομενολογική προσέγγιση αντιλαμβάνεται την ερμηνεία ως διαλεκτική συνάντηση υποκειμένου και κειμένου, όπου το νόημα αναδύεται αδιαλείπτως.",
      "question": "Πώς νοείται το νόημα σύμφωνα με το κείμενο;",
      "options": [
        "Ως δυναμική ανάδυση μέσω της διαλεκτικής συνάντησης",
        "Ως σταθερή και απολιθωμένη αλήθεια",
        "Ως τυχαίο κατασκεύασμα"
      ],
      "correctAnswer": 0,
      "explanation": "Το νόημα ορίζεται ως δυναμική ανάδυση.",
      "distractorExplanations": [
        "Στατική θεώρηση."
      ],
      "scoringRules": {
        "points": 1,
        "partialPoints": 0
      },
      "cefrDescriptor": "Ερμηνευτική C2",
      "provisional": true
    },
    {
      "id": "el_grammar_a0_02", "skill": "grammar", "subskill": "ερωτηματικές", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "___ σε λένε;", "options": ["Πώς", "Ποιος", "Τι"], "correctAnswer": 0,
      "explanation": "Η ερώτηση για το όνομα γίνεται με «πώς»: «Πώς σε λένε;»",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Βασικές ερωτηματικές A0", "provisional": true
    },
    {
      "id": "el_vocab_a0_02", "skill": "vocabulary", "subskill": "αριθμοί", "band": "A0", "difficulty": 1,
      "type": "multiple_choice", "question": "Ποιος αριθμός έρχεται αμέσως μετά το επτά;", "options": ["οκτώ", "εννέα", "έξι"], "correctAnswer": 0,
      "explanation": "Η σειρά είναι: έξι, επτά, οκτώ, εννέα.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Βασικοί αριθμοί A0", "provisional": true
    },
    {
      "id": "el_read_a0_02", "skill": "reading", "subskill": "πινακίδες", "band": "A0", "difficulty": 1,
      "type": "reading_passage", "passage": "ΦΑΡΜΑΚΕΙΟ — ΚΛΕΙΣΤΟ ΤΗΝ ΚΥΡΙΑΚΗ", "question": "Μπορώ να αγοράσω φάρμακα την Κυριακή;",
      "options": ["Όχι, είναι κλειστό", "Ναι, το πρωί", "Ναι, το βράδυ"], "correctAnswer": 0,
      "explanation": "«Κλειστό την Κυριακή» σημαίνει ότι το φαρμακείο δεν λειτουργεί.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Απλές πινακίδες A0", "provisional": true
    },
    {
      "id": "el_grammar_a1_02", "skill": "grammar", "subskill": "άρθρα", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "___ βιβλία είναι στο τραπέζι.", "options": ["Τα", "Το", "Η"], "correctAnswer": 0,
      "explanation": "Το «βιβλία» είναι ουδέτερο πληθυντικό: οριστικό άρθρο «τα».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Οριστικά άρθρα A1", "provisional": true
    },
    {
      "id": "el_vocab_a1_02", "skill": "vocabulary", "subskill": "οικογένεια", "band": "A1", "difficulty": 2,
      "type": "multiple_choice", "question": "Ο πατέρας της μητέρας μου είναι ο ___.", "options": ["παππούς", "θείος", "αδελφός"], "correctAnswer": 0,
      "explanation": "Ο πατέρας της μητέρας είναι ο παππούς από την πλευρά της μητέρας.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Οικογενειακές σχέσεις A1", "provisional": true
    },
    {
      "id": "el_read_a1_02", "skill": "reading", "subskill": "ωράριο", "band": "A1", "difficulty": 2,
      "type": "reading_passage", "passage": "ΔΗΜΟΤΙΚΗ ΒΙΒΛΙΟΘΗΚΗ — Ανοιχτά 9:00-18:00 — Τελευταία είσοδος: 17:30",
      "question": "Μέχρι τι ώρα μπορώ να μπω;",
      "options": ["17:30", "18:00", "9:00"], "correctAnswer": 0,
      "explanation": "Η τελευταία είσοδος επιτρέπεται στις 17:30.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Πρακτικές πληροφορίες A1", "provisional": true
    },
    {
      "id": "el_grammar_a2_02", "skill": "grammar", "subskill": "αόριστος", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Χθες η Άννα ___ στον κινηματογράφο με την αδελφή της.", "options": ["πήγε", "πηγαίνει", "θα πάει"], "correctAnswer": 0,
      "explanation": "Για ολοκληρωμένη πράξη στο παρελθόν χρησιμοποιείται αόριστος: «πήγε».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Αόριστος A2", "provisional": true
    },
    {
      "id": "el_vocab_a2_02", "skill": "vocabulary", "subskill": "εργασία", "band": "A2", "difficulty": 3,
      "type": "multiple_choice", "question": "Σε τι χρησιμεύει μια συνέντευξη για δουλειά;",
      "options": ["Να γνωρίσεις τον εργοδότη για μια θέση", "Να κλείσεις εισιτήριο", "Να πληρώσεις φόρους"], "correctAnswer": 0,
      "explanation": "Η συνέντευξη είναι η συνάντηση του υποψηφίου με τον εργοδότη.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Λεξιλόγιο εργασίας A2", "provisional": true
    },
    {
      "id": "el_read_a2_02", "skill": "reading", "subskill": "email", "band": "A2", "difficulty": 3,
      "type": "reading_passage", "passage": "Γεια σου Μαρία, είμαι άρρωστος σήμερα και αύριο δεν θα μπορέσω να έρθω. Μπορούμε να μεταφέρουμε τη συνάντηση την Πέμπτη; Ευχαριστώ, Νίκος",
      "question": "Γιατί γράφει ο Νίκος;",
      "options": ["Για να μεταφέρει μια συνάντηση", "Για να ακυρώσει ένα μάθημα", "Για να παραγγείλει φαγητό"], "correctAnswer": 0,
      "explanation": "Εξηγεί ότι είναι άρρωστος και ζητά να μεταφερθεί η συνάντηση.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Απλό email A2", "provisional": true
    },
    {
      "id": "el_grammar_b1_02", "skill": "grammar", "subskill": "υποτακτική", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Πρέπει να ___ νωρίτερα αύριο.", "options": ["φύγεις", "φεύγεις", "θα φύγεις"], "correctAnswer": 0,
      "explanation": "Μετά το «να» χρησιμοποιείται υποτακτική: «να φύγεις».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Υποτακτική B1", "provisional": true
    },
    {
      "id": "el_vocab_b1_02", "skill": "vocabulary", "subskill": "συνάψεις", "band": "B1", "difficulty": 4,
      "type": "multiple_choice", "question": "Ύστερα από πολλή σκέψη, ___ μια δύσκολη απόφαση.",
      "options": ["πήρε", "έκανε", "έδωσε"], "correctAnswer": 0,
      "explanation": "Η σωστή σύναψη είναι «παίρνω απόφαση».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Συνήθεις συνάψεις B1", "provisional": true
    },
    {
      "id": "el_read_b1_02", "skill": "reading", "subskill": "άρθρο", "band": "B1", "difficulty": 4,
      "type": "reading_passage", "passage": "Από τον Οκτώβριο η δημοτική βιβλιοθήκη θα μένει ανοιχτή μέχρι τις 20:00 από Τρίτη έως Σάββατο. Τη Δευτέρα το πρωί θα είναι κλειστή, ώστε να τακτοποιηθούν οι αίθουσες.",
      "question": "Γιατί η βιβλιοθήκη είναι κλειστή τη Δευτέρα το πρωί;",
      "options": ["Για να τακτοποιηθούν οι αίθουσες", "Επειδή το προσωπικό έχει άδεια", "Επειδή έρχονται λίγοι επισκέπτες"], "correctAnswer": 0,
      "explanation": "Το κείμενο λέει ρητά ότι η κλειστή περίοδος χρησιμεύει για την τακτοποίηση των αιθουσών.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Ενημερωτικό άρθρο B1", "provisional": true
    },
    {
      "id": "el_grammar_b2_02", "skill": "grammar", "subskill": "παθητική", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Οι εργασίες ___ μέχρι το τέλος του χρόνου.", "options": ["θα ολοκληρωθούν", "θα ολοκληρώνουν", "ολοκληρώνουν"], "correctAnswer": 0,
      "explanation": "Παθητική φωνή μέλλοντα: «θα ολοκληρωθούν».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Παθητική φωνή B2", "provisional": true
    },
    {
      "id": "el_vocab_b2_02", "skill": "vocabulary", "subskill": "εκφράσεις", "band": "B2", "difficulty": 5,
      "type": "multiple_choice", "question": "Τι σημαίνει «ενδεικτικά»;",
      "options": ["Πληροφοριακά, χωρίς δεσμευτική ισχύ", "Υποχρεωτικά", "Με τη μορφή σύμβασης"], "correctAnswer": 0,
      "explanation": "Το «ενδεικτικά» δηλώνει πληροφορία προσανατολισμού, όχι υποχρέωση.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Αφηρημένες εκφράσεις B2", "provisional": true
    },
    {
      "id": "el_read_b2_02", "skill": "reading", "subskill": "επιχειρηματολογία", "band": "B2", "difficulty": 5,
      "type": "reading_passage", "passage": "Η τηλεργασία κέρδισε χάρη στην ευελιξία της, όμως οι εταιρείες που την εφάρμοσαν χωρίς κανόνες διαπιστώνουν σήμερα αποδυνάμωση των δεσμών στις ομάδες. Αντί να επιστρέψουν πλήρως στο γραφείο, αρκετές διοικήσεις επιλέγουν κοινές ημέρες παρουσίας.",
      "question": "Ποια λύση επιλέγουν οι εταιρείες;",
      "options": ["Σταθερές κοινές ημέρες παρουσίας", "Πλήρη επιστροφή στο γραφείο", "Κατάργηση της τηλεργασίας"], "correctAnswer": 0,
      "explanation": "Το κείμενο αντιπαραβάλλει αυτή τη λύση με την πλήρη επιστροφή.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Επιχειρηματολογικό κείμενο B2", "provisional": true
    },
    {
      "id": "el_grammar_c1_02", "skill": "grammar", "subskill": "παραχώρηση", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Αν και ___ όλα τα προσόντα, η υποψηφιότητά του απορρίφθηκε.",
      "options": ["διέθετε", "διαθέτει", "θα διαθέσει"], "correctAnswer": 0,
      "explanation": "Σε παραχώρηση στο παρελθόν χρησιμοποιείται παρατατικός: «αν και διέθετε».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Παραχώρηση C1", "provisional": true
    },
    {
      "id": "el_vocab_c1_02", "skill": "vocabulary", "subskill": "αποχρώσεις", "band": "C1", "difficulty": 6,
      "type": "multiple_choice", "question": "Στη φράση «προσωρινό μέτρο», το «προσωρινό» σημαίνει:",
      "options": ["που ισχύει για περιορισμένο διάστημα", "οριστικό και αμετάκλητο", "εμπιστευτικό"], "correctAnswer": 0,
      "explanation": "Το «προσωρινό» αντιτίθεται στο «οριστικό».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Λεξιλογικές αποχρώσεις C1", "provisional": true
    },
    {
      "id": "el_read_c1_02", "skill": "reading", "subskill": "στάση", "band": "C1", "difficulty": 6,
      "type": "reading_passage", "passage": "Συχνά κατηγορούν τους ρυθμιστές για βραδύτητα. Η κατηγορία δεν είναι αβάσιμη, αλλά αγνοεί έναν διαρθρωτικό περιορισμό: ένας κανόνας που ψηφίζεται πολύ γρήγορα κινδυνεύει να είναι ξεπερασμένος πριν εφαρμοστεί, ενώ ένας πολύ καθυστερημένος κανόνας επιτρέπει να παγιωθούν πρακτικές δύσκολο να ανατραπούν.",
      "question": "Ποια είναι η θέση του συγγραφέα;",
      "options": ["Η κριτική είναι εν μέρει δικαιολογημένη αλλά αγνοεί ένα πραγματικό δίλημμα", "Οι ρυθμιστές είναι εντελώς ανίκανοι", "Πρέπει να ρυθμίζουμε όσο το δυνατόν γρηγορότερα"], "correctAnswer": 0,
      "explanation": "Ο συγγραφέας δέχεται την κριτική και έπειτα τη σχετικοποιεί με ένα δίλημμα χρόνου.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Διαβαθμισμένη επιχειρηματολογία C1", "provisional": true
    },
    {
      "id": "el_grammar_c2_02", "skill": "grammar", "subskill": "μετοχή", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "___ όλες τις παραμέτρους, αποφάσισε τελικά να δεχθεί την πρόταση.",
      "options": ["Έχοντας σταθμίσει", "Σταθμίζοντας", "Σταθμισμένος"], "correctAnswer": 0,
      "explanation": "Η συντελεσμένη δευτερεύουσα πράξη δηλώνεται με «έχοντας» + απαρέμφατο: «έχοντας σταθμίσει».",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Μετοχικές φράσεις C2", "provisional": true
    },
    {
      "id": "el_vocab_c2_02", "skill": "vocabulary", "subskill": "λόγια_λέξη", "band": "C2", "difficulty": 7,
      "type": "multiple_choice", "question": "Μια «κατευναστική» δήλωση είναι δήλωση που:",
      "options": ["ηρεμεί, αμβλύνοντας τις εντάσεις", "κατηγορεί με δριμύτητα", "μπερδεύει λόγω ασάφειας"], "correctAnswer": 0,
      "explanation": "Το «κατευναστικός» δηλώνει αυτό που καθησυχάζει και απαλύνει.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Λόγια λεξιλόγιο C2", "provisional": true
    },
    {
      "id": "el_read_c2_02", "skill": "reading", "subskill": "σύνθεση", "band": "C2", "difficulty": 7,
      "type": "reading_passage", "passage": "Το επιχείρημα ότι η αυτοματοποίηση θα ελευθερώσει χρόνο εργασίας προϋποθέτει δίκαιη κατανομή των κερδών παραγωγικότητας. Ωστόσο τίποτε στην ιστορία των τεχνικών αλλαγών δεν δείχνει ότι μια τέτοια κατανομή συντελείται αυτόματα: πάντα προέκυπτε από συσχετισμούς δυνάμεων, όχι από την ίδια την τεχνική.",
      "question": "Τι αμφισβητεί ο συγγραφέας;",
      "options": ["Τον αυτόματο χαρακτήρα της κατανομής των κερδών", "Την ύπαρξη κερδών παραγωγικότητας", "Την ιστορική δυνατότητα τεχνικής προόδου"], "correctAnswer": 0,
      "explanation": "Δεν αρνείται τα κέρδη: αμφισβητεί ότι κατανέμονται από μόνα τους.",
      "scoringRules": { "points": 1, "partialPoints": 0 },
      "cefrDescriptor": "Κριτική σύνθεση C2", "provisional": true
    },
  ]
};

if (typeof window !== 'undefined') {
  window.COSY_PLACEMENT_QUESTIONS_MULTILINGUAL = MULTILINGUAL_QUESTION_BANKS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MULTILINGUAL_QUESTION_BANKS;
}
