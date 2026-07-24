from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to the specific session
    page.goto("http://localhost:8080/events/sessions/karaoke-club/toutes-les-machines-ont-le-coeur.html")
    page.wait_for_timeout(1000)

    # Initial screenshot of the lyrics gap-fill
    page.screenshot(path="/home/jules/verification/screenshots/lyrics_initial.png")
    page.wait_for_timeout(500)

    # Find the first gap input
    first_input = page.locator("input.lyrics-gap-input").first

    # Let's type an incorrect answer first
    first_input.fill("wronganswer")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/lyrics_wrong.png")

    # Now let's type the correct answer (even with different case / accent normalized, like 'MACHINES')
    first_input.fill("MACHINES")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/lyrics_correct.png")

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
