const { test, expect } = require('@playwright/test');

test('mobile view screenshots', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 812 });

    await page.goto('http://localhost:8080/events.html');

    // Test Bingo Modal
    await page.click('#open-bingo-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_bingo_setup.png' });

    // Start Bingo Caller
    await page.click('#start-bingo-caller-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_bingo_caller.png' });
    await page.click('#close-bingo-btn');

    // Test Emoji Odyssey Modal
    await page.click('#open-emoji-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_emoji_setup.png' });

    // Start Story Mode
    await page.selectOption('#emoji-mode', 'story');
    // Mock prompt
    page.on('dialog', dialog => dialog.accept('The Great Adventure'));
    await page.click('#start-emoji-game-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_emoji_story.png' });
    await page.click('#close-emoji-btn');

    // Test Charades
    await page.click('#open-charades-btn');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/mobile_charades_setup.png' });
});
