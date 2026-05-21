/**
 * Morphology Engine for COSYlanguages
 * A scalable, reusable, language-aware system for word form generation and analysis.
 */

const Morphology = {
    /**
     * The core transformation pipeline.
     * Applies a sequence of morphological operations to a word.
     */
    transform(word, rules, context = {}) {
        if (!rules) return word;
        let result = word;

        const ruleList = Array.isArray(rules) ? rules : [rules];

        for (const rule of ruleList) {
            // Check for conditions (syllables, endings, tags, etc.)
            if (rule.condition && !this.checkCondition(result, rule.condition, context)) {
                continue;
            }

            switch (rule.type) {
                case 'suffix':
                    result = this.applySuffix(result, rule, context);
                    if (rule.condition && rule.condition.endsWith) return result; // Stop after override
                    break;
                case 'prefix':
                    result = this.applyPrefix(result, rule, context);
                    break;
                case 'infix':
                    result = this.applyInfix(result, rule, context);
                    break;
                case 'replace':
                    result = this.applyReplace(result, rule, context);
                    break;
                case 'mutation':
                    result = this.applyMutation(result, rule, context);
                    break;
                case 'vowel_harmony':
                    result = this.applyVowelHarmony(result, rule, context);
                    break;
                case 'template':
                    result = this.applyTemplate(result, rule, context);
                    break;
            }
        }

        return result;
    },

    /**
     * Checks if a word meets certain conditions before applying a rule.
     */
    checkCondition(word, condition, context) {
        if (condition.syllables) {
            const count = this.countSyllables(word, context.lang);
            if (condition.syllables.min && count < condition.syllables.min) return false;
            if (condition.syllables.max && count > condition.syllables.max) return false;
            if (condition.syllables.exactly && count !== condition.syllables.exactly) return false;
        }

        if (condition.endsWith) {
            const ends = Array.isArray(condition.endsWith) ? condition.endsWith : [condition.endsWith];
            if (!ends.some(e => word.endsWith(e))) return false;
        }

        if (condition.startsWith) {
            const starts = Array.isArray(condition.startsWith) ? condition.startsWith : [condition.startsWith];
            if (!starts.some(s => word.startsWith(s))) return false;
        }

        if (condition.tags && context.tags) {
            if (!condition.tags.some(t => context.tags.includes(t))) return false;
        }

        if (condition.pattern) {
            const regex = condition.pattern instanceof RegExp ? condition.pattern : new RegExp(condition.pattern);
            if (!regex.test(word)) return false;
        }

        return true;
    },

    /**
     * Helper to count syllables based on language-specific vowel definitions.
     */
    countSyllables(word, lang) {
        const config = typeof GRAMMAR_CONFIG !== 'undefined' ? GRAMMAR_CONFIG[lang] : null;
        const vowels = config?.vowels || 'aeiouyäöüәөүаоуыяеёиюэ';
        const matches = word.toLowerCase().match(new RegExp('[' + vowels + ']+', 'g'));
        return matches ? matches.length : 0;
    },

    /**
     * Applies a suffix rule.
     */
    applySuffix(word, rule, context) {
        if (rule.strip) {
            const pattern = rule.strip instanceof RegExp ? rule.strip : new RegExp(rule.strip + "$");
            word = word.replace(pattern, "");
        }
        return word + (rule.value || "");
    },

    /**
     * Applies a prefix rule.
     */
    applyPrefix(word, rule, context) {
        if (rule.strip) {
            const pattern = rule.strip instanceof RegExp ? rule.strip : new RegExp("^" + rule.strip);
            word = word.replace(pattern, "");
        }
        return (rule.value || "") + word;
    },

    /**
     * Applies an infix rule.
     */
    applyInfix(word, rule, context) {
        const position = rule.position || 1;
        return word.slice(0, position) + (rule.value || "") + word.slice(position);
    },

    /**
     * Applies a replace rule (regex or string).
     */
    applyReplace(word, rule, context) {
        const pattern = rule.pattern instanceof RegExp ? rule.pattern : new RegExp(rule.pattern, rule.flags || "");
        return word.replace(pattern, rule.replacement || "");
    },

    /**
     * Applies a mutation rule (e.g. Celtic mutations).
     */
    applyMutation(word, rule, context) {
        if (!rule.map) return word;
        const first = word[0];
        const mutated = rule.map[first] || rule.map[first.toUpperCase()]?.toLowerCase() || first;
        return mutated + word.slice(1);
    },

    /**
     * Applies vowel harmony (e.g. Turkic).
     */
    applyVowelHarmony(word, rule, context) {
        const config = typeof GRAMMAR_CONFIG !== 'undefined' ? GRAMMAR_CONFIG[context.lang] : null;
        const frontVowels = rule.front_vowels || config?.front_vowels || ['ә', 'ө', 'ү', 'и', 'е', 'э', 'e', 'i', 'ö', 'ü'];

        // Detect if word has front vowels
        const isFront = Array.from(word.toLowerCase()).some(c => frontVowels.includes(c));

        const suffix = isFront ? rule.front : rule.back;
        return word + suffix;
    },

    /**
     * Applies a template rule.
     */
    applyTemplate(word, rule, context) {
        let result = rule.value;
        if (result.includes('[s]')) {
            result = result.replace(/\[s\]/g, word);
        }
        return result;
    },

    /**
     * High-level entry point for inflection.
     */
    inflect(lang, lemmaObj, features) {
        const config = typeof GRAMMAR_CONFIG !== 'undefined' ? GRAMMAR_CONFIG[lang] : null;
        if (!config) return typeof lemmaObj === 'string' ? lemmaObj : lemmaObj.word;

        // Invariable check
        if (lemmaObj.invariable || (lemmaObj.theme === 'colors' && lemmaObj.isNounBase)) {
            return lemmaObj.word;
        }

        const word = typeof lemmaObj === 'string' ? lemmaObj : lemmaObj.word;
        const context = { lang, ...features, tags: lemmaObj.tags || [] };

        // 1. Check for Irregular Overrides
        if (lemmaObj.inflections) {
            const form = this.resolveInflectionOverride(lemmaObj.inflections, features);
            if (form) return form;
        }

        // 2. Resolve Rule Set based on features (e.g., pos, tense, case, etc.)
        const rules = this.resolveRules(lang, lemmaObj, features);
        if (!rules) return word;

        return this.transform(word, rules, context);
    },

    /**
     * Resolves an inflection override from an irregular word object.
     */
    resolveInflectionOverride(inflections, features) {
        const keys = ['number', 'case', 'gender'];
        let current = inflections;

        for (const key of keys) {
            const val = features[key];
            if (val && current[val]) {
                current = current[val];
            } else {
                break;
            }
        }
        return (typeof current === 'string') ? current : null;
    },

    /**
     * Resolves the appropriate rule set from GRAMMAR_CONFIG.
     */
    resolveRules(lang, lemmaObj, features) {
        const config = GRAMMAR_CONFIG[lang];
        const pos = features.pos || lemmaObj.form || 'noun';
        const posConfig = config[pos + 's'] || config[pos];
        if (!posConfig) return null;

        let pipeline = [];

        if (pos === 'noun') {
            const groupKey = lemmaObj.declensionGroup || (lang === 'ru' ? (lemmaObj.word.endsWith('а') ? '1st' : (lemmaObj.word.endsWith('о') || lemmaObj.word.endsWith('е') ? '2nd_n' : (lemmaObj.word.endsWith('ь') ? '3rd' : '2nd_m'))) : null);
            const group = posConfig.declension_groups?.[groupKey];
            if (group) {
                const numData = group[features.number] || group;
                const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v', ergative: 'e' };
                const caseKey = shortKeys[features.case] || features.case;
                const ending = numData[caseKey] || numData[features.case];
                if (typeof ending === 'string') {
                    const strip = lemmaObj.stripEnding || (lang === 'ru' ? /[аоеь]$/ : null);
                    pipeline.push({ type: 'suffix', value: ending, strip: strip });
                }
            }

            // Plural rules (for nominative if not in declension group)
            if (features.number !== 'singular' && features.case === 'nominative' && pipeline.length === 0) {
                const rules = posConfig.plural_rules;
                if (rules) {
                    if (lang === 'tt' || lang === 'ba') {
                        return { type: 'vowel_harmony', front: rules.front, back: rules.back };
                    }
                    if (lang === 'hy') {
                        return [
                            { type: 'suffix', value: rules.monosyllabic, condition: { syllables: { max: 1 } } },
                            { type: 'suffix', value: rules.polysyllabic, condition: { syllables: { min: 2 } } }
                        ];
                    }

                    const p = [];
                    if (rules.overrides) {
                        for (const [end, rep] of Object.entries(rules.overrides)) {
                            p.push({ type: 'suffix', strip: end, value: rep, condition: { endsWith: end } });
                        }
                    }
                    if (rules.cons_end) {
                        p.push({ type: 'suffix', value: rules.cons_end, condition: { pattern: /[^aeiouäöüәөүаоуыяеёиюэ]$/i } });
                    }
                    if (rules.default) {
                        p.push({ type: 'suffix', value: rules.default });
                    }
                    return p.length > 0 ? p : null;
                }
                if (posConfig.plural_suffix) {
                    return { type: 'suffix', value: posConfig.plural_suffix };
                }
            }

            // Possession
            if (features.person) {
                const pConfig = posConfig.possession_config || posConfig.possession;
                if (pConfig && pConfig.type === 'suffix') {
                    const level = pConfig[features.number] || pConfig;
                    const rule = level[features.person];
                    if (rule) {
                        if (rule.front && rule.back) {
                            return { type: 'vowel_harmony', front: rule.front, back: rule.back };
                        }
                        return { type: 'suffix', value: rule.default || rule };
                    }
                }
            }
        }

        if (pos === 'adjective') {
            // German Predicative No-Ending
            if (posConfig.placement?.predicative_no_ending && features.usage === 'predicative') {
                 return pipeline;
            }

            const groupKey = lemmaObj.declensionGroup || (lang === 'ru' ? (lemmaObj.word.endsWith('ий') ? 'soft' : 'hard') : 'strong');
            const group = posConfig.declension_groups?.[groupKey] || posConfig.declension?.[features.definiteness || 'strong'];

            // Romance/Simple Agreement
            if (!group && posConfig.rules) {
                const isFem = features.gender === 'feminine';
                const isPlural = features.number === 'plural' || features.number > 1;

                if (lang === 'fr') {
                    if (isFem) {
                        const femRules = posConfig.rules.feminine;
                        if (femRules.overrides) {
                            for (const [end, rep] of Object.entries(femRules.overrides)) {
                                pipeline.push({ type: 'suffix', strip: end, value: rep, condition: { endsWith: end } });
                            }
                        }
                        pipeline.push({ type: 'suffix', value: femRules.default });
                    }
                    if (isPlural) {
                        const plRules = posConfig.rules.plural;
                        if (plRules.overrides) {
                            for (const [end, rep] of Object.entries(plRules.overrides)) {
                                pipeline.push({ type: 'suffix', strip: end, value: rep, condition: { endsWith: end } });
                            }
                        }
                        pipeline.push({ type: 'suffix', value: plRules.default });
                    }
                } else if (lang === 'it') {
                     if (posConfig.rules.o_to_a && isFem && lemmaObj.word.endsWith('o')) {
                         pipeline.push({ type: 'suffix', strip: 'o', value: 'a' });
                     }
                     const genderKey = isFem ? 'f' : 'm';
                     const gRules = posConfig.rules[genderKey];
                     if (isPlural && gRules) {
                         for (const [end, rep] of Object.entries(gRules)) {
                             pipeline.push({ type: 'suffix', strip: end, value: rep, condition: { endsWith: end } });
                         }
                     }
                }
            }

            if (group) {
                const numberForm = (features.number === 'plural' || features.number > 1) ? 'plural' : 'singular';
                const genderKey = (features.gender === 'feminine') ? 'f' : (features.gender === 'neuter' ? 'n' : 'm');
                const shortKeys = { nominative: 'n', genitive: 'g', accusative: 'a', dative: 'd', instrumental: 'i', prepositional: 'p', vocative: 'v' };
                const caseKey = shortKeys[features.case] || features.case;

                let ending;
                const nounConfig = config.nouns || config.noun;
                if (numberForm === 'plural') {
                    const plData = group[numberForm];
                    ending = Array.isArray(plData) ? plData[nounConfig.cases.indexOf(features.case)] : (plData[caseKey] || plData[features.case]);
                } else {
                    const gData = group[numberForm][genderKey];
                    ending = Array.isArray(gData) ? gData[nounConfig.cases.indexOf(features.case)] : (gData[caseKey] || gData[features.case]);
                }

                if (typeof ending === 'string') {
                    const stripPattern = (lang === 'ru') ? /(ый|ий|ое|ее|ая|яя|ые|ие)$/ : (lang === 'el' ? /(ος|η|ο)$/ : null);
                    pipeline.push({ type: 'suffix', value: ending, strip: stripPattern });
                }
            }
        }

        if (pos === 'pronoun') {
             const decl = config.pronoun_declension;
             if (decl && decl[features.case]) {
                 const form = decl[features.case][features.personIndex];
                 if (form) pipeline.push({ type: 'template', value: form });
             }
        }

        // Slavic/Russian Paucal/Plural re-mapping
        if (lang === 'ru' && features.case === 'nominative' && typeof features.count === 'number') {
            const numberForm = features.number;
            if (numberForm === 'paucal') return this.resolveRules(lang, lemmaObj, { ...features, number: 'singular', case: 'genitive' });
            if (numberForm === 'plural') return this.resolveRules(lang, lemmaObj, { ...features, number: 'plural', case: 'genitive' });
        }

        // Language-Specific Orthography/Post-processing Rules
        const orthRules = config.orthography_rules || [];
        orthRules.forEach(rule => {
            const trigger = rule.trigger;
            if (trigger.pos && !trigger.pos.includes(pos)) return;
            if (trigger.case && trigger.case !== features.case) return;
            if (trigger.number && trigger.number !== features.number) return;
            pipeline.push(rule.action);
        });

        if (pos === 'adjective') {
            // Phonetic Variants (French/Italian)
            if (posConfig.rules?.phonetic_variants && features.targetWord) {
                const variants = posConfig.rules.phonetic_variants;
                const target = features.targetWord;
                const isVowel = /^[aeiouh]/i.test(target);
                const isSpecial = /^(z|s[bcdfghlmnpqrstvwxyz])/i.test(target);

                if (lang === 'fr' && isVowel && variants.vowel_or_h[lemmaObj.word]) {
                    pipeline.push({ type: 'template', value: variants.vowel_or_h[lemmaObj.word] });
                } else if (lang === 'it' && variants[lemmaObj.word]) {
                    const sub = variants[lemmaObj.word];
                    if (isVowel && sub.vowel) pipeline.push({ type: 'template', value: sub.vowel });
                    else if (isSpecial && sub.z_s_cons) pipeline.push({ type: 'template', value: sub.z_s_cons });
                    else if (sub.default) pipeline.push({ type: 'template', value: sub.default });
                }
            }

            // Breton Mutation
            if (lang === 'br' && posConfig.mutation_rules && features.precedingNoun?.gender === 'feminine') {
                pipeline.push({ type: 'mutation', map: { 'K': 'G', 'k': 'g', 'T': 'D', 't': 'd', 'P': 'B', 'p': 'b', 'G': 'C\'H', 'g': 'c\'h', 'D': 'Z', 'd': 'z', 'B': 'V', 'b': 'v', 'M': 'V', 'm': 'v' } });
            }
        }

        return pipeline.length > 0 ? pipeline : null;
    },

    /**
     * High-level entry point for derivation.
     */
    derive(lang, word, sourcePos, targetPos, features = {}) {
        const config = typeof GRAMMAR_CONFIG !== 'undefined' ? GRAMMAR_CONFIG[lang] : null;
        const derivConfig = config?.derivation || config?.adjectives?.derivation;
        if (!derivConfig) return word;

        const ruleKey = `${sourcePos}_to_${targetPos}`;
        const rules = derivConfig[ruleKey];
        if (!rules) return word;

        return this.transform(word, rules, { lang, ...features });
    },

    /**
     * Identifies lemma and features from an inflected form.
     */
    analyze(lang, word, posHint = null) {
        const config = typeof GRAMMAR_CONFIG !== 'undefined' ? GRAMMAR_CONFIG[lang] : null;
        if (!config) return null;

        const results = [];
        const posTypes = posHint ? [posHint] : ['verb', 'noun', 'adjective'];

        for (const pos of posTypes) {
            const posConfig = config[pos + 's'] || config[pos];
            if (!posConfig) continue;
            const analyzed = this.reverseRuleSearch(lang, word, pos, posConfig);
            if (analyzed) results.push(...analyzed);
        }

        return results;
    },

    /**
     * Internal helper to scan grammar config for rules that could have produced the word.
     */
    reverseRuleSearch(lang, word, pos, posConfig) {
        const results = [];
        if (pos === 'verb') {
            const rules = posConfig.regular_rules;
            for (const [tense, groupRules] of Object.entries(rules || {})) {
                for (const [group, endings] of Object.entries(groupRules)) {
                    if (Array.isArray(endings)) {
                        endings.forEach((ending, personIndex) => {
                            if (ending && word.endsWith(ending)) {
                                const stem = word.slice(0, -ending.length);
                                results.push({
                                    lemma: stem + group,
                                    pos: 'verb',
                                    features: { tense, person: personIndex, group }
                                });
                            }
                        });
                    }
                }
            }
        } else if (pos === 'noun' && posConfig.declension_groups) {
             for (const [groupName, groupData] of Object.entries(posConfig.declension_groups)) {
                 const numbers = ['singular', 'plural', 'paucal', 'dual'];
                 for (const num of numbers) {
                     const numData = groupData[num] || groupData;
                     for (const [caseKey, ending] of Object.entries(numData)) {
                         if (typeof ending === 'string' && ending && word.endsWith(ending)) {
                             const stem = word.slice(0, -ending.length);
                             results.push({
                                 lemma: stem,
                                 pos: 'noun',
                                 features: { number: num, case: caseKey, declensionGroup: groupName }
                             });
                         }
                     }
                 }
             }
        }
        return results;
    }
};

if (typeof module !== 'undefined') {
    module.exports = Morphology;
} else {
    window.Morphology = Morphology;
}
