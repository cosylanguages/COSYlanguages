import { test, expect } from '@playwright/test';

test.describe('Karaoke Club Challenge Tabbed layout Verification', () => {
  test('Maëlle Challenge page should load with correct metadata and tab layout', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/karaoke-club/maelle-challenge.html');
    await expect(page.locator('h1')).toContainText('Maëlle Challenge');

    // 1. Duration should be exactly 90 minutes
    await expect(page.locator('.session-meta-grid').first()).toContainText('90 minutes');

    // 2. Tab buttons should exist
    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(2);
    await expect(tabBtns.nth(0)).toContainText('Toutes les machines ont le cœur');
    await expect(tabBtns.nth(1)).toContainText("je t'aime comme je t'aime");

    // 3. Tab panes should exist
    const tabPanes = page.locator('.vim-tab-pane');
    await expect(tabPanes).toHaveCount(2);

    // 4. Check that default visible tab is Toutes les machines ont le cœur and the other is hidden
    await expect(tabPanes.nth(0)).toBeVisible();
    await expect(tabPanes.nth(1)).not.toBeVisible();

    // 5. Unique, independent collapse IDs should be present
    await expect(page.locator('#vocabulary-toutes-les-machines-ont-le-coeur')).toBeVisible();
    await expect(page.locator('#vocabulary-je-taime-comme-je-taime')).toBeAttached(); // it's in the DOM but hidden in the inactive tab pane

    // 6. Click second tab and verify visibility changes
    await tabBtns.nth(1).click();
    await expect(tabPanes.nth(0)).not.toBeVisible();
    await expect(tabPanes.nth(1)).toBeVisible();

    // 7. Verify unique elements inside the second tab are now visible
    await expect(page.locator('#vocabulary-je-taime-comme-je-taime')).toBeVisible();
  });

  test('Crazy Ex-Girlfriend Challenge page should load with 26 tabs', async ({ page }) => {
    await page.goto('http://localhost:8080/events/sessions/karaoke-club/crazy-ex-girlfriend-challenge.html');
    await expect(page.locator('h1')).toContainText('Crazy Ex-Girlfriend Challenge');

    // Duration should be exactly 90 minutes
    await expect(page.locator('.session-meta-grid').first()).toContainText('90 minutes');

    const tabBtns = page.locator('.vim-tab-btn');
    await expect(tabBtns).toHaveCount(26);
    await expect(tabBtns.nth(0)).toContainText('Love Kernels');
    await expect(tabBtns.nth(1)).toContainText("Let's Generalize About Men");
    await expect(tabBtns.nth(2)).toContainText('So Maternal');
    await expect(tabBtns.nth(3)).toContainText('Face Your Fears');
    await expect(tabBtns.nth(4)).toContainText('Sexy Getting Ready Song');
    await expect(tabBtns.nth(25)).toContainText("Eleven O'Clock");

    // Click on the 3rd tab (So Maternal)
    await tabBtns.nth(2).click();
    await expect(page.locator('#vocabulary-so-maternal')).toBeVisible();
    await expect(page.locator('#vocabulary-so-maternal .vocab-word').first()).toContainText('Maternal');
  });
});
