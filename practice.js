const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "Hello", emoji: "👋", opposite: "Goodbye", oppositeEmoji: "🖐️", category: "vocabulary" },
                { word: "Yes", emoji: "✅", opposite: "No", oppositeEmoji: "❌", category: "vocabulary" },
                { word: "Thank you", emoji: "🙏", opposite: "You're welcome", oppositeEmoji: "💁‍♂️", category: "vocabulary" },
                { word: "Please", emoji: "🥺", clozeText: "A coffee, ______.", answer: "please", category: "vocabulary" },
                { word: "Alright", emoji: "👍", opposite: "Ok", oppositeEmoji: "👌", category: "vocabulary" },
                { word: "Sorry", emoji: "🙇‍♂️", opposite: ":(", oppositeEmoji: "☹️", category: "vocabulary" },
                { word: "or", emoji: "🔀", clozeText: "Coffee ______ tea?", answer: "or", category: "grammar" },
                { word: "coffee", emoji: "☕", category: "vocabulary" },
                { word: "tea", emoji: "🍵", category: "vocabulary" },
                { word: "juice", emoji: "🧃", category: "vocabulary" },
                { word: "wine", emoji: "🍷", category: "vocabulary" },
                { word: "beer", emoji: "🍺", category: "vocabulary" },
                { word: "water", emoji: "🚰", category: "vocabulary" },
                { word: "cash", emoji: "💵", category: "vocabulary" },
                { word: "card", emoji: "💳", category: "vocabulary" },
                { word: "not", emoji: "❌", clozeText: "No, it is ______ coffee.", answer: "not", category: "grammar" },
                { word: "What", emoji: "❓", clozeText: "______'s it?", answer: "What", category: "grammar" },
                { word: "but", emoji: "⚖️", clozeText: "No, it is not coffee, ______ it is tea.", answer: "but", category: "grammar" }
            ]
        },
        2: {
            title: "Day 2 | A thing or a person?",
            words: [
                { word: "thing", emoji: "📦", category: "vocabulary" },
                { word: "person", emoji: "👤", category: "vocabulary" },
                { word: "man", emoji: "👨", opposite: "woman", oppositeEmoji: "👩", category: "vocabulary" },
                { word: "woman", emoji: "👩", opposite: "man", oppositeEmoji: "👨", category: "vocabulary" },
                { word: "boy", emoji: "👦", opposite: "girl", oppositeEmoji: "👧", category: "vocabulary" },
                { word: "girl", emoji: "👧", opposite: "boy", oppositeEmoji: "👦", category: "vocabulary" },
                { word: "teacher", emoji: "🧑‍🏫", opposite: "student", oppositeEmoji: "🧑‍🎓", category: "vocabulary" },
                { word: "student", emoji: "🧑‍🎓", opposite: "teacher", oppositeEmoji: "🧑‍🏫", category: "vocabulary" },
                { word: "Nice to meet you", emoji: "🤝", clozeText: "I am James, ____", answer: "Nice to meet you", category: "vocabulary" },
                { word: "no problem", emoji: "👌", category: "vocabulary" },
                { word: "too", emoji: "➕", category: "grammar" },
                { word: "who", emoji: "❓👤", clozeText: "____ is it? - It's a person.", answer: "who", category: "grammar" },
                { word: "and", emoji: "➕", clozeText: "A man ___ a woman.", answer: "and", category: "grammar" },
                { word: "child", emoji: "👶", category: "vocabulary" }
            ]
        },
        3: {
            title: "Day 3 | Family & Pets",
            words: [
                { word: "mother", emoji: "👩‍👦", opposite: "father", oppositeEmoji: "👨‍👦", category: "vocabulary" },
                { word: "father", emoji: "👨‍👦", opposite: "mother", oppositeEmoji: "👩‍👦", category: "vocabulary" },
                { word: "sister", emoji: "👩‍👧‍👧", opposite: "brother", oppositeEmoji: "👨‍👦‍👦", category: "vocabulary" },
                { word: "brother", emoji: "👨‍👦‍👦", opposite: "sister", oppositeEmoji: "👩‍👧‍👧", category: "vocabulary" },
                { word: "daughter", emoji: "👧", opposite: "son", oppositeEmoji: "👦", category: "vocabulary" },
                { word: "son", emoji: "👦", opposite: "daughter", oppositeEmoji: "👧", category: "vocabulary" },
                { word: "wife", emoji: "👰", opposite: "husband", oppositeEmoji: "🤵", category: "vocabulary" },
                { word: "husband", emoji: "🤵", opposite: "wife", oppositeEmoji: "👰", category: "vocabulary" },
                { word: "friend", emoji: "👫", category: "vocabulary" },
                { word: "family", emoji: "👨‍👩‍👧‍👦", category: "vocabulary" },
                { word: "parent", emoji: "👪", category: "vocabulary" },
                { word: "cat", emoji: "🐈", category: "vocabulary" },
                { word: "dog", emoji: "🐕", category: "vocabulary" },
                { word: "fish", emoji: "🐟", category: "vocabulary" },
                { word: "parrot", emoji: "🦜", category: "vocabulary" },
                { word: "only", emoji: "☝️", clozeText: "an ______ child.", answer: "only", category: "grammar" },
                { word: "Do you have a family?", emoji: "👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Do you have a mother? What is her name?", emoji: "👩‍👦", type: "conversation", category: "conversation" },
                { word: "Do you have a father? What is his name?", emoji: "👨‍👦", type: "conversation", category: "conversation" },
                { word: "Do you have a brother? What is his name?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation" },
                { word: "Do you have a sister? What is her name?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation" },
                { word: "Do you have a son? What is his name?", emoji: "👦", type: "conversation", category: "conversation" },
                { word: "Do you have a daughter? What is her name?", emoji: "👧", type: "conversation", category: "conversation" },
                { word: "Do you have a cat? What is its name?", emoji: "🐈", type: "conversation", category: "conversation" },
                { word: "Do you have a dog? What is its name?", emoji: "🐕", type: "conversation", category: "conversation" },
                { word: "Do you have a fish? What is its name?", emoji: "🐟", type: "conversation", category: "conversation" },
                { word: "Do you have a parrot? What is its name?", emoji: "🦜", type: "conversation", category: "conversation" },
                { word: "Does your friend have a family?", emoji: "👫👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Does your friend have a mother? What is her name?", emoji: "👩‍👦", type: "conversation", category: "conversation", subtext: "What is her name? = Who is she? = What's her name?" },
                { word: "Does your friend have a father? What is his name?", emoji: "👨‍👦", type: "conversation", category: "conversation", subtext: "What is his name? = Who is he? = What's his name?" },
                { word: "Does your friend have a brother? What is his name?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation", subtext: "What is his name? = Who is he? = What's his name?" },
                { word: "Does your friend have a sister? What is her name?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation", subtext: "What is her name? = Who is she? = What's her name?" },
                { word: "Does your friend have a son? What is his name?", emoji: "👦", type: "conversation", category: "conversation", subtext: "What is his name? = Who is he? = What's his name?" },
                { word: "Does your friend have a daughter? What is her name?", emoji: "👧", type: "conversation", category: "conversation", subtext: "What is her name? = Who is she? = What's her name?" },
                { word: "Does your friend have a cat? What is its name?", emoji: "🐈", type: "conversation", category: "conversation", subtext: "What is its name? = Who is it? = What's its name?" },
                { word: "Does your friend have a dog? What is its name?", emoji: "🐕", type: "conversation", category: "conversation", subtext: "What is its name? = Who is it? = What's its name?" },
                { word: "Does your friend have a fish? What is its name?", emoji: "🐟", type: "conversation", category: "conversation", subtext: "What is its name? = Who is it? = What's its name?" },
                { word: "Does your friend have a parrot? What is its name?", emoji: "🦜", type: "conversation", category: "conversation", subtext: "What is its name? = Who is it? = What's its name?" }
            ]
        }
    },
    fr: {
        1: {
            title: "Jour 1 | Vocabulaire de base",
            words: [
                { word: "Bonjour", emoji: "👋", opposite: "Au revoir", oppositeEmoji: "🖐️", category: "vocabulary" },
                { word: "Oui", emoji: "✅", opposite: "Non", oppositeEmoji: "❌", category: "vocabulary" },
                { word: "Merci", emoji: "🙏", opposite: "De rien", oppositeEmoji: "💁‍♂️", category: "vocabulary" },
                { word: "S'il vous plaît", emoji: "🥺", clozeText: "Un café, ______ ______ ______.", answer: "s'il vous plaît", category: "vocabulary" },
                { word: "D'accord", emoji: "👍", opposite: "Ok", oppositeEmoji: "👌", category: "vocabulary" },
                { word: "Désolé", emoji: "🙇‍♂️", opposite: ":(", oppositeEmoji: "☹️", category: "vocabulary" },
                { word: "ou", emoji: "🔀", clozeText: "Café ______ thé ?", answer: "ou", category: "grammar" },
                { word: "le café", emoji: "☕", category: "vocabulary", article: "le", baseWord: "café" },
                { word: "le thé", emoji: "🍵", category: "vocabulary", article: "le", baseWord: "thé" },
                { word: "le jus", emoji: "🧃", category: "vocabulary", article: "le", baseWord: "jus" },
                { word: "le vin", emoji: "🍷", category: "vocabulary", article: "le", baseWord: "vin" },
                { word: "la bière", emoji: "🍺", category: "vocabulary", article: "la", baseWord: "bière" },
                { word: "l'eau", emoji: "🚰", category: "vocabulary", article: "l'", baseWord: "eau" },
                { word: "les espèces", emoji: "💵", category: "vocabulary", article: "les", baseWord: "espèces" },
                { word: "la carte", emoji: "💳", category: "vocabulary", article: "la", baseWord: "carte" },
                { word: "pas", emoji: "❌", clozeText: "Non, ce n'est ______ du café.", answer: "pas", category: "grammar" },
                { word: "Quoi", emoji: "❓", clozeText: "C'est ______ ?", answer: "quoi", category: "grammar" },
                { word: "mais", emoji: "⚖️", clozeText: "Non, ce n'est pas du café, ______ c'est du thé.", answer: "mais", category: "grammar" }
            ]
        },
        2: {
            title: "Jour 2 | Une chose ou une personne ?",
            words: [
                { word: "la chose", emoji: "📦", category: "vocabulary", article: "la", baseWord: "chose" },
                { word: "la personne", emoji: "👤", category: "vocabulary", article: "la", baseWord: "personne" },
                { word: "l'homme", emoji: "👨", opposite: "la femme", oppositeEmoji: "👩", category: "vocabulary", article: "l'", baseWord: "homme" },
                { word: "la femme", emoji: "👩", opposite: "l'homme", oppositeEmoji: "👨", category: "vocabulary", article: "la", baseWord: "femme" },
                { word: "le garçon", emoji: "👦", opposite: "la fille", oppositeEmoji: "👧", category: "vocabulary", article: "le", baseWord: "garçon" },
                { word: "la fille", emoji: "👧", opposite: "le garçon", oppositeEmoji: "👦", category: "vocabulary", article: "la", baseWord: "fille" },
                { word: "le professeur / la professeure", emoji: "🧑‍🏫", category: "vocabulary", article: "le / la", baseWord: "professeur / professeure" },
                { word: "l'étudiant / l'étudiante", emoji: "🧑‍🎓", category: "vocabulary", article: "l'", baseWord: "étudiant / étudiante" },
                { word: "Enchanté", emoji: "🤝", clozeText: "Je suis James, ____", answer: "Enchanté", category: "vocabulary" },
                { word: "pas de problème", emoji: "👌", category: "vocabulary" },
                { word: "aussi", emoji: "➕", category: "grammar" },
                { word: "qui", emoji: "❓👤", clozeText: "____ est-ce ? - C'est une personne.", answer: "qui", category: "grammar" },
                { word: "et", emoji: "➕", clozeText: "Un homme ___ une femme.", answer: "et", category: "grammar" },
                { word: "l'enfant", emoji: "👶", category: "vocabulary", article: "l'", baseWord: "enfant" }
            ]
        },
        3: {
            title: "Jour 3 | Famille et Animaux",
            words: [
                { word: "la mère", emoji: "👩‍👦", opposite: "le père", oppositeEmoji: "👨‍👦", category: "vocabulary", article: "la", baseWord: "mère" },
                { word: "le père", emoji: "👨‍👦", opposite: "la mère", oppositeEmoji: "👩‍👦", category: "vocabulary", article: "le", baseWord: "père" },
                { word: "la sœur", emoji: "👩‍👧‍👧", opposite: "le frère", oppositeEmoji: "👨‍👦‍👦", category: "vocabulary", article: "la", baseWord: "sœur" },
                { word: "le frère", emoji: "👨‍👦‍👦", opposite: "la sœur", oppositeEmoji: "👩‍👧‍👧", category: "vocabulary", article: "le", baseWord: "frère" },
                { word: "la fille", emoji: "👧", opposite: "le fils", oppositeEmoji: "👦", category: "vocabulary", article: "la", baseWord: "fille" },
                { word: "le fils", emoji: "👦", opposite: "la fille", oppositeEmoji: "👧", category: "vocabulary", article: "le", baseWord: "fils" },
                { word: "la femme", emoji: "👰", opposite: "le mari", oppositeEmoji: "🤵", category: "vocabulary", article: "la", baseWord: "femme" },
                { word: "le mari", emoji: "🤵", opposite: "la femme", oppositeEmoji: "👰", category: "vocabulary", article: "le", baseWord: "mari" },
                { word: "l'ami / l'amie", emoji: "👫", category: "vocabulary", article: "l'", baseWord: "ami / amie" },
                { word: "la famille", emoji: "👨‍👩‍👧‍👦", category: "vocabulary", article: "la", baseWord: "famille" },
                { word: "le parent", emoji: "👪", category: "vocabulary", article: "le", baseWord: "parent" },
                { word: "le chat", emoji: "🐈", category: "vocabulary", article: "le", baseWord: "chat" },
                { word: "le chien", emoji: "🐕", category: "vocabulary", article: "le", baseWord: "chien" },
                { word: "le poisson", emoji: "🐟", category: "vocabulary", article: "le", baseWord: "poisson" },
                { word: "le perroquet", emoji: "🦜", category: "vocabulary", article: "le", baseWord: "perroquet" },
                { word: "unique", emoji: "☝️", clozeText: "enfant ______.", answer: "unique", category: "grammar" },
                { word: "As-tu une famille ?", emoji: "👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "As-tu une mère ? Comment s'appelle-t-elle ?", emoji: "👩‍👦", type: "conversation", category: "conversation" },
                { word: "As-tu un père ? Comment s'appelle-t-il ?", emoji: "👨‍👦", type: "conversation", category: "conversation" },
                { word: "As-tu un frère ? Comment s'appelle-t-il ?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation" },
                { word: "As-tu une sœur ? Comment s'appelle-t-elle ?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation" },
                { word: "As-tu un fils ? Comment s'appelle-t-il ?", emoji: "👦", type: "conversation", category: "conversation" },
                { word: "As-tu une fille ? Comment s'appelle-t-elle ?", emoji: "👧", type: "conversation", category: "conversation" },
                { word: "As-tu un chat ? Comment s'appelle-t-il ?", emoji: "🐈", type: "conversation", category: "conversation" },
                { word: "As-tu un chien ? Comment s'appelle-t-il ?", emoji: "🐕", type: "conversation", category: "conversation" },
                { word: "As-tu un poisson ? Comment s'appelle-t-il ?", emoji: "🐟", type: "conversation", category: "conversation" },
                { word: "As-tu un perroquet ? Comment s'appelle-t-il ?", emoji: "🦜", type: "conversation", category: "conversation" },
                { word: "Ton ami(e) a-t-il/elle une famille ?", emoji: "👫👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Ton ami(e) a-t-il/elle une mère ? Comment s'appelle-t-elle ?", emoji: "👩‍👦", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-elle ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un père ? Comment s'appelle-t-il ?", emoji: "👨‍👦", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un frère ? Comment s'appelle-t-il ?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle une sœur ? Comment s'appelle-t-elle ?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-elle ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un fils ? Comment s'appelle-t-il ?", emoji: "👦", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle une fille ? Comment s'appelle-t-elle ?", emoji: "👧", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-elle ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un chat ? Comment s'appelle-t-il ?", emoji: "🐈", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un chien ? Comment s'appelle-t-il ?", emoji: "🐕", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un poisson ? Comment s'appelle-t-il ?", emoji: "🐟", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" },
                { word: "Ton ami(e) a-t-il/elle un perroquet ? Comment s'appelle-t-il ?", emoji: "🦜", type: "conversation", category: "conversation", subtext: "Comment s'appelle-t-il ? = Qui est-ce ? = Quel est son nom ?" }
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabolario di base",
            words: [
                { word: "Buongiorno", emoji: "👋", opposite: "Arrivederci", oppositeEmoji: "🖐️", category: "vocabulary" },
                { word: "Sì", emoji: "✅", opposite: "No", oppositeEmoji: "❌", category: "vocabulary" },
                { word: "Grazie", emoji: "🙏", opposite: "Prego", oppositeEmoji: "💁‍♂️", category: "vocabulary" },
                { word: "Per favore", emoji: "🥺", clozeText: "Un caffè, ______ ______.", answer: "per favore", category: "vocabulary" },
                { word: "Va bene", emoji: "👍", opposite: "Ok", oppositeEmoji: "👌", category: "vocabulary" },
                { word: "Scusi", emoji: "🙇‍♂️", opposite: ":(", oppositeEmoji: "☹️", category: "vocabulary" },
                { word: "o", emoji: "🔀", clozeText: "Caffè ______ tè?", answer: "o", category: "grammar" },
                { word: "il caffè", emoji: "☕", category: "vocabulary", article: "il", baseWord: "caffè" },
                { word: "il tè", emoji: "🍵", category: "vocabulary", article: "il", baseWord: "tè" },
                { word: "il succo", emoji: "🧃", category: "vocabulary", article: "il", baseWord: "succo" },
                { word: "il vino", emoji: "🍷", category: "vocabulary", article: "il", baseWord: "vino" },
                { word: "la birra", emoji: "🍺", category: "vocabulary", article: "la", baseWord: "birra" },
                { word: "l'acqua", emoji: "🚰", category: "vocabulary", article: "l'", baseWord: "acqua" },
                { word: "i contanti", emoji: "💵", category: "vocabulary", article: "i", baseWord: "contanti" },
                { word: "la carta", emoji: "💳", category: "vocabulary", article: "la", baseWord: "carta" },
                { word: "non", emoji: "❌", clozeText: "No, ______ è caffè.", answer: "non", category: "grammar" },
                { word: "Cosa", emoji: "❓", clozeText: "______'è?", answer: "cosa", category: "grammar" },
                { word: "ma", emoji: "⚖️", clozeText: "No, non è caffè, ______ è tè.", answer: "ma", category: "grammar" }
            ]
        },
        2: {
            title: "Giorno 2 | Una cosa o una persona?",
            words: [
                { word: "la cosa", emoji: "📦", category: "vocabulary", article: "la", baseWord: "cosa" },
                { word: "la persona", emoji: "👤", category: "vocabulary", article: "la", baseWord: "persona" },
                { word: "l'uomo", emoji: "👨", opposite: "la donna", oppositeEmoji: "👩", category: "vocabulary", article: "l'", baseWord: "uomo" },
                { word: "la donna", emoji: "👩", opposite: "l'uomo", oppositeEmoji: "👨", category: "vocabulary", article: "la", baseWord: "donna" },
                { word: "il ragazzo", emoji: "👦", opposite: "la ragazza", oppositeEmoji: "👧", category: "vocabulary", article: "il", baseWord: "ragazzo" },
                { word: "la ragazza", emoji: "👧", opposite: "il ragazzo", oppositeEmoji: "👦", category: "vocabulary", article: "la", baseWord: "ragazza" },
                { word: "il professore / la professoressa", emoji: "🧑‍🏫", category: "vocabulary", article: "il / la", baseWord: "professore / professoressa" },
                { word: "lo studente / la studentessa", emoji: "🧑‍🎓", category: "vocabulary", article: "lo / la", baseWord: "studente / studentessa" },
                { word: "Piacere", emoji: "🤝", clozeText: "Io sono James, ____", answer: "Piacere", category: "vocabulary" },
                { word: "nessun problema", emoji: "👌", category: "vocabulary" },
                { word: "anche", emoji: "➕", category: "grammar" },
                { word: "chi", emoji: "❓👤", clozeText: "____ è? - È una persona.", answer: "chi", category: "grammar" },
                { word: "e", emoji: "➕", clozeText: "Un uomo ___ una donna.", answer: "e", category: "grammar" },
                { word: "il bambino / la bambina", emoji: "👶", category: "vocabulary", article: "il / la", baseWord: "bambino / bambina" }
            ]
        },
        3: {
            title: "Giorno 3 | Famiglia e Animali",
            words: [
                { word: "la madre", emoji: "👩‍👦", opposite: "il padre", oppositeEmoji: "👨‍👦", category: "vocabulary", article: "la", baseWord: "madre" },
                { word: "il padre", emoji: "👨‍👦", opposite: "la madre", oppositeEmoji: "👩‍👦", category: "vocabulary", article: "il", baseWord: "padre" },
                { word: "la sorella", emoji: "👩‍👧‍👧", opposite: "il fratello", oppositeEmoji: "👨‍👦‍👦", category: "vocabulary", article: "la", baseWord: "sorella" },
                { word: "il fratello", emoji: "👨‍👦‍👦", opposite: "la sorella", oppositeEmoji: "👩‍👧‍👧", category: "vocabulary", article: "il", baseWord: "fratello" },
                { word: "la figlia", emoji: "👧", opposite: "il figlio", oppositeEmoji: "👦", category: "vocabulary", article: "la", baseWord: "figlia" },
                { word: "il figlio", emoji: "👦", opposite: "la figlia", oppositeEmoji: "👧", category: "vocabulary", article: "il", baseWord: "figlio" },
                { word: "la moglie", emoji: "👰", opposite: "il marito", oppositeEmoji: "🤵", category: "vocabulary", article: "la", baseWord: "moglie" },
                { word: "il marito", emoji: "🤵", opposite: "la moglie", oppositeEmoji: "👰", category: "vocabulary", article: "il", baseWord: "marito" },
                { word: "l'amico / l'amica", emoji: "👫", category: "vocabulary", article: "l'", baseWord: "amico / amica" },
                { word: "la famiglia", emoji: "👨‍👩‍👧‍👦", category: "vocabulary", article: "la", baseWord: "famiglia" },
                { word: "il genitore", emoji: "👪", category: "vocabulary", article: "il", baseWord: "genitore" },
                { word: "il gatto", emoji: "🐈", category: "vocabulary", article: "il", baseWord: "gatto" },
                { word: "il cane", emoji: "🐕", category: "vocabulary", article: "il", baseWord: "cane" },
                { word: "il pesce", emoji: "🐟", category: "vocabulary", article: "il", baseWord: "pesce" },
                { word: "il pappagallo", emoji: "🦜", category: "vocabulary", article: "il", baseWord: "pappagallo" },
                { word: "unico", emoji: "☝️", clozeText: "figlio ______.", answer: "unico", category: "grammar" },
                { word: "Hai una famiglia?", emoji: "👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Hai una madre? Come si chiama?", emoji: "👩‍👦", type: "conversation", category: "conversation" },
                { word: "Hai un padre? Come si chiama?", emoji: "👨‍👦", type: "conversation", category: "conversation" },
                { word: "Hai un fratello? Come si chiama?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation" },
                { word: "Hai una sorella? Come si chiama?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation" },
                { word: "Hai un figlio? Come si chiama?", emoji: "👦", type: "conversation", category: "conversation" },
                { word: "Hai una figlia? Come si chiama?", emoji: "👧", type: "conversation", category: "conversation" },
                { word: "Hai un.a gatto.a? Come si chiama?", emoji: "🐈", type: "conversation", category: "conversation" },
                { word: "Hai un.a cane? Come si chiama?", emoji: "🐕", type: "conversation", category: "conversation" },
                { word: "Hai un pesce? Come si chiama?", emoji: "🐟", type: "conversation", category: "conversation" },
                { word: "Hai un pappagallo? Come si chiama?", emoji: "🦜", type: "conversation", category: "conversation" },
                { word: "Il tuo amico / la tua amica ha una famiglia?", emoji: "👫👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Il tuo amico / la tua amica ha una madre? Come si chiama?", emoji: "👩‍👦", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un padre? Come si chiama?", emoji: "👨‍👦", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un fratello? Come si chiama?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha una sorella? Come si chiama?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un figlio? Come si chiama?", emoji: "👦", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha una figlia? Come si chiama?", emoji: "👧", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un.a gatto.a? Come si chiama?", emoji: "🐈", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un.a cane? Come si chiama?", emoji: "🐕", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un pesce? Come si chiama?", emoji: "🐟", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" },
                { word: "Il tuo amico / la tua amica ha un pappagallo? Come si chiama?", emoji: "🦜", type: "conversation", category: "conversation", subtext: "Come si chiama? = chi è? = qual è il suo nome?" }
            ]
        }
    },
    ru: {
        1: {
            title: "День 1 | Базовая лексика",
            words: [
                { word: "Добрый день", emoji: "👋", opposite: "До свидания", oppositeEmoji: "🖐️", category: "vocabulary" },
                { word: "Да", emoji: "✅", opposite: "Нет", oppositeEmoji: "❌", category: "vocabulary" },
                { word: "Спасибо", emoji: "🙏", opposite: "Пожалуйста", oppositeEmoji: "💁‍♂️", category: "vocabulary" },
                { word: "Пожалуйста", emoji: "🥺", clozeText: "Один кофе, ______.", answer: "пожалуйста", category: "vocabulary" },
                { word: "Хорошо", emoji: "👍", opposite: "Ок", oppositeEmoji: "👌", category: "vocabulary" },
                { word: "Извините", emoji: "🙇‍♂️", opposite: ":(", oppositeEmoji: "☹️", category: "vocabulary" },
                { word: "или", emoji: "🔀", clozeText: "Кофе ______ чай?", answer: "или", category: "grammar" },
                { word: "кофе", emoji: "☕", category: "vocabulary", gender: "он", baseWord: "кофе" },
                { word: "чай", emoji: "🍵", category: "vocabulary", gender: "он", baseWord: "чай" },
                { word: "сок", emoji: "🧃", category: "vocabulary", gender: "он", baseWord: "сок" },
                { word: "вино", emoji: "🍷", category: "vocabulary", gender: "оно", baseWord: "вино" },
                { word: "пиво", emoji: "🍺", category: "vocabulary", gender: "оно", baseWord: "пиво" },
                { word: "вода", emoji: "🚰", category: "vocabulary", gender: "она", baseWord: "вода" },
                { word: "наличные", emoji: "💵", category: "vocabulary" },
                { word: "карта", emoji: "💳", category: "vocabulary", gender: "она", baseWord: "карта" },
                { word: "не", emoji: "❌", clozeText: "Нет, это ______ кофе.", answer: "не", category: "grammar" },
                { word: "Что", emoji: "❓", clozeText: "______ это?", answer: "Что", category: "grammar" },
                { word: "но", emoji: "⚖️", clozeText: "Нет, это не кофе, ______ это чай.", answer: "но", category: "grammar" }
            ]
        },
        2: {
            title: "День 2 | Вещь или человек?",
            words: [
                { word: "вещь", emoji: "📦", category: "vocabulary", gender: "она", baseWord: "вещь" },
                { word: "человек", emoji: "👤", category: "vocabulary", gender: "он", baseWord: "человек" },
                { word: "мужчина", emoji: "👨", opposite: "женщина", oppositeEmoji: "👩", category: "vocabulary", gender: "он", baseWord: "мужчина" },
                { word: "женщина", emoji: "👩", opposite: "мужчина", oppositeEmoji: "👨", category: "vocabulary", gender: "она", baseWord: "женщина" },
                { word: "мальчик", emoji: "👦", opposite: "девочка", oppositeEmoji: "👧", category: "vocabulary", gender: "он", baseWord: "мальчик" },
                { word: "девочка", emoji: "👧", opposite: "мальчик", oppositeEmoji: "👦", category: "vocabulary", gender: "она", baseWord: "девочка" },
                { word: "учитель / учительница", emoji: "🧑‍🏫", category: "vocabulary", gender: "он / она", baseWord: "учитель / учительница" },
                { word: "студент / студентка", emoji: "🧑‍🎓", category: "vocabulary", gender: "он / она", baseWord: "студент / студентка" },
                { word: "Приятно познакомиться", emoji: "🤝", clozeText: "Я Джеймс, ____", answer: "Приятно познакомиться", category: "vocabulary" },
                { word: "без проблем", emoji: "👌", category: "vocabulary" },
                { word: "тоже", emoji: "➕", category: "grammar" },
                { word: "кто", emoji: "❓👤", clozeText: "____ это? - Это человек.", answer: "кто", category: "grammar" },
                { word: "и", emoji: "➕", clozeText: "Мужчина ___ женщина.", answer: "и", category: "grammar" },
                { word: "ребёнок", emoji: "👶", category: "vocabulary", gender: "он", baseWord: "ребёнок" }
            ]
        },
        3: {
            title: "День 3 | Семья и Питомцы",
            words: [
                { word: "мать", emoji: "👩‍👦", opposite: "отец", oppositeEmoji: "👨‍👦", category: "vocabulary", gender: "она", baseWord: "мать" },
                { word: "отец", emoji: "👨‍👦", opposite: "мать", oppositeEmoji: "👩‍👦", category: "vocabulary", gender: "он", baseWord: "отец" },
                { word: "сестра", emoji: "👩‍👧‍👧", opposite: "брат", oppositeEmoji: "👨‍👦‍👦", category: "vocabulary", gender: "она", baseWord: "сестра" },
                { word: "брат", emoji: "👨‍👦‍👦", opposite: "сестра", oppositeEmoji: "👩‍👧‍👧", category: "vocabulary", gender: "он", baseWord: "брат" },
                { word: "дочь", emoji: "👧", opposite: "сын", oppositeEmoji: "👦", category: "vocabulary", gender: "она", baseWord: "дочь" },
                { word: "сын", emoji: "👦", opposite: "дочь", oppositeEmoji: "👧", category: "vocabulary", gender: "он", baseWord: "сын" },
                { word: "жена", emoji: "👰", opposite: "муж", oppositeEmoji: "🤵", category: "vocabulary", gender: "она", baseWord: "жена" },
                { word: "муж", emoji: "🤵", opposite: "жена", oppositeEmoji: "👰", category: "vocabulary", gender: "он", baseWord: "муж" },
                { word: "друг / подруга", emoji: "👫", category: "vocabulary", gender: "он / она", baseWord: "друг / подруга" },
                { word: "семья", emoji: "👨‍👩‍👧‍👦", category: "vocabulary", gender: "она", baseWord: "семья" },
                { word: "родитель", emoji: "👪", category: "vocabulary", gender: "он", baseWord: "родитель" },
                { word: "кот", emoji: "🐈", category: "vocabulary", gender: "он", baseWord: "кот" },
                { word: "собака", emoji: "🐕", category: "vocabulary", gender: "она", baseWord: "собака" },
                { word: "рыба", emoji: "🐟", category: "vocabulary", gender: "она", baseWord: "рыба" },
                { word: "попугай", emoji: "🦜", category: "vocabulary", gender: "он", baseWord: "попугай" },
                { word: "единственный", emoji: "☝️", clozeText: "______ ребёнок.", answer: "единственный", category: "grammar" },
                { word: "У тебя есть семья?", emoji: "👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "У тебя есть мать? Как её зовут?", emoji: "👩‍👦", type: "conversation", category: "conversation" },
                { word: "У тебя есть отец? Как его зовут?", emoji: "👨‍👦", type: "conversation", category: "conversation" },
                { word: "У тебя есть брат? Как его зовут?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation" },
                { word: "У тебя есть сестра? Как её зовут?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation" },
                { word: "У тебя есть сын? Как его зовут?", emoji: "👦", type: "conversation", category: "conversation" },
                { word: "У тебя есть дочь? Как её зовут?", emoji: "👧", type: "conversation", category: "conversation" },
                { word: "У тебя есть кот или кошка? Как его зовут?", emoji: "🐈", type: "conversation", category: "conversation" },
                { word: "У тебя есть собака? Как её зовут?", emoji: "🐕", type: "conversation", category: "conversation" },
                { word: "У тебя есть рыбка? Как её зовут?", emoji: "🐟", type: "conversation", category: "conversation" },
                { word: "У тебя есть попугай? Как его зовут?", emoji: "🦜", type: "conversation", category: "conversation" },
                { word: "У твоего друга / твоей подруги есть семья?", emoji: "👫👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "У твоего друга / твоей подруги есть мать? Как её зовут?", emoji: "👩‍👦", type: "conversation", category: "conversation", subtext: "Как её зовут? = Кто это? = Какое её имя?" },
                { word: "У твоего друга / твоей подруги есть отец? Как его зовут?", emoji: "👨‍👦", type: "conversation", category: "conversation", subtext: "Как его зовут? = Кто это? = Какое его имя?" },
                { word: "У твоего друга / твоей подруги есть брат? Как его зовут?", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation", subtext: "Как его зовут? = Кто это? = Какое его имя?" },
                { word: "У твоего друга / твоей подруги есть сестра? Как её зовут?", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation", subtext: "Как её зовут? = Кто это? = Какое её имя?" },
                { word: "У твоего друга / твоей подруги есть сын? Как его зовут?", emoji: "👦", type: "conversation", category: "conversation", subtext: "Как его зовут? = Кто это? = Какое его имя?" },
                { word: "У твоего друга / твоей подруги есть дочь? Как её зовут?", emoji: "👧", type: "conversation", category: "conversation", subtext: "Как её зовут? = Кто это? = Какое её имя?" },
                { word: "У твоего друга / твоей подруги есть кот или кошка? Как его зовут?", emoji: "🐈", type: "conversation", category: "conversation", subtext: "Как его зовут? = Кто это? = Какое его имя?" },
                { word: "У твоего друга / твоей подруги есть собака? Как её зовут?", emoji: "🐕", type: "conversation", category: "conversation", subtext: "Как её зовут? = Кто это? = Какое её имя?" },
                { word: "У твоего друга / твоей подруги есть рыбка? Как её зовут?", emoji: "🐟", type: "conversation", category: "conversation", subtext: "Как её зовут? = Кто это? = Какое её имя?" },
                { word: "У твоего друга / твоей подруги есть попугай? Как его зовут?", emoji: "🦜", type: "conversation", category: "conversation", subtext: "Как его зовут? = Кто это? = Какое его имя?" }
            ]
        }
    },
    el: {
        1: {
            title: "Ημέρα 1 | Βασικό λεξιλόγιο",
            words: [
                { word: "Καλημέρα", emoji: "👋", opposite: "Αντίο", oppositeEmoji: "🖐️", category: "vocabulary" },
                { word: "Ναι", emoji: "✅", opposite: "Όχι", oppositeEmoji: "❌", category: "vocabulary" },
                { word: "Ευχαριστώ", emoji: "🙏", opposite: "Παρακαλώ", oppositeEmoji: "💁‍♂️", category: "vocabulary" },
                { word: "Παρακαλώ", emoji: "🥺", clozeText: "Έναν καφέ, ______.", answer: "παρακαλώ", category: "vocabulary" },
                { word: "Εντάξει", emoji: "👍", opposite: "Οκ", oppositeEmoji: "👌", category: "vocabulary" },
                { word: "Συγγνώμη", emoji: "🙇‍♂️", opposite: ":(", oppositeEmoji: "☹️", category: "vocabulary" },
                { word: "ή", emoji: "🔀", clozeText: "Καφές ______ τσάι;", answer: "ή", category: "grammar" },
                { word: "ο καφές", emoji: "☕", category: "vocabulary", article: "ο", baseWord: "καφές" },
                { word: "το τσάι", emoji: "🍵", category: "vocabulary", article: "το", baseWord: "τσάι" },
                { word: "ο χυμός", emoji: "🧃", category: "vocabulary", article: "ο", baseWord: "χυμός" },
                { word: "το κρασί", emoji: "🍷", category: "vocabulary", article: "το", baseWord: "κρασί" },
                { word: "η μπίρα", emoji: "🍺", category: "vocabulary", article: "η", baseWord: "μπίρα" },
                { word: "το νερό", emoji: "🚰", category: "vocabulary", article: "το", baseWord: "νερό" },
                { word: "τα μετρητά", emoji: "💵", category: "vocabulary", article: "τα", baseWord: "μετρητά" },
                { word: "η κάρτα", emoji: "💳", category: "vocabulary", article: "η", baseWord: "κάρτα" },
                { word: "δεν", emoji: "❌", clozeText: "Όχι, ______ είναι καφές.", answer: "δεν", category: "grammar" },
                { word: "Τι", emoji: "❓", clozeText: "______ είναι;", answer: "Τι", category: "grammar" },
                { word: "αλλά", emoji: "⚖️", clozeText: "Όχι, δεν είναι καφές, ______ είναι τσάι.", answer: "αλλά", category: "grammar" }
            ]
        },
        2: {
            title: "Ημέρα 2 | Ένα πράγμα ή ένα άτομο;",
            words: [
                { word: "το πράγμα", emoji: "📦", category: "vocabulary", article: "το", baseWord: "πράγμα" },
                { word: "το άτομο", emoji: "👤", category: "vocabulary", article: "το", baseWord: "άτομο" },
                { word: "ο άνδρας", emoji: "👨", opposite: "η γυναίκα", oppositeEmoji: "👩", category: "vocabulary", article: "ο", baseWord: "άνδρας" },
                { word: "η γυναίκα", emoji: "👩", opposite: "ο άνδρας", oppositeEmoji: "👨", category: "vocabulary", article: "η", baseWord: "γυναίκα" },
                { word: "το αγόρι", emoji: "👦", opposite: "το κορίτσι", oppositeEmoji: "👧", category: "vocabulary", article: "το", baseWord: "αγόρι" },
                { word: "το κορίτσι", emoji: "👧", opposite: "το αγόρι", oppositeEmoji: "👦", category: "vocabulary", article: "το", baseWord: "κορίτσι" },
                { word: "ο δάσκαλος / η δασκάλα", emoji: "🧑‍🏫", category: "vocabulary", article: "ο / η", baseWord: "δάσκαλος / δασκάλα" },
                { word: "ο μαθητής / η μαθήτρια", emoji: "🧑‍🎓", category: "vocabulary", article: "ο / η", baseWord: "μαθητής / μαθήτρια" },
                { word: "Χάρηκα", emoji: "🤝", clozeText: "Είμαι ο James, ____", answer: "Χάρηκα", category: "vocabulary" },
                { word: "κανένα πρόβλημα", emoji: "👌", category: "vocabulary" },
                { word: "επίσης", emoji: "➕", category: "grammar" },
                { word: "ποιος", emoji: "❓👤", clozeText: "____ είναι; - Είναι ένα άτομο.", answer: "ποιος", category: "grammar" },
                { word: "και", emoji: "➕", clozeText: "Ένας άνδρας ___ μια γυναίκα.", answer: "και", category: "grammar" },
                { word: "το παιδί", emoji: "👶", category: "vocabulary", article: "το", baseWord: "παιδί" }
            ]
        },
        3: {
            title: "Ημέρα 3 | Οικογένεια και Κατοικίδια",
            words: [
                { word: "η μητέρα", emoji: "👩‍👦", opposite: "ο πατέρας", oppositeEmoji: "👨‍👦", category: "vocabulary", article: "η", baseWord: "μητέρα" },
                { word: "ο πατέρας", emoji: "👨‍👦", opposite: "η μητέρα", oppositeEmoji: "👩‍👦", category: "vocabulary", article: "ο", baseWord: "πατέρας" },
                { word: "η αδελφή", emoji: "👩‍👧‍👧", opposite: "ο αδελφός", oppositeEmoji: "👨‍👦‍👦", category: "vocabulary", article: "η", baseWord: "αδελφή" },
                { word: "ο αδελφός", emoji: "👨‍👦‍👦", opposite: "η αδελφή", oppositeEmoji: "👩‍👧‍👧", category: "vocabulary", article: "ο", baseWord: "αδελφός" },
                { word: "η κόρη", emoji: "👧", opposite: "ο γιος", oppositeEmoji: "👦", category: "vocabulary", article: "η", baseWord: "κόρη" },
                { word: "ο γιος", emoji: "👦", opposite: "η κόρη", oppositeEmoji: "👧", category: "vocabulary", article: "ο", baseWord: "γιος" },
                { word: "η σύζυγος", emoji: "👰", opposite: "ο σύζυγος", oppositeEmoji: "🤵", category: "vocabulary", article: "η", baseWord: "σύζυγος" },
                { word: "ο σύζυγος", emoji: "🤵", opposite: "η σύζυγος", oppositeEmoji: "👰", category: "vocabulary", article: "ο", baseWord: "σύζυγος" },
                { word: "ο φίλος / η φίλη", emoji: "👫", category: "vocabulary", article: "ο / η", baseWord: "φίλος / φίλη" },
                { word: "η οικογένεια", emoji: "👨‍👩‍👧‍👦", category: "vocabulary", article: "η", baseWord: "οικογένεια" },
                { word: "ο γονέας", emoji: "👪", category: "vocabulary", article: "ο", baseWord: "γονέας" },
                { word: "ο γάτος", emoji: "🐈", category: "vocabulary", article: "ο", baseWord: "γάτος" },
                { word: "ο σκύλος", emoji: "🐕", category: "vocabulary", article: "ο", baseWord: "σκύλος" },
                { word: "το ψάρι", emoji: "🐟", category: "vocabulary", article: "το", baseWord: "ψάρι" },
                { word: "ο παπαγάλος", emoji: "🦜", category: "vocabulary", article: "ο", baseWord: "παπαγάλος" },
                { word: "μοναχοπαίδι", emoji: "☝️", clozeText: "είμαι ______.", answer: "μοναχοπαίδι", category: "grammar" },
                { word: "Έχεις οικογένεια;", emoji: "👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Έχεις μητέρα; Πώς τη λένε;", emoji: "👩‍👦", type: "conversation", category: "conversation" },
                { word: "Έχεις πατέρα; Πώς τον λένε;", emoji: "👨‍👦", type: "conversation", category: "conversation" },
                { word: "Έχεις αδελφό; Πώς τον λένε;", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation" },
                { word: "Έχεις αδελφή; Πώς τη λένε;", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation" },
                { word: "Έχεις γιο; Πώς τον λένε;", emoji: "👦", type: "conversation", category: "conversation" },
                { word: "Έχεις κόρη; Πώς τη λένε;", emoji: "👧", type: "conversation", category: "conversation" },
                { word: "Έχεις γάτα; Πώς τη λένε;", emoji: "🐈", type: "conversation", category: "conversation" },
                { word: "Έχεις σκύλο; Πώς τον λένε;", emoji: "🐕", type: "conversation", category: "conversation" },
                { word: "Έχεις ψάρι; Πώς το λένε;", emoji: "🐟", type: "conversation", category: "conversation" },
                { word: "Έχεις παπαγάλο; Πώς τον λένε;", emoji: "🦜", type: "conversation", category: "conversation" },
                { word: "Ο φίλος σου / η φίλη σου έχει οικογένεια;", emoji: "👫👨‍👩‍👧‍👦", type: "conversation", category: "conversation" },
                { word: "Ο φίλος σου / η φίλη σου έχει μητέρα; Πώς τη λένε;", emoji: "👩‍👦", type: "conversation", category: "conversation", subtext: "Πώς τη λένε; = Ποια είναι; = Ποιο είναι το όνομά της;" },
                { word: "Ο φίλος σου / η φίλη σου έχει πατέρα; Πώς τον λένε;", emoji: "👨‍👦", type: "conversation", category: "conversation", subtext: "Πώς τον λένε; = Ποιος είναι; = Ποιο είναι το όνομά του;" },
                { word: "Ο φίλος σου / η φίλη σου έχει αδελφό; Πώς τον λένε;", emoji: "👨‍👦‍👦", type: "conversation", category: "conversation", subtext: "Πώς τον λένε; = Ποιος είναι; = Ποιο είναι το όνομά του;" },
                { word: "Ο φίλος σου / η φίλη σου έχει αδελφή; Πώς τη λένε;", emoji: "👩‍👧‍👧", type: "conversation", category: "conversation", subtext: "Πώς τη λένε; = Ποια είναι; = Ποιο είναι το όνομά της;" },
                { word: "Ο φίλος σου / η φίλη σου έχει γιο; Πώς τον λένε;", emoji: "👦", type: "conversation", category: "conversation", subtext: "Πώς τον λένε; = Ποιος είναι; = Ποιο είναι το όνομά του;" },
                { word: "Ο φίλος σου / η φίλη σου έχει κόρη; Πώς τη λένε;", emoji: "👧", type: "conversation", category: "conversation", subtext: "Πώς τη λένε; = Ποια είναι; = Ποιο είναι το όνομά της;" },
                { word: "Ο φίλος σου / η φίλη σου έχει γάτα; Πώς τη λένε;", emoji: "🐈", type: "conversation", category: "conversation", subtext: "Πώς τη λένε; = Ποια είναι; = Ποιο είναι το όνομά της;" },
                { word: "Ο φίλος σου / η φίλη σου έχει σκύλο; Πώς τον λένε;", emoji: "🐕", type: "conversation", category: "conversation", subtext: "Πώς τον λένε; = Ποιος είναι; = Ποιο είναι το όνομά του;" },
                { word: "Ο φίλος σου / η φίλη σου έχει ψάρι; Πώς το λένε;", emoji: "🐟", type: "conversation", category: "conversation", subtext: "Πώς το λένε; = Ποιο είναι; = Ποιο είναι το όνομά του;" },
                { word: "Ο φίλος σου / η φίλη σου έχει παπαγάλο; Πώς τον λένε;", emoji: "🦜", type: "conversation", category: "conversation", subtext: "Πώς τον λένε; = Ποιος είναι; = Ποιο είναι το όνομά του;" }
            ]
        }
    }
};

const SESSION_STORAGE_KEY = 'cosy_practice_session';

var currentPractice = {
    language: 'en',
    lessons: [],
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    score: 0,
    wheelItems: []
};

function saveSession() {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentPractice));
}

function loadSession() {
    const saved = localStorage.getItem(SESSION_STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.words && parsed.words.length > 0) {
                currentPractice = parsed;
                return true;
            }
        } catch (e) {
            console.error("Error loading session:", e);
        }
    }
    return false;
}

function clearSession() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
}

document.addEventListener('DOMContentLoaded', () => {
    loadStreak();
    const startBtn = document.getElementById('start-btn');
    const wheelModeBtn = document.getElementById('wheel-mode-btn');
    const resumeBtn = document.getElementById('resume-btn');
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const hintBtn = document.getElementById('hint-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');
    const finishConversationBtn = document.getElementById('finish-conversation-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (localStorage.getItem(SESSION_STORAGE_KEY)) {
                if (confirm("Starting a new practice will clear your current progress. Continue?")) {
                    clearSession();
                    startPractice(false);
                }
            } else {
                startPractice(false);
            }
        });
    }

    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) {
        spinBtn.addEventListener('click', spinWheel);
    }

    const wheelRespondBtn = document.getElementById('wheel-respond-btn');
    if (wheelRespondBtn) {
        wheelRespondBtn.addEventListener('click', () => {
            document.getElementById('wheel-container').style.display = 'none';
            document.getElementById('question-card').style.display = 'block';
            showNextWord();
        });
    }

    const wheelSkipBtn = document.getElementById('wheel-skip-btn');
    if (wheelSkipBtn) {
        wheelSkipBtn.addEventListener('click', () => {
            const currentItem = currentPractice.currentWord;
            currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
            saveSession();
            if (currentPractice.wheelItems.length === 0) {
                showSummary();
            } else {
                document.getElementById('wheel-question-area').style.display = 'none';
                initWheel();
            }
        });
    }

    const wheelDoneBtn = document.getElementById('wheel-done-btn');
    if (wheelDoneBtn) {
        wheelDoneBtn.addEventListener('click', () => {
            const currentItem = currentPractice.currentWord;
            currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
            currentPractice.score += 20; // Bonus for completion
            document.getElementById('score-count').textContent = currentPractice.score;
            saveSession();
            if (currentPractice.wheelItems.length === 0) {
                showSummary();
            } else {
                document.getElementById('wheel-question-area').style.display = 'none';
                initWheel();
            }
        });
    }

    if (wheelModeBtn) {
        wheelModeBtn.addEventListener('click', () => {
            if (localStorage.getItem(SESSION_STORAGE_KEY)) {
                if (confirm("Starting a new practice will clear your current progress. Continue?")) {
                    clearSession();
                    startPractice(true);
                }
            } else {
                startPractice(true);
            }
        });
    }

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            resumePractice();
        });
        if (loadSession()) {
            resumeBtn.style.display = 'inline-block';
        }
    }

    // Language selection cards logic
    const langCards = document.querySelectorAll('.lang-selection-card');
    langCards.forEach(card => {
        card.addEventListener('click', () => {
            langCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentPractice.language = card.getAttribute('data-value');
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextWord);
    }

    if (checkOppositeBtn) {
        checkOppositeBtn.addEventListener('click', checkTypedAnswer);
    }

    if (oppositeAnswerInput) {
        oppositeAnswerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkTypedAnswer();
        });
    }

    if (trueBtn) {
        trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    }

    if (falseBtn) {
        falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    }

    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }

    if (listenBtn) {
        listenBtn.addEventListener('click', speakWord);
    }

    if (clearScrambleBtn) {
        clearScrambleBtn.addEventListener('click', clearScramble);
    }

    if (finishConversationBtn) {
        finishConversationBtn.addEventListener('click', () => {
            showFeedback(true);
        });
    }

    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
            clearSession();
            loadStreak();
            if (resumeBtn) resumeBtn.style.display = 'none';
        });
    }

    // Load voices once to avoid delay
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
});

