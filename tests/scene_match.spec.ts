import { test, expect } from '@playwright/test';

test.describe('Scene Match Game (/games/scene_match/)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/games/scene_match/index.html');
  });

  test('Starts game and loads initial scene', async ({ page }) => {
    await page.click('.btn-start-game');
    await expect(page.locator('.sm-container')).toBeVisible();
    await expect(page.locator('.sm-svg-scene')).toBeVisible();
    await expect(page.locator('.sm-tab-btn').first()).toHaveClass(/active/);
  });

  test('CEFR Level selection filters visible room tabs on start', async ({ page }) => {
    await page.selectOption('#sm-s-level', 'A2');
    await page.click('.btn-start-game');

    await expect(page.locator('.sm-container')).toBeVisible();
    const activeTab = page.locator('.sm-tab-btn.active');
    await expect(activeTab).toContainText('City');
    await expect(activeTab).toContainText('[A2]');
  });

  test('Open World Door Navigation switches active scene', async ({ page }) => {
    await page.click('.btn-start-game');

    // On apartment scene, click door to kitchen or city
    const doors = page.locator('.sm-door-hotspot');
    await expect(doors.first()).toBeVisible();
    await doors.first().click();

    // Verify scene tab changes
    await expect(page.locator('.sm-tab-btn.active')).toBeVisible();
  });

  test('Correct match locks hotspot, pins label, and disables word button', async ({ page }) => {
    await page.click('.btn-start-game');

    // Select the "Sofa" word button
    const sofaBtn = page.locator('#word-btn-sofa');
    await expect(sofaBtn).toBeVisible();
    await sofaBtn.click();
    await expect(sofaBtn).toHaveClass(/selected/);

    // Click matching hotspot #hs-sofa
    const sofaHotspot = page.locator('#hs-sofa');
    await sofaHotspot.click();

    // Verify hotspot locks and button is disabled
    await expect(sofaHotspot).toHaveClass(/matched/);
    await expect(sofaBtn).toBeDisabled();

    // Verify label is pinned on the stage
    const pinnedLabel = page.locator('#pinned-label-sofa');
    await expect(pinnedLabel).toBeVisible();
    await expect(pinnedLabel.locator('text')).toHaveText('Sofa');
  });

  test('Wrong match triggers shake animation without locking hotspot', async ({ page }) => {
    await page.click('.btn-start-game');

    // Select "Sofa" word
    const sofaBtn = page.locator('#word-btn-sofa');
    await sofaBtn.click();

    // Click wrong hotspot #hs-tv
    const tvHotspot = page.locator('#hs-tv');
    await tvHotspot.click();

    // TV hotspot should NOT be matched
    await expect(tvHotspot).not.toHaveClass(/matched/);
    await expect(sofaBtn).not.toBeDisabled();
  });

  test('Language switch updates both vocabulary word bank and UI chrome text', async ({ page }) => {
    // Select French on setup screen
    await page.selectOption('#sm-s-lang', 'fr');
    await page.click('.btn-start-game');

    // Verify UI chrome text is in French
    await expect(page.locator('.sm-instruction')).toContainText('Sélectionnez un mot');
    await expect(page.locator('.sm-bank-title')).toContainText('Sélectionnez un mot :');
    await expect(page.locator('#sm-p-text')).toContainText('Trouvés:');

    // Verify word bank contains French translations
    const canapeBtn = page.locator('#word-btn-sofa');
    await expect(canapeBtn).toContainText('Canapé');
  });

  test('Completing all matches triggers completion overlay state at 100%', async ({ page }) => {
    await page.click('.btn-start-game');

    // Fast-track match all items in all active scenes
    await page.evaluate(() => {
      const activeKeys = window.COSY_GAME.getFilteredSceneKeys();
      activeKeys.forEach(key => {
        const hsIds = window.COSY_SCENE_DATA[key].hotspots.map(h => h.id);
        window.COSY_GAME.sceneMatches[key] = new Set(hsIds);
      });
      window.COSY_GAME.updateProgress();
      window.COSY_GAME.checkOverallCompletion();
    });

    // Verify completion overlay card appears
    await expect(page.locator('.sm-completion-card')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.sm-completion-title')).toContainText('Complete!');
  });
});
