/**
 * js/practice/exercise-core.js
 * Shared logic for different types of exercises (matching, multiple choice, etc.).
 */
/**
 * Core Exercise Rendering Logic
 * Shared between practice.js and lesson.js
 */

window.loadTotalScore = function() {
    return parseInt(localStorage.getItem('cosy_total_points') || 0);
};

window.updateTotalScore = function(points) {
    let total = window.loadTotalScore();
    total += points;
    localStorage.setItem('cosy_total_points', total);

    const totalScoreEl = document.getElementById('total-score-count');
    const setupTotalScoreEl = document.getElementById('setup-total-score');
    const totalPtsEl = document.getElementById('total-pts');
    const navPtsEl = document.getElementById('nav-pts');

    if (totalScoreEl) totalScoreEl.textContent = total;
    if (setupTotalScoreEl) setupTotalScoreEl.textContent = total;
    if (totalPtsEl) totalPtsEl.textContent = total.toLocaleString();
    if (navPtsEl) navPtsEl.textContent = total.toLocaleString();

    return total;
};

window.loadStreak = function() {
    const streak = parseInt(localStorage.getItem('practice_streak') || 0);
    const streakCountEl = document.getElementById('streak-count');
    const streakValEl = document.getElementById('streak-val');
    const navStreakEl = document.getElementById('nav-streak');

    if (streakCountEl) streakCountEl.textContent = streak;
    if (streakValEl) streakValEl.textContent = streak;
    if (navStreakEl) navStreakEl.textContent = streak;

    const arc = document.getElementById('streak-arc');
    if (arc) {
        const pct = Math.min(streak / 30, 1);
        const offset = 226 - (226 * pct);
        arc.style.strokeDashoffset = offset;
    }
    return streak;
};

window.updateStreak = function() {
    const lastDate = localStorage.getItem('last_practice_date');
    const today = new Date().toDateString();
    if (lastDate === today) return;

    let streak = parseInt(localStorage.getItem('practice_streak') || 0);
    if (lastDate) {
        const lastPractice = new Date(lastDate);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastPractice);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) streak++; else streak = 1;
    } else streak = 1;

    localStorage.setItem('practice_streak', streak);
    localStorage.setItem('last_practice_date', today);
    window.loadStreak();
};

window.updateProgress = function() {
    const ctx = window.currentPractice || window.currentLesson;
    if (!ctx || !ctx.words) return;
    const fill = document.getElementById('progress-fill');
    const total = ctx.words.length;
    const current = ctx.currentIndex;

    const percentage = (total > 0) ? (current / total) * 100 : 0;
    if (fill) fill.style.width = percentage + '%';

    const qNumEl = document.getElementById('q-num');
    if (qNumEl) qNumEl.textContent = Math.min(current + 1, total);
};

window.showSummary = function() {
    const ctx = window.currentPractice || window.currentLesson;
    if (!ctx) return;
    window.updateStreak();

    const summaryModal = document.getElementById('summary-modal');
    const practiceSection = document.getElementById('practice-section');

    if (summaryModal) {
        summaryModal.classList.remove('hidden');
        summaryModal.classList.add('active');
        summaryModal.style.display = 'block';
    }
    if (practiceSection) {
        practiceSection.classList.remove('active');
        practiceSection.classList.add('hidden');
        practiceSection.style.display = 'none';
    }

    const fs = document.getElementById('final-score');
    if (fs) fs.textContent = ctx.score;
    const fts = document.getElementById('final-total-score');
    if (fts) fts.textContent = window.loadTotalScore();
    const fst = document.getElementById('final-streak');
    if (fst) fst.textContent = localStorage.getItem('practice_streak') || '0';
};

window.resetExerciseUI = function() {
    ['opposite-input-container', 'choices-grid', 'tf-buttons-container', 'scramble-container', 'conversation-container'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.classList.add('hidden'); el.style.display = 'none'; }
    });
    const feedback = document.getElementById('feedback-message');
    if (feedback) {
        feedback.textContent = '';
        feedback.className = 'pe-feedback';
        feedback.style.display = 'none';
    }
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) { nextBtn.classList.add('hidden'); nextBtn.style.display = 'none'; }
};

