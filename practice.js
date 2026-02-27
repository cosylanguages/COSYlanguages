const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "Hello", emoji: "👋", opposite: "Goodbye", category: "vocabulary" },
                { word: "Yes", emoji: "✅", opposite: "No", category: "vocabulary" },
                { word: "Thank you", emoji: "🙏", opposite: "You're welcome", category: "vocabulary" },
                { word: "Please", emoji: "🥺", clozeText: "A coffee, ______.", answer: "please", category: "vocabulary" },
                { word: "Alright", emoji: "👍", opposite: "Ok", category: "vocabulary" },
                { word: "Sorry", emoji: "🙇‍♂️", opposite: ":(", category: "vocabulary" },
                { word: "or", emoji: "🔀", clozeText: "Coffee ____ tea?", answer: "or", category: "grammar" },
                { word: "coffee", emoji: "☕", category: "vocabulary" },
                { word: "tea", emoji: "🍵", category: "vocabulary" },
                { word: "juice", emoji: "🧃", category: "vocabulary" },
                { word: "wine", emoji: "🍷", category: "vocabulary" },
                { word: "beer", emoji: "🍺", category: "vocabulary" },
                { word: "water", emoji: "🚰", category: "vocabulary" },
                { word: "cash", emoji: "💵", category: "vocabulary" },
                { word: "card", emoji: "💳", category: "vocabulary" },
                { word: "not", emoji: "❌", clozeText: "No, it is ___ coffee.", answer: "not", category: "grammar" },
                { word: "What", emoji: "❓", clozeText: "____ is it?", answer: "What", category: "grammar" },
                { word: "but", emoji: "⚖️", clozeText: "No, it is not coffee, ___ it is tea.", answer: "but", category: "grammar" }
            ]
        }
    },
    fr: {
        1: {
            title: "Jour 1 | Vocabulaire de base",
            words: [
                { word: "Bonjour", emoji: "👋", opposite: "Au revoir", category: "vocabulary" },
                { word: "Oui", emoji: "✅", opposite: "Non", category: "vocabulary" },
                { word: "Merci", emoji: "🙏", opposite: "De rien", category: "vocabulary" },
                { word: "S'il vous plaît", emoji: "🥺", clozeText: "Un café, ______.", answer: "s'il vous plaît", category: "vocabulary" },
                { word: "D'accord", emoji: "👍", opposite: "Ok", category: "vocabulary" },
                { word: "Désolé", emoji: "🙇‍♂️", opposite: ":(", category: "vocabulary" },
                { word: "ou", emoji: "🔀", clozeText: "Café ____ thé ?", answer: "ou", category: "grammar" },
                { word: "le café", emoji: "☕", category: "vocabulary", article: "le", baseWord: "café" },
                { word: "le thé", emoji: "🍵", category: "vocabulary", article: "le", baseWord: "thé" },
                { word: "le jus", emoji: "🧃", category: "vocabulary", article: "le", baseWord: "jus" },
                { word: "le vin", emoji: "🍷", category: "vocabulary", article: "le", baseWord: "vin" },
                { word: "la bière", emoji: "🍺", category: "vocabulary", article: "la", baseWord: "bière" },
                { word: "l'eau", emoji: "🚰", category: "vocabulary", article: "l'", baseWord: "eau" },
                { word: "les espèces", emoji: "💵", category: "vocabulary", article: "les", baseWord: "espèces" },
                { word: "la carte", emoji: "💳", category: "vocabulary", article: "la", baseWord: "carte" },
                { word: "pas", emoji: "❌", clozeText: "Non, ce n'est ___ du café.", answer: "pas", category: "grammar" },
                { word: "Quoi", emoji: "❓", clozeText: "C'est ____ ?", answer: "quoi", category: "grammar" },
                { word: "mais", emoji: "⚖️", clozeText: "Non, ce n'est pas du café, ___ c'est du thé.", answer: "mais", category: "grammar" }
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabolario di base",
            words: [
                { word: "Buongiorno", emoji: "👋", opposite: "Arrivederci", category: "vocabulary" },
                { word: "Sì", emoji: "✅", opposite: "No", category: "vocabulary" },
                { word: "Grazie", emoji: "🙏", opposite: "Prego", category: "vocabulary" },
                { word: "Per favore", emoji: "🥺", clozeText: "Un caffè, ______.", answer: "per favore", category: "vocabulary" },
                { word: "Va bene", emoji: "👍", opposite: "Ok", category: "vocabulary" },
                { word: "Scusi", emoji: "🙇‍♂️", opposite: ":(", category: "vocabulary" },
                { word: "o", emoji: "🔀", clozeText: "Caffè ____ tè?", answer: "o", category: "grammar" },
                { word: "il caffè", emoji: "☕", category: "vocabulary", article: "il", baseWord: "caffè" },
                { word: "il tè", emoji: "🍵", category: "vocabulary", article: "il", baseWord: "tè" },
                { word: "il succo", emoji: "🧃", category: "vocabulary", article: "il", baseWord: "succo" },
                { word: "il vino", emoji: "🍷", category: "vocabulary", article: "il", baseWord: "vino" },
                { word: "la birra", emoji: "🍺", category: "vocabulary", article: "la", baseWord: "birra" },
                { word: "l'acqua", emoji: "🚰", category: "vocabulary", article: "l'", baseWord: "acqua" },
                { word: "i contanti", emoji: "💵", category: "vocabulary", article: "i", baseWord: "contanti" },
                { word: "la carta", emoji: "💳", category: "vocabulary", article: "la", baseWord: "carta" },
                { word: "non", emoji: "❌", clozeText: "No, ___ è caffè.", answer: "non", category: "grammar" },
                { word: "Cosa", emoji: "❓", clozeText: "____ è?", answer: "cosa", category: "grammar" },
                { word: "ma", emoji: "⚖️", clozeText: "No, non è caffè, ___ è tè.", answer: "ma", category: "grammar" }
            ]
        }
    },
    ru: {
        1: {
            title: "День 1 | Базовая лексика",
            words: [
                { word: "Добрый день", emoji: "👋", opposite: "До свидания", category: "vocabulary" },
                { word: "Да", emoji: "✅", opposite: "Нет", category: "vocabulary" },
                { word: "Спасибо", emoji: "🙏", opposite: "Пожалуйста", category: "vocabulary" },
                { word: "Пожалуйста", emoji: "🥺", clozeText: "Один кофе, ______.", answer: "пожалуйста", category: "vocabulary" },
                { word: "Хорошо", emoji: "👍", opposite: "Ок", category: "vocabulary" },
                { word: "Извините", emoji: "🙇‍♂️", opposite: ":(", category: "vocabulary" },
                { word: "или", emoji: "🔀", clozeText: "Кофе ____ чай?", answer: "или", category: "grammar" },
                { word: "кофе", emoji: "☕", category: "vocabulary", gender: "он", baseWord: "кофе" },
                { word: "чай", emoji: "🍵", category: "vocabulary", gender: "он", baseWord: "чай" },
                { word: "сок", emoji: "🧃", category: "vocabulary", gender: "он", baseWord: "сок" },
                { word: "вино", emoji: "🍷", category: "vocabulary", gender: "оно", baseWord: "вино" },
                { word: "пиво", emoji: "🍺", category: "vocabulary", gender: "оно", baseWord: "пиво" },
                { word: "вода", emoji: "🚰", category: "vocabulary", gender: "она", baseWord: "вода" },
                { word: "наличные", emoji: "💵", category: "vocabulary" },
                { word: "карта", emoji: "💳", category: "vocabulary", gender: "она", baseWord: "карта" },
                { word: "не", emoji: "❌", clozeText: "Нет, это ___ кофе.", answer: "не", category: "grammar" },
                { word: "Что", emoji: "❓", clozeText: "____ это?", answer: "Что", category: "grammar" },
                { word: "но", emoji: "⚖️", clozeText: "Нет, это не кофе, ___ это чай.", answer: "но", category: "grammar" }
            ]
        }
    },
    el: {
        1: {
            title: "Ημέρα 1 | Βασικό λεξιλόγιο",
            words: [
                { word: "Καλημέρα", emoji: "👋", opposite: "Αντίο", category: "vocabulary" },
                { word: "Ναι", emoji: "✅", opposite: "Όχι", category: "vocabulary" },
                { word: "Ευχαριστώ", emoji: "🙏", opposite: "Παρακαλώ", category: "vocabulary" },
                { word: "Παρακαλώ", emoji: "🥺", clozeText: "Έναν καφέ, ______.", answer: "παρακαλώ", category: "vocabulary" },
                { word: "Εντάξει", emoji: "👍", opposite: "Οκ", category: "vocabulary" },
                { word: "Συγγνώμη", emoji: "🙇‍♂️", opposite: ":(", category: "vocabulary" },
                { word: "ή", emoji: "🔀", clozeText: "Καφές ____ τσάι;", answer: "ή", category: "grammar" },
                { word: "ο καφές", emoji: "☕", category: "vocabulary", article: "ο", baseWord: "καφές" },
                { word: "το τσάι", emoji: "🍵", category: "vocabulary", article: "το", baseWord: "τσάι" },
                { word: "ο χυμός", emoji: "🧃", category: "vocabulary", article: "ο", baseWord: "χυμός" },
                { word: "το κρασί", emoji: "🍷", category: "vocabulary", article: "το", baseWord: "κρασί" },
                { word: "η μπίρα", emoji: "🍺", category: "vocabulary", article: "η", baseWord: "μπίρα" },
                { word: "το νερό", emoji: "🚰", category: "vocabulary", article: "το", baseWord: "νερό" },
                { word: "τα μετρητά", emoji: "💵", category: "vocabulary", article: "τα", baseWord: "μετρητά" },
                { word: "η κάρτα", emoji: "💳", category: "vocabulary", article: "η", baseWord: "κάρτα" },
                { word: "δεν", emoji: "❌", clozeText: "Όχι, ___ είναι καφές.", answer: "δεν", category: "grammar" },
                { word: "Τι", emoji: "❓", clozeText: "____ είναι;", answer: "Τι", category: "grammar" },
                { word: "αλλά", emoji: "⚖️", clozeText: "Όχι, δεν είναι καφές, ___ είναι τσάι.", answer: "αλλά", category: "grammar" }
            ]
        }
    }
};

