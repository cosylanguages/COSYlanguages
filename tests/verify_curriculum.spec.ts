import { test, expect } from '@playwright/test';

test('Verify English A1 General curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#ci').fill('COSY-EN-A1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#ct')).toHaveText(/English · General Course/);

    // Check for some lessons from en_a1.js using more specific locators
    await expect(page.locator('.l-title').getByText('A day in my life — routines revisited')).toBeVisible();
    await expect(page.locator('.l-title').getByText('Final assessment and reflection')).toBeVisible();

    // Check for "Full Roadmap" button
    await expect(page.locator('#open-roadmap-btn')).toBeVisible();
    await page.locator('#open-roadmap-btn').click();
    await expect(page).toHaveURL(/curriculum\/en\/a1.html/);
});

test('Verify French B1 simplified curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#ci').fill('COSY-FR-B1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#ct')).toHaveText(/Français · General Course/);

    // Check for first lesson in curriculum_data.js for FR B1
    await expect(page.locator('.l-title').getByText('Opinions & Arguments')).toBeVisible();

    // Check that Full Roadmap is NOT visible for FR B1 (since we haven't implemented it)
    await expect(page.locator('#open-roadmap-btn')).not.toBeVisible();
});
