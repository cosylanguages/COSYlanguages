import { test, expect } from '@playwright/test';

test.describe('Cinema Club and Session Verification', () => {
  test('Cinema Club Hub page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/cinema-club.html');
    await expect(page.locator('h1')).toContainText("Cinema Club");
    await expect(page.locator('.club-hero p')).toContainText('Immerse yourself in original-language cinema');

    // Check that pinned challenges exist
    await expect(page.locator('h4:has-text("Robert Langdon Symbology Thrillers")')).toBeVisible();
    await expect(page.locator('h4:has-text("Audrey Hepburn Romance Challenges")')).toBeVisible();
    await expect(page.locator('h4:has-text("Barbra Streisand Masterpieces")')).toBeVisible();
  });

  test('The Devil Wears Prada B1 session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/sessions/cinema-club/the-devil-wears-prada-intermediate.html');
    await expect(page.locator('h1')).toContainText('The Devil Wears Prada');
    await expect(page.locator('.session-date')).toContainText('B1');
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#vocabulary .vocab-card').first().locator('.vocab-word')).toContainText('Workplace hierarchies');
    await expect(page.locator('.cinema-slate-box h3')).toContainText('Theme Snapshot: The Devil Wears Prada');
  });

  test('The Devil Wears Prada B2 session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/sessions/cinema-club/the-devil-wears-prada-upper-intermediate.html');
    await expect(page.locator('h1')).toContainText('The Devil Wears Prada');
    await expect(page.locator('.session-date')).toContainText('B2');
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#vocabulary .vocab-card').first().locator('.vocab-word')).toContainText('Workplace hierarchies');
  });

  test('Fleabag C1 session page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/cinema/sessions/cinema-club/fleabag.html');
    await expect(page.locator('h1')).toContainText('Fleabag');
    await expect(page.locator('.session-date')).toContainText('C1');
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
  });
});
