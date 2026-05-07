import { test, expect } from '@playwright/test';

test('Practice Hub Visual Verification', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await page.setViewportSize({ width: 1280, height: 1600 });

    // Dash hero and stats
    await page.screenshot({ path: 'audit_screenshots/practice_dashboard_full.png', fullPage: true });

    // Setup panel - enable all task types
    await page.locator('#setup-section').scrollIntoViewIfNeeded();
    const taskToggles = page.locator('.task-toggle');
    const count = await taskToggles.count();
    for (let i = 0; i < count; i++) {
        const toggle = taskToggles.nth(i);
        const isActive = await toggle.evaluate(el => el.classList.contains('active'));
        if (!isActive) await toggle.click();
    }
    await page.screenshot({ path: 'audit_screenshots/practice_setup_all_tasks.png' });

    // Start a practice session to see the engine
    await page.click('#start-btn');
    await page.waitForSelector('#practice-section.active');
    await page.screenshot({ path: 'audit_screenshots/practice_engine.png' });

    // Make a mistake to test mistake recording
    const isMC = await page.isVisible('#choices-grid');
    if (isMC) {
        const wrongOpt = page.locator('.mc-opt').first();
        await wrongOpt.click();
        await page.waitForTimeout(500);
        await page.screenshot({ path: 'audit_screenshots/practice_feedback_wrong.png' });
    }

    // Exit and check dashboard for mistakes
    await page.click('#exit-practice-btn');
    await page.waitForSelector('#setup-section', { state: 'visible' });
    await page.locator('.two-col').scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'audit_screenshots/practice_recent_mistakes.png' });
});

test('Games Hub Visual Verification', async ({ page }) => {
    await page.goto('http://localhost:8080/games/index.html');
    await page.setViewportSize({ width: 1280, height: 1200 });

    // Main grid
    await page.screenshot({ path: 'audit_screenshots/games_grid.png' });

    // Open Emoji Odyssey in "friends" mode to check share button on setup
    await page.click('[data-game="emoji-odyssey"] .gc-btn-friends');
    await page.waitForSelector('#emoji-modal', { state: 'visible' });
    await page.screenshot({ path: 'audit_screenshots/game_emoji_setup_friends.png' });

    // Check share button specifically (should be visible in setup)
    const shareBtn = page.locator('#share-emoji-btn');
    await expect(shareBtn).toBeVisible();

    // Close and open Action Hero (solo mode check)
    await page.click('#close-emoji-btn');
    await page.click('[data-game="action-hero"] .gc-btn-play');
    await page.waitForSelector('#charades-modal', { state: 'visible' });
    await page.screenshot({ path: 'audit_screenshots/game_charades_modal.png' });
});
