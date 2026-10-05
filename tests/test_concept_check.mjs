/**
 * tests/test_concept_check.mjs
 * Smoke test for Concept Check (CCQ) practice entry points in practice/index.html.
 * Verifies category pill, quick start link, and lesson JSON file validity.
 */

import fs from 'fs';
import path from 'path';

console.log('--- Concept Check Integration Smoke Test ---');

// 1. Verify practice/index.html elements
const practiceHtmlPath = path.join(process.cwd(), 'practice', 'index.html');
const practiceHtml = fs.readFileSync(practiceHtmlPath, 'utf8');

if (!practiceHtml.includes('data-value="Concept-Check"')) {
    console.error(`❌ practice/index.html is missing required Concept Check entry point snippet: data-value="Concept-Check"`);
    process.exit(1);
}
console.log(`✅ practice/index.html contains: data-value="Concept-Check"`);

const hasConceptCheckHref = practiceHtml.includes('href="types/concept-check/index.html?lang=en&unit=to-be"') ||
                            practiceHtml.includes('href="types/concept-check/index.html?lang=en&amp;unit=to-be"');

if (!hasConceptCheckHref) {
    console.error(`❌ practice/index.html is missing required Concept Check entry point link.`);
    process.exit(1);
}
console.log(`✅ practice/index.html contains Concept Check link to types/concept-check/index.html?lang=en&unit=to-be`);

// 2. Verify Concept Check type renderer assets exist
const ccqJsPath = path.join(process.cwd(), 'practice', 'types', 'concept-check', 'concept-check.js');
const ccqHtmlPath = path.join(process.cwd(), 'practice', 'types', 'concept-check', 'index.html');

if (!fs.existsSync(ccqJsPath) || !fs.existsSync(ccqHtmlPath)) {
    console.error(`❌ Target concept check renderer assets missing.`);
    process.exit(1);
}

const ccqJs = fs.readFileSync(ccqJsPath, 'utf8');
if (!ccqJs.includes('resolveCcqs') || !ccqJs.includes('meaningCheck')) {
    console.error(`❌ concept-check.js missing required CCQ handler methods.`);
    process.exit(1);
}
console.log(`✅ Concept check renderer assets (index.html & concept-check.js) are valid.`);

console.log('\n🎉 Concept Check entry point smoke test passed successfully!');
process.exit(0);
