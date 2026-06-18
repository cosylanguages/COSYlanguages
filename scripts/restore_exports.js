const fs = require('fs');
const path = require('path');

const languages = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];

const categoryMap = {
    'debates.js': 'debates',
    'fluency.js': 'talkThatTalk',
    'opinions.js': 'opinions',
    'quotes.js': 'quotes',
    'speaking.js': 'speaking'
};

languages.forEach(lang => {
    const b2Dir = `vocabulary/${lang}/B2`;
    if (!fs.existsSync(b2Dir)) return;

    fs.readdirSync(b2Dir).forEach(file => {
        const filePath = path.join(b2Dir, file);
        if (!file.endsWith('.js')) return;
        let content = fs.readFileSync(filePath, 'utf8');

        // If it already has window assignment, skip
        if (content.includes('window.')) return;

        let exportBlock = '';
        if (file === 'vocabulary.js') {
            exportBlock = `
    const lang = "${lang}";
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];`;
        } else if (file === 'adjectives.js') {
            exportBlock = `
    const lang = "${lang}";
    window.adjectivesData = window.adjectivesData || {};
    window.adjectivesData[lang] = [...(window.adjectivesData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];`;
        } else if (file === 'verbs.js') {
            exportBlock = `
    const lang = "${lang}";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = [...(window.verbsData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];`;
        } else if (file === 'people.js') {
            exportBlock = `
    const lang = "${lang}";
    window.peopleData = window.peopleData || {};
    window.peopleData[lang] = [...(window.peopleData[lang] || []), ...data];
    window.vocabularyData = window.vocabularyData || {};
    window.vocabularyData[lang] = [...(window.vocabularyData[lang] || []), ...data];`;
        } else if (categoryMap[file]) {
            const cat = categoryMap[file];
            exportBlock = `
    const lang = "${lang}";
    if (!window.speakingData) window.speakingData = {};
    if (!window.speakingData[lang]) window.speakingData[lang] = {};
    if (!window.speakingData[lang]["${cat}"]) window.speakingData[lang]["${cat}"] = [];
    window.speakingData[lang]["${cat}"].push(...data);`;
        }

        if (exportBlock) {
            content = content.replace(/\s*\];\s*\}\)\(\);/, `\n    ];${exportBlock}\n})();`);
            fs.writeFileSync(filePath, content);
            console.log(`Restored exports for ${filePath}`);
        }
    });
});
