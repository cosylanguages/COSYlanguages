import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # 1. Main Wonder index page
    page.goto("http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/wonder_index.png", full_page=True)

    # 2. New session page
    page.goto("http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/is-marketing-making-sedentary-lifestyle-a-new-normality.html")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/new_session.png", full_page=True)

if __name__ == "__main__":
    os.makedirs("/home/jules/project/tests/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