function showHint() {
    const wordObj = currentPractice.currentWord;
    if (!wordObj) return;

    let targetAnswer = "";
    if (wordObj.type === 'cloze' || wordObj.type === 'multiple_choice' || wordObj.type === 'scramble' || wordObj.type === 'gender_articles') {
        targetAnswer = wordObj.answer || wordObj.word || wordObj.article || wordObj.gender;
    } else if (wordObj.type === 'opposite') {
        targetAnswer = wordObj.opposite;
    } else {
        return; // No hint for true_false
    }

    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text hint';
    feedbackMsg.textContent = "Hint: " + targetAnswer.charAt(0).toUpperCase() + "...";
}

function speakWord() {
    if (!currentPractice.currentWord) return;

    const msg = new SpeechSynthesisUtterance();
    // Prioritize baseWord for gender/articles tasks to avoid revealing the answer
    msg.text = (currentPractice.currentWord.type === 'gender_articles' && currentPractice.currentWord.baseWord)
        ? currentPractice.currentWord.baseWord
        : (currentPractice.currentWord.word || currentPractice.currentWord.baseWord);

    const langMap = {
        en: 'en-US',
        fr: 'fr-FR',
        it: 'it-IT',
        ru: 'ru-RU',
        el: 'el-GR'
    };

    const targetLang = langMap[currentPractice.language] || 'en-US';
    msg.lang = targetLang;

    const voices = window.speechSynthesis.getVoices();
    let voice;
    if (currentPractice.language === 'el') {
        voice = voices.find(v => v.lang === 'el-GR' || v.lang.startsWith('el'));
    }
    if (!voice) {
        voice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
    }

    if (voice) {
        msg.voice = voice;
    }

    window.speechSynthesis.speak(msg);
}

