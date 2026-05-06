import { test, expect } from '@playwright/test';

test.describe('Three Facet Verification', () => {

    test('Teacher Facet: TCH- code shows teacher dashboard', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');

        // Fill in name and TCH- code
        await page.locator('#student-name').fill('Jules the Teacher');
        await page.locator('#student-code').fill('TCH-2025');
        await page.getByRole('button', { name: /Unlock/i }).click();

        // Verify teacher-specific UI
        await expect(page.locator('body')).toHaveAttribute('data-role', 'teacher');
        await expect(page.getByText('Welcome back, Jules the Teacher!')).toBeVisible();
        await expect(page.getByText('Teacher Access · All Curricula')).toBeVisible();

        // Check teacher nav items
        await expect(page.locator('nav.nav-menu').getByText('Classroom')).toBeVisible();
        await expect(page.locator('nav.nav-menu').getByText('Curriculum Library')).toBeVisible();
        await expect(page.locator('nav.nav-menu').getByText('Roadmap')).not.toBeVisible();

        // Switch to Classroom and check mock students
        await page.locator('nav.nav-menu').getByText('Classroom').click();
        await expect(page.locator('#panel-classroom')).toBeVisible();
        await expect(page.getByText('Alex')).toBeVisible();
        await expect(page.getByText('Maria')).toBeVisible();
    });

    test('Student Facet: COSY- code shows student dashboard', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');

        // Fill in name and COSY- code
        await page.locator('#student-name').fill('Bob the Student');
        await page.locator('#student-code').fill('COSY-EN-A1-GEN');
        await page.getByRole('button', { name: /Unlock/i }).click();

        // Verify student-specific UI
        await expect(page.locator('body')).toHaveAttribute('data-role', 'student');
        await expect(page.getByText('Welcome back, Bob the Student!')).toBeVisible();

        // Check student nav items
        await expect(page.locator('nav.nav-menu').getByText('Roadmap')).toBeVisible();
        await expect(page.locator('nav.nav-menu').getByText('Classroom')).not.toBeVisible();

        // Check widgets
        await expect(page.locator('#live-session-widget')).toBeVisible();
        await expect(page.getByText('Community Hub')).toBeVisible();
        await expect(page.getByText('Cinema Night')).toBeVisible();
    });

    test('Logout clears roles and returns to gate', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/index.html');
        await page.locator('#student-name').fill('Test User');
        await page.locator('#student-code').fill('COSY-EN-A1-GEN');
        await page.getByRole('button', { name: /Unlock/i }).click();

        await page.getByRole('button', { name: /Log Out/i }).click();
        await expect(page.locator('#gate')).toBeVisible();
    });
});
