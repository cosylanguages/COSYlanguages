import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Theme Toggle Test', () => {
    test('theme toggle button flips theme, updates localStorage, and persists across reload & navigation', async ({ page }) => {
        // 1. Visit events index
        await page.goto('http://localhost:8080/events/index.html');

        // Wait for cosy-nav to render
        await page.waitForSelector('#cosy-nav .theme-toggle-btn');

        // Initial theme should be light
        let theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(theme || 'light').toBe('light');

        // Click theme toggle button
        await page.locator('#cosy-nav .theme-toggle-btn').first().click();

        // Theme should now be dark
        theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(theme).toBe('dark');

        const localTheme = await page.evaluate(() => localStorage.getItem('cosy_theme'));
        expect(localTheme).toBe('dark');

        // 2. Reload page
        await page.reload();
        await page.waitForSelector('#cosy-nav .theme-toggle-btn');

        theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(theme).toBe('dark');

        // 3. Navigate to Mind Matters club page
        await page.goto('http://localhost:8080/apps/premium-events/clubs/mind/mind-matters.html');
        await page.waitForSelector('#cosy-nav .theme-toggle-btn');

        theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(theme).toBe('dark');

        // Toggle back to light
        await page.locator('#cosy-nav .theme-toggle-btn').first().click();
        theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(theme).toBe('light');
    });
});
