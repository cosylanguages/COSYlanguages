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

// Helper to transform COSYdata items into client vocabulary schema
const transformCosydataItem = (item, lang, levelCode) => {
    if (!item || !item.word) return null;
    return {
        id: item.id || `${lang}:${item.word}`,
        word: item.word,
        translation: (item.definitions && item.definitions[0]) ? (typeof item.definitions[0] === 'string' ? item.definitions[0] : (item.definitions[0].text || item.word)) : (item.definition || item.word),
        definition: (item.definitions && item.definitions[0]) ? (typeof item.definitions[0] === 'string' ? item.definitions[0] : (item.definitions[0].text || '')) : (item.definition || ''),
        definitions: Array.isArray(item.definitions) ? item.definitions.map(d => typeof d === 'string' ? { text: d } : d) : [{ text: item.definition || '' }],
        examples: Array.isArray(item.examples) ? item.examples.map(e => typeof e === 'string' ? { text: e } : e) : [],
        level: (item.level || levelCode || 'a1').toLowerCase(),
        theme: item.theme || 'general',
        sub_theme: item.sub_theme || null,
        language: item.language || lang,
        emoji: item.emoji || '💡',
        transcription: item.transcription || null,
        form: item.form || 'noun',
        synonyms: item.synonyms || [],
        antonyms: item.antonyms || [],
        usage_hint: item.usage_hint || item.collocation || null
    };
};

const getCosydataFolder = (code) => {
    const c = (code || '').toLowerCase();
    if (c === 'a1' || c === 'starter' || c === 'a0_a1') return 'a0_a1';
    return c;
};

// 3. Load all vocabulary files for active languages (supporting local JS & COSYdata JSON fallback)
console.log('--- Loading vocabulary datasets for active languages ---');
const cosydataLocalDir = path.join('/tmp', 'cosydata', 'vocabulary');
const hasCosydataLocal = fs.existsSync(cosydataLocalDir);

ACTIVE_LANGS.forEach(lang => {
    sandbox.window.vocabularyData = sandbox.window.vocabularyData || {};
    sandbox.window.vocabularyData[lang] = sandbox.window.vocabularyData[lang] || [];

    const langManifest = manifest[lang] || {};
    Object.keys(langManifest).forEach(lvlCode => {
        const files = langManifest[lvlCode] || [];
        if (files.length > 0) {
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
        } else {
            // Empty manifest list means migrated to COSYdata -> load from local /tmp/cosydata or mock fallback
            const cdFolder = getCosydataFolder(lvlCode);
            const cdLangDir = path.join(cosydataLocalDir, lang, cdFolder);
            if (hasCosydataLocal && fs.existsSync(cdLangDir)) {
                const jsonFiles = fs.readdirSync(cdLangDir).filter(f => f.endswith ? f.endswith('.json') : f.endsWith('.json'));
                jsonFiles.forEach(jf => {
                    try {
                        const raw = fs.readFileSync(path.join(cdLangDir, jf), 'utf8');
                        const items = JSON.parse(raw);
                        if (Array.isArray(items)) {
                            items.forEach(it => {
                                const transformed = transformCosydataItem(it, lang, lvlCode);
                                if (transformed) sandbox.window.vocabularyData[lang].push(transformed);
                            });
                        }
                    } catch (e) {}
                });
            }
        }
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
