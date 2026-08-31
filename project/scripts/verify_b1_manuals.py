import os
from playwright.sync_api import sync_playwright

os.makedirs("verification/videos", exist_ok=True)
os.makedirs("verification/screenshots", exist_ok=True)

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def run_cuj(page):
    fr_b1_url = f"file://{root_dir}/manuals/francaise-b1.html"
    page.goto(fr_b1_url)
    page.wait_for_timeout(500)

    # Click open grammar manual
    page.get_by_role("link", name="Ouvrir la Grammaire B1 →").click()
    page.wait_for_timeout(500)

    # Click topic 1
    page.get_by_role("link", name="Partie 1").click()
    page.wait_for_timeout(500)

    page.screenshot(path="verification/screenshots/fr_b1_grammar.png")
    page.wait_for_timeout(1000)

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
            context.close()
            browser.close()
