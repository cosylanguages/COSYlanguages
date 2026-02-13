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
            ]
        }
    },
    it: {
        1: {
            title: "Giorno 1 | Vocabulario di base",
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
