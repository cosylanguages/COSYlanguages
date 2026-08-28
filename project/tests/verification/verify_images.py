from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # Scroll to Speaking Club card
    page.evaluate("document.querySelector('.event-type-card').scrollIntoView({behavior: 'smooth'})")
    page.wait_for_timeout(1000)

    # Scroll down to dynamic cards
    page.evaluate("document.querySelector('.club-card').scrollIntoView({behavior: 'smooth'})")
    page.wait_for_timeout(1000)

    # Take screenshot
    page.screenshot(path="project/tests/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
