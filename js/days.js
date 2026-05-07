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

        await refreshStudentData(code);

        const courseName = document.getElementById('tb-course-name');
        if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type}`;

        await loadCurriculum();
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
            window._cosyPolling = setInterval(() => {
                if (window.COSY && window.COSY.mode === 'student') {
                    refreshStudentData(window.COSY.student.code, true);
                }
            }, 30000);
        }
    }

    async function refreshStudentData(code, silent = false) {
        // Fetch student data from serverless JSON
        let studentData = null;
        try {
            const resp = await fetch('../data/students.json?t=' + Date.now());
            const allStudents = await resp.json();
            studentData = allStudents[code];
        } catch (e) {
            console.error('Failed to fetch student data', e);
        }

        if (studentData) {
            const oldHomeworkCount = (currentCourse && currentCourse.homework) ? currentCourse.homework.length : 0;

            currentCourse = {
                lang: studentData.language,
                level: studentData.level,
                type: studentData.course,
                code: code,
                nickname: studentData.nickname,
                current_day: studentData.current_day,
                next_lesson: studentData.next_lesson,
                homework: studentData.homework,
                points: studentData.points,
                streak: studentData.streak
            };
            localStorage.setItem('cosy_user_name', studentData.nickname);
            localStorage.setItem('cosy_total_points', studentData.points);
            localStorage.setItem('practice_streak', studentData.streak);

            if (silent) {
                renderHomework();
                updatePrepCard();
                if (studentData.homework.length > oldHomeworkCount) {
                    showToast('📝 New homework assigned!');
                }
            }
        } else {
            // Fallback to mock/code-parsing
            const parts = code.split('-');
            currentCourse = { lang: parts[1] || 'en', level: parts[2] || 'A1', type: 'GEN', code };
        }

        const courseName = document.getElementById('tb-course-name');
        if (courseName) courseName.textContent = `${currentCourse.lang.toUpperCase()} · ${currentCourse.level} · ${currentCourse.type}`;

        await loadCurriculum();
        updateStats();
        updatePrepCard();
        renderRoadmap();
        renderList();
        renderNotebook();
        renderHomework();
        loadBroadcast();
        if (window.cosyMode) window.cosyMode.reshapeUI();
    }

    async function loadBroadcast() {
        try {
            const resp = await fetch('../data/broadcast.json');
            const data = await resp.json();
            if (data && data.message) {
                showToast(`📢 ${data.message}`);
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
            if (currentCourse.next_lesson) {
                nextVal.innerHTML = `
                    <div style="font-size:1.1rem">${currentCourse.next_lesson.date} @ ${currentCourse.next_lesson.time}</div>
                    <div style="font-size:0.75rem; font-weight:400; margin-top:5px">Unit ${currentCourse.current_day}: ${nextLesson?.title || ''}</div>
                    <div style="display:flex; gap:8px; margin-top:10px">
                        <a href="${currentCourse.next_lesson.meet_link}" target="_blank" class="btn-primary-new" style="flex:1; font-size:0.7rem; padding:8px; background:#4285f4; text-align:center;">Join 📹</a>
                        <a href="${currentCourse.next_lesson.progressme_link}" target="_blank" class="btn-primary-new" style="flex:1; font-size:0.7rem; padding:8px; background:#ff5722; text-align:center;">Materials 📚</a>
                    </div>
                `;
            } else if (nextLesson) {
                nextVal.textContent = nextLesson.title;
            } else {
                nextVal.textContent = "All Done! 🎉";
            }
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
        const path = `../js/data/curriculum/${lang}_${level}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src*="${path}"]`)) {
                const key = `${lang}_${level}`;
                curriculum = (window.curriculumData && window.curriculumData[key]) || [];
                return resolve();
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = () => {
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

        let lessonActions = '';
        if (currentCourse.next_lesson && currentCourse.current_day === num) {
            lessonActions = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1rem;">
                    <a href="${currentCourse.next_lesson.meet_link}" target="_blank" class="btn-primary-new" style="text-align: center; background: #4285f4; font-size: 0.8rem; padding: 10px 5px;">Join Lesson 📹</a>
                    <a href="${currentCourse.next_lesson.progressme_link}" target="_blank" class="btn-primary-new" style="text-align: center; background: #ff5722; font-size: 0.8rem; padding: 10px 5px;">Materials 📚</a>
                </div>
            `;
        }

        content.innerHTML = `
            <div style="font-size: 0.7rem; color: var(--cosy-green); font-weight: 800; text-transform: uppercase; margin-bottom: 5px;">Day ${num}</div>
            <h2 style="font-family: 'Lora', serif; font-size: 1.5rem; margin-bottom: 1rem;">${l.title}</h2>
            <p style="color: #666; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">${l.desc || 'Master these concepts with interactive tasks.'}</p>

            <div style="background: #fdf8f0; padding: 1.25rem; border-radius: 15px; margin-bottom: 1.5rem; border: 1.5px solid #eee;">
                <h4 style="margin-bottom: 8px; font-size: 0.85rem;">Focus:</h4>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--cosy-green-dark);">${l.grammar || 'Speaking & Vocabulary'}</div>
            </div>

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
                    <div>
                        <div style="font-weight:800; ${hw.done ? 'text-decoration:line-through; color:#aaa' : ''}">${hw.task}</div>
                        <div style="font-size:0.75rem; color:#888;">Due: ${hw.due}</div>
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
                    <div class="badge-new">${s.language.toUpperCase()} · ${s.level}</div>
                </div>
                <div class="stats-mini" style="margin-bottom:1.5rem; color:#2a2a2a;">
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${s.streak}</span>
                        <span class="stat-mini-lbl">Streak</span>
                    </div>
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${s.current_day}</span>
                        <span class="stat-mini-lbl">Day</span>
                    </div>
                    <div class="stat-mini-item" style="background:#f5f5f5;">
                        <span class="stat-mini-val">${s.points}</span>
                        <span class="stat-mini-lbl">Pts</span>
                    </div>
                </div>
                <div style="font-size:0.75rem; color:#666; margin-bottom:1rem;">
                    <strong>Next:</strong> ${s.next_lesson?.date || 'Not set'} @ ${s.next_lesson?.time || '--:--'}
                </div>
                <button onclick="cosyDays.openEditModal('${code}')" class="btn-primary-new" style="width:100%; font-size:0.8rem; padding:8px;">Manage Student ⚙️</button>
            `;
            grid.appendChild(card);
        });
    }

    // ── Public API ──────────────────────────────────────

    window.cosyDays = {
        loadTeacherData,
        openEditModal: (code) => {
            editingStudentCode = code;
            const s = allStudentsData[code];
            document.getElementById('tm-name').textContent = `Manage ${s.nickname}`;
            document.getElementById('tm-date').value = s.next_lesson?.date || '';
            document.getElementById('tm-time').value = s.next_lesson?.time || '';
            document.getElementById('tm-meet').value = s.next_lesson?.meet_link || '';
            document.getElementById('tm-hw').value = '';
            document.getElementById('tm-hw-due').value = '';
            document.getElementById('teacher-modal').style.display = 'flex';
        },
        saveStudentEdits: () => {
            const s = allStudentsData[editingStudentCode];
            s.next_lesson = {
                date: document.getElementById('tm-date').value,
                time: document.getElementById('tm-time').value,
                meet_link: document.getElementById('tm-meet').value,
                progressme_link: s.next_lesson?.progressme_link || ''
            };

            const hwTask = document.getElementById('tm-hw').value;
            const hwDue = document.getElementById('tm-hw-due').value;
            if (hwTask) {
                s.homework.push({
                    id: Date.now(),
                    task: hwTask,
                    due: hwDue,
                    done: false
                });
            }

            console.log('Saving edits (Simulated):', editingStudentCode, s);
            alert(`Saved changes for ${s.nickname}! In a real environment, this would push to GitHub.`);
            document.getElementById('teacher-modal').style.display = 'none';
            renderStudentGrid();
        },
        updateBroadcast: () => {
            const msg = document.getElementById('broadcast-input').value;
            if (msg) {
                console.log('Updating broadcast (Simulated):', msg);
                alert('Broadcast updated! Students will see this on next load.');
                document.getElementById('broadcast-input').value = '';
            }
        },
        unlock: () => {
            const input = document.getElementById('student-code');
            const code = input.value.trim().toUpperCase();
            if (code) {
                const result = window.COSY.unlock(code);
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
        refreshData: () => {
            if (window.COSY && window.COSY.student) {
                refreshStudentData(window.COSY.student.code, true);
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
