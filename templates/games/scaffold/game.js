/**
 * COSYlanguages Game Module
 * This scaffold provides the basic structure for a new game.
 */

const GAME_ID = 'new_game_id'; // Unique ID for scoring

const NewGame = {
    state: {
        score: 0,
        currentRound: 0,
        data: null
    },

    async init() {
        console.log('Initializing New Game...');
        this.setupEventListeners();
    },

    setupEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.start());
    },

    async start() {
        // 1. Get configuration from UI (lang, level)
        const lang = 'en'; // Mock
        const level = 'B1'; // Mock

        // 2. Load data using gameUtils
        // this.state.data = await window.gameUtils.getGameData(lang, level, 'my_game_key');

        // 3. UI Transition
        document.getElementById('setup-overlay').style.display = 'none';
        document.getElementById('game-play').style.display = 'block';

        this.nextRound();
    },

    nextRound() {
        if (this.state.currentRound >= 10) {
            return this.gameOver();
        }
        this.state.currentRound++;
        this.render();
    },

    render() {
        const target = document.getElementById('target-area');
        target.innerHTML = `<p>Round ${this.state.currentRound}</p>`;
    },

    gameOver() {
        document.getElementById('game-play').style.display = 'none';
        document.getElementById('game-over').style.display = 'block';

        // Save score
        if (window.COSYScores) {
            window.COSYScores.save(GAME_ID, 'en', this.state.score);
        }
    }
};

window.addEventListener('load', () => NewGame.init());