function playSound(isCorrect) {
    const successUrl = 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3';
    const failUrl = 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3';

    const audio = new Audio(isCorrect ? successUrl : failUrl);
    audio.play().catch(e => console.log("Audio play failed:", e));
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    if (!progressFill || !progressText) return;

    const total = currentPractice.words.length;
    let current = currentPractice.currentIndex;

    if (currentPractice.isWheelMode) {
        current = total - currentPractice.wheelItems.length;
    }

    const displayIndex = current < total ? current + 1 : total;
    const percentage = total > 0 ? (current / total) * 100 : 0;

    progressFill.style.width = percentage + '%';

    const lang = currentPractice.language;
    const wordLabel = (translations[lang] && translations[lang]['progress_word']) ? translations[lang]['progress_word'] : 'Word';
    const ofLabel = (translations[lang] && translations[lang]['progress_of']) ? translations[lang]['progress_of'] : 'of';

    progressText.textContent = `${wordLabel} ${displayIndex} ${ofLabel} ${total}`;
}

function loadStreak() {
    const streak = localStorage.getItem('practice_streak') || 0;
    const streakCountEl = document.getElementById('streak-count');
    if (streakCountEl) {
        streakCountEl.textContent = streak;
    }
    return parseInt(streak);
}

function updateStreak() {
    const lastDate = localStorage.getItem('last_practice_date');
    const today = new Date().toDateString();

    if (lastDate === today) return;

    let streak = parseInt(localStorage.getItem('practice_streak') || 0);

    if (lastDate) {
        const lastPractice = new Date(lastDate);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastPractice);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streak++;
        } else {
            streak = 1;
        }
    } else {
        streak = 1;
    }

    localStorage.setItem('practice_streak', streak);
    localStorage.setItem('last_practice_date', today);
    loadStreak();
}

