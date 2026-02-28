
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
    loadTotalScore();

    // Deep Linking Support
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode'); // 'wheel' or 'linear'
    const langParam = urlParams.get('lang'); // 'en', 'fr', 'it', 'ru', 'el'
    const lessonParam = urlParams.get('lesson'); // e.g. '1', '1-3'
    const catParam = urlParams.get('cat'); // 'vocab', 'grammar', 'speaking'
    const embedParam = urlParams.get('embed'); // 'true'

    if (embedParam === 'true') {
        document.body.classList.add('embedded-mode');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';
        // Adjust main padding if needed
        const main = document.querySelector('main');
        if (main) main.style.paddingTop = '20px';
    }

    if (langParam) {
        const langCard = document.querySelector(`.lang-selection-card[data-value="${langParam}"]`);
        if (langCard) {
            document.querySelectorAll('.lang-selection-card').forEach(c => c.classList.remove('active'));
            langCard.classList.add('active');
            currentPractice.language = langParam;
        }
    }

    if (lessonParam) {
        const lessonInput = document.getElementById('lesson-range');
        if (lessonInput) lessonInput.value = lessonParam;
    }

    if (catParam) {
        const catRadio = document.getElementById(`cat-${catParam}`);
        if (catRadio) {
            catRadio.checked = true;
            // Update UI/Tasks based on category
            const container = document.getElementById('practice-container');
            container.classList.remove('cat-vocab', 'cat-grammar', 'cat-speaking');
            container.classList.add(`cat-${catParam}`);
        }
    }

    if (modeParam === 'wheel') {
        // Auto-select Speaking category for wheel if not specified
        if (!catParam) {
            const speakingRadio = document.getElementById('cat-speaking');
            if (speakingRadio) {
                speakingRadio.checked = true;
                const container = document.getElementById('practice-container');
                container.classList.remove('cat-vocab', 'cat-grammar', 'cat-speaking');
                container.classList.add('cat-speaking');
            }
        }
        // Start after a small delay to ensure DOM and translations are ready
        setTimeout(() => startPractice(true), 500);
    } else if (modeParam === 'linear' || (!modeParam && langParam && lessonParam)) {
        setTimeout(() => startPractice(false), 500);
    }

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
    const shareLinkBtn = document.getElementById('share-link-btn');

    if (shareLinkBtn) {
        shareLinkBtn.addEventListener('click', () => {
            const lang = currentPractice.language;
            const lessons = document.getElementById('lesson-range').value;
            const category = document.querySelector('input[name="practice-cat"]:checked').id.replace('cat-', '');
            const baseUrl = window.location.href.split('?')[0];
            const shareUrl = `${baseUrl}?lang=${lang}&lesson=${lessons}&cat=${category}&embed=true`;

            navigator.clipboard.writeText(shareUrl).then(() => {
                const originalText = shareLinkBtn.innerHTML;
                const lang = currentPractice.language;
                const copiedText = (translations[lang] && translations[lang]['copied']) ? translations[lang]['copied'] : "Copied! ✅";
                shareLinkBtn.innerHTML = copiedText;
                setTimeout(() => shareLinkBtn.innerHTML = originalText, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert("Shareable Link: " + shareUrl);
            });
        });
    }

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
            updateTotalScore(20);
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

        // Add right-click to copy wheel share link
        wheelModeBtn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const lang = currentPractice.language;
            const lessons = document.getElementById('lesson-range').value;
            const baseUrl = window.location.href.split('?')[0];
            const shareUrl = `${baseUrl}?mode=wheel&lang=${lang}&lesson=${lessons}&embed=true`;

            navigator.clipboard.writeText(shareUrl).then(() => {
                alert("Wheel link copied to clipboard! 🎡✅");
            });
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
            const newLang = card.getAttribute('data-value');
            currentPractice.language = newLang;
            if (typeof setLanguage === 'function') {
                setLanguage(newLang);
                const switcher = document.getElementById('language-switcher');
                if (switcher) switcher.value = newLang;
            }
        });
    });

    const lessonRangeInput = document.getElementById('lesson-range');
    if (lessonRangeInput) {
        lessonRangeInput.addEventListener('input', validateFeaturesByLesson);
        // Run once on load
        validateFeaturesByLesson();
    }

    const catRadios = document.querySelectorAll('input[name="practice-cat"]');
    const container = document.getElementById('practice-container');

    function updateCategoryUI() {
        const selected = document.querySelector('input[name="practice-cat"]:checked');
        if (!selected) return;

        container.classList.remove('cat-vocab', 'cat-grammar', 'cat-speaking');

        const taskCheckboxes = document.querySelectorAll('.advanced-options input[type="checkbox"]');
        if (selected.id === 'cat-speaking') {
            container.classList.add('cat-speaking');
            taskCheckboxes.forEach(cb => cb.checked = (cb.id === 'type-cv'));
        } else if (selected.id === 'cat-grammar') {
            container.classList.add('cat-grammar');
            taskCheckboxes.forEach(cb => cb.checked = (cb.id === 'type-ga' || cb.id === 'type-ws' || cb.id === 'type-cl'));
        } else {
            container.classList.add('cat-vocab');
            taskCheckboxes.forEach(cb => cb.checked = (cb.id !== 'type-ga' && cb.id !== 'type-cv' && cb.id !== 'type-ws'));
        }
    }

    catRadios.forEach(radio => {
        radio.addEventListener('change', updateCategoryUI);
    });
    updateCategoryUI(); // Initial call

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

