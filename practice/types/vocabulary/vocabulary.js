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
                { type:'mc', q:'"sibling" = ?', opts:['A brother or sister','A parent','A cousin','A friend'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"ancient" ≠ ?', opts:['Modern','Old','Historic','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"ubiquitous" = "extremely rare"', ans:false, level:'advanced', theme:'Daily Life' },
            ],
            Grammar: [
                { type:'mc', q:'✓ ?', opts:['She doesn\'t like coffee.','She don\'t like coffee.','She not like coffee.','She isn\'t like coffee.'], ans:0, level:'starter', theme:'Tenses' },
                { type:'tf', q:'"I have been living here for 3 years" = present perfect continuous', ans:true, level:'intermediate', theme:'Tenses' },
            ]
        },
        FR: {
            Vocabulary: [
                { type:'mc', q:'"frère" = ?', opts:['Le fils des mêmes parents','Un parent éloigné','Un ami d’enfance','Une sœur'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"ancien" ≠ ?', opts:['Moderne','Vieux','Historique','Antique'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"rapide" = "très lent"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                { type:'mc', q:'✓ ?', opts:['Elle n’aime pas le café.','Elle ne aime pas le café.','Elle pas aime le café.','Elle aime pas le café.'], ans:0, level:'starter', theme:'Tenses' }
            ]
        },
        IT: {
            Vocabulary: [
                { type:'mc', q:'"fratello" = ?', opts:['Il figlio dei propri genitori','Un genitore','Un cugino','Un amico'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"antico" ≠ ?', opts:['Moderno','Vecchio','Storico','Antico'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"veloce" = "molto lento"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                { type:'mc', q:'✓ ?', opts:['A lei non piace il caffè.','Lei non piace il caffè.','Lei no piace il caffè.','A lei non piacciono il caffè.'], ans:0, level:'starter', theme:'Tenses' }
            ]
        },
        RU: {
            Vocabulary: [
                { type:'mc', q:'"брат" = ?', opts:['Сын тех же родителей','Родитель','Двоюродный брат','Друг'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"древний" ≠ ?', opts:['Современный','Старый','Исторический','Античный'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"быстрый" = "очень медленный"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                { type:'mc', q:'✓ ?', opts:['Она не любит кофе.','Она нет любит кофе.','Она не любить кофе.','Она кофе не любит.'], ans:0, level:'starter', theme:'Tenses' }
            ]
        },
        EL: {
            Vocabulary: [
                { type:'mc', q:'"αδελφός" = ?', opts:['Ο γιος των ίδιων γονέων','Ένας γονέας','Ένας ξάδελφος','Ένας φίλος'], ans:0, level:'starter', theme:'Family' },
                { type:'mc', q:'"αρχαίος" ≠ ?', opts:['Σύγχρονος','Παλιός','Ιστορικός','Αντίκα'], ans:0, level:'elementary', theme:'Arts & Culture' },
                { type:'tf', q:'"γρήγορος" = "πολύ αργός"', ans:false, level:'starter', theme:'Daily Life' }
            ],
            Grammar: [
                { type:'mc', q:'✓ ?', opts:['Δεν της αρέσει ο καφές.','Δεν αρέσει ο καφές αυτής.','Δεν την αρέσει ο καφές.','Δεν της αρέσουν ο καφές.'], ans:0, level:'starter', theme:'Tenses' }
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
        let matchType = 'definition';

        const hasSynonyms = Array.isArray(item.synonyms) && item.synonyms.length > 0;
        const hasAntonyms = (Array.isArray(item.antonyms) && item.antonyms.length > 0) || !!item.opposite;

        const choices = ['definition'];
        if (hasSynonyms) choices.push('synonym');
        if (hasAntonyms) choices.push('antonym');

        matchType = choices[Math.floor(Math.random() * choices.length)];

        let targetText = '';
        let qText = '';

        if (matchType === 'synonym') {
            targetText = item.synonyms[0];
            qText = `"${item.word}" ≈ ?`;
        } else if (matchType === 'antonym') {
            targetText = item.antonyms?.[0] || item.opposite;
            qText = `"${item.word}" ≠ ?`;
        } else {
            targetText = item.definitions?.[0]?.text || item.definition || item.translation || item.word || '...';
            qText = `"${item.word}" = ?`;
        }

        // Pull distractors
        let distractors = [];
        if (matchType === 'definition') {
            distractors = pool
                .filter(p => p.id !== item.id && p.definitions?.[0]?.text)
                .sort(() => Math.random() - 0.5)
                .map(p => p.definitions[0].text);
        } else {
            distractors = pool
                .filter(p => p.id !== item.id && p.word)
                .sort(() => Math.random() - 0.5)
                .map(p => p.word);
        }

        distractors = [...new Set(distractors)].filter(d => d && d.toLowerCase() !== targetText.toLowerCase());
        distractors = distractors.slice(0, 2);

        while (distractors.length < 2) {
            const fallback = pool
                .filter(p => p.id !== item.id)
                .sort(() => Math.random() - 0.5)[0];
            const fallbackVal = matchType === 'definition' ? (fallback?.translation || 'none') : (fallback?.word || 'none');
            if (fallbackVal && fallbackVal.toLowerCase() !== targetText.toLowerCase()) {
                distractors.push(fallbackVal);
            } else {
                distractors.push('---');
            }
        }

        const allOpts = [targetText, ...distractors].sort(() => Math.random() - 0.5);
        const ans = allOpts.indexOf(targetText);

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
        console.log('[COSY Practice] beginSession', { lang, cat, level, theme, subTheme });

        if (customQs) {
            window.cosyPracticeEngine.startSession(lang, cat, level, theme, isChallenge, customQs);
            return;
        }

        let pool = [];
        const l = lang.toLowerCase();

        const norm = v => (v || '').toLowerCase().replace(/-/g, '_');
        const normalizedLevel = level !== 'all' ? norm(level) : 'all';

        if (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar' || cat === 'vocabulary') {
            const uiCat = (cat === 'vocab' || cat === 'Vocabulary' || cat === 'vocabulary') ? 'Vocabulary' : 'Grammar';
            const isStrict = uiCat === 'Vocabulary';

            pool = window.gameUtils.getVocabPool(l, level, theme, subTheme || 'all', { excludeExtra: true });

            // Apply category filtering to ensures consistent results between getVocabPool and fallback
            if (pool.length > 0) {
                pool = window.gameUtils.filterVocabulary(pool, { lang: l, level, theme, subTheme, category: uiCat, strict: isStrict });
            }

            console.log('[COSY Practice] getVocabPool result count:', pool.length);

            // Fallback 1: Relax subTheme
            if (pool.length === 0 && subTheme && subTheme !== 'all') {
                console.log('[COSY Fallback] Relaxing subTheme');
                pool = window.gameUtils.getVocabPool(l, level, theme, 'all', { excludeExtra: true });
                if (pool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(pool, { lang: l, level, theme, subTheme: 'all', category: uiCat, strict: isStrict });
                }
            }

            // Fallback 2: Relax theme
            if (pool.length === 0 && theme !== 'all') {
                console.log('[COSY Fallback] Relaxing theme');
                pool = window.gameUtils.getVocabPool(l, level, 'all', 'all', { excludeExtra: true });
                if (pool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(pool, { lang: l, level, theme: 'all', subTheme: 'all', category: uiCat, strict: isStrict });
                }
            }

            // Fallback 3: Relax level
            if (pool.length === 0 && level !== 'all') {
                console.log('[COSY Fallback] Relaxing level');
                pool = window.gameUtils.getVocabPool(l, 'all', 'all', 'all', { excludeExtra: true });
                if (pool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(pool, { lang: l, level: 'all', theme: 'all', subTheme: 'all', category: uiCat, strict: isStrict });
                }
            }

            // Fallback 4: Fallback to aggregated window.*Data if pool is empty
            if (pool.length === 0) {
                const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'nationalitiesData', 'grammarData', 'grammarElements'];
                let aggregatedPool = [];
                keys.forEach(key => {
                    if (window[key] && window[key][l]) aggregatedPool = aggregatedPool.concat(window[key][l]);
                });

                if (aggregatedPool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(aggregatedPool, { lang: l, level, theme, subTheme, category: uiCat, strict: isStrict });
                    console.log('[COSY Practice] fallback filterVocabulary count:', pool.length);

                    // SECOND FALLBACK: If still empty, try to get ALL vocab for this language regardless of form filter
                    if (pool.length === 0) {
                        pool = aggregatedPool.filter(item => {
                            const itemLevel = norm(item.level || 'starter');
                            return (normalizedLevel === 'all' || itemLevel === normalizedLevel);
                        });
                        console.log('[COSY Practice] second fallback count:', pool.length);
                    }
                }
            }

            // Fallback 5: Relax category (if Grammar is empty, try Vocabulary)
            if (pool.length === 0 && uiCat === 'Grammar') {
                console.log('[COSY Fallback] Relaxing category from Grammar to Vocabulary');
                pool = window.gameUtils.getVocabPool(l, 'all', 'all', 'all', { excludeExtra: true });
                if (pool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(pool, { lang: l, level: 'all', theme: 'all', subTheme: 'all', category: 'Vocabulary', strict: false });
                }
            }

            // Fallback 6: Relax language to English
            if (pool.length === 0 && l !== 'en') {
                console.log('[COSY Fallback] Relaxing language to en');
                pool = window.gameUtils.getVocabPool('en', 'all', 'all', 'all', { excludeExtra: true });
                if (pool.length > 0) {
                    pool = window.gameUtils.filterVocabulary(pool, { lang: 'en', level: 'all', theme: 'all', subTheme: 'all', category: 'Vocabulary', strict: false });
                }
            }

            if (window.phrasesData && window.phrasesData[l]) {
                const phrases = [];
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    phrases.push({ word: p.phrase, level: 'starter', definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                });
                pool.push(...window.gameUtils.filterVocabulary(phrases, { lang, level, theme, subTheme, category: uiCat, strict: isStrict }));
            }
        } else if (cat === 'Speaking' || cat === 'speaking') {
            let s = window.speakingData?.[l] || {};
            let speakingData = [
                ...(s.talkThatTalk || []),
                ...(s.debates || []),
                ...(s.opinions || []),
                ...(s.fluency || []),
                ...(s.quotes || [])
            ];

            // Fallback: If no speaking data in selected language, use English speaking data!
            if (speakingData.length === 0 && l !== 'en') {
                console.log('[COSY Fallback] Relaxing speaking language to en');
                s = window.speakingData?.['en'] || {};
                speakingData = [
                    ...(s.talkThatTalk || []),
                    ...(s.debates || []),
                    ...(s.opinions || []),
                    ...(s.fluency || []),
                    ...(s.quotes || [])
                ];
            }

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

            pool = window.gameUtils.filterVocabulary(processedSpeaking, { lang: pool[0]?.language || l, level: 'all', theme: 'all', subTheme: 'all', category: 'Speaking' });
        } else if (cat === 'Pronunciation' || cat === 'pronunciation' || cat === 'Pronunciation 🔊') {
            const codes = (level === 'all') ? Object.values(LEVEL_MAP) : [LEVEL_MAP[level] || 'a1'];

            let tempPool = [];
            const collectFromCurriculum = (langCode) => {
                const collected = [];
                codes.forEach(lvlCode => {
                    const currKey = `${langCode}_${lvlCode}`;
                    const currData = window.curriculumData?.[currKey] || [];
                    currData.forEach(unit => {
                        (unit.lessons || []).forEach(lesson => {
                            if (lesson.pronunciation) {
                                lesson.pronunciation.forEach(p => {
                                    collected.push(...(p.examples || []).map(ex => ({
                                        ...ex,
                                        theme: p.point,
                                        type: 'ls',
                                        language: langCode,
                                        level: lvlCode,
                                        form: 'pronunciation'
                                    })));
                                    if (!p.examples && !p.alphabet && p.point) {
                                        collected.push({
                                            word: p.point,
                                            theme: p.point,
                                            type: 'ls',
                                            language: langCode,
                                            level: lvlCode,
                                            form: 'pronunciation'
                                        });
                                    }
                                    collected.push(...(p.alphabet || []).map(a => ({
                                        word: a.l,
                                        ipa: a.ipa,
                                        theme: p.point,
                                        type: 'ls',
                                        language: langCode,
                                        level: lvlCode,
                                        form: 'pronunciation'
                                    })));
                                });
                            }
                        });
                    });
                });
                return collected;
            };

            tempPool = collectFromCurriculum(l);

            // Fallback: If pronunciation is empty, try English curriculum pronunciation!
            if (tempPool.length === 0 && l !== 'en') {
                console.log('[COSY Fallback] Relaxing pronunciation language to en');
                tempPool = collectFromCurriculum('en');
            }

            pool = window.gameUtils.filterVocabulary(tempPool, { lang: tempPool[0]?.language || l, level: 'all', theme: 'all', subTheme: 'all', category: 'Pronunciation' });
        }

        let qs = [];
        if (pool.length > 0) {
            qs = pool.map(item => {
                const isVocabOrGrammar = (cat === 'Vocabulary' || cat === 'Grammar' || cat === 'vocab' || cat === 'grammar' || cat === 'vocabulary');
                if (isVocabOrGrammar) {
                    let types = ['mc', 'tf', 'type', 'sc', 'ls', 'mp'];
                    let type = types[Math.floor(Math.random() * types.length)];

                    // FIX 3 — Guard against missing examples for scramble questions
                    const hasExamples = Array.isArray(item.examples)
                        && item.examples.length > 0
                        && item.examples[0]?.text;
                    if (!hasExamples && type === 'sc') type = 'type';

                    if (type === 'type' && !item.word) type = 'mc';

                    let qText = '', ans = null, opts = null;
                    const definition = item.definitions?.[0]?.text || item.definition || item.translation || item.word || "...";

                    if (type === 'mp') {
                        // Match Pairs: Current item + 3 other random items
                        const otherItems = pool
                            .filter(p => p.id !== item.id && p.word && (p.definitions?.[0]?.text || p.definition || p.translation))
                            .sort(() => Math.random() - 0.5);

                        const selectedPairs = [item, ...otherItems.slice(0, 3)];
                        while (selectedPairs.length < 4) {
                            selectedPairs.push({
                                word: `WordFallback_${selectedPairs.length}`,
                                definitions: [{ text: `DefFallback_${selectedPairs.length}` }],
                                emoji: '💡',
                                transcription: `[${selectedPairs.length}]`
                            });
                        }

                        // Determine available modes dynamically based on item fields
                        let possibleModes = ['definition'];

                        const hasEmojis = selectedPairs.filter(p => p.emoji).length >= 3;
                        if (hasEmojis) possibleModes.push('emoji');

                        const hasTranscriptions = selectedPairs.filter(p => p.transcription).length >= 3;
                        if (hasTranscriptions) possibleModes.push('transcription');

                        const hasAntonyms = selectedPairs.filter(p => p.opposite || (p.antonyms && p.antonyms.length > 0)).length >= 2;
                        if (hasAntonyms) possibleModes.push('antonym');

                        const selectedMode = possibleModes[Math.floor(Math.random() * possibleModes.length)];

                        // Map each pair based on the chosen mode
                        const pairs = selectedPairs.map((p, idx) => {
                            let matchValue = '';
                            if (selectedMode === 'emoji') {
                                matchValue = p.emoji || '💡';
                            } else if (selectedMode === 'transcription') {
                                matchValue = p.transcription || `[${p.word}]`;
                            } else if (selectedMode === 'antonym') {
                                matchValue = p.opposite || p.antonyms?.[0] || `≠ ${p.word}`;
                            } else {
                                matchValue = p.definitions?.[0]?.text || p.definition || p.translation || p.word;
                            }

                            return {
                                id: idx,
                                word: p.word,
                                definition: matchValue
                            };
                        });

                        // Set a fully monolingual descriptive title based on selected mode
                        if (selectedMode === 'emoji') {
                            qText = "🧩 Match the words with their images";
                        } else if (selectedMode === 'transcription') {
                            qText = "🧩 Match the words with their pronunciation symbols";
                        } else if (selectedMode === 'antonym') {
                            qText = "🧩 Match the words with their opposites (antonyms)";
                        } else {
                            qText = "🧩 Match the words with their definitions";
                        }

                        ans = pairs; // Array of { id, word, definition }
                    } else if (type === 'mc') {
                        const mcQ = buildMCQuestion(item, pool);
                        qText = mcQ.q;
                        ans = mcQ.ans;
                        opts = mcQ.opts;
                    } else if (type === 'ls') {
                        // Fully monolingual Listening Task: options are target words
                        const otherWords = pool
                            .filter(p => p.id !== item.id && p.word)
                            .sort(() => Math.random() - 0.5)
                            .map(p => p.word);
                        let distractors = [...new Set(otherWords)].filter(w => w && w.toLowerCase() !== (item.word || '').toLowerCase()).slice(0, 2);
                        while (distractors.length < 2) {
                            distractors.push('---');
                        }
                        qText = '🔊 ?';
                        opts = [item.word, ...distractors].sort(() => Math.random() - 0.5);
                        ans = opts.indexOf(item.word);
                    } else if (type === 'tf') {
                        // Fully monolingual True/False
                        const isTrue = Math.random() > 0.5;
                        let displayDef = definition;
                        if (!isTrue) {
                            const otherItems = pool.filter(p => p.id !== item.id && (p.definitions?.[0]?.text || p.definition));
                            if (otherItems.length > 0) {
                                const randomOther = otherItems[Math.floor(Math.random() * otherItems.length)];
                                displayDef = randomOther.definitions?.[0]?.text || randomOther.definition;
                            } else {
                                displayDef = "---";
                            }
                        }
                        qText = `"${item.word}" = "${displayDef}"`;
                        ans = isTrue;
                    } else if (type === 'sc') {
                        // Fully monolingual Sentence Scramble
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const ex = examplesArr[Math.floor(Math.random() * examplesArr.length)];
                        if (!ex?.text) {
                            type = 'type';
                        } else {
                            qText = `🧩 (${item.word})`;
                            ans = ex.text;
                        }
                    }

                    if (type === 'type') {
                        // Fully monolingual Typing task
                        qText = `"${definition}" = ?`;
                        ans = item.word;
                    }

                    if (!qText) {
                        console.warn('[COSY Practice] qText still empty for item:', item, 'type:', type);
                        qText = `Practice: ${item.word}`;
                    }

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
                    return { form: 'ls', q: '🔊 ?', item: item, ans: opts.indexOf(correctIpa), opts: opts, theme: item.theme };
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
