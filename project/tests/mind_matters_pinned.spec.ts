import { test, expect } from '@playwright/test';

test.describe('Mind Matters Pinned Batches Verification', () => {
  test('Page loads correctly and showcases four pinned batches', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/mind/mind-matters.html');

    // 1. Verify page title
    await expect(page).toHaveTitle(/Mind Matters 🧠 — COSYlanguages/);

    // 2. Verify we have exactly 4 pinned batches under the pinned section
    const pinnedSection = page.locator('.pinned-challenges-section');
    await expect(pinnedSection).toBeVisible();

    const pinnedBatches = pinnedSection.locator('.history-session');
    await expect(pinnedBatches).toHaveCount(4);

    // 3. Verify Batch 3 ("Effect") content & links
    const batch3 = pinnedBatches.nth(2); // 3rd item (index 2)
    await expect(batch3.locator('h4')).toHaveText(/The "Effect" & Subconscious Conditioning Series/);

    const batch3Links = batch3.locator('a');
    // Ensure all target links are present
    const linkUrls3 = await batch3Links.evaluateAll(links => links.map(l => (l as HTMLAnchorElement).pathname));

    // Check for bye-now intermediate, bye-now upper-intermediate, and benjamin-franklin
    expect(linkUrls3.some(url => url.includes('the-bye-now-effect-intermediate.html'))).toBe(true);
    expect(linkUrls3.some(url => url.includes('the-bye-now-effect-upper-intermediate.html'))).toBe(true);
    expect(linkUrls3.some(url => url.includes('benjamin-franklin-effect.html'))).toBe(true);

    // 4. Verify Batch 4 ("Bias") content & links
    const batch4 = pinnedBatches.nth(3); // 4th item (index 3)
    await expect(batch4.locator('h4')).toHaveText(/The "Bias" & Cognitive Shortcuts Series/);

    const batch4Links = batch4.locator('a');
    const linkUrls4 = await batch4Links.evaluateAll(links => links.map(l => (l as HTMLAnchorElement).pathname));

    // Check for maze-of-biases and psychology-of-action-bias
    expect(linkUrls4.some(url => url.includes('maze-of-biases.html'))).toBe(true);
    expect(linkUrls4.some(url => url.includes('psychology-of-action-bias.html'))).toBe(true);

    // 5. Verify level filter integration
    // Clicking B2 level button
    const b2Button = page.locator('.club-filters-level .filter-btn[data-level="b2"]');
    await b2Button.click();

    // Batch 3 is B1/B2, so it should be visible under B2
    await expect(batch3).toBeVisible();
    // Batch 4 is B1/C1, so it should be hidden under B2
    await expect(batch4).toBeHidden();

    // Clicking C1 level button
    const c1Button = page.locator('.club-filters-level .filter-btn[data-level="c1"]');
    await c1Button.click();

    // Batch 3 is B1/B2, so it should be hidden under C1
    await expect(batch3).toBeHidden();
    // Batch 4 is B1/C1, so it should be visible under C1
    await expect(batch4).toBeVisible();
  });
});
