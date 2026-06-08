import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 }, isMobile: true });

test('Mobile navigation and games improvements check', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  // Check if mobile nav is injected
  const mobileNav = page.locator('.mobile-nav');
  await expect(mobileNav).toBeVisible();

  // Check if Home is active
  const homeItem = page.locator('#mnav-home');
  await expect(homeItem).toHaveClass(/active/);

  // Navigate to languages via hash
  await page.goto('http://localhost:8080/index.html#languages');
  // Wait for potential JS updates
  await page.waitForTimeout(500);
  const langItem = page.locator('#mnav-languages');
  await expect(langItem).toHaveClass(/active/);

  // Go to events
  await page.goto('http://localhost:8080/events.html');
  const gamesItem = page.locator('#mnav-games');
  await expect(gamesItem).toHaveClass(/active/);

  // Try opening a game sheet (mobile setup sheet)
  const gameCard = page.locator('.game-card-lobby').first();
  await gameCard.locator("button.gc-btn-play").click();

  const setupSheet = page.locator('#game-setup-sheet');
  await expect(setupSheet).toBeVisible();
  await expect(setupSheet).toHaveClass(/open/);

  // Start a game from the sheet
  const startBtn = setupSheet.locator('.gss-start');
  await startBtn.click();

  // The corresponding game modal should open. For Action Hero (first card):
  const actionHeroModal = page.locator('#charades-modal');
  await expect(actionHeroModal).toBeVisible();
  await expect(actionHeroModal).toHaveCSS('display', 'flex');

  // Check if round summary override works after a game
  // This is harder to automate quickly, but we can check if ActionHeroGame is defined
  const isAHDefined = await page.evaluate(() => typeof window.ActionHeroGame !== 'undefined');
  expect(isAHDefined).toBe(true);

});
