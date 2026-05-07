/**
 * cosy-mode.js
 * ─────────────────────────────────────────────────────────────────────────────
 * COSYlanguages shared mode system.
 * Drop one line into every page's <head>:
 *   <script src="js/cosy-mode.js"></script>
 *
 * What it does:
 *  1. Detects current mode (free / student / teacher) from localStorage
 *  2. Injects the correct nav into any element with id="cosy-nav"
 *  3. Shows/hides page sections tagged with data-mode="student|teacher|free|all"
 *  4. Exposes window.COSY — the global state object every page can read
 *  5. Provides helper functions: COSY.unlock(), COSY.logout(), COSY.loadStudent()
 * ─────────────────────────────────────────────────────────────────────────────
 */

;(function () {
  'use strict'

  /* ═══════════════════════════════════════════════════════════════
     0.  PATH HELPER
  ═══════════════════════════════════════════════════════════════ */
  function getPrefix() {
    const path = window.location.pathname;
    // Check if we're in a subdirectory.
    // Usually repos on GH Pages are at /RepoName/... but here we assume root-relative or relative.
    // The previous logic used ../ for one level deep.
    if (path.includes('/portal/') || path.includes('/practice/') || path.includes('/games/') || path.includes('/languages/') || path.includes('/vocabulary/') || path.includes('/grammar/')) {
      return '../';
    }
    return '';
  }
  const P = getPrefix();

  /* ═══════════════════════════════════════════════════════════════
     1.  VALID CODES
         In production: fetch /data/codes.json instead.
         Format: { "COSY-DEMO": { lang:"EN", level:"A2", course:"general", name:"Demo Student" }, … }
  ═══════════════════════════════════════════════════════════════ */
  const STUDENT_CODES = {
    'COSY-DEMO':  { lang:'EN', level:'A1', course:'general',      name:'Demo Student' },
    'COSY-1234':  { lang:'FR', level:'B1', course:'spoken',       name:'Student FR'   },
    'COSY-IT-A1': { lang:'IT', level:'A1', course:'general',      name:'Giulia'       },
    'COSY-RU-B2': { lang:'RU', level:'B2', course:'exam',         name:'Aleksei'      },
    'COSY-TEST':  { lang:'EN', level:'C1', course:'professional', name:'Test Account' },
  }

  const TEACHER_CODES = {
    'TEACH-DEMO': { name:'Alex', role:'teacher' },
    'TEACH-1234': { name:'Sophie', role:'admin'  },
  }

  /* ═══════════════════════════════════════════════════════════════
     2.  STORAGE KEYS
  ═══════════════════════════════════════════════════════════════ */
  const KEY_MODE     = 'cosy_mode'       // 'free' | 'student' | 'teacher'
  const KEY_STUDENT  = 'cosy_student'    // JSON string of student record
  const KEY_TEACHER  = 'cosy_teacher'    // JSON string of teacher record
  const KEY_PRACTICE = 'cosy_practice'   // practice engine state (unchanged)

  /* ═══════════════════════════════════════════════════════════════
     3.  READ CURRENT STATE
  ═══════════════════════════════════════════════════════════════ */
  function readState () {
    const mode    = localStorage.getItem(KEY_MODE) || 'free'
    const student = tryParse(localStorage.getItem(KEY_STUDENT))
    const teacher = tryParse(localStorage.getItem(KEY_TEACHER))
    const practice = tryParse(localStorage.getItem(KEY_PRACTICE)) || {}
    return { mode, student, teacher, practice }
  }

  function tryParse (str) {
    try { return str ? JSON.parse(str) : null } catch { return null }
  }

  /* ═══════════════════════════════════════════════════════════════
     4.  UNLOCK FUNCTIONS
  ═══════════════════════════════════════════════════════════════ */
  function unlockStudent (code) {
    const c = code.trim().toUpperCase()
    const record = STUDENT_CODES[c]
    if (!record) return { ok: false, error: 'Invalid student code. Please try again or contact your teacher.' }
    const student = { ...record, code: c, unlockedAt: Date.now() }
    localStorage.setItem(KEY_MODE, 'student')
    localStorage.setItem(KEY_STUDENT, JSON.stringify(student))
    // Also set legacy key for compatibility with existing code
    localStorage.setItem('student_unlocked', 'true')
    localStorage.setItem('student_course_code', c)
    localStorage.setItem('cosy_user_name', student.name)

    STATE = readState()
    applyMode()
    return { ok: true, student }
  }

  function unlockTeacher (code) {
    const c = code.trim().toUpperCase()
    const record = TEACHER_CODES[c]
    if (!record) return { ok: false, error: 'Invalid teacher code.' }
    const teacher = { ...record, code: c, unlockedAt: Date.now() }
    localStorage.setItem(KEY_MODE, 'teacher')
    localStorage.setItem(KEY_TEACHER, JSON.stringify(teacher))
    STATE = readState()
    applyMode()
    return { ok: true, teacher }
  }

  function logout () {
    localStorage.removeItem(KEY_MODE)
    localStorage.removeItem(KEY_STUDENT)
    localStorage.removeItem(KEY_TEACHER)
    localStorage.removeItem('student_unlocked')
    localStorage.removeItem('student_course_code')
    STATE = readState()
    applyMode()
    // Redirect to homepage if on a protected page
    if (window.location.pathname.includes('/portal/')) {
      window.location.href = P + 'index.html'
    } else {
      window.location.reload()
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     5.  NAV TEMPLATES
  ═══════════════════════════════════════════════════════════════ */

  // Current page highlight helper
  function isActive (href) {
    const page = window.location.pathname.split('/').pop() || 'index.html'
    return href === page || (href === 'index.html' && page === '') ? 'class="active"' : ''
  }

  function navFree () {
    return `
    <a class="nav-logo" href="${P}index.html">
      <img src="${P}images/cosylanguages.png" alt="COSYlanguages" onerror="this.style.display='none'">
      <span>COSYlanguages</span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${P}index.html" ${isActive('index.html')}>Home</a></li>
      <li><a href="${P}practice/index.html" ${isActive('practice/index.html')}>Practice 💡</a></li>
      <li><a href="${P}games/index.html" ${isActive('games/index.html')}>Games 🎮</a></li>
      <li><a href="${P}games/index.html" ${isActive('events.html')}>Events 🎉</a></li>
      <li><a href="${P}portal/index.html" ${isActive('portal/index.html')}>My Lessons 🔐</a></li>
    </ul>
    <div class="nav-right">
      <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank">💬 Contact us</a>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
  }

  function navStudent (student) {
    const activeCourse = (student.courses && student.courses.find(c => c.is_active)) || student;
    const pts   = student.points || (tryParse(localStorage.getItem(KEY_PRACTICE)) || {}).totalPts  || 0
    const streak = student.streak || (tryParse(localStorage.getItem(KEY_PRACTICE)) || {}).streak   || 0
    const lang = (activeCourse.language || activeCourse.lang || 'EN').toUpperCase();
    const langFlag = { EN:'🇬🇧', FR:'🇫🇷', IT:'🇮🇹', RU:'🇷🇺', EL:'🇬🇷' }[lang] || '🌍';
    const level = activeCourse.level || 'A1';
    const type = activeCourse.type || activeCourse.course || 'General';

    return `
    <a class="nav-logo" href="${P}portal/index.html">
      <div class="nav-avatar">${student.nickname ? student.nickname[0].toUpperCase() : (student.name ? student.name[0].toUpperCase() : '🎓')}</div>
      <div>
        <div class="nav-logo-name">${student.nickname || student.name || 'Student'}</div>
        <div class="nav-logo-sub">${langFlag} ${lang} · ${level} · ${type}</div>
      </div>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${P}portal/index.html" ${isActive('index.html')}>🗺️ Roadmap</a></li>
      <li><a href="${P}portal/index.html#vocab" ${isActive('#vocab')}>📓 Vocabulary</a></li>
      <li><a href="${P}portal/index.html#homework" ${isActive('#homework')}>📝 Homework</a></li>
      <li><a href="${P}practice/index.html" ${isActive('practice/index.html')}>💡 Practice</a></li>
      <li><a href="${P}games/index.html" ${isActive('games/index.html')}>🎮 Games</a></li>
    </ul>
    <div class="nav-right">
      <div class="nav-stat-pill nav-pts">✨ ${Number(pts).toLocaleString()} pts</div>
      <div class="nav-stat-pill nav-streak">🔥 ${streak}d</div>
      <button class="nav-mode-badge student" onclick="COSY.showModePanel()">🎓 Student</button>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
  }

  function navTeacher (teacher) {
    return `
    <a class="nav-logo" href="${P}portal/index.html">
      <div class="nav-avatar teacher">👩‍🏫</div>
      <div>
        <div class="nav-logo-name">${teacher.name || 'Teacher'}</div>
        <div class="nav-logo-sub">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</div>
      </div>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="${P}portal/index.html" ${isActive('index.html')}>👥 Students</a></li>
      <li><a href="${P}portal/index.html#assign">📋 Assign</a></li>
      <li><a href="${P}portal/index.html#progress">📈 Progress</a></li>
      <li><a href="${P}portal/index.html#codes">🔑 Codes</a></li>
      <li><a href="${P}portal/index.html#broadcast">📣 Broadcast</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-mode-badge teacher" onclick="COSY.showModePanel()">👩‍🏫 Teacher</button>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
  }

  /* ═══════════════════════════════════════════════════════════════
     6.  NAV CSS  (injected once into <head>)
  ═══════════════════════════════════════════════════════════════ */
  const NAV_CSS = `
  #cosy-nav {
    background: var(--warm-white, #FFFEFB);
    border-bottom: 1px solid var(--border, rgba(28,25,23,.10));
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    position: sticky;
    top: 0;
    z-index: 200;
    font-family: 'DM Sans', sans-serif;
    gap: 1rem;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; color: var(--ink, #1C1917);
    flex-shrink: 0;
  }
  .nav-logo img { height: 30px; }
  .nav-logo span {
    font-family: 'Fraunces', serif;
    font-weight: 600; font-size: 1.05rem;
  }
  .nav-avatar {
    width: 34px; height: 34px; border-radius: 50%;
    background: var(--teal-light, #E6F4F1);
    border: 2px solid var(--teal, #2D7D6F);
    display: flex; align-items: center; justify-content: center;
    font-size: .9rem; font-weight: 600;
    color: var(--teal, #2D7D6F);
    flex-shrink: 0;
  }
  .nav-avatar.teacher {
    background: var(--plum-light, #F2ECF7);
    border-color: var(--plum, #6B3F7C);
    font-size: 1rem;
  }
  .nav-logo-name { font-weight: 500; font-size: .88rem; line-height: 1.2; }
  .nav-logo-sub  { font-size: .68rem; color: var(--ink-muted, #78716C); line-height: 1.2; }
  .nav-links {
    display: flex; align-items: center; gap: 3px;
    list-style: none; flex: 1; justify-content: center;
  }
  .nav-links a {
    text-decoration: none; color: var(--ink-muted, #78716C);
    font-size: .82rem; padding: 6px 10px;
    border-radius: 8px;
    transition: background .15s, color .15s;
    white-space: nowrap;
  }
  .nav-links a:hover { background: rgba(28,25,23,.07); color: var(--ink, #1C1917); }
  .nav-links a.active { color: var(--ink, #1C1917); font-weight: 500; }
  .nav-right {
    display: flex; align-items: center; gap: 8px;
    flex-shrink: 0;
  }
  .nav-cta {
    background: var(--ink, #1C1917); color: #fff;
    border-radius: 100px; font-size: .82rem; font-weight: 500;
    padding: 7px 16px; text-decoration: none;
    transition: opacity .15s; white-space: nowrap;
  }
  .nav-cta:hover { opacity: .85; }
  .nav-stat-pill {
    border-radius: 100px; font-size: .76rem; font-weight: 500;
    padding: 5px 11px; border: 1px solid; white-space: nowrap;
  }
  .nav-pts    { background: #FBF3E2; color: #B07D2B; border-color: rgba(176,125,43,.2); }
  .nav-streak { background: #FAEEE8; color: #C4522A; border-color: rgba(196,82,42,.2); }
  .nav-mode-badge {
    border-radius: 100px; font-size: .74rem; font-weight: 500;
    padding: 5px 12px; cursor: pointer; border: 1px solid; white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
    transition: opacity .15s;
  }
  .nav-mode-badge:hover { opacity: .8; }
  .nav-mode-badge.student { background: #E8EEF8; color: #2E5FA3; border-color: rgba(46,95,163,.25); }
  .nav-mode-badge.teacher { background: #F2ECF7; color: #6B3F7C; border-color: rgba(107,63,124,.25); }
  .nav-menu-btn {
    display: none; background: none; border: none;
    cursor: pointer; font-size: 1.3rem;
    color: var(--ink, #1C1917); padding: 4px;
  }

  /* MODE PANEL (slide-in) */
  #cosy-mode-panel {
    display: none; position: fixed; inset: 0;
    background: rgba(28,25,23,.45); z-index: 400;
    align-items: flex-start; justify-content: flex-end;
  }
  #cosy-mode-panel.open { display: flex; }
  .mode-panel-inner {
    background: var(--warm-white, #FFFEFB);
    width: 320px; min-height: 100vh;
    padding: 1.5rem; box-shadow: -8px 0 32px rgba(28,25,23,.12);
    animation: slideIn .22s ease;
    overflow-y: auto;
  }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
  .mp-close {
    position: absolute; top: 1rem; right: 1rem;
    background: none; border: none; font-size: 1.1rem;
    cursor: pointer; color: var(--ink-muted, #78716C);
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .mp-close:hover { background: rgba(28,25,23,.07); }
  .mp-title {
    font-family: 'Fraunces', serif; font-weight: 600;
    font-size: 1.15rem; margin-bottom: 1.2rem;
    padding-right: 2rem;
  }
  .mp-section { margin-bottom: 1.2rem; }
  .mp-section-lbl {
    font-size: .68rem; font-weight: 500; text-transform: uppercase;
    letter-spacing: .07em; color: var(--ink-faint, #A8A29E);
    margin-bottom: .5rem;
  }
  .mp-info-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: .84rem; padding: 6px 0;
    border-bottom: 1px solid rgba(28,25,23,.07);
  }
  .mp-info-row:last-child { border-bottom: none; }
  .mp-info-lbl { color: var(--ink-muted, #78716C); }
  .mp-info-val { font-weight: 500; }
  .mp-switch-section { margin-top: 1rem; }
  .mp-code-row { display: flex; gap: 7px; margin-bottom: 6px; }
  .mp-code-input {
    flex: 1; font-family: 'DM Sans', sans-serif; font-size: .84rem;
    letter-spacing: .12em; text-align: center; text-transform: uppercase;
    padding: 8px 10px; border: 1px solid rgba(28,25,23,.12);
    border-radius: 10px; background: #FAF7F2; outline: none;
    transition: border-color .15s;
  }
  .mp-code-input:focus { border-color: rgba(28,25,23,.3); }
  .mp-code-input.error { border-color: #C4522A; }
  .mp-unlock-btn {
    background: #1C1917; color: #fff; border: none;
    border-radius: 10px; font-family: 'DM Sans', sans-serif;
    font-size: .82rem; font-weight: 500; padding: 8px 14px;
    cursor: pointer; transition: opacity .15s; white-space: nowrap;
  }
  .mp-unlock-btn:hover { opacity: .85; }
  .mp-error { color: #C4522A; font-size: .76rem; margin-top: 3px; display: none; }
  .mp-hint  { font-size: .72rem; color: var(--ink-faint, #A8A29E); margin-top: 4px; }
  .mp-logout-btn {
    width: 100%; padding: 10px; border: 1px solid rgba(28,25,23,.12);
    border-radius: 100px; background: none; font-family: 'DM Sans', sans-serif;
    font-size: .84rem; color: var(--ink-muted, #78716C);
    cursor: pointer; transition: all .15s; margin-top: .8rem;
    text-align: center;
  }
  .mp-logout-btn:hover { border-color: #C4522A; color: #C4522A; }

  /* MOBILE MENU */
  #cosy-mobile-menu {
    display: none; position: fixed;
    top: 62px; left: 0; right: 0; bottom: 0;
    background: var(--warm-white, #FFFEFB);
    z-index: 190; padding: 1.2rem;
    flex-direction: column; gap: 5px;
    border-top: 1px solid rgba(28,25,23,.1);
    overflow-y: auto;
  }
  #cosy-mobile-menu.open { display: flex; }
  #cosy-mobile-menu a {
    text-decoration: none; color: var(--ink-muted, #78716C);
    font-size: .95rem; padding: 10px 12px; border-radius: 12px;
    font-family: 'DM Sans', sans-serif; transition: background .15s;
  }
  #cosy-mobile-menu a:hover { background: rgba(28,25,23,.05); color: var(--ink, #1C1917); }
  #cosy-mobile-menu .mm-divider {
    height: 1px; background: rgba(28,25,23,.08); margin: .4rem 0;
  }
  #cosy-mobile-menu .mm-cta {
    background: #1C1917; color: #fff; text-align: center;
    border-radius: 100px; margin-top: .4rem; font-weight: 500;
  }

  /* MODE INDICATOR BAR (thin stripe below nav) */
  #cosy-mode-bar {
    height: 3px; width: 100%;
    transition: background .4s;
    display: none;
  }
  #cosy-mode-bar.student { display: block; background: linear-gradient(90deg, #2E5FA3, #2D7D6F); }
  #cosy-mode-bar.teacher { display: block; background: linear-gradient(90deg, #6B3F7C, #C4522A); }

  /* SECTION VISIBILITY */
  body.mode-free [data-mode]:not([data-mode~="free"]):not([data-mode~="all"]) { display: none !important; }
  body.mode-student [data-mode]:not([data-mode~="student"]):not([data-mode~="all"]) { display: none !important; }
  body.mode-teacher [data-mode]:not([data-mode~="teacher"]):not([data-mode~="all"]) { display: none !important; }

  body.mode-free [data-mode~="free"] { display: revert !important; }
  body.mode-student [data-mode~="student"] { display: revert !important; }
  body.mode-teacher [data-mode~="teacher"] { display: revert !important; }
  body [data-mode~="all"] { display: revert !important; }

  @media (max-width: 700px) {
    #cosy-nav { padding: 0 1rem; }
    .nav-links { display: none !important; }
    .nav-menu-btn { display: block !important; }
    .nav-stat-pill { display: none; }
    .mode-panel-inner { width: 100vw; }
  }
  `

  /* ═══════════════════════════════════════════════════════════════
     7.  MOBILE MENU HTML
  ═══════════════════════════════════════════════════════════════ */
  function mobileMenuHTML (mode, student, teacher) {
    if (mode === 'student') {
      return `
        <a href="${P}portal/index.html">🗺️ My Roadmap</a>
        <a href="${P}portal/index.html#vocab">📓 Vocabulary</a>
        <a href="${P}portal/index.html#homework">📝 Homework</a>
        <div class="mm-divider"></div>
        <a href="${P}practice/index.html">💡 Practice</a>
        <a href="${P}games/index.html">🎮 Games</a>
        <a href="${P}games/index.html">🎉 Events</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A">Sign out</a>`
    }
    if (mode === 'teacher') {
      return `
        <a href="${P}portal/index.html">👥 Students</a>
        <a href="${P}portal/index.html#assign">📋 Assign homework</a>
        <a href="${P}portal/index.html#progress">📈 Progress</a>
        <a href="${P}portal/index.html#codes">🔑 Manage codes</a>
        <a href="${P}portal/index.html#broadcast">📣 Broadcast</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A">Sign out</a>`
    }
    return `
      <a href="${P}index.html">Home</a>
      <a href="${P}practice/index.html">💡 Practice</a>
      <a href="${P}games/index.html">🎮 Games</a>
      <a href="${P}games/index.html">🎉 Events</a>
      <a href="${P}portal/index.html">🔐 My Lessons</a>
      <div class="mm-divider"></div>
      <a href="https://wa.me/330766784195" target="_blank" class="mm-cta">💬 Contact us on WhatsApp</a>`
  }

  /* ═══════════════════════════════════════════════════════════════
     8.  MODE PANEL HTML
  ═══════════════════════════════════════════════════════════════ */
  function modePanelHTML (mode, student, teacher) {
    const langNames = { EN:'English 🇬🇧', FR:'Français 🇫🇷', IT:'Italiano 🇮🇹', RU:'Русский 🇷🇺', EL:'Ελληνικά 🇬🇷' }

    let currentSection = ''
    if (mode === 'student' && student) {
      const activeCourse = (student.courses && student.courses.find(c => c.is_active)) || student;
      const pts = student.points || (tryParse(localStorage.getItem(KEY_PRACTICE)) || {}).totalPts || 0
      const streak = student.streak || (tryParse(localStorage.getItem(KEY_PRACTICE)) || {}).streak || 0
      const lang = (activeCourse.language || activeCourse.lang || 'EN').toUpperCase();

      let courseSwitchHTML = '';
      if (student.courses && student.courses.length > 1) {
        courseSwitchHTML = `
          <div class="mp-section" style="margin-top:1rem">
            <div class="mp-section-lbl">Switch Course</div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              ${student.courses.map(c => `
                <button class="mp-info-row" style="width:100%; text-align:left; border:1px solid ${c.is_active ? 'var(--teal)' : 'rgba(0,0,0,0.05)'}; border-radius:8px; background:${c.is_active ? '#f0f9f8' : 'none'}; cursor:pointer; padding:8px 12px;" onclick="COSY.switchCourse('${c.id}')">
                  <span class="mp-info-val" style="font-size:0.8rem">${langNames[c.language.toUpperCase()] || c.language} · ${c.level}</span>
                  ${c.is_active ? '✅' : ''}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Your profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Name</span><span class="mp-info-val">${student.nickname || student.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${student.code}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Language</span><span class="mp-info-val">${langNames[lang] || lang}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Level</span><span class="mp-info-val">${activeCourse.level}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Points</span><span class="mp-info-val">✨ ${Number(pts).toLocaleString()}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Streak</span><span class="mp-info-val">🔥 ${streak} days</span></div>
        </div>
        ${courseSwitchHTML}
        <button class="mp-logout-btn" onclick="COSY.logout()">Sign out</button>
        <div class="mp-section" style="margin-top:1.2rem">
          <div class="mp-section-lbl">Switch to teacher view</div>
          <div class="mp-code-row">
            <input class="mp-code-input" id="mp-t-code" placeholder="TEACH-XXXX" maxlength="10" oninput="this.value=this.value.toUpperCase()">
            <button class="mp-unlock-btn" onclick="COSY._mpUnlockTeacher()">Access</button>
          </div>
          <div class="mp-error" id="mp-t-error">Invalid teacher code.</div>
        </div>`
    } else if (mode === 'teacher' && teacher) {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Teacher profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Name</span><span class="mp-info-val">${teacher.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Role</span><span class="mp-info-val">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${teacher.code}</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()">Sign out</button>`
    } else {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Current mode</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Mode</span><span class="mp-info-val">🆓 Free visitor</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Account</span><span class="mp-info-val" style="color:var(--ink-faint)">None</span></div>
        </div>`
    }

    return `
      <button class="mp-close" onclick="COSY.hideModePanel()">✕</button>
      <div class="mp-title">Your account</div>
      ${currentSection}
      <div class="mp-switch-section">
        <div class="mp-section-lbl" style="margin-bottom:.6rem">${mode === 'free' ? 'Enter your code to unlock' : 'Switch account'}</div>
        <div class="mp-code-row">
          <input class="mp-code-input" id="mp-s-code" placeholder="COSY-XXXX" maxlength="12" oninput="this.value=this.value.toUpperCase()">
          <button class="mp-unlock-btn" onclick="COSY._mpUnlockStudent()">Unlock</button>
        </div>
        <div class="mp-error" id="mp-s-error"></div>
        <div class="mp-hint">Student code? Try <strong>COSY-DEMO</strong></div>
      </div>`
  }

  /* ═══════════════════════════════════════════════════════════════
     9.  APPLY MODE — rewrites nav + body class + mode bar
  ═══════════════════════════════════════════════════════════════ */
  function applyMode () {
    const { mode, student, teacher } = STATE

    // Body class
    document.body.classList.remove('mode-free', 'mode-student', 'mode-teacher')
    document.body.classList.add('mode-' + mode)

    // Nav
    const nav = document.getElementById('cosy-nav')
    if (nav) {
      if      (mode === 'student') nav.innerHTML = navStudent(student)
      else if (mode === 'teacher') nav.innerHTML = navTeacher(teacher)
      else                         nav.innerHTML = navFree()
    }

    // Mode bar
    const bar = document.getElementById('cosy-mode-bar')
    if (bar) {
      bar.className = mode === 'free' ? '' : mode
    }

    // Mobile menu
    const mm = document.getElementById('cosy-mobile-menu')
    if (mm) mm.innerHTML = mobileMenuHTML(mode, student, teacher)

    // Mode panel (update if open)
    const mp = document.getElementById('cosy-mode-panel-inner')
    if (mp) mp.innerHTML = modePanelHTML(mode, student, teacher)

    // Section visibility — handled by CSS via body class
    // [data-mode~="student"].mode-student is shown etc.

    // Fire event so pages can hook in
    document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: { mode, student, teacher } }))
  }

  /* ═══════════════════════════════════════════════════════════════
     10.  DOM INJECTION
  ═══════════════════════════════════════════════════════════════ */
  function inject () {
    // CSS
    if (!document.getElementById('cosy-mode-css')) {
      const style = document.createElement('style')
      style.id = 'cosy-mode-css'
      style.textContent = NAV_CSS
      document.head.appendChild(style)
    }

    // Mode bar (insert after nav)
    if (!document.getElementById('cosy-mode-bar')) {
      const bar = document.createElement('div')
      bar.id = 'cosy-mode-bar'
      const nav = document.getElementById('cosy-nav')
      if (nav && nav.nextSibling) nav.parentNode.insertBefore(bar, nav.nextSibling)
      else document.body.insertBefore(bar, document.body.firstChild)
    }

    // Mobile menu
    if (!document.getElementById('cosy-mobile-menu')) {
      const mm = document.createElement('div')
      mm.id = 'cosy-mobile-menu'
      document.body.appendChild(mm)
    }

    // Mode panel overlay
    if (!document.getElementById('cosy-mode-panel')) {
      const panel = document.createElement('div')
      panel.id = 'cosy-mode-panel'
      panel.setAttribute('onclick', "if(event.target===this)COSY.hideModePanel()")
      panel.innerHTML = `<div class="mode-panel-inner" id="cosy-mode-panel-inner"></div>`
      document.body.appendChild(panel)
    }

    applyMode()
  }

  /* ═══════════════════════════════════════════════════════════════
     11.  PUBLIC API  →  window.COSY
  ═══════════════════════════════════════════════════════════════ */
  let STATE = readState()

  window.COSY = {
    // State
    get mode ()    { return STATE.mode },
    get student () { return STATE.student },
    get teacher () { return STATE.teacher },
    get practice (){ return STATE.practice },
    isStudent ()   { return STATE.mode === 'student' },
    isTeacher ()   { return STATE.mode === 'teacher' },
    isFree ()      { return STATE.mode === 'free' },

    // Auth
    async unlock (code) {
      const c = code.trim().toUpperCase()

      // 1. Check Student Codes (Dynamic)
      try {
        const resp = await fetch(P + 'data/students.json?t=' + Date.now())
        const students = await resp.json()
        if (students[c]) {
          const student = {
            ...students[c],
            code: c,
            name: students[c].nickname || students[c].name || 'Student',
            lang: students[c].language || students[c].lang || 'EN',
            course: (students[c].courses && students[c].courses[0]?.type) || students[c].course || 'General',
            level: (students[c].courses && students[c].courses[0]?.level) || students[c].level || 'A1',
            unlockedAt: Date.now()
          }
          localStorage.setItem(KEY_MODE, 'student')
          localStorage.setItem(KEY_STUDENT, JSON.stringify(student))
          localStorage.setItem('student_unlocked', 'true')
          localStorage.setItem('student_course_code', c)
          localStorage.setItem('cosy_user_name', student.name)
          STATE = readState()
          applyMode()
          return { ok: true, student }
        }
      } catch (e) { console.warn('Dynamic student check failed, falling back to pattern.') }

      // 2. Check Teacher Codes
      if (TEACHER_CODES[c])  return unlockTeacher(c)

      // 3. Pattern fallback (allows offline/demo use)
      if (c.startsWith('COSY-')) return unlockStudent(c)
      if (c.startsWith('TEACH-')) return unlockTeacher(c)

      return { ok: false, error: 'Code not recognised. Check your code and try again.' }
    },
    unlockStudent,
    unlockTeacher,
    logout,

    // Mode panel
    showModePanel () {
      const panel = document.getElementById('cosy-mode-panel')
      const inner = document.getElementById('cosy-mode-panel-inner')
      if (!panel || !inner) return
      inner.innerHTML = modePanelHTML(STATE.mode, STATE.student, STATE.teacher)
      panel.classList.add('open')
      document.body.style.overflow = 'hidden'
    },
    hideModePanel () {
      const panel = document.getElementById('cosy-mode-panel')
      if (panel) panel.classList.remove('open')
      document.body.style.overflow = ''
    },

    switchCourse (courseId) {
      if (STATE.mode !== 'student' || !STATE.student) return
      const s = STATE.student
      if (s.courses) {
        s.courses.forEach(c => c.is_active = (c.id === courseId))
        localStorage.setItem(KEY_STUDENT, JSON.stringify(s))
        STATE = readState()
        applyMode()
        // Notify other components
        document.dispatchEvent(new CustomEvent('cosyCourseSwitched', { detail: { courseId, student: s } }))
      }
    },

    // Mobile menu
    toggleMobileMenu () {
      const mm = document.getElementById('cosy-mobile-menu')
      if (mm) mm.classList.toggle('open')
    },

    // Internal helpers (called from injected HTML)
    async _mpUnlockStudent () {
      const input = document.getElementById('mp-s-code')
      const error = document.getElementById('mp-s-error')
      if (!input) return
      const result = await COSY.unlock(input.value)
      if (result.ok && STATE.mode === 'student') {
        COSY.hideModePanel()
        window.location.href = P + 'portal/index.html'
      } else {
        input.classList.add('error')
        if (error) { error.textContent = result.error || 'Invalid code.'; error.style.display = 'block' }
        setTimeout(() => { input.classList.remove('error'); if (error) error.style.display = 'none' }, 3000)
      }
    },
    async _mpUnlockTeacher () {
      const input = document.getElementById('mp-t-code')
      const error = document.getElementById('mp-t-error')
      if (!input) return
      const result = await COSY.unlock(input.value)
      if (result.ok && STATE.mode === 'teacher') {
        COSY.hideModePanel()
        window.location.href = P + 'portal/index.html'
      } else {
        input.classList.add('error')
        if (error) { error.textContent = result.error || 'Invalid code.'; error.style.display = 'block' }
        setTimeout(() => { input.classList.remove('error'); if (error) error.style.display = 'none' }, 3000)
      }
    },

    // Utility
    langFlag (code) {
      return { EN:'🇬🇧', FR:'🇫🇷', IT:'🇮🇹', RU:'🇷🇺', EL:'🇬🇷' }[code] || '🌍'
    },
    levelColor (level) {
      return { A1:'#3A7A4A', A2:'#2D7D6F', B1:'#2E5FA3', B2:'#6B3F7C', C1:'#B07D2B', C2:'#C4522A' }[level] || '#1C1917'
    },
    courseName (code) {
      return { general:'General Course', spoken:'Spoken Course', exam:'Exam Prep', travel:'Travel', professional:'Professional' }[code] || code
    },

    // Re-apply (call after dynamic content loads)
    refresh () { STATE = readState(); applyMode() },
  }

  /* ═══════════════════════════════════════════════════════════════
     12.  BOOT
  ═══════════════════════════════════════════════════════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject)
  } else {
    inject()
  }

})()
