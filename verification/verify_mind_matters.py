from playwright.sync_api import sync_playwright

def run_cuj(page):
    # 1. Load the main events index page
    print("Navigating to events/index.html...")
    page.goto("http://localhost:8080/events/index.html")
    page.wait_for_timeout(1000)

    # 2. Scroll to and inspect the Mind Matters card
    print("Inspecting Mind Matters card...")
    page.locator('h3:has-text("Mind Matters")').scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    # 3. Click the View Club & History link for Mind Matters
    print("Navigating to Mind Matters club page...")
    page.locator('article.club-card:has-text("Mind Matters") a.club-link').click()
    page.wait_for_timeout(1500)

    # 4. Scroll through the Mind Matters header and sidebar promo
    page.locator('h1:has-text("Mind Matters")').scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    # 5. Click the "The Maze of Biases" past session
    print("Opening Maze of Biases past session...")
    page.locator('a.view-btn[href="sessions/maze-of-biases.html"]').first.click()
    page.wait_for_timeout(1500)

    # 6. Scroll through the Maze of Biases session page
    print("Inspecting Maze of Biases description...")
    page.locator('main.content-container nav.cosy-breadcrumbs').scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    print("Inspecting Round 1 Discussion...")
    page.locator('#s-r1').scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    print("Inspecting Teacher's Note / Linguistic Corrections...")
    page.locator('#s-mistakes').scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    # Take a final screenshot at the most visual part of the session
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for the video
    print("CUJ completed successfully!")

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
            context.close()  # MUST close context to save the video
            browser.close()
