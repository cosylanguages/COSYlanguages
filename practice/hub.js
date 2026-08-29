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
            localStorage.setItem('cosy_practice_last_lang', selectedLang);
            return;
        }

        if (el) el.classList.add('active');
        else {
            const target = Array.from(pills).find(p => p.dataset.value === val || p.textContent.toLowerCase().includes(val.toLowerCase()));
            if (target) target.classList.add('active');
        }
        selectedLang = val;
        localStorage.setItem('cosy_practice_last_lang', selectedLang);
    }

    function selectCat(el) {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        if (el && el.classList) el.classList.add('active');

        let val = el ? el.dataset.value : 'vocab';
        if (!val) {
            // Fallback if dataset.value is missing but it's a pill
            const text = el ? el.textContent.toLowerCase() : '';
            if (text.includes('vocab')) val = 'vocab';
            else if (text.includes('gramm')) val = 'grammar';
            else if (text.includes('speak')) val = 'speaking';
            else if (text.includes('pronun')) val = 'pronunciation';
            else val = 'vocab';
        }
        selectedCat = val.toLowerCase();
        updateThemes();
    }

    function updateThemes() {
        const themeSelect = document.getElementById('theme-filter');
        if (!themeSelect) return;

        themeSelect.innerHTML = '<option value="all">All Themes</option>';
        if (window.COSY_THEME_TREE) {
            Object.keys(window.COSY_THEME_TREE).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t;
                // Try translation first, then fallback to label/id
                opt.textContent = (window.t && window.t('theme_' + t)) || t.replace(/_/g, ' ');
                themeSelect.appendChild(opt);
            });
        }
        updateSubThemes();
    }

    function updateSubThemes() {
        const themeSelect = document.getElementById('theme-filter');
        const subWrap = document.getElementById('subtheme-filter-wrap');
        const subSelect = document.getElementById('subtheme-filter');
        if (!themeSelect || !subWrap || !subSelect) return;

        const theme = themeSelect.value;
        if (theme === 'all' || !window.COSY_THEME_TREE[theme]) {
            subWrap.style.display = 'none';
            subSelect.value = '';
            return;
        }

        const subThemes = window.COSY_THEME_TREE[theme];
        const themeLabel = themeSelect.options[themeSelect.selectedIndex].textContent;

        subSelect.innerHTML = `<option value="">All ${themeLabel}</option>`;
        subThemes.forEach(st => {
            const opt = document.createElement('option');
            opt.value = st;
            opt.textContent = st.replace(/_/g, ' ');
            subSelect.appendChild(opt);
        });

        subWrap.style.display = 'block';
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

        // If prefers reduced motion, trigger instant state change
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const totalSpins = 5 + Math.random() * 5;
            wheelAngle += totalSpins * (Math.PI * 2) + Math.random() * (Math.PI * 2);
            drawWheel();
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
                }, 100);
            }
            return;
        }

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
        updateSubThemes,

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
            const subTheme = document.getElementById('subtheme-filter')?.value || '';
            const errorMsg = document.getElementById('setup-error-msg');
            const startBtn = (window.event && window.event.target) || document.querySelector('button[onclick*="startPractice"]');

            if (errorMsg) errorMsg.style.display = 'none';

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
                window.beginSession(selectedLang, selectedCat, level, theme, false, null, subTheme);
            }
        },

        /**
         * Direct URL Query Parameter Launcher & Quick Start.
         *
         * Supported URL query parameters:
         *   - lang: Language code (e.g. 'en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br')
         *   - cat: Category ('Vocabulary', 'Grammar', 'Speaking', 'Pronunciation' or 'vocab', 'grammar', etc.)
         *   - level: Level ID ('starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency', 'all') or short code ('A1'-'C2')
         *   - theme: Theme identifier (e.g. 'all', 'to_be', 'prepositions_place', 'contrast_pairs', 'food_drink', etc.)
         *   - subtheme (optional): Sub-theme identifier (e.g. 'pets', 'prepositions_place', etc.)
         *
         * Example URL:
         *   practice/index.html?lang=en&cat=Grammar&level=starter&theme=to_be
         *
         * @param {string} lang - Language code
         * @param {string} cat - Category name
         * @param {string} level - Level code or ID
         * @param {string} theme - Theme name
         * @param {string} [subTheme] - Optional sub-theme name
         */
        quickStart: async (lang, cat, level, theme, subTheme) => {
            const l = (lang || 'en').toLowerCase();
            const lp = document.querySelector(`.lang-pill[data-value="${l}"]`);
            if (lp) selectLang(lp);
            else selectLang(l);

            if (cat) {
                const cp = Array.from(document.querySelectorAll('.cat-pill')).find(p =>
                    p.dataset.value?.toLowerCase() === cat.toLowerCase() ||
                    p.textContent.toLowerCase().includes(cat.toLowerCase())
                );
                if (cp) selectCat(cp);
            }

            const levelSelect = document.getElementById('level-filter');
            if (levelSelect && level) {
                const normLvl = window.getLevelCode ? window.getLevelCode(level, 'id') : level;
                levelSelect.value = normLvl;
                updateThemes();
            }

            const themeSelect = document.getElementById('theme-filter');
            if (themeSelect && theme) {
                themeSelect.value = theme;
                updateSubThemes();
            }

            const subSelect = document.getElementById('subtheme-filter');
            if (subSelect && subTheme) {
                subSelect.value = subTheme;
            }

            const targetLevel = level || 'all';
            const targetTheme = theme || 'all';
            const targetSubTheme = subTheme || '';

            if (window.ensureDataLoaded) await window.ensureDataLoaded(lang, targetLevel);
            if (window.beginSession) window.beginSession(lang, selectedCat, targetLevel, targetTheme, false, null, targetSubTheme);
        },

        startDailyChallenge: async () => {
            const challenge = generateDailyChallenge();
            window.cosyPractice.quickStart(challenge.lang, challenge.cat, 'all', challenge.theme);
        },

        startMistakeReview() {
            const engine = window.cosyPracticeEngine;
            if (!engine || !engine.state.mistakes || engine.state.mistakes.length === 0) {
                const msg = "No mistakes saved yet: well done! Practice new themes to test your skills. 🌟";
                if (window.COSY && window.COSY.showToast) window.COSY.showToast(msg, false);
                else alert(msg);
                return;
            }
            const qs = engine.state.mistakes.map(m => ({
                type: 'type',
                q: `Review: "${m.definitions?.[0]?.text || m.translation || m.word}"`,
                item: m,
                ans: m.word,
                ruleHint: m.usage_hint || m.collocation || (m.preposition ? `Preposition: ${m.word} ${m.preposition}` : null)
            }));

            window.beginSession('multi', 'Remediation', 'mixed', 'all', false, qs.slice(0, 10));
        },

        startSRSReview(lang) {
            const engine = window.cosyPracticeEngine;
            if (!engine || !engine.getSRSDueItems) return alert("SRS engine unavailable.");
            const targetLang = lang || selectedLang || 'en';
            const dueSRS = engine.getSRSDueItems(targetLang);

            if (!dueSRS || dueSRS.length === 0) {
                const msg = "No SRS items due for review right now! Practice new themes to build your memory bank. 🧠";
                if (window.COSY && window.COSY.showToast) window.COSY.showToast(msg, false);
                else alert(msg);
                return;
            }

            const qs = dueSRS.map(srs => {
                const item = srs.item || { word: srs.word, level: srs.level, theme: srs.theme };
                return {
                    type: 'mc',
                    q: `🧠 SRS Memory Review: "${srs.word}" = ?`,
                    item: item,
                    ans: 0,
                    opts: [srs.word, 'Option B', 'Option C', 'Option D']
                };
            });

            window.beginSession(targetLang, 'SRS Review', 'mixed', 'all', false, qs.slice(0, 10));
        },

        // Session Navigation delegate to core engine
        nextQ: () => {
            if (window.nextQuestion) window.nextQuestion();
        },

        showSummary: () => {
            if (window.showSummary) window.showSummary();
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

    function renderThemeProgressTrackers() {
        const listEl = document.getElementById('progress-trackers-list');
        if (!listEl) return;

        // Pull stored mastery map or initialize empty
        let mastery = {};
        try {
            mastery = JSON.parse(localStorage.getItem('cosy_theme_mastery') || '{}');
        } catch (e) {
            mastery = {};
        }

        const themes = window.COSY_THEME_TREE ? Object.keys(window.COSY_THEME_TREE) : [
            'Psychology_&_Mind', 'Society_&_Politics', 'Influences_&_Biases',
            'Habits_&_Addiction', 'Food,_Drink_&_Health', 'Science_&_Technology',
            'Philosophy_&_Ethics', 'Art,_Culture_&_Entertainment',
            'Work,_Career_&_Education', 'Travel_&_Nature'
        ];

        listEl.innerHTML = themes.map(theme => {
            const progress = mastery[theme] || 0;
            const displayName = (window.t && window.t('theme_' + theme)) || theme.replace(/_/g, ' ');

            // Choose nice colors for progress indicators
            let progressColor = 'var(--teal)';
            if (progress < 30) progressColor = 'var(--coral)';
            else if (progress < 70) progressColor = 'var(--gold)';

            return `
                <div class="progress-tracker-row">
                    <div class="progress-tracker-info">
                        <span class="tracker-theme-name">${displayName}</span>
                        <span class="tracker-theme-val" style="color: ${progressColor}">${progress}%</span>
                    </div>
                    <div class="tracker-progress-bg">
                        <div class="tracker-progress-bar" style="width: ${progress}%; background: ${progressColor};"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function initSetupUI() {
        // Render progress trackers
        renderThemeProgressTrackers();

        // Populate Languages with persistence
        const storedLang = localStorage.getItem('cosy_practice_last_lang') || 'en';
        selectedLang = storedLang;

        const langContainer = document.getElementById('lang-pills');
        if (langContainer && window.COSY_LANGUAGES) {
            langContainer.innerHTML = window.COSY_LANGUAGES.map(l =>
                `<div class="lang-pill ${l.code === selectedLang ? 'active' : ''}" data-value="${l.code}">${l.flag} ${l.native}</div>`
            ).join('');

            langContainer.querySelectorAll('.lang-pill').forEach(p => {
                p.onclick = () => selectLang(p);
            });
        }

        // Populate Levels with persistence
        const storedLevel = localStorage.getItem('cosy_practice_last_level') || 'all';
        const levelSelect = document.getElementById('level-filter');
        if (levelSelect && window.COSY_LEVELS) {
            window.COSY_LEVELS.forEach(l => {
                const opt = document.createElement('option');
                opt.value = l.id;
                opt.textContent = l.name;
                opt.setAttribute('data-translate-key', l.id);
                if (l.id === storedLevel) {
                    opt.selected = true;
                }
                levelSelect.appendChild(opt);
            });

            levelSelect.addEventListener('change', (e) => {
                localStorage.setItem('cosy_practice_last_level', e.target.value);
            });
        }

        document.querySelectorAll('.cat-pill').forEach(p => p.addEventListener('click', () => selectCat(p)));
        document.getElementById('spin-btn')?.addEventListener('click', spinWheel);
        updateThemes();
        generateDailyChallenge();
    }

    // Expose progress rendering globally
    window.cosyRenderThemeProgressTrackers = renderThemeProgressTrackers;

    function isValidTheme(t) {
        if (!t || t === 'all') return true;
        const lower = t.toLowerCase().trim();
        const normHyphen = lower.replace(/_/g, '-');
        const normUnderscore = lower.replace(/-/g, '_');
        if (lower === 'to_be' || lower === 'to-be') return true;

        if (window.COSY_GRAMMAR_TOPICS) {
            const allGrammarSlugs = Object.values(window.COSY_GRAMMAR_TOPICS).flat().map(s => s.toLowerCase());
            if (allGrammarSlugs.includes(lower) || allGrammarSlugs.includes(normHyphen) || allGrammarSlugs.includes(normUnderscore)) return true;
        }

        if (window.COSY_THEME_TREE) {
            if (window.COSY_THEME_TREE[lower] || window.COSY_THEME_TREE[normUnderscore]) return true;
            if (Object.keys(window.COSY_THEME_TREE).some(k => k.toLowerCase() === lower || k.toLowerCase() === normUnderscore)) return true;
            const allSubthemes = Object.values(window.COSY_THEME_TREE).flat().map(s => s.toLowerCase());
            if (allSubthemes.includes(lower) || allSubthemes.includes(normUnderscore)) return true;
        }

        const themeSelect = document.getElementById('theme-filter');
        if (themeSelect && Array.from(themeSelect.options).some(opt => opt.value.toLowerCase() === lower || opt.value.toLowerCase() === normHyphen || opt.value.toLowerCase() === normUnderscore)) return true;

        const subSelect = document.getElementById('subtheme-filter');
        if (subSelect && Array.from(subSelect.options).some(opt => opt.value.toLowerCase() === lower || opt.value.toLowerCase() === normHyphen || opt.value.toLowerCase() === normUnderscore)) return true;

        const knownThemes = [
            'food', 'greetings', 'numbers', 'home', 'family', 'daily_life', 'phrases_idioms',
            'arts & culture', 'arts_culture', 'speaking', 'pronunciation', 'general',
            'prepositions_place', 'prepositions_time', 'prepositions_direction', 'dependent_prepositions',
            'contrast_pairs', 'ed_vs_ing_adjectives', 'comparative_vs_superlative',
            'tenses_aspect', 'conditionals_moods', 'cases_declensions', 'articles_gender', 'syntax_word_order'
        ];
        if (knownThemes.includes(lower) || knownThemes.includes(normUnderscore)) return true;

        return false;
    }

    function handleUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get('lang');
        const catParam = params.get('cat');
        const levelParam = params.get('level');
        const themeParam = params.get('theme');
        const subthemeParam = params.get('subtheme') || params.get('subTheme') || params.get('sub_theme');

        // Preserve current default behavior when no query params are present
        if (!langParam && !catParam && !levelParam && !themeParam && !subthemeParam) {
            const levelSel = document.getElementById('level-filter');
            if (levelSel) {
                const storedLevel = localStorage.getItem('cosy_practice_last_level') || 'all';
                levelSel.value = storedLevel;
                updateThemes();
            }
            return;
        }

        let isValid = true;

        if (langParam) {
            const normLang = langParam.toLowerCase().trim();
            const validLang = window.COSY_LANGUAGES && window.COSY_LANGUAGES.some(l =>
                l.code === normLang || l.name.toLowerCase() === normLang || l.native.toLowerCase() === normLang
            );
            if (!validLang) {
                console.warn('[Practice Hub] Unknown lang URL parameter:', langParam);
                isValid = false;
            }
        }

        if (catParam) {
            const normCat = catParam.toLowerCase().trim();
            const validCats = ['vocab', 'vocabulary', 'grammar', 'speaking', 'pronunciation'];
            if (!validCats.includes(normCat)) {
                console.warn('[Practice Hub] Unknown cat URL parameter:', catParam);
                isValid = false;
            }
        }

        if (levelParam) {
            const normLvl = levelParam.toLowerCase().trim();
            const validLevels = ['all', 'starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
            if (!validLevels.includes(normLvl) && (!window.COSY_LEVELS || !window.COSY_LEVELS.some(l => l.id === normLvl || l.short.toLowerCase() === normLvl))) {
                console.warn('[Practice Hub] Unknown level URL parameter:', levelParam);
                isValid = false;
            }
        }

        if (themeParam) {
            if (!isValidTheme(themeParam)) {
                console.warn('[Practice Hub] Unknown theme URL parameter:', themeParam);
                isValid = false;
            }
        }

        if (subthemeParam) {
            if (!isValidTheme(subthemeParam)) {
                console.warn('[Practice Hub] Unknown subtheme URL parameter:', subthemeParam);
                isValid = false;
            }
        }

        if (!isValid) {
            // Fall back gracefully to normal Practice Hub landing screen
            const levelSel = document.getElementById('level-filter');
            if (levelSel) {
                const storedLevel = localStorage.getItem('cosy_practice_last_level') || 'all';
                levelSel.value = storedLevel;
                updateThemes();
            }
            return;
        }

        // Direct auto-launch direct practice session if params present and valid
        const lang = langParam ? (window.getLangCode ? window.getLangCode(langParam) : langParam) : selectedLang;
        const cat = catParam || selectedCat;
        const level = levelParam ? (window.getLevelCode ? window.getLevelCode(levelParam, 'id') : levelParam) : 'all';
        const theme = themeParam || 'all';
        const subtheme = subthemeParam || '';

        window.cosyPractice.quickStart(lang, cat, level, theme, subtheme);
    }

    document.addEventListener('DOMContentLoaded', () => {
        initSetupUI();
        handleUrlParams();
    });
})();
