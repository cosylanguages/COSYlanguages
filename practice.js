const lessonsData = {
    en: {
        1: {
            title: "Day 1 | Basic vocabulary",
            words: [
                { word: "hello", emoji: "👋", opposite: "goodbye" },
                { word: "goodbye", emoji: "🖐️", opposite: "hello" },
                { word: "yes", emoji: "✅", opposite: "no" },
                { word: "no", emoji: "❌", opposite: "yes" },
                { word: "thank you", emoji: "🙏", opposite: "you're welcome" },
                { word: "you're welcome", emoji: "💁‍♂️", opposite: "thank you" },
                { word: "please", emoji: "🥺", clozeText: "One coffee, ______.", answer: "please" },
                { word: "ok", emoji: "👌" },
                { word: "alright", emoji: "👍" },
                { word: "sorry", emoji: "🙇‍♂️" },
                { word: "or", emoji: "🔀", clozeText: "Coffee ____ tea?", answer: "or" },
                { word: "but", emoji: "⚖️", clozeText: "No, it is not coffee, ___ it is tea.", answer: "but" },
                { word: "what", emoji: "❓", clozeText: "____ is it?", answer: "what" },
                { word: "coffee", emoji: "☕" },
                { word: "tea", emoji: "🍵" },
                { word: "wine", emoji: "🍷" },
                { word: "water", emoji: "💧" },
                { word: "Lipton", emoji: "🫖", isBrand: true },
                { word: "Chardonnay", emoji: "🥂", isBrand: true },
                { word: "juice", emoji: "🧃" },
                { word: "beer", emoji: "🍺" },
                { word: "cash", emoji: "💵" },
                { word: "card", emoji: "💳" }
            ]
        },
        2: {
            title: "Day 2 | A thing or a person?",
            words: [
                { word: "thing", emoji: "📦" },
                { word: "person", emoji: "👤" },
                { word: "man", emoji: "👨", opposite: "woman" },
                { word: "woman", emoji: "👩", opposite: "man" },
                { word: "boy", emoji: "👦", opposite: "girl" },
                { word: "girl", emoji: "👧", opposite: "boy" },
                { word: "teacher", emoji: "🧑‍🏫", opposite: "student" },
                { word: "student", emoji: "🧑‍🎓", opposite: "teacher" },
                { word: "who", emoji: "❓👤", clozeText: "____ is it? - It's a person.", answer: "who" },
                { word: "what", emoji: "❓📦", clozeText: "____ is it? - It's a thing.", answer: "what" },
                { word: "and", emoji: "➕", clozeText: "A man ___ a woman.", answer: "and" }
            ]
        }
    },
    fr: {
        1: {
            title: "Jour 1 | Vocabulaire de base",
            words: [
                { word: "bonjour", emoji: "👋", opposite: "au revoir" },
                { word: "au revoir", emoji: "🖐️", opposite: "bonjour" },
                { word: "oui", emoji: "✅", opposite: "non" },
                { word: "non", emoji: "❌", opposite: "oui" },
                { word: "merci", emoji: "🙏", opposite: "de rien" },
                { word: "de rien", emoji: "💁‍♂️", opposite: "merci" },
                { word: "s'il vous plaît", emoji: "🥺", clozeText: "Un café, ______.", answer: "s'il vous plaît" },
                { word: "ok", emoji: "👌" },
                { word: "d'accord", emoji: "👍" },
                { word: "désolé", emoji: "🙇‍♂️" },
                { word: "ou", emoji: "🔀", clozeText: "Café ____ thé ?", answer: "ou" },
                { word: "mais", emoji: "⚖️", clozeText: "Non, ce n'est pas du café, ___ c'est du thé.", answer: "mais" },
                { word: "quoi", emoji: "❓", clozeText: "C'est ____ ?", answer: "quoi" },
                { word: "café", emoji: "☕" },
                { word: "thé", emoji: "🍵" },
                { word: "vin", emoji: "🍷" },
                { word: "eau", emoji: "💧" },
                { word: "Lipton", emoji: "🫖", isBrand: true },
                { word: "Chardonnay", emoji: "🥂", isBrand: true },
                { word: "le jus", emoji: "🧃" },
                { word: "la bière", emoji: "🍺" },
                { word: "les espèces", emoji: "💵" },
                { word: "la carte", emoji: "💳" }
            ]
        },
        2: {
            title: "Jour 2 | Une chose ou une personne ?",
            words: [
                { word: "la chose", emoji: "📦" },
                { word: "la personne", emoji: "👤" },
                { word: "l'homme", emoji: "👨", opposite: "la femme" },
                { word: "la femme", emoji: "👩", opposite: "l'homme" },
                { word: "le garçon", emoji: "👦", opposite: "la fille" },
                { word: "la fille", emoji: "👧", opposite: "le garçon" },
                { word: "le professeur / la professeure", emoji: "🧑‍🏫", opposite: "l'étudiant / l'étudiante" },
                { word: "l'étudiant / l'étudiante", emoji: "🧑‍🎓", opposite: "le professeur / la professeure" },
                { word: "qui", emoji: "❓👤", clozeText: "____ est-ce ? - C'est une personne.", answer: "qui" },
                { word: "quoi", emoji: "❓📦", clozeText: "C'est ____ ? - C'est une chose.", answer: "quoi" },
                { word: "et", emoji: "➕", clozeText: "Un homme ___ une femme.", answer: "et" }
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabolario di base",
            words: [
                { word: "ciao", emoji: "👋", opposite: "arrivederci" },
                { word: "arrivederci", emoji: "🖐️", opposite: "ciao" },
                { word: "sì", emoji: "✅", opposite: "no" },
                { word: "no", emoji: "❌", opposite: "sì" },
                { word: "grazie", emoji: "🙏", opposite: "prego" },
                { word: "prego", emoji: "💁‍♂️", opposite: "grazie" },
                { word: "per favore", emoji: "🥺", clozeText: "Un caffè, ______.", answer: "per favore" },
                { word: "ok", emoji: "👌" },
                { word: "va bene", emoji: "👍" },
                { word: "scusa", emoji: "🙇‍♂️" },
                { word: "o", emoji: "🔀", clozeText: "Caffè ____ tè ?", answer: "o" },
                { word: "ma", emoji: "⚖️", clozeText: "No, non è caffè, ___ è tè.", answer: "ma" },
                { word: "cosa", emoji: "❓", clozeText: "____ è?", answer: "cosa" },
                { word: "caffè", emoji: "☕" },
                { word: "tè", emoji: "🍵" },
                { word: "vino", emoji: "🍷" },
                { word: "acqua", emoji: "💧" },
                { word: "Lipton", emoji: "🫖", isBrand: true },
                { word: "Chardonnay", emoji: "🥂", isBrand: true },
                { word: "il succo", emoji: "🧃" },
                { word: "la birra", emoji: "🍺" },
                { word: "i contanti", emoji: "💵" },
                { word: "la carta", emoji: "💳" }
            ]
        },
        2: {
            title: "Giorno 2 | Una cosa o una persona?",
            words: [
                { word: "la cosa", emoji: "📦" },
                { word: "la persona", emoji: "👤" },
                { word: "l'uomo", emoji: "👨", opposite: "la donna" },
                { word: "la donna", emoji: "👩", opposite: "l'uomo" },
                { word: "il ragazzo", emoji: "👦", opposite: "la ragazza" },
                { word: "la ragazza", emoji: "👧", opposite: "il ragazzo" },
                { word: "il professore / la professoressa", emoji: "🧑‍🏫", opposite: "lo studente / la studentessa" },
                { word: "lo studente / la studentessa", emoji: "🧑‍🎓", opposite: "il professore / la professoressa" },
                { word: "chi", emoji: "❓👤", clozeText: "____ è? - È una persona.", answer: "chi" },
                { word: "che cosa", emoji: "❓📦", clozeText: "____ è? - È una cosa.", answer: "che cosa" },
                { word: "e", emoji: "➕", clozeText: "Un uomo ___ una donna.", answer: "e" }
            ]
        }
    },
    ru: {
        1: {
            title: "День 1 | Базовая лексика",
            words: [
                { word: "привет", emoji: "👋", opposite: "пока" },
                { word: "пока", emoji: "🖐️", opposite: "привет" },
                { word: "да", emoji: "✅", opposite: "нет" },
                { word: "нет", emoji: "❌", opposite: "да" },
                { word: "спасибо", emoji: "🙏", opposite: "пожалуйста" },
                { word: "пожалуйста", emoji: "💁‍♂️", opposite: "спасибо" },
                { word: "пожалуйста", emoji: "🥺", clozeText: "Один кофе, ______.", answer: "пожалуйста" },
                { word: "ок", emoji: "👌" },
                { word: "хорошо", emoji: "👍" },
                { word: "извини", emoji: "🙇‍♂️" },
                { word: "или", emoji: "🔀", clozeText: "Кофе ____ чай ?", answer: "или" },
                { word: "но", emoji: "⚖️", clozeText: "Нет, это не кофе, ___ это чай.", answer: "но" },
                { word: "что", emoji: "❓", clozeText: "____ это?", answer: "что" },
                { word: "кофе", emoji: "☕" },
                { word: "чай", emoji: "🍵" },
                { word: "вино", emoji: "🍷" },
                { word: "вода", emoji: "💧" },
                { word: "Lipton", emoji: "🫖", isBrand: true },
                { word: "Chardonnay", emoji: "🥂", isBrand: true },
                { word: "сок", emoji: "🧃" },
                { word: "пиво", emoji: "🍺" },
                { word: "наличные", emoji: "💵" },
                { word: "карта", emoji: "💳" }
            ]
        },
        2: {
            title: "День 2 | Вещь или человек?",
            words: [
                { word: "вещь", emoji: "📦" },
                { word: "человек", emoji: "👤" },
                { word: "мужчина", emoji: "👨", opposite: "женщина" },
                { word: "женщина", emoji: "👩", opposite: "мужчина" },
                { word: "мальчик", emoji: "👦", opposite: "девочка" },
                { word: "девочка", emoji: "👧", opposite: "мальчик" },
                { word: "учитель / учительница", emoji: "🧑‍🏫", opposite: "студент / студентка" },
                { word: "студент / студентка", emoji: "🧑‍🎓", opposite: "учитель / учительница" },
                { word: "кто", emoji: "❓👤", clozeText: "____ это? - Это человек.", answer: "кто" },
                { word: "что", emoji: "❓📦", clozeText: "____ это? - Это вещь.", answer: "что" },
                { word: "и", emoji: "➕", clozeText: "Мужчина ___ женщина.", answer: "и" }
            ]
        }
    },
    el: {
        1: {
            title: "Ημέρα 1 | Βασικό λεξιλόγιο",
            words: [
                { word: "γεια", emoji: "👋", opposite: "αντίο" },
                { word: "αντίο", emoji: "🖐️", opposite: "γεια" },
                { word: "ναι", emoji: "✅", opposite: "όχι" },
                { word: "όχι", emoji: "❌", opposite: "ναι" },
                { word: "ευχαριστώ", emoji: "🙏", opposite: "παρακαλώ" },
                { word: "παρακαλώ", emoji: "💁‍♂️", opposite: "ευχαριστώ" },
                { word: "παρακαλώ", emoji: "🥺", clozeText: "Έναν καφέ, ______.", answer: "παρακαλώ" },
                { word: "οκ", emoji: "👌" },
                { word: "εντάξει", emoji: "👍" },
                { word: "συγγνώμη", emoji: "🙇‍♂️" },
                { word: "ή", emoji: "🔀", clozeText: "Καφές ____ τσάι ;", answer: "ή" },
                { word: "αλλά", emoji: "⚖️", clozeText: "Όχι, δεν είναι καφές, ___ είναι τσάι.", answer: "αλλά" },
                { word: "τι", emoji: "❓", clozeText: "____ είναι;", answer: "τι" },
                { word: "καφές", emoji: "☕" },
                { word: "τσάι", emoji: "🍵" },
                { word: "κρασί", emoji: "🍷" },
                { word: "νερό", emoji: "💧" },
                { word: "Lipton", emoji: "🫖", isBrand: true },
                { word: "Chardonnay", emoji: "🥂", isBrand: true },
                { word: "ο χυμός", emoji: "🧃" },
                { word: "η μπίρα", emoji: "🍺" },
                { word: "τα μετρητά", emoji: "💵" },
                { word: "η κάρτα", emoji: "💳" }
            ]
        },
        2: {
            title: "Ημέρα 2 | Ένα πράγμα ή ένα άτομο;",
            words: [
                { word: "το πράγμα", emoji: "📦" },
                { word: "το άτομο", emoji: "👤" },
                { word: "ο άνδρας", emoji: "👨", opposite: "η γυναίκα" },
                { word: "η γυναίκα", emoji: "👩", opposite: "ο άνδρας" },
                { word: "το αγόρι", emoji: "👦", opposite: "το κορίτσι" },
                { word: "το κορίτσι", emoji: "👧", opposite: "το αγόρι" },
                { word: "ο δάσκαλος / η δασκάλα", emoji: "🧑‍🏫", opposite: "ο μαθητής / η μαθήτρια" },
                { word: "ο μαθητής / η μαθήτρια", emoji: "🧑‍🎓", opposite: "ο δάσκαλος / η δασκάλα" },
                { word: "ποιος", emoji: "❓👤", clozeText: "____ είναι; - Είναι ένα άτομο.", answer: "ποιος" },
                { word: "τι", emoji: "❓📦", clozeText: "____ είναι; - Είναι ένα πράγμα.", answer: "τι" },
                { word: "και", emoji: "➕", clozeText: "Ένας άνδρας ___ μια γυναίκα.", answer: "και" }
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
    scrambleAnswer: ""
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
    const clearScrambleBtn = document.getElementById('clear-scramble-btn');

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

    const translationsList = {
        en: `Word ${displayIndex} of ${total}`,
        fr: `Mot ${displayIndex} sur ${total}`,
        it: `Parola ${displayIndex} di ${total}`,
        ru: `Слово ${displayIndex} из ${total}`,
        el: `Λέξη ${displayIndex} από ${total}`
    };

    progressText.textContent = translationsList[currentPractice.language] || translationsList['en'];
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
            const lessonWords = langData[l].words.map(w => {
                // Determine a random type for each word in this session
                const possibleTypes = ['true_false', 'multiple_choice', 'scramble'];
                if (w.opposite) possibleTypes.push('opposite');

                let selectedType;
                if (w.clozeText || w.isBrand) {
                    selectedType = 'multiple_choice';
                } else {
                    selectedType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
                }

                return {
                    ...w,
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
    document.getElementById('choices-grid').style.display = 'none';
    document.getElementById('scramble-container').style.display = 'none';
    document.getElementById('hint-btn').style.display = (wordObj.type === 'true_false' ? 'none' : 'inline-block');

    document.getElementById('lesson-info').textContent = wordObj.lessonTitle;

    if (wordObj.type === 'multiple_choice') {
        const text = wordObj.clozeText || wordObj.word;
        document.getElementById('word-display').textContent = text;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_multiple_choice');
        document.getElementById('choices-grid').style.display = 'grid';
        renderMultipleChoice();
    } else if (wordObj.type === 'scramble') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_scramble');
        document.getElementById('scramble-container').style.display = 'block';
        renderScramble();
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
        document.getElementById('choices-grid').style.display = 'none';
        document.getElementById('scramble-container').style.display = 'none';
        document.getElementById('hint-btn').style.display = 'none';
    }
}
