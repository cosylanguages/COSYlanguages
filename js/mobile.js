/* COSYlanguages — mobile.js
   Unified configuration and mobile UI handlers
*/

// ── Central Game Configuration
window.COSY_GAMES = {
  'Action Hero':      { id: 'action_hero',    prefix: 'charades',      icon: '🎭' },
  'Emoji Odyssey':    { id: 'emoji_odyssey',  prefix: 'emoji',         icon: '📖' },
  'Lucky Numbers':    { id: 'bingo',          prefix: 'bingo',         icon: '🔢' },
  'Last Letter':      { id: 'last_letter',    prefix: 'last-letter',   icon: '🔤' },
  'Object Quest':     { id: 'guess-what',     prefix: 'guess-what',    icon: '📦' },
  'Identity Mystery': { id: 'guess-who',      prefix: 'guess-who',     icon: '👤' },
  'Cosy Crossword':   { id: 'crossword',      prefix: 'crossword',     icon: '🧩' },
  'Fluency Flow':     { id: 'talk-talk',      prefix: 'talk-talk',     icon: '🗣️' },
  'Battle of Wits':   { id: 'debates',        prefix: 'debates',       icon: '⚖️' },
  'Opinion Arena':    { id: 'opinion_arena',  prefix: 'opinion-arena', icon: '🏟️' },
  'Word Linker':      { id: 'word_linker',    prefix: 'linker',        icon: '🔗' },
  "Critic's Corner":  { id: 'critics_corner', prefix: 'critics-corner',icon: '🎭' },
  'Story Chain':      { id: 'story-chain',    prefix: 'story-chain',   icon: '🃏' },
  'Hot Seat':         { id: 'hot-seat',       prefix: 'hot-seat',      icon: '🎯' }
};

// ── Bottom nav: update active state based on current page
function updateMobileNav() {
  const path = window.location.pathname;
  const hash = window.location.hash || window.location.href.split('#')[1] || '';
  const currentFilename = path.split('/').pop() || 'index.html';

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
      active = (item.id === 'mnav-languages');
    } else {
      active = (currentFilename === linkFilename);
      if (currentFilename === 'index.html' || currentFilename === '' || currentFilename === '/') {
        if (hash === 'languages' || hash === '#languages') active = (item.id === 'mnav-languages');
        else active = (item.id === 'mnav-home');
      }
    }

    if (active) item.classList.add('active');
    else item.classList.remove('active');
  });
}

// ── Correct/incorrect flash
function flashAnswer(correct) {
  const flash = document.getElementById('answer-flash');
  if (!flash) return;
  flash.className = 'answer-flash ' + (correct ? 'correct-flash' : 'incorrect-flash') + ' show';
  flash.textContent = correct ? '✅' : '❌';
  if (navigator.vibrate) navigator.vibrate(correct ? [50] : [80, 40, 80]);
  setTimeout(() => flash.classList.remove('show'), 400);
}

