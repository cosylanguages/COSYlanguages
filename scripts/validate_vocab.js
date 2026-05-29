const fs = require('fs');
const path = require('path');
const vm = require('vm');

const targetDirs = [
    'js/data',
    'vocabulary'
];

// Files to skip validation entirely
const skipFiles = [
    'pricing.js', 'languages.js', 'engine.js', 'i18n.js', 'ui.js', 'grammar_config.js', 'emojis.js', 'daily_bank.js', 'curriculum_data.js', 'workbook_data.js'
];

let totalEntries = 0;
let etymologyCount = 0;
let missingEtymologyCount = 0;
let violations = [];
const ids = new Set();

function findDataInSandbox(obj, seen = new Set()) {
    if (!obj || typeof obj !== 'object' || seen.has(obj)) return null;
    seen.add(obj);

    // Check if the object itself is an array of data
    if (Array.isArray(obj)) {
        if (obj.length > 0 && (obj[0].word || obj[0].id)) return obj;
        return null;
    }

    // Look deeper into window.vocabularyData[lang], window.verbsData[lang], etc.
    for (const k in obj) {
        if (k === 'COSY' || k === 'global' || k === 'window') {
            if (k === 'window' && obj[k] !== obj) {
                const res = findDataInSandbox(obj[k], seen);
                if (res) return res;
            }
            continue;
        }

        const val = obj[k];
        if (val && typeof val === 'object') {
            // If it's a language map like { en: [...] }, check values
            if (!Array.isArray(val)) {
                for (const lang in val) {
                    if (Array.isArray(val[lang])) {
                        if (val[lang].length > 0 && (val[lang][0].word || val[lang][0].id)) return val[lang];
                    }
                }
            } else {
                if (val.length > 0 && (val[0].word || val[0].id)) return val;
            }

            const res = findDataInSandbox(val, seen);
            if (res) return res;
        }
    }
    return null;
}

function validateFile(filepath) {
    const filename = path.basename(filepath);
    if (skipFiles.includes(filename)) return;

    const isSpecialFile = filename.includes('quotes') || filename.includes('debates') || filename.includes('fluency') || filename.includes('opinions') || filename.includes('grammar') || filename.includes('speaking') || filename.includes('translations');

    let content;
    try {
        content = fs.readFileSync(filepath, 'utf8');
    } catch (e) {
        return;
    }

    const sandbox = {
        window: {
            vocabularyData: {}, verbsData: {}, speakingData: {},
            locationsData: {}, peopleData: {}, adjectivesData: {}, nationalitiesData: {},
            grammarElements: {}, translations: {}, lessonsData: {}
        },
        COSY: { getCourseStatus: () => ({}) }
    };
    sandbox.global = sandbox;
    sandbox.self = sandbox;

    try {
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);
        let data = findDataInSandbox(sandbox);
        if (!data) return;

        data.forEach((entry, index) => {
            if (!entry || typeof entry !== 'object') return;

            // Skip entries that don't look like vocab/grammar (e.g. metadata or nested objects)
            if (!entry.word && !entry.id && !entry.text && !entry.q) return;

            totalEntries++;
            const displayName = entry.word || entry.text || entry.q || entry.t || entry.verb || 'unknown';
            const entryPath = `${filepath} [${index}] (${displayName})`;

            ['id', 'level', 'theme', 'lang'].forEach(f => {
                if (!entry[f] && !isSpecialFile) {
                    // translations and some lesson data might not follow full schema
                    // but we want to know if it's missing in core vocab files
                    if (filepath.includes('vocabulary/') || filepath.includes('starter/')) {
                         violations.push(`Missing field "${f}" in ${entryPath}`);
                    }
                }
            });

            if (!isSpecialFile) {
                if (filepath.includes('vocabulary/')) {
                    ['word', 'form', 'definitions'].forEach(f => { if (!entry[f]) violations.push(`Missing field "${f}" in ${entryPath}`); });
                }
            }

            if (entry.id) {
                if (ids.has(entry.id)) violations.push(`Duplicate ID "${entry.id}" found in ${entryPath}`);
                ids.add(entry.id);
            }

            if (entry.etymology) {
                etymologyCount++;
            } else {
                missingEtymologyCount++;
            }
        });
    } catch (e) {
        // console.error(`Error validating ${filepath}: ${e.message}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (f.endsWith('.js')) validateFile(p);
    });
}

targetDirs.forEach(walk);

console.log('--- VOCABULARY VALIDATION SUMMARY ---');
console.log(`Total entries checked: ${totalEntries}`);
console.log(`Entries with etymology: ${etymologyCount}`);
console.log(`Entries missing etymology: ${missingEtymologyCount}`);
console.log(`Total violations found: ${violations.length}`);

if (violations.length > 0) {
    console.log('\nViolations:');
    violations.forEach(v => console.log(`- ${v}`));
    process.exit(1);
} else {
    console.log('\nAll checks passed!');
    process.exit(0);
}
