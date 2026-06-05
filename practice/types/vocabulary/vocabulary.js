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
        return pool.filter(q => (level === 'all' || q.level === level) && (theme === 'all' || q.theme === theme));
    }

    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        const l = lang.toLowerCase();
        const family = window.FAMILY_MAP ? window.FAMILY_MAP[l] : null;
        if (!family) return;

        const prefix = (window.COSY && typeof window.COSY.getPrefix === 'function') ? window.COSY.getPrefix() : '/';
        const levelId = window.getLevelCode ? window.getLevelCode(level) : (level === 'all' || !level ? 'starter' : level);
        const levelPath = window.getLevelDir ? window.getLevelDir(levelId) : levelId;

        const files = [
            'vocabulary.js', 'verbs.js', 'adjectives.js', 'grammar_elements.js', 'grammar.js',
            'dishes.js', 'speaking.js', 'debates.js', 'opinions.js', 'quotes.js', 'fluency.js',
            'locations.js', 'people.js', 'nationalities.js'
        ];
        const promises = files.map(file => {
            const path = `${prefix}js/data/${family}/${lang.toLowerCase()}/${levelPath}/${file}`;
            if (document.querySelector(`script[src*="${path}"]`)) return Promise.resolve();
            return new Promise(res => {
                const s = document.createElement('script');
                s.src = path;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            });
        });

        // Language-root phrases
        const phrasesPath = `${prefix}js/data/${family}/${l}/phrases.js`;
        if (!document.querySelector(`script[src*="${phrasesPath}"]`)) {
            promises.push(new Promise(res => {
                const s = document.createElement('script');
                s.src = phrasesPath;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            }));
        }

        // Pronunciation data (curriculum + alphabet)
        const lv = level === 'starter' || level === 'all' || !level ? 'a1' : (level === 'elementary' ? 'a2' : level);
        const currPath = `${prefix}js/data/curriculum/${l}/${lv}.js`;
        if (!document.querySelector(`script[src*="${currPath}"]`)) {
            promises.push(new Promise(res => {
                const s = document.createElement('script');
                s.src = currPath;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            }));
        }

        const alphaPath = `${prefix}js/data/curriculum/${l}/alphabet.js`;
        if (!document.querySelector(`script[src*="${alphaPath}"]`)) {
            promises.push(new Promise(res => {
                const s = document.createElement('script');
                s.src = alphaPath;
                s.onload = res;
                s.onerror = res;
                document.head.appendChild(s);
            }));
        }

        await Promise.all(promises);
        await new Promise(res => setTimeout(res, 500));
    }

    /* ══════════════════════════════════════
       TASK GENERATION
    ══════════════════════════════════════ */
    function beginSession(lang, cat, level, theme, isChallenge, customQs) {
        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        const l = lang.toLowerCase();

        if (cat === 'Vocabulary' || cat === 'Grammar') {
            pool = window.gameUtils.getVocabPool(l, level, theme);

            if (window.phrasesData && window.phrasesData[l]) {
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    pool.push({ word: p.phrase, level: 'starter', definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                });
            }
            if (cat === 'Grammar') {
                const grammarSpecific = pool.filter(item => item.form === 'verb' || item.form === 'preposition' || item.form === 'conjunction');
                if (grammarSpecific.length > 5) pool = grammarSpecific;
            }
        } else if (cat === 'Speaking') {
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
            pool = speakingData.filter(d => (level === 'all' || d.level === level || !d.level) && (theme === 'all' || d.theme === theme || !d.theme));
        } else if (cat === 'Pronunciation') {
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
                if (cat === 'Vocabulary' || cat === 'Grammar') {
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
                } else if (cat === 'Speaking') {
                    return { type: 'conv', q: item.topic || item.text || item.q, level: item.level, theme: item.theme };
                } else if (cat === 'Pronunciation') {
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

        if (!qs.length) qs = getQuestions('EN', 'Vocabulary', 'all', 'all');
        qs = [...qs].sort(() => Math.random() - .5).slice(0, 10);

        window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, qs);
    }

    // Export functions to global scope
    window.ensureDataLoaded = ensureDataLoaded;
    window.beginSession = beginSession;
})();
