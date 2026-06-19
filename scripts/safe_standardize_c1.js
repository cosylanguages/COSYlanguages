const fs = require('fs');
const path = require('path');

const THEME_MAP = {
    'Nature': 'nature',
    'Work': 'work',
    'Food': 'food',
    'Travel': 'travel',
    'Health': 'health',
    'Transport': 'transport',
    'Science': 'science_tech_society_C1',
    'Social': 'social',
    'local_places_services_A1': 'locations',
    'discourse_argument': 'discourse_argument',
    'language': 'language',
    'psychology': 'psychological_concepts_C1',
    'sociology_structures': 'sociology_structures_C1'
};

function slugify(text) {
    if (!text) return 'misc';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '_')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function normalizeTheme(theme) {
    if (!theme) return 'misc';
    if (THEME_MAP[theme]) return THEME_MAP[theme];
    return slugify(theme);
}

function processFile(filepath, lang) {
    console.log(`Processing ${filepath}...`);
    let content = fs.readFileSync(filepath, 'utf8');

    // Extract the data array. Look for 'const data = [', 'data = [', or 'const data = (function(){...})()' patterns
    const dataMatch = content.match(/data\s*=\s*(\[[\s\S]*?\])\s*;/m);

    if (!dataMatch) {
        console.warn(`Could not find data array in ${filepath}`);
        return;
    }

    let data;
    try {
        // Use a safe-ish eval by wrapping in a function
        data = eval(`(${dataMatch[1]})`);
    } catch (e) {
        console.error(`Error parsing data in ${filepath}: ${e.message}`);
        return;
    }

    if (!Array.isArray(data)) {
        console.warn(`Data in ${filepath} is not an array`);
        return;
    }

    const originalLength = data.length;
    // Filter out obvious placeholders (level starter/beginner/elementary)
    data = data.filter(item => {
        const lvl = (item.level || '').toLowerCase();
        if (['starter', 'beginner', 'elementary', 'a1', 'a2', 'b1', 'b2'].includes(lvl) && item.theme && (item.theme.includes('A1') || item.theme.includes('A2'))) {
            console.log(`Removing placeholder: ${item.word} (${lvl}, ${item.theme})`);
            return false;
        }
        return true;
    });

    data = data.map(item => {
        // 1. Ensure basic fields
        item.lang = item.lang || lang;
        if (!item.level || item.level !== 'advanced') {
             // Keep existing level if it's high enough, otherwise set to advanced
             if (!['advanced', 'proficiency', 'c1', 'c2'].includes((item.level || '').toLowerCase())) {
                 item.level = 'advanced';
             }
        }

        // 2. Standardize theme
        item.theme = normalizeTheme(item.theme);

        // 3. Handle IDs - Preserve existing IDs
        if (!item.id) {
            const wordPart = slugify(item.word).substring(0, 30);
            const formPart = slugify(item.form || 'misc');
            item.id = `${lang}_advanced_${item.theme}_${formPart}_${wordPart}`;
        }

        // 4. Migrate translation to definitions if definitions are missing
        if (item.translation && (!item.definitions || item.definitions.length === 0)) {
            item.definitions = [{
                text: item.translation,
                examples: []
            }];
        }

        // 5. Clean forbidden fields
        // delete item.image; // Let's keep it if it's there but it's forbidden in SCHEMA.md.
        // Actually, I'll follow the SCHEMA.md and remove it.
        delete item.image;
        delete item.imageUrl;

        return item;
    });

    // Determine the correct global key
    let dataKey = 'vocabularyData';
    if (filepath.includes('verbs.js')) dataKey = 'verbsData';
    else if (filepath.includes('adjectives.js')) dataKey = 'adjectivesData';
    else if (filepath.includes('people.js')) dataKey = 'peopleData';
    else if (['debates.js', 'fluency.js', 'opinions.js', 'quotes.js', 'speaking.js'].some(f => filepath.includes(f))) {
        dataKey = 'speakingData';
    }

    let newContent;
    if (dataKey === 'speakingData') {
        const subKey = path.basename(filepath, '.js');
        newContent = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["${subKey}"]) window.speakingData[lang]["${subKey}"] = [];
    window.speakingData[lang]["${subKey}"].push(...data);
})();`;
    } else {
        newContent = `(function() {
    const data = ${JSON.stringify(data, null, 4)};
    const lang = "${lang}";
    window.${dataKey} = window.${dataKey} || {};
    window.${dataKey}[lang] = [...(window.${dataKey}[lang] || []), ...data];
})();`;
    }

    fs.writeFileSync(filepath, newContent);
    console.log(`Saved ${filepath}. Entries: ${originalLength} -> ${data.length}`);
}

// Find all C1/advanced directories
const searchDirs = [
    { root: 'vocabulary', pattern: 'C1' },
    { root: 'js/data', pattern: 'advanced' }
];

const foundLangs = [];
searchDirs.forEach(conf => {
    if (!fs.existsSync(conf.root)) return;

    const families = fs.readdirSync(conf.root);
    families.forEach(familyOrLang => {
        const familyPath = path.join(conf.root, familyOrLang);
        if (!fs.statSync(familyPath).isDirectory()) return;

        // Check if it's a language dir or a family dir
        if (familyOrLang.length === 2) {
             // Language dir
             const targetPath = path.join(familyPath, conf.pattern);
             if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
                 const files = fs.readdirSync(targetPath).filter(f => f.endsWith('.js'));
                 files.forEach(file => {
                     processFile(path.join(targetPath, file), familyOrLang);
                 });
             }
        } else {
             // Family dir (like js/data/romance)
             const langs = fs.readdirSync(familyPath);
             langs.forEach(lang => {
                 const langPath = path.join(familyPath, lang);
                 if (!fs.statSync(langPath).isDirectory()) return;

                 const targetPath = path.join(langPath, conf.pattern);
                 if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
                     const files = fs.readdirSync(targetPath).filter(f => f.endsWith('.js'));
                     files.forEach(file => {
                         processFile(path.join(targetPath, file), lang);
                     });
                 }
             });
        }
    });
});
