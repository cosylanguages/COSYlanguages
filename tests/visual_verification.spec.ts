import { test, expect } from '@playwright/test';

test('Visual verification of new features', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');

    // 1. Spinning Wheel
    await page.click('.qs-card:has-text("Surprise me!")');
    await page.waitForSelector('#wheel-container', { state: 'visible' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'spinning_wheel_visible.png' });
    await page.click('text=Back to practice');

    // 2. Grammar Task
    await page.click('.cat-pill[data-value="grammar"]');
    await page.click('#start-btn');
    await page.waitForSelector('.pe-body', { state: 'visible' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'grammar_task_live.png' });

    // 3. Bingo Celebration
    await page.goto('http://localhost:8080/games/index.html');
    await page.evaluate(() => {
        if (typeof celebrateBingo === 'function') celebrateBingo();
        else console.error('celebrateBingo not found');
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'bingo_celebration_v3.png' });
});
