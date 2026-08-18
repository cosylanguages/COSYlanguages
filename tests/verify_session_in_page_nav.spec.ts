import { test, expect } from '@playwright/test';

test.describe('Session In-Page Navigation & Back to Top', () => {
  test('Long session page (grandmother-evolutionary-mystery.html) has sticky jump links & back-to-top', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/grandmother-evolutionary-mystery.html');

    // Check back link exists
    const backLink = page.locator('.back-link');
    await expect(backLink).toBeVisible();

    // Check sticky mini nav exists
    const miniNav = page.locator('#session-mini-nav');
    await expect(miniNav).toBeVisible();

    // Check jump links count > 0
    const jumpLinks = miniNav.locator('.sd-jump-link');
    const count = await jumpLinks.count();
    expect(count).toBeGreaterThan(0);

    // Scroll down 600px to trigger back-to-top button
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(300);

    const backToTop = page.locator('#back-to-top');
    await expect(backToTop).toBeVisible();

    // Click back to top
    await backToTop.click();
    await page.waitForFunction(() => window.scrollY < 100, { timeout: 3000 });

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test('Short session page (cinema session) has clean mini-nav without overcrowding', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/cinema-club/the-substance.html');

    const backLink = page.locator('.back-link');
    await expect(backLink).toBeVisible();

    const miniNav = page.locator('#session-mini-nav');
    if (await miniNav.count() > 0) {
      await expect(miniNav).toBeVisible();
      const jumpLinks = miniNav.locator('.sd-jump-link');
      const count = await jumpLinks.count();
      expect(count).toBeGreaterThan(0);
      expect(count).toBeLessThan(15);
    }
  });
});
