const { test, expect } = require('@playwright/test');

test('Games Hub Integration', async ({ page }) => {
  // Go to the games page
  await page.goto('http://localhost:8080/games/index.html');

  // Check title (translated)
  await expect(page).toHaveTitle(/Events/);

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  // Click on a game card (e.g., Fluency Flow)
  const card = page.locator('.gc >> text=Fluency Flow').first();
  await card.click();

  // Verify the overlay is open
  const overlay = page.locator('#game-overlay');
  await expect(overlay).toHaveClass(/open/);
  await expect(overlay).toBeVisible();

  // Check if setup screen for Fluency Flow is rendered
  await expect(page.locator('text=Speak about it for the chosen duration')).toBeVisible();

  // Click "Start game"
  await page.click('text=Start game');

  // Verify timer is visible
  await expect(page.locator('#timer-val')).toBeVisible();
});

test('Price Calculator - Reverted Rates', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  // Select English, General, 60 min, 1 session
  await page.selectOption('#calc-lang', 'en');
  await page.selectOption('#calc-type', 'general');
  await page.selectOption('#calc-dur', '60');
  await page.selectOption('#calc-pack', '1');

  // Check total
  const total = page.locator('#calc-total');
  await expect(total).toHaveText(/€20(\.00)?/);
});
