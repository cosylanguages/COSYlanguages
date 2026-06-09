import { test, expect } from '@playwright/test';

test('teacher dashboard mistake logging', async ({ page }) => {
    // Mock Supabase
    await page.addInitScript(() => {
        window.supabase = {
            from: (table) => {
                if (table === 'students') {
                    return {
                        select: () => ({
                            order: () => Promise.resolve({
                                data: [{
                                    id: 'student-1',
                                    access_code: 'TEST-EN-A1-GEN',
                                    language: 'en',
                                    level: 'A1',
                                    course_type: 'general',
                                    progressme_id: 'pm-1',
                                    created_at: new Date().toISOString(),
                                    progress: [{ total_points: 100, streak_days: 5, last_active: '2023-01-01', current_unit: 'Unit 1' }],
                                    homework: [],
                                    sessions: [{
                                        id: 'session-1',
                                        scheduled_at: new Date().toISOString(),
                                        status: 'scheduled',
                                        lesson_notes: 'Notes',
                                        mistake_log: ['mistake 1']
                                    }]
                                }],
                                error: null
                            })
                        })
                    };
                }
                if (table === 'sessions') {
                    return {
                        select: () => ({
                            eq: () => ({
                                single: () => Promise.resolve({
                                    data: { id: 'session-1', mistake_log: ['mistake 1'] },
                                    error: null
                                })
                            })
                        }),
                        update: (data) => ({
                            eq: (column, value) => {
                                console.log(`Supabase update: table=sessions, data=${JSON.stringify(data)}, eq=${column}:${value}`);
                                return Promise.resolve({ error: null });
                            }
                        })
                    };
                }
                return {
                    select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
                    insert: () => Promise.resolve({ error: null }),
                    update: () => ({ eq: () => Promise.resolve({ error: null }) })
                };
            }
        };
        // Mock COSY
        window.COSY = {
            showToast: (msg) => console.log('Toast:', msg),
            isAdmin: () => false,
            mode: 'teacher',
            getPrefix: () => '../../'
        };
        window.cosyDays = { state: { students: [] } };
    });

    await page.goto('http://localhost:8080/portal/teacher/index.html');

    // Manually trigger dashboard load if needed
    await page.evaluate(async () => {
        if (window.loadTeacherDashboard) {
            await window.loadTeacherDashboard();
        }
    });

    // Wait for the table to be populated
    await page.waitForSelector('tr[data-student-id="student-1"]', { timeout: 5000 });

    // Expand student row
    await page.click('tr[data-student-id="student-1"]');

    // Check if mistake logging section is visible
    const logMistakeHeader = page.locator('h5:has-text("Log Mistake")');
    await expect(logMistakeHeader).toBeVisible();

    // Log a mistake
    const mistakeInput = page.locator('#mistake-input-session-1');
    await mistakeInput.fill('new mistake');

    // Intercept console logs to verify Supabase call
    const supabaseUpdatePromise = new Promise(resolve => {
        page.on('console', msg => {
            if (msg.text().includes('Supabase update: table=sessions')) {
                resolve(msg.text());
            }
        });
    });

    await page.click('button:has-text("Log ↗")');

    const updateLog = await supabaseUpdatePromise;
    expect(updateLog).toContain('"mistake_log":["mistake 1","new mistake"]');

    await page.screenshot({ path: 'mistake_logging_verification.png' });
});
