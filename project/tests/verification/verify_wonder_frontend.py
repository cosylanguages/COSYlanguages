import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # 1. Main Wonder index page
    page.goto("http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html")
    page.wait_for_timeout(1000)
    page.wait_for_selector("text=Is It Ethical to Say \"We Are People, We Are Not Stupid Animals\"?")

    # Take screenshot of the new session card on the hub
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/wonder_hub_new_card.png")
    page.wait_for_timeout(500)

    # 2. Navigate to the new session page
    session_url = "http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/we-are-people-we-are-not-stupid-animals.html"
    page.goto(session_url)
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/wonder_session_big.png")

    # 3. Mini mode with shared=true
    page.goto(f"{session_url}?mode=mini&shared=true")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/wonder_session_mini.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
