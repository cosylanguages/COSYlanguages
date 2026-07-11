/**
 * practice/_engine/core.js
 * Consolidated session engine for language practice (Track B-4).
 * Handles state, scoring, streaks, and session flow.
 */

(function() {
    'use strict';

    function playPracticeSound(type) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();

            if (type === 'correct') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);

                gain.gain.setValueAtTime(0.12, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start();
                osc.stop(ctx.currentTime + 0.35);
            } else if (type === 'wrong') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.25);

                gain.gain.setValueAtTime(0.18, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start();
                osc.stop(ctx.currentTime + 0.25);
            } else if (type === 'complete') {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();

                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

                    gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.08 + 0.4);

                    osc.connect(gain);
                    gain.connect(ctx.destination);

                    osc.start(ctx.currentTime + i * 0.08);
                    osc.stop(ctx.currentTime + i * 0.08 + 0.4);
                });
            }
        } catch (e) {
            console.warn("AudioContext not supported or blocked", e);
        }
    }

    function showFloatingScoreEffect(text, isCorrect = true) {
        const parent = document.querySelector('.pe-counters');
        if (!parent) return;

        const el = document.createElement('div');
        el.className = 'floating-points-pop';
        el.textContent = text;
        el.style.color = isCorrect ? 'var(--teal)' : 'var(--coral)';
        parent.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 1200);
    }

    function showBottomFeedback(isCorrect, title, desc, autoAdvanceMs = null) {
        const bar = document.getElementById('pe-bottom-bar');
        const iconEl = document.getElementById('pe-bb-icon');
        const titleEl = document.getElementById('pe-bb-title');
        const descEl = document.getElementById('pe-bb-desc');

        if (bar) {
            bar.className = 'pe-bottom-bar active ' + (isCorrect ? 'correct' : 'incorrect');
            if (iconEl) iconEl.textContent = isCorrect ? '🎉' : '❌';
            if (titleEl) titleEl.textContent = title;
            if (descEl) descEl.textContent = desc;
            document.body.classList.add('has-active-bottom-bar');
        }

        // Apply visual bounce or shake to the question card
        const card = document.querySelector('.pe-question-card');
        if (card) {
            card.classList.remove('pe-bounce', 'pe-shake');
            // Trigger reflow to restart animation
            void card.offsetWidth;
            card.classList.add(isCorrect ? 'pe-bounce' : 'pe-shake');
        }

        if (autoAdvanceMs) {
            if (engine.autoAdvanceTimeout) clearTimeout(engine.autoAdvanceTimeout);
            engine.autoAdvanceTimeout = setTimeout(() => {
                engine.nextQuestion();
            }, autoAdvanceMs);
        }
    }

    function triggerConfetti() {
        const canvas = document.createElement('canvas');
        canvas.id = 'confetti-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ['#2D7D6F', '#B07D2B', '#C4522A', '#2E5FA3', '#3A7A4A', '#6B3F7C'];
        const particles = [];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 4,
                d: Math.random() * canvas.height,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 5,
                tiltAngleIncremental: Math.random() * 0.07 + 0.02,
                tiltAngle: 0
            });
        }

        let animationFrame;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;

            particles.forEach((p) => {
                p.tiltAngle += p.tiltAngleIncremental;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.x += Math.sin(p.tiltAngle);
                p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 5;

                if (p.y <= canvas.height) {
                    active = true;
                }

                ctx.beginPath();
                ctx.lineWidth = p.r;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                ctx.stroke();
            });

            if (active) {
                animationFrame = requestAnimationFrame(draw);
            } else {
                canvas.remove();
            }
        }
        draw();
        setTimeout(() => {
            cancelAnimationFrame(animationFrame);
            canvas.remove();
        }, 4000);
    }

    const KEY_STATE = 'cosy_practice';
    const KEY_TOTAL_PTS = 'cosy_total_points';
    const KEY_STREAK = 'practice_streak';
    const KEY_LAST_DATE = 'last_practice_date';

    function loadState() {
        try {
            const s = JSON.parse(localStorage.getItem(KEY_STATE) || '{}');
            s.totalPts = parseInt(localStorage.getItem(KEY_TOTAL_PTS) || '0');
            s.streak = parseInt(localStorage.getItem(KEY_STREAK) || '0');
            s.lastDate = localStorage.getItem(KEY_LAST_DATE) || '';
            return s;
        } catch { return { totalPts: 0, streak: 0, lastDate: '' }; }
    }

    function saveState(s) {
        localStorage.setItem(KEY_STATE, JSON.stringify(s));
        localStorage.setItem(KEY_TOTAL_PTS, s.totalPts);
        localStorage.setItem(KEY_STREAK, s.streak);
        localStorage.setItem(KEY_LAST_DATE, s.lastDate);
    }

    const engine = {
        state: loadState(),
        session: null,

        init() {
            const s = this.state;
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
                    // Broke the streak
                    s.streak = 0;
                }
                s.todayCorrect = 0;
            }
            this.save();
            this.updateUI();
            this.populateRecentAndMistakes();

            // Global interactive keyboard controls & shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter' && !['1', '2', '3', '4'].includes(e.key)) return;

                // 1. If Summary Modal is open, Enter closes it
                const summaryModal = document.getElementById('summary-modal');
                if (summaryModal && summaryModal.style.display === 'block') {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        window.cosyPractice.endSession();
                    }
                    return;
                }

                // 2. If Spinning Wheel is open, Enter spins it
                const wheelContainer = document.getElementById('wheel-container');
                if (wheelContainer && wheelContainer.style.display === 'block') {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const spinBtn = document.getElementById('spin-btn');
                        if (spinBtn && !spinBtn.disabled) {
                            spinBtn.click();
                        }
                    }
                    return;
                }

                // 3. If Practice Section is active
                const practiceSec = document.getElementById('practice-section');
                const isPracticeActive = practiceSec && practiceSec.classList.contains('active');
                if (isPracticeActive) {
                    const sess = this.session;
                    if (!sess) return;

                    const bar = document.getElementById('pe-bottom-bar');
                    const isBarActive = bar && bar.classList.contains('active');

                    if (e.key === 'Enter' && isBarActive) {
                        e.preventDefault();
                        this.nextQuestion();
                        return;
                    }

                    // If typing in input, let normal keys type
                    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
                        return;
                    }

                    const q = sess.sessionQueue[sess.currentIndex];
                    if (!q) return;
                    const form = q.form || q.type;

                    if (e.key === 'Enter') {
                        const nextBtn = document.getElementById('pe-next');
                        const isNextVisible = nextBtn && nextBtn.style.display !== 'none';
                        if (isNextVisible) {
                            e.preventDefault();
                            this.nextQuestion();
                        }
                    } else if (['1', '2', '3', '4'].includes(e.key)) {
                        if (form === 'mc' || form === 'ls') {
                            const idx = parseInt(e.key) - 1;
                            const buttons = document.querySelectorAll('.mc-opt');
                            if (buttons[idx] && !buttons[idx].disabled) {
                                e.preventDefault();
                                buttons[idx].click();
                            }
                        } else if (form === 'tf') {
                            if (e.key === '1') {
                                e.preventDefault();
                                const btn = document.querySelector('.tf-btn:first-child');
                                if (btn && !btn.disabled) btn.click();
                            } else if (e.key === '2') {
                                e.preventDefault();
                                const btn = document.querySelector('.tf-btn:last-child');
                                if (btn && !btn.disabled) btn.click();
                            }
                        }
                    }
                    return;
                }

                // 4. If Setup panel is visible and active, Enter starts the practice
                const setupSec = document.getElementById('setup-section');
                const isSetupVisible = setupSec && setupSec.style.display !== 'none' && !setupSec.classList.contains('hidden');
                if (isSetupVisible && e.key === 'Enter') {
                    // Make sure we aren't focused on a select element, so Enter doesn't prevent select drop-downs
                    if (document.activeElement && document.activeElement.tagName === 'SELECT') {
                        return;
                    }
                    e.preventDefault();
                    window.cosyPractice.startPractice();
                }
            });
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
                        <div class="mi-retry" onclick="window.cosyPractice.quickStart('${m.lang}', '${m.cat || 'vocab'}', '${m.level || 'all'}', '${m.theme || 'all'}')">retry</div>
                    </div>`).join('');
            }
        },

        awardPoints(pts) {
            if (!this.session) return;

            // Increment combo
            this.session.combo = (this.session.combo || 0) + 1;

            // Award points with combo bonus
            const comboBonus = this.session.combo > 1 ? Math.min(this.session.combo * 2, 10) : 0;
            const finalPts = pts + comboBonus;

            this.session.sessionPoints += finalPts;
            this.session.correctCount++;

            const scoreCountEl = document.getElementById('score-count');
            if (scoreCountEl) scoreCountEl.textContent = this.session.sessionPoints;

            // Update combo UI
            const comboWrap = document.getElementById('combo-wrap');
            const comboCount = document.getElementById('combo-count');
            if (comboWrap && comboCount) {
                if (this.session.combo > 1) {
                    comboCount.textContent = this.session.combo;
                    comboWrap.style.display = 'block';
                    if (this.session.combo >= 3) {
                        comboWrap.classList.add('pulsing-glow');
                    } else {
                        comboWrap.classList.remove('pulsing-glow');
                    }
                } else {
                    comboWrap.style.display = 'none';
                    comboWrap.classList.remove('pulsing-glow');
                }
            }

            // Play correct sound and show floating score pop
            playPracticeSound('correct');
            const floatingText = comboBonus > 0 ? `+${finalPts} PTS 🔥` : `+${pts} PTS`;
            showFloatingScoreEffect(floatingText, true);

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
            } else {
                this.state.streak = 1;
            }

            this.state.lastDate = todayStr;
            this.save();
            this.updateUI();
        },

        recordMistake(q) {
            if (this.session) {
                this.session.combo = 0;
                const comboWrap = document.getElementById('combo-wrap');
                if (comboWrap) {
                    comboWrap.style.display = 'none';
                    comboWrap.classList.remove('pulsing-glow');
                }

                // Play wrong sound and show floating effect
                playPracticeSound('wrong');
                showFloatingScoreEffect('0 PTS ❌', false);
            }

            if (!q || !q.item) return;
            const s = this.state;
            const exists = s.mistakes.some(m => m.word === q.item.word && m.lang === (this.session?.lang || 'multi'));
            if (!exists) {
                s.mistakes.push({
                    ...q.item,
                    lang: this.session?.lang || 'multi',
                    cat: this.session?.cat || 'vocab',
                    level: this.session?.level || 'all',
                    theme: this.session?.theme || 'all',
                    added: Date.now()
                });
                if (s.mistakes.length > 50) s.mistakes.shift();
                this.save();
                this.populateRecentAndMistakes();
            }
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
                sessionErrors: [],
                combo: 0
            };

            const comboWrap = document.getElementById('combo-wrap');
            if (comboWrap) comboWrap.style.display = 'none';

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

            // Reset Duolingo-style bottom bar
            const bar = document.getElementById('pe-bottom-bar');
            if (bar) {
                bar.classList.remove('active', 'correct', 'incorrect');
            }
            document.body.classList.remove('has-active-bottom-bar');
            if (this.autoAdvanceTimeout) {
                clearTimeout(this.autoAdvanceTimeout);
                this.autoAdvanceTimeout = null;
            }

            // Progress bar update
            const fill = document.getElementById('progress-fill');
            const total = this.session.sessionQueue.length;
            const current = this.session.currentIndex;
            const percentage = (total > 0) ? (current / total) * 100 : 0;
            if (fill) fill.style.width = percentage + '%';

            const label = document.querySelector('.pe-session-label');
            if (label) label.textContent = `Word ${current + 1} of ${total}`;

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
                container.innerHTML = `<div class="pe-body-content-wrap">${window.cosyRenderers.renderQuestion(q, this.session, this.session.lang)}</div>`;
                const typeIn = document.getElementById('type-in');
                if (typeIn) {
                    typeIn.value = '';
                    setTimeout(() => typeIn.focus(), 50);
                }
            }
        },

        nextQuestion() {
            if (!this.session) return;

            if (this.autoAdvanceTimeout) {
                clearTimeout(this.autoAdvanceTimeout);
                this.autoAdvanceTimeout = null;
            }

            const q = this.session.sessionQueue[this.session.currentIndex];
            if (!q) {
                this.showSummary();
                return;
            }

            const form = q.form || q.type;
            const fb = document.getElementById('pe-fb');
            const bar = document.getElementById('pe-bottom-bar');
            const isAnswered = (fb && fb.classList.contains('show')) || (bar && bar.classList.contains('active'));

            if (!isAnswered && (form === 'type' || form === 'sc' || form === 'op' || form === 'np')) {
                if (form === 'sc') window.checkScramble();
                else window.checkType();
                return;
            }

            this.session.currentIndex++;
            if (this.session.currentIndex >= this.session.sessionQueue.length) {
                this.showSummary();
                return;
            }

            const nextBtn = document.getElementById('pe-next');
            if (nextBtn) nextBtn.style.display = 'none';
            this.loadEntry(this.session.sessionQueue[this.session.currentIndex]);
        },

        showSummary() {
            const s = this.state;
            const sess = this.session;
            if (!sess) return;

            const bar = document.getElementById('pe-bottom-bar');
            if (bar) {
                bar.classList.remove('active', 'correct', 'incorrect');
            }
            document.body.classList.remove('has-active-bottom-bar');
            if (this.autoAdvanceTimeout) {
                clearTimeout(this.autoAdvanceTimeout);
                this.autoAdvanceTimeout = null;
            }

            const practiceSection = document.getElementById('practice-section');
            if (practiceSection) {
                practiceSection.classList.add('hidden');
                practiceSection.classList.remove('active');
            }

            const summaryModal = document.getElementById('summary-modal');
            if (summaryModal) summaryModal.style.display = 'block';

            // Play complete fanfare and trigger confetti!
            playPracticeSound('complete');
            triggerConfetti();

            s.totalPts += sess.sessionPoints;
            s.todayCorrect += sess.correctCount;
            this.updateStreak();
            s.sessions++;

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

            if (document.getElementById('final-score')) document.getElementById('final-score').textContent = sess.sessionPoints;
            if (document.getElementById('final-total-score')) document.getElementById('final-total-score').textContent = s.totalPts;
            if (document.getElementById('final-streak')) document.getElementById('final-streak').textContent = s.streak;
        },

        endSession() {
            this.session = null;

            const bar = document.getElementById('pe-bottom-bar');
            if (bar) {
                bar.classList.remove('active', 'correct', 'incorrect');
            }
            document.body.classList.remove('has-active-bottom-bar');
            if (this.autoAdvanceTimeout) {
                clearTimeout(this.autoAdvanceTimeout);
                this.autoAdvanceTimeout = null;
            }

            document.getElementById('practice-section').classList.add('hidden');
            document.getElementById('practice-section').classList.remove('active');

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
        },

        showHint() {
            const q = this.session?.sessionQueue[this.session?.currentIndex];
            if (!q) return;

            const answer = q?.item?.translation || q?.ans || '';
            if (!answer) return;

            const words = answer.toString().split(' ');
            const hint = words
                .map(word => word.charAt(0).toUpperCase() + '_'.repeat(word.length - 1))
                .join(' ');

            const fb = document.getElementById('pe-fb');
            if (fb) {
                fb.className = 'pe-feedback show ok';
                fb.innerHTML = `💡 Hint: ${hint}`;
            }

            if (this.session.sessionPoints >= 5) {
                this.session.sessionPoints -= 5;
                this.state.totalPts = Math.max(0, this.state.totalPts - 5);
            }
            this.save();
            this.updateUI();

            const hintBtn = document.getElementById('pe-hint');
            if (hintBtn) hintBtn.disabled = true;
        }
    };

    // Expose engine
    window.cosyPracticeEngine = engine;

    // Bridge functions
    window.beginSession = (lang, cat, level, theme, isChallenge, qs) => engine.startSession(lang, cat, level, theme, isChallenge, qs);
    window.nextQuestion = () => engine.nextQuestion();
    window.showSummary = () => engine.showSummary();
    window.exitPractice = () => engine.endSession();
    window.endSession = () => engine.endSession();
    window.showHint = () => engine.showHint();

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
            if (fb) {
                fb.className = 'pe-feedback show ok';
                fb.innerHTML = '✅ Correct! +10 pts';
            }
            showBottomFeedback(true, 'Correct!', '+10 PTS 🎉', 600);
        } else {
            engine.recordMistake(q);
            if (fb) {
                fb.className = 'pe-feedback show bad';
                fb.innerHTML = '❌ Incorrect.';
            }
            const correctOpt = q.opts ? q.opts[ans] : '';
            const desc = correctOpt ? `Correct answer: ${correctOpt}` : '';
            showBottomFeedback(false, 'Incorrect', desc, 600);
        }
    };

    window.checkTF = (val) => {
        const sess = engine.session;
        const q = sess.sessionQueue[sess.currentIndex];
        const fb = document.getElementById('pe-fb');

        document.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);

        if (val === q.ans) {
            engine.awardPoints(10);
            if (fb) {
                fb.className = 'pe-feedback show ok';
                fb.innerHTML = '✅ Correct! +10 pts';
            }
            showBottomFeedback(true, 'Correct!', '+10 PTS 🎉', 600);
        } else {
            engine.recordMistake(q);
            if (fb) {
                fb.className = 'pe-feedback show bad';
                fb.innerHTML = '❌ Incorrect.';
            }
            showBottomFeedback(false, 'Incorrect', `Correct answer: ${q.ans ? 'True' : 'False'}`, 600);
        }
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
            if (fb) {
                fb.className = 'pe-feedback show ok';
                fb.innerHTML = '✅ Correct! +10 pts';
            }
            showBottomFeedback(true, 'Correct!', '+10 PTS 🎉');
        } else {
            engine.recordMistake(q);
            inp.classList.add('wrong');
            if (fb) {
                fb.className = 'pe-feedback show bad';
                fb.innerHTML = '❌ Answer: ' + correctAnswer;
            }
            showBottomFeedback(false, 'Incorrect', `Correct answer: ${correctAnswer}`);
        }
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
            if (fb) {
                fb.className = 'pe-feedback show ok';
                fb.innerHTML = '✅ Correct! +10 pts';
            }
            showBottomFeedback(true, 'Correct!', '+10 PTS 🎉', 600);
        } else {
            engine.recordMistake(q);
            if (fb) {
                fb.className = 'pe-feedback show bad';
                fb.innerHTML = '❌ Incorrect.';
            }
            showBottomFeedback(false, 'Incorrect', `Correct answer: ${q.ans}`, 600);
        }
    };

    if (document.readyState === 'complete') engine.init();
    else window.addEventListener('load', () => engine.init());
})();
