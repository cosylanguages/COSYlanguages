/**
 * tests/daily-strip.test.js
 * Unit and integration tests for Daily Strip and COSYpractice collaboration.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setupTestEnvironment(extraGlobals = {}) {
    const storage = new Map();
    const fakeLocalStorage = {
        getItem: (k) => storage.has(k) ? storage.get(k) : null,
        setItem: (k, v) => storage.set(k, String(v)),
        removeItem: (k) => storage.delete(k),
        clear: () => storage.clear()
    };

    const listeners = {};
    const fakeWindow = {
        localStorage: fakeLocalStorage,
        sessionStorage: fakeLocalStorage,
        addEventListener: (event, handler) => {
            if (!listeners[event]) listeners[event] = [];
            listeners[event].push(handler);
        },
        dispatchEvent: (event) => {
            const list = listeners[event.type] || [];
            list.forEach(h => h(event));
            return true;
        },
        CustomEvent: function(type, params) {
            return { type, detail: params?.detail };
        },
        URL: URL,
        COSY_DAILY_SPEAKING: {
            'en': { 'a0-a1': [{ prompt: 'Say hello in English', translation: 'Привет' }] }
        },
        COSY_DAILY_WRITING: {},
        COSY_DAILY_FACTS: {},
        COSY_DAILY_IDIOMS: {}
    };

    const fakeDocument = {
        readyState: 'complete',
        querySelectorAll: () => [],
        addEventListener: () => {},
        dispatchEvent: fakeWindow.dispatchEvent
    };

    const context = {
        window: fakeWindow,
        document: fakeDocument,
        localStorage: fakeLocalStorage,
        sessionStorage: fakeLocalStorage,
        URL: URL,
        CustomEvent: fakeWindow.CustomEvent,
        Date: Date,
        Math: Math,
        console: console,
        ...extraGlobals
    };
    fakeWindow.window = fakeWindow;
    fakeWindow.document = fakeDocument;

    vm.createContext(context);
    const code = fs.readFileSync(path.join(__dirname, '../js/daily-strip.js'), 'utf8');
    vm.runInContext(code, context);

    return {
        context,
        storage,
        helpers: context.window.COSY_DailyStrip_Helpers,
        Component: context.window.COSY_DailyStrip
    };
}

test('Daily Strip & COSYpractice Collaboration Suite', async (t) => {

    await t.test('1. The generic Practice Hub deep link is gone', () => {
        const { helpers } = setupTestEnvironment();
        assert.equal(helpers.buildPracticeUrl, undefined, 'buildPracticeUrl was removed with the hub link');
    });

    await t.test('2. Streak synchronization across cosy-streak and practice_streak', () => {
        const { helpers, storage } = setupTestEnvironment();

        // Initially zero
        assert.equal(helpers.getUnifiedStreak(), 0);

        // When practice_streak is updated by COSYpractice to 5
        storage.set('practice_streak', '5');
        assert.equal(helpers.getUnifiedStreak(), 5);

        // When cosy-streak was higher (e.g. 7)
        storage.set('cosy-streak', '7');
        assert.equal(helpers.getUnifiedStreak(), 7);
    });

    await t.test('3. Unified points helper compatibility with cosy_total_points', () => {
        const { helpers, storage } = setupTestEnvironment();

        assert.equal(helpers.getUnifiedPoints(), 0);
        storage.set('cosy_total_points', '150');
        assert.equal(helpers.getUnifiedPoints(), 150);
    });

    await t.test('4. Marking daily practice done preserves day streak without adding XP', async () => {
        const { storage, Component, helpers } = setupTestEnvironment();

        const fakeNode = {
            addEventListener: () => {},
            classList: { add: () => {}, remove: () => {} },
            setAttribute: () => {},
            removeAttribute: () => {},
            querySelectorAll: () => [],
            querySelector: () => null
        };

        let renderedHTML = '';
        const element = {
            classList: { add: () => {} },
            getAttribute: () => 'en',
            set innerHTML(html) {
                renderedHTML = html;
            },
            get innerHTML() {
                return renderedHTML;
            },
            querySelector: () => fakeNode,
            querySelectorAll: () => []
        };

        const comp = new Component(element);
        // Wait for async init
        await new Promise(r => setTimeout(r, 20));

        const todayStr = helpers.getTodayKey();
        const yesterdayStr = helpers.getYesterdayKey();

        // Simulate continuing yesterday's streak of 3 days
        storage.set('cosy-streak', '3');
        storage.set('practice_streak', '3');
        storage.set('cosy-last-practice', yesterdayStr);
        storage.set('cosy_total_points', '100');

        comp.handleMarkDone();

        // Day streak should increment to 4
        assert.equal(storage.get('cosy-streak'), '4');
        assert.equal(storage.get('practice_streak'), '4');
        assert.equal(storage.get('cosy-last-practice'), todayStr);

        // Points should remain unchanged (no XP awarded in daily practice)
        assert.equal(storage.get('cosy_total_points'), '100');
    });

    await t.test('5. Rendered daily practice shell does not contain XP elements or text', async () => {
        const { Component } = setupTestEnvironment();
        let renderedHTML = '';
        const fakeNode = {
            addEventListener: () => {},
            classList: { add: () => {}, remove: () => {} },
            setAttribute: () => {},
            removeAttribute: () => {},
            querySelectorAll: () => [],
            querySelector: () => null
        };
        const element = {
            classList: { add: () => {} },
            getAttribute: () => 'en',
            set innerHTML(html) {
                renderedHTML = html;
            },
            get innerHTML() {
                return renderedHTML;
            },
            querySelector: () => fakeNode,
            querySelectorAll: () => []
        };

        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 20));

        // Ensure no XP badge or mention in daily strip markup
        assert.ok(!renderedHTML.includes('XP'), 'Daily practice shell should not contain any XP references');
        assert.ok(!renderedHTML.includes('daily-strip-points-badge'), 'Points badge should not be present');
        assert.ok(!renderedHTML.includes('daily-strip-challenge-xp'), 'Challenge XP pill should not be present');
        assert.ok(renderedHTML.includes('day streak'), 'Day streak display should be preserved');
        assert.ok(renderedHTML.includes('Mark done today'), 'Done button should have clean text without XP');
    });

    await t.test('6. Today completion check recognises both cosy-last-practice and dc_last_completed', () => {
        const { helpers, storage } = setupTestEnvironment();
        const todayStr = helpers.getTodayKey();

        assert.equal(helpers.isPracticeDoneToday(), false);

        // Completed via COSYpractice Daily Challenge
        storage.set('dc_last_completed', todayStr);
        assert.equal(helpers.isPracticeDoneToday(), true);

        // Or completed via COSYlanguages strip
        storage.delete('dc_last_completed');
        storage.set('cosy-last-practice', todayStr);
        assert.equal(helpers.isPracticeDoneToday(), true);
    });

    await t.test('7. COSYpractice 7-day schedule mapping coverage', () => {
        const { helpers } = setupTestEnvironment();
        const schedule = helpers.DAILY_SCHEDULE;

        // Verify all 7 days have corresponding categories matching COSYpractice
        for (let day = 0; day <= 6; day++) {
            assert.ok(schedule[day], `Day ${day} should be defined in schedule`);
            assert.ok(['speaking', 'writing', 'grammar', 'vocabulary'].includes(schedule[day].cat));
            assert.ok(schedule[day].label && schedule[day].label.length > 0);
            assert.ok(schedule[day].icon);
        }

        const todaySchedule = helpers.getTodaySchedule();
        assert.ok(todaySchedule);
        assert.ok(todaySchedule.label);
    });
});

test('Daily Strip dictionary-backed idiom calendar', async (t) => {
    const day = {
        A2: { id: 'en:a:idiom', word: 'On cloud nine', definition: 'Extremely happy', example: 'She was on cloud nine.' },
        B1: { id: 'en:b:idiom', word: 'Piece of cake', definition: 'Very easy', example: 'The test was a piece of cake.', literal_meaning: 'A slice of cake' },
        C1: { id: 'en:c:idiom', word: 'Bone of contention', definition: 'A subject of dispute', example: 'Money is a bone of contention.' }
    };

    await t.test('level bands map to calendar levels; two-level bands alternate by day', () => {
        const { helpers } = setupTestEnvironment();
        const pref = helpers.calendarLevelPreference;
        assert.deepEqual(Array.from(pref('a0-a1', 10)), ['A2']);
        assert.deepEqual(Array.from(pref('a2', 11)), ['A2']);
        assert.deepEqual(Array.from(pref('b1-b2', 10)), ['B1', 'B2']);
        assert.deepEqual(Array.from(pref('b1-b2', 11)), ['B2', 'B1']);
        assert.deepEqual(Array.from(pref('c1-c2', 10)), ['C1', 'C2']);
    });

    await t.test('pickCalendarCard prefers the band, else the nearest available level, else null', () => {
        const { helpers } = setupTestEnvironment();
        const pick = helpers.pickCalendarCard;
        assert.equal(pick(day, 'a2', 10).level, 'A2');
        assert.equal(pick(day, 'b1-b2', 10).level, 'B1');
        // B2 preferred on odd days but absent: falls to B1
        assert.equal(pick(day, 'b1-b2', 11).level, 'B1');
        assert.equal(pick(day, 'c1-c2', 10).card.word, 'Bone of contention');
        // language with only A2 and B1 (e.g. Italian) and a C band selected: nearest is B1
        assert.equal(pick({ A2: day.A2, B1: day.B1 }, 'c1-c2', 10).level, 'B1');
        assert.equal(pick({}, 'a2', 10), null);
        assert.equal(pick(null, 'a2', 10), null);
    });

    await t.test('fetchCalendarDay returns the day, caches the month, and remembers a missing calendar', async () => {
        const calls = [];
        const fakeFetch = async (url) => {
            calls.push(url);
            if (url.includes('/en/calendar/idiom/2026-11.json')) {
                return { ok: true, json: async () => ({ month: '2026-11', days: { '2026-11-10': day } }) };
            }
            return { ok: false, status: 404 };
        };
        const { helpers } = setupTestEnvironment({ fetch: fakeFetch });

        const got = await helpers.fetchCalendarDay('en', 'idiom', '2026-11-10');
        assert.equal(got.B1.word, 'Piece of cake');
        assert.ok(calls[0].endsWith('/COSYdata/daily/en/calendar/idiom/2026-11.json'));
        await helpers.fetchCalendarDay('en', 'idiom', '2026-11-11');
        assert.equal(calls.length, 1, 'second call for the same month must hit the session cache');

        assert.equal(await helpers.fetchCalendarDay('el', 'idiom', '2026-11-10'), null);
        assert.equal(await helpers.fetchCalendarDay('el', 'idiom', '2026-11-10'), null);
        assert.equal(calls.length, 2, 'a 404 is remembered for the session');
        assert.equal(await helpers.fetchCalendarDay('en', 'idiom', '2030-01-01'), null);
    });

    await t.test('a calendar card renders its definition, literal meaning and example', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem({
            idiom: 'Piece of cake', definition: 'Very easy', example: 'The test was a piece of cake.',
            literal_meaning: 'A slice of cake', level: 'B1'
        });
        assert.equal(item.text, 'Piece of cake');
        assert.equal(item.definition, 'Very easy');
        assert.equal(item.translation, '', 'the definition is shown by default, not hidden as a translation');
        assert.match(item.meta, /^CEFR B1 • Literally: "A slice of cake" • Example: "The test was a piece of cake\."$/);
    });
});

test('Daily Strip CEFR level task differentiation', async (t) => {
    await t.test('tasks differ meaningfully across A0-A1, A2, B1-B2, and C1-C2', () => {
        const { helpers } = setupTestEnvironment();
        const levels = ['a0-a1', 'a2', 'b1-b2', 'c1-c2'];

        for (const cat of ['speaking', 'writing']) {
            const promptsByLevel = levels.map(lvl => {
                const list = helpers.getLocalFallback('en', cat, lvl, 1);
                const picked = helpers.pickItemForLevel(list, lvl, 1);
                return picked.prompt;
            });

            // Ensure all 4 prompts are unique and non-empty
            const uniquePrompts = new Set(promptsByLevel);
            assert.equal(uniquePrompts.size, 4, `All 4 CEFR levels must yield different ${cat} tasks`);
        }
    });

    await t.test('pickItemForLevel correctly filters items by CEFR level', () => {
        const { helpers } = setupTestEnvironment();
        const items = [
            { prompt: 'Starter task', level: 'A0-A1' },
            { prompt: 'Elementary task', level: 'A2' },
            { prompt: 'Intermediate task', level: 'B1-B2' },
            { prompt: 'Advanced task', level: 'C1-C2' }
        ];

        assert.equal(helpers.pickItemForLevel(items, 'a0-a1', 0).prompt, 'Starter task');
        assert.equal(helpers.pickItemForLevel(items, 'a2', 0).prompt, 'Elementary task');
        assert.equal(helpers.pickItemForLevel(items, 'b1-b2', 0).prompt, 'Intermediate task');
        assert.equal(helpers.pickItemForLevel(items, 'c1-c2', 0).prompt, 'Advanced task');
    });
});

test('Daily Strip word-of-the-day slot and configurable tabs', async (t) => {
    const frDay = {
        A0: { id: 'fr:orage:noun', word: 'orage', pos: 'noun', article: "l'", gender: 'masculine', transcription: '/ɔ.ʁaʒ/',
              definition: 'Perturbation avec de la pluie et du tonnerre.', example: "Un grand orage a éclaté cette nuit.", emoji: '⛈️' },
        A2: { id: 'fr:gare:noun', word: 'gare', pos: 'noun', article: 'la', definition: "Bâtiment où s'arrêtent les trains.", example: 'Le train arrive à la gare.' }
    };

    await t.test('word level bands: A0 and A1 are separate, two-level bands alternate', () => {
        const { helpers } = setupTestEnvironment();
        const pref = (lvl, d) => Array.from(helpers.calendarLevelPreference(lvl, d, 'word'));
        assert.deepEqual(pref('a0-a1', 10), ['A0', 'A1']);
        assert.deepEqual(pref('a0-a1', 11), ['A1', 'A0']);
        assert.deepEqual(pref('a2', 10), ['A2']);
        assert.deepEqual(pref('b1-b2', 11), ['B2', 'B1']);
        assert.deepEqual(pref('c1-c2', 10), ['C1', 'C2']);
        // idioms are unchanged: they start at A2
        assert.deepEqual(Array.from(helpers.calendarLevelPreference('a0-a1', 10, 'idiom')), ['A2']);
        assert.deepEqual(Array.from(helpers.calendarLevelPreference('a0-a1', 10)), ['A2']);
    });

    await t.test('word pick falls back to the other half of the band, then the nearest published level', () => {
        const { helpers } = setupTestEnvironment();
        // French publishes A0 and A2 only. A1 preferred on odd days but absent: A0.
        assert.equal(helpers.pickCalendarCard(frDay, 'a0-a1', 11, 'word').level, 'A0');
        assert.equal(helpers.pickCalendarCard(frDay, 'a2', 10, 'word').level, 'A2');
        // B1-B2 is not published: nearest to B1 among A0 and A2 is A2
        assert.equal(helpers.pickCalendarCard(frDay, 'b1-b2', 10, 'word').level, 'A2');
    });

    await t.test('a word card becomes an item with article, part of speech, IPA and emoji', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'A0', card: frDay.A0 }, 'word'));
        assert.equal(item.text, "l'orage", 'no space after an elided article');
        assert.equal(item.definition, 'Perturbation avec de la pluie et du tonnerre.');
        assert.equal(item.emoji, '⛈️');
        assert.equal(item.fromCalendar, true);
        assert.equal(item.meta, 'CEFR A0 • noun • /ɔ.ʁaʒ/ • Example: "Un grand orage a éclaté cette nuit."');
        const gare = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'A2', card: frDay.A2 }, 'word'));
        assert.equal(gare.text, 'la gare');
        assert.equal(gare.meta, 'CEFR A2 • noun • Example: "Le train arrive à la gare."');
        assert.equal(gare.emoji, '');
    });

    await t.test('data-slots, data-title and data-compact configure a rendered strip', async () => {
        const urls = [];
        const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
        const fakeFetch = async (url) => {
            urls.push(url);
            if (url.includes('/fr/calendar/word/')) return { ok: true, json: async () => ({ days: { [todayKey]: frDay } }) };
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({
            html: '', attrs: {}, addEventListener() {}, classList: { add() {}, remove() {} },
            setAttribute(k, v) { this.attrs[k] = v; }, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [],
            set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; }
        });
        let shell = '';
        const attrs = { 'data-lang': 'fr', 'data-slots': 'word, phrasal-verb, nonsense', 'data-compact': 'true', 'data-title': 'Daily vocabulary' };
        const element = {
            classList: { add() {} },
            getAttribute: (k) => (k in attrs ? attrs[k] : null),
            setAttribute: (k, v) => { attrs[k] = v; },
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()),
            querySelectorAll: () => []
        };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));

        assert.ok(shell.includes('Daily vocabulary'), 'custom title');
        assert.ok(shell.includes('Word of the Day') && shell.includes('Phrasal Verb of the Day'), 'requested tabs');
        assert.ok(!shell.includes('Speaking Prompt') && !shell.includes('Fun Fact') && !shell.includes('nonsense'), 'unrequested tabs are absent');
        assert.ok(!shell.includes('daily-strip-challenge-pill') && !shell.includes('Mark done today') && !shell.includes('day streak'), 'compact hides the Practice widgets');
        assert.equal(comp.activeTab, 'word', 'first requested tab is active');

        const wordPanel = nodes[`#${comp.uniqueId}_panel_word`];
        assert.ok(wordPanel, 'word panel rendered');
        assert.ok(wordPanel.html.includes("l'orage"), 'article + word');
        assert.ok(wordPanel.html.includes('daily-strip-emoji'), 'emoji shown');
        assert.ok(wordPanel.html.includes('daily-strip-definition'), 'definition visible by default');
        assert.ok(wordPanel.html.includes('data-level="a0-a1"'), 'level bar offered for calendar cards');
        assert.ok(urls.some(u => u.endsWith('/COSYdata/daily/fr/calendar/word/' + todayKey.slice(0, 7) + '.json')));

        urls.length = 0;
        await comp.setLang('it');
        assert.equal(attrs['data-lang'], 'it');
        assert.ok(urls.some(u => u.includes('/it/calendar/word/')), 'setLang reloads from the new language');
    });
});

test('Daily Strip reads each daily file from its home, with COSYdata as the legacy fallback', async (t) => {
    const PRACTICE = 'https://cosylanguages.github.io/COSYpractice/data/daily/';
    const HUB = 'https://cosylanguages.github.io/COSYlanguages/data/daily/';
    const LEGACY = 'https://cosylanguages.github.io/COSYdata/daily/';

    await t.test('sources: speaking and writing from Practice, facts from the hub', () => {
        const { helpers } = setupTestEnvironment();
        const src = helpers.DAILY_SOURCES;
        assert.deepEqual(Array.from(src.speaking), [PRACTICE, LEGACY]);
        assert.deepEqual(Array.from(src.writing), [PRACTICE, LEGACY]);
        assert.deepEqual(Array.from(src.facts), [HUB, LEGACY]);
        assert.equal(src.idioms, undefined, 'idioms live in COSYdata, not here');
    });

    await t.test('the new location wins and is cached; the legacy location is not requested', async () => {
        const calls = [];
        const fakeFetch = async (url) => {
            calls.push(url);
            return { ok: true, json: async () => [{ id: 'x', prompt: 'from ' + url }] };
        };
        const { helpers } = setupTestEnvironment({ fetch: fakeFetch });
        const got = await helpers.fetchCategoryData('de', 'speaking');
        assert.equal(got[0].prompt, 'from ' + PRACTICE + 'de/speaking.json');
        assert.deepEqual(calls, [PRACTICE + 'de/speaking.json']);
        await helpers.fetchCategoryData('de', 'speaking');
        assert.equal(calls.length, 1, 'second call uses the session cache');
        await helpers.fetchCategoryData('de', 'fact');
        assert.equal(calls[1], HUB + 'de/facts.json', 'the strip tab id "fact" maps to facts.json on the hub');
    });

    await t.test('falls back to COSYdata when the new location is missing or empty', async () => {
        const calls = [];
        const fakeFetch = async (url) => {
            calls.push(url);
            if (url.startsWith(PRACTICE)) return { ok: false, status: 404 };
            if (url.startsWith(HUB)) return { ok: true, json: async () => [] };
            return { ok: true, json: async () => [{ id: 'legacy' }] };
        };
        const { helpers } = setupTestEnvironment({ fetch: fakeFetch });
        assert.equal((await helpers.fetchCategoryData('es', 'writing'))[0].id, 'legacy');
        assert.deepEqual(calls, [PRACTICE + 'es/writing.json', LEGACY + 'es/writing.json']);
        calls.length = 0;
        assert.equal((await helpers.fetchCategoryData('es', 'fact'))[0].id, 'legacy', 'an empty list counts as missing');
        assert.deepEqual(calls, [HUB + 'es/facts.json', LEGACY + 'es/facts.json']);
    });

    await t.test('returns null when no location has data, so the caller uses built-in prompts', async () => {
        const { helpers } = setupTestEnvironment({ fetch: async () => ({ ok: false, status: 404 }) });
        assert.equal(await helpers.fetchCategoryData('ka', 'speaking'), null);
    });
});

test('Daily Strip phrasal-verb-of-the-day tab', async (t) => {
    const card = { id: 'en:splash-out:verb', word: 'splash out', definition: 'To spend money freely on something special.',
                   example: 'We decided to splash out on a luxury suite.', transcription: '/splæʃ aʊt/', emoji: '💸',
                   synonyms: ['splurge', 'spend extravagantly'] };

    await t.test('a phrasal verb card shows definition, IPA, synonyms and example', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B1', card }, 'phrasal-verb'));
        assert.equal(item.text, 'splash out');
        assert.equal(item.definition, 'To spend money freely on something special.');
        assert.equal(item.emoji, '💸');
        assert.equal(item.fromCalendar, true);
        assert.equal(item.meta, 'CEFR B1 • /splæʃ aʊt/ • Similar: splurge, spend extravagantly • Example: "We decided to splash out on a luxury suite."');
    });

    await t.test('level bands use the idiom mapping: A0-A2 read A2, advanced bands alternate', () => {
        const { helpers } = setupTestEnvironment();
        const pref = (lvl, d) => Array.from(helpers.calendarLevelPreference(lvl, d, 'phrasal-verb'));
        assert.deepEqual(pref('a0-a1', 10), ['A2']);
        assert.deepEqual(pref('b1-b2', 11), ['B2', 'B1']);
        // English publishes A2-C1: C2 is absent, so the C band always lands on C1
        const day = { A2: card, B1: card, B2: card, C1: { ...card, word: 'weigh in on' } };
        assert.equal(helpers.pickCalendarCard(day, 'c1-c2', 10, 'phrasal-verb').level, 'C1');
        assert.equal(helpers.pickCalendarCard(day, 'c1-c2', 11, 'phrasal-verb').level, 'C1');
    });

    await t.test('data-slots can request the tab and the strip loads calendar/phrasal-verb', async () => {
        const urls = [];
        const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
        const fakeFetch = async (url) => {
            urls.push(url);
            if (url.includes('/calendar/phrasal-verb/')) return { ok: true, json: async () => ({ days: { [todayKey]: { A2: card, B1: card } } }) };
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'phrasal-verb,word', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        assert.ok(shell.includes('Phrasal Verb of the Day'));
        assert.equal(comp.activeTab, 'phrasal-verb');
        const panel = nodes[`#${comp.uniqueId}_panel_phrasal-verb`];
        assert.ok(panel && panel.html.includes('splash out') && panel.html.includes('daily-strip-definition'));
        assert.ok(urls.some(u => u.includes('/COSYdata/daily/en/calendar/phrasal-verb/')));
    });
});

test('Daily Strip idiom-of-the-day tab', async (t) => {
    const card = { id: 'en:break-a-leg:idiom', word: 'break a leg', definition: 'To wish someone good luck before a performance.',
                   example: 'Break a leg at your audition!', literal_meaning: 'Break a bone in your leg', emoji: '🍀' };

    await t.test('an idiom card shows its meaning, literal gloss and example', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B1', card }, 'idiom'));
        assert.equal(item.text, 'break a leg');
        assert.equal(item.definition, 'To wish someone good luck before a performance.');
        assert.equal(item.emoji, '🍀');
        assert.ok(item.meta.includes('Literally: "Break a bone in your leg"'));
        assert.ok(item.meta.includes('Example: "Break a leg at your audition!"'));
    });

    await t.test('data-slots can request the idiom tab and the strip loads calender/idiom', async () => {
        const urls = [];
        const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
        const fakeFetch = async (url) => {
            urls.push(url);
            if (url.includes('/calendar/idiom/')) return { ok: true, json: async () => ({ days: { [todayKey]: { A2: card, B1: card } } }) };
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'idiom', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        assert.ok(shell.includes('Idiom of the Day'));
        assert.equal(comp.activeTab, 'idiom');
        const panel = nodes[`#${comp.uniqueId}_panel_idiom`];
        assert.ok(panel && panel.html.includes('break a leg') && panel.html.includes('daily-strip-definition'));
        assert.ok(urls.some(u => u.includes('/COSYdata/daily/en/calendar/idiom/')));
    });
});

test('Daily Strip recall mode', async (t) => {
    const card = { id: 'fr:semaine:noun', word: 'semaine', pos: 'noun', definition: 'Une période composée de sept jours.',
                   example: 'Je travaille cinq jours par semaine.', transcription: '/sə.mɛn/', emoji: '🗓️' };

    async function mount(recall) {
        const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
        const fakeFetch = async (url) => {
            if (url.includes('/calendar/word/')) return { ok: true, json: async () => ({ days: { [todayKey]: { A1: card } } }) };
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'fr', 'data-slots': 'word', 'data-compact': 'true', 'data-recall': recall ? 'true' : 'false' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        return { comp, nodes, shell };
    }

    await t.test('recall mode hides the answer and shows a reveal control', async () => {
        const { comp, nodes } = await mount(true);
        const html = nodes[`#${comp.uniqueId}_panel_word`].html;
        assert.ok(html.includes('daily-strip-answer'));
        assert.ok(/daily-strip-answer[^>]* hidden/.test(html), 'answer starts hidden');
        assert.ok(html.includes('daily-strip-reveal-btn'));
        assert.ok(html.includes('Show answer'));
    });

    await t.test('without recall mode the answer is visible and can be hidden', async () => {
        const { comp, nodes } = await mount(false);
        const html = nodes[`#${comp.uniqueId}_panel_word`].html;
        assert.ok(/daily-strip-answer/.test(html));
        assert.ok(!/daily-strip-answer[^>]* hidden/.test(html), 'answer starts visible');
        assert.ok(html.includes('Hide answer'));
    });
});

test('Daily Strip verb of the day and verb + preposition tabs', async (t) => {
    const card = { id: 'fr:marcher:verb', word: 'marcher', level: 'A1', definition: 'Se déplacer à pied en faisant des pas.',
                   example: 'Nous marchons dans le parc.', transcription: '/maʁ.ʃe/', emoji: '🚶' };

    await t.test('a verb card shows the verb, its own level, IPA and example', () => {
        const { helpers } = setupTestEnvironment();
        // drawn for the B2 pool, but the verb itself is A1
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B2', card }, 'verb'));
        assert.equal(item.text, 'marcher');
        assert.equal(item.emoji, '🚶');
        assert.equal(item.meta, 'CEFR A1 • /maʁ.ʃe/ • Example: "Nous marchons dans le parc."');
        const vp = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B2', card }, 'verb-prep'));
        assert.equal(vp.text, 'marcher');
    });

    await t.test('a verb + preposition card shows the preposition, pattern and review label', () => {
        const { helpers } = setupTestEnvironment();
        const vpCard = {
            id: 'en:depend:verb', word: 'depend', level: 'A2',
            definition: 'To rely on something.', example: 'It depends on the weather.',
            preposition: 'on', prepositions: ['on'], pattern: 'depend on [someone / something]',
            slot_level: 'C1', review: true
        };
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'C1', card: vpCard }, 'verb-prep'));
        assert.equal(item.text, 'depend on');
        assert.equal(item.preposition, 'on');
        assert.equal(item.review, true);
        assert.equal(item.slotLevel, 'C1');
        assert.ok(item.meta.includes('Review for C1'));
        assert.ok(item.meta.includes('+ on'));
        assert.ok(item.meta.includes('Pattern: depend on'));
    });

    await t.test('a verb with two governed prepositions shows both', () => {
        const { helpers } = setupTestEnvironment();
        const vpCard = {
            id: 'fr:jouer:verb', word: 'jouer', level: 'A1',
            definition: 'Se livrer à un jeu.', example: 'Elle joue au tennis.',
            preposition: 'à', prepositions: ['à', 'de'], pattern: 'jouer + à + [sport] / jouer + de + [instrument]',
            slot_level: 'B1', review: true
        };
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B1', card: vpCard }, 'verb-prep'));
        assert.equal(item.text, 'jouer à');
        assert.ok(item.meta.includes('+ à / de'));
    });

    await t.test('a direct-object verb says so instead of inventing a preposition', () => {
        const { helpers } = setupTestEnvironment();
        const vpCard = {
            id: 'en:greet:verb', word: 'greet', level: 'A2',
            definition: 'To welcome someone.', example: 'She greeted everyone.',
            preposition: 'none', prepositions: ['none'], pattern: 'greet [someone] (direct object)',
            slot_level: 'B1', review: true
        };
        const item = helpers.parseDailyItem(helpers.calendarCardToItem({ level: 'B1', card: vpCard }, 'verb-prep'));
        assert.equal(item.text, 'greet');
        assert.ok(item.meta.includes('No preposition (direct object)'));
        assert.ok(item.meta.includes('Pattern: greet'));
    });

    await t.test('legacy idiom real_meaning becomes the visible definition', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem({
            idiom: 'Avoir le cafard',
            literal_meaning: 'To have the cockroach',
            real_meaning: 'To feel sad, gloomy, or blue',
            example: "Il a le cafard depuis l'hiver."
        });
        assert.equal(item.definition, 'To feel sad, gloomy, or blue');
        assert.equal(item.translation, 'To feel sad, gloomy, or blue');
        assert.ok(item.meta.includes('Literally: "To have the cockroach"'));
    });

    await t.test('level bands: A0 and A1 are separate for verbs, like words', () => {
        const { helpers } = setupTestEnvironment();
        for (const slot of ['verb', 'verb-prep']) {
            assert.deepEqual(Array.from(helpers.calendarLevelPreference('a0-a1', 10, slot)), ['A0', 'A1']);
            assert.deepEqual(Array.from(helpers.calendarLevelPreference('a0-a1', 11, slot)), ['A1', 'A0']);
            assert.deepEqual(Array.from(helpers.calendarLevelPreference('a2', 10, slot)), ['A2']);
            assert.deepEqual(Array.from(helpers.calendarLevelPreference('c1-c2', 11, slot)), ['C2', 'C1']);
        }
    });

    await t.test('both tabs link into the COSYtools Daily page in the strip language', async () => {
        const todayKey = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; })();
        const fakeFetch = async (url) => (url.includes('/calendar/verb')
            ? { ok: true, json: async () => ({ days: { [todayKey]: { A0: card, A1: card, A2: card, B1: card, B2: card, C1: card, C2: card } } }) }
            : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'fr', 'data-slots': 'verb,verb-prep,word', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        assert.ok(shell.includes('Verb of the Day') && shell.includes('Verb + Preposition'));
        const verbPanel = nodes[`#${comp.uniqueId}_panel_verb`].html;
        const prepPanel = nodes[`#${comp.uniqueId}_panel_verb-prep`].html;
        const link = 'https://cosylanguages.github.io/COSYtools/practice/daily/?lang=fr';
        assert.ok(verbPanel.includes(link) && verbPanel.includes('Conjugate it in COSYtools'));
        assert.ok(prepPanel.includes(link) && prepPanel.includes('Guess the preposition in COSYtools'));
        assert.ok(!verbPanel.includes('Practice in Hub'), 'the hub practice link is gone');
        assert.ok(!verbPanel.includes('daily-strip-audio-btn'), 'the Listen button is gone');
    });
});

test('Daily Strip reads prompts and facts from data files, not from tables or globals', async (t) => {
    await t.test('pickItemForLevel prefers curated entries for the learner band', () => {
        const { helpers } = setupTestEnvironment();
        const items = [
            { prompt: 'loose A2-B1', level: 'A2-B1' },
            { prompt: 'loose A2', level: 'A2' },
            { prompt: 'curated A2', level: 'A2', curated: true },
            { prompt: 'curated B1-B2', level: 'B1-B2', curated: true },
            { prompt: 'loose B2-C1', level: 'B2-C1' }
        ];
        for (let d = 0; d < 6; d++) assert.equal(helpers.pickItemForLevel(items, 'a2', d).prompt, 'curated A2');
        for (let d = 0; d < 6; d++) assert.equal(helpers.pickItemForLevel(items, 'b1-b2', d).prompt, 'curated B1-B2');
        // no curated entry for the band: every matching entry takes part
        const seen = new Set();
        for (let d = 0; d < 6; d++) seen.add(helpers.pickItemForLevel(items, 'c1-c2', d).prompt);
        assert.deepEqual(Array.from(seen), ['loose B2-C1']);
    });

    await t.test('legacy window.COSY_DAILY_* tables are ignored; built-ins are English one-liners', () => {
        const { helpers, context } = setupTestEnvironment();
        context.window.COSY_DAILY_FACTS = { fr: ['Fait n°1 : synthetic'] };
        context.window.COSY_DAILY_SPEAKING = { fr: { 'a2': [{ prompt: 'Sujet n°1 synthetic', level: 'A2' }] } };
        assert.deepEqual(Array.from(helpers.getLocalFallback('fr', 'fact', 'a2', 0)), ['Learning a new language expands memory and cognitive flexibility.']);
        const sp = helpers.getLocalFallback('fr', 'speaking', 'a2', 0);
        assert.ok(!JSON.stringify(sp).includes('synthetic'));
        assert.equal(sp.length, 1);
    });

    await t.test('a strip in a language without curated prompts shows that language, not English', async () => {
        const de = [
            { id: 'de:speaking:1', prompt: 'Beschreiben Sie Ihren idealen Tag.', level: 'A2' },
            { id: 'de:speaking:2', prompt: 'Erzählen Sie von Ihrer Familie.', level: 'A1-A2' }
        ];
        const fakeFetch = async (url) => (url.endsWith('/de/speaking.json') ? { ok: true, json: async () => de } : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'de', 'data-slots': 'speaking,fact', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(/Beschreiben Sie|Erzählen Sie/.test(html), 'German prompt from the data file');
        // The band guide is English UI copy and may say "introduce yourself"; the *prompt* must be German.
        assert.ok(!html.includes('Introduce yourself: say your name'), 'no English curated prompt for a German learner');
        // the fact file is missing: the built-in fact is the last resort
        assert.ok(nodes[`#${comp.uniqueId}_panel_fact`].html.includes('Learning a new language'));
    });

    await t.test('with every fetch failing the strip still shows a prompt per level', async () => {
        const { Component } = setupTestEnvironment({ fetch: async () => ({ ok: false, status: 500 }) });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'ka', 'data-slots': 'speaking,writing', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));
        assert.ok(nodes[`#${comp.uniqueId}_panel_speaking`].html.includes('Introduce yourself'));
        assert.ok(nodes[`#${comp.uniqueId}_panel_writing`].html.includes('Write 3-4 simple sentences'));
    });
});

test('Daily Strip speaking brief: task, exam, timings, follow-ups and band guide', async (t) => {
    const speaking = [
        { id: 'en:speaking:c1', prompt: 'Describe a skill you learned that changed your daily life.', topic: 'skills',
          level: 'B1-B2', curated: true, exam: 'IELTS', part: 'Part 2 · Long turn (cue card)', task: 'Cue card talk',
          prep_seconds: 60, speak_seconds: 120, follow_ups: ['Was it difficult at the beginning?', 'Would you recommend it?'] },
        { id: 'en:speaking:c2', prompt: 'Introduce yourself: name, town, work and one hobby.', topic: 'introductions',
          level: 'A0-A1', curated: true, exam: 'DELF A1', part: 'Part 1 · Entretien dirigé', task: 'Se présenter',
          prep_seconds: 15, speak_seconds: 45, follow_ups: ['How do you spell your name?'] }
    ];

    function mountStrip(items) {
        const fakeFetch = async (url) => (url.endsWith('/en/speaking.json') ? { ok: true, json: async () => items } : { ok: false, status: 404 });
        const { Component, helpers } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'speaking', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        return { comp: new Component(element), nodes, helpers };
    }

    await t.test('formatDuration reads as 45s, 1 min 30s and 2 min', () => {
        const { helpers } = setupTestEnvironment();
        assert.equal(helpers.formatDuration(45), '45s');
        assert.equal(helpers.formatDuration(90), '1 min 30s');
        assert.equal(helpers.formatDuration(120), '2 min');
        assert.equal(helpers.formatDuration(0), '0s');
        assert.equal(helpers.formatDuration('nonsense'), '0s');
    });

    await t.test('parseDailyItem keeps the exam scaffolding and drops junk', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem(speaking[0]);
        assert.equal(item.task, 'Cue card talk');
        assert.equal(item.exam, 'IELTS');
        assert.equal(item.part, 'Part 2 · Long turn (cue card)');
        assert.equal(item.prepSeconds, 60);
        assert.equal(item.speakSeconds, 120);
        assert.deepEqual(Array.from(item.followUps), ['Was it difficult at the beginning?', 'Would you recommend it?']);

        const bare = helpers.parseDailyItem({ prompt: 'Just a prompt', level: 'A2' });
        assert.equal(bare.task, '');
        assert.equal(bare.exam, '');
        assert.equal(bare.part, '');
        assert.equal(bare.prepSeconds, 0);
        assert.equal(bare.speakSeconds, 0);
        assert.deepEqual(Array.from(bare.followUps), []);

        const junk = helpers.parseDailyItem({ prompt: 'p', prep_seconds: -5, speak_seconds: 'x', follow_ups: [1, '', 'ok?'] });
        assert.equal(junk.prepSeconds, 0);
        assert.equal(junk.speakSeconds, 0);
        assert.deepEqual(Array.from(junk.followUps), ['ok?']);
    });

    await t.test('the B1-B2 speaking panel shows the exam brief and the band guide', async () => {
        const { comp, nodes } = mountStrip(speaking);
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();

        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Cue card talk'), 'task chip');
        assert.ok(html.includes('IELTS'), 'exam chip');
        assert.ok(html.includes('Part 2 · Long turn (cue card)'), 'part chip');
        assert.ok(html.includes('Prep 1 min'), 'prep time');
        assert.ok(html.includes('Speak 2 min'), 'speaking time');
        assert.ok(html.includes('Follow-up questions'), 'follow-up heading');
        assert.ok(html.includes('Was it difficult at the beginning?'), 'first follow-up');
        assert.ok(!html.includes('daily-strip-band-guide'), 'the CEFR band guide is not rendered');
        assert.ok(!html.includes('Certified by:'), 'no certifying-exam line');
        assert.ok(!html.includes('Language to aim for'), 'no focus line');
    });

    await t.test('the selected level picks the card and its chips', async () => {
        const { comp, nodes } = mountStrip(speaking);
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'a0-a1';
        await comp.loadAllCategories();
        comp.renderContent();

        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Se présenter'), 'A0-A1 task chip');
        assert.ok(html.includes('DELF A1'), 'A0-A1 exam chip');
        assert.ok(html.includes('Part 1 · Entretien dirigé'), 'A0-A1 part chip');
        assert.ok(!html.includes('Threshold to Vantage'), 'no other band guide');
    });

    await t.test('no CEFR band guide is rendered for any band', async () => {
        for (const level of ['a0-a1', 'a2', 'b1-b2', 'c1-c2']) {
            const { comp, nodes } = mountStrip(speaking);
            await new Promise(r => setTimeout(r, 30));
            comp.selectedLevel = level;
            await comp.loadAllCategories();
            comp.renderContent();

            const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
            assert.ok(!html.includes('daily-strip-band-guide'), `no guide block for ${level}`);
            assert.ok(!html.includes('What this level expects'), `no expectations heading for ${level}`);
            assert.ok(!html.includes('At this level you can:'), `no can-do line for ${level}`);
            assert.ok(!html.includes('Certified by:'), `no exam destinations for ${level}`);
            assert.ok(!html.includes('Typical length'), `no length line for ${level}`);
            assert.ok(html.includes('daily-strip-prompt'), `the prompt still renders for ${level}`);
        }
    });

    await t.test('a prompt without scaffolding renders no chips and no follow-ups', async () => {
        const plain = [{ id: 'en:speaking:1', prompt: 'What do you do at the weekend?', level: 'A2' }];
        const { comp, nodes } = mountStrip(plain);
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'a2';
        await comp.loadAllCategories();
        comp.renderContent();

        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(!html.includes('daily-strip-chips'), 'no chips');
        assert.ok(!html.includes('Follow-up questions'), 'no follow-ups');
        assert.ok(!html.includes('daily-strip-band-guide'), 'no band guide');
    });

    await t.test('the writing tab shows its own brief and its own follow-ups, never the speaking ones', async () => {
        const writing = [{ id: 'en:writing:1', prompt: 'Write a short paragraph about your week.', level: 'A2', curated: true,
                           task: 'Paragraph', genre: 'Description', exam: 'IELTS', part: 'Part 1',
                           word_min: 140, word_max: 190, write_minutes: 40,
                           checklist: ['Each paragraph has one main idea.', 'You gave a reason for your opinion.'],
                           prep_seconds: 30, speak_seconds: 60, follow_ups: ['Why?'] }];
        const fakeFetch = async (url) => (url.endsWith('/en/writing.json') ? { ok: true, json: async () => writing } : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'writing', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));

        const html = nodes[`#${comp.uniqueId}_panel_writing`].html;
        assert.ok(html.includes('daily-strip-chips'), 'writing cards show their brief');
        assert.ok(html.includes('IELTS') && html.includes('Part 1'), 'exam and part chips render');
        assert.ok(html.includes('Description'), 'genre chip renders');
        assert.ok(html.includes('140-190 words'), 'word target chip renders');
        assert.ok(html.includes('40 min'), 'time limit chip renders');
        assert.ok(html.includes('Before you finish, check'), 'self-check list renders');
        assert.ok(!html.includes('daily-strip-band-guide'), 'no band guide on writing');
        assert.ok(!html.includes('Typical length'), 'no length line');
        assert.ok(html.includes('Follow-up questions'), 'writing cards carry follow-ups too');
        assert.ok(html.includes('Why?'), 'the writing follow-up is shown');
        assert.ok(!html.includes('Prep 30s') && !html.includes('Speak 1m'), 'no speaking timings on writing');
    });

    await t.test('a writing card without follow-ups renders no follow-up block', async () => {
        const writing = [{ id: 'en:writing:2', prompt: 'Write a note to your neighbour.', level: 'A2', curated: true,
                           task: 'Note', genre: 'Message', exam: 'Cambridge A2 Key', part: 'Part 6',
                           word_min: 25, word_max: 35, write_minutes: 10,
                           checklist: ['You said where the key is.', 'You used a greeting.'] }];
        const fakeFetch = async (url) => (url.endsWith('/en/writing.json') ? { ok: true, json: async () => writing } : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'writing', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 30));

        const html = nodes[`#${comp.uniqueId}_panel_writing`].html;
        assert.ok(!html.includes('Follow-up questions'), 'no follow-up block without data');
        assert.ok(html.includes('Before you finish, check'), 'the checklist still renders');
    });
});

test('Daily Strip general-course cards: activity instead of exam, and audience filtering', async (t) => {
    const mixed = [
        { id: 'en:speaking:g1', prompt: 'Name ten things in a kitchen. Which do you use every day? What do you do with them?', level: 'A0-A1', curated: true,
          track: 'general', task: 'Name as many as you can', activity: 'brainstorm', audience: ['young', 'teen', 'adult', 'senior'],
          prep_seconds: 10, speak_seconds: 45,
          follow_ups: ['Which one is the most useful?', 'Which one is dangerous for children?', 'What is in your kitchen that is not in mine?'] },
        { id: 'en:speaking:g2', prompt: 'Present a proposal for your community.', level: 'C1-C2', curated: true,
          track: 'general', task: 'Present a proposal', activity: 'present', audience: ['adult', 'senior'],
          prep_seconds: 45, speak_seconds: 120, follow_ups: ['What is the first step?'] },
        { id: 'en:speaking:c1', prompt: 'Describe a skill you learned.', level: 'B1-B2', curated: true,
          exam: 'IELTS', part: 'Part 2 · Long turn (cue card)', task: 'Cue card talk', audience: ['teen', 'adult', 'senior'],
          prep_seconds: 60, speak_seconds: 120, follow_ups: ['Was it difficult?'] }
    ];

    function mountWith(items, extraAttrs = {}) {
        const fakeFetch = async (url) => (url.endsWith('/en/speaking.json') ? { ok: true, json: async () => items } : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'speaking', 'data-compact': 'true', ...extraAttrs };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        return { comp: new Component(element), nodes };
    }

    await t.test('parseDailyItem marks a general card and keeps its activity and audience', () => {
        const { helpers } = setupTestEnvironment();
        const item = helpers.parseDailyItem(mixed[0]);
        assert.equal(item.track, 'general');
        assert.equal(item.activity, 'brainstorm');
        assert.deepEqual(Array.from(item.audience), ['young', 'teen', 'adult', 'senior']);
        assert.equal(item.exam, '');
        const exam = helpers.parseDailyItem(mixed[2]);
        assert.equal(exam.track, 'exam');
        assert.equal(exam.activity, '');
    });

    await t.test('a general card shows its activity chip and no exam chip', async () => {
        const { comp, nodes } = mountWith(mixed);
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'a0-a1';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('daily-strip-chip-activity'), 'activity chip');
        assert.ok(html.includes('Brainstorm'), 'activity label');
        assert.ok(!html.includes('daily-strip-chip-exam'), 'no exam chip on a general card');
        assert.ok(!html.includes('daily-strip-chip-part'), 'no part chip on a general card');
    });

    await t.test('data-audience keeps a young learner away from an adult-only band', async () => {
        const { comp, nodes } = mountWith(mixed, { 'data-audience': 'young' });
        await new Promise(r => setTimeout(r, 30));
        assert.equal(comp.audience, 'young');
        comp.selectedLevel = 'c1-c2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(!html.includes('Present a proposal'), 'adult-only card is filtered out for a young learner');
    });

    await t.test('data-audience still serves the same card to an audience that suits it', async () => {
        const { comp, nodes } = mountWith(mixed, { 'data-audience': 'senior' });
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'c1-c2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Present a proposal'), 'senior sees the adult/senior card');
    });

    await t.test('an unknown data-audience is ignored rather than filtering everything out', async () => {
        const { comp } = mountWith(mixed, { 'data-audience': 'martian' });
        await new Promise(r => setTimeout(r, 30));
        assert.equal(comp.audience, '');
    });

    await t.test('data-track="general" keeps exam tasks out', async () => {
        const { comp, nodes } = mountWith(mixed, { 'data-track': 'general' });
        await new Promise(r => setTimeout(r, 30));
        assert.equal(comp.track, 'general');
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(!html.includes('Cue card talk'), 'exam task is filtered out');
        assert.ok(!html.includes('daily-strip-chip-exam'), 'no exam chip in general mode');
    });

    await t.test('a general card shows all three follow-up questions', async () => {
        const { comp, nodes } = mountWith(mixed, {});
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'a0-a1';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Follow-up questions'), 'follow-ups block rendered');
        for (const q of mixed[0].follow_ups) assert.ok(html.includes(q), `shows: ${q}`);
    });

    await t.test('the band guide describes the card actually shown, not the requested band', async () => {
        const { comp, nodes } = mountWith(mixed, { 'data-audience': 'young' });
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'c1-c2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        // the audience preference moved a young learner off the adult-only C1-C2 card
        assert.ok(!html.includes('Present a proposal'), 'adult-only card not shown');
        assert.ok(!html.includes('daily-strip-band-guide'), 'no band guide to mislabel the card');
    });

    await t.test('the site-wide audience preference (children/teens/adults/seniors) is honoured', async () => {
        for (const [stored, expected] of [['children', 'young'], ['teens', 'teen'], ['adults', 'adult'], ['seniors', 'senior']]) {
            const fakeFetch = async (url) => (url.endsWith('/en/speaking.json') ? { ok: true, json: async () => mixed } : { ok: false, status: 404 });
            const { Component } = setupTestEnvironment({
                fetch: fakeFetch,
                localStorage: { getItem: (k) => (k === 'cosy_audience_preference' ? stored : null), setItem() {}, removeItem() {} }
            });
            const nodes = {};
            const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
                querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
            let shell = '';
            const attrs = { 'data-lang': 'en', 'data-slots': 'speaking', 'data-compact': 'true' };
            const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
                set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
                querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
            const comp = new Component(element);
            await new Promise(r => setTimeout(r, 30));
            assert.equal(comp.audience, expected, `${stored} maps to ${expected}`);
        }
    });

    await t.test('data-track="exam" keeps course material out', async () => {
        const { comp, nodes } = mountWith(mixed, { 'data-track': 'exam' });
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Cue card talk'), 'exam task is shown');
        assert.ok(!html.includes('daily-strip-chip-activity'), 'no activity chip in exam mode');
    });
});

test('Daily Strip writing brief: task, genre, word target and general-track activity', async (t) => {
    function mountWriting(items) {
        const fakeFetch = async (url) => (url.endsWith('/en/writing.json') ? { ok: true, json: async () => items } : { ok: false, status: 404 });
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'en', 'data-slots': 'writing', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        return { comp: new Component(element), nodes };
    }

    const writing = [
        { id: 'en:writing:e1', prompt: 'Write four sentences about your family.', level: 'A0-A1', curated: true,
          track: 'exam', exam: 'Cambridge Pre A1 Starters', part: 'Reading & Writing', task: 'Short sentences',
          genre: 'Short sentences', word_min: 10, word_max: 25, write_minutes: 10,
          checklist: ['Every sentence starts with a capital letter.', 'You answered every part of the task.'] },
        { id: 'en:writing:g1', prompt: 'Describe your bedroom in five sentences.', level: 'A2', curated: true,
          track: 'general', task: 'Describe your room', activity: 'describe', genre: 'Description',
          word_min: 40, word_max: 70, write_minutes: 15,
          checklist: ['You wrote all the information the task asks for.', 'You joined ideas with and or but.'] },
        { id: 'en:writing:e3', prompt: 'Write an essay on remote work.', level: 'B1-B2', curated: true,
          track: 'exam', exam: 'Cambridge B2 First', part: 'Writing Part 1', task: 'Essay', genre: 'Essay',
          word_min: 140, word_max: 190, write_minutes: 40,
          checklist: ['Each paragraph has one main idea.', 'You gave a reason for your opinion.'] },
        { id: 'en:writing:e4', prompt: 'Write an essay on free speech.', level: 'C1-C2', curated: true,
          track: 'exam', exam: 'Cambridge C1 Advanced', part: 'Writing Part 1', task: 'Essay', genre: 'Essay',
          word_min: 220, word_max: 260, write_minutes: 45,
          checklist: ['Your position is clear in the introduction.', 'You addressed a counterargument.'] },
    ];

    await t.test('no writing band guide is rendered for any band', async () => {
        for (const level of ['a0-a1', 'a2', 'b1-b2', 'c1-c2']) {
            const { comp, nodes } = mountWriting(writing);
            await new Promise(r => setTimeout(r, 30));
            comp.selectedLevel = level;
            await comp.loadAllCategories();
            comp.renderContent();

            const html = nodes[`#${comp.uniqueId}_panel_writing`].html;
            assert.ok(!html.includes('daily-strip-band-guide'), `no guide block for ${level}`);
            assert.ok(!html.includes('What this level expects'), `no expectations heading for ${level}`);
            assert.ok(!html.includes('At this level you can:'), `no can-do line for ${level}`);
            assert.ok(!html.includes('Certified by:'), `no certifying exams for ${level}`);
            assert.ok(!html.includes('Typical length'), `no typical length for ${level}`);
            assert.ok(!html.includes('Language to aim for'), `no focus line for ${level}`);
            assert.ok(html.includes('daily-strip-prompt'), `the prompt still renders for ${level}`);
        }
    });

    await t.test('a general writing card shows its activity chip and no exam chip', async () => {
        const { comp, nodes } = mountWriting(writing);
        await new Promise(r => setTimeout(r, 30));
        comp.selectedLevel = 'a2';
        await comp.loadAllCategories();
        comp.renderContent();

        const html = nodes[`#${comp.uniqueId}_panel_writing`].html;
        assert.ok(html.includes('🎨 Describe'), 'activity chip uses the writing label');
        assert.ok(!html.includes('daily-strip-chip-exam'), 'no exam chip on a general card');
        assert.ok(html.includes('40-70 words'), 'word target from the card');
        assert.ok(html.includes('15 min'), 'time limit from the card');
    });
});

test('Daily Strip chrome localization: every language labels its own controls', async (t) => {
    const fsLocal = require('node:fs');
    const pathLocal = require('node:path');
    const DATA = pathLocal.join(__dirname, '../data/daily');
    const LANGS = ['en', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'el', 'hy', 'ka', 'tt', 'ba', 'cv', 'br'];
    // listen/practice are no longer rendered: the Listen button and the Practice in Hub link were removed.
    const CHROME_KEYS = ['level', 'prep', 'speak', 'words', 'followUps', 'checklist'];

    // Serve the real band-guide.json from disk, so the test exercises the same files the browser fetches.
    function mount(lang, items, opts = {}) {
        const guidePath = pathLocal.join(DATA, lang, 'band-guide.json');
        const fakeFetch = async (url) => {
            if (url.endsWith(`/${lang}/band-guide.json`)) {
                if (opts.breakGuide) return { ok: false, status: 500 };
                const doc = JSON.parse(fsLocal.readFileSync(guidePath, 'utf8'));
                return { ok: true, json: async () => doc };
            }
            if (url.endsWith(`/${lang}/speaking.json`)) {
                return { ok: true, json: async () => items.filter(i => i.id.includes(':speaking:')) };
            }
            if (url.endsWith(`/${lang}/writing.json`)) {
                return { ok: true, json: async () => items.filter(i => i.id.includes(':writing:')) };
            }
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': lang, 'data-slots': 'speaking,writing', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        return { comp: new Component(element), nodes };
    }

    const prompt = (lang, level = 'B1-B2') => [
        { id: `${lang}:speaking:1`, prompt: 'Describe your town.', level, curated: true,
          exam: 'X', part: 'Part 1', task: 'Talk', prep_seconds: 30, speak_seconds: 90, follow_ups: ['Why?'] },
        { id: `${lang}:writing:1`, prompt: 'Write about your town.', level, curated: true,
          track: 'exam', exam: 'X', part: 'Part 1', task: 'Essay', genre: 'Essay',
          word_min: 100, word_max: 180, write_minutes: 30, checklist: ['One idea per paragraph.'] },
    ];

    await t.test('every language ships the chrome labels the panel needs', () => {
        for (const lang of LANGS) {
            const doc = JSON.parse(fsLocal.readFileSync(pathLocal.join(DATA, lang, 'band-guide.json'), 'utf8'));
            assert.equal(doc.lang, lang, `${lang}: lang field`);
            for (const k of CHROME_KEYS) {
                assert.ok(doc.chrome && doc.chrome[k], `${lang}: chrome.${k}`);
            }
        }
    });

    await t.test('the panel uses the language\'s own labels, not the English ones', async () => {
        for (const lang of LANGS) {
            const { comp, nodes } = mount(lang, prompt(lang));
            await new Promise(r => setTimeout(r, 40));
            comp.selectedLevel = 'b1-b2';
            await comp.loadAllCategories();
            comp.renderContent();

            const doc = JSON.parse(fsLocal.readFileSync(pathLocal.join(DATA, lang, 'band-guide.json'), 'utf8'));
            const c = doc.chrome;
            const speak = nodes[`#${comp.uniqueId}_panel_speaking`].html;
            const write = nodes[`#${comp.uniqueId}_panel_writing`].html;

            assert.ok(speak.includes(c.followUps), `${lang}: localized follow-up heading`);
            assert.ok(speak.includes(c.prep), `${lang}: localized prep label`);
            assert.ok(speak.includes(c.speak), `${lang}: localized speak label`);
            assert.ok(write.includes(c.checklist), `${lang}: localized checklist label`);
            if (lang !== 'en') {
                assert.ok(!speak.includes('Follow-up questions'), `${lang}: no English follow-up heading`);
            }
        }
    });

    await t.test('no band guide text is rendered in any language', async () => {
        for (const lang of LANGS) {
            const { comp, nodes } = mount(lang, prompt(lang));
            await new Promise(r => setTimeout(r, 40));
            comp.selectedLevel = 'b1-b2';
            await comp.loadAllCategories();
            comp.renderContent();

            const doc = JSON.parse(fsLocal.readFileSync(pathLocal.join(DATA, lang, 'band-guide.json'), 'utf8'));
            const b = doc.bands['b1-b2'];
            const speak = nodes[`#${comp.uniqueId}_panel_speaking`].html;
            const write = nodes[`#${comp.uniqueId}_panel_writing`].html;

            assert.ok(!speak.includes('daily-strip-band-guide'), `${lang}: no guide on speaking`);
            assert.ok(!write.includes('daily-strip-band-guide'), `${lang}: no guide on writing`);
            assert.ok(!speak.includes(b.speaking.expects), `${lang}: no expectation text on the panel`);
            assert.ok(!speak.includes(b.label), `${lang}: no band label on the panel`);
            assert.ok(!speak.includes(doc.ui.what), `${lang}: no "what" heading`);
            assert.ok(!write.includes(b.writing.focus), `${lang}: no writing focus`);
            // the guide's own length *label*, since a card's word-target chip can share the value text
            assert.ok(!write.includes(doc.ui.length), `${lang}: no typical-length label`);
        }
    });

    await t.test('a missing or broken guide file falls back to the English chrome labels', async () => {
        const { comp, nodes } = mount('tt', prompt('tt'), { breakGuide: true });
        await new Promise(r => setTimeout(r, 40));
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();

        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Follow-up questions'), 'English follow-up heading used');
        assert.ok(html.includes('Prep'), 'English prep label used');
        assert.ok(html.includes('daily-strip-prompt'), 'the prompt still renders');
    });

    await t.test('switching language reloads the chrome labels for the new language', async () => {
        const guideFor = (lang) => JSON.parse(fsLocal.readFileSync(pathLocal.join(DATA, lang, 'band-guide.json'), 'utf8'));
        const fakeFetch = async (url) => {
            for (const lang of ['de', 'fr']) {
                if (url.endsWith(`/${lang}/band-guide.json`)) return { ok: true, json: async () => guideFor(lang) };
                if (url.endsWith(`/${lang}/speaking.json`)) return { ok: true, json: async () => prompt(lang) };
            }
            return { ok: false, status: 404 };
        };
        const { Component } = setupTestEnvironment({ fetch: fakeFetch });
        const nodes = {};
        const makeNode = () => ({ html: '', addEventListener() {}, classList: { add() {}, remove() {} }, setAttribute() {}, removeAttribute() {},
            querySelector: () => null, querySelectorAll: () => [], set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html; } });
        let shell = '';
        const attrs = { 'data-lang': 'de', 'data-slots': 'speaking', 'data-compact': 'true' };
        const element = { classList: { add() {} }, getAttribute: (k) => (k in attrs ? attrs[k] : null), setAttribute() {},
            set innerHTML(v) { shell = v; }, get innerHTML() { return shell; },
            querySelector: (sel) => (nodes[sel] = nodes[sel] || makeNode()), querySelectorAll: () => [] };
        const comp = new Component(element);
        await new Promise(r => setTimeout(r, 40));
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();
        assert.ok(nodes[`#${comp.uniqueId}_panel_speaking`].html.includes('Nachfragen'), 'German label first');

        await comp.setLang('fr');
        comp.selectedLevel = 'b1-b2';
        await comp.loadAllCategories();
        comp.renderContent();
        const html = nodes[`#${comp.uniqueId}_panel_speaking`].html;
        assert.ok(html.includes('Questions de suivi'), 'French label after switching');
        assert.ok(!html.includes('Nachfragen'), 'German label gone after switching');
    });
});
