import { test, expect } from '@playwright/test';

test('Games Hub loads and Action Hero setup opens', async ({ page }) => {
    // Navigate to Games Hub
    await page.goto('http://localhost:8080/games/index.html');

    // Check for standard title
    await expect(page).toHaveTitle(/Games/);

    // Verify some game cards are visible
    const fluencyFlowCard = page.locator('text=Fluency Flow');
    await expect(fluencyFlowCard).toBeVisible();

    // Click on Action Hero
    await page.click('text=Action Hero');

    // Verify overlay is open
    const overlay = page.locator('#game-overlay');
    await expect(overlay).toHaveClass(/open/);

    // Verify setup screen for Action Hero is rendered
    await expect(page.locator('.setup-screen h2')).toHaveText('Action Hero 🎭');
});
