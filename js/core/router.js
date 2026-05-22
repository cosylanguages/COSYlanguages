/**
 * js/core/router.js
 * Simple hash-based navigation and navigation active state management.
 */

(function() {
    /**
     * Updates the active class on navigation links based on current URL path and hash.
     */
    const updateNavActiveState = () => {
        const navLinks = document.querySelectorAll('nav a');
        const currentUrl = new URL(window.location.href);
        const currentPath = currentUrl.pathname.split('/').pop() || 'index.html';
        const currentHash = currentUrl.hash;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http')) return;

            link.classList.remove('active');

            const linkUrl = new URL(href, window.location.origin + window.location.pathname);
            const linkPath = linkUrl.pathname.split('/').pop() || 'index.html';
            const linkHash = linkUrl.hash;

            if (linkPath === currentPath) {
                if (linkHash) {
                    if (linkHash === currentHash) link.classList.add('active');
                } else if (!currentHash) {
                    link.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('hashchange', updateNavActiveState);
    window.addEventListener('popstate', updateNavActiveState);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateNavActiveState);
    } else {
        updateNavActiveState();
    }

    // Expose to window for manual calls
    window.updateNavActiveState = updateNavActiveState;
})();
