/**
 * tests/coming-soon.test.js
 * The upcoming-language list is data, not markup: it must stay in the registry,
 * out of the languages we teach, and reachable from the page that shows it.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');

function loadRegistry() {
    const sandbox = {
        window: {},
        localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
        console
    };
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(path.join(root, 'js/data/languages.js'), 'utf8'), sandbox);
    return sandbox.window;
}

const UI_LANGS = ['en', 'fr', 'it', 'ru', 'el'];

test('upcoming languages are listed once, outside the taught set', () => {
    const registry = loadRegistry();
    const upcoming = Array.from(registry.COSY_COMING_SOON_LANGUAGES);
    const taught = Array.from(registry.COSY_LANGUAGES, l => l.code);

    assert.equal(upcoming.length, 9, 'nine languages are in preparation');
    assert.deepEqual(
        Array.from(upcoming, l => l.code),
        ['de', 'es', 'pt', 'hy', 'ka', 'tt', 'ba', 'cv', 'br']
    );

    for (const lang of upcoming) {
        assert.ok(lang.name, `${lang.code} needs an English name`);
        assert.ok(lang.native, `${lang.code} needs a native name`);
        assert.equal(lang.status, 'coming_soon');
        assert.ok(!taught.includes(lang.code), `${lang.code} must not enter the taught registry`);
    }
});

test('the taught registry still drives the language picker', () => {
    const registry = loadRegistry();
    const codes = (list) => Array.from(list, l => l.code);
    assert.deepEqual(codes(registry.COSY_LANGUAGES), ['en', 'fr', 'it', 'ru', 'el']);
    assert.deepEqual(codes(registry.COSY_ACTIVE_LANGUAGES), ['en', 'fr', 'it', 'ru', 'el']);
});

test('the coming-soon page renders from the registry', () => {
    const page = fs.readFileSync(path.join(root, 'languages/coming-soon.html'), 'utf8');

    assert.match(page, /window\.COSY_COMING_SOON_LANGUAGES/);
    assert.match(page, /lang-grid-soon/);
    assert.match(page, /data-translate-key="coming_hero_sub"/);
    assert.match(page, /data-translate-key="coming_lessons_note"/);
    // No language page exists yet, so a card must not link to languages/<code>/.
    const card = page.slice(page.indexOf('<article class="lang-card-soon">'), page.indexOf('</article>'));
    assert.ok(card.includes('lang-card-soon'), 'the card template is present');
    assert.doesNotMatch(card, /href="\$\{l\.code\}\/"/);
});

test('the teacher note is translated in every interface language', () => {
    for (const lang of UI_LANGS) {
        const dict = JSON.parse(fs.readFileSync(path.join(root, `data/ui/${lang}.json`), 'utf8'));
        for (const key of ['coming_hero_sub', 'coming_lessons_note', 'coming_vocab']) {
            assert.equal(typeof dict[key], 'string', `${lang}.json is missing ${key}`);
            assert.ok(dict[key].trim().length > 0, `${lang}.json has an empty ${key}`);
        }
    }
});
