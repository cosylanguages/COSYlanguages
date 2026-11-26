/**
 * COSY Languages - Writing Evaluator Module
 * Client-side analytic rubric analyzer and teacher review workflow.
 *
 * Every heuristic here is language-aware: connectors, formal markers and the
 * long-word threshold come from the language profile, and tokenisation keeps
 * Unicode letters so Greek and Cyrillic text is measured, not erased.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYWritingEvaluator = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const BANDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const LANGUAGE_PROFILES = {
    en: {
      name: 'English',
      stripAccents: false,
      longWord: 9,
      connectors: [
        'furthermore', 'moreover', 'nevertheless', 'nonetheless', 'consequently', 'subsequently',
        'therefore', 'however', 'although', 'though', 'whereas', 'despite', 'in addition',
        'on the other hand', 'in contrast', 'as a result', 'thus', 'hence', 'accordingly',
        'conversely', 'notwithstanding', 'in conclusion', 'for instance', 'in other words'
      ],
      formal: ['sincerely', 'faithfully', 'i am writing', 'would like to', 'yours sincerely', 'dear sir', 'dear madam'],
      informal: ['hey', 'gonna', 'wanna', 'cheers', 'thanks a lot', 'what\'s up']
    },
    fr: {
      name: 'French',
      stripAccents: true,
      longWord: 10,
      connectors: [
        'cependant', 'néanmoins', 'toutefois', 'pourtant', 'en revanche', 'par conséquent',
        'par ailleurs', 'en outre', 'de plus', 'ainsi', 'donc', 'en effet', 'notamment',
        'tandis que', 'alors que', 'bien que', 'quoique', 'puisque', 'car', 'ensuite',
        'enfin', 'd\'une part', 'd\'autre part', 'au contraire', 'malgré', 'étant donné',
        'en conclusion', 'par exemple', 'c\'est-à-dire'
      ],
      formal: ['vous', 'cordialement', 'je vous prie', 'madame', 'monsieur', 'veuillez'],
      informal: ['salut', 'ça va', 'bises', 'tu es', 't\'es']
    },
    it: {
      name: 'Italian',
      stripAccents: true,
      longWord: 10,
      connectors: [
        'tuttavia', 'però', 'quindi', 'perciò', 'pertanto', 'inoltre', 'in aggiunta',
        'd\'altra parte', 'al contrario', 'invece', 'sebbene', 'benché', 'nonostante',
        'poiché', 'siccome', 'affinché', 'mentre', 'dunque', 'in conclusione',
        'per esempio', 'cioè', 'infine'
      ],
      formal: ['lei', 'cordiali saluti', 'gentile', 'distinti saluti', 'la prego', 'vorrei'],
      informal: ['ciao', 'come va', 'ti', 'tu sei', 'baci']
    },
    ru: {
      name: 'Russian',
      stripAccents: false,
      longWord: 8,
      connectors: [
        'однако', 'тем не менее', 'следовательно', 'поэтому', 'кроме того', 'более того',
        'впрочем', 'хотя', 'поскольку', 'значит', 'итак', 'наоборот', 'зато',
        'вместе с тем', 'в связи с этим', 'несмотря на', 'благодаря', 'тогда как',
        'при этом', 'в заключение', 'например', 'то есть'
      ],
      formal: ['вы', 'уважаем', 'с уважением', 'здравствуйте', 'позвольте', 'прошу'],
      informal: ['привет', 'ты ', 'тебя', 'как дела', 'пока']
    },
    el: {
      name: 'Greek',
      stripAccents: true,
      longWord: 9,
      connectors: [
        'ωστόσο', 'όμως', 'επομένως', 'συνεπώς', 'επιπλέον', 'εξάλλου', 'αντιθέτως',
        'αντίθετα', 'παρόλο που', 'παρότι', 'ενώ', 'διότι', 'επειδή', 'άρα', 'δηλαδή',
        'επίσης', 'αφού', 'ώστε', 'καθώς', 'συμπερασματικά', 'για παράδειγμα'
      ],
      formal: ['εσείς', 'με εκτίμηση', 'αξιότιμε', 'παρακαλώ', 'θα ήθελα'],
      informal: ['γεια', 'εσύ', 'τι κάνεις', 'φιλιά']
    }
  };

  const DEFAULT_PROFILE = LANGUAGE_PROFILES.en;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function resolveLanguage(taskPrompt, options) {
    const candidates = [options && options.language, taskPrompt && taskPrompt.language];
    if (typeof document !== 'undefined' && document.documentElement) {
      candidates.push(document.documentElement.lang);
    }
    for (const candidate of candidates) {
      if (!candidate) continue;
      const code = String(candidate).toLowerCase().slice(0, 2);
      if (LANGUAGE_PROFILES[code]) return code;
    }
    return 'en';
  }

  function normalise(text, stripAccents) {
    let value = String(text || '').toLowerCase();
    if (stripAccents && typeof value.normalize === 'function') {
      value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    value = value.replace(/[^\p{L}\p{N}' -]/gu, ' ').replace(/\s+/g, ' ').trim();
    return ` ${value} `;
  }

  function letterTokens(text) {
    return String(text || '')
      .split(/\s+/)
      .map(token => token.replace(/[^\p{L}\p{N}]/gu, ''))
      .filter(token => token.length > 0);
  }

  function countTerms(haystack, terms, stripAccents) {
    let hits = 0;
    for (const term of terms) {
      const needle = normalise(term, stripAccents).trim();
      if (needle && haystack.includes(` ${needle} `)) hits++;
    }
    return hits;
  }

  function scoreTaskFulfilment(wordCount, minWords, sentenceCount, connectorHits, longWordRatio) {
    const ratio = wordCount / Math.max(1, minWords);
    let score = 1;
    if (ratio >= 0.4) score = 2;
    if (ratio >= 0.8) score = 3;
    if (ratio >= 1.0 && sentenceCount >= 2) score = 4;
    if (ratio >= 1.0 && sentenceCount >= 3 && connectorHits >= 2) score = 5;
    if (ratio >= 1.1 && sentenceCount >= 4 && connectorHits >= 3) score = 6;
    if (ratio >= 1.2 && sentenceCount >= 5 && connectorHits >= 4 && longWordRatio >= 0.18) score = 7;
    return clamp(score, 1, 7);
  }

  function scoreCohesion(connectorHits, avgSentenceLength) {
    let score = 1;
    if (connectorHits >= 1) score = 3;
    if (connectorHits >= 2 && avgSentenceLength >= 9) score = 4;
    if (connectorHits >= 3 && avgSentenceLength >= 11) score = 5;
    if (connectorHits >= 4 && avgSentenceLength >= 13) score = 6;
    if (connectorHits >= 5 && avgSentenceLength >= 15) score = 7;
    return clamp(score, 1, 7);
  }

  function scoreGrammar(avgSentenceLength, lengthVariety, capitalisationRate, connectorHits) {
    let score = 1;
    if (avgSentenceLength >= 7) score = 3;
    if (avgSentenceLength >= 10 && capitalisationRate <= 0.15) score = 4;
    if (avgSentenceLength >= 12.5 && lengthVariety >= 2 && connectorHits >= 1) score = 5;
    if (avgSentenceLength >= 15 && lengthVariety >= 4 && connectorHits >= 2 && capitalisationRate <= 0.1) score = 6;
    if (avgSentenceLength >= 17.5 && lengthVariety >= 5 && connectorHits >= 3 && capitalisationRate === 0) score = 7;
    return clamp(score, 1, 7);
  }

  function scoreVocabulary(rootTtr, longWordRatio) {
    let score = 1;
    if (rootTtr >= 4.0) score = 3;
    if (rootTtr >= 4.8) score = 4;
    if (rootTtr >= 5.4 || longWordRatio >= 0.14) score = 5;
    if ((rootTtr >= 6.0 && longWordRatio >= 0.15) || longWordRatio >= 0.24) score = 6;
    if (rootTtr >= 6.6 && longWordRatio >= 0.20) score = 7;
    return clamp(score, 1, 7);
  }

  function scoreMechanics(capitalisationRate, extraDefects) {
    return clamp(7 - Math.round(capitalisationRate * 12) - Math.min(5, extraDefects), 1, 7);
  }

  function scoreRegister(target, formalHits, informalHits, contractions, longWordRatio) {
    // Scores consistency with the requested register, not the presence of a
    // particular set of courtesy formulas (an essay has no "Dear Sir").
    let score;
    if (target === 'formal') {
      score = 5;
      if (formalHits >= 1) score += 1;
      if (formalHits >= 2 || (longWordRatio >= 0.18 && contractions === 0)) score += 1;
      score -= Math.min(3, informalHits + contractions);
    } else if (target === 'informal') {
      score = 5;
      if (informalHits >= 1) score += 1;
      if (informalHits >= 2 || contractions >= 1) score += 1;
      score -= Math.min(3, formalHits);
    } else {
      score = 4 + (contractions === 0 ? 1 : 0) + (longWordRatio >= 0.18 ? 1 : 0);
    }
    return clamp(Math.round(score), 1, 7);
  }

  class WritingEvaluator {
    /**
     * Evaluate submitted text against the prompt's requirements.
     *
     * @param {string} text        Learner submission.
     * @param {object} taskPrompt  Prompt object (minWords, maxWords, band, register, language).
     * @param {object} [options]   { language: 'fr' }.
     */
    static evaluateSubmission(text, taskPrompt, options = {}) {
      const prompt = taskPrompt || {};
      const language = resolveLanguage(prompt, options);
      const profile = LANGUAGE_PROFILES[language] || DEFAULT_PROFILE;

      const cleanText = String(text || '').trim();
      const tokens = letterTokens(cleanText);
      const wordCount = tokens.length;
      const minWords = prompt.minWords || 30;

      if (wordCount < 5) {
        return {
          estimatedBand: 'A0',
          numericLevel: 1.0,
          language,
          rubricScores: {
            task_fulfilment: 1,
            organisation_cohesion: 1,
            grammatical_range_accuracy: 1,
            vocabulary_range_precision: 1,
            register_appropriateness: 1,
            mechanics_spelling_punctuation: 1
          },
          feedback: {
            summary: 'Submission too short to assess productive writing ability.',
            wordCount,
            minTargetWords: minWords,
            errorExamples: ['Insufficient length for evaluation.'],
            strengths: [],
            improvementAdvice: [`Please write complete sentences answering the prompt (at least ${minWords} ${profile.name} words).`]
          }
        };
      }

      const sentences = cleanText
        .split(/[.!?…]+/)
        .map(s => s.trim())
        .filter(s => letterTokens(s).length > 0);
      const sentenceCount = Math.max(1, sentences.length);
      const avgSentenceLength = wordCount / sentenceCount;
      const sentenceLengths = sentences.map(s => letterTokens(s).length);
      const lengthVariety = new Set(sentenceLengths.map(n => Math.round(n / 4))).size;

      const uniqueTokens = new Set(tokens.map(t => t.toLowerCase()));
      // Root type-token ratio: stable across text lengths, unlike unique/wordCount
      // which mechanically punishes longer (therefore better) submissions.
      const rootTtr = uniqueTokens.size / Math.sqrt(wordCount);
      const longWordRatio = tokens.filter(t => t.length >= profile.longWord).length / wordCount;

      const haystack = normalise(cleanText, profile.stripAccents);
      const connectorHits = countTerms(haystack, profile.connectors, profile.stripAccents);
      const formalHits = countTerms(haystack, profile.formal, profile.stripAccents);
      const informalHits = countTerms(haystack, profile.informal, profile.stripAccents);
      // Contractions only mark informality in English; French/Italian elisions
      // ("l'accélération") are ordinary written forms, not a register slip.
      const contractions = language === 'en'
        ? (cleanText.match(/\p{L}+['\u2019](?:t|s|re|ve|ll|d|m)\b/giu) || []).length
        : 0;

      const capitalisationErrors = sentences.filter(s => {
        const first = s.trim()[0];
        return first && first !== first.toUpperCase();
      }).length;
      const capitalisationRate = capitalisationErrors / sentenceCount;

      const repeatedWords = (cleanText.match(/\b(\p{L}+)\s+\1\b/gu) || []).length;
      const doubleSpaces = (cleanText.match(/ {2,}/g) || []).length;
      const missingFinalPunctuation = /[.!?…"')\]]$/.test(cleanText) ? 0 : 1;
      const extraDefects = Math.min(3, repeatedWords) + Math.min(1, doubleSpaces) + missingFinalPunctuation;

      const taskFulfilment = scoreTaskFulfilment(wordCount, minWords, sentenceCount, connectorHits, longWordRatio);
      const cohesion = scoreCohesion(connectorHits, avgSentenceLength);
      const grammar = scoreGrammar(avgSentenceLength, lengthVariety, capitalisationRate, connectorHits);
      const vocabulary = scoreVocabulary(rootTtr, longWordRatio);
      const mechanics = scoreMechanics(capitalisationRate, extraDefects);
      const register = scoreRegister(prompt.register, formalHits, informalHits, contractions, longWordRatio);

      // Rubric weights mirror prompts-and-rubrics.js (0.2 x 4, 0.1 x 2).
      let overallNumeric =
          taskFulfilment * 0.20 +
          cohesion * 0.20 +
          grammar * 0.20 +
          vocabulary * 0.20 +
          register * 0.10 +
          mechanics * 0.10;

      // CEFR logic: a task that is not attempted at the required length cannot
      // certify the band it belongs to, however polished the sentences are.
      if (wordCount < minWords * 0.4) {
        overallNumeric = Math.min(3.0, overallNumeric);
      } else if (wordCount < minWords * 0.7) {
        overallNumeric = Math.min(4.0, overallNumeric);
      }

      const bandIndex = clamp(Math.round(overallNumeric) - 1, 0, BANDS.length - 1);
      const estimatedBand = BANDS[bandIndex];

      const errorExamples = [];
      if (wordCount < minWords) {
        errorExamples.push(`Text length (${wordCount} words) is below the target of ${minWords} words.`);
      }
      if (capitalisationErrors > 0) {
        errorExamples.push(`${capitalisationErrors} sentence(s) start without a capital letter.`);
      }

      const strengths = [];
      if (connectorHits >= 2) {
        strengths.push(`Effective linking words (${connectorHits} ${profile.name} connectors detected).`);
      }
      if (rootTtr >= 5.4) strengths.push('Good lexical range with little word repetition.');
      if (longWordRatio >= 0.18) strengths.push('Frequent use of longer, more precise words.');

      const advice = [];
      if (connectorHits < 2) {
        advice.push(`Connect ideas with ${profile.name} linkers (for example: ${profile.connectors.slice(0, 3).join(', ')}).`);
      }
      if (avgSentenceLength < 9) advice.push('Combine short sentences into compound and complex structures.');
      if (wordCount < minWords) advice.push(`Aim for at least ${minWords} words to show your full range.`);

      return {
        estimatedBand,
        numericLevel: overallNumeric,
        language,
        wordCount,
        rubricScores: {
          task_fulfilment: taskFulfilment,
          organisation_cohesion: cohesion,
          grammatical_range_accuracy: grammar,
          vocabulary_range_precision: vocabulary,
          register_appropriateness: register,
          mechanics_spelling_punctuation: mechanics
        },
        metrics: {
          sentenceCount,
          avgSentenceLength: Math.round(avgSentenceLength * 10) / 10,
          rootTtr: Math.round(rootTtr * 100) / 100,
          longWordRatio: Math.round(longWordRatio * 100) / 100,
          connectors: connectorHits
        },
        feedback: {
          summary: `Demonstrates productive capability aligned with CEFR ${estimatedBand}.`,
          wordCount,
          minTargetWords: minWords,
          errorExamples,
          strengths,
          improvementAdvice: advice
        }
      };
    }
  }

  WritingEvaluator.LANGUAGE_PROFILES = LANGUAGE_PROFILES;
  WritingEvaluator.supportedLanguages = Object.keys(LANGUAGE_PROFILES);

  return WritingEvaluator;
}));
