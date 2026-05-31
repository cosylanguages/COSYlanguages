import { test, expect } from '@playwright/test';

test.describe('Spanish Vocabulary Reference Integration', () => {
    test.beforeEach(async ({ page }) => {
        // Mock authentication and unlock student area
        await page.goto('http://localhost:8080/portal/index.html');
        await page.evaluate(() => {
            localStorage.setItem('student_unlocked', 'true');
            localStorage.setItem('cosy_user_name', 'Jules');
            localStorage.setItem('cosy_role', 'student');
            localStorage.setItem('cosy_mode', 'free');
        });
    });

    test('should load Spanish words with generated IDs', async ({ page }) => {
        // Go to Spanish starter vocab
        await page.goto('http://localhost:8080/portal/student/vocabulary-reference.html?lang=es&level=starter');

        // Wait for dynamic vocab to init
        await page.waitForFunction(() => window.vocabularyData && window.vocabularyData["es"]);

        // Search for "hola" (if it exists) or just check first entry
        // In my starter/debates.js I have "Café vs té"
        await page.fill('#global-search', 'Café');

        // Check for the row
        const wordRow = page.locator('tr').filter({ hasText: /Café/ });
        await expect(wordRow).toBeVisible();

        // Check if ID is present (it might be in a data attribute or hidden column)
        // Let's check the HTML for the ID es_starter_food_drink_001
        const content = await page.content();
        expect(content).toContain('es_starter_food_drink_001');
    });

    test('should load Spanish proficiency words with normalized themes', async ({ page }) => {
        await page.goto('http://localhost:8080/portal/student/vocabulary-reference.html?lang=es&level=proficiency');
        await page.waitForFunction(() => window.vocabularyData && window.vocabularyData["es"]);

        // "abrupto" should be there
        await page.fill('#global-search', 'abrupto');
        const wordRow = page.locator('tr').filter({ hasText: 'abrupto' });
        await expect(wordRow).toBeVisible();

        const content = await page.content();
        // ID for abrupto: es_proficiency_psychology_001 (or similar)
        expect(content).toContain('es_proficiency_psychology');
    });
});