function triggerAnimation(type) {
    const card = document.getElementById('question-card');
    if (!card) return;

    if (type === 'fadeIn') {
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        card.style.animation = null;
    } else if (type === 'shake') {
        card.classList.remove('shake');
        card.offsetHeight; /* trigger reflow */
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
    }
}

function startPractice(isWheelMode = false) {
    const activeLangCard = document.querySelector('.lang-selection-card.active');
    const lessonInput = document.getElementById('lesson-range');

    if (activeLangCard) {
        currentPractice.language = activeLangCard.getAttribute('data-value');
    }
    const lessonRange = lessonInput.value.trim();

    let lessons = [];
    if (lessonRange.includes('-')) {
        const parts = lessonRange.split('-');
        const start = parseInt(parts[0]);
        const end = parseInt(parts[1]);
        if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
                lessons.push(i);
            }
        }
    } else {
        const l = parseInt(lessonRange);
        if (!isNaN(l)) {
            lessons.push(l);
        }
    }

    if (lessons.length === 0) {
        alert("Please enter a valid lesson number or range (e.g., 1 or 1-5)");
        return;
    }

    currentPractice.lessons = lessons;
    currentPractice.words = [];

    const langData = lessonsData[currentPractice.language];
    if (!langData) {
        alert("Language data not found!");
        return;
    }

    const enabledTypes = [];
    if (document.getElementById('type-mc').checked) enabledTypes.push('multiple_choice');
    if (document.getElementById('type-ls').checked) enabledTypes.push('listen_select');
    if (document.getElementById('type-sc').checked) enabledTypes.push('scramble');
    if (document.getElementById('type-op').checked) enabledTypes.push('opposite');
    if (document.getElementById('type-cl').checked) enabledTypes.push('cloze');
    if (document.getElementById('type-tf').checked) enabledTypes.push('true_false');
    if (document.getElementById('type-ga').checked) enabledTypes.push('gender_articles');
    if (document.getElementById('type-cv').checked) enabledTypes.push('conversation');

    if (enabledTypes.length === 0) {
        alert("Please select at least one task type!");
        return;
    }

    const enabledCategories = [];
    if (document.getElementById('cat-vocab').checked) enabledCategories.push('vocabulary');
    if (document.getElementById('cat-grammar').checked) enabledCategories.push('grammar');
    if (document.getElementById('type-cv').checked) enabledCategories.push('conversation');

    if (enabledCategories.length === 0) {
        alert("Please select at least one category (Vocabulary or Grammar)!");
        return;
    }

    lessons.forEach(l => {
        if (langData[l]) {
            const filteredWords = langData[l].words.filter(w => {
                let catMatch = false;
                if (enabledCategories.includes(w.category)) catMatch = true;
                // Exception for Gender & Articles: nouns are vocabulary but can be grammar
                if (enabledCategories.includes('grammar') && (w.article || w.gender) && enabledTypes.includes('gender_articles')) catMatch = true;
                if (!catMatch) return false;

                // Ensure at least one enabled task type is possible for this word
                return enabledTypes.some(t => {
                    if (t === 'opposite') return !!w.opposite;
                    if (t === 'cloze') return !!w.clozeText;
                    if (t === 'gender_articles') return !!(w.article || w.gender);
                    if (t === 'conversation') return w.type === 'conversation';
                    if (w.type === 'conversation') return t === 'conversation';
                    return true; // MC, LS, SC, TF are generally always possible
                });
            });

            const lessonWords = filteredWords.map(w => {
                let wordCopy = { ...w };
                let possibleTypes = [...enabledTypes];

                if (wordCopy.type === 'conversation') {
                    return {
                        ...wordCopy,
                        lessonTitle: langData[l].title
                    };
                }

                // Remove conversation type for non-conversation words
                possibleTypes = possibleTypes.filter(t => t !== 'conversation');

                // Randomly swap word and opposite for bidirectional practice
                if (wordCopy.opposite && Math.random() > 0.5) {
                    const originalWord = wordCopy.word;
                    const originalEmoji = wordCopy.emoji;
                    wordCopy.word = wordCopy.opposite;
                    wordCopy.opposite = originalWord;
                    if (wordCopy.oppositeEmoji) {
                        wordCopy.emoji = wordCopy.oppositeEmoji;
                        wordCopy.oppositeEmoji = originalEmoji;
                    }
                }

                // Filtering based on word properties
                if (!wordCopy.opposite) possibleTypes = possibleTypes.filter(t => t !== 'opposite');
                if (!wordCopy.clozeText) possibleTypes = possibleTypes.filter(t => t !== 'cloze');
                if (!wordCopy.article && !wordCopy.gender) possibleTypes = possibleTypes.filter(t => t !== 'gender_articles');

                // If word is primarily vocab but we only have grammar enabled, force gender_articles if available
                if (wordCopy.category === 'vocabulary' && !enabledCategories.includes('vocabulary') && (wordCopy.article || wordCopy.gender)) {
                    if (enabledTypes.includes('gender_articles')) {
                        possibleTypes = ['gender_articles'];
                    }
                }

                if (possibleTypes.length === 0) return null;

                let selectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];

                return {
                    ...wordCopy,
                    type: selectedType,
                    lessonTitle: langData[l].title
                };
            }).filter(w => w !== null);
            currentPractice.words.push(...lessonWords);
        }
    });

    if (currentPractice.words.length === 0) {
        alert("No words found for the selected lessons and filters!");
        return;
    }

    currentPractice.words.sort(() => Math.random() - 0.5);
    currentPractice.currentIndex = 0;
    currentPractice.score = 0;
    currentPractice.isWheelMode = isWheelMode;
    document.getElementById('score-count').textContent = '0';

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';

    if (isWheelMode) {
        document.getElementById('wheel-container').style.display = 'block';
        document.getElementById('question-card').style.display = 'none';
        document.getElementById('practice-progress').style.display = 'none';
        document.getElementById('progress-text').style.display = 'none';
        currentPractice.wheelItems = [...currentPractice.words];
        initWheel();
    } else {
        document.getElementById('wheel-container').style.display = 'none';
        document.getElementById('question-card').style.display = 'block';
        document.getElementById('practice-progress').style.display = 'block';
        document.getElementById('progress-text').style.display = 'block';
        updateProgress();
        showNextWord();
    }
    saveSession();
}

