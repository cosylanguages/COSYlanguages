/**
 * COSYlanguages — cosy-mode.js
 * "One URL, Three Realities"
 * Handles mode detection (Free, Student, Teacher) and UI reshaping.
 */

(function() {
    const COSY = {
        MODES: { FREE: 'FREE', STUDENT: 'STUDENT', TEACHER: 'TEACHER' },
        currentMode: 'FREE',
        userData: null,

        init() {
            this.detectMode();
            this.setupUI();
            this.broadcastObserver();

            // Re-run on storage changes (multi-tab sync)
            window.addEventListener('storage', (e) => {
                if (e.key === 'cosy_user_code') {
                    this.detectMode();
                    this.setupUI();
                }
            });
        },

        detectMode() {
            const code = localStorage.getItem('cosy_user_code') || '';
            if (code.startsWith('TEACH-')) {
                this.currentMode = this.MODES.TEACHER;
                this.userData = { code };
            } else if (code.startsWith('COSY-')) {
                this.currentMode = this.MODES.STUDENT;
                this.userData = {
                    code,
                    name: localStorage.getItem('cosy_user_name') || 'Learner'
                };
            } else {
                this.currentMode = this.MODES.FREE;
                this.userData = null;
            }

            // Set body class for CSS targeting
            document.body.classList.remove('mode-free', 'mode-student', 'mode-teacher');
            document.body.classList.add(`mode-${this.currentMode.toLowerCase()}`);
            document.body.setAttribute('data-cosy-mode', this.currentMode);
        },

        unlock(code, name = '') {
            if (!code) return;
            localStorage.setItem('cosy_user_code', code.toUpperCase());
            if (name) localStorage.setItem('cosy_user_name', name);

            // Trigger refresh
            this.detectMode();
            this.setupUI();

            // Handle redirection or reload
            const isPortal = window.location.pathname.includes('/portal/');
            const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.includes('/COSYlanguages/');

            if (isHome && !isPortal) {
                const prefix = this.getPrefix();
                window.location.href = prefix + 'portal/index.html';
            } else {
                // Already in portal or elsewhere, reload to trigger app-specific init (like days.js)
                window.location.reload();
            }
        },

        signOut() {
            localStorage.removeItem('cosy_user_code');
            localStorage.removeItem('cosy_user_name');
            this.detectMode();
            this.setupUI();
            // Redirect to home
            const prefix = this.getPrefix();
            window.location.href = prefix + 'index.html';
        },

        getPrefix() {
            const path = window.location.pathname;
            const depth = (path.split('/').length - (path.includes('/COSYlanguages/') ? 3 : 2));
            return depth > 0 ? '../'.repeat(depth) : '';
        },

        setupUI() {
            this.updateNav();
            this.reshapContent();
        },

        updateNav() {
            const nav = document.getElementById('main-nav');
            if (!nav) return;

            const prefix = this.getPrefix();
            const linksUl = nav.querySelector('.nav-links');
            if (!linksUl) return;

            if (this.currentMode === this.MODES.TEACHER) {
                linksUl.innerHTML = `
                    <li><a href="${prefix}portal/index.html">Students</a></li>
                    <li><a href="${prefix}portal/index.html?tab=assign">Assign</a></li>
                    <li><a href="${prefix}portal/index.html?tab=progress">Progress</a></li>
                    <li><a href="${prefix}portal/index.html?tab=broadcast">Broadcast</a></li>
                `;
                this.setNavRight(`👩‍🏫 Teacher Panel`, `🔑 Sign out`);
            } else if (this.currentMode === this.MODES.STUDENT) {
                linksUl.innerHTML = `
                    <li><a href="${prefix}portal/index.html">My Roadmap</a></li>
                    <li><a href="${prefix}portal/vocabulary-reference.html">Vocabulary</a></li>
                    <li><a href="${prefix}portal/index.html?tab=homework">Homework</a></li>
                    <li><a href="${prefix}practice/index.html">Practice</a></li>
                    <li><a href="${prefix}games/index.html">Games</a></li>
                `;
                const pts = localStorage.getItem('cosy_total_points') || '0';
                const streak = localStorage.getItem('practice_streak') || '0';
                this.setNavRight(`🔥 ${streak} · ✨ ${pts}`, `🔑 Sign out`);
            } else {
                // FREE MODE - Restore default nav if it was changed
                // (Optional: define default HTML here or keep what was in the static file)
                // For now, let's keep it simple and assume standard HTML is for FREE
            }
        },

        setNavRight(statusHtml, actionText) {
            const nav = document.getElementById('main-nav');
            if (!nav) return;
            let rightArea = nav.querySelector('.nav-right-mode');
            if (!rightArea) {
                rightArea = document.createElement('div');
                rightArea.className = 'nav-right-mode';
                nav.appendChild(rightArea);
            }

            rightArea.innerHTML = `
                <div class="nav-status">${statusHtml}</div>
                <button class="nav-action" onclick="COSY.signOut()">${actionText}</button>
            `;
        },

        reshapContent() {
            // Hide elements with [data-mode] that don't match.
            // For matching elements, we remove our forced 'none' but don't force a specific display,
            // allowing the app's native CSS/JS (like tab systems) to work.
            const modeElements = document.querySelectorAll('[data-mode]');
            modeElements.forEach(el => {
                const allowedModes = el.getAttribute('data-mode').split(' ');
                if (allowedModes.includes(this.currentMode)) {
                    // Only clear it if we were the ones who set it to 'none'
                    if (el.style.display === 'none') {
                        el.style.display = '';
                    }
                } else {
                    el.style.setProperty('display', 'none', 'important');
                }
            });
        },

        async broadcastObserver() {
            const banner = document.getElementById('teacher-broadcast');
            if (!banner) return;

            try {
                const prefix = this.getPrefix();
                const res = await fetch(prefix + 'data/broadcast.json');
                const data = await res.json();
                if (data && data.message && data.active) {
                    banner.innerHTML = `<span>📢</span> ${data.message}`;
                    banner.style.display = 'block';
                } else {
                    banner.style.display = 'none';
                }
            } catch (e) {
                banner.style.display = 'none';
            }
        }
    };

    window.COSY = COSY;
    document.addEventListener('DOMContentLoaded', () => COSY.init());
})();
