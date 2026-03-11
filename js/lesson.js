
var currentLesson = {
    language: 'en',
    day: '1',
    words: [],
    currentIndex: 0,
    currentWord: null,
    isCorrect: false,
    scrambleAnswer: "",
    scrambleAnswerWords: [],
    score: 0,
    tfCorrectAnswer: null
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    const urlParams = new URLSearchParams(window.location.search);
    currentLesson.language = urlParams.get('lang') || 'en';
    currentLesson.day = urlParams.get('lesson') || '1';

    // UI elements
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
    const exitLessonBtn = document.getElementById('exit-lesson-btn');

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', showNextWord);
    if (checkOppositeBtn) checkOppositeBtn.addEventListener('click', checkTypedAnswer);
    if (oppositeAnswerInput) {
        oppositeAnswerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkTypedAnswer();
        });
    }
    if (trueBtn) trueBtn.addEventListener('click', () => checkTrueFalseAnswer(true));
    if (falseBtn) falseBtn.addEventListener('click', () => checkTrueFalseAnswer(false));
    if (hintBtn) hintBtn.addEventListener('click', showHint);
    if (listenBtn) listenBtn.addEventListener('click', speakWord);
    if (clearScrambleBtn) clearScrambleBtn.addEventListener('click', clearScramble);
    if (finishConversationBtn) finishConversationBtn.addEventListener('click', () => showFeedback(true));
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            window.location.href = 'days.html';
        });
    }
    if (exitLessonBtn) {
        exitLessonBtn.addEventListener('click', () => {
            if (confirm("Exit lesson and return to student area?")) {
                window.location.href = 'days.html';
            }
        });
    }

    startLesson();
});

function startLesson() {
    const lang = currentLesson.language;
    const day = currentLesson.day;

    if (window.lessonsData && window.lessonsData[lang] && window.lessonsData[lang][day]) {
        const rawItems = window.lessonsData[lang][day].words;
        currentLesson.words = rawItems.map(item => {
            let wordCopy = { ...item, lessonTitle: window.lessonsData[lang][day].title };

            // Determine task type based on available metadata
            let possibleTypes = ['multiple_choice', 'scramble', 'true_false'];
            if (wordCopy.opposite) possibleTypes.push('opposite');
            if (wordCopy.clozeText) possibleTypes.push('cloze');
            if (wordCopy.article || wordCopy.gender) possibleTypes.push('gender_articles');
            if (wordCopy.numberPlural) possibleTypes.push('number_plural');
    if (wordCopy.type === 'conversation' || wordCopy.category === 'conversation') {
        possibleTypes = ['conversation'];
    }

    const isSentence = wordCopy.word && wordCopy.word.includes(' ');
            if (isSentence) {
                // If it's a sentence, prefer word_scramble or number_plural
                if (wordCopy.numberPlural) {
                    wordCopy.type = 'number_plural';
                } else {
                    wordCopy.type = 'word_scramble';
                }
            } else {
                // Pick a random possible type
                wordCopy.type = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
            }

            // Specific overrides for curriculum if needed
            if (wordCopy.category === 'conversation') wordCopy.type = 'conversation';

            return wordCopy;
        });

        currentLesson.words.sort(() => Math.random() - 0.5);
        currentLesson.currentIndex = 0;
        currentLesson.score = 0;

        if (typeof setLanguage === 'function') {
            setLanguage(lang);
        }

        showNextWord();
    } else {
        alert("Lesson data not found!");
        window.location.href = 'days.html';
    }
}

