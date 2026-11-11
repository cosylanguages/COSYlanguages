/**
 * COSYlanguages Daily Strip Component Engine
 * File: js/daily-strip.js
 *
 * Integrated with COSYpractice (https://cosylanguages.github.io/COSYpractice/):
 * - Unified day streak (`cosy-streak`, `practice_streak`)
 * - Direct deep-link launchers to interactive practice modules
 * - Daily Challenge sync matching COSYpractice's 7-day schedule
 */

(function () {
    'use strict';

    const COSY_DATA_DAILY_BASE = 'https://cosylanguages.github.io/COSYdata/daily/';
    const COSY_PRACTICE_BASE = 'https://cosylanguages.github.io/COSYpractice/';

    const LANG_VOICE_MAP = {
        'en': 'en-US',
        'fr': 'fr-FR',
        'it': 'it-IT',
        'ru': 'ru-RU',
        'el': 'el-GR',
        'es': 'es-ES',
        'de': 'de-DE',
        'pt': 'pt-PT',
        'hy': 'hy-AM',
        'ka': 'ka-GE',
        'tt': 'tt',
        'ba': 'ba',
        'br': 'br',
        'cv': 'cv'
    };

    const TABS_CONFIG = [
        { id: 'speaking', label: 'Speaking Prompt', icon: '🗣️' },
        { id: 'writing', label: 'Writing Prompt', icon: '✍️' },
        { id: 'idiom', label: 'Idiom of the Day', icon: '💬' },
        { id: 'fact', label: 'Fun Fact', icon: '💡' }
    ];

    // COSYpractice 7-day rotating schedule mapping
    const DAILY_SCHEDULE = {
        0: { cat: 'speaking', label: 'Speaking Fluency', icon: '🗣️', theme: 'speaking' },
        1: { cat: 'writing', label: 'Writing & Expression', icon: '✍️', theme: 'writing' },
        2: { cat: 'grammar', label: 'Grammar Accuracy', icon: '📐', theme: 'all' },
        3: { cat: 'speaking', label: 'Speaking Conversation', icon: '🗣️', theme: 'speaking' },
        4: { cat: 'writing', label: 'Writing & Opinion', icon: '✍️', theme: 'writing' },
        5: { cat: 'vocabulary', label: 'Vocabulary Expansion', icon: '📖', theme: 'all' },
        6: { cat: 'speaking', label: 'Weekend Speaking Club', icon: '🗣️', theme: 'speaking' }
    };

    function getDayOfYear() {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
        return Math.floor(diff / 86400000);
    }

    function getTodayKey() {
        const d = new Date();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${month}-${day}`;
    }

    function getYesterdayKey() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${month}-${day}`;
    }

    function getTodaySchedule() {
        const dayOfWeek = new Date().getDay();
        return DAILY_SCHEDULE[dayOfWeek] || DAILY_SCHEDULE[0];
    }

    function buildPracticeUrl(lang, cat, level, theme) {
        const url = new URL(COSY_PRACTICE_BASE);
        if (lang) url.searchParams.set('lang', lang.toLowerCase());
        if (cat) url.searchParams.set('cat', cat);

        // Normalize level for COSYpractice URL
        if (level && level !== 'all') {
            let lvl = level.toLowerCase();
            if (lvl === 'a0-a1' || lvl === 'starter') lvl = 'a1';
            else if (lvl === 'a2' || lvl === 'elementary') lvl = 'a2';
            else if (lvl === 'b1-b2' || lvl === 'intermediate') lvl = 'b1';
            else if (lvl === 'c1-c2' || lvl === 'advanced') lvl = 'c1';
            url.searchParams.set('level', lvl);
        }

        if (theme && theme !== 'all') {
            url.searchParams.set('theme', theme);
        }
        return url.toString();
    }

    function getUnifiedStreak() {
        const s1 = parseInt(localStorage.getItem('cosy-streak') || '0', 10);
        const s2 = parseInt(localStorage.getItem('practice_streak') || '0', 10);
        return Math.max(s1, s2, 0);
    }

    function getUnifiedPoints() {
        return parseInt(localStorage.getItem('cosy_total_points') || '0', 10);
    }

    function isPracticeDoneToday() {
        const todayStr = getTodayKey();
        const lastPractice = localStorage.getItem('cosy-last-practice');
        const dcLast = localStorage.getItem('dc_last_completed');
        return lastPractice === todayStr || dcLast === todayStr;
    }

    async function fetchCategoryData(lang, category) {
        const cacheKey = `cosy_daily_${lang}_${category}`;
        try {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch (e) {
            // Ignore sessionStorage access errors
        }

        const remoteCategory = category === 'fact' ? 'facts' : (category === 'idiom' ? 'idioms' : category);
        const url = `${COSY_DATA_DAILY_BASE}${lang}/${remoteCategory}.json`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                try {
                    sessionStorage.setItem(cacheKey, JSON.stringify(data));
                } catch (e) {
                    // Ignore storage quota errors
                }
                return data;
            }
        } catch (err) {
            // Fallback handled downstream
        }
        return null;
    }

    // ---- Dictionary-backed calendar (COSYdata/daily/<lang>/calendar/<slot>/YYYY-MM.json) ----
    const CALENDAR_LEVELS = ['A2', 'B1', 'B2', 'C1', 'C2'];

    // Calendar levels to try for a strip level band, most wanted first. Bands that span two
    // levels alternate by day so both get exposure. Idioms start at A2, so A0-A1 maps to A2.
    function calendarLevelPreference(selectedLevel, dayOfYear) {
        const odd = dayOfYear % 2 === 1;
        if (selectedLevel === 'b1-b2') return odd ? ['B2', 'B1'] : ['B1', 'B2'];
        if (selectedLevel === 'c1-c2') return odd ? ['C2', 'C1'] : ['C1', 'C2'];
        return ['A2'];
    }

    // Choose one level's card from a calendar day; falls back to the nearest level the language has.
    function pickCalendarCard(day, selectedLevel, dayOfYear) {
        if (!day || typeof day !== 'object') return null;
        const available = Object.keys(day).filter(l => day[l] && day[l].word);
        if (!available.length) return null;
        const prefs = calendarLevelPreference(selectedLevel, dayOfYear);
        const hit = prefs.find(l => available.includes(l));
        if (hit) return { level: hit, card: day[hit] };
        const want = CALENDAR_LEVELS.indexOf(prefs[0]);
        available.sort((a, b) => Math.abs(CALENDAR_LEVELS.indexOf(a) - want) - Math.abs(CALENDAR_LEVELS.indexOf(b) - want));
        return { level: available[0], card: day[available[0]] };
    }

    // Returns the day object for dateKey, or null when the language/month has no calendar.
    // A missing calendar is remembered for the session so we do not re-request a 404.
    async function fetchCalendarDay(lang, slot, dateKey) {
        const month = dateKey.slice(0, 7);
        const cacheKey = `cosy_daily_cal_${lang}_${slot}_${month}`;
        let cal = null;
        try {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) cal = JSON.parse(cached);
        } catch (e) {
            // Ignore sessionStorage access/parse errors
        }
        if (!cal) {
            try {
                const res = await fetch(`${COSY_DATA_DAILY_BASE}${lang}/calendar/${slot}/${month}.json`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                cal = await res.json();
            } catch (err) {
                cal = { missing: true };
            }
            try {
                sessionStorage.setItem(cacheKey, JSON.stringify(cal));
            } catch (e) {
                // Ignore storage quota errors
            }
        }
        return (cal && cal.days && cal.days[dateKey]) || null;
    }

    function calendarCardToItem(pick) {
        const c = pick.card;
        return {
            idiom: c.word,
            definition: c.definition,
            example: c.example,
            literal_meaning: c.literal_meaning,
            level: pick.level
        };
    }

    function getLocalFallback(lang, category, selectedLevel) {
        if (category === 'fact') {
            const list = (window.COSY_DAILY_FACTS && window.COSY_DAILY_FACTS[lang])
                ? window.COSY_DAILY_FACTS[lang]
                : ["Learning a new language expands memory and cognitive flexibility."];
            return list;
        }
        if (category === 'idiom') {
            const list = (window.COSY_DAILY_IDIOMS && window.COSY_DAILY_IDIOMS[lang])
                ? window.COSY_DAILY_IDIOMS[lang]
                : [{ idiom: "Break a leg", meaning: "Good luck!" }];
            return list;
        }
        if (category === 'speaking') {
            const speakingMap = (window.COSY_DAILY_SPEAKING && window.COSY_DAILY_SPEAKING[lang]) || {};
            const lvl = selectedLevel || 'a0-a1';
            return speakingMap[lvl] || speakingMap['a0-a1'] || [];
        }
        if (category === 'writing') {
            const writingMap = (window.COSY_DAILY_WRITING && window.COSY_DAILY_WRITING[lang]) || {};
            const lvl = selectedLevel || 'a0-a1';
            return writingMap[lvl] || writingMap['a0-a1'] || [];
        }
        return [];
    }

    function parseDailyItem(item) {
        if (!item) return { text: 'No content available today.', translation: '', meta: '' };
        if (typeof item === 'string') {
            return { text: item, translation: '', meta: '' };
        }
        const text = item.prompt || item.fact || item.idiom || item.text || item.question || item.phrase || '';
        const translation = item.translation || item.meaning || item.explanation || item.ru || item.en || '';
        let meta = '';
        if (item.level) meta += `CEFR ${item.level.toUpperCase()}`;
        if (item.literal_meaning) {
            if (meta) meta += ' • ';
            meta += `Literally: "${item.literal_meaning}"`;
        }
        if (item.example) {
            if (meta) meta += ' • ';
            meta += `Example: "${item.example}"`;
        }
        return { text, translation, definition: item.definition || '', meta };
    }

    class DailyStripComponent {
        constructor(element) {
            this.container = element;
            this.lang = this.container.getAttribute('data-lang') || localStorage.getItem('cosy.pinnedLang') || 'en';
            this.activeTab = 'speaking';
            this.selectedLevel = localStorage.getItem('cosy.dailyLevel') || 'a0-a1';
            this.categoryData = {};
            this.uniqueId = 'ds_' + Math.random().toString(36).substring(2, 9);
            this.init();
        }

        async init() {
            this.renderShell();
            this.bindEvents();
            await this.loadAllCategories();
            this.renderContent();
            this.updateStreakUI();
        }

        renderShell() {
            const currentStreak = getUnifiedStreak();
            const isDoneToday = isPracticeDoneToday();
            const todaySchedule = getTodaySchedule();
            const challengeUrl = `${COSY_PRACTICE_BASE}#daily-challenge`;

            this.container.classList.add('daily-strip-container');
            this.container.innerHTML = `
                <div class="daily-strip-header">
                    <div class="daily-strip-title-wrap">
                        <span class="daily-strip-title-icon">🌟</span>
                        <h2 class="daily-strip-title">Daily Practice Strip</h2>
                        <span class="daily-strip-lang-badge">${this.lang.toUpperCase()}</span>
                    </div>
                    <div class="daily-strip-header-actions">
                        <a href="${challengeUrl}" class="daily-strip-challenge-pill" title="COSYpractice Daily Challenge: ${todaySchedule.label}">
                            <span class="daily-strip-challenge-icon">${todaySchedule.icon}</span>
                            <span class="daily-strip-challenge-text">Today: <strong>${todaySchedule.label}</strong></span>
                        </a>
                        <div class="daily-strip-streak" title="Your current practice streak across COSYpractice and COSYlanguages">
                            🔥 <span class="daily-strip-streak-count">${currentStreak}</span> day streak
                        </div>
                        <button type="button" class="daily-strip-done-btn ${isDoneToday ? 'completed' : ''}" aria-label="Mark daily practice done">
                            ${isDoneToday ? '✓ Done today' : 'Mark done today'}
                        </button>
                    </div>
                </div>

                <div class="daily-strip-tabs" role="tablist" aria-label="Daily Dose Categories">
                    ${TABS_CONFIG.map((tab) => `
                        <button type="button"
                                class="daily-strip-tab"
                                id="${this.uniqueId}_tab_${tab.id}"
                                role="tab"
                                aria-selected="${tab.id === this.activeTab ? 'true' : 'false'}"
                                aria-controls="${this.uniqueId}_panel_${tab.id}"
                                tabindex="${tab.id === this.activeTab ? '0' : '-1'}"
                                data-tab="${tab.id}">
                            <span>${tab.icon}</span> ${tab.label}
                        </button>
                    `).join('')}
                </div>

                <div class="daily-strip-panels">
                    ${TABS_CONFIG.map((tab) => `
                        <div id="${this.uniqueId}_panel_${tab.id}"
                             class="daily-strip-panel"
                             role="tabpanel"
                             aria-labelledby="${this.uniqueId}_tab_${tab.id}"
                             ${tab.id !== this.activeTab ? 'hidden' : ''}>
                            <div class="daily-strip-content-main">
                                <p class="daily-strip-prompt">Loading daily content...</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        bindEvents() {
            // Tab click & keyboard events
            const tabsList = this.container.querySelector('.daily-strip-tabs');
            tabsList.addEventListener('click', (e) => {
                const btn = e.target.closest('.daily-strip-tab');
                if (btn) {
                    this.switchTab(btn.getAttribute('data-tab'));
                }
            });

            tabsList.addEventListener('keydown', (e) => {
                const tabs = Array.from(tabsList.querySelectorAll('.daily-strip-tab'));
                const currentIndex = tabs.findIndex(t => t.getAttribute('data-tab') === this.activeTab);
                let targetIndex = -1;

                if (e.key === 'ArrowRight') {
                    targetIndex = (currentIndex + 1) % tabs.length;
                } else if (e.key === 'ArrowLeft') {
                    targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                } else if (e.key === 'Home') {
                    targetIndex = 0;
                } else if (e.key === 'End') {
                    targetIndex = tabs.length - 1;
                }

                if (targetIndex !== -1) {
                    e.preventDefault();
                    const targetTab = tabs[targetIndex];
                    this.switchTab(targetTab.getAttribute('data-tab'));
                    targetTab.focus();
                }
            });

            // "Mark done today" button
            const doneBtn = this.container.querySelector('.daily-strip-done-btn');
            doneBtn.addEventListener('click', () => {
                this.handleMarkDone();
            });

            // Listen for cross-component storage or streak updates
            const onStreakUpdated = () => this.updateStreakUI();
            window.addEventListener('cosyStreakUpdated', onStreakUpdated);
            window.addEventListener('storage', (e) => {
                if (e.key === 'cosy-streak' || e.key === 'practice_streak' || e.key === 'cosy-last-practice' || e.key === 'dc_last_completed') {
                    this.updateStreakUI();
                }
            });

            // Listen for global language change
            window.addEventListener('cosy:langchange', (e) => {
                if (!this.container.getAttribute('data-lang')) {
                    const newLang = (e.detail && e.detail.lang) || localStorage.getItem('cosy.pinnedLang') || 'en';
                    if (newLang !== this.lang) {
                        this.lang = newLang;
                        this.reloadForLang();
                    }
                }
            });
        }

        switchTab(tabId) {
            if (this.activeTab === tabId) return;
            this.activeTab = tabId;

            TABS_CONFIG.forEach(tab => {
                const tabBtn = this.container.querySelector(`#${this.uniqueId}_tab_${tab.id}`);
                const panel = this.container.querySelector(`#${this.uniqueId}_panel_${tab.id}`);
                const isActive = tab.id === tabId;

                if (tabBtn) {
                    tabBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
                    tabBtn.setAttribute('tabindex', isActive ? '0' : '-1');
                }
                if (panel) {
                    if (isActive) {
                        panel.removeAttribute('hidden');
                    } else {
                        panel.setAttribute('hidden', '');
                    }
                }
            });
        }

        async loadAllCategories() {
            const dayIdx = getDayOfYear();
            for (const config of TABS_CONFIG) {
                if (config.id === 'idiom') {
                    // Dictionary-backed idiom of the day; falls through to the legacy lists when absent.
                    const day = await fetchCalendarDay(this.lang, 'idiom', getTodayKey());
                    const pick = pickCalendarCard(day, this.selectedLevel, dayIdx);
                    if (pick) {
                        this.categoryData[config.id] = parseDailyItem(calendarCardToItem(pick));
                        continue;
                    }
                }
                let list = getLocalFallback(this.lang, config.id, this.selectedLevel);
                if (!list || list.length === 0) {
                    list = await fetchCategoryData(this.lang, config.id);
                }
                const rawItem = (list && list.length > 0) ? list[dayIdx % list.length] : null;
                this.categoryData[config.id] = parseDailyItem(rawItem);
            }
        }

        getHubPracticeLink(tabId) {
            let cat = 'vocab';
            let theme = 'all';

            if (tabId === 'speaking') {
                cat = 'speaking';
            } else if (tabId === 'writing') {
                cat = 'grammar';
            } else if (tabId === 'idiom') {
                cat = 'vocab';
                theme = 'phrases_idioms';
            } else if (tabId === 'fact') {
                cat = 'vocab';
            }

            return buildPracticeUrl(this.lang, cat, this.selectedLevel, theme);
        }

        renderContent() {
            TABS_CONFIG.forEach(tab => {
                const panel = this.container.querySelector(`#${this.uniqueId}_panel_${tab.id}`);
                if (!panel) return;

                const item = this.categoryData[tab.id] || { text: 'Content unavailable.', translation: '', meta: '' };
                const hasTranslation = Boolean(item.translation);
                const hubUrl = this.getHubPracticeLink(tab.id);

                const showLevelBar = (tab.id === 'speaking' || tab.id === 'writing');
                const levelBarHTML = showLevelBar ? `
                    <div class="daily-strip-level-bar" role="group" aria-label="CEFR Level Filter">
                        <span class="daily-strip-level-label">Level:</span>
                        <button type="button" class="daily-strip-level-btn ${this.selectedLevel === 'a0-a1' ? 'active' : ''}" data-level="a0-a1">A0-A1</button>
                        <button type="button" class="daily-strip-level-btn ${this.selectedLevel === 'a2' ? 'active' : ''}" data-level="a2">A2</button>
                        <button type="button" class="daily-strip-level-btn ${this.selectedLevel === 'b1-b2' ? 'active' : ''}" data-level="b1-b2">B1-B2</button>
                        <button type="button" class="daily-strip-level-btn ${this.selectedLevel === 'c1-c2' ? 'active' : ''}" data-level="c1-c2">C1-C2</button>
                    </div>
                ` : '';

                panel.innerHTML = `
                    ${levelBarHTML}
                    <div class="daily-strip-content-main">
                        <p class="daily-strip-prompt">${this.escapeHTML(item.text)}</p>
                        ${item.definition ? `<div class="daily-strip-definition">${this.escapeHTML(item.definition)}</div>` : ''}
                        ${hasTranslation ? `<div class="daily-strip-translation" id="${this.uniqueId}_trans_${tab.id}" hidden>${this.escapeHTML(item.translation)}</div>` : ''}
                        ${item.meta ? `<div class="daily-strip-meta">${this.escapeHTML(item.meta)}</div>` : ''}
                    </div>
                    <div class="daily-strip-footer">
                        <div class="daily-strip-actions-left">
                            <button type="button" class="daily-strip-audio-btn" aria-label="Listen to audio pronunciation">
                                🔊 Listen
                            </button>
                            ${hasTranslation ? `
                                <button type="button" class="daily-strip-toggle-translation-btn" data-target="${this.uniqueId}_trans_${tab.id}">
                                    🌐 Show Translation
                                </button>
                            ` : ''}
                        </div>
                        <div class="daily-strip-actions-right">
                            <a href="${hubUrl}" class="daily-strip-practice-link" title="Open targeted exercises on COSYpractice Hub">
                                🚀 Practice in Hub <span class="daily-strip-ext-icon">↗</span>
                            </a>
                        </div>
                    </div>
                `;

                // Bind level buttons
                if (showLevelBar) {
                    panel.querySelectorAll('.daily-strip-level-btn').forEach(btn => {
                        btn.addEventListener('click', async (e) => {
                            const newLevel = e.target.getAttribute('data-level');
                            if (newLevel && newLevel !== this.selectedLevel) {
                                this.selectedLevel = newLevel;
                                try {
                                    localStorage.setItem('cosy.dailyLevel', newLevel);
                                } catch (err) {}
                                await this.loadAllCategories();
                                this.renderContent();
                            }
                        });
                    });
                }

                // Bind audio button
                const audioBtn = panel.querySelector('.daily-strip-audio-btn');
                if (audioBtn) {
                    audioBtn.addEventListener('click', () => {
                        this.speakText(item.text);
                    });
                }

                // Bind translation toggle button
                const transBtn = panel.querySelector('.daily-strip-toggle-translation-btn');
                if (transBtn) {
                    transBtn.addEventListener('click', () => {
                        const transDiv = panel.querySelector(`#${this.uniqueId}_trans_${tab.id}`);
                        if (transDiv) {
                            const isHidden = transDiv.hasAttribute('hidden');
                            if (isHidden) {
                                transDiv.removeAttribute('hidden');
                                transBtn.textContent = '🌐 Hide Translation';
                            } else {
                                transDiv.setAttribute('hidden', '');
                                transBtn.textContent = '🌐 Show Translation';
                            }
                        }
                    });
                }
            });
        }

        speakText(text) {
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = LANG_VOICE_MAP[this.lang] || 'en-US';
            window.speechSynthesis.speak(utterance);
        }

        handleMarkDone() {
            const todayStr = getTodayKey();
            const yesterdayStr = getYesterdayKey();
            const lastPractice = localStorage.getItem('cosy-last-practice') || localStorage.getItem('dc_last_completed');
            let streak = getUnifiedStreak();

            if (lastPractice !== todayStr) {
                if (lastPractice === yesterdayStr) {
                    streak += 1;
                } else {
                    streak = 1;
                }

                // Synchronize streak across COSYlanguages and COSYpractice keys
                localStorage.setItem('cosy-streak', String(streak));
                localStorage.setItem('practice_streak', String(streak));
                localStorage.setItem('cosy-last-practice', todayStr);

                // Dispatch unified events
                const detail = { streak, lastCompleted: todayStr };
                document.dispatchEvent(new CustomEvent('cosyStreakUpdated', { detail }));
            }

            this.updateStreakUI();
        }

        updateStreakUI() {
            const currentStreak = getUnifiedStreak();
            const isDoneToday = isPracticeDoneToday();

            const streakCountEl = this.container.querySelector('.daily-strip-streak-count');
            if (streakCountEl) streakCountEl.textContent = currentStreak;

            const doneBtn = this.container.querySelector('.daily-strip-done-btn');
            if (doneBtn) {
                if (isDoneToday) {
                    doneBtn.classList.add('completed');
                    doneBtn.textContent = '✓ Done today';
                } else {
                    doneBtn.classList.remove('completed');
                    doneBtn.textContent = 'Mark done today';
                }
            }

            const challengePill = this.container.querySelector('.daily-strip-challenge-pill');
            if (challengePill) {
                const todaySchedule = getTodaySchedule();
                const dcLast = localStorage.getItem('dc_last_completed');
                const todayStr = getTodayKey();
                if (dcLast === todayStr) {
                    challengePill.classList.add('completed');
                    challengePill.innerHTML = `
                        <span class="daily-strip-challenge-icon">✓</span>
                        <span class="daily-strip-challenge-text">Today: <strong>${todaySchedule.label}</strong> completed</span>
                    `;
                }
            }
        }

        async reloadForLang() {
            const langBadge = this.container.querySelector('.daily-strip-lang-badge');
            if (langBadge) langBadge.textContent = this.lang.toUpperCase();
            await this.loadAllCategories();
            this.renderContent();
        }

        escapeHTML(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }
    }

    function initAllDailyStrips() {
        document.querySelectorAll('[data-daily-strip]').forEach(el => {
            if (!el.__dailyStripInstance) {
                el.__dailyStripInstance = new DailyStripComponent(el);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllDailyStrips);
    } else {
        initAllDailyStrips();
    }

    // Expose helpers & component for modular testing and programmatic usage
    window.COSY_DailyStrip = DailyStripComponent;
    window.COSY_DailyStrip_Helpers = {
        buildPracticeUrl,
        getUnifiedStreak,
        getUnifiedPoints,
        isPracticeDoneToday,
        getTodaySchedule,
        getTodayKey,
        getYesterdayKey,
        calendarLevelPreference,
        pickCalendarCard,
        fetchCalendarDay,
        parseDailyItem,
        DAILY_SCHEDULE
    };
})();
