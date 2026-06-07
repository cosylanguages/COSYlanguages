import { test, expect } from '@playwright/test';

test('Homework assignment and student view flow', async ({ page }) => {
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

    // 1. Mock Supabase responses
    await page.route('**/rest/v1/students*', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([{
                id: 'student-123',
                access_code: 'COSY-TEST',
                language: 'EN',
                level: 'A1',
                course_type: 'general',
                created_at: new Date().toISOString(),
                progress: [{ total_points: 100, streak_days: 5 }],
                homework: [
                    { id: 'hw-1', status: 'pending', task_description: 'Past Task', due_date: '2000-01-01' },
                    { id: 'hw-2', status: 'pending', task_description: 'Future Task', due_date: '2099-01-01' }
                ],
                sessions: []
            }])
        });
    });

    await page.route('**/rest/v1/homework*', async route => {
        if (route.request().method() === 'POST') {
            await route.fulfill({ status: 201, body: JSON.stringify({ success: true }) });
        } else if (route.request().method() === 'PATCH') {
            await route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
        } else {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify([
                    { id: 'hw-1', status: 'pending', task_description: 'Past Task', due_date: '2000-01-01' },
                    { id: 'hw-2', status: 'pending', task_description: 'Future Task', due_date: '2099-01-01' }
                ])
            });
        }
    });

    await page.route('**/curriculum/**', async route => {
        await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ units: [] }) });
    });

    // 2. Test Teacher Dashboard
    await page.goto('http://localhost:8080/portal/index.html');
    await page.locator('#mp-gateway-code').fill('ARTPOP195430');
    await page.click('button:has-text("Unlock →")');

    await expect(page.locator('h1:has-text("God Mode Dashboard")')).toBeVisible();

    // Click the student row to expand
    await page.click('text=COSY-TEST');
    await expect(page.locator('#expand-student-123')).toBeVisible();

    // Verify homework list in expanded view
    await expect(page.locator('#expand-student-123 >> text=Past Task')).toBeVisible();

    // Verify Assign Homework form
    await page.locator('#hw-task-student-123').fill('New Task');
    await page.locator('#hw-due-student-123').fill('2025-12-31');

    // 3. Test Student Dashboard
    await page.evaluate(() => {
        sessionStorage.setItem('cosy_student', JSON.stringify({
            id: 'student-123',
            language: 'EN',
            level: 'A1',
            course_type: 'general',
            code: 'COSY-TEST',
            name: 'Test Student'
        }));
        localStorage.setItem('cosy_mode', 'student');
    });

    await page.goto('http://localhost:8080/portal/student/index.html');

    // Wait for student dashboard to load
    await expect(page.locator('#wh')).toContainText('Welcome back');

    // Switch to homework tab
    await page.click('.nav-item[data-translate-key="nav_homework"]');

    // Verify homework items
    await expect(page.locator('#homework-list >> text=Past Task')).toBeVisible();

    // Verify Overdue indicator
    await expect(page.locator('text=⚠️ OVERDUE')).toBeVisible();
});
