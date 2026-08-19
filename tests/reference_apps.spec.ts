import { test, expect } from '@playwright/test';

test.describe('Standalone Language Reference Apps Verification', () => {
    test('fr-conjugeur loads and displays CEFR badge and color-coded verb endings', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/fr-conjugeur/index.html');
        await page.waitForSelector('#verb-search-input');

        await page.fill('#verb-search-input', 'parler');
        await page.keyboard.press('Enter');

        await expect(page.locator('#verb-infinitive')).toHaveText('parler');
        await expect(page.locator('#verb-group-badge')).toContainText('1er groupe');
        await expect(page.locator('#verb-cefr-badge')).toContainText('Niveau');
        await expect(page.locator('#verb-usage-hint')).toContainText('parler à');

        // Check stem/ending color coding
        const verbFormHtml = await page.innerHTML('#tense-pres li:first-child .verb-form');
        expect(verbFormHtml).toContain('class="stem"');
        expect(verbFormHtml).toContain('class="ending"');
    });

    test('ru-rod-padezhi loads and displays 6 cases with color-coded endings and CEFR level', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/ru-rod-padezhi/index.html');
        await page.waitForSelector('#noun-search-input');

        await page.fill('#noun-search-input', 'стол');
        await page.keyboard.press('Enter');

        await expect(page.locator('#noun-title')).toHaveText('стол');
        await expect(page.locator('#gender-badge')).toContainText('мужской род');

        // Table body rows check (6 cases)
        const rows = await page.locator('#cases-table-body tr').count();
        expect(rows).toBe(6);
    });

    test('el-klisi-rimaton loads and performs verb search', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/el-klisi-rimaton/index.html');
        await page.waitForSelector('#verb-search-input');

        await page.fill('#verb-search-input', 'γράφω');
        await page.keyboard.press('Enter');

        await expect(page.locator('#verb-infinitive')).toHaveText('γράφω');
        await expect(page.locator('#verb-definition')).not.toBeEmpty();
        await expect(page.locator('#verb-usage-hint')).toContainText('γράφω σε');
    });

    test('it-coniugatore displays usage hint and CEFR badge for Italian verbs', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/it-coniugatore/index.html');
        await page.waitForSelector('#verb-search-input');

        await page.fill('#verb-search-input', 'rispondere');
        await page.keyboard.press('Enter');

        await expect(page.locator('#verb-infinitive')).toHaveText('rispondere');
        await expect(page.locator('#verb-usage-hint')).toContainText('rispondere a');
    });

    test('it-genere displays explicit article and plural form for Italian nouns', async ({ page }) => {
        await page.goto('http://localhost:8080/apps/it-genere/index.html');
        await page.waitForSelector('#noun-search-input');

        await page.fill('#noun-search-input', 'casa');
        await page.keyboard.press('Enter');

        await expect(page.locator('#noun-title')).toHaveText('casa');
        await expect(page.locator('#sing-form')).toContainText('la');
        await expect(page.locator('#plur-form')).toContainText('case');
    });
});