window.showFeedback = function(isCorrect) {
    const ctx = window.currentPractice || window.currentLesson;
    const feedbackMsg = document.getElementById('feedback-message');
    if (feedbackMsg) {
        feedbackMsg.textContent = isCorrect ? 'Correct! ✨' : 'Try again ❌';
        feedbackMsg.className = 'pe-feedback show ' + (isCorrect ? 'ok' : 'bad');
        feedbackMsg.style.display = 'block';
    }
    if (isCorrect) {
        ctx.score += 10;
        ctx.isCorrect = true;
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) { nextBtn.classList.remove('hidden'); nextBtn.style.display = 'block'; }
        window.updateTotalScore(10);

        // Vocab Notebook integration
        if (ctx.currentWord && (ctx.currentWord.word || ctx.currentWord.text)) {
            const word = ctx.currentWord.word || ctx.currentWord.text;
            const lang = (ctx.language || 'en').toLowerCase();
            let notebook = JSON.parse(localStorage.getItem(`cosy_notebook_${lang}`) || '[]');
            if (!notebook.includes(word)) {
                notebook.push(word);
                localStorage.setItem(`cosy_notebook_${lang}`, JSON.stringify(notebook));
            }

            // New Live COSY Engine integration
            if (window.COSY?.addMistake && !isCorrect) {
                // We actually only add mistakes here if it's NOT correct,
                // but the block is if(isCorrect). Let's fix that below.
            }
        }
    } else {
        // Record mistake in new engine if available
        if (window.COSY?.addMistake && ctx.currentWord && ctx.lessonId) {
            window.COSY.addMistake(ctx.lessonId, ctx.currentWord);
        }
    }
};

window.showNextWord = function() {
    const ctx = window.currentPractice || window.currentLesson;
    if (!ctx || !ctx.words) return;

    if (ctx.currentIndex >= ctx.words.length) {
        window.showSummary();
        return;
    }

    ctx.currentWord = ctx.words[ctx.currentIndex];
    ctx.isCorrect = false;

    window.resetExerciseUI();
    window.updateProgress();

    const wordObj = ctx.currentWord;
    const wordDisplay = document.getElementById('word-display');
    const emojiDisplay = document.getElementById('emoji-display');
    const instruction = document.getElementById('task-instruction');

    if (wordDisplay) wordDisplay.textContent = wordObj.word || wordObj.text || "???";
    if (emojiDisplay) emojiDisplay.textContent = wordObj.emoji || "💡";
    if (instruction) instruction.textContent = (wordObj.type || 'mc').replace('type-', '').toUpperCase();

    // Unified Task Rendering
    if (wordObj.type === 'type-mc' || !wordObj.type) {
        renderMC(wordObj);
    } else if (wordObj.type === 'type-tf') {
        renderTF(wordObj);
    } else if (wordObj.type === 'type-cl') {
        renderCloze(wordObj);
    } else if (wordObj.type === 'type-cv') {
        renderConversation(wordObj);
    } else {
        renderMC(wordObj); // Default
    }
};

function renderMultipleChoice(wordObj) {
    const grid = document.getElementById('choices-grid');
    if (!grid) return;
    grid.classList.remove('hidden');
    grid.style.display = 'grid';
    grid.innerHTML = '';
    const correct = wordObj.word || wordObj.answer || "Correct";
    const choices = [correct, "Alternative 1", "Alternative 2"].sort(() => Math.random() - 0.5);
    choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'mc-opt';
        btn.textContent = c;
        btn.onclick = () => {
            if (c === correct) { btn.classList.add('correct'); window.showFeedback(true); }
            else { btn.classList.add('wrong'); window.showFeedback(false); }
        };
        grid.appendChild(btn);
    });
}

function renderTF(wordObj) {
    const cont = document.getElementById('tf-buttons-container');
    if (!cont) return;
    cont.classList.remove('hidden');
    cont.style.display = 'flex';
    cont.innerHTML = '<button class="tf-btn" id="true-btn">✅ True</button><button class="tf-btn" id="false-btn">❌ False</button>';
    const isTrue = Math.random() > 0.5;
    cont.querySelector('#true-btn').onclick = () => window.showFeedback(isTrue);
    cont.querySelector('#false-btn').onclick = () => window.showFeedback(!isTrue);
}

function renderCloze(wordObj) {
    const cont = document.getElementById('opposite-input-container');
    if (!cont) return;
    cont.classList.remove('hidden');
    cont.style.display = 'block';
    const input = document.getElementById('opposite-answer');
    if (input) {
        input.value = '';
        input.focus();
        const check = document.getElementById('check-opposite-btn');
        if (check) {
            check.classList.remove('hidden');
            check.style.display = 'block';
            check.onclick = () => window.showFeedback(input.value.toLowerCase() === (wordObj.word || wordObj.answer || "").toLowerCase());
        }
    }
}

function renderConversation(wordObj) {
    const cont = document.getElementById('conversation-container');
    if (!cont) return;
    cont.classList.remove('hidden');
    cont.style.display = 'block';
    const area = document.getElementById('conversation-response');
    if (area) {
        area.value = '';
        const finish = document.getElementById('finish-conversation-btn');
        if (finish) {
            finish.onclick = () => window.showFeedback(true);
        }
    }
}
