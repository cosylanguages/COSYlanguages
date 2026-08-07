import { test, expect } from '@playwright/test';

test.describe('Keeping Up with Science - Phase 2 Mode & Passcode Verification', () => {
  test('KUS Hub page should load with the new 3-button mode access grids', async ({ page }) => {
    await page.goto('http://localhost:8080/events/keeping-up-with-science.html');

    // Check if science cards exist
    const cards = page.locator('.science-card');
    await expect(cards).not.toHaveCount(0);

    // Verify each card contains a 3-button mode-grid
    const firstCardGrid = cards.first().locator('.wonder-modes-grid');
    await expect(firstCardGrid).toBeVisible();

    const bigBtn = firstCardGrid.locator('.btn-big');
    const miniBtn = firstCardGrid.locator('.btn-mini');
    const privateBtn = firstCardGrid.locator('.btn-private');

    await expect(bigBtn).toBeVisible();
    await expect(miniBtn).toBeVisible();
    await expect(privateBtn).toBeVisible();
  });

  test('KUS Session page under protected mode should display the KUS-themed lock screen', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini');

    // The lock overlay should be visible
    const overlay = page.locator('#wonder-passcode-gate');
    await expect(overlay).toBeVisible();

    // Check if it has the KUS-specific modal class
    const card = overlay.locator('.lock-modal-card.kus-modal');
    await expect(card).toBeVisible();

    // Confirm title matches localized/mode values
    const title = card.locator('.lock-modal-title');
    await expect(title).toHaveText('👥 MINI GROUP');
  });

  test('KUS Session with incorrect passcode should show error, and correct passcode should unlock successfully', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini');

    const input = page.locator('#gate-passcode-input');
    const submitBtn = page.locator('#gate-passcode-submit');
    const errorMsg = page.locator('#gate-error-message');

    // Try wrong passcode
    await input.fill('WRONG_CODE');
    await submitBtn.click();
    await expect(errorMsg).toBeVisible();

    // Try correct passcode (Specimen 1 Mini Group = KUSMG01)
    await input.fill('KUSMG01');
    await submitBtn.click();

    // Modal should disappear and page becomes unlocked
    await expect(page.locator('#wonder-passcode-gate')).not.toBeVisible();
  });

  test('KUS Session with shared=true student link should bypass passcode gate', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=mini&shared=true');

    // Lock overlay should NOT be visible
    const overlay = page.locator('#wonder-passcode-gate');
    await expect(overlay).not.toBeVisible();

    // Host utility bar should be visible on the page
    const hostBar = page.locator('#kus-dynamic-host-bar');
    await expect(hostBar).toBeVisible();
  });
});
