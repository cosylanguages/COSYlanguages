(function() {
    const grammarData = {
        "en": [
            // Present Simple
            { "word": "am", "clozeText": "I ______ a student.", "answer": "am", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "is", "clozeText": "She ______ (be) a doctor.", "answer": "is", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "are", "clozeText": "They ______ (be) friends.", "answer": "are", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "works", "clozeText": "He ______ (work) in a bank.", "answer": "works", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "don't", "clozeText": "I ______ (not like) pizza.", "answer": "don't", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "Does", "clozeText": "______ he speak English?", "answer": "Does", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            // Let's
            { "word": "Let's", "clozeText": "______ go to the cinema.", "answer": "Let's", "level": "starter", "theme": "grammar_lets", "category": "grammar" },
            { "word": "Let's", "clozeText": "______ eat lunch now.", "answer": "Let's", "level": "starter", "theme": "grammar_lets", "category": "grammar" },
            // Possessive Adjectives
            { "word": "my", "clozeText": "I like ______ (I) new car.", "answer": "my", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "their", "clozeText": "They live with ______ (they) parents.", "answer": "their", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "our", "clozeText": "This is ______ (we) house.", "answer": "our", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            // Plurals
            { "word": "cities", "numberPlural": "2 city", "answer": "two cities", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "men", "numberPlural": "3 man", "answer": "three men", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "boxes", "numberPlural": "5 box", "answer": "five boxes", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            // Imperative
            { "word": "Listen", "clozeText": "______ (listen) to me!", "answer": "Listen", "level": "starter", "theme": "grammar_imperative", "category": "grammar" },
            { "word": "Don't touch", "clozeText": "______ ______ (not touch) that!", "answer": "Don't touch", "level": "starter", "theme": "grammar_imperative", "category": "grammar" },
            // Possessive s'
            { "word": "Sarah's", "clozeText": "That is ______ (Sarah) bag.", "answer": "Sarah's", "level": "starter", "theme": "grammar_possessive_s", "category": "grammar" },
            { "word": "children's", "clozeText": "The ______ (children) toys are here.", "answer": "children's", "level": "starter", "theme": "grammar_possessive_s", "category": "grammar" },
            // Telling the time
            { "word": "quarter past", "clozeText": "It's 10:15. It's ______ ______ ten.", "answer": "quarter past", "level": "starter", "theme": "grammar_telling_time", "category": "grammar" },
            { "word": "half past", "clozeText": "It's 2:30. It's ______ ______ two.", "answer": "half past", "level": "starter", "theme": "grammar_telling_time", "category": "grammar" },
            // Future Simple
            { "word": "will stay", "clozeText": "I ______ ______ (stay) at home tonight.", "answer": "will stay", "level": "starter", "theme": "grammar_future_simple", "category": "grammar" },
            { "word": "won't", "clozeText": "It ______ (not rain) tomorrow.", "answer": "won't", "level": "starter", "theme": "grammar_future_simple", "category": "grammar" },
            // Prepositions of Time
            { "word": "at", "clozeText": "The class starts ______ nine o'clock.", "answer": "at", "level": "starter", "theme": "grammar_prepositions_time", "category": "grammar" },
            { "word": "in", "clozeText": "I was born ______ 1995.", "answer": "in", "level": "starter", "theme": "grammar_prepositions_time", "category": "grammar" },
            { "word": "on", "clozeText": "We have a meeting ______ Friday.", "answer": "on", "level": "starter", "theme": "grammar_prepositions_time", "category": "grammar" },
            // Prepositions of Place
            { "word": "on", "clozeText": "The laptop is ______ the desk.", "answer": "on", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            { "word": "between", "clozeText": "The shop is ______ the bank and the cafe.", "answer": "between", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            { "word": "under", "clozeText": "The dog is ______ the table.", "answer": "under", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            // Ordinal Numbers
            { "word": "second", "clozeText": "He finished in ______ (2nd) place.", "answer": "second", "level": "starter", "theme": "grammar_ordinal_numbers", "category": "grammar" },
            { "word": "third", "clozeText": "March is the ______ (3rd) month.", "answer": "third", "level": "starter", "theme": "grammar_ordinal_numbers", "category": "grammar" },
            // There is/are
            { "word": "There are", "clozeText": "______ ______ some flowers in the garden.", "answer": "There are", "level": "starter", "theme": "grammar_there_is_are", "category": "grammar" },
            { "word": "There is", "clozeText": "______ ______ a message for you.", "answer": "There is", "level": "starter", "theme": "grammar_there_is_are", "category": "grammar" },
            // Demonstrative Pronouns
            { "word": "This", "clozeText": "______ is a great book!", "answer": "This", "level": "starter", "theme": "grammar_demonstrative_pronouns", "category": "grammar" },
            { "word": "Those", "clozeText": "______ are my shoes over there.", "answer": "Those", "level": "starter", "theme": "grammar_demonstrative_pronouns", "category": "grammar" },
            // Countable vs Uncountable
            { "word": "uncountable", "multipleChoice": ["countable", "uncountable"], "clozeText": "Is 'Water' countable or uncountable?", "answer": "uncountable", "level": "starter", "theme": "grammar_countable_uncountable", "category": "grammar" },
            { "word": "countable", "multipleChoice": ["countable", "uncountable"], "clozeText": "Is 'Chair' countable or uncountable?", "answer": "countable", "level": "starter", "theme": "grammar_countable_uncountable", "category": "grammar" },
            // Much/Many/A lot
            { "word": "much", "clozeText": "I don't have ______ money.", "answer": "much", "level": "starter", "theme": "grammar_much_many_a_lot", "category": "grammar" },
            { "word": "many", "clozeText": "How ______ apples did you buy?", "answer": "many", "level": "starter", "theme": "grammar_much_many_a_lot", "category": "grammar" },
            // Past Simple
            { "word": "played", "clozeText": "We ______ (play) tennis yesterday.", "answer": "played", "level": "starter", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "went", "clozeText": "They ______ (go) to the beach last week.", "answer": "went", "level": "starter", "theme": "grammar_past_simple", "category": "grammar" },
            // Objective Pronouns
            { "word": "us", "clozeText": "Can you help ______ (we)?", "answer": "us", "level": "starter", "theme": "grammar_objective_pronouns", "category": "grammar" },
            { "word": "him", "clozeText": "I saw ______ (he) at the station.", "answer": "him", "level": "starter", "theme": "grammar_objective_pronouns", "category": "grammar" },
            // Question Words
            { "word": "Who", "clozeText": "______ is that man?", "answer": "Who", "level": "starter", "theme": "grammar_question_words", "category": "grammar" },
            { "word": "Why", "clozeText": "______ are you late?", "answer": "Why", "level": "starter", "theme": "grammar_question_words", "category": "grammar" }
        ],
        "fr": [
            // Présent
            { "word": "suis", "clozeText": "Je ______ (être) très heureux.", "answer": "suis", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "habitons", "clozeText": "Nous ______ (habiter) à Paris.", "answer": "habitons", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "ne mange pas", "clozeText": "Je ______ ______ ______ (ne pas manger) de viande.", "answer": "ne mange pas", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "parlez", "clozeText": "______-vous (parler) français ?", "answer": "parlez", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            // Verb Groups (ER, regular)
            { "word": "parle", "clozeText": "Elle ______ (parler - régulier en ER) espagnol.", "answer": "parle", "level": "starter", "theme": "grammar_verb_groups", "category": "grammar" },
            { "word": "mangent", "clozeText": "Ils ______ (manger - régulier en ER) une pomme.", "answer": "mangent", "level": "starter", "theme": "grammar_verb_groups", "category": "grammar" },
            // Gender & Articles
            { "word": "un", "article": "un", "baseWord": "chien", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "la", "article": "la", "baseWord": "pomme", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "l'", "article": "l'", "baseWord": "école", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            // Possessive Adjectives
            { "word": "ton", "clozeText": "C'est ______ (tu) stylo.", "answer": "ton", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "notre", "clozeText": "C'est ______ (nous) maison.", "answer": "notre", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "ses", "clozeText": "Il cherche ______ (il/pluriel) clés.", "answer": "ses", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            // Plurals
            { "word": "enfants", "numberPlural": "2 enfant", "answer": "deux enfants", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "journaux", "numberPlural": "3 journal", "answer": "trois journaux", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            // Prepositions
            { "word": "à", "clozeText": "Je vais ______ la bibliothèque.", "answer": "à", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            { "word": "chez", "clozeText": "Je vais ______ mon ami.", "answer": "chez", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            { "word": "en", "clozeText": "Nous sommes ______ été.", "answer": "en", "level": "starter", "theme": "grammar_prepositions_time", "category": "grammar" },
            // Partitive Articles
            { "word": "du", "clozeText": "Je bois ______ (le) café.", "answer": "du", "level": "starter", "theme": "grammar_partitive_articles", "category": "grammar" },
            { "word": "de la", "clozeText": "Je veux ______ ______ (la) glace.", "answer": "de la", "level": "starter", "theme": "grammar_partitive_articles", "category": "grammar" },
            // Reflexive Pronouns
            { "word": "se", "clozeText": "Il ______ lève à huit heures.", "answer": "se", "level": "starter", "theme": "grammar_reflexive_pronouns", "category": "grammar" },
            { "word": "nous", "clozeText": "Nous ______ lavons les mains.", "answer": "nous", "level": "starter", "theme": "grammar_reflexive_pronouns", "category": "grammar" },
            // Past Simple (Passé Composé)
            { "word": "est allé", "clozeText": "Il ______ ______ (aller) au marché.", "answer": "est allé", "level": "starter", "theme": "grammar_past_simple", "category": "grammar" },
            { "word": "ai fini", "clozeText": "J'______ ______ (finir) mes devoirs.", "answer": "ai fini", "level": "starter", "theme": "grammar_past_simple", "category": "grammar" }
        ],
        "it": [
            // Presente
            { "word": "siamo", "clozeText": "Noi ______ (essere) pronti.", "answer": "siamo", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "lavora", "clozeText": "Lui ______ (lavorare) molto.", "answer": "lavora", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "mangi", "clozeText": "Tu ______ (mangiare) troppo.", "answer": "mangi", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            // Gender & Articles
            { "word": "lo", "article": "lo", "baseWord": "zaino", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "le", "article": "le", "baseWord": "chiavi", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "un'", "article": "un'", "baseWord": "amica", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            // Plurals
            { "word": "donne", "numberPlural": "2 donna", "answer": "due donne", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "libri", "numberPlural": "3 libro", "answer": "tre libri", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            // Prepositions
            { "word": "a", "clozeText": "Abito ______ Milano.", "answer": "a", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            { "word": "in", "clozeText": "Vado ______ ufficio.", "answer": "in", "level": "starter", "theme": "grammar_prepositions_place", "category": "grammar" },
            // Possessive Adjectives
            { "word": "mio", "clozeText": "Il ______ (io) gatto è nero.", "answer": "mio", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" },
            { "word": "tua", "clozeText": "La ______ (tu) borsa è bella.", "answer": "tua", "level": "starter", "theme": "grammar_possessive_adjectives", "category": "grammar" }
        ],
        "ru": [
            // Present
            { "word": "читаю", "clozeText": "Я ______ (читать) книгу.", "answer": "читаю", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "пишет", "clozeText": "Он ______ (писать) письмо.", "answer": "пишет", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            // Gender & Cases
            { "word": "стола", "clozeText": "У меня нет ______ (стол).", "answer": "стола", "level": "starter", "theme": "grammar_cases", "category": "grammar" },
            { "word": "книге", "clozeText": "Я думаю о ______ (книга).", "answer": "книге", "level": "starter", "theme": "grammar_cases", "category": "grammar" },
            { "word": "Москву", "clozeText": "Я еду в ______ (Москва).", "answer": "Москву", "level": "starter", "theme": "grammar_cases", "category": "grammar" },
            // Pronouns
            { "word": "меня", "clozeText": "У ______ (я) есть собака.", "answer": "меня", "level": "starter", "theme": "grammar_objective_pronouns", "category": "grammar" },
            { "word": "тебя", "clozeText": "Я люблю ______ (ты).", "answer": "тебя", "level": "starter", "theme": "grammar_objective_pronouns", "category": "grammar" },
            // Plurals
            { "word": "дома", "numberPlural": "2 дом", "answer": "два дома", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "окна", "numberPlural": "3 окно", "answer": "три окна", "level": "starter", "theme": "grammar_plurals", "category": "grammar" }
        ],
        "el": [
            // Ενεστώτας
            { "word": "έχουμε", "clozeText": "Εμείς ______ (έχω) ένα σπίτι.", "answer": "έχουμε", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            { "word": "κάνεις", "clozeText": "Τι ______ (κάνω) εσύ;", "answer": "κάνεις", "level": "starter", "theme": "grammar_present_simple", "category": "grammar" },
            // Cases
            { "word": "του", "clozeText": "Το αυτοκίνητο ______ (ο) πατέρα.", "answer": "του", "level": "starter", "theme": "grammar_cases", "category": "grammar" },
            { "word": "της", "clozeText": "Η τσάντα ______ (η) Μαρίας.", "answer": "της", "level": "starter", "theme": "grammar_cases", "category": "grammar" },
            // Articles
            { "word": "την", "clozeText": "Βλέπω ______ (η) γυναίκα.", "answer": "την", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            { "word": "το", "clozeText": "Θέλω ______ (το) βιβλίο.", "answer": "το", "level": "starter", "theme": "grammar_gender_articles", "category": "grammar" },
            // Plurals
            { "word": "βιβλία", "numberPlural": "2 βιβλίο", "answer": "δύο βιβλία", "level": "starter", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "άνδρες", "numberPlural": "3 άνδρας", "answer": "τρεις άνδρες", "level": "starter", "theme": "grammar_plurals", "category": "grammar" }
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