// ── Game Launcher logic
function launchGame(gameName, mode, settings) {
  const config = window.COSY_GAMES[gameName];
  if (!config) {
    console.error('No configuration found for game:', gameName);
    return;
  }

  const { selectedLang, selectedLevel, selectedTheme, selectedType, selectedTimer, selectedBingoContent } = settings;
  const { prefix } = config;
  const modal = document.getElementById(`${prefix}-modal`);

  if (!modal) {
    console.error('Modal not found:', `${prefix}-modal`);
    return;
  }

  const langSelect = modal.querySelector('.game-lang') || modal.querySelector(`#${prefix}-lang`);
  const levelSelect = modal.querySelector('.game-level') || modal.querySelector(`#${prefix}-level`);
  const themeSelect = modal.querySelector('.game-theme') || modal.querySelector(`#${prefix}-theme`);
  const typeSelect = modal.querySelector(`#${prefix}-mode`) || modal.querySelector(`#${prefix}-level`);
  const timerSelect = modal.querySelector(`#${prefix}-timer-duration`) || modal.querySelector(`#${prefix.split('-')[0]}-timer-duration`);
  const bingoContentSelect = modal.querySelector('#bingo-content-type');

  let startBtnId = `#start-${prefix}-game-btn`;
  if (['talk-talk', 'debates', 'opinion-arena', 'critics-corner'].includes(prefix)) {
      startBtnId = `#start-${prefix.split('-')[0]}-btn`;
  } else if (['guess-who', 'guess-what'].includes(prefix)) {
      startBtnId = `#start-${prefix}-btn`;
  }

  const actualStartBtn = modal.querySelector(startBtnId) || modal.querySelector('#start-bingo-caller-btn');

  if (langSelect && selectedLang) langSelect.value = selectedLang;
  if (levelSelect && selectedLevel) levelSelect.value = selectedLevel;
  if (themeSelect && selectedTheme) themeSelect.value = selectedTheme;
  if (typeSelect && selectedType) {
      typeSelect.value = selectedType;
      typeSelect.dispatchEvent(new Event('change'));
  }
  if (selectedTimer) {
      if (prefix === 'hot-seat') {
          const timerBtn = modal.querySelector(`.hs-dur-btn[data-sec="${selectedTimer}"]`);
          if (timerBtn) timerBtn.click();
      } else if (timerSelect) {
          timerSelect.value = selectedTimer;
          timerSelect.dispatchEvent(new Event('change'));
      }
  }
  if (bingoContentSelect && selectedBingoContent) {
      bingoContentSelect.value = selectedBingoContent;
      bingoContentSelect.dispatchEvent(new Event('change'));
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
    }
  }, 150);
}

