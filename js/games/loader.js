document.addEventListener('DOMContentLoaded', () => {
    const { getLang } = window.gameUtils;

    // Deep Linking Support
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const lang = urlParams.get('lang');
    const level = urlParams.get('level');
    const theme = urlParams.get('theme');
    const lesson = urlParams.get('lesson');
    const seed = urlParams.get('seed');
    const mode = urlParams.get('mode'); // for bingo: 'caller' or 'player'
    const embed = urlParams.get('embed');

    if (embed === 'true') {
        document.body.classList.add('embedded-mode');
    }

    // Level-based Recommendation Logic
    const globalLevelSelect = document.getElementById('global-level-select');
    const recommendedSection = document.getElementById('recommended-section');
    const recommendedGrid = document.getElementById('recommended-grid');

    const updateRecommendations = () => {
        const level = globalLevelSelect?.value || 'starter';
        const mapping = {
            'starter': ['action-hero', 'emoji-odyssey', 'lucky-numbers'],
            'elementary': ['guess-what', 'crossword', 'last-letter'],
            'intermediate': ['fluency-flow', 'opinion-arena', 'story-chain'],
            'upper-intermediate': ['battle-of-wits', 'hot-seat', 'word-linker'],
            'advanced': ['critics-corner', 'battle-of-wits', 'fluency-flow'],
            'proficiency': ['critics-corner', 'opinion-arena', 'battle-of-wits']
        };

        const recs = mapping[level] || mapping.starter;
        if (!recommendedGrid) return;

        recommendedGrid.innerHTML = '';
        let foundCount = 0;

        recs.forEach(gameId => {
            const originalCard = document.querySelector(`.game-card-lobby[data-game="${gameId}"]`);
            if (originalCard) {
                const clone = originalCard.cloneNode(true);
                // Remove level badge from clone to keep it clean
                clone.querySelector('.gc-badges')?.remove();
                recommendedGrid.appendChild(clone);
                foundCount++;
            }
        });

        if (recommendedSection) {
            recommendedSection.style.display = foundCount > 0 ? 'block' : 'none';
        }
    };

    globalLevelSelect?.addEventListener('change', updateRecommendations);
    updateRecommendations();

    if (game) {
        // Safe helpers
        const setById = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
        };
        const setBySelector = (modalId, selector, val) => {
            const modal = document.getElementById(modalId);
            if (!modal) return;
            const el = modal.querySelector(selector);
            if (el) el.value = val;
        };

        // Wait for other scripts to initialize
        setTimeout(() => {
            if (game === 'charades' || game === 'action_hero') {
                if (window.charadesGame) {
                    window.charadesGame.open();
                    if (lang) setById('charades-lang', lang);
                    if (level) setById('charades-level', level);
                    if (theme) setById('charades-theme', theme);
                    if (lesson) setById('charades-lessons', lesson);
                    window.charadesGame.start();
                }
            } else if (game === 'guess-who' || game === 'identity_mystery') {
                if (window.guessWhoGame) {
                    window.guessWhoGame.open();
                    if (lang) setBySelector('guess-who-modal', '.game-lang', lang);
                    if (level) setBySelector('guess-who-modal', '.game-level', level);
                    if (theme) setBySelector('guess-who-modal', '.game-theme', theme);
                    window.guessWhoGame.start();
                }
            } else if (game === 'guess-what' || game === 'object_quest') {
                if (window.guessWhatGame) {
                    window.guessWhatGame.open();
                    if (lang) setBySelector('guess-what-modal', '.game-lang', lang);
                    if (level) setBySelector('guess-what-modal', '.game-level', level);
                    if (theme) setBySelector('guess-what-modal', '.game-theme', theme);
                    window.guessWhatGame.start();
                }
            } else if (game === 'bingo' || game === 'lucky_numbers') {
                if (window.bingoGame) {
                    window.bingoGame.open();
                    if (lang) setById('bingo-lang', lang);
                    if (level) setById('bingo-level', level);
                    if (seed) setById('bingo-seed', seed);
                    if (mode === 'caller') window.bingoGame.startCaller();
                    else if (mode === 'player') window.bingoGame.startPlayer();
                }
            } else if (game === 'debates' || game === 'battle_of_wits') {
                if (window.debatesGame) {
                    window.debatesGame.open();
                    if (lang) setById('debates-lang', lang);
                    if (level) setById('debates-level', level);
                    window.debatesGame.start();
                }
            } else if (game === 'talk-talk' || game === 'fluency_flow') {
                if (window.talkTalkGame) {
                    window.talkTalkGame.open();
                    if (lang) setById('talk-lang', lang);
                    if (level) setById('talk-level', level);
                    window.talkTalkGame.start();
                }
            } else if (game === 'opinion_arena') {
                if (window.opinionArenaGame) {
                    window.opinionArenaGame.open();
                    if (lang) setById('opinion-lang', lang);
                    if (level) setById('opinion-level', level);
                    window.opinionArenaGame.start();
                }
            } else if (game === 'critics_corner') {
                if (window.criticsCornerGame) {
                    window.criticsCornerGame.open();
                    if (lang) setById('critics-lang', lang);
                    if (level) setById('critics-level', level);
                    window.criticsCornerGame.start();
                }
            } else if (game === 'emoji_odyssey') {
                if (window.emojiOdysseyGame) {
                    window.emojiOdysseyGame.open();
                    if (lang) setById('emoji-lang', lang);
                    if (level) setById('emoji-level', level);
                    window.emojiOdysseyGame.start();
                }
            } else if (game === 'word_linker') {
                if (window.wordLinkerGame) {
                    window.wordLinkerGame.open();
                    if (lang) setById('linker-lang', lang);
                    if (level) setById('linker-level', level);
                    window.wordLinkerGame.start();
                }
            } else if (game === 'last_letter') {
                if (window.lastLetterGame) {
                    window.lastLetterGame.open();
                    if (lang) setById('last-letter-lang', lang);
                    if (level) setById('last-letter-level', level);
                    if (theme) setById('last-letter-theme', theme);
                    window.lastLetterGame.start();
                }
            } else if (game === 'story-chain') {
                const modal = document.getElementById('story-chain-modal');
                if (modal) {
                    modal.style.display = 'flex';
                    if (lang) setById('sc-lang', lang);
                    if (level) setById('sc-level', level);
                    if (theme) setById('sc-theme', theme);
                    if (window.storyChainStart) window.storyChainStart();
                }
            } else if (game === 'hot-seat') {
                const modal = document.getElementById('hot-seat-modal');
                if (modal) {
                    modal.style.display = 'flex';
                    if (lang) setById('hs-lang', lang);
                    if (level) setById('hs-level', level);
                    if (theme) setById('hs-theme', theme);
                    if (window.hotSeatStart) window.hotSeatStart();
                }
            } else if (game === 'crossword' || game === 'cosy_crossword') {
                if (window.crosswordGame) {
                    window.crosswordGame.open();
                    if (lang) setById('crossword-lang', lang);
                    if (level) setById('crossword-level', level);
                    if (theme) setById('crossword-theme', theme);
                    window.crosswordGame.start();
                }
            }

            // Apply language to modals if lang param provided
            if (lang && typeof window.setLanguage === 'function') {
                window.setLanguage(lang);
            }
        }, 500);
    }
});
