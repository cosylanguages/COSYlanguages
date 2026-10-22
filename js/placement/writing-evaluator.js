/**
 * COSY Languages - Writing Evaluator Module
 * Client-side analytic rubric analyzer and teacher review workflow.
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

  const ADVANCED_CONNECTORS = [
    'furthermore', 'nevertheless', 'consequently', 'notwithstanding', 'subsequently',
    'moreover', 'on the other hand', 'in contrast', 'in addition', 'despite',
    'although', 'whereas', 'hence', 'thus', 'accordingly', 'conversely'
  ];

  const B2_C2_VOCAB_KEYWORDS = [
    'substantive', 'viability', 'resilience', 'disparity', 'compelling', 'unethical',
    'nuance', 'impasse', 'incisive', 'equivocal', 'trenchant', 'astute', 'duress',
    'exquisite', 'finesse', 'diatribe', 'ineffable', 'inexorable', 'hermeneutic',
    'dichotomy', 'epistemology', 'paradigm', 'juxtaposition', 'deconstruction'
  ];

  class WritingEvaluator {
    /**
     * Evaluate submitted text against target prompt requirements
     */
    static evaluateSubmission(text, taskPrompt, userSelfRating = null) {
      const cleanText = (text || '').trim();
      const words = cleanText ? cleanText.split(/\s+/) : [];
      const wordCount = words.length;

      if (wordCount < 5) {
        return {
          estimatedBand: 'A0',
          numericLevel: 1.0,
          rubricScores: {
            task_fulfilment: 1,
            organisation_cohesion: 1,
            grammatical_range_accuracy: 1,
            vocabulary_range_precision: 1,
            register_appropriateness: 1,
            mechanics_spelling_punctuation: 1
          },
          feedback: {
            summary: "Submission too short to assess productive writing ability.",
            wordCount: wordCount,
            minTargetWords: taskPrompt.minWords || 20,
            errorExamples: ["Insufficient length for evaluation."],
            strengths: [],
            improvementAdvice: ["Please write complete sentences answering the prompt."]
          }
        };
      }

      // Sentence count & average sentence length
      const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const sentenceCount = Math.max(1, sentences.length);
      const avgSentenceLength = wordCount / sentenceCount;

      // Lexical diversity (Type-Token Ratio)
      const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, '')));
      const ttr = uniqueWords.size / wordCount;

      // Connector count
      const lowerText = cleanText.toLowerCase();
      let connectorCount = 0;
      ADVANCED_CONNECTORS.forEach(conn => {
        if (lowerText.includes(conn)) connectorCount++;
      });

      // Advanced vocabulary hits
      let advVocabHits = 0;
      B2_C2_VOCAB_KEYWORDS.forEach(kw => {
        if (lowerText.includes(kw)) advVocabHits++;
      });

      // Simple mechanics check
      const capitalizationErrors = sentences.filter(s => {
        const trimmed = s.trim();
        return trimmed.length > 0 && trimmed[0] !== trimmed[0].toUpperCase();
      }).length;

      // Rubric Criterion Calculations (1 to 7 scale)
      let taskFulfilmentScore = 2; // Default A1/A2 baseline
      const minW = taskPrompt.minWords || 30;
      if (wordCount >= minW * 0.5) taskFulfilmentScore = 2;
      if (wordCount >= minW) taskFulfilmentScore = 3;
      if (wordCount >= minW * 1.2) taskFulfilmentScore = 4;
      if (wordCount >= minW * 1.5 && advVocabHits > 0) taskFulfilmentScore = 5;
      if (wordCount >= minW * 1.8 && advVocabHits >= 2) taskFulfilmentScore = 6;

      let cohesionScore = 2;
      if (connectorCount >= 1) cohesionScore = 3;
      if (connectorCount >= 2 && avgSentenceLength >= 12) cohesionScore = 4;
      if (connectorCount >= 3 && avgSentenceLength >= 15) cohesionScore = 5;
      if (connectorCount >= 4 && avgSentenceLength >= 18) cohesionScore = 6;

      let grammarScore = 2;
      if (avgSentenceLength >= 8) grammarScore = 3;
      if (avgSentenceLength >= 12 && capitalizationErrors === 0) grammarScore = 4;
      if (avgSentenceLength >= 16 && connectorCount >= 2) grammarScore = 5;
      if (avgSentenceLength >= 20 && connectorCount >= 3) grammarScore = 6;

      let vocabScore = 2;
      if (wordCount >= 20 && ttr > 0.5) vocabScore = 3;
      if (wordCount >= 50 && ttr > 0.6) vocabScore = 4;
      if (advVocabHits >= 1 || (ttr > 0.65 && wordCount > 100)) vocabScore = 5;
      if (advVocabHits >= 2 || (ttr > 0.7 && wordCount > 150)) vocabScore = 6;

      let mechanicsScore = Math.max(1, 6 - capitalizationErrors);

      let overallNumeric = (taskFulfilmentScore + cohesionScore + grammarScore + vocabScore + mechanicsScore) / 5;

      // Cap overall numeric level if text length is severely deficient
      if (wordCount < minW * 0.5) {
        overallNumeric = Math.min(2.0, overallNumeric); // Cap at A1 level (2.0)
      } else if (wordCount < minW) {
        overallNumeric = Math.min(3.0, overallNumeric); // Cap at A2 level (3.0)
      }

      const bandIndex = Math.max(0, Math.min(6, Math.round(overallNumeric) - 1));
      const estimatedBand = BANDS[bandIndex] || 'B1';

      // Construct constructive feedback
      const errorExamples = [];
      if (wordCount < minW) {
        errorExamples.push(`Text length (${wordCount} words) is below recommended target of ${minW} words.`);
      }
      if (capitalizationErrors > 0) {
        errorExamples.push(`Observed ${capitalizationErrors} sentence(s) without initial capital letters.`);
      }

      const strengths = [];
      if (connectorCount >= 2) strengths.push(`Effective use of logical linking words (${connectorCount} connectors detected).`);
      if (wordCount >= 30 && ttr > 0.6) strengths.push("Good lexical diversity with low word repetition.");
      if (advVocabHits > 0) strengths.push(`Demonstrated advanced vocabulary precision (${advVocabHits} higher-level term(s)).`);

      const advice = [];
      if (connectorCount < 2) advice.push("Incorporate logical connectors (e.g., 'however', 'furthermore', 'despite') to connect ideas.");
      if (avgSentenceLength < 10) advice.push("Practice combining simple sentences into compound and complex structures.");

      return {
        estimatedBand: estimatedBand,
        numericLevel: overallNumeric,
        wordCount: wordCount,
        rubricScores: {
          task_fulfilment: taskFulfilmentScore,
          organisation_cohesion: cohesionScore,
          grammatical_range_accuracy: grammarScore,
          vocabulary_range_precision: vocabScore,
          mechanics_spelling_punctuation: mechanicsScore
        },
        feedback: {
          summary: `Demonstrates productive capability aligned with CEFR ${estimatedBand}.`,
          wordCount: wordCount,
          minTargetWords: minW,
          errorExamples: errorExamples,
          strengths: strengths,
          improvementAdvice: advice
        }
      };
    }
  }

  return WritingEvaluator;
}));
