/**
 * COSY Languages - Multilingual Question Banks (FR, IT, RU, EL)
 * CEFR-aligned items for Grammar, Vocabulary, and Reading across supported languages.
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
      "question": "Comment dit-on 'Hello' en français ?",
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
    }
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
      "question": "Come si dice 'Hello' in italiano?",
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
    }
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
      "question": "Как по-русски 'Thank you'?",
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
    }
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
      "question": "Πώς λέμε 'Thank you' στα ελληνικά;",
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
    }
  ]
};

if (typeof window !== 'undefined') {
  window.COSY_PLACEMENT_QUESTIONS_MULTILINGUAL = MULTILINGUAL_QUESTION_BANKS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MULTILINGUAL_QUESTION_BANKS;
}
