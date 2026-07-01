
const fs = require('fs');
const path = require('path');

// Mock browser environment for data scripts
const windowMock = {
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
    },
    gameData: {},
    speakingData: {},
    vocabularyData: {},
    phrasesData: {}
};

global.window = windowMock;

const LANGS = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper', 'advanced', 'proficiency'];
const GAME_KEYS = ['fluency', 'opinions', 'battle', 'critic', 'identity', 'wordlinker', 'etymology', 'action'];

// Replication of getGameData logic from js/games/utils/shared.js
function getGameDataMock(targetLang, targetLevel) {
    const lang = targetLang;
    const level = targetLevel;

    const data = {
        fluency: [], opinions: [], battle: [], critic: [],
        action: {}, identity: [], wordlinker: [], etymology: [], storychain: []
    };

    // 1. Game Data
    const sources = [window.gameData?.['universal'], window.gameData?.[lang]].filter(Boolean);

    sources.forEach(ld => {
        ['fluency', 'opinions', 'battle', 'critic', 'identity', 'wordlinker', 'etymology', 'storychain'].forEach(k => {
            const pool = ld[k] || ld[k.replace(/s$/, '')];
            if (Array.isArray(pool)) {
                if (level !== 'all') {
                    const filtered = JSON.parse(JSON.stringify(pool)).filter(item => {
                        if (!item.level) return true;
                        return window.getLevelCode(item.level) === level;
                    });
                    data[k] = [...(data[k] || []), ...filtered];
                } else {
                    data[k] = [...(data[k] || []), ...JSON.parse(JSON.stringify(pool))];
                }
            }
        });
        if (ld.action) {
            Object.keys(ld.action).forEach(lvl => {
                data.action[lvl] = [...(data.action[lvl] || []), ...(ld.action[lvl] || [])];
            });
        }
    });

    // 2. Speaking Data
    const s = window.speakingData?.[lang] || {};
    const extractText = (item) => typeof item === 'string' ? item : (item.topic || item.text || item.t || item.word || '');

    const mergeSpecialized = (key, specializedArray) => {
        if (!specializedArray || specializedArray.length === 0) return;
        const filtered = specializedArray.filter(item => {
            if (level === 'all') return true;
            if (!item.level) return true;
            return window.getLevelCode(item.level) === level;
        });
        if (filtered.length === 0) return;
        const items = filtered.map(item => ['battle', 'fluency', 'opinions', 'critic'].includes(key) ? item : extractText(item));
        data[key] = [...(data[key] || []), ...items];
    };

    mergeSpecialized('fluency', [...(s.talkThatTalk || []), ...(s.fluency || []), ...(s.talk_that_talk || [])]);
    mergeSpecialized('opinions', [...(s.opinions || []), ...(s.opinionArena || []), ...(s.opinion_arena || [])]);
    mergeSpecialized('battle', [...(s.debates || []), ...(s.battleOfWits || []), ...(s.battle_of_wits || [])]);
    mergeSpecialized('critic', [...(s.quotes || []), ...(s.criticsCorner || []), ...(s.critics_corner || [])]);

    // 3. Enrichment
    let vocabPool = (window.vocabularyData && window.vocabularyData[lang]) ? [...window.vocabularyData[lang]] : [];
    if (window.phrasesData && window.phrasesData[lang]) {
        Object.values(window.phrasesData[lang]).flat().forEach(p => {
            vocabPool.push({ word: p.phrase, theme: 'phrases_idioms', level: p.level || 'starter' });
        });
    }

    const filteredVocab = level === 'all' ? vocabPool : vocabPool.filter(v => v.level && window.getLevelCode(v.level) === level);

    if (filteredVocab.length > 0) {
        // Identity
        const professions = filteredVocab.filter(v => v.theme && (v.theme.includes('professions') || v.theme.includes('job')));
        professions.forEach(v => {
            data.identity.push({ person: (v.article ? v.article + ' ' : '') + v.word, level: v.level });
        });

        // Action
        const themes = { 'A1': ['animals', 'furniture', 'food_drink', 'nature'], 'A2': ['places', 'school', 'social'], 'B1': ['work', 'shopping', 'travel'], 'B2': ['art_culture', 'social', 'people'] };
        for (let lvl in themes) {
            if (level !== 'all' && window.getLevelCode(lvl) !== level) continue;
            const words = filteredVocab.filter(v => themes[lvl].some(t => v.theme && v.theme.includes(t))).map(v => v.word);
            if (words.length > 0) {
                data.action[lvl] = [...(data.action[lvl] || []), ...words];
            }
        }

        // Etymology
        const etymVocab = filteredVocab.filter(v => v.etymology);
        data.etymology = [...(data.etymology || []), ...etymVocab];

        // Word Linker (Simplified for count)
        const themeGroups = {};
        filteredVocab.forEach(v => {
            if (!v.theme) return;
            if (!themeGroups[v.theme]) themeGroups[v.theme] = [];
            themeGroups[v.theme].push(v.word);
        });
        const themesWithEnoughWords = Object.keys(themeGroups).filter(th => themeGroups[th].length >= 3);
        if (themesWithEnoughWords.length >= 2) {
             data.wordlinker = new Array(10).fill({}); // Enrichment produces 10 sets
        }
    }

    return data;
}

