import { test, expect } from '@playwright/test';

test.describe('Vocabulary Reference', () => {
    test.beforeEach(async ({ page }) => {
        // Clear localStorage before each test
        await page.goto('http://localhost:8080/days.html');
        await page.evaluate(() => localStorage.clear());
    });

    test('should redirect to days.html if accessed directly while locked', async ({ page }) => {
        await page.goto('http://localhost:8080/vocabulary/en.html');
        // Wait for potential redirect
        await page.waitForTimeout(1000);
        expect(page.url()).toContain('days.html');
    });

    test('should show vocabulary section in days.html after unlocking', async ({ page }) => {
        await page.goto('http://localhost:8080/days.html');

        // Enter the unlock code
        await page.fill('#student-code', 'COSYSTUDENT2025');
        await page.click('#unlock-btn');

        // Check if curriculum content is visible
        await expect(page.locator('#curriculum-content')).toBeVisible();

        // Check if Vocabulary Reference section is visible
        const vocabHeading = page.locator('h3[data-translate-key="vocabulary_roadmap_title"]');
        await expect(vocabHeading).toBeVisible();

        const openVocabBtn = page.locator('#open-vocabulary-btn');
        await expect(openVocabBtn).toBeVisible();
    });

    test('should navigate to vocabulary/en.html from days.html', async ({ page }) => {
        await page.goto('http://localhost:8080/days.html');

        await page.fill('#student-code', 'COSYSTUDENT2025');
        await page.click('#unlock-btn');

        // Click the open vocabulary button
        await page.click('#open-vocabulary-btn');

        // Verify URL
        await expect(page).toHaveURL(/vocabulary\/en.html/);

        // Verify page content - using a more flexible regex to match "English Vocabulary" or "Vocabulary Reference"
        await expect(page.locator('.tb-title')).toContainText(/Vocabulary/i);

        // Verify we are not redirected back
        await page.waitForTimeout(500);
        expect(page.url()).toContain('vocabulary/en.html');
    });

    test('should render vocabulary content correctly', async ({ page }) => {
        // Unlock first
        await page.goto('http://localhost:8080/days.html');
        await page.fill('#student-code', 'COSYSTUDENT2025');
        await page.click('#unlock-btn');

        await page.goto('http://localhost:8080/vocabulary/en.html');

        // Check for level sections
        await expect(page.locator('#level-sec-A0')).toBeVisible();
        await expect(page.locator('#level-sec-A1')).toBeVisible();

        // Check for a specific word with exact matching on the class
        await expect(page.locator('.rt-word').filter({ hasText: /^head$/ })).toBeVisible();
        await expect(page.locator('text=Essential words for everyday survival')).toBeVisible();

        // Check mode switching
        await page.click('#btn-flip');
        await expect(page.locator('.flip-grid').first()).toBeVisible();

        await page.click('#btn-type');
        await expect(page.locator('.type-card').first()).toBeVisible();
    });
});
