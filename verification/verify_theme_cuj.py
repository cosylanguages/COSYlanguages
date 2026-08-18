from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to events index
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Click theme toggle button in header
    toggle = page.locator("#cosy-nav .theme-toggle-btn").first
    toggle.click()
    page.wait_for_timeout(1000)

    # Navigate to Mind Matters
    page.goto("http://localhost:8080/apps/premium-events/clubs/mind/mind-matters.html")
    page.wait_for_timeout(1000)

    # Take screenshot of dark mode page
    page.screenshot(path="/home/jules/verification/screenshots/dark_mode_verification.png")
    page.wait_for_timeout(1000)

    # Toggle back to light mode
    page.locator("#cosy-nav .theme-toggle-btn").first.click()
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
