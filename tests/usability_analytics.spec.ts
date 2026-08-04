import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Usability & Analytics Funnels', () => {
    test.beforeEach(async ({ page }) => {
        // Clear local storage and navigate to home
        await page.goto('http://localhost:8080/');
        await page.evaluate(() => localStorage.clear());
        await page.reload();
    });

    test('Homepage contact clicks should populate LocalStorage analytics events', async ({ page }) => {
        // Find and click the WhatsApp contact link on the homepage footer
        const waLink = page.locator('footer .footer-links-col a[href*="wa.me"]').first();
        await expect(waLink).toBeVisible();

        // Intercept navigation or click with shift key/evaluate to avoid actual navigation
        await waLink.click({ modifiers: ['Control'] }); // Command/Control click does not navigate away

        // Wait for event to propagate
        await page.waitForTimeout(500);

        // Verify event in LocalStorage
        let events = await page.evaluate(() => {
            return JSON.parse(localStorage.getItem('cosy_analytics_events') || '[]');
        });

        expect(events.length).toBeGreaterThanOrEqual(1);
        expect(events[0].category).toBe('Homepage Funnel');
        expect(events[0].action).toBe('Click WhatsApp');
    });

    test('Karaoke page interactions should populate LocalStorage analytics events', async ({ page }) => {
        await page.goto('http://localhost:8080/events/karaoke-club.html');

        // Click "Register Interest" link
        const registerBtn = page.locator('a.join-btn').first();
        await expect(registerBtn).toBeVisible();
        await registerBtn.click({ modifiers: ['Control'] });

        // Click "Enter Challenge" link on Maëlle Challenge
        const challengeBtn = page.locator('.pinned-challenges-section a.btn-primary').first();
        await expect(challengeBtn).toBeVisible();
        await challengeBtn.click({ modifiers: ['Control'] });

        // Wait for event to propagate
        await page.waitForTimeout(500);

        // Verify events in LocalStorage
        let events = await page.evaluate(() => {
            return JSON.parse(localStorage.getItem('cosy_analytics_events') || '[]');
        });

        expect(events.length).toBeGreaterThanOrEqual(2);

        const registerEvent = events.find(e => e.action === 'Register Interest');
        expect(registerEvent).toBeDefined();
        expect(registerEvent.category).toBe('Karaoke Funnel');

        const challengeEvent = events.find(e => e.action === 'Enter Challenge');
        expect(challengeEvent).toBeDefined();
        expect(challengeEvent.category).toBe('Karaoke Funnel');
    });

    test('Practice session start and completion should log analytics events', async ({ page }) => {
        await page.goto('http://localhost:8080/practice/index.html');

        // Click a quickstart vocabulary card to trigger session start instantly
        const englishVocabCard = page.locator('#quickstart-section .qs-card').first();
        await expect(englishVocabCard).toBeVisible();
        await englishVocabCard.click();

        // Wait for session config/init
        await page.waitForTimeout(500);

        // Verify 'Session Start' event
        let events = await page.evaluate(() => {
            return JSON.parse(localStorage.getItem('cosy_analytics_events') || '[]');
        });

        const startEvent = events.find(e => e.action === 'Session Start');
        expect(startEvent).toBeDefined();
        expect(startEvent.category).toBe('Practice Funnel');

        // Finish the session instantly by calling showSummary programmatically (to simulate completion)
        await page.evaluate(() => {
            if (window.cosyPracticeEngine) {
                window.cosyPracticeEngine.showSummary();
            }
        });

        // Wait for completion event
        await page.waitForTimeout(500);

        // Verify 'Session Complete' event
        events = await page.evaluate(() => {
            return JSON.parse(localStorage.getItem('cosy_analytics_events') || '[]');
        });

        const completeEvent = events.find(e => e.action === 'Session Complete');
        expect(completeEvent).toBeDefined();
        expect(completeEvent.category).toBe('Practice Funnel');
    });
});
