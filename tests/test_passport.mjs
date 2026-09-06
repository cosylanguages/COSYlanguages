import assert from 'assert';
import {
    exportPassport,
    importPassport,
    downloadPassport,
    ALLOWED_SOURCES
} from '../shared/js/passport.js';

console.log("Running COSY Passport module unit tests...");

// Test 1: ALLOWED_SOURCES list
assert.deepStrictEqual(ALLOWED_SOURCES, [
    "COSYlanguages",
    "COSYtools",
    "COSYworld",
    "COSYgames",
    "COSYevents"
]);
console.log("✅ Test 1 Passed: ALLOWED_SOURCES list");

// Test 2: exportPassport creates fresh passport
const fresh = exportPassport(null, {
    source: 'COSYlanguages',
    progress: [
        { item: 'grammar.a1.to_be', value: 100 }
    ],
    badges: ['en_starter_master']
}, 'en');

assert.strictEqual(fresh.cosy_passport_version, 1);
assert.strictEqual(fresh.language, 'en');
assert.ok(typeof fresh.updated === 'string' && fresh.updated.length > 0);
assert.strictEqual(fresh.progress.length, 1);
assert.deepStrictEqual(fresh.progress[0], {
    source: 'COSYlanguages',
    item: 'grammar.a1.to_be',
    value: 100
});
assert.deepStrictEqual(fresh.badges, ['en_starter_master']);
console.log("✅ Test 2 Passed: Fresh exportPassport");

// Test 3: exportPassport preserves unknown-source entries
const updated = exportPassport(fresh, {
    source: 'COSYworld',
    progress: [
        { item: 'district.market.dialogue', value: 1 }
    ],
    badges: ['market_explorer']
}, 'en');

assert.strictEqual(updated.progress.length, 2);
const languagesEntry = updated.progress.find(p => p.source === 'COSYlanguages');
const worldEntry = updated.progress.find(p => p.source === 'COSYworld');

assert.ok(languagesEntry);
assert.ok(worldEntry);
assert.strictEqual(languagesEntry.value, 100);
assert.strictEqual(worldEntry.value, 1);
assert.deepStrictEqual(updated.badges.sort(), ['en_starter_master', 'market_explorer'].sort());
console.log("✅ Test 3 Passed: Non-destructive merge across sources");

// Test 4: importPassport filtering by source
const importedWorld = importPassport(updated, 'COSYworld');
assert.strictEqual(importedWorld.valid, true);
assert.strictEqual(importedWorld.language, 'en');
assert.strictEqual(importedWorld.progress.length, 1);
assert.strictEqual(importedWorld.progress[0].item, 'district.market.dialogue');
assert.strictEqual(importedWorld.fullPassport.progress.length, 2);
console.log("✅ Test 4 Passed: importPassport filtering");

// Test 5: downloadPassport formatting
const downloadedStr = downloadPassport(updated, 'test.json');
assert.strictEqual(typeof downloadedStr, 'string');
const parsedFromDownload = JSON.parse(downloadedStr);
assert.strictEqual(parsedFromDownload.cosy_passport_version, 1);
console.log("✅ Test 5 Passed: downloadPassport JSON serialization");

console.log("\nALL PASSED! 🎉");
