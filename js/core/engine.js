// App bootstrap: initialises global state, user role detection, and app startup sequence.
/**
 * js/core/engine.js
 * App bootstrap, global state management, and user role detection (Free, Student, Teacher, Admin).
 */
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

const BASE_URL = window.location.pathname.includes('/COSYlanguages/') ? '/COSYlanguages/' : '/';

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
    return BASE_URL;
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
    if (student.lang) localStorage.setItem('cosy_user_lang', student.lang.toLowerCase());
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
    localStorage.setItem('cosy_user_lang', 'en');
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
        // Special case for portal: it can be /portal/index.html or /portal/student/index.html
        if (folder === 'portal' && (path.includes('/portal/') || path.includes('/portal/index.html'))) {
             return 'class="active"';
        }
        if (path.includes('/' + folder + '/')) return 'class="active"';
    }

    // Direct filename match
    const filename = parts[parts.length - 1];
    if (path.endsWith(filename) && path.includes(folder || '')) return 'class="active"';

    return '';
}

function updateNavActiveState() {
    const navLinks = document.querySelectorAll('nav a, #cosy-nav a, #main-nav a, .mobile-nav a');
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(p => p);
    const currentFilename = pathParts[pathParts.length - 1] || 'index.html';
    const currentHash = currentUrl.hash;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

        link.classList.remove('active');

        // Resolve relative href to absolute path for comparison
        try {
            const linkUrl = new URL(href, window.location.origin + window.location.pathname);
            const linkPathParts = linkUrl.pathname.split('/').filter(p => p);
            const linkFilename = linkPathParts[linkPathParts.length - 1] || 'index.html';
            const linkHash = linkUrl.hash;

            // Simple match: filename + hash
            if (linkFilename === currentFilename) {
                if (linkHash) {
                    if (linkHash === currentHash) link.classList.add('active');
                } else if (!currentHash) {
                    link.classList.add('active');
                }
            }

            // Subfolder match for core sections
            const coreFolders = ['practice', 'games', 'portal', 'events'];
            coreFolders.forEach(folder => {
                if (pathParts.includes(folder) && linkPathParts.includes(folder)) {
                    link.classList.add('active');
                }
            });

        } catch (e) {}
    });
}

const NAV_FALLBACKS = {
    ba: { home: 'Баш бит', practice: 'Практика', games: 'Уйындар', events: 'Чаралар', portal: 'Дәрестәрем', contact: 'Бәйләнеш' },
    tt: { home: 'Төп бит', practice: 'Практика', games: 'Уеннар', events: 'Чаралар', portal: 'Дәресләрем', contact: 'Бәйләнеш' },
    ru: { home: 'Главная', practice: 'Практика', games: 'Игры', events: 'Мероприятия', portal: 'Портал', contact: 'Связь' }
};

function getNavLabel(key, fallback) {
    const cleanKey = key.replace(/^nav\./, '');
    if (window.t) {
        const val = window.t('nav.' + cleanKey) || window.t(cleanKey);
        if (val) return val;
    }
    const lang = (document.documentElement.lang || 'en').toLowerCase();
    if (NAV_FALLBACKS[lang] && NAV_FALLBACKS[lang][cleanKey]) return NAV_FALLBACKS[lang][cleanKey];
    return fallback;
}

function navFree () {
    const p = getPrefix();
    const t = getNavLabel;
    return `
      <a class="nav-logo" href="${p}index.html" aria-label="${t('home_aria', 'COSYlanguages Home')}">
        <img src="${p}images/logos/cosylanguages.png" alt="" role="presentation" onerror="this.style.display='none'">
        <span>COSYlanguages</span>
      </a>
      <ul class="nav-links" role="menubar">
        <li role="none"><a href="${p}index.html" ${isActive('index.html')} data-translate-key="nav.home" role="menuitem">${t('home', 'Home')}</a></li>
        <li role="none"><a href="${p}practice/index.html" ${isActive('practice/index.html')} data-translate-key="nav.practice" role="menuitem">${t('practice', 'Practice')} 💡</a></li>
        <li role="none"><a href="${p}games/index.html" ${isActive('games/index.html')} data-translate-key="nav.games" role="menuitem">${t('games', 'Games')} 🎮</a></li>
        <li role="none"><a href="${p}events/index.html" ${isActive('events/index.html')} data-translate-key="nav_events" role="menuitem">${t('events', 'Events')} 🎉</a></li>
        <li role="none"><a href="${p}portal/index.html" ${isActive('portal/index.html')} data-translate-key="nav.portal" role="menuitem">${t('portal', 'My Lessons')} 🔐</a></li>
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right">
        <a class="nav-cta" href="https://wa.me/330766784195?text=Hi!" target="_blank" data-translate-key="nav_contact">${t('contact', '💬 Contact us')}</a>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false">☰</button>
      </div>`
}

