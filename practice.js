const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "hello", emoji: "👋", opposite: "goodbye", type: "opposite" },
                { word: "goodbye", emoji: "🖐️", opposite: "hello", type: "opposite" },
                { word: "yes", emoji: "✅", opposite: "no", type: "opposite" },
                { word: "no", emoji: "❌", opposite: "yes", type: "opposite" },
                { word: "thank you", emoji: "🙏", opposite: "you're welcome", type: "opposite" },
                { word: "you're welcome", emoji: "💁‍♂️", opposite: "thank you", type: "opposite" },
                { word: "please", emoji: "🥺", clozeText: "One coffee, ______.", answer: "please", type: "cloze" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "alright", emoji: "👍", type: "true_false" },
                { word: "sorry", emoji: "🙇‍♂️", type: "true_false" },
                { word: "or", emoji: "🔀", clozeText: "Coffee ____ tea?", answer: "or", type: "cloze" },
                { word: "but", emoji: "⚖️", clozeText: "No, it is not coffee, ___ it is tea.", answer: "but", type: "cloze" },
                { word: "what", emoji: "❓", clozeText: "____ is it?", answer: "what", type: "cloze" },
                { word: "coffee", emoji: "☕", type: "true_false" },
                { word: "tea", emoji: "🍵", type: "true_false" },
                { word: "wine", emoji: "🍷", type: "true_false" },
                { word: "water", emoji: "💧", type: "true_false" },
                { word: "Lipton", emoji: "🫖", type: "true_false" },
                { word: "Chardonnay", emoji: "🥂", type: "true_false" },
                { word: "hello", emoji: "👋", clozeText: "- ____. - Oh, hello!", answer: "hello", type: "cloze" },
                { word: "juice", emoji: "🧃", type: "true_false" },
                { word: "beer", emoji: "🍺", type: "true_false" },
                { word: "cash", emoji: "💵", type: "true_false" },
                { word: "card", emoji: "💳", type: "true_false" }
            ]
        },
        2: {
            title: "Day 2 | A thing or a person?",
            words: [
                { word: "thing", emoji: "📦", type: "true_false" },
                { word: "person", emoji: "👤", type: "true_false" },
                { word: "man", emoji: "👨", opposite: "woman", type: "opposite" },
                { word: "woman", emoji: "👩", opposite: "man", type: "opposite" },
                { word: "boy", emoji: "👦", opposite: "girl", type: "opposite" },
                { word: "girl", emoji: "👧", opposite: "boy", type: "opposite" },
                { word: "teacher", emoji: "🧑‍🏫", opposite: "student", type: "opposite" },
                { word: "student", emoji: "🧑‍🎓", opposite: "teacher", type: "opposite" },
                { word: "who", emoji: "❓👤", clozeText: "____ is it? - It's a person.", answer: "who", type: "cloze" },
                { word: "what", emoji: "❓📦", clozeText: "____ is it? - It's a thing.", answer: "what", type: "cloze" },
                { word: "and", emoji: "➕", clozeText: "A man ___ a woman.", answer: "and", type: "cloze" }
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
                { word: "merci", emoji: "🙏", opposite: "de rien", type: "opposite" },
                { word: "de rien", emoji: "💁‍♂️", opposite: "merci", type: "opposite" },
                { word: "s'il vous plaît", emoji: "🥺", clozeText: "Un café, ______.", answer: "s'il vous plaît", type: "cloze" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "d'accord", emoji: "👍", type: "true_false" },
                { word: "désolé", emoji: "🙇‍♂️", type: "true_false" },
                { word: "ou", emoji: "🔀", clozeText: "Café ____ thé ?", answer: "ou", type: "cloze" },
                { word: "mais", emoji: "⚖️", clozeText: "Non, ce n'est pas du café, ___ c'est du thé.", answer: "mais", type: "cloze" },
                { word: "quoi", emoji: "❓", clozeText: "C'est ____ ?", answer: "quoi", type: "cloze" },
                { word: "café", emoji: "☕", type: "true_false" },
                { word: "thé", emoji: "🍵", type: "true_false" },
                { word: "vin", emoji: "🍷", type: "true_false" },
                { word: "eau", emoji: "💧", type: "true_false" },
                { word: "Lipton", emoji: "🫖", type: "true_false" },
                { word: "Chardonnay", emoji: "🥂", type: "true_false" },
                { word: "bonjour", emoji: "👋", clozeText: "- ____. - Oh, bonjour !", answer: "bonjour", type: "cloze" },
                { word: "le jus", emoji: "🧃", type: "true_false" },
                { word: "la bière", emoji: "🍺", type: "true_false" },
                { word: "les espèces", emoji: "💵", type: "true_false" },
                { word: "la carte", emoji: "💳", type: "true_false" }
            ]
        },
        2: {
            title: "Jour 2 | Une chose ou une personne ?",
            words: [
                { word: "la chose", emoji: "📦", type: "true_false" },
                { word: "la personne", emoji: "👤", type: "true_false" },
                { word: "l'homme", emoji: "👨", opposite: "la femme", type: "opposite" },
                { word: "la femme", emoji: "👩", opposite: "l'homme", type: "opposite" },
                { word: "le garçon", emoji: "👦", opposite: "la fille", type: "opposite" },
                { word: "la fille", emoji: "👧", opposite: "le garçon", type: "opposite" },
                { word: "le professeur / la professeure", emoji: "🧑‍🏫", opposite: "l'étudiant / l'étudiante", type: "opposite" },
                { word: "l'étudiant / l'étudiante", emoji: "🧑‍🎓", opposite: "le professeur / la professeure", type: "opposite" },
                { word: "qui", emoji: "❓👤", clozeText: "____ est-ce ? - C'est une personne.", answer: "qui", type: "cloze" },
                { word: "quoi", emoji: "❓📦", clozeText: "C'est ____ ? - C'est une chose.", answer: "quoi", type: "cloze" },
                { word: "et", emoji: "➕", clozeText: "Un homme ___ une femme.", answer: "et", type: "cloze" }
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
                { word: "grazie", emoji: "🙏", opposite: "prego", type: "opposite" },
                { word: "prego", emoji: "💁‍♂️", opposite: "grazie", type: "opposite" },
                { word: "per favore", emoji: "🥺", clozeText: "Un caffè, ______.", answer: "per favore", type: "cloze" },
                { word: "ok", emoji: "👌", type: "true_false" },
                { word: "va bene", emoji: "👍", type: "true_false" },
                { word: "scusa", emoji: "🙇‍♂️", type: "true_false" },
                { word: "o", emoji: "🔀", clozeText: "Caffè ____ tè ?", answer: "o", type: "cloze" },
                { word: "ma", emoji: "⚖️", clozeText: "No, non è caffè, ___ è tè.", answer: "ma", type: "cloze" },
                { word: "cosa", emoji: "❓", clozeText: "____ è?", answer: "cosa", type: "cloze" },
                { word: "caffè", emoji: "☕", type: "true_false" },
                { word: "tè", emoji: "🍵", type: "true_false" },
                { word: "vino", emoji: "🍷", type: "true_false" },
                { word: "acqua", emoji: "💧", type: "true_false" },
                { word: "Lipton", emoji: "🫖", type: "true_false" },
                { word: "Chardonnay", emoji: "🥂", type: "true_false" },
                { word: "ciao", emoji: "👋", clozeText: "- ____. - Oh, ciao!", answer: "ciao", type: "cloze" },
                { word: "il succo", emoji: "🧃", type: "true_false" },
                { word: "la birra", emoji: "🍺", type: "true_false" },
                { word: "i contanti", emoji: "💵", type: "true_false" },
                { word: "la carta", emoji: "💳", type: "true_false" }
            ]
        },
        2: {
            title: "Giorno 2 | Una cosa o una persona?",
            words: [
                { word: "la cosa", emoji: "📦", type: "true_false" },
                { word: "la persona", emoji: "👤", type: "true_false" },
                { word: "l'uomo", emoji: "👨", opposite: "la donna", type: "opposite" },
                { word: "la donna", emoji: "👩", opposite: "l'uomo", type: "opposite" },
                { word: "il ragazzo", emoji: "👦", opposite: "la ragazza", type: "opposite" },
                { word: "la ragazza", emoji: "👧", opposite: "il ragazzo", type: "opposite" },
                { word: "il professore / la professoressa", emoji: "🧑‍🏫", opposite: "lo studente / la studentessa", type: "opposite" },
                { word: "lo studente / la studentessa", emoji: "🧑‍🎓", opposite: "il professore / la professoressa", type: "opposite" },
                { word: "chi", emoji: "❓👤", clozeText: "____ è? - È una persona.", answer: "chi", type: "cloze" },
                { word: "che cosa", emoji: "❓📦", clozeText: "____ è? - È una cosa.", answer: "che cosa", type: "cloze" },
                { word: "e", emoji: "➕", clozeText: "Un uomo ___ una donna.", answer: "e", type: "cloze" }
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
                { word: "спасибо", emoji: "🙏", opposite: "пожалуйста", type: "opposite" },
                { word: "пожалуйста", emoji: "💁‍♂️", opposite: "спасибо", type: "opposite" },
                { word: "пожалуйста", emoji: "🥺", clozeText: "Один кофе, ______.", answer: "пожалуйста", type: "cloze" },
                { word: "ок", emoji: "👌", type: "true_false" },
                { word: "хорошо", emoji: "👍", type: "true_false" },
                { word: "извини", emoji: "🙇‍♂️", type: "true_false" },
                { word: "или", emoji: "🔀", clozeText: "Кофе ____ чай ?", answer: "или", type: "cloze" },
                { word: "но", emoji: "⚖️", clozeText: "Нет, это не кофе, ___ это чай.", answer: "но", type: "cloze" },
                { word: "что", emoji: "❓", clozeText: "____ это?", answer: "что", type: "cloze" },
                { word: "кофе", emoji: "☕", type: "true_false" },
                { word: "чай", emoji: "🍵", type: "true_false" },
                { word: "вино", emoji: "🍷", type: "true_false" },
                { word: "вода", emoji: "💧", type: "true_false" },
                { word: "Lipton", emoji: "🫖", type: "true_false" },
                { word: "Chardonnay", emoji: "🥂", type: "true_false" },
                { word: "привет", emoji: "👋", clozeText: "- ____. - О, привет!", answer: "привет", type: "cloze" },
                { word: "сок", emoji: "🧃", type: "true_false" },
                { word: "пиво", emoji: "🍺", type: "true_false" },
                { word: "наличные", emoji: "💵", type: "true_false" },
                { word: "карта", emoji: "💳", type: "true_false" }
            ]
        },
        2: {
            title: "День 2 | Вещь или человек?",
            words: [
                { word: "вещь", emoji: "📦", type: "true_false" },
                { word: "человек", emoji: "👤", type: "true_false" },
                { word: "мужчина", emoji: "👨", opposite: "женщина", type: "opposite" },
                { word: "женщина", emoji: "👩", opposite: "мужчина", type: "opposite" },
                { word: "мальчик", emoji: "👦", opposite: "девочка", type: "opposite" },
                { word: "девочка", emoji: "👧", opposite: "мальчик", type: "opposite" },
                { word: "учитель / учительница", emoji: "🧑‍🏫", opposite: "студент / студентка", type: "opposite" },
                { word: "студент / студентка", emoji: "🧑‍🎓", opposite: "учитель / учительница", type: "opposite" },
                { word: "кто", emoji: "❓👤", clozeText: "____ это? - Это человек.", answer: "кто", type: "cloze" },
                { word: "что", emoji: "❓📦", clozeText: "____ это? - Это вещь.", answer: "что", type: "cloze" },
                { word: "и", emoji: "➕", clozeText: "Мужчина ___ женщина.", answer: "и", type: "cloze" }
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
                { word: "ευχαριστώ", emoji: "🙏", opposite: "παρακαλώ", type: "opposite" },
                { word: "παρακαλώ", emoji: "💁‍♂️", opposite: "ευχαριστώ", type: "opposite" },
                { word: "παρακαλώ", emoji: "🥺", clozeText: "Έναν καφέ, ______.", answer: "παρακαλώ", type: "cloze" },
                { word: "οκ", emoji: "👌", type: "true_false" },
                { word: "εντάξει", emoji: "👍", type: "true_false" },
                { word: "συγγνώμη", emoji: "🙇‍♂️", type: "true_false" },
                { word: "ή", emoji: "🔀", clozeText: "Καφές ____ τσάι ;", answer: "ή", type: "cloze" },
                { word: "αλλά", emoji: "⚖️", clozeText: "Όχι, δεν είναι καφές, ___ είναι τσάι.", answer: "αλλά", type: "cloze" },
                { word: "τι", emoji: "❓", clozeText: "____ είναι;", answer: "τι", type: "cloze" },
                { word: "καφές", emoji: "☕", type: "true_false" },
                { word: "τσάι", emoji: "🍵", type: "true_false" },
                { word: "κρασί", emoji: "🍷", type: "true_false" },
                { word: "νερό", emoji: "💧", type: "true_false" },
                { word: "Lipton", emoji: "🫖", type: "true_false" },
                { word: "Chardonnay", emoji: "🥂", type: "true_false" },
                { word: "γεια", emoji: "👋", clozeText: "- ____. - Ω, γεια!", answer: "γεια", type: "cloze" },
                { word: "ο χυμός", emoji: "🧃", type: "true_false" },
                { word: "η μπίρα", emoji: "🍺", type: "true_false" },
                { word: "τα μετρητά", emoji: "💵", type: "true_false" },
                { word: "η κάρτα", emoji: "💳", type: "true_false" }
            ]
        },
        2: {
            title: "Ημέρα 2 | Ένα πράγμα ή ένα άτομο;",
            words: [
                { word: "το πράγμα", emoji: "📦", type: "true_false" },
                { word: "το άτομο", emoji: "👤", type: "true_false" },
                { word: "ο άνδρας", emoji: "👨", opposite: "η γυναίκα", type: "opposite" },
                { word: "η γυναίκα", emoji: "👩", opposite: "ο άνδρας", type: "opposite" },
                { word: "το αγόρι", emoji: "👦", opposite: "το κορίτσι", type: "opposite" },
                { word: "το κορίτσι", emoji: "👧", opposite: "το αγόρι", type: "opposite" },
                { word: "ο δάσκαλος / η δασκάλα", emoji: "🧑‍🏫", opposite: "ο μαθητής / η μαθήτρια", type: "opposite" },
                { word: "ο μαθητής / η μαθήτρια", emoji: "🧑‍🎓", opposite: "ο δάσκαλος / η δασκάλα", type: "opposite" },
                { word: "ποιος", emoji: "❓👤", clozeText: "____ είναι; - Είναι ένα άτομο.", answer: "ποιος", type: "cloze" },
                { word: "τι", emoji: "❓📦", clozeText: "____ είναι; - Είναι ένα πράγμα.", answer: "τι", type: "cloze" },
                { word: "και", emoji: "➕", clozeText: "Ένας άνδρας ___ μια γυναίκα.", answer: "και", type: "cloze" }
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
    const hintBtn = document.getElementById('hint-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');

    if (startBtn) {
        startBtn.addEventListener('click', startPractice);
    }

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

    // Load voices once to avoid delay
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
});

