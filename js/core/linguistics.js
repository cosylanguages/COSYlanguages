/**
 * Dynamic Conjugation Engine for COSYlanguages
 * Handles 13 languages with regular patterns, irregular overrides,
 * synthetic tenses, and compound tense generation.
 */

const Linguistics = {
    /**
     * Conjugates a verb based on language, tense, and metadata.
     */
    conjugate(lang, verbObj, tense = 'present_simple') {
        const config = GRAMMAR_CONFIG[lang];
        if (!config || !config.verbs) return null;

        // 1. Check for Compound Tenses
        if (config.verbs.compound_tenses && config.verbs.compound_tenses[tense]) {
            return this.generateCompoundTense(lang, verbObj, tense);
        }

        // 2. Check for Irregular Overrides
        if (verbObj.classification === 'irregular' && verbObj.tenses && verbObj.tenses[tense]) {
            let positive = verbObj.tenses[tense].positive || [];
            if (verbObj.reflexive) {
                positive = positive.map((v, i) => this.applyReflexive(lang, v, i));
            }
            // Handle separable irregulars (if any)
            positive = positive.map(v => this.handleSeparable(lang, v, verbObj, tense, false));

            return {
                positive: positive,
                negative: verbObj.tenses[tense].negative || this.generateNegations(lang, positive, verbObj, false, tense)
            };
        }

        // 3. Handle Regular (Synthetic) Conjugation
        let rules = config.verbs.regular_rules[tense];
        if (!rules) {
             const identity = Array(config.pronouns.length).fill(verbObj.word);
             return { positive: identity, negative: this.generateNegations(lang, identity, verbObj, false, tense) };
        }

        // Template Support
        let postText = "";
        if (typeof rules === 'string' && rules.startsWith('template:')) {
            rules = GRAMMAR_CONFIG.templates[rules.split(':')[1]];
        } else if (rules[verbObj.group] && (typeof rules[verbObj.group] === 'string' && rules[verbObj.group].startsWith('template:'))) {
            rules = GRAMMAR_CONFIG.templates[rules[verbObj.group].split(':')[1]];
        } else if (rules[verbObj.group] && rules[verbObj.group].template) {
            postText = rules[verbObj.group].post || "";
            rules = GRAMMAR_CONFIG.templates[rules[verbObj.group].template];
        }

        if (!rules || (!rules[verbObj.group] && !Array.isArray(rules) && !rules.endings)) {
            const identity = Array(config.pronouns.length).fill(verbObj.word);
            return { positive: identity, negative: this.generateNegations(lang, identity, verbObj, false, tense) };
        }

        const ruleSet = rules[verbObj.group] || rules;
        const endings = Array.isArray(ruleSet) ? ruleSet : ruleSet.endings;

        // Check for person restrictions (Defective verbs)
        const restricted = verbObj.restricted_persons;

        const stemSource = ruleSet.stem || rules.stem || 'word';

        const rawWordForStem = (stemSource === 'word') ? verbObj.word : (verbObj[stemSource] || verbObj.word);

        // Check if stem is per-person (e.g. German strong verbs)
        const hasPerPersonStem = config.verbs.stem_rules?.transformations?.some(t => t.persons);
        const baseStem = hasPerPersonStem ? null : this.extractStem(lang, rawWordForStem, verbObj.group, verbObj.reflexive, tense, null, verbObj);

        const result = { positive: [], negative: [] };

        const negCfg = config.verbs.negation_config;

        config.pronouns.forEach((pronoun, index) => {
            if (restricted && !restricted.includes(index)) {
                result.positive.push("");
                result.negative.push("");
                return;
            }

            let ending = endings[index] || "";
            const stem = hasPerPersonStem
                ? this.extractStem(lang, rawWordForStem, verbObj.group, verbObj.reflexive, tense, index, verbObj)
                : baseStem;

            // Handle mapping-based endings (e.g. Slavic past)
            if (ruleSet.mapping) {
                const mapped = ruleSet.mapping[index];
                const genderKeys = Object.keys(ruleSet.endings);
                const pattern = ruleSet.pattern || "";
                if (Array.isArray(mapped)) {
                    ending = mapped.map(mi => pattern + ruleSet.endings[genderKeys[mi]]).join(' / ');
                } else {
                    ending = pattern + ruleSet.endings[genderKeys[mapped]];
                }
            }

            let pos = this.applyEnding(lang, stem, ending, verbObj.group, index, verbObj.reflexive, verbObj.word, tense);

            if (postText) pos += postText;
            pos = this.handleSeparable(lang, pos, verbObj, tense, false);

            result.positive.push(pos);

            // Turkic Infix Negation
            if (negCfg && negCfg.type === 'infix') {
                const isFront = negCfg.vowels.some(v => stem.toLowerCase().includes(v));
                const infix = isFront ? negCfg.front : negCfg.back;
                let neg = this.applyEnding(lang, stem + infix, ending, verbObj.group, index, verbObj.reflexive, verbObj.word, tense);
                result.negative.push(neg);
            }
        });

        if (!result.negative.length) {
            result.negative = this.generateNegations(lang, result.positive, verbObj, false, tense);
        }

        // Add aspect pair info if available
        if (verbObj.aspect_partner) {
            result.aspect_partner = verbObj.aspect_partner;
        }

        return result;
    },

    /**
     * Inflects a noun based on language, number, and case.
     */
    inflectNoun(lang, nounObj, number = 'singular', grammarCase = 'nominative') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config) return nounObj.word;

        let word = nounObj.word;

        // 1. Handle Overrides (Irregulars)
        if (nounObj.inflections && nounObj.inflections[number] && nounObj.inflections[number][grammarCase]) {
            return nounObj.inflections[number][grammarCase];
        }
        if (number === 'plural' && nounObj.plural && grammarCase === 'nominative') {
            return nounObj.plural;
        }

        // 2. Pluralization Logic
        if (number === 'plural') {
            word = this.applyPluralRules(lang, word, nounObj, config);
        }

        // 3. Case Declension Logic
        if (grammarCase !== 'nominative') {
            word = this.applyCaseRules(lang, word, nounObj, number, grammarCase, config);
        }

        return word;
    },

    /**
     * Internal helper for pluralization.
     */
    applyPluralRules(lang, word, nounObj, config) {
        const rules = config.plural_rules;
        if (!rules && !config.plural_suffix && !config.plural_patterns) return word;

        // Agglutinative suffix (Georgian/Turkic)
        if (config.plural_suffix) return word + config.plural_suffix;

        // Turkic Vowel Harmony (Last vowel determines suffix)
        if (lang === 'tt' || lang === 'ba') {
            const frontVowels = ['ә', 'ө', 'ү', 'и', 'е', 'э'];
            const backVowels = ['а', 'о', 'у', 'ы'];
            const vowels = [...frontVowels, ...backVowels];
            let lastVowel = null;
            for (let i = word.length - 1; i >= 0; i--) {
                const char = word[i].toLowerCase();
                if (vowels.includes(char)) {
                    lastVowel = char;
                    break;
                }
            }
            const isFront = lastVowel ? frontVowels.includes(lastVowel) : true;
            return word + (isFront ? rules.front : rules.back);
        }

        // Romance/English Suffixes
        if (['en', 'es', 'fr', 'pt'].includes(lang)) {
            const overrides = rules.overrides || {};
            for (const [end, rep] of Object.entries(overrides)) {
                if (word.endsWith(end)) return word.slice(0, -end.length) + rep;
            }
            if (rules.cons_end && !/[aeiou]$/i.test(word)) return word + rules.cons_end;
            return word + (rules.default || 's');
        }

        // Italian mapping
        if (lang === 'it') {
            const gender = nounObj.gender === 'feminine' ? 'f' : 'm';
            const gRules = rules[gender];
            if (gRules) {
                for (const [end, rep] of Object.entries(gRules)) {
                    if (word.endsWith(end)) return word.slice(0, -end.length) + rep;
                }
            }
        }

        // Armenian
        if (lang === 'hy') {
             const syllableCount = word.split(/[աեէըիոօու]/).length - 1;
             return word + (syllableCount <= 1 ? rules.monosyllabic : rules.polysyllabic);
        }

        return word;
    },

    /**
     * Handles case declension for supported languages.
     */
    applyCaseRules(lang, word, nounObj, number, grammarCase, config) {
        if (grammarCase === 'nominative') return word;

        // 1. Greek Case Declension (Singular)
        if (lang === 'el' && number === 'singular') {
            if (word.endsWith('ος')) {
                if (grammarCase === 'accusative' || grammarCase === 'vocative') return word.slice(0, -1);
                if (grammarCase === 'genitive') return word.slice(0, -2) + 'ου';
            }
            if (word.endsWith('α') || word.endsWith('η')) {
                if (grammarCase === 'genitive') return word + 'ς';
            }
        }

        // 2. Russian Case Declension (Basic Singular)
        if (lang === 'ru' && number === 'singular') {
            const gender = nounObj.gender || 'masculine';
            if (gender === 'feminine' && word.endsWith('а')) {
                if (grammarCase === 'accusative') return word.slice(0, -1) + 'у';
                if (grammarCase === 'genitive') return word.slice(0, -1) + 'ы';
                if (grammarCase === 'dative' || grammarCase === 'prepositional') return word.slice(0, -1) + 'е';
            }
            if (gender === 'masculine' && !/[аеёиоуыэюя]$/i.test(word)) {
                if (grammarCase === 'genitive') return word + 'а';
                if (grammarCase === 'dative') return word + 'у';
                if (grammarCase === 'prepositional') return word + 'е';
            }
        }

        return word;
    },

    /**
     * Gets the correct article for a noun.
     */
    getArticle(lang, nounObj, type = 'definite', grammarCase = 'nominative', number = 'singular') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config || !config.article_map) return "";

        const map = config.article_map[type];
        if (!map) return "";

        const gender = nounObj.gender || 'masculine';
        const gKey = (gender === 'feminine') ? 'f' : (gender === 'neuter' ? 'n' : 'm');

        // Array-based declension (German/Greek)
        if (Array.isArray(map[gKey])) {
            const cases = config.cases || ['nominative'];
            const idx = cases.indexOf(grammarCase);
            if (number === 'plural') {
                if (type === 'indefinite') return ""; // Most languages don't have plural indefinite
                if (map.pl) return map.pl[idx] || map.pl[0];
                const plKey = gKey + 'pl';
                if (map[plKey]) return map[plKey][idx] || map[plKey][0];
                return "";
            }
            return map[gKey][idx] || map[gKey][0];
        }

        // Phonetic selection (Italian)
        if (lang === 'it') {
            const isVowel = /^[aeiou]/i.test(nounObj.word);
            const isSpecial = /^(z|s[bcdfghlmnpqrstvwxyz])/i.test(nounObj.word);
            const key = number === 'plural' ? gKey + 'pl' : gKey;
            const sub = map[key];
            if (typeof sub === 'string') return sub;
            if (isVowel && sub.vowel) return sub.vowel;
            if (isSpecial && sub.z_s_cons) return sub.z_s_cons;
            return sub.default || "";
        }

        // Standard mapping (French/Spanish/Portuguese)
        let key = gKey;
        if (number === 'plural') {
            if (map.pl) key = 'pl';
            else if (map[gKey + 'pl']) key = gKey + 'pl';
            else return ""; // No plural article found
        }

        let art = map[key] || "";

        if (lang === 'fr' && number === 'singular' && /^[aeiouh]/i.test(nounObj.word) && map.elided) {
            return map.elided;
        }

        return art;
    },

    /**
     * Applies agreement to an adjective or target word.
     */
    applyNounAgreement(lang, nounObj, targetWord, number = 'singular', grammarCase = 'nominative') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config) return targetWord;

        const gender = nounObj.gender || 'masculine';
        let word = targetWord;

        // 1. Romance Adjective Agreement
        if (['fr', 'es', 'it', 'pt'].includes(lang)) {
            const isFem = gender === 'feminine';
            const isPlural = number === 'plural';

            if (lang === 'fr') {
                if (isFem) word += 'e';
                if (isPlural) word += 's';
            } else if (lang === 'es') {
                if (word.endsWith('o')) {
                    if (isFem) word = word.slice(0, -1) + 'a';
                    if (isPlural) word += 's';
                } else if (isPlural) {
                    word += (/[aeiou]$/i.test(word) ? 's' : 'es');
                }
            } else if (lang === 'it') {
                if (word.endsWith('o')) {
                    if (isFem && !isPlural) word = word.slice(0, -1) + 'a';
                    else if (!isFem && isPlural) word = word.slice(0, -1) + 'i';
                    else if (isFem && isPlural) word = word.slice(0, -1) + 'e';
                }
            } else if (lang === 'pt') {
                if (word.endsWith('o')) {
                    if (isFem) word = word.slice(0, -1) + 'a';
                    if (isPlural) word += 's';
                }
            }
        }

        // 2. German Adjective Declension (Basic Predicative/Attributive check)
        // Note: Full German adjective declension requires knowledge of the preceding article.
        // For now, we return the base word if no extra info is provided.

        return word;
    },

    /**
     * Generates a non-finite form (infinitive, gerund, participle).
     */
    generateNonFiniteForm(lang, verbObj, type) {
        const config = GRAMMAR_CONFIG[lang];
        const rule = config?.verbs?.non_finite?.[type];
        if (!rule) return verbObj.word;

        const stem = this.extractStem(lang, verbObj.word, verbObj.group, verbObj.reflexive, type);
        let form;

        if (rule.pattern) {
            form = rule.pattern.replace("[v]", stem);
        } else if (rule.endings) {
            const ending = rule.endings[verbObj.group] || "";
            form = stem + ending;
        }

        if (verbObj.reflexive) {
            form = this.applyReflexive(lang, form, 0); // Use first person or generic reflexive
        }

        return form;
    },

    /**
     * Generates a compound tense (Auxiliary + Participle/Infinitive).
     */
    generateCompoundTense(lang, verbObj, tense) {
        const config = GRAMMAR_CONFIG[lang];
        const tenseConfig = config.verbs.compound_tenses[tense];

        const auxVerb = tenseConfig.auxiliary || verbObj.auxiliary || config.verbs.auxiliaries[0];
        const auxObj = this.findVerb(lang, auxVerb);
        if (!auxObj) return null;

        const auxConj = this.conjugate(lang, auxObj, tenseConfig.aux);
        let participle = verbObj[tenseConfig.participle] || verbObj.word;

        // Handle separable prefix for compound tenses
        participle = this.handleSeparable(lang, participle, verbObj, tense, true);

        const result = { positive: [], negative: [] };

        auxConj.positive.forEach((auxForm, i) => {
            if (!auxForm) {
                result.positive.push("");
                result.negative.push("");
                return;
            }

            const agreedParticiple = this.applyAgreement(lang, participle, i, auxVerb);
            result.positive.push(`${auxForm} ${agreedParticiple}`);

            // Negate the auxiliary
            const auxNeg = this.generateNegations(lang, [auxForm], auxObj, false, tenseConfig.aux)[0];
            result.negative.push(`${auxNeg} ${participle}`);
        });

        return result;
    },

    /**
     * Finds a verb object in verbsData for a given language.
     */
    findVerb(lang, word) {
        let v;
        if (typeof window !== 'undefined' && window.verbsData && window.verbsData[lang]) {
            v = window.verbsData[lang].find(v => v.word === word);
        }

        const fallbacks = {
            fr: {
                'avoir': { word: 'avoir', group: 'ir', classification: 'irregular', tenses: { present_simple: { positive: ['ai', 'as', 'a', 'avons', 'avez', 'ont'] }, imperfect: { positive: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'] }, future_simple: { positive: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'] } } },
                'être': { word: 'être', group: 're', classification: 'irregular', tenses: { present_simple: { positive: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'] }, imperfect: { positive: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'] }, future_simple: { positive: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'] } } }
            },
            it: {
                'avere': { word: 'avere', group: 'ere', classification: 'irregular', tenses: { present_simple: { positive: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'] }, imperfect: { positive: ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'] } } },
                'essere': { word: 'essere', group: 'ere', classification: 'irregular', tenses: { present_simple: { positive: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'] }, imperfect: { positive: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'] } } }
            },
            es: {
                'haber': { word: 'haber', group: 'er', classification: 'irregular', tenses: { present_simple: { positive: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'] }, imperfect: { positive: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'] } } },
                'ser': { word: 'ser', group: 'er', classification: 'irregular', tenses: { present_simple: { positive: ['soy', 'eres', 'es', 'somos', 'sois', 'son'] } } }
            },
            de: {
                'haben': { word: 'haben', group: 'en', classification: 'irregular', tenses: { present_simple: { positive: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'] } } },
                'sein': { word: 'sein', group: 'en', classification: 'irregular', tenses: { present_simple: { positive: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'] } } },
                'werden': { word: 'werden', group: 'en', classification: 'irregular', tenses: { present_simple: { positive: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'] } } }
            },
            en: {
                'have': { word: 'have', group: 'regular', classification: 'irregular', tenses: { present_simple: { positive: ['have', 'have', 'has', 'have', 'have'] }, past_simple: { positive: ['had', 'had', 'had', 'had', 'had'] } } },
                'be': { word: 'be', group: 'regular', classification: 'irregular', tenses: { present_simple: { positive: ['am', 'are', 'is', 'are', 'are'] }, past_simple: { positive: ['was', 'were', 'was', 'were', 'were'] } } },
                'do': { word: 'do', group: 'regular', classification: 'irregular', tenses: { present_simple: { positive: ['do', 'do', 'does', 'do', 'do'] } } },
                'will': { word: 'will', group: 'regular', classification: 'irregular', tenses: { present_simple: { positive: ['will', 'will', 'will', 'will', 'will'] } } }
            },
            ru: {
                'быть': { word: 'быть', group: 'ть', classification: 'irregular', tenses: { present_simple: { positive: ['буду', 'будешь', 'будет', 'будем', 'будете', 'будут'] } } }
            },
            el: {
                'έχω': { word: 'έχω', group: '1st_conj', classification: 'regular', tenses: { present_simple: { positive: ['έχω', 'έχεις', 'έχει', 'έχουμε', 'έχετε', 'έχουν'] } } },
                'είμαι': { word: 'είμαι', group: '1st_conj', classification: 'irregular', tenses: { present_simple: { positive: ['είμαι', 'είσαι', 'είναι', 'είμαστε', 'είστε', 'είναι'] } } },
                'θα': { word: 'θα', group: '1st_conj', classification: 'irregular', tenses: { present_simple: { positive: ['θα', 'θα', 'θα', 'θα', 'θα', 'θα'] } } }
            }
        };

        const fallback = (fallbacks[lang] && fallbacks[lang][word]);
        if (fallback) {
            return v ? { ...v, ...fallback } : fallback;
        }

        return v || { word: word, classification: 'regular', group: word.slice(-2) };
    },

    /**
     * Extracts the stem of a verb using data-driven rules.
     */
    extractStem(lang, word, group, reflexive, tense, personIndex = null, verbObj = null) {
        const config = GRAMMAR_CONFIG[lang];
        let cleanWord = word.trim();

        const rules = config?.verbs?.stem_rules;
        if (!rules) return cleanWord.split(/[\s,]+/)[0];

        // 1. Reflexive Strip
        if (reflexive && rules.reflexive_strip) {
            cleanWord = cleanWord.replace(rules.reflexive_strip, "");
        }

        // Take first word for suffix-based stripping
        let parts = cleanWord.split(/[\s,]+/);
        let mainVerb = parts[0];

        // 2. Transformations (Check if any need to run BEFORE suffix strip)
        if (rules.transformations) {
            rules.transformations.forEach(t => {
                if (t.priority === 'before_strip') {
                    const matchTense = t.tense.includes(tense);
                    const matchGroup = !t.group || t.group === group;
                    const matchPerson = personIndex === null || !t.persons || t.persons.includes(personIndex);
                    const matchTag = !t.tags || (verbObj && verbObj.tags && t.tags.some(tag => verbObj.tags.includes(tag)));
                    if (matchTense && matchGroup && matchPerson && matchTag) {
                        mainVerb = mainVerb.replace(t.replace[0], t.replace[1]);
                    }
                }
            });
        }

        // 3. Suffix Strip
        if (rules.suffix_strip) {
            const pattern = (typeof rules.suffix_strip === 'object' && !rules.suffix_strip.test)
                ? rules.suffix_strip[group]
                : rules.suffix_strip;

            if (pattern) {
                // Ensure we handle regex patterns correctly
                const regex = (typeof pattern === 'string' || pattern instanceof RegExp) ? new RegExp(pattern) : null;
                if (regex) {
                    mainVerb = mainVerb.replace(regex, "");
                }
            }
        }

        // 4. Transformations (Default: run AFTER suffix strip)
        if (rules.transformations) {
            rules.transformations.forEach(t => {
                if (t.priority !== 'before_strip') {
                    const matchTense = t.tense.includes(tense);
                    const matchGroup = !t.group || t.group === group;
                    const matchPerson = personIndex === null || !t.persons || t.persons.includes(personIndex);
                    const matchTag = !t.tags || (verbObj && verbObj.tags && t.tags.some(tag => verbObj.tags.includes(tag)));

                    if (matchTense && matchGroup && matchPerson && matchTag) {
                        mainVerb = mainVerb.replace(t.replace[0], t.replace[1]);
                    }
                }
            });
        }


        // Special case for Russian multi-word verbs ending in space (to avoid double spacing)
        mainVerb = mainVerb.trim();

        return mainVerb;
    },

    /**
     * Applies ending and handles linguistic nuances.
     */
    applyEnding(lang, stem, ending, group, index, reflexive, originalWord, tense) {
        let word;

        if (ending.includes('[s]')) {
            word = ending.replace(/\[s\]/g, stem);
        } else if (ending.includes('-')) {
            const parts = ending.split('-');
            word = parts[0] + stem + parts[1];
        } else if (lang === 'en' && ending === 'ed') {
             if (stem.endsWith('e')) word = stem + 'd';
             else if (stem.endsWith('y') && !/[aeiou]y$/.test(stem)) word = stem.slice(0, -1) + 'ied';
             else word = stem + 'ed';
        } else {
            word = stem + ending;
        }

        if (reflexive) {
            word = this.applyReflexive(lang, word, index);
        }

        // Handle multi-word verbs while avoiding duplication
        if (originalWord && originalWord.includes(' ') && lang !== 'hy') {
             const config = GRAMMAR_CONFIG[lang];
             const rules = config?.verbs?.stem_rules;
             let fullBase = originalWord.trim();
             // Get just the verb parts (after prefix reflexive if any)
             let baseWithoutReflexive = fullBase;
             if (reflexive && rules?.reflexive_strip) {
                 baseWithoutReflexive = fullBase.replace(rules.reflexive_strip, "");
             }
             const baseParts = baseWithoutReflexive.split(' ');
             baseParts.shift(); // Remove the verb part that was conjugated

             if (baseParts.length > 0) {
                 word += ' ' + baseParts.join(' ');
             }
        }

        return word;
    },

    /**
     * Handles German separable verbs and similar structures.
     */
    handleSeparable(lang, word, verbObj, tense, isCompound) {
        const config = GRAMMAR_CONFIG[lang]?.verbs?.separable_config;
        if (!config) return word;

        const prefix = config.prefixes.find(p => verbObj.word.startsWith(p));
        if (!prefix) return word;

        if (isCompound) {
            // e.g. auf + gestellt -> aufgestellt OR auf + zu + stehen -> aufzustehen
            if (tense.includes('futur')) return word; // Non-finite/Infinitive based
            const base = word.startsWith(prefix) ? word.slice(prefix.length) : word;
            return prefix + base;
        } else {
            // Synthetic tense: e.g. stehe -> stehe auf
            const base = word.startsWith(prefix) ? word.slice(prefix.length) : word;
            return base.trim() + " " + prefix;
        }
    },

    /**
     * Applies participle agreement for Romance languages.
     */
    applyAgreement(lang, participle, index, auxVerb) {
        const config = GRAMMAR_CONFIG[lang]?.verbs?.agreement_rules;
        if (!config || auxVerb !== config.auxiliary) return participle;

        const rules = config.rules;
        const mapping = config.mapping || ['m', 'm', ['m', 'f'], 'mpl', 'mpl', ['mpl', 'fpl']];
        const key = mapping[index];

        if (Array.isArray(key)) {
            return key.map(k => participle + (rules[k] || "")).join(' / ');
        }

        return participle + (rules[key] || "");
    },

    /**
     * Applies reflexive pronouns or suffixes.
     */
    applyReflexive(lang, word, index) {
        const config = GRAMMAR_CONFIG[lang]?.verbs?.reflexive_config;
        if (!config) return word;

        if (config.type === 'suffix') {
            const suffix = (typeof config.pronouns === 'function') ? config.pronouns(word) : config.pronouns[index];
            return word + suffix;
        }

        let ref = config.pronouns[index];

        // Handle elision (e.g., French me -> m' before vowel)
        if (config.elisions && /^[aeiouh]/i.test(word) && config.elisions[ref]) {
            return config.elisions[ref] + word;
        }

        return ref + " " + word;
    },

    /**
     * Generates negations using language-specific rules.
     */
    generateNegations(lang, positives, verbObj, isCompound, tense) {
        const config = GRAMMAR_CONFIG[lang]?.verbs?.negation_config;
        if (!config || !positives) return positives;

        return positives.map((v, i) => {
            if (!v) return "";

            // Complex negation (e.g., English do not)
            if (config.pattern.includes("[aux]")) {
                if (config.exceptions?.includes(verbObj.word)) {
                    return `${v} not`;
                }
                const aux = (typeof config.defaults[tense] === 'function')
                    ? config.defaults[tense](i)
                    : config.defaults[tense];
                return config.pattern.replace("[aux]", aux).replace("[v]", verbObj.word);
            }

            let neg = config.pattern.replace("[v]", v);

            // Handle elision (e.g., French ne -> n')
            if (config.elisions) {
                for (const [plain, elided] of Object.entries(config.elisions)) {
                    const search = plain + " ";
                    if (neg.includes(search) && /^[aeiouh]/i.test(v)) {
                         neg = neg.replace(search, elided);
                    }
                }
            }

            return neg;
        });
    }
};

if (typeof module !== 'undefined') {
    module.exports = Linguistics;
} else {
    window.Linguistics = Linguistics;
}
