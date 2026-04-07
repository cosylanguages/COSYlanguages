import { test, expect } from '@playwright/test';

test.describe('Adjectives Grammar Practice', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/practice.html');
    });

    test('should allow selecting Adjectives grammar theme', async ({ page }) => {
        // Select Grammar category
        await page.click('span[data-translate-key="cat_grammar"]');

        // Select Level Elementary
        await page.selectOption('#practice-level', 'elementary');

        // Select Theme Adjectives
        await page.selectOption('#practice-theme', 'grammar_adjectives');

        // Check if sub-themes are visible
        const subTheme = page.locator('#practice-sub-theme');
        await expect(subTheme).toBeVisible();

        // Verify options
        const options = await subTheme.locator('option').allInnerTexts();
        expect(options).toContain('Comparatives & Superlatives');
    });

    test('should generate comparative tasks in English', async ({ page }) => {
        // Select English (default)
        // Select Grammar category
        await page.click('span[data-translate-key="cat_grammar"]');
        await page.selectOption('#practice-level', 'elementary');
        await page.selectOption('#practice-theme', 'grammar_adjectives');
        await page.selectOption('#practice-sub-theme', 'grammar_comparative_superlative');

        await page.click('#start-btn');

        // Verify task instruction
        const instruction = page.locator('#task-what-to-do');
        await expect(instruction).toContainText(/Type the correct comparative or superlative form/);

        // Verify badge
        const badge = page.locator('#word-form');
        await expect(badge).toContainText('Adjective');

        // Verify cloze text contains "(Comparative)" or "(Superlative)"
        const wordDisplay = await page.textContent('#word-display');
        expect(wordDisplay).toMatch(/\(Comparative\)|\(Superlative\)/);
    });

    test('should generate agreement tasks in French', async ({ page }) => {
        // Select French
        await page.click('.lang-selection-card[data-value="fr"]');

        // Select Grammar category
        await page.click('span[data-translate-key="cat_grammar"]');
        await page.selectOption('#practice-level', 'elementary');
        await page.selectOption('#practice-theme', 'grammar_adjectives');
        await page.selectOption('#practice-sub-theme', 'grammar_adjective_agreement');

        await page.click('#start-btn');

        // Verify task instruction
        const instruction = page.locator('#task-what-to-do');
        await expect(instruction).toContainText(/Complétez la phrase avec la forme correcte de l'adjectif/);

        // Verify word display has the agreement context
        const wordDisplay = await page.textContent('#word-display');
        // Example: "Le garçon est ____ (beau)"
        expect(wordDisplay).toMatch(/(Le garçon|La fille|Les garçons|Les filles) (est|sont) ____/);
    });

    test('should display correct metadata badges for Russian adjectives', async ({ page }) => {
         // Select Russian
        await page.click('.lang-selection-card[data-value="ru"]');

        // Select Grammar
        await page.click('span[data-translate-key="cat_grammar"]');
        await page.selectOption('#practice-level', 'elementary');
        await page.selectOption('#practice-theme', 'grammar_adjectives');

        await page.click('#start-btn');

        // Verify presence of form badge
        const badge = page.locator('#word-form');
        await expect(badge).toBeVisible();
        await expect(badge).toContainText('Прил.');
    });
});
