import { test, expect } from '@playwright/test';

test('Verify English A1 General curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#portal-code').fill('COSY-EN-A1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page).toHaveURL(/portal\/student\/index.html/);
    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#tb-course-name')).toHaveText(/EN · (Starter|A1) · (General|GEN)/);

    // Verify exclusivity: navigation links should be hidden from student portal
    // Since we use the same nav element but with different content, we check for a link that's only in Free mode
    await expect(page.locator('#cosy-nav .nav-links li:has-text("My Lessons 🔐")')).not.toBeVisible();

    // Switch to list view to ensure lessons are visible
    await page.evaluate(() => cosyDays.switchView('list'));

    // Check for some lessons from en_a1.js
    // We use a broader locator because of potential translation tags or prefixes
    await expect(page.locator('text=A day in my life — routines revisited').first()).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Final assessment and reflection').last()).toBeVisible({ timeout: 10000 });

    // Check for Zig-Zag button
    await expect(page.locator('button:has-text("🗺️")')).toBeVisible();
});

test('Verify French B1 simplified curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#portal-code').fill('COSY-FR-B1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page).toHaveURL(/portal\/student\/index.html/);
    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#tb-course-name')).toHaveText(/FR · (Intermediate|B1) · (General|GEN)/);

    // Verify exclusivity
    await expect(page.locator('#cosy-nav .nav-links li:has-text("My Lessons 🔐")')).not.toBeVisible();

    // Switch to list view to ensure lessons are visible
    await page.evaluate(() => cosyDays.switchView('list'));

    // Check for first lesson title
    await expect(page.locator('text=Day 1:').first()).toBeVisible();
});
