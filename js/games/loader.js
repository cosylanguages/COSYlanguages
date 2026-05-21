/**
 * js/games/loader.js
 * Game logic for loader.js.
 */
/**
 * Games Loader & Filter Logic
 */
(function() {
    function initFilters() {
        const filters = document.querySelectorAll('.fpill');
        if (filters.length === 0) return;

        filters.forEach(btn => {
            btn.onclick = () => {
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.f;
                const cards = document.querySelectorAll('.game-card-lobby');

                cards.forEach(card => {
                    const tags = (card.dataset.tags || '').split(' ');
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            };
        });
    }

    /**
     * Restore openGameSheet logic for compatibility with the new UI
     */
    window.openGameSheet = function(name, icon, mode) {
        if (typeof window.launchGame === 'function') {
            // New Boutique UI defaults
            const settings = {
                selectedLang: document.getElementById("global-lang-select")?.value || localStorage.getItem('language') || 'en',
                selectedLevel: document.getElementById("global-level-select")?.value || 'starter',
                selectedTheme: 'all',
                selectedType: (name === 'Lucky Numbers' ? '1' : (name === 'Emoji Odyssey' ? 'guess' : (name === 'Word Linker' ? 'association' : undefined))),
                selectedTimer: (['Fluency Flow', 'Battle of Wits', 'Opinion Arena', "Critic's Corner"].includes(name) ? '120' : '60'),
                selectedBingoContent: 'numbers'
            };
            window.launchGame(name, mode, settings);
        } else {
            console.error("launchGame function not found in mobile.js");
        }
    };

    document.addEventListener('DOMContentLoaded', initFilters);
})();
