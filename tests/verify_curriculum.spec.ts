import { test, expect } from '@playwright/test';

test('Verify English A1 General curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#student-code').fill('COSY-EN-A1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#tb-course-name')).toHaveText(/EN · Starter · General/);

    // Verify exclusivity: navigation links should be hidden from student portal
    // Since we use the same nav element but with different content, we check for a link that's only in Free mode
    await expect(page.locator('#cosy-nav .nav-links li:has-text("My Lessons 🔐")')).not.toBeVisible();

    // Check for some lessons from en_a1.js
    await expect(page.locator('text=A day in my life — routines revisited').first()).toBeVisible();
    await expect(page.locator('text=Final assessment and reflection').last()).toBeVisible();

    // Check for Zig-Zag button
    await expect(page.locator('text=Zig-Zag Path 🗺️')).toBeVisible();
    await page.locator('#open-roadmap-btn').click();
    await expect(page).toHaveURL(/curriculum\/en\/a1.html/);
});

test('Verify French B1 simplified curriculum in student area', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => localStorage.clear());

    await page.locator('#student-code').fill('COSY-FR-B1-GEN');
    await page.getByRole('button', { name: /Unlock/i }).click();

    await expect(page.locator('#area')).toBeVisible();
    await expect(page.locator('#tb-course-name')).toHaveText(/FR · Intermediate · General/);

    // Verify exclusivity
    await expect(page.locator('#cosy-nav .nav-links li:has-text("My Lessons 🔐")')).not.toBeVisible();

    // Check for first lesson title
    await expect(page.locator('text=Day 1:').first()).toBeVisible();
});
