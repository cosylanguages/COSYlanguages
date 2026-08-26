import { test, expect } from '@playwright/test';

test.describe('Russian Grammar Manual (A0-A1) Verification', () => {
  test('Main index page renders properly and contains interactive sentence builder', async ({ page }) => {
    await page.goto('http://localhost:8080/grammatika-russkogo-yazyka/index.html');
    await expect(page.locator('h1').first()).toContainText('Грамматика русского языка');

    // Test sentence builder
    const objBtn = page.locator('#sentence-builder .pool button[data-role="subject"]').first();
    const verbBtn = page.locator('#sentence-builder .pool button[data-role="verb"]').first();
    const nounBtn = page.locator('#sentence-builder .pool button[data-role="object"]').first();

    await objBtn.click();
    await verbBtn.click();
    await nounBtn.click();

    const output = page.locator('.sentence-out');
    await expect(output).not.toBeEmpty();

    // Verify 8 section cards exist
    const cards = page.locator('.part-card');
    await expect(cards).toHaveCount(8);
  });

  test('Section hub pages render topic cards', async ({ page }) => {
    await page.goto('http://localhost:8080/grammatika-russkogo-yazyka/chast-0.html');
    await expect(page.locator('h1')).toContainText('Часть 0');
    const topicCards = page.locator('.topic-card');
    await expect(topicCards).toHaveCount(6);
  });

  test('Topic page renders interactive elements: mistake flip, checklist, quiz, pager', async ({ page }) => {
    await page.goto('http://localhost:8080/grammatika-russkogo-yazyka/topics/alfavit.html');
    await expect(page.locator('h1')).toHaveText('Алфавит');

    // Test mistake flip card
    const mflip = page.locator('.mflip').first();
    await expect(mflip).not.toHaveClass(/flipped/);
    await mflip.click();
    await expect(mflip).toHaveClass(/flipped/);

    // Test checklist
    const checkItem = page.locator('.check-item').first();
    await expect(checkItem).not.toHaveClass(/done/);
    await checkItem.click();
    await expect(checkItem).toHaveClass(/done/);

    // Test quiz option
    const qopt = page.locator('.qopt').first();
    await qopt.click();
    await expect(page.locator('.qexplain').first()).toHaveClass(/show/);

    // Test pager link
    const nextPager = page.locator('.pager a.next');
    await expect(nextPager).toBeVisible();
    await expect(nextPager).toHaveAttribute('href', 'tverdye-i-myagkie-soglasnye.html');
  });
});