function showHint() {
    const wordObj = currentPractice.currentWord;
    if (!wordObj) return;

    let targetAnswer = "";
    if (wordObj.type === 'cloze') {
        targetAnswer = wordObj.answer;
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
    msg.text = currentPractice.currentWord.word;

    const langMap = {
        en: 'en-US',
        fr: 'fr-FR',
        it: 'it-IT',
        ru: 'ru-RU',
        el: 'el-GR'
    };

    const targetLang = langMap[currentPractice.language] || 'en-US';
    msg.lang = targetLang;

    // Try to find a specific voice for the language
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
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
    const current = currentPractice.currentIndex;
    const displayIndex = current < total ? current + 1 : total;
    const percentage = total > 0 ? (current / total) * 100 : 0;

    progressFill.style.width = percentage + '%';

    const translations = {
        en: `Word ${displayIndex} of ${total}`,
        fr: `Mot ${displayIndex} sur ${total}`,
        it: `Parola ${displayIndex} di ${total}`,
        ru: `Слово ${displayIndex} из ${total}`,
        el: `Λέξη ${displayIndex} από ${total}`
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

    lessons.forEach(l => {
        if (langData[l]) {
            const lessonWords = langData[l].words.map(w => ({
                ...w,
                lessonTitle: langData[l].title
            }));
            currentPractice.words.push(...lessonWords);
        }
    });

    if (currentPractice.words.length === 0) {
        alert("No words found for the selected lessons!");
        return;
    }

    currentPractice.words.sort(() => Math.random() - 0.5);
    currentPractice.currentIndex = 0;

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
        const languageSwitcher = document.getElementById('language-switcher');
        if (languageSwitcher) {
            languageSwitcher.value = currentPractice.language;
        }
    }

    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';

    updateProgress();
    showNextWord();
}

function showNextWord() {
    if (currentPractice.currentIndex >= currentPractice.words.length) {
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

    document.getElementById('feedback-message').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('opposite-answer').value = '';
    document.getElementById('opposite-input-container').style.display = 'none';
    document.getElementById('tf-buttons-container').style.display = 'none';
    document.getElementById('hint-btn').style.display = (wordObj.type === 'true_false' ? 'none' : 'inline-block');

    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    if (wordObj.type === 'cloze') {
        document.getElementById('word-display').textContent = wordObj.clozeText;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_cloze');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
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

function checkTypedAnswer() {
    const userAnswer = document.getElementById('opposite-answer').value.trim().toLowerCase();
    let correctAnswer;

    if (currentPractice.currentWord.type === 'cloze') {
        correctAnswer = currentPractice.currentWord.answer.toLowerCase();
    } else {
        correctAnswer = currentPractice.currentWord.opposite.toLowerCase();
    }

    // Check for multiple answers (e.g. "teacher" in FR/IT/EL/RU often has masc/fem forms separated by /)
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
        currentPractice.isCorrect = true;
        document.getElementById('next-btn').style.display = 'block';
        currentPractice.currentIndex++;
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
        document.getElementById('hint-btn').style.display = 'none';
    }
}
