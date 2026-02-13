const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "hello", emoji: "👋", opposite: "goodbye", type: "opposite" },
                { word: "goodbye", emoji: "🖐️", opposite: "hello", type: "opposite" },
                { word: "yes", emoji: "✅", opposite: "no", type: "opposite" },
                { word: "no", emoji: "❌", opposite: "yes", type: "opposite" },
                { word: "thank you", emoji: "🙏", type: "true_false" },
                { word: "you're welcome", emoji: "💁‍♂️", type: "true_false" },
                { word: "please", emoji: "🥺", type: "true_false" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "alright", emoji: "👍", type: "true_false" },
                { word: "sorry", emoji: "🙇‍♂️", type: "true_false" },
                { word: "or", emoji: "🔀", type: "true_false" },
                // At the restaurant
                { word: "coffee", emoji: "☕", type: "true_false" },
                { word: "tea", emoji: "🍵", type: "true_false" },
                { word: "juice", emoji: "🧃", type: "true_false" },
                { word: "wine", emoji: "🍷", type: "true_false" },
                { word: "beer", emoji: "🍺", type: "true_false" },
                { word: "water", emoji: "💧", type: "true_false" },
                { word: "cash", emoji: "💵", opposite: "card", type: "opposite" },
                { word: "card", emoji: "💳", opposite: "cash", type: "opposite" },
                { word: "what", emoji: "❓", type: "true_false" },
                { word: "but", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Day 2 | A thing or a person?",
            words: [
                { word: "thing", emoji: "📦", opposite: "person", type: "opposite" },
                { word: "person", emoji: "👤", opposite: "thing", type: "opposite" },
                { word: "man", emoji: "👨", opposite: "woman", type: "opposite" },
                { word: "woman", emoji: "👩", opposite: "man", type: "opposite" },
                { word: "boy", emoji: "👦", opposite: "girl", type: "opposite" },
                { word: "girl", emoji: "👧", opposite: "boy", type: "opposite" },
                { word: "teacher", emoji: "👨‍🏫", opposite: "student", type: "opposite" },
                { word: "student", emoji: "👨‍🎓", opposite: "teacher", type: "opposite" },
                { word: "who", emoji: "👤❓", opposite: "what", type: "opposite" },
                { word: "what", emoji: "📦❓", opposite: "who", type: "opposite" },
                { word: "and", emoji: "➕", type: "true_false" },
            ]
        }
    },
    fr: {
        1: {
            title: "Jour 1 | Vocabulaire de base",
            words: [
                { word: "bonjour", emoji: "👋", opposite: "au revoir", type: "opposite" },
                { word: "au revoir", emoji: "🖐️", opposite: "bonjour", type: "opposite" },
                { word: "oui", emoji: "✅", opposite: "non", type: "opposite" },
                { word: "non", emoji: "❌", opposite: "oui", type: "opposite" },
                { word: "merci", emoji: "🙏", type: "true_false" },
                { word: "de rien", emoji: "💁‍♂️", type: "true_false" },
                { word: "s'il vous plaît", emoji: "🥺", type: "true_false" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "d'accord", emoji: "👍", type: "true_false" },
                { word: "désolé", emoji: "🙇‍♂️", type: "true_false" },
                { word: "ou", emoji: "🔀", type: "true_false" },
                // Au restaurant
                { word: "café", emoji: "☕", type: "true_false" },
                { word: "thé", emoji: "🍵", type: "true_false" },
                { word: "jus", emoji: "🧃", type: "true_false" },
                { word: "vin", emoji: "🍷", type: "true_false" },
                { word: "bière", emoji: "🍺", type: "true_false" },
                { word: "eau", emoji: "💧", type: "true_false" },
                { word: "espèces", emoji: "💵", opposite: "carte", type: "opposite" },
                { word: "carte", emoji: "💳", opposite: "espèces", type: "opposite" },
                { word: "quoi", emoji: "❓", type: "true_false" },
                { word: "mais", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Jour 2 | Une chose ou une personne ?",
            words: [
                { word: "une chose", emoji: "📦", opposite: "une personne", type: "opposite" },
                { word: "une personne", emoji: "👤", opposite: "une chose", type: "opposite" },
                { word: "un homme", emoji: "👨", opposite: "une femme", type: "opposite" },
                { word: "une femme", emoji: "👩", opposite: "un homme", type: "opposite" },
                { word: "un garçon", emoji: "👦", opposite: "une fille", type: "opposite" },
                { word: "une fille", emoji: "👧", opposite: "un garçon", type: "opposite" },
                { word: "un professeur", emoji: "👨‍🏫", opposite: "une professeure", type: "opposite" },
                { word: "une professeure", emoji: "👩‍🏫", opposite: "un professeur", type: "opposite" },
                { word: "un étudiant", emoji: "👨‍🎓", opposite: "une étudiante", type: "opposite" },
                { word: "une étudiante", emoji: "👩‍🎓", opposite: "un étudiant", type: "opposite" },
                { word: "qui", emoji: "👤❓", opposite: "quoi", type: "opposite" },
                { word: "quoi", emoji: "📦❓", opposite: "qui", type: "opposite" },
                { word: "et", emoji: "➕", type: "true_false" },
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabolario di base",
            words: [
                { word: "ciao", emoji: "👋", opposite: "arrivederci", type: "opposite" },
                { word: "arrivederci", emoji: "🖐️", opposite: "ciao", type: "opposite" },
                { word: "sì", emoji: "✅", opposite: "no", type: "opposite" },
                { word: "no", emoji: "❌", opposite: "sì", type: "opposite" },
                { word: "grazie", emoji: "🙏", type: "true_false" },
                { word: "prego", emoji: "💁‍♂️", type: "true_false" },
                { word: "per favore", emoji: "🥺", type: "true_false" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "va bene", emoji: "👍", type: "true_false" },
                { word: "scusa", emoji: "🙇‍♂️", type: "true_false" },
                { word: "o", emoji: "🔀", type: "true_false" },
                // Al ristorante
                { word: "caffè", emoji: "☕", type: "true_false" },
                { word: "tè", emoji: "🍵", type: "true_false" },
                { word: "succo", emoji: "🧃", type: "true_false" },
                { word: "vino", emoji: "🍷", type: "true_false" },
                { word: "birra", emoji: "🍺", type: "true_false" },
                { word: "acqua", emoji: "💧", type: "true_false" },
                { word: "contanti", emoji: "💵", opposite: "carta", type: "opposite" },
                { word: "carta", emoji: "💳", opposite: "contanti", type: "opposite" },
                { word: "cosa", emoji: "❓", type: "true_false" },
                { word: "ma", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Giorno 2 | Una cosa o una persona?",
            words: [
                { word: "una cosa", emoji: "📦", opposite: "una persona", type: "opposite" },
                { word: "una persona", emoji: "👤", opposite: "una cosa", type: "opposite" },
                { word: "un uomo", emoji: "👨", opposite: "una donna", type: "opposite" },
                { word: "una donna", emoji: "👩", opposite: "un uomo", type: "opposite" },
                { word: "un ragazzo", emoji: "👦", opposite: "una ragazza", type: "opposite" },
                { word: "una ragazza", emoji: "👧", opposite: "un ragazzo", type: "opposite" },
                { word: "un insegnante", emoji: "👨‍🏫", opposite: "un'insegnante", type: "opposite" },
                { word: "un'insegnante", emoji: "👩‍🏫", opposite: "un insegnante", type: "opposite" },
                { word: "uno studente", emoji: "👨‍🎓", opposite: "una studentessa", type: "opposite" },
                { word: "una studentessa", emoji: "👩‍🎓", opposite: "uno studente", type: "opposite" },
                { word: "chi", emoji: "👤❓", opposite: "cosa", type: "opposite" },
                { word: "cosa", emoji: "📦❓", opposite: "chi", type: "opposite" },
                { word: "e", emoji: "➕", type: "true_false" },
            ]
        }
    },
    ru: {
        1: {
            title: "День 1 | Базовая лексика",
            words: [
                { word: "привет", emoji: "👋", opposite: "пока", type: "opposite" },
                { word: "пока", emoji: "🖐️", opposite: "привет", type: "opposite" },
                { word: "да", emoji: "✅", opposite: "нет", type: "opposite" },
                { word: "нет", emoji: "❌", opposite: "да", type: "opposite" },
                { word: "спасибо", emoji: "🙏", type: "true_false" },
                { word: "пожалуйста", emoji: "💁‍♂️", type: "true_false" },
                { word: "пожалуйста", emoji: "🥺", type: "true_false" },
                { word: "ок", emoji: "👌", type: "true_false" },
                { word: "хорошо", emoji: "👍", type: "true_false" },
                { word: "извини", emoji: "🙇‍♂️", type: "true_false" },
                { word: "или", emoji: "🔀", type: "true_false" },
                // В ресторане
                { word: "кофе", emoji: "☕", type: "true_false" },
                { word: "чай", emoji: "🍵", type: "true_false" },
                { word: "сок", emoji: "🧃", type: "true_false" },
                { word: "вино", emoji: "🍷", type: "true_false" },
                { word: "пиво", emoji: "🍺", type: "true_false" },
                { word: "вода", emoji: "💧", type: "true_false" },
                { word: "наличные", emoji: "💵", opposite: "карта", type: "opposite" },
                { word: "карта", emoji: "💳", opposite: "наличные", type: "opposite" },
                { word: "что", emoji: "❓", type: "true_false" },
                { word: "но", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "День 2 | Вещь или человек?",
            words: [
                { word: "вещь", emoji: "📦", opposite: "человек", type: "opposite" },
                { word: "человек", emoji: "👤", opposite: "вещь", type: "opposite" },
                { word: "мужчина", emoji: "👨", opposite: "женщина", type: "opposite" },
                { word: "женщина", emoji: "👩", opposite: "мужчина", type: "opposite" },
                { word: "мальчик", emoji: "👦", opposite: "девочка", type: "opposite" },
                { word: "девочка", emoji: "👧", opposite: "мальчик", type: "opposite" },
                { word: "учитель", emoji: "👨‍🏫", opposite: "учительница", type: "opposite" },
                { word: "учительница", emoji: "👩‍🏫", opposite: "учитель", type: "opposite" },
                { word: "студент", emoji: "👨‍🎓", opposite: "студентка", type: "opposite" },
                { word: "студентка", emoji: "👩‍🎓", opposite: "студент", type: "opposite" },
                { word: "кто", emoji: "👤❓", opposite: "что", type: "opposite" },
                { word: "что", emoji: "📦❓", opposite: "кто", type: "opposite" },
                { word: "и", emoji: "➕", type: "true_false" },
            ]
        }
    },
    el: {
        1: {
            title: "Ημέρα 1 | Βασικό λεξιλόγιο",
            words: [
                { word: "γεια", emoji: "👋", opposite: "αντίο", type: "opposite" },
                { word: "αντίο", emoji: "🖐️", opposite: "γεια", type: "opposite" },
                { word: "ναι", emoji: "✅", opposite: "όχι", type: "opposite" },
                { word: "όχι", emoji: "❌", opposite: "ναι", type: "opposite" },
                { word: "ευχαριστώ", emoji: "🙏", type: "true_false" },
                { word: "παρακαλώ", emoji: "💁‍♂️", type: "true_false" },
                { word: "παρακαλώ", emoji: "🥺", type: "true_false" },
                { word: "οκ", emoji: "👌", type: "true_false" },
                { word: "εντάξει", emoji: "👍", type: "true_false" },
                { word: "συγγνώμη", emoji: "🙇‍♂️", type: "true_false" },
                { word: "ή", emoji: "🔀", type: "true_false" },
                // Στο εστιατόριο
                { word: "καφές", emoji: "☕", type: "true_false" },
                { word: "τσάι", emoji: "🍵", type: "true_false" },
                { word: "χυμός", emoji: "🧃", type: "true_false" },
                { word: "κρασί", emoji: "🍷", type: "true_false" },
                { word: "μπύρα", emoji: "🍺", type: "true_false" },
                { word: "νερό", emoji: "💧", type: "true_false" },
                { word: "μετρητά", emoji: "💵", opposite: "κάρτα", type: "opposite" },
                { word: "κάρτα", emoji: "💳", opposite: "μετρητά", type: "opposite" },
                { word: "τι", emoji: "❓", type: "true_false" },
                { word: "αλλά", emoji: "➰", type: "true_false" },
            ]
        },
        2: {
            title: "Ημέρα 2 | Ένα πράγμα ή ένα άτομο;",
            words: [
                { word: "το πράγμα", emoji: "📦", opposite: "το άτομο", type: "opposite" },
                { word: "το άτομο", emoji: "👤", opposite: "το πράγμα", type: "opposite" },
                { word: "ο άντρας", emoji: "👨", opposite: "η γυναίκα", type: "opposite" },
                { word: "η γυναίκα", emoji: "👩", opposite: "ο άντρας", type: "opposite" },
                { word: "το αγόρι", emoji: "👦", opposite: "το κορίτσι", type: "opposite" },
                { word: "το κορίτσι", emoji: "👧", opposite: "το αγόρι", type: "opposite" },
                { word: "ο δάσκαλος", emoji: "👨‍🏫", opposite: "η δασκάλα", type: "opposite" },
                { word: "η δασκάλα", emoji: "👩‍🏫", opposite: "ο δάσκαλος", type: "opposite" },
                { word: "ο μαθητής", emoji: "👨‍🎓", opposite: "η μαθήτρια", type: "opposite" },
                { word: "η μαθήτρια", emoji: "👩‍🎓", opposite: "ο μαθητής", type: "opposite" },
                { word: "ποιος", emoji: "👤❓", opposite: "τι", type: "opposite" },
                { word: "τι", emoji: "📦❓", opposite: "ποιος", type: "opposite" },
                { word: "και", emoji: "➕", type: "true_false" },
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
    isCorrect: false
};

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');

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
});

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

    showNextWord();
}

function showNextWord() {
    if (currentPractice.currentIndex >= currentPractice.words.length) {
        // Finished all words, maybe shuffle and restart or show finish message
        alert("Congratulations! You've finished all words in this session.");
        document.getElementById('setup-section').style.display = 'block';
        document.getElementById('practice-section').style.display = 'none';
        return;
    }

    const wordObj = currentPractice.words[currentPractice.currentIndex];
    currentPractice.currentWord = wordObj;
    currentPractice.isCorrect = false;

    // Reset UI
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('feedback-message').className = 'feedback-text';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').style.display = 'none';
    document.getElementById('tf-buttons-container').style.display = 'none';

    // Display info
    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;
    document.getElementById('word-display').textContent = wordObj.word;

    // Determine if we should show correct or wrong emoji for True/False
    if (wordObj.type === 'true_false') {
        const isTrueQuestion = Math.random() > 0.5;
        currentPractice.tfCorrectAnswer = isTrueQuestion;

        if (isTrueQuestion) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            // Pick a random emoji from other words in the same lesson
            const otherWords = lessonsData[currentPractice.language][currentPractice.lessons[0]].words.filter(w => w.emoji !== wordObj.emoji);
            const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
            document.getElementById('emoji-display').textContent = randomWord.emoji;
        }

        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        document.getElementById('tf-buttons-container').style.display = 'flex';
    } else {
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
    }

    // Re-translate instructions
    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }
}

function checkOppositeAnswer() {
    const userAnswer = document.getElementById('opposite-answer').value.trim().toLowerCase();
    const correctAnswer = currentPractice.currentWord.opposite.toLowerCase();

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

    // Trigger translation for feedback
    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    if (isCorrect) {
        document.getElementById('next-btn').style.display = 'block';
        currentPractice.currentIndex++;
        // Hide inputs after correct answer to prevent multi-submit
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
    }
}
