/**
 * practice/types/vocabulary/vocabulary.js
 * Vocabulary data provider and task generator for practice sessions.
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

        // Also load curriculum for pronunciation if needed
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

    function buildMCQuestion(item, pool) {
        const definition = item.definitions?.[0]?.text
            || item.translation
            || 'the correct meaning';

        // Pull 2 wrong definitions from other items at same level
        const distractors = pool
            .filter(p => p.id !== item.id && p.definitions?.[0]?.text)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .map(p => p.definitions[0].text);

        // If fewer than 2 distractors found, use translation-based fallbacks
        while (distractors.length < 2) {
            const fallback = pool
                .filter(p => p.id !== item.id)
                .sort(() => Math.random() - 0.5)[0];
            distractors.push(fallback?.translation || 'none of the above');
        }

        // Shuffle the correct answer into a random position
        const allOpts = [definition, ...distractors]
            .sort(() => Math.random() - 0.5);
        const ans = allOpts.indexOf(definition);

        const qText = `What does "${item.word}"${item.transcription ? ' /' + item.transcription + '/' : ''} mean?`;

        return {
            type: 'mc',
            q: qText,
            item,
            ans,
            opts: allOpts,
            level: item.level,
            theme: item.theme
        };
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
        } else if (cat === 'Pronunciation' || cat === 'pronunciation' || cat === 'Pronunciation 🔊') {
            const codes = (level === 'all') ? Object.values(LEVEL_MAP) : [LEVEL_MAP[level] || 'a1'];

            const tempPool = [];
            codes.forEach(lvlCode => {
                const currKey = `${l}_${lvlCode}`;
                const currData = window.curriculumData?.[currKey] || [];
                currData.forEach(unit => {
                    (unit.lessons || []).forEach(lesson => {
                        if (lesson.pronunciation) {
                            lesson.pronunciation.forEach(p => {
                                tempPool.push(...(p.examples || []).map(ex => ({
                                    ...ex,
                                    theme: p.point,
                                    type: 'ls',
                                    language: l,
                                    level: lvlCode,
                                    form: 'pronunciation'
                                })));
                                // Fix for entries without examples or alphabet but with point
                                if (!p.examples && !p.alphabet && p.point) {
                                    tempPool.push({
                                        word: p.point,
                                        theme: p.point,
                                        type: 'ls',
                                        language: l,
                                        level: lvlCode,
                                        form: 'pronunciation'
                                    });
                                }
                                tempPool.push(...(p.alphabet || []).map(a => ({
                                    word: a.l,
                                    ipa: a.ipa,
                                    theme: p.point,
                                    type: 'ls',
                                    language: l,
                                    level: lvlCode,
                                    form: 'pronunciation'
                                })));
                            });
                        }
                    });
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

                    // FIX 3 — Guard against missing examples for scramble questions
                    const hasExamples = Array.isArray(item.examples)
                        && item.examples.length > 0
                        && item.examples[0]?.text;
                    if (!hasExamples && type === 'sc') type = 'type';

                    if (type === 'type' && !item.word) type = 'mc';

                    let qText, ans, opts = null;
                    const definition = item.definitions?.[0]?.text || "the correct meaning";

                    if (type === 'mc') {
                        const mcQ = buildMCQuestion(item, pool);
                        qText = mcQ.q;
                        ans = mcQ.ans;
                        opts = mcQ.opts;
                    } else if (type === 'ls') {
                        qText = 'Listen and select the correct word:';
                        ans = 0;
                        opts = [definition, 'Wrong option 1', 'Wrong option 2'];
                    } else if (type === 'tf') {
                        const isTrue = Math.random() > 0.5;
                        const displayDef = isTrue ? definition : "something else entirely";
                        qText = `"${item.word}" means "${displayDef}".`;
                        ans = isTrue;
                    } else if (type === 'sc') {
                        // FIX 3 — Guard the sentence scramble answer generation
                        const ex = item.examples[Math.floor(Math.random() * item.examples.length)];
                        if (!ex?.text) {
                            type = 'type';
                        } else {
                            qText = 'Arrange the words:';
                            ans = ex.text;
                        }
                    }

                    if (type === 'type') {
                        // FIX 2a — For 'type' questions, show the definition AND emoji
                        qText = `${item.emoji || ''} ${item.definitions?.[0]?.text || 'Type the word:'}`.trim();
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
                        sub_theme: item.sub_theme || null,
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
