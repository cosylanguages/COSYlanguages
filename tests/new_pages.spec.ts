import { test, expect } from '@playwright/test';

test.describe('New Project Pages Verification', () => {
  test('Coming Soon page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/languages/coming-soon.html');
    await expect(page.locator('h1')).toContainText('Coming soon');
    // Check if at least one coming soon language is rendered
    const count = await page.locator('.lang-card-soon').count();
    expect(count).toBeGreaterThan(0);
  });

  test('Homepage should have links to new sections', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Courses summary check
    await expect(page.locator('.courses-grid.summary-grid .course-card')).toHaveCount(3);
    await expect(page.locator('a:has-text("Explore courses")').first()).toBeVisible();

    // Coming soon link check
    await expect(page.locator('a:has-text("See upcoming languages")')).toBeVisible();
  });
});
