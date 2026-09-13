/**
 * tests/test_get_questions.mjs
 * Unit test for getQuestions() fallback logic.
 * Asserts that calling getQuestions('FR', 'Speaking') returns an empty array []
 * and never falls back to English Vocabulary content.
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const vocabularyJsPath = path.join(process.cwd(), 'practice', 'types', 'vocabulary', 'vocabulary.js');
const vocabularyJsCode = fs.readFileSync(vocabularyJsPath, 'utf8');

const sandbox = {
    window: {
        gameUtils: {
            filterVocabulary: (pool, { lang, level, theme, subTheme, category }) => {
                if (!pool) return [];
                return pool;
            }
        }
    },
    console: { log: () => {}, warn: () => {}, error: () => {} }
};

vm.createContext(sandbox);
vm.runInContext(vocabularyJsCode, sandbox);

if (typeof sandbox.window.getQuestions !== 'function') {
    console.error('❌ window.getQuestions is not defined or exported as a function.');
    process.exit(1);
}

// Test 1: Calling getQuestions('FR', 'Speaking') must return an empty array []
const frSpeakingResult = sandbox.window.getQuestions('FR', 'Speaking', 'all', 'all');
console.log('Test 1 - FR Speaking result:', frSpeakingResult);

if (!Array.isArray(frSpeakingResult) || frSpeakingResult.length !== 0) {
    console.error(`❌ Test 1 failed: Expected getQuestions('FR', 'Speaking') to return [], got ${JSON.stringify(frSpeakingResult)}`);
    process.exit(1);
}
console.log('✅ Test 1 passed: getQuestions("FR", "Speaking") returned [] without falling back to English content.');

// Test 2: Calling getQuestions('EN', 'Vocabulary') returns English Vocabulary questions
const enVocabResult = sandbox.window.getQuestions('EN', 'Vocabulary', 'all', 'all');
if (!Array.isArray(enVocabResult) || enVocabResult.length === 0) {
    console.error(`❌ Test 2 failed: Expected getQuestions('EN', 'Vocabulary') to return questions, got ${JSON.stringify(enVocabResult)}`);
    process.exit(1);
}

const containsEnglishVocab = enVocabResult.some(q => q.q && q.q.includes('sibling'));
if (!containsEnglishVocab) {
    console.error('❌ Test 2 failed: Expected EN Vocabulary pool to contain English sibling question.');
    process.exit(1);
}
console.log('✅ Test 2 passed: getQuestions("EN", "Vocabulary") returned valid English vocabulary questions.');

console.log('\n🎉 All getQuestions() unit tests passed successfully!');
process.exit(0);
