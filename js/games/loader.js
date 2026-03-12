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

    if (game) {
        // Wait for other scripts to initialize
        setTimeout(() => {
            if (game === 'charades' || game === 'action_hero') {
                if (window.charadesGame) {
                    window.charadesGame.open();
                    if (lang) document.getElementById('charades-lang').value = lang;
                    if (level) document.getElementById('charades-level').value = level;
                    if (theme) document.getElementById('charades-theme').value = theme;
                    if (lesson) {
                         const lessonInput = document.getElementById('charades-lessons');
                         if (lessonInput) lessonInput.value = lesson;
                    }
                    window.charadesGame.start();
                }
            } else if (game === 'guess-who' || game === 'identity_mystery') {
                if (window.guessWhoGame) {
                    window.guessWhoGame.open();
                    const modal = document.getElementById('guess-who-modal');
                    if (lang) modal.querySelector('.game-lang').value = lang;
                    if (level) modal.querySelector('.game-level').value = level;
                    if (theme) modal.querySelector('.game-theme').value = theme;
                    window.guessWhoGame.start();
                }
            } else if (game === 'guess-what' || game === 'object_quest') {
                if (window.guessWhatGame) {
                    window.guessWhatGame.open();
                    const modal = document.getElementById('guess-what-modal');
                    if (lang) modal.querySelector('.game-lang').value = lang;
                    if (level) modal.querySelector('.game-level').value = level;
                    if (theme) modal.querySelector('.game-theme').value = theme;
                    window.guessWhatGame.start();
                }
            } else if (game === 'bingo' || game === 'lucky_numbers') {
                if (window.bingoGame) {
                    window.bingoGame.open();
                    if (lang) document.getElementById('bingo-lang').value = lang;
                    if (level) document.getElementById('bingo-level').value = level;
                    if (seed) document.getElementById('bingo-seed').value = seed;
                    if (mode === 'caller') window.bingoGame.startCaller();
                    else if (mode === 'player') window.bingoGame.startPlayer();
                }
            } else if (game === 'debates' || game === 'battle_of_wits') {
                if (window.debatesGame) {
                    window.debatesGame.open();
                    if (lang) document.getElementById('debates-lang').value = lang;
                    if (level) document.getElementById('debates-level').value = level;
                    window.debatesGame.start();
                }
            } else if (game === 'talk-talk' || game === 'fluency_flow') {
                if (window.talkTalkGame) {
                    window.talkTalkGame.open();
                    if (lang) document.getElementById('talk-lang').value = lang;
                    if (level) document.getElementById('talk-level').value = level;
                    window.talkTalkGame.start();
                }
            } else if (game === 'opinion_arena') {
                if (window.opinionArenaGame) {
                    window.opinionArenaGame.open();
                    if (lang) document.getElementById('opinion-lang').value = lang;
                    if (level) document.getElementById('opinion-level').value = level;
                    window.opinionArenaGame.start();
                }
            } else if (game === 'critics_corner') {
                if (window.criticsCornerGame) {
                    window.criticsCornerGame.open();
                    if (lang) document.getElementById('critics-lang').value = lang;
                    if (level) document.getElementById('critics-level').value = level;
                    window.criticsCornerGame.start();
                }
            }

            // Apply language to modals if lang param provided
            if (lang && typeof window.setLanguage === 'function') {
                window.setLanguage(lang);
            }
        }, 500);
    }
});