function loadTotalScore() {
    const total = parseInt(localStorage.getItem('cosy_total_points') || 0);
    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    if (totalScoreEl) {
        totalScoreEl.textContent = total;
    }
    if (setupTotalScoreEl) {
        setupTotalScoreEl.textContent = total;
    }
    return total;
}

function updateTotalScore(points) {
    let total = loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);
    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    if (totalScoreEl) {
        totalScoreEl.textContent = total;
    }
    if (setupTotalScoreEl) {
        setupTotalScoreEl.textContent = total;
    }
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

function validateFeaturesByLesson() {
    const lessonInput = document.getElementById('lesson-range');
    const catSpeaking = document.getElementById('cat-speaking');
    const wheelModeBtn = document.getElementById('wheel-mode-btn');
    const lessonHint = document.getElementById('lesson-hint');

    if (!lessonInput) return;

    const lessons = parseLessonRange(lessonInput.value);
    const hasLesson3Plus = lessons.some(l => l >= 3);

    if (!hasLesson3Plus) {
        if (catSpeaking) {
            catSpeaking.disabled = true;
            catSpeaking.parentElement.style.opacity = '0.5';
            if (catSpeaking.checked) {
                document.getElementById('cat-vocab').checked = true;
                // trigger change manually
                const event = new Event('change');
                document.getElementById('cat-vocab').dispatchEvent(event);
            }
        }
        if (wheelModeBtn) {
            wheelModeBtn.disabled = true;
            wheelModeBtn.style.opacity = '0.5';
            wheelModeBtn.style.cursor = 'not-allowed';
        }
        if (lessonHint) lessonHint.style.display = 'block';
    } else {
        if (catSpeaking) {
            catSpeaking.disabled = false;
            catSpeaking.parentElement.style.opacity = '1';
        }
        if (wheelModeBtn) {
            wheelModeBtn.disabled = false;
            wheelModeBtn.style.opacity = '1';
            wheelModeBtn.style.cursor = 'pointer';
        }
        if (lessonHint) lessonHint.style.display = 'none';
    }
}

function parseLessonRange(val) {
    let lessons = [];
    const range = val.trim();
    if (range.includes('-')) {
        const parts = range.split('-');
        const start = parseInt(parts[0]);
        const end = parseInt(parts[1]);
        if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
                lessons.push(i);
            }
        }
    } else {
        const l = parseInt(range);
        if (!isNaN(l)) {
            lessons.push(l);
        }
    }
    return lessons;
}

