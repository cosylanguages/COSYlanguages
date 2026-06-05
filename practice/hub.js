/**
 * practice/hub.js
 * Main UI manager for the practice hub.
 * Handles setup, category/language selection, and games like Spin the Wheel.
 */

(function() {
    'use strict';

    let selectedLang = 'en';
    let selectedCat = 'vocab';

    /* ══════════════════════════════════════
       SETUP UI STATE
    ══════════════════════════════════════ */
    function selectLang(val, el) {
        const pills = document.querySelectorAll('.lang-pill, .lang-selection-card');
        pills.forEach(p => p.classList.remove('active'));

        if (val instanceof HTMLElement) {
            val.classList.add('active');
            selectedLang = val.dataset.value || 'en';
            return;
        }

        if (el) el.classList.add('active');
        else {
            const target = Array.from(pills).find(p => p.dataset.value === val || p.textContent.toLowerCase().includes(val.toLowerCase()));
            if (target) target.classList.add('active');
        }
        selectedLang = val;
    }

    function selectCat(el) {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        if (el && el.classList) el.classList.add('active');
        selectedCat = el ? (el.dataset.value || 'vocab') : 'vocab';
    }

    function updateThemes() {
        const themeSelect = document.getElementById('theme-filter');
        if (!themeSelect) return;

        themeSelect.innerHTML = '<option value="all">All Themes</option>';
        if (window.COMMON_THEMES) {
            window.COMMON_THEMES.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                // Try translation first, then fallback to label/id
                opt.textContent = (window.t && window.t(t.label)) || t.label.replace('common_theme_', '').replace(/_/g, ' ');
                themeSelect.appendChild(opt);
            });
        }
    }

    /* ══════════════════════════════════════
       SPINNING WHEEL LOGIC
    ══════════════════════════════════════ */
    let wheelAngle = 0;
    const wheelLangs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
    const wheelCats = ['vocab', 'grammar', 'speaking', 'pronunciation'];
    const wheelItems = [];
    wheelLangs.forEach(l => wheelCats.forEach(c => wheelItems.push({ lang: l, cat: c })));

    function drawWheel() {
        const canvas = document.getElementById('wheel-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const radius = canvas.width / 2;
        const slice = (Math.PI * 2) / wheelItems.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(wheelAngle);

        wheelItems.forEach((item, i) => {
            const angle = i * slice;
            ctx.beginPath();
            ctx.fillStyle = i % 2 === 0 ? '#6b8f71' : '#e8a838';
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, angle, angle + slice);
            ctx.fill();

            ctx.save();
            ctx.rotate(angle + slice / 2);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Nunito, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(item.lang.toUpperCase(), radius - 15, 5);
            ctx.restore();
        });
        ctx.restore();
    }

    function spinWheel() {
        const btn = document.getElementById('spin-btn');
        if (btn) btn.disabled = true;

        let velocity = 0.3 + Math.random() * 0.2;
        const friction = 0.985;

        function animate() {
            wheelAngle += velocity;
            velocity *= friction;
            drawWheel();

            if (velocity > 0.002) {
                requestAnimationFrame(animate);
            } else {
                if (btn) btn.disabled = false;
                const slice = (Math.PI * 2) / wheelItems.length;
                const normalizedAngle = (Math.PI * 2) - (wheelAngle % (Math.PI * 2));
                const index = Math.floor(normalizedAngle / slice) % wheelItems.length;
                const result = wheelItems[index];

                const resEl = document.getElementById('wheel-result');
                if (resEl) {
                    const langName = { en:'English', fr:'French', it:'Italian', ru:'Russian', el:'Greek', es:'Spanish', de:'German', pt:'Portuguese', hy:'Armenian', ka:'Georgian', tt:'Tatar', ba:'Bashkir', br:'Breton' };
                    resEl.innerHTML = `Landed on: <strong>${langName[result.lang]} · ${result.cat}</strong>!<br>Starting practice... 🚀`;
                    setTimeout(() => {
                        window.cosyPractice.closeWheel();
                        window.cosyPractice.quickStart(result.lang, result.cat, 'all', 'all');
                    }, 1500);
                }
            }
        }
        animate();
    }

    function generateDailyChallenge() {
        const seeds = [
            { lang: 'en', cat: 'Vocabulary', theme: 'Food', title: "English Food Master 🍎", sub: "Learn essential food items in English." },
            { lang: 'fr', cat: 'Vocabulary', theme: 'Greetings', title: "French Politeness 🇫🇷", sub: "Master basic greetings and etiquette." },
            { lang: 'it', cat: 'Grammar', theme: 'prepositions', title: "Italian Prepositions 🇮🇹", sub: "Master 'in', 'on', and 'at' in Italian." },
            { lang: 'ru', cat: 'Vocabulary', theme: 'Numbers', title: "Russian Numbers 🇷🇺", sub: "Count like a pro from 0 to 100." },
            { lang: 'el', cat: 'Vocabulary', theme: 'Home', title: "Greek Home Life 🇬🇷", sub: "Learn words for rooms and furniture." }
        ];
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const challenge = seeds[dayOfYear % seeds.length];

        const titleEl = document.getElementById('dc-title');
        const subEl = document.getElementById('dc-sub');
        if (titleEl) titleEl.textContent = challenge.title;
        if (subEl) subEl.textContent = challenge.sub;

        return challenge;
    }

    /* ══════════════════════════════════════
       PUBLIC HUB API
    ══════════════════════════════════════ */
    window.cosyPractice = {
        get selectedLang() { return selectedLang; },
        get selectedCat() { return selectedCat; },

        selectLang,
        selectPracticeLang: selectLang,
        selectCat,
        updateThemes,

        openWheel() {
            document.getElementById('setup-section').style.display = 'none';
            document.getElementById('wheel-container').style.display = 'block';
            setTimeout(drawWheel, 50);
        },

        closeWheel() {
            document.getElementById('wheel-container').style.display = 'none';
            document.getElementById('setup-section').style.display = 'block';
        },

        spinWheel,

        async startPractice() {
            const level = document.getElementById('level-filter')?.value || 'all';
            const theme = document.getElementById('theme-filter')?.value || 'all';
            const startBtn = (window.event && window.event.target) || document.querySelector('button[onclick*="startPractice"]');

            if (startBtn) {
                startBtn.disabled = true;
                startBtn.textContent = 'Loading... ⏳';
            }

            if (window.ensureDataLoaded) {
                await window.ensureDataLoaded(selectedLang, level);
            }

            if (startBtn) {
                startBtn.disabled = false;
                startBtn.textContent = 'Start Practice 🚀';
            }

            if (window.beginSession) {
                window.beginSession(selectedLang, selectedCat, level, theme, false);
            }
        },

        quickStart: async (lang, cat, level, theme) => {
            const lp = document.querySelector(`.lang-pill[data-value="${lang.toLowerCase()}"]`);
            if (lp) selectLang(lp);
            const cp = document.querySelector(`.cat-pill[data-value="${cat.toLowerCase()}"]`);
            if (cp) selectCat(cp);

            if (window.ensureDataLoaded) await window.ensureDataLoaded(lang, level);
            if (window.beginSession) window.beginSession(lang, selectedCat, level, theme, false);
        },

        startDailyChallenge: async () => {
            const challenge = generateDailyChallenge();
            window.cosyPractice.quickStart(challenge.lang, challenge.cat, 'all', challenge.theme);
        },

        startMistakeReview() {
            const engine = window.cosyPracticeEngine;
            if (!engine || !engine.state.mistakes || engine.state.mistakes.length === 0) {
                return alert("No mistakes to review!");
            }
            const qs = engine.state.mistakes.map(m => ({
                type: 'type',
                q: `Review: "${m.definitions?.[0]?.text || m.word}"`,
                item: m,
                ans: m.word
            }));

            window.beginSession('multi', 'Review', 'mixed', 'all', false, qs.slice(0, 10));
        },

        // Session Navigation delegate to core engine
        nextQ: () => {
            if (window.nextQuestion) window.nextQuestion();
        },

        endSession: () => {
            if (window.exitPractice) window.exitPractice();
        },

        checkMC: (i) => window.checkMC && window.checkMC(i),
        checkTF: (val) => window.checkTF && window.checkTF(val),
        checkType: () => window.checkType && window.checkType(),
        assembleWord: (btn) => window.assembleWord && window.assembleWord(btn),
        clearScramble: () => window.clearScramble && window.clearScramble(),
        checkScramble: () => window.checkScramble && window.checkScramble(),
        showHint: () => window.showHint && window.showHint()
    };

    function initSetupUI() {
        // Popoulate Languages
        const langContainer = document.getElementById('lang-pills');
        if (langContainer && window.COSY_LANGUAGES) {
            langContainer.innerHTML = window.COSY_LANGUAGES.map(l =>
                `<div class="lang-pill ${l.code === selectedLang ? 'active' : ''}" data-value="${l.code}">${l.flag} ${l.native}</div>`
            ).join('');

            langContainer.querySelectorAll('.lang-pill').forEach(p => {
                p.onclick = () => selectLang(p);
            });
        }

        // Populate Levels
        const levelSelect = document.getElementById('level-filter');
        if (levelSelect && window.COSY_LEVELS) {
            window.COSY_LEVELS.forEach(l => {
                const opt = document.createElement('option');
                opt.value = l.id;
                opt.textContent = l.name;
                opt.setAttribute('data-translate-key', l.id);
                levelSelect.appendChild(opt);
            });
        }

        document.querySelectorAll('.cat-pill').forEach(p => p.addEventListener('click', () => selectCat(p)));
        document.getElementById('spin-btn')?.addEventListener('click', spinWheel);
        generateDailyChallenge();
    }

    document.addEventListener('DOMContentLoaded', () => {
        initSetupUI();

        // Handle URL parameters
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        const cat = params.get('cat');
        const level = params.get('level');
        const theme = params.get('theme');

        if (lang) selectLang(lang);
        if (cat) {
            const catPill = document.querySelector(`.cat-pill[data-value="${cat}"]`);
            if (catPill) selectCat(catPill);
        }
        if (level) {
            const levelSel = document.getElementById('level-filter');
            if (levelSel) {
                levelSel.value = level;
                updateThemes();
            }
        }
        if (theme) {
            const themeSel = document.getElementById('theme-filter');
            if (themeSel) themeSel.value = theme;
        }

        if (lang && cat) {
            window.cosyPractice.startPractice();
        }
    });
})();
