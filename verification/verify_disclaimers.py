from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:8080/events/sessions/karaoke-club/toutes-les-machines-ont-le-coeur.html")
    page.wait_for_timeout(1000)

    # Scroll down to the listening/lyrics section
    page.locator("#listening-exercise").scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Scroll inside the lyrics container to the bottom to show the disclaimer
    page.locator(".lyrics-container").evaluate("el => el.scrollTop = el.scrollHeight")
    page.wait_for_timeout(1000)

    # Make sure screenshots directory exists
    os.makedirs("verification/screenshots", exist_ok=True)
    # Take screenshot of the exact lyrics container to verify the disclaimer
    page.locator(".lyrics-container").screenshot(path="verification/screenshots/disclaimer_verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        os.makedirs("verification/videos", exist_ok=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
