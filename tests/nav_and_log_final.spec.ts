import { test, expect } from '@playwright/test';

test('Mobile nav active state on language page', async ({ page }) => {
    // Navigate to English language page
    await page.goto('http://localhost:8080/languages/en.html');

    // Check if Languages tab is active
    const languagesTab = page.locator('#mnav-languages');
    await expect(languagesTab).toHaveClass(/active/);

    // Check if Home tab is NOT active
    const homeTab = page.locator('#mnav-home');
    await expect(homeTab).not.toHaveClass(/active/);
});

test('Mobile nav active state on days.html', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');

    const lessonsTab = page.locator('#mnav-lessons');
    await expect(lessonsTab).toHaveClass(/active/);
});

test('Recently Played section visibility', async ({ page }) => {
    // Mock localStorage to have a session
    await page.addInitScript(() => {
        const session = {
            gameName: 'Emoji Odyssey',
            icon: '🎨',
            lang: 'en',
            level: 'A1',
            date: new Date().toISOString()
        };
        // Use the correct key from games-improvements.js
        localStorage.setItem('cosy_session_log', JSON.stringify([session]));
    });

    await page.goto('http://localhost:8080/index.html');

    // Should be visible on homepage
    const log = page.locator('#session-log-container');
    await expect(log).toBeVisible();

    // Should also be visible on practice page
    await page.goto('http://localhost:8080/practice.html');
    await expect(page.locator('#session-log-container')).toBeVisible();

    // Should also be visible on a language page
    await page.goto('http://localhost:8080/languages/en.html');
    await expect(page.locator('#session-log-container')).toBeVisible();
});
