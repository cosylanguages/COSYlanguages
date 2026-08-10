import { test, expect } from '@playwright/test';

async function loadPasscodesAndEntitlements(page) {
    await page.evaluate(async () => {
        if (window.COSY_PASSCODES && window.COSY && window.COSY.entitlements) return;

        // Load passcodes.js
        const script = document.createElement('script');
        script.src = '/js/core/passcodes.js';
        await new Promise((resolve) => {
            script.onload = resolve;
            document.head.appendChild(script);
        });

        // Wait for entitlements to load dynamically
        for (let i = 0; i < 20; i++) {
            if (window.COSY && window.COSY.entitlements) return;
            await new Promise(r => setTimeout(r, 50));
        }
    });
}

test.describe('COSY Cryptographic Entitlements & Gateway', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the index page which loads the basic environment
        await page.goto('http://localhost:8080/index.html');
        // Clear storage to prevent cross-test leakage
        await page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    });

    test('should load passcodes and entitlements module correctly', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        // Verify window.COSY.entitlements exists
        const exists = await page.evaluate(() => {
            return typeof window.COSY !== 'undefined' && typeof window.COSY.entitlements !== 'undefined';
        });
        expect(exists).toBe(true);

        // Verify window.COSY_PASSCODES exists
        const legacyExists = await page.evaluate(() => {
            return typeof window.COSY_PASSCODES !== 'undefined';
        });
        expect(legacyExists).toBe(true);
    });

    test('COSY.entitlements.check should enforce authorization gates and support ?shared=true bypass', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        // 1. Initial check is false
        let authorized = await page.evaluate(() => {
            return window.COSY.entitlements.check('EVENTS', 'WONDER-04', 'MINIGROUP');
        });
        expect(authorized).toBe(false);

        // 2. Query param ?shared=true bypasses the gate
        await page.goto('http://localhost:8080/index.html?shared=true');
        await loadPasscodesAndEntitlements(page); // load it after navigation
        authorized = await page.evaluate(() => {
            return window.COSY.entitlements.check('EVENTS', 'WONDER-04', 'MINIGROUP');
        });
        expect(authorized).toBe(true);

        // Go back to standard URL
        await page.goto('http://localhost:8080/index.html');
        await loadPasscodesAndEntitlements(page);

        // 3. Unlocked item returns true
        await page.evaluate(() => {
            sessionStorage.setItem('COSY-EVENTS-WONDER-04-MINIGROUP', 'true');
        });
        authorized = await page.evaluate(() => {
            return window.COSY.entitlements.check('EVENTS', 'WONDER-04', 'MINIGROUP');
        });
        expect(authorized).toBe(true);
    });

    test('COSY.entitlements.check should handle case insensitivity and tier normalizations', async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');
        await loadPasscodesAndEntitlements(page);

        await page.evaluate(() => {
            // Set normalized storage key
            sessionStorage.setItem('COSY-EVENTS-WONDER-04-MINIGROUP', 'true');
        });

        // Querying with lower-case and abbreviated 'mini' should resolve to MINIGROUP and return true
        const authorized = await page.evaluate(() => {
            return window.COSY.entitlements.check('events', 'wonder-04', 'mini');
        });
        expect(authorized).toBe(true);
    });

    test('COSY.entitlements.unlock should correctly verify valid Wonder and KUS passcodes with legacy fallbacks', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        // 1. Unlock valid Wonder Club Mini Group passcode (unpadded/single digit)
        // ICHBWMG4 -> normalized to ICHBWMG04
        let result = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock('ICHBWMG4');
        });
        expect(result.success).toBe(true);
        expect(result.productKey).toBe('EVENTS');
        expect(result.subproduct).toBe('WONDER-04');
        expect(result.tier).toBe('MINIGROUP');

        // Verify storage keys (both namespaced and legacy keys are set)
        const storageValues = await page.evaluate(() => {
            return {
                namespaced: sessionStorage.getItem('COSY-EVENTS-WONDER-04-MINIGROUP'),
                legacy: sessionStorage.getItem('cosy_wonder_auth_draft_04_mini')
            };
        });
        expect(storageValues.namespaced).toBe('true');
        expect(storageValues.legacy).toBe('true');

        // 2. Unlock valid KUS passcode (KUS01 private lesson -> KUSPL1 / KUSPL01)
        result = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock('KUSPL1');
        });
        expect(result.success).toBe(true);
        expect(result.subproduct).toBe('KUS-KUS01');
        expect(result.tier).toBe('PRIVATE');

        const kusStorageValues = await page.evaluate(() => {
            return {
                namespaced: sessionStorage.getItem('COSY-EVENTS-KUS-KUS01-PRIVATE'),
                legacy: sessionStorage.getItem('cosy_science_auth_KUS01_private')
            };
        });
        expect(kusStorageValues.namespaced).toBe('true');
        expect(kusStorageValues.legacy).toBe('true');

        // 3. Invalid passcode returns success: false
        result = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock('INVALIDCODE');
        });
        expect(result.success).toBe(false);
    });

    test('COSY.entitlements.unlock should grant license keys matching the pattern', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        // Enter offline license key COSY-EVENTS-KARAOKE-FULL
        const result = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock('COSY-EVENTS-KARAOKE-FULL');
        });
        expect(result.success).toBe(true);
        expect(result.productKey).toBe('EVENTS');
        expect(result.subproduct).toBe('KARAOKE');
        expect(result.tier).toBe('FULL');
        expect(result.isLicense).toBe(true);

        const storageVal = await page.evaluate(() => {
            return localStorage.getItem('COSY-EVENTS-KARAOKE-FULL');
        });
        expect(storageVal).toBe('true');
    });

    test('COSY.entitlements.unlock should block direct storage key bypass as a raw passcode', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        // Entering 'COSY-EVENTS-WONDER-04-MINIGROUP' as raw input to bypass security should fail
        const result = await page.evaluate(async () => {
            return await window.COSY.entitlements.unlock('COSY-EVENTS-WONDER-04-MINIGROUP');
        });
        expect(result.success).toBe(false);
    });

    test('COSY.entitlements.mintShareLink should generate student bypass link', async ({ page }) => {
        await loadPasscodesAndEntitlements(page);

        const shareLink = await page.evaluate(() => {
            return window.COSY.entitlements.mintShareLink('EVENTS', 'WONDER-04');
        });
        expect(shareLink).toContain('?shared=true');
    });

    test('window.COSY_PASSCODES wrapper should provide seamless backward compatibility', async ({ page }) => {
        // Verify getCurrentDraftKey matches page filename
        await page.goto('http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/always-watched-in-a-crowd.html');
        // Because that page already loads passcodes.js (which now has entitlements + COSY_PASSCODES), we don't even need to call loadPasscodesAndEntitlements!

        const draftKey = await page.evaluate(() => {
            return window.COSY_PASSCODES.getCurrentDraftKey();
        });
        expect(draftKey).toBe('04');

        // Check isAuthorized maps to window.COSY.entitlements.check
        let authorized = await page.evaluate(() => {
            return window.COSY_PASSCODES.isAuthorized('mini');
        });
        expect(authorized).toBe(false);

        // Unlock via old verifyPasscode
        const success = await page.evaluate(async () => {
            return await window.COSY_PASSCODES.verifyPasscode('ICHBWMG4', 'mini');
        });
        expect(success).toBe(true);

        authorized = await page.evaluate(() => {
            return window.COSY_PASSCODES.isAuthorized('mini');
        });
        expect(authorized).toBe(true);
    });
});
