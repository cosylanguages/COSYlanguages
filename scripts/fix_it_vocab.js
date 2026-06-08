const fs = require('fs');
const path = require('path');

const THEMES_PATH = 'THEMES.md';
const BASE_DIR = 'js/data/romance/it/';
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

function parseThemes() {
    const content = fs.readFileSync(THEMES_PATH, 'utf8');
    const themes = {};
    const lines = content.split('\n');
    for (const line of lines) {
        if (line.includes('|') && !line.includes('Theme slug') && !line.includes('---')) {
            const parts = line.split('|').map(p => p.trim());
            if (parts.length >= 4) {
                const slug = parts[1];
                const subThemes = parts[3].split(',').map(s => s.trim()).filter(s => s);
                themes[slug] = subThemes;
            }
        }
    }
    return themes;
}

const THEMES_DATA = parseThemes();

function normalizeTheme(theme) {
    if (!theme) return 'other';
    let normalized = theme.replace(/_(a1|a2|b1|b2|c1|c2)$/i, '');
    if (THEMES_DATA[normalized]) return normalized;

    const variants = {
        'animal': 'animals',
        'clothing': 'clothes',
        'food': 'food_drink',
        'food_drinks': 'food_drink',
        'hobby': 'social',
        'interests_hobbies': 'social',
        'leisure': 'social',
        'profession': 'jobs',
        'routine': 'time',
        'weather': 'nature',
        'buildings': 'places',
        'city': 'places',
        'countries': 'places',
        'country': 'places',
        'nationality': 'people',
        'people_society': 'people',
        'society': 'people',
        'technology_media': 'technology',
        'media_culture': 'art_culture',
        'science': 'technology',
        'health': 'health_medicine'
    };

    if (variants[normalized]) return variants[normalized];

    for (const slug in THEMES_DATA) {
        if (slug.toLowerCase() === normalized.toLowerCase()) return slug;
    }

    return normalized;
}

function getSubTheme(word, theme, currentSubTheme) {
    if (currentSubTheme) return currentSubTheme;
    const subThemes = THEMES_DATA[theme] || [];
    if (subThemes.length === 0) return null;

    const wordLower = word.toLowerCase();

    if (theme === 'animals') {
        if (/cane|gatto|coniglio|criceto|pesce|uccello/.test(wordLower)) return 'pets';
        if (/leone|elefante|tigre|orso|scimmia/.test(wordLower)) return 'wild';
        if (/mucca|maiale|pecora|gallina/.test(wordLower)) return 'farm';
        if (/ragno|ape|formica|mosca/.test(wordLower)) return 'insects';
    }

    if (theme === 'food_drink') {
        if (/acqua|tè|caffè|succo|latte|vino|birra/.test(wordLower)) return 'drinks';
        if (/mela|banana|arancia|fragola/.test(wordLower)) return 'fruit';
        if (/carota|patata|pomodoro|insalata/.test(wordLower)) return 'vegetables';
        if (/colazione|pranzo|cena/.test(wordLower)) return 'meals';
    }

    if (theme === 'places') {
        if (/città|parco|strada|piazza/.test(wordLower)) return 'city';
        if (/autobus|treno|aereo|macchina/.test(wordLower)) return 'transport';
    }

    if (theme === 'time') {
        if (/lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica/.test(wordLower)) return 'days';
        if (/gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre/.test(wordLower)) return 'months';
        if (/estate|inverno|primavera|autunno/.test(wordLower)) return 'seasons';
    }

    if (theme === 'people') {
        if (/madre|padre|fratello|sorella|figlio|figlia|nonno|nonna/.test(wordLower)) return 'family';
        if (/italiano|francese|inglese|tedesco|spagnolo/.test(wordLower)) return 'nationalities';
    }

    return null;
}

const globalThemeSequences = {};

function processFile(filePath, level) {
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    const arrayRegex = /\[\s*\{[\s\S]*\}\s*\]/;
    const match = content.match(arrayRegex);
    if (!match) return;

    let data;
    try {
        data = eval(match[0]);
    } catch (e) {
        console.error(`Error parsing data in ${filePath}: ${e.message}`);
        return;
    }

    if (!Array.isArray(data)) return;

    const deletions = [];
    const unmappedThemes = new Set();
    const seenWords = new Map();

    const uniqueData = [];
    for (const entry of data) {
        // Normalize word field from other fields if missing
        if (!entry.word) {
            entry.word = entry.topic || entry.t || entry.phrase || entry.verb;
        }

        const word = entry.word;
        if (!word) {
            uniqueData.push(entry);
            continue;
        }

        if (seenWords.has(word)) {
            const existingIndex = seenWords.get(word);
            const existingEntry = uniqueData[existingIndex];

            const existingFields = Object.keys(existingEntry).length;
            const currentFields = Object.keys(entry).length;

            if (currentFields > existingFields) {
                deletions.push(`${word} (kept current, removed previous)`);
                uniqueData[existingIndex] = entry;
            } else {
                deletions.push(`${word} (kept previous, removed current)`);
            }
        } else {
            seenWords.set(word, uniqueData.length);
            uniqueData.push(entry);
        }
    }

    const levelSlug = level.replace('-', '_');
    if (!globalThemeSequences[levelSlug]) globalThemeSequences[levelSlug] = {};

    for (const entry of uniqueData) {
        let originalTheme = entry.theme;
        if (!originalTheme && filePath.includes('verbs.js')) originalTheme = 'language';
        if (!originalTheme && filePath.includes('grammar.js')) originalTheme = 'language';
        if (!originalTheme && filePath.includes('grammar_elements.js')) originalTheme = 'language';

        const normTheme = normalizeTheme(originalTheme);
        if (!THEMES_DATA[normTheme]) unmappedThemes.add(originalTheme);
        entry.theme = normTheme;
        entry.lang = 'it';

        if (!globalThemeSequences[levelSlug][normTheme]) globalThemeSequences[levelSlug][normTheme] = 0;
        globalThemeSequences[levelSlug][normTheme]++;
        const sequence = String(globalThemeSequences[levelSlug][normTheme]).padStart(3, '0');
        entry.id = `it_${levelSlug}_${normTheme}_${sequence}`;

        entry.sub_theme = getSubTheme(entry.word, entry.theme, entry.sub_theme);
    }

    const stringified = JSON.stringify(uniqueData, null, 4);
    // Indent by 4 spaces
    const indented = stringified.split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n');

    // Use function to avoid $ replacement issues
    const newContent = content.replace(arrayRegex, () => indented);
    fs.writeFileSync(filePath, newContent, 'utf8');

    return { deletions, unmappedThemes: Array.from(unmappedThemes) };
}

const allDeletions = [];
const allUnmapped = new Set();

for (const level of LEVELS) {
    const levelDir = path.join(BASE_DIR, level);
    if (!fs.existsSync(levelDir)) continue;

    const files = fs.readdirSync(levelDir).sort();
    for (const file of files) {
        if (!file.endsWith('.js') || file === 'speaking.js') continue;
        const result = processFile(path.join(levelDir, file), level);
        if (result) {
            result.deletions.forEach(d => allDeletions.push(`${level}/${file}: ${d}`));
            result.unmappedThemes.forEach(t => allUnmapped.add(t));
        }
    }
}

console.log('\n--- DELETIONS ---');
allDeletions.forEach(d => console.log(d));

console.log('\n--- UNMAPPED THEMES ---');
Array.from(allUnmapped).forEach(t => console.log(t));
