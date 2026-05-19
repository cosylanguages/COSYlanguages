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
                negative: verbObj.tenses[tense].negative || this.generateNegations(lang, verbObj.tenses[tense].positive)
            };
        }

        // 3. Handle Regular (Synthetic) Conjugation
        const rules = config.verbs.regular_rules[tense];
        if (!rules || !rules[verbObj.group]) {
            // Fallback: If no rules found, return identity
            const identity = Array(config.pronouns.length).fill(verbObj.word);
            return { positive: identity, negative: this.generateNegations(lang, identity) };
        }

        const endings = rules[verbObj.group];
        const stem = this.extractStem(lang, verbObj.word, verbObj.group, verbObj.reflexive);
        const result = { positive: [], negative: [] };

        config.pronouns.forEach((pronoun, index) => {
            const ending = endings[index] || "";
            let conjugated = this.applyEnding(lang, stem, ending, verbObj.group, index, verbObj.reflexive, verbObj.word, tense);
            result.positive.push(conjugated);
        });

        result.negative = this.generateNegations(lang, result.positive);
        return result;
    },

    /**
     * Generates a compound tense (Auxiliary + Participle).
     */
    generateCompoundTense(lang, verbObj, tense) {
        const config = GRAMMAR_CONFIG[lang];
        const tenseConfig = config.verbs.compound_tenses[tense];
        const auxVerb = verbObj.auxiliary || config.verbs.auxiliaries[0];

        // Find auxiliary verb data
        const auxObj = this.findVerb(lang, auxVerb);
        if (!auxObj) return null;

        const auxConj = this.conjugate(lang, auxObj, tenseConfig.aux);
        const participle = verbObj[tenseConfig.participle] || verbObj.word;

        const result = { positive: [], negative: [] };

        auxConj.positive.forEach((auxForm, i) => {
            if (!auxForm) {
                result.positive.push("");
                return;
            }
            // Handling elision for French 'avoir' (j'ai vs je ai)
            let form = `${auxForm} ${participle}`;
            if (lang === 'fr' && auxForm === 'ai') {
                // This is a bit specific, usually handled by the auxiliary's own conjugation
                // but let's ensure 'je ai' becomes 'j'ai' if not already
            }
            result.positive.push(form);
        });

        result.negative = this.generateNegations(lang, result.positive);
        return result;
    },

    /**
     * Finds a verb object in verbsData for a given language.
     */
    findVerb(lang, word) {
        if (typeof window !== 'undefined' && window.verbsData && window.verbsData[lang]) {
            const v = window.verbsData[lang].find(v => v.word === word);
            if (v) return v;
        }
        // Fallback for common auxiliaries if data not yet loaded or in node
        if (word === 'avoir') return { word: 'avoir', group: 'ir', classification: 'irregular', tenses: { present_simple: { positive: ['ai', 'as', 'a', 'avons', 'avez', 'ont'] }, imperfect: { positive: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'] } } };
        if (word === 'être') return { word: 'être', group: 're', classification: 'irregular', tenses: { present_simple: { positive: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'] }, imperfect: { positive: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'] } } };
        if (word === 'avere') return { word: 'avere', group: 'ere', classification: 'irregular', tenses: { present_simple: { positive: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'] }, imperfect: { positive: ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'] } } };
        if (word === 'essere') return { word: 'essere', group: 'ere', classification: 'irregular', tenses: { present_simple: { positive: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'] }, imperfect: { positive: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'] } } };

        return { word: word, classification: 'regular', group: word.slice(-2) };
    },

    /**
     * Extracts the stem of a verb.
     */
    extractStem(lang, word, group, reflexive) {
        let cleanWord = word.trim();

        // Multi-word phrases
        if (cleanWord.includes(' ') && lang !== 'hy') {
            cleanWord = cleanWord.split(' ')[0];
        }

        // French reflexives
        if (lang === 'fr' && (cleanWord.startsWith("se ") || cleanWord.startsWith("s'"))) {
            cleanWord = cleanWord.replace(/^se\s+/, "").replace(/^s'/, "");
        }

        // Romance reflexives at end
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

        // Russian infinitives/reflexives
        if (lang === 'ru') {
            cleanWord = cleanWord.replace(/(ся|сь)$/, "");
            cleanWord = cleanWord.replace(/(ть|ти)$/, "");
            return cleanWord;
        }

        if (group && cleanWord.endsWith(group)) {
            return cleanWord.slice(0, -group.length);
        }

        return cleanWord;
    },

    /**
     * Applies ending and handles linguistic nuances.
     */
    applyEnding(lang, stem, ending, group, index, reflexive, originalWord, tense) {
        // Special case: Russian Past Tense
        if (lang === 'ru' && tense === 'past_simple') {
            // я, ты, он -> m, мы, вы, они -> pl
            // For a general table we use masculine for sing and plural for plurals
            return index < 3 ? stem + "л" : stem + "ли";
        }

        let word = stem + ending;

        if (reflexive) {
            word = this.applyReflexive(lang, word, index);
        }

        // Re-attach multi-word suffix
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

        // French elision: me/te/se -> m'/t'/s'
        if (lang === 'fr' && /^[aeiouh]/i.test(word) && ['me', 'te', 'se'].includes(ref)) {
            ref = ref.slice(0, 1) + "'";
            return ref + word;
        }

        return ref + " " + word;
    },

    generateNegations(lang, positives) {
        const config = GRAMMAR_CONFIG[lang];
        const pattern = config?.verbs?.negation;
        if (!pattern || !positives) return positives;

        return positives.map(v => {
            if (!v) return "";

            // French negation elision: ne -> n'
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
