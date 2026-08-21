import { test, expect } from '@playwright/test';

test.describe('Universal In-Page Jump Navigation Menu', () => {
  test('Homepage (index.html) generates sticky section jump links and updates active state on scroll', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');
    await page.waitForLoadState('domcontentloaded');

    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    const jumpLinks = miniNav.locator('.sd-jump-link');
    const count = await jumpLinks.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // Test clicking a jump link
    const calculatorLink = miniNav.locator('a[href="#calculator"]');
    await expect(calculatorLink).toBeVisible();
    await calculatorLink.click();
    await page.waitForTimeout(600);

    // Verify scrolled to calculator section
    const calcSection = page.locator('#calculator');
    await expect(calcSection).toBeInViewport();
    await expect(calculatorLink).toHaveClass(/active/);
  });

  test('Practice Hub (practice/index.html) generates sticky section jump links', async ({ page }) => {
    await page.goto('http://localhost:8080/practice/index.html');
    await page.waitForLoadState('domcontentloaded');

    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    const jumpLinks = miniNav.locator('.sd-jump-link');
    const count = await jumpLinks.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('Games Hub (games/index.html) generates sticky section jump links', async ({ page }) => {
    await page.goto('http://localhost:8080/games/index.html');
    await page.waitForLoadState('domcontentloaded');

    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    const jumpLinks = miniNav.locator('.sd-jump-link');
    const count = await jumpLinks.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('Language Hub (languages/en/index.html) generates sticky section jump links', async ({ page }) => {
    await page.goto('http://localhost:8080/languages/en/index.html');
    await page.waitForLoadState('domcontentloaded');

    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    const jumpLinks = miniNav.locator('.sd-jump-link');
    const count = await jumpLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('Events Workspace Hub (events/index.html) binds jump links and scroll-spy correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/events/index.html');
    await page.waitForLoadState('domcontentloaded');

    const headerNav = page.locator('.sd-sticky-header .sd-jump-links');
    await expect(headerNav).toBeVisible();

    const firstLink = headerNav.locator('.sd-jump-link').first();
    await expect(firstLink).toBeVisible();

    // Click jump link to directory section
    const dirLink = headerNav.locator('a[href="#browse"]');
    await dirLink.click();
    await page.waitForTimeout(600);

    const browseSection = page.locator('#browse');
    await expect(browseSection).toBeInViewport();
    await expect(dirLink).toHaveClass(/active/);
  });

  test('Mobile viewport layout adaptation for in-page jump navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:8080/index.html');
    await page.waitForLoadState('domcontentloaded');

    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    // Ensure zero horizontal body overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(overflow).toBe(false);
  });
});
