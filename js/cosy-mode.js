/**
 * COSYlanguages — cosy-mode.js
 * Centralized Mode Management (Free, Student, Teacher)
 */

(function() {
    const CODE_KEY = 'student_course_code';
    const ROLE_KEY = 'cosy_user_role';

    function detectMode() {
        const code = localStorage.getItem(CODE_KEY) || '';
        const role = localStorage.getItem(ROLE_KEY) || '';

        if (code.startsWith('TEACH-') || role === 'teacher') return 'teacher';
        if (code.startsWith('COSY-') || role === 'student') return 'student';
        return 'free';
    }

    window.COSY_MODE = detectMode();
    console.log('Current Mode:', window.COSY_MODE);

    function getPrefix() {
        const path = window.location.pathname;
        if (path.includes('/portal/') || path.includes('/practice/') || path.includes('/games/') || path.includes('/languages/')) {
            return '../';
        }
        return '';
    }

    function reshapeUI() {
        const mode = window.COSY_MODE;
        document.body.setAttribute('data-role', mode);

        // Update Navigation
        const nav = document.getElementById('main-nav');
        if (nav) {
            const navLinks = nav.querySelector('.nav-links');
            const logoArea = nav.querySelector('.nav-logo');
            const prefix = getPrefix();

            if (mode === 'student' || mode === 'teacher') {
                // Student/Teacher Nav
                const nickname = localStorage.getItem('cosy_user_name') || 'Friend';
                const roleIcon = mode === 'teacher' ? '👩‍🏫' : '🎓';
                const roleText = mode === 'teacher' ? 'Teacher panel' : `Hi ${nickname}`;

                // Update Logo Text if needed
                let logoText = nav.querySelector('.nav-logo-text');
                if (!logoText) {
                    logoText = document.createElement('span');
                    logoText.className = 'nav-logo-text';
                    logoArea.appendChild(logoText);
                }
                logoText.style.display = 'block';
                logoText.textContent = `${roleIcon} ${roleText}`;

                // Replace Nav Links
                if (navLinks) {
                    if (mode === 'student') {
                        navLinks.innerHTML = `
                            <li><a href="${prefix}portal/index.html">My Roadmap</a></li>
                            <li><a href="${prefix}portal/index.html?tab=vocab">Vocabulary</a></li>
                            <li><a href="${prefix}portal/index.html?tab=homework">Homework</a></li>
                            <li><a href="${prefix}practice/index.html">Practice</a></li>
                            <li><a href="${prefix}games/index.html">Games</a></li>
                            <li><button onclick="cosyMode.logout()" class="nav-student" style="background:none; border:none; cursor:pointer;">Sign Out 🔑</button></li>
                        `;
                    } else {
                        navLinks.innerHTML = `
                            <li><a href="${prefix}portal/index.html">Students</a></li>
                            <li><a href="${prefix}portal/index.html?tab=assign">Assign</a></li>
                            <li><a href="${prefix}portal/index.html?tab=progress">Progress</a></li>
                            <li><a href="${prefix}portal/index.html?tab=codes">Codes</a></li>
                            <li><a href="${prefix}portal/index.html?tab=broadcast">Broadcast</a></li>
                            <li><button onclick="cosyMode.logout()" class="nav-student" style="background:none; border:none; cursor:pointer;">Sign Out 🔑</button></li>
                        `;
                    }
                }

                // Hide Contact CTA
                const contactCTA = nav.querySelector('.nav-wa');
                if (contactCTA) contactCTA.style.display = 'none';

                // Language switcher - maybe keep or hide? User says "marketing nav disappears"
                const langSwitcher = nav.querySelector('.nav-lang-switcher');
                if (langSwitcher) langSwitcher.style.display = 'none';

            } else {
                // Free Nav (Standard)
                // index.html already has this, but if we navigate back from portal, we might need to restore it
                // For now, let's assume index.html is the source of truth for FREE mode.
            }
        }

        // Toggle elements based on data-mode/data-role
        document.querySelectorAll('[data-mode]').forEach(el => {
            const targetMode = el.getAttribute('data-mode');
            if (targetMode === mode) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }

    window.cosyMode = {
        reshapeUI,
        logout: () => {
            localStorage.removeItem(CODE_KEY);
            localStorage.removeItem(ROLE_KEY);
            localStorage.removeItem('student_unlocked');
            window.location.href = getPrefix() + 'index.html';
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', reshapeUI);
    } else {
        reshapeUI();
    }
})();
