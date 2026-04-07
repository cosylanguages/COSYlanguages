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
function openGameSheet(gameName, gameIcon) {
  const sheet = document.getElementById('game-setup-sheet');
  const overlay = document.getElementById('sheet-overlay');
  if (!sheet) return;

  const title = sheet.querySelector('.gss-title');
  if (title) title.innerHTML = `<span>${gameIcon}</span> ${gameName}`;

  // Reset options
  const langOptions = sheet.querySelectorAll('#gss-lang-options .gss-option');
  const levelOptions = sheet.querySelectorAll('#gss-level-options .gss-option');
  const startBtn = sheet.querySelector('.gss-start');

  langOptions.forEach(opt => {
    opt.onclick = () => {
      langOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    };
  });

  levelOptions.forEach(opt => {
    opt.onclick = () => {
      levelOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    };
  });

  if (startBtn) {
    startBtn.onclick = () => {
      const lang = sheet.querySelector('#gss-lang-options .gss-option.active')?.dataset.value;
      const level = sheet.querySelector('#gss-level-options .gss-option.active')?.dataset.value;

      closeGameSheet();

      // Find the existing modal and setup the game
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
        'Hot Seat': 'hot-seat'
      };

      const prefix = gameMap[gameName];
      if (prefix) {
        // Set lang and level in the existing desktop-style modal
        const modal = document.getElementById(`${prefix}-modal`);

        if (modal) {
          const langSelect = modal.querySelector('.game-lang') || modal.querySelector(`#${prefix}-lang`);
          const levelSelect = modal.querySelector('.game-level') || modal.querySelector(`#${prefix}-level`);

          let startBtnId = `#start-${prefix}-game-btn`;
          if (prefix === 'talk-talk' || prefix === 'debates' || prefix === 'opinion-arena' || prefix === 'critics-corner') {
              startBtnId = `#start-${prefix.split('-')[0]}-btn`;
          }
          if (prefix === 'guess-who' || prefix === 'guess-what') {
              startBtnId = `#start-${prefix}-btn`;
          }

          const startBtn = modal.querySelector(startBtnId) ||
                           modal.querySelector('#start-bingo-caller-btn'); // special case for bingo

          if (langSelect) langSelect.value = lang;
          if (levelSelect) levelSelect.value = level;

          // Trigger change events if any
          langSelect?.dispatchEvent(new Event('change'));
          levelSelect?.dispatchEvent(new Event('change'));

          // Open the actual game modal
          modal.classList.remove('hidden');

          // Click start button after a short delay
          setTimeout(() => {
            if (startBtn) startBtn.click();
          }, 100);
        }
      }
    };
  }

  sheet.classList.add('open');
  overlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
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

// ── Boot
function initMobile() {
  injectMobileNav();
  injectAnswerFlash();
  injectSheetOverlay();
  checkInstallPrompt();
  updateMobileNav();
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
