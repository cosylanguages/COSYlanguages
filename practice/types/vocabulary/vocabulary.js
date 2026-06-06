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

    function getQuestions(lang, cat, level, theme, subTheme) {
        const pool = (QUESTIONS[lang] && QUESTIONS[lang][cat]) || QUESTIONS['EN']['Vocabulary'];
        if (window.gameUtils && window.gameUtils.filterVocabulary) {
            return window.gameUtils.filterVocabulary(pool, { lang, level, theme, subTheme, category: cat });
        }
        const norm = v => v.toLowerCase().replace(/-/g, '_');
        const normalizedLevel = level !== 'all' ? norm(level) : 'all';

        return pool.filter(q => {
            if (!q.level) {
                console.warn(`Static question missing level field:`, q);
            }
            const qLevel = norm(q.level || 'starter');
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
    function beginSession(lang, catInput, level, theme, isChallenge, customQs, subTheme) {
        const cat = catInput || 'Vocabulary';

        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        const l = lang.toLowerCase();

        const norm = v => v.toLowerCase().replace(/-/g, '_');
        const normalizedLevel = level !== 'all' ? norm(level) : 'all';

        if (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar') {
            const uiCat = (cat === 'vocab' || cat === 'Vocabulary') ? 'Vocabulary' : 'Grammar';
            pool = window.gameUtils.getVocabPool(l, level, theme, subTheme || 'all');

            if (window.phrasesData && window.phrasesData[l]) {
                const phrases = [];
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    phrases.push({ word: p.phrase, level: 'starter', definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                });
                pool.push(...window.gameUtils.filterVocabulary(phrases, { lang, level, theme, subTheme, category: uiCat }));
            }
        } else if (cat === 'Speaking' || cat === 'speaking') {
            const s = window.speakingData?.[l] || {};
            const speakingData = [
                ...(s.talkThatTalk || []),
                ...(s.debates || []),
                ...(s.opinions || []),
                ...(s.fluency || []),
                ...(s.quotes || [])
            ];
            const processedSpeaking = speakingData.map(d => {
                const item = { ...d };
                if (item.t && !item.topic) item.topic = item.t;
                if (item.q && !item.topic) item.topic = item.q;
                return {
                    ...item,
                    language: item.language || l,
                    level: item.level || normalizedLevel,
                    form: 'speaking'
                };
            });

            pool = window.gameUtils.filterVocabulary(processedSpeaking, { lang: l, level, theme, subTheme, category: 'Speaking' });
        } else if (cat === 'Pronunciation' || cat === 'pronunciation') {
            const currKey = `${l}_${level === 'starter' || level === 'all' ? 'a1' : (level === 'elementary' ? 'a2' : level.toLowerCase())}`;
            const currData = window.curriculumData?.[currKey] || [];
            const tempPool = [];
            currData.forEach(unit => {
                (unit.lessons || []).forEach(lesson => {
                    if (lesson.pronunciation) {
                        lesson.pronunciation.forEach(p => {
                            tempPool.push(...(p.examples || []).map(ex => ({
                                ...ex,
                                theme: p.point,
                                type: 'ls',
                                language: l,
                                level: normalizedLevel,
                                form: 'pronunciation'
                            })));
                            tempPool.push(...(p.alphabet || []).map(a => ({
                                word: a.l,
                                ipa: a.ipa,
                                theme: p.point,
                                type: 'ls',
                                language: l,
                                level: normalizedLevel,
                                form: 'pronunciation'
                            })));
                        });
                    }
                });
            });
            pool = window.gameUtils.filterVocabulary(tempPool, { lang: l, level, theme, subTheme, category: 'Pronunciation' });
        }

        let qs = [];
        if (pool.length > 0) {
            qs = pool.map(item => {
                if (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar') {
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

                    // Use rich format fields: word for q, translation for evaluation where possible
                    return {
                        form: type,
                        q: qText,
                        item: item,
                        ans: ans,
                        opts,
                        level: item.level,
                        theme: item.theme,
                        translation: item.translation || item.word
                    };
                } else if (cat === 'Speaking' || cat === 'speaking') {
                    return { form: 'conv', q: item.topic || item.text || item.q, level: item.level, theme: item.theme };
                } else if (cat === 'Pronunciation' || cat === 'pronunciation') {
                    const correctIpa = item.ipa;
                    const distractors = ['/a/', '/i/', '/u/', '/e/', '/o/'].filter(i => i !== correctIpa).sort(() => Math.random() - 0.5).slice(0, 2);
                    const opts = [correctIpa, ...distractors].sort(() => Math.random() - 0.5);
                    return { form: 'ls', q: 'Listen and select the correct IPA sound:', item: item, ans: opts.indexOf(correctIpa), opts: opts, theme: item.theme };
                }
                return item;
            });
        } else {
            qs = getQuestions(lang.toUpperCase(), cat, level, theme, subTheme);
        }

        if (!qs.length) {
            console.warn('[COSY filter] empty result', { lang, level, theme, subTheme, category: cat });
            const errorMsg = document.getElementById('setup-error-msg');
            if (errorMsg) {
                errorMsg.style.display = 'block';
                // Scroll to error if not visible
                errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                const msg = "No exercises found for this combination. Try All Levels or a different theme.";
                if (window.COSY && window.COSY.showToast) {
                    window.COSY.showToast(msg, true);
                } else {
                    alert(msg);
                }
            }
            return;
        }

        const errorMsg = document.getElementById('setup-error-msg');
        if (errorMsg) errorMsg.style.display = 'none';

        qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

        window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, qs);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
