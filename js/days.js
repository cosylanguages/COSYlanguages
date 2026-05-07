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
        // Integrate with COSY mode system
        if (window.COSY) {
            if (window.COSY.mode === 'student') {
                initDashboard(window.COSY.student.code);
            } else if (window.COSY.mode === 'teacher') {
                initTeacherMode();
            } else {
                document.getElementById('gate').style.display = 'flex';
                document.getElementById('area').style.display = 'none';
            }
        }
    });

    document.addEventListener('cosyCourseSwitched', (e) => {
        if (window.COSY && window.COSY.mode === 'student') {
            initDashboard(window.COSY.student.code);
            showToast('📚 Switched course!');
        }
    });

    function initTeacherMode() {
        document.getElementById('gate').style.display = 'none';
        document.getElementById('area').style.display = 'flex';
        // Auto-unlock the dashboard since they are already authenticated via COSY mode
        const lock = document.getElementById('teacher-lock');
        const content = document.getElementById('teacher-content');
        if (lock) lock.style.display = 'none';
        if (content) content.style.display = 'block';
        loadTeacherData();
    }

    async function initDashboard(code) {
        document.getElementById('gate').style.display = 'none';
        document.getElementById('area').style.display = 'flex';

        currentCourse = await window.cosyDashboard.loadStudentData(code);
        if (!currentCourse) {
            // Fallback to mock/code-parsing
            const parts = code.split('-');
            currentCourse = { lang: parts[1] || 'en', level: parts[2] || 'A1', type: 'GEN', code, id: code, homework: [], mistakes: [], lesson_notes: {}, points: 0, streak: 0 };
        }

        const courseName = document.getElementById('tb-course-name');
        if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type}`;

        curriculum = await window.cosyDashboard.fetchCurriculum(currentCourse.lang, currentCourse.level);

        updateStats();
        updatePrepCard();
        renderRoadmap();
        renderList();
        renderNotebook();
        renderHomework();
        loadBroadcast();
        if (window.cosyMode) window.cosyMode.reshapeUI();

        // Background polling for "live" updates every 30s
        if (!window._cosyPolling) {
            window._cosyPolling = setInterval(async () => {
                if (window.COSY && window.COSY.mode === 'student') {
                    const oldHomeworkCount = currentCourse.homework.length;
                    currentCourse = await window.cosyDashboard.loadStudentData(window.COSY.student.code, true);
                    renderHomework();
                    updatePrepCard();
                    if (currentCourse.homework.length > oldHomeworkCount) {
                        showToast('📝 New homework assigned!');
                    }
                }
            }, 30000);
        }
    }

    async function loadBroadcast() {
        try {
            const resp = await fetch('../data/broadcast.json?t=' + Date.now());
            const data = await resp.json();
            if (data && data.message) {
                // Check if this is a new message since last seen
                const localStudent = JSON.parse(localStorage.getItem('cosy_student') || '{}');
                if (localStudent.broadcast_seen !== data.timestamp) {
                    showToast(`📢 ${data.message}`);
                    // We'll mark as seen when they interact or after some time,
                    // but for now let's just show it.
                }
            }
        } catch (e) {
            console.error('Failed to load broadcast', e);
        }
    }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 5000);
    }

    function updateStats() {
        if (window.cosyDashboard) window.cosyDashboard.populateWidgets(currentCourse, curriculum);
    }

    function updatePrepCard() {
        if (window.cosyDashboard) window.cosyDashboard.populateWidgets(currentCourse, curriculum);
    }

    function renderRoadmap() {
        const container = document.getElementById('roadmap-path');
        if (!container) return;
        container.innerHTML = '';

        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const key = `${currentCourse.code}_${currentCourse.id}`;
        const done = prog[key] || [];
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
        const key = `${currentCourse.code}_${currentCourse.id}`;
        return prog[key] && prog[key].includes(num);
    }

    function showLD(l, num) {
        const ld = document.getElementById('ld');
        const content = document.getElementById('ld-content');
        if (!ld || !content) return;

        let lessonActions = '';
        if (currentCourse.next_lesson && currentCourse.current_day === num) {
            lessonActions = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1rem;">
                    <a href="${currentCourse.next_lesson.meet_link}" target="_blank" class="btn-primary-new" style="text-align: center; background: #4285f4; font-size: 0.8rem; padding: 10px 5px;">Join Lesson 📹</a>
                    <a href="${currentCourse.next_lesson.progressme_link}" target="_blank" class="btn-primary-new" style="text-align: center; background: #ff5722; font-size: 0.8rem; padding: 10px 5px;">Materials 📚</a>
                </div>
            `;
        }

        const notes = currentCourse.lesson_notes ? currentCourse.lesson_notes[num] : null;
        const notesHTML = notes ? `
            <div style="background: #eef7ff; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid #d0e7ff;">
                <h4 style="margin-bottom: 5px; font-size: 0.75rem; color: #2b6cb0;">Teacher's Notes:</h4>
                <div style="font-size: 0.85rem; color: #2c5282; font-style: italic;">"${notes}"</div>
            </div>
        ` : '';

        content.innerHTML = `
            <div style="font-size: 0.7rem; color: var(--cosy-green); font-weight: 800; text-transform: uppercase; margin-bottom: 5px;">Day ${num}</div>
            <h2 style="font-family: 'Lora', serif; font-size: 1.5rem; margin-bottom: 1rem;">${l.title}</h2>
            <p style="color: #666; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">${l.desc || 'Master these concepts with interactive tasks.'}</p>

            <div style="background: #fdf8f0; padding: 1.25rem; border-radius: 15px; margin-bottom: 1.5rem; border: 1.5px solid #eee;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem;">Focus:</h4>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--cosy-green-dark);">${l.grammar || 'Speaking & Vocabulary'}</div>
            </div>

            ${notesHTML}
            ${lessonActions}

            <button onclick="window.location.href='lesson.html?lang=${currentCourse.lang}&lesson=${num}'" class="btn-primary-new" style="width: 100%;">Self-Practice 🚀</button>
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
        } else {
            container.innerHTML = `<div class="info-card-empty" style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #888;">No words saved yet. Start practice to populate your notebook!</div>`;
        }
    }

    function renderHomework() {
        const container = document.getElementById('homework-list');
        if (!container || !currentCourse.homework) return;

        if (currentCourse.homework.length > 0) {
            container.innerHTML = currentCourse.homework.map(hw => `
                <div class="widget-card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-color:${hw.done ? '#eee' : 'var(--cosy-green)'}">
                    <div style="flex:1">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span class="badge-new" style="background:#f0f0f0; color:#555;">${hw.type || 'General'}</span>
                            <div style="font-weight:800; ${hw.done ? 'text-decoration:line-through; color:#aaa' : ''}">${hw.task}</div>
                        </div>
                        <div style="font-size:0.75rem; color:#888;">Due: ${hw.due}</div>
                        ${hw.link ? `<a href="${hw.link}" target="_blank" style="font-size:0.75rem; color:var(--cosy-green-dark); font-weight:700; text-decoration:none; margin-top:5px; display:inline-block;">🔗 Open Task</a>` : ''}
                    </div>
                    <div style="font-size:1.5rem">${hw.done ? '✅' : '⏳'}</div>
                </div>
            `).join('');
        } else {
            container.innerHTML = `<div style="text-align: center; color: #888; padding: 2rem;">No homework assigned for this unit. Enjoy your free time! 🥳</div>`;
        }
    }

    let allStudentsData = {};
    let editingStudentCode = null;

    async function loadTeacherData() {
        try {
            const resp = await fetch('../data/students.json');
            allStudentsData = await resp.json();
            renderStudentGrid();
        } catch (e) {
            console.error('Failed to load teacher data', e);
        }
    }

    function renderStudentGrid() {
        const grid = document.getElementById('student-grid');
        if (!grid) return;
        grid.innerHTML = '';

        Object.entries(allStudentsData).forEach(([code, s]) => {
            const card = document.createElement('div');
            card.className = 'widget-card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:1rem;">
                    <div>
                        <div style="font-weight:900; font-size:1.1rem;">${s.nickname}</div>
                        <div style="font-size:0.65rem; color:#888; font-weight:700;">${code}</div>
                    </div>
                    <div class="badge-new">${(s.language || 'EN').toUpperCase()} · ${(s.courses && s.courses[0]?.level) || s.level || 'A1'}</div>
                </div>
                <div class="stats-mini" style="margin-bottom:1.5rem; color:#2a2a2a;">
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${s.streak}</span>
                        <span class="stat-mini-lbl">Streak</span>
                    </div>
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${(s.courses && s.courses[0]?.current_day) || s.current_day || 1}</span>
                        <span class="stat-mini-lbl">Day</span>
                    </div>
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${s.points}</span>
                        <span class="stat-mini-lbl">Pts</span>
                    </div>
                </div>
                <div style="font-size:0.75rem; color:#666; margin-bottom:1rem;">
                    <strong>Next:</strong> ${(s.courses && s.courses[0]?.next_lesson?.date) || s.next_lesson?.date || 'Not set'}
                </div>
                <button onclick="cosyDays.openEditModal('${code}')" class="btn-primary-new" style="width:100%; font-size:0.8rem; padding:8px;">Manage Student ⚙️</button>
            `;
            grid.appendChild(card);
        });
        showJSONOutput();
    }

    function showJSONOutput() {
        const out = document.getElementById('json-output');
        const box = document.getElementById('teacher-actions');
        if (out && box) {
            out.value = JSON.stringify(allStudentsData, null, 2);
            box.style.display = 'block';
        }
    }

    // ── Public API ──────────────────────────────────────

    window.cosyDays = {
        loadTeacherData,
        openEditModal: (code) => {
            editingStudentCode = code;
            const s = allStudentsData[code];
            const course = (s.courses && s.courses.length > 0) ? s.courses[0] : s;

            document.getElementById('tm-name').textContent = `Manage ${s.nickname}`;
            document.getElementById('tm-date').value = course.next_lesson?.date || '';
            document.getElementById('tm-time').value = course.next_lesson?.time || '';
            document.getElementById('tm-meet').value = course.next_lesson?.meet_link || '';
            document.getElementById('tm-hw').value = '';
            document.getElementById('tm-hw-due').value = '';

            const notesArea = document.getElementById('tm-notes');
            if (notesArea) notesArea.value = course.lesson_notes ? (course.lesson_notes[course.current_day] || '') : '';

            const mistakesArea = document.getElementById('tm-mistakes');
            if (mistakesArea) mistakesArea.value = course.mistakes ? course.mistakes.join(', ') : '';

            document.getElementById('teacher-modal').style.display = 'flex';
        },
        saveStudentEdits: () => {
            const s = allStudentsData[editingStudentCode];
            const course = (s.courses && s.courses.length > 0) ? s.courses[0] : s;

            course.next_lesson = {
                date: document.getElementById('tm-date').value,
                time: document.getElementById('tm-time').value,
                meet_link: document.getElementById('tm-meet').value,
                progressme_link: course.next_lesson?.progressme_link || ''
            };

            const hwTask = document.getElementById('tm-hw').value;
            const hwDue = document.getElementById('tm-hw-due').value;
            const hwType = document.getElementById('tm-hw-type')?.value || 'General';
            const hwLink = document.getElementById('tm-hw-link')?.value || '';

            if (hwTask) {
                if (!course.homework) course.homework = [];
                course.homework.push({
                    id: Date.now(),
                    task: hwTask,
                    due: hwDue,
                    type: hwType,
                    link: hwLink,
                    done: false
                });
            }

            const notes = document.getElementById('tm-notes')?.value;
            if (notes !== undefined) {
                if (!course.lesson_notes) course.lesson_notes = {};
                course.lesson_notes[course.current_day] = notes;
            }

            const mistakes = document.getElementById('tm-mistakes')?.value;
            if (mistakes !== undefined) {
                course.mistakes = mistakes.split(',').map(m => m.trim()).filter(m => m);
            }

            document.getElementById('teacher-modal').style.display = 'none';
            renderStudentGrid();
            showToast('Changes saved to temporary buffer!');
        },
        openCreateModal: () => {
            document.getElementById('cm-result').style.display = 'none';
            document.getElementById('create-modal').style.display = 'flex';
        },
        generateStudent: () => {
            const name = document.getElementById('cm-name').value;
            const lang = document.getElementById('cm-lang').value;
            const level = document.getElementById('cm-level').value;
            if (!name) return alert('Enter a nickname');

            const idNum = Math.floor(100 + Math.random() * 900);
            const code = `COSY-${lang.toUpperCase()}-${level}-${idNum}`;

            allStudentsData[code] = {
                nickname: name,
                points: 0,
                streak: 0,
                courses: [{
                    id: `${lang.toUpperCase()}-${level}-GEN`,
                    language: lang,
                    level: level,
                    type: "General",
                    current_day: 1,
                    is_active: true,
                    next_lesson: null,
                    homework: [],
                    lesson_notes: {},
                    mistakes: []
                }]
            };

            document.getElementById('cm-code-val').textContent = code;
            document.getElementById('cm-result').style.display = 'block';
            renderStudentGrid();
        },
        copyJSON: () => {
            const out = document.getElementById('json-output');
            out.select();
            document.execCommand('copy');
            showToast('JSON copied to clipboard! 📋');
        },
        updateBroadcast: async () => {
            const msg = document.getElementById('broadcast-input').value;
            if (msg) {
                // In a serverless env, we can't write, but we can provide the JSON to commit
                const broadcast = { message: msg, timestamp: Date.now() };
                const out = document.getElementById('json-output');
                const box = document.getElementById('teacher-actions');
                if (out && box) {
                    out.value = `Update broadcast.json with:\n\n${JSON.stringify(broadcast, null, 2)}\n\n--- OR ---\n\nUpdate students.json with:\n\n${JSON.stringify(allStudentsData, null, 2)}`;
                    box.style.display = 'block';
                }
                showToast('Broadcast data ready in the buffer box above! 📢');
            }
        },
        unlock: async () => {
            const input = document.getElementById('student-code');
            const code = input.value.trim().toUpperCase();
            if (code) {
                const result = await window.COSY.unlock(code);
                if (result.ok) {
                    if (window.COSY.mode === 'student') initDashboard(code);
                    else if (window.COSY.mode === 'teacher') initTeacherMode();
                } else {
                    document.getElementById('em').style.display = 'block';
                    setTimeout(() => { document.getElementById('em').style.display = 'none'; }, 3000);
                }
            }
        },
        logout: () => {
            window.COSY.logout();
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
            const key = `${currentCourse.code}_${currentCourse.id}`;
            const done = prog[key] || [];
            const idx = done.indexOf(num);
            if (idx > -1) done.splice(idx, 1); else done.push(num);
            prog[key] = done;
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
            const key = `${currentCourse.code}_${currentCourse.id}`;
            const done = prog[key] || [];
            const next = done.length + 1;
            window.location.href = `lesson.html?lang=${currentCourse.lang}&lesson=${next}`;
        },
        closeLD: () => document.getElementById('ld').classList.remove('open'),
        checkPin: () => {
            const pin = document.getElementById('pin-input').value;
            if (pin === TEACHER_PIN) {
                document.getElementById('teacher-lock').style.display = 'none';
                document.getElementById('teacher-content').style.display = 'block';
                loadTeacherData();
            } else {
                document.getElementById('pin-error').style.display = 'block';
            }
        },
        assignHW: () => {
            const val = document.getElementById('hw-input').value;
            if (val) {
                alert('Homework assigned to student: ' + val);
                document.getElementById('hw-input').value = '';
            }
        },
        refreshData: async () => {
            if (window.COSY && window.COSY.student) {
                const code = window.COSY.student.code;
                currentCourse = await window.cosyDashboard.loadStudentData(code, true);
                renderHomework();
                updatePrepCard();
                showToast('🔄 Syncing data...');
            }
        },
        sendFeedback: () => {
            const text = document.getElementById('feedback-text').value;
            if (!text) return;
            const student = window.COSY.student;
            const msg = `Hi! This is ${student.name} (${student.code}). I have a note regarding my homework: ${text}`;
            const url = `https://wa.me/330766784195?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
            document.getElementById('feedback-text').value = '';
        }
    };
})();
