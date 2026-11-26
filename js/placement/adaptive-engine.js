/**
 * COSYlanguages - Adaptive Routing Engine
 * Dynamic item selection and skill thread calibration.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYAdaptiveEngine = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const CEFR_BANDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const BAND_NUMERIC = { 'A0': 1, 'A1': 2, 'A2': 3, 'B1': 4, 'B2': 5, 'C1': 6, 'C2': 7 };
  const NUMERIC_BAND = { 1: 'A0', 2: 'A1', 3: 'A2', 4: 'B1', 5: 'B2', 6: 'C1', 7: 'C2' };

  class AdaptiveEngine {
    constructor(questionBanks, options = {}) {
      this.questionBanks = questionBanks || {};
      this.mode = options.mode || 'full_diagnostic'; // 'short_screening' | 'full_diagnostic'
      this.targetLanguage = options.targetLanguage || 'en';
      this.purpose = options.purpose || 'general'; // 'general' | 'spoken' | 'exam' | 'relocation'

      this.resetSession();
    }

    resetSession() {
      this.sessionState = {
        timestamp: new Date().toISOString(),
        language: this.targetLanguage,
        purpose: this.purpose,
        mode: this.mode,
        completedSkills: [],
        activeSkillIndex: 0,
        skillThreads: {
          grammar: { theta: 3.0, itemsAnswered: [], scoreSum: 0, count: 0, variance: 0, confidence: 'low', finished: false },
          vocabulary: { theta: 3.0, itemsAnswered: [], scoreSum: 0, count: 0, variance: 0, confidence: 'low', finished: false },
          reading: { theta: 3.0, itemsAnswered: [], scoreSum: 0, count: 0, variance: 0, confidence: 'low', finished: false },
          writing: { theta: 3.0, itemsAnswered: [], scoreSum: 0, count: 0, variance: 0, confidence: 'low', finished: false },
          speaking: { theta: 3.0, itemsAnswered: [], scoreSum: 0, count: 0, variance: 0, confidence: 'low', finished: false }
        },
        usedItemIds: new Set(),
        history: [],
        isComplete: false
      };
    }

    /**
     * Get candidate questions for the current session stage
     */
    getNextItem() {
      if (this.sessionState.isComplete) return null;

      const skillsOrder = ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'];
      let currentSkill = null;

      // Find first unfinished skill thread
      for (const skill of skillsOrder) {
        if (!this.sessionState.skillThreads[skill].finished) {
          currentSkill = skill;
          break;
        }
      }

      if (!currentSkill) {
        this.sessionState.isComplete = true;
        return null;
      }

      const thread = this.sessionState.skillThreads[currentSkill];

      // Handle productive skills (writing, speaking) as task prompts
      if (currentSkill === 'writing' || currentSkill === 'speaking') {
        const estBand = this.numericToBand(Math.round(thread.theta));
        return {
          type: 'prompt_task',
          skill: currentSkill,
          estimatedBand: estBand,
          targetLanguage: this.targetLanguage
        };
      }

      // Handle receptive skills (grammar, vocabulary, reading) from question bank
      const bank = this.getQuestionBankForLanguage(this.targetLanguage);
      const skillItems = bank.filter(item =>
        item.skill === currentSkill &&
        !this.sessionState.usedItemIds.has(item.id)
      );

      if (skillItems.length === 0) {
        thread.finished = true;
        return this.getNextItem();
      }

      // Target difficulty near current theta
      const targetDifficulty = thread.theta;
      let sortedItems = skillItems.slice().sort((a, b) => {
        const diffA = Math.abs(a.difficulty - targetDifficulty);
        const diffB = Math.abs(b.difficulty - targetDifficulty);
        return diffA - diffB;
      });

      const selectedItem = sortedItems[0];
      return selectedItem;
    }

    /**
     * Submit response to current question/task
     */
    submitResponse(itemIdOrTask, responseData) {
      if (this.sessionState.isComplete) return;

      const timestamp = new Date().toISOString();

      if (responseData.skill === 'writing' || responseData.skill === 'speaking') {
        const skill = responseData.skill;
        const thread = this.sessionState.skillThreads[skill];
        thread.itemsAnswered.push({
          taskId: responseData.taskId || `${skill}_task`,
          rubricScores: responseData.rubricScores || {},
          rawScore: responseData.rawScore || 0,
          estimatedBand: responseData.estimatedBand || 'B1',
          skipped: Boolean(responseData.skipped),
          responseData: responseData,
          timestamp: timestamp
        });
        // A skipped task is no evidence: keep the prior ability instead of
        // granting the default band.
        if (!responseData.skipped) {
          thread.theta = BAND_NUMERIC[responseData.estimatedBand] || 4.0;
        }
        thread.finished = true;

        this.sessionState.history.push({
          type: 'productive_task',
          skill: skill,
          responseData: responseData,
          timestamp: timestamp
        });

        this.checkSessionCompletion();
        return;
      }

      // Multiple choice / gap fill response
      const item = responseData.item;
      const isCorrect = responseData.isCorrect ? 1 : 0;
      const skill = item.skill;
      const thread = this.sessionState.skillThreads[skill];

      this.sessionState.usedItemIds.add(item.id);
      thread.count++;
      thread.scoreSum += isCorrect;

      thread.itemsAnswered.push({
        itemId: item.id,
        itemBand: item.band,
        itemDifficulty: item.difficulty,
        userAnswer: responseData.userAnswer,
        isCorrect: isCorrect,
        timestamp: timestamp
      });

      const estimate = this.estimateAbility(thread.itemsAnswered);
      thread.theta = estimate.theta;
      thread.se = estimate.se;

      // Stop when the item budget for this skill is spent. The budget can never
      // exceed what the bank actually holds, otherwise the thread would silently
      // run out of items instead of ending on a count.
      const availableForSkill = this.countItemsForSkill(item.skill);
      const requestedBudget = this.mode === 'short_screening' ? 3 : 8;
      const maxItemsForSkill = Math.max(1, Math.min(requestedBudget, availableForSkill || requestedBudget));
      if (thread.count >= maxItemsForSkill) {
        thread.finished = true;
      }

      // Calculate response variance for tie-breaker / inconsistent performance check
      if (thread.count >= 4) {
        const recentResponses = thread.itemsAnswered.slice(-4).map(r => r.isCorrect);
        const mean = recentResponses.reduce((a, b) => a + b, 0) / 4;
        const variance = recentResponses.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / 4;
        thread.variance = variance;
        thread.confidence = variance > 0.22 ? 'medium' : 'high';
      }

      this.sessionState.history.push({
        type: 'item_response',
        itemId: item.id,
        skill: skill,
        isCorrect: isCorrect,
        thetaAfter: thread.theta,
        timestamp: timestamp
      });

      this.checkSessionCompletion();
    }

    checkSessionCompletion() {
      const skills = ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'];
      const allFinished = skills.every(s => this.sessionState.skillThreads[s].finished);
      if (allFinished) {
        this.sessionState.isComplete = true;
      }
    }

    getQuestionBankForLanguage(lang) {
      if (lang === 'en') {
        return (typeof window !== 'undefined' && window.COSY_PLACEMENT_QUESTIONS_EN) ||
               this.questionBanks.en || [];
      } else {
        const multi = (typeof window !== 'undefined' && window.COSY_PLACEMENT_QUESTIONS_MULTILINGUAL) ||
                      this.questionBanks.multilingual || {};
        return multi[lang] || [];
      }
    }

    countItemsForSkill(skill) {
      const bank = this.getQuestionBankForLanguage(this.targetLanguage);
      return bank.filter(item => item.skill === skill).length;
    }

    /**
     * Maximum-likelihood ability estimate for a Rasch (1PL) model.
     * A fixed-step staircase drifts one band per two answers regardless of how
     * informative the answers were; the likelihood estimate uses every response.
     */
    estimateAbility(answers) {
      const scored = (answers || []).filter(a => typeof a.isCorrect !== 'undefined');
      if (scored.length === 0) return { theta: 3.0, se: null };

      let bestTheta = 3.0;
      let bestLogLikelihood = -Infinity;
      for (let theta = 1.0; theta <= 7.0001; theta += 0.05) {
        let logLikelihood = 0;
        for (const answer of scored) {
          const difficulty = typeof answer.itemDifficulty === 'number' ? answer.itemDifficulty : 4.0;
          const p = 1 / (1 + Math.exp(-(theta - difficulty)));
          logLikelihood += answer.isCorrect
            ? Math.log(Math.max(p, 1e-9))
            : Math.log(Math.max(1 - p, 1e-9));
        }
        if (logLikelihood > bestLogLikelihood) {
          bestLogLikelihood = logLikelihood;
          bestTheta = theta;
        }
      }

      let information = 0;
      for (const answer of scored) {
        const difficulty = typeof answer.itemDifficulty === 'number' ? answer.itemDifficulty : 4.0;
        const p = 1 / (1 + Math.exp(-(bestTheta - difficulty)));
        information += p * (1 - p);
      }
      const se = information > 0 ? 1 / Math.sqrt(information) : null;

      return { theta: Math.min(7, Math.max(1, bestTheta)), se };
    }

    numericToBand(num) {
      const clamped = Math.max(1, Math.min(7, num));
      return NUMERIC_BAND[clamped] || 'B1';
    }

    bandToNumeric(band) {
      return BAND_NUMERIC[band] || 4;
    }
  }

  return AdaptiveEngine;
}));