function startPractice(isWheelMode = false) {
    const activeLangCard = document.querySelector('.lang-selection-card.active');
    const lessonInput = document.getElementById('lesson-range');

    if (activeLangCard) {
        currentPractice.language = activeLangCard.getAttribute('data-value');
    }

    const lessons = parseLessonRange(lessonInput.value);

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

    let enabledTypes = [];
    if (document.getElementById('type-mc').checked) enabledTypes.push('multiple_choice');
    if (document.getElementById('type-ls').checked) enabledTypes.push('listen_select');
    if (document.getElementById('type-sc').checked) enabledTypes.push('scramble');
    if (document.getElementById('type-ws').checked) enabledTypes.push('word_scramble');
    if (document.getElementById('type-op').checked) enabledTypes.push('opposite');
    if (document.getElementById('type-cl').checked) enabledTypes.push('cloze');
    if (document.getElementById('type-tf').checked) enabledTypes.push('true_false');
    if (document.getElementById('type-ga').checked) enabledTypes.push('gender_articles');
    if (document.getElementById('type-cv').checked) enabledTypes.push('conversation');

    let enabledCategories = [];
    const catVocab = document.getElementById('cat-vocab').checked;
    const catGrammar = document.getElementById('cat-grammar').checked;
    const catSpeaking = document.getElementById('cat-speaking').checked;

    // Strict Category Isolation: only ONE category at a time now due to radio buttons,
    // but we enforce it here in the pool generation logic.
    if (catVocab) enabledCategories = ['vocabulary'];
    else if (catGrammar) enabledCategories = ['grammar'];
    else if (catSpeaking) enabledCategories = ['conversation'];

    // Override for Wheel Mode: strictly speaking (conversation)
    if (isWheelMode) {
        // Ensure we only have conversation items for the wheel
        enabledCategories = ['conversation'];
        enabledTypes = ['conversation'];

        // Visual consistency: make sure Speaking radio is checked
        const catSpeaking = document.getElementById('cat-speaking');
        if (catSpeaking) catSpeaking.checked = true;
    }

    if (enabledTypes.length === 0) {
        alert("Please select at least one task type!");
        return;
    }

    if (enabledCategories.length === 0) {
        alert("Please select at least one category!");
        return;
    }

    lessons.forEach(l => {
        if (langData[l]) {
            const filteredWords = langData[l].words.filter(w => {
                // Determine if this word belongs to any of the ENABLED categories
                const categoryMatch = enabledCategories.includes(w.category);
                if (!categoryMatch) return false;

                // For "speaking only" in wheel mode, we strictly want conversation items
                if (isWheelMode && w.category !== 'conversation') return false;

                // If user selected ONLY vocabulary, don't show items that are purely grammar (and vice versa)
                // This is already handled by enabledCategories.includes(w.category)

                // Ensure at least one enabled task type is possible for this word
                return enabledTypes.some(t => {
                    if (t === 'opposite') return !!w.opposite;
                    if (t === 'cloze') return !!w.clozeText;
                    if (t === 'gender_articles') return !!(w.article || w.gender);
                    if (t === 'conversation') return w.category === 'conversation' || w.type === 'conversation';
                    if (t === 'word_scramble') return w.word.includes(' ');
                    if (t === 'scramble') return !w.word.includes(' ');
                    return true;
                });
            });

            const lessonWords = filteredWords.map(w => {
                let wordCopy = { ...w };
                let possibleTypes = [...enabledTypes];

                if (wordCopy.category === 'conversation' || wordCopy.type === 'conversation') {
                    return {
                        ...wordCopy,
                        type: 'conversation',
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

                // Scramble vs Word Scramble (sentence builder)
                const isSentence = wordCopy.word.includes(' ');
                if (isSentence) {
                    possibleTypes = possibleTypes.filter(t => t !== 'scramble');
                } else {
                    possibleTypes = possibleTypes.filter(t => t !== 'word_scramble');
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

    // Show Example
    const exampleEl = document.getElementById('task-example');
    if (exampleEl) {
        const lang = currentPractice.language;
        const typeKey = wordObj.type === 'word_scramble' ? 'ws' :
                        wordObj.type === 'multiple_choice' ? 'mc' :
                        wordObj.type === 'listen_select' ? 'ls' :
                        wordObj.type === 'scramble' ? 'sc' :
                        wordObj.type === 'opposite' ? 'op' :
                        wordObj.type === 'cloze' ? 'cl' :
                        wordObj.type === 'true_false' ? 'tf' :
                        wordObj.type === 'gender_articles' ? 'ga' : '';
        const exampleKey = `example_${typeKey}`;
        if (translations[lang] && translations[lang][exampleKey]) {
            exampleEl.textContent = translations[lang][exampleKey];
            exampleEl.style.display = 'inline-block';
        } else {
            exampleEl.style.display = 'none';
        }
    }

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
        let text = isListen ? '???' : (wordObj.clozeText || wordObj.word);

        // Fix redundancy: hide target word for MC vocab if emoji is present
        if (!isListen && wordObj.category === 'vocabulary' && wordObj.emoji) {
            text = "???";
        }

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
    } else if (wordObj.type === 'scramble' || wordObj.type === 'word_scramble') {
        document.getElementById('word-display').textContent = '???';
        document.getElementById('emoji-display').textContent = wordObj.emoji || '💡';
        document.getElementById('task-instruction').setAttribute('data-translate-key', wordObj.type === 'word_scramble' ? 'task_word_scramble' : 'task_scramble');
        document.getElementById('scramble-container').style.display = 'block';
        if (wordObj.type === 'word_scramble') {
            renderWordScramble();
        } else {
            renderScramble();
        }
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

function renderWordScramble() {
    const wordObj = currentPractice.currentWord;
    const scrambleLetters = document.getElementById('scramble-letters');
    const wordAssembly = document.getElementById('word-assembly');

    scrambleLetters.innerHTML = '';
    wordAssembly.textContent = '';
    currentPractice.scrambleAnswerWords = [];

    // For Sentence Builder, we always use the full sentence
    const sentence = wordObj.word;
    const words = sentence.split(' ').sort(() => Math.random() - 0.5);

    words.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = word;
        btn.style.width = 'auto';
        btn.style.padding = '0.5rem 1rem';
        btn.onclick = () => {
            currentPractice.scrambleAnswerWords.push(word);
            wordAssembly.textContent = currentPractice.scrambleAnswerWords.join(' ');
            btn.disabled = true;
            btn.style.opacity = '0.3';
            if (currentPractice.scrambleAnswerWords.length === sentence.split(' ').length) {
                checkWordScrambleAnswer();
            }
        };
        scrambleLetters.appendChild(btn);
    });
}

function clearScramble() {
    if (currentPractice.currentWord.type === 'word_scramble') {
        renderWordScramble();
    } else {
        renderScramble();
    }
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

function checkWordScrambleAnswer() {
    const wordObj = currentPractice.currentWord;
    const target = wordObj.word.toLowerCase().replace(/[.!?]/g, '').trim();
    const current = currentPractice.scrambleAnswerWords.join(' ').toLowerCase().replace(/[.!?]/g, '').trim();

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
    const finalTotalScoreEl = document.getElementById('final-total-score');
    const finalStreakEl = document.getElementById('final-streak');
    const streakUnitEl = document.getElementById('streak-unit');
    const summaryModal = document.getElementById('summary-modal');
    const practiceSection = document.getElementById('practice-section');

    if (finalScoreEl) finalScoreEl.textContent = currentPractice.score;
    if (finalTotalScoreEl) finalTotalScoreEl.textContent = loadTotalScore();

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
        updateTotalScore(10);

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
