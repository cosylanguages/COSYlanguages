/**
 * practice/types/listening/listening.js
 * Listening practice provider and task generator for practice sessions.
 */

(function() {
    'use strict';

    const LEVEL_MAP = {
        'starter': 'a1',
        'elementary': 'a2',
        'intermediate': 'b1',
        'upper_intermediate': 'b2',
        'advanced': 'c1',
        'proficiency': 'c2'
    };

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        if (window.COSY && window.COSY.loadLanguageData) {
            await window.COSY.loadLanguageData(lang, level);
        }

        if (window.COSY && window.COSY.loadCurriculum) {
            const l = (lang || 'en').toLowerCase();
            const lvl = (level || 'starter').toLowerCase();
            const lvlCode = LEVEL_MAP[lvl] || lvl;
            if (lvlCode !== 'all') {
                await window.COSY.loadCurriculum(l, lvlCode);
            } else {
                for (let lc of Object.values(LEVEL_MAP)) {
                    await window.COSY.loadCurriculum(l, lc);
                }
            }
        }
    }

    /* ══════════════════════════════════════
       TASK GENERATION
    ══════════════════════════════════════ */
    function buildListeningTask(item, pool) {
        const word = item.word || '...';
        const def = item.definitions?.[0]?.text || item.definition || item.translation || '';

        const forms = ['ls', 'type', 'conv'];
        const chosenForm = forms[Math.floor(Math.random() * forms.length)];

        if (chosenForm === 'type') {
            // Audio Dictation Typing
            return {
                form: 'type',
                q: `🔊 Listen and type the target word ("${def || '...'}")`,
                item: item,
                ans: word,
                level: item.level || 'all',
                theme: item.theme || 'Listening',
                sub_theme: item.sub_theme || null,
                ruleHint: def ? `Definition: ${def}` : null
            };
        } else if (chosenForm === 'conv') {
            // Speaking / Audio response prompt
            return {
                form: 'conv',
                q: `🗣️ Listen & Speak: Pronounce and explain "${word}" in a short sentence.`,
                item: item,
                level: item.level || 'all',
                theme: item.theme || 'Listening',
                sub_theme: item.sub_theme || null
            };
        } else {
            // Listening Selection (ls)
            const distractors = pool
                .filter(p => p.id !== item.id && p.word)
                .map(p => p.word)
                .filter(w => w.toLowerCase() !== word.toLowerCase())
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            while (distractors.length < 3) distractors.push('---');

            const opts = [word, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'ls',
                q: `🔊 Listen and select the matching word:`,
                item: item,
                opts: opts,
                ans: opts.indexOf(word),
                level: item.level || 'all',
                theme: item.theme || 'Listening',
                sub_theme: item.sub_theme || null,
                ruleHint: def ? `Definition: ${def}` : null
            };
        }
    }

    function beginSession(lang, category, level, theme, isChallenge, customQs, subTheme) {
        if (customQs && customQs.length) {
            window.cosyPracticeEngine.startSession(lang, 'Listening', level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        if (window.gameUtils) {
            pool = window.gameUtils.getVocabPool(lang, level, theme, subTheme || 'all');
        }

        if (!pool || pool.length === 0) {
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) errorMsg.style.display = 'block';
            else alert("No listening items found for this selection.");
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        const shuffledPool = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
        const tasks = shuffledPool.map(item => buildListeningTask(item, pool));

        window.cosyPracticeEngine.startSession(lang, 'Listening', level, theme, isChallenge, tasks);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
