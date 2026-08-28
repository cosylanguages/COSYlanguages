import { test, expect } from '@playwright/test';

test.describe('Cinema Club and Karaoke Club Dynamic Filters & Sensitivity Toggle', () => {
  test('Cinema Club Hub has live filters, sensitive content toggle, and preserved pinned series', async ({ page }) => {
    await page.goto('http://localhost:8080/events/cinema-club.html');

    // 1. Verify Pinned Challenges section exists
    const pinnedSection = page.locator('.pinned-challenges-section');
    await expect(pinnedSection).toBeVisible();

    // 2. Verify search input exists and works
    const searchInput = page.locator('#cinema-search-input');
    await expect(searchInput).toBeVisible();

    const resultCount = page.locator('#cinema-result-count');
    await expect(resultCount).toBeVisible();
    const initialText = await resultCount.textContent();
    expect(initialText).toContain('Showing');

    // Filter by search query "Odyssey"
    await searchInput.fill('Odyssey');
    await page.waitForTimeout(300);
    const searchFilteredText = await resultCount.textContent();
    expect(searchFilteredText).toContain('1');

    // Clear search
    await searchInput.fill('');
    await page.waitForTimeout(300);

    // 3. Test sensitive content toggle
    const sensitiveToggle = page.locator('#cinema-sensitive-toggle');
    await expect(sensitiveToggle).toBeVisible();

    // Toggle ON (hide sensitive)
    await sensitiveToggle.check();
    await page.waitForTimeout(300);

    // Confirm that sensitive cards are hidden
    const sensitiveCards = page.locator('#cinema-history-grid .history-session[data-sensitive="true"]');
    for (let i = 0; i < await sensitiveCards.count(); i++) {
      await expect(sensitiveCards.nth(i)).toBeHidden();
    }

    // Toggle OFF (show all)
    await sensitiveToggle.uncheck();
    await page.waitForTimeout(300);
    const textAfterShowSensitive = await resultCount.textContent();
    expect(textAfterShowSensitive).toEqual(initialText);

    // 4. Test language filter button (e.g. French 🇫🇷)
    const frBtn = page.locator('button[data-lang-filter="fr"]');
    await frBtn.click();
    await page.waitForTimeout(300);
    const frCountText = await resultCount.textContent();
    expect(frCountText).not.toEqual(initialText);
  });

  test('Karaoke Club Hub has live filters and sensitive content toggle', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/karaoke/karaoke-club.html');

    const searchInput = page.locator('#karaoke-search-input');
    await expect(searchInput).toBeVisible();

    const resultCount = page.locator('#karaoke-result-count');
    await expect(resultCount).toBeVisible();

    // Test sensitive toggle
    const sensitiveToggle = page.locator('#karaoke-sensitive-toggle');
    if (await sensitiveToggle.count() > 0) {
      await sensitiveToggle.check();
      await page.waitForTimeout(300);
      const filteredText = await resultCount.textContent();
      expect(filteredText).toContain('Showing');
    }
  });
});
