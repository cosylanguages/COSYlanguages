const fs = require('fs');
const path = require('path');
const vm = require('vm');

const allFiles = [];
function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.js')) {
            allFiles.push(fullPath);
        }
    });
}

if (fs.existsSync('vocabulary')) walk('vocabulary');
if (fs.existsSync('js/data')) walk('js/data');

const idMap = {};
const duplicates = [];

allFiles.forEach(filePath => {
    // Skip config and loader files
    if (['alphabets.js', 'translations.js', 'speaking.js', 'curriculum_data.js', 'daily_bank.js', 'emojis.js', 'grammar_config.js', 'languages.js', 'numbers.js', 'pricing.js', 'workbook_data.js', 'config.js'].some(f => filePath.endsWith(f))) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const langMatch = filePath.match(/vocabulary\/([^/]+)\//) || filePath.match(/js\/data\/[^/]+\/([^/]+)\//);
    const lang = langMatch ? langMatch[1] : 'en';

    const windowObj = {};
    const context = {
        window: windowObj,
        console: { log: () => {}, warn: () => {}, error: () => {} },
        pronouns: []
    };
    // Make window properties available globally in the VM
    const proxy = new Proxy(context, {
        get(target, prop) {
            if (prop === 'window') return windowObj;
            if (prop in windowObj) return windowObj[prop];
            return target[prop];
        },
        set(target, prop, value) {
            if (prop === 'window') return false;
            windowObj[prop] = value;
            return true;
        }
    });

    vm.createContext(proxy);

    try {
        vm.runInContext(content, proxy);
        let data = [];
        const keys = ['vocabularyData', 'verbsData', 'adjectivesData', 'locationsData', 'peopleData', 'nationalitiesData', 'grammarData', 'grammarElements', 'phrasesData', 'dishesData'];
        keys.forEach(key => {
            if (windowObj[key] && windowObj[key][lang]) {
                data.push(...windowObj[key][lang]);
            }
        });

        data.forEach(entry => {
            if (entry.id) {
                if (idMap[entry.id] && idMap[entry.id] !== filePath) {
                    duplicates.push({ id: entry.id, files: [idMap[entry.id], filePath] });
                } else {
                    idMap[entry.id] = filePath;
                }
            }
        });
    } catch (e) {
        // Some files might not be standard data files, which is fine to skip
    }
});

if (duplicates.length > 0) {
    console.log("Found duplicate IDs:");
    const seen = new Set();
    duplicates.forEach(d => {
        const key = `${d.id}:${d.files.sort().join('|')}`;
        if (!seen.has(key)) {
            console.log(`ID: ${d.id} in ${d.files.join(' AND ')}`);
            seen.add(key);
        }
    });
} else {
    console.log("No duplicate IDs found.");
}
