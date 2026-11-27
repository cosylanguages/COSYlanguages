/**
 * COSYlanguages - Placement Assessment Report Generator
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

  const DATE_LOCALES = { en: 'en-GB', fr: 'fr-FR', it: 'it-IT', ru: 'ru-RU', el: 'el-GR' };

  function placementStrings() {
    const scope = typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null);
    return (scope && scope.COSYPlacementStrings) || null;
  }

  /** Localised string, else the English literal this module has always carried. */
  function tr(key, fallbackText, vars) {
    const strings = placementStrings();
    const value = strings ? strings.t(key, vars) : '';
    return value || fallbackText;
  }

  function confidenceLabel(code) {
    const key = String(code || '').indexOf('provisional') === 0 ? 'provisional' : code;
    return tr('report.confidence.' + key, code || '');
  }

  /** Score descriptions arrive from the model as a code plus params. */
  function scoreText(item) {
    if (!item.scoreCode) return item.scoreText || '';
    const params = item.scoreParams || {};
    const fallbacks = {
      no_evidence: 'No evidence collected',
      inconclusive: `${params.correct} / ${params.count} (inconclusive — at least 3 items needed)`,
      accuracy: `${params.correct} / ${params.count} (${params.pct}%)`,
      missing_productive: 'Missing productive evidence',
      skipped: 'Task skipped by user',
      rubric: `Rubric Assessed (${params.band})`
    };
    const keys = {
      no_evidence: 'report.noEvidence',
      inconclusive: 'report.inconclusive',
      accuracy: 'report.accuracy',
      missing_productive: 'report.missingProductive',
      skipped: 'report.skipped',
      rubric: 'report.rubric'
    };
    return tr(keys[item.scoreCode] || '', fallbacks[item.scoreCode] || item.scoreText || '', params);
  }

  function skillName(key) {
    return tr('skill.' + key, key);
  }

  function diagnosticLine(entry) {
    if (!entry) return '';
    if (typeof entry === 'string') return entry;
    const params = Object.assign({}, entry.params);
    if (params.skill) params.skill = skillName(params.skill);
    return tr(entry.code, entry.text, params);
  }

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
      const strings = placementStrings();
      const sourceLang = (reportData.language || 'en').toLowerCase();
      const langLabel = tr('lang.' + sourceLang, sourceLang.toUpperCase());
      const purposeLabel = tr('purposeLabel.' + reportData.purpose, reportData.purpose);
      const dateLocale = DATE_LOCALES[(strings && strings.getLang && strings.getLang()) || 'en'] || 'en-GB';

      const skillIcons = {
        grammar: '📖',
        vocabulary: '📚',
        reading: '🔍',
        writing: '✍️',
        speaking: '🗣️'
      };

      const skillCardsHtml = Object.entries(skills).map(([key, item]) => {
        const band = item.isInsufficient
          ? tr('report.insufficient', item.range || item.band)
          : (item.range || item.band);
        return `
        <div class="skill-result-card">
          <div class="skill-card-header">
            <span>${skillIcons[key] || '📝'} ${skillName(key)}</span>
            <span class="skill-card-confidence">${tr('report.confidence', 'Confidence: {value}', { value: confidenceLabel(item.confidence) })}</span>
          </div>
          <div class="skill-card-band">${band}</div>
          <div style="font-size: 0.9rem; color: var(--ink-soft); margin-top: 0.4rem;">
            ${tr('report.evidence', 'Evidence: {text} · {n} item/task', { text: scoreText(item), n: item.evidenceCount || 0 })}
          </div>
        </div>
      `;
      }).join('');

      let gapNoticeHtml = '';
      if (gap.detected) {
        gapNoticeHtml = `
          <div class="gap-notice-box" style="margin: 1.5rem 0;">
            <div class="gap-notice-title">${tr('report.gapTitle', '⚠️ Active-Passive Speaking Gap Detected')}</div>
            <div class="gap-notice-text">
              ${tr('report.gapText', 'Your receptive understanding is assessed at <strong>{receptive}</strong>, while your productive confidence is at <strong>{productive}</strong>. To bridge this gap effectively and build spontaneous confidence without anxiety, we recommend starting at <strong>{level}</strong>.', {
                receptive: gap.receptiveAvgLevel,
                productive: gap.productiveAvgLevel,
                level: overall.level
              })}
            </div>
          </div>
        `;
      } else {
        gapNoticeHtml = `
          <div class="gap-notice-box" style="border-left-color: var(--green, #2e7d32); background: var(--green-light, #e8f5e9); margin: 1.5rem 0;">
            <div class="gap-notice-title" style="color: var(--green, #2e7d32);">${tr('report.balancedTitle', '✅ Balanced Communicator Profile')}</div>
            <div class="gap-notice-text">
              ${tr('report.balancedText', 'Your active production capability aligns smoothly with your receptive comprehension. You are ready to excel directly at level <strong>{level}</strong>.', { level: overall.level })}
            </div>
          </div>
        `;
      }

      const recsHtml = recs.map(r => {
        const params = r.params || {};
        const title = tr(r.code + '.title', r.title, params);
        const description = tr(r.code + '.desc', r.description, params);
        return `
        <div class="action-item" style="margin-bottom: 0.75rem;">
          <span class="action-item-icon">🚀</span>
          <div>
            <strong><a href="${r.url}" style="color: var(--sage-deep); text-decoration: underline;">${title}</a></strong>
            <div style="font-size: 0.9rem; color: var(--ink-soft);">${description}</div>
          </div>
        </div>
      `;
      }).join('');

      return `
        <div class="report-wrapper" style="padding: 1rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 2rem; margin-bottom: 0.25rem;">
              ${tr('report.title', 'COSYlanguages Assessment Report 🌿')}
            </h1>
            <div style="font-size: 0.95rem; color: var(--ink-soft);">
              ${tr('report.meta', 'Date: {date} | Language: {lang} | Purpose: {purpose}', {
                date: new Date(reportData.timestamp).toLocaleDateString(dateLocale),
                lang: langLabel,
                purpose: purposeLabel
              })}
            </div>
          </div>

          <div style="text-align: center; background: var(--sage-light); border: 2px solid var(--border); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--sage-deep); text-transform: uppercase;">${tr('report.overall', 'Overall Recommended Placement')}</div>
            <div style="font-family: var(--font-serif); font-size: 2.8rem; font-weight: 900; color: var(--sage-deep);">${overall.range || overall.level}</div>
            <p style="margin-top: 0.5rem; font-size: 1rem; color: var(--ink-soft);">
              ${tr('report.overallNote', 'Targeted CEFR placement calculated from 5 independent skill threads.')}
            </p>
          </div>

          <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 1rem;">
            ${tr('report.skillsHeading', '📊 Individual Skill Breakdown')}
          </h2>
          <div class="results-dashboard-grid">
            ${skillCardsHtml}
          </div>

          ${gapNoticeHtml}

          <div style="margin: 2rem 0;">
            <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 0.75rem;">
              ${tr('report.strengthsHeading', '🎯 Strengths & Observed Priority Areas')}
            </h2>
            <ul style="line-height: 1.6; color: var(--ink-soft); padding-left: 1.25rem;">
              ${(diag.strengths || []).map(s => `<li style="margin-bottom: 0.4rem;"><strong>${tr('report.strengthLabel', 'Strength:')}</strong> ${diagnosticLine(s)}</li>`).join('')}
              ${(diag.weaknesses || []).map(w => `<li style="margin-bottom: 0.4rem;"><strong>${tr('report.priorityLabel', 'Priority Area:')}</strong> ${diagnosticLine(w)}</li>`).join('')}
            </ul>
          </div>

          <div style="margin: 2rem 0; background: var(--cream-dark); border: 2px dashed var(--border); padding: 1.5rem; border-radius: 12px;">
            <h2 style="font-family: var(--font-serif); color: var(--sage-dark); font-size: 1.4rem; margin-bottom: 1rem;">
              ${tr('report.pathHeading', '🚀 Recommended Learning Path & Resources')}
            </h2>
            ${recsHtml}
          </div>

          <div style="font-size: 0.8rem; color: var(--ink-soft); text-align: center; margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1rem;">
            ${tr('report.disclaimer', reportData.disclaimer || 'Provisional placement assessment.')}
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
