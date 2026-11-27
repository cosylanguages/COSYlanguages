'use strict';

/**
 * The quiz page must not ship the question banks up front. They are ~320 KB
 * combined and every visitor who never presses Start pays for them.
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const PAGE = fs.readFileSync(path.join(ROOT, 'placement-quiz.html'), 'utf8');
const loader = require('../js/placement/bank-loader.js');

test('the quiz page defers the question banks to the loader', () => {
    assert.match(PAGE, /js\/placement\/bank-loader\.js/, 'the loader must be on the page');
    for (const eager of ['question-bank-en.js', 'question-banks-multilingual.js']) {
        assert.ok(!PAGE.includes(eager), `${eager} must not be a <script> on the page`);
    }
});

test('English and every other language resolve to the right bank file', () => {
    assert.strictEqual(loader.fileFor('en'), 'en');
    for (const lang of ['fr', 'it', 'ru', 'el', 'de', 'es', 'hy', 'ka', 'tt', 'ba', 'cv', 'br']) {
        assert.strictEqual(loader.fileFor(lang), 'multilingual', lang);
    }
    assert.strictEqual(loader.fileFor(undefined), 'multilingual');
});

test('both bank files the loader names exist', () => {
    for (const file of Object.values(loader.FILES)) {
        assert.ok(fs.existsSync(path.join(ROOT, 'js', 'placement', file)), file);
    }
});

test('the banks still publish the globals the engine reads', () => {
    const engine = fs.readFileSync(path.join(ROOT, 'js', 'placement', 'adaptive-engine.js'), 'utf8');
    assert.match(engine, /COSY_PLACEMENT_QUESTIONS_EN/);
    assert.match(engine, /COSY_PLACEMENT_QUESTIONS_MULTILINGUAL/);
    for (const [file, global] of [['question-bank-en.js', 'COSY_PLACEMENT_QUESTIONS_EN'], ['question-banks-multilingual.js', 'COSY_PLACEMENT_QUESTIONS_MULTILINGUAL']]) {
        const source = fs.readFileSync(path.join(ROOT, 'js', 'placement', file), 'utf8');
        assert.ok(source.includes(`window.${global}`), `${file} must define window.${global}`);
    }
});

test('starting or resuming waits for the bank', () => {
    const ui = fs.readFileSync(path.join(ROOT, 'js', 'placement', 'ui.js'), 'utf8');
    assert.match(ui, /async function startAssessment/, 'startAssessment must await the bank');
    assert.match(ui, /async function resumeSession/, 'resumeSession must await the bank');
    assert.match(ui, /await window\.COSYPlacementBanks\.load\(/, 'the loader must be awaited');
});
