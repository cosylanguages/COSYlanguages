
const fs = require('fs');
const path = require('path');

const LANGS = ['fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
const FALLBACK_LANG = 'en';

const EN_GAME_DATA_PATH = path.join(__dirname, '..', 'games', 'data', 'en', 'game_data.js');
const enContent = fs.readFileSync(EN_GAME_DATA_PATH, 'utf8');

// Simple extraction of data object from English file
const enDataMatch = enContent.match(/const data = (\{[\s\S]*?\});/);
let enData = {};
if (enDataMatch) {
    try {
        enData = eval(`(${enDataMatch[1]})`);
    } catch (e) {
        console.error("Failed to parse EN game data", e);
    }
}

LANGS.forEach(lang => {
    const gameDataPath = path.join(__dirname, '..', 'games', 'data', lang, 'game_data.js');
    let currentContent = '';
    if (fs.existsSync(gameDataPath)) {
        currentContent = fs.readFileSync(gameDataPath, 'utf8');
    }

    // If it's an empty shell, let's fill it with some fallback content for games that don't have enough data
    // Especially for Critic's Corner and Etymology which aren't easily enriched from vocab

    let needsUpdate = false;
    if (!currentContent || currentContent.includes('fluency: [],') || currentContent.includes('critic: [],')) {
        needsUpdate = true;
    }

    if (needsUpdate) {
        console.log(`Updating ${lang} game data...`);

        // We use a subset of English data for things like etymology (which is often Latin/Greek anyway)
        // and quotes (which are famous international ones)
        const newData = {
            fluency: [],
            opinions: [],
            battle: [],
            critic: enData.critic || [],
            action: { A1: [], A2: [], B1: [], B2: [] },
            identity: [],
            wordlinker: [],
            etymology: enData.etymology || []
        };

        const output = `(function() {
    const data = ${JSON.stringify(newData, null, 6)};

    window.gameData = window.gameData || {};
    window.gameData['${lang}'] = data;
})();`;

        fs.writeFileSync(gameDataPath, output);
    }
});
