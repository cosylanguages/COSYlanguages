import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Public Cross-Repository Navigation Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Serve index.html via file URL
    const filePath = 'file://' + path.resolve('index.html');
    await page.goto(filePath);
  });

  test('1. Navigation Rendering — Desktop header navbar and persistent logo', async ({ page }) => {
    const nav = page.locator('#cosy-nav');
    await expect(nav).toBeVisible();

    // Persistent logo link back to COSYlanguages home
    const logo = page.locator('#cosy-nav .nav-logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', /index\.html/);

    // Desktop menu bar
    const menuLinks = page.locator('#cosy-nav .nav-links a');
    await expect(menuLinks).toHaveCount(8);

    // Verify audience-friendly labels (no raw repository names like COSYgames or COSYmanuals)
    const expectedLabels = [
      'Courses',
      'Practice',
      'Tools',
      'Games',
      'World',
      'Events',
      'Blog',
      'Teacher resources'
    ];

    for (let i = 0; i < expectedLabels.length; i++) {
      const linkText = await menuLinks.nth(i).innerText();
      expect(linkText).toContain(expectedLabels[i]);
      expect(linkText).not.toContain('COSYgames');
      expect(linkText).not.toContain('COSYmanuals');
      expect(linkText).not.toContain('COSYtools');
      expect(linkText).not.toContain('COSYevents');
    }
  });

  test('2. Correct Destinations — Production default URLs and environment overrides', async ({ page }) => {
    const links = page.locator('#cosy-nav .nav-links a');

    // Verify default production destination URLs
    await expect(links.nth(0)).toHaveAttribute('href', /index\.html#courses/);
    await expect(links.nth(1)).toHaveAttribute('href', /practice\/index\.html/);
    await expect(links.nth(2)).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYtools/');
    await expect(links.nth(3)).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYgames/');
    await expect(links.nth(4)).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYworld/');
    await expect(links.nth(5)).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYevents/');
    await expect(links.nth(6)).toHaveAttribute('href', /blog\/index\.html/);
    await expect(links.nth(7)).toHaveAttribute('href', 'https://cosylanguages.github.io/COSYmanuals/');

    // Test dynamic URL configuration overrides
    const overriddenToolsUrl = await page.evaluate(() => {
      window.COSY_CONFIG = {
        urls: {
          tools: 'http://localhost:3000/tools',
          games: 'http://localhost:3002/games'
        }
      };
      return window.COSY.getNavHref('tools');
    });
    expect(overriddenToolsUrl).toBe('http://localhost:3000/tools');
  });

  test('3. Mobile Navigation — Bottom bar and off-canvas menu drawer', async ({ page }) => {
    // Resize viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile bottom bar
    const mobileBar = page.locator('.mobile-nav');
    await expect(mobileBar).toBeVisible();

    const bottomItems = mobileBar.locator('.mobile-nav-item');
    await expect(bottomItems).toHaveCount(5); // Practice, Games, Events, Courses, Home

    // Hamburger menu button
    const menuBtn = page.locator('.nav-menu-btn');
    await expect(menuBtn).toBeVisible();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');

    // Open mobile menu
    await menuBtn.click();
    const mobileMenu = page.locator('#cosy-mobile-menu');
    await expect(mobileMenu).toHaveClass(/open/);
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');

    // Verify mobile menu drawer contains all destinations
    const drawerLinks = mobileMenu.locator('a');
    const drawerTexts = await drawerLinks.allInnerTexts();

    expect(drawerTexts.some(t => t.includes('Home'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Courses'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Practice'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Tools'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Games'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('World'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Events'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Blog'))).toBe(true);
    expect(drawerTexts.some(t => t.includes('Teacher resources'))).toBe(true);

    // Close mobile menu
    await menuBtn.click();
    await expect(mobileMenu).not.toHaveClass(/open/);
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('4. Keyboard Navigation — Arrow key cycling and Escape key dismiss', async ({ page }) => {
    // Focus first menu item
    const firstLink = page.locator('#cosy-nav .nav-links a').first();
    await firstLink.focus();
    await expect(firstLink).toBeFocused();

    // Press ArrowRight -> focuses second item
    await page.keyboard.press('ArrowRight');
    const secondLink = page.locator('#cosy-nav .nav-links a').nth(1);
    await expect(secondLink).toBeFocused();

    // Press ArrowLeft -> focuses back to first item
    await page.keyboard.press('ArrowLeft');
    await expect(firstLink).toBeFocused();

    // Test mobile menu keyboard toggle & Escape key
    await page.setViewportSize({ width: 375, height: 667 });
    const menuBtn = page.locator('.nav-menu-btn');
    await menuBtn.focus();
    await page.keyboard.press('Enter');

    const mobileMenu = page.locator('#cosy-mobile-menu');
    await expect(mobileMenu).toHaveClass(/open/);

    // Press Escape -> closes mobile menu
    await page.keyboard.press('Escape');
    await expect(mobileMenu).not.toHaveClass(/open/);
  });

  test('5. Missing Environment Variables — Fallback safety and resilience', async ({ page }) => {
    const fallbackResults = await page.evaluate(() => {
      // Temporarily purge any custom global configs
      delete window.COSY_CONFIG;
      delete window.COSY_ECOSYSTEM_URLS;
      delete window.COSY_ENV;

      const urls = window.COSY.getEcosystemUrls();
      return {
        home: window.COSY.getNavHref('home'),
        courses: window.COSY.getNavHref('courses'),
        practice: window.COSY.getNavHref('practice'),
        tools: window.COSY.getNavHref('tools'),
        games: window.COSY.getNavHref('games'),
        world: window.COSY.getNavHref('world'),
        events: window.COSY.getNavHref('events'),
        blog: window.COSY.getNavHref('blog'),
        teacher: window.COSY.getNavHref('teacher')
      };
    });

    expect(fallbackResults.home).toContain('index.html');
    expect(fallbackResults.courses).toContain('index.html#courses');
    expect(fallbackResults.practice).toContain('practice/index.html');
    expect(fallbackResults.tools).toBe('https://cosylanguages.github.io/COSYtools/');
    expect(fallbackResults.games).toBe('https://cosylanguages.github.io/COSYgames/');
    expect(fallbackResults.world).toBe('https://cosylanguages.github.io/COSYworld/');
    expect(fallbackResults.events).toBe('https://cosylanguages.github.io/COSYevents/');
    expect(fallbackResults.blog).toContain('blog/index.html');
    expect(fallbackResults.teacher).toBe('https://cosylanguages.github.io/COSYmanuals/');
  });

  test('6. Internal and External Links — Target and security attributes', async ({ page }) => {
    const internalLinks = page.locator('#cosy-nav .nav-links a[data-translate-key="nav_courses"], #cosy-nav .nav-links a[data-translate-key="nav_practice"], #cosy-nav .nav-links a[data-translate-key="nav_blog"]');
    const internalCount = await internalLinks.count();

    for (let i = 0; i < internalCount; i++) {
      const link = internalLinks.nth(i);
      await expect(link).not.toHaveAttribute('target', '_blank');
    }

    const externalLinks = page.locator('#cosy-nav .nav-links a[data-translate-key="nav_tools"], #cosy-nav .nav-links a[data-translate-key="nav_games"], #cosy-nav .nav-links a[data-translate-key="nav_world"], #cosy-nav .nav-links a[data-translate-key="nav_events"], #cosy-nav .nav-links a[data-translate-key="nav_teacher"]');
    const externalCount = await externalLinks.count();

    for (let i = 0; i < externalCount; i++) {
      const link = externalLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener');
    }
  });

  test('7. Relative Path Resolution — Navigation from nested subdirectories', async ({ page }) => {
    // Load nested practice page
    const practiceFilePath = 'file://' + path.resolve('practice/index.html');
    await page.goto(practiceFilePath);

    const logo = page.locator('#cosy-nav .nav-logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', /index\.html/);

    const coursesLink = page.locator('#cosy-nav .nav-links a[data-translate-key="nav_courses"]');
    await expect(coursesLink).toHaveAttribute('href', /index\.html#courses/);

    const blogLink = page.locator('#cosy-nav .nav-links a[data-translate-key="nav_blog"]');
    await expect(blogLink).toHaveAttribute('href', /blog\/index\.html/);
  });
});