function navAdmin (admin) {
    const p = getPrefix();
    const t = getNavLabel;
    return `
      <a class="nav-logo" href="${p}portal/index.html">
        <div class="nav-avatar admin">👑</div>
        <div>
          <div class="nav-logo-name">${admin.name || 'Admin'}</div>
          <div class="nav-logo-sub" data-translate-key="role_admin">${t('role_admin', '⚡ God Mode (Teacher)')}</div>
        </div>
      </a>
      <ul class="nav-links" role="menubar">
        <li role="none"><a href="${p}portal/index.html" ${isActive('portal/index.html')} data-translate-key="nav_students" role="menuitem">👥 ${t('nav_students', 'Students')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=assign" ${isActive('portal/index.html?tab=assign')} data-translate-key="nav_assign" role="menuitem">📋 ${t('nav_assign', 'Assign')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=curricula" ${isActive('portal/index.html?tab=curricula')} data-translate-key="nav_courses" role="menuitem">📚 ${t('nav_courses', 'All Courses')}</a></li>
        <li role="none"><a href="${p}events/index.html" ${isActive('events/index.html')} data-translate-key="nav_events" role="menuitem">🎉 ${t('nav_events', 'Events')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=broadcast" ${isActive('portal/index.html?tab=broadcast')} data-translate-key="nav_broadcast" role="menuitem">📣 ${t('nav_broadcast', 'Broadcast')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=settings" ${isActive('portal/index.html?tab=settings')} data-translate-key="nav_system" role="menuitem">⚙️ ${t('nav_system', 'System')}</a></li>
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right">
        <select class="nav-mode-badge admin" onchange="COSY.spoofLanguage(this.value)" style="border:none; padding:5px 8px;" aria-label="Spoof Language">
            <option value="">🌍 Actual</option>
            <option value="EN">🇬🇧 EN</option>
            <option value="FR">🇫🇷 FR</option>
            <option value="IT">🇮🇹 IT</option>
            <option value="RU">🇷🇺 RU</option>
            <option value="EL">🇬🇷 EL</option>
        </select>
        <button class="nav-mode-badge admin" onclick="COSY.showModePanel()" data-translate-key="btn_super_admin">${t('btn_super_admin', '⚡ Super Admin')}</button>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false">☰</button>
      </div>`
}

