(function() {
    const grammarData = {
        "en": [
            // A1 - Starter
            { "word": "am", "clozeText": "I ______ a student.", "answer": "am", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "is", "clozeText": "She ______ (be) a doctor.", "answer": "is", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "are", "clozeText": "They ______ (be) friends.", "answer": "are", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "works", "clozeText": "He ______ (work) in a bank.", "answer": "works", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "don't", "clozeText": "I ______ (not like) pizza.", "answer": "don't", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "Does", "clozeText": "______ he speak English?", "answer": "Does", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "Let's", "clozeText": "______ go to the cinema.", "answer": "Let's", "level": "starter", "theme": "grammar_lets", "category": "grammar" },
            { "word": "my", "clozeText": "I like ______ (I) new car.", "answer": "my", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "cities", "numberPlural": "2 city", "answer": "two cities", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "Sarah's", "clozeText": "That is ______ (Sarah) bag.", "answer": "Sarah's", "level": "starter", "theme": "grammar_possessive_s", "category": "grammar" },
            { "word": "on", "clozeText": "The laptop is ______ the desk.", "answer": "on", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },

            // A2 - Elementary
            { "word": "is playing", "clozeText": "Look! He ______ ______ (play) football.", "answer": "is playing", "level": "elementary", "theme": "grammar_present_continuous", "category": "grammar" },
            { "word": "are wearing", "clozeText": "They ______ ______ (wear) coats today.", "answer": "are wearing", "level": "elementary", "theme": "grammar_present_continuous", "category": "grammar" },
            { "word": "can", "clozeText": "She ______ (can) swim very well.", "answer": "can", "level": "elementary", "theme": "grammar_modal_verbs", "category": "grammar" },
            { "word": "should", "clozeText": "You ______ (should) see a doctor.", "answer": "should", "level": "elementary", "theme": "grammar_modal_verbs", "category": "grammar" },
            { "word": "better than", "clozeText": "This book is ______ ______ (good) the movie.", "answer": "better than", "level": "elementary", "theme": "grammar_comparatives", "category": "grammar" },
            { "word": "older than", "clozeText": "My brother is ______ ______ (old) me.", "answer": "older than", "level": "elementary", "theme": "grammar_comparatives", "category": "grammar" },
            { "word": "did", "clozeText": "Where ______ you go last night?", "answer": "did", "level": "elementary", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "was cooking", "clozeText": "I ______ ______ (cook) when the phone rang.", "answer": "was cooking", "level": "elementary", "theme": "grammar_past_continuous", "category": "grammar" },

            // B1 - Intermediate
            { "word": "have lived", "clozeText": "I ______ ______ (live) here for ten years.", "answer": "have lived", "level": "intermediate", "theme": "grammar_present_perfect", "category": "grammar" },
            { "word": "has gone", "clozeText": "He ______ ______ (go) to the supermarket.", "answer": "has gone", "level": "intermediate", "theme": "grammar_present_perfect", "category": "grammar" },
            { "word": "was built", "clozeText": "This house ______ ______ (build) in 1920.", "answer": "was built", "level": "intermediate", "theme": "grammar_passive_voice", "category": "grammar" },
            { "word": "will happen", "clozeText": "If it rains, what ______ ______ (happen)?", "answer": "will happen", "level": "intermediate", "theme": "grammar_conditionals", "category": "grammar" },
            { "word": "would buy", "clozeText": "If I were rich, I ______ ______ (buy) a boat.", "answer": "would buy", "level": "intermediate", "theme": "grammar_conditionals", "category": "grammar" }
        ],
        "fr": [
            // A1 - Starter
            { "word": "suis", "clozeText": "Je ______ (être) très heureux.", "answer": "suis", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "parle", "clozeText": "Elle ______ (parler) espagnol.", "answer": "parle", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "un", "article": "un", "baseWord": "chien", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "la", "article": "la", "baseWord": "pomme", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "ses", "clozeText": "Il cherche ______ (il/pluriel) clés.", "answer": "ses", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },

            // A2 - Elementary
            { "word": "allais", "clozeText": "Quand j'étais petit, j'______ (aller) au parc.", "answer": "allais", "level": "elementary", "theme": "grammar_imparfait", "category": "grammar" },
            { "word": "était", "clozeText": "Il ______ (être) midi quand il est arrivé.", "answer": "était", "level": "elementary", "theme": "grammar_imparfait", "category": "grammar" },
            { "word": "vais manger", "clozeText": "Je ______ ______ (manger) bientôt.", "answer": "vais manger", "level": "elementary", "theme": "grammar_future_proche", "category": "grammar" },
            { "word": "la", "clozeText": "Cette pomme ? Je ______ (it/fem) mange.", "answer": "la", "level": "elementary", "theme": "grammar_objective_pronouns", "category": "grammar" },
            { "word": "lui", "clozeText": "Je ______ (to him) parle tous les jours.", "answer": "lui", "level": "elementary", "theme": "grammar_objective_pronouns", "category": "grammar" },

            // B1 - Intermediate
            { "word": "serait", "clozeText": "Si j'avais le temps, ce ______ (être) génial.", "answer": "serait", "level": "intermediate", "theme": "grammar_conditionals", "category": "grammar" },
            { "word": "soit", "clozeText": "Il faut qu'il ______ (être) prêt.", "answer": "soit", "level": "intermediate", "theme": "grammar_subjunctive", "category": "grammar" },
            { "word": "puissions", "clozeText": "Bien que nous ______ (pouvoir) partir.", "answer": "puissions", "level": "intermediate", "theme": "grammar_subjunctive", "category": "grammar" },
            { "word": "avait fini", "clozeText": "Il ______ ______ (finir) quand je suis venu.", "answer": "avait fini", "level": "intermediate", "theme": "grammar_plus_que_parfait", "category": "grammar" }
        ],
        "it": [
            // A1 - Starter
            { "word": "siamo", "clozeText": "Noi ______ (essere) pronti.", "answer": "siamo", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "lo", "article": "lo", "baseWord": "zaino", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "libri", "numberPlural": "3 libro", "answer": "tre libri", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },

            // A2 - Elementary
            { "word": "ho mangiato", "clozeText": "Ieri io ______ ______ (mangiare) una pizza.", "answer": "ho mangiato", "level": "elementary", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "è andata", "clozeText": "Lei ______ ______ (andare) a casa.", "answer": "è andata", "level": "elementary", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "andrò", "clozeText": "Domani ______ (andare) al mare.", "answer": "andrò", "level": "elementary", "theme": "grammar_future_simple", "category": "grammar" },
            { "word": "lo", "clozeText": "Il libro? ______ (it/masc) leggo dopo.", "answer": "lo", "level": "elementary", "theme": "grammar_objective_pronouns", "category": "grammar" },
            { "word": "mi", "clozeText": "______ (me) piace la musica.", "answer": "mi", "level": "elementary", "theme": "grammar_objective_pronouns", "category": "grammar" },

            // B1 - Intermediate
            { "word": "facevo", "clozeText": "Da bambino ______ (fare) molto sport.", "answer": "facevo", "level": "intermediate", "theme": "grammar_imparfait", "category": "grammar" },
            { "word": "era", "clozeText": "______ (essere) una bella giornata.", "answer": "era", "level": "intermediate", "theme": "grammar_imparfait", "category": "grammar" },
            { "word": "comprerei", "clozeText": "Se avessi i soldi, ______ (comprare) una casa.", "answer": "comprerei", "level": "intermediate", "theme": "grammar_conditionals", "category": "grammar" },
            { "word": "te lo", "clozeText": "______ ______ (you it) dico domani.", "answer": "te lo", "level": "intermediate", "theme": "grammar_objective_pronouns", "category": "grammar" }
        ],
        "ru": [
            // A1 - Starter
            { "word": "читаю", "clozeText": "Я ______ (читать) книгу.", "answer": "читаю", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "стола", "clozeText": "У меня нет ______ (стол).", "answer": "стола", "level": "starter", "theme": "grammar_cases", "category": "grammar" },

            // A2 - Elementary
            { "word": "иду", "clozeText": "Я ______ (идти) в школу сейчас.", "answer": "иду", "level": "elementary", "theme": "grammar_verbs_motion", "category": "grammar" },
            { "word": "еду", "clozeText": "Я ______ (ехать) на работу на машине.", "answer": "еду", "level": "elementary", "theme": "grammar_verbs_motion", "category": "grammar" },
            { "word": "брату", "clozeText": "Я позвоню ______ (брат).", "answer": "брату", "level": "elementary", "theme": "grammar_cases", "category": "grammar" },
            { "word": "другу", "clozeText": "Я даю книгу ______ (друг).", "answer": "другу", "level": "elementary", "theme": "grammar_cases", "category": "grammar" },
            { "word": "буду", "clozeText": "Я ______ (be) дома завтра.", "answer": "буду", "level": "elementary", "theme": "grammar_future_simple", "category": "grammar" },

            // B1 - Intermediate
            { "word": "прочитал", "clozeText": "Я уже ______ (прочитать - perf) эту книгу.", "answer": "прочитал", "level": "intermediate", "theme": "grammar_aspect", "category": "grammar" },
            { "word": "читал", "clozeText": "Я ______ (читать - imperf) книгу два часа.", "answer": "читал", "level": "intermediate", "theme": "grammar_aspect", "category": "grammar" },
            { "word": "ручкой", "clozeText": "Я пишу ______ (ручка).", "answer": "ручкой", "level": "intermediate", "theme": "grammar_cases", "category": "grammar" },
            { "word": "другом", "clozeText": "Я иду с ______ (друг).", "answer": "другом", "level": "intermediate", "theme": "grammar_cases", "category": "grammar" },
            { "word": "умываюсь", "clozeText": "Я ______ (умываться) по утрам.", "answer": "умываюсь", "level": "intermediate", "theme": "grammar_reflexive_pronouns", "category": "grammar" }
        ],
        "el": [
            // A1 - Starter
            { "word": "έχουμε", "clozeText": "Εμείς ______ (έχω) ένα σπίτι.", "answer": "έχουμε", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "βιβλία", "numberPlural": "2 βιβλίο", "answer": "δύο βιβλία", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },

            // A2 - Elementary
            { "word": "θα πάω", "clozeText": "Αύριο ______ ______ (πάω) στην Αθήνα.", "answer": "θα πάω", "level": "elementary", "theme": "grammar_future_simple", "category": "grammar" },
            { "word": "έφαγα", "clozeText": "Χθες ______ (τρώω) ένα μήλο.", "answer": "έφαγα", "level": "elementary", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "έγραψα", "clozeText": "Του ______ (γράφω) ένα γράμμα.", "answer": "έγραψα", "level": "elementary", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "των παιδιών", "clozeText": "Τα παιχνίδια ______ ______ (τα παιδιά).", "answer": "των παιδιών", "level": "elementary", "theme": "grammar_cases", "category": "grammar" },

            // B1 - Intermediate
            { "word": "να φύγω", "clozeText": "Πρέπει ______ ______ (φεύγω).", "answer": "να φύγω", "level": "intermediate", "theme": "grammar_subjunctive", "category": "grammar" },
            { "word": "να φάμε", "clozeText": "Θέλετε ______ ______ (τρώω);", "answer": "να φάμε", "level": "intermediate", "theme": "grammar_subjunctive", "category": "grammar" },
            { "word": "γράφεται", "clozeText": "Αυτό το βιβλίο ______ (γράφω - passive) τώρα.", "answer": "γράφεται", "level": "intermediate", "theme": "grammar_passive_voice", "category": "grammar" },
            { "word": "καλύτερος", "clozeText": "Είναι ο ______ (καλός) μαθητής.", "answer": "καλύτερος", "level": "intermediate", "theme": "grammar_comparatives", "category": "grammar" }
        ]
    };

    if (window.vocabularyData) {
        for (let lang in grammarData) {
            if (window.vocabularyData[lang]) {
                window.vocabularyData[lang] = [...window.vocabularyData[lang], ...grammarData[lang]];
            }
        }
    }

    window.grammarData = grammarData;
})();
