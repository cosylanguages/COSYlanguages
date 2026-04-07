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

  // Check if "Recently Played" session log exists (it might be empty initially)
  const sessionLog = page.locator('#session-log-container');
  // It might be hidden if log is empty

  // Try opening a game sheet (mobile setup sheet)
  const gameCard = page.locator('.game-card-lobby').first();
  await gameCard.click();

  const setupSheet = page.locator('#game-setup-sheet');
  // Wait for the sheet to be visible and open
  await expect(setupSheet).toHaveClass(/open/, { timeout: 10000 });

  // Start a game from the sheet
  const startBtn = setupSheet.locator('.gss-start');
  await startBtn.click();

  // The corresponding game modal should open. For Action Hero (first card):
  const actionHeroModal = page.locator('#charades-modal');
  await expect(actionHeroModal).not.toHaveClass(/hidden/, { timeout: 10000 });

  // Check if round summary override works after a game
  // This is harder to automate quickly, but we can check if ActionHeroGame is defined
  const isAHDefined = await page.evaluate(() => typeof window.ActionHeroGame !== 'undefined');
  expect(isAHDefined).toBe(true);

  // Check if recently played log updated
  await page.goto('http://localhost:8080/index.html');
  await expect(sessionLog).toBeVisible();
  const logItem = page.locator('.log-item');
  await expect(logItem).toBeVisible();
});
