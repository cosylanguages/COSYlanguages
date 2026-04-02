import { test, expect } from '@playwright/test';

test('Events page gallery and filters', async ({ page }) => {
  await page.goto('http://localhost:8080/events.html');
  // Check if games grid is visible
  const gamesGrid = page.locator('.games-grid');
  await expect(gamesGrid).toBeVisible();

  // Check if filters are visible
  const filters = page.locator('.game-filters');
  await expect(filters).toBeVisible();

  // Check if global preferences are visible
  const globalPrefs = page.locator('.global-preferences');
  await expect(globalPrefs).toBeVisible();

  await page.screenshot({ path: 'verification/screenshots/events_page.png', fullPage: true });
});

test('Practice page enhancements', async ({ page }) => {
  await page.goto('http://localhost:8080/practice.html');

  // Check if Quick Start, Daily Challenge, etc are visible
  await expect(page.locator('text=Quick Start')).toBeVisible();
  await expect(page.locator('text=Daily Challenge')).toBeVisible();
  await expect(page.locator('text=Review Mistakes')).toBeVisible();

  await page.screenshot({ path: 'verification/screenshots/practice_page.png', fullPage: true });
});
