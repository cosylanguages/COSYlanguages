/**
 * practice/types/grammar/grammar.js
 * Grammar practice provider and task generator for practice sessions.
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
    function buildGrammarTask(item, pool) {
        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
        const exText = examplesArr[0]?.text || '';

        // Randomly choose task type: cloze, sc, or mc
        const choices = [];
        if (exText && item.word) choices.push('cloze', 'sc');
        choices.push('mc');

        const chosenType = choices[Math.floor(Math.random() * choices.length)];

        if (chosenType === 'cloze' && exText && item.word) {
            const regex = new RegExp(item.word, 'gi');
            const sentenceWithBlank = exText.replace(regex, '[ ___ ]');
            const distractors = pool
                .filter(p => p.id !== item.id && p.word)
                .map(p => p.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2);
            while (distractors.length < 2) distractors.push('---');

            const opts = [item.word, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'cloze',
                q: `Fill in the blank: ${sentenceWithBlank}`,
                item: item,
                opts: opts,
                ans: opts.indexOf(item.word),
                level: item.level || 'all',
                theme: item.theme || 'Grammar',
                sub_theme: item.sub_theme || null,
                ruleHint: item.usage_hint || item.collocation || (item.preposition ? `Preposition: ${item.word} ${item.preposition}` : null)
            };
        } else if (chosenType === 'sc' && exText && item.word) {
            return {
                form: 'sc',
                q: `🧩 Sentence Scramble (${item.word})`,
                item: item,
                ans: exText,
                level: item.level || 'all',
                theme: item.theme || 'Grammar',
                sub_theme: item.sub_theme || null,
                ruleHint: item.usage_hint || item.collocation || null
            };
        } else {
            // Multiple Choice Usage / Preposition / Meaning
            const def = item.definitions?.[0]?.text || item.definition || item.translation || item.word;
            const distractors = pool
                .filter(p => p.id !== item.id)
                .map(p => p.definitions?.[0]?.text || p.definition || p.translation || p.word)
                .filter(Boolean)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            while (distractors.length < 3) distractors.push('---');

            const opts = [def, ...distractors].sort(() => Math.random() - 0.5);
            return {
                form: 'mc',
                q: `⚙️ Grammar & Usage: "${item.word}" = ?`,
                item: item,
                opts: opts,
                ans: opts.indexOf(def),
                level: item.level || 'all',
                theme: item.theme || 'Grammar',
                sub_theme: item.sub_theme || null,
                ruleHint: item.usage_hint || item.collocation || (item.preposition ? `Preposition: ${item.word} ${item.preposition}` : null)
            };
        }
    }

    function beginSession(lang, category, level, theme, isChallenge, customQs, subTheme) {
        if (customQs && customQs.length) {
            window.cosyPracticeEngine.startSession(lang, 'Grammar', level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        if (window.gameUtils) {
            pool = window.gameUtils.getVocabPool(lang, level, theme, subTheme || 'all');
        }

        if (!pool || pool.length === 0) {
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) errorMsg.style.display = 'block';
            else alert("No grammar items found for this selection.");
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        const shuffledPool = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
        const tasks = shuffledPool.map(item => buildGrammarTask(item, pool));

        window.cosyPracticeEngine.startSession(lang, 'Grammar', level, theme, isChallenge, tasks);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
