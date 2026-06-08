const { test, expect } = require('@playwright/test');

test('Practice Hub - All 13 Language Pills', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');

    const langPills = page.locator('.lang-pill');
    await expect(langPills).toHaveCount(13);

    const expectedLangs = ['en', 'fr', 'it', 'ru', 'el', 'es', 'de', 'pt', 'hy', 'ka', 'tt', 'ba', 'br'];

    for (const lang of expectedLangs) {
        await expect(page.locator(`.lang-pill[data-value="${lang}"]`)).toBeVisible();
    }
});

test('Practice Hub - Spinning Wheel Languages', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');

    // Open wheel - using force click if necessary
    await page.click('.qs-card[onclick*="openWheel"]', { force: true });

    // In practice.js, openWheel might toggle visibility of #wheel-container
    await expect(page.locator('#wheel-container')).toBeVisible();

    // Check if wheel can start
    const startBtn = page.locator('#spin-btn');
    await expect(startBtn).toBeVisible();
});