var wheelRotation = 0;
var isSpinning = false;

function initWheel() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) return;
    drawWheel();
}

function drawWheel() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const items = currentPractice.wheelItems;
    if (!items || items.length === 0) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const sliceAngle = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, i) => {
        const startAngle = i * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        // Alternating colors
        const colors = ['#00A896', '#FFC107', '#FF6B6B', '#4CAF50', '#2196F3', '#9C27B0'];
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add text/emoji
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Georgia";
        // Use emoji + word if space allows, or just emoji
        const displayText = (items.length > 10) ? item.emoji : (item.emoji + " " + item.word);
        ctx.fillText(displayText, radius - 20, 10);
        ctx.restore();
    });
}

function spinWheel() {
    if (isSpinning || currentPractice.wheelItems.length === 0) return;
    isSpinning = true;

    const canvas = document.getElementById('wheel-canvas');
    const extraSpins = 5 + Math.random() * 5; // 5 to 10 full spins
    const randomAngle = Math.random() * (2 * Math.PI);
    const totalRotation = extraSpins * 2 * Math.PI + randomAngle;

    wheelRotation += totalRotation;
    canvas.style.transform = `rotate(${wheelRotation}rad)`;

    setTimeout(() => {
        isSpinning = false;
        // Calculate selected item
        // The pointer is at the top (3/2 * PI)
        // Adjust for current rotation
        const normalizedRotation = wheelRotation % (2 * Math.PI);

        // Pointer is at 12 o'clock, which is -PI/2 in canvas arc logic
        // But the canvas rotates clockwise.
        // Rotation = R. Point at Top = 12 o'clock = -PI/2.
        // Word at top = Index such that (Index * sliceAngle + R) % 2PI = -PI/2? No.
        // It's easier:
        // angle_on_canvas = (-PI/2 - R) % 2PI
        // adjust to positive
        let angleOnCanvas = (-Math.PI/2 - normalizedRotation) % (2 * Math.PI);
        if (angleOnCanvas < 0) angleOnCanvas += (2 * Math.PI);

        const items = currentPractice.wheelItems;
        const sliceAngle = (2 * Math.PI) / items.length;
        const selectedIndex = Math.floor(angleOnCanvas / sliceAngle);
        const selectedWord = items[selectedIndex];

        currentPractice.currentWord = selectedWord;
        showWheelQuestion(selectedWord);
    }, 4000);
}

