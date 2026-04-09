/* COSYlanguages — mobile.js
   Add <script src="mobile.js"></script> to practice.html and events.html
*/

// ── Bottom nav: update active state based on current page
function updateMobileNav() {
  const path = window.location.pathname;
  const hash = window.location.hash || window.location.href.split('#')[1] || '';
  const currentFilename = path.split('/').pop() || 'index.html';

  // Resilient check for language pages
  const isLanguagePage = path.includes('/languages/') ||
                         path.includes('languages/') ||
                         ['en.html', 'fr.html', 'it.html', 'ru.html', 'el.html'].some(p => path.endsWith(p) && path.includes('languages'));

  const items = document.querySelectorAll('.mobile-nav-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const href = item.getAttribute('href') || '';
    const linkPath = href.split('#')[0];
    const linkFilename = linkPath.split('/').pop() || 'index.html';

    let active = false;

    if (isLanguagePage) {
      // On any sub-language page, highlight the "Languages" tab
      active = (item.id === 'mnav-languages');
    } else {
      // Normal page matching
      active = (currentFilename === linkFilename);

      // Home page special logic to distinguish Home vs Languages
      if (currentFilename === 'index.html' || currentFilename === '' || currentFilename === '/') {
        if (hash === 'languages' || hash === '#languages') {
          active = (item.id === 'mnav-languages');
        } else {
          active = (item.id === 'mnav-home');
        }
      }
    }

    if (active) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// ── Correct/incorrect flash (call after every answer)
function flashAnswer(correct) {
  const flash = document.getElementById('answer-flash');
  if (!flash) return;
  flash.className = 'answer-flash ' + (correct ? 'correct-flash' : 'incorrect-flash') + ' show';
  flash.textContent = correct ? '✅' : '❌';
  // Optional haptic feedback
  if (navigator.vibrate) navigator.vibrate(correct ? [50] : [80, 40, 80]);
  setTimeout(() => flash.classList.remove('show'), 400);
}

// ── Game setup bottom sheet
function openGameSheet(gameName, gameIcon, mode = 'solo') {
  console.log('Opening game sheet:', gameName, mode);
  const sheet = document.getElementById('game-setup-sheet');
  const overlay = document.getElementById('sheet-overlay');
  if (!sheet) {
    console.error("Game setup sheet not found!");
    return;
  }

  const title = sheet.querySelector('.gss-title');
  if (title) title.innerHTML = `<span>${gameIcon}</span> ${gameName}`;

  // Sync with URL params first, then global preferences, then storage
  const urlParams = new URLSearchParams(window.location.search);
  const targetLang = urlParams.get('lang') || document.getElementById('global-lang-select')?.value || localStorage.getItem('language') || 'en';
  const targetLevel = urlParams.get('level') || document.getElementById('global-level-select')?.value || 'starter';

  const langOptions = sheet.querySelectorAll('#gss-lang-options .gss-option');
  const levelOptions = sheet.querySelectorAll('#gss-level-options .gss-option');
  const startBtn = sheet.querySelector('.gss-start');

  if (langOptions.length > 0) {
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === targetLang);
        opt.onclick = () => {
          console.log('Language changed in sheet:', opt.dataset.value);
          langOptions.forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          updateGSSThemes(gameName, langOptions, levelOptions);
          updateGSSTypes(gameName);
        };
    });
    if (!sheet.querySelector('#gss-lang-options .gss-option.active')) langOptions[0].classList.add('active');
  }

  if (levelOptions.length > 0) {
    levelOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === targetLevel);
        opt.onclick = () => {
          console.log('Level changed in sheet:', opt.dataset.value);
          levelOptions.forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          updateGSSThemes(gameName, langOptions, levelOptions);
          updateGSSTypes(gameName);
        };
    });
    if (!sheet.querySelector('#gss-level-options .gss-option.active')) levelOptions[0].classList.add('active');
  }

  updateGSSThemes(gameName, langOptions, levelOptions);
  updateGSSTypes(gameName);

  const pinBtn = sheet.querySelector('#gss-pin-btn');
  if (pinBtn) {
    pinBtn.onclick = () => {
      const lang = sheet.querySelector('#gss-lang-options .gss-option.active')?.dataset.value || 'en';
      const level = sheet.querySelector('#gss-level-options .gss-option.active')?.dataset.value || 'starter';
      const theme = sheet.querySelector('#gss-theme-options .gss-option.active')?.dataset.value || 'all';

      const gameMapInverse = {
        'Emoji Odyssey': 'emoji_odyssey',
        'Lucky Numbers': 'bingo',
        'Word Linker': 'word_linker',
        'Last Letter': 'last_letter',
        'Action Hero': 'action_hero',
        'Identity Mystery': 'guess-who',
        'Object Quest': 'guess-what',
        'Fluency Flow': 'talk-talk',
        'Battle of Wits': 'debates',
        'Opinion Arena': 'opinion_arena',
        "Critic's Corner": 'critics_corner',
        'Story Chain': 'story-chain',
        'Hot Seat': 'hot-seat',
        'Cosy Crossword': 'crossword'
      };

      const gameId = gameMapInverse[gameName] || 'practice';
      const baseUrl = window.location.origin + window.location.pathname;
      const deepLink = `${baseUrl}?game=${gameId}&lang=${lang}&level=${level}&theme=${theme}&embed=true`;

      const template = (window.gameUtils && window.gameUtils.t ? window.gameUtils.t('pin_desc_template') : null) || (window.t ? window.t('pin_desc_template') : null) || "You're about to pin \"{0}\" ({1}, {2}) to your home screen.";
      const desc = template
        .replace('{0}', gameName)
        .replace('{1}', lang.toUpperCase())
        .replace('{2}', level);

      showPinModal(
        (window.gameUtils && window.gameUtils.t ? window.gameUtils.t('pin_title') : null) || (window.t ? window.t('pin_title') : null) || 'Add to Home Screen',
        desc,
        deepLink
      );
    };
  }

  if (startBtn) {
    startBtn.onclick = () => {
      console.log('Starting game from sheet:', gameName);
      const selectedLang = sheet.querySelector('#gss-lang-options .gss-option.active')?.dataset.value;
      const selectedLevel = sheet.querySelector('#gss-level-options .gss-option.active')?.dataset.value;
      const selectedTheme = sheet.querySelector('#gss-theme-options .gss-option.active')?.dataset.value || 'all';
      const selectedType = sheet.querySelector('#gss-type-options .gss-option.active')?.dataset.value;

      closeGameSheet();

      const gameMap = {
        'Emoji Odyssey': 'emoji',
        'Lucky Numbers': 'bingo',
        'Word Linker': 'linker',
        'Last Letter': 'last-letter',
        'Action Hero': 'charades',
        'Identity Mystery': 'guess-who',
        'Object Quest': 'guess-what',
        'Fluency Flow': 'talk-talk',
        'Battle of Wits': 'debates',
        'Opinion Arena': 'opinion-arena',
        "Critic's Corner": 'critics-corner',
        'Story Chain': 'story-chain',
        'Hot Seat': 'hot-seat',
        'Cosy Crossword': 'crossword'
      };

      const prefix = gameMap[gameName];
      console.log('Game prefix:', prefix);
      if (prefix) {
        const modal = document.getElementById(`${prefix}-modal`);
        if (modal) {
          const langSelect = modal.querySelector('.game-lang') || modal.querySelector(`#${prefix}-lang`);
          const levelSelect = modal.querySelector('.game-level') || modal.querySelector(`#${prefix}-level`);
          const themeSelect = modal.querySelector('.game-theme') || modal.querySelector(`#${prefix}-theme`);
          const typeSelect = modal.querySelector(`#${prefix}-mode`) || modal.querySelector(`#${prefix}-level`);

          let startBtnId = `#start-${prefix}-game-btn`;
          if (prefix === 'talk-talk' || prefix === 'debates' || prefix === 'opinion-arena' || prefix === 'critics-corner') {
              startBtnId = `#start-${prefix.split('-')[0]}-btn`;
          }
          if (prefix === 'guess-who' || prefix === 'guess-what') {
              startBtnId = `#start-${prefix}-btn`;
          }

          const actualStartBtn = modal.querySelector(startBtnId) ||
                                modal.querySelector('#start-bingo-caller-btn');

          if (langSelect && selectedLang) langSelect.value = selectedLang;
          if (levelSelect && selectedLevel) levelSelect.value = selectedLevel;
          if (themeSelect && selectedTheme) themeSelect.value = selectedTheme;
          if (typeSelect && selectedType) {
              typeSelect.value = selectedType;
              typeSelect.dispatchEvent(new Event('change'));
          }

          langSelect?.dispatchEvent(new Event('change'));
          levelSelect?.dispatchEvent(new Event('change'));
          themeSelect?.dispatchEvent(new Event('change'));

          modal.style.display = 'flex';

          setTimeout(() => {
            const soloCheck = modal.querySelector(`#${prefix}-solo-mode`) || modal.querySelector('.solo-mode-check');
            if (soloCheck) {
                soloCheck.checked = (mode === 'solo');
                soloCheck.dispatchEvent(new Event('change'));
            }

            if (actualStartBtn) {
                console.log('Clicking actual start button');
                if (prefix === 'bingo') {
                    if (mode === 'solo') {
                        const soloCheckBingo = modal.querySelector('#bingo-solo-mode');
                        if (soloCheckBingo) soloCheckBingo.checked = true;
                        const callerBtn = modal.querySelector('#start-bingo-caller-btn');
                        if (callerBtn) callerBtn.click();
                    } else {
                        const playerBtn = modal.querySelector('#start-bingo-player-btn');
                        if (playerBtn) playerBtn.click();
                    }
                } else {
                    actualStartBtn.click();
                }
            } else {
                console.error('Actual start button not found in modal:', startBtnId);
            }
          }, 150);
        } else {
          console.error('Modal not found:', `${prefix}-modal`);
        }
      } else {
          console.error('No prefix found for game:', gameName);
      }
    };
  }

  sheet.classList.add('open');
  overlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateGSSThemes(gameName, langOptions, levelOptions) {
  const themeField = document.getElementById('gss-theme-field');
  const themeOptions = document.getElementById('gss-theme-options');
  if (!themeField || !themeOptions) return;

  const lang = Array.from(langOptions).find(o => o.classList.contains('active'))?.dataset.value || 'en';
  const level = Array.from(levelOptions).find(o => o.classList.contains('active'))?.dataset.value || 'starter';

  // Only certain games support themes in the setup sheet for now
  const themedGames = ['Cosy Crossword', 'Lucky Numbers', 'Action Hero', 'Identity Mystery', 'Object Quest', 'Last Letter', 'Battle of Wits', 'Fluency Flow', 'Opinion Arena', "Critic's Corner", 'Word Linker', 'Emoji Odyssey'];

  if (themedGames.includes(gameName)) {
    themeField.style.display = 'block';
    themeOptions.innerHTML = '';

    // Add "All"
    const allBtn = document.createElement('button');
    allBtn.className = 'gss-option active';
    allBtn.dataset.value = 'all';
    allBtn.textContent = (window.t && window.t('theme_all')) || 'All';
    allBtn.onclick = () => {
      themeOptions.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active'));
      allBtn.classList.add('active');
    };
    themeOptions.appendChild(allBtn);

    // Get themes from themeConfig
    if (window.themeConfig && window.themeConfig[level] && window.themeConfig[level].common_themes) {
      Object.entries(window.themeConfig[level].common_themes).forEach(([id, label]) => {
        const btn = document.createElement('button');
        btn.className = 'gss-option';
        btn.dataset.value = id;
        btn.textContent = (window.t && window.t('theme_' + id)) || label;
        btn.onclick = () => {
          themeOptions.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active'));
          btn.classList.add('active');
        };
        themeOptions.appendChild(btn);
      });
    }
  } else {
    themeField.style.display = 'none';
  }
}

