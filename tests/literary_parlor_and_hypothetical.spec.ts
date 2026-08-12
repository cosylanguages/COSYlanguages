import { test, expect } from '@playwright/test';

test.describe('Long Reads (Literary Parlor) Club Verification', () => {
  test('Long Reads Hub loads with interactive Typewriter Ledger widget', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/long-reads/long-reads.html');
    await expect(page.locator('h1')).toContainText('Long Reads');
    await expect(page.locator('.club-main')).toContainText('Catherine Price');

    // 1. Verify Book Club Ledger widget exists
    const ledger = page.locator('#ledger-widget');
    await expect(ledger).toBeVisible();
    await expect(ledger.locator('.ledger-header')).toContainText('Literary Parlor');

    // 2. Type into the Ledger console
    const input = page.locator('#ledger-input');
    await expect(input).toBeVisible();
    await input.fill('dopamine');

    const submitBtn = page.locator('#ledger-submit-btn');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // 3. Verify interactive reply on typewriter screen
    const screenText = page.locator('#ledger-screen');
    await expect(screenText).toContainText('Catherine Price');
  });

  test('Long Reads Session 1 page loads with curriculum banner and vocabulary', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/long-reads/sessions/long-reads/designed-to-addict.html');
    await expect(page.locator('h1')).toContainText('Designed to Addict & Dopamine');

    // 1. Check breadcrumbs are present and correct
    await expect(page.locator('.cosy-breadcrumbs')).toBeVisible();
    await expect(page.locator('.cosy-breadcrumbs')).toContainText('Long Reads');

    // 2. Check active curriculum breakdown banner
    await expect(page.locator('h3:has-text("Active Book Curriculum Breakdown")')).toBeVisible();
    await expect(page.locator('.content-container')).toContainText('Chapter 1: The Slot Machine in Your Pocket');

    // 3. Verify vocabulary grid exists
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#vocabulary .vocab-card').first().locator('.vocab-word')).toContainText('Addictive');
  });

  test('Long Reads Session 2 page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/long-reads/sessions/long-reads/attention-economy.html');
    await expect(page.locator('h1')).toContainText('The Attention Economy & Social Tricks');
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#vocabulary .vocab-card').first().locator('.vocab-word')).toContainText('Attention');
  });
});

test.describe('If You Were Club Verification', () => {
  test('If You Were Hub loads past sessions with level/lang filters', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/if-you-were/if-you-were.html');
    await expect(page.locator('h1')).toContainText('If You Were');

    // 1. Past sessions cards should exist
    const cards = page.locator('.life-balance-card');
    await expect(cards).toHaveCount(5);

    // 2. Filters should be interactable
    const levelBtns = page.locator('.club-filters-level .filter-btn');
    await expect(levelBtns).toHaveCount(5); // All, A2, B1, B2, C1

    // Click 'B2' filter
    await levelBtns.locator('text=B2').click();

    // Only B2 sessions should remain visible
    const visibleCards = page.locator('.life-balance-card:visible');
    const counts = await visibleCards.count();
    expect(counts).toBeLessThan(5);
  });

  test('If You Were Deaf session page loads with Perspective Mirror box and Subjunctive anchor', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/if-you-were/sessions/if-you-were/if-you-were-deaf.html');
    await expect(page.locator('h1')).toContainText('If You Were Deaf');

    // 1. Perspective Mirror Box exists
    const mirrorBox = page.locator('.perspective-mirror-box');
    await expect(mirrorBox).toBeVisible();
    await expect(mirrorBox.locator('h3')).toContainText('Perspective Mirror Box');

    // 2. Syntactic Anchor exists with Subjunctive instruction
    await expect(mirrorBox).toContainText('Speculative Syntactic Anchor');
    await expect(mirrorBox).toContainText('Subjunctive Mood');

    // 3. Rounds structure exists with 10 questions each
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
    await expect(page.locator('#s-r1 .round-item')).toHaveCount(10);
    await expect(page.locator('#s-r2 .round-item')).toHaveCount(10);

    // 4. Closing mic drop rituals and Teacher notes exist
    await expect(page.locator('#s-closing')).toBeVisible();
    await expect(page.locator('#s-mistakes')).toBeVisible();
    await expect(page.locator('#s-mistakes')).toContainText('Linguistic Corrections');
  });

  test('If You Were Blind session page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/nights/if-you-were/sessions/if-you-were/if-you-were-blind.html');
    await expect(page.locator('h1')).toContainText('If You Were Blind');
    await expect(page.locator('.perspective-mirror-box')).toBeVisible();
    await expect(page.locator('#vocabulary .vocab-card')).toHaveCount(10);
  });
});

test.describe('I Couldn\'t Help But Wonder Premium elements Verification', () => {
  test('Wonder Club Hub loads correctly with retro polaroid and background music toggle', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html');
    await expect(page.locator('h1')).toContainText("I Couldn't Help But Wonder");

    // 1. Verify Retro Polaroid Frames are rendered with captions and simulated washi-tape overlay
    const polaroidFrame = page.locator('.wonder-polaroid-frame').first();
    await expect(polaroidFrame).toBeVisible();
    await expect(polaroidFrame.locator('.washi-tape')).toBeAttached();
    await expect(polaroidFrame.locator('.polaroid-caption')).toBeVisible();

    // 2. Verify Background Music Toggle is present and functional in the header
    const musicToggle = page.locator('#wonder-music-toggle-btn');
    await expect(musicToggle).toBeVisible();
    await expect(musicToggle).toContainText('Music');
  });

  test('Wonder Session page loads and dynamically compiles all 3 access modes', async ({ page }) => {
    await page.goto('http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/is-bad-weather-gods-anger.html');
    await expect(page.locator('h1')).toContainText('Is Bad Weather Really About Gods Being Angry?');

    // 1. Verify that 18+ sensitive warning and language switcher placeholder are attached
    await expect(page.locator('.sensitive-topic-warning')).toBeVisible();
    await expect(page.locator('.cosy-session-switcher-placeholder')).toBeAttached();

    // 2. Verify that the 3-mode format switcher is fully rendered and clickable
    const formatSwitcher = page.locator('.wonder-format-switcher');
    await expect(formatSwitcher).toBeVisible();

    const bigGroupBtn = formatSwitcher.locator('.btn-big');
    const miniGroupBtn = formatSwitcher.locator('.btn-mini');
    const privateBtn = formatSwitcher.locator('.btn-private');

    await expect(bigGroupBtn).toBeVisible();
    await expect(miniGroupBtn).toBeVisible();
    await expect(privateBtn).toBeVisible();
  });
});
