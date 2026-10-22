const { test, describe } = require('node:test');
const assert = require('node:assert');

const ENGLISH_QUESTION_BANK = require('../js/placement/question-bank-en.js');
const MULTILINGUAL_QUESTION_BANKS = require('../js/placement/question-banks-multilingual.js');
const PROMPTS_AND_RUBRICS = require('../js/placement/prompts-and-rubrics.js');
const AdaptiveEngine = require('../js/placement/adaptive-engine.js');
const ScoringModel = require('../js/placement/scoring-model.js');
const WritingEvaluator = require('../js/placement/writing-evaluator.js');

describe('COSY Placement Assessment Test Suite', () => {

  describe('1. Question Banks & Schema Integrity', () => {
    test('English Question Bank should contain exactly 252 items across 7 CEFR bands', () => {
      assert.strictEqual(Array.isArray(ENGLISH_QUESTION_BANK), true);
      assert.strictEqual(ENGLISH_QUESTION_BANK.length, 252);

      const bands = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
      const skills = ['grammar', 'vocabulary', 'reading'];

      bands.forEach(b => {
        skills.forEach(s => {
          const matching = ENGLISH_QUESTION_BANK.filter(item => item.band === b && item.skill === s);
          assert.strictEqual(matching.length, 12, `Expected 12 items for ${b} ${s}, found ${matching.length}`);
        });
      });
    });

    test('Every item in English Question Bank should adhere to schema rules', () => {
      ENGLISH_QUESTION_BANK.forEach(item => {
        assert.ok(item.id, 'Item must have an id');
        assert.ok(item.skill, 'Item must specify skill');
        assert.ok(item.band, 'Item must specify CEFR band');
        assert.ok(typeof item.difficulty === 'number', 'Difficulty must be a number');
        assert.ok(item.question, 'Item must have question text');
        assert.ok(Array.isArray(item.options), 'Options must be an array');
        assert.ok(typeof item.correctAnswer === 'number', 'correctAnswer index must be a number');
        assert.ok(item.explanation, 'Item must have explanation');
        assert.ok(item.scoringRules, 'Item must have scoring rules');
        assert.ok(item.cefrDescriptor, 'Item must have CEFR descriptor');
        assert.strictEqual(item.provisional, true, 'Initial items should be marked provisional');
      });
    });

    test('Multilingual Question Banks should contain valid items for FR, IT, RU, EL', () => {
      const langs = ['fr', 'it', 'ru', 'el'];
      langs.forEach(lang => {
        const bank = MULTILINGUAL_QUESTION_BANKS[lang];
        assert.ok(Array.isArray(bank), `Multilingual bank for ${lang} must be an array`);
        assert.ok(bank.length >= 18, `Bank for ${lang} should contain at least 18 items across bands`);
      });
    });
  });

  describe('2. Prompts & Rubrics Specifications', () => {
    test('Writing and Speaking prompts should cover CEFR bands', () => {
      const writing = PROMPTS_AND_RUBRICS.writingPrompts.en;
      const speaking = PROMPTS_AND_RUBRICS.speakingPrompts.en;

      assert.ok(writing.length >= 5, 'Writing prompts should cover levels A1 through C2');
      assert.ok(speaking.length >= 5, 'Speaking prompts should cover levels A1 through C1/C2');
    });

    test('Analytic Rubrics should define criteria and level descriptions', () => {
      const wRubric = PROMPTS_AND_RUBRICS.writingRubric;
      const sRubric = PROMPTS_AND_RUBRICS.speakingRubric;

      assert.strictEqual(wRubric.criteria.length, 6, 'Writing rubric should have 6 criteria');
      assert.strictEqual(sRubric.criteria.length, 5, 'Speaking rubric should have 5 criteria');
    });
  });

  describe('3. Adaptive Routing Engine', () => {
    test('Adaptive Engine should route items and dynamically adjust theta', () => {
      const engine = new AdaptiveEngine({
        en: ENGLISH_QUESTION_BANK,
        multilingual: MULTILINGUAL_QUESTION_BANKS
      }, { mode: 'short_screening', targetLanguage: 'en', purpose: 'general' });

      const item1 = engine.getNextItem();
      assert.ok(item1);
      assert.strictEqual(item1.skill, 'grammar');

      const initialTheta = engine.sessionState.skillThreads.grammar.theta;
      engine.submitResponse(item1.id, { item: item1, isCorrect: true, userAnswer: 0 });

      assert.ok(
        engine.sessionState.skillThreads.grammar.theta > initialTheta,
        'Theta should increase following correct answer'
      );
    });
  });

  describe('4. Scoring Model & Diagnostic Learner Profiles', () => {
    test('Profile 1: Beginner Learner (A1/A0 across all skills)', () => {
      const beginnerState = {
        language: 'en',
        purpose: 'general',
        mode: 'full_diagnostic',
        skillThreads: {
          grammar: { theta: 1.2, variance: 0.05, itemsAnswered: [{ isCorrect: 0 }, { isCorrect: 0 }, { isCorrect: 1 }] },
          vocabulary: { theta: 1.0, variance: 0.05, itemsAnswered: [{ isCorrect: 0 }, { isCorrect: 0 }, { isCorrect: 0 }] },
          reading: { theta: 1.1, variance: 0.05, itemsAnswered: [{ isCorrect: 0 }, { isCorrect: 1 }, { isCorrect: 0 }] },
          writing: { theta: 1.0, itemsAnswered: [{ estimatedBand: 'A1', rubricScores: { task_fulfilment: 2 } }] },
          speaking: { theta: 1.0, itemsAnswered: [{ estimatedBand: 'A1', rubricScores: { fluency_coherence: 2 } }] }
        }
      };

      const result = ScoringModel.evaluatePlacement(beginnerState);
      assert.strictEqual(result.overallPlacement.level, 'A1');
      assert.strictEqual(result.activePassiveGap.detected, false);
    });

    test('Profile 2: High Receptive (B2) / Low Productive (A2) Active-Passive Gap', () => {
      const gapState = {
        language: 'en',
        purpose: 'general',
        mode: 'full_diagnostic',
        skillThreads: {
          grammar: { theta: 5.2, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
          vocabulary: { theta: 5.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
          reading: { theta: 5.1, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
          writing: { theta: 3.0, itemsAnswered: [{ estimatedBand: 'A2', rubricScores: { task_fulfilment: 2 } }] },
          speaking: { theta: 3.0, itemsAnswered: [{ estimatedBand: 'A2', rubricScores: { fluency_coherence: 2 } }] }
        }
      };

      const result = ScoringModel.evaluatePlacement(gapState);
      assert.strictEqual(result.activePassiveGap.detected, true, 'Gap must be detected');
      assert.strictEqual(result.overallPlacement.level, 'B1', 'Overall level capped at B1 bridging band');
      assert.strictEqual(result.overallPlacement.range, 'A2–B1');
    });

    test('Profile 3: Consistent Intermediate Learner (B1)', () => {
      const b1State = {
        language: 'en',
        purpose: 'general',
        mode: 'full_diagnostic',
        skillThreads: {
          grammar: { theta: 4.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }] },
          vocabulary: { theta: 4.1, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }] },
          reading: { theta: 4.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }] },
          writing: { theta: 4.0, itemsAnswered: [{ estimatedBand: 'B1', rubricScores: {} }] },
          speaking: { theta: 4.0, itemsAnswered: [{ estimatedBand: 'B1', rubricScores: {} }] }
        }
      };

      const result = ScoringModel.evaluatePlacement(b1State);
      assert.strictEqual(result.overallPlacement.level, 'B1');
      assert.strictEqual(result.activePassiveGap.detected, false);
    });

    test('Profile 4: Inconsistent Performance Boundary Reporting (B1-B2 range)', () => {
      const boundaryState = {
        language: 'en',
        purpose: 'general',
        mode: 'full_diagnostic',
        skillThreads: {
          grammar: { theta: 4.5, variance: 0.35, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 0 }, { isCorrect: 1 }, { isCorrect: 0 }] },
          vocabulary: { theta: 4.5, variance: 0.35, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 0 }, { isCorrect: 1 }, { isCorrect: 0 }] },
          reading: { theta: 4.5, variance: 0.35, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 0 }, { isCorrect: 1 }, { isCorrect: 0 }] },
          writing: { theta: 4.0, itemsAnswered: [{ estimatedBand: 'B1', rubricScores: {} }] },
          speaking: { theta: 4.0, itemsAnswered: [{ estimatedBand: 'B1', rubricScores: {} }] }
        }
      };

      const result = ScoringModel.evaluatePlacement(boundaryState);
      assert.ok(result.skills.grammar.range.includes('–'), 'High variance should trigger range reporting (e.g. B1–B2)');
    });
  });

  describe('5. Writing Evaluator Heuristics', () => {
    test('Writing Evaluator should evaluate length, connectors, and advanced vocabulary', () => {
      const prompt = { minWords: 30 };
      const text = `I am writing to express my view regarding remote work. Furthermore, remote work provides significant flexibility for employees. Although communication can be challenging, the overall resilience and output remain high. Consequently, I urge leadership to support flexible working arrangements.`;

      const result = WritingEvaluator.evaluateSubmission(text, prompt);
      assert.ok(['B1', 'B2', 'C1'].includes(result.estimatedBand));
      assert.ok(result.wordCount >= 30);
      assert.ok(result.feedback.strengths.length > 0);
    });
  });
});
