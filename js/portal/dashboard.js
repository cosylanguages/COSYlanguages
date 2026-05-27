/**
 * js/portal/dashboard.js
 * Logic for the student/teacher/admin dashboard, including roadmap rendering and data sync.
 */
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
            const mode = window.COSY?.mode;
            const student = window.COSY?.student;
            const teacher = window.COSY?.teacher;

            if (mode && mode !== 'free' && (student || teacher || window.COSY.admin)) {
                initDashboard(student?.code || teacher?.code || window.COSY.admin?.code, mode.toUpperCase());
            } else {
                const gate = document.getElementById('gate');
                if (gate) gate.style.display = 'flex';
            }
        }, 50);
    });

    async function initDashboard(code, mode) {
        const gate = document.getElementById('gate');
        const area = document.getElementById('area');
        // gate logic removed
        // area logic removed

        if (window.COSY.admin?.spoofedLang) {
            localStorage.setItem('language', window.COSY.admin.spoofedLang.toLowerCase());
            if (window.setLanguage) window.setLanguage(window.COSY.admin.spoofedLang.toLowerCase());
        }

        if (mode === 'ADMIN') {
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.getElementById('panel-admin').classList.add('active');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const adminNav = document.querySelector('.nav-item[data-mode="admin"]');
            if (adminNav) adminNav.classList.add('active');
            renderAdminDashboard();
            return;
        }

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
        if (window.COSY.student && (window.COSY.student.code === code || code === 'FREE')) {
            currentCourse = window.COSY.student;
        } else if (typeof COURSES !== 'undefined' && COURSES[code]) {
            currentCourse = { ...COURSES[code], code };
        } else {
            const parts = code.split('-');
            currentCourse = { lang: parts[1] || 'en', level: parts[2] || 'A1', type: parts[3] || 'GEN', code };
        }

        const courseName = document.getElementById('tb-course-name');
        if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type || currentCourse.course}`;

        if (code === 'FREE' || currentCourse.isFree) {
             // Ensure tb-course-name is updated for Free
             const levelDisp = currentCourse.level === 'A1' ? 'Starter' : currentCourse.level;
             if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${levelDisp}`;
        }

        await loadStudentData(code);
        await loadCurriculum();
        updateStats();
        updatePrepCard();
        renderRoadmap();
        renderList();
        renderNotebook();
    }

    async function loadStudentData(code) {
        // Use COSY engine sync
        const students = await window.COSY.sync();
        let profile = (students && code !== 'FREE') ? students[code] : window.COSY.student;
        if (!profile && window.COSY.student?.code === code) profile = window.COSY.student;
        const prefix = window.COSY.getPrefix();

        if (profile) {
            if (profile.nickname || profile.name) {
                const welcome = document.getElementById('wh');
                if (welcome) {
                    const welcomeTpl = window.t('welcome_back') || 'Welcome back';
                    const suffix = profile.isFree ? ` (${window.t('free_learner') || 'Free Learner'})` : '';
                    welcome.textContent = `${welcomeTpl}, ${profile.nickname || profile.name}${suffix}! 👋`;
                    if (profile.isFree) {
                        const wp = document.getElementById('wp');
                        if (wp) wp.innerHTML = `You are exploring the <strong>${profile.lang} ${profile.level}</strong> path. <a href="https://wa.me/330766784195" style="color:var(--cosy-green-dark)">Unlock full access →</a>`;
                    }
                }
            }
            if (profile.nextLesson) {
                const nextVal = document.getElementById('next-lesson-val');
                if (nextVal) nextVal.textContent = profile.nextLesson.date;
                const btnJoin = document.getElementById('btn-join');
                if (btnJoin) btnJoin.href = profile.nextLesson.meetLink;
                const btnMat = document.getElementById('btn-materials');
                if (btnMat) btnMat.href = profile.nextLesson.materials;
            }

            // Homework Live Sync
            const hwList = document.getElementById('homework-list');
            if (hwList) {
                const hw = profile.homework || [];
                if (hw.length > 0) {
                    hwList.innerHTML = hw.map(h => `
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding:12px; background:#f9f9f9; border-radius:10px;">
                            <div>
                                <div style="font-weight:800; font-size:0.9rem;">${h.title}</div>
                                <div style="font-size:0.7rem; color:#888;">${window.t('due_label') || 'Due'}: ${h.due}</div>
                            </div>
                            <a href="${h.link.startsWith('http') ? h.link : prefix + h.link.replace(/^\//, '')}" class="badge-new" style="text-decoration:none;">${window.t('open_btn') || 'Open'} →</a>
                        </div>
                    `).join('');
                } else {
                    hwList.innerHTML = `<div style="text-align: center; color: #888; padding: 2rem;">${window.t('no_homework_msg') || 'No homework assigned for this unit. Enjoy your free time! 🥳'}</div>`;
                }
            }
        }
    }

    async function renderTeacherDashboard() {
        try {
            const students = await window.COSY.sync();
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

    async function renderAdminDashboard() {
        try {
            const students = await window.COSY.sync();
            const grid = document.getElementById('admin-students-grid');
            if (!grid) return;

            grid.innerHTML = Object.entries(students).map(([code, s]) => `
                <div class="widget-card student-admin-card">
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span style="font-weight:900;">${s.nickname}</span>
                        <span class="badge-new" style="background:#e8ee8f">${s.lang} · ${s.level}</span>
                    </div>
                    <div style="font-size:0.75rem; color:#666;">Reality Code: <code>${code}</code></div>
                    <div style="font-size:0.75rem; color:#666;">Progress: Day ${s.currentDay} · ✨ ${s.points} pts</div>
                    <div style="margin-top:15px; display:flex; gap:5px;">
                        <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px; background:#1c1917" onclick="cosyDays.adminManageStudent('${code}')">Manage ⚙️</button>
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

    async function loadCurriculum(lang, level) {
        const student = window.COSY.student;
        lang = lang || currentCourse.lang.toLowerCase();
        level = level || currentCourse.level.toLowerCase();
        const prefix = window.COSY.getPrefix();
        // Check for v2 curriculum first
        const v2Path = `${prefix}curriculum/${lang}/general/${level.toUpperCase()}_v2.json`;
        try {
            const v2Res = await fetch(v2Path);
            if (v2Res.ok) {
                const v2Data = await v2Res.json();
                if (v2Data && v2Data.units) {
                    console.log("Loading A1 v2 curriculum...");
                    curriculum = v2Data.units;
                    return v2Data.units;
                }
            }
        } catch (e) {
            console.log("v2 curriculum not found, falling back to legacy JS data.");
        }

        const path = `${prefix}js/data/curriculum/${lang}_${level}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src*="${path}"]`)) {
                const key = `${lang}_${level}`;
                let data = (window.curriculumData && window.curriculumData[key]) || [];
                if (student?.isFree && lang === student.lang.toLowerCase()) {
                    data = data.slice(0, 1); // Only Unit 0 for free students
                }
                if (!currentCourse || (lang === currentCourse.lang.toLowerCase() && level === currentCourse.level.toLowerCase())) {
                    curriculum = data;
                }
                return resolve(data);
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = async () => {
                // Short wait for script execution
                await new Promise(r => setTimeout(r, 100));
                const key = `${lang}_${level}`;
                let data = (window.curriculumData && window.curriculumData[key]) || [];
                if (student?.isFree && lang === student.lang.toLowerCase()) {
                    data = data.slice(0, 1); // Only Unit 0 for free students
                }
                if (!currentCourse || (lang === currentCourse.lang.toLowerCase() && level === currentCourse.level.toLowerCase())) {
                    curriculum = data;
                }
                resolve(data);
            };
            script.onerror = () => { resolve([]); };
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
        const dayTpl = window.t('day_label') || 'Day';
        const startTpl = window.t('start_btn') || 'Start';

        lessons.forEach((l, idx) => {
            const num = idx + 1;
            const item = document.createElement('div');
            item.className = 'widget-card lesson-card-v2';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'space-between';
            item.style.position = 'relative';
            item.style.overflow = 'hidden';

            const stripeClass = l.type ? `stripe-${l.type}` : '';
            const typeLabel = l.type ? `<span class="lesson-type-pill t-${l.type}">${l.type}</span>` : '';

            item.innerHTML = `
                <div class="lesson-stripe ${stripeClass}" style="position:absolute; left:0; top:0; bottom:0; width:6px;"></div>
                <div style="flex: 1; padding-left: 15px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                        <span style="font-size:0.7rem; font-weight:900; color:#888; text-transform:uppercase;">${dayTpl} ${num}</span>
                        ${typeLabel}
                    </div>
                    <div style="font-weight: 800; font-size:1.05rem;">${l.title}</div>
                    <div style="font-size:0.75rem; color:#666; margin-top:3px;">${l.grammar || (window.t('interactive_content') || 'Interactive content')}</div>
                    ${l.recycled ? `<div style="font-size:0.65rem; color:#a06b10; font-style:italic; margin-top:5px;">↻ ${l.recycled}</div>` : ''}
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                    <button class="btn-mark-new" style="background:none; border:none; font-size:1.2rem; cursor:pointer;" onclick="cosyDays.toggleDone(${num})">
                        ${isLessonDone(num) ? '✅' : '⭕'}
                    </button>
                    <button onclick="cosyDays.jumpTo(${num})" style="background:var(--cosy-green-dark); color:#fff; border:none; padding:8px 16px; border-radius:10px; font-weight:800; font-size:0.75rem; cursor:pointer;">${startTpl}</button>
                </div>
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

        const lessonId = `${currentCourse.lang}_${currentCourse.level}_${num}`;
        const entry = window.COSY.notebook[lessonId] || { notes: '', mistakes: [] };

        // Find teacher notes for this lesson from synced profile
        const teacherNotes = window.COSY.student?.teacherNotes?.[num] || '';
        const dayTpl = window.t('day_label') || 'Day';
        const openTpl = window.t('open_lesson_btn') || 'Open Lesson';
        const focusTpl = window.t('focus_label') || 'Focus';
        const feedbackTpl = window.t('teacher_feedback_label') || "Teacher's Feedback";
        const notesTpl = window.t('study_notes_label') || 'My Study Notes';
        const saveTpl = window.t('save_notes_btn') || 'Save Notes';
        const mistakesTpl = window.t('mistakes_review_label') || 'Mistakes to Review';

        const stripeClass = l.type ? `stripe-${l.type}` : '';
        const typeLabel = l.type ? `<span class="lesson-type-pill t-${l.type}">${l.type}</span>` : '';

        content.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 15px;">
                <div style="font-size: 0.7rem; color: var(--cosy-green); font-weight: 800; text-transform: uppercase;">${dayTpl} ${num}</div>
                ${typeLabel}
            </div>
            <h2 style="font-family: 'Lora', serif; font-size: 1.5rem; margin-bottom: 1rem; position:relative;">
                <div class="lesson-stripe ${stripeClass}" style="position:absolute; left:-40px; top:0; bottom:0; width:8px; border-radius:0 4px 4px 0;"></div>
                ${l.title}
            </h2>

            <button onclick="window.location.href='lesson.html?lang=${currentCourse.lang}&lesson=${num}'" class="btn-primary-new" style="width: 100%; margin-bottom: 2rem;">${openTpl} 🚀</button>

            <div style="background: #fdf8f0; padding: 1.25rem; border-radius: 15px; margin-bottom: 1rem; border: 1.5px solid #eee;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem;">${focusTpl}:</h4>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--cosy-green-dark);">${l.grammar || (window.t('speaking_vocab') || 'Speaking & Vocabulary')}</div>
            </div>

            ${l.recycled ? `
            <div style="background: #f0f4ff; padding: 1.25rem; border-radius: 15px; margin-bottom: 1rem; border: 1.5px solid #dbeafe;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem; color: #1e40af;">🔄 ${window.t('recycled_label') || 'Spiral Recycling'}:</h4>
                <div style="font-size: 0.85rem; color: #1e40af; font-style: italic;">${l.recycled}</div>
            </div>
            ` : ''}

            ${teacherNotes ? `
            <div style="background: #fff8e7; padding: 1.25rem; border-radius: 15px; margin-bottom: 1.5rem; border: 1.5px solid #e8a838;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem; color: #a06b10;">👩‍🏫 ${feedbackTpl}:</h4>
                <div style="font-size: 0.85rem; font-style: italic;">"${teacherNotes}"</div>
            </div>
            ` : ''}

            <div style="margin-bottom: 1.5rem;">
                <h4 style="margin-bottom: 10px; font-size: 0.85rem;">${notesTpl}:</h4>
                <textarea id="ld-notes" style="width:100%; height:120px; border-radius:12px; border:1.5px solid #eee; padding:10px; font-family:inherit; font-size:0.85rem; resize:none;" placeholder="${window.t('notes_placeholder') || 'Type your notes here...'}">${entry.notes}</textarea>
                <button onclick="cosyDays.saveLessonNotes('${lessonId}')" style="margin-top:8px; width:100%; padding:8px; background:#f5f5f5; border:none; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.75rem;">${saveTpl} 💾</button>
            </div>

            ${entry.mistakes.length > 0 ? `
            <div>
                <h4 style="margin-bottom: 10px; font-size: 0.85rem;">${mistakesTpl}:</h4>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                    ${entry.mistakes.map(m => `<span class="badge-new" style="background:#fcebeb; color:#a32d2d;">${m.word}</span>`).join('')}
                </div>
            </div>
            ` : ''}
        `;
        ld.classList.add('open');
    }

    function renderNotebook() {
        const container = document.getElementById('notebook-list');
        if (!container) return;

        const vocab = window.COSY.dictionary;
        const entries = Object.entries(vocab).sort((a, b) => (b[1].addedAt || 0) - (a[1].addedAt || 0));
        const limited = entries.slice(0, 6);

        if (entries.length > 0) {
            let html = limited.map(([word, data]) => {
                const def = typeof data === 'string' ? data : (data.definition || '');
                return `
                    <div class="widget-card" style="display:flex; flex-direction:column; gap:8px;">
                        <div style="font-size: 1.1rem; font-weight: 900; color: var(--cosy-green-dark);">${word}</div>
                        <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">${def || 'No definition saved'}</div>
                    </div>
                `;
            }).join('');

            if (entries.length > 6) {
                html += `
                    <div style="grid-column: 1 / -1; text-align: center; margin-top: 1rem;">
                        <a href="vocabulary.html" class="btn-primary-new" style="text-decoration: none; display: inline-block;">View All ${entries.length} Words 📖</a>
                    </div>
                `;
            } else {
                html += `
                    <div style="grid-column: 1 / -1; text-align: center; margin-top: 1rem;">
                        <a href="vocabulary.html" class="btn-primary-new" style="text-decoration: none; display: inline-block; background: var(--cosy-green);">Manage Vocabulary 📓</a>
                    </div>
                `;
            }
            container.innerHTML = html;
        } else {
            container.innerHTML = `<div class="info-card-empty" style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #888;" data-translate-key="vocab_empty_msg">No words saved yet. Start practice to populate your notebook!</div>`;
        }
    }

    // ── Public API ──────────────────────────────────────

    window.cosyDays = {
        unlock: async () => {
            const input = document.getElementById('student-code');
            const code = input.value.trim().toUpperCase();
            if (code) {
                const res = await window.COSY.unlock(code);
                if (res && res.ok) {
                    initDashboard(code, window.COSY.mode.toUpperCase());
                }
            }
        },
        startFree: () => {
            const lang = document.getElementById('free-lang').value;
            const level = document.getElementById('free-level').value;
            window.COSY.setFreeMode(lang, level);
            initDashboard('FREE', 'STUDENT');
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
            if (panelId === 'panel-admin') renderAdminDashboard();
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
        saveLessonNotes: (lessonId) => {
            const text = document.getElementById('ld-notes').value;
            window.COSY.saveNote(lessonId, text);
            cosyDays.showToast(window.t('notes_saved_toast') || 'Notes saved locally 📝');
        },
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
        adminManageStudent: (code) => {
            window.cosyDays.showToast(`Managing student ${code}...`);
        },
        adminShowAddStudent: () => {
            document.getElementById('admin-add-student-form').style.display = 'block';
        },
        adminSaveStudent: async () => {
            const name = document.getElementById('as-name').value;
            const code = document.getElementById('as-code').value;
            const lang = document.getElementById('as-lang').value;
            const level = document.getElementById('as-level').value;

            if (!name || !code) return alert("Name and Code are required.");

            const students = await window.COSY.sync() || {};
            students[code] = { nickname: name, lang, level, course: 'GEN', currentDay: 1, points: 0 };

            // In a real app we'd push to API, here we simulate by updating STATE for current session
            // and providing export for GitHub.
            localStorage.setItem('cosy_admin_students_override', JSON.stringify(students));
            window.cosyDays.showToast("Student added locally! Use Export to save to GitHub.");
            document.getElementById('admin-add-student-form').style.display = 'none';
            renderAdminDashboard();
        },
        adminExportStudents: async () => {
            const students = await window.COSY.sync();
            const json = JSON.stringify(students, null, 2);
            navigator.clipboard.writeText(json);
            window.cosyDays.showToast("JSON copied to clipboard!");
        },
        adminLoadGSheet: async () => {
            const url = document.getElementById('as-gsheet-url').value;
            if (!url) return alert("Please enter a valid Google Sheets CSV URL.");
            try {
                const res = await fetch(url);
                const csvText = await res.text();
                // Simple CSV parser for [code, name, lang, level]
                const rows = csvText.split('\n').slice(1); // skip header
                const override = {};
                rows.forEach(row => {
                    const [code, nickname, lang, level] = row.split(',').map(s => s.trim());
                    if (code) override[code] = { nickname, lang, level, course: 'GEN', currentDay: 1, points: 0 };
                });
                localStorage.setItem('cosy_admin_students_override', JSON.stringify(override));
                window.cosyDays.showToast(`Imported ${Object.keys(override).length} students from GSheet!`);
                renderAdminDashboard();
            } catch (e) {
                alert("Failed to load GSheet. Make sure it is public and shared as CSV.");
            }
        },
        adminExploreCurriculum: async () => {
            const lang = document.getElementById('admin-curr-lang').value;
            const level = document.getElementById('admin-curr-level').value;
            const result = document.getElementById('admin-curriculum-result');
            result.innerHTML = 'Loading...';

            const data = await loadCurriculum(lang, level);
            if (!data || data.length === 0) {
                result.innerHTML = '<div style="color:red">No data found for this path.</div>';
                return;
            }

            result.innerHTML = data.map(unit => {
                const githubUrl = `https://github.com/COSYlanguages/COSYlanguages.github.io/edit/main/js/data/curriculum/${lang}_${level}.js`;
                return `
                <div class="widget-card" style="margin-bottom:1rem">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <h4 style="margin:0">${unit.label || unit.title}</h4>
                        <a href="${githubUrl}" target="_blank" class="badge-new" style="background:#1c1917; color:#fff; text-decoration:none;">Edit Unit 🛠️</a>
                    </div>
                    <p style="font-size:0.8rem; color:#666">${unit.arc || ''}</p>
                    <div style="font-size:0.75rem">
                        ${(unit.lessons || []).map(l => `• ${l.title}`).join('<br>')}
                    </div>
                </div>
                `;
            }).join('');
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
