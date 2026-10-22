/**
 * COSY Languages - Placement Assessment Report Generator
 * Builds clean HTML printable reports and exports.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COSYPlacementReport = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  class PlacementReport {
    /**
     * Generate HTML printable report markup
     */
    static generateReportHTML(reportData) {
      const overall = reportData.overallPlacement || {};
      const skills = reportData.skills || {};
      const gap = reportData.activePassiveGap || {};
      const diag = reportData.diagnostics || {};
      const recs = reportData.recommendations || [];

      const skillIcons = {
        grammar: '📖',
        vocabulary: '📚',
        reading: '🔍',
        writing: '✍️',
        speaking: '🗣️'
      };

      const skillCardsHtml = Object.entries(skills).map(([key, item]) => `
        <div class="skill-result-card">
          <div class="skill-card-header">
            <span>${skillIcons[key] || '📝'} ${key.toUpperCase()}</span>
            <span class="skill-card-confidence">Confidence: ${item.confidence}</span>
          </div>
          <div class="skill-card-band">${item.range || item.band}</div>
          <div style="font-size: 0.9rem; color: var(--ink-soft); margin-top: 0.4rem;">
            Evidence: ${item.scoreText || 'Assessed'} (${item.evidenceCount || 0} item/task)
          </div>
        </div>
      `).join('');

      let gapNoticeHtml = '';
      if (gap.detected) {
        gapNoticeHtml = `
          <div class="gap-notice-box" style="margin: 1.5rem 0;">
            <div class="gap-notice-title">⚠️ Active-Passive Speaking Gap Detected</div>
            <div class="gap-notice-text">
              Your receptive understanding is assessed at <strong>${gap.receptiveAvgLevel}</strong>, while your productive confidence is at <strong>${gap.productiveAvgLevel}</strong>.
              To bridge this gap effectively and build spontaneous confidence without anxiety, we recommend starting at <strong>${overall.level}</strong>.
            </div>
          </div>
        `;
      } else {
        gapNoticeHtml = `
          <div class="gap-notice-box" style="border-left-color: var(--green, #2e7d32); background: var(--green-light, #e8f5e9); margin: 1.5rem 0;">
            <div class="gap-notice-title" style="color: var(--green, #2e7d32);">✅ Balanced Communicator Profile</div>
            <div class="gap-notice-text">
              Your active production capability aligns smoothly with your receptive comprehension. You are ready to excel directly at level <strong>${overall.level}</strong>.
            </div>
          </div>
        `;
      }

      const recsHtml = recs.map(r => `
        <div class="action-item" style="margin-bottom: 0.75rem;">
          <span class="action-item-icon">🚀</span>
          <div>
            <strong><a href="${r.url}" style="color: var(--sage-deep); text-decoration: underline;">${r.title}</a></strong>
            <div style="font-size: 0.9rem; color: var(--ink-soft);">${r.description}</div>
          </div>
        </div>
      `).join('');

      return `
        <div class="report-wrapper" style="padding: 1rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 2rem; margin-bottom: 0.25rem;">
              COSY Languages Assessment Report 🌿
            </h1>
            <div style="font-size: 0.95rem; color: var(--ink-soft);">
              Date: ${new Date(reportData.timestamp).toLocaleDateString()} | Language: <strong>${(reportData.language || 'en').toUpperCase()}</strong> | Purpose: <strong>${reportData.purpose}</strong>
            </div>
          </div>

          <div style="text-align: center; background: var(--sage-light); border: 2px solid var(--border); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--sage-deep); text-transform: uppercase;">Overall Recommended Placement</div>
            <div style="font-family: var(--font-serif); font-size: 2.8rem; font-weight: 900; color: var(--sage-deep);">${overall.range || overall.level}</div>
            <p style="margin-top: 0.5rem; font-size: 1rem; color: var(--ink-soft);">
              Targeted CEFR placement calculated from 5 independent skill threads.
            </p>
          </div>

          <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 1rem;">
            📊 Individual Skill Breakdown
          </h2>
          <div class="results-dashboard-grid">
            ${skillCardsHtml}
          </div>

          ${gapNoticeHtml}

          <div style="margin: 2rem 0;">
            <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 0.75rem;">
              🎯 Strengths & Observed Priority Areas
            </h2>
            <ul style="line-height: 1.6; color: var(--ink-soft); padding-left: 1.25rem;">
              ${(diag.strengths || []).map(s => `<li style="margin-bottom: 0.4rem;"><strong>Strength:</strong> ${s}</li>`).join('')}
              ${(diag.weaknesses || []).map(w => `<li style="margin-bottom: 0.4rem;"><strong>Priority Area:</strong> ${w}</li>`).join('')}
            </ul>
          </div>

          <div style="margin: 2rem 0; background: var(--cream-dark); border: 2px dashed var(--border); padding: 1.5rem; border-radius: 12px;">
            <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 1rem;">
              🚀 Recommended Learning Path & Resources
            </h2>
            ${recsHtml}
          </div>

          <div style="font-size: 0.8rem; color: var(--ink-soft); text-align: center; margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1rem;">
            ${reportData.disclaimer || 'Provisional placement assessment.'}
          </div>
        </div>
      `;
    }

    static triggerPrint() {
      window.print();
    }
  }

  return PlacementReport;
}));
