/**
 * practice/types/reading/reading.js
 * Reading practice provider and task generator for practice sessions.
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
    function buildReadingTask(item, pool) {
        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
        const exText = examplesArr[0]?.text || '';
        const word = item.word || '...';
        const def = item.definitions?.[0]?.text || item.definition || item.translation || '';

        const forms = [];
        if (exText && word) forms.push('cloze', 'sc');
        forms.push('mc');

        const chosenForm = forms[Math.floor(Math.random() * forms.length)];

        if (chosenForm === 'cloze' && exText && word) {
            const regex = new RegExp(word, 'gi');
            const sentenceWithBlank = exText.replace(regex, '[ ___ ]');
            const distractors = pool
                .filter(p => p.id !== item.id && p.word)
                .map(p => p.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2);
            while (distractors.length < 2) distractors.push('---');

            const opts = [word, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'cloze',
                q: `📖 Reading Cloze: Fill in the missing context word:\n"${sentenceWithBlank}"`,
                item: item,
                opts: opts,
                ans: opts.indexOf(word),
                level: item.level || 'all',
                theme: item.theme || 'Reading',
                sub_theme: item.sub_theme || null,
                ruleHint: def ? `Definition: ${def}` : null
            };
        } else if (chosenForm === 'sc' && exText) {
            return {
                form: 'sc',
                q: `🧩 Unscramble sentence context (${word}):`,
                item: item,
                ans: exText,
                level: item.level || 'all',
                theme: item.theme || 'Reading',
                sub_theme: item.sub_theme || null,
                ruleHint: def ? `Meaning: ${def}` : null
            };
        } else {
            // Multiple Choice Context Reading
            const target = def || word;
            const distractors = pool
                .filter(p => p.id !== item.id)
                .map(p => p.definitions?.[0]?.text || p.definition || p.translation)
                .filter(Boolean)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            while (distractors.length < 3) distractors.push('---');

            const opts = [target, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'mc',
                q: `📖 Reading Comprehension: What does "${word}" mean in text?`,
                item: item,
                opts: opts,
                ans: opts.indexOf(target),
                level: item.level || 'all',
                theme: item.theme || 'Reading',
                sub_theme: item.sub_theme || null,
                ruleHint: exText ? `Sentence context: "${exText}"` : null
            };
        }
    }

    function beginSession(lang, category, level, theme, isChallenge, customQs, subTheme) {
        if (customQs && customQs.length) {
            window.cosyPracticeEngine.startSession(lang, 'Reading', level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        if (window.gameUtils) {
            pool = window.gameUtils.getVocabPool(lang, level, theme, subTheme || 'all');
        }

        if (!pool || pool.length === 0) {
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) errorMsg.style.display = 'block';
            else alert("No reading items found for this selection.");
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        const shuffledPool = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
        const tasks = shuffledPool.map(item => buildReadingTask(item, pool));

        window.cosyPracticeEngine.startSession(lang, 'Reading', level, theme, isChallenge, tasks);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
