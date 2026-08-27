const { test, expect } = require('@playwright/test');

test.describe('Practice Interactive Deep Visual & Functional Test', () => {
    test('Check Practice Hub and Start Practice Session across viewports', async ({ page }) => {
        const viewports = [
            { name: 'Desktop HD', width: 1440, height: 900 },
            { name: 'Mobile iPhone', width: 393, height: 852 },
            { name: 'Small Phone', width: 360, height: 740 }
        ];

        for (const vp of viewports) {
            await page.setViewportSize({ width: vp.width, height: vp.height });
            await page.goto('http://localhost:8080/practice/index.html');
            await page.waitForLoadState('domcontentloaded');

            // Take screenshot of Hub
            await page.screenshot({ path: `project/tests/verification/screenshots/practice_hub_${vp.name.replace(/\s+/g, '_')}.png`, fullPage: true });

            // Click Start Practice or a category
            const startBtn = page.locator('.start-btn-primary, #start-practice-btn').first();
            if (await startBtn.isVisible()) {
                await startBtn.click();
                await page.waitForTimeout(500);
                await page.screenshot({ path: `project/tests/verification/screenshots/practice_session_started_${vp.name.replace(/\s+/g, '_')}.png`, fullPage: true });
            }
        }
    });

    test('Check Cognitive Immersion across viewports and dark mode', async ({ page }) => {
        await page.setViewportSize({ width: 393, height: 852 });
        await page.goto('http://localhost:8080/practice/cognitive-immersion.html');
        await page.waitForLoadState('domcontentloaded');
        await page.screenshot({ path: `project/tests/verification/screenshots/cognitive_immersion_mobile_light.png`, fullPage: true });

        // Toggle dark mode if html attribute exists or body class
        await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
        await page.waitForTimeout(200);
        await page.screenshot({ path: `project/tests/verification/screenshots/cognitive_immersion_mobile_dark.png`, fullPage: true });
    });

    test('Check practice exercise types (Flashcard, Vocab, Grammar, Reading, Listening, Writing)', async ({ page }) => {
        const types = ['flashcard', 'vocabulary', 'grammar', 'reading', 'listening', 'writing'];
        for (const t of types) {
            await page.setViewportSize({ width: 393, height: 852 });
            await page.goto(`http://localhost:8080/practice/types/${t}/index.html`);
            await page.waitForLoadState('domcontentloaded');
            await page.waitForTimeout(300);
            await page.screenshot({ path: `project/tests/verification/screenshots/practice_type_${t}_mobile.png`, fullPage: true });
        }
    });
});
