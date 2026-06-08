/**
 * js/core/linguistics.js
 * High-level linguistic engine for handling grammar rules, agreement, and relational markers.
 */
/**
 * Dynamic Conjugation Engine for COSYlanguages
 * Handles 13 languages with regular patterns, irregular overrides,
 * synthetic tenses, and compound tense generation.
 */

const Linguistics = {
    /**
     * Retrieves a pronoun from the structured pronoun_system or legacy config.
     * @param {string} lang - Language code
     * @param {string} category - 'personal', 'demonstrative', 'reflexive', etc.
     * @param {object} features - { case, personIndex, gender, number, proximity }
     */
    getPronoun(lang, category = 'personal', features = {}) {
        const config = GRAMMAR_CONFIG[lang];
        if (!config) return null;

        const system = config.pronoun_system;
        if (!system) {
            // Legacy fallback
            if (category === 'personal') {
                const sub = features.case ? config.pronoun_declension?.[features.case] : config.pronouns;
                return sub ? (sub[features.personIndex] || null) : null;
            }
            return null;
        }

        const catData = system.categories[category];
        if (!catData) return null;

        return this.resolvePronounForm(catData, features, config);
    },

    /**
     * Resolves the correct pronoun form based on category data and features.
     */
    resolvePronounForm(data, features, config) {
        let result = data;

        // 1. Resolve by Proximity
        if (features.proximity && result[features.proximity]) {
            result = result[features.proximity];
        }

        // 2. Resolve by Case or Type
        const key = features.case || features.type;
        const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v' };
        const caseShort = shortKeys[key] || key;

        if (key && (result[key] || result[caseShort])) {
            result = result[key] || result[caseShort];
        } else if (!key && result['subject'] && !features.proximity) {
            result = result['subject'];
        }

        // 3. Resolve by Person (if applicable)
        const hasPerson = features.personIndex !== undefined || features.personKey !== undefined;
        if (hasPerson && (result.forms || Array.isArray(result))) {
            const forms = result.forms || result;
            let pKey = features.personKey || (features.personIndex !== undefined ? features.personIndex.toString() : null);
            if (features.clusivity && forms[pKey + "_" + features.clusivity]) {
                pKey = pKey + "_" + features.clusivity;
            }
            let val = Array.isArray(forms) ? forms[features.personIndex] : forms[pKey];

            // Resolve nested register if needed
            if (typeof val === 'object' && val !== null && !val.word && features.register) {
                const regVal = val[features.register] || val.informal || val.default;
                if (regVal !== undefined) val = regVal;
            }
            result = val;
        }

        // 4. Resolve Nested Structures (Gender, Number, Register)
        let limit = 5;
        while (limit-- > 0 && typeof result === 'object' && result !== null && !result.word && !Array.isArray(result)) {
            const prev = result;
            const gen = features.gender || 'm';
            const gKey = (gen === 'feminine' || gen === 'f' || gen === 'feminine') ? 'f' : (gen === 'neuter' || gen === 'n' ? 'n' : 'm');
            const num = features.number || 'singular';
            const nKey = (num === 'plural' || num === 'pl') ? 'plural' : 'singular';
            const gPlKey = gKey + 'pl';

            if (features.register && result[features.register]) result = result[features.register];
            else if (nKey === 'plural' && result[gPlKey]) result = result[gPlKey];
            else if (result[nKey]) result = result[nKey];
            else if (result[num]) result = result[num];
            else if (result[gKey]) result = result[gKey];
            else if (result[gen]) result = result[gen];
            else if (result.default) result = result.default;

            if (result === prev) break;
        }

        // 5. Final inflection check
        if (typeof result === 'object' && result !== null) {
             if (result.word || result.declension || result.declensionGroup) {
                  if (features.case && features.case !== 'nominative' && features.case !== 'n') {
                       result = this.inflectPronoun(result, features, config);
                  } else {
                       result = result.word || result;
                  }
             }
        }

        let finalForm = (typeof result === 'string') ? result : null;

        // 6. Apply Suffixes
        if (typeof finalForm === 'string' && data.suffixes && features.proximity) {
            finalForm += (data.suffixes[features.proximity] || "");
        }

        return finalForm;
    },

    /**
     * Helper for pronoun inflection.
     */
    inflectPronoun(item, features, config) {
        const declGroup = item.declensionGroup;
        const group = (declGroup ? (config.nouns?.declension_groups?.[declGroup] || config.adjectives?.declension_groups?.[declGroup]) : null) ||
                      item.declension;
        if (!group) return item.word || null;

        const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v', ergative: 'e' };
        const caseKeyShort = shortKeys[features.case] || features.case;

        let endingData = group[features.number || 'singular'] || group;
        const gen = features.gender || 'm';
        const gKey = (gen === 'feminine' || gen === 'f') ? 'f' : (gen === 'neuter' || gen === 'n' ? 'n' : 'm');

        if (endingData[gKey]) endingData = endingData[gKey];
        else if (endingData[gen]) endingData = endingData[gen];

        const ending = endingData[caseKeyShort] || endingData[features.case];

        if (typeof ending === 'string') {
            const word = item.word || "";
            const strip = (item.stripEnding !== undefined) ? item.stripEnding : /[аоеьыйяиую]$/;
            return word.replace(strip, "") + ending;
        }
        return item.word || null;
    },

    /**
     * Retrieves a relational marker (preposition, particle, etc.) from the config.
     * @param {string} lang - Language code
     * @param {string} id - Marker ID or word
     * @param {object} features - Optional search features
     */
    getRelationalMarker(lang, id, features = {}) {
        const config = GRAMMAR_CONFIG[lang]?.relational_system;
        if (!config || !config.markers) return null;

        // Try direct lookup
        let marker = config.markers[id];

        // Try searching by word if ID didn't match
        if (!marker) {
            marker = Object.values(config.markers).find(m => m.word === id);
        }

        if (!marker) return null;

        // Handle harmony-based variants (e.g. Turkic)
        if (marker.harmony && features.targetWord) {
            const variant = this.resolveHarmonyVariant(lang, marker, features.targetWord);
            if (variant) return { ...marker, word: variant };
        }

        return marker;
    },

    /**
     * Resolves a vowel harmony variant for a marker.
     */
    resolveHarmonyVariant(lang, marker, targetWord) {
        if (!marker.variants) return marker.word;
        const config = GRAMMAR_CONFIG[lang];
        const frontVowels = config?.front_vowels || ['ә', 'ө', 'ү', 'и', 'е', 'э', 'e', 'i', 'ö', 'ü'];
        const isFront = Array.from(targetWord.toLowerCase()).some(c => frontVowels.includes(c));
        return isFront ? marker.variants.front : marker.variants.back;
    },

    /**
     * Applies a relational marker to a target (noun, pronoun, phrase).
     * @param {string} lang - Language code
     * @param {object|string} marker - Marker object or ID
     * @param {object|string} target - Target object or word
     * @param {object} features - { case, motion, motionType, context, person, number, gender }
     */
    applyRelationalMarker(lang, marker, target, features = {}) {
        const mObj = (typeof marker === 'string') ? this.getRelationalMarker(lang, marker, { targetWord: (typeof target === 'string' ? target : target.word) }) : marker;
        if (!mObj) return (typeof target === 'string' ? target : target.word);

        let result = (typeof target === 'string') ? target : target.word;

        // 1. Determine Governance Case
        let governanceCase = features.case;
        if (mObj.governance) {
            if (mObj.governance.type === 'fixed') {
                governanceCase = mObj.governance.case;
            } else if (mObj.governance.type === 'two_way' && features.motionType) {
                governanceCase = mObj.governance.cases[features.motionType] || governanceCase;
            } else if (mObj.governance.type === 'meaning_dependent' && features.meaning) {
                governanceCase = mObj.governance.cases[features.meaning] || governanceCase;
            }
        }

        // 2. Inflect Target if it's an object and has a determined case
        if (typeof target === 'object' && governanceCase) {
            if (target.form === 'noun' || target.classification) {
                result = this.inflectNoun(lang, target, features.count || 1, governanceCase);
            } else if (target.category) { // Pronoun
                result = Linguistics.getPronoun(lang, target.category, { ...features, case: governanceCase });
            }
        }

        // 3. Handle Phonological Interactions (Contractions, Elisions)
        let markerWord = mObj.word;

        // Contractions (e.g. French 'de + le' -> 'du', German 'in + dem' -> 'im')
        if (mObj.contractions) {
             const nextWord = (features.article || "").toLowerCase();
             if (mObj.contractions[nextWord]) {
                 markerWord = mObj.contractions[nextWord];
                 // Signal that the article was consumed
                 features.articleConsumed = true;
             }
        }

        // Elisions (e.g. French 'de' -> 'd'' before vowel)
        if (mObj.elisions && /^[aeiouh]/i.test(result)) {
             markerWord = mObj.elisions[features.elisionKey || 'default'] || markerWord;
        }

        // 4. Position the marker
        const position = mObj.position || 'preposed';
        switch (position) {
            case 'preposed':
                result = markerWord + (markerWord.endsWith("'") ? "" : " ") + result;
                break;
            case 'postposed':
            case 'post_target':
                result = result + " " + markerWord;
                break;
            case 'circumposed':
                result = markerWord + " " + result + " " + (mObj.closing_word || "");
                break;
            case 'attached':
                result = result + markerWord;
                break;
        }

        // 5. Apply Mutations (e.g. Celtic)
        if (mObj.mutation && typeof Morphology !== 'undefined') {
            const mutatedResult = Morphology.transform(result.split(' ').pop(), { type: 'mutation', map: this.getMutationMap(lang, mObj.mutation) });
            const parts = result.split(' ');
            parts[parts.length - 1] = mutatedResult;
            result = parts.join(' ');
        }

        return result;
    },

    /**
     * Returns mutation maps for Celtic-style mutations.
     */
    getMutationMap(lang, type) {
        const config = GRAMMAR_CONFIG[lang];
        if (config?.mutations) {
            return config.mutations[type] || {};
        }
        return {};
    },

    /**
     * Determines if a pronoun should be omitted (pro-drop).
     */
    shouldShowPronoun(lang, category = 'personal', features = {}) {
        const config = GRAMMAR_CONFIG[lang]?.pronoun_system;
        if (!config) return true;

        if (category === 'personal' && (features.case === 'subject' || !features.case) && config.pro_drop) {
            return features.emphasis || features.contrast || false;
        }
        return true;
    },

    /**
     * Handles language-specific clitic placement and attachment.
     */
    handleCliticPlacement(lang, clitic, verb, position = 'preverbal') {
        if (!clitic) return verb;
        const config = GRAMMAR_CONFIG[lang]?.pronoun_system;

        // Basic elision
        if (config?.categories?.reflexive?.elisions && /^[aeiouh]/i.test(verb)) {
             const elision = config.categories.reflexive.elisions[clitic];
             if (elision) return elision + verb;
        }

        if (position === 'preverbal') return clitic + " " + verb;
        if (position === 'postverbal') return verb + clitic; // Enclitic

        return clitic + " " + verb;
    },

    /**
     * Conjugates a verb based on language, tense, and metadata.
     */
    conjugate(lang, verbObj, tense = 'present_simple') {
        const config = GRAMMAR_CONFIG[lang];
        if (!config || !config.verbs) return null;

        if (typeof Morphology !== 'undefined' && Morphology.resolveRules(lang, verbObj, { pos: 'verb', tense })) {
             // Future extension: fully delegate verb conjugation to Morphology
        }

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
            result.negative = this.generateNegations(lang, result.positive, verbObj, false, tense) || [];
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

        const numberForm = this.getNumberForm(lang, count, config);

        if (typeof Morphology !== 'undefined') {
            return Morphology.inflect(lang, nounObj, { pos: 'noun', number: numberForm, case: grammarCase, count });
        }

        return nounObj.word;
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
            const frontVowels = config?.front_vowels || ['ә', 'ө', 'ү', 'и', 'е', 'э'];
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
     * Inflects an adjective based on gender, number, and case.
     */
    inflectAdjective(lang, adjObj, gender = 'masculine', number = 'singular', grammarCase = 'nominative', context = {}) {
        const config = GRAMMAR_CONFIG[lang]?.adjectives;
        if (!config) return typeof adjObj === 'string' ? adjObj : adjObj.word;

        if (typeof Morphology !== 'undefined' && typeof adjObj !== 'string') {
             return Morphology.inflect(lang, adjObj, { pos: 'adjective', gender, number, case: grammarCase, ...context });
        }

        return typeof adjObj === 'string' ? adjObj : adjObj.word;
    },

    /**
     * Gets the comparison form of an adjective.
     */
    getAdjectiveComparison(lang, adjObj, degree = 'comparative') {
        const config = GRAMMAR_CONFIG[lang]?.adjectives?.comparison;
        if (!config) return adjObj.word;

        if (adjObj.non_comparable || adjObj.theme === 'colors') return adjObj.word;

        // Irregular Overrides
        if (adjObj[degree]) return adjObj[degree];

        const word = adjObj.word;

        if (config.type === 'analytic') {
            const pattern = config.patterns[degree] || config.patterns['comparative'];
            return pattern.replace('[adj]', word);
        }

        if (config.type === 'synthetic') {
            const suffix = config.synthetic_suffix || config.comparative_suffix;
            if (degree === 'comparative') return word + suffix;
            if (degree === 'superlative') return (config.superlative_prefix || "") + word + (config.superlative_suffix || suffix);
        }

        if (config.type === 'both') {
            // English logic
            if (lang === 'en') {
                const syllables = word.split(/[aeiouy]+/i).length - 1;
                if (syllables < config.synthetic_threshold || (syllables === 2 && word.endsWith('y'))) {
                    const stem = word.endsWith('y') ? word.slice(0, -1) + 'i' : word;
                    return degree === 'comparative' ? stem + config.synthetic_suffix : stem + config.superlative_suffix;
                }
                return (degree === 'comparative' ? config.analytic_comparative : config.analytic_superlative) + word;
            }
            // Russian/Greek hybrid: use synthetic if word is short or has specific tag, else analytic
            if (adjObj.classification === 'synthetic_only' || word.length <= 5) {
                const suffix = config.synthetic_suffix || config.comparative_suffix;
                if (degree === 'comparative') return word + suffix;
                if (degree === 'superlative') return (config.superlative_prefix || "") + word + (config.superlative_suffix || suffix);
            }

            const pattern = config.analytic || (degree === 'comparative' ? 'more [adj]' : 'most [adj]');
            return pattern.replace('[adj]', word);
        }

        return word;
    },

    /**
     * determines adjective position relative to noun.
     */
    getAdjectivePosition(lang, adjObj, nounObj) {
        const config = GRAMMAR_CONFIG[lang]?.adjectives?.placement;
        if (!config) return 'preposed';

        if (config.preposed_list?.includes(adjObj.word)) return 'preposed';
        if (config.predicative_only?.includes(adjObj.word)) return 'predicative';

        return config.default || 'preposed';
    },

    /**
     * Sorts a list of adjectives according to language rules.
     */
    sortAdjectives(lang, adjList) {
        const config = GRAMMAR_CONFIG[lang]?.adjectives?.placement;
        if (!config || !config.order) return adjList;

        const hierarchy = config.order;
        return [...adjList].sort((a, b) => {
            const idxA = hierarchy.indexOf(a.category || a.theme?.split('_')[0] || 'opinion');
            const idxB = hierarchy.indexOf(b.category || b.theme?.split('_')[0] || 'opinion');
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
        });
    },

    /**
     * Applies agreement to an adjective or target word.
     */
    applyNounAgreement(lang, nounObj, targetWord, number = 'singular', grammarCase = 'nominative', context = {}) {
        const adjObj = (typeof targetWord === 'string') ? { word: targetWord } : targetWord;
        const finalContext = { ...context, precedingNoun: nounObj, targetWord: nounObj.word };
        return this.inflectAdjective(lang, adjObj, nounObj.gender, number, grammarCase, finalContext);
    },

    /**
     * Applies intensification to an adjective.
     */
    intensifyAdjective(lang, adjObj, level = 'very') {
        const config = GRAMMAR_CONFIG[lang]?.adjectives?.intensification;
        const word = typeof adjObj === 'string' ? adjObj : adjObj.word;

        // 1. Reduplication (Turkic: tt, ba)
        if (config?.reduplication && level === 'very') {
            const firstVowelIdx = word.search(/[aeiouäöüәөүаоуыяеёиюэ]/i);
            if (firstVowelIdx !== -1) {
                const prefix = word.slice(0, firstVowelIdx + 1);
                // In Turkic reduplication, the most common marker is 'p', but sometimes 'm', 's', 'r'
                // For COSY, we'll start with 'p' as the standard for these languages
                return prefix + 'п' + word; // e.g., s-a-rı -> sa-p-sarı
            }
        }

        // 2. Degree Particles
        const particles = {
            en: { very: 'very', extremely: 'extremely', slightly: 'slightly' },
            fr: { very: 'très', extremely: 'extrêmement', slightly: 'un peu' },
            ru: { very: 'очень', extremely: 'чрезвычайно', slightly: 'немного' },
            de: { very: 'sehr', extremely: 'äußerst', slightly: 'etwas' },
            it: { very: 'molto', extremely: 'estremamente', slightly: 'un po\'' }
        };

        const p = particles[lang]?.[level] || particles['en'][level];
        return `${p} ${word}`;
    },

    /**
     * Derives an adjective from a noun or verb base.
     */
    deriveAdjective(lang, word, sourceType = 'noun') {
        const config = GRAMMAR_CONFIG[lang]?.adjectives?.derivation;
        if (!config) return word;

        const rule = config[`${sourceType}_to_adj`];
        if (!rule) return word;

        let base = word;

        // 1. Strip final vowel if rule allows
        if (rule.strip_vowel && /[aeiouy]$/i.test(base)) {
            base = base.slice(0, -1);
        }

        // 2. Handle Turkic Harmony
        if (rule.harmony) {
            const frontVowels = config?.front_vowels || ['ә', 'ө', 'ү', 'и', 'е', 'э'];
            const isFront = Array.from(base.toLowerCase()).some(c => frontVowels.includes(c));
            const suffix = isFront ? (rule.suffixes[1] || rule.suffixes[0]) : rule.suffixes[0];
            return base + suffix;
        }

        // 3. Apply first suffix by default
        if (rule.suffixes) {
            return base + rule.suffixes[0];
        }

        return base;
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
        const config = GRAMMAR_CONFIG[lang];
        let refCfg = config?.verbs?.reflexive_config;

        // Try new pronoun_system first
        if (config?.pronoun_system?.categories?.reflexive) {
            const sysRef = config.pronoun_system.categories.reflexive;
            refCfg = { ...refCfg, ...sysRef };
        }

        if (!refCfg) return word;

        if (refCfg.type === 'suffix') {
            const suffix = (typeof refCfg.pronouns === 'function') ? refCfg.pronouns(word) : (refCfg.forms ? refCfg.forms[index] : (refCfg.pronouns ? refCfg.pronouns[index] : ""));
            return word + suffix;
        }

        const refPronouns = refCfg.forms || refCfg.pronouns;
        let ref = Array.isArray(refPronouns) ? refPronouns[index] : (refPronouns || "");

        // Handle elision (e.g., French me -> m' before vowel)
        if (refCfg.elisions && /^[aeiouh]/i.test(word) && refCfg.elisions[ref]) {
            return refCfg.elisions[ref] + word;
        }

        return ref ? (ref + " " + word) : word;
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