function showWheelQuestion(wordObj) {
    document.getElementById('wheel-question-area').style.display = 'block';
    document.getElementById('wheel-emoji-display').textContent = wordObj.emoji;
    document.getElementById('wheel-word-display').textContent = wordObj.word;

    const subtextEl = document.getElementById('wheel-subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.style.display = 'block';
        } else {
            subtextEl.style.display = 'none';
        }
    }

    // Scroll to question
    document.getElementById('wheel-question-area').scrollIntoView({ behavior: 'smooth' });
}

function resumePractice() {
    if (currentPractice.isWheelMode) {
        document.getElementById('wheel-container').style.display = 'block';
        document.getElementById('question-card').style.display = 'none';
        document.getElementById('practice-progress').style.display = 'none';
        document.getElementById('progress-text').style.display = 'none';
        initWheel();
    } else {
        document.getElementById('wheel-container').style.display = 'none';
        document.getElementById('question-card').style.display = 'block';
        document.getElementById('practice-progress').style.display = 'block';
        document.getElementById('progress-text').style.display = 'block';
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    document.getElementById('score-count').textContent = currentPractice.score;
    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';

    if (!currentPractice.isWheelMode) {
        updateProgress();
        showNextWord();
    }
}

function showNextWord() {
    if (!currentPractice.isWheelMode) {
        if (currentPractice.currentIndex >= currentPractice.words.length) {
            updateProgress();
            showSummary();
            return;
        }
        currentPractice.currentWord = currentPractice.words[currentPractice.currentIndex];
    }

    updateProgress();
    triggerAnimation('fadeIn');

    const wordObj = currentPractice.currentWord;
    currentPractice.isCorrect = false;

    document.getElementById('feedback-message').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').style.display = 'none';
    document.getElementById('tf-buttons-container').style.display = 'none';
    document.getElementById('choices-grid').style.display = 'none';
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('conversation-container').style.display = 'none';
    document.getElementById('hint-btn').style.display = (wordObj.type === 'true_false' || wordObj.type === 'conversation' ? 'none' : 'inline-block');

    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    const subtextEl = document.getElementById('subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.style.display = 'block';
        } else {
            subtextEl.style.display = 'none';
        }
    }

    // Display metadata (form and level)
    const metaContainer = document.getElementById('word-meta');
    const formBadge = document.getElementById('word-form');
    const levelBadge = document.getElementById('word-level');

    if (wordObj.form || wordObj.level) {
        metaContainer.style.display = 'flex';
        const lang = currentPractice.language;

        if (wordObj.form) {
            formBadge.style.display = 'inline-block';
            const formKey = `form_${wordObj.form}`;
            formBadge.textContent = (translations[lang] && translations[lang][formKey]) ? translations[lang][formKey] : wordObj.form;
            formBadge.setAttribute('data-translate-key', formKey);
        } else {
            formBadge.style.display = 'none';
        }

        if (wordObj.level) {
            levelBadge.style.display = 'inline-block';
            const levelLabel = (translations[lang] && translations[lang]['level_label']) ? translations[lang]['level_label'] : 'Level';
            levelBadge.textContent = `${levelLabel}: ${wordObj.level}`;
        } else {
            levelBadge.style.display = 'none';
        }
    } else {
        metaContainer.style.display = 'none';
    }

    if (wordObj.type === 'multiple_choice' || wordObj.type === 'listen_select') {
        const isListen = wordObj.type === 'listen_select';
        const text = isListen ? '???' : (wordObj.clozeText || wordObj.word);
        document.getElementById('word-display').textContent = text;
        document.getElementById('emoji-display').textContent = isListen ? '👂' : (wordObj.emoji || '💡');
        document.getElementById('task-instruction').setAttribute('data-translate-key', isListen ? 'task_listen_select' : 'task_multiple_choice');
        document.getElementById('choices-grid').style.display = 'grid';
        renderMultipleChoice();
        if (isListen) {
            setTimeout(speakWord, 500);
        }
    } else if (wordObj.type === 'cloze') {
        document.getElementById('word-display').textContent = wordObj.clozeText;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_cloze');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'scramble') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_scramble');
        document.getElementById('scramble-container').style.display = 'block';
        renderScramble();
    } else if (wordObj.type === 'gender_articles') {
        document.getElementById('word-display').textContent = wordObj.baseWord;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_gender_articles');
        document.getElementById('choices-grid').style.display = 'grid';
        renderGenderArticles();
    } else if (wordObj.type === 'true_false') {
        document.getElementById('word-display').textContent = wordObj.word;
        const isTrueQuestion = Math.random() > 0.5;
        currentPractice.tfCorrectAnswer = isTrueQuestion;

        if (isTrueQuestion) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            const allWordsInRange = [];
            currentPractice.lessons.forEach(l => {
                if (lessonsData[currentPractice.language][l]) {
                    allWordsInRange.push(...lessonsData[currentPractice.language][l].words);
                }
            });
            const distractors = allWordsInRange.filter(v => v.emoji !== wordObj.emoji);
            const distractor = distractors[Math.floor(Math.random() * distractors.length)];
            document.getElementById('emoji-display').textContent = (distractor ? distractor.emoji : "❓");
        }

        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        document.getElementById('tf-buttons-container').style.display = 'flex';
    } else if (wordObj.type === 'conversation') {
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💬';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_conversation');
        document.getElementById('conversation-container').style.display = 'block';
        document.getElementById('conversation-response').value = '';
        document.getElementById('conversation-response').focus();
    } else {
        // opposite
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }
}

