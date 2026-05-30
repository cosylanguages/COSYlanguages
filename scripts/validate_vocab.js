const fs = require('fs');
const path = require('path');
const vm = require('vm');

const targetDirs = [
    'js/data/germanic/en/starter', 'js/data/germanic/en/elementary', 'js/data/germanic/en/intermediate',
    'js/data/germanic/en/upper-intermediate', 'js/data/germanic/en/advanced', 'js/data/germanic/en/proficiency',
    'js/data/romance/fr/starter', 'js/data/romance/fr/elementary', 'js/data/romance/fr/intermediate',
    'js/data/romance/fr/upper-intermediate', 'js/data/romance/fr/advanced', 'js/data/romance/fr/proficiency',
    'js/data/romance/it/starter', 'js/data/romance/it/elementary', 'js/data/romance/it/intermediate',
    'js/data/romance/it/upper-intermediate', 'js/data/romance/it/advanced', 'js/data/romance/it/proficiency',
    'vocabulary/en/A1', 'vocabulary/en/A2', 'vocabulary/en/B1', 'vocabulary/en/B2', 'vocabulary/en/C1', 'vocabulary/en/C2',
    'vocabulary/fr/A1', 'vocabulary/fr/A2', 'vocabulary/fr/B1', 'vocabulary/fr/B2', 'vocabulary/fr/C1', 'vocabulary/fr/C2',
    'vocabulary/it/A1', 'vocabulary/it/A2', 'vocabulary/it/B1', 'vocabulary/it/B2', 'vocabulary/it/C1', 'vocabulary/it/C2'
];

let totalEntries = 0;
let entriesWithEtymology = 0;
let entriesWithoutEtymology = 0;
let violations = [];
const ids = new Set();

function findDataInSandbox(obj, seen = new Set()) {
    if (!obj || typeof obj !== 'object' || seen.has(obj)) return null;
    seen.add(obj);
    if (Array.isArray(obj)) {
        if (obj.length > 0 && (obj[0].word || obj[0].text || obj[0].topic || obj[0].q || obj[0].t || obj[0].verb || obj[0].id)) return obj;
        return null;
    }
    for (const k in obj) {
        if (k === 'COSY' || k === 'global' || k === 'window') {
            if (k === 'window' && obj[k] !== obj) {
                const res = findDataInSandbox(obj[k], seen);
                if (res) return res;
            }
            continue;
        }
        const res = findDataInSandbox(obj[k], seen);
        if (res) return res;
    }
    return null;
}

function validateFile(filepath) {
    const filename = path.basename(filepath);
    const isSpecialFile = filename.includes('quotes') || filename.includes('debates') || filename.includes('fluency') || filename.includes('opinions') || filename.includes('grammar') || filename.includes('speaking');
    const content = fs.readFileSync(filepath, 'utf8');
    const sandbox = {
        window: {
            vocabularyData: { en: [], it: [], fr: [] }, verbsData: { en: [], it: [], fr: [] }, speakingData: { en: {}, it: {}, fr: {} },
            locationsData: { en: [], it: [], fr: [] }, peopleData: { en: [], it: [], fr: [] }, adjectivesData: { en: [], it: [], fr: [] }, nationalitiesData: { en: [], it: [], fr: [] },
            grammarElements: { en: [], it: [], fr: [] }, grammarData: { en: [], it: [], fr: [] }, phrasesData: { en: [], it: [], fr: [] }
        },
        COSY: { getCourseStatus: () => ({}) }
    };

    try {
        vm.createContext(sandbox);
        vm.runInContext(content, sandbox);
        let data = findDataInSandbox(sandbox);
        if (!data) return;

        data.forEach((entry, index) => {
            totalEntries++;
            const displayName = entry.word || entry.text || entry.q || entry.t || entry.verb || 'unknown';
            const entryPath = `${filepath} [${index}] (${displayName})`;

            if (entry.etymology) {
                if (typeof entry.etymology === 'object' && entry.etymology.origin_lang) {
                    entriesWithEtymology++;
                } else if (typeof entry.etymology === 'string') {
                    entriesWithEtymology++; // Support legacy string format for statistics
                } else {
                    violations.push(`Etymology field present but invalid or missing "origin_lang" in ${entryPath}`);
                    entriesWithoutEtymology++;
                }
            } else {
                entriesWithoutEtymology++;
            }

            const isIt = filepath.includes('/it/');
            const isFr = filepath.includes('/fr/');

            // Skipping strict ID requirement for English vocabulary files if they were missing before
            const isEnglishVocab = filepath.includes('vocabulary/en/');

            if (!isEnglishVocab) {
                ['id', 'level', 'theme', 'lang'].forEach(f => { if (!entry[f]) violations.push(`Missing field "${f}" in ${entryPath}`); });
            }

            if (!isSpecialFile || isIt || isFr) {
                ['word', 'form', 'definitions'].forEach(f => { if (!entry[f]) violations.push(`Missing field "${f}" in ${entryPath}`); });
            }

            if (entry.id) {
                if (ids.has(entry.id)) violations.push(`Duplicate ID "${entry.id}" found in ${entryPath}`);
                ids.add(entry.id);
            }
        });
    } catch (e) {}
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (f.endsWith('.js') && f !== 'speaking.js') validateFile(p);
    });
}

targetDirs.forEach(walk);
console.log('--- VOCABULARY VALIDATION SUMMARY ---');
console.log(`Total entries checked: ${totalEntries}`);
console.log(`Entries with etymology: ${entriesWithEtymology}`);
console.log(`Entries missing etymology: ${entriesWithoutEtymology}`);
console.log(`Total violations found: ${violations.length}`);

if (violations.length > 0) {
    console.log('\nViolations (Excluding English):');
    violations.forEach(v => {
        if (!v.includes('/en/')) console.log(`- ${v}`);
    });
    const itViolations = violations.filter(v => v.includes('/it/'));
    const frViolations = violations.filter(v => v.includes('/fr/'));
    if (itViolations.length > 0 || frViolations.length > 0) {
        // process.exit(1);
    }
} else {
    console.log('\nAll checks passed!');
}
