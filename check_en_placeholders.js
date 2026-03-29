const fs = require('fs');
const path = require('path');

const targets = [
    { lang: 'hy', dir: 'armenian' },
    { lang: 'ka', dir: 'kartvelian' },
    { lang: 'tt', dir: 'turkic' },
    { lang: 'ba', dir: 'turkic' },
    { lang: 'br', dir: 'celtic' }
];

targets.forEach(({ lang, dir }) => {
    ['verbs.js', 'adjectives.js'].forEach(file => {
        const p = `js/data/${dir}/${lang}/starter/${file}`;
        if (!fs.existsSync(p)) return;
        const content = fs.readFileSync(p, 'utf8');
        const match = content.match(/const data = (\[[\s\S]*?\]);/);
        if (!match) return;
        const data = eval(match[1]);
        let enDefs = 0;
        let enSub = 0;
        data.forEach(item => {
            if (item.definitions && item.definitions[0] && /^[A-Z][a-z]/.test(item.definitions[0].text)) enDefs++;
            if (item.subtext && /^[a-z]/.test(item.subtext)) enSub++;
        });
        console.log(`[${lang.toUpperCase()}] ${file}: English Defs: ${enDefs}, English Subtexts: ${enSub}`);
    });
});