function renderMultipleChoice() {
    const wordObj = currentPractice.currentWord;
    const choicesGrid = document.getElementById('choices-grid');
    choicesGrid.innerHTML = '';

    const correctAnswer = wordObj.answer || wordObj.word;
    const choices = [correctAnswer];

    const allWords = [];
    currentPractice.lessons.forEach(l => {
        if (lessonsData[currentPractice.language][l]) {
            allWords.push(...lessonsData[currentPractice.language][l].words);
        }
    });

    const distractorPool = allWords
        .map(w => w.answer || w.word)
        .filter(val => val && val.toLowerCase() !== correctAnswer.toLowerCase());

    const shuffledPool = distractorPool.sort(() => Math.random() - 0.5);
    const selectedDistractors = [...new Set(shuffledPool)].slice(0, 2);

    choices.push(...selectedDistractors);
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => checkMultipleChoiceAnswer(choice, btn);
        choicesGrid.appendChild(btn);
    });
}

function renderGenderArticles() {
    const wordObj = currentPractice.currentWord;
    const choicesGrid = document.getElementById('choices-grid');
    choicesGrid.innerHTML = '';

    const lang = currentPractice.language;
    const articlesMap = {
        it: ['il', 'la', 'lo', "l'", 'i', 'gli', 'le'],
        fr: ['le', 'la', "l'", 'les'],
        el: ['ο', 'η', 'το', 'οι', 'τα'],
        ru: ['он', 'она', 'оно']
    };

    const choices = articlesMap[lang] || [];
    const targetValue = wordObj.article || wordObj.gender;

    choices.forEach(article => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = article;
        btn.onclick = () => {
            const possibleArticles = targetValue.split(' / ').map(a => a.trim());
            if (possibleArticles.includes(article)) {
                btn.classList.add('correct');
                showFeedback(true);
            } else {
                btn.classList.add('incorrect');
                showFeedback(false);
            }
        };
        choicesGrid.appendChild(btn);
    });
}

