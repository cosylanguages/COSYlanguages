/**
 * tests/daily-strip.test.js
 * Unit and integration tests for Daily Strip and COSYpractice collaboration.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setupTestEnvironment() {
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
        console: console
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
