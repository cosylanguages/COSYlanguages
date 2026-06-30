const fs = require('fs');
const path = require('path');

const THEMES_FILE = 'THEMES.md';
const MANIFEST_FILE = 'vocabulary/manifest.json';

function getValidThemes() {
    if (!fs.existsSync(THEMES_FILE)) return [];
    const content = fs.readFileSync(THEMES_FILE, 'utf8');
    const themes = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        const match = line.match(/^\| ([a-z_]+) +\|/);
        if (match) themes.push(match[1]);
    });
    return themes;
}

const VALID_THEMES = getValidThemes();
const REQUIRED_FIELDS = ['id', 'word', 'lang', 'level', 'theme', 'form', 'definitions'];
const FORBIDDEN_FIELDS = ['image', 'imageUrl', 'opposite'];

function auditFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf8');
    const parts = filepath.split('/');
    const lang = parts[1];

    let data;
    try {
        const sandboxScript = `
            const window = { vocabularyData: {}, verbsData: {}, adjectivesData: {}, locationsData: {}, peopleData: {}, nationalitiesData: {}, grammarData: {}, grammarElements: {}, speakingData: {}, gameData: {} };
            const lang = "${lang}";
            (function() { ${content} })();
            let res;
            for (let k in window) {
                for (let l in window[k]) {
                    if (Array.isArray(window[k][l]) && window[k][l].length > 0) res = window[k][l];
                }
            }
            res;
        `;
        data = eval(sandboxScript);
    } catch (e) {
        console.log(`[ERROR] ${filepath}: Failed to parse JS: ${e.message}`);
        return;
    }

    if (!Array.isArray(data)) {
        console.log(`[ERROR] ${filepath}: Data is not an array`);
        return;
    }

    const ids = new Set();
    data.forEach((entry, idx) => {
        const entryId = entry.id || `entry_${idx}`;

        REQUIRED_FIELDS.forEach(field => {
            if (entry[field] === undefined || entry[field] === null || entry[field] === '') {
                console.log(`[MISSING] ${filepath} [${entryId}]: Missing field ${field}`);
            }
        });

        FORBIDDEN_FIELDS.forEach(field => {
            if (entry[field] !== undefined) {
                console.log(`[FORBIDDEN] ${filepath} [${entryId}]: Contains forbidden field ${field}`);
            }
        });

        if (entry.theme && !VALID_THEMES.includes(entry.theme)) {
            console.log(`[THEME] ${filepath} [${entryId}]: Invalid theme "${entry.theme}"`);
        }

        if (entry.definitions) {
            if (!Array.isArray(entry.definitions)) {
                console.log(`[FORMAT] ${filepath} [${entryId}]: Definitions is not an array`);
            } else {
                entry.definitions.forEach((def, dIdx) => {
                    if (typeof def !== 'object' || def === null || !def.text) {
                        console.log(`[FORMAT] ${filepath} [${entryId}]: Definition ${dIdx} is malformed`);
                    }
                });
            }
        }

        if (entry.id) {
            if (ids.has(entry.id)) {
                console.log(`[DUPLICATE] ${filepath}: Duplicate ID ${entry.id}`);
            }
            ids.add(entry.id);
        }
    });
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
Object.keys(manifest).forEach(lang => {
    Object.keys(manifest[lang]).forEach(levelCode => {
        const files = manifest[lang][levelCode];
        const basePath = levelCode === 'all' ? `vocabulary/${lang}/` : `vocabulary/${lang}/${levelCode}/`;
        files.forEach(file => {
            const filepath = path.join(basePath, file);
            if (fs.existsSync(filepath)) auditFile(filepath);
        });
    });
});
