import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Audience Preference & Accessibility System', () => {
    const indexPath = `file://${path.resolve(__dirname, '../index.html')}`;

    test.beforeEach(async ({ page }) => {
        await page.goto(indexPath);
        // Clear any stored local storage before each test
        await page.evaluate(() => localStorage.clear());
        await page.reload();
    });

    test('1. Default Mode — Safe default unselected state works seamlessly', async ({ page }) => {
        const root = page.locator('html');
        await expect(root).toHaveAttribute('data-audience', 'default');
        await expect(root).toHaveAttribute('data-text-scale', '1.0');
        await expect(root).toHaveAttribute('data-reduced-motion', 'false');

        // Hero and main navigation are visible and functional
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('#how')).toBeVisible();
        await expect(page.locator('#courses')).toBeVisible();

        // Audience FAB control exists and is visible
        const fab = page.locator('#cosy-audience-toggle');
        await expect(fab).toBeVisible();
        await expect(fab).toContainText('Standard');
    });

    test('2. Children Mode — Displays simpler entry points & visual guidance', async ({ page }) => {
        const root = page.locator('html');

        // Select Children mode via window API
        await page.evaluate(() => window.COSY.Audience.setAudience('children'));

        await expect(root).toHaveAttribute('data-audience', 'children');

        // Verify Children guidance banner is visible
        const childrenBanner = page.locator('.audience-only-children').first();
        await expect(childrenBanner).toBeVisible();
        await expect(childrenBanner).toContainText('Friendly interactive space for kids');

        // Verify FAB button updates label
        await expect(page.locator('#cosy-audience-toggle')).toContainText('Children');
    });

    test('3. Teens Mode — Displays speed navigation & challenge chips', async ({ page }) => {
        const root = page.locator('html');

        await page.evaluate(() => window.COSY.Audience.setAudience('teens'));

        await expect(root).toHaveAttribute('data-audience', 'teens');

        // Verify Teen speed chip is visible
        const teenChip = page.locator('.audience-only-teens').first();
        await expect(teenChip).toBeVisible();
        await expect(teenChip).toContainText('Speed Navigation Mode');

        await expect(page.locator('#cosy-audience-toggle')).toContainText('Teens');
    });

    test('4. Adults Mode — Displays goal metrics, time estimates & practical outcomes', async ({ page }) => {
        const root = page.locator('html');

        await page.evaluate(() => window.COSY.Audience.setAudience('adults'));

        await expect(root).toHaveAttribute('data-audience', 'adults');

        // Verify Adult goal chip is visible
        const adultChip = page.locator('.audience-only-adults').first();
        await expect(adultChip).toBeVisible();
        await expect(adultChip).toContainText('Practical Outcome Focus');

        await expect(page.locator('#cosy-audience-toggle')).toContainText('Adults');
    });

    test('5. Seniors Mode — Applies large readable text, high contrast & calm layout', async ({ page }) => {
        const root = page.locator('html');

        await page.evaluate(() => window.COSY.Audience.setAudience('seniors'));

        await expect(root).toHaveAttribute('data-audience', 'seniors');

        // Verify Senior calm banner is visible
        const seniorBanner = page.locator('.audience-only-seniors').first();
        await expect(seniorBanner).toBeVisible();
        await expect(seniorBanner).toContainText('Calm, High-Contrast Presentation');

        await expect(page.locator('#cosy-audience-toggle')).toContainText('Seniors');
    });

    test('6. Independent Accessibility Settings — Text scale & reduced motion operate independently', async ({ page }) => {
        const root = page.locator('html');

        // 1. Set text scale to 1.25 independently
        await page.evaluate(() => window.COSY.Audience.setTextScale('1.25'));
        await expect(root).toHaveAttribute('data-text-scale', '1.25');

        // Switch audience to children -> text scale should remain 1.25
        await page.evaluate(() => window.COSY.Audience.setAudience('children'));
        await expect(root).toHaveAttribute('data-audience', 'children');
        await expect(root).toHaveAttribute('data-text-scale', '1.25');

        // Switch audience to adults -> text scale should remain 1.25
        await page.evaluate(() => window.COSY.Audience.setAudience('adults'));
        await expect(root).toHaveAttribute('data-audience', 'adults');
        await expect(root).toHaveAttribute('data-text-scale', '1.25');

        // 2. Set reduced motion to true independently
        await page.evaluate(() => window.COSY.Audience.setReducedMotion(true));
        await expect(root).toHaveAttribute('data-reduced-motion', 'true');

        // Switch audience to teens -> reduced motion should remain true
        await page.evaluate(() => window.COSY.Audience.setAudience('teens'));
        await expect(root).toHaveAttribute('data-audience', 'teens');
        await expect(root).toHaveAttribute('data-reduced-motion', 'true');
    });

    test('7. Storage Persistence — Preferences persist across page reloads', async ({ page }) => {
        // Set preferences
        await page.evaluate(() => {
            window.COSY.Audience.setAudience('adults');
            window.COSY.Audience.setTextScale('1.15');
            window.COSY.Audience.setReducedMotion(true);
        });

        // Reload page
        await page.reload();

        const root = page.locator('html');
        await expect(root).toHaveAttribute('data-audience', 'adults');
        await expect(root).toHaveAttribute('data-text-scale', '1.15');
        await expect(root).toHaveAttribute('data-reduced-motion', 'true');
    });

    test('8. Reset Functionality — Resetting restores default mode', async ({ page }) => {
        await page.evaluate(() => {
            window.COSY.Audience.setAudience('children');
            window.COSY.Audience.setTextScale('1.40');
            window.COSY.Audience.setReducedMotion(true);
        });

        await page.evaluate(() => window.COSY.Audience.resetAll());

        const root = page.locator('html');
        await expect(root).toHaveAttribute('data-audience', 'default');
        await expect(root).toHaveAttribute('data-text-scale', '1.0');
        await expect(root).toHaveAttribute('data-reduced-motion', 'false');
    });
});
