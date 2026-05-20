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
    inflectNoun(lang, nounObj, count = 1, grammarCase = 'nominative') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config) return nounObj.word;

        let word = nounObj.word;

        // 1. Determine Grammatical Number Form
        const numberForm = this.getNumberForm(lang, count, config);

        // 2. Handle Overrides (Irregulars)
        if (nounObj.inflections && nounObj.inflections[numberForm] && nounObj.inflections[numberForm][grammarCase]) {
            return nounObj.inflections[numberForm][grammarCase];
        }
        if (numberForm !== 'singular' && nounObj.plural && grammarCase === 'nominative') {
            return nounObj.plural;
        }

        // 3. Apply Stem changes if defined
        let stem = nounObj.stem || word;

        // 4. Case Declension and Number Formation
        word = this.applyNounRules(lang, stem, nounObj, numberForm, grammarCase, config, count);

        return word;
    },

    /**
     * Resolves the grammatical number form (singular, dual, paucal, plural) for a given count.
     */
    getNumberForm(lang, count, config) {
        if (typeof count === 'string') return count;

        const system = config.number_system;
        if (!system) return count === 1 ? 'singular' : 'plural';

        if (typeof system.mapping === 'function') {
            return system.mapping(count);
        }

        if (system.rule === 'plural_if_abs_gt_1') {
            return Math.abs(count) > 1 ? 'plural' : 'singular';
        }

        if (system.rule === 'plural_if_abs_geq_2') {
            return Math.abs(count) >= 2 ? 'plural' : 'singular';
        }

        return count === 1 ? 'singular' : 'plural';
    },

    /**
     * Internal helper for applying noun inflection rules.
     */
    applyNounRules(lang, word, nounObj, numberForm, grammarCase, config, count = 1) {
        let inflected = word;

        // 0. Handle Slavic/Russian Paucal/Plural re-mapping for nominative requests
        if (lang === 'ru' && grammarCase === 'nominative' && typeof count === 'number') {
             if (numberForm === 'paucal') return this.applyCaseRules(lang, inflected, nounObj, 'singular', 'genitive', config);
             if (numberForm === 'plural') return this.applyCaseRules(lang, inflected, nounObj, 'plural', 'genitive', config);
        }

        // 1. Handle Declension Groups
        if (config.declension_groups && nounObj.declensionGroup) {
            const group = config.declension_groups[nounObj.declensionGroup];
            if (group) {
                const groupData = group[numberForm] || group;
                const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v', ergative: 'e' };
                const caseKey = shortKeys[grammarCase] || grammarCase;
                const ending = groupData[caseKey] || groupData[grammarCase];
                if (typeof ending === 'string') {
                    if (nounObj.stripEnding) {
                        inflected = inflected.replace(new RegExp(nounObj.stripEnding + "$"), "");
                    }
                    return inflected + ending;
                }
                // Handle cases where groupData might be the case mapping directly (if not nested by numberForm)
                if (groupData[caseKey] || groupData[grammarCase]) {
                    const e = groupData[caseKey] || groupData[grammarCase];
                    if (typeof e === 'string') {
                         if (nounObj.stripEnding) inflected = inflected.replace(new RegExp(nounObj.stripEnding + "$"), "");
                         return inflected + e;
                    }
                }
            }
        }

        // 2. Legacy/Specific Pluralization Rules
        if (numberForm !== 'singular' && grammarCase === 'nominative') {
             inflected = this.applyPluralRules(lang, inflected, nounObj, config, count);
        }

        // 3. Legacy/Specific Case Rules
        if (grammarCase !== 'nominative' && numberForm === 'singular') {
             inflected = this.applyCaseRules(lang, inflected, nounObj, numberForm, grammarCase, config);
        }

        return inflected;
    },

    /**
     * Data-driven pluralization.
     */
    applyPluralRules(lang, word, nounObj, config, count = 'plural') {
        const numberForm = typeof count === 'number' ? this.getNumberForm(lang, count, config) : count;

        if (lang === 'ru' && typeof count === 'number') {
            if (numberForm === 'paucal') return this.applyCaseRules(lang, word, nounObj, 'singular', 'genitive', config);
            if (numberForm === 'plural') return this.applyCaseRules(lang, word, nounObj, 'plural', 'genitive', config);
        }

        const rules = config.plural_rules;
        if (!rules && !config.plural_suffix && !config.plural_patterns) return word;

        if (config.plural_suffix) return word + config.plural_suffix;

        if (lang === 'tt' || lang === 'ba') {
            const frontVowels = ['ә', 'ө', 'ү', 'и', 'е', 'э'];
            const isFront = Array.from(word.toLowerCase()).some(c => frontVowels.includes(c));
            return word + (isFront ? rules.front : rules.back);
        }

        if (['en', 'es', 'fr', 'pt'].includes(lang)) {
            const overrides = rules?.overrides || {};
            for (const [end, rep] of Object.entries(overrides)) {
                if (word.endsWith(end)) return word.slice(0, -end.length) + rep;
            }
            if (rules?.cons_end && !/[aeiou]$/i.test(word)) return word + rules.cons_end;
            return word + (rules?.default || 's');
        }

        if (lang === 'it') {
            const gender = nounObj.gender === 'feminine' ? 'f' : 'm';
            const gRules = rules?.[gender];
            if (gRules) {
                for (const [end, rep] of Object.entries(gRules)) {
                    if (word.endsWith(end)) return word.slice(0, -end.length) + rep;
                }
            }
        }

        if (lang === 'hy') {
             const v = config.vowels || 'աեէըիոօու';
             const syllableCount = word.split(new RegExp('[' + v + ']')).length - 1;
             return word + (syllableCount <= 1 ? rules.monosyllabic : rules.polysyllabic);
        }

        return word;
    },

    /**
     * Handles case declension for supported languages.
     */
    applyCaseRules(lang, word, nounObj, number, grammarCase, config) {
        if (grammarCase === 'nominative') return word;

        // Data-driven declension (Already partially handled in applyNounRules, but keeping for direct calls)
        if (config.declension_groups && nounObj.declensionGroup) {
             const group = config.declension_groups[nounObj.declensionGroup];
             const groupData = group[number] || group;
             const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v', ergative: 'e' };
             const caseKey = shortKeys[grammarCase] || grammarCase;
             const ending = groupData[caseKey] || groupData[grammarCase];
             if (typeof ending === 'string') {
                 let inflected = word;
                 if (nounObj.stripEnding) inflected = inflected.replace(new RegExp(nounObj.stripEnding + "$"), "");
                 return inflected + ending;
             }
        }

        // Language-specific fallbacks for un-migrated data
        if (lang === 'el' && number === 'singular') {
            if (word.endsWith('ος')) {
                if (grammarCase === 'accusative' || grammarCase === 'vocative') return word.slice(0, -1);
                if (grammarCase === 'genitive') return word.slice(0, -2) + 'ου';
            }
            if (word.endsWith('α') || word.endsWith('η')) {
                if (grammarCase === 'genitive') return word + 'ς';
            }
        }

        if (lang === 'ru' && number === 'singular') {
            const gender = nounObj.gender || 'masculine';
            if (gender === 'feminine' && word.endsWith('а')) {
                if (grammarCase === 'accusative') return word.slice(0, -1) + 'у';
                if (grammarCase === 'genitive') {
                     const stem = word.slice(0, -1);
                     const isSoft = /[гкхжчшщ]$/i.test(stem);
                     return stem + (isSoft ? 'и' : 'ы');
                }
                if (grammarCase === 'dative' || grammarCase === 'prepositional') return word.slice(0, -1) + 'е';
            }
            if (gender === 'masculine' && !/[аеёиоуыэюя]$/i.test(word)) {
                if (grammarCase === 'genitive') return word + 'а';
                if (grammarCase === 'dative') return word + 'у';
                if (grammarCase === 'prepositional') return word + 'е';
            }
        }

        if (lang === 'ru' && (number === 'plural' || number === 'paucal')) {
            if (grammarCase === 'genitive') {
                if (word.endsWith('а')) return word.slice(0, -1);
                if (!/[аеёиоуыэюя]$/i.test(word)) return word + 'ов';
                if (word.endsWith('о')) return word.slice(0, -1);
            }
        }

        return word;
    },

    /**
     * Gets the correct article for a noun.
     */
    getArticle(lang, nounObj, type = 'definite', grammarCase = 'nominative', count = 1) {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config || !config.article_map) return "";

        const numberForm = this.getNumberForm(lang, count, config);
        const map = config.article_map[type];
        if (!map) return "";

        const gender = nounObj.gender || 'masculine';
        const gKey = (gender === 'feminine') ? 'f' : (gender === 'neuter' ? 'n' : 'm');

        // Armenian suffix articles
        if (config.article_config?.position === 'postposed' && config.article_config?.type === 'suffix') {
            const v = config.vowels || 'աեէըիոօու';
            const endsWithVowel = new RegExp('[' + v + ']$', 'i').test(nounObj.word);
            return endsWithVowel ? map.vowel : map.consonant;
        }

        // Array-based declension (German/Greek)
        if (Array.isArray(map[gKey]) || Array.isArray(map.pl) || Array.isArray(map[gKey + 'pl'])) {
            const cases = config.cases || ['nominative'];
            const idx = cases.indexOf(grammarCase);
            if (numberForm !== 'singular') {
                if (type === 'indefinite') return "";
                const plData = map.pl || map[gKey + 'pl'];
                return plData ? (plData[idx] || plData[0]) : "";
            }
            return map[gKey][idx] || map[gKey][0];
        }

        // Italian phonetic selection
        if (lang === 'it' && config.article_config?.phonetic_selection) {
            const isVowel = /^[aeiou]/i.test(nounObj.word);
            const isSpecial = /^(z|s[bcdfghlmnpqrstvwxyz])/i.test(nounObj.word);
            const key = numberForm !== 'singular' ? gKey + 'pl' : gKey;
            const sub = map[key];
            if (!sub) return "";
            if (typeof sub === 'string') return sub;
            if (isVowel && sub.vowel) return sub.vowel;
            if (isSpecial && sub.z_s_cons) return sub.z_s_cons;
            return sub.default || "";
        }

        // Standard preposed articles
        let key = gKey;
        if (numberForm !== 'singular') {
            if (map.pl) key = 'pl';
            else if (map[gKey + 'pl']) key = gKey + 'pl';
            else return "";
        }

        let art = map[key] || "";

        // French elision
        if (lang === 'fr' && numberForm === 'singular' && /^[aeiouh]/i.test(nounObj.word) && map.elided) {
            return map.elided;
        }

        return art;
    },

    /**
     * Applies possession suffixes based on person and number.
     */
    applyPossession(lang, nounObj, person = '1s', number = 'singular') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        const posConfig = config?.possession_config || config?.possession;
        if (!posConfig) return nounObj.word;

        const word = nounObj.word;

        // 1. Suffix-based (Turkic)
        if (posConfig.type === 'suffix' || posConfig[number]) {
            const level = posConfig[number] || posConfig;
            if (!level[person]) return word;

            const rules = level[person];
            const frontVowels = ['ә', 'ө', 'ү', 'и', 'е', 'э'];
            const backVowels = ['а', 'о', 'у', 'ы'];
            const vowels = [...frontVowels, ...backVowels];

            let lastVowel = null;
            for (let i = word.length - 1; i >= 0; i--) {
                if (vowels.includes(word[i].toLowerCase())) {
                    lastVowel = word[i].toLowerCase();
                    break;
                }
            }

            const isFront = lastVowel ? frontVowels.includes(lastVowel) : true;
            let suffix = isFront ? rules.front : rules.back;

            let base = word;
            if (lang === 'tt' || lang === 'ba') {
                if (base.endsWith('п')) base = base.slice(0, -1) + 'б';
                if (base.endsWith('к')) base = base.slice(0, -1) + 'г';
                if (/[аеёиоуыэюяәөү]$/i.test(word) && (person === '1s' || person === '2s')) {
                    suffix = suffix.slice(1);
                }
            }

            if (rules.vowel && /[аеёиоуыэюяәөү]$/i.test(word)) {
                const vSuffixes = rules.vowel.split('/');
                return word + (isFront ? vSuffixes[1] || vSuffixes[0] : vSuffixes[0]);
            }
            return base + suffix;
        }

        // 2. Prepositional (Romance, Breton)
        if (posConfig.type === 'preposition') {
             return posConfig.marker + " " + word;
        }

        // 3. Clitic (English)
        if (posConfig.type === 'clitic') {
             return word + (word.endsWith('s') ? "'" : posConfig.marker);
        }

        return word;
    },

    /**
     * Applies agreement to an adjective or target word.
     */
    applyNounAgreement(lang, nounObj, targetWord, number = 'singular', grammarCase = 'nominative') {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config) return targetWord;

        const gender = nounObj.gender || 'masculine';
        const numberForm = this.getNumberForm(lang, number, config);
        let word = targetWord;

        // 1. Romance Adjective Agreement
        if (['fr', 'es', 'it', 'pt'].includes(lang)) {
            const isFem = gender === 'feminine';
            const isPlural = numberForm !== 'singular';

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

        // 2. German/Slavic Adjective Declension
        if (lang === 'de' || lang === 'ru') {
            const isPlural = numberForm !== 'singular';
            const idx = (config.cases || ['nominative']).indexOf(grammarCase);

            if (lang === 'de') {
                if (isPlural) word += 'en';
                else if (grammarCase === 'nominative') word += 'e';
                else if (gender === 'masculine' && grammarCase === 'accusative') word += 'en';
                else if (grammarCase === 'dative' || grammarCase === 'genitive') word += 'en';
                else word += 'e';
            }

            if (lang === 'ru') {
                if (isPlural) word += 'ые';
                else if (gender === 'feminine') word += 'ая';
                else if (gender === 'neuter') word += 'ое';
                else word += 'ый';
            }
        }

        return word;
    },

    /**
     * Gets the correct classifier or measure word for a noun.
     */
    getClassifier(lang, nounObj) {
        const config = GRAMMAR_CONFIG[lang]?.nouns;
        if (!config || !config.classifier_map) return "";

        const classKey = nounObj.nounClass || 'default';
        return config.classifier_map[classKey] || config.classifier_map['default'] || "";
    },

    /**
     * Applies diminutive or augmentative suffixes to a noun.
     */
    applyNounForm(lang, word, form = 'diminutive') {
        const config = GRAMMAR_CONFIG[lang]?.nouns?.form_rules;
        if (!config || !config[form]) return word;

        const rules = config[form];
        for (const [end, rep] of Object.entries(rules.overrides || {})) {
            if (word.endsWith(end)) return word.slice(0, -end.length) + rep;
        }
        return word + (rules.default || "");
    },

    /**
     * Applies honorific markers to a noun.
     */
    applyHonorific(lang, word) {
        const config = GRAMMAR_CONFIG[lang]?.nouns?.honorific_config;
        if (!config) return word;

        if (config.type === 'prefix') return (config.marker || "") + word;
        if (config.type === 'suffix') return word + (config.marker || "");

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