function navStudent (student) {
    const p = getPrefix();
    const t = getNavLabel;
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
      <ul class="nav-links" role="menubar">
        <li role="none"><a href="${p}portal/index.html" ${isActive('portal/index.html')} data-translate-key="nav_roadmap" role="menuitem">🗺️ ${t('nav_roadmap', 'Roadmap')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=vocab" ${isActive('portal/index.html?tab=vocab')} data-translate-key="nav_vocab" role="menuitem">📓 ${t('nav_vocab', 'Vocab')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=homework" ${isActive('portal/index.html?tab=homework')} data-translate-key="nav_homework" role="menuitem">📝 ${t('nav_homework', 'Homework')}</a></li>
        <li role="none"><a href="${p}practice/index.html" ${isActive('practice/index.html')} data-translate-key="nav.practice" role="menuitem">💡 ${t('practice', 'Practice')}</a></li>
        <li role="none"><a href="${p}games/index.html" ${isActive('games/index.html')} data-translate-key="nav.games" role="menuitem">🎮 ${t('games', 'Games')}</a></li>
        <li role="none"><a href="${p}events/index.html" ${isActive('events/index.html')} data-translate-key="nav_events" role="menuitem">🎉 ${t('nav_events', 'Events')}</a></li>
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right">
        <div class="nav-stat-pill nav-pts">✨ <span id="nav-pts">${Number(pts).toLocaleString()}</span> pts</div>
        <div class="nav-stat-pill nav-streak">🔥 <span id="nav-streak">${streak}</span>d</div>
        <button class="nav-mode-badge student" onclick="COSY.showModePanel()" data-translate-key="role_student">${t('role_student', '🎓 Student')}</button>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false">☰</button>
      </div>`
}

function navTeacher (teacher) {
    const p = getPrefix();
    const t = getNavLabel;
    return `
      <a class="nav-logo" href="${p}portal/index.html">
        <div class="nav-avatar teacher">👩‍🏫</div>
        <div>
          <div class="nav-logo-name">${teacher.name || 'Teacher'}</div>
          <div class="nav-logo-sub">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</div>
        </div>
      </a>
      <ul class="nav-links" role="menubar">
        <li role="none"><a href="${p}portal/index.html" ${isActive('portal/index.html')} data-translate-key="nav_students" role="menuitem">👥 ${t('nav_students', 'Students')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=assign" ${isActive('portal/index.html?tab=assign')} data-translate-key="nav_assign" role="menuitem">📋 ${t('nav_assign', 'Assign')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=progress" ${isActive('portal/index.html?tab=progress')} data-translate-key="nav_progress" role="menuitem">📈 ${t('nav_progress', 'Progress')}</a></li>
        <li role="none"><a href="${p}events/index.html" ${isActive('events/index.html')} data-translate-key="nav_events" role="menuitem">🎉 ${t('nav_events', 'Events')}</a></li>
        <li role="none"><a href="${p}portal/index.html?tab=broadcast" ${isActive('portal/index.html?tab=broadcast')} data-translate-key="nav_broadcast" role="menuitem">📣 ${t('nav_broadcast', 'Broadcast')}</a></li>
      </ul>
      <div id="cosy-nav-context" class="nav-context"></div>
      <div class="nav-right">
        <button class="nav-mode-badge teacher" onclick="COSY.showModePanel()" data-translate-key="role_teacher">${t('role_teacher', '👩‍🏫 Teacher')}</button>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()" aria-label="Toggle Menu" aria-expanded="false">☰</button>
      </div>`
}

/* ═══════════════════════════════════════════════════════════════
   5. UI CORE (Templates)
   ═══════════════════════════════════════════════════════════════ */

function applyMode () {
    const { mode, student, teacher, admin } = STATE;
    document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
    document.body.classList.add('mode-' + mode);

    const nav = document.getElementById('cosy-nav');
    if (nav) {
        nav.className = 'nav-container';
        const t = getNavLabel;
        if (mode === 'student') {
            nav.setAttribute('aria-label', t('student_aria', 'Student Navigation'));
            nav.innerHTML = navStudent(student);
        } else if (mode === 'teacher') {
            nav.setAttribute('aria-label', t('teacher_aria', 'Teacher Navigation'));
            nav.innerHTML = navTeacher(teacher);
        } else if (mode === 'admin') {
            nav.setAttribute('aria-label', t('admin_aria', 'Admin Navigation'));
            nav.innerHTML = navAdmin(admin);
        } else {
            nav.setAttribute('aria-label', t('main_aria', 'Main Navigation'));
            nav.innerHTML = navFree();
        }

        // Restore context if any
        if (COSY._navContext) {
            const ctx = document.getElementById('cosy-nav-context');
            if (ctx) ctx.innerHTML = COSY._navContext;
        }
    }

    const bar = document.getElementById('cosy-mode-bar');
    if (bar) bar.className = mode === 'free' ? '' : mode;

    const mm = document.getElementById('cosy-mobile-menu');
    if (mm) mm.innerHTML = mobileMenuHTML(mode, student, teacher, admin);

    const mp = document.getElementById('cosy-mode-panel-inner');
    if (mp) mp.innerHTML = modePanelHTML(mode, student, teacher, admin);

    document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));

    // Re-apply translations if i18n is available
    if (window.COSY_I18N && typeof window.COSY_I18N.refresh === 'function') {
        window.COSY_I18N.refresh();
    }
}

function mobileMenuHTML (mode, student, teacher, admin) {
    const p = getPrefix();
    if (mode === 'student') {
      return `
        <a href="${p}portal/index.html" data-translate-key="nav_roadmap">🗺️ My Roadmap</a>
        <a href="${p}portal/index.html?tab=vocab" data-translate-key="nav_vocab">📓 Vocabulary</a>
        <a href="${p}portal/index.html?tab=homework" data-translate-key="nav_homework">📝 Homework</a>
        <div class="mm-divider"></div>
        <a href="${p}practice/index.html" data-translate-key="nav.practice">💡 Practice</a>
        <a href="${p}games/index.html" data-translate-key="nav.games">🎮 Games</a>
        <a href="${p}events/index.html" data-translate-key="nav_events">🎉 Events</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A" data-translate-key="nav_sign_out">Sign out</a>`
    }
    if (mode === 'teacher') {
      return `
        <a href="${p}portal/index.html" data-translate-key="nav_students">👥 Students</a>
        <a href="${p}portal/index.html?tab=assign" data-translate-key="nav_assign">📋 Assign homework</a>
        <a href="${p}portal/index.html?tab=progress" data-translate-key="nav_progress">📈 Progress</a>
        <a href="${p}events/index.html" data-translate-key="nav_events">🎉 Events</a>
        <a href="${p}portal/index.html?tab=broadcast" data-translate-key="nav_broadcast">📣 Broadcast</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A" data-translate-key="nav_sign_out">Sign out</a>`
    }
    if (mode === 'admin') {
      return `
        <a href="${p}portal/index.html" data-translate-key="nav_students">👥 Students</a>
        <a href="${p}portal/index.html?tab=curricula" data-translate-key="nav_courses">📋 Curricula</a>
        <a href="${p}events/index.html" data-translate-key="nav_events">🎉 Events</a>
        <a href="${p}portal/index.html?tab=broadcast" data-translate-key="nav_broadcast">📣 Broadcast</a>
        <a href="${p}portal/index.html?tab=settings" data-translate-key="nav_system">⚙️ Settings</a>
        <div class="mm-divider"></div>
        <a href="#" onclick="COSY.logout();return false" style="color:#C4522A" data-translate-key="nav_sign_out">Sign out</a>`
    }
    return `
      <a href="${p}index.html" data-translate-key="nav.home">Home</a>
      <a href="${p}practice/index.html" data-translate-key="nav.practice">💡 Practice</a>
      <a href="${p}games/index.html" data-translate-key="nav.games">🎮 Games</a>
      <a href="${p}events/index.html" data-translate-key="nav_events">🎉 Events</a>
      <a href="${p}portal/index.html" data-translate-key="nav.portal">🔐 My Lessons</a>
      <div class="mm-divider"></div>
      <a href="https://wa.me/330766784195" target="_blank" class="mm-cta" data-translate-key="nav_contact">💬 Contact us on WhatsApp</a>`
}

function modePanelHTML (mode, student, teacher, admin) {
    const langNames = { EN:'English 🇬🇧', FR:'Français 🇫🇷', IT:'Italiano 🇮🇹', RU:'Русский 🇷🇺', EL:'Ελληνικά 🇬🇷' }

    let currentSection = ''
    if (mode === 'student' && student) {
      const pts = STATE.practice.totalPts || 0
      const streak = STATE.practice.streak || 0
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl" data-translate-key="mp_profile_label">Your profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_name">Name</span><span class="mp-info-val">${student.nickname || student.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_code">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${student.code}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_lang">Language</span><span class="mp-info-val">${langNames[student.lang] || student.lang}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_level">Level</span><span class="mp-info-val">${student.level}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_points">Points</span><span class="mp-info-val">✨ ${Number(pts).toLocaleString()}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_streak">Streak</span><span class="mp-info-val">🔥 ${streak} days</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()" data-translate-key="nav_sign_out">Sign out</button>`
    } else if (mode === 'teacher' && teacher) {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl" data-translate-key="mp_teacher_profile_label">Teacher profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_name">Name</span><span class="mp-info-val">${teacher.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_role">Role</span><span class="mp-info-val">${teacher.role === 'admin' ? '⚙️ Admin' : '👩‍🏫 Teacher'}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_code">Code</span><span class="mp-info-val" style="font-family:monospace;font-size:.8rem">${teacher.code}</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()" data-translate-key="nav_sign_out">Sign out</button>`
    } else if (mode === 'admin' && admin) {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl" data-translate-key="mp_admin_profile_label">Admin profile</div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_name">Name</span><span class="mp-info-val">${admin.name}</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_role">Role</span><span class="mp-info-val">God Mode ⚡</span></div>
        </div>
        <button class="mp-logout-btn" onclick="COSY.logout()" data-translate-key="nav_sign_out">Sign out</button>`
    } else {
      currentSection = `
        <div class="mp-section">
          <div class="mp-section-lbl" data-translate-key="mp_current_mode_label">Current mode</div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_mode">Mode</span><span class="mp-info-val" data-translate-key="role_free">🆓 Free visitor</span></div>
          <div class="mp-info-row"><span class="mp-info-lbl" data-translate-key="mp_lbl_account">Account</span><span class="mp-info-val" style="color:#A8A29E" data-translate-key="none">None</span></div>
        </div>`
    }

    return `
      <button class="mp-close" onclick="COSY.hideModePanel()">✕</button>
      <div class="mp-title" data-translate-key="mp_title">Your account</div>
      ${currentSection}
      <div class="mp-switch-section">
        <div class="mp-section-lbl" style="margin-bottom:.6rem" data-translate-key="mp_switch_label">${mode === 'free' ? 'Enter your code to unlock' : 'Switch account'}</div>
        <div class="mp-code-row">
          <input class="mp-code-input" id="mp-s-code" placeholder="COSY-XXXX" maxlength="12" oninput="this.value=this.value.toUpperCase()">
          <button class="mp-unlock-btn" onclick="COSY._mpUnlockWrapper()" data-translate-key="actions.start">Unlock</button>
        </div>
        <div class="mp-error" id="mp-s-error" data-translate-key="mp_error_invalid">Invalid code.</div>
        <div class="mp-hint" data-translate-key="mp_hint_demo">Student code? Try <strong>COSY-DEMO</strong></div>
      </div>`
}

/* ─── DICTIONARY ────────────────────────────────────────────────
   Persistence: uses localStorage['cosy_dict_...'] per user
─────────────────────────────────────────────────────────────────  */
let dictionary = {}; // { word: { definition, example, synonyms, antonyms, addedAt } }

function getDictKey() {
  const mode = STATE.mode || 'free';
  const user = STATE.student?.code || STATE.teacher?.code || 'guest';
  return `cosy_dict_${mode}_${user}`;
}

function loadDict() {
  const key = getDictKey();
  const saved = localStorage.getItem(key);
  dictionary = saved ? JSON.parse(saved) : {};

  // Data Migration
  let migrated = false;

  // 1. Migrate legacy string-based dictionary entries
  Object.entries(dictionary).forEach(([word, data]) => {
    if (typeof data === 'string') {
      dictionary[word] = {
        word: word,
        definition: data,
        addedAt: Date.now()
      };
      migrated = true;
    }
  });

  // 2. Migrate legacy 'cosy_notebook_lang' entries if student mode
  const mode = STATE.mode || 'free';
  const lang = localStorage.getItem('cosy_user_lang') || 'en';
  if (mode === 'student') {
    const notebookKey = `cosy_notebook_${lang.toLowerCase()}`;
    const notebookSaved = localStorage.getItem(notebookKey);
    if (notebookSaved) {
      try {
        const words = JSON.parse(notebookSaved);
        if (Array.isArray(words)) {
          words.forEach(w => {
            if (!dictionary[w]) {
              dictionary[w] = { word: w, definition: '', addedAt: Date.now() };
              migrated = true;
            }
          });
          // After migration, we can clear or keep it. Let's keep it but mark as migrated?
          // For now, we just ensure they are in the dictionary.
        }
      } catch (e) {}
    }
  }

  if (migrated) saveDict();

  refreshDictUI();
  refreshVocabButtons();
}

function saveDict() {
  const key = getDictKey();
  localStorage.setItem(key, JSON.stringify(dictionary));
}

function refreshDictUI() {
  const count = Object.keys(dictionary).length;
  const countEl = document.getElementById('dict-count');
  if (countEl) countEl.textContent = count;

  const body = document.getElementById('dict-body');
  const empty = document.getElementById('dict-empty-msg');
  if (!body) return;

  body.querySelectorAll('.dict-entry').forEach(e => e.remove());
  if (count === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  Object.entries(dictionary).forEach(([word, data]) => {
    const el = document.createElement('div');
    el.className = 'dict-entry';
    const def = typeof data === 'string' ? data : (data.definition || '');
    el.innerHTML = `<div><div class="dict-entry-word">${word}</div><div class="dict-entry-def">${def}</div></div><button class="dict-remove" onclick="COSY.removeFromDict('${word.replace(/'/g,"\\'")}')">✕</button>`;
    body.appendChild(el);
  });
}

