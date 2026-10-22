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
        disclaimer: "Provisional assessment based on observed communicative evidence. Not an official certified language exam credential."
      };
    }

    static evaluateSkillThread(skillName, thread) {
      if (!thread || !thread.itemsAnswered || thread.itemsAnswered.length === 0) {
        return {
          skill: skillName,
          band: 'A0',
          range: 'A0–A1',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: 'No evidence collected',
          evidenceCount: 0
        };
      }

      const count = thread.itemsAnswered.length;
      const correctCount = thread.itemsAnswered.filter(i => i.isCorrect).length;
      const accuracyPct = Math.round((correctCount / count) * 100);

      // Calculate theta
      let theta = thread.theta || 3.0;
      let numericLevel = Math.max(1.0, Math.min(7.0, theta));
      let band = NUMERIC_BAND[Math.round(numericLevel)] || 'B1';

      // Range determination
      let range = band;
      if (thread.variance > 0.2 || count < 4) {
        const lower = NUMERIC_BAND[Math.max(1, Math.round(numericLevel - 0.5))];
        const upper = NUMERIC_BAND[Math.min(7, Math.round(numericLevel + 0.5))];
        range = (lower !== upper) ? `${lower}–${upper}` : lower;
      }

      let confidence = 'high';
      if (count < 3) confidence = 'provisional_insufficient';
      else if (thread.variance > 0.22) confidence = 'medium';

      return {
        skill: skillName,
        band: band,
        range: range,
        numericLevel: numericLevel,
        confidence: confidence,
        scoreText: `${correctCount} / ${count} (${accuracyPct}%)`,
        evidenceCount: count,
        accuracyPct: accuracyPct
      };
    }

    static evaluateProductiveThread(skillName, thread) {
      if (!thread || !thread.itemsAnswered || thread.itemsAnswered.length === 0) {
        return {
          skill: skillName,
          band: 'A0',
          range: 'A0–A1',
          numericLevel: 1.0,
          confidence: 'provisional_insufficient',
          scoreText: 'Missing productive evidence',
          evidenceCount: 0
        };
      }

      const item = thread.itemsAnswered[0];
      const band = item.estimatedBand || 'B1';
      const numericLevel = BAND_NUMERIC[band] || 4.0;

      return {
        skill: skillName,
        band: band,
        range: band,
        numericLevel: numericLevel,
        confidence: 'high',
        scoreText: `Rubric Assessed (${band})`,
        evidenceCount: 1,
        rubricScores: item.rubricScores || {}
      };
    }

    static calculateOverallPlacement(skillResults, purpose, receptiveAvg, productiveAvg, gapDetected) {
      let numericTarget = 3.0;

      if (purpose === 'spoken') {
        // Spoken course heavily anchors on Speaking level
        numericTarget = skillResults.speaking.numericLevel;
      } else if (purpose === 'exam') {
        // Exam purpose requires solid grammar and reading
        numericTarget = (receptiveAvg * 0.6) + (productiveAvg * 0.4);
      } else {
        // General purpose: balanced, but restricted by active production if gap exists
        if (gapDetected) {
          numericTarget = productiveAvg + 0.5; // Cap near productive level to build confidence
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

      // Identify strongest and weakest skills
      const sorted = Object.entries(skillResults).sort((a, b) => b[1].numericLevel - a[1].numericLevel);
      const strongest = sorted[0];
      const weakest = sorted[sorted.length - 1];

      strengths.push(`Strongest performance observed in ${strongest[0].toUpperCase()} (${strongest[1].band}).`);
      weaknesses.push(`Primary priority area identified in ${weakest[0].toUpperCase()} (${weakest[1].band}).`);

      if (gapDetected) {
        weaknesses.push("Active-Passive Gap: Receptive comprehension significantly exceeds productive retrieval confidence under time pressure.");
      } else {
        strengths.push("Balanced Communicator Profile: Receptive knowledge aligns well with productive speaking and writing capability.");
      }

      return {
        strengths: strengths,
        weaknesses: weaknesses,
        strongestSkill: strongest[0],
        weakestSkill: weakest[0]
      };
    }

    static generateRecommendations(overallLevel, skillResults, gapDetected, targetLang, purpose) {
      const recs = [];

      recs.push({
        title: `COSY ${targetLang.toUpperCase()} ${overallLevel} Course Module`,
        url: `courses/general.html?lang=${targetLang}&level=${overallLevel}`,
        description: `Enrol in the core COSY ${overallLevel} curriculum tailored to your assessed CEFR level.`
      });

      if (gapDetected) {
        recs.push({
          title: "Active Fluency & Cognition Accelerator",
          url: `https://cosylanguages.github.io/COSYpractice/?lang=${targetLang}&level=${overallLevel}&topic=active_retrieval`,
          description: "Targeted drills to bypass internal translation blocks and increase speaking retrieval speed."
        });
      }

      recs.push({
        title: "Speaking Club & Conversation Practice",
        url: `https://cosylanguages.github.io/COSYevents/?lang=${targetLang}&level=${overallLevel}`,
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
