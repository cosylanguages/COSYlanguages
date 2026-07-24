import { test, expect } from '@playwright/test';

test.describe('Session Switcher Integration Tests', () => {
    test('should display level switcher on multi-level pages and navigate correctly', async ({ page }) => {
        // Navigate to the typing-vs-handwriting-elementary page
        await page.goto('http://localhost:8080/events/sessions/debatable-relatable/typing-vs-handwriting-elementary.html');

        // Wait for session switcher to be loaded and attached to DOM
        const switcher = page.locator('.session-switcher');
        await expect(switcher).toBeVisible();

        // Check for correct header title label
        const levelLabel = switcher.locator('.session-switcher-label');
        await expect(levelLabel).toHaveText('Available Levels:');

        // Verify active button
        const activeBtn = switcher.locator('.session-switcher-btn.active');
        await expect(activeBtn).toHaveText('Elementary (A2)');

        // Verify intermediate button exists
        const intermBtn = switcher.locator('a.session-switcher-btn:has-text("Intermediate (B1)")');
        await expect(intermBtn).toBeVisible();

        // Click intermediate button and verify navigation
        await intermBtn.click();
        await page.waitForURL('**/events/sessions/debatable-relatable/typing-vs-handwriting-intermediate.html');

        // Verify that on the new page, the Intermediate button is active
        const newSwitcher = page.locator('.session-switcher');
        await expect(newSwitcher).toBeVisible();
        const newActiveBtn = newSwitcher.locator('.session-switcher-btn.active');
        await expect(newActiveBtn).toHaveText('Intermediate (B1)');
    });

    test('should display language switcher on multilingual pages and navigate correctly', async ({ page }) => {
        // Navigate to 4-day-work-week page (English)
        await page.goto('http://localhost:8080/events/sessions/debatable-relatable/4-day-work-week.html');

        const switcher = page.locator('.session-switcher');
        await expect(switcher).toBeVisible();

        // Check languages label
        const langLabel = switcher.locator('.session-switcher-label');
        await expect(langLabel).toHaveText('Available Languages:');

        // Active button is English
        const activeBtn = switcher.locator('.session-switcher-btn.active');
        await expect(activeBtn).toHaveText('🇬🇧 English');

        // French button should exist
        const frenchBtn = switcher.locator('a.session-switcher-btn:has-text("🇫🇷 Français")');
        await expect(frenchBtn).toBeVisible();

        // Russian button should exist
        const russianBtn = switcher.locator('a.session-switcher-btn:has-text("🇷🇺 Русский")');
        await expect(russianBtn).toBeVisible();

        // Click French button and verify navigation
        await frenchBtn.click();
        await page.waitForURL('**/events/fr/sessions/debatable-relatable/la-semaine-de-4-jours.html');

        // On French page, the label should be translated
        const frSwitcher = page.locator('.session-switcher');
        await expect(frSwitcher).toBeVisible();

        const frLabel = frSwitcher.locator('.session-switcher-label');
        await expect(frLabel).toHaveText('Langues disponibles :');

        const frActiveBtn = frSwitcher.locator('.session-switcher-btn.active');
        await expect(frActiveBtn).toHaveText('🇫🇷 Français');
    });
});
