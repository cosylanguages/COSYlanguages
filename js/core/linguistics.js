/**
 * Dynamic Conjugation Engine for COSYlanguages
 * Handles 13 languages with regular patterns, irregular overrides,
 * synthetic tenses, and compound tense generation.
 */

const Linguistics = {
    /**
     * Conjugates a verb based on language, tense, and metadata.
     * @param {string} lang - Language code
     * @param {Object} verbObj - The verb object from verbsData
     * @param {string} tense - Tense key
     * @returns {Object} { positive: [], negative: [] }
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
            return {
                positive: verbObj.tenses[tense].positive || [],
                negative: verbObj.tenses[tense].negative || this.generateNegations(lang, verbObj.tenses[tense].positive, verbObj, false, tense)
            };
        }

        // 3. Handle Regular (Synthetic) Conjugation
        const rules = config.verbs.regular_rules[tense];
        if (!rules || !rules[verbObj.group]) {
            // Fallback: If no rules found, return identity
            const identity = Array(config.pronouns.length).fill(verbObj.word);
            return { positive: identity, negative: this.generateNegations(lang, identity, verbObj, false) };
        }

        const ruleSet = rules[verbObj.group];
        const endings = Array.isArray(ruleSet) ? ruleSet : ruleSet.endings;
        const stemSource = ruleSet.stem || rules.stem || 'word';

        const rawWordForStem = (stemSource === 'word') ? verbObj.word : (verbObj[stemSource] || verbObj.word);
        const stem = this.extractStem(lang, rawWordForStem, verbObj.group, verbObj.reflexive, tense);
        const result = { positive: [], negative: [] };

        config.pronouns.forEach((pronoun, index) => {
            const ending = endings[index] || "";
            let conjugated = this.applyEnding(lang, stem, ending, verbObj.group, index, verbObj.reflexive, verbObj.word, tense);
            result.positive.push(conjugated);
        });

        // Handle Turkic Infix Negation (ba, tt)
        if (lang === 'ba' || lang === 'tt') {
            config.pronouns.forEach((pronoun, index) => {
                const negSuffix = this.getTurkicNegationSuffix(lang, stem);
                const ending = endings[index] || "";
                let negConjugated = this.applyEnding(lang, stem + negSuffix, ending, verbObj.group, index, verbObj.reflexive, verbObj.word, tense);
                result.negative.push(negConjugated);
            });
        } else {
            result.negative = this.generateNegations(lang, result.positive, verbObj, false, tense);
        }

        return result;
    },

    getTurkicNegationSuffix(lang, stem) {
        const frontVowels = ['ә', 'ө', 'ү', 'и', 'е', 'э'];
        // Simple heuristic: if any front vowel is present, use front negation
        const isFront = frontVowels.some(v => stem.toLowerCase().includes(v));
        return isFront ? "мә" : "ма";
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
        const participle = verbObj[tenseConfig.participle] || verbObj.word;

        const result = { positive: [], negative: [] };

        auxConj.positive.forEach((auxForm, i) => {
            if (!auxForm) {
                result.positive.push("");
                result.negative.push("");
                return;
            }

            let posForm = `${auxForm} ${participle}`;
            result.positive.push(posForm);

            // Generate negative by negating the auxiliary in place
            let negForm;
            if (lang === 'en') {
                negForm = `${auxForm} not ${participle}`;
            } else if (lang === 'fr') {
                const elidedNe = /^[aeiouh]/i.test(auxForm) ? "n'" : "ne ";
                negForm = `${elidedNe}${auxForm} pas ${participle}`;
            } else if (lang === 'it' || lang === 'es' || lang === 'pt' || lang === 'ru' || lang === 'el') {
                const pattern = config.verbs.negation || "non [v]";
                negForm = pattern.replace("[v]", auxForm) + " " + participle;
            } else {
                negForm = config.verbs.negation.replace("[v]", posForm);
            }
            result.negative.push(negForm);
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
     * Extracts the stem of a verb.
     */
    extractStem(lang, word, group, reflexive, tense) {
        let cleanWord = word.trim();

        // Remove trailing punctuation (commas, etc) and take first word
        cleanWord = cleanWord.split(/[\s,]+/)[0];

        if (lang === 'fr' && (cleanWord.startsWith("se ") || cleanWord.startsWith("s'"))) {
            cleanWord = cleanWord.replace(/^se\s+/, "").replace(/^s'/, "");
        }

        if (lang === 'it' && (tense === 'future_simple' || tense === 'conditional_present') && group === 'are') {
             if (cleanWord.endsWith('are')) cleanWord = cleanWord.slice(0, -3) + 'er';
        }

        if (reflexive && (lang === 'it' || lang === 'es' || lang === 'pt')) {
             if (cleanWord.endsWith("si") || cleanWord.endsWith("se")) {
                 if (lang === 'it') {
                     if (cleanWord.endsWith("arsi")) cleanWord = cleanWord.slice(0, -4) + "are";
                     else if (cleanWord.endsWith("ersi")) cleanWord = cleanWord.slice(0, -4) + "ere";
                     else if (cleanWord.endsWith("irsi")) cleanWord = cleanWord.slice(0, -4) + "ire";
                     else cleanWord = cleanWord.slice(0, -2);
                 } else {
                     cleanWord = cleanWord.slice(0, -2);
                 }
             }
        }

        // Language-specific suffix stripping based on group name or convention
        const suffixMap = {
            'ru': /(ся|сь|ть|ти|чь)$| (ся|сь)$/, // Note: we'll handle sequential stripping for RU
            'el': { '1st_conj': /ω$/, '2nd_conj_a': /άω$/, '2nd_conj_b': /ώ$/ },
            'hy': { 'el': /ել$/, 'al': /ալ$/ },
            'tt': /([рга|ргә|ырга|ергә|у|ү])$/,
            'ba': /([рга|ргә|ырга|ергә|у|ү])$/,
            'ka': /([ნა|ა])$/
        };

        if (lang === 'el' && suffixMap[lang][group]) {
            return cleanWord.replace(suffixMap[lang][group], "");
        }
        if (lang === 'hy' && suffixMap[lang][group]) {
            return cleanWord.replace(suffixMap[lang][group], "");
        }
        if (suffixMap[lang] instanceof RegExp) {
            if (lang === 'ru') {
                // Russian reflexive and infinitive stripping
                cleanWord = cleanWord.replace(/(ся|сь)$/, "");
                return cleanWord.replace(/(ть|ти|чь)$/, "");
            }
            return cleanWord.replace(suffixMap[lang], "");
        }

        // Default stripping: if group is a suffix (e.g., 'ar', 'er')
        if (group && cleanWord.endsWith(group)) {
            return cleanWord.slice(0, -group.length);
        }

        return cleanWord;
    },

    /**
     * Applies ending and handles linguistic nuances.
     */
    applyEnding(lang, stem, ending, group, index, reflexive, originalWord, tense) {
        if (lang === 'ru' && tense === 'past_simple') {
            if (index === 0 || index === 1) return `${stem}л / ${stem}ла`;
            if (index === 2) return `${stem}л / ${stem}ла / ${stem}ло`;
            return stem + "ли";
        }

        let word;
        if (lang === 'ka' && ending.includes('-')) {
            const parts = ending.split('-');
            word = parts[0] + stem + parts[1];
        } else if (lang === 'en' && ending === 'ed') {
             // Basic English spelling rules for -ed
             if (stem.endsWith('e')) word = stem + 'd';
             else if (stem.endsWith('y') && !/[aeiou]y$/.test(stem)) word = stem.slice(0, -1) + 'ied';
             else word = stem + 'ed';
        } else {
            word = stem + ending;
        }

        if (reflexive) {
            word = this.applyReflexive(lang, word, index);
        }

        if (originalWord && originalWord.includes(' ') && lang !== 'hy') {
            const parts = originalWord.trim().split(' ');
            parts.shift();
            word += ' ' + parts.join(' ');
        }

        return word;
    },

    applyReflexive(lang, word, index) {
        const reflexivePronouns = {
            fr: ['me', 'te', 'se', 'nous', 'vous', 'se'],
            it: ['mi', 'ti', 'si', 'ci', 'vi', 'si'],
            es: ['me', 'te', 'se', 'nos', 'os', 'se'],
            pt: ['me', 'te', 'se', 'nos', 'vos', 'se'],
            ru: (w) => {
                const suffix = /[аеёиоуыэюя]$/i.test(w) ? "сь" : "ся";
                return w + suffix;
            }
        };

        const pronouns = reflexivePronouns[lang];
        if (!pronouns) return word;

        if (typeof pronouns === 'function') {
            return pronouns(word);
        }

        let ref = pronouns[index];

        if (lang === 'fr' && /^[aeiouh]/i.test(word) && ['me', 'te', 'se'].includes(ref)) {
            ref = ref.slice(0, 1) + "'";
            return ref + word;
        }

        return ref + " " + word;
    },

    generateNegations(lang, positives, verbObj, isCompound, tense) {
        const config = GRAMMAR_CONFIG[lang];
        const pattern = config?.verbs?.negation;
        if (!pattern || !positives) return positives;

        return positives.map((v, i) => {
            if (!v) return "";

            // English negation
            if (lang === 'en' && !v.includes(' ')) {
                if (!['be', 'have', 'will', 'can', 'must'].includes(verbObj.word)) {
                     let aux = (i === 2) ? 'does' : 'do';
                     if (tense === 'past_simple') aux = 'did';
                     return `${aux} not ${verbObj.word}`;
                } else {
                     return `${v} not`;
                }
            }

            if (lang === 'fr' && pattern.startsWith("ne ")) {
                if (/^[aeiouh]/i.test(v)) {
                    return pattern.replace("ne [v]", "n'" + v);
                }
            }

            return pattern.replace("[v]", v);
        });
    }
};

if (typeof module !== 'undefined') {
    module.exports = Linguistics;
} else {
    window.Linguistics = Linguistics;
}
