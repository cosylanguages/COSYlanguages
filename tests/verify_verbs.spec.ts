import { test, expect } from '@playwright/test';

test('Grammar Portal loads and conjugates Italian verbs', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => {
        localStorage.setItem('student_unlocked', 'true');
    });

    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=it');

    // Check sidebar for exact 'essere'
    const sidebarItem = page.getByRole('link', { name: 'essere', exact: true });
    await expect(sidebarItem).toBeVisible();

    const parlareCard = page.locator('.card:has-text("PARLARE")').first();
    await expect(parlareCard).toBeVisible();

    const groupBadge = parlareCard.locator('.meta-badge.group:has-text("Group: are")');
    await expect(groupBadge).toBeVisible();

    const ioCell = parlareCard.locator('tr:has-text("io") >> .key-verb');
    await expect(ioCell).toHaveText("parlo");

    await page.screenshot({ path: 'verification/grammar_it.png', fullPage: true });
});

test('Grammar Portal loads Russian verbs with reflexives', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/index.html');
    await page.evaluate(() => {
        localStorage.setItem('student_unlocked', 'true');
    });

    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=ru');

    const rabotatCard = page.locator('.card:has-text("РАБОТАТЬ")').first();
    await expect(rabotatCard).toBeVisible();

    await expect(rabotatCard.locator('.meta-badge.irr')).toHaveText("regular");
    await expect(rabotatCard.locator('.meta-badge.group')).toHaveText("Group: 1st_conj");

    const yaCell = rabotatCard.locator('tr:has-text("я") >> .key-verb');
    await expect(yaCell).toHaveText("работаю");

    await page.screenshot({ path: 'verification/grammar_ru.png', fullPage: true });
});
