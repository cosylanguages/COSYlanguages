from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 1200})
        file_path = "file://" + os.path.abspath("practice.html")
        page.goto(file_path)

        # Select Italian
        page.click('.lang-selection-card[data-value="it"]')

        # Set lesson range to 2
        page.fill("#lesson-range", "2")

        # Ensure all types and categories are checked
        for selector in ["#cat-vocab", "#cat-grammar", "#type-mc", "#type-ls", "#type-sc", "#type-op", "#type-cl", "#type-tf", "#type-ga"]:
            page.check(selector)

        page.click("#start-btn")

        # Wait for practice to start
        page.wait_for_selector("#practice-section", state="visible")

        # Take a few screenshots to see different tasks
        for i in range(5):
            page.screenshot(path=f"lesson2_task_{i}.png", full_page=True)
            if page.is_visible("#next-btn"):
                page.click("#next-btn")
            else:
                # If next is not visible, we might need to answer. But for screenshotting tasks, it's fine.
                break

        browser.close()

if __name__ == "__main__":
    run()
