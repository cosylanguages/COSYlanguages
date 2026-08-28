import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # 1. Main Wonder index page
    print("Testing Wonder Club index page...")
    page.goto("http://localhost:8080/apps/premium-events/clubs/wonder/i-couldnt-help-but-wonder.html")
    page.wait_for_selector("text=Is It Ethical to Say \"We Are People, We Are Not Stupid Animals\"?")
    print("✓ Hub card title found!")

    # 2. New session page - Big mode
    session_url = "http://localhost:8080/apps/premium-events/clubs/wonder/sessions/i-couldnt-help-but-wonder/we-are-people-we-are-not-stupid-animals.html"
    print("Testing Big Group mode...")
    page.goto(session_url)
    page.wait_for_selector("text=Anthropocentrism")
    assert page.is_visible("div[data-session-mode='big']"), "Big mode container should be visible"
    print("✓ Big Group mode verified!")

    # 3. Mini mode with shared=true
    print("Testing Mini Group mode...")
    page.goto(f"{session_url}?mode=mini&shared=true")
    page.wait_for_selector("#m-unit1", state="visible")
    assert page.is_visible("div[data-session-mode='mini']"), "Mini mode container should be visible"
    print("✓ Mini Group mode verified!")

    # 4. Private mode with shared=true
    print("Testing Private Lesson mode...")
    page.goto(f"{session_url}?mode=private&shared=true")
    page.wait_for_selector("#p-step1", state="visible")
    assert page.is_visible("div[data-session-mode='private']"), "Private mode container should be visible"
    print("✓ Private Lesson mode verified!")

if __name__ == "__main__":
    os.makedirs("project/tests/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
            print("🎉 ALL PLAYWRIGHT VERIFICATION CHECKS PASSED SUCCESSFULLY!")
        finally:
            context.close()
            browser.close()
