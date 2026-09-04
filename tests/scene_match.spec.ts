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

    // Fast-track match all items in all scenes
    await page.evaluate(() => {
      window.COSY_GAME.sceneMatches.apartment = new Set(['sofa', 'tv', 'coffee_table', 'plant', 'armchair', 'bookshelf', 'rug', 'window', 'lamp', 'painting']);
      window.COSY_GAME.sceneMatches.bedroom = new Set(['bed', 'wardrobe', 'pillow', 'blanket', 'mirror', 'nightstand', 'lamp', 'curtains']);
      window.COSY_GAME.sceneMatches.kitchen = new Set(['fridge', 'oven', 'sink', 'cupboard', 'kettle', 'table', 'chair', 'pot']);
      window.COSY_GAME.sceneMatches.bathroom = new Set(['bathtub', 'shower', 'sink', 'toilet', 'mirror', 'towel', 'soap', 'toothbrush', 'hairdryer']);
      window.COSY_GAME.sceneMatches.routine = new Set(['alarm_clock', 'wake_up', 'breakfast', 'bus_stop', 'office', 'dinner', 'relax', 'sleep']);
      window.COSY_GAME.sceneMatches.seasons = new Set(['spring', 'summer', 'autumn', 'winter', 'flower', 'sun', 'rain', 'snow']);
      window.COSY_GAME.sceneMatches.clothing = new Set(['shirt', 'jacket', 'dress', 'trousers', 'skirt', 'shoes', 'socks', 'hat']);
      window.COSY_GAME.sceneMatches.animals = new Set(['cow', 'horse', 'sheep', 'pig', 'dog', 'cat', 'duck', 'bird']);
      window.COSY_GAME.sceneMatches.city = new Set(['school', 'hospital', 'supermarket', 'bank', 'restaurant', 'bus_stop', 'park', 'library']);
      window.COSY_GAME.sceneMatches.cafe = new Set(['coffee_machine', 'menu_board', 'counter', 'croissant', 'cake', 'table', 'coffee_cup']);
      window.COSY_GAME.sceneMatches.market = new Set(['apples', 'bananas', 'fish', 'scale', 'canopy']);
      window.COSY_GAME.sceneMatches.school_office = new Set(['blackboard', 'laptop', 'desk', 'books', 'backpack']);
      window.COSY_GAME.updateProgress();
      window.COSY_GAME.checkOverallCompletion();
    });

    // Verify completion overlay card appears
    await expect(page.locator('.sm-completion-card')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.sm-completion-title')).toContainText('Complete!');
  });
});
