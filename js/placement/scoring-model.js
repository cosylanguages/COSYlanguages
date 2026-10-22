/**
 * COSY Languages - Scoring & Diagnostic Placement Model
 * Independent 5-skill scoring, range reporting, and active-passive gap analysis.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYScoringModel = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const CEFR_BANDS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const BAND_NUMERIC = { 'A0': 1, 'A1': 2, 'A2': 3, 'B1': 4, 'B2': 5, 'C1': 6, 'C2': 7 };
  const NUMERIC_BAND = { 1: 'A0', 2: 'A1', 3: 'A2', 4: 'B1', 5: 'B2', 6: 'C1', 7: 'C2' };

  class ScoringModel {
    /**
     * Compute full placement diagnostic report from session state
     */
    static evaluatePlacement(sessionState) {
      const threads = sessionState.skillThreads || {};
      const targetLang = sessionState.language || 'en';
      const purpose = sessionState.purpose || 'general';

      const grammarEval = this.evaluateSkillThread('grammar', threads.grammar);
      const vocabEval = this.evaluateSkillThread('vocabulary', threads.vocabulary);
      const readingEval = this.evaluateSkillThread('reading', threads.reading);
      const writingEval = this.evaluateProductiveThread('writing', threads.writing);
      const speakingEval = this.evaluateProductiveThread('speaking', threads.speaking);

      const skillResults = {
        grammar: grammarEval,
        vocabulary: vocabEval,
        reading: readingEval,
        writing: writingEval,
        speaking: speakingEval
      };

      // Receptive vs Productive comparison
      const receptiveAvg = (grammarEval.numericLevel + vocabEval.numericLevel + readingEval.numericLevel) / 3;
      const productiveAvg = (writingEval.numericLevel + speakingEval.numericLevel) / 2;

      // Active vs Passive Gap calculation
      const gapDetected = (receptiveAvg - productiveAvg) >= 1.25;
      const gapSeverity = receptiveAvg - productiveAvg;

      // Overall Placement calculation based on purpose policy
      const overallPlacement = this.calculateOverallPlacement(skillResults, purpose, receptiveAvg, productiveAvg, gapDetected);

      // Strengths, Weaknesses, Error Patterns
      const diagnostics = this.generateDiagnostics(skillResults, gapDetected, targetLang);

      // Learning Recommendations
      const recommendations = this.generateRecommendations(overallPlacement.level, skillResults, gapDetected, targetLang, purpose);

      return {
        timestamp: new Date().toISOString(),
        language: targetLang,
        purpose: purpose,
        mode: sessionState.mode || 'full_diagnostic',
        overallPlacement: overallPlacement,
        skills: skillResults,
        activePassiveGap: {
          detected: gapDetected,
          receptiveAvgLevel: this.numericToBand(Math.round(receptiveAvg)),
          productiveAvgLevel: this.numericToBand(Math.round(productiveAvg)),
          numericDifference: Math.round(gapSeverity * 100) / 100
        },
        diagnostics: diagnostics,
        recommendations: recommendations,
        disclaimer: "Provisional diagnostic estimate based on observed communicative responses. Not an official certified language credential."
      };
    }

    static evaluateSkillThread(skillName, thread) {
      if (!thread || !thread.itemsAnswered || thread.itemsAnswered.length === 0) {
        return {
          skill: skillName,
          band: 'Insufficient Evidence',
          range: 'Insufficient Evidence',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: 'No evidence collected',
          evidenceCount: 0,
          isInsufficient: true
        };
      }

      const count = thread.itemsAnswered.length;
      if (count < 3) {
        const correctCount = thread.itemsAnswered.filter(i => i.isCorrect).length;
        return {
          skill: skillName,
          band: 'Insufficient Evidence',
          range: 'Insufficient Evidence',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: `${correctCount} / ${count} (Inconclusive - min 3 items required)`,
          evidenceCount: count,
          isInsufficient: true
        };
      }

      const correctCount = thread.itemsAnswered.filter(i => i.isCorrect).length;
      const accuracyPct = Math.round((correctCount / count) * 100);

      let theta = thread.theta || 3.0;
      let numericLevel = Math.max(1.0, Math.min(7.0, theta));
      let band = NUMERIC_BAND[Math.round(numericLevel)] || 'B1';

      // Range determination for boundary / variance cases
      let range = band;
      if (thread.variance > 0.2 || count < 4) {
        const lower = NUMERIC_BAND[Math.max(1, Math.round(numericLevel - 0.5))];
        const upper = NUMERIC_BAND[Math.min(7, Math.round(numericLevel + 0.5))];
        range = (lower !== upper) ? `${lower}–${upper}` : lower;
      }

      let confidence = 'high';
      if (thread.variance > 0.22) confidence = 'medium';

      return {
        skill: skillName,
        band: band,
        range: range,
        numericLevel: numericLevel,
        confidence: confidence,
        scoreText: `${correctCount} / ${count} (${accuracyPct}%)`,
        evidenceCount: count,
        accuracyPct: accuracyPct,
        isInsufficient: false
      };
    }

    static evaluateProductiveThread(skillName, thread) {
      if (!thread || !thread.itemsAnswered || thread.itemsAnswered.length === 0) {
        return {
          skill: skillName,
          band: 'Insufficient Evidence',
          range: 'Insufficient Evidence',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: 'Missing productive evidence',
          evidenceCount: 0,
          isInsufficient: true
        };
      }

      const item = thread.itemsAnswered[0];
      if (item.skipped) {
        return {
          skill: skillName,
          band: 'Insufficient Evidence',
          range: 'Insufficient Evidence',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: 'Task skipped by user',
          evidenceCount: 0,
          isInsufficient: true
        };
      }

      const band = item.estimatedBand || 'B1';
      const numericLevel = BAND_NUMERIC[band] || 4.0;

      return {
        skill: skillName,
        band: band,
        range: band,
        numericLevel: numericLevel,
        confidence: 'provisional_automated',
        scoreText: `Rubric Assessed (${band})`,
        evidenceCount: 1,
        rubricScores: item.rubricScores || {},
        isInsufficient: false
      };
    }

    static calculateOverallPlacement(skillResults, purpose, receptiveAvg, productiveAvg, gapDetected) {
      // If essential skills lack evidence, report overall insufficient evidence
      const insufficientCount = Object.values(skillResults).filter(s => s.isInsufficient).length;
      if (insufficientCount >= 3) {
        return {
          level: 'Insufficient Evidence',
          range: 'Insufficient Evidence',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient'
        };
      }

      let numericTarget = 3.0;

      if (purpose === 'spoken') {
        numericTarget = skillResults.speaking.isInsufficient ? receptiveAvg : skillResults.speaking.numericLevel;
      } else if (purpose === 'exam') {
        numericTarget = (receptiveAvg * 0.6) + (productiveAvg * 0.4);
      } else {
        if (gapDetected) {
          numericTarget = productiveAvg + 0.5;
        } else {
          numericTarget = (receptiveAvg * 0.5) + (productiveAvg * 0.5);
        }
      }

      numericTarget = Math.max(1, Math.min(7, numericTarget));
      const primaryBand = NUMERIC_BAND[Math.round(numericTarget)];
      const isBoundary = Math.abs(numericTarget - Math.round(numericTarget)) > 0.3;

      let recommendedRange = primaryBand;
      if (isBoundary) {
        const lower = NUMERIC_BAND[Math.floor(numericTarget)];
        const upper = NUMERIC_BAND[Math.ceil(numericTarget)];
        if (lower && upper && lower !== upper) {
          recommendedRange = `${lower}–${upper}`;
        }
      }

      return {
        level: primaryBand,
        range: recommendedRange,
        numericLevel: numericTarget,
        confidence: gapDetected ? 'medium' : 'high'
      };
    }

    static generateDiagnostics(skillResults, gapDetected, targetLang) {
      const strengths = [];
      const weaknesses = [];

      const validSkills = Object.entries(skillResults).filter(([_, s]) => !s.isInsufficient);
      if (validSkills.length > 0) {
        const sorted = validSkills.sort((a, b) => b[1].numericLevel - a[1].numericLevel);
        const strongest = sorted[0];
        const weakest = sorted[sorted.length - 1];

        strengths.push(`Strongest performance observed in ${strongest[0].toUpperCase()} (${strongest[1].band}).`);
        weaknesses.push(`Primary priority area identified in ${weakest[0].toUpperCase()} (${weakest[1].band}).`);
      }

      if (gapDetected) {
        weaknesses.push("Active-Passive Gap: Receptive comprehension significantly exceeds productive retrieval confidence under time pressure.");
      } else if (validSkills.length > 0) {
        strengths.push("Balanced Communicator Profile: Receptive knowledge aligns well with productive speaking and writing capability.");
      }

      return {
        strengths: strengths,
        weaknesses: weaknesses
      };
    }

    static generateRecommendations(overallLevel, skillResults, gapDetected, targetLang, purpose) {
      const recs = [];
      const safeLevel = (overallLevel === 'Insufficient Evidence') ? 'A1' : overallLevel;

      recs.push({
        title: `COSY ${targetLang.toUpperCase()} ${safeLevel} Course Module`,
        url: `courses/general.html?lang=${targetLang}&level=${safeLevel}`,
        description: `Enrol in the core COSY ${safeLevel} curriculum tailored to your assessed CEFR level.`
      });

      if (gapDetected) {
        recs.push({
          title: "Active Fluency & Cognition Accelerator",
          url: `https://cosylanguages.github.io/COSYpractice/?lang=${targetLang}&level=${safeLevel}&topic=active_retrieval`,
          description: "Targeted drills to bypass internal translation blocks and increase speaking retrieval speed."
        });
      }

      recs.push({
        title: "Speaking Club & Conversation Practice",
        url: `https://cosylanguages.github.io/COSYevents/?lang=${targetLang}&level=${safeLevel}`,
        description: "Join cozy speaking clubs to practice real-world interaction in a supportive environment."
      });

      return recs;
    }

    static numericToBand(num) {
      const clamped = Math.max(1, Math.min(7, num));
      return NUMERIC_BAND[clamped] || 'B1';
    }
  }

  return ScoringModel;
}));