function showNextWord() {
    if (currentLesson.currentIndex >= currentLesson.words.length) {
        showSummary();
        return;
    }

    currentLesson.currentWord = currentLesson.words[currentLesson.currentIndex];
    const wordObj = currentLesson.currentWord;
    currentLesson.isCorrect = false;

    updateProgress();

    // Reset UI
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

    // Task Example
    const exampleEl = document.getElementById('task-example');
    if (exampleEl) {
        const lang = currentLesson.language;
        const typeKey = wordObj.type === 'word_scramble' ? 'ws' :
                        wordObj.type === 'multiple_choice' ? 'mc' :
                        wordObj.type === 'listen_select' ? 'ls' :
                        wordObj.type === 'scramble' ? 'sc' :
                        wordObj.type === 'opposite' ? 'op' :
                        wordObj.type === 'cloze' ? 'cl' :
                        wordObj.type === 'true_false' ? 'tf' :
                        wordObj.type === 'gender_articles' ? 'ga' :
                        wordObj.type === 'number_plural' ? 'np' : '';
        const exampleKey = `example_${typeKey}`;
        if (translations[lang] && translations[lang][exampleKey]) {
            exampleEl.textContent = translations[lang][exampleKey];
            exampleEl.style.display = 'inline-block';
        } else {
            exampleEl.style.display = 'none';
        }
    }

    // Subtext
    const subtextEl = document.getElementById('subtext-display');
    if (subtextEl) {
        if (wordObj.subtext) {
            subtextEl.textContent = wordObj.subtext;
            subtextEl.style.display = 'block';
        } else {
            subtextEl.style.display = 'none';
        }
    }

    // Render Task
    if (wordObj.type === 'multiple_choice') {
        document.getElementById('word-display').textContent = (wordObj.emoji && wordObj.category === 'vocabulary') ? '???' : (wordObj.clozeText || wordObj.word);
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_multiple_choice');
        document.getElementById('choices-grid').style.display = 'grid';
        renderMultipleChoice();
    } else if (wordObj.type === 'cloze' || wordObj.type === 'number_plural') {
        document.getElementById('word-display').textContent = wordObj.type === 'number_plural' ? wordObj.numberPlural : wordObj.clozeText;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'number_plural' ? 'task_number_plural' : 'task_cloze');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
    } else if (wordObj.type === 'scramble' || wordObj.type === 'word_scramble') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'word_scramble' ? 'task_word_scramble' : 'task_scramble');
        document.getElementById('scramble-container').style.display = 'block';
        if (wordObj.type === 'word_scramble') renderWordScramble();
        else renderScramble();
    } else if (wordObj.type === 'gender_articles') {
        document.getElementById('word-display').textContent = wordObj.baseWord;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_gender_articles');
        document.getElementById('choices-grid').style.display = 'grid';
        renderGenderArticles();
    } else if (wordObj.type === 'true_false') {
        document.getElementById('word-display').textContent = wordObj.word;
        const isTrue = Math.random() > 0.5;
        currentLesson.tfCorrectAnswer = isTrue;
        if (isTrue) {
            document.getElementById('emoji-display').textContent = wordObj.emoji;
        } else {
            document.getElementById('emoji-display').textContent = '❓';
        }
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_true_false');
        document.getElementById('tf-buttons-container').style.display = 'flex';
    } else if (wordObj.type === 'conversation') {
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💬';
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_conversation');
        document.getElementById('conversation-container').style.display = 'block';
    } else {
        // opposite
        document.getElementById('word-display').textContent = wordObj.word;
        document.getElementById('emoji-display').textContent = wordObj.emoji;
        document.getElementById('task-instruction').setAttribute('data-translate-key', 'task_opposite');
        document.getElementById('opposite-input-container').style.display = 'flex';
        document.getElementById('opposite-answer').focus();
    }

    if (typeof setLanguage === 'function') setLanguage(currentLesson.language);
}

function renderMultipleChoice() {
    const wordObj = currentLesson.currentWord;
    const grid = document.getElementById('choices-grid');
    grid.innerHTML = '';
    const correct = wordObj.answer || wordObj.word;
    let choices = [correct];

    // Distractors from same lesson
    const distractors = currentLesson.words
        .map(w => w.answer || w.word)
        .filter(val => val && val.toLowerCase() !== correct.toLowerCase());

    choices.push(...distractors.sort(() => Math.random() - 0.5).slice(0, 2));
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.onclick = () => {
            if (choice.toLowerCase() === correct.toLowerCase()) {
                btn.classList.add('correct');
                showFeedback(true);
            } else {
                btn.classList.add('incorrect');
                showFeedback(false);
            }
        };
        grid.appendChild(btn);
    });
}

function renderGenderArticles() {
    const wordObj = currentLesson.currentWord;
    const grid = document.getElementById('choices-grid');
    grid.innerHTML = '';
    const lang = currentLesson.language;
    const articlesMap = {
        it: ['il', 'la', 'lo', "l'", 'i', 'gli', 'le'],
        fr: ['le', 'la', "l'", 'les'],
        el: ['ο', 'η', 'το', 'οι', 'τα'],
        ru: ['он', 'она', 'оно']
    };
    const choices = articlesMap[lang] || [];
    const target = wordObj.article || wordObj.gender;

    choices.forEach(article => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = article;
        btn.onclick = () => {
            const possible = target.split(' / ').map(a => a.trim().toLowerCase());
            if (possible.includes(article.toLowerCase())) {
                btn.classList.add('correct');
                showFeedback(true);
            } else {
                btn.classList.add('incorrect');
                showFeedback(false);
            }
        };
        grid.appendChild(btn);
    });
}

function renderScramble() {
    const wordObj = currentLesson.currentWord;
    const lettersDiv = document.getElementById('scramble-letters');
    const assemblyDiv = document.getElementById('word-assembly');
    lettersDiv.innerHTML = '';
    assemblyDiv.textContent = '';
    currentLesson.scrambleAnswer = '';
    const word = (wordObj.answer || wordObj.word).replace(/\s/g, '');
    const letters = word.split('').sort(() => Math.random() - 0.5);
    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = letter;
        btn.onclick = () => {
            currentLesson.scrambleAnswer += letter;
            assemblyDiv.textContent = currentLesson.scrambleAnswer;
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (currentLesson.scrambleAnswer.length === word.length) {
                if (currentLesson.scrambleAnswer.toLowerCase() === word.toLowerCase()) showFeedback(true);
                else { showFeedback(false); setTimeout(renderScramble, 1000); }
            }
        };
        lettersDiv.appendChild(btn);
    });
}

