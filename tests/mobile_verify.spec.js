const { test, expect } = require('@playwright/test');

test('mobile view screenshots', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 812 });

    await page.goto('http://localhost:8080/events.html');

    // Verify games section
    await page.waitForSelector('#games', { state: 'visible' });

    // Test Charades (Action Hero) — This is the only fully restored modal
    await page.click('.game-card[data-game="action-hero"] .gc-play-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_charades_setup.png' });
});
