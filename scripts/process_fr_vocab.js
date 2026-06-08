const fs = require('fs');
const path = require('path');

const THEMES_FILE = path.join(__dirname, '..', 'THEMES.md');
const BASE_DIR = path.join(__dirname, '..', 'js', 'data', 'romance', 'fr');
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

// 1. Parse THEMES.md
const themesContent = fs.readFileSync(THEMES_FILE, 'utf8');
const themeLines = themesContent.split('\n').filter(line => line.includes('|') && !line.includes('Theme slug') && !line.includes('---'));
const canonicalThemes = new Set();
const themeToSubThemes = {};

themeLines.forEach(line => {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length >= 4) {
        const slug = parts[1];
        const subThemes = parts[3].split(',').map(s => s.trim()).filter(s => s);
        canonicalThemes.add(slug);
        themeToSubThemes[slug] = subThemes;
    }
});

const themeMap = {
    'food': 'food_drink',
    'drink': 'food_drink',
    'health': 'health_medicine',
    'medicine': 'health_medicine',
    'art': 'art_culture',
    'culture': 'art_culture',
    'grammar': 'language'
};

function normalizeTheme(theme) {
    if (!theme) return 'other';
    let slug = theme.toLowerCase().replace(/_a[12]|_b[12]|_c[12]$/, '').trim();
    if (themeMap[slug]) slug = themeMap[slug];
    if (canonicalThemes.has(slug)) return slug;
    return slug;
}

function getFieldCount(entry) {
    return Object.keys(entry).filter(k => entry[k] !== null && entry[k] !== undefined && entry[k] !== '').length;
}

let deletedDuplicatesCount = 0;
let unmappedThemes = new Set();

const globalThemeSequences = {};

LEVELS.forEach(levelFolder => {
    const levelDir = path.join(BASE_DIR, levelFolder);
    if (!fs.existsSync(levelDir)) return;

    const levelSlug = levelFolder.replace('-', '_');
    const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.js'));

    files.forEach(file => {
        const filePath = path.join(levelDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const arrayRegex = /\[\s*\{[\s\S]*\}\s*\]/m;
        const match = content.match(arrayRegex);
        if (!match) return;

        let entries;
        try {
            const arrayStr = match[0];
            entries = new Function(`return ${arrayStr}`)();
        } catch (e) {
            console.error(`Error parsing array in ${filePath}: ${e.message}`);
            return;
        }

        if (!Array.isArray(entries)) return;

        // 1. Deduplicate
        const uniqueEntriesMap = new Map();
        const duplicatesInFile = [];
        entries.forEach(entry => {
            const key = entry.word;
            if (uniqueEntriesMap.has(key)) {
                const existing = uniqueEntriesMap.get(key);
                if (getFieldCount(entry) > getFieldCount(existing)) {
                    uniqueEntriesMap.set(key, entry);
                    duplicatesInFile.push(existing.word);
                } else {
                    duplicatesInFile.push(entry.word);
                }
            } else {
                uniqueEntriesMap.set(key, entry);
            }
        });
        deletedDuplicatesCount += duplicatesInFile.length;

        let processedEntries = Array.from(uniqueEntriesMap.values());

        // 2. Normalize and update
        processedEntries = processedEntries.map(entry => {
            entry.lang = "fr";
            entry.level = levelSlug;

            const rawTheme = entry.theme;
            const normTheme = normalizeTheme(rawTheme);
            if (!canonicalThemes.has(normTheme)) {
                unmappedThemes.add(normTheme);
            }
            entry.theme = normTheme;

            // Ensure sub_theme exists, set to null if not already present or invalid
            if (entry.sub_theme === undefined || entry.sub_theme === null || !themeToSubThemes[normTheme] || !themeToSubThemes[normTheme].includes(entry.sub_theme)) {
                entry.sub_theme = null;
            }

            const key = `${levelSlug}_${normTheme}`;
            if (!globalThemeSequences[key]) globalThemeSequences[key] = 1;
            const seq = String(globalThemeSequences[key]++).padStart(3, '0');
            entry.id = `fr_${levelSlug}_${normTheme}_${seq}`;

            return entry;
        });

        // 3. Write back
        const newArrayStr = JSON.stringify(processedEntries, null, 4);
        const newContent = content.replace(arrayRegex, () => newArrayStr);
        fs.writeFileSync(filePath, newContent, 'utf8');
    });
});

console.log(`\nProcessing complete.`);
console.log(`Total duplicates deleted: ${deletedDuplicatesCount}`);
console.log(`Unmapped themes: ${Array.from(unmappedThemes).join(', ')}`);
