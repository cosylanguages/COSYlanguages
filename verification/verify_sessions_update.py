from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to Keeping Up with Science page
    page.goto("http://localhost:8080/events/keeping-up-with-science.html")
    page.wait_for_timeout(1000)

    # Scroll down to Past Sessions
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    # Take screenshot of past sessions grid
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    page.screenshot(path="/home/jules/verification/screenshots/science_sessions.png")

    # Navigate to a session detail page
    page.goto("http://localhost:8080/events/sessions/keeping-up-with-science/grandmother-evolutionary-mystery.html")
    page.wait_for_timeout(1000)

    # Take screenshot of session detail page
    page.screenshot(path="/home/jules/verification/screenshots/grandmother_session_detail.png")
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
