import { test, expect } from '@playwright/test';

test('Grammar Portal loads and conjugates Italian verbs', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=it');
    await page.evaluate(() => {
        localStorage.setItem('student_unlocked', 'true');
    });
    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=it');
    await page.waitForTimeout(3000);

    // Check sidebar for exact 'essere'
    const sidebarItem = page.locator('#sidebar').getByText('essere', { exact: true });
    await expect(sidebarItem).toBeVisible();

    const parlareCard = page.locator('.card:has-text("PARLARE")').first();
    await expect(parlareCard).toBeVisible();

    const groupBadge = parlareCard.locator('.meta-badge:has-text("Group: are")');
    await expect(groupBadge).toBeVisible();

    const ioCell = parlareCard.locator('tr:has-text("io") >> .key-verb').first();
    await expect(ioCell).toHaveText("parlo");
});

test('Grammar Portal loads Russian verbs with reflexives', async ({ page }) => {
    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=ru');
    await page.evaluate(() => {
        localStorage.setItem('student_unlocked', 'true');
    });
    await page.goto('http://localhost:8080/portal/grammar-reference.html?lang=ru');
    await page.waitForTimeout(3000);

    const rabotatCard = page.locator('.card:has-text("РАБОТАТЬ")').first();
    await expect(rabotatCard).toBeVisible();

    await expect(rabotatCard.locator('.meta-badge:has-text("regular")')).toBeVisible();
    await expect(rabotatCard.locator('.meta-badge:has-text("Group: 1st_conj")')).toBeVisible();

    const yaCell = rabotatCard.locator('tr:has-text("я") >> .key-verb').first();
    await expect(yaCell).toHaveText(/работаю.*/);
});
