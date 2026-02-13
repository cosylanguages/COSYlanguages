const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "hello", emoji: "👋", opposite: "goodbye", type: "opposite", sentence: "_____, how are you?" },
                { word: "goodbye", emoji: "🖐️", opposite: "hello", type: "opposite", sentence: "It's late, _____!" },
                { word: "yes", emoji: "✅", opposite: "no", type: "opposite", sentence: "_____, please." },
                { word: "no", emoji: "❌", opposite: "yes", type: "opposite", sentence: "_____, thank you." },
                { word: "thank you", emoji: "🙏", type: "true_false", sentence: "_____, for the gift!" },
                { word: "you're welcome", emoji: "💁‍♂️", type: "true_false", sentence: "You helped me? _____!" },
                { word: "please", emoji: "🥺", type: "true_false", sentence: "_____, sit down." },
                { word: "ok", emoji: "👌", type: "true_false", sentence: "Everything is ____." },
                { word: "alright", emoji: "👍", type: "true_false", sentence: "Are you ____?" },
                { word: "sorry", emoji: "🙇‍♂️", type: "true_false", sentence: "I am ____ for being late." },
                { word: "or", emoji: "🔀", type: "true_false", sentence: "Tea ____ coffee?" },
                // At the restaurant
                { word: "coffee", emoji: "☕", type: "true_false", sentence: "I'd like a _____, please." },
                { word: "tea", emoji: "🍵", type: "true_false" },
                { word: "juice", emoji: "🧃", type: "true_false" },
                { word: "wine", emoji: "🍷", type: "true_false" },
                { word: "beer", emoji: "🍺", type: "true_false" },
                { word: "water", emoji: "💧", type: "true_false", sentence: "A glass of _____, please." },
                { word: "cash", emoji: "💵", opposite: "card", type: "opposite" },
                { word: "card", emoji: "💳", opposite: "cash", type: "opposite" },
                { word: "what", emoji: "❓", type: "true_false" },
                { word: "but", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Day 2 | A thing or a person?",
            words: [
                { word: "thing", emoji: "📦", type: "scramble" },
                { word: "person", emoji: "👤", type: "scramble" },
                { word: "man", emoji: "👨", opposite: "woman", type: "opposite", sentence: "He is a ____." },
                { word: "woman", emoji: "👩", opposite: "man", type: "opposite", sentence: "She is a ____." },
                { word: "boy", emoji: "👦", opposite: "girl", type: "opposite" },
                { word: "girl", emoji: "👧", opposite: "boy", type: "opposite" },
                { word: "teacher", emoji: "👨‍🏫", opposite: "student", type: "opposite", sentence: "The ____ is in the classroom." },
                { word: "student", emoji: "👨‍🎓", opposite: "teacher", type: "opposite", sentence: "The ____ is studying." },
                { word: "who", emoji: "👤❓", opposite: "what", type: "opposite" },
                { word: "what", emoji: "📦❓", opposite: "who", type: "opposite" },
                { word: "and", emoji: "➕", type: "scramble" },
            ]
        }
    },
    fr: {
        1: {
            title: "Jour 1 | Vocabulaire de base",
            words: [
                { word: "bonjour", emoji: "👋", opposite: "au revoir", type: "opposite", sentence: "_____, comment ça va ?" },
                { word: "au revoir", emoji: "🖐️", opposite: "bonjour", type: "opposite", sentence: "Il est tard, _____ !" },
                { word: "oui", emoji: "✅", opposite: "non", type: "opposite", sentence: "_____, s'il vous plaît." },
                { word: "non", emoji: "❌", opposite: "oui", type: "opposite", sentence: "_____, merci." },
                { word: "merci", emoji: "🙏", type: "true_false", sentence: "_____, pour le cadeau !" },
                { word: "de rien", emoji: "💁‍♂️", type: "true_false", sentence: "Tu m'as aidé ? _____ !" },
                { word: "s'il vous plaît", emoji: "🥺", type: "true_false", sentence: "Asseyez-vous, _____." },
                { word: "ok", emoji: "👌", type: "true_false", sentence: "Tout est ____." },
                { word: "d'accord", emoji: "👍", type: "true_false", sentence: "Tu es ____ ?" },
                { word: "désolé", emoji: "🙇‍♂️", type: "true_false", sentence: "Je suis ____ d'être en retard." },
                { word: "ou", emoji: "🔀", type: "true_false", sentence: "Thé ____ café ?" },
                // Au restaurant
                { word: "café", emoji: "☕", type: "true_false", sentence: "Je voudrais un _____, s'il vous plaît." },
                { word: "thé", emoji: "🍵", type: "true_false" },
                { word: "jus", emoji: "🧃", type: "true_false" },
                { word: "vin", emoji: "🍷", type: "true_false" },
                { word: "bière", emoji: "🍺", type: "true_false" },
                { word: "eau", emoji: "💧", type: "true_false", sentence: "Un verre d'_____, s'il vous plaît." },
                { word: "espèces", emoji: "💵", opposite: "carte", type: "opposite" },
                { word: "carte", emoji: "💳", opposite: "espèces", type: "opposite" },
                { word: "quoi", emoji: "❓", type: "true_false" },
                { word: "mais", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Jour 2 | Une chose ou une personne ?",
            words: [
                { word: "une chose", emoji: "📦", type: "scramble" },
                { word: "une personne", emoji: "👤", type: "scramble" },
                { word: "un homme", emoji: "👨", opposite: "une femme", type: "opposite", sentence: "C'est ____." },
                { word: "une femme", emoji: "👩", opposite: "un homme", type: "opposite", sentence: "C'est ____." },
                { word: "un garçon", emoji: "👦", opposite: "une fille", type: "opposite" },
                { word: "une fille", emoji: "👧", opposite: "un garçon", type: "opposite" },
                { word: "un professeur", emoji: "👨‍🏫", opposite: "une professeure", type: "opposite", sentence: "____ est dans la classe." },
                { word: "une professeure", emoji: "👩‍🏫", opposite: "un professeur", type: "opposite" },
                { word: "un étudiant", emoji: "👨‍🎓", opposite: "une étudiante", type: "opposite", sentence: "____ étudie." },
                { word: "une étudiante", emoji: "👩‍🎓", opposite: "un étudiant", type: "opposite" },
                { word: "qui", emoji: "👤❓", opposite: "quoi", type: "opposite" },
                { word: "quoi", emoji: "📦❓", opposite: "qui", type: "opposite" },
                { word: "et", emoji: "➕", type: "scramble" },
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabolario di base",
            words: [
                { word: "ciao", emoji: "👋", opposite: "arrivederci", type: "opposite", sentence: "_____, come stai?" },
                { word: "arrivederci", emoji: "🖐️", opposite: "ciao", type: "opposite", sentence: "È tardi, _____!" },
                { word: "sì", emoji: "✅", opposite: "no", type: "opposite", sentence: "_____, per favore." },
                { word: "no", emoji: "❌", opposite: "sì", type: "opposite", sentence: "_____, no grazie." },
                { word: "grazie", emoji: "🙏", type: "true_false", sentence: "_____, per il regalo!" },
                { word: "prego", emoji: "💁‍♂️", type: "true_false", sentence: "Mi hai aiutato? _____!" },
                { word: "per favore", emoji: "🥺", type: "true_false", sentence: "Siediti, _____." },
                { word: "ok", emoji: "👌", type: "true_false", sentence: "Tutto è ____." },
                { word: "va bene", emoji: "👍", type: "true_false", sentence: "Stai ____?" },
                { word: "scusa", emoji: "🙇‍♂️", type: "true_false", sentence: "Mi ____ per il ritardo." },
                { word: "o", emoji: "🔀", type: "true_false", sentence: "Tè ____ caffè?" },
                // Al ristorante
                { word: "caffè", emoji: "☕", type: "true_false", sentence: "Vorrei un _____, per favore." },
                { word: "tè", emoji: "🍵", type: "true_false" },
                { word: "succo", emoji: "🧃", type: "true_false" },
                { word: "vino", emoji: "🍷", type: "true_false" },
                { word: "birra", emoji: "🍺", type: "true_false" },
                { word: "acqua", emoji: "💧", type: "true_false", sentence: "Un bicchiere d'_____, per favore." },
                { word: "contanti", emoji: "💵", opposite: "carta", type: "opposite" },
                { word: "carta", emoji: "💳", opposite: "contanti", type: "opposite" },
                { word: "cosa", emoji: "❓", type: "true_false" },
                { word: "ma", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Giorno 2 | Una cosa o una persona?",
            words: [
                { word: "una cosa", emoji: "📦", type: "scramble" },
                { word: "una persona", emoji: "👤", type: "scramble" },
                { word: "un uomo", emoji: "👨", opposite: "una donna", type: "opposite", sentence: "È ____." },
                { word: "una donna", emoji: "👩", opposite: "un uomo", type: "opposite", sentence: "È ____." },
                { word: "un ragazzo", emoji: "👦", opposite: "una ragazza", type: "opposite" },
                { word: "una ragazza", emoji: "👧", opposite: "un ragazzo", type: "opposite" },
                { word: "un insegnante", emoji: "👨‍🏫", opposite: "un'insegnante", type: "opposite", sentence: "____ è in classe." },
                { word: "un'insegnante", emoji: "👩‍🏫", opposite: "un insegnante", type: "opposite" },
                { word: "uno studente", emoji: "👨‍🎓", opposite: "una studentessa", type: "opposite", sentence: "____ sta studiando." },
                { word: "una studentessa", emoji: "👩‍🎓", opposite: "uno studente", type: "opposite" },
                { word: "chi", emoji: "👤❓", opposite: "cosa", type: "opposite" },
                { word: "cosa", emoji: "📦❓", opposite: "chi", type: "opposite" },
                { word: "e", emoji: "➕", type: "scramble" },
            ]
        }
    },
    ru: {
        1: {
            title: "День 1 | Базовая лексика",
            words: [
                { word: "привет", emoji: "👋", opposite: "пока", type: "opposite", sentence: "_____, как дела?" },
                { word: "пока", emoji: "🖐️", opposite: "привет", type: "opposite", sentence: "Уже поздно, _____!" },
                { word: "да", emoji: "✅", opposite: "нет", type: "opposite", sentence: "_____, пожалуйста." },
                { word: "нет", emoji: "❌", opposite: "да", type: "opposite", sentence: "_____, спасибо." },
                { word: "спасибо", emoji: "🙏", type: "true_false", sentence: "_____, за подарок!" },
                { word: "пожалуйста", emoji: "💁‍♂️", type: "true_false", sentence: "Ты мне помог? _____!" },
                { word: "пожалуйста", emoji: "🥺", type: "true_false", sentence: "Садитесь, _____." },
                { word: "ок", emoji: "👌", type: "true_false", sentence: "Всё ____." },
                { word: "хорошо", emoji: "👍", type: "true_false", sentence: "Ты ____?" },
                { word: "извини", emoji: "🙇‍♂️", type: "true_false", sentence: "____ за опоздание." },
                { word: "или", emoji: "🔀", type: "true_false", sentence: "Чай ____ кофе?" },
                // В ресторане
                { word: "кофе", emoji: "☕", type: "true_false", sentence: "Я бы хотел _____, пожалуйста." },
                { word: "чай", emoji: "🍵", type: "true_false" },
                { word: "сок", emoji: "🧃", type: "true_false" },
                { word: "вино", emoji: "🍷", type: "true_false" },
                { word: "пиво", emoji: "🍺", type: "true_false" },
                { word: "вода", emoji: "💧", type: "true_false", sentence: "Стакан _____, пожалуйста." },
                { word: "наличные", emoji: "💵", opposite: "карта", type: "opposite" },
                { word: "карта", emoji: "💳", opposite: "наличные", type: "opposite" },
                { word: "что", emoji: "❓", type: "true_false" },
                { word: "но", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "День 2 | Вещь или человек?",
            words: [
                { word: "вещь", emoji: "📦", type: "scramble" },
                { word: "человек", emoji: "👤", type: "scramble" },
                { word: "мужчина", emoji: "👨", opposite: "женщина", type: "opposite", sentence: "Он ____." },
                { word: "женщина", emoji: "👩", opposite: "мужчина", type: "opposite", sentence: "Она ____." },
                { word: "мальчик", emoji: "👦", opposite: "девочка", type: "opposite" },
                { word: "девочка", emoji: "👧", opposite: "мальчик", type: "opposite" },
                { word: "учитель", emoji: "👨‍🏫", opposite: "учительница", type: "opposite", sentence: "____ в классе." },
                { word: "учительница", emoji: "👩‍🏫", opposite: "учитель", type: "opposite" },
                { word: "студент", emoji: "👨‍🎓", opposite: "студентка", type: "opposite", sentence: "____ учится." },
                { word: "студентка", emoji: "👩‍🎓", opposite: "студент", type: "opposite" },
                { word: "кто", emoji: "👤❓", opposite: "что", type: "opposite" },
                { word: "что", emoji: "📦❓", opposite: "кто", type: "opposite" },
                { word: "и", emoji: "➕", type: "scramble" },
            ]
        }
    },
    el: {
        1: {
            title: "Ημέρα 1 | Βασικό λεξιλόγιο",
            words: [
                { word: "γεια", emoji: "👋", opposite: "αντίο", type: "opposite", sentence: "_____, τι κάνεις;" },
                { word: "αντίο", emoji: "🖐️", opposite: "γεια", type: "opposite", sentence: "Είναι αργά, _____!" },
                { word: "ναι", emoji: "✅", opposite: "όχι", type: "opposite", sentence: "_____, παρακαλώ." },
                { word: "όχι", emoji: "❌", opposite: "ναι", type: "opposite", sentence: "_____, όχι ευχαριστώ." },
                { word: "ευχαριστώ", emoji: "🙏", type: "true_false", sentence: "_____, για το δώρο!" },
                { word: "παρακαλώ", emoji: "💁‍♂️", type: "true_false", sentence: "Με βοήθησες; _____!" },
                { word: "παρακαλώ", emoji: "🥺", type: "true_false", sentence: "Καθίστε, _____." },
                { word: "οκ", emoji: "👌", type: "true_false", sentence: "Όλα είναι ____." },
                { word: "εντάξει", emoji: "👍", type: "true_false", sentence: "Είσαι ____;" },
                { word: "συγγνώμη", emoji: "🙇‍♂️", type: "true_false", sentence: "____ για την καθυστέρηση." },
                { word: "ή", emoji: "🔀", type: "true_false", sentence: "Τσάι ____ καφές;" },
                // Στο εστιατόριο
                { word: "καφές", emoji: "☕", type: "true_false", sentence: "Θα ήθελα έναν _____, παρακαλώ." },
                { word: "τσάι", emoji: "🍵", type: "true_false" },
                { word: "χυμός", emoji: "🧃", type: "true_false" },
                { word: "κρασί", emoji: "🍷", type: "true_false" },
                { word: "μπύρα", emoji: "🍺", type: "true_false" },
                { word: "νερό", emoji: "💧", type: "true_false", sentence: "Ένα ποτήρι _____, παρακαλώ." },
                { word: "μετρητά", emoji: "💵", opposite: "κάρτα", type: "opposite" },
                { word: "κάρτα", emoji: "💳", opposite: "μετρητά", type: "opposite" },
                { word: "τι", emoji: "❓", type: "true_false" },
                { word: "αλλά", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Ημέρα 2 | Ένα πράγμα ή ένα άτομο;",
            words: [
                { word: "το πράγμα", emoji: "📦", type: "scramble" },
                { word: "το άτομο", emoji: "👤", type: "scramble" },
                { word: "ο άντρας", emoji: "👨", opposite: "η γυναίκα", type: "opposite", sentence: "Αυτός είναι ____." },
                { word: "η γυναίκα", emoji: "👩", opposite: "ο άντρας", type: "opposite", sentence: "Αυτή είναι ____." },
                { word: "το αγόρι", emoji: "👦", opposite: "το κορίτσι", type: "opposite" },
                { word: "το κορίτσι", emoji: "👧", opposite: "το αγόρι", type: "opposite" },
                { word: "ο δάσκαλος", emoji: "👨‍🏫", opposite: "η δασκάλα", type: "opposite", sentence: "____ είναι στην τάξη." },
                { word: "η δασκάλα", emoji: "👩‍🏫", opposite: "ο δάσκαλος", type: "opposite" },
                { word: "ο μαθητής", emoji: "👨‍🎓", opposite: "η μαθήτρια", type: "opposite", sentence: "____ διαβάζει." },
                { word: "η μαθήτρια", emoji: "👩‍🎓", opposite: "ο μαθητής", type: "opposite" },
                { word: "ποιος", emoji: "👤❓", opposite: "τι", type: "opposite" },
                { word: "τι", emoji: "📦❓", opposite: "ποιος", type: "opposite" },
                { word: "και", emoji: "➕", type: "scramble" },
            ]
        }
    }
};

let currentPractice = {
    language: 'en',
    lessons: [],
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    builtWord: ""
};

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');

    if (startBtn) {
        startBtn.addEventListener('click', startPractice);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextWord);
    }

    if (checkOppositeBtn) {
        checkOppositeBtn.addEventListener('click', checkOppositeAnswer);
    }

    if (oppositeAnswerInput) {
        oppositeAnswerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkOppositeAnswer();
        });
    }

    if (trueBtn) {
        trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    }

    if (falseBtn) {
        falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    }

    if (listenBtn) {
        listenBtn.addEventListener('click', speakWord);
    }

    if (clearScrambleBtn) {
        clearScrambleBtn.addEventListener('click', clearScramble);
    }
});

function speakWord() {
    if (!currentPractice.currentWord) return;

    const msg = new SpeechSynthesisUtterance();
    msg.text = currentPractice.currentWord.word;

    const langMap = {
        en: 'en-US',
        fr: 'fr-FR',
        it: 'it-IT',
        ru: 'ru-RU',
        el: 'el-GR'
    };

    msg.lang = langMap[currentPractice.language] || 'en-US';
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
    const current = currentPractice.currentIndex;
    const percentage = total > 0 ? (current / total) * 100 : 0;

    progressFill.style.width = percentage + '%';

    // Translation for "Word X of Y"
    const translations = {
        en: `Word ${current} of ${total}`,
        fr: `Mot ${current} sur ${total}`,
        it: `Parola ${current} di ${total}`,
        ru: `Слово ${current} из ${total}`,
        el: `Λέξη ${current} από ${total}`
    };

    progressText.textContent = translations[currentPractice.language] || translations['en'];
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

function startPractice() {
    const langSelect = document.getElementById('practice-language');
    const lessonInput = document.getElementById('lesson-range');

    currentPractice.language = langSelect.value;
    const lessonRange = lessonInput.value.trim();

    // Parse range
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

    // Collect all words from selected lessons
    const langData = lessonsData[currentPractice.language];
    if (!langData) {
        alert("Language data not found!");
        return;
    }

    lessons.forEach(l => {
        if (langData[l]) {
            const lessonWords = langData[l].words.map(w => ({
                ...w,
                lessonTitle: langData[l].title,
                targetLang: currentPractice.language
            }));
            currentPractice.words.push(...lessonWords);
        }
    });

    if (currentPractice.words.length === 0) {
        alert("No words found for the selected lessons! Currently only Lesson 1 is available.");
        return;
    }

    // Shuffle words
    currentPractice.words.sort(() => Math.random() - 0.5);
    currentPractice.currentIndex = 0;

    // Set UI language to the practice language
    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        // Also update the language switcher to match
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    // Hide setup, show practice
    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';

    updateProgress();
    showNextWord();
}

function clearScramble() {
    currentPractice.builtWord = "";
    document.getElementById('built-word').textContent = "";

    // Enable all letters
    const letters = document.querySelectorAll('.letter-tile');
    letters.forEach(l => l.classList.remove('used'));
}

function handleLetterClick(letter, tileElement) {
    if (tileElement.classList.contains('used')) return;

    tileElement.classList.add('used');
    currentPractice.builtWord += letter;
    document.getElementById('built-word').textContent = currentPractice.builtWord;

    // Auto-check if lengths match
    if (currentPractice.builtWord.length === currentPractice.currentWord.word.replace(/\s/g, '').length) {
        checkScrambleAnswer();
    }
}

function checkScrambleAnswer() {
    const target = currentPractice.currentWord.word.replace(/\s/g, '').toLowerCase();
    const built = currentPractice.builtWord.toLowerCase();

    if (built === target) {
        showFeedback(true);
    } else {
        showFeedback(false);
        setTimeout(clearScramble, 1000);
    }
}

function showNextWord() {
    if (currentPractice.currentIndex >= currentPractice.words.length) {
        // Finished all words, maybe shuffle and restart or show finish message
        updateProgress();
        alert("Congratulations! You've finished all words in this session.");
        document.getElementById('setup-section').style.display = 'block';
        document.getElementById('practice-section').style.display = 'none';
        return;
    }

    updateProgress();
    triggerAnimation('fadeIn');

    const wordObj = currentPractice.words[currentPractice.currentIndex];
    currentPractice.currentWord = wordObj;
    currentPractice.isCorrect = false;

    // Randomly decide task type if multiple are available
    let taskType = wordObj.type;
    if (wordObj.sentence && Math.random() > 0.4) {
        taskType = 'cloze';
    }

    // Reset UI
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('feedback-message').className = 'feedback-text';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').style.display = 'none';
    document.getElementById('tf-buttons-container').style.display = 'none';
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('choices-container').style.display = 'none';

    // Display info
    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    // Determine if we should show correct or wrong emoji for True/False
    if (taskType === 'true_false') {
        document.getElementById('word-display').textContent = wordObj.word;
        const isTrueQuestion = Math.random() > 0.5;
        currentPractice.tfCorrectAnswer = isTrueQuestion;

        if (isTrueQuestion) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            // Pick a random distractor from all selected lessons
            const allWordsInRange = [];
            currentPractice.lessons.forEach(l => {
                if (lessonsData[currentPractice.language][l]) {
                    allWordsInRange.push(...lessonsData[currentPractice.language][l].words);
                }
            });
            const distractors = allWordsInRange.filter(v => v.emoji !== wordObj.emoji);
            const distractor = distractors[Math.floor(Math.random() * distractors.length)];
            document.getElementById('emoji-display').textContent = distractor.emoji;
        }

        const taskKey = 'task_true_false';
        document.getElementById('task-instruction').setAttribute('data-translate-key', taskKey);
        document.getElementById('task-instruction').innerText = translations[currentPractice.language][taskKey] || taskKey;
        document.getElementById('tf-buttons-container').style.display = 'flex';
    } else if (taskType === 'scramble') {
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        const taskKey = 'task_scramble';
        document.getElementById('task-instruction').setAttribute('data-translate-key', taskKey);
        document.getElementById('task-instruction').innerText = translations[currentPractice.language][taskKey] || taskKey;
        setupScrambleTask(wordObj.word);
        document.getElementById('scramble-container').style.display = 'block';
    } else if (taskType === 'cloze') {
        document.getElementById('word-display').textContent = wordObj.sentence;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        const taskKey = 'task_cloze';
        document.getElementById('task-instruction').setAttribute('data-translate-key', taskKey);
        document.getElementById('task-instruction').innerText = translations[currentPractice.language][taskKey] || taskKey;

        if (Math.random() > 0.5) {
            setupMultipleChoice(wordObj);
            document.getElementById('choices-container').style.display = 'grid';
        } else {
            document.getElementById('opposite-input-container').style.display = 'flex';
            document.getElementById('opposite-answer').focus();
        }
        currentPractice.clozeMode = true;
    } else {
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        const taskKey = 'task_opposite';
        document.getElementById('task-instruction').setAttribute('data-translate-key', taskKey);
        document.getElementById('task-instruction').innerText = translations[currentPractice.language][taskKey] || taskKey;
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
        currentPractice.clozeMode = false;
    }
}

function setupMultipleChoice(wordObj) {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';

    const allWordsInRange = [];
    currentPractice.lessons.forEach(l => {
        if (lessonsData[currentPractice.language][l]) {
            allWordsInRange.push(...lessonsData[currentPractice.language][l].words);
        }
    });

    // Get unique word list
    const uniqueWords = Array.from(new Set(allWordsInRange.map(w => w.word)));
    const distractors = uniqueWords.filter(w => w !== wordObj.word);

    // Shuffle distractors and pick 3
    distractors.sort(() => Math.random() - 0.5);
    const choices = [wordObj.word, ...distractors.slice(0, 3)];
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.addEventListener('click', () => checkChoiceAnswer(choice, btn));
        container.appendChild(btn);
    });
}

function checkChoiceAnswer(choice, btn) {
    if (currentPractice.isCorrect) return;

    if (choice.toLowerCase() === currentPractice.currentWord.word.toLowerCase()) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('incorrect');
        showFeedback(false);
    }
}

