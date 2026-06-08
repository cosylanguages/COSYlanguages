const fs = require('fs');
const path = require('path');

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('verbs.js')) {
            results.push(file);
        }
    });
    return results;
};

const verbFiles = walk('js/data');

verbFiles.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');

    // Extract the JSON-like array
    const match = content.match(/const data = (\[[\s\S]*?\]);/);
    if (!match) return;

    let data;
    try {
        data = JSON.parse(match[1]);
    } catch (e) {
        // Try to evaluate if JSON.parse fails due to comments/formatting
        try {
            data = eval(match[1]);
        } catch (e2) {
            console.error("Failed to parse", filepath);
            return;
        }
    }

    let changed = false;
    data.forEach(v => {
        const lang = filepath.includes('/en/') ? 'en' :
                     filepath.includes('/fr/') ? 'fr' :
                     filepath.includes('/it/') ? 'it' :
                     filepath.includes('/es/') ? 'es' :
                     filepath.includes('/pt/') ? 'pt' :
                     filepath.includes('/de/') ? 'de' :
                     filepath.includes('/el/') ? 'el' : null;

        if (!lang) return;

        // Generate v4 (Gerund/Present Participle) if missing
        if (!v.v4 && v.classification === 'regular') {
            if (lang === 'en') {
                let stem = v.word;
                if (stem.endsWith('e') && !stem.endsWith('ee')) stem = stem.slice(0, -1);
                v.v4 = stem + 'ing';
                changed = true;
            } else if (lang === 'fr') {
                if (v.group === 'er') v.v4 = v.word.slice(0, -2) + 'ant';
                else if (v.group === 'ir') v.v4 = v.word.slice(0, -2) + 'issant';
                else if (v.group === 're') v.v4 = v.word.slice(0, -2) + 'ant';
                changed = true;
            } else if (lang === 'it') {
                if (v.group === 'are') v.v4 = v.word.slice(0, -3) + 'ando';
                else v.v4 = v.word.slice(0, -3) + 'endo';
                changed = true;
            } else if (lang === 'es' || lang === 'pt') {
                if (v.group === 'ar') v.v4 = v.word.slice(0, -2) + 'ando';
                else v.v4 = v.word.slice(0, -2) + 'iendo';
                changed = true;
            }
        }

        // Generate v2 (Aorist/Past Stem) for Greek if missing and regular
        if (lang === 'el' && !v.v2 && v.classification === 'regular') {
             if (v.group === '1st_conj' && v.word.endsWith('ω')) {
                 // Very basic rule: -ω -> -σα
                 v.v2 = v.word.slice(0, -1) + 'σα';
                 changed = true;
             }
        }
    });

    if (changed) {
        const newData = JSON.stringify(data, null, 4);
        // Find the lang constant in the file
        const langMatch = content.match(/const lang = "(.*?)";/);
        const langCode = langMatch ? langMatch[1] : "";

        const newContent = `const data = ${newData};
    const lang = "${langCode}";
    window.verbsData = window.verbsData || {};
    window.verbsData[lang] = (window.verbsData[lang] || []).concat(data);
`;
        fs.writeFileSync(filepath, newContent, 'utf8');
    }
});
