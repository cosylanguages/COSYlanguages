from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # 1. Verify Embedded Article Reader
    print("Navigating to science session page...")
    page.goto("http://localhost:8080/events/sessions/keeping-up-with-science/sensory-system-pain-disease.html")
    page.wait_for_timeout(1000)

    # Scroll slightly so the embedded reader is visible
    page.evaluate("window.scrollTo(0, 300)")
    page.wait_for_timeout(1000)

    # Take screenshot of the embedded reader
    screenshot_path1 = "/home/jules/verification/screenshots/article_reader.png"
    page.screenshot(path=screenshot_path1)
    print(f"Captured article reader screenshot: {screenshot_path1}")

    # 2. Verify Karaoke Lyrics Disclaimer
    print("Navigating to karaoke song page...")
    page.goto("http://localhost:8080/events/sessions/karaoke-club/as-it-was.html")
    page.wait_for_timeout(1000)

    # Scroll to lyrics container
    # Let's locate .lyrics-container
    lyrics = page.locator(".lyrics-container")
    if lyrics.count() > 0:
        lyrics.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

    screenshot_path2 = "/home/jules/verification/screenshots/lyrics_disclaimer.png"
    page.screenshot(path=screenshot_path2)
    print(f"Captured lyrics disclaimer screenshot: {screenshot_path2}")

    # Hold for final state video
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
            print("Verification finished.")
