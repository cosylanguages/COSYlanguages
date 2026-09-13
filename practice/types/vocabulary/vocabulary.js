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

    function toShortLevelCode(lvl) {
        if (!lvl) return 'a1';
        const l = String(lvl).toLowerCase();
        return LEVEL_MAP[l] || (['a1', 'a2', 'b1', 'b2', 'c1', 'c2'].includes(l) ? l : 'a1');
    }


    /* ══════════════════════════════════════
       DATA LOADING
    ══════════════════════════════════════ */
    async function ensureDataLoaded(lang, level) {
        const targetLang = (lang || 'en').toLowerCase();
        if (window.COSY && window.COSY.loadLanguageData) {
            await window.COSY.loadLanguageData(targetLang, level);
        } else {
            console.error("Centralized loader COSY.loadLanguageData not found.");
        }

        // Load standalone app morphological datasets via adapter bridge
        if (window.COSY && window.COSY.loadAppData) {
            await Promise.all([
                window.COSY.loadAppData(targetLang, 'verbs'),
                window.COSY.loadAppData(targetLang, 'nouns')
            ]);
        }

        // Load JSON morphology datasets
        if (window.COSY && window.COSY.loadMorphologyData) {
            await window.COSY.loadMorphologyData(targetLang);
        }

        // Load reference phonology datasets (sounds, stress, intonation)
        if (window.COSY && window.COSY.loadPhonologyData) {
            await window.COSY.loadPhonologyData(targetLang);
        } else if (window.loadPhonologyData) {
            await window.loadPhonologyData(targetLang);
        }

        // Also load curriculum for pronunciation if needed
        if (window.COSY && window.COSY.loadCurriculum) {
            const lvl = (level || 'starter').toLowerCase();
            const lvlCode = LEVEL_MAP[lvl] || lvl;
            if (lvlCode !== 'all') {
                await window.COSY.loadCurriculum(targetLang, lvlCode);
            } else {
                for (let lc of Object.values(LEVEL_MAP)) {
                    await window.COSY.loadCurriculum(targetLang, lc);
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

        const itemWord = item.word || item.topic || item.phrase || '...';

        if (matchType === 'synonym') {
            targetText = item.synonyms[0];
            qText = `"${itemWord}" ≈ ?`;
        } else if (matchType === 'antonym') {
            targetText = item.antonyms?.[0] || item.opposite;
            qText = `"${itemWord}" ≠ ?`;
        } else {
            targetText = item.definitions?.[0]?.text || item.definition || item.subtext || itemWord || '...';
            qText = `"${itemWord}" = ?`;
        }

        // Pull distractors
        let distractors = [];
        if (matchType === 'definition') {
            distractors = pool
                .filter(p => (p.id ? p.id !== item.id : p !== item))
                .map(p => p.definitions?.[0]?.text || p.definition || p.subtext)
                .filter(Boolean)
                .sort(() => Math.random() - 0.5);
        } else {
            distractors = pool
                .filter(p => (p.id ? p.id !== item.id : p !== item))
                .map(p => p.word || p.topic || p.phrase)
                .filter(Boolean)
                .sort(() => Math.random() - 0.5);
        }

        distractors = [...new Set(distractors)].filter(d => d && d.toLowerCase() !== targetText.toLowerCase());
        distractors = distractors.slice(0, 2);

        while (distractors.length < 2) {
            const fallback = pool
                .filter(p => (p.id ? p.id !== item.id : p !== item))
                .sort(() => Math.random() - 0.5)[0];
            const fallbackVal = matchType === 'definition'
                ? (fallback?.definitions?.[0]?.text || fallback?.definition || fallback?.subtext || 'none')
                : (fallback?.word || fallback?.topic || fallback?.phrase || 'none');
            if (fallbackVal && fallbackVal.toLowerCase() !== targetText.toLowerCase()) {
                distractors.push(fallbackVal);
            } else {
                distractors.push('---');
            }
        }

        const allOpts = [targetText, ...distractors].sort(() => Math.random() - 0.5);
        const ans = allOpts.indexOf(targetText);

        const mappedLevel = LEVEL_MAP[item.level] || item.level || 'a1';

        return {
            type: 'mc',
            form: 'mc',
            q: qText,
            item,
            ans,
            opts: allOpts,
            level: mappedLevel,
            theme: item.theme,
            sub_theme: item.sub_theme || null,
            practice_links: item.practice_links,
            ruleHint: item.usage_hint || item.collocation || (item.preposition ? `Preposition: ${itemWord} ${item.preposition}` : null)
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

            // Fallback to aggregated window.*Data if pool is empty
            if (pool.length === 0) {
                const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData', 'grammarElements'];
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

            if (window.phrasesData && window.phrasesData[l]) {
                const phrases = [];
                Object.values(window.phrasesData[l]).flat().forEach(p => {
                    phrases.push({ word: p.phrase, level: 'starter', definitions: [{ text: p.definition }], examples: [{ text: p.example }], theme: 'phrases_idioms' });
                });
                pool.push(...window.gameUtils.filterVocabulary(phrases, { lang, level, theme, subTheme, category: uiCat, strict: isStrict }));
            }

            // Append dynamic morphology dataset items for Grammar practice
            if (uiCat === 'Grammar' && window.morphologyData && window.morphologyData[l]) {
                const morphItems = window.morphologyData[l].map(m => ({
                    id: m.id,
                    word: m.label || m.id,
                    definition: m.definition || m.group_label || 'Grammar & Morphology',
                    definitions: [{ text: m.definition || m.group_label || 'Grammar & Morphology' }],
                    level: (m.level || 'starter').toLowerCase(),
                    theme: m.group || 'Grammar',
                    practice_links: m.practice_links,
                    usage_hint: m.definition ? `Concept: ${m.definition}` : null
                }));
                const filteredMorph = morphItems.filter(m => {
                    const mLevel = norm(m.level);
                    const levelOk = normalizedLevel === 'all' || mLevel === normalizedLevel || mLevel.includes(normalizedLevel);
                    const themeOk = !theme || theme === 'all' || (window.gameUtils && window.gameUtils.isThemeMatch ? window.gameUtils.isThemeMatch(m.theme, theme, m) : true);
                    return levelOk && themeOk;
                });
                pool.push(...filteredMorph);
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
            const codes = (level === 'all') ? Object.values(LEVEL_MAP) : [toShortLevelCode(level)];

            const tempPool = [];

            // 1. Source from Curriculum Data
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

            // 2. Source from Reference Phonology Datasets (sounds, stress, intonation)
            const phonData = window.phonologyData?.[l] || {};
            ['sounds', 'stress', 'intonation'].forEach(pCat => {
                const groups = phonData[pCat] || [];
                groups.forEach(group => {
                    const grpLevel = (group.level || 'A1').toLowerCase();
                    const groupMappedLevel = toShortLevelCode(grpLevel);

                    // Helper to clean raw text and extract clean target word and IPA
                    const parsePhonologyExample = (ex) => {
                        let rawTitle = '';
                        let rawIpa = null;
                        if (typeof ex === 'string') {
                            rawTitle = ex;
                        } else if (ex && typeof ex === 'object') {
                            rawTitle = ex.t || ex.word || ex.text || group.label || '';
                            rawIpa = ex.m || ex.ipa || null;
                        }

                        if (!rawTitle) return null;

                        let targetStr = rawTitle;
                        if (targetStr.includes(' ➔ ')) {
                            const parts = targetStr.split(' ➔ ');
                            targetStr = parts[parts.length - 1].trim();
                        } else if (targetStr.includes(' vs ')) {
                            const parts = targetStr.split(' vs ');
                            targetStr = parts[0].trim();
                        }

                        // Extract embedded IPA like /kɪt/ if present
                        let extractedIpa = rawIpa;
                        const ipaMatch = targetStr.match(/\/[^/]+\//);
                        if (ipaMatch && !extractedIpa) {
                            extractedIpa = ipaMatch[0];
                        }

                        // Strip embedded IPA or bracketed annotations from word
                        let cleanWord = targetStr.replace(/\/[^/]+\//g, '').replace(/\([^)]+\)/g, '').trim();
                        if (!cleanWord) cleanWord = rawTitle;

                        return { word: cleanWord, ipa: extractedIpa };
                    };

                    // Extract examples from reference phonology group
                    if (Array.isArray(group.examples)) {
                        group.examples.forEach(ex => {
                            const parsed = parsePhonologyExample(ex);
                            if (parsed && parsed.word) {
                                tempPool.push({
                                    word: parsed.word,
                                    ipa: parsed.ipa,
                                    theme: group.label || group.id,
                                    type: 'ls',
                                    language: l,
                                    level: groupMappedLevel,
                                    form: 'pronunciation'
                                });
                            }
                        });
                    }

                    // Fallback to group label/definition if no examples
                    if ((!group.examples || group.examples.length === 0) && group.label) {
                        tempPool.push({
                            word: group.label,
                            ipa: group.definition || null,
                            theme: group.label,
                            type: 'ls',
                            language: l,
                            level: groupMappedLevel,
                            form: 'pronunciation'
                        });
                    }
                });
            });

            pool = window.gameUtils.filterVocabulary(tempPool, { lang: l, level, theme, subTheme, category: 'Pronunciation' });
        }

        let qs = [];
        const isVocab = (cat === 'Vocabulary' || cat === 'vocab' || cat === 'vocabulary');
        if (pool.length > 0) {
            qs = pool.map(item => {
                if (isVocab) {
                    return buildMCQuestion(item, pool);
                } else if (cat === 'Grammar' || cat === 'grammar') {
                    let types = ['mc', 'tf', 'type', 'sc', 'ls', 'mp', 'cloze', 'dictation'];
                    let type = types[Math.floor(Math.random() * types.length)];
                    if (type === 'dictation') {
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const hasEx = examplesArr.length > 0 && examplesArr[0]?.text;
                        if (!hasEx) type = 'ls';
                    }

                    const hasExamples = Array.isArray(item.examples)
                        && item.examples.length > 0
                        && item.examples[0]?.text;
                    if (!hasExamples && (type === 'sc' || type === 'cloze')) type = 'mc';

                    if (type === 'type' && !item.word) type = 'mc';

                    let qText = '', ans = null, opts = null;
                    const definition = item.definitions?.[0]?.text || item.definition || item.subtext || item.word || "...";

                    if (type === 'mp') {
                        const otherItems = pool
                            .filter(p => p.id !== item.id && p.word && (p.definitions?.[0]?.text || p.definition || p.subtext))
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

                        let possibleModes = ['definition'];
                        const hasEmojis = selectedPairs.filter(p => p.emoji).length >= 3;
                        if (hasEmojis) possibleModes.push('emoji');

                        const hasTranscriptions = selectedPairs.filter(p => p.transcription).length >= 3;
                        if (hasTranscriptions) possibleModes.push('transcription');

                        const hasAntonyms = selectedPairs.filter(p => p.opposite || (p.antonyms && p.antonyms.length > 0)).length >= 2;
                        if (hasAntonyms) possibleModes.push('antonym');

                        const selectedMode = possibleModes[Math.floor(Math.random() * possibleModes.length)];

                        const pairs = selectedPairs.map((p, idx) => {
                            let matchValue = '';
                            if (selectedMode === 'emoji') {
                                matchValue = p.emoji || '💡';
                            } else if (selectedMode === 'transcription') {
                                matchValue = p.transcription || `[${p.word}]`;
                            } else if (selectedMode === 'antonym') {
                                matchValue = p.opposite || p.antonyms?.[0] || `≠ ${p.word}`;
                            } else {
                                matchValue = p.definitions?.[0]?.text || p.definition || p.subtext || p.word;
                            }

                            return {
                                id: idx,
                                word: p.word,
                                definition: matchValue
                            };
                        });

                        if (selectedMode === 'emoji') {
                            qText = "🧩 Match the words with their images";
                        } else if (selectedMode === 'transcription') {
                            qText = "🧩 Match the words with their pronunciation symbols";
                        } else if (selectedMode === 'antonym') {
                            qText = "🧩 Match the words with their opposites (antonyms)";
                        } else {
                            qText = "🧩 Match the words with their definitions";
                        }

                        ans = pairs;
                    } else if (type === 'mc') {
                        const mcQ = buildMCQuestion(item, pool);
                        qText = mcQ.q;
                        ans = mcQ.ans;
                        opts = mcQ.opts;
                    } else if (type === 'ls') {
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
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const ex = examplesArr[Math.floor(Math.random() * examplesArr.length)];
                        if (!ex?.text) {
                            type = 'type';
                        } else {
                            qText = `🧩 (${item.word})`;
                            ans = ex.text;
                        }
                    } else if (type === 'cloze') {
                        const examplesArr = (item.examples && item.examples.length > 0) ? item.examples : (item.definitions?.[0]?.examples || []);
                        const ex = examplesArr[Math.floor(Math.random() * examplesArr.length)];
                        if (!ex?.text || !item.word) {
                            type = 'mc';
                            const mcQ = buildMCQuestion(item, pool);
                            qText = mcQ.q;
                            ans = mcQ.ans;
                            opts = mcQ.opts;
                        } else {
                            const regex = new RegExp(item.word, 'gi');
                            const sentenceWithBlank = ex.text.replace(regex, '[ ___ ]');
                            qText = `Fill in the blank: ${sentenceWithBlank}`;

                            const distractors = pool
                                .filter(p => p.id !== item.id && p.word)
                                .sort(() => Math.random() - 0.5)
                                .map(p => p.word)
                                .slice(0, 2);
                            while (distractors.length < 2) distractors.push('---');

                            opts = [item.word, ...distractors].sort(() => Math.random() - 0.5);
                            ans = opts.indexOf(item.word);
                        }
                    }

                    if (type === 'type') {
                        qText = `"${definition}" = ?`;
                        ans = item.word;
                    }

                    if (!qText) {
                        qText = `Practice: ${item.word}`;
                    }

                    let morphologicalHint = null;
                    if (window.COSY && window.COSY.getVerbParadigm) {
                        const verbParadigm = window.COSY.getVerbParadigm(l, item.word);
                        if (verbParadigm) {
                            if (verbParadigm.usage_hint) {
                                morphologicalHint = `Usage: ${verbParadigm.usage_hint}`;
                            } else if (verbParadigm.group) {
                                morphologicalHint = `Group: ${verbParadigm.group}`;
                            }
                        }
                    }
                    if (!morphologicalHint && window.COSY && window.COSY.getNounDeclension) {
                        const nounDecl = window.COSY.getNounDeclension(l, item.word);
                        if (nounDecl && nounDecl.gender) {
                            morphologicalHint = `Gender: ${nounDecl.gender}`;
                        }
                    }

                    return {
                        form: type,
                        q: qText,
                        item: item,
                        ans: ans,
                        opts,
                        level: LEVEL_MAP[item.level] || item.level || 'a1',
                        theme: item.theme,
                        sub_theme: item.sub_theme || null,
                        practice_links: item.practice_links,
                        ruleHint: item.usage_hint || item.collocation || (item.preposition ? `Collocation / Preposition: ${item.word} ${item.preposition}` : morphologicalHint)
                    };
                } else if (cat === 'Speaking' || cat === 'speaking') {
                    return { form: 'conv', q: item.topic || item.text || item.q, level: LEVEL_MAP[item.level] || item.level || 'a1', theme: item.theme };
                } else if (cat === 'Pronunciation' || cat === 'pronunciation' || cat === 'Pronunciation 🔊') {
                    const correctVal = item.ipa || item.word;

                    let poolDistractors = pool
                        .filter(p => p !== item && (p.ipa || p.word))
                        .map(p => p.ipa || p.word);

                    let cleanDistractors = [...new Set(poolDistractors)].filter(d => d && d.toLowerCase() !== correctVal.toLowerCase()).sort(() => Math.random() - 0.5);

                    const fallbackIpa = ['/aɪ/', '/iː/', '/uː/', '/eɪ/', '/əʊ/', '/ɒ/', '/æ/', '/θ/', '/ð/', '/ʃ/'];
                    for (const fb of fallbackIpa) {
                        if (cleanDistractors.length >= 2) break;
                        if (fb.toLowerCase() !== correctVal.toLowerCase() && !cleanDistractors.includes(fb)) {
                            cleanDistractors.push(fb);
                        }
                    }

                    const distractors = cleanDistractors.slice(0, 2);
                    const opts = [correctVal, ...distractors].sort(() => Math.random() - 0.5);
                    const ans = opts.indexOf(correctVal);

                    return {
                        form: 'ls',
                        q: `🔊 Pronounce: ${item.word}`,
                        item: item,
                        ans: ans,
                        opts: opts,
                        level: toShortLevelCode(item.level),
                        theme: item.theme
                    };
                }
                return item;
            });
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
