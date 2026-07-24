from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:8080")
    page.wait_for_timeout(500)

    # Click theme toggle button to turn on dark theme
    page.locator(".theme-toggle-btn").click()
    page.wait_for_timeout(1000)

    # Go to placement quiz
    page.goto("http://localhost:8080/placement-quiz.html")
    page.wait_for_timeout(1000)

    # Click first language choice (e.g., English or French option)
    page.locator(".lang-option").first.click()
    page.wait_for_timeout(1000)

    # Take screenshot of placement quiz in dark theme
    page.screenshot(path="/home/jules/verification/screenshots/verification_quiz.png")

    # Go to classroom synchronizer
    page.goto("http://localhost:8080/classroom-sync.html")
    page.wait_for_timeout(1000)

    # Take screenshot of classroom-sync in dark theme
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
