import { test, expect } from '@playwright/test';

test.describe('Debate Club and Assisted Dying Session Verification', () => {
  test('English club page should load and display the new session', async ({ page }) => {
    await page.goto('http://localhost:8080/events/debatable-relatable.html');
    await expect(page.locator('h1')).toContainText('Debatable & Relatable');
    await expect(page.locator('h4:has-text("Assisted Dying: Yes or No")')).toBeVisible();
  });

  test('French club page should load and display the new session', async ({ page }) => {
    await page.goto('http://localhost:8080/events/fr/debatable-relatable.html');
    await expect(page.locator('h1')).toContainText('Debatable & Relatable');
    await expect(page.locator('h4:has-text("L\'aide active à mourir : oui ou non ?")')).toBeVisible();
  });

  test('English Assisted Dying session page should load and have correct structure', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/debatable-relatable/assisted-dying.html');
    await expect(page.locator('h1')).toContainText('Assisted Dying: Yes or No');
    await expect(page.locator('.vocab-card')).toHaveCount(10);
    await expect(page.locator('.vocab-card').first().locator('.vocab-word')).toContainText('Autonomy');
    await expect(page.locator('#s-warm')).toBeVisible();
    await expect(page.locator('#s-r1')).toBeVisible();
    await expect(page.locator('#s-lst')).toBeVisible();
    await expect(page.locator('#s-r2')).toBeVisible();
    await expect(page.locator('#s-mistakes')).toBeVisible();
  });

  test('French Assisted Dying session page should load and have correct structure', async ({ page }) => {
    await page.goto('http://localhost:8080/events/fr/sessions/debatable-relatable/l-aide-active-a-mourir.html');
    await expect(page.locator('h1')).toContainText("L'aide active à mourir : oui ou non ?");
    await expect(page.locator('.vocab-card')).toHaveCount(10);
    await expect(page.locator('.vocab-card').first().locator('.vocab-word')).toContainText("L'autonomie");
    await expect(page.locator('#s-warm')).toBeVisible();
    await expect(page.locator('#s-r1')).toBeVisible();
    await expect(page.locator('#s-lst')).toBeVisible();
    await expect(page.locator('#s-r2')).toBeVisible();
    await expect(page.locator('#s-mistakes')).toBeVisible();
  });
});
