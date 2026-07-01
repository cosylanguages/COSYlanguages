
const fs = require('fs');
const path = require('path');

// Mock browser environment for data scripts
global.window = {
    COSY_LEVELS: ['starter', 'elementary', 'intermediate', 'upper', 'advanced', 'proficiency'],
    getLevelCode: (l) => {
        const map = {
            'A1': 'starter', 'starter': 'starter',
            'A2': 'elementary', 'elementary': 'elementary',
            'B1': 'intermediate', 'intermediate': 'intermediate',
            'B2': 'upper', 'upper': 'upper',
            'C1': 'advanced', 'advanced': 'advanced',
            'C2': 'proficiency', 'proficiency': 'proficiency'
        };
        return map[l] || l;
    },
    getLangCode: (l) => l,
    levelShortToId: (l) => {
        const map = { 'A1': 'starter', 'A2': 'elementary', 'B1': 'intermediate', 'B2': 'upper', 'C1': 'advanced', 'C2': 'proficiency' };
        return map[l] || l;
    }
};

const LANGS = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper', 'advanced', 'proficiency'];
const GAME_KEYS = ['fluency', 'opinions', 'battle', 'critic', 'identity', 'wordlinker', 'etymology', 'action'];

// Load the shared logic
// We need to extract getGameData logic since we can't easily run the IIFE in Node without more mocking
// But for the audit, we can replicate it.

function getGameDataMock(lang, level, vocabularyData, speakingData, gameData, phrasesData) {
    const data = {
        fluency: [], opinions: [], battle: [], critic: [],
        action: {}, identity: [], wordlinker: [], etymology: [], storychain: []
    };

    // 1. Game Data
    if (gameData && gameData[lang]) {
        const ld = gameData[lang];
        ['fluency', 'opinions', 'battle', 'critic', 'identity', 'wordlinker', 'etymology', 'storychain'].forEach(k => {
            const pool = ld[k] || ld[k.replace(/s$/, '')];
            if (Array.isArray(pool)) {
                if (level !== 'all') {
                    data[k] = pool.filter(item => !item.level || window.getLevelCode(item.level) === level);
                } else {
                    data[k] = [...pool];
                }
            }
        });
        if (ld.action) data.action = JSON.parse(JSON.stringify(ld.action));
    }

    // 2. Speaking Data
    const s = speakingData?.[lang] || {};
    const mergeSpecialized = (key, specializedArray) => {
        if (!specializedArray) return;
        const filtered = specializedArray.filter(item => level === 'all' || !item.level || window.getLevelCode(item.level) === level);
        data[key] = [...(data[key] || []), ...filtered];
    };

    mergeSpecialized('fluency', [...(s.talkThatTalk || []), ...(s.fluency || []), ...(s.talk_that_talk || [])]);
    mergeSpecialized('opinions', [...(s.opinions || []), ...(s.opinionArena || []), ...(s.opinion_arena || [])]);
    mergeSpecialized('battle', [...(s.debates || []), ...(s.battleOfWits || []), ...(s.battle_of_wits || [])]);
    mergeSpecialized('critic', [...(s.quotes || []), ...(s.criticsCorner || []), ...(s.critics_corner || [])]);

    // 3. Enrichment
    let vocabPool = vocabularyData[lang] || [];
    if (phrasesData[lang]) {
        Object.values(phrasesData[lang]).flat().forEach(p => {
            vocabPool.push({ word: p.phrase, theme: 'phrases_idioms', level: p.level || 'starter' });
        });
    }

    const filteredVocab = level === 'all' ? vocabPool : vocabPool.filter(v => v.level && window.getLevelCode(v.level) === level);

    if (filteredVocab.length > 0) {
        // Identity
        const professions = filteredVocab.filter(v => v.theme && (v.theme.includes('professions') || v.theme.includes('job')));
        data.identity = [...(data.identity || []), ...professions];

        // Action
        const themes = { 'A1': ['animals', 'furniture', 'food_drink', 'nature'], 'A2': ['places', 'school', 'social'], 'B1': ['work', 'shopping', 'travel'], 'B2': ['art_culture', 'social', 'people'] };
        for (let lvl in themes) {
            if (level !== 'all' && window.getLevelCode(lvl) !== level) continue;
            const words = filteredVocab.filter(v => themes[lvl].some(t => v.theme && v.theme.includes(t)));
            if (words.length > 0) {
                const shortLvl = lvl; // Simplified for audit
                data.action[shortLvl] = [...(data.action[shortLvl] || []), ...words];
            }
        }

        // Etymology
        const etymVocab = filteredVocab.filter(v => v.etymology);
        data.etymology = [...(data.etymology || []), ...etymVocab];

        // Word Linker
        const themeGroups = {};
        filteredVocab.forEach(v => {
            if (!v.theme) return;
            if (!themeGroups[v.theme]) themeGroups[v.theme] = [];
            themeGroups[v.theme].push(v.word);
        });
        const themesWithEnoughWords = Object.keys(themeGroups).filter(th => themeGroups[th].length >= 3);
        if (themesWithEnoughWords.length >= 2) {
             // Mocking wordlinker sets
             data.wordlinker = new Array(10).fill({});
        }
    }

    return data;
}

