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

    await t.test('1. Practice Hub URL generator should construct valid deep links', () => {
        const { helpers } = setupTestEnvironment();
        const buildUrl = helpers.buildPracticeUrl;

        // Speaking deep link
        const spkUrl = buildUrl('en', 'speaking', 'a0-a1', 'speaking');
        assert.ok(spkUrl.startsWith('https://cosylanguages.github.io/COSYpractice/'));
        const parsedSpk = new URL(spkUrl);
        assert.equal(parsedSpk.searchParams.get('lang'), 'en');
        assert.equal(parsedSpk.searchParams.get('cat'), 'speaking');
        assert.equal(parsedSpk.searchParams.get('level'), 'a1');
        assert.equal(parsedSpk.searchParams.get('theme'), 'speaking');

        // French grammar deep link with B1 level mapping
        const frUrl = buildUrl('fr', 'grammar', 'b1-b2', 'all');
        const parsedFr = new URL(frUrl);
        assert.equal(parsedFr.searchParams.get('lang'), 'fr');
        assert.equal(parsedFr.searchParams.get('cat'), 'grammar');
        assert.equal(parsedFr.searchParams.get('level'), 'b1');
        assert.equal(parsedFr.searchParams.get('theme'), null);

        // Italian idiom deep link
        const itUrl = buildUrl('it', 'vocab', 'all', 'phrases_idioms');
        const parsedIt = new URL(itUrl);
        assert.equal(parsedIt.searchParams.get('lang'), 'it');
        assert.equal(parsedIt.searchParams.get('cat'), 'vocab');
        assert.equal(parsedIt.searchParams.get('theme'), 'phrases_idioms');
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
        const attrs = { 'data-lang': 'fr', 'data-slots': 'word, idiom, nonsense', 'data-compact': 'true', 'data-title': 'Daily vocabulary' };
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
        assert.ok(shell.includes('Word of the Day') && shell.includes('Idiom of the Day'), 'requested tabs');
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

    await t.test('sources: speaking and writing from Practice, facts from the hub, idioms from COSYdata', () => {
        const { helpers } = setupTestEnvironment();
        const src = helpers.DAILY_SOURCES;
        assert.deepEqual(Array.from(src.speaking), [PRACTICE, LEGACY]);
        assert.deepEqual(Array.from(src.writing), [PRACTICE, LEGACY]);
        assert.deepEqual(Array.from(src.facts), [HUB, LEGACY]);
        assert.deepEqual(Array.from(src.idioms), [LEGACY]);
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
