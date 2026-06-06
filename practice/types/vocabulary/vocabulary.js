/**
 * practice/types/vocabulary/vocabulary.js
 * Vocabulary data provider and task generator for practice sessions.
 */

(function() {
    'use strict';

    /* ══════════════════════════════════════
       QUESTION DATA (Static Fallbacks)
    ══════════════════════════════════════ */
    const QUESTIONS = {
        EN: {
            Vocabulary: [
                { type:'mc', q:'What does "sibling" mean?', opts:['A brother or sister','A parent','A cousin','A friend'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'Which word means the opposite of "ancient"?', opts:['Modern','Old','Historic','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"Ubiquitous" means extremely rare.', ans:false, level:'advanced', theme:'Daily Life' },
            ],
            Grammar: [
                { type:'mc', q:'Choose the correct sentence:', opts:['She don\'t like coffee.','She doesn\'t like coffee.','She not like coffee.','She isn\'t like coffee.'], ans:1, level:'starter', theme:'Tenses' },
                { type:'tf', q:'"I have been living here for 3 years" uses the present perfect continuous.', ans:true, level:'intermediate', theme:'Tenses' },
            ]
        }
    };

    function getQuestions(lang, cat, level, theme) {
        const pool = (QUESTIONS[lang] && QUESTIONS[lang][cat]) || QUESTIONS['EN']['Vocabulary'];
        const normalizedLevel = level !== 'all' ? (window.normalizeLevel ? window.normalizeLevel(level) : level) : 'all';

        return pool.filter(q => {
            if (!q.level) {
                console.warn(`Static question missing level field:`, q);
            }
            const qLevel = window.normalizeLevel ? window.normalizeLevel(q.level || 'A1') : (q.level || 'A1');
            const levelMatch = normalizedLevel === 'all' || qLevel === normalizedLevel;
            const themeMatch = theme === 'all' || q.theme === theme;
            return levelMatch && themeMatch;
        });
    }

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        if (window.COSY && window.COSY.loadLanguageData) {
            await window.COSY.loadLanguageData(lang, level);
        } else {
            console.error("Centralized loader COSY.loadLanguageData not found.");
        }
    }

    /* ══════════════════════════════════════
       TASK GENERATION
    ══════════════════════════════════════ */
    function beginSession(lang, catInput, level, theme, isChallenge, customQs) {
        const cat = catInput ? (catInput.toLowerCase() === 'vocabulary' ? 'vocab' : catInput.toLowerCase()) : 'vocab';

        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        const l = lang.toLowerCase();

        const normalizedLevel = level !== 'all' ? (window.normalizeLevel ? window.normalizeLevel(level) : level) : 'all';

        if (cat === 'vocab' || cat === 'grammar') {
            pool = window.gameUtils.getVocabPool(l, level, theme);

            if (window.phrasesData && window.phrasesData[l]) {
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    const phraseLevel = 'starter';
                    const normalizedPhraseLevel = window.normalizeLevel ? window.normalizeLevel(phraseLevel) : 'A1';
                    if (normalizedLevel === 'all' || normalizedPhraseLevel === normalizedLevel) {
                        pool.push({ word: p.phrase, level: phraseLevel, definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                    }
                });
            }
            if (cat === 'grammar') {
                const grammarSpecific = pool.filter(item => item.form === 'verb' || item.form === 'preposition' || item.form === 'conjunction');
                if (grammarSpecific.length > 5) pool = grammarSpecific;
            }
        } else if (cat === 'speaking') {
            const s = window.speakingData?.[l] || {};
            const speakingData = [
                ...(s.talkThatTalk || []),
                ...(s.debates || []),
                ...(s.opinions || []),
                ...(s.fluency || []),
                ...(s.quotes || [])
            ];
            speakingData.forEach(d => {
                if (d.t && !d.topic) d.topic = d.t;
                if (d.q && !d.topic) d.topic = d.q;
            });
            pool = speakingData.filter(d => {
                if (!d.level && normalizedLevel !== 'all') {
                    console.warn(`Speaking item missing level field:`, d);
                }
                const itemLevel = window.normalizeLevel ? window.normalizeLevel(d.level || 'A1') : (d.level || 'A1');
                const levelMatch = normalizedLevel === 'all' || itemLevel === normalizedLevel;
                const themeMatch = theme === 'all' || d.theme === theme || !d.theme;
                return levelMatch && themeMatch;
            });
        } else if (cat === 'pronunciation') {
            const currKey = `${l}_${level === 'starter' || level === 'all' ? 'a1' : (level === 'elementary' ? 'a2' : level)}`;
            const currData = window.curriculumData?.[currKey] || [];
            currData.forEach(unit => {
                (unit.lessons || []).forEach(lesson => {
                    if (lesson.pronunciation) {
                        lesson.pronunciation.forEach(p => {
                            if (theme === 'all' || p.point === theme) {
                                pool.push(...(p.examples || []).map(ex => ({ ...ex, theme: p.point, type: 'ls' })));
                                pool.push(...(p.alphabet || []).map(a => ({ word: a.l, ipa: a.ipa, theme: p.point, type: 'ls' })));
                            }
                        });
                    }
                });
            });
        }

        let qs = [];
        if (pool.length > 0) {
            qs = pool.map(item => {
                if (cat === 'vocab' || cat === 'grammar') {
                    let types = ['mc', 'tf', 'type', 'sc'];
                    let type = types[Math.floor(Math.random() * types.length)];

                    if (type === 'sc' && (!item.examples || item.examples.length === 0)) type = 'mc';
                    if (type === 'type' && !item.word) type = 'mc';

                    let qText, ans, opts = null;
                    const definition = item.definitions?.[0]?.text || "the correct meaning";

                    if (type === 'mc' || type === 'ls') {
                        qText = type === 'ls' ? 'Listen and select the correct word:' : `What does "${item.word}" mean?`;
                        ans = 0;
                        opts = [definition, 'Wrong option 1', 'Wrong option 2'];
                    } else if (type === 'tf') {
                        const isTrue = Math.random() > 0.5;
                        const displayDef = isTrue ? definition : "something else entirely";
                        qText = `"${item.word}" means "${displayDef}".`;
                        ans = isTrue;
                    } else if (type === 'sc') {
                        const ex = item.examples[Math.floor(Math.random() * item.examples.length)];
                        qText = `Arrange the words into a correct sentence:`;
                        ans = ex.text;
                    } else {
                        qText = `Type the word for: "${item.definitions?.[0]?.text || item.word}"`;
                        ans = item.word;
                    }

                    return { type, q: qText, item: item, ans, opts, level: item.level, theme: item.theme };
                } else if (cat === 'speaking') {
                    return { type: 'conv', q: item.topic || item.text || item.q, level: item.level, theme: item.theme };
                } else if (cat === 'pronunciation') {
                    const correctIpa = item.ipa;
                    const distractors = ['/a/', '/i/', '/u/', '/e/', '/o/'].filter(i => i !== correctIpa).sort(() => Math.random() - 0.5).slice(0, 2);
                    const opts = [correctIpa, ...distractors].sort(() => Math.random() - 0.5);
                    return { type: 'ls', q: 'Listen and select the correct IPA sound:', item: item, ans: opts.indexOf(correctIpa), opts: opts, theme: item.theme };
                }
                return item;
            });
        } else {
            qs = getQuestions(lang.toUpperCase(), cat, level, theme);
        }

        if (!qs.length) {
            if (window.COSY && window.COSY.showToast) {
                window.COSY.showToast("No exercises found for this selection. Try a different level or theme.", true);
            } else {
                alert("No exercises found for this selection. Try a different level or theme.");
            }
            return;
        }

        qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

        window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, qs);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
