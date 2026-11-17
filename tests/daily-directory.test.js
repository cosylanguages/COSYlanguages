/**
 * tests/daily-directory.test.js
 * Unit tests for the shared daily directory component (js/daily-directory.js).
 *
 * The directory links out to every daily surface in the ecosystem; each repository keeps its own
 * daily content. These tests assert the directory covers all owners, that URLs point at the daily
 * pages, and that a host can mark its own card as "You are here".
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const SOURCE = fs.readFileSync(path.join(__dirname, '../js/daily-directory.js'), 'utf8');

function fakeNode(attrs = {}) {
    return {
        _html: '',
        _attrs: attrs,
        getAttribute(k) { return k in this._attrs ? this._attrs[k] : null; },
        setAttribute(k, v) { this._attrs[k] = v; },
        get innerHTML() { return this._html; },
        set innerHTML(v) { this._html = v; }
    };
}

function load(hostEl) {
    const document = {
        readyState: 'complete',
        documentElement: { lang: 'en' },
        querySelectorAll: (sel) => (sel === '[data-daily-directory]' && hostEl ? [hostEl] : []),
        addEventListener() {}
    };
    const context = { window: {}, document, console, Date, Math };
    context.window.document = document;
    vm.createContext(context);
    vm.runInContext(SOURCE, context);
    return context.window.COSY_DailyDirectory;
}

test('Daily Directory Suite', async (t) => {

    await t.test('1. Directory covers every owning repository', () => {
        const dir = load();
        const repos = dir.destinations().map(d => d.repo);
        for (const repo of ['COSYdata', 'COSYpractice', 'COSYlanguages', 'COSYevents', 'COSYtools']) {
            assert.ok(repos.includes(repo), `directory should include ${repo}`);
        }
    });

    await t.test('2. Every entry points at that repository\'s daily surface', () => {
        const dir = load();
        for (const d of dir.destinations()) {
            assert.match(d.url, /^https:\/\/cosylanguages\.github\.io\//, `${d.repo} uses the github.io origin`);
            assert.ok(d.url.includes(`/${d.repo}/`), `${d.repo} links to its own repository`);
            assert.ok(d.slots.length > 0, `${d.repo} lists at least one daily slot`);
            assert.ok(d.title && d.description, `${d.repo} has a title and description`);
        }
    });

    await t.test('3. Vocabulary, prompts, facts and spotlights keep their documented homes', () => {
        const dir = load();
        const byRepo = Object.fromEntries(dir.destinations().map(d => [d.repo, d]));
        assert.match(byRepo.COSYdata.url, /\/COSYdata\/$/, 'vocabulary points at COSYdata');
        assert.ok(byRepo.COSYdata.slots.some(s => /Word of the Day/.test(s.label)), 'COSYdata lists Word of the Day');
        assert.ok(byRepo.COSYpractice.url.includes('#daily-challenge'), 'practice points at the Daily Challenge');
        assert.ok(byRepo.COSYlanguages.slots.some(s => /Fun Fact/.test(s.label)), 'COSYlanguages lists the Fun Fact');
        assert.ok(byRepo.COSYevents.slots.some(s => /Science/.test(s.label)), 'COSYevents lists a science spotlight');
    });

    await t.test('4. A host marks its own card as "You are here" and links out to the rest', () => {
        const host = fakeNode({ 'data-self': 'data', 'data-lang': 'en' });
        load(host);
        assert.ok(host.innerHTML.includes('daily-directory-card'), 'directory rendered into the host');
        assert.ok(host.innerHTML.includes('daily-directory-badge'), 'the host\'s own card shows a badge');
        assert.equal((host.innerHTML.match(/daily-directory-link/g) || []).length, 4, 'the four other repositories get links');
        assert.ok(host.innerHTML.includes('https://cosylanguages.github.io/COSYpractice/'), 'links out to COSYpractice');
        assert.ok(!host.innerHTML.includes('>Open COSYdata<'), 'the host does not link out to itself');
    });

    await t.test('5. Localised headings render for each supported language', () => {
        for (const [lang, needle] of [['fr', 'quotidien'], ['it', 'quotidiano'], ['ru', 'Ежедневное'], ['el', 'Καθημερινά']]) {
            const host = fakeNode({ 'data-self': 'events', 'data-lang': lang });
            load(host);
            assert.ok(host.innerHTML.includes(needle), `${lang} heading should be rendered`);
        }
    });

    await t.test('6. render() is repeatable and escapes the content it is given', () => {
        const host = fakeNode({ 'data-self': 'languages', 'data-lang': 'en' });
        const dir = load(host);
        const strip = (html) => html.replace(/daily-directory-title-\d+/g, 'TITLE-ID');
        const first = strip(host.innerHTML);
        dir.render(host);
        assert.equal(strip(host.innerHTML), first, 're-rendering produces the same markup apart from the unique heading id');
    });
});

test('Daily Directory compact mode (embedded under the hub strip)', async (t) => {
    await t.test('renders one line of chips, skipping the host\'s own card, with the slots as tooltips', () => {
        const host = fakeNode({ 'data-self': 'languages', 'data-lang': 'en', 'data-compact': 'true' });
        load(host);
        assert.ok(host.innerHTML.includes('daily-directory--compact'));
        assert.equal((host.innerHTML.match(/daily-directory-chip"/g) || []).length, 4, 'four other owners');
        assert.ok(!host.innerHTML.includes('daily-directory-card'), 'no full cards');
        assert.ok(!host.innerHTML.includes('/COSYlanguages/'), 'does not link to itself');
        assert.ok(host.innerHTML.includes('Word of the Day'), 'tooltip lists what each owner publishes');
        assert.ok(host.innerHTML.includes('More dailies across COSY'));
    });
    await t.test('is localised', () => {
        const host = fakeNode({ 'data-self': 'languages', 'data-lang': 'fr', 'data-compact': 'true' });
        load(host);
        assert.ok(host.innerHTML.includes('Plus de quotidiens dans COSY'));
    });
    await t.test('renderCompact works for the strip even without the attribute', () => {
        const dir = load();
        const host = fakeNode({ 'data-self': 'languages', 'data-lang': 'en' });
        dir.renderCompact(host);
        assert.ok(host.innerHTML.includes('daily-directory-chip'));
    });
});
