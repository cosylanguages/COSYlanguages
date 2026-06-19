const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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
    if (!text) return '';
    // Only keep Latin alphanumeric and underscores/hyphens
    return text.toString().toLowerCase()
        .replace(/[^\w\s-]/g, '') // Strip non-latin/non-alphanumeric
        .replace(/\s+/g, '_')
        .replace(/--+/g, '_')
        .replace(/__+/g, '_')
        .replace(/^[_\-]+/, '')
        .replace(/[_\-]+$/, '');
}

function generateSafeId(item, lang) {
    const theme = normalizeTheme(item.theme);
    const form = slugify(item.form || 'misc') || 'misc';

    const sourceText = item.word || item.topic || item.t || 'unknown';
    let textPart = slugify(sourceText);

    // If textPart is empty (because it was all non-latin), use a hash
    if (!textPart) {
        textPart = crypto.createHash('md5').update(sourceText).digest('hex').substring(0, 10);
    }

    return `${lang}_advanced_${theme}_${form}_${textPart.substring(0, 30)}`;
}

function normalizeTheme(theme) {
    if (!theme) return 'misc';
    if (THEME_MAP[theme]) return THEME_MAP[theme];
    return slugify(theme) || 'misc';
}

function processFile(filepath, lang) {
    console.log(`Processing ${filepath}...`);
    let content = fs.readFileSync(filepath, 'utf8');

    const dataMatch = content.match(/data\s*=\s*(\[[\s\S]*?\])\s*;/m);
    if (!dataMatch) return;

    let data;
    try {
        data = eval(`(${dataMatch[1]})`);
    } catch (e) {
        return;
    }

    data = data.map(item => {
        item.lang = item.lang || lang;
        if (!item.level || !['advanced', 'proficiency', 'c1', 'c2'].includes(item.level.toLowerCase())) {
            item.level = 'advanced';
        }
        item.theme = normalizeTheme(item.theme);

        // Re-generate ID for ALL items to ensure consistency and fix broken ones
        item.id = generateSafeId(item, lang);

        if (item.translation && (!item.definitions || item.definitions.length === 0)) {
            item.definitions = [{ text: item.translation, examples: [] }];
        }
        delete item.image;
        delete item.imageUrl;
        return item;
    });

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
}

const searchDirs = [
    { root: 'vocabulary', pattern: 'C1' },
    { root: 'js/data', pattern: 'advanced' }
];

searchDirs.forEach(conf => {
    if (!fs.existsSync(conf.root)) return;
    const families = fs.readdirSync(conf.root);
    families.forEach(familyOrLang => {
        const familyPath = path.join(conf.root, familyOrLang);
        if (!fs.statSync(familyPath).isDirectory()) return;

        if (familyOrLang.length === 2) {
             const targetPath = path.join(familyPath, conf.pattern);
             if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
                 fs.readdirSync(targetPath).filter(f => f.endsWith('.js')).forEach(file => {
                     processFile(path.join(targetPath, file), familyOrLang);
                 });
             }
        } else {
             fs.readdirSync(familyPath).forEach(lang => {
                 const langPath = path.join(familyPath, lang);
                 if (!fs.statSync(langPath).isDirectory()) return;
                 const targetPath = path.join(langPath, conf.pattern);
                 if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
                     fs.readdirSync(targetPath).filter(f => f.endsWith('.js')).forEach(file => {
                         processFile(path.join(targetPath, file), lang);
                     });
                 }
             });
        }
    });
});
