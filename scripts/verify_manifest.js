
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'vocabulary', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const LANGS = Object.keys(manifest);
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

let errors = 0;

console.log('--- Verifying Manifest ---');

// 1. Verify all files in manifest exist
LANGS.forEach(lang => {
    Object.keys(manifest[lang]).forEach(level => {
        manifest[lang][level].forEach(file => {
            const filePath = path.join(__dirname, '..', 'vocabulary', lang, level, file);
            if (!fs.existsSync(filePath)) {
                console.error(`❌ Missing file: ${filePath} (listed in manifest)`);
                errors++;
            } else {
                // 3. Check for internal mismatches
                const content = fs.readFileSync(filePath, 'utf8');
                const langMatch = content.match(/const lang = "([^"]+)"/);
                if (langMatch && langMatch[1] !== lang) {
                    console.error(`❌ Lang mismatch in ${filePath}: found "${langMatch[1]}", expected "${lang}"`);
                    errors++;
                }

                // We could also check level but level is often "starter" vs "A1" in code
            }
        });
    });
});

// 2. Identify orphaned files
const vocabRoot = path.join(__dirname, '..', 'vocabulary');
fs.readdirSync(vocabRoot).forEach(lang => {
    const langDir = path.join(vocabRoot, lang);
    if (fs.statSync(langDir).isDirectory()) {
        fs.readdirSync(langDir).forEach(level => {
            const levelDir = path.join(langDir, level);
            if (LEVELS.includes(level) && fs.statSync(levelDir).isDirectory()) {
                fs.readdirSync(levelDir).forEach(file => {
                    if (file.endsWith('.js')) {
                        if (!manifest[lang] || !manifest[lang][level] || !manifest[lang][level].includes(file)) {
                            console.warn(`⚠️ Orphaned file: ${path.join(lang, level, file)} (not in manifest)`);
                        }
                    }
                });
            }
        });
    }
});

console.log(`\nVerification finished with ${errors} errors.`);
if (errors > 0) {
    process.exit(1);
}
