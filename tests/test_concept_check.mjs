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

const requiredSnippets = [
    'data-value="Concept-Check"',
    'href="types/concept-check/index.html?lang=en&unit=to-be"'
];

requiredSnippets.forEach(snippet => {
    if (!practiceHtml.includes(snippet)) {
        console.error(`❌ practice/index.html is missing required Concept Check entry point snippet: ${snippet}`);
        process.exit(1);
    }
    console.log(`✅ practice/index.html contains: ${snippet}`);
});

// 2. Verify target reference grammar lesson file exists and is valid
const targetLessonPath = path.join(process.cwd(), 'reference-grammar', 'en', 'lessons', 'to-be.json');
if (!fs.existsSync(targetLessonPath)) {
    console.error(`❌ Target reference grammar lesson missing: ${targetLessonPath}`);
    process.exit(1);
}

try {
    const lessonData = JSON.parse(fs.readFileSync(targetLessonPath, 'utf8'));
    if (!lessonData.unitId || !Array.isArray(lessonData.meaningCheck) || lessonData.meaningCheck.length === 0) {
        console.error('❌ Lesson JSON missing required unitId or meaningCheck array:', lessonData);
        process.exit(1);
    }
    console.log(`✅ Reference lesson "to-be.json" is valid (${lessonData.meaningCheck.length} CCQ items).`);
} catch (e) {
    console.error('❌ Error parsing target lesson JSON:', e.message);
    process.exit(1);
}

console.log('\n🎉 Concept Check entry point smoke test passed successfully!');
process.exit(0);
