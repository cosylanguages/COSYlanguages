import os
from playwright.sync_api import sync_playwright

def run_cuj():
    os.makedirs("verification/screenshots", exist_ok=True)
    os.makedirs("verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos",
            viewport={"width": 1280, "height": 800}
        )
        page = context.new_page()
        try:
            page.goto("http://localhost:8080/apps/premium-courses/index.html")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/screenshots/courses_index_desktop.png")

            # Mobile viewport
            page.set_viewport_size({"width": 375, "height": 812})
            page.wait_for_timeout(500)
            page.screenshot(path="verification/screenshots/courses_index_mobile.png")
        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run_cuj()
