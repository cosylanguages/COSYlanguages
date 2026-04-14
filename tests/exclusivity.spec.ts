import { test, expect } from '@playwright/test';

test.describe('Student Area Exclusivity', () => {
    test('Entering English A0 code shows only English A0 content and hides site navigation', async ({ page }) => {
        await page.goto('http://localhost:8080/days.html');

        // Unlock with A0 code
        await page.locator('#ci').fill('COSY-EN-A0-GEN');
        await page.getByRole('button', { name: /Unlock/i }).click();

        // Check header identity
        await expect(page.locator('#ct')).toHaveText(/English · Pre-Baby \(A0\) · General Course/);

        // Verify lesson content
        await expect(page.locator('.l-title').first()).toHaveText('The Alphabet & Sounds');

        // Verify exclusivity: navigation links should be hidden
        await expect(page.locator('.nav-links li:has-text("How it works")')).not.toBeVisible();
        await expect(page.locator('.nav-lang-switcher')).not.toBeVisible();

        // Verify that we don't see French content
        await expect(page.locator('.l-title').getByText('Opinions & Arguments')).not.toBeVisible();
    });

    test('Logout restores navigation', async ({ page }) => {
        await page.goto('http://localhost:8080/days.html');
        await page.locator('#ci').fill('COSY-EN-A0-GEN');
        await page.getByRole('button', { name: /Unlock/i }).click();

        await page.getByRole('button', { name: /Log out/i }).click();

        // Navigation should be back
        await expect(page.locator('.nav-links li:has-text("How it works")')).toBeVisible();
        await expect(page.locator('.nav-lang-switcher')).toBeVisible();
        await expect(page.locator('#gate')).toBeVisible();
    });
});
