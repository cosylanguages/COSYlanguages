/**
 * js/portal/gateway.js
 * Logic for the Portal Gateway page.
 */
(function() {
    'use strict';

    async function handleUnlock() {
        const codeInput = document.getElementById('mp-gateway-code');
        const errorMsg = document.getElementById('mp-gateway-error');
        if (!codeInput) return;

        const code = codeInput.value.trim();
        if (!code) return;

        const result = await window.COSY.unlock(code);
        if (result && result.ok) {
            const role = window.COSY.mode;
            if (window.cosySetRole) window.cosySetRole(role);

            const p = window.COSY.getPrefix();
            // Use trailing slash to let server/browser resolve to index.html
            window.location.href = p + 'portal/' + role + '/';
        } else {
            if (errorMsg) {
                errorMsg.style.display = 'block';
                setTimeout(() => { errorMsg.style.display = 'none'; }, 3000);
            }
        }
    }

    function handleFree() {
        const langEl = document.getElementById('free-lang');
        const levelEl = document.getElementById('free-level');
        if (!langEl || !levelEl) return;

        const lang = langEl.value;
        const level = levelEl.value;

        window.COSY.setFreeMode(lang, level);
        // Do NOT call cosySetRole('free') as it overrides the 'student' mode needed for dashboard.js
        const p = window.COSY.getPrefix();
        window.location.href = p + 'portal/free/index.html';
    }

    function init() {
        // Expose functions to global scope for HTML onclick handlers
        window.handleUnlock = handleUnlock;
        window.handleFree = handleFree;

        // Auto-redirect if already logged in
        const role = (window.cosyGetRole && window.cosyGetRole()) || (window.COSY && window.COSY.mode);
        if (role && role !== 'free' && (window.COSY.student || window.COSY.teacher || window.COSY.admin)) {
             window.location.href = `./${role}/index.html`;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
