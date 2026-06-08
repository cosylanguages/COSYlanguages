import { test, expect } from '@playwright/test';

test.describe('New Project Pages Verification', () => {
  test('About hub should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/about/index.html');
    await expect(page.locator('h1')).toContainText('The COSYlanguages Project');
    await expect(page.locator('a:has-text("GitHub Repository")').first()).toBeVisible();
    await expect(page.locator('a:has-text("Project Roadmap")').first()).toBeVisible();
    await expect(page.locator('a:has-text("Changelog")').first()).toBeVisible();
  });

  test('Roadmap should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/about/roadmap.html');
    await expect(page.locator('h1')).toContainText('Project Roadmap');
    await expect(page.locator('h2:has-text("High Priority")')).toBeVisible();
    await expect(page.locator('td:has-text("Student progress tracking")')).toBeVisible();
  });

  test('Changelog should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/about/changelog.html');
    await expect(page.locator('h1')).toContainText('Changelog');
    await expect(page.locator('h2:has-text("Stage 4")')).toBeVisible();
  });

  test('Coming Soon page should load correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/languages/coming-soon.html');
    await expect(page.locator('h1')).toContainText('Coming soon');
    // Check if at least one coming soon language is rendered
    const count = await page.locator('.lang-card-soon').count();
    expect(count).toBeGreaterThan(0);
  });

  test('Homepage should have links to new sections', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    // Footer check
    await expect(page.locator('footer a:has-text("About COSY")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Roadmap")')).toBeVisible();

    // Courses summary check
    await expect(page.locator('.courses-grid.summary-grid .course-card')).toHaveCount(3);
    await expect(page.locator('a:has-text("View all 6 course types")')).toBeVisible();

    // Coming soon link check
    await expect(page.locator('a:has-text("See upcoming languages")')).toBeVisible();
  });
});
