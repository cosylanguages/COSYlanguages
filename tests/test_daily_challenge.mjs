/**
 * tests/test_daily_challenge.mjs
 * Smoke test for Daily Challenge integration in practice/index.html.
 * Verifies that script/CSS tags are wired, window.DAILY_SCHEDULE and
 * window.DAILY_BANK exist, and challenge items match the expected shape.
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';

console.log('--- Daily Challenge Integration Smoke Test ---');

// 1. Verify HTML Script and CSS Links in practice/index.html
const practiceHtmlPath = path.join(process.cwd(), 'practice', 'index.html');
const practiceHtml = fs.readFileSync(practiceHtmlPath, 'utf8');

const requiredTags = [
    '<script src="types/writing/daily_data.js"></script>',
    '<script src="types/writing/writing.js"></script>',
    'href="../css/daily.css"'
];

requiredTags.forEach(tag => {
    if (!practiceHtml.includes(tag)) {
        console.error(`❌ practice/index.html is missing required reference: ${tag}`);
        process.exit(1);
    }
    console.log(`✅ practice/index.html contains: ${tag}`);
});

// 2. Load dataset and logic in a Node VM sandbox
const dailyDataPath = path.join(process.cwd(), 'practice', 'types', 'writing', 'daily_data.js');
const dailyDataCode = fs.readFileSync(dailyDataPath, 'utf8');

const writingJsPath = path.join(process.cwd(), 'practice', 'types', 'writing', 'writing.js');
const writingJsCode = fs.readFileSync(writingJsPath, 'utf8');

// Mock minimal DOM for writing.js initialization
const createMockElement = () => ({
    textContent: '',
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    appendChild: () => {},
    disabled: false
});

const elements = {};
[
    'dayBadge', 'dateLine', 'typeBadge', 'cardNum', 'challengeTitle',
    'challengeSubtitle', 'speakingPrompt', 'speakingTip', 'microLabel',
    'microTitle', 'microInstruction', 'microExample', 'streakCount',
    'todayPill', 'btnComplete', 'weekGrid', 'startBtn', 'stopBtn',
    'doneBanner', 'timerDisplay', 'timerBar', 'tab-a', 'tab-b', 'tab-c'
].forEach(id => {
    elements[id] = createMockElement();
});

const sandbox = {
    window: {},
    document: {
        getElementById: id => elements[id] || createMockElement(),
        querySelectorAll: selector => Object.values(elements),
        querySelector: selector => createMockElement(),
        addEventListener: (evt, handler) => {
            if (evt === 'DOMContentLoaded') {
                sandbox.domLoadedHandler = handler;
            }
        },
        createElement: tag => createMockElement(),
        dispatchEvent: () => {}
    },
    localStorage: {
        getItem: () => null,
        setItem: () => {}
    },
    console: { log: () => {}, warn: () => {}, error: () => {} }
};

vm.createContext(sandbox);
vm.runInContext(dailyDataCode, sandbox);
vm.runInContext(writingJsCode, sandbox);

// 3. Verify window.DAILY_SCHEDULE
if (!sandbox.window.DAILY_SCHEDULE || typeof sandbox.window.DAILY_SCHEDULE !== 'object') {
    console.error('❌ window.DAILY_SCHEDULE is not defined or invalid');
    process.exit(1);
}

for (let day = 0; day <= 6; day++) {
    if (!sandbox.window.DAILY_SCHEDULE[day]) {
        console.error(`❌ window.DAILY_SCHEDULE is missing category mapping for day ${day}`);
        process.exit(1);
    }
}
console.log('✅ window.DAILY_SCHEDULE maps all days 0-6 to category keys.');

// 4. Verify window.DAILY_BANK
if (!sandbox.window.DAILY_BANK || typeof sandbox.window.DAILY_BANK !== 'object') {
    console.error('❌ window.DAILY_BANK is not defined or invalid');
    process.exit(1);
}

const requiredCategories = ['speaking', 'writing', 'grammar', 'vocabulary'];
requiredCategories.forEach(cat => {
    const bankItems = sandbox.window.DAILY_BANK[cat];
    if (!Array.isArray(bankItems) || bankItems.length === 0) {
        console.error(`❌ window.DAILY_BANK category "${cat}" is missing or empty`);
        process.exit(1);
    }

    bankItems.forEach(item => {
        if (!item.id || !item.title || !item.subtitle || !item.levels) {
            console.error(`❌ Challenge item in category "${cat}" is missing required fields (id, title, subtitle, levels):`, item);
            process.exit(1);
        }

        ['a', 'b', 'c'].forEach(lvl => {
            const lvlData = item.levels[lvl];
            if (!lvlData || !lvlData.prompt || !lvlData.tip || !lvlData.micro) {
                console.error(`❌ Challenge item "${item.id}" missing level data for level "${lvl}":`, lvlData);
                process.exit(1);
            }
            if (!lvlData.micro.title || !lvlData.micro.instruction || !lvlData.micro.example) {
                console.error(`❌ Challenge item "${item.id}" missing micro fields for level "${lvl}":`, lvlData.micro);
                process.exit(1);
            }
        });
    });
});
console.log('✅ window.DAILY_BANK contains well-formed challenge items for all categories.');

// 5. Test running DOMContentLoaded init()
try {
    if (sandbox.domLoadedHandler) {
        sandbox.domLoadedHandler();
        console.log('✅ writing.js init() executed without throwing.');
    }
} catch (e) {
    console.error('❌ writing.js init() threw an error when running:', e);
    process.exit(1);
}

console.log('\n🎉 Daily challenge smoke test passed successfully!');
process.exit(0);
