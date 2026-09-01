from playwright.sync_api import sync_playwright

def run_verification(page):
    # Navigate to homepage
    page.goto("http://localhost:8080/index.html")
    page.wait_for_timeout(1000)

    # Scroll down to explore section
    page.evaluate("window.scrollTo(0, 500)")
    page.wait_for_timeout(800)

    # Navigate to Events Hub
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Navigate to Speaking Clubs
    page.goto("http://localhost:8080/events/speaking-clubs.html")
    page.wait_for_timeout(1000)

    # Take screenshot of Speaking Clubs Hub
    page.screenshot(path="/home/jules/verification/screenshots/speaking_clubs.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()
