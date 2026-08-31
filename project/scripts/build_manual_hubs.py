#!/usr/bin/env python3
"""
Generator script for COSYlanguages Per-Language Manual Hubs and Master Directory in manuals/.
Generates single-page hubs combining Book 1 (Grammar), Book 2 (Vocabulary), and Book 3 (Communication)
for every language and level, plus manuals/index.html as the master directory with links leading
to all manual pages and all languages.
"""

import os

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
MANUALS_DIR = os.path.join(ROOT_DIR, "manuals")

LANGUAGES = {
    "en": {
        "filename": "english-a0-a1.html",
        "lang_code": "en",
        "name_en": "English (Level A0–A1)",
        "native_name": "English A0–A1",
        "flag": "🇬🇧",
        "title": "COSYlanguages English Live A0–A1 · Learning Manuals Hub",
        "meta_desc": "The complete interactive reference library for English learners (A0-A1): Book 1 Grammar Manual and Book 2 Vocabulary Manual.",
        "kicker": "Complete Learning System · Level A0–A1",
        "h1": "English Learning Manuals (Level A0–A1)",
        "lead": "Two complementary manuals working together for true English mastery: structural grammar rules and thematic vocabulary.",
        "portal_url": "../languages/en.html",
        "portal_label": "← COSYenglish Hub",
        "manifesto_title": "★ HOW THE SYSTEM WORKS",
        "manifesto_text": "Every level at COSYlanguages features complementary manuals. Read a topic in the <strong>Grammar Manual</strong> to understand sentence structure, use the words from the <strong>Vocabulary Manual</strong> to build sentences, and practice speaking in our clubs and challenges! Ready for higher levels? Check out our <a href='english-a2.html'>English Level A2 Hub</a>, <a href='english-b1.html'>Level B1 Hub</a>, <a href='english-b2.html'>Level B2 Hub</a>, and <a href='english-c1.html'>Level C1 Hub</a>.",
        "g_badge": "BOOK 1 · GRAMMAR MANUAL",
        "g_title": "English Grammar Manual (A0–A1)",
        "g_desc": "42 interactive topics in 4 core parts. Master sentence building, verb tenses, articles, pronouns, prepositions, and question forms.",
        "g_btn": "Open Grammar Manual A0–A1 (42 Topics) →",
        "g_url": "../manuals/en/grammar/a1/index.html",
        "v_badge": "BOOK 2 · VOCABULARY MANUAL",
        "v_title": "English Vocabulary Manual (A0–A1)",
        "v_desc": "10 thematic modules, 16 units, and 120+ sub-modules covering personal identity, home, food, daily routine, city, work & primitives.",
        "v_btn": "Open Vocabulary Manual A0–A1 (10 Modules) →",
        "v_url": "../manuals/en/vocabulary/a1/index.html",
    },
    "en_a2": {
        "filename": "english-a2.html",
        "lang_code": "en",
        "name_en": "English (Level A2)",
        "native_name": "English A2",
        "flag": "🇬🇧",
        "title": "COSYlanguages English Live A2 · Learning Manuals Hub",
        "meta_desc": "The complete interactive reference library for English learners (Level A2): Book 1 Grammar Manual, Book 2 Vocabulary Manual, and Book 3 Communication Manual.",
        "kicker": "Complete Learning System · Level A2",
        "h1": "English Learning Manuals (Level A2)",
        "lead": "Expanding fluency block by block: past tenses, present perfect, conditionals, passive voice, modal auxiliaries, and complex connectors.",
        "portal_url": "../languages/en.html",
        "portal_label": "← COSYenglish Hub",
        "manifesto_title": "★ HOW THE SYSTEM WORKS",
        "manifesto_text": "Level A2 builds directly on your A0-A1 foundation. Study structural grammar in our <strong>Level A2 Grammar Manual</strong>, expand your expression with our <strong>Vocabulary Manual</strong> and <strong>Communication Manual</strong>, and practice with our interactive trainers! Looking for other levels? Visit the <a href='english-a0-a1.html'>Level A0–A1 Hub</a>, <a href='english-b1.html'>Level B1 Hub</a>, <a href='english-b2.html'>Level B2 Hub</a>, or <a href='english-c1.html'>Level C1 Hub</a>.",
        "g_badge": "BOOK 1 · GRAMMAR MANUAL",
        "g_title": "English Grammar Manual (A2)",
        "g_desc": "46 interactive topics across 8 parts and appendix: past simple & continuous, present perfect, conditionals, passive, modals, and reported speech.",
        "g_btn": "Open Grammar Manual A2 (46 Topics) →",
        "g_url": "../manuals/en/grammar/a2/index.html",
        "v_badge": "BOOK 2 · VOCABULARY MANUAL",
        "v_title": "English Vocabulary Manual (A2)",
        "v_desc": "17 thematic modules aligned with Cambridge A2 Key & CEFR Waystage descriptors: everyday fluency, work, travel, health, and collocations masterclass.",
        "v_btn": "Open Vocabulary Manual A2 (17 Modules) →",
        "v_url": "../manuals/en/vocabulary/a2/index.html",
        "c_badge": "BOOK 3 · COMMUNICATION MANUAL",
        "c_title": "English Communication Manual (A2)",
        "c_desc": "10 conversation systems aligned with CEFR Waystage and Cambridge A2 Key collaborative speaking tasks: telling stories, making plans, and navigating service exchanges.",
        "c_btn": "Open Communication Manual A2 (10 Systems) →",
        "c_url": "../manuals/en/communication/a2/index.html",
    },
    "en_b1": {
        "filename": "english-b1.html",
        "lang_code": "en",
        "name_en": "English (Level B1)",
        "native_name": "English B1",
        "flag": "🇬🇧",
        "title": "COSYlanguages English Live B1 · Learning Manuals Hub",
        "meta_desc": "The complete interactive reference library for English learners (Level B1): Book 1 Grammar Manual, Book 2 Vocabulary Manual, and Book 3 Communication Manual.",
        "kicker": "Complete Learning System · Level B1",
        "h1": "English Learning Manuals (Level B1)",
        "lead": "Speaking with confidence and nuance: narrative tenses, future continuous & perfect, modals of deduction, third & mixed conditionals, relative clauses, causatives, and linking words.",
        "portal_url": "../languages/en.html",
        "portal_label": "← COSYenglish Hub",
        "manifesto_title": "★ HOW THE SYSTEM WORKS",
        "manifesto_text": "Level B1 empowers confident and nuanced communication. Study structural grammar in our <strong>Level B1 Grammar Manual</strong>, refine your expression with our <strong>Vocabulary Manual</strong> and <strong>Communication Manual</strong>, and engage in multi-round debate clubs! Looking for other levels? Visit the <a href='english-a0-a1.html'>Level A0–A1 Hub</a>, <a href='english-a2.html'>Level A2 Hub</a>, <a href='english-b2.html'>Level B2 Hub</a>, or <a href='english-c1.html'>Level C1 Hub</a>.",
        "g_badge": "BOOK 1 · GRAMMAR MANUAL",
        "g_title": "English Grammar Manual (B1)",
        "g_desc": "47 interactive topics across 11 parts and appendix: continuous aspects, narrative tenses, future perfect, modals of deduction, mixed conditionals, causatives, and connectors.",
        "g_btn": "Open Grammar Manual B1 (47 Topics) →",
        "g_url": "../manuals/en/grammar/b1/index.html",
        "v_badge": "BOOK 2 · VOCABULARY MANUAL",
        "v_title": "English Vocabulary Manual (B1)",
        "v_desc": "21 thematic modules aligned with Cambridge B1 Preliminary (PET) syllabus: career, media, climate, health, finance, tech, law, and critical thinking.",
        "v_btn": "Open Vocabulary Manual B1 (21 Modules) →",
        "v_url": "../manuals/en/vocabulary/b1/index.html",
        "c_badge": "BOOK 3 · COMMUNICATION MANUAL",
        "c_title": "English Communication Manual (B1)",
        "c_desc": "10 Core Conversation Systems aligned with PET task formats, plus 40 Functional Situational Masterclass Units for workplace meetings, service, and debate.",
        "c_btn": "Open Communication Manual B1 (10 Systems) →",
        "c_url": "../manuals/en/communication/b1/index.html",
    },
    "en_b2": {
        "filename": "english-b2.html",
        "lang_code": "en",
        "name_en": "English (Level B2)",
        "native_name": "English B2",
        "flag": "🇬🇧",
        "title": "COSYlanguages English Live B2 · Learning Manuals Hub",
        "meta_desc": "The complete interactive reference library for English learners (Level B2): Book 1 Grammar Manual, Book 2 Vocabulary Manual, and Book 3 Communication Manual.",
        "kicker": "Complete Learning System · Level B2",
        "h1": "English Learning Manuals (Level B2)",
        "lead": "Precision, nuance, and natural expression: used to vs would, conditional inversion, it's time, distancing passive reporting, participle clauses, OSASCOMP adjective order, negative adverbial inversion, and cleft sentences.",
        "portal_url": "../languages/en.html",
        "portal_label": "← COSYenglish Hub",
        "manifesto_title": "★ HOW THE SYSTEM WORKS",
        "manifesto_text": "Level B2 unlocks upper-intermediate mastery and natural expression. Study structural grammar in our <strong>Level B2 Grammar Manual</strong>, refine your register and vocabulary with our <strong>Vocabulary Manual</strong> and <strong>Communication Manual</strong>, and participate in advanced speaking challenges! Looking for other levels? Visit the <a href='english-a0-a1.html'>Level A0–A1 Hub</a>, <a href='english-a2.html'>Level A2 Hub</a>, <a href='english-b1.html'>Level B1 Hub</a>, or <a href='english-c1.html'>Level C1 Hub</a>.",
        "g_badge": "BOOK 1 · GRAMMAR MANUAL",
        "g_title": "English Grammar Manual (B2)",
        "g_desc": "35 interactive topics across 12 parts and appendix: narrative tenses, conditional inversion, passive reporting, participle clauses, cleft sentences, and register comparison.",
        "g_btn": "Open Grammar Manual B2 (35 Topics) →",
        "g_url": "../manuals/en/grammar/b2/index.html",
        "v_badge": "BOOK 2 · VOCABULARY MANUAL",
        "v_title": "English Vocabulary Manual (B2)",
        "v_desc": "16 thematic modules aligned with Cambridge B2 First (FCE) Use of English and Speaking syllabus: law, politics, economics, AI, ethics, and sustainability.",
        "v_btn": "Open Vocabulary Manual B2 (16 Modules) →",
        "v_url": "../manuals/en/vocabulary/b2/index.html",
        "c_badge": "BOOK 3 · COMMUNICATION MANUAL",
        "c_title": "English Communication Manual (B2)",
        "c_desc": "10 conversation systems aligned with Cambridge B2 First (FCE) Speaking and Writing task formats: argument building, diplomacy, and managing discussions.",
        "c_btn": "Open Communication Manual B2 (10 Systems) →",
        "c_url": "../manuals/en/communication/b2/index.html",
    },
    "en_c1": {
        "filename": "english-c1.html",
        "lang_code": "en",
        "name_en": "English (Level C1)",
        "native_name": "English C1",
        "flag": "🇬🇧",
        "title": "COSYlanguages English Live C1 · Learning Manuals Hub",
        "meta_desc": "The complete interactive reference library for English learners (Level C1): Book 1 Grammar Manual and Book 2 Vocabulary Manual.",
        "kicker": "Complete Learning System · Level C1",
        "h1": "English Learning Manuals (Level C1)",
        "lead": "Stylistic sophistication, hedging, information packaging, and encyclopedic mastery: academic stance devices, probability adverbs, syntactic inversion, theme/rheme alignment, research discourse, law, economics, AI, and digital ethics.",
        "portal_url": "../languages/en.html",
        "portal_label": "← COSYenglish Hub",
        "manifesto_title": "★ HOW THE SYSTEM WORKS",
        "manifesto_text": "Level C1 unlocks advanced academic and professional mastery. Study structural grammar in our <strong>Level C1 Grammar Manual</strong>, explore 14 encyclopedic domains in our <strong>Level C1 Vocabulary Manual</strong>, and refine your academic and technical communication! Looking for other levels? Visit the <a href='english-a0-a1.html'>Level A0–A1 Hub</a>, <a href='english-a2.html'>Level A2 Hub</a>, <a href='english-b1.html'>Level B1 Hub</a>, or <a href='english-b2.html'>Level B2 Hub</a>.",
        "g_badge": "BOOK 1 · GRAMMAR MANUAL",
        "g_title": "English Grammar Manual (C1)",
        "g_desc": "Advanced syntactic sophistication, hedging, information packaging, sentence variety, periodic sentences, and discourse cohesion.",
        "g_btn": "Open Grammar Manual C1 (6 Topics) →",
        "g_url": "../manuals/en/grammar/c1/index.html",
        "v_badge": "BOOK 2 · VOCABULARY MANUAL",
        "v_title": "English Vocabulary Manual (C1)",
        "v_desc": "14 encyclopedic domains across 21 topics: academic discourse, jurisprudence, economics, corporate governance, AI, ethics, and sustainability.",
        "v_btn": "Open Vocabulary Manual C1 (14 Parts) →",
        "v_url": "../manuals/en/vocabulary/c1/index.html",
    },
    "fr": {
        "filename": "francaise-a0-a1.html",
        "lang_code": "fr",
        "name_en": "French (Level A0–A1)",
        "native_name": "Français A0–A1",
        "flag": "🇫🇷",
        "title": "COSYlanguages Français Live A0–A1 · Manuels d'Apprentissage",
        "meta_desc": "Système d'apprentissage complet du français (A0-A1) : Livre 1 Grammaire Française et Livre 2 Vocabulaire Français.",
        "kicker": "Système d'Apprentissage Complet · Niveau A0–A1",
        "h1": "Manuels d'Apprentissage du Français (A0–A1)",
        "lead": "Deux manuels complémentaires pour maîtriser le français pas à pas : règles grammaticales et vocabulaire thématique.",
        "portal_url": "../languages/fr.html",
        "portal_label": "← Hub COSYfrançais",
        "manifesto_title": "★ COMMENT FONCTIONNE LE SYSTÈME",
        "manifesto_text": "Chaque niveau COSYlanguages repose sur deux manuels interactifs. Consultez le <strong>Manuel de Grammaire</strong> pour les règles structurales et le <strong>Manuel de Vocabulaire</strong> pour enrichir votre lexique au quotidien. Prêt pour le niveau supérieur ? Consultez notre <a href='francaise-a2.html'>Hub Français Niveau A2</a>.",
        "g_badge": "LIVRE 1 · MANUEL DE GRAMMAIRE",
        "g_title": "Grammaire Française Interactive",
        "g_desc": "Règles grammaticales fondamentales, conjugaison des verbes, articles, genres, pronoms et structures de phrases avec exercices interactifs.",
        "g_btn": "Ouvrir la Grammaire Française →",
        "g_url": "fr/grammar/index.html",
        "v_badge": "LIVRE 2 · MANUEL DE VOCABULAIRE",
        "v_title": "Lexique Français (A0–A1)",
        "v_desc": "Lexique essentiel classé par thèmes quotidiens, expressions courantes, exemples contextuels, cartes mémoire interactives et tests d'auto-évaluation.",
        "v_btn": "Ouvrir le Lexique Français →",
        "v_url": "fr/vocabulary/index.html",
    },
    "fr_a2": {
        "filename": "francaise-a2.html",
        "lang_code": "fr",
        "name_en": "French (Level A2)",
        "native_name": "Français A2",
        "flag": "🇫🇷",
        "title": "COSYlanguages Français Live A2 · Manuels d'Apprentissage",
        "meta_desc": "Système d'apprentissage complet du français (Niveau A2) : Livre 1 Grammaire Française et Livre 2 Vocabulaire Français.",
        "kicker": "Système d'Apprentissage Complet · Niveau A2",
        "h1": "Manuels d'Apprentissage du Français (Niveau A2)",
        "lead": "Approfondissez votre maîtrise du français : passé composé vs imparfait, futur simple, conditionnel de politesse, pronoms COD/COI, EN/Y et comparaisons.",
        "portal_url": "../languages/fr.html",
        "portal_label": "← Hub COSYfrançais",
        "manifesto_title": "★ COMMENT FONCTIONNE LE SYSTÈME",
        "manifesto_text": "Le niveau A2 consolide vos bases. Utilisez le <strong>Manuel de Grammaire A2</strong> pour les récits au passé et hypothèses, et le <strong>Manuel de Vocabulaire A2</strong> pour exprimer vos souvenirs et projets. Retourner au <a href='francaise-a0-a1.html'>Niveau A0–A1</a>.",
        "g_badge": "LIVRE 1 · MANUEL DE GRAMMAIRE",
        "g_title": "Grammaire Française (A2)",
        "g_desc": "Passé composé vs imparfait, futur simple, conditionnel, hypothèses, pronoms COD/COI, EN et Y, comparaisons et obligations.",
        "g_btn": "Ouvrir la Grammaire A2 →",
        "g_url": "fr/grammar/a2/index.html",
        "v_badge": "LIVRE 2 · MANUEL DE VOCABULAIRE",
        "v_title": "Lexique Français (A2)",
        "v_desc": "Vocabulaire thématique A2 : récits de vacances, transports, projets d'avenir, monde du travail et ambitions.",
        "v_btn": "Ouvrir le Lexique A2 →",
        "v_url": "fr/vocabulary/a2/index.html",
    },
    "it": {
        "filename": "italiano-a0-a1.html",
        "lang_code": "it",
        "name_en": "Italian (Level A0–A1)",
        "native_name": "Italiano A0–A1",
        "flag": "🇮🇹",
        "title": "COSYlanguages Italiano Live A0–A1 · Manuali d'Apprendimento",
        "meta_desc": "Sistema completo di apprendimento dell'italiano (A0-A1): Libro 1 Grammatica Italiana e Libro 2 Lessico Italiano.",
        "kicker": "Sistema Completo · Livello A0–A1",
        "h1": "Manuali d'Apprendimento d'Italiano (A0–A1)",
        "lead": "Due manuali complementari per padroneggiare l'italiano : regole grammaticali e lessico tematico. Pronto per il livello A2? Visita il nostro <a href='italiano-a2.html'>Hub Italiano Livello A2</a>.",
        "portal_url": "../languages/it.html",
        "portal_label": "← Hub COSYitaliano",
        "manifesto_title": "★ COME FUNZIONA IL SISTEMA",
        "manifesto_text": "Ogni livello COSYlanguages si basa su due manuali speculari. Consulta la <strong>Grammatica Italiana</strong> per comprendere le regole e il <strong>Lessico Italiano</strong> per arricchire il tuo vocabolario. Pronto per il livello A2? Scopri il nostro <a href='italiano-a2.html'>Hub Italiano Livello A2</a>.",
        "g_badge": "LIBRO 1 · MANUALE DI GRAMMATICA",
        "g_title": "Grammatica Italiana (A0–A1)",
        "g_desc": "Corso di grammatica strutturata: articoli, genere dei nomi, coniugazioni verbali, preposizioni articolate e sintassi.",
        "g_btn": "Apri la Grammatica Italiana →",
        "g_url": "it/grammar/index.html",
        "v_badge": "LIBRO 2 · MANUALE DI LESSICO",
        "v_title": "Lessico Italiano (A0–A1)",
        "v_desc": "Vocabolario tematico monolingua con schede interattive, pronuncia ed esempi per la vita di tutti i giorni.",
        "v_btn": "Apri il Lessico Italiano →",
        "v_url": "it/vocabulary/index.html",
    },
    "it_a2": {
        "filename": "italiano-a2.html",
        "lang_code": "it",
        "name_en": "Italian (Level A2)",
        "native_name": "Italiano A2",
        "flag": "🇮🇹",
        "title": "COSYlanguages Italiano Live A2 · Manuali d'Apprendimento",
        "meta_desc": "Sistema completo di apprendimento dell'italiano (Livello A2): Libro 1 Grammatica Italiana e Libro 2 Lessico Italiano.",
        "kicker": "Sistema Completo · Livello A2",
        "h1": "Manuali d'Apprendimento d'Italiano (Livello A2)",
        "lead": "Approfondisci il tuo italiano: passato prossimo vs imperfetto, futuro semplice, condizionale di cortesia, pronomi diretti/indiretti, ci/ne e comparativi.",
        "portal_url": "../languages/it.html",
        "portal_label": "← Hub COSYitaliano",
        "manifesto_title": "★ COME FUNZIONA IL SISTEMA",
        "manifesto_text": "Il livello A2 consolida le tue basi. Usa la <strong>Grammatica Italiana A2</strong> per i racconti al passato ed ipotesi, e il <strong>Lessico Italiano A2</strong> per esprimere ricordi e progetti futuri. Torna al <a href='italiano-a0-a1.html'>Livello A0–A1</a>.",
        "g_badge": "LIBRO 1 · MANUALE DI GRAMMATICA",
        "g_title": "Grammatica Italiana (A2)",
        "g_desc": "Passato prossimo vs imperfetto, futuro semplice, condizionale, ipotesi, pronomi diretti/indiretti, ci e ne, comparativi e dovere/bisogna.",
        "g_btn": "Apri la Grammatica A2 →",
        "g_url": "it/grammar/a2/index.html",
        "v_badge": "LIBRO 2 · MANUALE DI LESSICO",
        "v_title": "Lessico Italiano (A2)",
        "v_desc": "Vocabolario tematico A2: racconti di vacanze, trasporti, professioni, salute e servizi quotidiani.",
        "v_btn": "Apri il Lessico A2 →",
        "v_url": "it/vocabulary/a2/index.html",
    },
    "es": {
        "filename": "espanol-a0-a1.html",
        "lang_code": "es",
        "name_en": "Spanish (Level A0–A1)",
        "native_name": "Español A0–A1",
        "flag": "🇪🇸",
        "title": "COSYlanguages Español Live A0–A1 · Manuales de Aprendizaje",
        "meta_desc": "Sistema completo de aprendizaje del español (A0-A1): Libro 1 Gramática Española y Libro 2 Vocabulario Español.",
        "kicker": "Sistema de Aprendizaje Integral · Nivel A0–A1",
        "h1": "Manuales de Aprendizaje de Español (A0–A1)",
        "lead": "Dos manuales complementarios para dominar el español : reglas gramaticales y vocabulario temático. ¿Listo para el nivel A2? Visita nuestro <a href='espanol-a2.html'>Hub Español Nivel A2</a>.",
        "portal_url": "../languages/es.html",
        "portal_label": "← Hub COSYespañol",
        "manifesto_title": "★ CÓMO FUNCIONA EL SISTEMA",
        "manifesto_text": "Cada nivel en COSYlanguages integra dos manuales. Aprende la norma en la <strong>Gramática Española</strong> y amplia tu léxico con el <strong>Vocabulario Español</strong>. ¿Listo para el nivel A2? Visita nuestro <a href='espanol-a2.html'>Hub Español Nivel A2</a>.",
        "g_badge": "LIBRO 1 · MANUAL DE GRAMÁTICA",
        "g_title": "Gramática Española (A0–A1)",
        "g_desc": "Estructuras esenciales del español: ser y estar, conjugación de verbos, género y número, concordancia y frases interactivas.",
        "g_btn": "Abrir la Gramática Española →",
        "g_url": "es/grammar/index.html",
        "v_badge": "LIBRO 2 · MANUAL DE VOCABULARIO",
        "v_title": "Vocabulario Español (A0–A1)",
        "v_desc": "Léxico temático indispensable con tarjetas didácticas, ejemplos contextuales y autoevaluaciones.",
        "v_btn": "Abrir el Vocabulario Español →",
        "v_url": "es/vocabulary/index.html",
    },
    "es_a2": {
        "filename": "espanol-a2.html",
        "lang_code": "es",
        "name_en": "Spanish (Level A2)",
        "native_name": "Español A2",
        "flag": "🇪🇸",
        "title": "COSYlanguages Español Live A2 · Manuales de Aprendizaje",
        "meta_desc": "Sistema completo de aprendizaje del español (Nivel A2): Libro 1 Gramática Española y Libro 2 Vocabulario Español.",
        "kicker": "Sistema de Aprendizaje Integral · Nivel A2",
        "h1": "Manuales de Aprendizaje de Español (Nivel A2)",
        "lead": "Profundiza en el español: pretérito indefinido vs imperfecto, futuro simple, condicional de cortesía, pronombres directo/indirecto, comparativos e introducción al subjuntivo.",
        "portal_url": "../languages/es.html",
        "portal_label": "← Hub COSYespañol",
        "manifesto_title": "★ CÓMO FUNCIONA EL SISTEMA",
        "manifesto_text": "El nivel A2 consolida tus bases. Usa la <strong>Gramática Española A2</strong> para relatos en pasado e hipótesis, y el <strong>Vocabulario Español A2</strong> para expresar recuerdos y proyectos futuros. Volver al <a href='espanol-a0-a1.html'>Nivel A0–A1</a>.",
        "g_badge": "LIBRO 1 · MANUAL DE GRAMÁTICA",
        "g_title": "Gramática Española (A2)",
        "g_desc": "Pretérito indefinido vs imperfecto, futuro simple, condicional de cortesía, pronombres de objeto, comparaciones, obligación e introducción al subjuntivo.",
        "g_btn": "Abrir la Gramática A2 →",
        "g_url": "es/grammar/a2/index.html",
        "v_badge": "LIBRO 2 · MANUAL DE VOCABULARIO",
        "v_title": "Vocabulario Español (A2)",
        "v_desc": "Vocabulario temático A2: rutina y recuerdos, viajes y transportes, empleo y profesiones, salud y farmacia.",
        "v_btn": "Abrir el Vocabulario A2 →",
        "v_url": "es/vocabulary/a2/index.html",
    },
    "de": {
        "filename": "deutsch-a0-a1.html",
        "lang_code": "de",
        "name_en": "German",
        "native_name": "Deutsch",
        "flag": "🇩🇪",
        "title": "COSYlanguages Deutsch Live A0–A1 · Lernhandbücher",
        "meta_desc": "Vollständiges Deutsch-Lernsystem (A0-A1): Buch 1 Deutsche Grammatik und Buch 2 Deutscher Wortschatz.",
        "kicker": "Vollständiges Lernsystem · Niveau A0–A1",
        "h1": "Deutsch Lernhandbücher",
        "lead": "Zwei aufeinander abgestimmte Handbücher für echtes Deutschlernen: Grammatikregeln und thematischer Wortschatz.",
        "portal_url": "../languages/de.html",
        "portal_label": "← COSYdeutsch Hub",
        "manifesto_title": "★ WIE DAS SYSTEM FUNKTIONIERT",
        "manifesto_text": "Jedes Niveau bei COSYlanguages verbindet zwei Handbücher. Nutze die <strong>Deutsche Grammatik</strong> für Satzbau und Kasus und den <strong>Deutschen Wortschatz</strong> für neue Begriffe.",
        "g_badge": "BUCH 1 · GRAMMATIKHANDBUCH",
        "g_title": "Deutsche Grammatik",
        "g_desc": "Systematischer Aufbau der deutschen Grammatik: Artikel, Kasus (Nominativ, Akkusativ, Dativ), Verbkonjugation und Satzstruktur.",
        "g_btn": "Deutsche Grammatik öffnen →",
        "g_url": "de/grammar/index.html",
        "v_badge": "BUCH 2 · WORTSCHATZHANDBUCH",
        "v_title": "Deutscher Wortschatz",
        "v_desc": "Thematischer Wortschatz für den Alltag mit Artikelfarben (der/die/das), Beispielsätzen und interaktiven Übungen.",
        "v_btn": "Deutschen Wortschatz öffnen →",
        "v_url": "de/vocabulary/index.html",
    },
    "de_a2": {
        "filename": "deutsch-a2.html",
        "lang_code": "de",
        "name_en": "German (Level A2)",
        "native_name": "Deutsch A2",
        "flag": "🇩🇪",
        "title": "COSYlanguages Deutsch Live A2 · Lernhandbücher",
        "meta_desc": "Vollständiges Deutsch-Lernsystem (Niveau A2): Buch 1 Deutsche Grammatik und Buch 2 Deutscher Wortschatz.",
        "kicker": "Vollständiges Lernsystem · Niveau A2",
        "h1": "Deutsch Lernhandbücher (Niveau A2)",
        "lead": "Vertiefe deine Deutschkenntnisse: Perfekt mit haben/sein, Präteritum der Modalverben, Nebensätze mit weil/dass/wenn und Wechselpräpositionen.",
        "portal_url": "../languages/de.html",
        "portal_label": "← COSYdeutsch Hub",
        "manifesto_title": "★ WIE DAS SYSTEM FUNKTIONIERT",
        "manifesto_text": "Niveau A2 baut auf deinen Grundlagen auf. Nutze die <strong>Deutsche Grammatik A2</strong> für Satzstrukturen und den <strong>Deutschen Wortschatz A2</strong> für deinen Wortschatz.",
        "g_badge": "BUCH 1 · GRAMMATIKHANDBUCH",
        "g_title": "Deutsche Grammatik (A2)",
        "g_desc": "Perfekt mit haben/sein, Präteritum der Modalverben, Nebensätze (weil, dass, wenn), Wechselpräpositionen und Komparativ/Superlativ.",
        "g_btn": "Grammatik A2 öffnen →",
        "g_url": "de/grammar/a2/index.html",
        "v_badge": "BUCH 2 · WORTSCHATZHANDBUCH",
        "v_title": "Deutscher Wortschatz (A2)",
        "v_desc": "Thematischer Wortschatz A2: Arbeit, Beruf, Ausbildung, Reisen, Verkehr und Gesundheit.",
        "v_btn": "Wortschatz A2 öffnen →",
        "v_url": "de/vocabulary/a2/index.html",
    },
    "pt": {
        "filename": "portugues-a0-a1.html",
        "lang_code": "pt",
        "name_en": "Portuguese (Level A0–A1)",
        "native_name": "Português A0–A1",
        "flag": "🇵🇹",
        "title": "COSYlanguages Português Live A0–A1 · Manuais de Aprendizagem",
        "meta_desc": "Sistema completo de aprendizagem de português (A0-A1): Livro 1 Gramática Portuguesa e Livro 2 Vocabulário Português.",
        "kicker": "Sistema de Aprendizagem Integrado · Nível A0–A1",
        "h1": "Manuais de Aprendizagem de Português (A0–A1)",
        "lead": "Dois manuais complementares para dominar o português: regras gramaticais e vocabulário temático. Pronto para o nível A2? Visite o nosso <a href='portugues-a2.html'>Hub Português Nível A2</a>.",
        "portal_url": "../languages/pt.html",
        "portal_label": "← Hub COSYportuguês",
        "manifesto_title": "★ COMO FUNCIONA O SISTEMA",
        "manifesto_text": "Cada nível no COSYlanguages inclui dois manuais. Consulte a <strong>Gramática Portuguesa</strong> para as regras de sintaxe e o <strong>Vocabulário Português</strong> para enriquecer o seu léxico. Pronto para o nível A2? Descubra o nosso <a href='portugues-a2.html'>Hub Português Nível A2</a>.",
        "g_badge": "LIVRO 1 · MANUAL DE GRAMÁTICA",
        "g_title": "Gramática Portuguesa (A0–A1)",
        "g_desc": "Estruturas gramaticais do português: artigos, verbos ser/estar/ter/haver, tempos verbais e construção de frases.",
        "g_btn": "Abrir a Gramática Portuguesa →",
        "g_url": "pt/grammar/index.html",
        "v_badge": "LIVRO 2 · MANUAL DE VOCABULÁRIO",
        "v_title": "Vocabulário Português (A0–A1)",
        "v_desc": "Vocabulário temático essencial com cartões interativos, pronúncia e frases de exemplo para o dia a dia.",
        "v_btn": "Abrir o Vocabulário Português →",
        "v_url": "pt/vocabulary/index.html",
    },
    "pt_a2": {
        "filename": "portugues-a2.html",
        "lang_code": "pt",
        "name_en": "Portuguese (Level A2)",
        "native_name": "Português A2",
        "flag": "🇵🇹",
        "title": "COSYlanguages Português Live A2 · Manuais de Aprendizagem",
        "meta_desc": "Sistema completo de aprendizagem de português (Nível A2): Livro 1 Gramática Portuguesa e Livro 2 Vocabulário Português.",
        "kicker": "Sistema de Aprendizagem Integrado · Nível A2",
        "h1": "Manuais de Aprendizagem de Português (Nível A2)",
        "lead": "Aprofunde o seu português: pretérito perfeito vs imperfeito, futuro com ir, condicional de cortesia, pronomes complemento, comparações e presente do conjuntivo.",
        "portal_url": "../languages/pt.html",
        "portal_label": "← Hub COSYportuguês",
        "manifesto_title": "★ COMO FUNCIONA O SISTEMA",
        "manifesto_text": "O nível A2 consolida as suas bases. Utilize a <strong>Gramática Portuguesa A2</strong> para narrativas no passado e hipóteses, e o <strong>Vocabulário Português A2</strong> para expressar memórias e projetos futuros. Voltar ao <a href='portugues-a0-a1.html'>Nível A0–A1</a>.",
        "g_badge": "LIVRO 1 · MANUAL DE GRAMÁTICA",
        "g_title": "Gramática Portuguesa (A2)",
        "g_desc": "Pretérito perfeito vs imperfeito, futuro com ir, condicional de cortesia, pronomes complemento, comparações, obrigação e introdução ao subjuntivo.",
        "g_btn": "Abrir a Gramática A2 →",
        "g_url": "pt/grammar/a2/index.html",
        "v_badge": "LIVRO 2 · MANUAL DE VOCABULÁRIO",
        "v_title": "Vocabulário Português (A2)",
        "v_desc": "Vocabulário temático A2: rotinas e memórias, viagens e transportes, trabalho e profissões, saúde e farmácia.",
        "v_btn": "Abrir o Vocabulário A2 →",
        "v_url": "pt/vocabulary/a2/index.html",
    },
    "ru": {
        "filename": "russkiy-a0-a1.html",
        "lang_code": "ru",
        "name_en": "Russian",
        "native_name": "Русский язык",
        "flag": "🇷🇺",
        "title": "COSYlanguages Русский язык Live A0–A1 · Учебные руководства",
        "meta_desc": "Полный обучающий комплекс русского языка (A0-A1): Книга 1 Грамматика русского языка и Книга 2 Лексика русского языка.",
        "kicker": "Полная учебная система · Уровень A0–A1",
        "h1": "Учебные руководства по русскому языку",
        "lead": "Два взаимодополняющих руководства для глубокого освоения русского языка: грамматические правила и тематическая лексика.",
        "portal_url": "../languages/ru.html",
        "portal_label": "← Hub COSYрусский",
        "manifesto_title": "★ КАК РАБОТАЕТ ОБУЧАЮЩАЯ СИСТЕМА",
        "manifesto_text": "Каждый уровень в COSYlanguages состоит из двух книг. Используйте <strong>Грамматику русского языка</strong> для изучения падежей и спряжений, а <strong>Лексику русского языка</strong> для расширения словарного запаса.",
        "g_badge": "КНИГА 1 · ГРАММАТИЧЕСКОЕ РУКОВОДСТВО",
        "g_title": "Грамматика русского языка",
        "g_desc": "Система русского языка для начинающих: 6 падежей, спряжения глаголов, роды существительных, прилаг. и конструктор предложений.",
        "g_btn": "Открыть Грамматику русского языка →",
        "g_url": "ru/grammar/index.html",
        "v_badge": "КНИГА 2 · ЛЕКСИЧЕСКОЕ РУКОВОДСТВО",
        "v_title": "Лексика русского языка",
        "v_desc": "21 тематический модуль (приветствия, семья, город, еда, работа) с интерактивными карточками, поисками и тестами.",
        "v_btn": "Открыть Лексику русского языка →",
        "v_url": "ru/vocabulary/index.html",
    },
    "ru_a2": {
        "filename": "russkiy-a2.html",
        "lang_code": "ru",
        "name_en": "Russian (Level A2)",
        "native_name": "Русский язык A2",
        "flag": "🇷🇺",
        "title": "COSYlanguages Русский язык Live A2 · Учебные руководства",
        "meta_desc": "Полный обучающий комплекс русского языка (Уровень A2): Книга 1 Грамматика русского языка и Книга 2 Лексика русского языка.",
        "kicker": "Полная учебная система · Уровень A2",
        "h1": "Учебные руководства по русскому языку (Уровень A2)",
        "lead": "Углубление знаний русского языка: видовые пары глаголов, приставочные глаголы движения, условные предложения и косвенная речь.",
        "portal_url": "../languages/ru.html",
        "portal_label": "← Hub COSYрусский",
        "manifesto_title": "★ КАК РАБОТАЕТ ОБУЧАЮЩАЯ СИСТЕМА",
        "manifesto_text": "Уровень A2 развивает ваши навыки. Используйте <strong>Грамматику русского языка A2</strong> для изучения сложных глагольных форм и <strong>Лексику A2</strong> для разговоров о работе и путешествиях.",
        "g_badge": "КНИГА 1 · ГРАММАТИЧЕСКОЕ РУКОВОДСТВО",
        "g_title": "Грамматика русского языка (A2)",
        "g_desc": "Видовые пары глаголов, будущее сложное и простое, бесприставочные и приставочные глаголы движения, придаточные с «если», «бы» и «который».",
        "g_btn": "Открыть Грамматику A2 →",
        "g_url": "ru/grammar/a2/index.html",
        "v_badge": "КНИГА 2 · ЛЕКСИЧЕСКОЕ РУКОВОДСТВО",
        "v_title": "Лексика русского языка (A2)",
        "v_desc": "Тематическая лексика уровня A2: работа, профессии, учёба, путешествия, отели и транспорт.",
        "v_btn": "Открыть Лексику A2 →",
        "v_url": "ru/vocabulary/a2/index.html",
    },
    "br": {
        "filename": "brezhoneg-a0-a1.html",
        "lang_code": "br",
        "name_en": "Breton",
        "native_name": "Brezhoneg",
        "flag": "🖤",
        "title": "COSYlanguages Brezhoneg Live A0–A1 · Ar Reizhiad Deskiñ Klok",
        "meta_desc": "Ar Reizhiad Deskiñ Klok evit ar Brezhoneg (Live A0–A1): Levr 1 Yezhadur, Levr 2 Gerioù, Levr 3 Komz, Levr 4 Oberennoù. Brezhoneg Hepken.",
        "kicker": "Ar Reizhiad Deskiñ Klok · Level A0–A1",
        "h1": "Levrioù Deskiñ Brezhoneg",
        "lead": "Peder levr keneiled o labourat asambles evit mestroniñ ar brezhoneg e gwirionez — skrivet e brezhoneg hepken (Brezhoneg Hepken).",
        "portal_url": "../languages/br.html",
        "portal_label": "← COSYbrezhoneg Hub",
        "manifesto_title": "★ PENAOS E LABOUR AR REIZHIAD DESKIÑ",
        "manifesto_text": "Pep live e COSYlanguages a zo savet war-dro peder levr a glot an eil gant eben. Lennit ur bajenn er levr <strong>Yezhadur</strong> evit kompren ar reolenn, implijit ar gerioù eus al levr <strong>Gerioù</strong> evit sevel frazennoù, hag amsiteit hoc'h ampartiz e kentelioù komz ha lenn!",
        "g_badge": "LEVR 1 · AL LEVR YEZHADUR",
        "g_title": "Levr Yezhadur Brezhoneg",
        "g_desc": "Ar reizhiad yezhadur brezhonek reoliek, savet bloc'h dre vloc'h. 19 poent yezhadur pennañ gant kemmadurioù ha taolennoù liv.",
        "g_btn": "Digeriñ al Levr Yezhadur (19 Poent) →",
        "g_url": "br/grammar/index.html",
        "v_badge": "LEVR 2 · AL LEVR GERIOÙ",
        "v_title": "Levr Geriaoueg Brezhoneg",
        "v_desc": "Ar geriaoueg klok temaet (19 tem), gant merkoù gouenn (GOUR/GWREG), distagadurioù IPA ha frazennoù skouer.",
        "v_btn": "Digeriñ al Levr Gerioù (19 Tem) →",
        "v_url": "br/vocabulary/index.html",
    },
    "br_a2": {
        "filename": "brezhoneg-a2.html",
        "lang_code": "br",
        "name_en": "Breton (Level A2)",
        "native_name": "Brezhoneg A2",
        "flag": "🖤",
        "title": "COSYlanguages Brezhoneg Live A2 · Ar Reizhiad Deskiñ Klok",
        "meta_desc": "Ar Reizhiad Deskiñ Klok evit ar Brezhoneg (Live A2): Levr 1 Yezhadur, Levr 2 Gerioù. Brezhoneg Hepken.",
        "kicker": "Ar Reizhiad Deskiñ Klok · Level A2",
        "h1": "Levrioù Deskiñ Brezhoneg (Live A2)",
        "lead": "Yezhadur ha geriaoueg brezhonek evit al live A2.",
        "portal_url": "../languages/br.html",
        "portal_label": "← COSYbrezhoneg Hub",
        "manifesto_title": "★ PENAOS E LABOUR AR REIZHIAD DESKIÑ",
        "manifesto_text": "Live A2 evit ar Brezhoneg.",
        "g_badge": "LEVR 1 · YEZHADUR",
        "g_title": "Levr Yezhadur Brezhoneg (A2)",
        "g_desc": "Kemmadurioù kemmesket, amzer-dremen gevrennek ha frammoù frazennoù complexoc'h.",
        "g_btn": "Digeriñ Yezhadur A2 →",
        "g_url": "br/grammar/a2/index.html",
        "v_badge": "LEVR 2 · GERIAOUEG",
        "v_title": "Levr Geriaoueg Brezhoneg (A2)",
        "v_desc": "Micherioù, labour, beajoù hag an treuzdougen.",
        "v_btn": "Digeriñ Geriaoueg A2 →",
        "v_url": "br/vocabulary/a2/index.html",
    },
    "tt": {
        "filename": "tatar-a0-a1.html",
        "lang_code": "tt",
        "name_en": "Tatar",
        "native_name": "Татар теле",
        "flag": "🟢",
        "title": "COSYlanguages Татар теле Live A0–A1 · Уку кулланмалары",
        "meta_desc": "Татар теле буенча тулы уку комплексы (A0-A1): 1нче китап Татар теле грамматикасы һәм 2нче китап Татар теле лексикасы.",
        "kicker": "Тулы уку системасы · Нисбәт A0–A1",
        "h1": "Татар теле уку кулланмалары",
        "lead": "Татар телен тулысынча үзләштерү өчен ике бер-берсен тулыландыручы китап: грамматика кагыйдәләре һәм тематик лексика.",
        "portal_url": "../languages/tt.html",
        "portal_label": "← COSYтатар Hub",
        "manifesto_title": "★ УКУ СИСТЕМАCЫ НИЧЕК ЭШЛИ",
        "manifesto_text": "COSYlanguages системасында һәр дәрәҗә ике парлы китаптан тора. Сөйләм корылышын аңлау өчен <strong>Грамматика китабын</strong> кулланыгыз, ә сүзлек составын баету өчен <strong>Лексика китабын</strong> кулланыгыз.",
        "g_badge": "1НЧЕ КИТАП · ГРАММАТИКА КУЛЛАНМАСЫ",
        "g_title": "Татар теле грамматикасы",
        "g_desc": "Татар теле грамматикасы: килешләр, фигыль заманнары, кушымчалар, сингармонизм һәм җөмлә төзелеше.",
        "g_btn": "Грамматика кулланмасын ачарга →",
        "g_url": "tt/grammar/index.html",
        "v_badge": "2НЧЕ КИТАП · ЛЕКСИКА КУЛЛАНМАСЫ",
        "v_title": "Татар теле лексикасы",
        "v_desc": "Көндәлек темаларга нигезләнгән лексик сүзлек, карточкалар, мисаллар һәм үзозлыгыңны тикшерү тестлары.",
        "v_btn": "Лексика кулланмасын ачарга →",
        "v_url": "tt/vocabulary/index.html",
    },
    "ba": {
        "filename": "bashqort-a0-a1.html",
        "lang_code": "ba",
        "name_en": "Bashkir",
        "native_name": "Башҡорт теле",
        "flag": "🔵",
        "title": "COSYlanguages Башҡорт теле Live A0–A1 · Уҡыу ҡулланмалары",
        "meta_desc": "Башҡорт теле уҡыу комплексы (A0-A1): 1-се китап Башҡорт теле грамматикаһы һәм 2-се китап Башҡорт теле лексикаһы.",
        "kicker": "Тулы уҡыу системаһы · Дәрәжә A0–A1",
        "h1": "Башҡорт теле уҡыу ҡулланмалары",
        "lead": "Башҡорт телен тәрәндән өйрәнеү өсөн ике үҙ-ара бәйле ҡулланма: грамматика ҡағиҙәләре һәм тематик лексика.",
        "portal_url": "../languages/ba.html",
        "portal_label": "← COSYбашҡорт Hub",
        "manifesto_title": "★ УҠЫУ СИСТЕМАҺЫ НИСЕК ЭШЛӘЙ",
        "manifesto_text": "COSYlanguages һәр кимәлдә ике параллель китап тәҡдим итә. Сөйләм структураһын аңлау өсөн <strong>Грамматика китабын</strong>, ә һүҙлек байлығын арттырыу өсөн <strong>Лексика китабын</strong> ҡулланығыҙ.",
        "g_badge": "1-СЕ КИТАП · ГРАММАТИКА ҠУЛЛАНМАҺЫ",
        "g_title": "Башҡорт теле грамматикаһы",
        "g_desc": "Башҡорт теле грамматикаһы: килештәр, ҡушымсалар, ҡайтым һәм ҡыйынлыҡһыҙ юл менән җөмлә төҙөү.",
        "g_btn": "Грамматика ҡулланмаһын асырға →",
        "g_url": "ba/grammar/index.html",
        "v_badge": "2-СЕ КИТАП · ЛЕКСИКА ҠУЛЛАНМАҺЫ",
        "v_title": "Башҡорт теле лексикаһы",
        "v_desc": "Көндәлек тормош өсөн тематик һүҙлек, карточкалар, мисалдар һәм карточкалар аша өйрәнеү.",
        "v_btn": "Лексика ҡулланмаһын асырға →",
        "v_url": "ba/vocabulary/index.html",
    },
    "cv": {
        "filename": "chavash-a0-a1.html",
        "lang_code": "cv",
        "name_en": "Chuvash",
        "native_name": "Чăваш пĕлĕвĕ",
        "flag": "🔴",
        "title": "COSYlanguages Чăваш пĕлĕвĕ Live A0–A1 · Вĕренӳ кĕнекисем",
        "meta_desc": "Чăваш пĕлĕвĕн тулли вĕренӳ комплексу (A0-A1): 1-мĕш кĕнеке Чăваш грамматики тата 2-мĕш кĕнеке Чăваш лексики.",
        "kicker": "Тулли вĕренӳ системи · Рĕт A0–A1",
        "h1": "Чăваш пĕлĕвĕн вĕренӳ кĕнекисем",
        "lead": "Чăваш чĕлхине тĕппĕн вĕренмелли икĕ пĕр-пĕрне тултаркан кĕнеке: грамматика калăпăшсем тата сăмахлăх.",
        "portal_url": "../languages/coming-soon.html",
        "portal_label": "← COSYчăваш Hub",
        "manifesto_title": "★ ВĔРЕН Ӯ СИСТЕМИН ЭШĔ",
        "manifesto_text": "COSYlanguages вĕренӳ системи кашни шайра икĕ кĕнекене пĕрлештерет. Грамматика йĕркисене ăнланмашкăн <strong>Грамматика кĕнекине</strong>, сăмах ятне пуянлатмашкăн <strong>Лексика кĕнекине</strong> уçăр.",
        "g_badge": "1-МĔШ КĔНЕКЕ · ГРАММАТИКА КĔНЕКИ",
        "g_title": "Чăваш грамматики",
        "g_desc": "Чăваш грамматикин тĕп йĕркисем: аффикссем, падежсем, глагол вĕçленĕвĕсем тата предложени туни.",
        "g_btn": "Грамматика кĕнекине уçмалла →",
        "g_url": "cv/grammar/index.html",
        "v_badge": "2-МĔШ КĔНЕКЕ · ЛЕКСИКА КĔНЕКИ",
        "v_title": "Чăваш лексики",
        "v_desc": "Тематика сăмахлăхĕ, кулленхи калаçу сăмахĕсем, карточкасем тата тĕрĕслев тестсем.",
        "v_btn": "Лексика кĕнекине уçмалла →",
        "v_url": "cv/vocabulary/index.html",
    },
    "hy": {
        "filename": "hayots-a0-a1.html",
        "lang_code": "hy",
        "name_en": "Armenian",
        "native_name": "Հայոց լեզու",
        "flag": "🇦🇲",
        "title": "COSYlanguages Հայոց լեզու Live A0–A1 · Ուսումնական ձեռնարկներ",
        "meta_desc": "Հայոց լեզվի ուսուցման ամբողջական համակարգ (A0-A1). Գիրք 1 Քերականություն և Գիրք 2 Բառապաշար:",
        "kicker": "Ուսուցման ամբողջական համակարգ · Մակարդակ A0–A1",
        "h1": "Հայոց լեզվի ուսումնական ձեռնարկներ",
        "lead": "Երկու փոխլրացնող ձեռնարկ հայերենի լիարժեք տիրապետման համար՝ քերականական կանոններ և թեմատիկ բառապաշար:",
        "portal_url": "../languages/hy.html",
        "portal_label": "← COSYհայերեն Hub",
        "manifesto_title": "★ ԻՆՉՊԵՍ Է ՈՒՍՈՒՑՈՒՄԸ ԳՈՐԾՈՒՄ",
        "manifesto_text": "COSYlanguages համակարգի յուրաքանչյուր մակարդակ բաղկացած է երկու զուգահեռ գրքից: Օգտագործեք <strong>Քերականության գիրքը</strong> կառուցվածքն հասկանալու համար, իսկ <strong>Բառապաշարի գիրքը</strong>՝ բառապաշարը հարստացնելու համար:",
        "g_badge": "ԳԻՐՔ 1 · ՔԵՐԱԿԱՆՈՒԹՅՈՒՆ",
        "g_title": "Հայոց լեզվի քերականություն",
        "g_desc": "Հայերենի քերականության հիմունքները՝ հոլովումներ, խոնարհումներ, հոդեր, դերանուններ և նախադասության կառուցում:",
        "g_btn": "Բացել Քերականության ձեռնարկը →",
        "g_url": "hy/grammar/index.html",
        "v_badge": "ԳԻՐՔ 2 · ԲԱՌԱՊԱՇԱՐ",
        "v_title": "Հայոց լեզվի բառապաշար",
        "v_desc": "Թեմատիկ բառապաշար ամենօրյա կյանքի համար՝ ինտերակտիվ քարտերով, օրինակներով և թեստերով:",
        "v_btn": "Բացել Բառապաշարի ձեռնարկը →",
        "v_url": "hy/vocabulary/index.html",
    },
    "ka": {
        "filename": "qartuli-a0-a1.html",
        "lang_code": "ka",
        "name_en": "Georgian",
        "native_name": "ქართული ენა",
        "flag": "🇬🇪",
        "title": "COSYlanguages ქართული ენა Live A0–A1 · სახელმძღვანელოები",
        "meta_desc": "ქართული ენის სწავლების სრული სისტემა (A0-A1): წიგნი 1 ქართული გრამატიკა და წიგნი 2 ქართული ლექსიკა.",
        "kicker": "სწავლების სრული სისტემა · დონე A0–A1",
        "h1": "ქართული ენის სახელმძღვანელოები",
        "lead": "ორი ურთიერთშემავსებელი სახელმძღვანელო ქართული ენის დასაუფლებლად: გრამატიკის წესები და თემატური ლექსიკა.",
        "portal_url": "../languages/ka.html",
        "portal_label": "← COSYქართული Hub",
        "manifesto_title": "★ როგორ მუშაობს სწავლების სისტემა",
        "manifesto_text": "COSYlanguages-ის თითოეული დონე შედგება ორი ურთიერთდაკავშირებული წიგნისგან. გამოიყენეთ <strong>გრამატიკის წიგნი</strong> წესების შესასწავლად და <strong>ლექსიკის წიგნი</strong> სიტყვების მარაგის გასამდიდრებლად.",
        "g_badge": "წიგნი 1 · გრამატიკის სახელმძღვანელო",
        "g_title": "ქართული გრამატიკა",
        "g_desc": "ქართული გრამატიკის საფუძვლები: ბრუნვები, ზმნის პირის ნიშნები, დროები და წინადადების აგება.",
        "g_btn": "გრამატიკის წიგნის გახსნა →",
        "g_url": "ka/grammar/index.html",
        "v_badge": "წიგნი 2 · ლექსიკის სახელმძღვანელო",
        "v_title": "ქართული ლექსიკა",
        "v_desc": "თემატური ლექსიკონი ყოველდღიური ურთიერთობისთვის, ინტერაქტიული ბარათებითა და სავარჯიშოებით.",
        "v_btn": "ლექსიკის წიგნის გახსნა →",
        "v_url": "ka/vocabulary/index.html",
    },
    "el": {
        "filename": "ellinika-a0-a1.html",
        "lang_code": "el",
        "name_en": "Greek",
        "native_name": "Ελληνικά",
        "flag": "🇬🇷",
        "title": "COSYlanguages Ελληνικά Live A0–A1 · Εγχειρίδια Εκμάθησης",
        "meta_desc": "Ολοκληρωμένο σύστημα εκμάθησης ελληνικών (A0-A1): Βιβλίο 1 Γραμματική Ελληνικών και Βιβλίο 2 Ελληνικό Λεξιλόγιο.",
        "kicker": "Ολοκληρωμένο Σύστημα · Επίπεδο A0–A1",
        "h1": "Εγχειρίδια Εκμάθησης Ελληνικών",
        "lead": "Δύο συμπληρωματικά εγχειρίδια για την ουσιαστική κατάκτηση της ελληνικής γλώσσας: γραμματικοί κανόνες και θεματικό λεξιλόγιο.",
        "portal_url": "../languages/el.html",
        "portal_label": "← Hub COSYελληνικά",
        "manifesto_title": "★ ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ ΤΟ ΣΥΣΤΗΜΑ",
        "manifesto_text": "Κάθε επίπεδο στο COSYlanguages βασίζεται σε δύο αλληλένδετα βιβλία. Μελετήστε τη <strong>Γραμματική Ελληνικών</strong> για τη δομή και το <strong>Ελληνικό Λεξιλόγιο</strong> για τον εμπλουτισμό των λέξεων σας.",
        "g_badge": "ΒΙΒΛΙΟ 1 · ΕΓΧΕΙΡΙΔΙΟ ΓΡΑΜΜΑΤΙΚΗΣ",
        "g_title": "Γραμματική Ελληνικών",
        "g_desc": "Ο πλήρης οδηγός για αρχάριους: αλφάβητο, πτώσεις, άρθρα, ρήματα, αόριστος, μέλλοντας, προθέσεις και διαδραστικά κουίζ.",
        "g_btn": "Άνοιγμα Γραμματικής Ελληνικών →",
        "g_url": "el/grammar/index.html",
        "v_badge": "ΒΙΒΛΙΟ 2 · ΕΓΧΕΙΡΙΔΙΟ ΛΕΞΙΛΟΓΙΟΥ",
        "v_title": "Ελληνικό Λεξιλόγιο",
        "v_desc": "Θεματικό λεξιλόγιο για την καθημερινή ζωή με κάρτες εκμάθησης, παραδείγματα και ασκήσεις αυτοαξιολόγησης.",
        "v_btn": "Άνοιγμα Ελληνικού Λεξιλογίου →",
        "v_url": "el/vocabulary/index.html",
    },
    "el_a2": {
        "filename": "ellinika-a2.html",
        "lang_code": "el",
        "name_en": "Greek (Level A2)",
        "native_name": "Ελληνικά A2",
        "flag": "🇬🇷",
        "title": "COSYlanguages Ελληνικά Live A2 · Εγχειρίδια Εκμάθησης",
        "meta_desc": "Ολοκληρωμένο σύστημα εκμάθησης ελληνικών (Επίπεδο A2): Βιβλίο 1 Γραμματική Ελληνικών και Βιβλίο 2 Ελληνικό Λεξιλόγιο.",
        "kicker": "Ολοκληρωμένο Σύστημα · Επίπεδο A2",
        "h1": "Εγχειρίδια Εκμάθησης Ελληνικών (Επίπεδο A2)",
        "lead": "Εμβαθύνετε στα ελληνικά: Αόριστος vs Παρατατικός, εξακολουθητικός και στιγμιαίος μέλλοντας, υποτακτική, αντωνυμίες και σύγκριση.",
        "portal_url": "../languages/el.html",
        "portal_label": "← Hub COSYελληνικά",
        "manifesto_title": "★ ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ ΤΟ ΣΥΣΤΗΜΑ",
        "manifesto_text": "Το επίπεδο A2 αναπτύσσει τις γνώσεις σας. Χρησιμοποιήστε τη <strong>Γραμματική Ελληνικών A2</strong> για τους χρόνους του ρήματος και το <strong>Ελληνικό Λεξιλόγιο A2</strong> για την εργασία και τα ταξίδια.",
        "g_badge": "ΒΙΒΛΙΟ 1 · ΕΓΧΕΙΡΙΔΙΟ ΓΡΑΜΜΑΤΙΚΗΣ",
        "g_title": "Γραμματική Ελληνικών (A2)",
        "g_desc": "Αόριστος vs Παρατατικός, μέλλοντας, υποτακτική έγκλιση (να/για να), προσωπικές αντωνυμίες και συγκριτικός βαθμός.",
        "g_btn": "Άνοιγμα Γραμματικής A2 →",
        "g_url": "el/grammar/a2/index.html",
        "v_badge": "ΒΙΒΛΙΟ 2 · ΕΓΧΕΙΡΙΔΙΟ ΛΕΞΙΛΟΓΙΟΥ",
        "v_title": "Ελληνικό Λεξιλόγιο (A2)",
        "v_desc": "Θεματικό λεξιλόγιο A2: εργασία, επαγγέλματα, σπουδές, ταξίδια, μεταφορές και υγεία.",
        "v_btn": "Άνοιγμα Λεξιλογίου A2 →",
        "v_url": "el/vocabulary/a2/index.html",
    }
}

