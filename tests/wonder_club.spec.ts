import { test, expect } from '@playwright/test';

test.describe('Wonder Club and Session Verification', () => {
  test('Club page should load and display correctly with all 4 sessions', async ({ page }) => {
    await page.goto('http://localhost:8080/events/i-couldnt-help-but-wonder.html');
    await expect(page.locator('h1')).toContainText("I Couldn't Help But Wonder");
    await expect(page.locator('.club-hero p')).toContainText('Carrie Bradshaw');

    // Check for the 4 past sessions
    await expect(page.locator('h4:has-text("Why Do I Feel Like I\'m Always Being Watched in a Crowd?")')).toBeVisible();
    await expect(page.locator('h4:has-text("Is Bad Weather Really About Gods Being Angry?")')).toBeVisible();
    await expect(page.locator('h4:has-text("Do Insects Hide When It Rains?")')).toBeVisible();
    await expect(page.locator('h4:has-text("Do Raindrops Select Where to Fall?")')).toBeVisible();
  });

  test('Do Insects Hide session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/do-insects-hide-when-it-rains.html');
    await expect(page.locator('h1')).toContainText('Do Insects Hide When It Rains?');
    await expect(page.locator('.vocab-card')).toHaveCount(10);
    await expect(page.locator('.vocab-card').first().locator('.vocab-word')).toContainText('Evacuate');
  });

  test('Is Bad Weather gods anger session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/is-bad-weather-gods-anger.html');
    await expect(page.locator('h1')).toContainText('Is Bad Weather Really About Gods Being Angry?');
    await expect(page.locator('.vocab-card')).toHaveCount(10);
    await expect(page.locator('.vocab-card').first().locator('.vocab-word')).toContainText('Wrath');
  });

  test('Always Watched in a crowd session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/always-watched-in-a-crowd.html');
    await expect(page.locator('h1')).toContainText('Why Do I Feel Like I\'m Always Being Watched in a Crowd?');
    await expect(page.locator('.vocab-card')).toHaveCount(10);
    await expect(page.locator('.vocab-card').first().locator('.vocab-word')).toContainText('Spotlight');
  });
});
