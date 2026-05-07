
import { test, expect } from '@playwright/test';

test.describe('One URL, Three Realities - Verification', () => {

  test('Mode 1: Free Visitor sees marketing, not student dashboard', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // Marketing sections should be visible
    await expect(page.locator('header.hero')).toBeVisible();
    await expect(page.locator('#calculator')).toBeVisible();
    await expect(page.locator('#how')).toBeVisible();

    // Student dashboard should be hidden
    await expect(page.locator('.student-dashboard')).not.toBeVisible();

    // Nav should show free links
    await expect(page.locator('#cosy-nav')).toContainText('Home');
    await expect(page.locator('#cosy-nav')).toContainText('Practice');
    await expect(page.locator('#cosy-nav')).toContainText('Games');
  });

  test('Mode 2: Student sees dashboard, not marketing', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // Inject student state
    await page.evaluate(() => {
      localStorage.setItem('cosy_mode', 'student');
      localStorage.setItem('cosy_student', JSON.stringify({
        code: 'COSY-DEMO',
        name: 'Demo Student',
        lang: 'en',
        level: 'A1',
        course: 'general'
      }));
      window.location.reload();
    });

    // Marketing sections should be HIDDEN
    await expect(page.locator('header.hero')).not.toBeVisible();
    await expect(page.locator('#calculator')).not.toBeVisible();

    // Student dashboard should be VISIBLE
    await expect(page.locator('.student-dashboard')).toBeVisible();
    await expect(page.locator('.student-dashboard')).toContainText('Welcome back!');

    // Nav should show student links
    await expect(page.locator('#cosy-nav')).toContainText('Roadmap');
    await expect(page.locator('#cosy-nav')).toContainText('Vocabulary');
    await expect(page.locator('#cosy-nav')).toContainText('Homework');
  });

  test('Mode 3: Teacher sees teacher nav, marketing hidden', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // Inject teacher state
    await page.evaluate(() => {
      localStorage.setItem('cosy_mode', 'teacher');
      localStorage.setItem('cosy_teacher', JSON.stringify({
        code: 'TEACH-DEMO',
        name: 'Alex',
        role: 'teacher'
      }));
      window.location.reload();
    });

    // Marketing HIDDEN
    await expect(page.locator('header.hero')).not.toBeVisible();

    // Nav should show teacher links
    await expect(page.locator('#cosy-nav')).toContainText('Students');
    await expect(page.locator('#cosy-nav')).toContainText('Assign');
  });

  test('Calculator functionality (Free mode)', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // Ensure calculator is visible
    const calc = page.locator('#calculator');
    await expect(calc).toBeVisible();

    // Change pack
    await page.selectOption('#calc-pack', '32');

    // Check if price updates (it should have a value instead of "--")
    const price = page.locator('#calc-total');
    await expect(price).not.toHaveText('—');
  });

});