function loadAllData() {
    window.vocabularyData = {};
    window.speakingData = {};
    window.gameData = {};
    window.phrasesData = {};

    // Load Universal Data
    const universalPath = path.join(__dirname, '..', 'games', 'data', 'universal.js');
    if (fs.existsSync(universalPath)) {
        const content = fs.readFileSync(universalPath, 'utf8');
        try {
            eval(content);
        } catch (e) {
            console.error("Error loading universal.js", e);
        }
    }

    const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vocabulary', 'manifest.json'), 'utf8'));

    Object.keys(manifest).forEach(lang => {
        window.vocabularyData[lang] = [];
        window.speakingData[lang] = {};
        window.gameData[lang] = {};

        // Load files from manifest
        const levels = manifest[lang];
        Object.keys(levels).forEach(lvl => {
            levels[lvl].forEach(file => {
                const filePath = path.join(__dirname, '..', 'vocabulary', lang, lvl, file);
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf8');
                    try {
                        // Use the wrapped script to ensure 'lang' is defined
                        const wrappedScript = `(function(){
                            const lang = "${lang}";
                            ${content}
                        })()`;
                        eval(wrappedScript);
                    } catch (e) {
                        // console.error(`Error loading ${filePath}:`, e.message);
                    }
                }
            });
        });

        // Load Game Data
        const gameDataPath = path.join(__dirname, '..', 'games', 'data', lang, 'game_data.js');
        if (fs.existsSync(gameDataPath)) {
            const content = fs.readFileSync(gameDataPath, 'utf8');
            try {
                const wrappedScript = `(function(){
                    const lang = "${lang}";
                    ${content}
                })()`;
                eval(wrappedScript);
            } catch (e) {}
        }
    });
}

loadAllData();

let report = '# Game Content Parity Audit\n\n';
report += 'Threshold: **5 items** (cells marked with ⚠️ are under threshold)\n\n';

const THRESHOLD = 5;

LEVELS.forEach(level => {
    report += `## Level: ${level.toUpperCase()}\n\n`;
    report += '| Lang | ' + GAME_KEYS.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(' | ') + ' |\n';
    report += '| --- | ' + GAME_KEYS.map(() => '---').join(' | ') + ' |\n';

    LANGS.forEach(lang => {
        const data = getGameDataMock(lang, level);
        let row = `| ${lang.toUpperCase()} | `;
        GAME_KEYS.forEach(key => {
            let count = 0;
            if (key === 'action') {
                count = Object.values(data.action).flat().length;
            } else {
                count = data[key] ? data[key].length : 0;
            }
            row += `${count < THRESHOLD ? '⚠️ ' : ''}${count} | `;
        });
        report += row + '\n';
    });
    report += '\n';
});

if (!fs.existsSync(path.join(__dirname, '..', 'scripts', 'output'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'scripts', 'output'));
}
fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'output', 'game-data-audit.md'), report);
console.log('Audit report generated in scripts/output/game-data-audit.md');
