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
                    const tags = card.dataset.tags || '';
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            };
        });
    }

    document.addEventListener('DOMContentLoaded', initFilters);
})();
