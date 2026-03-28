const fs = require('fs');
const path = require('path');

const files = [
    'js/data/germanic/de/starter/verbs.js',
    'js/data/germanic/de/starter/adjectives.js',
    'js/data/romance/es/starter/verbs.js',
    'js/data/romance/es/starter/adjectives.js',
    'js/data/romance/pt/starter/verbs.js',
    'js/data/romance/pt/starter/adjectives.js',
    'js/data/turkic/ba/starter/verbs.js',
    'js/data/turkic/ba/starter/adjectives.js',
    'js/data/turkic/tt/starter/verbs.js',
    'js/data/turkic/tt/starter/adjectives.js',
    'js/data/kartvelian/ka/starter/verbs.js',
    'js/data/kartvelian/ka/starter/adjectives.js',
    'js/data/armenian/hy/starter/verbs.js',
    'js/data/armenian/hy/starter/adjectives.js',
    'js/data/celtic/br/starter/verbs.js',
    'js/data/celtic/br/starter/adjectives.js'
];

files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix v2 leak for expanded languages (keep it for English, Russian, etc. which weren't in this list)
    // Actually, let's just null it out if it contains English words like 'was', 'were', 'did', 'went'
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (match) {
        let data = JSON.parse(match[1]);
        data.forEach(v => {
            if (v.form === 'verb' && v.v2 && (v.v2.includes('was') || v.v2.includes('did') || v.v2.includes('went'))) {
                v.v2 = null;
            }
        });
        content = content.replace(/const data = \[[\s\S]*?\];/, `const data = ${JSON.stringify(data, null, 4)};`);
    }

    // Fix initialization
    content = content.replace('if (window.vocabularyData) {', 'window.vocabularyData = window.vocabularyData || {};');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed initialization and v2 for ${filePath}`);
});