HUB_TEMPLATE = """<!doctype html>
<html lang="{lang_code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{meta_desc}">
<link rel="stylesheet" href="../css/lang-pages.css">
<link rel="stylesheet" href="../css/lang-accents.css">
<link rel="stylesheet" href="../css/mobile.css">
<style>
  :root {{
    --brand-teal: #0f382c;
    --brand-teal-light: #e3f5ef;
    --paper-bg: #fcfbf7;
    --card-bg: #ffffff;
    --text-ink: #13231e;
    --text-soft: #3c544c;
    --line-border: #e3e0d5;
  }}
  body {{
    background: var(--paper-bg);
    color: var(--text-ink);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    margin: 0;
    line-height: 1.6;
  }}
  .topbar {{
    background: var(--brand-teal);
    color: #fff;
    padding: 12px 24px;
    position: sticky;
    top: 0;
    z-index: 100;
  }}
  .topbar-inner {{
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }}
  .topbar a {{
    color: #eafaf5;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
  }}
  .hero-hub {{
    background: linear-gradient(135deg, var(--brand-teal), #1c6b54);
    color: #fff;
    padding: 60px 24px 50px;
    text-align: center;
  }}
  .hero-hub h1 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: clamp(32px, 5.5vw, 48px);
    margin: 10px 0;
  }}
  .hero-hub p {{
    max-width: 680px;
    margin: 0 auto 24px;
    font-size: 18px;
    opacity: 0.9;
  }}
  .hub-container {{
    max-width: 1040px;
    margin: -30px auto 60px;
    padding: 0 24px;
  }}
  .books-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }}
  .book-card {{
    background: var(--card-bg);
    border: 1px solid var(--line-border);
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 8px 24px -12px rgba(19, 35, 30, 0.15);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .book-card:hover {{
    transform: translateY(-4px);
    box-shadow: 0 14px 32px -12px rgba(19, 35, 30, 0.25);
  }}
  .book-card .badge {{
    display: inline-block;
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }}
  .book-card .badge.active {{
    background: var(--brand-teal-light);
    color: var(--brand-teal);
  }}
  .book-card .badge.coming {{
    background: #f1e9fb;
    color: #7c4fd6;
  }}
  .book-card h2 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 22px;
    margin: 0 0 8px;
  }}
  .book-card p {{
    color: var(--text-soft);
    font-size: 14.5px;
    margin-bottom: 20px;
  }}
  .book-card .btn-open {{
    display: inline-block;
    text-align: center;
    background: var(--brand-teal);
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 14.5px;
    padding: 12px 20px;
    border-radius: 12px;
    transition: background 0.2s;
  }}
  .book-card .btn-open:hover {{
    background: #1c6b54;
  }}
  .manifesto-box {{
    background: #fdf3d6;
    border: 1px solid #eddca0;
    border-radius: 18px;
    padding: 24px;
    margin: 40px 0;
  }}
  .manifesto-box h3 {{
    margin: 0 0 10px;
    color: #7a5b0c;
  }}
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="{portal_url}">{portal_label}</a>
    <a href="index.html">COSYlanguages Manuals Index</a>
  </div>
</header>

<section class="hero-hub">
  <span style="background: rgba(255,255,255,0.15); padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
    {kicker}
  </span>
  <h1>{h1}</h1>
  <p>{lead}</p>
</section>

<main class="hub-container">

  <div class="manifesto-box">
    <h3>{manifesto_title}</h3>
    <p style="margin: 0; color: #5c440a; font-size: 15px;">
      {manifesto_text}
    </p>
  </div>

  <div class="books-grid">

    <!-- Book 1: Grammar -->
    <div class="book-card">
      <div>
        <span class="badge active">{g_badge}</span>
        <h2>{g_title}</h2>
        <p>{g_desc}</p>
      </div>
      <a href="{g_url}" class="btn-open">{g_btn}</a>
    </div>

    <!-- Book 2: Vocabulary -->
    <div class="book-card">
      <div>
        <span class="badge active">{v_badge}</span>
        <h2>{v_title}</h2>
        <p>{v_desc}</p>
      </div>
      <div>
        <a href="{v_url}" class="btn-open">{v_btn}</a>
        {v_extra}
      </div>
    </div>

    <!-- Book 3: Speech / Communication -->
    {book3_html}

    <!-- Book 4: Exercises & Culture (Future Expansion) -->
    <div class="book-card" style="opacity: 0.85;">
      <div>
        <span class="badge coming">BOOK 4 · COMING SOON</span>
        <h2>Culture &amp; Exercises</h2>
        <p>Short original texts, audio stories, poems, and cultural deep dives to build reading fluency.</p>
      </div>
      <span style="font-size: 13px; font-weight: 700; color: var(--text-soft); font-style: italic;">In active editorial preparation...</span>
    </div>

  </div>

</main>

<footer style="background: var(--brand-teal); color: #c9d8d4; padding: 30px 24px; text-align: center; font-size: 13.5px;">
  <div>&copy; 2026 COSYlanguages · Learning Manuals System</div>
</footer>

</body>
</html>
"""

