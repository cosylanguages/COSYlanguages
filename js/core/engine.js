/**
 * cosy-mode.js — THE ENGINE
 * ─────────────────────────────────────────────────────────────────────────────
 * COSYlanguages shared mode system.
 * One URL, Three Realities.
 * ───────────────────────────────────────────────────────────────────────────── */
;(function () { 'use strict'

/* ═══════════════════════════════════════════════════════════════
   1. CONSTANTS & KEYS
   ═══════════════════════════════════════════════════════════════ */
const KEY_MODE = 'cosy_mode'
const KEY_STUDENT = 'cosy_student'
const KEY_TEACHER = 'cosy_teacher'
const KEY_ADMIN = 'cosy_admin'
const KEY_PRACTICE = 'cosy_practice'
const KEY_NOTEBOOK = 'cosy_notebook' // { [lessonId]: { notes: '', mistakes: [] } }

/* ═══════════════════════════════════════════════════════════════
   2. STATE MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
function readState () {
    const mode = localStorage.getItem(KEY_MODE) || 'free'
    const student = tryParse(localStorage.getItem(KEY_STUDENT))
    const teacher = tryParse(localStorage.getItem(KEY_TEACHER))
    const admin = tryParse(localStorage.getItem(KEY_ADMIN))
    const practice = tryParse(localStorage.getItem(KEY_PRACTICE)) || { totalPts: 0, streak: 0, mistakes: [] }
    const notebook = tryParse(localStorage.getItem(KEY_NOTEBOOK)) || {}
    return { mode, student, teacher, admin, practice, notebook }
}

function tryParse (str) { try { return str ? JSON.parse(str) : null } catch { return null } }

function getPrefix() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p);
    if (parts.includes('portal') || parts.includes('practice') || parts.includes('games')) {
        return '../';
    }
    return '';
}

/* ═══════════════════════════════════════════════════════════════
   3. AUTH & LIVE SYNC
   ═══════════════════════════════════════════════════════════════ */
async function syncData () {
    const p = getPrefix();
    try {
        const res = await fetch(p + 'data/students.json?t=' + Date.now());
        let allStudents = await res.json();

        // Admin override for local simulation
        const override = tryParse(localStorage.getItem('cosy_admin_students_override'));
        if (override) allStudents = { ...allStudents, ...override };

        if (STATE.mode === 'student' && STATE.student?.code) {
            const updated = allStudents[STATE.student.code];
            if (updated) {
                const merged = { ...STATE.student, ...updated };
                localStorage.setItem(KEY_STUDENT, JSON.stringify(merged));
                STATE.student = merged;
                applyMode();
            }
        }
        return allStudents;
    } catch (e) {
        console.warn("Sync failed, using cached data.", e);
        return null;
    }
}

// Start auto-sync every 30 seconds
setInterval(syncData, 30000);

function unlockStudent (code, record) {
    const student = { ...record, code: code, unlockedAt: Date.now() }
    localStorage.setItem(KEY_MODE, 'student')
    localStorage.setItem(KEY_STUDENT, JSON.stringify(student))
    if (student.lang) localStorage.setItem('language', student.lang.toLowerCase());
    STATE = readState()
    applyMode()
    return { ok: true, student }
}

function unlockTeacher (code, record) {
    const teacher = { ...record, code: code, unlockedAt: Date.now() }
    localStorage.setItem(KEY_MODE, 'teacher')
    localStorage.setItem(KEY_TEACHER, JSON.stringify(teacher))
    STATE = readState()
    applyMode()
    return { ok: true, teacher }
}

function unlockAdmin (code, record) {
    const admin = { ...record, code: code, unlockedAt: Date.now() }
    localStorage.setItem(KEY_MODE, 'admin')
    localStorage.setItem(KEY_ADMIN, JSON.stringify(admin))
    // Admin defaults to English but can spoof
    localStorage.setItem('language', 'en');
    STATE = readState()
    applyMode()
    return { ok: true, admin }
}

function logout () {
    localStorage.removeItem(KEY_MODE)
    localStorage.removeItem(KEY_STUDENT)
    localStorage.removeItem(KEY_TEACHER)
    localStorage.removeItem(KEY_ADMIN)
    STATE = readState()
    applyMode()
    const prefix = getPrefix();
    if (window.location.pathname.includes('portal')) {
        window.location.href = prefix + 'index.html'
    } else {
        window.location.reload()
    }
}

/* ═══════════════════════════════════════════════════════════════
   4. NAV TEMPLATES
   ═══════════════════════════════════════════════════════════════ */
function isActive (href) {
    const cleanHref = href.split('?')[0].split('#')[0];
    const path = window.location.pathname;

    // Home page special case (root or index.html not in a subfolder)
    if (cleanHref === 'index.html' || cleanHref === './index.html') {
        const isSubfolder = /\/(portal|practice|games)\//.test(path);
        if (!isSubfolder && (path.endsWith('/') || path.endsWith('index.html'))) return 'class="active"';
    }

    // Sub-app matching (e.g. "practice/index.html" matches any path containing "/practice/")
    const parts = cleanHref.split('/');
    const folder = parts.find(p => p && p !== '..' && p !== '.');
    if (folder && folder !== 'index.html') {
        if (path.includes('/' + folder + '/')) return 'class="active"';
    }

    // Direct filename match
    const filename = parts[parts.length - 1];
    if (path.endsWith(filename) && path.includes(folder || '')) return 'class="active"';

    return '';
}

function navFree () {
    const p = getPrefix();
    return `
    <a class="nav-logo" href="${p}index.html">
      <img src="${p}images/cosylanguages.png" alt="COSYlanguages" onerror="this.style.display='none'">
      <span>COSYlanguages</span>
    </a>
    <ul class="nav-links">
      <li><a href="${p}index.html" ${isActive('index.html')}>Home</a></li>
      <li><a href="${p}practice/index.html" ${isActive('practice/index.html')}>Practice 💡</a></li>
      <li><a href="${p}games/index.html" ${isActive('games/index.html')}>Games 🎮</a></li>
      <li><a href="${p}portal/index.html" ${isActive('portal/index.html')}>My Lessons 🔐</a></li>
    </ul>
    <div class="nav-right">
      <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank">💬 Contact us</a>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
}

function navAdmin (admin) {
    const p = getPrefix();
    return `
    <a class="nav-logo" href="${p}portal/index.html">
      <div class="nav-avatar admin">👑</div>
      <div>
        <div class="nav-logo-name">${admin.name || 'Admin'}</div>
        <div class="nav-logo-sub">⚡ God Mode (Teacher)</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="${p}portal/index.html" ${isActive('portal/index.html')}>👥 Students</a></li>
      <li><a href="${p}portal/index.html?tab=assign" ${isActive('portal/index.html?tab=assign')}>📋 Assign</a></li>
      <li><a href="${p}portal/index.html?tab=curricula" ${isActive('portal/index.html?tab=curricula')}>📚 All Courses</a></li>
      <li><a href="${p}portal/index.html?tab=broadcast" ${isActive('portal/index.html?tab=broadcast')}>📣 Broadcast</a></li>
      <li><a href="${p}portal/index.html?tab=settings" ${isActive('portal/index.html?tab=settings')}>⚙️ System</a></li>
    </ul>
    <div class="nav-right">
      <select class="nav-mode-badge admin" onchange="COSY.spoofLanguage(this.value)" style="border:none; padding:5px 8px;">
          <option value="">🌍 Actual</option>
          <option value="EN">🇬🇧 EN</option>
          <option value="FR">🇫🇷 FR</option>
          <option value="IT">🇮🇹 IT</option>
          <option value="RU">🇷🇺 RU</option>
          <option value="EL">🇬🇷 EL</option>
      </select>
      <button class="nav-mode-badge admin" onclick="COSY.showModePanel()">⚡ Super Admin</button>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
}

function navStudent (student) {
    const p = getPrefix();
    const pts   = (STATE.practice.totalPts || 0);
    const streak = (STATE.practice.streak || 0);
    const flag = { EN:'🇬🇧', FR:'🇫🇷', IT:'🇮🇹', RU:'🇷🇺', EL:'🇬🇷' }[student.lang] || '🌍';
    return `
    <a class="nav-logo" href="${p}portal/index.html">
      <div class="nav-avatar">${student.nickname ? student.nickname[0].toUpperCase() : (student.name ? student.name[0].toUpperCase() : '🎓')}</div>
      <div>
        <div class="nav-logo-name">${student.nickname || student.name || 'Learner'}</div>
        <div class="nav-logo-sub">${flag} ${student.lang} · ${student.level}</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="${p}portal/index.html" ${isActive('portal/index.html')}>🗺️ Roadmap</a></li>
      <li><a href="${p}portal/index.html?tab=vocab" ${isActive('portal/index.html?tab=vocab')}>📓 Vocab</a></li>
      <li><a href="${p}portal/index.html?tab=homework" ${isActive('portal/index.html?tab=homework')}>📝 Homework</a></li>
      <li><a href="${p}practice/index.html" ${isActive('practice/index.html')}>💡 Practice</a></li>
      <li><a href="${p}games/index.html" ${isActive('games/index.html')}>🎮 Games</a></li>
    </ul>
    <div class="nav-right">
      <div class="nav-stat-pill nav-pts">✨ <span id="nav-pts">${Number(pts).toLocaleString()}</span> pts</div>
      <div class="nav-stat-pill nav-streak">🔥 <span id="nav-streak">${streak}</span>d</div>
      <button class="nav-mode-badge student" onclick="COSY.showModePanel()">🎓 Student</button>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
}

function navTeacher (teacher) {
    const p = getPrefix();
    return `
    <a class="nav-logo" href="${p}portal/index.html">
      <div class="nav-avatar teacher">👩‍🏫</div>
      <div>
        <div class="nav-logo-name">${teacher.name || 'Teacher'}</div>
        <div class="nav-logo-sub">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="${p}portal/index.html" ${isActive('portal/index.html')}>👥 Students</a></li>
      <li><a href="${p}portal/index.html?tab=assign" ${isActive('portal/index.html?tab=assign')}>📋 Assign</a></li>
      <li><a href="${p}portal/index.html?tab=progress" ${isActive('portal/index.html?tab=progress')}>📈 Progress</a></li>
      <li><a href="${p}portal/index.html?tab=broadcast" ${isActive('portal/index.html?tab=broadcast')}>📣 Broadcast</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-mode-badge teacher" onclick="COSY.showModePanel()">👩‍🏫 Teacher</button>
      <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>`
}

/* ═══════════════════════════════════════════════════════════════
   5. UI CORE (CSS & Templates)
   ═══════════════════════════════════════════════════════════════ */
const CSS = `
  #cosy-nav {
    background: #FFFEFB;
    border-bottom: 1px solid rgba(28,25,23,.10);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'DM Sans', sans-serif;
    gap: 1rem;
  }
  .nav-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; color: #1C1917;
    flex-shrink: 0;
  }
  .nav-logo img { height: 30px; }
  .nav-logo span {
    font-family: 'Fraunces', serif;
    font-weight: 600; font-size: 1.05rem;
  }
  .nav-avatar {
    width: 34px; height: 34px; border-radius: 50%;
    background: #E6F4F1;
    border: 2px solid #2D7D6F;
    display: flex; align-items: center; justify-content: center;
    font-size: .9rem; font-weight: 600;
    color: #2D7D6F;
    flex-shrink: 0;
  }
  .nav-avatar.teacher {
    background: #F2ECF7;
    border-color: #6B3F7C;
    font-size: 1rem;
  }
  .nav-avatar.admin {
    background: #FFFBEB;
    border-color: #D97706;
    font-size: 1rem;
  }
  .nav-logo-name { font-weight: 500; font-size: .88rem; line-height: 1.2; }
  .nav-logo-sub  { font-size: .68rem; color: #78716C; line-height: 1.2; }
  .nav-links {
    display: flex; align-items: center; gap: 3px;
    list-style: none; flex: 1; justify-content: center;
  }
  .nav-links a {
    text-decoration: none; color: #78716C;
    font-size: .82rem; padding: 6px 10px;
    border-radius: 8px;
    transition: background .15s, color .15s;
    white-space: nowrap;
  }
  .nav-links a:hover { background: rgba(28,25,23,.07); color: #1C1917; }
  .nav-links a.active { color: #1C1917; font-weight: 500; }
  .nav-right {
    display: flex; align-items: center; gap: 8px;
    flex-shrink: 0;
  }
  .nav-cta {
    background: #1C1917; color: #fff;
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
  .nav-mode-badge.admin { background: #FFFBEB; color: #D97706; border-color: rgba(217,119,6,0.25); }
  .nav-menu-btn {
    display: none; background: none; border: none;
    cursor: pointer; font-size: 1.3rem;
    color: #1C1917; padding: 4px;
  }

  /* MODE PANEL (slide-in) */
  #cosy-mode-panel {
    display: none; position: fixed; inset: 0;
    background: rgba(28,25,23,.45); z-index: 2000;
    align-items: flex-start; justify-content: flex-end;
  }
  #cosy-mode-panel.open { display: flex; }
  .mode-panel-inner {
    background: #FFFEFB;
    width: 320px; min-height: 100vh;
    padding: 1.5rem; box-shadow: -8px 0 32px rgba(28,25,23,.12);
    animation: slideIn .22s ease;
    overflow-y: auto;
    position: relative;
  }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
  .mp-close {
    position: absolute; top: 1rem; right: 1rem;
    background: none; border: none; font-size: 1.1rem;
    cursor: pointer; color: #78716C;
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
    letter-spacing: .07em; color: #A8A29E;
    margin-bottom: .5rem;
  }
  .mp-info-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: .84rem; padding: 6px 0;
    border-bottom: 1px solid rgba(28,25,23,.07);
  }
  .mp-info-row:last-child { border-bottom: none; }
  .mp-info-lbl { color: #78716C; }
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
  .mp-hint  { font-size: .72rem; color: #A8A29E; margin-top: 4px; }
  .mp-logout-btn {
    width: 100%; padding: 10px; border: 1px solid rgba(28,25,23,.12);
    border-radius: 100px; background: none; font-family: 'DM Sans', sans-serif;
    font-size: .84rem; color: #78716C;
    cursor: pointer; transition: all .15s; margin-top: .8rem;
    text-align: center;
  }
  .mp-logout-btn:hover { border-color: #C4522A; color: #C4522A; }

  /* MOBILE MENU */
  #cosy-mobile-menu {
    display: none; position: fixed;
    top: 62px; left: 0; right: 0; bottom: 0;
    background: #FFFEFB;
    z-index: 1500; padding: 1.2rem;
    flex-direction: column; gap: 5px;
    border-top: 1px solid rgba(28,25,23,.1);
    overflow-y: auto;
  }
  #cosy-mobile-menu.open { display: flex; }
  #cosy-mobile-menu a {
    text-decoration: none; color: #78716C;
    font-size: .95rem; padding: 10px 12px; border-radius: 12px;
    font-family: 'DM Sans', sans-serif; transition: background .15s;
  }
  #cosy-mobile-menu a:hover { background: rgba(28,25,23,.05); color: #1C1917; }
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
    position: sticky;
    top: 62px;
    z-index: 999;
  }
  #cosy-mode-bar.student { display: block; background: linear-gradient(90deg, #2E5FA3, #2D7D6F); }
  #cosy-mode-bar.teacher { display: block; background: linear-gradient(90deg, #6B3F7C, #C4522A); }
  #cosy-mode-bar.admin { display: block; background: linear-gradient(90deg, #D97706, #1C1917); }

  /* SECTION VISIBILITY */
  body.mode-free [data-mode]:not([data-mode*="free" i]) { display: none !important; }
  body.mode-student [data-mode]:not([data-mode*="student" i]) { display: none !important; }
  body.mode-teacher [data-mode]:not([data-mode*="teacher" i]):not([data-mode*="admin" i]) { display: none !important; }
  body.mode-admin [data-mode]:not([data-mode*="admin" i]):not([data-mode*="teacher" i]) { display: none !important; }

  @media (max-width: 800px) {
    #cosy-nav { padding: 0 1rem; }
    .nav-links { display: none !important; }
    .nav-menu-btn { display: block !important; }
    .nav-stat-pill { display: none; }
    .mode-panel-inner { width: 100vw; }
  }
`;

function applyMode () {
    const { mode, student, teacher, admin } = STATE;
    document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
    document.body.classList.add('mode-' + mode);

    const nav = document.getElementById('cosy-nav');
    if (nav) {
        if (mode === 'student') nav.innerHTML = navStudent(student);
        else if (mode === 'teacher') nav.innerHTML = navTeacher(teacher);
        else if (mode === 'admin') nav.innerHTML = navAdmin(admin);
        else nav.innerHTML = navFree();
    }

    const bar = document.getElementById('cosy-mode-bar');
    if (bar) bar.className = mode === 'free' ? '' : mode;

    const mm = document.getElementById('cosy-mobile-menu');
    if (mm) mm.innerHTML = mobileMenuHTML(mode, student, teacher, admin);

    const mp = document.getElementById('cosy-mode-panel-inner');
    if (mp) mp.innerHTML = modePanelHTML(mode, student, teacher, admin);

    document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));
}

function mobileMenuHTML (mode, student, teacher, admin) {
    const p = getPrefix();
    if (mode === 'student') {
      return `
        <a href="${p}portal/index.html">🗺️ My Roadmap</a>
        <a href="${p}portal/index.html?tab=vocab">📓 Vocabulary</a>
        <a href="${p}portal/index.html?tab=homework">📝 Homework</a>
        <div class="mm-divider"></div>
        <a href="${p}practice/index.html">💡 Practice</a>
        <a href="${p}games/index.html">🎮 Games</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A">Sign out</a>`
    }
    if (mode === 'teacher') {
      return `
        <a href="${p}portal/index.html">👥 Students</a>
        <a href="${p}portal/index.html?tab=assign">📋 Assign homework</a>
        <a href="${p}portal/index.html?tab=progress">📈 Progress</a>
        <a href="${p}portal/index.html?tab=broadcast">📣 Broadcast</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A">Sign out</a>`
    }
    if (mode === 'admin') {
      return `
        <a href="${p}portal/index.html">👥 Students</a>
        <a href="${p}portal/index.html?tab=curricula">📋 Curricula</a>
        <a href="${p}portal/index.html?tab=broadcast">📣 Broadcast</a>
        <a href="${p}portal/index.html?tab=settings">⚙️ Settings</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A">Sign out</a>`
    }
    return `
      <a href="${p}index.html">Home</a>
      <a href="${p}practice/index.html">💡 Practice</a>
      <a href="${p}games/index.html">🎮 Games</a>
      <a href="${p}portal/index.html">🔐 My Lessons</a>
      <div class="mm-divider"></div>
      <a href="https://wa.me/330766784195" target="_blank" class="mm-cta">💬 Contact us on WhatsApp</a>`
}

function modePanelHTML (mode, student, teacher, admin) {
    const langNames = { EN:'English 🇬🇧', FR:'Français 🇫🇷', IT:'Italiano 🇮🇹', RU:'Русский 🇷🇺', EL:'Ελληνικά 🇬🇷' }

    let currentSection = ''
    if (mode === 'student' && student) {
      const pts = STATE.practice.totalPts || 0
      const streak = STATE.practice.streak || 0
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Your profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Name</span><span class="mp-info-val">${student.nickname || student.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${student.code}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Language</span><span class="mp-info-val">${langNames[student.lang] || student.lang}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Level</span><span class="mp-info-val">${student.level}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Points</span><span class="mp-info-val">✨ ${Number(pts).toLocaleString()}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Streak</span><span class="mp-info-val">🔥 ${streak} days</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()">Sign out</button>`
    } else if (mode === 'teacher' && teacher) {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Teacher profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Name</span><span class="mp-info-val">${teacher.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Role</span><span class="mp-info-val">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${teacher.code}</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()">Sign out</button>`
    } else if (mode === 'admin' && admin) {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Admin profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Name</span><span class="mp-info-val">${admin.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Role</span><span class="mp-info-val">God Mode ⚡</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()">Sign out</button>`
    } else {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl">Current mode</div>
          <div class="mp-info-row"><span class="mp-info-lbl">Mode</span><span class="mp-info-val">🆓 Free visitor</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl">Account</span><span class="mp-info-val" style="color:#A8A29E">None</span></div>
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
          <button class="mp-unlock-btn" onclick="COSY._mpUnlockWrapper()">Unlock</button>
        </div>
        <div class="mp-error" id="mp-s-error">Invalid code.</div>
        <div class="mp-hint">Student code? Try <strong>COSY-DEMO</strong></div>
      </div>`
}

function inject () {
    if (!document.getElementById('cosy-mode-css')) {
        const s = document.createElement('style'); s.id = 'cosy-mode-css'; s.textContent = CSS; document.head.appendChild(s);
    }
    if (!document.getElementById('cosy-mode-bar')) {
        const b = document.createElement('div'); b.id = 'cosy-mode-bar';
        const n = document.getElementById('cosy-nav');
        if (n) n.parentNode.insertBefore(b, n.nextSibling); else document.body.prepend(b);
    }
    if (!document.getElementById('cosy-mobile-menu')) {
        const m = document.createElement('div'); m.id = 'cosy-mobile-menu'; document.body.appendChild(m);
    }
    if (!document.getElementById('cosy-mode-panel')) {
        const p = document.createElement('div'); p.id = 'cosy-mode-panel';
        p.onclick = (e) => { if(e.target === p) COSY.hideModePanel(); };
        p.innerHTML = `<div class="mode-panel-inner" id="cosy-mode-panel-inner"></div>`;
        document.body.appendChild(p);
    }
    applyMode();
}

/* ═══════════════════════════════════════════════════════════════
   6. PUBLIC API
   ═══════════════════════════════════════════════════════════════ */
let STATE = readState();

window.COSY = {
    get mode() { return STATE.mode },
    get student() { return STATE.student },
    get teacher() { return STATE.teacher },
    get admin() { return STATE.admin },
    get practice() { return STATE.practice },
    get notebook() { return STATE.notebook },
    isStudent() { return STATE.mode === 'student' },
    isTeacher() { return STATE.mode === 'teacher' || (STATE.mode === 'admin' && STATE.admin?.role === 'admin-teacher') },
    isAdmin() { return STATE.mode === 'admin' },
    getPrefix,
    spoofLanguage(lang) {
        if (!this.isAdmin()) return;
        if (lang) {
            STATE.admin.spoofedLang = lang;
            console.log("God Mode: Spoofing language to", lang);
        } else {
            delete STATE.admin.spoofedLang;
            console.log("God Mode: Reset to actual language");
        }
        this.refresh();
        if (window.cosyDays) window.location.reload(); // Reload dashboard to re-init
    },

    async unlock(code) {
        if (!code) return;
        code = code.trim().toUpperCase();

        if (code === 'ARTPOP195430') {
            return unlockAdmin(code, { name: 'James York, Damir Moskov', role: 'admin-teacher' });
        }

        // Free Access Code (FREE-LANG-LEVEL)
        if (code.startsWith('FREE-')) {
            const parts = code.split('-');
            const lang = parts[1] || 'EN';
            const level = parts[2] || 'A1';
            return unlockStudent(code, { nickname: 'Free Learner', lang, level, course: 'FREE', isFree: true, points: 0, currentDay: 1 });
        }

        const students = await syncData();
        if (students && students[code]) {
            return unlockStudent(code, students[code]);
        }
        // Teacher codes usually hardcoded for demo or in a separate file
        if (code === 'TEACH-DEMO') {
            return unlockTeacher(code, { name: 'Teacher Alex', role: 'teacher' });
        }
        if (code === 'TEACH-1234') {
            return unlockTeacher(code, { name: 'Sophie', role: 'admin' });
        }
        alert("Invalid Reality Code. Please check your spelling.");
        return { ok: false };
    },
    logout,
    sync: syncData,

    // Notebook system (Auto-updates)
    saveNote(lessonId, text) {
        STATE.notebook[lessonId] = { ...STATE.notebook[lessonId], notes: text, updatedAt: Date.now() };
        localStorage.setItem(KEY_NOTEBOOK, JSON.stringify(STATE.notebook));
        this.refresh();
    },
    addMistake(lessonId, wordObj) {
        const current = STATE.notebook[lessonId]?.mistakes || [];
        if (!current.some(m => m.word === wordObj.word)) {
            current.push({ ...wordObj, addedAt: Date.now() });
            STATE.notebook[lessonId] = { ...STATE.notebook[lessonId], mistakes: current };
            localStorage.setItem(KEY_NOTEBOOK, JSON.stringify(STATE.notebook));
            this.refresh();
        }
    },

    showModePanel () {
      const panel = document.getElementById('cosy-mode-panel')
      const inner = document.getElementById('cosy-mode-panel-inner')
      if (!panel || !inner) return
      inner.innerHTML = modePanelHTML(STATE.mode, STATE.student, STATE.teacher, STATE.admin)
      panel.classList.add('open')
      document.body.style.overflow = 'hidden'
    },
    hideModePanel () {
      const panel = document.getElementById('cosy-mode-panel')
      if (panel) panel.classList.remove('open')
      document.body.style.overflow = ''
    },
    toggleMobileMenu () {
      const mm = document.getElementById('cosy-mobile-menu')
      if (mm) mm.classList.toggle('open')
    },
    refresh: () => { STATE = readState(); applyMode(); },

    // Internal helper for the panel
    async _mpUnlockWrapper() {
        const input = document.getElementById('mp-s-code');
        const error = document.getElementById('mp-s-error');
        if (!input) return;
        const result = await this.unlock(input.value);
        if (result && result.ok) {
            this.hideModePanel();
            const p = getPrefix();
            window.location.href = p + 'portal/index.html';
        } else {
            input.classList.add('error');
            if (error) error.style.display = 'block';
            setTimeout(() => {
                input.classList.remove('error');
                if (error) error.style.display = 'none';
            }, 3000);
        }
    }
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject); else inject();
syncData(); // Initial background sync

})();
