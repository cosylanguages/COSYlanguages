
const fs = require('fs');
const path = require('path');

const LANGS = ['fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];

LANGS.forEach(lang => {
    const gameDataPath = path.join(__dirname, '..', 'games', 'data', lang, 'game_data.js');
    if (fs.existsSync(gameDataPath)) {
        const content = fs.readFileSync(gameDataPath, 'utf8');

        // If it was populated by our script with the "needsUpdate" logic, it will have the JSON.stringify structure
        if (content.includes('"critic": [') && content.includes('"etymology": [')) {
            console.log(`Cleaning up ${lang} game data...`);

            const emptyData = {
                fluency: [],
                opinions: [],
                battle: [],
                critic: [],
                action: { A1: [], A2: [], B1: [], B2: [] },
                identity: [],
                wordlinker: [],
                etymology: []
            };

            const output = `(function() {
    const data = ${JSON.stringify(emptyData, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['${lang}'] = data;
})();`;

            fs.writeFileSync(gameDataPath, output);
        }
    }
});