def generate_hubs():
    os.makedirs(MANUALS_DIR, exist_ok=True)
    count = 0
    for code, info in LANGUAGES.items():
        filepath = os.path.join(MANUALS_DIR, info["filename"])

        if "c_url" in info:
            book3_html = f"""<div class="book-card">
      <div>
        <span class="badge active">{info['c_badge']}</span>
        <h2>{info['c_title']}</h2>
        <p>{info['c_desc']}</p>
      </div>
      <a href="{info['c_url']}" class="btn-open">{info['c_btn']}</a>
    </div>"""
        else:
            book3_html = """<div class="book-card" style="opacity: 0.85;">
      <div>
        <span class="badge coming">BOOK 3 · COMING SOON</span>
        <h2>Speech &amp; Conversation</h2>
        <p>Daily dialogues, speech patterns, and real-time situational practice for active communication.</p>
      </div>
      <span style="font-size: 13px; font-weight: 700; color: var(--text-soft); font-style: italic;">In active editorial preparation...</span>
    </div>"""

        if code in ("en_a2", "en_b1", "en_b2"):
            v_extra = """<div style="margin-top: 10px; text-align: center;">
          <a href="../practice/index.html" style="font-size: 13px; font-weight: 700; color: var(--brand-teal); text-decoration: underline;">Open Practice Hub ↗</a>
        </div>"""
        else:
            v_extra = ""

        content_vars = dict(info)
        content_vars["book3_html"] = book3_html
        content_vars["v_extra"] = v_extra

        content = HUB_TEMPLATE.format(**content_vars)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"Generated hub: manuals/{info['filename']}")

    # Build Master Directory manuals/index.html
    cards_html = []
    for code, info in LANGUAGES.items():
        comm_btn_html = ""
        if "c_url" in info:
            comm_btn_html = f'\n        <a href="{info["c_url"]}" class="btn-link comm">💬 Communication Manual</a>'

        cards_html.append(f"""
    <div class="lang-hub-card">
      <div class="lang-card-header">
        <span class="flag">{info['flag']}</span>
        <div>
          <h2>{info['name_en']} <span class="native">({info['native_name']})</span></h2>
          <span class="level-pill">{info['kicker'].split('· ')[-1]}</span>
        </div>
      </div>
      <p class="lang-desc">{info['lead']}</p>
      <div class="card-links-grid">
        <a href="{info['filename']}" class="btn-link primary">🌟 Unified Language Hub</a>
        <a href="{info['g_url']}" class="btn-link grammar">📘 Grammar Manual</a>
        <a href="{info['v_url']}" class="btn-link vocab">📚 Vocabulary Manual</a>{comm_btn_html}
        <a href="{info['portal_url']}" class="btn-link portal">🌐 Language Portal</a>
      </div>
    </div>""")

    master_index_content = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>COSYlanguages Master Directory · All Language Manuals &amp; Hubs</title>
