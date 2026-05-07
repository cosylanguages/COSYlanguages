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
const KEY_PRACTICE = 'cosy_practice'
const KEY_NOTEBOOK = 'cosy_notebook' // { [lessonId]: { notes: '', mistakes: [] } }

/* ═══════════════════════════════════════════════════════════════
   2. STATE MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
function readState () {
    const mode = localStorage.getItem(KEY_MODE) || 'free'
    const student = tryParse(localStorage.getItem(KEY_STUDENT))
    const teacher = tryParse(localStorage.getItem(KEY_TEACHER))
    const practice = tryParse(localStorage.getItem(KEY_PRACTICE)) || { totalPts: 0, streak: 0, mistakes: [] }
    const notebook = tryParse(localStorage.getItem(KEY_NOTEBOOK)) || {}
    return { mode, student, teacher, practice, notebook }
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
        const allStudents = await res.json();

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

function logout () {
    localStorage.removeItem(KEY_MODE)
    localStorage.removeItem(KEY_STUDENT)
    localStorage.removeItem(KEY_TEACHER)
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
    const path = window.location.pathname;
    return path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('COSYlanguages/'))) ? 'class="active"' : ''
}

function navFree () {
    const p = getPrefix();
    return `
    <a class="nav-logo" href="${p}index.html">
        <img src="${p}images/cosylanguages.png" alt="COSYlanguages">
        <span>COSYlanguages</span>
    </a>
    <ul class="nav-links">
        <li><a href="${p}index.html" ${isActive('index.html')}>Home</a></li>
        <li><a href="${p}practice/index.html" ${isActive('practice/index.html')}>Practice 💡</a></li>
        <li><a href="${p}games/index.html" ${isActive('games/index.html')}>Games 🎮</a></li>
        <li><a href="${p}portal/index.html" ${isActive('portal.html')}>My Lessons 🔐</a></li>
    </ul>
    <div class="nav-right">
        <a class="nav-cta" href="https://wa.me/330766784195" target="_blank">💬 Contact</a>
        <button class="nav-menu-btn" onclick="COSY.toggleMobileMenu()">☰</button>
    </div>`
}

function navStudent (student) {
    const p = getPrefix();
    const pts = STATE.practice.totalPts || 0;
    const streak = STATE.practice.streak || 0;
    const flag = { EN:'🇬🇧', FR:'🇫🇷', IT:'🇮🇹', RU:'🇷🇺', EL:'🇬🇷' }[student.lang] || '🌍';
    return `
    <a class="nav-logo" href="${p}portal/index.html">
        <div class="nav-avatar">${student.nickname ? student.nickname[0] : (student.name ? student.name[0] : '🎓')}</div>
        <div>
            <div class="nav-logo-name">${student.nickname || student.name || 'Learner'}</div>
            <div class="nav-logo-sub">${flag} ${student.lang} · ${student.level}</div>
        </div>
    </a>
    <ul class="nav-links">
        <li><a href="${p}portal/index.html">🗺️ Roadmap</a></li>
        <li><a href="${p}portal/index.html?tab=vocab">📓 Vocab</a></li>
        <li><a href="${p}portal/index.html?tab=homework">📝 Homework</a></li>
        <li><a href="${p}practice/index.html">💡 Practice</a></li>
        <li><a href="${p}games/index.html">🎮 Games</a></li>
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
            <div class="nav-logo-sub">Teacher Panel</div>
        </div>
    </a>
    <ul class="nav-links">
        <li><a href="${p}portal/index.html">👥 Students</a></li>
        <li><a href="${p}portal/index.html?tab=assign">📋 Assign</a></li>
        <li><a href="${p}portal/index.html?tab=progress">📈 Progress</a></li>
        <li><a href="${p}portal/index.html?tab=broadcast">📣 Broadcast</a></li>
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
#cosy-nav { background: #FFFEFB; border-bottom: 1px solid rgba(28,25,23,.1); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 1000; font-family: 'DM Sans', sans-serif; }
.nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #1C1917; }
.nav-logo img { height: 32px; }
.nav-logo span { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.1rem; }
.nav-avatar { width: 36px; height: 36px; border-radius: 50%; background: #E6F4F1; border: 2px solid #2D7D6F; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2D7D6F; }
.nav-avatar.teacher { background: #F2ECF7; border-color: #6B3F7C; color: #6B3F7C; }
.nav-logo-name { font-weight: 500; font-size: .9rem; line-height: 1.2; }
.nav-logo-sub { font-size: .7rem; color: #78716C; line-height: 1.2; }
.nav-links { display: flex; list-style: none; gap: 5px; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: #78716C; font-size: .85rem; padding: 8px 12px; border-radius: 8px; transition: .2s; }
.nav-links a:hover, .nav-links a.active { background: rgba(28,25,23,.05); color: #1C1917; }
.nav-right { display: flex; align-items: center; gap: 10px; }
.nav-cta { background: #1C1917; color: #fff; border-radius: 100px; font-size: .85rem; font-weight: 500; padding: 8px 18px; text-decoration: none; }
.nav-stat-pill { border-radius: 100px; font-size: .8rem; font-weight: 600; padding: 4px 12px; border: 1px solid; }
.nav-pts { background: #FBF3E2; color: #B07D2B; border-color: rgba(176,125,43,.2); }
.nav-streak { background: #FAEEE8; color: #C4522A; border-color: rgba(196,82,42,.2); }
.nav-mode-badge { border-radius: 100px; font-size: .75rem; font-weight: 600; padding: 5px 14px; cursor: pointer; border: 1px solid; background: #fff; }
.nav-mode-badge.student { background: #E8EEF8; color: #2E5FA3; border-color: #2E5FA3; }
.nav-mode-badge.teacher { background: #F2ECF7; color: #6B3F7C; border-color: #6B3F7C; }
.nav-menu-btn { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }

#cosy-mode-bar { height: 3px; width: 100%; display: none; position: sticky; top: 64px; z-index: 999; }
#cosy-mode-bar.student { display: block; background: linear-gradient(90deg, #2E5FA3, #2D7D6F); }
#cosy-mode-bar.teacher { display: block; background: linear-gradient(90deg, #6B3F7C, #C4522A); }

#cosy-mode-panel { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.4); z-index: 2000; justify-content: flex-end; }
#cosy-mode-panel.open { display: flex; }
.mode-panel-inner { background: #fff; width: 340px; height: 100%; padding: 2rem; box-shadow: -5px 0 20px rgba(0,0,0,.1); animation: slideIn .3s ease; position: relative; overflow-y: auto; }
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
.mp-close { position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; }

#cosy-mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0; background: #fff; z-index: 1500; padding: 2rem; flex-direction: column; gap: 1rem; }
#cosy-mobile-menu.open { display: flex; }

body.mode-free [data-mode]:not([data-mode~="free"]) { display: none !important; }
body.mode-student [data-mode]:not([data-mode~="student"]) { display: none !important; }
body.mode-teacher [data-mode]:not([data-mode~="teacher"]) { display: none !important; }

@media (max-width: 800px) {
    .nav-links, .nav-cta, .nav-stat-pill { display: none !important; }
    .nav-menu-btn { display: block !important; }
}
`;

function applyMode () {
    const { mode, student, teacher } = STATE;
    document.body.className = document.body.className.replace(/mode-\w+/g, '').trim();
    document.body.classList.add('mode-' + mode);

    const nav = document.getElementById('cosy-nav');
    if (nav) {
        if (mode === 'student') nav.innerHTML = navStudent(student);
        else if (mode === 'teacher') nav.innerHTML = navTeacher(teacher);
        else nav.innerHTML = navFree();
    }

    const bar = document.getElementById('cosy-mode-bar');
    if (bar) bar.className = mode === 'free' ? '' : mode;

    const mm = document.getElementById('cosy-mobile-menu');
    if (mm) mm.innerHTML = mobileMenuHTML(mode, student, teacher);

    const mp = document.getElementById('cosy-mode-panel-inner');
    if (mp) mp.innerHTML = modePanelHTML(mode, student, teacher);

    document.dispatchEvent(new CustomEvent('cosyModeChanged', { detail: STATE }));
}

function mobileMenuHTML(mode, student, teacher) {
    const p = getPrefix();
    let links = '';
    if (mode === 'student') {
        links = `<a href="${p}portal/index.html">🗺️ Roadmap</a><a href="${p}portal/index.html?tab=homework">📝 Homework</a>`;
    } else if (mode === 'teacher') {
        links = `<a href="${p}portal/index.html">👥 Students</a><a href="${p}portal/index.html?tab=assign">📋 Assign</a>`;
    } else {
        links = `<a href="${p}index.html">Home</a><a href="${p}practice/index.html">💡 Practice</a>`;
    }
    return links + `<a href="${p}games/index.html">🎮 Games</a><a href="#" onclick="COSY.logout()">🚪 Logout</a>`;
}

function modePanelHTML(mode, student, teacher) {
    return `
        <button class="mp-close" onclick="COSY.hideModePanel()">✕</button>
        <h3 style="font-family: Fraunces, serif; margin-bottom: 1.5rem;">My Account</h3>
        <div style="margin-bottom: 2rem; background: #F9F8F6; padding: 1rem; border-radius: 12px; border: 1px solid #EEE;">
            ${mode === 'free' ? '<p style="margin:0; font-size:.9rem; color:#666;">You are currently browsing as a visitor.</p>' : `
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:1rem;">
                    <div class="nav-avatar ${mode === 'teacher' ? 'teacher' : ''}" style="width:48px; height:48px; font-size:1.2rem;">${student?.nickname ? student.nickname[0] : (student?.name ? student.name[0] : (teacher?.name ? teacher.name[0] : '👤'))}</div>
                    <div>
                        <div style="font-weight:600; font-size:1rem;">${student?.nickname || student?.name || teacher?.name || 'Learner'}</div>
                        <div style="font-size:.75rem; color:#78716C;">${mode.toUpperCase()} MODE</div>
                    </div>
                </div>
                <div style="font-size:.85rem; color:#444;">
                    <p style="margin:4px 0;"><strong>Access Code:</strong> <code style="background:#EEE; padding:2px 6px; border-radius:4px;">${student?.code || teacher?.code}</code></p>
                    ${student ? `<p style="margin:4px 0;"><strong>Language:</strong> ${student.lang}</p><p style="margin:4px 0;"><strong>Level:</strong> ${student.level}</p>` : ''}
                </div>
            `}
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="font-size:.7rem; font-weight:700; text-transform:uppercase; color:#AAA; margin-bottom:-4px;">Switch or Unlock</div>
            <input type="text" id="unlock-code" placeholder="Enter Access Code" style="padding: 12px; border: 1px solid #DDD; border-radius: 10px; font-family: inherit; font-size: .9rem;">
            <button onclick="COSY.unlock(document.getElementById('unlock-code').value)" style="padding: 12px; background: #1C1917; color: #fff; border: none; border-radius: 10px; cursor: pointer; font-weight:600; font-size:.9rem;">Unlock Reality 🚀</button>
            ${mode !== 'free' ? `<button onclick="COSY.logout()" style="padding: 12px; background: #FFF; color: #C4522A; border: 1px solid #C4522A; border-radius: 100px; cursor: pointer; font-weight:600; font-size:.85rem; margin-top:10px;">Sign Out 🚪</button>` : ''}
        </div>
        <div style="margin-top: 3rem; font-size: .75rem; color: #AAA; text-align: center;">
            Student? Try <strong>COSY-DEMO</strong><br>
            Teacher? Try <strong>TEACH-DEMO</strong>
        </div>
    `;
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
    get practice() { return STATE.practice },
    get notebook() { return STATE.notebook },
    isStudent() { return STATE.mode === 'student' },
    isTeacher() { return STATE.mode === 'teacher' },

    async unlock(code) {
        if (!code) return;
        code = code.trim().toUpperCase();
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

    showModePanel: () => { document.getElementById('cosy-mode-panel').classList.add('open'); },
    hideModePanel: () => { document.getElementById('cosy-mode-panel').classList.remove('open'); },
    toggleMobileMenu: () => { document.getElementById('cosy-mobile-menu').classList.toggle('open'); },
    refresh: () => { STATE = readState(); applyMode(); }
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject); else inject();
syncData(); // Initial background sync

})();
