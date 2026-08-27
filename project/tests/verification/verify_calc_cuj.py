from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:8080/index.html#calculator")
    page.wait_for_timeout(1000)

    # Initially, General course options are open. Click Spoken Course.
    page.locator("button:has-text('Spoken Course')").click()
    page.wait_for_timeout(800)

    # After selecting Spoken Course, active category auto-advances to duration. Select 30 min.
    page.locator("button:has-text('30 min')").click()
    page.wait_for_timeout(800)

    # Select Starter Pack (8 lessons)
    page.locator("button:has-text('8 lessons')").click()
    page.wait_for_timeout(800)

    # Select Dollar ($)
    page.locator("button:has-text('Dollar')").click()
    page.wait_for_timeout(800)

    # Take final screenshot
    page.locator("#calculator").screenshot(path="/home/jules/project/tests/verification/screenshots/calc_final.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
