import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Comfort, Usability & Responsive Adaptation', () => {

    test('Mobile Viewport (390x844) - Floating Action Buttons do not collide or overlap mobile nav', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('http://localhost:8080/index.html');

        // Check mobile nav is visible
        const mobileNav = page.locator('.mobile-nav');
        await expect(mobileNav).toBeVisible();

        const navBox = await mobileNav.boundingBox();
        expect(navBox).not.toBeNull();
        if (!navBox) return;

        // Ensure floating action buttons sit strictly above mobile nav bottom boundary
        const dictFab = page.locator('#dict-fab');
        await expect(dictFab).toBeVisible();
        const dictBox = await dictFab.boundingBox();
        expect(dictBox).not.toBeNull();
        if (dictBox) {
            // dictFab bottom should be above or equal to mobileNav top
            expect(dictBox.y + dictBox.height).toBeLessThanOrEqual(navBox.y + 2);
        }

        const tourFab = page.locator('#cosy-tour-fab');
        await expect(tourFab).toBeVisible();
        const tourBox = await tourFab.boundingBox();
        expect(tourBox).not.toBeNull();
        if (tourBox) {
            expect(tourBox.y + tourBox.height).toBeLessThanOrEqual(navBox.y + 2);
        }

        const waFab = page.locator('.wa-fab');
        if (await waFab.isVisible()) {
            const waBox = await waFab.boundingBox();
            if (waBox) {
                expect(waBox.y + waBox.height).toBeLessThanOrEqual(navBox.y + 2);
            }
        }
    });

    test('Desktop Viewport (1280x800) - Clean desktop layout and hidden mobile nav', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto('http://localhost:8080/index.html');

        // Mobile nav should be hidden on desktop
        const mobileNav = page.locator('.mobile-nav');
        await expect(mobileNav).toBeHidden();

        // Dict fab and tour fab should be visible
        await expect(page.locator('#dict-fab')).toBeVisible();
        await expect(page.locator('#cosy-tour-fab')).toBeVisible();
    });

    test('Back To Top button appears on scroll and smoothly scrolls to top', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto('http://localhost:8080/index.html');

        const backToTop = page.locator('#back-to-top');
        // Initially should not have 'visible' class
        await expect(backToTop).not.toHaveClass(/visible/);

        // Scroll down
        await page.evaluate(() => window.scrollTo(0, 800));
        await page.waitForTimeout(300);

        // Should become visible
        await expect(backToTop).toHaveClass(/visible/);

        // Click back to top
        await backToTop.click();
        await page.waitForTimeout(400);

        const scrollY = await page.evaluate(() => window.scrollY);
        expect(scrollY).toBeLessThan(100);
    });

    test('CSS Smooth Entrance Animation & Tap Highlight Prevention', async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');

        const tapHighlight = await page.evaluate(() => {
            return window.getComputedStyle(document.body).webkitTapHighlightColor;
        });

        // Should evaluate to transparent / rgba(0, 0, 0, 0)
        expect(tapHighlight === 'transparent' || tapHighlight === 'rgba(0, 0, 0, 0)' || tapHighlight === 'rgba(0,0,0,0)').toBe(true);

        const pageTransition = await page.evaluate(() => {
            return window.getComputedStyle(document.body).transitionProperty;
        });
        expect(pageTransition).toContain('background-color');
    });

    test('Dark theme adaptation maintains high contrast and visual comfort', async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');

        // Toggle dark theme
        await page.evaluate(() => {
            document.documentElement.setAttribute('data-theme', 'dark');
        });

        const bg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
        const color = await page.evaluate(() => window.getComputedStyle(document.body).color);

        expect(bg).not.toBe('rgb(255, 255, 255)');
        expect(color).not.toBe('rgb(0, 0, 0)');
    });
});