var currentPractice = {
    language: 'en',
    lessons: [],
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    score: 0
};

document.addEventListener('DOMContentLoaded', () => {
    loadStreak();
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const checkOppositeBtn = document.getElementById('check-opposite-btn');
    const trueBtn = document.getElementById('true-btn');
    const falseBtn = document.getElementById('false-btn');
    const hintBtn = document.getElementById('hint-btn');
    const oppositeAnswerInput = document.getElementById('opposite-answer');
    const listenBtn = document.getElementById('listen-btn');
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

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

    if (clearScrambleBtn) {
        clearScrambleBtn.addEventListener('click', clearScramble);
    }

    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
            loadStreak();
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
    if (wordObj.type === 'cloze' || wordObj.type === 'multiple_choice' || wordObj.type === 'scramble') {
        targetAnswer = wordObj.answer || wordObj.word;
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
    const current = currentPractice.currentIndex;
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

    const enabledTypes = [];
    if (document.getElementById('type-mc').checked) enabledTypes.push('multiple_choice');
    if (document.getElementById('type-ls').checked) enabledTypes.push('listen_select');
    if (document.getElementById('type-sc').checked) enabledTypes.push('scramble');
    if (document.getElementById('type-op').checked) enabledTypes.push('opposite');
    if (document.getElementById('type-cl').checked) enabledTypes.push('cloze');
    if (document.getElementById('type-tf').checked) enabledTypes.push('true_false');
    if (document.getElementById('type-ga').checked) enabledTypes.push('gender_articles');

    if (enabledTypes.length === 0) {
        alert("Please select at least one task type!");
        return;
    }

    const enabledCategories = [];
    if (document.getElementById('cat-vocab').checked) enabledCategories.push('vocabulary');
    if (document.getElementById('cat-grammar').checked) enabledCategories.push('grammar');

    if (enabledCategories.length === 0) {
        alert("Please select at least one category (Vocabulary or Grammar)!");
        return;
    }

    lessons.forEach(l => {
        if (langData[l]) {
            const filteredWords = langData[l].words.filter(w => {
                let catMatch = false;
                if (enabledCategories.includes(w.category)) catMatch = true;
                if (enabledCategories.includes('grammar') && (w.article || w.gender) && enabledTypes.includes('gender_articles')) catMatch = true;
                if (!catMatch) return false;

                // Ensure at least one enabled task type is possible for this word
                return enabledTypes.some(t => {
                    if (t === 'opposite') return !!w.opposite;
                    if (t === 'cloze') return !!w.clozeText;
                    if (t === 'gender_articles') return !!(w.article || w.gender);
                    return true; // MC, LS, SC, TF are generally always possible
                });
            });
            const lessonWords = filteredWords.map(w => {
                let wordCopy = { ...w };
                let possibleTypes = [...enabledTypes];

                // Randomly swap word and opposite
                if (wordCopy.opposite && Math.random() > 0.5) {
                    const originalWord = wordCopy.word;
                    wordCopy.word = wordCopy.opposite;
                    wordCopy.opposite = originalWord;
                }

                // Filtering based on word properties
                if (!wordCopy.opposite) possibleTypes = possibleTypes.filter(t => t !== 'opposite');
                if (!wordCopy.clozeText) possibleTypes = possibleTypes.filter(t => t !== 'cloze');
                if (!wordCopy.article && !wordCopy.gender) possibleTypes = possibleTypes.filter(t => t !== 'gender_articles');

                // If word is from vocabulary category but we are in grammar-only mode, it must be gender_articles
                if (wordCopy.category === 'vocabulary' && !enabledCategories.includes('vocabulary')) {
                    possibleTypes = ['gender_articles'];
                }

                // Brands always multiple choice if enabled, otherwise just random from others
                let selectedType;
                if (wordCopy.isBrand) {
                    selectedType = enabledTypes.includes('multiple_choice') ? 'multiple_choice' : enabledTypes[Math.floor(Math.random() * enabledTypes.length)];
                } else if (wordCopy.clozeText && enabledTypes.includes('cloze')) {
                    if (enabledTypes.includes('multiple_choice')) {
                        selectedType = Math.random() > 0.5 ? 'cloze' : 'multiple_choice';
                    } else {
                        selectedType = 'cloze';
                    }
                } else {
                    if (possibleTypes.length === 0) possibleTypes = [enabledTypes[Math.floor(Math.random() * enabledTypes.length)]];
                    selectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
                }

                return {
                    ...wordCopy,
                    type: selectedType,
                    lessonTitle: langData[l].title
                };
            });
            currentPractice.words.push(...lessonWords);
        }
    });

    if (currentPractice.words.length === 0) {
        alert("No words found for the selected lessons!");
        return;
    }

    currentPractice.words.sort(() => Math.random() - 0.5);
    currentPractice.currentIndex = 0;
    currentPractice.score = 0;
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

    updateProgress();
    showNextWord();
}

function showNextWord() {
    if (currentPractice.currentIndex >= currentPractice.words.length) {
        updateProgress();
        showSummary();
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
    document.getElementById('choices-grid').style.display = 'none';
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('hint-btn').style.display = (wordObj.type === 'true_false' ? 'none' : 'inline-block');

    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

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

    // If current word's article/gender is not in the map for some reason, add it
    const targetValue = wordObj.article || wordObj.gender;
    if (targetValue && !choices.includes(targetValue)) {
        choices.push(targetValue);
    }

    choices.forEach(article => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = article;
        btn.onclick = () => {
            if (article === targetValue) {
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
        currentPractice.currentIndex++;
        document.getElementById('opposite-input-container').style.display = 'none';
        document.getElementById('tf-buttons-container').style.display = 'none';
        document.getElementById('choices-grid').style.display = 'none';
        document.getElementById('scramble-container').style.display = 'none';
        document.getElementById('hint-btn').style.display = 'none';
    }
}
