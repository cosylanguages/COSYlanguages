/**
 * games/object_quest/game.js
 * Standalone logic for Object Quest.
 */
(function() {
    const GAME_ID = 'objectquest';
    const GAME_TITLE = 'Object Quest 📦';
    const GAME_META = 'Mystery · Solo or group';
    const LEVEL_OPTS = ['Starter (A1)','Primary (A2)','Intermediate (B1)','Upper (B2)','Advanced (C1)','Proficiency (C2)'];
    const LANG_OPTS = ['English 🇬🇧','Français 🇫🇷','Italiano 🇮🇹','Русский 🇷🇺','Ελληνικά 🇬🇷'];

    function pick(arr) { if (!arr || !arr.length) return null; return arr[Math.floor(Math.random() * arr.length)]; }

    function renderSetup() {
        document.getElementById('go-title').textContent = GAME_TITLE;
        document.getElementById('go-meta').textContent = GAME_META;
        const body = document.getElementById('go-body');
        body.innerHTML = `
            <div class="setup-screen">
              <h2>Object Quest 📦</h2>
              <p>Describe an object without naming it. Use clues about its size, color, or location. Can others guess what it is?</p>
              <div class="setup-field"><label>Category</label>
                <select class="styled-sel" id="s-cat">
                  <option value="all">All objects</option>
                  <option value="group:environment_nature">Animals & Nature 🐾</option>
                  <option value="group:food_drink">Food & Drink 🍕</option>
                  <option value="group:places_geography">Places & Geography 🌍</option>
                  <option value="group:home_living">Home & Gadgets 🏠</option>
                  <option value="group:clothes_appearance">Clothes & Accessories 👕</option>
                  <option value="group:health_body">Body Parts & Health 🏥</option>
                </select>
              </div>
              <div class="setup-field"><label>Level</label>
                <select class="styled-sel" id="s-level">${LEVEL_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <div class="setup-field"><label>Language</label>
                <select class="styled-sel" id="s-lang">${LANG_OPTS.map(l=>`<option>${l}</option>`).join('')}</select>
              </div>
              <button class="btn-start-game" onclick="COSY_GAME.start()">▶ Start game</button>
            </div>`;
    }

    window.COSY_GAME = {
        async start() {
            const lang = COSYLoader.getLangCode(document.getElementById('s-lang')?.value);
            const level = COSYLoader.getLevelCode(document.getElementById('s-level')?.value);
            const category = document.getElementById('s-cat')?.value || 'all';
            document.getElementById('go-body').innerHTML = '<div style="text-align:center;padding:4rem;">Loading...</div>';

            await COSYLoader.loadLevelData(lang, level);
            COSYGame.init(GAME_ID, lang, level);

            const body = document.getElementById('go-body');
            const vocab = (window.vocabularyData && window.vocabularyData[lang]) || [];

            const personKeywords = ['profession', 'job', 'people', 'person', 'nationality', 'famous'];
            let objects = vocab.filter(v => v.theme && !personKeywords.some(k => v.theme.toLowerCase().includes(k)));
            if (category !== 'all') {
                objects = objects.filter(v => v.theme && gameUtils.isThemeMatch(v.theme, category));
            }

            if (objects.length < 5) {
                body.innerHTML = '<div class="game-card">Not enough vocabulary in this category. Try another! <button onclick="COSY_GAME.reset()">Back</button></div>';
                return;
            }

            let current = pick(objects), hints = 0;

            const renderQuest = () => {
                body.innerHTML = `
                    <div class="game-card">
                        <div class="game-label">📦 Your Object</div>
                        <div class="game-prompt" style="font-size:2rem">${current.word} ${current.emoji || ''}</div>
                        <div class="game-sub">Describe this to others. Give clues about size, color, or where it is found.</div>
                    </div>
                    <div class="game-card" id="hint-card" style="display:${hints > 0 ? 'block' : 'none'}">
                        <div class="game-label">💡 Help Clues</div>
                        <div id="hint-list" style="font-size:.9rem; line-height:1.6">
                            ${hints >= 1 ? `<div>• It starts with <strong>${current.word[0].toUpperCase()}</strong></div>` : ''}
                            ${hints >= 2 ? `<div>• It has <strong>${current.word.length}</strong> letters</div>` : ''}
                            ${hints >= 3 ? `<div>• Definition: <em>${current.definitions?.[0]?.text || '...'}</em></div>` : ''}
                        </div>
                    </div>
                    <div class="game-controls">
                        <button class="btn-g-primary" onclick="COSY_GAME.oqHint()">Give a hint</button>
                        <button class="btn-g-secondary" onclick="COSY_GAME.start()">Next object →</button>
                        <button class="btn-g-danger" onclick="COSY_GAME.reset()">Setup</button>
                    </div>`;
            };

            window.COSY_GAME.oqHint = () => { hints++; renderQuest(); };
            renderQuest();
        },

        reset: renderSetup
    };

    document.addEventListener('DOMContentLoaded', renderSetup);
})();
