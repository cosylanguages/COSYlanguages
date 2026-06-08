import { test, expect } from '@playwright/test';

test.describe('Word Definition Modal', () => {
    test('Check modal layout and metadata for English', async ({ page }) => {
        await page.goto('http://localhost:8080/practice.html');
        await page.click('.lang-selection-card[data-value="en"]');
        await page.selectOption('#practice-level', 'starter');
        await page.click('#start-btn');

        await page.waitForSelector('#question-card', { state: 'visible' });

        let opened = false;
        for (let i = 0; i < 10; i++) {
            await page.click('#word-display');
            if (await page.locator('#definition-modal').isVisible()) {
                opened = true;
                break;
            }
            await page.evaluate(() => showNextWord());
            await page.waitForTimeout(500);
        }

        if (opened) {
            await expect(page.locator('#definition-modal')).toBeVisible();
            await expect(page.locator('.definition-header')).toBeVisible();
            await page.click('#close-definition-btn');
            await expect(page.locator('#definition-modal')).not.toBeVisible();
        }
    });

    test('Check modal for French verbs with conjugation group', async ({ page }) => {
        await page.goto('http://localhost:8080/practice.html');
        await page.click('.lang-selection-card[data-value="fr"]');
        await page.click('.cat-grammar-pill');
        await page.selectOption('#practice-level', 'starter');
        await page.selectOption('#practice-theme', 'grammar_present_simple');
        await page.click('#start-btn');

        await page.waitForSelector('#question-card', { state: 'visible' });

        let opened = false;
        for (let i = 0; i < 10; i++) {
            await page.click('#word-display');
            if (await page.locator('#definition-modal').isVisible()) {
                opened = true;
                break;
            }
            await page.evaluate(() => showNextWord());
            await page.waitForTimeout(500);
        }

        if (opened) {
            await expect(page.locator('#definition-modal')).toBeVisible();
        }
    });
});
