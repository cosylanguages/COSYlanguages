import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Go to the demonstration session in MINI mode
    page.goto("http://localhost:8080/events/sessions/i-couldnt-help-but-wonder/does-inclusive-language-make-us-equal.html?mode=mini")
    page.wait_for_timeout(1500)

    # Fill in the passcode for mini mode for Draft 18 (does-inclusive-language-make-us-equal.html is Draft 18)
    # The passcode is ICHBWMG18
    print("Entering passcode ICHBWMG18...")
    page.fill("#gate-passcode-input", "ICHBWMG18")
    page.wait_for_timeout(1000)

    # Press enter
    page.keyboard.press("Enter")
    page.wait_for_timeout(2000)

    # Take screenshot at the key moment of the unlocked mini group units
    print("Taking screenshot of unlocked Mini Group session...")
    page.screenshot(path="/home/jules/verification/screenshots/verification.png", full_page=True)
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
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
