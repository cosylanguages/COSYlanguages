const fs = require('fs');
const path = require('path');

const baseDir = 'js/data';
const languages = [
    'en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'
];

const langPaths = {
    'en': 'germanic/en',
    'de': 'germanic/de',
    'fr': 'romance/fr',
    'it': 'romance/it',
    'es': 'romance/es',
    'pt': 'romance/pt',
    'ru': 'slavic/ru',
    'el': 'hellenic/el',
    'hy': 'armenian/hy',
    'ka': 'kartvelian/ka',
    'tt': 'turkic/tt',
    'ba': 'turkic/ba',
    'br': 'celtic/br'
};

function checkFiles(lang) {
    const relPath = langPaths[lang];
    const starterPath = path.join(baseDir, relPath, 'starter');
    const files = ['verbs.js', 'adjectives.js', 'vocabulary.js'];

    console.log(`\n--- Auditing ${lang.toUpperCase()} ---`);

    files.forEach(file => {
        const filePath = path.join(starterPath, file);
        if (!fs.existsSync(filePath)) {
            console.log(`[MISSING] ${file}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        // Extract data array using a simple regex (assuming standard format)
        const match = content.match(/const data = (\[[\s\S]*?\]);/);
        if (!match) {
            console.log(`[ERROR] Could not parse data in ${file}`);
            return;
        }

        try {
            const data = JSON.parse(match[1]);
            console.log(`[OK] ${file}: ${data.length} entries`);

            data.forEach((entry, index) => {
                // Check for English placeholders in v2/v3 (if not EN)
                if (lang !== 'en') {
                    if (entry.v2 && /^[a-zA-Z\s/]+$/.test(entry.v2) && !['v2', 'null'].includes(entry.v2)) {
                         // Basic check for English-looking v2
                         if (['had', 'felt', 'gave', 'took', 'got', 'put', 'made', 'did', 'used'].includes(entry.v2)) {
                             console.log(`  [PLACEHOLDER v2] Entry ${index} (${entry.word}): ${entry.v2}`);
                         }
                    }

                    // Check for English definitions
                    if (entry.definitions) {
                        entry.definitions.forEach(def => {
                            if (/^[a-zA-Z\s.,;?()'"!]+$/.test(def.text) && def.text.length > 5 && !lang.match(/^(en|fr|it|es|pt)$/)) {
                                // This might be too aggressive for Romance languages but useful for Turkic/Armenian/etc.
                                if (def.text.includes('To ') || def.text.includes('Having ')) {
                                    console.log(`  [ENGLISH DEF] Entry ${index} (${entry.word}): ${def.text}`);
                                }
                            }
                        });
                    }
                }
            });

        } catch (e) {
            console.log(`[PARSE ERROR] ${file}: ${e.message}`);
        }
    });
}

languages.forEach(checkFiles);
