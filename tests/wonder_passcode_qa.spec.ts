import { test, expect } from '@playwright/test';

test.describe('Wonder Passcode Security & QA Verification', () => {
  test('Correct passcode should unlock Mini Group', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type correct code
    await page.fill("#gate-passcode-input", "ICHBWMG18");
    await page.click("#gate-passcode-submit");

    // Locked screen should vanish, content unlocked
    await page.waitForSelector('#m-unit1');
    await expect(page.locator('#m-unit1')).toBeVisible();
  });

  test('Incorrect passcode should show error and keep locked', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type wrong code
    await page.fill("#gate-passcode-input", "WRONGCODE");
    await page.click("#gate-passcode-submit");

    // Should show error and remain locked
    await expect(page.locator('#gate-error-message')).toBeVisible();
    await expect(page.locator('#m-unit1')).toBeHidden();
  });

  test('Wrong-session passcode should show error and keep locked', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type code for session 01 instead of 18
    await page.fill("#gate-passcode-input", "ICHBWMG01");
    await page.click("#gate-passcode-submit");

    // Should fail and remain locked
    await expect(page.locator('#gate-error-message')).toBeVisible();
    await expect(page.locator('#m-unit1')).toBeHidden();
  });

  test('Empty passcode should not unlock', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Leave input empty and submit
    await page.click("#gate-passcode-submit");

    // Should remain locked
    await expect(page.locator('#gate-error-message')).toBeVisible();
    await expect(page.locator('#m-unit1')).toBeHidden();
  });

  test('Back button should navigate to speaking club overview', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Click back to club button
    await page.click('#gate-passcode-back');

    // Should navigate back to the main club page
    await page.waitForURL('**/events/i-couldnt-help-but-wonder.html');
    await expect(page.locator('h1')).toContainText("I Couldn't Help But Wonder");
  });

  test('Single-digit passcode normalization for Always Watched (Mini Group with ICHBWMG4)', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/always-watched-in-a-crowd.html?mode=mini');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type code without leading zero
    await page.fill("#gate-passcode-input", "ICHBWMG4");
    await page.click("#gate-passcode-submit");

    // Locked screen should vanish, content unlocked
    await page.waitForSelector('#m-unit1');
    await expect(page.locator('#m-unit1')).toBeVisible();
  });

  test('Single-digit passcode normalization for Always Watched (Private Lesson with ICHBWPL4)', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/always-watched-in-a-crowd.html?mode=private');
    await expect(page.locator('#gate-passcode-input')).toBeVisible();

    // Type code without leading zero
    await page.fill("#gate-passcode-input", "ICHBWPL4");
    await page.click("#gate-passcode-submit");

    // Locked screen should vanish, content unlocked
    await page.waitForSelector('#p-step1');
    await expect(page.locator('#p-step1')).toBeVisible();
  });
});