function refreshVocabButtons() {
  document.querySelectorAll('.vocab-add-btn, .btn-add-dict').forEach(btn => {
    const oc = btn.getAttribute('onclick') || '';
    const wordMatch = oc.match(/addToDict\(['"]([^'"]+)['"]/);
    const word = wordMatch ? wordMatch[1] : null;

    if (word && dictionary[word]) {
      btn.textContent = '✓ Saved';
      btn.classList.add('saved');
    } else {
      btn.classList.remove('saved');
      if (word && !dictionary[word]) btn.textContent = '+ Dictionary';
    }
  });
}

function injectStyles() {
    const p = getPrefix();
    if (!document.querySelector(`link[href*="css/components.css"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = p + 'css/components.css';
        document.head.appendChild(link);
    }
}

function inject () {
    injectStyles();
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
    loadDict();
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
    get dictionary() { return dictionary },
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

        const students = await syncData();
        if (students && students[code]) {
            return unlockStudent(code, students[code]);
        }

        // Fallback: Check if it's a known course code from curriculum_data.js (for legacy/test compatibility)
        if (typeof COURSES !== 'undefined' && COURSES[code]) {
            return unlockStudent(code, COURSES[code]);
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
      // Refresh translations for the panel
      if (window.COSY_I18N && typeof window.COSY_I18N.refresh === 'function') {
        window.COSY_I18N.refresh();
      }
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
    setFreeMode(lang, level) {
        localStorage.setItem(KEY_MODE, 'student');
        localStorage.setItem(KEY_STUDENT, JSON.stringify({
            nickname: 'Free Learner',
            lang: lang.toUpperCase(),
            level: level.toUpperCase(),
            course: 'FREE',
            isFree: true,
            points: 0,
            currentDay: 0
        }));
        localStorage.setItem('cosy_user_lang', lang.toLowerCase());
        STATE = readState();
        applyMode();
        return { ok: true };
    },

    // Dictionary
    addToDict(wordData, maybeDef, btnEl) {
        if (STATE.mode === 'free') {
            this.showModePanel();
            return;
        }

        let word, data;
        let btn = btnEl;

        if (typeof wordData === 'string') {
            word = wordData;
            // Handle legacy signature: addToDict(word, def, btn)
            data = {
                word: word,
                definition: typeof maybeDef === 'string' ? maybeDef : '',
                addedAt: Date.now()
            };
            if (maybeDef instanceof HTMLElement) btn = maybeDef;
        } else if (wordData && typeof wordData === 'object') {
            // Handle object signature: addToDict(wordObj, btn)
            word = wordData.word || wordData.text;
            data = {
                word: word,
                definition: wordData.definition || wordData.definitions?.[0]?.text || '',
                example: wordData.example || wordData.definitions?.[0]?.examples?.[0] || '',
                synonyms: wordData.synonyms || [],
                antonyms: wordData.antonyms || [],
                lang: wordData.lang || localStorage.getItem('cosy_user_lang') || 'en',
                level: wordData.level,
                addedAt: Date.now()
            };
            if (maybeDef instanceof HTMLElement) btn = maybeDef;
        }

        if (!word) return;

        if (dictionary[word]) {
            if (btn && btn instanceof HTMLElement) {
                btn.textContent = '✓ Saved';
                btn.classList.add('saved');
            }
            return;
        }

        dictionary[word] = data;
        saveDict();

        if (btn && btn instanceof HTMLElement) {
            btn.textContent = '✓ Saved';
            btn.classList.add('saved');
        }
        refreshDictUI();
    },
    removeFromDict(word) {
        delete dictionary[word];
        saveDict();
        refreshDictUI();
        refreshVocabButtons();
    },
    exportDict() {
        const lines = Object.entries(dictionary).map(([w,d]) => `${w} — ${d}`).join('\n');
        const blob = new Blob(['MY COSY DICTIONARY\n\n' + lines], {type:'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'cosy-dictionary.txt';
        a.click();
    },

    refresh: () => { STATE = readState(); applyMode(); },
    setNavContext(html) {
        const ctx = document.getElementById('cosy-nav-context');
        if (ctx) ctx.innerHTML = html;
        this._navContext = html; // Persist across refreshes in current session
    },
    updateNavActiveState,

    registerSW() {
        if ('serviceWorker' in navigator) {
            const p = getPrefix();
            navigator.serviceWorker.register(p + 'sw.js').catch(e => console.log('SW:', e));
        }
    },

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        inject();
        COSY.registerSW();
        updateNavActiveState();
    });
} else {
    inject();
    COSY.registerSW();
    updateNavActiveState();
}
window.addEventListener('hashchange', updateNavActiveState);
window.addEventListener('popstate', updateNavActiveState);

syncData(); // Initial background sync

})();
