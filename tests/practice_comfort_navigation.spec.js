const { test, expect } = require('@playwright/test');

test.describe('Practice Navigation, Flow Switching & Comfort Audit', () => {
    test('Hub to Cognitive Immersion and back via breadcrumbs & links', async ({ page }) => {
        await page.goto('http://localhost:8080/practice/index.html');
        await page.waitForLoadState('domcontentloaded');

        // Click Cognitive Hub banner
        const bannerLink = page.locator('a[href="cognitive-immersion.html"]').first();
        await expect(bannerLink).toBeVisible();
        await bannerLink.click();

        await page.waitForURL('**/practice/cognitive-immersion.html');
        expect(page.url()).toContain('cognitive-immersion.html');

        // Verify breadcrumbs back link to practice hub
        const bcHub = page.locator('.cosy-breadcrumbs a[href="index.html"]').first();
        await expect(bcHub).toBeVisible();
        await bcHub.click();

        await page.waitForURL('**/practice/index.html');
        expect(page.url()).toContain('/practice/index.html');
    });

    test('Keyboard Shortcuts (Enter, 1-4, C) during Practice Session', async ({ page }) => {
        await page.goto('http://localhost:8080/practice/index.html');
        await page.waitForLoadState('domcontentloaded');

        // Select French and Vocabulary
        const frPill = page.locator('.lang-pill[data-value="fr"]').first();
        if (await frPill.isVisible()) await frPill.click();

        // Start session via .btn-start
        const startBtn = page.locator('.btn-start').first();
        await startBtn.click();
        await page.waitForTimeout(500);

        const practiceSec = page.locator('#practice-section');
        await expect(practiceSec).toHaveClass(/active/);

        // Press Enter or 1 to interact
        await page.keyboard.press('1');
        await page.waitForTimeout(300);

        const bottomBar = page.locator('#pe-bottom-bar');
        if (await bottomBar.isVisible()) {
            await page.keyboard.press('Enter');
            await page.waitForTimeout(300);
        }
    });

    test('Session Summary modal exit loop', async ({ page }) => {
        await page.goto('http://localhost:8080/practice/index.html');
        await page.waitForLoadState('domcontentloaded');

        // Directly invoke summary modal via JS to test exit/return loop
        await page.evaluate(() => {
            if (window.cosyPracticeEngine) {
                window.cosyPracticeEngine.session = {
                    lang: 'en', cat: 'vocab', level: 'all', theme: 'all',
                    sessionQueue: [{ q: 'test' }], currentIndex: 0, sessionPoints: 20, correctCount: 1
                };
                window.cosyPracticeEngine.showSummary();
            }
        });

        const modal = page.locator('#summary-modal');
        await expect(modal).toBeVisible();

        // Press Enter to exit back to hub
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect(modal).toBeHidden();
        const setupSec = page.locator('#setup-section');
        await expect(setupSec).toBeVisible();
    });

    test('Mobile Touch Target Sizing (>=35px) and Accessibility', async ({ page }) => {
        await page.setViewportSize({ width: 393, height: 852 }); // iPhone 14 Pro
        await page.goto('http://localhost:8080/practice/index.html');
        await page.waitForLoadState('domcontentloaded');

        // Check language pills bounding box height
        const langPills = page.locator('.lang-pill');
        const count = await langPills.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < Math.min(count, 5); i++) {
            const box = await langPills.nth(i).boundingBox();
            if (box) {
                expect(box.height, `Lang pill ${i} height (${box.height}px) should be at least 35px for touch comfort`).toBeGreaterThanOrEqual(35);
            }
        }

        // Check start practice button bounding box height
        const startBtn = page.locator('.btn-start').first();
        const startBox = await startBtn.boundingBox();
        if (startBox) {
            expect(startBox.height, `Start button height (${startBox.height}px) should be >= 40px`).toBeGreaterThanOrEqual(40);
        }
    });
});
