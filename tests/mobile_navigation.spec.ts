import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation Accessibility and Tap Counts', () => {
  const viewports = [
    { width: 375, height: 812, name: 'iPhone SE/11 Pro' },
    { width: 414, height: 896, name: 'iPhone 11 Pro Max/XS Max' }
  ];

  for (const vp of viewports) {
    test(`Events and Notebook discoverability on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: vp.width, height: vp.height });

      // Start on Practice Hub page
      await page.goto('http://localhost:8080/practice/index.html');

      // Verify that the mobile bottom nav is visible
      const mobileNav = page.locator('.mobile-nav');
      await expect(mobileNav).toBeVisible();

      // --- Case 1: Events is reachable in exactly 1 tap ---
      const eventsLink = page.locator('#mnav-events');
      await expect(eventsLink).toBeVisible();
      await eventsLink.click();
      await expect(page).toHaveURL(/.*\/events\/index.html/);

      // Go back to Practice Hub
      await page.goto('http://localhost:8080/practice/index.html');

      // --- Case 2: Notebook is reachable in at most 2 taps via hamburger menu ---
      // Tap 1: Open hamburger menu drawer
      const menuBtn = page.locator('.nav-menu-btn');
      await expect(menuBtn).toBeVisible();
      await menuBtn.click();

      // Expect mobile menu drawer to be open
      const mobileMenu = page.locator('#cosy-mobile-menu');
      await expect(mobileMenu).toHaveClass(/open/);

      // Tap 2: Click on Notebook link in the drawer
      const notebookLink = page.locator('#cosy-mobile-menu a[href*="notebook/index.html"]');
      await expect(notebookLink).toBeVisible();
      await notebookLink.click();
      await expect(page).toHaveURL(/.*\/notebook\/index.html/);
    });

    test(`Active states validation for Home and Hash paths on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      // Go to homepage with #languages hash
      await page.goto('http://localhost:8080/index.html#languages');

      // Verify mnav-home is active
      const homeLink = page.locator('#mnav-home');
      await expect(homeLink).toHaveClass(/active/);

      // Go to events index
      await page.goto('http://localhost:8080/events/index.html');

      // Verify mnav-events is active
      const eventsLink = page.locator('#mnav-events');
      await expect(eventsLink).toHaveClass(/active/);
    });
  }
});
