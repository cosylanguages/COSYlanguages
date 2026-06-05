/**
 * js/portal/admin-dashboard.js
 * Admin-specific dashboard logic (Student management, Curriculum explorer).
 */
(function() {
    'use strict';

    if (!window.cosyDays) return;

    Object.assign(window.cosyDays, {
        async renderAdminDashboard() {
            try {
                const students = await window.COSY?.sync();
                const grid = document.getElementById('admin-students-grid');
                if (!grid || !students) return;

                grid.innerHTML = Object.entries(students).map(([code, s]) => `
                    <div class="widget-card student-admin-card">
                        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                            <span style="font-weight:900;">${s.nickname || s.name}</span>
                            <span class="badge-new" style="background:#e8ee8f">${s.lang} · ${s.level}</span>
                        </div>
                        <div style="font-size:0.75rem; color:#666;">Reality Code: <code>${code}</code></div>
                        <div style="font-size:0.75rem; color:#666;">Progress: Day ${s.currentDay || 0} · ✨ ${s.points || 0} pts</div>
                        <div style="margin-top:15px; display:flex; gap:5px;">
                            <button class="btn-primary-new" style="flex:1; font-size:0.65rem; padding:8px; background:#1c1917" onclick="cosyDays.adminManageStudent('${code}')">Manage ⚙️</button>
                        </div>
                    </div>
                `).join('');
            } catch (e) {
                console.error("Failed to render admin dashboard", e);
            }
        },

        adminManageStudent(code) {
            window.cosyDays.showToast(`Managing student ${code}...`);
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
            window.cosyDays.showToast("Student added locally! Use Export to save to GitHub.");

            const form = document.getElementById('admin-add-student-form');
            if (form) form.style.display = 'none';

            window.cosyDays.renderAdminDashboard();
        },

        async adminExportStudents() {
            const students = await window.COSY?.sync();
            if (!students) return;
            const json = JSON.stringify(students, null, 2);
            navigator.clipboard.writeText(json).then(() => {
                window.cosyDays.showToast("JSON copied to clipboard!");
            });
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
                window.cosyDays.showToast(`Imported ${Object.keys(override).length} students from GSheet!`);
                window.cosyDays.renderAdminDashboard();
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

            const data = await window.cosyDays.loadCurriculum(lang, level);
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
