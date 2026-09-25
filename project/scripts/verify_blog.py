import os
from playwright.sync_api import sync_playwright

def run_verification(page):
    # Absolute file path for blog index
    index_path = os.path.abspath("blog/index.html")
    page.goto(f"file://{index_path}")
    page.wait_for_timeout(500)
    page.set_viewport_size({"width": 1280, "height": 900})
    page.wait_for_timeout(500)

    # Take screenshot of blog index
    page.screenshot(path="/home/jules/verification/screenshots/blog_index.png")
    page.wait_for_timeout(500)

    # Click Featured Post
    page.get_by_role("link", name="🎯 Top 10 Essential Verbs").first.click()
    page.wait_for_timeout(500)

    # Take screenshot of Top 10 Verbs post
    page.screenshot(path="/home/jules/verification/screenshots/top_10_verbs.png")
    page.wait_for_timeout(500)

    # Navigate to French Top 100 post via breadcrumb / link
    page.get_by_role("link", name="← Back to Blog & Editorial Hub").click()
    page.wait_for_timeout(500)
    page.get_by_role("link", name="Top 100 (1081) French Master List").click()
    page.wait_for_timeout(500)

    # Take screenshot of French Top 100 post
    page.screenshot(path="/home/jules/verification/screenshots/french_top100.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()
