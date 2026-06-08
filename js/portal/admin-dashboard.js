/**
 * js/portal/admin-dashboard.js
 * Admin-specific dashboard logic (Student management, Curriculum explorer).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    Object.assign(window.cosyDays, {
        adminManageStudent(code) {
            window.COSY?.showToast(`Managing student ${code}...`);
        },

        adminShowAddStudent() {
            const form = document.getElementById('admin-add-student-form');
            if (form) form.style.display = 'block';
        },

        async adminSaveStudent() {
            const name = document.getElementById('as-name').value;
            const code = document.getElementById('as-code').value;
            const lang = document.getElementById('as-lang').value;
            const level = document.getElementById('as-level').value;

            if (!name || !code) return alert("Name and Code are required.");

            const students = await window.COSY?.sync() || {};
            students[code] = { nickname: name, lang, level, course: 'GEN', currentDay: 1, points: 0 };

            localStorage.setItem('cosy_admin_students_override', JSON.stringify(students));
            window.COSY?.showToast("Student added locally!");

            const form = document.getElementById('admin-add-student-form');
            if (form) form.style.display = 'none';

            if (typeof window.loadTeacherDashboard === 'function') {
                window.loadTeacherDashboard();
            }
        },

        async adminLoadGSheet() {
            const urlEl = document.getElementById('as-gsheet-url');
            const url = urlEl ? urlEl.value : '';
            if (!url) return alert("Please enter a valid Google Sheets CSV URL.");
            try {
                const res = await fetch(url);
                const csvText = await res.text();
                const rows = csvText.split('\n').slice(1);
                const override = {};
                rows.forEach(row => {
                    const [code, nickname, lang, level] = row.split(',').map(s => s.trim());
                    if (code) override[code] = { nickname, lang, level, course: 'GEN', currentDay: 1, points: 0 };
                });
                localStorage.setItem('cosy_admin_students_override', JSON.stringify(override));
                window.COSY?.showToast(`Imported ${Object.keys(override).length} students from GSheet!`);
                if (typeof window.loadTeacherDashboard === 'function') {
                    window.loadTeacherDashboard();
                }
            } catch (e) {
                alert("Failed to load GSheet. Make sure it is public and shared as CSV.");
            }
        },

        async adminExploreCurriculum() {
            const lang = document.getElementById('admin-curr-lang').value;
            const level = document.getElementById('admin-curr-level').value;
            const result = document.getElementById('admin-curriculum-result');
            if (!result) return;
            result.innerHTML = 'Loading...';

            const data = await window.COSY?.loadCurriculum(lang, level);
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
        }
    });

})();
