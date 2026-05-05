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
        const unlocked = localStorage.getItem('student_unlocked') === 'true';
        const code = localStorage.getItem('student_course_code');

        if (unlocked && code) {
            initDashboard(code);
        } else {
            document.getElementById('gate').style.display = 'flex';
            document.getElementById('area').style.display = 'none';
        }
    });

    async function initDashboard(code) {
        document.getElementById('gate').style.display = 'none';
        document.getElementById('area').style.display = 'flex';

        // Mock/Load course
        if (typeof COURSES !== 'undefined' && COURSES[code]) {
            currentCourse = { ...COURSES[code], code };
        } else {
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
                localStorage.setItem('student_unlocked', 'true');
                localStorage.setItem('student_course_code', code);
                initDashboard(code);
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
        assignHW: () => {
            const val = document.getElementById('hw-input').value;
            if (val) {
                alert('Homework assigned to student: ' + val);
                document.getElementById('hw-input').value = '';
            }
        }
    };
})();
