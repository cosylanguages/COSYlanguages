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