function updateGSSTypes(gameName) {
  const typeField = document.getElementById('gss-type-field');
  const typeOptions = document.getElementById('gss-type-options');
  if (!typeField || !typeOptions) return;

  typeOptions.innerHTML = '';
  let types = [];

  if (gameName === 'Lucky Numbers') {
    types = [
      { id: '1', label: (window.t ? window.t('bingo_lvl_1') : 'Bingo 1 (0-9)') },
      { id: '2', label: (window.t ? window.t('bingo_lvl_2') : 'Bingo 2 (0-19)') },
      { id: '3', label: (window.t ? window.t('bingo_lvl_3') : 'Bingo 3 (20-99)') },
      { id: '5', label: (window.t ? window.t('bingo_lvl_5') : 'Bingo 5 (Random)') },
      { id: 'alphabet', label: (window.t ? window.t('bingo_alphabet') : 'Alphabet') }
    ];
  } else if (gameName === 'Emoji Odyssey') {
    types = [
      { id: 'guess', label: (window.t ? window.t('emoji_mode_guess') : 'Guess the Emoji 🧩') },
      { id: 'story', label: (window.t ? window.t('emoji_mode_story') : 'Tell a Story 📖') }
    ];
  } else if (gameName === 'Word Linker') {
    types = [
      { id: 'association', label: (window.t ? window.t('linker_mode_association') : 'Logical Association 🔗') },
      { id: 'odd_one', label: (window.t ? window.t('linker_mode_odd_one') : 'Odd One Out 🧐') }
    ];
  }

  if (types.length > 0) {
    typeField.style.display = 'block';
    types.forEach((type, idx) => {
      const btn = document.createElement('button');
      btn.className = 'gss-option' + (idx === 0 ? ' active' : '');
      btn.dataset.value = type.id;
      btn.textContent = type.label;
      btn.onclick = () => {
        typeOptions.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active'));
        btn.classList.add('active');
      };
      typeOptions.appendChild(btn);
    });
  } else {
    typeField.style.display = 'none';
  }
}

