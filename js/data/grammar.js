(function() {
    const grammarData = {
        "en": [
            { "word": "am", "clozeText": "I ______ a student.", "answer": "am", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "are", "clozeText": "You ______ my friend.", "answer": "are", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "is", "clozeText": "She ______ a teacher.", "answer": "is", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "have", "clozeText": "I ______ a car.", "answer": "have", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "has", "clozeText": "He ______ a dog.", "answer": "has", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "in", "clozeText": "I live ______ London.", "answer": "in", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "on", "clozeText": "The book is ______ the table.", "answer": "on", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "at", "clozeText": "I am ______ school.", "answer": "at", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "many", "clozeText": "How ______ apples?", "answer": "many", "level": "elementary", "theme": "grammar_countable", "category": "grammar" },
            { "word": "much", "clozeText": "How ______ water?", "answer": "much", "level": "elementary", "theme": "grammar_countable", "category": "grammar" },
            { "word": "children", "numberPlural": "2 child", "answer": "two children", "level": "elementary", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "boxes", "numberPlural": "3 box", "answer": "three boxes", "level": "elementary", "theme": "grammar_plurals", "category": "grammar" }
        ],
        "fr": [
            { "word": "suis", "clozeText": "Je ______ français.", "answer": "suis", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "es", "clozeText": "Tu ______ gentil.", "answer": "es", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "est", "clozeText": "Il ______ médecin.", "answer": "est", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "ai", "clozeText": "J'______ un frère.", "answer": "ai", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "as", "clozeText": "Tu ______ une sœur.", "answer": "as", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "a", "clozeText": "Elle ______ un chat.", "answer": "a", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "le", "article": "le", "baseWord": "garçon", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "la", "article": "la", "baseWord": "fille", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "l'", "article": "l'", "baseWord": "eau", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "les", "article": "les", "baseWord": "amis", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "à", "clozeText": "Je vais ______ Paris.", "answer": "à", "level": "elementary", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "en", "clozeText": "J'habite ______ France.", "answer": "en", "level": "elementary", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "chevaux", "numberPlural": "2 cheval", "answer": "deux chevaux", "level": "intermediate", "theme": "grammar_plurals", "category": "grammar" }
        ],
        "it": [
            { "word": "sono", "clozeText": "Io ______ italiano.", "answer": "sono", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "sei", "clozeText": "Tu ______ mio amico.", "answer": "sei", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "è", "clozeText": "Lui ______ un dottore.", "answer": "è", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "ho", "clozeText": "Io ______ fame.", "answer": "ho", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "hai", "clozeText": "Tu ______ un cane.", "answer": "hai", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "ha", "clozeText": "Lei ______ una gatta.", "answer": "ha", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "il", "article": "il", "baseWord": "libro", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "la", "article": "la", "baseWord": "casa", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "lo", "article": "lo", "baseWord": "studente", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "l'", "article": "l'", "baseWord": "amica", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "i", "article": "i", "baseWord": "ragazzi", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "le", "article": "le", "baseWord": "mele", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "gli", "article": "gli", "baseWord": "zaini", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "a", "clozeText": "Vado ______ Roma.", "answer": "a", "level": "elementary", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "in", "clozeText": "Vivo ______ Italia.", "answer": "in", "level": "elementary", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "uomini", "numberPlural": "2 uomo", "answer": "due uomini", "level": "elementary", "theme": "grammar_plurals", "category": "grammar" }
        ],
        "ru": [
            { "word": "есть", "clozeText": "У меня ______ книга.", "answer": "есть", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "был", "clozeText": "Я ______ в парке вчера.", "answer": "был", "level": "elementary", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "была", "clozeText": "Она ______ дома вчера.", "answer": "была", "level": "elementary", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "он", "gender": "он", "baseWord": "стол", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "она", "gender": "она", "baseWord": "машина", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "оно", "gender": "оно", "baseWord": "окно", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "в", "clozeText": "Я живу ______ Москве.", "answer": "в", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "на", "clozeText": "Книга ______ столе.", "answer": "на", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "столы", "numberPlural": "2 стол", "answer": "два стола", "level": "elementary", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "девочки", "numberPlural": "5 девочка", "answer": "пять девочек", "level": "intermediate", "theme": "grammar_plurals", "category": "grammar" },
            { "word": "книги", "clozeText": "У меня нет ______ (книга).", "answer": "книги", "level": "intermediate", "theme": "grammar_cases", "category": "grammar" }
        ],
        "el": [
            { "word": "είμαι", "clozeText": "Εγώ ______ μαθητής.", "answer": "είμαι", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "είσαι", "clozeText": "Εσύ ______ φίλος μου.", "answer": "είσαι", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "είναι", "clozeText": "Αυτός ______ δάσκαλος.", "answer": "είναι", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "έχω", "clozeText": "Εγώ ______ ένα σκύλο.", "answer": "έχω", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "έχεις", "clozeText": "Εσύ ______ ένα γάτο.", "answer": "έχεις", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "έχει", "clozeText": "Αυτή ______ μία κόρη.", "answer": "έχει", "level": "starter", "theme": "grammar_conjugation", "category": "grammar" },
            { "word": "ο", "article": "ο", "baseWord": "άνδρας", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "η", "article": "η", "baseWord": "γυναίκα", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "το", "article": "το", "baseWord": "παιδί", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "οι", "article": "οι", "baseWord": "άνδρες", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "τα", "article": "τα", "baseWord": "παιδιά", "level": "starter", "theme": "grammar_articles", "category": "grammar" },
            { "word": "σε", "clozeText": "Μένω ______ Αθήνα.", "answer": "σε", "level": "starter", "theme": "grammar_prepositions", "category": "grammar" },
            { "word": "παιδιά", "numberPlural": "2 παιδί", "answer": "δύο παιδιά", "level": "elementary", "theme": "grammar_plurals", "category": "grammar" }
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