// ── Game setup bottom sheet
function openGameSheet(gameName, gameIcon, mode = 'solo') {
  if (window.innerWidth > 768) {
      const selectedLang = document.getElementById('global-lang-select')?.value || localStorage.getItem('language') || 'en';
      const selectedLevel = document.getElementById('global-level-select')?.value || 'starter';
      launchGame(gameName, mode, {
          selectedLang, selectedLevel, selectedTheme: 'all',
          selectedType: (gameName === 'Lucky Numbers' ? '1' : (gameName === 'Emoji Odyssey' ? 'guess' : (gameName === 'Word Linker' ? 'association' : undefined))),
          selectedTimer: (gameName === 'Fluency Flow' ? '180' : '60'),
          selectedBingoContent: 'numbers'
      });
      return;
  }

  const sheet = document.getElementById('game-setup-sheet');
  const overlay = document.getElementById('sheet-overlay');
  if (!sheet) return;

  const title = sheet.querySelector('.gss-title');
  if (title) title.innerHTML = `<span>${gameIcon}</span> ${gameName}`;

  const targetLang = new URLSearchParams(window.location.search).get('lang') || document.getElementById('global-lang-select')?.value || localStorage.getItem('language') || 'en';
  const targetLevel = new URLSearchParams(window.location.search).get('level') || document.getElementById('global-level-select')?.value || 'starter';

  const langOptions = sheet.querySelectorAll('#gss-lang-options .gss-option');
  const levelOptions = sheet.querySelectorAll('#gss-level-options .gss-option');
  const startBtn = sheet.querySelector('.gss-start');

  const updateAll = () => {
    updateGSSThemes(gameName, langOptions, levelOptions);
    updateGSSTypes(gameName);
    updateGSSBingoContent(gameName);
    updateGSSTimers(gameName);
  };

  if (langOptions.length > 0) {
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === targetLang);
        opt.onclick = () => {
          langOptions.forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          updateAll();
        };
    });
    if (!sheet.querySelector('#gss-lang-options .gss-option.active')) langOptions[0].classList.add('active');
  }

  if (levelOptions.length > 0) {
    levelOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === targetLevel);
        opt.onclick = () => {
          levelOptions.forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          updateAll();
        };
    });
    if (!sheet.querySelector('#gss-level-options .gss-option.active')) levelOptions[0].classList.add('active');
  }

  updateAll();

  const pinBtn = sheet.querySelector('#gss-pin-btn');
  if (pinBtn) {
    pinBtn.onclick = () => {
      const lang = sheet.querySelector('#gss-lang-options .gss-option.active')?.dataset.value || 'en';
      const level = sheet.querySelector('#gss-level-options .gss-option.active')?.dataset.value || 'starter';
      const theme = sheet.querySelector('#gss-theme-options .gss-option.active')?.dataset.value || 'all';

      const config = window.COSY_GAMES[gameName];
      const gameId = config ? config.id : 'practice';
      const deepLink = `${window.location.origin}${window.location.pathname}?game=${gameId}&lang=${lang}&level=${level}&theme=${theme}&embed=true`;

      const template = (window.gameUtils?.t?.('pin_desc_template')) || (window.t?.('pin_desc_template')) || "You're about to pin \"{0}\" ({1}, {2}) to your home screen.";
      const desc = template.replace('{0}', gameName).replace('{1}', lang.toUpperCase()).replace('{2}', level);

      showPinModal((window.gameUtils?.t?.('pin_title')) || (window.t?.('pin_title')) || 'Add to Home Screen', desc, deepLink);
    };
  }

  if (startBtn) {
    startBtn.onclick = () => {
      const settings = {
        selectedLang: sheet.querySelector('#gss-lang-options .gss-option.active')?.dataset.value,
        selectedLevel: sheet.querySelector('#gss-level-options .gss-option.active')?.dataset.value,
        selectedTheme: sheet.querySelector('#gss-theme-options .gss-option.active')?.dataset.value || 'all',
        selectedType: sheet.querySelector('#gss-type-options .gss-option.active')?.dataset.value,
        selectedTimer: sheet.querySelector('#gss-timer-options .gss-option.active')?.dataset.value,
        selectedBingoContent: sheet.querySelector('#gss-bingo-content-options .gss-option.active')?.dataset.value
      };
      closeGameSheet();
      launchGame(gameName, mode, settings);
    };
  }

  sheet.classList.add('open');
  overlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateGSSThemes(gameName, langOptions, levelOptions) {
  const themeField = document.getElementById('gss-theme-field'), themeOptions = document.getElementById('gss-theme-options');
  if (!themeField || !themeOptions) return;

  const level = Array.from(levelOptions).find(o => o.classList.contains('active'))?.dataset.value || 'starter';
  themeField.style.display = 'block';
  themeOptions.innerHTML = '';

  const addOpt = (val, label, active = false) => {
    const btn = document.createElement('button');
    btn.className = 'gss-option' + (active ? ' active' : '');
    btn.dataset.value = val; btn.textContent = label;
    btn.onclick = () => { themeOptions.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active')); btn.classList.add('active'); };
    themeOptions.appendChild(btn);
  };

  addOpt('all', (window.t?.('theme_all')) || 'All', true);
  if (window.themeConfig?.[level]?.common_themes) {
    Object.entries(window.themeConfig[level].common_themes).forEach(([id, label]) => {
      addOpt(id, (window.t?.('theme_' + id)) || label);
    });
  }
}

function updateGSSTypes(gameName) {
  const typeField = document.getElementById('gss-type-field'), typeOptions = document.getElementById('gss-type-options');
  if (!typeField || !typeOptions) return;

  const currentSelection = typeOptions.querySelector('.gss-option.active')?.dataset.value;
  typeOptions.innerHTML = '';
  let types = [];

  if (gameName === 'Lucky Numbers') {
    types = [
      { id: '1', label: (window.t?.('bingo_lvl_1')) || 'Bingo 1 (0-9)' },
      { id: '2', label: (window.t?.('bingo_lvl_2')) || 'Bingo 2 (10-19)' },
      { id: '3', label: (window.t?.('bingo_lvl_3')) || 'Bingo 3 (20-99)' },
      { id: '5', label: (window.t?.('bingo_lvl_5')) || 'Bingo 5 (Random)' },
      { id: 'alphabet', label: (window.t?.('bingo_alphabet')) || 'Alphabet' }
    ];
  } else if (gameName === 'Emoji Odyssey') {
    types = [
      { id: 'guess', label: (window.t?.('emoji_mode_guess')) || 'Guess the Emoji 🧩' },
      { id: 'story', label: (window.t?.('emoji_mode_story')) || 'Tell a Story 📖' }
    ];
  } else if (gameName === 'Word Linker') {
    types = [
      { id: 'association', label: (window.t?.('linker_mode_association')) || 'Logical Association 🔗' },
      { id: 'odd_one', label: (window.t?.('linker_mode_odd_one')) || 'Odd One Out 🧐' }
    ];
  }

  if (types.length > 0) {
    typeField.style.display = 'block';
    types.forEach((type, idx) => {
      const btn = document.createElement('button');
      btn.className = 'gss-option' + ((currentSelection ? type.id === currentSelection : idx === 0) ? ' active' : '');
      btn.dataset.value = type.id; btn.textContent = type.label;
      btn.onclick = () => { typeOptions.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active')); btn.classList.add('active'); };
      typeOptions.appendChild(btn);
    });
  } else typeField.style.display = 'none';
}

function updateGSSBingoContent(gameName) {
  const field = document.getElementById('gss-bingo-content-field'), options = document.getElementById('gss-bingo-content-options');
  if (!field || !options) return;
  if (gameName === 'Lucky Numbers') {
    field.style.display = 'block'; options.innerHTML = '';
    [{ id: 'numbers', label: (window.t?.('bingo_content_numbers')) || 'Numbers 🔢' }, { id: 'words', label: (window.t?.('bingo_content_words')) || 'Words 🔤' }].forEach((type, idx) => {
      const btn = document.createElement('button');
      btn.className = 'gss-option' + (idx === 0 ? ' active' : '');
      btn.dataset.value = type.id; btn.textContent = type.label;
      btn.onclick = () => { options.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active')); btn.classList.add('active'); };
      options.appendChild(btn);
    });
  } else field.style.display = 'none';
}

function updateGSSTimers(gameName) {
  const field = document.getElementById('gss-timer-field'), options = document.getElementById('gss-timer-options');
  if (!field || !options) return;
  const cur = options.querySelector('.gss-option.active')?.dataset.value;
  options.innerHTML = '';
  let timers = [];
  if (gameName === 'Action Hero') timers = [{ id: '30', label: '30s' }, { id: '60', label: '60s' }, { id: '90', label: '90s' }, { id: '120', label: '120s' }];
  else if (['Battle of Wits', 'Opinion Arena', "Critic's Corner", 'Fluency Flow'].includes(gameName)) timers = [{ id: '60', label: '60s' }, { id: '120', label: '120s' }, { id: '180', label: '180s' }];
  else if (gameName === 'Hot Seat') timers = [{ id: '60', label: '60s' }, { id: '90', label: '90s' }];

  if (timers.length > 0) {
    field.style.display = 'block';
    timers.forEach(t => {
      const btn = document.createElement('button');
      const active = cur ? t.id === cur : (gameName === 'Fluency Flow' ? t.id === '180' : t.id === '60');
      btn.className = 'gss-option' + (active ? ' active' : '');
      btn.dataset.value = t.id; btn.textContent = (window.t?.('timer_' + t.id + 's')) || t.label;
      btn.onclick = () => { options.querySelectorAll('.gss-option').forEach(o => o.classList.remove('active')); btn.classList.add('active'); };
      options.appendChild(btn);
    });
  } else field.style.display = 'none';
}

function closeGameSheet() {
  document.getElementById('game-setup-sheet')?.classList.remove('open');
  document.getElementById('sheet-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Other handlers
function showPinModal(title, desc, url) {
    const pinModal = document.getElementById('pin-modal');
    if (!pinModal) return;
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

    document.getElementById('pin-title')?.setAttribute('data-translate-key', 'pin_title');
    if (document.getElementById('pin-title')) document.getElementById('pin-title').textContent = title;
    if (document.getElementById('pin-desc')) document.getElementById('pin-desc').textContent = desc;

    if (document.getElementById('pin-step-ios')) {
        document.getElementById('pin-step-ios').style.display = isIOS ? 'block' : 'none';
        document.getElementById('pin-step-ios').setAttribute('data-translate-key', 'pin_step_ios');
    }
    if (document.getElementById('pin-step-android')) {
        document.getElementById('pin-step-android').style.display = isIOS ? 'none' : 'block';
        document.getElementById('pin-step-android').setAttribute('data-translate-key', 'pin_step_android');
    }

    const gotItBtn = pinModal.querySelector('button');
    if (gotItBtn) gotItBtn.setAttribute('data-translate-key', 'pin_btn_got_it');

    window.history.replaceState({}, '', url);
    const originalTitle = document.title;
    document.title = title;
    pinModal.style.display = 'flex';

    const closePin = () => { pinModal.style.display = 'none'; document.title = originalTitle; };
    if (gotItBtn) gotItBtn.onclick = closePin;
    if (window.setLanguage) window.setLanguage(localStorage.getItem('language') || 'en');
}

function checkAutoLaunch() {
    const params = new URLSearchParams(window.location.search), gameId = params.get('game'), cat = params.get('cat');
    if (gameId) {
        const gameName = Object.keys(window.COSY_GAMES).find(k => window.COSY_GAMES[k].id === gameId);
        if (gameName) setTimeout(() => openGameSheet(gameName, window.COSY_GAMES[gameName].icon, params.get('mode') || 'solo'), 500);
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
  if (new URLSearchParams(window.location.search).get('embed') === 'true') document.body.classList.add('embedded-mode');

  if (!document.querySelector('.mobile-nav')) {
      const nav = document.createElement('nav'), base = window.location.pathname.includes('/COSYlanguages/') ? '/COSYlanguages/' : '/';
      nav.className = 'mobile-nav';
      nav.innerHTML = `
        <a href="${base}practice.html" class="mobile-nav-item" id="mnav-practice"><span class="mn-icon">💡</span><span>Practice</span></a>
        <a href="${base}events.html" class="mobile-nav-item" id="mnav-games"><span class="mn-icon">🎮</span><span>Games</span></a>
        <a href="${base}index.html#languages" class="mobile-nav-item" id="mnav-languages"><span class="mn-icon">🌍</span><span>Languages</span></a>
        <a href="${base}index.html" class="mobile-nav-item" id="mnav-home"><span class="mn-icon">🏡</span><span>Home</span></a>
        <a href="${base}days.html" class="mobile-nav-item" id="mnav-lessons"><span class="mn-icon">🔐</span><span>My Lessons</span></a>
      `;
      document.body.appendChild(nav);
  }

  if (!document.getElementById('answer-flash')) {
      const flash = document.createElement('div'); flash.id = 'answer-flash'; flash.className = 'answer-flash';
      document.body.appendChild(flash);
  }

  if (!document.getElementById('sheet-overlay')) {
      const overlay = document.createElement('div'); overlay.id = 'sheet-overlay'; overlay.className = 'sheet-overlay';
      overlay.onclick = closeGameSheet; document.body.appendChild(overlay);
  }

  if (!document.getElementById('pin-modal')) {
      const modal = document.createElement('div'); modal.id = 'pin-modal'; modal.className = 'modal-overlay'; modal.style.display = 'none';
      modal.innerHTML = `<div class="modal-content glass" style="max-width: 450px; text-align: center;"><div style="font-size: 3rem; margin-bottom: 1rem;">📲</div><h2 id="pin-title" style="margin-bottom: 0.5rem;" data-translate-key="pin_title">Add to Home Screen</h2><p id="pin-desc" style="font-size: 0.9rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;"></p><div id="pin-steps" style="text-align: left; background: var(--sage-mist); padding: 1rem; border-radius: 12px; font-size: 0.85rem; margin-bottom: 1.5rem;"><p id="pin-step-ios" style="display:none" data-translate-key="pin_step_ios"><strong>On iPhone:</strong> Tap the <span style="font-size:1.2rem">⎋</span> Share button, then scroll down and tap <strong>"Add to Home Screen"</strong>.</p><p id="pin-step-android" style="display:none" data-translate-key="pin_step_android"><strong>On Android:</strong> Tap the <span style="font-size:1.2rem">⋮</span> menu button, then tap <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong>.</p></div><button onclick="document.getElementById('pin-modal').style.display='none'" class="cta-button primary" style="width:100%" data-translate-key="pin_btn_got_it">Got it!</button></div>`;
      document.body.appendChild(modal);
  }

  const visits = parseInt(localStorage.getItem('cosy_visits') || '0') + 1;
  localStorage.setItem('cosy_visits', visits);
  if (visits === 3 && !localStorage.getItem('cosy_install_shown') && !window.matchMedia('(display-mode: standalone)').matches) {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent), nudge = document.createElement('div');
    nudge.style.cssText = `position:fixed;bottom:80px;left:16px;right:16px;z-index:400;background:#fff8e7;border:2px solid #e8a838;border-radius:16px;padding:14px 16px;font-family:'Nunito',sans-serif;box-shadow:0 4px 24px rgba(0,0,0,.15);`;
    nudge.innerHTML = `<div style="font-size:13px;font-weight:800;color:#a06b10;margin-bottom:4px;">🏡 Add COSY to your home screen</div><div style="font-size:12px;color:#8a6030;line-height:1.5;">${isIOS ? 'Tap the Share button below, then "Add to Home Screen" for instant access.' : 'Tap the menu (⋮) then "Add to Home Screen" for instant access.'}</div><button onclick="this.parentNode.remove()" style="float:right;margin-top:-36px;background:none;border:none;font-size:18px;color:#aaa;cursor:pointer;padding:4px;">✕</button>`;
    document.body.appendChild(nudge); localStorage.setItem('cosy_install_shown', '1'); setTimeout(() => nudge.remove(), 8000);
  }

  const pinPracticeBtn = document.getElementById('pin-practice-btn');
  if (pinPracticeBtn) {
    pinPracticeBtn.onclick = () => {
      const cat = document.querySelector('input[name="practice-cat"]:checked')?.id.replace('cat-', '') || 'vocab', lang = document.querySelector('.lang-selection-card.active')?.dataset.value || 'en', level = document.getElementById('practice-level')?.value || 'starter', theme = document.getElementById('practice-theme')?.value || 'all';
      const catNames = { 'vocab': (window.t?.('cat_vocab')) || 'Vocabulary', 'grammar': (window.t?.('cat_grammar')) || 'Grammar', 'speaking': (window.t?.('cat_speaking')) || 'Speaking' };
      const template = (window.t?.('pin_desc_template_cat')) || (window.t?.('pin_desc_template')) || "You're about to pin \"{0}\" ({1}, {2}) to your home screen.";
      showPinModal((window.t?.('pin_title')) || 'Add to Home Screen', template.replace('{0}', catNames[cat] || cat).replace('{1}', lang.toUpperCase()).replace('{2}', level), `${window.location.origin}${window.location.pathname}?cat=${cat}&lang=${lang}&level=${level}&theme=${theme}&embed=true`);
    };
  }

  updateMobileNav(); checkAutoLaunch(); GamePreferenceManager.init();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMobile);
else initMobile();

window.updateMobileNav = updateMobileNav; window.openGameSheet = openGameSheet; window.closeGameSheet = closeGameSheet;
const GamePreferenceManager = {
  PREF_KEY: "cosy_game_prefs",
  init() { this.setupGlobalPrefs(); },
  setupGlobalPrefs() {
    const langSelect = document.getElementById("global-lang-select"), levelSelect = document.getElementById("global-level-select");
    if (!langSelect || !levelSelect) return;
    const saved = JSON.parse(localStorage.getItem(this.PREF_KEY) || "{}");
    if (saved.lang) langSelect.value = saved.lang;
    if (saved.level) levelSelect.value = saved.level;
    const update = () => { localStorage.setItem(this.PREF_KEY, JSON.stringify({ lang: langSelect.value, level: levelSelect.value })); };
    langSelect.addEventListener("change", update); levelSelect.addEventListener("change", update);
  }
};

const originalOpenGameSheet = window.openGameSheet;
window.openGameSheet = function(gameName, icon, mode = "solo") {
  const lang = document.getElementById("global-lang-select")?.value, level = document.getElementById("global-level-select")?.value;
  if (originalOpenGameSheet) originalOpenGameSheet(gameName, icon, mode);
  setTimeout(() => {
    if (lang) { const opt = document.querySelector(`#gss-lang-options .gss-option[data-value="${lang}"]`); if (opt) opt.click(); }
    if (level) { const opt = document.querySelector(`#gss-level-options .gss-option[data-value="${level}"]`); if (opt) opt.click(); }
  }, 50);
};

window.flashAnswer = flashAnswer; window.showPinModal = showPinModal; window.launchGame = launchGame;