function renderWordScramble() {
    const wordObj = currentLesson.currentWord;
    const lettersDiv = document.getElementById('scramble-letters');
    const assemblyDiv = document.getElementById('word-assembly');
    lettersDiv.innerHTML = '';
    assemblyDiv.textContent = '';
    currentLesson.scrambleAnswerWords = [];
    const sentence = wordObj.word;
    const words = sentence.split(' ').sort(() => Math.random() - 0.5);
    words.forEach(w => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = w;
        btn.style.width = 'auto';
        btn.onclick = () => {
            currentLesson.scrambleAnswerWords.push(w);
            assemblyDiv.textContent = currentLesson.scrambleAnswerWords.join(' ');
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (currentLesson.scrambleAnswerWords.length === sentence.split(' ').length) {
                const target = sentence.toLowerCase().replace(/[.!?]/g, '').trim();
                const current = currentLesson.scrambleAnswerWords.join(' ').toLowerCase().replace(/[.!?]/g, '').trim();
                if (current === target) showFeedback(true);
                else { showFeedback(false); setTimeout(renderWordScramble, 1000); }
            }
        };
        lettersDiv.appendChild(btn);
    });
}

function checkTypedAnswer() {
    const user = document.getElementById('opposite-answer').value.trim().toLowerCase();
    const wordObj = currentLesson.currentWord;
    const correct = (wordObj.type === 'cloze' || wordObj.type === 'number_plural') ? wordObj.answer : wordObj.opposite;
    const possible = correct.split(' / ').map(a => a.trim().toLowerCase());
    if (possible.includes(user) || user === correct.toLowerCase()) showFeedback(true);
    else showFeedback(false);
}

function checkTrueFalseAnswer(user) {
    if (user === currentLesson.tfCorrectAnswer) showFeedback(true);
    else showFeedback(false);
}

function showFeedback(isCorrect) {
    const msg = document.getElementById('feedback-message');
    msg.className = 'feedback-text ' + (isCorrect ? 'correct' : 'incorrect');
    msg.setAttribute('data-translate-key', isCorrect ? 'correct' : 'incorrect');
    if (typeof setLanguage === 'function') setLanguage(currentLesson.language);

    if (isCorrect) {
        currentLesson.score += 10;
        document.getElementById('score-count').textContent = currentLesson.score;
        updateTotalScore(10);
        document.getElementById('next-btn').style.display = 'block';
        currentLesson.currentIndex++;
    }
}

function loadTotalScore() {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    return total;
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);
    return total;
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
}

function updateProgress() {
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    const total = currentLesson.words.length;
    const current = currentLesson.currentIndex;
    const percentage = (current / total) * 100;
    if (fill) fill.style.width = percentage + '%';
    if (text) {
        const lang = currentLesson.language;
        const wordLabel = (translations[lang] && translations[lang]['progress_word']) ? translations[lang]['progress_word'] : 'Word';
        const ofLabel = (translations[lang] && translations[lang]['progress_of']) ? translations[lang]['progress_of'] : 'of';
        text.textContent = `${wordLabel} ${current + 1} ${ofLabel} ${total}`;
    }
}

function showSummary() {
    updateStreak();
    document.getElementById('practice-section').style.display = 'none';
    document.getElementById('summary-modal').style.display = 'flex';
    document.getElementById('final-score').textContent = currentLesson.score;
}

function speakWord() {
    const wordObj = currentLesson.currentWord;
    if (!wordObj) return;
    const msg = new SpeechSynthesisUtterance();
    msg.text = (wordObj.type === 'gender_articles') ? wordObj.baseWord : (wordObj.word || wordObj.baseWord);
    const langMap = { en: 'en-US', fr: 'fr-FR', it: 'it-IT', ru: 'ru-RU', el: 'el-GR' };
    msg.lang = langMap[currentLesson.language] || 'en-US';
    window.speechSynthesis.speak(msg);
}

function showHint() {
    const wordObj = currentLesson.currentWord;
    if (!wordObj) return;
    let target = wordObj.answer || wordObj.word || wordObj.article || wordObj.gender || wordObj.opposite;
    const msg = document.getElementById('feedback-message');
    msg.className = 'feedback-text hint';
    msg.textContent = "Hint: " + target.charAt(0).toUpperCase() + "...";
}

function clearScramble() {
    if (currentLesson.currentWord.type === 'word_scramble') renderWordScramble();
    else renderScramble();
}
