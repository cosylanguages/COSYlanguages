/**
 * js/dashboard-core.js
 * Shared logic for student dashboard (Home & Portal)
 */

window.cosyDashboard = (function() {
    let currentCourse = null;
    let curriculum = [];

    async function loadStudentData(code, silent = false) {
        let studentData = null;
        try {
            const path = window.location.pathname;
            const prefix = (path.includes('/portal/') || path.includes('/practice/') || path.includes('/games/')) ? '../' : '';
            const resp = await fetch(prefix + 'data/students.json?t=' + Date.now());
            const allStudents = await resp.json();
            studentData = allStudents[code];
        } catch (e) {
            console.error('Failed to fetch student data', e);
        }

        if (studentData) {
            let activeCourse = null;
            if (studentData.courses && studentData.courses.length > 0) {
                const localStudent = JSON.parse(localStorage.getItem('cosy_student') || '{}');
                const localActive = localStudent.courses ? localStudent.courses.find(c => c.is_active) : null;

                if (localActive) {
                    const serverCourse = studentData.courses.find(c => c.id === localActive.id);
                    activeCourse = serverCourse || studentData.courses[0];
                } else {
                    activeCourse = studentData.courses.find(c => c.is_active) || studentData.courses[0];
                }
            } else {
                activeCourse = studentData;
            }

            currentCourse = {
                lang: activeCourse.language || activeCourse.lang || 'en',
                level: activeCourse.level || 'A1',
                type: activeCourse.type || activeCourse.course || 'General',
                code: code,
                id: activeCourse.id || code,
                nickname: studentData.nickname,
                current_day: activeCourse.current_day || 1,
                next_lesson: activeCourse.next_lesson,
                homework: activeCourse.homework || [],
                lesson_notes: activeCourse.lesson_notes || {},
                mistakes: activeCourse.mistakes || [],
                points: studentData.points || 0,
                streak: studentData.streak || 0
            };

            localStorage.setItem('cosy_user_name', studentData.nickname);
            localStorage.setItem('cosy_total_points', studentData.points);
            localStorage.setItem('practice_streak', studentData.streak);

            // Sync COSY mode
            const currentStudent = JSON.parse(localStorage.getItem('cosy_student') || '{}');
            const updatedStudent = { ...currentStudent, ...studentData, code };
            if (currentStudent.courses && updatedStudent.courses) {
                updatedStudent.courses.forEach(c => {
                    const local = currentStudent.courses.find(lc => lc.id === c.id);
                    if (local) c.is_active = local.is_active;
                });
            }
            localStorage.setItem('cosy_student', JSON.stringify(updatedStudent));
            if (window.COSY) window.COSY.refresh();

            return currentCourse;
        }
        return null;
    }

    async function fetchCurriculum(lang, level) {
        const path_loc = window.location.pathname;
        const prefix = (path_loc.includes('/portal/') || path_loc.includes('/practice/') || path_loc.includes('/games/')) ? '../' : '';
        const path = `${prefix}js/data/curriculum/${lang.toLowerCase()}_${level.toLowerCase()}.js`;

        return new Promise((resolve) => {
            if (document.querySelector(`script[src*="${path}"]`)) {
                const key = `${lang.toLowerCase()}_${level.toLowerCase()}`;
                curriculum = (window.curriculumData && window.curriculumData[key]) || [];
                return resolve(curriculum);
            }
            const script = document.createElement('script');
            script.src = path;
            script.onload = () => {
                const key = `${lang.toLowerCase()}_${level.toLowerCase()}`;
                curriculum = (window.curriculumData && window.curriculumData[key]) || [];
                resolve(curriculum);
            };
            script.onerror = () => { resolve([]); };
            document.head.appendChild(script);
        });
    }

    function populateWidgets(course, curriculumData) {
        // 1. Stats
        const prog = JSON.parse(localStorage.getItem('cosy_progress') || '{}');
        const key = `${course.code}_${course.id}`;
        const done = prog[key] || [];

        if (document.getElementById('streak-val')) document.getElementById('streak-val').textContent = course.streak;
        if (document.getElementById('points-val')) document.getElementById('points-val').textContent = course.points.toLocaleString();
        if (document.getElementById('done-val')) document.getElementById('done-val').textContent = done.length;

        // 2. Next Lesson / Prep Card
        const nextNum = done.length + 1;
        const allLessons = curriculumData.flatMap(u => u.lessons || [u]);
        const nextLesson = allLessons[nextNum - 1];

        const nextVal = document.getElementById('next-lesson-val');
        if (nextVal) {
            if (course.next_lesson && course.next_lesson.date) {
                nextVal.innerHTML = `
                    <div style="font-size:1.1rem">${course.next_lesson.date} @ ${course.next_lesson.time}</div>
                    <div style="font-size:0.75rem; font-weight:400; margin-top:5px">Unit ${course.current_day}: ${nextLesson?.title || ''}</div>
                    <div style="display:flex; gap:8px; margin-top:10px">
                        <a href="${course.next_lesson.meet_link}" target="_blank" class="btn-primary-new" style="flex:1; font-size:0.7rem; padding:8px; background:#4285f4; text-align:center; color:white; text-decoration:none; border-radius:8px;">Join 📹</a>
                        <a href="${course.next_lesson.progressme_link || '#'}" target="_blank" class="btn-primary-new" style="flex:1; font-size:0.7rem; padding:8px; background:#ff5722; text-align:center; color:white; text-decoration:none; border-radius:8px;">Materials 📚</a>
                    </div>
                `;
            } else if (nextLesson) {
                nextVal.textContent = nextLesson.title;
            } else {
                nextVal.textContent = "All Done! 🎉";
            }
        }

        const wordCont = document.getElementById('prep-words');
        if (nextLesson && nextLesson.vocab && wordCont) {
            wordCont.innerHTML = '';
            const raw = Array.isArray(nextLesson.vocab) ? nextLesson.vocab : [];
            const words = raw.slice(0, 5).map(w => typeof w === 'string' ? w : (w.w || w.word));
            words.forEach(w => {
                const span = document.createElement('span');
                span.className = 'prep-word';
                span.textContent = w;
                wordCont.appendChild(span);
            });
        }

        // 3. Mistakes
        const mistakeCont = document.getElementById('mistake-list');
        if (mistakeCont) {
            if (course.mistakes && course.mistakes.length > 0) {
                mistakeCont.innerHTML = course.mistakes.map(m => `<span class="prep-word" style="background:#fff5f5; color:#c53030; border-color:#feb2b2; margin-right:5px; margin-bottom:5px; display:inline-block; padding:4px 8px; border-radius:6px; border:1px solid; font-size:0.8rem;">${m}</span>`).join('');
                const parent = mistakeCont.closest('.widget-card');
                if (parent) parent.style.display = 'block';
            } else {
                const parent = mistakeCont.closest('.widget-card');
                if (parent) parent.style.display = 'none';
            }
        }

        // 4. Homework (if on homepage)
        const hwList = document.getElementById('home-homework-list');
        if (hwList && course.homework) {
            if (course.homework.length > 0) {
                hwList.innerHTML = course.homework.slice(0, 3).map(hw => `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding:10px; background:#f9f9f9; border-radius:12px;">
                        <div>
                            <div style="font-weight:700; font-size:0.85rem; ${hw.done ? 'text-decoration:line-through; color:#aaa' : ''}">${hw.task}</div>
                            <div style="font-size:0.7rem; color:#888;">Due: ${hw.due}</div>
                        </div>
                        <div>${hw.done ? '✅' : '⏳'}</div>
                    </div>
                `).join('');
            } else {
                hwList.innerHTML = '<div style="text-align:center; color:#aaa; font-size:0.8rem; padding:10px;">No pending homework.</div>';
            }
        }
    }

    return {
        loadStudentData,
        fetchCurriculum,
        populateWidgets
    };
})();
