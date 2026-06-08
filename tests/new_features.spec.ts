import { test, expect } from '@playwright/test';

test.describe('Events Page & Crossword Game', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/events.html');
    });

    test('Check Lobby Buttons', async ({ page }) => {
        const card = page.locator('.game-card-lobby[data-game="action-hero"]');
        await expect(card).toBeVisible();
        const playSolo = card.locator('.gc-btn-play');
        const playFriends = card.locator('.gc-btn-friends');
        await expect(playSolo).toBeVisible();
        await expect(playFriends).toBeVisible();
    });

    test('Open and Verify Crossword Game', async ({ page }) => {
        // Force mobile viewport to ensure sheet logic triggers correctly
        await page.setViewportSize({ width: 375, height: 667 });
        const card = page.locator('.game-card-lobby[data-game="crossword"]');
        await card.locator('.gc-btn-play').click();
        await expect(page.locator('#game-setup-sheet')).toHaveClass(/open/);

        await page.locator('.gss-start').click();

        const grid = page.locator('.crossword-table');
        await expect(grid).toBeVisible({ timeout: 10000 });

        const cells = await page.locator('.cw-cell').count();
        expect(cells).toBeGreaterThan(5);
    });

    test('Verify Pin to Home Feature on Events', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const card = page.locator('.game-card-lobby[data-game="crossword"]');
        await card.locator('.gc-btn-play').click();
        const pinBtn = page.locator('#gss-pin-btn');
        await expect(pinBtn).toBeVisible();
        await pinBtn.click();
        await expect(page.locator('#pin-modal')).toBeVisible();

        await page.click('#pin-modal button');
        await expect(page.locator('#pin-modal')).not.toBeVisible();
    });
});

test.describe('Practice Page & Pinning', () => {
    test('Verify Pin to Home Feature on Practice', async ({ page }) => {
        await page.goto('http://localhost:8080/practice.html');
        const pinBtn = page.locator('#pin-practice-btn');
        await expect(pinBtn).toBeVisible();
        await pinBtn.click();
        await expect(page.locator('#pin-modal')).toBeVisible();
        // Since it used localized label "Vocabulary" instead of "Practice"
        await expect(page.locator('#pin-desc')).toContainText(/to your home screen/i);
    });
});
