import { test, expect } from '@playwright/test';

test.describe('Hybrid & Community Workspace ("Beyond the Screen 🌿")', () => {

  test('Landing page /hybrid/index.html loads correctly with hero, reflective block, and cards', async ({ page }) => {
    await page.goto('http://localhost:8080/hybrid/index.html');
    await expect(page).toHaveTitle(/Beyond the Screen/);

    // Verify hero title
    const heroTitle = page.locator('header.hero h1');
    await expect(heroTitle).toBeVisible();

    // Verify Why this exists reflective section
    const whyBlock = page.locator('#why-this-exists');
    await expect(whyBlock).toBeVisible();
    await expect(whyBlock).toContainText('I couldn\'t help but wonder... why do we call it "screen time"');

    // Verify 3 feature cards
    const bridgeCard = page.locator('a[href="bridge.html"]');
    const zineCard = page.locator('a[href="zine.html"]');
    const radioCard = page.locator('a[href="radio.html"]');

    await expect(bridgeCard.first()).toBeVisible();
    await expect(zineCard.first()).toBeVisible();
    await expect(radioCard.first()).toBeVisible();

    // Verify footer link to hybrid
    const footerLink = page.locator('footer a[href="index.html"], footer a[href="hybrid/index.html"], footer a[href*="hybrid"]');
    await expect(footerLink.first()).toBeVisible();
  });

  test('Bridge Tools /hybrid/bridge.html renders and QR generator works', async ({ page }) => {
    await page.goto('http://localhost:8080/hybrid/bridge.html');
    await expect(page).toHaveTitle(/Bridge Tools/);

    // Verify Why this exists reflective section
    const whyBlock = page.locator('#why-this-exists');
    await expect(whyBlock).toBeVisible();
    await expect(whyBlock).toContainText('I couldn\'t help but wonder... how many flashcards have we ever printed');

    // Verify QR generator input
    const qrInput = page.locator('#qr-input-url');
    await expect(qrInput).toBeVisible();

    // Verify QR output container
    const qrTarget = page.locator('#qr-code-target');
    await expect(qrTarget).toBeVisible();

    // Click preset button
    const presetBtn = page.locator('button.qr-pill').first();
    await presetBtn.click();

    // Check QR display updated
    const urlDisplay = page.locator('#qr-url-display');
    await expect(urlDisplay).not.toBeEmpty();

    // Check links to printables hub
    await expect(page.locator('a[href="../print-cards.html"]')).toBeVisible();
    await expect(page.locator('a[href="../print-zine.html"]')).toBeVisible();
    await expect(page.locator('a[href="../print-box.html"]')).toBeVisible();
    await expect(page.locator('a[href="../print-boardgame.html"]')).toBeVisible();
  });

  test('COSYzine /hybrid/zine.html loads with issue cards and submission CTA', async ({ page }) => {
    await page.goto('http://localhost:8080/hybrid/zine.html');
    await expect(page).toHaveTitle(/COSYzine/);

    // Verify Why this exists reflective section
    const whyBlock = page.locator('#why-this-exists');
    await expect(whyBlock).toBeVisible();
    await expect(whyBlock).toContainText('I couldn\'t help but wonder... at what point does a learner stop reading');

    // Verify Learner Voices mailto link
    const mailtoBtn = page.locator('a[href*="mailto:cosylanguages@gmail.com"]');
    await expect(mailtoBtn.first()).toBeVisible();

    // Verify link to foldable zines compiler
    const zineCompilerLink = page.locator('a[href="../print-zine.html"]');
    await expect(zineCompilerLink).toBeVisible();
  });

  test('COSY Radio /hybrid/radio.html loads with episode list and Speaking Club cross-link', async ({ page }) => {
    await page.goto('http://localhost:8080/hybrid/radio.html');
    await expect(page).toHaveTitle(/COSY Radio/);

    // Verify Why this exists reflective section
    const whyBlock = page.locator('#why-this-exists');
    await expect(whyBlock).toBeVisible();
    await expect(whyBlock).toContainText('I couldn\'t help but wonder... why do we ask learners to understand native speech');

    // Verify episode cards
    const episodeCards = page.locator('.episode-card');
    await expect(episodeCards).toHaveCount(4);

    // Verify Speaking Clubs cross-link
    const clubLink = page.locator('a[href="../events/index.html"]');
    await expect(clubLink).toBeVisible();
  });

});