function closeGameSheet() {
  document.getElementById('game-setup-sheet')?.classList.remove('open');
  document.getElementById('sheet-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Remember last game settings in localStorage
function saveGameSettings(settings) {
  try { localStorage.setItem('cosy_game_settings', JSON.stringify(settings)); }
  catch(e) {}
}

function loadGameSettings() {
  try { return JSON.parse(localStorage.getItem('cosy_game_settings')) || {}; }
  catch(e) { return {}; }
}

// ── Session progress bar update
function updateProgressBar(current, total) {
  const fill = document.querySelector('.session-progress-fill');
  if (fill) fill.style.width = Math.round((current / total) * 100) + '%';
}

// ── Pin to Home Screen logic
function showPinModal(title, desc, url) {
    const pinModal = document.getElementById('pin-modal');
    if (!pinModal) return;

    const pinTitle = document.getElementById('pin-title');
    const pinDesc = document.getElementById('pin-desc');
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (pinTitle) {
        pinTitle.textContent = title;
        pinTitle.setAttribute('data-translate-key', 'pin_title');
    }
    if (pinDesc) {
        pinDesc.textContent = desc;
        // desc is dynamic, we don't set data-translate-key here
    }

    const iosStep = document.getElementById('pin-step-ios');
    const androidStep = document.getElementById('pin-step-android');

    if (iosStep) {
        iosStep.style.display = isIOS ? 'block' : 'none';
        iosStep.setAttribute('data-translate-key', 'pin_step_ios');
    }
    if (androidStep) {
        androidStep.style.display = isIOS ? 'none' : 'block';
        androidStep.setAttribute('data-translate-key', 'pin_step_android');
    }

    const gotItBtn = pinModal.querySelector('button');
    if (gotItBtn) {
        gotItBtn.setAttribute('data-translate-key', 'pin_btn_got_it');
    }

    // Update URL and Title for Pinning Context
    window.history.replaceState({}, '', url);
    const originalTitle = document.title;
    document.title = title;

    pinModal.style.display = 'flex';

    // Restore title on close
    const closePin = () => {
        pinModal.style.display = 'none';
        document.title = originalTitle;
    };
    if (gotItBtn) gotItBtn.onclick = closePin;
    if (window.setLanguage) window.setLanguage(localStorage.getItem('language') || 'en');
}

// ── Fluency Flow timer ring
function startTimerRing(seconds, svgId) {
  const circle = document.querySelector(`#${svgId} .timer-ring-progress`);
  if (!circle) return;
  const r = 52;
  const circ = 2 * Math.PI * r;
  circle.style.strokeDasharray = circ;
  let remaining = seconds;
  const tick = () => {
    const offset = circ * (1 - remaining / seconds);
    circle.style.strokeDashoffset = offset;
    const text = document.querySelector(`#${svgId}-text`);
    if (text) text.textContent = remaining;
    if (remaining <= 0) return;
    remaining--;
    setTimeout(tick, 1000);
  };
  tick();
}

// ── "Add to home screen" nudge (show once after 3rd visit)
function checkInstallPrompt() {
  const visits = parseInt(localStorage.getItem('cosy_visits') || '0') + 1;
  localStorage.setItem('cosy_visits', visits);
  if (visits === 3 && !localStorage.getItem('cosy_install_shown')) {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (!isStandalone) {
      showInstallNudge(isIOS);
      localStorage.setItem('cosy_install_shown', '1');
    }
  }
}

function showInstallNudge(isIOS) {
  const nudge = document.createElement('div');
  nudge.style.cssText = `
    position:fixed;bottom:80px;left:16px;right:16px;z-index:400;
    background:#fff8e7;border:2px solid #e8a838;border-radius:16px;
    padding:14px 16px;font-family:'Nunito',sans-serif;
    box-shadow:0 4px 24px rgba(0,0,0,.15);
  `;
  nudge.innerHTML = `
    <div style="font-size:13px;font-weight:800;color:#a06b10;margin-bottom:4px;">
      🏡 Add COSY to your home screen
    </div>
    <div style="font-size:12px;color:#8a6030;line-height:1.5;">
      ${isIOS
        ? 'Tap the Share button below, then "Add to Home Screen" for instant access.'
        : 'Tap the menu (⋮) then "Add to Home Screen" for instant access.'}
    </div>
    <button onclick="this.parentNode.remove()" style="
      float:right;margin-top:-36px;background:none;border:none;
      font-size:18px;color:#aaa;cursor:pointer;padding:4px;
    ">✕</button>
  `;
  document.body.appendChild(nudge);
  setTimeout(() => nudge.remove(), 8000);
}

// ── Bottom nav HTML — inject into every page
function injectMobileNav() {
  const path = window.location.pathname;
  const isGH = path.indexOf('/COSYlanguages/') !== -1;
  const base = isGH ? '/COSYlanguages/' : '/';

  if (document.querySelector('.mobile-nav')) return;

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="${base}practice.html" class="mobile-nav-item" id="mnav-practice">
      <span class="mn-icon">💡</span>
      <span>Practice</span>
    </a>
    <a href="${base}events.html" class="mobile-nav-item" id="mnav-games">
      <span class="mn-icon">🎮</span>
      <span>Games</span>
    </a>
    <a href="${base}index.html#languages" class="mobile-nav-item" id="mnav-languages">
      <span class="mn-icon">🌍</span>
      <span>Languages</span>
    </a>
    <a href="${base}index.html" class="mobile-nav-item" id="mnav-home">
      <span class="mn-icon">🏡</span>
      <span>Home</span>
    </a>
    <a href="${base}days.html" class="mobile-nav-item" id="mnav-lessons">
      <span class="mn-icon">🔐</span>
      <span>My Lessons</span>
    </a>
  `;
  document.body.appendChild(nav);
  // Using a short timeout to ensure the DOM is fully settled
  setTimeout(updateMobileNav, 10);
}

// ── Answer flash element — inject once
function injectAnswerFlash() {
  if (document.getElementById('answer-flash')) return;
  const flash = document.createElement('div');
  flash.id = 'answer-flash';
  flash.className = 'answer-flash';
  document.body.appendChild(flash);
}

// ── Sheet overlay — inject once
function injectSheetOverlay() {
  if (document.getElementById('sheet-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'sheet-overlay';
  overlay.className = 'sheet-overlay';
  overlay.onclick = closeGameSheet;
  document.body.appendChild(overlay);
}

// ── Pin Instructions Modal — inject once
function injectPinModal() {
  if (document.getElementById('pin-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'pin-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="modal-content glass" style="max-width: 450px; text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">📲</div>
      <h2 id="pin-title" style="margin-bottom: 0.5rem;" data-translate-key="pin_title">Add to Home Screen</h2>
      <p id="pin-desc" style="font-size: 0.9rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;"></p>

      <div id="pin-steps" style="text-align: left; background: var(--sage-mist); padding: 1rem; border-radius: 12px; font-size: 0.85rem; margin-bottom: 1.5rem;">
          <p id="pin-step-ios" style="display:none" data-translate-key="pin_step_ios"><strong>On iPhone:</strong> Tap the <span style="font-size:1.2rem">⎋</span> Share button, then scroll down and tap <strong>"Add to Home Screen"</strong>.</p>
          <p id="pin-step-android" style="display:none" data-translate-key="pin_step_android"><strong>On Android:</strong> Tap the <span style="font-size:1.2rem">⋮</span> menu button, then tap <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong>.</p>
      </div>

      <button onclick="document.getElementById('pin-modal').style.display='none'" class="cta-button primary" style="width:100%" data-translate-key="pin_btn_got_it">Got it!</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// ── Auto-launch from deep links
function checkAutoLaunch() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');
    const cat = params.get('cat');

    if (gameId) {
        const gameMap = {
            'emoji_odyssey': ['Emoji Odyssey', '📖'],
            'bingo': ['Lucky Numbers', '🔢'],
            'word_linker': ['Word Linker', '🔗'],
            'last_letter': ['Last Letter', '🔤'],
            'action_hero': ['Action Hero', '🎭'],
            'guess-who': ['Identity Mystery', '👤'],
            'guess-what': ['Object Quest', '📦'],
            'talk-talk': ['Fluency Flow', '🗣️'],
            'debates': ['Battle of Wits', '⚖️'],
            'opinion_arena': ['Opinion Arena', '🏟️'],
            'critics_corner': ["Critic's Corner", '🎭'],
            'story-chain': ['Story Chain', '🃏'],
            'hot-seat': ['Hot Seat', '🎯'],
            'crossword': ['Cosy Crossword', '🧩']
        };

        const config = gameMap[gameId];
        if (config) {
            setTimeout(() => {
                openGameSheet(config[0], config[1], params.get('mode') || 'solo');
            }, 500);
        }
    } else if (cat && typeof window.startPractice === 'function') {
        const radio = document.getElementById(`cat-${cat}`);
        if (radio) {
            radio.checked = true;
            if (typeof window.updateCategoryUI === 'function') window.updateCategoryUI();
            setTimeout(() => window.startPractice(params.get('mode') === 'wheel'), 500);
        }
    }
}

// ── Boot
function initMobile() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('embed') === 'true') {
    document.body.classList.add('embedded-mode');
  }

  injectMobileNav();
  injectAnswerFlash();
  injectSheetOverlay();
  injectPinModal();
  checkInstallPrompt();
  updateMobileNav();
  checkAutoLaunch();

  // Pin Practice Category
  const pinPracticeBtn = document.getElementById('pin-practice-btn');
  if (pinPracticeBtn) {
    pinPracticeBtn.onclick = () => {
      const selectedRadio = document.querySelector('input[name="practice-cat"]:checked');
      const cat = selectedRadio?.id.replace('cat-', '') || 'vocab';
      const lang = document.querySelector('.lang-selection-card.active')?.dataset.value || 'en';
      const level = document.getElementById('practice-level')?.value || 'starter';
      const theme = document.getElementById('practice-theme')?.value || 'all';

      const baseUrl = window.location.origin + window.location.pathname;
      const deepLink = `${baseUrl}?cat=${cat}&lang=${lang}&level=${level}&theme=${theme}&embed=true`;

      const catNames = {
          'vocab': (window.t ? window.t('cat_vocab') : 'Vocabulary'),
          'grammar': (window.t ? window.t('cat_grammar') : 'Grammar'),
          'speaking': (window.t ? window.t('cat_speaking') : 'Speaking')
      };

      const template = (window.t ? (window.t('pin_desc_template_cat') || window.t('pin_desc_template')) : null) || "You're about to pin \"{0}\" ({1}, {2}) to your home screen.";
      const desc = template
        .replace('{0}', catNames[cat] || cat)
        .replace('{1}', lang.toUpperCase())
        .replace('{2}', level);

      showPinModal(
        (window.t ? window.t('pin_title') : 'Add to Home Screen'),
        desc,
        deepLink
      );
    };
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobile);
} else {
  initMobile();
}

window.updateMobileNav = updateMobileNav;
window.openGameSheet = openGameSheet;
window.closeGameSheet = closeGameSheet;
window.flashAnswer = flashAnswer;
window.startTimerRing = startTimerRing;
window.showPinModal = showPinModal;
