import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Goto Due Grosse Lacrime Bianche page
    page.goto("http://localhost:8080/events/sessions/karaoke-club/due-grosse-lacrime-bianche.html")
    page.wait_for_timeout(1000)

    # Wait for the discussion element
    page.wait_for_selector("#discussion")
    page.evaluate("document.getElementById('discussion').scrollIntoView();")
    page.wait_for_timeout(1000)

    # Scroll a bit more down into Round 1 questions
    page.evaluate("window.scrollBy(0, 300);")
    page.wait_for_timeout(1000)

    # Wait for sources section and scroll to it
    page.wait_for_selector(".sources-section")
    page.evaluate("document.querySelector('.sources-section').scrollIntoView();")
    page.wait_for_timeout(1000)

    # Take screenshot of the final states (Sources section and MLA Citations)
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
