/**
 * COSY Languages - Placement Assessment UI Manager
 * Controls onboarding, dynamic question rendering, save/resume, and results reporting.
 */

(function () {
  let engine = null;
  let activeAudioRecorder = null;
  let currentStep = 'onboarding'; // 'onboarding' | 'test' | 'results'
  let selectedLanguage = 'en';
  let selectedPurpose = 'general';
  let selectedMode = 'full_diagnostic';

  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });

  function initApp() {
    renderOnboardingScreen();
    checkSavedSession();
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
            <div class="gap-notice-title">🔄 Unfinished Assessment Found</div>
            <div class="gap-notice-text">
              You have an unfinished assessment in progress. Would you like to resume where you left off?
              <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                <button type="button" class="btn btn-primary" id="btn-resume-session">Resume Test</button>
                <button type="button" class="btn btn-secondary" id="btn-discard-session">Start New</button>
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
        <h2 class="onboarding-section-title">1. Select Target Language 🌍</h2>
        <div class="lang-grid" id="onboarding-lang-grid">
          <div class="lang-option ${selectedLanguage === 'en' ? 'selected' : ''}" data-lang="en">🇬🇧 English</div>
          <div class="lang-option ${selectedLanguage === 'fr' ? 'selected' : ''}" data-lang="fr">🇫🇷 Français</div>
          <div class="lang-option ${selectedLanguage === 'it' ? 'selected' : ''}" data-lang="it">🇮🇹 Italiano</div>
          <div class="lang-option ${selectedLanguage === 'ru' ? 'selected' : ''}" data-lang="ru">🇷🇺 Русский</div>
          <div class="lang-option ${selectedLanguage === 'el' ? 'selected' : ''}" data-lang="el">🇬🇷 Ελληνικά</div>
        </div>

        <h2 class="onboarding-section-title" style="margin-top: 1.5rem;">2. What is your primary learning purpose? 🎯</h2>
        <div class="purpose-grid">
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'general' ? 'selected' : ''}" data-purpose="general">
            <div class="mode-option-title">🌿 General Fluency</div>
            <div class="mode-option-desc">Overall language balance across reading, writing, listening, and speaking.</div>
          </button>
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'spoken' ? 'selected' : ''}" data-purpose="spoken">
            <div class="mode-option-title">🗣️ Conversational & Spoken</div>
            <div class="mode-option-desc">Focused heavily on speaking confidence, retrieval speed, and active dialogue.</div>
          </button>
          <button type="button" class="purpose-option-btn ${selectedPurpose === 'exam' ? 'selected' : ''}" data-purpose="exam">
            <div class="mode-option-title">📝 Exam & Academic</div>
            <div class="mode-option-desc">Rigorous grammar precision, reading analysis, and formal structured writing.</div>
          </button>
        </div>

        <h2 class="onboarding-section-title" style="margin-top: 1.5rem;">3. Choose Assessment Mode ⏱️</h2>
        <div class="mode-grid">
          <button type="button" class="mode-option-btn ${selectedMode === 'short_screening' ? 'selected' : ''}" data-mode="short_screening">
            <div class="mode-option-title">⚡ Express Screening (~5 mins)</div>
            <div class="mode-option-desc">Fast adaptive check to quickly estimate your starting CEFR band.</div>
          </button>
          <button type="button" class="mode-option-btn ${selectedMode === 'full_diagnostic' ? 'selected' : ''}" data-mode="full_diagnostic">
            <div class="mode-option-title">📊 Full 5-Skill Diagnostic (~15 mins)</div>
            <div class="mode-option-desc">Comprehensive evaluation of Grammar, Vocab, Reading, Writing & Speaking.</div>
          </button>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button type="button" class="btn btn-primary" id="btn-start-placement" style="padding: 0.85rem 2.5rem; font-size: 1.1rem;">
            Start Placement Assessment 🚀
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
    engine.sessionState = sessionData.sessionState;

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

      return `<span class="skill-tab-pill ${statusClass}">${s.toUpperCase()}</span>`;
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
          <button type="button" class="btn btn-secondary" id="btn-skip-item">Skip Item ⏩</button>
          <span style="font-size: 0.9rem; color: var(--ink-soft);">Target Language: ${selectedLanguage.toUpperCase()}</span>
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

  function renderWritingTask(taskInfo) {
    const prompts = (window.COSY_PLACEMENT_PROMPTS_RUBRICS && window.COSY_PLACEMENT_PROMPTS_RUBRICS.writingPrompts.en) || [];
    const prompt = prompts.find(p => p.band === taskInfo.estimatedBand) || prompts[0];

    return `
      <div class="question-card" style="display: block;">
        <div class="writing-prompt-box">
          <div style="font-weight: 800; color: var(--sage-deep); font-size: 1.15rem; margin-bottom: 0.5rem;">
            ✍️ Writing Production Task (${prompt.band})
          </div>
          <p style="font-size: 1rem; color: var(--ink-soft); line-height: 1.5; margin-bottom: 0.75rem;">
            ${prompt.prompt}
          </p>
          <div style="font-size: 0.85rem; color: var(--sage-dark); font-weight: 700;">
            Target Length: ${prompt.minWords} – ${prompt.maxWords} words.
          </div>
        </div>

        <textarea class="writing-textarea" id="writing-input" placeholder="Type your response here in ${selectedLanguage.toUpperCase()}..."></textarea>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
          <span id="writing-word-count" style="font-size: 0.9rem; font-weight: 700; color: var(--ink-soft);">Words: 0</span>
          <button type="button" class="btn btn-primary" id="btn-submit-writing">Submit Writing ✍️</button>
        </div>
      </div>
    `;
  }

  function renderSpeakingTask(taskInfo) {
    const prompts = (window.COSY_PLACEMENT_PROMPTS_RUBRICS && window.COSY_PLACEMENT_PROMPTS_RUBRICS.speakingPrompts.en) || [];
    const prompt = prompts.find(p => p.stage === 'opinion_argument') || prompts[0];

    return `
      <div class="question-card" style="display: block;">
        <div class="writing-prompt-box">
          <div style="font-weight: 800; color: var(--sage-deep); font-size: 1.15rem; margin-bottom: 0.5rem;">
            🗣️ Speaking & Interaction Checkpoint
          </div>
          <p style="font-size: 1.05rem; color: var(--ink-soft); line-height: 1.6; margin-bottom: 0.75rem;">
            ${prompt.prompt}
          </p>
          <div style="font-size: 0.85rem; color: var(--sage-dark); font-weight: 700;">
            Preparation: ${prompt.prepSeconds}s | Recording Limit: ${prompt.recordSeconds}s
          </div>
          <div style="font-size: 0.82rem; color: var(--ink-soft); margin-top: 0.5rem; background: var(--sage-light); padding: 0.5rem 0.75rem; border-radius: 6px;">
            ℹ️ Audio recording is processed locally for self-assessment and human teacher review. COSY Languages does not fabricate speech analysis or automated AI ratings.
          </div>
        </div>

        <div id="audio-recorder-mount"></div>

        <div style="text-align: right; margin-top: 1.25rem;">
          <button type="button" class="btn btn-primary" id="btn-submit-speaking">Submit Speaking Checkpoint 🗣️</button>
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
            countDisplay.textContent = `Words: ${words}`;
          });
        }

        if (btnSubmit) {
          btnSubmit.addEventListener('click', () => {
            const text = textarea ? textarea.value.trim() : '';
            const prompts = (window.COSY_PLACEMENT_PROMPTS_RUBRICS && window.COSY_PLACEMENT_PROMPTS_RUBRICS.writingPrompts.en) || [];
            const prompt = prompts.find(p => p.band === currentItem.estimatedBand) || prompts[0];

            const evalResult = window.COSYWritingEvaluator ?
              window.COSYWritingEvaluator.evaluateSubmission(text, prompt) :
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
            let evalBand = 'B1';
            let notes = '';

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
      '<h2>Assessment Complete!</h2>';

    container.innerHTML = `
      <div id="results-dashboard-container">
        ${reportHtml}

        <div class="results-actions" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <button type="button" class="btn btn-primary" id="btn-print-report">🖨️ Print / Save PDF Report</button>
          <a href="index.html" class="btn btn-secondary">Go to Homepage 🏡</a>
          <button type="button" class="btn btn-secondary" id="btn-retake-quiz">Retake Assessment 🔄</button>
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
