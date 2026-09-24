/**
 * scripts/verify_vocab_pool.js
 * Regression check: Verifies that every active language (en, fr, it, ru, el)
 * and every single level value yields at least a safe minimum question pool size (>= 8).
 * Fails CI (exits with code 1) if any active lang + level combination falls below minimum.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const MIN_QUESTIONS = 8;
const ACTIVE_LANGS = ['en', 'fr', 'it', 'ru', 'el'];
const LEVELS = ['starter', 'elementary', 'intermediate', 'upper_intermediate', 'advanced', 'proficiency'];

const manifestPath = path.join(process.cwd(), 'vocabulary', 'manifest.json');
if (!fs.existsSync(manifestPath)) {
    console.error('❌ Manifest missing:', manifestPath);
    process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const sandbox = {
    window: {
        COSY_LEVELS: [
            { id: 'starter', short: 'A1' },
            { id: 'elementary', short: 'A2' },
            { id: 'intermediate', short: 'B1' },
            { id: 'upper_intermediate', short: 'B2' },
            { id: 'advanced', short: 'C1' },
            { id: 'proficiency', short: 'C2' }
        ]
    },
    console: { log: () => {}, warn: () => {}, error: () => {} }
};
vm.createContext(sandbox);

// 1. Load language helper functions
const langJsPath = path.join(process.cwd(), 'js', 'data', 'languages.js');
if (fs.existsSync(langJsPath)) {
    vm.runInContext(fs.readFileSync(langJsPath, 'utf8'), sandbox);
}

// 2. Load gameUtils (getVocabPool & filterVocabulary)
const sharedJsPath = path.join(process.cwd(), 'js', 'games', 'utils', 'shared.js');
if (fs.existsSync(sharedJsPath)) {
    vm.runInContext(fs.readFileSync(sharedJsPath, 'utf8'), sandbox);
}

if (!sandbox.window.gameUtils || !sandbox.window.gameUtils.getVocabPool) {
    console.error('❌ window.gameUtils.getVocabPool not found after loading shared.js');
    process.exit(1);
}

// 3. Load all vocabulary files for active languages
console.log('--- Loading vocabulary datasets for active languages ---');
ACTIVE_LANGS.forEach(lang => {
    const langManifest = manifest[lang] || {};
    Object.keys(langManifest).forEach(lvlCode => {
        const files = langManifest[lvlCode] || [];
        files.forEach(f => {
            const filePath = path.join(process.cwd(), 'vocabulary', lang, lvlCode, f);
            if (fs.existsSync(filePath)) {
                try {
                    const code = fs.readFileSync(filePath, 'utf8');
                    vm.runInContext(code, sandbox);
                } catch (e) {
                    console.error(`⚠️ Error loading ${filePath}:`, e.message);
                }
            } else {
                console.error(`❌ File listed in manifest not found on disk: ${filePath}`);
            }
        });
    });
});

// 4. Verify question pool size for each active language and level
console.log('--- Verifying minimum question pool size per active language & level ---');
let hasErrors = false;

ACTIVE_LANGS.forEach(lang => {
    LEVELS.forEach(levelId => {
        const pool = sandbox.window.gameUtils.getVocabPool(lang, levelId, 'all', 'all', { excludeExtra: true });
        const filtered = sandbox.window.gameUtils.filterVocabulary(pool, {
            lang,
            level: levelId,
            theme: 'all',
            subTheme: '',
            category: 'Vocabulary',
            strict: true
        });

        if (filtered.length < MIN_QUESTIONS) {
            console.error(`❌ [${lang.toUpperCase()} - ${levelId}] Pool size is ${filtered.length} (minimum required: ${MIN_QUESTIONS})`);
            hasErrors = true;
        } else {
            console.log(`✅ [${lang.toUpperCase()} - ${levelId}] Pool size: ${filtered.length} exercises available`);
        }
    });
});

if (hasErrors) {
    console.error(`\n❌ Regression check failed: One or more active language/level combinations has fewer than ${MIN_QUESTIONS} questions.`);
    process.exit(1);
} else {
    console.log(`\n🎉 All active language and level combinations meet the minimum question pool size requirement (${MIN_QUESTIONS}+).`);
    process.exit(0);
}
