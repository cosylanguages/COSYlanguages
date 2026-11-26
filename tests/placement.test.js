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

    test('Multilingual Question Banks (FR, IT, RU, EL) schema integrity and item validation', () => {
      const langs = ['fr', 'it', 'ru', 'el'];
      langs.forEach(lang => {
        const bank = MULTILINGUAL_QUESTION_BANKS[lang];
        assert.ok(Array.isArray(bank), `Multilingual bank for ${lang} must be an array`);
        assert.ok(bank.length >= 21, `Bank for ${lang} should contain items across bands A0-C2 (found ${bank.length})`);

        bank.forEach(item => {
          assert.ok(item.id, `[${lang}] Item must have an id`);
          assert.ok(item.id.startsWith(`${lang}_`), `[${lang}] ID must start with language code prefix`);
          assert.ok(['grammar', 'vocabulary', 'reading'].includes(item.skill), `[${lang}] Skill must be valid`);
          assert.ok(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(item.band), `[${lang}] Band must be a valid CEFR band`);
          assert.ok(typeof item.difficulty === 'number', `[${lang}] Difficulty must be numeric`);
          assert.ok(item.question, `[${lang}] Item must have question text`);
          assert.ok(Array.isArray(item.options), `[${lang}] Options must be an array`);
          assert.ok(item.options.length >= 2, `[${lang}] Must have at least 2 option choices`);
          assert.ok(typeof item.correctAnswer === 'number', `[${lang}] correctAnswer index must be a number`);
          assert.ok(item.correctAnswer >= 0 && item.correctAnswer < item.options.length, `[${lang}] correctAnswer index within range`);
          assert.ok(item.explanation, `[${lang}] Item must have explanation text`);
          assert.ok(item.scoringRules, `[${lang}] Item must have scoring rules`);
          assert.ok(item.cefrDescriptor, `[${lang}] Item must specify CEFR descriptor`);
          assert.strictEqual(item.provisional, true, `[${lang}] Item should be marked provisional`);
        });
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

  describe('3. Adaptive Routing Engine (Multilingual Support)', () => {
    test('Adaptive Engine should route English items and adjust theta', () => {
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

    test('Adaptive Engine should route items and adjust theta for French (fr), Italian (it), Russian (ru), Greek (el)', () => {
      const langs = ['fr', 'it', 'ru', 'el'];

      langs.forEach(lang => {
        const engine = new AdaptiveEngine({
          en: ENGLISH_QUESTION_BANK,
          multilingual: MULTILINGUAL_QUESTION_BANKS
        }, { mode: 'short_screening', targetLanguage: lang, purpose: 'general' });

        const item = engine.getNextItem();
        assert.ok(item, `[${lang}] Adaptive engine should fetch an initial item`);
        assert.ok(item.id.startsWith(`${lang}_`), `[${lang}] Item ID must belong to language bank`);

        const initialTheta = engine.sessionState.skillThreads[item.skill].theta;
        engine.submitResponse(item.id, { item: item, isCorrect: true, userAnswer: item.correctAnswer });

        const updatedTheta = engine.sessionState.skillThreads[item.skill].theta;
        assert.ok(updatedTheta > initialTheta, `[${lang}] Theta for ${item.skill} should increase on correct answer`);
      });
    });
  });

  describe('4. Scoring Model & Diagnostic Learner Profiles (Multilingual)', () => {
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
          grammar: { theta: 4.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
          vocabulary: { theta: 4.1, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
          reading: { theta: 4.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
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

    test('Multilingual Diagnostic Learner Profiles for French, Italian, Russian, and Greek', () => {
      const langs = ['fr', 'it', 'ru', 'el'];

      langs.forEach(lang => {
        // Advanced learner session state
        const advancedState = {
          language: lang,
          purpose: 'general',
          mode: 'full_diagnostic',
          skillThreads: {
            grammar: { theta: 6.2, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
            vocabulary: { theta: 6.0, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
            reading: { theta: 6.1, variance: 0.05, itemsAnswered: [{ isCorrect: 1 }, { isCorrect: 1 }, { isCorrect: 1 }] },
            writing: { theta: 6.0, itemsAnswered: [{ estimatedBand: 'C1', rubricScores: {} }] },
            speaking: { theta: 6.0, itemsAnswered: [{ estimatedBand: 'C1', rubricScores: {} }] }
          }
        };

        const result = ScoringModel.evaluatePlacement(advancedState);
        assert.strictEqual(result.overallPlacement.level, 'C1', `[${lang}] Expected C1 placement`);
        assert.strictEqual(result.activePassiveGap.detected, false, `[${lang}] No gap expected for balanced profile`);
      });
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
  describe('6. Bank Coverage Floor (every band x skill in every language)', () => {
    const BANDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const RECEPTIVE = ['grammar', 'vocabulary', 'reading'];

    test('each language offers at least two items per band and skill, with matching difficulty', () => {
      const banks = { en: ENGLISH_QUESTION_BANK, ...MULTILINGUAL_QUESTION_BANKS };
      Object.entries(banks).forEach(([lang, bank]) => {
        BANDS.forEach(band => {
          RECEPTIVE.forEach(skill => {
            const cell = bank.filter(item => item.band === band && item.skill === skill);
            assert.ok(cell.length >= 2, `[${lang}] ${band}/${skill} holds ${cell.length} item(s); need 2 for adaptivity`);
            cell.forEach(item => {
              assert.strictEqual(item.difficulty, BANDS.indexOf(band) + 1,
                `[${lang}] ${item.id} difficulty does not match band ${band}`);
            });
          });
        });
      });
    });

    test('no item is duplicated and ids stay language-prefixed', () => {
      const banks = { en: ENGLISH_QUESTION_BANK, ...MULTILINGUAL_QUESTION_BANKS };
      Object.entries(banks).forEach(([lang, bank]) => {
        const ids = bank.map(item => item.id);
        assert.strictEqual(new Set(ids).size, ids.length, `[${lang}] duplicate item ids`);
        const questions = bank.map(item => item.question);
        assert.strictEqual(new Set(questions).size, questions.length, `[${lang}] duplicate questions`);
        bank.forEach(item => assert.ok(item.id.startsWith(`${lang}_`), `[${lang}] ${item.id} is mis-prefixed`));
      });
    });
  });

  describe('7. Localised Task Prompts', () => {
    const LOCALISED = ['fr', 'it', 'ru', 'el'];

    test('each localised language has six writing prompts and five speaking prompts', () => {
      LOCALISED.forEach(lang => {
        const writing = PROMPTS_AND_RUBRICS.getWritingPrompts(lang);
        const speaking = PROMPTS_AND_RUBRICS.getSpeakingPrompts(lang);

        assert.deepStrictEqual(writing.map(p => p.band), ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], `[${lang}] writing bands`);
        assert.strictEqual(speaking.length, 5, `[${lang}] speaking prompts`);
        writing.concat(speaking).forEach(prompt => {
          assert.strictEqual(prompt.language, lang, `[${prompt.id}] must declare its language`);
          assert.ok(prompt.instruction && prompt.prompt, `[${prompt.id}] needs instruction and task text`);
        });
        writing.forEach(prompt => {
          assert.ok(prompt.minWords > 0 && prompt.maxWords > prompt.minWords, `[${prompt.id}] word target`);
          assert.ok(prompt.timeLimitMinutes > 0, `[${prompt.id}] time limit`);
        });
      });
    });

    test('English stays the documented fallback for languages without localised tasks', () => {
      assert.strictEqual(PROMPTS_AND_RUBRICS.hasLocalisedPrompts('en'), false);
      assert.strictEqual(PROMPTS_AND_RUBRICS.hasLocalisedPrompts('fr'), true);
      assert.strictEqual(PROMPTS_AND_RUBRICS.getWritingPrompts('xx')[0].id, PROMPTS_AND_RUBRICS.writingPrompts.en[0].id);
      assert.strictEqual(PROMPTS_AND_RUBRICS.getWritingPrompts(undefined)[0].id, PROMPTS_AND_RUBRICS.writingPrompts.en[0].id);
    });
  });

  describe('8. Writing Evaluator: language awareness and banding', () => {
    test('Greek and Russian text is tokenised and scored, not treated as empty', () => {
      const samples = {
        el: 'Ωστόσο, η εμπειρία δείχνει ότι η τηλεργασία αυξάνει την παραγωγικότητα. Επιπλέον, οι εργαζόμενοι κερδίζουν χρόνο μετακίνησης. Παρόλο που κάποιοι δυσκολεύονται, η έρευνα δείχνει σαφή οφέλη.',
        ru: 'Однако опыт показывает, что удалённая работа повышает производительность. Кроме того, сотрудники экономят время на дорогу. Несмотря на трудности, исследования показывают явные преимущества.'
      };
      Object.entries(samples).forEach(([lang, text]) => {
        const result = WritingEvaluator.evaluateSubmission(text, { minWords: 30, language: lang });
        assert.ok(result.wordCount >= 15, `[${lang}] detected only ${result.wordCount} words`);
        assert.ok(result.metrics.connectors >= 2, `[${lang}] found ${result.metrics.connectors} connectors`);
        assert.ok(['A2', 'B1', 'B2'].includes(result.estimatedBand), `[${lang}] scored ${result.estimatedBand}`);
        assert.strictEqual(result.language, lang);
      });
    });

    test('no `language` option falls back to English instead of throwing', () => {
      const result = WritingEvaluator.evaluateSubmission(
        'I am writing to explain my opinion about remote work, because it affects everyone.',
        { minWords: 15 }
      );
      assert.strictEqual(result.language, 'en');
      assert.ok(result.estimatedBand);
    });

    test('English connectors do not inflate a French submission', () => {
      const french = 'Je pense que le service fonctionne bien. Cependant, les clients attendent parfois. ' +
        'De plus, la livraison est rapide. Par ailleurs, le prix reste correct.';
      const english = 'I think the service works well. However, clients sometimes wait. ' +
        'Furthermore, delivery is fast. In addition, the price remains correct.';

      const fr = WritingEvaluator.evaluateSubmission(french, { minWords: 30, language: 'fr' });
      assert.ok(fr.metrics.connectors >= 3, 'French connectors should be recognised');
      assert.ok(!/however|furthermore/.test(JSON.stringify(fr.feedback)), 'feedback must not quote English linkers for French');
      assert.ok(WritingEvaluator.evaluateSubmission(english, { minWords: 30, language: 'en' }).metrics.connectors >= 3);
    });

    test('padded junk cannot reach the top bands', () => {
      const junk = 'word '.repeat(400);
      const result = WritingEvaluator.evaluateSubmission(junk, { minWords: 100, language: 'en' });
      assert.ok(['A0', 'A1', 'A2'].includes(result.estimatedBand), `repetition scored ${result.estimatedBand}`);
      assert.ok(result.rubricScores.vocabulary_range_precision <= 3);
    });

    test('every rubric criterion is scored inside 1-7 for all supported languages', () => {
      const text = 'Je pense que cette décision est importante parce que les conséquences sont réelles. Toutefois, il faut considérer les coûts.';
      WritingEvaluator.supportedLanguages.forEach(lang => {
        const result = WritingEvaluator.evaluateSubmission(text, { minWords: 15, language: lang });
        assert.strictEqual(Object.keys(result.rubricScores).length, 6, `[${lang}] rubric criteria`);
        Object.entries(result.rubricScores).forEach(([criterion, score]) => {
          assert.ok(score >= 1 && score <= 7, `[${lang}] ${criterion} = ${score}`);
        });
      });
    });
  });

  describe('9. Adaptive Engine: evidence-based ability and budgets', () => {
    const engineFor = (lang, mode) => new AdaptiveEngine(
      { en: ENGLISH_QUESTION_BANK, multilingual: MULTILINGUAL_QUESTION_BANKS },
      { mode: mode || 'full_diagnostic', targetLanguage: lang || 'en', purpose: 'general' }
    );

    test('ability estimate responds to correctness and reports standard error', () => {
      const engine = engineFor('en');
      const answers = (correctness) => [3, 4, 5, 6].map((d, i) => ({ itemDifficulty: d, isCorrect: correctness[i] }));

      const strong = engine.estimateAbility(answers([1, 1, 1, 1]));
      const mixed = engine.estimateAbility(answers([1, 0, 1, 0]));
      const weak = engine.estimateAbility(answers([0, 0, 0, 0]));

      assert.ok(strong.theta > mixed.theta && mixed.theta > weak.theta, 'estimates must be ordered by correctness');
      assert.ok(strong.se > 0 && Number.isFinite(strong.se), 'a standard error must be reported');
      assert.ok(weak.se > 0 && Number.isFinite(weak.se));
    });

    test('short screening asks exactly three items per skill', () => {
      ['en', 'fr', 'ru'].forEach(lang => {
        const engine = engineFor(lang, 'short_screening');
        let asked = 0;
        let item = engine.getNextItem();
        while (item && item.skill === 'grammar' && item.type !== 'prompt_task') {
          engine.submitResponse(item.id, { item, isCorrect: false, userAnswer: 0 });
          asked++;
          assert.ok(asked <= 3, `[${lang}] asked more than the screening budget`);
          item = engine.getNextItem();
        }
        assert.strictEqual(asked, 3, `[${lang}] screening length`);
        assert.strictEqual(engine.sessionState.skillThreads.grammar.finished, true);
      });
    });

    test('the full-diagnostic budget never exceeds what the bank holds', () => {
      ['fr', 'it', 'ru', 'el'].forEach(lang => {
        const available = MULTILINGUAL_QUESTION_BANKS[lang].filter(i => i.skill === 'grammar').length;
        const engine = engineFor(lang);
        let asked = 0;
        let item = engine.getNextItem();
        while (item && item.skill === 'grammar' && item.type !== 'prompt_task') {
          engine.submitResponse(item.id, { item, isCorrect: true, userAnswer: item.correctAnswer });
          asked++;
          item = engine.getNextItem();
        }
        assert.strictEqual(asked, Math.min(8, available), `[${lang}] asked ${asked} of ${available} available`);
        assert.strictEqual(engine.sessionState.skillThreads.grammar.finished, true);
      });
    });

    test('a skipped productive task yields no evidence and does not move the estimate', () => {
      const engine = engineFor('en');
      engine.submitResponse('writing_task', { skill: 'writing', skipped: true, estimatedBand: 'A1' });

      const thread = engine.sessionState.skillThreads.writing;
      assert.strictEqual(thread.theta, 3.0, 'skipping must not grant a band');
      const result = ScoringModel.evaluateProductiveThread('writing', thread);
      assert.strictEqual(result.isInsufficient, true);
      assert.strictEqual(result.band, 'Insufficient Evidence');
    });

    test('scored threads report range and confidence from the standard error', () => {
      const result = ScoringModel.evaluateSkillThread('grammar', {
        theta: 4.2, se: 0.9, variance: 0, count: 8,
        itemsAnswered: new Array(8).fill({ isCorrect: 1 })
      });
      assert.strictEqual(result.confidence, 'medium');
      assert.ok(result.range.includes('–'), `expected a band range, got ${result.range}`);
    });
  });

});
