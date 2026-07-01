const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'vocabulary', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const vocabDir = path.join(__dirname, '..', 'vocabulary');
const langs = fs.readdirSync(vocabDir).filter(f => fs.statSync(path.join(vocabDir, f)).isDirectory() && !f.startsWith('_'));

let missingCount = 0;
let orphanedCount = 0;
let inconsistentCount = 0;

console.log('--- Manifest & Internal Data Verification ---');

// 1. Check for missing files (listed in manifest but don't exist) & Internal Consistency
for (const [lang, levels] of Object.entries(manifest)) {
    for (const [level, files] of Object.entries(levels)) {
        const levelDir = path.join(vocabDir, lang, level);
        if (!fs.existsSync(levelDir)) {
            console.error(`[MISSING DIR] ${lang}/${level}`);
            missingCount++;
            continue;
        }
        files.forEach(file => {
            const filePath = path.join(levelDir, file);
            if (!fs.existsSync(filePath)) {
                console.error(`[MISSING FILE] ${lang}/${level}/${file}`);
                missingCount++;
                return;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
            if (dataMatch) {
                try {
                    const langMatch = content.includes(`"lang": "${lang}"`) || content.includes(`'lang': '${lang}'`) || content.includes(`"language": "${lang}"`);
                    if (!langMatch) {
                        console.warn(`[LANG MISMATCH?] ${lang}/${level}/${file} might not contain items for ${lang}`);
                        inconsistentCount++;
                    }
                } catch(e) {}
            }
        });
    }
}

// 2. Check for orphaned files (exist but not in manifest)
langs.forEach(lang => {
    const langDir = path.join(vocabDir, lang);
    const levels = fs.readdirSync(langDir).filter(f => fs.statSync(path.join(langDir, f)).isDirectory());

    levels.forEach(level => {
        const levelDir = path.join(langDir, level);
        const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.js'));

        files.forEach(file => {
            if (!manifest[lang] || !manifest[lang][level] || !manifest[lang][level].includes(file)) {
                console.warn(`[ORPHANED FILE] ${lang}/${level}/${file}`);
                orphanedCount++;
            }
        });
    });
});

console.log(`\nSummary: ${missingCount} missing, ${orphanedCount} orphaned, ${inconsistentCount} language mismatches.`);
