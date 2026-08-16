import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    abs_path = os.path.abspath("apps/premium-events/clubs/wonder/ru/sessions/i-couldnt-help-but-wonder/is-it-possible-to-find-love-without-sex.html")
    page.goto(f"file://{abs_path}")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/ru_session.png", full_page=True)
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