function setupScrambleTask(word) {
    const pool = document.getElementById('scrambled-letters');
    pool.innerHTML = '';
    currentPractice.builtWord = '';
    document.getElementById('built-word').textContent = '';

    const letters = word.replace(/\s/g, '').split('');
    // Shuffle
    letters.sort(() => Math.random() - 0.5);

    letters.forEach(char => {
        const tile = document.createElement('button');
        tile.className = 'letter-tile';
        tile.textContent = char;
        tile.addEventListener('click', () => handleLetterClick(char, tile));
        pool.appendChild(tile);
    });

    // Re-translate instructions
    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }
}

function checkOppositeAnswer() {
    const userAnswer = document.getElementById('opposite-answer').value.trim().toLowerCase();
    let correctAnswer;

    if (currentPractice.clozeMode) {
        correctAnswer = currentPractice.currentWord.word.toLowerCase();
    } else {
        correctAnswer = currentPractice.currentWord.opposite.toLowerCase();
    }

    if (userAnswer === correctAnswer) {
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

function showFeedback(isCorrect) {
    const feedbackMsg = document.getElementById('feedback-message');
    feedbackMsg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');
    feedbackMsg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');

    playSound(isCorrect);
    if (!isCorrect) {
        triggerAnimation('shake');
    }

    // Trigger translation for feedback
    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    if (isCorrect) {
        currentPractice.isCorrect = true;
        document.getElementById('next-btn').style.display = 'block';
        currentPractice.currentIndex++;
        // Hide inputs after correct answer to prevent multi-submit
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
        document.getElementById('scramble-container').style.display = 'none';
        document.getElementById('choices-container').style.display = 'none';
    }
}
