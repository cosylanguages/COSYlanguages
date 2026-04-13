import { test, expect } from '@playwright/test';

test('Practice Mode filtering by level and theme', async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

    await page.goto('http://localhost:8080/practice.html');

    // Select Language
    await page.click('.lang-selection-card[data-value="en"]');

    // Check Category Radio
    await expect(page.locator('#cat-vocab')).toBeChecked();

    // Select Level
    await page.selectOption('#practice-level', 'elementary');

    // Wait for the common themes to be populated and select one
    // We use a broader locator and wait for the specific option to be present
    const themeSelect = page.locator('#practice-theme');
    await themeSelect.locator('option[value="food_drink"]').waitFor({ state: 'attached', timeout: 10000 });
    await page.selectOption('#practice-theme', 'food_drink');

    // Wait for the sub-themes to be populated and select one
    const subThemeSelect = page.locator('#practice-sub-theme');
    await subThemeSelect.locator('option[value="diet_nutrition_A2"]').waitFor({ state: 'attached', timeout: 10000 });
    await page.selectOption('#practice-sub-theme', 'diet_nutrition_A2');

    // Start Practice
    await page.click('#start-btn');

    // Verify Practice Section is visible
    await expect(page.locator('#practice-section')).toBeVisible();
    await expect(page.locator('#setup-section')).not.toBeVisible();
});

test('Student Area access and day selection', async ({ page }) => {
    await page.goto('http://localhost:8080/days.html');

    // Gate should be visible
    await expect(page.locator('#unlock-gate')).toBeVisible();

    // Enter correct code
    await page.fill('#student-code', 'COSYSTUDENT2025');
    await page.click('#unlock-btn');

    // Content should now be visible
    await expect(page.locator('#curriculum-content')).toBeVisible();
    await expect(page.locator('#unlock-gate')).not.toBeVisible();

    // Find lesson A1-02, click it to expand, then click Practice
    // Note: lesson codes are A1-01, A1-02...
    await page.click('#lesson-A1-02 .lc-header');
    await page.click('#lesson-A1-02 .cta-button.primary');

    // Should redirect to lesson.html with params (mapped to lesson=2)
    await expect(page).toHaveURL(/lesson.html.*lesson=2/);
});

test('Game launch with new theme filters', async ({ page }) => {
    await page.goto('http://localhost:8080/events.html');

    // Open Action Hero game via lobby card
    await page.click('.game-card-lobby[data-game="action-hero"]');

    // Bottom sheet should appear
    await expect(page.locator('#game-setup-sheet')).toHaveClass(/open/);

    // Select language and level in the sheet
    await page.click('#gss-lang-options .gss-option[data-value="en"]');
    await page.click('#gss-level-options .gss-option[data-value="starter"]');

    // Start game from sheet
    await page.click('.gss-start');

    // Game modal should be visible
    await expect(page.locator('#charades-modal')).toBeVisible();

    // Gameplay area should eventually appear (it might auto-start if triggered by sheet)
    await expect(page.locator('#charades-gameplay')).toBeVisible();
});
