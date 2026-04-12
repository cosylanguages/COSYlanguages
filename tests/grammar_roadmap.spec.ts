import { test, expect } from '@playwright/test';

test.describe('Grammar Roadmap Navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Clear storage to ensure locked state
        await page.goto('http://localhost:8080/days.html');
        await page.evaluate(() => localStorage.clear());
    });

    test('Accessing Italian specific roadmap', async ({ page }) => {
        // Unlock
        await page.locator('#student-code').fill('COSYSTUDENT2025');
        await page.locator('#unlock-btn').click();

        // Set language to IT
        await page.evaluate(() => localStorage.setItem('language', 'it'));

        await page.locator('#open-grammar-btn').click();
        await expect(page).toHaveURL(/grammar\/it.html/);
        await expect(page.getByText('Grammatica Italiana')).toBeVisible();
    });

    test('Navigating to specific lesson', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
        await page.goto('http://localhost:8080/grammar/it.html');

        await page.getByRole('link', { name: 'Lezione: Essere (Plurale)' }).click();
        await expect(page).toHaveURL(/it-essere-2.html/);
    });

    test('Interactive Quiz in Italian Lesson', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
        await page.goto('http://localhost:8080/grammar/it-essere-2.html');

        const quizQ = page.locator('#q1');
        // Based on the new template, it might use different feedback text
        await quizQ.getByRole('button', { name: 'siamo' }).click();
        await expect(quizQ.locator('.quiz-feedback')).toHaveText(/Correct|Esatto/);
    });

    test('Grammar Hub (grammar.html) visibility', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('student_unlocked', 'true'));
        await page.goto('http://localhost:8080/grammar.html');

        await expect(page.getByText('English')).toBeVisible();
        await expect(page.getByText('Français')).toBeVisible();
        await expect(page.getByText('Italiano')).toBeVisible();
    });

    test('Grammar Reference redirects if not unlocked', async ({ page }) => {
        await page.evaluate(() => localStorage.removeItem('student_unlocked'));
        await page.goto('http://localhost:8080/grammar.html');
        await expect(page).toHaveURL(/days.html/);
    });
});