function loadData() {
    const vocabularyData = {};
    const speakingData = {};
    const gameData = {};
    const phrasesData = {};

    LANGS.forEach(lang => {
        vocabularyData[lang] = [];
        speakingData[lang] = {};
        gameData[lang] = {};
        phrasesData[lang] = {};

        // Load Vocab
        LEVELS.forEach(level => {
            const levelId = window.getLevelCode(level).toUpperCase(); // Files are A1.js, B1.js etc? No, Starter/Elementary
            const dirMap = { starter: 'A1', elementary: 'A2', intermediate: 'B1', upper: 'B2', advanced: 'C1', proficiency: 'C2' };
            const dir = dirMap[level];
            const vocabPath = path.join(__dirname, '..', 'vocabulary', lang, dir, 'vocabulary.js');
            if (fs.existsSync(vocabPath)) {
                const content = fs.readFileSync(vocabPath, 'utf8');
                // Extract array from IIFE
                const match = content.match(/const data = (\[[\s\S]*?\]);/);
                if (match) {
                    try {
                        const data = eval(match[1]);
                        vocabularyData[lang] = [...vocabularyData[lang], ...data];
                    } catch(e) {}
                }
            }
        });

        // Load Speaking
        const speakingPath = path.join(__dirname, '..', 'vocabulary', lang, 'speaking.js');
        if (fs.existsSync(speakingPath)) {
            const content = fs.readFileSync(speakingPath, 'utf8');
             // This is harder to parse as it's multiple arrays.
             // We'll just look for length of talkThatTalk, opinions, etc.
             ['talkThatTalk', 'opinions', 'debates', 'quotes'].forEach(key => {
                 const regex = new RegExp(`const ${key} = (\\[[\\s\\S]*?\\]);`);
                 const match = content.match(regex);
                 if (match) {
                     try {
                         speakingData[lang][key] = eval(match[1]);
                     } catch(e) {}
                 }
             });
        }

        // Load Game Data
        const gameDataPath = path.join(__dirname, '..', 'games', 'data', lang, 'game_data.js');
        if (fs.existsSync(gameDataPath)) {
            const content = fs.readFileSync(gameDataPath, 'utf8');
            const match = content.match(/window\.gameData\[lang\] = (\{[\s\S]*?\});/);
            if (match) {
                try {
                    // This eval might fail if it refers to local variables, but game_data.js are usually self-contained
                    gameData[lang] = eval(`(function(){ const lang='${lang}'; return ${match[1]}; })()`);
                } catch(e) {}
            }
        }
    });

    return { vocabularyData, speakingData, gameData, phrasesData };
}

const { vocabularyData, speakingData, gameData, phrasesData } = loadData();

let report = '# Game Content Parity Audit\n\n';
report += 'Threshold: **5 items** (cells marked with ⚠️ are under threshold)\n\n';

const THRESHOLD = 5;

LEVELS.forEach(level => {
    report += `## Level: ${level.toUpperCase()}\n\n`;
    report += '| Lang | ' + GAME_KEYS.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(' | ') + ' |\n';
    report += '| --- | ' + GAME_KEYS.map(() => '---').join(' | ') + ' |\n';

    LANGS.forEach(lang => {
        const data = getGameDataMock(lang, level, vocabularyData, speakingData, gameData, phrasesData);
        let row = `| ${lang.toUpperCase()} | `;
        GAME_KEYS.forEach(key => {
            let count = 0;
            if (key === 'action') {
                count = Object.values(data.action).flat().length;
            } else {
                count = data[key].length;
            }
            row += `${count < THRESHOLD ? '⚠️ ' : ''}${count} | `;
        });
        report += row + '\n';
    });
    report += '\n';
});

fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'output', 'game-data-audit.md'), report);
console.log('Audit report generated in scripts/output/game-data-audit.md');
