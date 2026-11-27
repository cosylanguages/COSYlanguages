/**
 * COSYlanguages - Placement Assessment UI Manager
 * Controls onboarding, dynamic question rendering, save/resume, and results reporting.
 */

(function () {
  let engine = null;
  let activeAudioRecorder = null;
  let currentStep = 'onboarding'; // 'onboarding' | 'test' | 'results'
  // The banks cover the five official languages; ?lang= arrives from a language
  // page's placement link so the learner does not have to pick the same language twice.
  const SUPPORTED_LANGS = ['en', 'fr', 'it', 'ru', 'el'];
  const requestedLang = (new URLSearchParams(window.location.search).get('lang') || '').toLowerCase();
  let selectedLanguage = SUPPORTED_LANGS.includes(requestedLang) ? requestedLang : 'en';
  let selectedPurpose = 'general';
  let selectedMode = 'full_diagnostic';

  const strings = window.COSYPlacementStrings;

  /** Quiz chrome copy; keys come from js/placement/strings.js. */
  function t(key, vars) {
    return strings ? strings.t(key, vars) : '';
  }

  function langName(code) {
    return t(`lang.${code}`) || code.toUpperCase();
  }

  /**
   * Chrome follows the visitor's interface language, the same one the nav and the
   * footer use: a learner who came from the French hub reads the quiz in French,
   * while the questions themselves stay in the target language.
   */
  function resolveQuizLang() {
    const candidates = [
      window.COSY_I18N && window.COSY_I18N.currentLang,
      (window.localStorage.getItem('cosy_last_language') || '').toLowerCase(),
      (document.documentElement.lang || '').toLowerCase()
    ];
    for (const candidate of candidates) {
      if (SUPPORTED_LANGS.includes(candidate)) return candidate;
    }
    return 'en';
  }

  function applyQuizLanguage() {
    const lang = strings ? strings.setLang(resolveQuizLang()) : 'en';
    document.documentElement.lang = lang;
    if (document.title) document.title = t('page.docTitle');
    document.querySelectorAll('[data-placement-i18n]').forEach(el => {
      const value = t(el.getAttribute('data-placement-i18n'));
      if (!value) return;
      if (el.hasAttribute('data-placement-html')) el.innerHTML = value;
      else el.textContent = value;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!strings) {
      console.error('Placement strings missing: js/placement/strings.js must load before ui.js');
      return;
    }
    applyQuizLanguage();
    initApp();
    document.addEventListener('cosyI18nReady', onLocaleChange);
    document.addEventListener('cosyLanguageChanged', onLocaleChange);
  });

  function initApp() {
    renderOnboardingScreen();
    checkSavedSession();
  }

  function onLocaleChange() {
    applyQuizLanguage();
    if (currentStep === 'onboarding') {
      // Re-rendering the onboarding card drops the resume banner with it.
      renderOnboardingScreen();
      checkSavedSession();
    } else if (currentStep === 'test' && canRerenderTest()) {
      renderTestScreen();
    } else if (currentStep === 'results') {
      showResultsScreen();
    }
  }

  /** Re-rendering mid-answer would drop typed text or an in-flight recording. */
  function canRerenderTest() {
    const textarea = document.getElementById('writing-input');
    if (textarea && textarea.value.trim()) return false;
    if (activeAudioRecorder && activeAudioRecorder.state === 'recording') return false;
    return true;
  }

  function checkSavedSession() {
    try {
      const saved = localStorage.getItem('cosy_placement_session');
      if (saved) {
        const sessionData = JSON.parse(saved);
        if (sessionData && sessionData.sessionState && !sessionData.sessionState.isComplete) {
          const resumeBanner = document.createElement('div');
          resumeBanner.className = 'gap-notice-box';
          resumeBanner.style.margin = '1rem 0';
          resumeBanner.innerHTML = `
            <div class="gap-notice-title">${t('resume.title')}</div>
            <div class="gap-notice-text">
              ${t('resume.text')}
              <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                <button type="button" class="btn btn-primary" id="btn-resume-session">${t('resume.resume')}</button>
                <button type="button" class="btn btn-secondary" id="btn-discard-session">${t('resume.startNew')}</button>
              </div>
            </div>
          `;
          const container = document.getElementById('placement-content-area');
          if (container) {
            container.prepend(resumeBanner);
            document.getElementById('btn-resume-session').addEventListener('click', () => {
              resumeSession(sessionData);
            });
            document.getElementById('btn-discard-session').addEventListener('click', () => {
              localStorage.removeItem('cosy_placement_session');
              resumeBanner.remove();
            });
          }
        }
      }
    } catch (e) {
      console.warn("Could not check saved session:", e);
    }
  }

  function renderOnboardingScreen() {
    currentStep = 'onboarding';
    const container = document.getElementById('placement-content-area');
    if (!container) return;

    container.innerHTML = `
      <div class="onboarding-card">
        <h2 class="onboarding-section-title">${t('ob.step1')}</h2>
        <div class="lang-grid" id="onboarding-lang-grid">
          <div class="lang-option ${selectedLanguage === 'en' ? 'selected' : ''}" data-lang="en">🇬🇧 ${langName('en')}</div>
          <div class="lang-option ${selectedLanguage === 'fr' ? 'selected' : ''}" data-lang="fr">🇫🇷 ${langName('fr')}</div>
          <div class="lang-option ${selectedLanguage === 'it' ? 'selected' : ''}" data-lang="it">🇮🇹 ${langName('it')}</div>
          <div class="lang-option ${selectedLanguage === 'ru' ? 'selected' : ''}" data-lang="ru">🇷🇺 ${langName('ru')}</div>
          <div class="lang-option ${selectedLanguage === 'el' ? 'selected' : ''}" data-lang="el">🇬🇷 ${langName('el')}</div>
        </div>

        <h2 class="onboarding-section-title" style="margin-top: 1.5rem;">${t('ob.step2')}</h2>
        <div class="purpose-grid">
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'general' ? 'selected' : ''}" data-purpose="general">
            <div class="mode-option-title">${t('ob.purpose.general.title')}</div>
            <div class="mode-option-desc">${t('ob.purpose.general.desc')}</div>
          </button>
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'spoken' ? 'selected' : ''}" data-purpose="spoken">
            <div class="mode-option-title">${t('ob.purpose.spoken.title')}</div>
            <div class="mode-option-desc">${t('ob.purpose.spoken.desc')}</div>
          </button>
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'exam' ? 'selected' : ''}" data-purpose="exam">
            <div class="mode-option-title">${t('ob.purpose.exam.title')}</div>
            <div class="mode-option-desc">${t('ob.purpose.exam.desc')}</div>
          </button>
        </div>

        <h2 class="onboarding-section-title" style="margin-top: 1.5rem;">${t('ob.step3')}</h2>
        <div class="mode-grid">
          <button type="button" class="mode-option-btn ${selectedMode === 'short_screening' ? 'selected' : ''}" data-mode="short_screening">
            <div class="mode-option-title">${t('ob.mode.short.title')}</div>
            <div class="mode-option-desc">${t('ob.mode.short.desc')}</div>
          </button>
          <button type="button" class="mode-option-btn ${selectedMode === 'full_diagnostic' ? 'selected' : ''}" data-mode="full_diagnostic">
            <div class="mode-option-title">${t('ob.mode.full.title')}</div>
            <div class="mode-option-desc">${t('ob.mode.full.desc')}</div>
          </button>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button type="button" class="btn btn-primary" id="btn-start-placement" style="padding: 0.85rem 2.5rem; font-size: 1.1rem;">
            ${t('ob.start')}
          </button>
        </div>
      </div>
    `;

    bindOnboardingEvents();
  }

  function bindOnboardingEvents() {
    document.querySelectorAll('#onboarding-lang-grid .lang-option').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('#onboarding-lang-grid .lang-option').forEach(opt => opt.classList.remove('selected'));
        el.classList.add('selected');
        selectedLanguage = el.dataset.lang;
      });
    });

    document.querySelectorAll('.purpose-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.purpose-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedPurpose = btn.dataset.purpose;
      });
    });

    document.querySelectorAll('.mode-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMode = btn.dataset.mode;
      });
    });

    const btnStart = document.getElementById('btn-start-placement');
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        startAssessment();
      });
    }
  }

  function startAssessment() {
    engine = new window.COSYAdaptiveEngine(null, {
      mode: selectedMode,
      targetLanguage: selectedLanguage,
      purpose: selectedPurpose
    });

    currentStep = 'test';
    renderTestScreen();
  }

  function resumeSession(sessionData) {
    selectedLanguage = sessionData.sessionState.language || 'en';
    selectedPurpose = sessionData.sessionState.purpose || 'general';
    selectedMode = sessionData.sessionState.mode || 'full_diagnostic';

    engine = new window.COSYAdaptiveEngine(null, {
      mode: selectedMode,
      targetLanguage: selectedLanguage,
      purpose: selectedPurpose
    });
    engine.restoreState(sessionData.sessionState);

    currentStep = 'test';
    renderTestScreen();
  }

  function renderTestScreen() {
    const container = document.getElementById('placement-content-area');
    if (!container || !engine) return;

    if (engine.sessionState.isComplete) {
      showResultsScreen();
      return;
    }

    const currentItem = engine.getNextItem();
    if (!currentItem) {
      showResultsScreen();
      return;
    }

    // Save progress to localStorage
    saveSession();

    // Skill Tabs Bar
    const skillsOrder = ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'];
    const activeSkill = currentItem.skill;

    const tabsHtml = skillsOrder.map(s => {
      const thread = engine.sessionState.skillThreads[s];
      let statusClass = '';
      if (s === activeSkill) statusClass = 'active';
      else if (thread.finished) statusClass = 'completed';

      return `<span class="skill-tab-pill ${statusClass}">${(t('skill.' + s) || s).toUpperCase()}</span>`;
    }).join('');

    // Estimate progress
    const totalEstimate = selectedMode === 'short_screening' ? 15 : 25;
    const answeredTotal = Object.values(engine.sessionState.skillThreads)
      .reduce((sum, t) => sum + t.count, 0);
    const progressPct = Math.min(100, Math.round((answeredTotal / totalEstimate) * 100));

    let questionBodyHtml = '';

    if (currentItem.type === 'prompt_task') {
      if (currentItem.skill === 'writing') {
        questionBodyHtml = renderWritingTask(currentItem);
      } else if (currentItem.skill === 'speaking') {
        questionBodyHtml = renderSpeakingTask(currentItem);
      }
    } else {
      questionBodyHtml = renderMultipleChoiceTask(currentItem);
    }

    container.innerHTML = `
      <div id="test-screen-container">
        <div class="skill-tabs-nav">
          ${tabsHtml}
        </div>

        <div class="placement-progress-bar-bg">
          <div class="placement-progress-fill" style="width: ${progressPct}%;"></div>
        </div>

        <div id="question-render-area">
          ${questionBodyHtml}
        </div>

        <div class="navigation-bar">
          <button type="button" class="btn btn-secondary" id="btn-skip-item">${t('test.skip')}</button>
          <span style="font-size: 0.9rem; color: var(--ink-soft);">${t('test.target', { lang: langName(selectedLanguage) })}</span>
        </div>
      </div>
    `;

    bindTestScreenEvents(currentItem);
  }

  function renderMultipleChoiceTask(item) {
    let passageHtml = '';
    if (item.passage) {
      passageHtml = `
        <div class="reading-passage-box">
          ${item.passage}
        </div>
      `;
    }

    const optionsHtml = item.options.map((opt, idx) => `
      <button class="option-btn" data-opt-index="${idx}">${opt}</button>
    `).join('');

    return `
      <div class="question-card" style="display: block;">
        ${passageHtml}
        <div class="question-text">${item.question}</div>
        <div class="option-list" id="mc-option-list">
          ${optionsHtml}
        </div>
      </div>
    `;
  }

  const CEFR_ORDER = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  function promptsForKind(kind) {
    const spec = window.COSY_PLACEMENT_PROMPTS_RUBRICS;
    if (!spec) return [];
    const getter = kind === 'writing' ? spec.getWritingPrompts : spec.getSpeakingPrompts;
    if (typeof getter === 'function') return getter(selectedLanguage);
    return (kind === 'writing' ? spec.writingPrompts : spec.speakingPrompts).en || [];
  }

  function pickPrompt(prompts, band, stage) {
    if (!prompts.length) return null;
    if (stage) {
      const staged = prompts.find(p => p.stage === stage);
      if (staged) return staged;
    }
    const exact = prompts.find(p => p.band === band);
    if (exact) return exact;
    const covering = prompts.find(p => Array.isArray(p.targetBands) && p.targetBands.includes(band));
    if (covering) return covering;
    const target = Math.max(0, CEFR_ORDER.indexOf(band));
    return prompts.slice().sort((a, b) =>
      Math.abs(CEFR_ORDER.indexOf(a.band) - target) - Math.abs(CEFR_ORDER.indexOf(b.band) - target)
    )[0];
  }

  function renderWritingTask(taskInfo) {
    const prompts = promptsForKind('writing');
    const prompt = pickPrompt(prompts, taskInfo.estimatedBand);
    const language = langName(selectedLanguage);

    return `
      <div class="question-card" style="display: block;">
        <div class="writing-prompt-box">
          <div style="font-weight: 800; color: var(--sage-deep); font-size: 1.15rem; margin-bottom: 0.5rem;">
            ${t('writing.title', { band: prompt.band })}
          </div>
          <p style="font-size: 1rem; color: var(--ink-soft); line-height: 1.5; margin-bottom: 0.75rem;">
            ${prompt.prompt}
          </p>
          <div style="font-size: 0.85rem; color: var(--sage-dark); font-weight: 700;">
            ${t('writing.length', { min: prompt.minWords, max: prompt.maxWords })}
          </div>
        </div>

        <textarea class="writing-textarea" id="writing-input" placeholder="${t('writing.placeholder', { lang: language })}"></textarea>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
          <span id="writing-word-count" style="font-size: 0.9rem; font-weight: 700; color: var(--ink-soft);">${t('writing.words', { n: 0 })}</span>
          <button type="button" class="btn btn-primary" id="btn-submit-writing">${t('writing.submit')}</button>
        </div>
      </div>
    `;
  }

  function renderSpeakingTask(taskInfo) {
    const prompts = promptsForKind('speaking');
    const prompt = pickPrompt(prompts, taskInfo.estimatedBand, 'opinion_argument');

    return `
      <div class="question-card" style="display: block;">
        <div class="writing-prompt-box">
          <div style="font-weight: 800; color: var(--sage-deep); font-size: 1.15rem; margin-bottom: 0.5rem;">
            ${t('speaking.title')}
          </div>
          <p style="font-size: 1.05rem; color: var(--ink-soft); line-height: 1.6; margin-bottom: 0.75rem;">
            ${prompt.prompt}
          </p>
          <div style="font-size: 0.85rem; color: var(--sage-dark); font-weight: 700;">
            ${t('speaking.timing', { prep: prompt.prepSeconds, rec: prompt.recordSeconds })}
          </div>
          <div style="font-size: 0.82rem; color: var(--ink-soft); margin-top: 0.5rem; background: var(--sage-light); padding: 0.5rem 0.75rem; border-radius: 6px;">
            ${t('speaking.notice')}
          </div>
        </div>

        <div id="audio-recorder-mount"></div>

        <div style="margin-top: 1rem; padding: 0.75rem 0.9rem; background: var(--sage-light); border-radius: 8px;">
          <label for="speaking-self-rating" style="font-size: 0.9rem; font-weight: 700; color: var(--sage-deep); display: block; margin-bottom: 0.4rem;">
            ${t('speaking.ratingLabel')}
          </label>
          <select id="speaking-self-rating" class="styled-sel" style="padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border); font-family: inherit; font-size: 0.9rem;">
            ${['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(band =>
              `<option value="${band}"${band === (taskInfo.estimatedBand || 'B2') ? ' selected' : ''}>${band}</option>`
            ).join('')}
          </select>
          <p style="font-size: 0.8rem; color: var(--ink-soft); margin: 0.5rem 0 0;">
            ${t('speaking.ratingHelp')}
          </p>
        </div>

        <div style="text-align: right; margin-top: 1.25rem;">
          <button type="button" class="btn btn-primary" id="btn-submit-speaking">${t('speaking.submit')}</button>
        </div>
      </div>
    `;
  }

  function bindTestScreenEvents(currentItem) {
    // Skip button
    const btnSkip = document.getElementById('btn-skip-item');
    if (btnSkip) {
      btnSkip.addEventListener('click', () => {
        if (currentItem.type === 'prompt_task') {
          engine.submitResponse(currentItem.skill, {
            skill: currentItem.skill,
            estimatedBand: 'A1',
            rawScore: 0,
            skipped: true
          });
        } else {
          engine.submitResponse(currentItem.id, {
            item: currentItem,
            isCorrect: false,
            userAnswer: -1,
            skipped: true
          });
        }
        renderTestScreen();
      });
    }

    if (currentItem.type === 'prompt_task') {
      if (currentItem.skill === 'writing') {
        const textarea = document.getElementById('writing-input');
        const countDisplay = document.getElementById('writing-word-count');
        const btnSubmit = document.getElementById('btn-submit-writing');

        if (textarea && countDisplay) {
          textarea.addEventListener('input', () => {
            const words = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
            countDisplay.textContent = t('writing.words', { n: words });
          });
        }

        if (btnSubmit) {
          btnSubmit.addEventListener('click', () => {
            const text = textarea ? textarea.value.trim() : '';
            const prompt = pickPrompt(promptsForKind('writing'), currentItem.estimatedBand);

            const evalResult = window.COSYWritingEvaluator ?
              window.COSYWritingEvaluator.evaluateSubmission(text, prompt, { language: selectedLanguage }) :
              { estimatedBand: 'B1', rubricScores: {} };

            engine.submitResponse('writing', {
              skill: 'writing',
              text: text,
              estimatedBand: evalResult.estimatedBand,
              rubricScores: evalResult.rubricScores,
              evalFeedback: evalResult.feedback
            });

            renderTestScreen();
          });
        }
      } else if (currentItem.skill === 'speaking') {
        const mount = document.getElementById('audio-recorder-mount');
        if (mount && window.COSYAudioRecorder) {
          activeAudioRecorder = new window.COSYAudioRecorder(mount, {
            maxSeconds: 120
          });
        }

        const btnSubmit = document.getElementById('btn-submit-speaking');
        if (btnSubmit) {
          btnSubmit.addEventListener('click', () => {
            const selfRating = document.getElementById('speaking-self-rating');
            let evalBand = selfRating ? selfRating.value : (currentItem.estimatedBand || 'B1');
            let notes = 'self-assessed';

            if (activeAudioRecorder && activeAudioRecorder.state === 'unsupported') {
              const fallback = activeAudioRecorder.getFallbackData();
              evalBand = fallback.estimatedBand;
              notes = fallback.notes;
            }

            engine.submitResponse('speaking', {
              skill: 'speaking',
              estimatedBand: evalBand,
              notes: notes
            });

            renderTestScreen();
          });
        }
      }
    } else {
      // Multiple choice selection
      const options = document.querySelectorAll('#mc-option-list .option-btn');
      options.forEach(btn => {
        btn.addEventListener('click', () => {
          const ansIdx = parseInt(btn.dataset.optIndex, 10);
          const isCorrect = (ansIdx === currentItem.correctAnswer);

          options.forEach(b => b.classList.add('disabled'));
          btn.classList.add('selected');

          setTimeout(() => {
            engine.submitResponse(currentItem.id, {
              item: currentItem,
              isCorrect: isCorrect,
              userAnswer: ansIdx
            });
            renderTestScreen();
          }, 600);
        });
      });
    }
  }

  function showResultsScreen() {
    currentStep = 'results';
    localStorage.removeItem('cosy_placement_session');

    const container = document.getElementById('placement-content-area');
    if (!container || !engine) return;

    const reportData = window.COSYScoringModel ?
      window.COSYScoringModel.evaluatePlacement(engine.sessionState) : {};

    const reportHtml = window.COSYPlacementReport ?
      window.COSYPlacementReport.generateReportHTML(reportData) :
      `<h2>${t('results.complete')}</h2>`;

    container.innerHTML = `
      <div id="results-dashboard-container">
        ${reportHtml}

        <div class="results-actions" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-primary" id="btn-print-report">${t('results.print')}</button>
          <a href="index.html" class="btn btn-secondary">${t('results.home')}</a>
          <button type="button" class="btn btn-secondary" id="btn-retake-quiz">${t('results.retake')}</button>
        </div>
      </div>
    `;

    const btnPrint = document.getElementById('btn-print-report');
    if (btnPrint && window.COSYPlacementReport) {
      btnPrint.addEventListener('click', () => {
        window.COSYPlacementReport.triggerPrint();
      });
    }

    const btnRetake = document.getElementById('btn-retake-quiz');
    if (btnRetake) {
      btnRetake.addEventListener('click', () => {
        renderOnboardingScreen();
      });
    }
  }

  function saveSession() {
    try {
      if (engine && engine.sessionState) {
        localStorage.setItem('cosy_placement_session', JSON.stringify({
          sessionState: engine.sessionState
        }));
      }
    } catch (e) {
      console.warn("Session auto-save failed:", e);
    }
  }
})();
