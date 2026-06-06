/**
 * practice/_engine/core.js
 * Consolidated session engine for language practice.
 * Handles state, scoring, streaks, and session flow.
 */

(function() {
    'use strict';

    const KEY_STATE = 'cosy_practice';
    const KEY_TOTAL_PTS = 'cosy_total_points';
    const KEY_STREAK = 'practice_streak';
    const KEY_LAST_DATE = 'last_practice_date';

    function loadState() {
        try {
            const s = JSON.parse(localStorage.getItem(KEY_STATE) || '{}');
            s.totalPts = parseInt(localStorage.getItem(KEY_TOTAL_PTS) || '0');
            s.streak = parseInt(localStorage.getItem(KEY_STREAK) || '0');
            return s;
        } catch { return { totalPts: 0, streak: 0 }; }
    }

    function saveState(s) {
        localStorage.setItem(KEY_STATE, JSON.stringify(s));
        localStorage.setItem(KEY_TOTAL_PTS, s.totalPts);
        localStorage.setItem(KEY_STREAK, s.streak);
    }

    const engine = {
        state: loadState(),
        session: null,

        init() {
            const s = this.state;
            if (!s.lastDate) s.lastDate = '';
            if (!s.todayCorrect) s.todayCorrect = 0;
            if (!s.sessions) s.sessions = 0;
            if (!s.mistakes) s.mistakes = [];
            if (!s.history) s.history = [];

            const todayStr = new Date().toISOString().split('T')[0];
            if (s.lastDate !== todayStr) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yStr = yesterday.toISOString().split('T')[0];
                if (s.lastDate !== yStr && s.lastDate !== '') {
                    s.streak = 0;
                }
                s.todayCorrect = 0;
            }
            this.save();
            this.updateUI();
            this.populateRecentAndMistakes();
        },

        save() {
            saveState(this.state);
        },

        updateUI() {
            const s = this.state;
            const ptsStr = s.totalPts.toLocaleString();

            ['total-pts', 'nav-pts', 'setup-total-score'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = ptsStr;
            });

            ['streak-val', 'nav-streak', 'streak-count'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = s.streak;
            });

            if (document.getElementById('total-correct')) document.getElementById('total-correct').textContent = s.todayCorrect;
            if (document.getElementById('total-sessions')) document.getElementById('total-sessions').textContent = s.sessions;

            const arc = document.getElementById('streak-arc');
            if (arc) {
                const pct = Math.min(s.streak / 30, 1);
                arc.style.strokeDashoffset = 226 - (226 * pct);
            }
        },

        populateRecentAndMistakes() {
            const recentList = document.getElementById('recent-list');
            const mistakeList = document.getElementById('mistake-list');
            const s = this.state;

            if (recentList) {
                if (!s.history || s.history.length === 0) recentList.innerHTML = '<div class="info-card-empty">No sessions yet — start practising!</div>';
                else recentList.innerHTML = s.history.map(session => `
                    <div class="recent-item">
                        <div class="ri-dot" style="background:var(--teal);"></div>
                        <div class="ri-name">${session.lang.toUpperCase()} · ${session.cat}</div>
                        <div class="ri-pts">+${session.pts} ✨</div>
                    </div>`).join('');
            }
            if (mistakeList) {
                if (!s.mistakes || s.mistakes.length === 0) mistakeList.innerHTML = '<div class="info-card-empty">No mistakes saved yet — well done!</div>';
                else mistakeList.innerHTML = s.mistakes.slice(-5).reverse().map(m => `
                    <div class="mistake-item">
                        <div class="mi-word">${m.word}</div>
                        <div class="mi-retry" onclick="window.cosyPractice.quickStart('${m.lang}','vocab','all','all')">retry</div>
                    </div>`).join('');
            }
        },

        awardPoints(pts) {
            if (!this.session) return;
            this.session.sessionPoints += pts;
            this.session.correctCount++;

            const scoreCountEl = document.getElementById('score-count');
            if (scoreCountEl) scoreCountEl.textContent = this.session.sessionPoints;

            const q = this.session.sessionQueue[this.session.currentIndex];
            if (q && q.item && window.COSY?.addToDict) {
                window.COSY.addToDict(q.item);
            }
        },

        updateStreak() {
            const todayStr = new Date().toISOString().split('T')[0];
            const lastDateStr = this.state.lastDate;

            if (lastDateStr === todayStr) return;

            if (lastDateStr) {
                const lastPractice = new Date(lastDateStr);
                const todayDate = new Date(todayStr);
                const diffTime = Math.abs(todayDate - lastPractice);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    this.state.streak++;
                } else if (diffDays > 1) {
                    this.state.streak = 1;
                }
                // If diffDays is 0 (already handled by lastDateStr === todayStr check)
            } else {
                this.state.streak = 1;
            }

            this.state.lastDate = todayStr;
            this.save();
            this.updateUI();
        },

        recordMistake(q) {
            if (!q || !q.item) return;
            const s = this.state;
            const exists = s.mistakes.some(m => m.word === q.item.word && m.lang === (this.session?.lang || 'multi'));
            if (!exists) {
                s.mistakes.push({
                    ...q.item,
                    lang: this.session?.lang || 'multi',
                    cat: this.session?.cat || 'vocab',
                    added: Date.now()
                });
                if (s.mistakes.length > 50) s.mistakes.shift();
                this.save();
                this.populateRecentAndMistakes();
            }
        },

        updateProgress() {
            if (!this.session) return;
            const fill = document.getElementById('progress-fill');
            const total = this.session.sessionQueue.length;
            const current = this.session.currentIndex;

            const percentage = (total > 0) ? (current / total) * 100 : 0;
            if (fill) fill.style.width = percentage + '%';

            const label = document.querySelector('.pe-session-label');
            if (label) label.textContent = `Word ${current + 1} of ${total}`;
        },

        startSession(lang, cat, level, theme, isChallenge, qs) {
            if (!qs || qs.length === 0) {
                const msg = "No exercises found for this combination. Try 'All Themes' or a different level.";
                if (window.COSY && window.COSY.showToast) window.COSY.showToast(msg, true);
                else alert(msg);
                return;
            }

            const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

            this.session = {
                lang, cat, level, theme, isChallenge,
                sessionQueue: shuffle(qs),
                currentIndex: 0,
                sessionPoints: 0,
                correctCount: 0,
                sessionErrors: []
            };

            document.getElementById('pe-session-title').textContent = `${lang.toUpperCase()} · ${cat}${level !== 'all' ? ' · ' + level : ''}`;
            document.getElementById('score-count').textContent = '0';
            document.getElementById('streak-count').textContent = this.state.streak;

            document.getElementById('practice-section').classList.remove('hidden');
            document.getElementById('practice-section').classList.add('active');

            const summaryModal = document.getElementById('summary-modal');
            if (summaryModal) summaryModal.style.display = 'none';

            ['setup-section', 'quickstart-section', 'daily-challenge', 'stats-section'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.add('hidden');
                    el.style.display = 'none';
                }
            });

            this.loadEntry(this.session.sessionQueue[this.session.currentIndex]);
        },

        loadEntry(q) {
            if (!this.session || !q) return;
            this.updateProgress();

            const form = q.form || q.type;
            const nextBtn = document.getElementById('pe-next');
            if (nextBtn) {
                nextBtn.style.display = (form === 'type' || form === 'sc' || form === 'op' || form === 'np') ? 'inline-block' : 'none';
                nextBtn.textContent = 'Next Word';
            }

            const fb = document.getElementById('pe-fb');
            if (fb) {
                fb.className = 'pe-feedback';
                fb.innerHTML = '';
            }

            const hintBtn = document.getElementById('pe-hint');
            if (hintBtn) hintBtn.disabled = false;

            const container = document.getElementById('pe-body-content');
            if (container && window.cosyRenderers) {
                container.innerHTML = window.cosyRenderers.renderQuestion(q, this.session, this.session.lang);
                const typeIn = document.getElementById('type-in');
                if (typeIn) {
                    typeIn.value = '';
                    setTimeout(() => typeIn.focus(), 50);
                }
            }
        },

        nextQuestion() {
            if (!this.session) return;

            const q = this.session.sessionQueue[this.session.currentIndex];

            // If we are somehow already past the end, just end it.
            if (!q) {
                this.showSummary();
                return;
            }

            const form = q.form || q.type;
            const fb = document.getElementById('pe-fb');
            const isAnswered = fb && fb.classList.contains('show');

            // 1. Mark the current answer correct or incorrect (if not already done)
            if (!isAnswered && (form === 'type' || form === 'sc' || form === 'op' || form === 'np')) {
                if (form === 'sc') window.checkScramble();
                else window.checkType();
                return;
            }

            // 2. Increment currentIndex
            this.session.currentIndex++;

            // 3. If currentIndex >= sessionQueue.length → call showSummary()
            if (this.session.currentIndex >= this.session.sessionQueue.length) {
                this.showSummary();
                return;
            }

            // 4. Otherwise → call loadEntry
            const nextBtn = document.getElementById('pe-next');
            if (nextBtn) nextBtn.style.display = 'none';
            this.loadEntry(this.session.sessionQueue[this.session.currentIndex]);
        },

        showSummary() {
            const s = this.state;
            const sess = this.session;
            if (!sess) return;

            // Hide the active practice UI
            const practiceSection = document.getElementById('practice-section');
            if (practiceSection) {
                practiceSection.classList.add('hidden');
                practiceSection.classList.remove('active');
            }

            const progressFill = document.getElementById('progress-fill');
            if (progressFill) progressFill.style.width = '100%';

            const peBody = document.getElementById('pe-body-content');
            if (peBody) peBody.style.display = 'none';

            const peControls = document.querySelector('.pe-controls');
            if (peControls) peControls.style.display = 'none';

            // Show #session-summary (within #summary-modal)
            const summaryModal = document.getElementById('summary-modal');
            if (summaryModal) summaryModal.style.display = 'block';

            // FIX 5 - Update persistent stats at end of session (prevent double counting)
            s.totalPts += sess.sessionPoints;
            s.todayCorrect += sess.correctCount;
            this.updateStreak();
            s.sessions++;

            // Persist to localStorage with exact keys
            const totalCorrectToday = (parseInt(localStorage.getItem('cosyCorrectToday') || '0')) + sess.correctCount;
            const totalSessions = (parseInt(localStorage.getItem('cosySessions') || '0')) + 1;

            localStorage.setItem('cosyTotalPoints', s.totalPts);
            localStorage.setItem('cosyCorrectToday', totalCorrectToday);
            localStorage.setItem('cosySessions', totalSessions);
            localStorage.setItem('cosyMistakes', JSON.stringify(sess.sessionErrors));

            s.history.unshift({
                lang: sess.lang,
                cat: sess.cat,
                pts: sess.sessionPoints,
                correct: sess.correctCount,
                total: sess.sessionQueue.length,
                date: Date.now()
            });
            if (s.history.length > 10) s.history.pop();

            this.save();
            this.updateUI();
            this.populateRecentAndMistakes();

            // Populate: session points, total points, streak
            if (document.getElementById('final-score')) document.getElementById('final-score').textContent = sess.sessionPoints;
            if (document.getElementById('final-total-score')) document.getElementById('final-total-score').textContent = s.totalPts;
            if (document.getElementById('final-streak')) document.getElementById('final-streak').textContent = s.streak;

            // List missed words if any
            const summaryDiv = document.getElementById('session-summary');
            if (summaryDiv) {
                const existingErrors = summaryDiv.querySelector('.summary-errors');
                if (existingErrors) existingErrors.remove();

                const mistakes = sess.sessionErrors.filter(e => !e.hintUsed);
                if (mistakes.length > 0) {
                    const errorList = document.createElement('div');
                    errorList.className = 'summary-errors';
                    errorList.style.marginTop = '1.5rem';
                    errorList.style.textAlign = 'left';
                    errorList.innerHTML = `<h4 style="margin-bottom:0.5rem">Review missed words:</h4>` +
                        mistakes.map(m => `<div style="font-size:0.9rem; margin-bottom:0.3rem"><strong>${m.word}</strong> → ${m.correct}</div>`).join('');
                    summaryDiv.insertBefore(errorList, summaryDiv.querySelector('button'));
                }
            }
        },

        exitPractice() {
            this.session = null;
            document.getElementById('practice-section').classList.add('hidden');
            document.getElementById('practice-section').classList.remove('active');
            document.getElementById('pe-body-content').style.display = 'block';

            const summaryModal = document.getElementById('summary-modal');
            if (summaryModal) summaryModal.style.display = 'none';

            ['setup-section', 'quickstart-section', 'daily-challenge', 'stats-section'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.remove('hidden');
                    el.style.display = (id === 'quickstart-section' || id === 'stats-section' || id === 'setup-section') ? '' : 'block';
                }
            });

            this.updateUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Bridge functions for renderers
    window.beginSession = (lang, cat, level, theme, isChallenge, qs) => engine.startSession(lang, cat, level, theme, isChallenge, qs);
    window.nextQuestion = () => engine.nextQuestion();
    window.showSummary = () => engine.showSummary();
    window.exitPractice = () => {
        const peControls = document.querySelector('.pe-controls');
        if (peControls) peControls.style.display = 'flex';
        engine.exitPractice();
    };

    window.checkMC = (i) => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const ans = q.dynamicAns !== undefined ? q.dynamicAns : q.ans;
        const fb = document.getElementById('pe-fb');

        document.querySelectorAll('.mc-opt').forEach((b, idx) => {
            b.disabled = true;
            if (idx === ans) b.classList.add('correct');
            else if (idx === i) b.classList.add('wrong');
        });

        if (i === ans) {
            engine.awardPoints(10);
            fb.className = 'pe-feedback show ok';
            fb.innerHTML = '✅ Correct! +10 pts';
        } else {
            sess.sessionErrors.push({
                word: q.item ? q.item.word : q.q,
                correct: q.dynamicOpts ? q.dynamicOpts[ans] : (q.opts ? q.opts[ans] : q.ans),
                given: q.dynamicOpts ? q.dynamicOpts[i] : (q.opts ? q.opts[i] : i),
                entryId: q.item?.id
            });
            fb.className = 'pe-feedback show bad';
            fb.innerHTML = '❌ Not quite. Answer: ' + (q.dynamicOpts ? q.dynamicOpts[ans] : (q.opts ? q.opts[ans] : q.ans));
        }

        setTimeout(() => engine.nextQuestion(), 400);
    };

    window.checkTF = (val) => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const fb = document.getElementById('pe-fb');

        document.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);

        if (val === q.ans) {
            engine.awardPoints(10);
            fb.className = 'pe-feedback show ok';
            fb.innerHTML = '✅ Correct! +10 pts';
        } else {
            sess.sessionErrors.push({
                word: q.item ? q.item.word : q.q,
                correct: q.ans,
                given: val,
                entryId: q.item?.id
            });
            fb.className = 'pe-feedback show bad';
            fb.innerHTML = '❌ Incorrect.';
        }

        setTimeout(() => engine.nextQuestion(), 400);
    };

    window.checkType = () => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const inp = document.getElementById('type-in');
        if (!inp) return;

        const userAnswer = inp.value.trim().toLowerCase();
        const correctAnswer = (q.ans || q.item?.translation || "").toString().trim().toLowerCase();
        const fb = document.getElementById('pe-fb');

        inp.disabled = true;
        if (userAnswer === correctAnswer) {
            engine.awardPoints(10);
            inp.classList.add('correct');
            fb.className = 'pe-feedback show ok';
            fb.innerHTML = '✅ Correct! +10 pts';
        } else {
            sess.sessionErrors.push({
                word: q.item?.word || q.q,
                correct: q.ans || q.item?.translation,
                given: userAnswer,
                entryId: q.item?.id
            });
            inp.classList.add('wrong');
            fb.className = 'pe-feedback show bad';
            fb.innerHTML = '❌ Answer: ' + (q.ans || q.item?.translation);
        }

        setTimeout(() => engine.nextQuestion(), 400);
    };

    window.assembleWord = (btn) => {
        const assembly = document.getElementById('sc-assembly');
        if (!assembly) return;
        const clone = btn.cloneNode(true);
        clone.onclick = () => { clone.remove(); btn.style.display = 'inline-block'; };
        assembly.appendChild(clone);
        btn.style.display = 'none';
    };

    window.clearScramble = () => {
        const assembly = document.getElementById('sc-assembly');
        if (assembly) assembly.innerHTML = '';
        document.querySelectorAll('#sc-tokens button').forEach(b => b.style.display = 'inline-block');
    };

    window.checkScramble = () => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const assembly = document.getElementById('sc-assembly');
        if (!assembly) return;

        const val = Array.from(assembly.querySelectorAll('button')).map(b => b.textContent).join(' ');
        const fb = document.getElementById('pe-fb');

        if (val.trim().toLowerCase() === q.ans.trim().toLowerCase()) {
            engine.awardPoints(10);
            fb.className = 'pe-feedback show ok';
            fb.innerHTML = '✅ Correct! +10 pts';
        } else {
            sess.sessionErrors.push({
                word: q.item?.word || q.q,
                correct: q.ans,
                given: val,
                entryId: q.item?.id
            });
            fb.className = 'pe-feedback show bad';
            fb.innerHTML = '❌ Correct: ' + q.ans;
        }

        setTimeout(() => engine.nextQuestion(), 400);
    };

    window.showHint = () => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const fb = document.getElementById('pe-fb');
        if (!fb || !q) return;

        const answer = (q.ans || q.item?.translation || "").toString();
        if (!answer) return;

        // Deduct 5 points, floor at 0
        sess.sessionPoints = Math.max(0, sess.sessionPoints - 5);
        document.getElementById('score-count').textContent = sess.sessionPoints;

        // Reveal: First letter capitalized + underscores with spaces
        const hintText = answer.charAt(0).toUpperCase() + ' ' + answer.slice(1).replace(/[^\s]/g, '_ ').trim();

        fb.className = 'pe-feedback show ok';
        fb.innerHTML = `💡 Hint: ${hintText}`;

        // Disable hint button
        const hintBtn = document.getElementById('pe-hint');
        if (hintBtn) hintBtn.disabled = true;

        // Log hint usage
        sess.sessionErrors.push({
            hintUsed: true,
            word: q.item?.word || q.q,
            entryId: q.item?.id
        });
    };

    window.cosyPracticeEngine = engine;

    if (document.readyState === 'complete') engine.init();
    else window.addEventListener('load', () => engine.init());
})();
