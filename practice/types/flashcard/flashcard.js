/**
 * practice/types/flashcard/flashcard.js
 * Flashcard practice provider and task generator for practice sessions.
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
    function buildFlashcardTask(item, pool) {
        const def = item.definitions?.[0]?.text || item.definition || item.translation || item.word || '...';
        const exText = item.examples?.[0]?.text || item.definitions?.[0]?.examples?.[0]?.text || '';

        // Formulate flashcard task: interactive definition recall option
        const forms = ['mc', 'tf', 'type'];
        const chosenForm = forms[Math.floor(Math.random() * forms.length)];

        if (chosenForm === 'tf') {
            const isTrue = Math.random() > 0.5;
            let displayDef = def;
            if (!isTrue) {
                const otherItems = pool.filter(p => p.id !== item.id && (p.definitions?.[0]?.text || p.definition || p.translation));
                if (otherItems.length > 0) {
                    const randomOther = otherItems[Math.floor(Math.random() * otherItems.length)];
                    displayDef = randomOther.definitions?.[0]?.text || randomOther.definition || randomOther.translation;
                } else {
                    displayDef = '---';
                }
            }
            return {
                form: 'tf',
                q: `🎴 Flashcard: "${item.word}" = "${displayDef}"`,
                item: item,
                ans: isTrue,
                level: item.level || 'all',
                theme: item.theme || 'General',
                sub_theme: item.sub_theme || null,
                ruleHint: exText ? `Example: ${exText}` : null
            };
        } else if (chosenForm === 'type') {
            return {
                form: 'type',
                q: `🎴 Flashcard Recall: "${def}" = ?`,
                item: item,
                ans: item.word,
                level: item.level || 'all',
                theme: item.theme || 'General',
                sub_theme: item.sub_theme || null,
                ruleHint: exText ? `Example: ${exText}` : null
            };
        } else {
            // Multiple Choice
            const distractors = pool
                .filter(p => p.id !== item.id)
                .map(p => p.definitions?.[0]?.text || p.definition || p.translation)
                .filter(Boolean)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            while (distractors.length < 3) distractors.push('---');

            const opts = [def, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'mc',
                q: `🎴 Flashcard: "${item.word}" = ?`,
                item: item,
                opts: opts,
                ans: opts.indexOf(def),
                level: item.level || 'all',
                theme: item.theme || 'General',
                sub_theme: item.sub_theme || null,
                ruleHint: exText ? `Example: ${exText}` : null
            };
        }
    }

    function beginSession(lang, category, level, theme, isChallenge, customQs, subTheme) {
        if (customQs && customQs.length) {
            window.cosyPracticeEngine.startSession(lang, 'Flashcards', level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        if (window.gameUtils) {
            pool = window.gameUtils.getVocabPool(lang, level, theme, subTheme || 'all');
        }

        if (!pool || pool.length === 0) {
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) errorMsg.style.display = 'block';
            else alert("No flashcard items found for this selection.");
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        const shuffledPool = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
        const tasks = shuffledPool.map(item => buildFlashcardTask(item, pool));

        window.cosyPracticeEngine.startSession(lang, 'Flashcards', level, theme, isChallenge, tasks);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
