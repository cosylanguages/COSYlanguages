import { test, expect } from '@playwright/test';

test.describe('Cinema Club and Game Evenings Monorepo Verification', () => {
  test('Cinema Club Hub loads correctly and displays past clapperboard sessions', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/cinema-club.html');
    await expect(page.locator('h1')).toContainText('Cinema Club');
    await expect(page.locator('.club-hero p')).toContainText('original-language cinema');

    // 1. Verify clapperboard cards exist
    const cards = page.locator('.cinema-clapperboard-card');
    expect(await cards.count()).toBeGreaterThan(0);

    // 2. Check for some specific classic film cards
    await expect(page.locator('.clapper-title:has-text("A Quiet Place")')).toBeVisible();
    await expect(page.locator('.clapper-title:has-text("Ratatouille")').first()).toBeVisible();

    // 3. Capture light mode screenshot of the hub
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'verification/screenshots/verification_cinema_hub_light.png' });

    // 4. Capture dark mode screenshot of the hub
    await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/screenshots/verification_cinema_hub_dark.png' });

    // Clean up theme
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
  });

  test('Cinema Session page loads and presents standard clapperboard features', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/sessions/cinema-club/a-quiet-place.html');
    await expect(page.locator('h1')).toContainText('A Quiet Place');

    // 1. Verify 18+ sensitive warning card is rendered
    await expect(page.locator('.sensitive-topic-warning')).toBeVisible();
    await expect(page.locator('.sensitive-topic-warning')).toContainText('Sensitive Topic Note');

    // 2. Verify Theme Snapshot Slate Box exists with correct metadata fields
    const slateBox = page.locator('.cinema-slate-box');
    await expect(slateBox).toBeVisible();
    await expect(slateBox.locator('h3')).toContainText('Theme Snapshot: A Quiet Place');
    await expect(slateBox).toContainText('Lee and Evelyn Abbott'); // Protagonist
    await expect(slateBox).toContainText('an isolated, silent farm in a post-apocalyptic forest'); // Setting
    await expect(slateBox).toContainText('Imperatives for Extreme Caution'); // Grammar

    // 3. Verify exactly 10 vocabulary cards exist across generic and authentic sub-grids
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#vocabulary .vocab-card').first().locator('.vocab-word')).toContainText('Absolute silence');

    // 4. Verify round discussion contains 10 items
    await expect(page.locator('#s-r1 .round-item')).toHaveCount(10);
    await expect(page.locator('#s-r2 .round-item')).toHaveCount(10);

    // 5. Verify final director challenge exists and has choices
    await expect(page.locator('#s-director')).toBeVisible();
    await expect(page.locator('#s-director')).toContainText("You're the Director");

    // 6. Capture dark mode screenshot of the session page
    await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/screenshots/verification_cinema_session_dark.png' });

    // Clean up theme
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
  });

  test('Game Evenings Hub loads correctly under its new monorepo path', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/game-evening/game-evenings.html');
    await expect(page.locator('h1')).toContainText('Game Evenings');
    await expect(page.locator('.club-hero p')).toContainText('Connect, compete, and converse');

    // 1. Verify game cards exist in the deck
    await expect(page.locator('.game-ev-card').first()).toBeVisible();
    await expect(page.locator('.game-ev-title:has-text("Action Hero")')).toBeVisible();

    // 2. Capture light mode screenshot of the games hub
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'verification/screenshots/verification_game_evening_light.png' });

    // 3. Capture dark mode screenshot of the games hub
    await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'verification/screenshots/verification_game_evening_dark.png' });

    // Clean up theme
    await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
  });
});
