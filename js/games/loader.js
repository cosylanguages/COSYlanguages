/**
 * js/games/loader.js
 * Modernized Games Hub controller: handles card filtering, standalone page routing,
 * and backward-compatible launch parameter redirections.
 */
(function() {
    'use strict';

    const GAME_PATH_MAP = {
      fluency: 'fluency_flow/index.html',
      battle: 'battle_of_wits/index.html',
      opinion: 'opinion_arena/index.html',
      critic: 'critics_corner/index.html',
      storychain: 'story_chain/index.html',
      hotseat: 'hot_seat/index.html',
      action: 'action_hero/index.html',
      identity: 'identity_mystery/index.html',
      objectquest: 'object_quest/index.html',
      wordlinker: 'word_linker/index.html',
      lastletter: 'last_letter/index.html',
      emoji: 'emoji_odyssey/index.html',
      crossword: 'cosy_crossword/index.html',
      bingo: 'lucky_numbers/index.html',
      etymology: 'etymology_explorer/index.html',
      gender: 'what_gender_is_it/index.html',
      questions: 'hundred_questions/index.html',
      storytelling: 'storytelling/index.html'
    };

    window.openGame = function(id) {
        const path = GAME_PATH_MAP[id];
        if (path) {
            location.href = path;
        } else {
            console.error('Game not found in route map:', id);
        }
    };

    function initFilters() {
        const filters = document.querySelectorAll('.fpill');
        if (filters.length === 0) return;

        filters.forEach(btn => {
            btn.onclick = () => {
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.f;
                const cards = document.querySelectorAll('.gc:not(.coming)');

                cards.forEach(card => {
                    const tags = (card.dataset.tags || '').split(' ');
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            };
        });
    }

    function checkRedirectParams() {
        const params = new URLSearchParams(window.location.search);
        const gameParam = params.get('game');
        if (gameParam && GAME_PATH_MAP[gameParam]) {
            location.href = GAME_PATH_MAP[gameParam];
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initFilters();
        checkRedirectParams();
    });
})();
