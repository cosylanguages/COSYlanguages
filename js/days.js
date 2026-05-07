/**
 * COSYlanguages — days.js
 * Sophisticated Dashboard Logic
 */

(function() {
    let currentCourse = null;
    let curriculum = [];
    const TEACHER_PIN = '2025';

    // ── Initialization ──────────────────────────────────

    document.addEventListener('DOMContentLoaded', () => {
        // Wait for COSY mode detection
        setTimeout(() => {
            const mode = window.COSY?.currentMode;
            const code = localStorage.getItem('cosy_user_code');

            if (mode && mode !== 'FREE' && code) {
                initDashboard(code, mode);
            } else {
                document.getElementById('gate').style.display = 'flex';
                document.getElementById('area').style.display = 'none';
            }
        }, 50);
    });

    async function initDashboard(code, mode) {
        document.getElementById('gate').style.display = 'none';
        document.getElementById('area').style.display = 'flex';

        if (mode === 'TEACHER') {
            // Activate teacher panel and nav
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.getElementById('panel-teacher').classList.add('active');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const teacherNav = document.querySelector('.nav-item[data-mode="TEACHER"]');
            if (teacherNav) teacherNav.classList.add('active');

            renderTeacherDashboard();
            return;
        }

        // Student Init
        if (typeof COURSES !== 'undefined' && COURSES[code]) {
            currentCourse = { ...COURSES[code], code };
        } else {
            const parts = code.split('-');
            currentCourse = { lang: parts[1] || 'en', level: parts[2] || 'A1', type: parts[3] || 'GEN', code };
        }

        const courseName = document.getElementById('tb-course-name');
        if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type}`;

        await loadStudentData(code);
        await loadCurriculum();
        updateStats();
        updatePrepCard();
        renderRoadmap();
        renderList();
        renderNotebook();
    }

    async function loadStudentData(code) {
        try {
            const prefix = window.COSY.getPrefix();
            const res = await fetch(prefix + 'data/students.json');
            const data = await res.json();
            const profile = data[code];
            if (profile) {
                if (profile.nickname) {
                    const welcome = document.getElementById('wh');
                    if (welcome) welcome.textContent = `Welcome, ${profile.nickname}! 👋`;
                }
                if (profile.nextLesson) {
                    const nextVal = document.getElementById('next-lesson-val');
                    if (nextVal) nextVal.textContent = profile.nextLesson.date;
                    const btnJoin = document.getElementById('btn-join');
                    if (btnJoin) btnJoin.href = profile.nextLesson.meetLink;
                    const btnMat = document.getElementById('btn-materials');
                    if (btnMat) btnMat.href = profile.nextLesson.materials;
                }
                if (profile.homework) {
                    const hwList = document.getElementById('homework-list');
                    if (hwList) {
                        hwList.innerHTML = profile.homework.map(h => `
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding:12px; background:#f9f9f9; border-radius:10px;">
                                <div>
                                    <div style="font-weight:800; font-size:0.9rem;">${h.title}</div>
                                    <div style="font-size:0.7rem; color:#888;">Due: ${h.due}</div>
                                </div>
                                <a href="${h.link.startsWith('http') ? h.link : prefix + h.link.substring(1)}" class="badge-new" style="text-decoration:none;">Open →</a>
                            </div>
                        `).join('');
                    }
                }
            }
        } catch (e) {}
    }

    async function renderTeacherDashboard() {
        try {
            const prefix = window.COSY.getPrefix();
            const res = await fetch(prefix + 'data/students.json');
            const students = await res.json();
            const grid = document.getElementById('students-grid');
            if (!grid) return;

            grid.innerHTML = Object.entries(students).map(([code, s]) => `
                <div class="widget-card">
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span style="font-weight:900;">${s.nickname}</span>
                        <span class="badge-new">${s.lang} · ${s.level} · ${s.course}</span>
                    </div>
                    <div style="font-size:0.75rem; color:#666;">Points: ✨ ${s.points}</div>
                    <div style="font-size:0.75rem; color:#666;">Current Day: ${s.currentDay}</div>
                    <div style="font-size:0.7rem; color:#888; margin-top:5px;">Code: <code>${code}</code></div>
                    <div style="margin-top:15px; display:flex; gap:5px;">
                        <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px;" onclick="cosyDays.showToast('Profile viewing simulated for ${s.nickname}')">View Profile</button>
                        <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px; background:var(--cosy-green);" onclick="cosyDays.showToast('Homework assignment opened for ${s.nickname}')">Assign HW</button>
                    </div>
                </div>
            `).join('');
        } catch (e) {}
    }

    function updateStats() {
        const streak = localStorage.getItem('practice_streak') || '0';
        const points = parseInt(localStorage.getItem('cosy_total_points') || '0');
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = prog[currentCourse.code] || [];

        if (document.getElementById('streak-val')) document.getElementById('streak-val').textContent = streak;
        if (document.getElementById('points-val')) document.getElementById('points-val').textContent = points.toLocaleString();
        if (document.getElementById('done-val')) document.getElementById('done-val').textContent = done.length;
    }

    function updatePrepCard() {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = prog[currentCourse.code] || [];
        const nextNum = done.length + 1;

        // Flatten lessons
        const allLessons = curriculum.flatMap(u => u.lessons || [u]);
        const nextLesson = allLessons[nextNum - 1];

        const nextVal = document.getElementById('next-lesson-val');
        if (nextVal) {
            if (nextLesson) nextVal.textContent = nextLesson.title;
            else nextVal.textContent = "All Done! 🎉";
        }

        const card = document.querySelector('.prep-card');
        const wordCont = document.getElementById('prep-words');

        if (nextLesson && nextLesson.vocab && wordCont) {
            card.style.display = 'block';
            wordCont.innerHTML = '';
            const raw = Array.isArray(nextLesson.vocab) ? nextLesson.vocab : [];
            const words = raw.slice(0, 5).map(w => typeof w === 'string' ? w : (w.w || w.word));

            words.forEach(w => {
                const span = document.createElement('span');
                span.className = 'prep-word';
                span.textContent = w;
                wordCont.appendChild(span);
            });
        } else if (card) {
            card.style.display = 'none';
        }
    }

    async function loadCurriculum() {
        const lang = currentCourse.lang.toLowerCase();
        const level = currentCourse.level.toLowerCase();
        const prefix = window.COSY.getPrefix();
        const path = `${prefix}js/data/curriculum/${lang}_${level}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src*="${path}"]`)) {
                const key = `${lang}_${level}`;
                curriculum = (window.curriculumData && window.curriculumData[key]) || [];
                return resolve();
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = async () => {
                // Short wait for script execution
                await new Promise(r => setTimeout(r, 100));
                const key = `${lang}_${level}`;
                curriculum = (window.curriculumData && window.curriculumData[key]) || [];
                resolve();
            };
            script.onerror = () => { resolve(); };
            document.head.appendChild(script);
        });
    }

    function renderRoadmap() {
        const container = document.getElementById('roadmap-path');
        if (!container) return;
        container.innerHTML = '';

        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const done = prog[currentCourse.code] || [];
        const nextNum = done.length + 1;

        const lessons = curriculum.flatMap(u => u.lessons || [u]);

        lessons.forEach((l, idx) => {
            const num = idx + 1;
            const isDone = done.includes(num);
            const isCurrent = num === nextNum;

            const node = document.createElement('div');
            node.className = `chapter-node ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`;
            node.textContent = num;
            node.title = l.title;
            node.onclick = () => showLD(l, num);
            container.appendChild(node);
        });
    }

    function renderList() {
        const container = document.getElementById('ls');
        if (!container) return;
        container.innerHTML = '';

        const lessons = curriculum.flatMap(u => u.lessons || [u]);
        lessons.forEach((l, idx) => {
            const num = idx + 1;
            const item = document.createElement('div');
            item.className = 'widget-card';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'space-between';
            item.innerHTML = `
                <div style="flex: 1;">
                    <div style="font-weight: 800;">Day ${num}: ${l.title}</div>
                    <div style="font-size:0.75rem; color:#888; margin-top:3px;">${l.grammar || 'Interactive content'}</div>
                </div>
                <button class="btn-mark-new" style="background:none; border:none; font-size:1.2rem; cursor:pointer;" onclick="cosyDays.toggleDone(${num})">
                    ${isLessonDone(num) ? '✅' : '⭕'}
                </button>
                <button onclick="cosyDays.jumpTo(${num})" style="margin-left:10px; background:var(--cosy-green-dark); color:#fff; border:none; padding:5px 10px; border-radius:8px; font-size:0.7rem; cursor:pointer;">Start</button>
            `;
            container.appendChild(item);
        });
    }

    function isLessonDone(num) {
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        return prog[currentCourse.code] && prog[currentCourse.code].includes(num);
    }

    function showLD(l, num) {
        const ld = document.getElementById('ld');
        const content = document.getElementById('ld-content');
        if (!ld || !content) return;

        content.innerHTML = `
            <div style="font-size: 0.7rem; color: var(--cosy-green); font-weight: 800; text-transform: uppercase; margin-bottom: 5px;">Day ${num}</div>
            <h2 style="font-family: 'Lora', serif; font-size: 1.5rem; margin-bottom: 1rem;">${l.title}</h2>
            <p style="color: #666; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">${l.desc || 'Master these concepts with interactive tasks.'}</p>

            <div style="background: #fdf8f0; padding: 1.25rem; border-radius: 15px; margin-bottom: 2rem; border: 1.5px solid #eee;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem;">Focus:</h4>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--cosy-green-dark);">${l.grammar || 'Speaking & Vocabulary'}</div>
            </div>

            <button onclick="window.location.href='lesson.html?lang=${currentCourse.lang}&lesson=${num}'" class="btn-primary-new" style="width: 100%;">Open Lesson 🚀</button>
        `;
        ld.classList.add('open');
    }

    function renderNotebook() {
        const lang = currentCourse.lang.toLowerCase();
        const words = JSON.parse(localStorage.getItem(`cosy_notebook_${lang}`) || '[]');
        const container = document.getElementById('notebook-list');
        if (!container) return;

        if (words.length > 0) {
            container.innerHTML = words.map(w => `
                <div class="widget-card" style="text-align: center; display:flex; flex-direction:column; align-items:center; gap:10px;">
                    <div style="font-size: 1.1rem; font-weight: 800;">${w}</div>
                    <button class="badge-new" style="border:none; cursor:pointer; padding:5px 15px;" onclick="window.gameUtils.speak('${w.replace(/'/g,"\\'")}', '${lang}')">🔊 Speak</button>
                </div>
            `).join('');
        }
    }

    // ── Public API ──────────────────────────────────────

    window.cosyDays = {
        unlock: () => {
            const input = document.getElementById('student-code');
            const code = input.value.trim().toUpperCase();
            if (code) {
                window.COSY.unlock(code);
            }
        },
        logout: () => {
            localStorage.removeItem('student_unlocked');
            localStorage.removeItem('student_course_code');
            window.location.reload();
        },
        switchTab: (btn, panelId) => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(panelId).classList.add('active');
            if (panelId === 'panel-vocab') renderNotebook();
        },
        switchView: (view) => {
            document.getElementById('view-roadmap').style.display = view === 'roadmap' ? 'block' : 'none';
            document.getElementById('view-list').style.display = view === 'list' ? 'block' : 'none';
        },
        toggleDone: (num) => {
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const idx = done.indexOf(num);
            if (idx > -1) done.splice(idx, 1); else done.push(num);
            prog[currentCourse.code] = done;
            localStorage.setItem('cosy_progress', JSON.stringify(prog));
            renderRoadmap();
            renderList();
            updateStats();
            updatePrepCard();
        },
        jumpTo: (num) => {
            window.location.href = `lesson.html?lang=${currentCourse.lang}&lesson=${num}`;
        },
        jumpToNext: () => {
            const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
            const done = prog[currentCourse.code] || [];
            const next = done.length + 1;
            window.location.href = `lesson.html?lang=${currentCourse.lang}&lesson=${next}`;
        },
        closeLD: () => document.getElementById('ld').classList.remove('open'),
        checkPin: () => {
            const pin = document.getElementById('pin-input').value;
            if (pin === TEACHER_PIN) {
                document.getElementById('teacher-lock').style.display = 'none';
                document.getElementById('teacher-content').style.display = 'block';
            } else {
                document.getElementById('pin-error').style.display = 'block';
            }
        },
        sendBroadcast: async (active) => {
            const msg = document.getElementById('broadcast-msg').value;
            if (active && !msg) return window.cosyDays.showToast('Please type a message first.', true);

            window.cosyDays.showToast('Simulation: Broadcast ' + (active ? 'activated' : 'cleared'));
            // In a real scenario, this would push to GitHub via API
            if (!active) document.getElementById('broadcast-msg').value = '';
        },
        showToast: (msg, isError = false) => {
            const t = document.getElementById('toast');
            if (!t) return;
            t.textContent = msg;
            t.style.background = isError ? '#c0392b' : '#333';
            t.style.opacity = '1';
            t.style.pointerEvents = 'auto';
            setTimeout(() => {
                t.style.opacity = '0';
                t.style.pointerEvents = 'none';
            }, 3000);
        }
    };
})();