function checkMultipleChoiceAnswer(choice, btn) {
    const wordObj = currentPractice.currentWord;
    const correctAnswer = (wordObj.answer || wordObj.word).toLowerCase();

    if (choice.toLowerCase() === correctAnswer) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('incorrect');
        showFeedback(false);
    }
}

function renderScramble() {
    const wordObj = currentPractice.currentWord;
    const scrambleLetters = document.getElementById('scramble-letters');
    const wordAssembly = document.getElementById('word-assembly');

    scrambleLetters.innerHTML = '';
    wordAssembly.textContent = '';
    currentPractice.scrambleAnswer = '';

    const wordToScramble = (wordObj.answer || wordObj.word).replace(/\s/g, '');
    const letters = wordToScramble.split('').sort(() => Math.random() - 0.5);

    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = letter;
        btn.onclick = () => {
            currentPractice.scrambleAnswer += letter;
            wordAssembly.textContent = currentPractice.scrambleAnswer;
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (currentPractice.scrambleAnswer.length === wordToScramble.length) {
                checkScrambleAnswer();
            }
        };
        scrambleLetters.appendChild(btn);
    });
}

function clearScramble() {
    renderScramble();
}

function checkScrambleAnswer() {
    const wordObj = currentPractice.currentWord;
    const target = (wordObj.answer || wordObj.word).replace(/\s/g, '').toLowerCase();
    const current = currentPractice.scrambleAnswer.toLowerCase();

    if (current === target) {
        showFeedback(true);
    } else {
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function checkTypedAnswer() {
    const userAnswer = document.getElementById('opposite-answer').value.trim().toLowerCase();
    let correctAnswer;

    if (currentPractice.currentWord.type === 'cloze') {
        correctAnswer = currentPractice.currentWord.answer.toLowerCase();
    } else {
        correctAnswer = currentPractice.currentWord.opposite.toLowerCase();
    }

    const possibleAnswers = correctAnswer.split(' / ').map(a => a.trim().toLowerCase());

    if (possibleAnswers.includes(userAnswer) || userAnswer === correctAnswer) {
        showFeedback(true);
    } else {
        showFeedback(false);
    }
}

function checkTrueFalseAnswer(userAnswer) {
    if (userAnswer === currentPractice.tfCorrectAnswer) {
        showFeedback(true);
    } else {
        showFeedback(false);
    }
}

function createConfetti() {
    const emojis = ['🎉', '✨', '🎈', '🎊', '🥳', '🌟'];
    const container = document.body;

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;

        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function showSummary() {
    updateStreak();
    clearSession();
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.style.display = 'none';

    const finalScoreEl = document.getElementById('final-score');
    const finalStreakEl = document.getElementById('final-streak');
    const streakUnitEl = document.getElementById('streak-unit');
    const summaryModal = document.getElementById('summary-modal');
    const practiceSection = document.getElementById('practice-section');

    if (finalScoreEl) finalScoreEl.textContent = currentPractice.score;

    const streak = loadStreak();
    if (finalStreakEl) finalStreakEl.textContent = streak;
    if (streakUnitEl) {
        const lang = currentPractice.language;
        const dayKey = streak === 1 ? 'streak_day' : 'streak_days';
        streakUnitEl.textContent = (translations[lang] && translations[lang][dayKey]) ? translations[lang][dayKey] : 'days';
        streakUnitEl.setAttribute('data-translate-key', dayKey);
    }

    if (summaryModal) summaryModal.style.display = 'flex';
    if (practiceSection) practiceSection.style.display = 'none';

    createConfetti();
}

function showFeedback(isCorrect) {
    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');
    feedbackMsg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');

    playSound(isCorrect);
    if (!isCorrect) {
        triggerAnimation('shake');
    }

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    if (isCorrect) {
        currentPractice.score += 10;
        document.getElementById('score-count').textContent = currentPractice.score;

        currentPractice.isCorrect = true;
        document.getElementById('next-btn').style.display = 'block';

        const nextBtn = document.getElementById('next-btn');
        if (currentPractice.isWheelMode) {
            nextBtn.onclick = () => {
                // Remove word from wheel after successful response
                const currentItem = currentPractice.currentWord;
                currentPractice.wheelItems = currentPractice.wheelItems.filter(item => item.word !== currentItem.word);
                saveSession();

                if (currentPractice.wheelItems.length === 0) {
                    showSummary();
                } else {
                    document.getElementById('question-card').style.display = 'none';
                    document.getElementById('wheel-container').style.display = 'block';
                    document.getElementById('wheel-question-area').style.display = 'none';
                    initWheel();
                }
            };
        } else {
            nextBtn.onclick = showNextWord;
            currentPractice.currentIndex++;
        }

        saveSession();
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
        document.getElementById('choices-grid').style.display = 'none';
        document.getElementById('scramble-container').style.display = 'none';
        document.getElementById('conversation-container').style.display = 'none';
        document.getElementById('hint-btn').style.display = 'none';
    }
}
