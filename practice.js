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
                { word: "hello", emoji: "👋", clozeText: "- ____. - Oh, hello!", answer: "hello", type: "cloze" }
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
                { word: "bonjour", emoji: "👋", clozeText: "- ____. - Oh, bonjour !", answer: "bonjour", type: "cloze" }
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
                { word: "ciao", emoji: "👋", clozeText: "- ____. - Oh, ciao!", answer: "ciao", type: "cloze" }
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
                { word: "привет", emoji: "👋", clozeText: "- ____. - О, привет!", answer: "привет", type: "cloze" }
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
                { word: "γεια", emoji: "👋", clozeText: "- ____. - Ω, γεια!", answer: "γεια", type: "cloze" }
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

    if (listenBtn) {
        listenBtn.addEventListener('click', speakWord);
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
        alert("No words found for the selected lessons! Currently only Lesson 1 is available.");
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
            document.getElementById('emoji-display').textContent = distractor.emoji;
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

    if (typeof setLanguage === 'function') {
        setLanguage(currentPractice.language);
    }

    if (isCorrect) {
        currentPractice.isCorrect = true;
        document.getElementById('next-btn').style.display = 'block';
        currentPractice.currentIndex++;
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
    }
}
