import { test, expect } from '@playwright/test';

test.describe('COSYlanguages Centralized Entitlements API', () => {
    test.beforeEach(async ({ page }) => {
        // Load index page and dynamically inject entitlements.js to test its API in isolation
        await page.goto('http://localhost:8080/index.html');
        await page.evaluate(() => {
            return new Promise<void>((resolve) => {
                const script = document.createElement('script');
                script.src = './shared/js/core/entitlements.js';
                script.onload = () => resolve();
                document.head.appendChild(script);
            });
        });
    });

    test('should compute SHA-256 hash correctly', async ({ page }) => {
        const hash = await page.evaluate(async () => {
            return await window.COSY.entitlements.sha256("test-string");
        });
        // Correct SHA-256 hash of "test-string"
        expect(hash).toBe("ffe65f1d98fafedea3514adc956c8ada5980c6c5d2552fd61f48401aefd5c00e");
    });

    test('should report false for un-unlocked items initially', async ({ page }) => {
        const hasAccess = await page.evaluate(() => {
            return window.COSY.entitlements.check('EVENTS', 'WONDER-18', 'mini');
        });
        expect(hasAccess).toBe(false);
    });

    test('should successfully unlock with valid Wonder passcode', async ({ page }) => {
        const result = await page.evaluate(async () => {
            // Unlock with valid passcode for does-inclusive-language-make-us-equal (Draft 18)
            const success = await window.COSY.entitlements.unlock("ICHBWMG18");
            const checked = window.COSY.entitlements.check('EVENTS', 'WONDER-18', 'mini');
            return { success, checked, storage: sessionStorage.getItem("COSY-EVENTS-WONDER-18-MINI") };
        });

        expect(result.success).toBe(true);
        expect(result.checked).toBe(true);
        expect(result.storage).toBe("true");
    });

    test('should successfully unlock with single-digit unnormalized passcode', async ({ page }) => {
        const result = await page.evaluate(async () => {
            // Unlock with single digit "ICHBWMG4" for draft 04 (Always Watched in a Crowd)
            const success = await window.COSY.entitlements.unlock("ICHBWMG4");
            const checked = window.COSY.entitlements.check('EVENTS', 'WONDER-04', 'mini');
            return { success, checked, storage: sessionStorage.getItem("COSY-EVENTS-WONDER-04-MINI") };
        });

        expect(result.success).toBe(true);
        expect(result.checked).toBe(true);
        expect(result.storage).toBe("true");
    });

    test('should successfully unlock with valid KUS passcode', async ({ page }) => {
        const result = await page.evaluate(async () => {
            // Unlock with valid KUS passcode for Specimen KUS01
            const success = await window.COSY.entitlements.unlock("KUSMG01");
            const checked = window.COSY.entitlements.check('EVENTS', 'SCIENCE-KUS01', 'mini');
            return { success, checked, storage: sessionStorage.getItem("COSY-EVENTS-SCIENCE-KUS01-MINI") };
        });

        expect(result.success).toBe(true);
        expect(result.checked).toBe(true);
        expect(result.storage).toBe("true");
    });

    test('should block direct bypass attempts with namespaced strings', async ({ page }) => {
        const success = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock("COSY-EVENTS-WONDER-18-MINI");
        });
        expect(success).toBe(false);
    });

    test('should successfully mint student share link', async ({ page }) => {
        const shareUrl = await page.evaluate(() => {
            return window.COSY.entitlements.mintShareLink('EVENTS', 'WONDER-18');
        });
        expect(shareUrl).toContain("?shared=true");
    });
});
