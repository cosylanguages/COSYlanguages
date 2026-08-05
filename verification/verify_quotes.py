from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate directly to Socrates session in English
    page.goto("http://localhost:8080/events/sessions/the-greatest-quotes/wisdom-of-socrates.html")
    page.wait_for_timeout(1000)

    # Scroll down slightly to center the description
    page.evaluate("window.scrollBy(0, 300);")
    page.wait_for_timeout(1000)

    # Take screenshot at the key moment
    page.screenshot(path="verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
