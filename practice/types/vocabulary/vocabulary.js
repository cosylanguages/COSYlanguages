/**
 * practice/types/vocabulary/vocabulary.js
 * Vocabulary data provider and task generator for practice sessions.
 */

(function() {
    'use strict';

    const LEVEL_MAP = {
        'starter': 'a1',
        'elementary': 'a2',
        'intermediate': 'b1',
        'upper_intermediate': 'b2',
        'advanced': 'c1',
        'proficiency': 'c2'
    };

    /* ══════════════════════════════════════
       QUESTION DATA (Static Fallbacks)
    ══════════════════════════════════════ */
    const QUESTIONS = {
        EN: {
            Vocabulary: [
                { type:'mc', q:'"sibling" = ?', opts:['A brother or sister','A parent','A cousin','A friend'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"ancient" ≠ ?', opts:['Modern','Old','Historic','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'mc', q:'"resilient" = ?', opts:['Able to recover quickly from difficult conditions','Easily broken','Slightly confused','Extremely loud'], ans:0, level:'intermediate', theme:'Daily Life' },
                { type:'mc', q:'"ephemeral" ≠ ?', opts:['Permanent','Temporary','Short-lived','Fleeting'], ans:0, level:'upper_intermediate', theme:'Science & Nature' },
                { type:'tf', q:'"quick" = "very slow"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                {"type": "mc", "q": "The book is ___ the table.", "opts": ["on", "in", "at", "to"], "ans": 0, "level": "starter", "theme": "prepositions-place", "ruleHint": "Use \"on\" for flat surfaces.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-place.html"]},
                {"type": "mc", "q": "She is waiting ___ the bus stop.", "opts": ["at", "on", "in", "into"], "ans": 0, "level": "starter", "theme": "prepositions-place", "ruleHint": "Use \"at\" for specific locations and points.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-place.html"]},
                {"type": "mc", "q": "There is a cat ___ the car.", "opts": ["under", "on top", "at", "into"], "ans": 0, "level": "starter", "theme": "prepositions-place", "ruleHint": "Use \"under\" when something is directly beneath something else.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-place.html"]},
                {"type": "mc", "q": "The cafe is ___ the bank and the pharmacy.", "opts": ["between", "among", "inside", "at"], "ans": 0, "level": "elementary", "theme": "prepositions-place", "ruleHint": "Use \"between\" when referring to two distinct items.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-place.html"]},
                {"type": "mc", "q": "Our meeting starts ___ 9:00 AM.", "opts": ["at", "in", "on", "for"], "ans": 0, "level": "starter", "theme": "prepositions-time", "ruleHint": "Use \"at\" for precise clock times.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-time.html"]},
                {"type": "mc", "q": "She was born ___ July.", "opts": ["in", "on", "at", "for"], "ans": 0, "level": "starter", "theme": "prepositions-time", "ruleHint": "Use \"in\" for months, years, seasons, and long periods.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-time.html"]},
                {"type": "mc", "q": "We always go hiking ___ Saturdays.", "opts": ["on", "in", "at", "during"], "ans": 0, "level": "starter", "theme": "prepositions-time", "ruleHint": "Use \"on\" for days of the week and dates.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-time.html"]},
                {"type": "mc", "q": "I have lived here ___ three years.", "opts": ["for", "since", "during", "in"], "ans": 0, "level": "intermediate", "theme": "prepositions-time", "ruleHint": "Use \"for\" to indicate a duration of time.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-time.html"]},
                {"type": "mc", "q": "The football match was really ___!", "opts": ["exciting", "excited", "excite", "excitement"], "ans": 0, "level": "elementary", "theme": "adjectives", "ruleHint": "-ing adjectives describe the characteristic of a thing or event.", "practice_links": ["manuals/en/grammar/a1/topics/adjectives.html"]},
                {"type": "mc", "q": "I was so ___ after hearing the great news!", "opts": ["excited", "exciting", "excite", "excitement"], "ans": 0, "level": "elementary", "theme": "adjectives", "ruleHint": "-ed adjectives describe human feelings and emotional states.", "practice_links": ["manuals/en/grammar/a1/topics/adjectives.html"]},
                {"type": "mc", "q": "This book is so ___; I cannot finish reading it.", "opts": ["boring", "bored", "bores", "boredom"], "ans": 0, "level": "elementary", "theme": "adjectives", "ruleHint": "-ing adjectives describe what causes the feeling.", "practice_links": ["manuals/en/grammar/a1/topics/adjectives.html"]},
                {"type": "mc", "q": "I bought ___ apple and a banana.", "opts": ["an", "a", "the", "some"], "ans": 0, "level": "starter", "theme": "articles", "ruleHint": "Use \"an\" before words starting with a vowel sound.", "practice_links": ["manuals/en/grammar/a1/topics/articles.html"]},
                {"type": "mc", "q": "We need ___ bread and cheese.", "opts": ["some", "a", "an", "many"], "ans": 0, "level": "starter", "theme": "articles", "ruleHint": "Use \"some\" with uncountable nouns.", "practice_links": ["manuals/en/grammar/a1/topics/articles.html"]},
                {"type": "mc", "q": "One child, two ___ .", "opts": ["children", "childs", "childes", "childrens"], "ans": 0, "level": "starter", "theme": "plurals-irregular", "ruleHint": "Irregular plural: child ➔ children.", "practice_links": ["manuals/en/grammar/a1/topics/plurals-irregular.html"]},
                {"type": "mc", "q": "___ car is parked outside?", "opts": ["Whose", "Who", "Whom", "Which"], "ans": 0, "level": "starter", "theme": "pronouns", "ruleHint": "Use \"whose\" to show possession.", "practice_links": ["manuals/en/grammar/a1/topics/pronouns.html"]},
                {"type": "mc", "q": "We stayed home ___ the heavy rain.", "opts": ["because of", "because", "although", "despite of"], "ans": 0, "level": "intermediate", "theme": "word-order", "ruleHint": "Use \"because of\" before a noun phrase.", "practice_links": ["manuals/en/grammar/a1/topics/word-order.html"]},
                {"type": "mc", "q": "___ it was raining, we went for a walk in the park.", "opts": ["Although", "Despite", "In spite of", "Because of"], "ans": 0, "level": "intermediate", "theme": "conjunctions", "ruleHint": "Use \"Although\" followed by a full clause.", "practice_links": ["manuals/en/grammar/a1/topics/conjunctions.html"]},
                {"type": "sc", "q": "🧩 Reorder the sentence:", "ans": "She does not like coffee in the morning.", "level": "starter", "theme": "word-order", "item": {"word": "Sentence Order"}, "practice_links": ["manuals/en/grammar/a1/topics/word-order.html"]},
                {"type": "cloze", "q": "Fill in the blank: She is interested [ ___ ] modern art.", "sentence": "She is interested [ ___ ] modern art.", "opts": ["in", "at", "on", "for"], "ans": 0, "level": "elementary", "theme": "prepositions-place", "ruleHint": "Use \"in\" with the adjective interested.", "practice_links": ["manuals/en/grammar/a1/topics/prepositions-place.html"]},
                {"type": "type", "q": "\"Past simple of verb: go\" = ?", "ans": "went", "level": "starter", "theme": "past-simple-irregular", "ruleHint": "Irregular verb: go ➔ went.", "item": {"word": "went"}, "practice_links": ["manuals/en/grammar/a1/topics/past-simple-irregular.html"]},
                {"type": "mc", "q": "She ___ to the market every Saturday morning.", "opts": ["goes", "go", "is going", "went"], "ans": 0, "level": "starter", "theme": "present-simple", "ruleHint": "Present simple third-person singular adds -s/-es.", "practice_links": ["manuals/en/grammar/a1/topics/present-simple.html"]},
                {"type": "mc", "q": "Right now, they ___ a new project.", "opts": ["are starting", "start", "started", "have started"], "ans": 0, "level": "starter", "theme": "present-continuous", "ruleHint": "Present continuous describes actions happening right now.", "practice_links": ["manuals/en/grammar/a1/topics/present-continuous.html"]},
                {"type": "mc", "q": "If you heat water to 100 degrees Celsius, it ___.", "opts": ["boils", "will boil", "boiled", "would boil"], "ans": 0, "level": "elementary", "theme": "conditionals", "ruleHint": "Zero conditional expresses general truths (If + present, present).", "practice_links": ["manuals/en/grammar/a2/topics/zero-conditional.html"]},
                {"type": "mc", "q": "If it rains tomorrow, we ___ at home.", "opts": ["will stay", "stayed", "would stay", "had stayed"], "ans": 0, "level": "elementary", "theme": "conditionals", "ruleHint": "First conditional formula: If + present, will + verb.", "practice_links": ["manuals/en/grammar/a2/topics/first-conditional.html"]},
                {"type": "mc", "q": "The woman ___ spoke at the conference is a renowned scientist.", "opts": ["who", "which", "whose", "where"], "ans": 0, "level": "intermediate", "theme": "pronouns", "ruleHint": "Use \"who\" for relative clauses referring to people.", "practice_links": ["manuals/en/grammar/a2/topics/defining-relative-clauses.html"]},
                {"type": "mc", "q": "If I had known about the traffic, I ___ earlier.", "opts": ["would have left", "left", "will leave", "had left"], "ans": 0, "level": "upper_intermediate", "theme": "conditionals", "ruleHint": "Third conditional formula: If + past perfect, would have + past participle.", "practice_links": ["manuals/en/grammar/b1/topics/third-conditional.html"]}
            ]
        },
        FR: {
            Vocabulary: [
                { type:'mc', q:'"frère" = ?', opts:['Le fils des mêmes parents','Un parent éloigné','Un ami d’enfance','Une sœur'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"ancien" ≠ ?', opts:['Moderne','Vieux','Histórico','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'mc', q:'"bienveillant" = ?', opts:['Attentif et soucieux du bien d’autrui','Égoïste','Indifférent','Sévère'], ans:0, level:'intermediate', theme:'Daily Life' },
                { type:'tf', q:'"rapide" = "très lent"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                {"type": "mc", "q": "Le livre est ___ la table.", "opts": ["sur", "dans", "à", "sous"], "ans": 0, "level": "starter", "theme": "prepositions-lieu", "ruleHint": "Utilisez \"sur\" pour une surface.", "practice_links": ["grammaire-francaise/topics/prepositions-lieu-1.html"]},
                {"type": "mc", "q": "Elle habite ___ Paris.", "opts": ["à", "dans", "en", "au"], "ans": 0, "level": "starter", "theme": "prepositions-lieu", "ruleHint": "Utilisez 'à' devant le nom d'une ville.", "practice_links": ["grammaire-francaise/topics/prepositions-lieu-1.html"]},
                {"type": "mc", "q": "Le train arrive ___ 15h00.", "opts": ["à", "en", "dans", "sur"], "ans": 0, "level": "starter", "theme": "prepositions-temps", "ruleHint": "Utilisez 'à' pour indiquer l'heure exacte.", "practice_links": ["grammaire-francaise/topics/prepositions-temps.html"]},
                {"type": "mc", "q": "Nous partons en vacances ___ juillet.", "opts": ["en", "à", "dans", "au"], "ans": 0, "level": "starter", "theme": "prepositions-temps", "ruleHint": "Utilisez \"en\" devant les mois et saisons.", "practice_links": ["grammaire-francaise/topics/prepositions-temps.html"]},
                {"type": "mc", "q": "Ce film est vraiment ___ !", "opts": ["intéressant", "intéressé", "intéresser", "intérêt"], "ans": 0, "level": "elementary", "theme": "adjectifs-qualificatifs", "ruleHint": "Utilisez l'adjectif qualificatif pour décrire une chose.", "practice_links": ["grammaire-francaise/topics/accord-des-adjectifs.html"]},
                {"type": "mc", "q": "Il est très ___ par la peinture moderne.", "opts": ["intéressé", "intéressant", "intéresser", "intérêt"], "ans": 0, "level": "elementary", "theme": "adjectifs-qualificatifs", "ruleHint": "Utilisez \"intéressé par\" pour exprimer un sentiment personnel.", "practice_links": ["grammaire-francaise/topics/accord-des-adjectifs.html"]},
                {"type": "mc", "q": "Je voudrais ___ pain et du fromage.", "opts": ["du", "de la", "des", "le"], "ans": 0, "level": "starter", "theme": "articles-partitifs", "ruleHint": "Utilisez l'article partitif 'du' devant un nom masculin singulier.", "practice_links": ["grammaire-francaise/topics/articles-partitifs.html"]},
                {"type": "mc", "q": "Il mange ___ eau fraîche.", "opts": ["de l'", "du", "de la", "des"], "ans": 0, "level": "starter", "theme": "articles-partitifs", "ruleHint": "Devant une voyelle ou un h muet, utilisez 'de l'.", "practice_links": ["grammaire-francaise/topics/articles-partitifs.html"]},
                {"type": "mc", "q": "Il est venu ___ la pluie battait son plein.", "opts": ["bien que", "malgré", "à cause de", "pour"], "ans": 0, "level": "intermediate", "theme": "conjonctions", "ruleHint": "\"Bien que\" est suivi du subjonctif.", "practice_links": ["grammaire-francaise/topics/conjonctions.html"]},
                {"type": "mc", "q": "Nous sommes sortis ___ la pluie.", "opts": ["malgré", "bien que", "parce que", "afin que"], "ans": 0, "level": "intermediate", "theme": "conjonctions", "ruleHint": "'Malgré' est suivi directement d'un groupe nominal.", "practice_links": ["grammaire-francaise/topics/conjonctions.html"]},
                {"type": "mc", "q": "___ un grand professeur.", "opts": ["C'est", "Il est", "Elle est", "Ce sont"], "ans": 0, "level": "starter", "theme": "cest-vs-il-est", "ruleHint": "Utilisez 'C'est' devant un déterminant et un nom.", "practice_links": ["grammaire-francaise/topics/cest-vs-il-est.html"]},
                {"type": "mc", "q": "___ médecin à l'hôpital.", "opts": ["Il est", "C'est", "Ce sont", "Ils sont"], "ans": 0, "level": "starter", "theme": "cest-vs-il-est", "ruleHint": "Utilisez 'Il est' devant une profession sans article.", "practice_links": ["grammaire-francaise/topics/cest-vs-il-est.html"]},
                {"type": "mc", "q": "Regarde ___ homme là-bas.", "opts": ["cet", "ce", "cette", "ces"], "ans": 0, "level": "starter", "theme": "ce-cet-cette-ces", "ruleHint": "Utilisez \"cet\" devant un nom masculin commençant par une voyelle.", "practice_links": ["grammaire-francaise/topics/ce-cet-cette-ces.html"]},
                {"type": "mc", "q": "J'aime beaucoup ___ fleur.", "opts": ["cette", "ce", "cet", "ces"], "ans": 0, "level": "starter", "theme": "ce-cet-cette-ces", "ruleHint": "Utilisez \"cette\" devant un nom féminin singulier.", "practice_links": ["grammaire-francaise/topics/ce-cet-cette-ces.html"]},
                {"type": "mc", "q": "___ amie habite à Lyon.", "opts": ["Mon", "Ma", "Mes", "Ta"], "ans": 0, "level": "starter", "theme": "adjectifs-possessifs", "ruleHint": "Devant un nom féminin commençant par une voyelle, utilisez \"mon\".", "practice_links": ["grammaire-francaise/topics/adjectifs-possessifs.html"]},
                {"type": "mc", "q": "___ à l'heure demain !", "opts": ["Soyez", "Êtes", "Être", "Sois-tu"], "ans": 0, "level": "elementary", "theme": "imperatif", "ruleHint": "Forme impérative de être à la 2e personne du pluriel.", "practice_links": ["grammaire-francaise/topics/imperatif.html"]},
                {"type": "mc", "q": "Demain, nous ___ notre voyage.", "opts": ["commencerons", "commençons", "commencer", "avons commencé"], "ans": 0, "level": "elementary", "theme": "futur-simple", "ruleHint": "Le futur simple exprime une action à venir.", "practice_links": ["grammaire-francaise/topics/futur-simple.html"]},
                {"type": "mc", "q": "Tous les matins, elle ___ à 7h.", "opts": ["se réveille", "réveille", "s'est réveillée", "réveiller"], "ans": 0, "level": "starter", "theme": "verbes-pronominaux", "ruleHint": "Les verbes pronominaux se conjuguent avec un pronom réfléchi.", "practice_links": ["grammaire-francaise/topics/verbes-pronominaux.html"]},
                {"type": "mc", "q": "Elle ___ parler trois langues.", "opts": ["sait", "peut", "connaît", "savent"], "ans": 0, "level": "starter", "theme": "pouvoir-vs-savoir", "ruleHint": "Utilisez \"savoir\" pour une compétence acquise.", "practice_links": ["grammaire-francaise/topics/pouvoir-vs-savoir.html"]},
                {"type": "mc", "q": "J'ai ___ amis à Paris.", "opts": ["quelques", "beaucoup de", "un peu", "plusieurs de"], "ans": 0, "level": "starter", "theme": "beaucoup-un-peu-quelques", "ruleHint": "Utilisez \"quelques\" pour une petite quantité comptable.", "practice_links": ["grammaire-francaise/topics/beaucoup-un-peu-quelques.html"]},
                {"type": "mc", "q": "Hier, nous ___ au cinéma.", "opts": ["sommes allés", "allons", "avons allé", "sommes aller"], "ans": 0, "level": "elementary", "theme": "passe-compose", "ruleHint": "Le verbe aller se conjugue avec l'auxiliaire être au passé composé.", "practice_links": ["grammaire-francaise/topics/passe-compose-avoir.html"]},
                {"type": "mc", "q": "Quand j'étais jeune, je ___ du vélo tous les jours.", "opts": ["faisais", "fait", "fais", "ai fait"], "ans": 0, "level": "elementary", "theme": "imparfait", "ruleHint": "L'imparfait décrit une habitude dans le passé.", "practice_links": ["grammaire-francaise/topics/imparfait.html"]}
            ]
        },
        IT: {
            Vocabulary: [
                { type:'mc', q:'"fratello" = ?', opts:['Il figlio dei propri genitori','Un genitore','Un cugino','Un amico'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"antico" ≠ ?', opts:['Moderno','Vecchio','Storico','Antico'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'mc', q:'"accogliente" = ?', opts:['Caldo, ospitale e confortevole','Freddo','Lontano','Pericoloso'], ans:0, level:'intermediate', theme:'Daily Life' },
                { type:'tf', q:'"veloce" = "molto lento"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                {"type": "mc", "q": "Il libro è ___ tavolo.", "opts": ["sul", "nel", "dal", "con"], "ans": 0, "level": "starter", "theme": "preposizioni-semplici", "ruleHint": "Usa \"sul\" (su + il) per indicare una superficie.", "practice_links": ["grammatica-italiana/topics/preposizioni-semplici.html"]},
                {"type": "mc", "q": "Vado ___ Roma questo fine settimana.", "opts": ["a", "in", "da", "per"], "ans": 0, "level": "starter", "theme": "preposizioni-semplici", "ruleHint": "Usa \"a\" davanti ai nomi di città.", "practice_links": ["grammatica-italiana/topics/preposizioni-semplici.html"]},
                {"type": "mc", "q": "La lezione comincia ___ nove.", "opts": ["alle", "in", "da", "a"], "ans": 0, "level": "starter", "theme": "preposizioni-tempo", "ruleHint": "Usa 'alle' per indicare l'ora esatta.", "practice_links": ["grammatica-italiana/topics/preposizioni-tempo.html"]},
                {"type": "mc", "q": "___ molte persone in piazza.", "opts": ["Ci sono", "C'è", "C'era", "Ci sarà"], "ans": 0, "level": "starter", "theme": "c-e-ci-sono", "ruleHint": "Usa \"Ci sono\" per il plurale.", "practice_links": ["grammatica-italiana/topics/c-e-ci-sono.html"]},
                {"type": "mc", "q": "___ una gatta sul divano.", "opts": ["C'è", "Ci sono", "Ci erano", "Ce n'è"], "ans": 0, "level": "starter", "theme": "c-e-ci-sono", "ruleHint": "Usa 'C'è' per il singolare.", "practice_links": ["grammatica-italiana/topics/c-e-ci-sono.html"]},
                {"type": "mc", "q": "Una bella ___.", "opts": ["ragazza", "ragazzo", "ragazzi", "ragazze"], "ans": 0, "level": "starter", "theme": "genere-nomi", "ruleHint": "I nomi femminili singolari terminano spesso in -a.", "practice_links": ["grammatica-italiana/topics/genere-nomi.html"]},
                {"type": "mc", "q": "___ andiamo al mare domani.", "opts": ["Noi", "Voi", "Loro", "Lui"], "ans": 0, "level": "starter", "theme": "pronomi-personali", "ruleHint": "Pronome personale soggetto di 1a persona plurale.", "practice_links": ["grammatica-italiana/topics/pronomi-personali.html"]},
                {"type": "mc", "q": "Tutti i giorni Marco ___ l'italiano.", "opts": ["studia", "studiare", "studiano", "studiamo"], "ans": 0, "level": "starter", "theme": "presente-regolare", "ruleHint": "3a persona singolare del presente indicativo.", "practice_links": ["grammatica-italiana/topics/presente-regolare.html"]},
                {"type": "mc", "q": "Ieri sera noi ___ la pizza.", "opts": ["abbiamo mangiato", "mangiamo", "mangiavano", "avete mangiato"], "ans": 0, "level": "elementary", "theme": "passato-prossimo", "ruleHint": "Passato prossimo con l'ausiliare avere.", "practice_links": ["grammatica-italiana/topics/passato-prossimo.html"]},
                {"type": "mc", "q": "Mentre io studiavo, il telefono ___.", "opts": ["ha squillato", "squillava", "squilla", "aveva squillato"], "ans": 0, "level": "intermediate", "theme": "passato-prossimo-vs-imperfetto", "ruleHint": "Un'azione interrotta nel passato richiede il passato prossimo.", "practice_links": ["grammatica-italiana/topics/passato-prossimo-vs-imperfetto.html"]},
                {"type": "mc", "q": "Non ___ venire alla festa stasera.", "opts": ["posso", "sapere", "dover", "volere"], "ans": 0, "level": "starter", "theme": "verbi-modali", "ruleHint": "Forma coniugata del verbo potere alla 1a persona singolare.", "practice_links": ["grammatica-italiana/topics/verbi-modali.html"]},
                {"type": "mc", "q": "___ libro che ho in mano è molto bello.", "opts": ["Questo", "Quello", "Questi", "Quelle"], "ans": 0, "level": "starter", "theme": "dimostrativi", "ruleHint": "\"Questo\" si usa per oggetti vicini a chi parla.", "practice_links": ["grammatica-italiana/topics/dimostrativi.html"]},
                {"type": "mc", "q": "Vedi ___ casa in fondo alla strada?", "opts": ["quella", "questa", "queste", "quelli"], "ans": 0, "level": "starter", "theme": "dimostrativi", "ruleHint": "\"Quella\" si usa per oggetti lontani.", "practice_links": ["grammatica-italiana/topics/dimostrativi.html"]},
                {"type": "mc", "q": "Studia molto ___ vuole superare l'esame.", "opts": ["perché", "ma", "sebbene", "se"], "ans": 0, "level": "elementary", "theme": "congiunzioni-fondamentali", "ruleHint": "Usa 'perché' per esprimere una causa o spiegazione.", "practice_links": ["grammatica-italiana/topics/congiunzioni-fondamentali.html"]},
                {"type": "mc", "q": "La Roma è più antica ___ Milano.", "opts": ["di", "che", "da", "in"], "ans": 0, "level": "elementary", "theme": "comparativo-superlativo", "ruleHint": "Usa \"di\" davanti a un secondo termine di paragone nome proprio.", "practice_links": ["grammatica-italiana/topics/comparativo-superlativo.html"]},
                {"type": "mc", "q": "___ la finestra, per favore!", "opts": ["Apri", "Aprire", "Aprirei", "Apriresti"], "ans": 0, "level": "starter", "theme": "imperativo", "ruleHint": "Imperativo diretto di 2a persona singolare (tu).", "practice_links": ["grammatica-italiana/topics/imperativo.html"]},
                {"type": "mc", "q": "___ ti chiami?", "opts": ["Come", "Chi", "Cosa", "Dove"], "ans": 0, "level": "starter", "theme": "interrogativi", "ruleHint": "\"Come\" si usa per chiedere il nome.", "practice_links": ["grammatica-italiana/topics/interrogativi.html"]},
                {"type": "mc", "q": "___ abiti?", "opts": ["Dove", "Come", "Quando", "Perché"], "ans": 0, "level": "starter", "theme": "interrogativi", "ruleHint": "\"Dove\" si usa per chiedere il luogo di residenza.", "practice_links": ["grammatica-italiana/topics/interrogativi.html"]},
                {"type": "mc", "q": "I fiori nel giardino sono ___.", "opts": ["bellissimi", "bellissimo", "bella", "bellissima"], "ans": 0, "level": "starter", "theme": "aggettivi-qualificativi", "ruleHint": "L'aggettivo concorda in genere e numero col nome maschile plurale.", "practice_links": ["grammatica-italiana/topics/aggettivi-qualificativi.html"]},
                {"type": "mc", "q": "___ sole splende in cielo.", "opts": ["Il", "La", "Lo", "I"], "ans": 0, "level": "starter", "theme": "articoli-determinativi", "ruleHint": "Articolo determinativo maschile singolare davanti a consonante semplice.", "practice_links": ["grammatica-italiana/topics/articoli-determinativi.html"]},
                {"type": "mc", "q": "Vorrei ___ caffè, per favore.", "opts": ["un", "uno", "una", "un'"], "ans": 0, "level": "starter", "theme": "articoli-indeterminativi", "ruleHint": "Articolo indeterminativo maschile davanti a consonante.", "practice_links": ["grammatica-italiana/topics/articoli-indeterminativi.html"]},
                {"type": "mc", "q": "L'anno prossimo io ___ in Italia.", "opts": ["andrò", "vado", "andare", "andavo"], "ans": 0, "level": "elementary", "theme": "futuro-semplice", "ruleHint": "Futuro semplice prima persona singolare del verbo andare.", "practice_links": ["grammatica-italiana/topics/essere-avere.html"]}
            ]
        },
        RU: {
            Vocabulary: [
                { type:'mc', q:'"брат" = ?', opts:['Сын тех же родителей','Дальний родственник','Друг детства','Сестра'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"древний" ≠ ?', opts:['Современный','Старый','Исторический','Античный'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'mc', q:'"уютный" = ?', opts:['Удобный, тепло устраивающий','Холодный','Далекий','Опасный'], ans:0, level:'intermediate', theme:'Daily Life' },
                { type:'tf', q:'"быстрый" = "очень медленный"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                {"type": "mc", "q": "Иван — ___.", "opts": ["врач", "быть врач", "есть врач", "была врач"], "ans": 0, "level": "starter", "theme": "bez-glagola-byt", "ruleHint": "В настоящем времени глагол \"быть\" обычно опускается.", "practice_links": ["grammatika-russkogo-yazyka/topics/bez-glagola-byt.html"]},
                {"type": "mc", "q": "Здравствуйте, Анна Сергеевна! Как ___ дела?", "opts": ["ваши", "твои", "его", "ее"], "ans": 0, "level": "starter", "theme": "ty-i-vy", "ruleHint": "Форма вежливого обращения на \"Вы\".", "practice_links": ["grammatika-russkogo-yazyka/topics/ty-i-vy.html"]},
                {"type": "mc", "q": "Я ___ читаю книги по вечерам.", "opts": ["часто", "частый", "частая", "частые"], "ans": 0, "level": "starter", "theme": "narechiya-chastoty", "ruleHint": "Наречие частоты отвечает на вопрос \"как часто?\".", "practice_links": ["grammatika-russkogo-yazyka/topics/narechiya-chastoty.html"]},
                {"type": "mc", "q": "Книга лежит на ___.", "opts": ["столе", "стол", "стола", "столом"], "ans": 0, "level": "starter", "theme": "predlozhnyy-padezh", "ruleHint": "Предложный падеж места с предлогом \"на\".", "practice_links": ["grammatika-russkogo-yazyka/topics/predlozhnyy-padezh.html"]},
                {"type": "mc", "q": "Мы живем в ___.", "opts": ["Москве", "Москва", "Москву", "Москвой"], "ans": 0, "level": "starter", "theme": "predlozhnyy-padezh", "ruleHint": "Предложный падеж названий городов с предлогом \"в\".", "practice_links": ["grammatika-russkogo-yazyka/topics/predlozhnyy-padezh.html"]},
                {"type": "mc", "q": "Я вижу ___.", "opts": ["собаку", "собака", "собаке", "собакой"], "ans": 0, "level": "starter", "theme": "vinitelnyy-padezh", "ruleHint": "Винительный падеж неодушевленного/одушевленного существительного женского рода.", "practice_links": ["grammatika-russkogo-yazyka/topics/vinitelnyy-padezh.html"]},
                {"type": "mc", "q": "У меня нет ___.", "opts": ["времени", "время", "временем", "времена"], "ans": 0, "level": "elementary", "theme": "roditelnyy-padezh", "ruleHint": "Отрицание с помощью слова \"нет\" требует родительного падежа.", "practice_links": ["grammatika-russkogo-yazyka/topics/roditelnyy-padezh.html"]},
                {"type": "mc", "q": "Стакан ___.", "opts": ["воды", "вода", "воду", "водой"], "ans": 0, "level": "starter", "theme": "roditelnyy-padezh", "ruleHint": "Родительный падеж количества.", "practice_links": ["grammatika-russkogo-yazyka/topics/roditelnyy-padezh.html"]},
                {"type": "mc", "q": "Я звоню ___.", "opts": ["другу", "друг", "друга", "другом"], "ans": 0, "level": "elementary", "theme": "datelnyy-padezh", "ruleHint": "Глагол звонить требует дательного падежа (кому?).", "practice_links": ["grammatika-russkogo-yazyka/topics/datelnyy-padezh.html"]},
                {"type": "mc", "q": "Он работает ___.", "opts": ["инженером", "инженер", "инженера", "инженеру"], "ans": 0, "level": "elementary", "theme": "tvoritelnyy-padezh", "ruleHint": "Глагол работать требует творительного падежа (кем?).", "practice_links": ["grammatika-russkogo-yazyka/topics/tvoritelnyy-padezh.html"]},
                {"type": "mc", "q": "Каждое утро я ___ на работу пешком.", "opts": ["хожу", "иду", "пошел", "поеду"], "ans": 0, "level": "elementary", "theme": "glagoly-dvizheniya", "ruleHint": "Повторяющееся движение пешком требование глагола хожу.", "practice_links": ["grammatika-russkogo-yazyka/topics/glagoly-dvizheniya.html"]},
                {"type": "mc", "q": "Сейчас я ___ в магазин.", "opts": ["иду", "хожу", "поеду", "езжу"], "ans": 0, "level": "starter", "theme": "glagoly-dvizheniya", "ruleHint": "Движение в данный момент пешком требует глагола иду.", "practice_links": ["grammatika-russkogo-yazyka/topics/glagoly-dvizheniya.html"]},
                {"type": "mc", "q": "Здесь ___ курить.", "opts": ["нельзя", "можно", "нужно", "должен"], "ans": 0, "level": "starter", "theme": "mozhno-nelzya-nuzhno", "ruleHint": "Предикатив запрета.", "practice_links": ["grammatika-russkogo-yazyka/topics/mozhno-nelzya-nuzhno.html"]},
                {"type": "mc", "q": "Мне ___ купить хлеб.", "opts": ["нужно", "нельзя", "можно", "надо бы"], "ans": 0, "level": "starter", "theme": "mozhno-nelzya-nuzhno", "ruleHint": "Выражение необходимости.", "practice_links": ["grammatika-russkogo-yazyka/topics/mozhno-nelzya-nuzhno.html"]},
                {"type": "mc", "q": "Завтра мы ___ отдыхать.", "opts": ["будем", "были", "есть", "будет"], "ans": 0, "level": "starter", "theme": "budushchee-vremya", "ruleHint": "Составное будущее время с глаголом быть.", "practice_links": ["grammatika-russkogo-yazyka/topics/budushchee-vremya.html"]},
                {"type": "mc", "q": "Если завтра будет хорошая погода, мы ___ в парк.", "opts": ["пойдём", "пошли", "ходили", "идти"], "ans": 0, "level": "elementary", "theme": "esli-realnoe-uslovie", "ruleHint": "Реальное условие в будущем.", "practice_links": ["grammatika-russkogo-yazyka/topics/esli-realnoe-uslovie.html"]},
                {"type": "mc", "q": "У меня есть два ___.", "opts": ["брата", "брат", "братьев", "братом"], "ans": 0, "level": "starter", "theme": "chislitelnye-i-padezh", "ruleHint": "Числительные 2, 3, 4 требуют родительного падежа единственного числа.", "practice_links": ["grammatika-russkogo-yazyka/topics/chislitelnye-i-padezh.html"]},
                {"type": "mc", "q": "В комнате пять ___.", "opts": ["стульев", "стула", "стул", "стульями"], "ans": 0, "level": "elementary", "theme": "chislitelnye-i-padezh", "ruleHint": "Числительные от 5 и выше требуют родительного падежа множественного числа.", "practice_links": ["grammatika-russkogo-yazyka/topics/chislitelnye-i-padezh.html"]},
                {"type": "mc", "q": "Эльбрус — ___ гора в нашей стране.", "opts": ["самая высокая", "высокий", "выше", "высоко"], "ans": 0, "level": "intermediate", "theme": "prevoskhodnaya-stepen", "ruleHint": "Превосходная степень прилагательных с \"самая\".", "practice_links": ["grammatika-russkogo-yazyka/topics/prevoskhodnaya-stepen.html"]},
                {"type": "mc", "q": "___ студент должен сдать экзамен.", "opts": ["Каждый", "Весь", "Все", "Никто"], "ans": 0, "level": "starter", "theme": "ves-kazhdyy-nikto-nishto", "ruleHint": "Определительное местоимение каждый.", "practice_links": ["grammatika-russkogo-yazyka/topics/ves-kazhdyy-nikto-nishto.html"]},
                {"type": "mc", "q": "Я ___ заказать чай, пожалуйста.", "opts": ["хотел бы", "хочу бы", "хотеть", "хочешь"], "ans": 0, "level": "starter", "theme": "ya-khotel-by-khotite", "ruleHint": "Вежливая просьба с помощью сослагательного наклонения.", "practice_links": ["grammatika-russkogo-yazyka/topics/ya-khotel-by-khotite.html"]},
                {"type": "mc", "q": "Он сказал, ___ приедет завтра.", "opts": ["что", "чтобы", "будто", "как"], "ans": 0, "level": "intermediate", "theme": "pryamaya-i-kosvennaya-rech", "ruleHint": "Союз \"что\" в косвенной речи.", "practice_links": ["grammatika-russkogo-yazyka/topics/pryamaya-i-kosvennaya-rech.html"]}
            ]
        },
        EL: {
            Vocabulary: [
                { type:'mc', q:'"αδελφός" = ?', opts:['Ο γιος των ίδιων γονέων','Ένας γονέας','Ένας ξάδελφος','Ένας φίλος'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"αρχαίος" ≠ ?', opts:['Σύγχρονος','Παλιός','Ιστορικός','Αντίκα'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'mc', q:'"φιλόξενος" = ?', opts:['Ζεστός και φιλόφρων με τους καλεσμένους','Απρόσιτος','Επιθετικός','Αδιάφορος'], ans:0, level:'intermediate', theme:'Daily Life' },
                { type:'tf', q:'"γρήγορος" = "πολύ αργός"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                {"type": "mc", "q": "Εγώ ___ ένα βιβλίο.", "opts": ["έχω", "έχει", "έχουμε", "έχουν"], "ans": 0, "level": "starter", "theme": "to-rima-echo", "ruleHint": "1ο πρόσωπο ενικού του ρήματος έχω.", "practice_links": ["elliniki-grammatiki/topics/to-rima-echo.html"]},
                {"type": "mc", "q": "Πώς ___ λένε;", "opts": ["σε", "με", "τον", "την"], "ans": 0, "level": "starter", "theme": "pos-se-lene", "ruleHint": "Προσωπική αντωνυμία αιτιατικής για το 2ο πρόσωπο.", "practice_links": ["elliniki-grammatiki/topics/pos-se-lene.html"]},
                {"type": "mc", "q": "___ ο πατέρας είναι στο σπίτι.", "opts": ["Ο", "Η", "Το", "Οι"], "ans": 0, "level": "starter", "theme": "to-genos-ton-ousiastikon", "ruleHint": "Οριστικό άρθρο αρσενικού γένους στον ενικό.", "practice_links": ["elliniki-grammatiki/topics/to-genos-ton-ousiastikon.html"]},
                {"type": "mc", "q": "___ μητέρα μαγειρεύει.", "opts": ["Η", "Ο", "Το", "Οι"], "ans": 0, "level": "starter", "theme": "to-genos-ton-ousiastikon", "ruleHint": "Οριστικό άρθρο θηλυκού γένους στον ενικό.", "practice_links": ["elliniki-grammatiki/topics/to-genos-ton-ousiastikon.html"]},
                {"type": "mc", "q": "___ παιδί παίζει στο πάρκο.", "opts": ["Το", "Ο", "Η", "Τα"], "ans": 0, "level": "starter", "theme": "to-genos-ton-ousiastikon", "ruleHint": "Οριστικό άρθρο ουδέτερου γένους στον ενικό.", "practice_links": ["elliniki-grammatiki/topics/to-genos-ton-ousiastikon.html"]},
                {"type": "mc", "q": "Αυτοί ___ ελληνικά.", "opts": ["μιλάνε", "μιλάω", "μιλάς", "μιλάει"], "ans": 0, "level": "starter", "theme": "enestotas-omada-a", "ruleHint": "3ο πρόσωπο πληθυντικού ενεστώτα.", "practice_links": ["elliniki-grammatiki/topics/enestotas-omada-a.html"]},
                {"type": "mc", "q": "Το βιβλίο είναι ___ στο τραπέζι.", "opts": ["πάνω", "κάτω", "μέσα", "πίσω"], "ans": 0, "level": "starter", "theme": "vasikes-protheseis", "ruleHint": "Το επίρρημα πάνω δηλώνει θέση στην επιφάνεια.", "practice_links": ["elliniki-grammatiki/topics/vasikes-protheseis.html"]},
                {"type": "mc", "q": "Πηγαίνω ___ γραφείο.", "opts": ["στο", "στην", "στα", "στον"], "ans": 0, "level": "starter", "theme": "vasikes-protheseis", "ruleHint": "Σύνθετη πρόθεση σε + το (ουδέτερο).", "practice_links": ["elliniki-grammatiki/topics/vasikes-protheseis.html"]},
                {"type": "mc", "q": "___ να διαβάσεις για τις εξετάσεις.", "opts": ["Πρέπει", "Μπορεί", "Θέλει", "Γίνεται"], "ans": 0, "level": "starter", "theme": "prepei", "ruleHint": "Το απρόσωπο ρήμα πρέπει εκφράζει υποχρέωση.", "practice_links": ["elliniki-grammatiki/topics/prepei.html"]},
                {"type": "mc", "q": "Ο Αλέξανδρος είναι ___ ψηλός από τον Νίκο.", "opts": ["πιο", "πολύ", "πλέον", "μάλλον"], "ans": 0, "level": "elementary", "theme": "synkritikos-vathmos", "ruleHint": "Το πιο χρησιμοποιείται για τη σύγκριση.", "practice_links": ["elliniki-grammatiki/topics/synkritikos-vathmos.html"]},
                {"type": "mc", "q": "Χθες εγώ ___ στο τηλέφωνο.", "opts": ["μίλησα", "μιλάω", "θα μιλήσω", "μίλαγα"], "ans": 0, "level": "elementary", "theme": "aoristos-kanonika-rimata", "ruleHint": "Αόριστος 1ου προσώπου ενικού.", "practice_links": ["elliniki-grammatiki/topics/aoristos-kanonika-rimata.html"]},
                {"type": "mc", "q": "Αυτό είναι το αυτοκίνητο ___ Μαρίας.", "opts": ["της", "τη", "την", "των"], "ans": 0, "level": "starter", "theme": "tinos-i-ktitiki-ptosi", "ruleHint": "Γενική πτώση θηλυκού άρθρου για κατοχή.", "practice_links": ["elliniki-grammatiki/topics/tinos-i-ktitiki-ptosi.html"]},
                {"type": "mc", "q": "Ο ___ μαθητής διαβάζει πολύ.", "opts": ["καλός", "καλή", "καλό", "καλοί"], "ans": 0, "level": "starter", "theme": "epitheta-kai-symfonia", "ruleHint": "Συμφωνία επιθέτου με αρσενικό ουσιαστικό.", "practice_links": ["elliniki-grammatiki/topics/epitheta-kai-symfonia.html"]},
                {"type": "mc", "q": "Βλέπω ___ φίλο μου.", "opts": ["τον", "ο", "του", "τω"], "ans": 0, "level": "starter", "theme": "to-systima-ton-ptoseon", "ruleHint": "Αιτιατική πτώση αρσενικού άρθρου.", "practice_links": ["elliniki-grammatiki/topics/to-systima-ton-ptoseon.html"]},
                {"type": "mc", "q": "Εγώ ___ κάθε πρωί στις 7.", "opts": ["ξυπνάω", "ξυπνιέμαι", "ξύπνησα", "θα ξυπνήσω"], "ans": 0, "level": "elementary", "theme": "rimata-se-amai", "ruleHint": "Ενεστώτας 1ου προσώπου ενεργητικής φωνής.", "practice_links": ["elliniki-grammatiki/topics/rimata-se-amai.html"]},
                {"type": "mc", "q": "Εγώ ___ στο σπίτι χθες.", "opts": ["πήγα", "πάω", "θα πάω", "πηγαίνω"], "ans": 0, "level": "elementary", "theme": "anomala-rimata-2", "ruleHint": "Αόριστος του ανώμαλου ρήματος πηγαίνω.", "practice_links": ["elliniki-grammatiki/topics/anomala-rimata-2.html"]},
                {"type": "mc", "q": "Η Μαρία ___ ένα μήλο.", "opts": ["τρώει", "φαγητό", "μήλο", "τρώγεται"], "ans": 0, "level": "starter", "theme": "vasiki-seira-lexeon", "ruleHint": "Βασική σειρά λέξεων: Υποκείμενο - Ρήμα - Αντικείμενο.", "practice_links": ["elliniki-grammatiki/topics/vasiki-seira-lexeon.html"]},
                {"type": "mc", "q": "Η ελληνική γλώσσα έχει μεγάλη ___.", "opts": ["ιστορία", "ιστορικός", "ιστορικά", "ιστορίες"], "ans": 0, "level": "starter", "theme": "i-elliniki-ston-kosmo-1", "ruleHint": "Ουσιαστικό θηλυκού γένους σε αιτιατική.", "practice_links": ["elliniki-grammatiki/topics/i-elliniki-ston-kosmo-1.html"]},
                {"type": "mc", "q": "Aύριο αυτή την ώρα ___ στην παραλία.", "opts": ["θα κολυμπάω", "κολύμπησα", "κολυμπάω", "έχω κολυμπήσει"], "ans": 0, "level": "elementary", "theme": "enestotas-omada-a", "ruleHint": "Εξακολουθητικός μέλλοντας.", "practice_links": ["elliniki-grammatiki/topics/enestotas-omada-a.html"]},
                {"type": "mc", "q": "Θέλω ___ μάθω ελληνικά.", "opts": ["να", "για", "που", "ότι"], "ans": 0, "level": "starter", "theme": "prepei", "ruleHint": "Υποτακτική με το μόριο να.", "practice_links": ["elliniki-grammatiki/topics/prepei.html"]},
                {"type": "mc", "q": "___ μου αρέσει η μουσική.", "opts": ["Εμένα", "Εγώ", "Εμένανε", "Εμού"], "ans": 0, "level": "starter", "theme": "pos-se-lene", "ruleHint": "Έντονος τύπος προσωπικής αντωνυμίας.", "practice_links": ["elliniki-grammatiki/topics/pos-se-lene.html"]},
                {"type": "mc", "q": "Ένας άντρας και ___ γυναίκα.", "opts": ["μία", "ένας", "ένα", "οι"], "ans": 0, "level": "starter", "theme": "to-genos-ton-ousiastikon", "ruleHint": "Αόριστο άρθρο θηλυκού γένους.", "practice_links": ["elliniki-grammatiki/topics/to-genos-ton-ousiastikon.html"]}
            ]
        },
        ES: {
            Vocabulary: [
                {"type": "mc", "q": "\"hermano\" = ?", "opts": ["El hijo de los mismos padres", "Un pariente lejano", "Un amigo de la infancia", "Una hermana"], "ans": 0, "level": "starter", "theme": "Family"},
                {"type": "mc", "q": "\"antiguo\" ≠ ?", "opts": ["Moderno", "Viejo", "Histórico", "Anticuado"], "ans": 0, "level": "elementary", "theme": "Arts & Culture"},
                {"type": "mc", "q": "\"acogedor\" = ?", "opts": ["Cálido y confortable", "Frío", "Lejano", "Peligroso"], "ans": 0, "level": "intermediate", "theme": "Daily Life"},
                {"type": "tf", "q": "\"rápido\" = \"muy lento\"", "ans": false, "level": "starter", "theme": "Daily Life"}
            ],
            Grammar: [
                {"type": "mc", "q": "El libro está ___ la mesa.", "opts": ["sobre", "en", "a", "por"], "ans": 0, "level": "starter", "theme": "articulos-definidos", "ruleHint": "Usa \"sobre\" para indicar una superficie.", "practice_links": ["gramatica-espanola/topics/articulos-definidos.html"]},
                {"type": "mc", "q": "Juan es ___ profesor de español.", "opts": ["un", "el", "uno", "del"], "ans": 0, "level": "starter", "theme": "articulos-definidos", "ruleHint": "Artículo indefinido masculino singular.", "practice_links": ["gramatica-espanola/topics/articulos-definidos.html"]},
                {"type": "mc", "q": "Un perro, dos ___ .", "opts": ["perros", "perro", "perrose", "perrosen"], "ans": 0, "level": "starter", "theme": "plural-sustantivos", "ruleHint": "Formación del plural añadiendo -s a palabras terminadas en vocal.", "practice_links": ["gramatica-espanola/topics/plural-sustantivos.html"]},
                {"type": "mc", "q": "Una mujer, dos ___ .", "opts": ["mujeres", "mujers", "mujerese", "mujeron"], "ans": 0, "level": "starter", "theme": "plural-sustantivos", "ruleHint": "Formación del plural añadiendo -es a palabras terminadas en consonante.", "practice_links": ["gramatica-espanola/topics/plural-sustantivos.html"]},
                {"type": "mc", "q": "___ soy estudiante de la universidad.", "opts": ["Yo", "Tú", "Él", "Nosotros"], "ans": 0, "level": "starter", "theme": "pronombres-personales", "ruleHint": "Pronombre personal sujeto de primera persona del singular.", "practice_links": ["gramatica-espanola/topics/pronombres-personales.html"]},
                {"type": "mc", "q": "___ vivimos en Madrid.", "opts": ["Nosotros", "Yo", "Ella", "Ellos"], "ans": 0, "level": "starter", "theme": "pronombres-personales", "ruleHint": "Pronombre personal sujeto de primera persona del plural.", "practice_links": ["gramatica-espanola/topics/pronombres-personales.html"]},
                {"type": "mc", "q": "María ___ médica en el hospital.", "opts": ["es", "está", "ser", "estar"], "ans": 0, "level": "starter", "theme": "ser-vs-estar", "ruleHint": "Usa \"ser\" para profesiones e identidad permanente.", "practice_links": ["gramatica-espanola/topics/ser-vs-estar.html"]},
                {"type": "mc", "q": "El café ___ muy caliente hoy.", "opts": ["está", "es", "ser", "estar"], "ans": 0, "level": "starter", "theme": "ser-vs-estar", "ruleHint": "Usa \"estar\" para estados temporales.", "practice_links": ["gramatica-espanola/topics/ser-vs-estar.html"]},
                {"type": "mc", "q": "___ casa es muy grande y limpia.", "opts": ["Mi", "Mío", "Mis", "Yo"], "ans": 0, "level": "starter", "theme": "posesivos", "ruleHint": "Adjetivo posesivo átono de primera persona del singular.", "practice_links": ["gramatica-espanola/topics/posesivos.html"]},
                {"type": "mc", "q": "___ coche está aparcado allí.", "opts": ["Este", "Esto", "Esta", "Estos"], "ans": 0, "level": "starter", "theme": "demostrativos", "ruleHint": "Demostrativo de cercanía masculino singular.", "practice_links": ["gramatica-espanola/topics/demostrativos.html"]},
                {"type": "mc", "q": "___ persona que ves allá es mi hermana.", "opts": ["Aquella", "Esta", "Esa", "Aquel"], "ans": 0, "level": "starter", "theme": "demostrativos", "ruleHint": "Demostrativo de lejanía femenino singular.", "practice_links": ["gramatica-espanola/topics/demostrativos.html"]},
                {"type": "mc", "q": "¿___ está la estación de tren?", "opts": ["Dónde", "Qué", "Quién", "Cuándo"], "ans": 0, "level": "starter", "theme": "interrogativos", "ruleHint": "Pronombre interrogativo de lugar.", "practice_links": ["gramatica-espanola/topics/interrogativos.html"]},
                {"type": "mc", "q": "¿___ te llamas?", "opts": ["Cómo", "Qué", "Dónde", "Por qué"], "ans": 0, "level": "starter", "theme": "interrogativos", "ruleHint": "Interrogativo de modo.", "practice_links": ["gramatica-espanola/topics/interrogativos.html"]},
                {"type": "mc", "q": "Estudio español ___ me gusta la cultura.", "opts": ["porque", "pero", "aunque", "si"], "ans": 0, "level": "elementary", "theme": "conjunciones-basicas", "ruleHint": "Conjunción causal.", "practice_links": ["gramatica-espanola/topics/conjunciones-basicas.html"]},
                {"type": "mc", "q": "Quería salir, ___ estaba lloviendo.", "opts": ["pero", "porque", "y", "o"], "ans": 0, "level": "elementary", "theme": "conjunciones-basicas", "ruleHint": "Conjunción adversativa.", "practice_links": ["gramatica-espanola/topics/conjunciones-basicas.html"]},
                {"type": "mc", "q": "El Everest es ___ alto que el Mont Blanc.", "opts": ["más", "tan", "mucho", "muy"], "ans": 0, "level": "elementary", "theme": "comparativo-superlativo", "ruleHint": "Comparativo de superioridad.", "practice_links": ["gramatica-espanola/topics/comparativo-superlativo.html"]},
                {"type": "mc", "q": "Hoy ___ a las 7 de la mañana.", "opts": ["me he levantado", "me levanto", "me levantaré", "me levantara"], "ans": 0, "level": "elementary", "theme": "pretérito-perfecto", "ruleHint": "Pretérito perfecto compuesto para acciones pasadas en tiempo no terminado.", "practice_links": ["gramatica-espanola/topics/pretérito-perfecto.html"]},
                {"type": "mc", "q": "Ayer ___ una película excelente.", "opts": ["vi", "he visto", "veo", "veré"], "ans": 0, "level": "elementary", "theme": "pretérito-indefinido", "ruleHint": "Pretérito indefinido para acciones completadas en el pasado.", "practice_links": ["gramatica-espanola/topics/preterito-indefinido-vs-perfecto.html"]},
                {"type": "mc", "q": "Cuando era niño, ___ al fútbol todos los días.", "opts": ["jugaba", "jugué", "he jugado", "jugaré"], "ans": 0, "level": "elementary", "theme": "pretérito-imperfecto", "ruleHint": "Pretérito imperfecto para acciones habituales en el pasado.", "practice_links": ["gramatica-espanola/topics/preterito-indefinido-vs-perfecto.html"]},
                {"type": "mc", "q": "Mañana ___ mi nuevo trabajo.", "opts": ["empezaré", "empecé", "empezaba", "he empezado"], "ans": 0, "level": "elementary", "theme": "futuro-simple", "ruleHint": "Futuro simple para acciones futuras.", "practice_links": ["gramatica-espanola/topics/presente-indicativo.html"]},
                {"type": "mc", "q": "¡___ la puerta, por favor!", "opts": ["Abre", "Abrir", "Abres", "Abras"], "ans": 0, "level": "starter", "theme": "imperativo", "ruleHint": "Imperativo afirmativo segunda persona singular (tú).", "practice_links": ["gramatica-espanola/topics/imperativo.html"]},
                {"type": "mc", "q": "Me gusta ___ música clásica.", "opts": ["escuchar", "escucho", "escuché", "escuchando"], "ans": 0, "level": "starter", "theme": "verbo-gustar", "ruleHint": "El verbo gustar seguido de infinitivo.", "practice_links": ["gramatica-espanola/topics/presente-indicativo.html"]}
            ]
        },
        DE: {
            Vocabulary: [
                {"type": "mc", "q": "\"Bruder\" = ?", "opts": ["Sohn derselben Eltern", "Ein entfernter Verwandter", "Ein Kindheitsfreund", "Schwester"], "ans": 0, "level": "starter", "theme": "Family"},
                {"type": "mc", "q": "\"alt\" ≠ ?", "opts": ["Neu", "Antik", "Historisch", "Bejahrt"], "ans": 0, "level": "elementary", "theme": "Arts & Culture"},
                {"type": "mc", "q": "\"gemütlich\" = ?", "opts": ["Angenehm und behaglich", "Kalt", "Gefährlich", "Laut"], "ans": 0, "level": "intermediate", "theme": "Daily Life"},
                {"type": "tf", "q": "\"schnell\" = \"sehr langsam\"", "ans": false, "level": "starter", "theme": "Daily Life"}
            ],
            Grammar: [
                {"type": "mc", "q": "___ Mann geht im Park spazieren.", "opts": ["Der", "Die", "Das", "Den"], "ans": 0, "level": "starter", "theme": "der-die-das", "ruleHint": "Bestimmter Artikel für maskuline Nomen im Nominativ.", "practice_links": ["deutsche-grammatik/topics/artikel-und-genus.html"]},
                {"type": "mc", "q": "___ Frau liest ein Buch.", "opts": ["Die", "Der", "Das", "Den"], "ans": 0, "level": "starter", "theme": "der-die-das", "ruleHint": "Bestimmter Artikel für feminine Nomen im Nominativ.", "practice_links": ["deutsche-grammatik/topics/artikel-und-genus.html"]},
                {"type": "mc", "q": "___ Kind spielt im Garten.", "opts": ["Das", "Der", "Die", "Dem"], "ans": 0, "level": "starter", "theme": "der-die-das", "ruleHint": "Bestimmter Artikel für neutrale Nomen im Nominativ.", "practice_links": ["deutsche-grammatik/topics/artikel-und-genus.html"]},
                {"type": "mc", "q": "___ lerne seit zwei Monaten Deutsch.", "opts": ["Ich", "Du", "Er", "Wir"], "ans": 0, "level": "starter", "theme": "personalpronomen", "ruleHint": "Personalpronomen 1. Person Singular.", "practice_links": ["deutsche-grammatik/topics/personalpronomen.html"]},
                {"type": "mc", "q": "Wir ___ in Berlin.", "opts": ["wohnen", "wohne", "wohnst", "wohnt"], "ans": 0, "level": "starter", "theme": "praesens-regelmaessig", "ruleHint": "Verbkonjugation 1. Person Plural Präsens.", "practice_links": ["deutsche-grammatik/topics/praesens-regelmaessig.html"]},
                {"type": "mc", "q": "Er ___ heute keine Zeit.", "opts": ["hat", "habe", "hast", "haben"], "ans": 0, "level": "starter", "theme": "sein-und-haben", "ruleHint": "Präsens von haben (3. Person Singular).", "practice_links": ["deutsche-grammatik/topics/sein-und-haben.html"]},
                {"type": "mc", "q": "Sie ___ Ärztin von Beruf.", "opts": ["ist", "sind", "seid", "bin"], "ans": 0, "level": "starter", "theme": "sein-und-haben", "ruleHint": "Präsens von sein (3. Person Singular).", "practice_links": ["deutsche-grammatik/topics/sein-und-haben.html"]},
                {"type": "mc", "q": "Ich habe ___ Buch gekauft.", "opts": ["ein", "eine", "einen", "eines"], "ans": 0, "level": "starter", "theme": "unbestimmter-artikel", "ruleHint": "Unbestimmter Artikel Akkusativ Neutrum.", "practice_links": ["deutsche-grammatik/topics/artikel-und-genus.html"]},
                {"type": "mc", "q": "Ich sehe ___ Hund im Park.", "opts": ["einen", "ein", "eine", "einem"], "ans": 0, "level": "starter", "theme": "akkusativ", "ruleHint": "Akkusativ Maskulinum von ein.", "practice_links": ["deutsche-grammatik/topics/nominativ-und-akkusativ.html"]},
                {"type": "mc", "q": "Das Buch liegt auf ___ Tisch.", "opts": ["dem", "den", "der", "das"], "ans": 0, "level": "starter", "theme": "dativ", "ruleHint": "Dativ Maskulinum nach der Wechselpräposition auf (Ortsangabe).", "practice_links": ["deutsche-grammatik/topics/dativ-kasus.html"]},
                {"type": "mc", "q": "Das ist ___ Buch, das ist mein Heft.", "opts": ["kein", "nicht", "nein", "ohne"], "ans": 0, "level": "starter", "theme": "negation-nicht-kein", "ruleHint": "Negation von Nomen ohne Artikel mit kein.", "practice_links": ["deutsche-grammatik/topics/negation-nicht-kein.html"]},
                {"type": "mc", "q": "Ich komme heute ___ zum Unterricht.", "opts": ["nicht", "kein", "keine", "nichts"], "ans": 0, "level": "starter", "theme": "negation-nicht-kein", "ruleHint": "Negation von Verben und Adverbien mit nicht.", "practice_links": ["deutsche-grammatik/topics/negation-nicht-kein.html"]},
                {"type": "mc", "q": "Heute ___ ich ins Kino.", "opts": ["gehe", "ich gehe", "gehe ich", "gehe es"], "ans": 0, "level": "starter", "theme": "wortstellung-v2", "ruleHint": "Inversion nach Temporaladverb (Verb an Position 2).", "practice_links": ["deutsche-grammatik/topics/wortstellung-v2.html"]},
                {"type": "mc", "q": "___ gibt ein großes Problem.", "opts": ["Es", "Das", "Er", "Sie"], "ans": 0, "level": "starter", "theme": "es-gibt", "ruleHint": "Unpersönlicher Ausdruck es gibt.", "practice_links": ["deutsche-grammatik/topics/es-gibt.html"]},
                {"type": "mc", "q": "___ bitte das Fenster!", "opts": ["Öffne", "Öffnen", "Öffnet", "Öffnest"], "ans": 0, "level": "starter", "theme": "imperativ", "ruleHint": "Imperativ Du-Form.", "practice_links": ["deutsche-grammatik/topics/imperativ.html"]},
                {"type": "mc", "q": "Der Eiffelturm ist höher ___ der Big Ben.", "opts": ["als", "wie", "dass", "denn"], "ans": 0, "level": "elementary", "theme": "komparativ-und-superlativ", "ruleHint": "Komparativ mit als.", "practice_links": ["deutsche-grammatik/topics/komparativ-und-superlativ.html"]},
                {"type": "mc", "q": "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", "opts": ["weil", "dass", "obwohl", "aber"], "ans": 0, "level": "elementary", "theme": "konjunktionen-grundlegend", "ruleHint": "Kausalangabe mit weil am Satzende.", "practice_links": ["deutsche-grammatik/topics/konjunktionen-grundlegend.html"]},
                {"type": "mc", "q": "Gestern ___ ich meine Großeltern besucht.", "opts": ["habe", "hatte", "bin", "sein"], "ans": 0, "level": "elementary", "theme": "perfekt", "ruleHint": "Perfekt mit haben.", "practice_links": ["deutsche-grammatik/topics/perfekt.html"]},
                {"type": "mc", "q": "Er ___ gestern nach Hause gefahren.", "opts": ["ist", "hat", "war", "wird"], "ans": 0, "level": "elementary", "theme": "perfekt", "ruleHint": "Perfekt mit sein bei Bewegungsverben.", "practice_links": ["deutsche-grammatik/topics/perfekt.html"]},
                {"type": "mc", "q": "Ich ___ morgen früh aufstehen.", "opts": ["muss", "müssen", "musste", "gemusst"], "ans": 0, "level": "starter", "theme": "modalverben", "ruleHint": "Modalverb müssen im Präsens.", "practice_links": ["deutsche-grammatik/topics/modalverben.html"]},
                {"type": "mc", "q": "___ Haus ist sehr alt.", "opts": ["Mein", "Meines", "Meinem", "Meinen"], "ans": 0, "level": "starter", "theme": "possessivpronomen", "ruleHint": "Possessivpronomen Nominativ Neutrum.", "practice_links": ["deutsche-grammatik/topics/possessivartikel.html"]},
                {"type": "mc", "q": "___ kommst du?", "opts": ["Woher", "Wohin", "Wo", "Warum"], "ans": 0, "level": "starter", "theme": "w-fragen", "ruleHint": "Fragewort für Herkunft.", "practice_links": ["deutsche-grammatik/topics/w-fragen-und-ja-nein-fragen.html"]}
            ]
        },
        PT: {
            Vocabulary: [
                {"type": "mc", "q": "\"irmão\" = ?", "opts": ["O filho dos mesmos pais", "Um parente distante", "Um amigo de infância", "Irmã"], "ans": 0, "level": "starter", "theme": "Family"},
                {"type": "mc", "q": "\"antigo\" ≠ ?", "opts": ["Moderno", "Velho", "Histórico", "Antiquado"], "ans": 0, "level": "elementary", "theme": "Arts & Culture"},
                {"type": "mc", "q": "\"acolhedor\" = ?", "opts": ["Quente e confortável", "Frio", "Distante", "Perigoso"], "ans": 0, "level": "intermediate", "theme": "Daily Life"},
                {"type": "tf", "q": "\"rápido\" = \"muito lento\"", "ans": false, "level": "starter", "theme": "Daily Life"}
            ],
            Grammar: [
                {"type": "mc", "q": "___ livro está sobre a mesa.", "opts": ["O", "A", "Os", "As"], "ans": 0, "level": "starter", "theme": "artigos-definidos", "ruleHint": "Artigo definido masculino singular.", "practice_links": ["gramatica-portuguesa/topics/artigos-definidos.html"]},
                {"type": "mc", "q": "___ casa fica no centro da cidade.", "opts": ["A", "O", "Uma", "As"], "ans": 0, "level": "starter", "theme": "artigos-definidos", "ruleHint": "Artigo definido feminino singular.", "practice_links": ["gramatica-portuguesa/topics/artigos-definidos.html"]},
                {"type": "mc", "q": "Comprei ___ livro novo ontem.", "opts": ["um", "uma", "uns", "umas"], "ans": 0, "level": "starter", "theme": "artigos-indefinidos", "ruleHint": "Artigo indefinido masculino singular.", "practice_links": ["gramatica-portuguesa/topics/artigos-definidos.html"]},
                {"type": "mc", "q": "Um livro, dois ___ .", "opts": ["livros", "livro", "livrose", "livrosen"], "ans": 0, "level": "starter", "theme": "plural-dos-substantivos", "ruleHint": "Plural regular adicionando -s a palavras terminadas em vogal.", "practice_links": ["gramatica-portuguesa/topics/plural-dos-substantivos.html"]},
                {"type": "mc", "q": "Uma mulher, duas ___ .", "opts": ["mulheres", "mulhers", "mulherese", "mulheron"], "ans": 0, "level": "starter", "theme": "plural-dos-substantivos", "ruleHint": "Plural adicionando -es a palavras terminadas em -r.", "practice_links": ["gramatica-portuguesa/topics/plural-dos-substantivos.html"]},
                {"type": "mc", "q": "___ sou professor de português.", "opts": ["Eu", "Tu", "Ele", "Nós"], "ans": 0, "level": "starter", "theme": "pronomes-pessoais", "ruleHint": "Pronome pessoal sujeito de primeira pessoa do singular.", "practice_links": ["gramatica-portuguesa/topics/pronomes-pessoais.html"]},
                {"type": "mc", "q": "___ moramos em Lisboa.", "opts": ["Nós", "Eu", "Ela", "Eles"], "ans": 0, "level": "starter", "theme": "pronomes-pessoais", "ruleHint": "Pronome pessoal sujeito de primeira pessoa do plural.", "practice_links": ["gramatica-portuguesa/topics/pronomes-pessoais.html"]},
                {"type": "mc", "q": "A Maria ___ médica no hospital.", "opts": ["é", "está", "ser", "estar"], "ans": 0, "level": "starter", "theme": "ser-vs-estar", "ruleHint": "Usa o verbo ser para profissões e caraterísticas permanentes.", "practice_links": ["gramatica-portuguesa/topics/ser-vs-estar.html"]},
                {"type": "mc", "q": "O café ___ muito quente.", "opts": ["está", "é", "ser", "estar"], "ans": 0, "level": "starter", "theme": "ser-vs-estar", "ruleHint": "Usa o verbo estar para estados temporários.", "practice_links": ["gramatica-portuguesa/topics/ser-vs-estar.html"]},
                {"type": "mc", "q": "___ casa é grande e bonita.", "opts": ["A minha", "O meu", "Minhas", "Meus"], "ans": 0, "level": "starter", "theme": "possessivos", "ruleHint": "Possessivo feminino singular.", "practice_links": ["gramatica-portuguesa/topics/possessivos.html"]},
                {"type": "mc", "q": "___ carro é novo.", "opts": ["Este", "Esta", "Isto", "Estes"], "ans": 0, "level": "starter", "theme": "demonstrativos", "ruleHint": "Demonstrativo de proximidade masculino singular.", "practice_links": ["gramatica-portuguesa/topics/demonstrativos.html"]},
                {"type": "mc", "q": "¿___ fica a estação de comboios?", "opts": ["Onde", "Como", "Quem", "Quando"], "ans": 0, "level": "starter", "theme": "interrogativos", "ruleHint": "Interrogativo de lugar.", "practice_links": ["gramatica-portuguesa/topics/interrogativos.html"]},
                {"type": "mc", "q": "¿___ te chamas?", "opts": ["Como", "Onde", "Qual", "Porquê"], "ans": 0, "level": "starter", "theme": "interrogativos", "ruleHint": "Interrogativo de modo para nomes.", "practice_links": ["gramatica-portuguesa/topics/interrogativos.html"]},
                {"type": "mc", "q": "Estudo português ___ gosto da língua.", "opts": ["porque", "mas", "embora", "se"], "ans": 0, "level": "elementary", "theme": "conjuncoes-basicas", "ruleHint": "Conjunção causal.", "practice_links": ["gramatica-portuguesa/topics/conjuncoes-basicas.html"]},
                {"type": "mc", "q": "O Rio de Janeiro é ___ quente do que Curitiba.", "opts": ["mais", "tão", "muito", "mais de"], "ans": 0, "level": "elementary", "theme": "comparativo-superlativo", "ruleHint": "Comparativo de superioridade com mais.", "practice_links": ["gramatica-portuguesa/topics/comparativo-superlativo.html"]},
                {"type": "mc", "q": "Ontem eu ___ ao cinema com amigos.", "opts": ["fui", "vou", "ia", "irei"], "ans": 0, "level": "elementary", "theme": "preterito-perfeito", "ruleHint": "Pretérito perfeito simples para ações concluídas no passado.", "practice_links": ["gramatica-portuguesa/topics/preterito-perfeito.html"]},
                {"type": "mc", "q": "Quando eu era criança, ___ na rua.", "opts": ["brincava", "brinquei", "brincarei", "tinha brincado"], "ans": 0, "level": "elementary", "theme": "preterito-imperfeito", "ruleHint": "Pretérito imperfeito para hábitos no passado.", "practice_links": ["gramatica-portuguesa/topics/preterito-perfeito-vs-imperfeito.html"]},
                {"type": "mc", "q": "Amanhã nós ___ a viagem.", "opts": ["faremos", "fizemos", "fazíamos", "tínhamos feito"], "ans": 0, "level": "elementary", "theme": "futuro-do-presente", "ruleHint": "Futuro do presente para ações futuras.", "practice_links": ["gramatica-portuguesa/topics/presente-do-indicativo.html"]},
                {"type": "mc", "q": "___ a janela, por favor!", "opts": ["Abre", "Abrir", "Abres", "Abria"], "ans": 0, "level": "starter", "theme": "imperativo", "ruleHint": "Imperativo direto de segunda pessoa.", "practice_links": ["gramatica-portuguesa/topics/imperativo.html"]},
                {"type": "mc", "q": "___ muitos livros na biblioteca.", "opts": ["Há", "Tem", "Existem de", "Havia de"], "ans": 0, "level": "starter", "theme": "haver-existir", "ruleHint": "Verbo haver impessoal no sentido de existir.", "practice_links": ["gramatica-portuguesa/topics/ha-vs-tem.html"]},
                {"type": "mc", "q": "Eu costumo viajar ___ verão.", "opts": ["no", "em", "na", "para"], "ans": 0, "level": "starter", "theme": "preposicoes-tempo", "ruleHint": "Contração da preposição em + o artigo o.", "practice_links": ["gramatica-portuguesa/topics/preposicoes-tempo.html"]},
                {"type": "mc", "q": "Ela estuda ___ noite.", "opts": ["à", "a", "na", "da"], "ans": 0, "level": "starter", "theme": "preposicoes-tempo", "ruleHint": "Crase na expressão de tempo à noite.", "practice_links": ["gramatica-portuguesa/topics/preposicoes-tempo.html"]}
            ]
        },
        BA: {
            Vocabulary: [
                {"type": "mc", "q": "\"тәнҡит\" = ?", "opts": ["Тәнҡитләү, баһалау", "Үтеп китеү", "Шатланыу", "Һорау"], "ans": 0, "level": "starter", "theme": "Daily Life"}
            ],
            Grammar: [
                {"type": "mc", "q": "Өҫтәл ___ китап ята.", "opts": ["өҫтөндә", "аҫтында", "янында", "артында"], "ans": 0, "level": "starter", "theme": "baylaueostar", "ruleHint": "Өҫтөндә бәйләүесе урынды күрһәтә.", "practice_links": ["bashqort-tele-grammatikahy/topics/baylaueostar.html"]},
                {"type": "mc", "q": "Мин мәктәпкә ___.", "opts": ["барҙым", "барҙың", "барҙы", "барҙыҡ"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман I зат берлек заты төшөнсәһе.", "practice_links": ["bashqort-tele-grammatikahy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Иртәгә беҙ Өфөгә ___.", "opts": ["барасаҡбыҙ", "барҙыҡ", "барабыҙ", "барғанбыҙ"], "ans": 0, "level": "starter", "theme": "kilechak-zaman", "ruleHint": "Килəсəк заман күплек заты.", "practice_links": ["bashqort-tele-grammatikahy/topics/kilechak-zaman.html"]},
                {"type": "mc", "q": "___ уҡыусымын.", "opts": ["Мин", "Һин", "Ол", "Беҙ"], "ans": 0, "level": "starter", "theme": "zat-almashtary", "ruleHint": "Зат алмашы I зат берлек.", "practice_links": ["bashqort-tele-grammatikahy/topics/zat-almashtary.html"]},
                {"type": "mc", "q": "Был — ___ китабым.", "opts": ["минең", "һинең", "оның", "беҙҙең"], "ans": 0, "level": "starter", "theme": "kileshtar", "ruleHint": "Иялек килеш алмашы.", "practice_links": ["bashqort-tele-grammatikahy/topics/kileshtar.html"]},
                {"type": "mc", "q": "Урамда ___ һауа торошо.", "opts": ["бик яҡшы", "яман", "яманраҡ", "бик яман"], "ans": 0, "level": "starter", "theme": "sifattar", "ruleHint": "Сифат ҙурлыҡ дәрәжәһе.", "practice_links": ["bashqort-tele-grammatikahy/topics/sifattar.html"]},
                {"type": "mc", "q": "Балалар мәктәптән ___.", "opts": ["ҡайттылар", "ҡайттым", "ҡайттың", "ҡайттыҡ"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман III зат күплек.", "practice_links": ["bashqort-tele-grammatikahy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Китапханала күп ___ бар.", "opts": ["китаптар", "китап", "китаптың", "китапҡа"], "ans": 0, "level": "starter", "theme": "handar-ham-kileshtar", "ruleHint": "Күплек ялғауы.", "practice_links": ["bashqort-tele-grammatikahy/topics/handar-ham-kileshtar.html"]},
                {"type": "mc", "q": "Алма ___ өҫтəлдə ята.", "opts": ["өҫтөндә", "иҙәндә", "тәҙրәлә", "ишектә"], "ans": 0, "level": "starter", "theme": "kileshtar", "ruleHint": "Урын-ваҡыт килеше ялғауы.", "practice_links": ["bashqort-tele-grammatikahy/topics/kileshtar.html"]},
                {"type": "mc", "q": "Һин ҡайҙа ___?", "opts": ["яшайһең", "яшайбыҙ", "яшайҙар", "яшайм"], "ans": 0, "level": "starter", "theme": "zat-almashtary", "ruleHint": "Осы заман II зат берлек.", "practice_links": ["bashqort-tele-grammatikahy/topics/zat-almashtary.html"]},
                {"type": "mc", "q": "Беҙ дуҫтар менән ___.", "opts": ["осраштыҡ", "осраштың", "осрашты", "осраштым"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман I зат күплек.", "practice_links": ["bashqort-tele-grammatikahy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Көн ___ йылыраҡ була.", "opts": ["сайын", "менән", "өсөн", "аша"], "ans": 0, "level": "starter", "theme": "baylaueostar", "ruleHint": "Сайын бәйләүесе ҡулланыла.", "practice_links": ["bashqort-tele-grammatikahy/topics/baylaueostar.html"]},
                {"type": "mc", "q": "Был йорт ___ .", "opts": ["бик ҙур", "ҙурыраҡ", "иң ҙур", "ҙурҙар"], "ans": 0, "level": "starter", "theme": "sifattar", "ruleHint": "Сифат төп дәрәжәһе.", "practice_links": ["bashqort-tele-grammatikahy/topics/sifattar.html"]},
                {"type": "mc", "q": "Ул хат ___ .", "opts": ["яҙа", "яҙам", "яҙабыҙ", "яҙалар"], "ans": 0, "level": "starter", "theme": "kilechak-zaman", "ruleHint": "Осы заман III зат берлек.", "practice_links": ["bashqort-tele-grammatikahy/topics/kilechak-zaman.html"]},
                {"type": "mc", "q": "Ҡалала яңы ___ төҙөлә.", "opts": ["мәктәптәр", "мәктәптән", "мәктәпкә", "мәктәпте"], "ans": 0, "level": "starter", "theme": "handar-ham-kileshtar", "ruleHint": "Башҡорт теле күплек формаһы.", "practice_links": ["bashqort-tele-grammatikahy/topics/handar-ham-kileshtar.html"]},
                {"type": "mc", "q": "Атай эшкә ___ .", "opts": ["кетте", "кеттем", "кеттеҡ", "кеттең"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман III зат.", "practice_links": ["bashqort-tele-grammatikahy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Был кемнең ___?", "opts": ["сумкаһы", "сумкам", "сумкаң", "сумкабыҙ"], "ans": 0, "level": "starter", "theme": "haudhaktar-hahem-affikstar", "ruleHint": "Иялек аффиксы III зат.", "practice_links": ["bashqort-tele-grammatikahy/topics/haudhaktar-hahem-affikstar.html"]},
                {"type": "mc", "q": "Беҙ ялға ___ барабыҙ.", "opts": ["урманға", "урманда", "урмандан", "урман менән"], "ans": 0, "level": "starter", "theme": "kileshtar", "ruleHint": "Yүнәлеш килеше ялғауы.", "practice_links": ["bashqort-tele-grammatikahy/topics/kileshtar.html"]},
                {"type": "mc", "q": "Бөгөн һауа торошо ___ .", "opts": ["ҡояшлы", "ҡояш", "ҡояшты", "ҡояшҡа"], "ans": 0, "level": "starter", "theme": "sifattar", "ruleHint": "Сифат яһаусы аффикс -лы.", "practice_links": ["bashqort-tele-grammatikahy/topics/sifattar.html"]},
                {"type": "mc", "q": "Улар яңы өй ___ .", "opts": ["сатып алдылар", "сатып алдым", "сатып алдыҡ", "сатып алдың"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман III зат күплек.", "practice_links": ["bashqort-tele-grammatikahy/topics/utkan-zaman.html"]}
            ]
        },
        TT: {
            Vocabulary: [
                {"type": "mc", "q": "\"кардәш\" = ?", "opts": ["Туган, абый яки сеңел", "Ят кеше", "Күрше", "Иптәш"], "ans": 0, "level": "starter", "theme": "Daily Life"}
            ],
            Grammar: [
                {"type": "mc", "q": "Өстәлдә китап ___ .", "opts": ["бар", "юк", "тиеш", "теләй"], "ans": 0, "level": "starter", "theme": "bar-yuk", "ruleHint": "Бар / юк сүзләре барлыкны/юклыкны белдерә.", "practice_links": ["tatar-teli-grammatikasy/topics/bar-yuk.html"]},
                {"type": "mc", "q": "Мин Казанда ___ .", "opts": ["яшим", "яшисең", "яши", "яшибез"], "ans": 0, "level": "starter", "theme": "sozlar-tartibe", "ruleHint": "Хәзерге заман I зат берлек.", "practice_links": ["tatar-teli-grammatikasy/topics/sozlar-tartibe.html"]},
                {"type": "mc", "q": "Кичә без кинога ___ .", "opts": ["бардык", "бардым", "бардыгыз", "бардылар"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман I зат күплек.", "practice_links": ["tatar-teli-grammatikasy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Иртәгә ул Казанга ___ .", "opts": ["барачак", "барды", "бара", "барган"], "ans": 0, "level": "starter", "theme": "kilechak-zaman", "ruleHint": "Киләчәк заман III зат берлек.", "practice_links": ["tatar-teli-grammatikasy/topics/kilechak-zaman.html"]},
                {"type": "mc", "q": "Бу — минем ___ .", "opts": ["китабым", "китабың", "китабы", "китабыбыз"], "ans": 0, "level": "starter", "theme": "iyalek-kushymchalary", "ruleHint": "Иялек кушымчасы I зат берлек.", "practice_links": ["tatar-teli-grammatikasy/topics/iyalek-kushymchalary.html"]},
                {"type": "mc", "q": "Әни мәктәптә ___ .", "opts": ["эшли", "эшлим", "эшлисең", "эшлибез"], "ans": 0, "level": "starter", "theme": "sozlar-tartibe", "ruleHint": "Хәзерге заман III зат берлек.", "practice_links": ["tatar-teli-grammatikasy/topics/sozlar-tartibe.html"]},
                {"type": "mc", "q": "Казанда матур ___ күп.", "opts": ["урамнар", "урам", "урамга", "урамнан"], "ans": 0, "level": "starter", "theme": "kileshlar", "ruleHint": "Күплек сан кушымчасы -нар.", "practice_links": ["tatar-teli-grammatikasy/topics/kileshlar.html"]},
                {"type": "mc", "q": "Алма өстәл ___ ята.", "opts": ["өстендә", "астында", "янәшәсендә", "артында"], "ans": 0, "level": "starter", "theme": "kileshlar", "ruleHint": "Урын-вакыт килеше.", "practice_links": ["tatar-teli-grammatikasy/topics/kileshlar.html"]},
                {"type": "mc", "q": "Татар теле ___ тел.", "opts": ["матур", "матуррак", "саф", "иң матур"], "ans": 0, "level": "starter", "theme": "syjfatlar", "ruleHint": "Сыйфатның төп дәрәҗәсе.", "practice_links": ["tatar-teli-grammatikasy/topics/syjfatlar.html"]},
                {"type": "mc", "q": "Бу бина онытылмаслык ___ .", "opts": ["матуррак", "иң матур", "матур", "матурдан"], "ans": 0, "level": "starter", "theme": "chagyshtyru-darajese", "ruleHint": "Чагыштыру дәрәҗәсе.", "practice_links": ["tatar-teli-grammatikasy/topics/chagyshtyru-darajese.html"]},
                {"type": "mc", "q": "Татар телендә ___ кануны бар.", "opts": ["сингармонизм", "согласование", "ударение", "падеж"], "ans": 0, "level": "starter", "theme": "singarmonizm", "ruleHint": "Сингармонизм — аңлатма кануны.", "practice_links": ["tatar-teli-grammatikasy/topics/singarmonizm.html"]},
                {"type": "mc", "q": "___ укучымы?", "opts": ["Сез", "Мин", "Син", "Ул"], "ans": 0, "level": "starter", "theme": "korsatu-alyshmalary", "ruleHint": "Зат алмашлыгы II зат күплек.", "practice_links": ["tatar-teli-grammatikasy/topics/korsatu-alyshmalary.html"]},
                {"type": "mc", "q": "Ул хат ___ .", "opts": ["яза", "язам", "язабыз", "язалар"], "ans": 0, "level": "starter", "theme": "sozlar-tartibe", "ruleHint": "Җөмләдә сүзләр тәртибе.", "practice_links": ["tatar-teli-grammatikasy/topics/sozlar-tartibe.html"]},
                {"type": "mc", "q": "Без урманга ___ .", "opts": ["бардык", "бардым", "барды", "бардыгыз"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман I зат күплек.", "practice_links": ["tatar-teli-grammatikasy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Бүген һава ___ .", "opts": ["кояшлы", "кояш", "кояшны", "кояшка"], "ans": 0, "level": "starter", "theme": "syjfatlar", "ruleHint": "Сыйфат ясаучы кушымча -лы.", "practice_links": ["tatar-teli-grammatikasy/topics/syjfatlar.html"]},
                {"type": "mc", "q": "Алар яңа өй ___ .", "opts": ["сатып алдылар", "сатып алдым", "сатып алдык", "сатып алдың"], "ans": 0, "level": "starter", "theme": "utkan-zaman", "ruleHint": "Үткән заман III зат күплек.", "practice_links": ["tatar-teli-grammatikasy/topics/utkan-zaman.html"]},
                {"type": "mc", "q": "Синең исемең ___ ?", "opts": ["ничек", "кем", "кайда", "качан"], "ans": 0, "level": "starter", "theme": "korsatu-alyshmalary", "ruleHint": "Сорау аты.", "practice_links": ["tatar-teli-grammatikasy/topics/korsatu-alyshmalary.html"]},
                {"type": "mc", "q": "Без бүген ял ___ .", "opts": ["итәбез", "итәм", "итә", "итәләр"], "ans": 0, "level": "starter", "theme": "sozlar-tartibe", "ruleHint": "Хәзерге заман I зат күплек.", "practice_links": ["tatar-teli-grammatikasy/topics/sozlar-tartibe.html"]},
                {"type": "mc", "q": "Бу сумка кемнеке ___ ?", "opts": ["ничек", "кем", "кайсы", "нигә"], "ans": 0, "level": "starter", "theme": "iyalek-kushymchalary", "ruleHint": "Иялек соравы.", "practice_links": ["tatar-teli-grammatikasy/topics/iyalek-kushymchalary.html"]},
                {"type": "mc", "q": "Урамда салкын ___ .", "opts": ["җил исә", "җил", "җилне", "җилгә"], "ans": 0, "level": "starter", "theme": "sozlar-tartibe", "ruleHint": "Җөмләнең ахырында фигыль урнаша.", "practice_links": ["tatar-teli-grammatikasy/topics/sozlar-tartibe.html"]}
            ]
        }
    };

    function getQuestions(lang, cat, level, theme, subTheme) {
        const pool = (QUESTIONS[lang] && QUESTIONS[lang][cat]) || QUESTIONS['EN']['Vocabulary'];
        if (window.gameUtils && window.gameUtils.filterVocabulary) {
            return window.gameUtils.filterVocabulary(pool, { lang, level, theme, subTheme, category: cat });
        }
        const norm = v => v.toLowerCase().replace(/-/g, '_');
        const normalizedLevel = level !== 'all' ? norm(level) : 'all';

        return pool.filter(q => {
            if (!q.level) {
                console.warn(`Static question missing level field:`, q);
            }
            const qLevel = norm(q.level || 'starter');
            const levelMatch = normalizedLevel === 'all' || qLevel === normalizedLevel;
            const themeMatch = theme === 'all' || q.theme === theme;
            return levelMatch && themeMatch;
        });
    }

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        if (window.COSY && window.COSY.loadLanguageData) {
            await window.COSY.loadLanguageData(lang, level);
        } else {
            console.error("Centralized loader COSY.loadLanguageData not found.");
        }

        // Load standalone app morphological datasets via adapter bridge
        if (window.COSY && window.COSY.loadAppData) {
            const l = (lang || 'en').toLowerCase();
            await Promise.all([
                window.COSY.loadAppData(l, 'verbs'),
                window.COSY.loadAppData(l, 'nouns')
            ]);
        }

        // Load JSON morphology datasets
        if (window.COSY && window.COSY.loadMorphologyData) {
            await window.COSY.loadMorphologyData(lang);
        }

        // Also load curriculum for pronunciation if needed
        if (window.COSY && window.COSY.loadCurriculum) {
            const l = (lang || 'en').toLowerCase();
            const lvl = (level || 'starter').toLowerCase();
            const lvlCode = LEVEL_MAP[lvl] || lvl;
            if (lvlCode !== 'all') {
                await window.COSY.loadCurriculum(l, lvlCode);
            } else {
                for (let lc of Object.values(LEVEL_MAP)) {
                    await window.COSY.loadCurriculum(l, lc);
                }
            }
        }
    }

    function buildMCQuestion(item, pool) {
        let matchType = 'definition';

        const hasSynonyms = Array.isArray(item.synonyms) && item.synonyms.length > 0;
        const hasAntonyms = (Array.isArray(item.antonyms) && item.antonyms.length > 0) || !!item.opposite;

        const choices = ['definition'];
        if (hasSynonyms) choices.push('synonym');
        if (hasAntonyms) choices.push('antonym');

        matchType = choices[Math.floor(Math.random() * choices.length)];

        let targetText = '';
        let qText = '';

        if (matchType === 'synonym') {
            targetText = item.synonyms[0];
            qText = `"${item.word}" ≈ ?`;
        } else if (matchType === 'antonym') {
            targetText = item.antonyms?.[0] || item.opposite;
            qText = `"${item.word}" ≠ ?`;
        } else {
            targetText = item.definitions?.[0]?.text || item.definition || item.translation || item.word || '...';
            qText = `"${item.word}" = ?`;
        }

        // Pull distractors
        let distractors = [];
        if (matchType === 'definition') {
            distractors = pool
                .filter(p => p.id !== item.id && p.definitions?.[0]?.text)
                .sort(() => Math.random() - 0.5)
                .map(p => p.definitions[0].text);
        } else {
            distractors = pool
                .filter(p => p.id !== item.id && p.word)
                .sort(() => Math.random() - 0.5)
                .map(p => p.word);
        }

        distractors = [...new Set(distractors)].filter(d => d && d.toLowerCase() !== targetText.toLowerCase());
        distractors = distractors.slice(0, 2);

        while (distractors.length < 2) {
            const fallback = pool
                .filter(p => p.id !== item.id)
                .sort(() => Math.random() - 0.5)[0];
            const fallbackVal = matchType === 'definition' ? (fallback?.translation || 'none') : (fallback?.word || 'none');
            if (fallbackVal && fallbackVal.toLowerCase() !== targetText.toLowerCase()) {
                distractors.push(fallbackVal);
            } else {
                distractors.push('---');
            }
        }

        const allOpts = [targetText, ...distractors].sort(() => Math.random() - 0.5);
        const ans = allOpts.indexOf(targetText);

        return {
            type: 'mc',
            q: qText,
            item,
            ans,
            opts: allOpts,
            level: item.level,
            theme: item.theme
        };
    }

    /* ══════════════════════════════════════
       TASK GENERATION
    ══════════════════════════════════════ */
    function beginSession(lang, catInput, level, theme, isChallenge, customQs, subTheme) {
        const cat = catInput || 'Vocabulary';
        console.log('[COSY Practice] beginSession', { lang, cat, level, theme, subTheme });

        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        const l = lang.toLowerCase();

        const norm = v => (v || '').toLowerCase().replace(/-/g, '_');
        const normalizedLevel = level !== 'all' ? norm(level) : 'all';

        if (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar' || cat === 'vocabulary') {
            const uiCat = (cat === 'vocab' || cat === 'Vocabulary' || cat === 'vocabulary') ? 'Vocabulary' : 'Grammar';
            const isStrict = uiCat === 'Vocabulary';

            pool = window.gameUtils.getVocabPool(l, level, theme, subTheme || 'all', { excludeExtra: true });

            // Apply category filtering to ensures consistent results between getVocabPool and fallback
            if (pool.length > 0) {
                pool = window.gameUtils.filterVocabulary(pool, { lang: l, level, theme, subTheme, category: uiCat, strict: isStrict });
            }

            console.log('[COSY Practice] getVocabPool result count:', pool.length);

            // Fallback to aggregated window.*Data if pool is empty
            if (pool.length === 0) {
                const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'nationalitiesData', 'grammarData', 'grammarElements'];
                let aggregatedPool = [];
                keys.forEach(key => {
                    if (window[key] && window[key][l]) aggregatedPool = aggregatedPool.concat(window[key][l]);
                });

                if (aggregatedPool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(aggregatedPool, { lang: l, level, theme, subTheme, category: uiCat, strict: isStrict });
                    console.log('[COSY Practice] fallback filterVocabulary count:', pool.length);

                    // SECOND FALLBACK: If still empty, try to get ALL vocab for this language regardless of form filter
                    if (pool.length === 0) {
                        pool = aggregatedPool.filter(item => {
                            const itemLevel = norm(item.level || 'starter');
                            return (normalizedLevel === 'all' || itemLevel === normalizedLevel);
                        });
                        console.log('[COSY Practice] second fallback count:', pool.length);
                    }
                }
            }

            if (window.phrasesData && window.phrasesData[l]) {
                const phrases = [];
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    phrases.push({ word: p.phrase, level: 'starter', definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                });
                pool.push(...window.gameUtils.filterVocabulary(phrases, { lang, level, theme, subTheme, category: uiCat, strict: isStrict }));
            }

            // Append dynamic morphology dataset items for Grammar practice
            if (uiCat === 'Grammar' && window.morphologyData && window.morphologyData[l]) {
                const morphItems = window.morphologyData[l].map(m => ({
                    id: m.id,
                    word: m.label || m.id,
                    definition: m.definition || m.group_label || 'Grammar & Morphology',
                    definitions: [{ text: m.definition || m.group_label || 'Grammar & Morphology' }],
                    level: (m.level || 'starter').toLowerCase(),
                    theme: m.group || 'Grammar',
                    practice_links: m.practice_links,
                    usage_hint: m.definition ? `Concept: ${m.definition}` : null
                }));
                const filteredMorph = morphItems.filter(m => {
                    const mLevel = norm(m.level);
                    const levelOk = normalizedLevel === 'all' || mLevel === normalizedLevel || mLevel.includes(normalizedLevel);
                    const themeOk = !theme || theme === 'all' || (window.gameUtils && window.gameUtils.isThemeMatch ? window.gameUtils.isThemeMatch(m.theme, theme, m) : true);
                    return levelOk && themeOk;
                });
                pool.push(...filteredMorph);
            }
        } else if (cat === 'Speaking' || cat === 'speaking') {
            const s = window.speakingData?.[l] || {};
            const speakingData = [
                ...(s.talkThatTalk || []),
                ...(s.debates || []),
                ...(s.opinions || []),
                ...(s.fluency || []),
                ...(s.quotes || [])
            ];
            const processedSpeaking = speakingData.map(d => {
                const item = { ...d };
                if (item.t && !item.topic) item.topic = item.t;
                if (item.q && !item.topic) item.topic = item.q;
                return {
                    ...item,
                    language: item.language || l,
                    level: item.level || normalizedLevel,
                    form: 'speaking'
                };
            });

            pool = window.gameUtils.filterVocabulary(processedSpeaking, { lang: l, level, theme, subTheme, category: 'Speaking' });
        } else if (cat === 'Pronunciation' || cat === 'pronunciation' || cat === 'Pronunciation 🔊') {
            const codes = (level === 'all') ? Object.values(LEVEL_MAP) : [LEVEL_MAP[level] || 'a1'];

            const tempPool = [];
            codes.forEach(lvlCode => {
                const currKey = `${l}_${lvlCode}`;
                const currData = window.curriculumData?.[currKey] || [];
                currData.forEach(unit => {
                    (unit.lessons || []).forEach(lesson => {
                        if (lesson.pronunciation) {
                            lesson.pronunciation.forEach(p => {
                                tempPool.push(...(p.examples || []).map(ex => ({
                                    ...ex,
                                    theme: p.point,
                                    type: 'ls',
                                    language: l,
                                    level: lvlCode,
                                    form: 'pronunciation'
                                })));
                                // Fix for entries without examples or alphabet but with point
                                if (!p.examples && !p.alphabet && p.point) {
                                    tempPool.push({
                                        word: p.point,
                                        theme: p.point,
                                        type: 'ls',
                                        language: l,
                                        level: lvlCode,
                                        form: 'pronunciation'
                                    });
                                }
                                tempPool.push(...(p.alphabet || []).map(a => ({
                                    word: a.l,
                                    ipa: a.ipa,
                                    theme: p.point,
                                    type: 'ls',
                                    language: l,
                                    level: lvlCode,
                                    form: 'pronunciation'
                                })));
                            });
                        }
                    });
                });
            });
            pool = window.gameUtils.filterVocabulary(tempPool, { lang: l, level, theme, subTheme, category: 'Pronunciation' });
        }

        let qs = [];
        if (pool.length > 0) {
            qs = pool.map(item => {
                const isVocabOrGrammar = (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar' || cat === 'vocabulary');
                if (isVocabOrGrammar) {
                    let types = ['mc', 'tf', 'type', 'sc', 'ls', 'mp', 'cloze', 'dictation'];
                    let type = types[Math.floor(Math.random() * types.length)];
                    if (type === 'dictation') {
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const hasEx = examplesArr.length > 0 && examplesArr[0]?.text;
                        if (!hasEx) type = 'ls';
                    }

                    // Guard against missing examples for scramble & cloze questions
                    const hasExamples = Array.isArray(item.examples)
                        && item.examples.length > 0
                        && item.examples[0]?.text;
                    if (!hasExamples && (type === 'sc' || type === 'cloze')) type = 'mc';

                    if (type === 'type' && !item.word) type = 'mc';

                    let qText = '', ans = null, opts = null;
                    const definition = item.definitions?.[0]?.text || item.definition || item.translation || item.word || "...";

                    if (type === 'mp') {
                        // Match Pairs: Current item + 3 other random items
                        const otherItems = pool
                            .filter(p => p.id !== item.id && p.word && (p.definitions?.[0]?.text || p.definition || p.translation))
                            .sort(() => Math.random() - 0.5);

                        const selectedPairs = [item, ...otherItems.slice(0, 3)];
                        while (selectedPairs.length < 4) {
                            selectedPairs.push({
                                word: `WordFallback_${selectedPairs.length}`,
                                definitions: [{ text: `DefFallback_${selectedPairs.length}` }],
                                emoji: '💡',
                                transcription: `[${selectedPairs.length}]`
                            });
                        }

                        // Determine available modes dynamically based on item fields
                        let possibleModes = ['definition'];

                        const hasEmojis = selectedPairs.filter(p => p.emoji).length >= 3;
                        if (hasEmojis) possibleModes.push('emoji');

                        const hasTranscriptions = selectedPairs.filter(p => p.transcription).length >= 3;
                        if (hasTranscriptions) possibleModes.push('transcription');

                        const hasAntonyms = selectedPairs.filter(p => p.opposite || (p.antonyms && p.antonyms.length > 0)).length >= 2;
                        if (hasAntonyms) possibleModes.push('antonym');

                        const selectedMode = possibleModes[Math.floor(Math.random() * possibleModes.length)];

                        // Map each pair based on the chosen mode
                        const pairs = selectedPairs.map((p, idx) => {
                            let matchValue = '';
                            if (selectedMode === 'emoji') {
                                matchValue = p.emoji || '💡';
                            } else if (selectedMode === 'transcription') {
                                matchValue = p.transcription || `[${p.word}]`;
                            } else if (selectedMode === 'antonym') {
                                matchValue = p.opposite || p.antonyms?.[0] || `≠ ${p.word}`;
                            } else {
                                matchValue = p.definitions?.[0]?.text || p.definition || p.translation || p.word;
                            }

                            return {
                                id: idx,
                                word: p.word,
                                definition: matchValue
                            };
                        });

                        // Set a fully monolingual descriptive title based on selected mode
                        if (selectedMode === 'emoji') {
                            qText = "🧩 Match the words with their images";
                        } else if (selectedMode === 'transcription') {
                            qText = "🧩 Match the words with their pronunciation symbols";
                        } else if (selectedMode === 'antonym') {
                            qText = "🧩 Match the words with their opposites (antonyms)";
                        } else {
                            qText = "🧩 Match the words with their definitions";
                        }

                        ans = pairs; // Array of { id, word, definition }
                    } else if (type === 'mc') {
                        const mcQ = buildMCQuestion(item, pool);
                        qText = mcQ.q;
                        ans = mcQ.ans;
                        opts = mcQ.opts;
                    } else if (type === 'ls') {
                        // Fully monolingual Listening Task: options are target words
                        const otherWords = pool
                            .filter(p => p.id !== item.id && p.word)
                            .sort(() => Math.random() - 0.5)
                            .map(p => p.word);
                        let distractors = [...new Set(otherWords)].filter(w => w && w.toLowerCase() !== (item.word || '').toLowerCase()).slice(0, 2);
                        while (distractors.length < 2) {
                            distractors.push('---');
                        }
                        qText = '🔊 ?';
                        opts = [item.word, ...distractors].sort(() => Math.random() - 0.5);
                        ans = opts.indexOf(item.word);
                    } else if (type === 'tf') {
                        // Fully monolingual True/False
                        const isTrue = Math.random() > 0.5;
                        let displayDef = definition;
                        if (!isTrue) {
                            const otherItems = pool.filter(p => p.id !== item.id && (p.definitions?.[0]?.text || p.definition));
                            if (otherItems.length > 0) {
                                const randomOther = otherItems[Math.floor(Math.random() * otherItems.length)];
                                displayDef = randomOther.definitions?.[0]?.text || randomOther.definition;
                            } else {
                                displayDef = "---";
                            }
                        }
                        qText = `"${item.word}" = "${displayDef}"`;
                        ans = isTrue;
                    } else if (type === 'sc') {
                        // Fully monolingual Sentence Scramble
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const ex = examplesArr[Math.floor(Math.random() * examplesArr.length)];
                        if (!ex?.text) {
                            type = 'type';
                        } else {
                            qText = `🧩 (${item.word})`;
                            ans = ex.text;
                        }
                    } else if (type === 'cloze') {
                        // Fully monolingual Sentence Cloze
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const ex = examplesArr[Math.floor(Math.random() * examplesArr.length)];
                        if (!ex?.text || !item.word) {
                            type = 'mc';
                            const mcQ = buildMCQuestion(item, pool);
                            qText = mcQ.q;
                            ans = mcQ.ans;
                            opts = mcQ.opts;
                        } else {
                            const regex = new RegExp(item.word, 'gi');
                            const sentenceWithBlank = ex.text.replace(regex, '[ ___ ]');
                            qText = `Fill in the blank: ${sentenceWithBlank}`;

                            const distractors = pool
                                .filter(p => p.id !== item.id && p.word)
                                .sort(() => Math.random() - 0.5)
                                .map(p => p.word)
                                .slice(0, 2);
                            while (distractors.length < 2) distractors.push('---');

                            opts = [item.word, ...distractors].sort(() => Math.random() - 0.5);
                            ans = opts.indexOf(item.word);
                        }
                    }

                    if (type === 'type') {
                        // Fully monolingual Typing task
                        qText = `"${definition}" = ?`;
                        ans = item.word;
                    }

                    if (!qText) {
                        console.warn('[COSY Practice] qText still empty for item:', item, 'type:', type);
                        qText = `Practice: ${item.word}`;
                    }

                    // Check for morphological paradigm enhancements via Linguistics Adapter Bridge
                    let morphologicalHint = null;
                    if (window.COSY && window.COSY.getVerbParadigm) {
                        const verbParadigm = window.COSY.getVerbParadigm(l, item.word);
                        if (verbParadigm) {
                            if (verbParadigm.usage_hint) {
                                morphologicalHint = `Usage: ${verbParadigm.usage_hint}`;
                            } else if (verbParadigm.group) {
                                morphologicalHint = `Group: ${verbParadigm.group}`;
                            }
                        }
                    }
                    if (!morphologicalHint && window.COSY && window.COSY.getNounDeclension) {
                        const nounDecl = window.COSY.getNounDeclension(l, item.word);
                        if (nounDecl && nounDecl.gender) {
                            morphologicalHint = `Gender: ${nounDecl.gender}`;
                        }
                    }

                    return {
                        form: type,
                        q: qText,
                        item: item,
                        ans: ans,
                        opts,
                        level: item.level,
                        theme: item.theme,
                        sub_theme: item.sub_theme || null,
                        translation: item.translation || item.word,
                        practice_links: item.practice_links,
                        ruleHint: item.usage_hint || item.collocation || (item.preposition ? `Collocation / Preposition: ${item.word} ${item.preposition}` : morphologicalHint)
                    };
                } else if (cat === 'Speaking' || cat === 'speaking') {
                    return { form: 'conv', q: item.topic || item.text || item.q, level: item.level, theme: item.theme };
                } else if (cat === 'Pronunciation' || cat === 'pronunciation') {
                    const correctIpa = item.ipa;
                    const distractors = ['/a/', '/i/', '/u/', '/e/', '/o/'].filter(i => i !== correctIpa).sort(() => Math.random() - 0.5).slice(0, 2);
                    const opts = [correctIpa, ...distractors].sort(() => Math.random() - 0.5);
                    return { form: 'ls', q: '🔊 ?', item: item, ans: opts.indexOf(correctIpa), opts: opts, theme: item.theme };
                }
                return item;
            });
        } else {
            qs = getQuestions(lang.toUpperCase(), cat, level, theme, subTheme);
        }

        if (!qs.length) {
            console.warn('[COSY filter] empty result', { lang, level, theme, subTheme, category: cat });
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) {
                errorMsg.style.display = 'block';
                // Scroll to error if not visible
                errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                const msg = "No exercises found for this combination. Try All Levels or a different theme.";
                if (window.COSY && window.COSY.showToast) {
                    window.COSY.showToast(msg, true);
                } else {
                    alert(msg);
                }
            }
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

        window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, qs);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
