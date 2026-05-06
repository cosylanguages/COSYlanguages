/**
 * Games Loader & Filter Logic
 */
(function() {
    function initFilters() {
        const filters = document.querySelectorAll('.filter-btn');
        filters.forEach(btn => {
            btn.onclick = () => {
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                const cards = document.querySelectorAll('.game-card-lobby');

                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.level === filter) {
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
