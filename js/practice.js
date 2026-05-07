/**
 * COSYlanguages — practice.js
 * Sophisticated Dynamic Practice Engine
 */

(function() {
    'use strict';

    // ── STATE ─────────────────────────────────────────────────
    let STATE = {
        totalPts: 0,
        streak: 0,
        todayCorrect: 0,
        sessions: 0,
        lastDate: '',
        mistakes: []
    };

    function loadGlobalState() {
        STATE.totalPts = parseInt(localStorage.getItem('cosy_total_points') || '0');
        STATE.streak = parseInt(localStorage.getItem('practice_streak') || '0');
        STATE.lastDate = localStorage.getItem('last_practice_date') || '';

        // Internal practice stats
        const internal = JSON.parse(localStorage.getItem('cosy_practice_internal') || '{}');
        STATE.todayCorrect = internal.todayCorrect || 0;
        STATE.sessions = internal.sessions || 0;
        STATE.mistakes = internal.mistakes || [];

        const today = new Date().toDateString();
        if (STATE.lastDate !== today) {
            STATE.todayCorrect = 0;
        }
    }

    function saveGlobalState() {
        localStorage.setItem('cosy_total_points', STATE.totalPts);
        localStorage.setItem('practice_streak', STATE.streak);
        localStorage.setItem('last_practice_date', new Date().toDateString());

        localStorage.setItem('cosy_practice_internal', JSON.stringify({
            todayCorrect: STATE.todayCorrect,
            sessions: STATE.sessions,
            mistakes: STATE.mistakes
        }));
    }

    // ── DATA LOADING ──────────────────────────────────────────
    const DATA_CACHE = {};

    async function loadPracticeData(lang, cat, level) {
        const langCode = lang.toLowerCase();
        const levelCode = level.toLowerCase();

        // Determine files to load
        const files = [];
        const prefix = '../js/data/';

        // Mapping of families
        const families = {
            'en': 'germanic', 'de': 'germanic',
            'fr': 'romance', 'it': 'romance', 'es': 'romance', 'pt': 'romance',
            'ru': 'slavic',
            'el': 'hellenic',
            'hy': 'armenian',
            'ka': 'kartvelian',
            'tt': 'turkic', 'ba': 'turkic',
            'br': 'celtic'
        };
        const family = families[langCode] || 'romance';

        if (cat === 'vocab' || cat === 'all') {
            files.push(`${prefix}${family}/${langCode}/${levelCode}/vocabulary.js`);
            if (levelCode === 'starter') {
                files.push(`${prefix}${family}/${langCode}/${levelCode}/adjectives.js`);
                files.push(`${prefix}${family}/${langCode}/${levelCode}/verbs.js`);
            }
        }
        if (cat === 'grammar' || cat === 'all') {
            files.push(`${prefix}${family}/${langCode}/${levelCode}/grammar.js`);
        }
        if (cat === 'speaking' || cat === 'all') {
            files.push(`${prefix}${family}/${langCode}/${levelCode}/speaking.js`);
        }

        for (const file of files) {
            if (DATA_CACHE[file]) continue;
            await new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = file + '?t=' + Date.now();
                script.onload = () => { DATA_CACHE[file] = true; resolve(); };
                script.onerror = () => { console.warn('Failed to load:', file); resolve(); };
                document.head.appendChild(script);
            });
        }
    }

    // ── TASK GENERATION ───────────────────────────────────────
    function generateSession(lang, cat, level, theme) {
        let pool = [];
        const langCode = lang.toLowerCase();

        if (cat === 'vocab') {
            pool = (window.vocabularyData && window.vocabularyData[langCode]) || [];
        } else if (cat === 'grammar') {
            pool = (window.grammarData && window.grammarData[langCode]) || [];
        } else if (cat === 'speaking') {
            pool = (window.speakingData && window.speakingData[langCode]) || [];
        }

        // Filter by level and theme
        let filtered = pool.filter(item => {
            const lvlMatch = (level === 'all' || item.level === level);
            const themeMatch = (theme === 'all' || (window.gameUtils && window.gameUtils.isThemeMatch(item.theme, theme)));
            return lvlMatch && themeMatch;
        });

        if (filtered.length === 0) filtered = pool.slice(0, 20); // Fallback

        // Shuffle and pick 10
        const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);

        // Convert items to tasks
        return selected.map(item => {
            const task = { ...item };

            // Randomly assign task type if not fixed
            if (!task.type || task.type === 'vocabulary') {
                const types = ['mc', 'tf', 'cl'];
                if (task.opposite) types.push('op');
                task.type = types[Math.floor(Math.random() * types.length)];
            }

            // Prepare Multiple Choice Distractors
            if (task.type === 'mc') {
                const distractors = pool
                    .filter(i => i.word !== item.word)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map(i => i.word);
                task.options = [item.word, ...distractors].sort(() => 0.5 - Math.random());
            }

            return task;
        });
    }

    // ── SESSION ENGINE ────────────────────────────────────────
    let CURRENT_SESSION = null;

    async function startPractice(isWheel = false) {
        const lang = isWheel ? window.WHEEL_RESULT.lang : document.querySelector('.lang-pill.active').dataset.value;
        const cat = isWheel ? window.WHEEL_RESULT.cat : document.querySelector('.cat-pill.active').dataset.value;
        const level = isWheel ? 'starter' : document.getElementById('practice-level').value;
        const theme = isWheel ? 'all' : document.getElementById('practice-theme').value;

        showLoading(true);
        await loadPracticeData(lang, cat, level);
        const tasks = generateSession(lang, cat, level, theme);
        showLoading(false);

        if (tasks.length === 0) {
            alert("Not enough data for this combination yet. Try another!");
            return;
        }

        CURRENT_SESSION = {
            lang, cat, level, theme,
            tasks,
            index: 0,
            score: 0,
            streak: 0,
            startTime: Date.now()
        };

        // UI Transition
        document.getElementById('setup-section').style.display = 'none';
        document.getElementById('wheel-container').style.display = 'none';
        document.getElementById('practice-section').style.display = 'block';
        document.getElementById('practice-section').classList.add('active');

        renderTask();
    }

    function renderTask() {
        const session = CURRENT_SESSION;
        if (session.index >= session.tasks.length) {
            finishSession();
            return;
        }

        const task = session.tasks[session.index];
        const lang = session.lang;

        // Progress
        const pct = (session.index / session.tasks.length) * 100;
        document.getElementById('progress-fill').style.width = pct + '%';
        document.getElementById('q-num').textContent = session.index + 1;
        document.getElementById('score-count').textContent = session.score;
        document.getElementById('streak-count').textContent = STATE.streak + session.streak;

        // Header
        const peBody = document.getElementById('pe-body');
        const emojiDisp = document.getElementById('emoji-display');
        const instr = document.getElementById('task-instruction');
        const qText = document.getElementById('task-what-to-do');
        const wordDisp = document.getElementById('word-display');
        const subDisp = document.getElementById('subtext-display');

        // Reset UI
        document.getElementById('choices-grid').innerHTML = '';
        document.getElementById('choices-grid').classList.add('hidden');
        document.getElementById('opposite-input-container').classList.add('hidden');
        document.getElementById('tf-buttons-container').classList.add('hidden');
        document.getElementById('conversation-container').classList.add('hidden');
        document.getElementById('feedback-message').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');

        emojiDisp.textContent = task.emoji || '💡';
        instr.textContent = getTaskLabel(task.type);

        if (task.type === 'mc') {
            qText.textContent = task.definitions?.[0]?.text || "Choose the correct word:";
            wordDisp.textContent = '???';
            subDisp.textContent = '';

            const grid = document.getElementById('choices-grid');
            grid.classList.remove('hidden');
            task.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'mc-opt';
                btn.textContent = opt;
                btn.onclick = () => checkAnswer(opt === task.word, task.word);
                grid.appendChild(btn);
            });
        } else if (task.type === 'tf') {
            const isMatch = Math.random() > 0.5;
            const displayWord = isMatch ? task.word : (session.tasks[(session.index + 1) % session.tasks.length].word);

            qText.textContent = `Does this emoji/definition match the word "${displayWord}"?`;
            wordDisp.textContent = displayWord;

            const cont = document.getElementById('tf-buttons-container');
            cont.classList.remove('hidden');
            cont.style.display = 'flex';
            cont.querySelector('#true-btn').onclick = () => checkAnswer(isMatch === true, task.word);
            cont.querySelector('#false-btn').onclick = () => checkAnswer(isMatch === false, task.word);
        } else if (task.type === 'cl' || task.type === 'op') {
            qText.textContent = task.type === 'op' ? `What is the opposite of "${task.word}"?` : (task.definitions?.[0]?.text || "Type the word:");
            wordDisp.textContent = task.type === 'op' ? task.word : '???';

            const cont = document.getElementById('opposite-input-container');
            cont.classList.remove('hidden');
            cont.style.display = 'block';
            const input = document.getElementById('opposite-answer');
            input.value = '';
            input.focus();

            document.getElementById('check-opposite-btn').onclick = () => {
                const ans = task.type === 'op' ? task.opposite : task.word;
                checkAnswer(input.value.trim().toLowerCase() === ans.toLowerCase(), ans);
            };
        } else if (task.type === 'conv' || session.cat === 'speaking') {
            qText.textContent = task.q || task.word || "Speak about this topic:";
            wordDisp.textContent = '';
            const cont = document.getElementById('conversation-container');
            cont.classList.remove('hidden');
            cont.style.display = 'block';
            document.getElementById('finish-conversation-btn').onclick = () => checkAnswer(true);
        }
    }

    function checkAnswer(isCorrect, correctAnswer) {
        const fb = document.getElementById('feedback-message');
        fb.classList.remove('hidden');
        fb.className = 'pe-feedback show ' + (isCorrect ? 'ok' : 'bad');
        fb.textContent = isCorrect ? '✨ Correct! +10 pts' : '❌ Incorrect. Correct was: ' + correctAnswer;

        if (isCorrect) {
            CURRENT_SESSION.score += 10;
            CURRENT_SESSION.streak++;
            if (window.gameUtils) window.gameUtils.playGameSound('success');
        } else {
            CURRENT_SESSION.streak = 0;
            if (window.gameUtils) window.gameUtils.playGameSound('error');
            STATE.mistakes.push(CURRENT_SESSION.tasks[CURRENT_SESSION.index].word);
        }

        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('next-btn').style.display = 'block';

        // Sync stats
        if (isCorrect) {
            STATE.totalPts += 10;
            STATE.todayCorrect++;
            saveGlobalState();
            updateUIStats();
        }
    }

    function finishSession() {
        STATE.sessions++;
        if (STATE.todayCorrect > 0) {
            const lastDate = localStorage.getItem('last_practice_date');
            const today = new Date().toDateString();
            if (lastDate !== today) {
                STATE.streak++;
            }
        }
        saveGlobalState();
        updateUIStats();

        document.getElementById('practice-section').style.display = 'none';
        const modal = document.getElementById('summary-modal');
        modal.style.display = 'block';
        modal.classList.add('active');

        document.getElementById('final-score').textContent = CURRENT_SESSION.score;
        document.getElementById('final-total-score').textContent = STATE.totalPts;
        document.getElementById('final-streak').textContent = STATE.streak;
    }

    function updateUIStats() {
        document.getElementById('total-pts').textContent = STATE.totalPts.toLocaleString();
        document.getElementById('total-correct').textContent = STATE.todayCorrect;
        document.getElementById('total-sessions').textContent = STATE.sessions;
        document.getElementById('streak-val').textContent = STATE.streak;

        const arc = document.getElementById('streak-arc');
        if (arc) {
            const pct = Math.min(STATE.streak / 30, 1);
            arc.style.strokeDashoffset = 226 - (226 * pct);
        }

        // Nav sync
        const navPts = document.getElementById('nav-pts');
        const navStreak = document.getElementById('nav-streak');
        if (navPts) navPts.textContent = `✨ ${STATE.totalPts.toLocaleString()} pts`;
        if (navStreak) navStreak.textContent = `🔥 ${STATE.streak}d`;
    }

    function showLoading(show) {
        const btn = document.getElementById('start-btn');
        if (btn) {
            btn.disabled = show;
            btn.textContent = show ? 'Loading data...' : '▶ Start practice';
        }
    }

    function getTaskLabel(type) {
        const labels = { mc: 'Multiple Choice', tf: 'True / False', cl: 'Typing', op: 'Opposites', conv: 'Speaking' };
        return labels[type] || 'Practice';
    }

    // ── WHEEL ─────────────────────────────────────────────────
    window.WHEEL_RESULT = null;
    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const items = [
        { lang: 'en', cat: 'vocab', label: '🇬🇧 Vocab' },
        { lang: 'fr', cat: 'vocab', label: '🇫🇷 Vocab' },
        { lang: 'it', cat: 'vocab', label: '🇮🇹 Vocab' },
        { lang: 'ru', cat: 'vocab', label: '🇷🇺 Vocab' },
        { lang: 'el', cat: 'vocab', label: '🇬🇷 Vocab' },
        { lang: 'en', cat: 'speaking', label: '🗣️ Speaking' }
    ];

    let angle = 0;
    let spinning = false;

    function drawWheel() {
        if (!ctx) return;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 10;
        const slice = (Math.PI * 2) / items.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        items.forEach((item, i) => {
            const startAngle = angle + i * slice;
            const endAngle = startAngle + slice;

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.fillStyle = i % 2 === 0 ? '#6b8f71' : '#4a6b50';
            ctx.fill();
            ctx.stroke();

            // Text
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(startAngle + slice / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(item.label, radius - 10, 5);
            ctx.restore();
        });
    }

    function spin() {
        if (spinning) return;
        spinning = true;
        const duration = 3000;
        const start = Date.now();
        const initialAngle = angle;
        const targetRotation = Math.PI * 10 + Math.random() * Math.PI * 2;

        function animate() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            angle = initialAngle + targetRotation * easeOut;
            drawWheel();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                spinning = false;
                const finalAngle = angle % (Math.PI * 2);
                const sliceIdx = Math.floor(((Math.PI * 2 - finalAngle) % (Math.PI * 2)) / ((Math.PI * 2) / items.length));
                window.WHEEL_RESULT = items[sliceIdx];
                document.getElementById('wheel-result').textContent = `Result: ${window.WHEEL_RESULT.label}!`;
                setTimeout(() => startPractice(true), 1000);
            }
        }
        animate();
    }

    // ── PUBLIC API ────────────────────────────────────────────
    window.cosyPractice = {
        startPractice: () => startPractice(false),
        openWheel: () => {
            document.getElementById('setup-section').style.display = 'none';
            document.getElementById('wheel-container').style.display = 'block';
            drawWheel();
        },
        closeWheel: () => {
            document.getElementById('wheel-container').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
        },
        spin: spin,
        nextTask: () => {
            CURRENT_SESSION.index++;
            renderTask();
        },
        endSession: () => {
            document.getElementById('practice-section').style.display = 'none';
            document.getElementById('summary-modal').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
            CURRENT_SESSION = null;
        },
        quickStart: (lang, cat, level, theme) => {
            // Pills update
            document.querySelectorAll('.lang-pill').forEach(p => p.classList.toggle('active', p.dataset.value === lang));
            document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.value === cat));
            document.getElementById('practice-level').value = level;
            startPractice(false);
        }
    };

    // ── BOOT ──────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        loadGlobalState();
        updateUIStats();

        // Listeners
        document.querySelectorAll('.lang-pill').forEach(p => p.onclick = () => {
            document.querySelectorAll('.lang-pill').forEach(lp => lp.classList.remove('active'));
            p.classList.add('active');
        });
        document.querySelectorAll('.cat-pill').forEach(p => p.onclick = () => {
            document.querySelectorAll('.cat-pill').forEach(cp => cp.classList.remove('active'));
            p.classList.add('active');
        });

        document.getElementById('spin-btn')?.addEventListener('click', spin);
        document.getElementById('next-btn')?.addEventListener('click', window.cosyPractice.nextTask);
        document.getElementById('back-to-menu-btn')?.addEventListener('click', window.cosyPractice.endSession);
    });

})();