<meta name="description" content="Master directory of all COSYlanguages learning manuals and level hubs across all supported languages.">
<link rel="stylesheet" href="../css/lang-pages.css">
<link rel="stylesheet" href="../css/lang-accents.css">
<link rel="stylesheet" href="../css/mobile.css">
<style>
  :root {{
    --brand-teal: #0f382c;
    --brand-teal-light: #e3f5ef;
    --paper-bg: #fcfbf7;
    --card-bg: #ffffff;
    --text-ink: #13231e;
    --text-soft: #3c544c;
    --line-border: #e3e0d5;
  }}
  body {{
    background: var(--paper-bg);
    color: var(--text-ink);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    margin: 0;
    line-height: 1.6;
  }}
  .topbar {{
    background: var(--brand-teal);
    color: #fff;
    padding: 12px 24px;
    position: sticky;
    top: 0;
    z-index: 100;
  }}
  .topbar-inner {{
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }}
  .topbar a {{
    color: #eafaf5;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
  }}
  .hero-master {{
    background: linear-gradient(135deg, var(--brand-teal), #1c6b54);
    color: #fff;
    padding: 64px 24px 56px;
    text-align: center;
  }}
  .hero-master h1 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: clamp(32px, 5.5vw, 50px);
    margin: 12px 0;
  }}
  .hero-master p {{
    max-width: 720px;
    margin: 0 auto 24px;
    font-size: 18px;
    opacity: 0.92;
  }}
  .master-container {{
    max-width: 1120px;
    margin: 40px auto 80px;
    padding: 0 24px;
  }}
  .directory-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }}
  .lang-hub-card {{
    background: var(--card-bg);
    border: 1px solid var(--line-border);
    border-radius: 20px;
    padding: 26px;
    box-shadow: 0 8px 24px -12px rgba(19, 35, 30, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s;
  }}
  .lang-hub-card:hover {{
    transform: translateY(-4px);
    box-shadow: 0 16px 36px -12px rgba(19, 35, 30, 0.22);
  }}
  .lang-card-header {{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 14px;
  }}
  .lang-card-header .flag {{
    font-size: 36px;
    line-height: 1;
  }}
  .lang-card-header h2 {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 20px;
    margin: 0 0 4px;
  }}
  .lang-card-header h2 .native {{
    font-weight: 500;
    color: var(--text-soft);
    font-size: 16px;
  }}
  .level-pill {{
    display: inline-block;
    background: var(--brand-teal-light);
    color: var(--brand-teal);
    font-size: 11px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 99px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }}
  .lang-desc {{
    color: var(--text-soft);
    font-size: 14px;
    margin: 0 0 20px;
    flex-grow: 1;
  }}
  .card-links-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }}
  .btn-link {{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
  }}
  .btn-link.primary {{
    grid-column: 1 / -1;
    background: var(--brand-teal);
    color: #fff;
    font-size: 14px;
    padding: 12px;
  }}
  .btn-link.primary:hover {{
    background: #1c6b54;
  }}
  .btn-link.grammar {{
    background: #e9eefd;
    color: #2b50b8;
  }}
  .btn-link.grammar:hover {{
    background: #d4e0fc;
  }}
  .btn-link.vocab {{
    background: #e6f6ec;
    color: #177546;
  }}
  .btn-link.vocab:hover {{
    background: #ceeedb;
  }}
  .btn-link.comm {{
    grid-column: 1 / -1;
    background: #fdf3e6;
    color: #b85d2b;
  }}
  .btn-link.comm:hover {{
    background: #fce4cc;
  }}
  .btn-link.portal {{
    grid-column: 1 / -1;
    background: var(--paper-bg);
    border: 1px solid var(--line-border);
    color: var(--text-soft);
  }}
  .btn-link.portal:hover {{
    background: #f0ede3;
    color: var(--text-ink);
  }}
  .section-title {{
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 26px;
    margin: 0 0 8px;
  }}
  .section-sub {{
    color: var(--text-soft);
    margin-bottom: 30px;
  }}
  .global-nav-box {{
    background: #fdf3d6;
    border: 1px solid #eddca0;
    border-radius: 20px;
    padding: 28px;
    margin: 50px 0 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }}
  .global-nav-box h3 {{
    margin: 0 0 6px;
    color: #7a5b0c;
  }}
  .global-nav-box p {{
    margin: 0;
    color: #5c440a;
    font-size: 14.5px;
  }}
  .quick-nav-links {{
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }}
  .quick-nav-links a {{
    background: #fff;
    border: 1px solid #eddca0;
    color: #7a5b0c;
    padding: 8px 16px;
    border-radius: 99px;
    text-decoration: none;
    font-weight: 700;
    font-size: 13.5px;
    transition: background 0.15s;
  }}
  .quick-nav-links a:hover {{
    background: #faeaaf;
  }}
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a href="../index.html">← COSYlanguages Platform</a>
    <a href="index.html">Manuals Index</a>
  </div>
</header>

<section class="hero-master">
  <span style="background: rgba(255,255,255,0.15); padding: 5px 14px; border-radius: 99px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
    Master Directory · COSYlanguages Library
  </span>
  <h1>All Manuals &amp; Languages Hub</h1>
  <p>Explore single-page hubs, grammar references, vocabulary manuals, and communication systems across all supported languages in the COSYlanguages ecosystem.</p>
</section>

<main class="master-container">

  <div>
    <h2 class="section-title">Language Manuals &amp; Hubs</h2>
    <p class="section-sub">Select a language to open its unified hub or jump directly to Book 1 (Grammar), Book 2 (Vocabulary), or Book 3 (Communication).</p>
  </div>

  <div class="directory-grid">
    {''.join(cards_html)}
  </div>

  <div class="global-nav-box" style="background: #e3f5ef; border-color: #a3e2cd;">
    <div>
      <h3 style="color: #0f382c;">📊 COMPARATIVE GRAMMAR MATRIX</h3>
      <p style="color: #1c6b54;">Cross-linguistic grammar comparison engine across all 14 target languages in the COSYlanguages system.</p>
    </div>
    <div class="quick-nav-links">
      <a href="../comparative/index.html" style="background: #0f382c; color: #fff; border-color: #0f382c;">Open Comparative Matrix →</a>
    </div>
  </div>

  <div class="global-nav-box">
    <div>
      <h3>🌐 QUICK PLATFORM JUMP</h3>
      <p>Direct links to practice trainers, games, speaking events, and premium academies.</p>
    </div>
    <div class="quick-nav-links">
      <a href="../index.html">Platform Home</a>
      <a href="../practice/index.html">Practice Hub</a>
      <a href="../games/index.html">Games Hub</a>
      <a href="../events/index.html">Events Workspace</a>
      <a href="../apps/premium-courses/index.html">Premium Courses</a>
    </div>
  </div>

</main>

<footer style="background: var(--brand-teal); color: #c9d8d4; padding: 36px 24px; text-align: center; font-size: 13.5px;">
  <div>&copy; 2026 COSYlanguages · All rights reserved · Interactive Web Edition Manuals Directory</div>
</footer>

</body>
</html>
"""

    master_index_path = os.path.join(MANUALS_DIR, "index.html")
    with open(master_index_path, "w", encoding="utf-8") as f:
        f.write(master_index_content)
    print("Generated master index: manuals/index.html")
    print(f"Successfully generated all {count} language manual hubs + master index!")

if __name__ == "__main__":
    generate_hubs()
