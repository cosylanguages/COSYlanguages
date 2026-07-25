from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to Let's Celebrate page
    page.goto("http://localhost:8080/events/lets-celebrate.html")
    page.wait_for_timeout(1000)

    # Scroll down to the past sessions block
    page.locator('#lc-hist').scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    # Take screenshot of all celebration past sessions cards (showing the beautiful grid of tags)
    page.screenshot(path="verification/screenshots/celebrate_cards_all.png")
    page.wait_for_timeout(500)

    # Click on A1 level filter button (should show Simplicity, Workaholics, Urban Beekeeping)
    page.locator('.filter-btn[data-level="a1"]').click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/celebrate_cards_a1.png")

    # Click back to All Levels
    page.locator('.filter-btn[data-level="all"]').click()
    page.wait_for_timeout(1000)

    # Hover over the first celebrate card to trigger the sway/rotate hover animation
    page.locator('.celebrate-card').first.hover()
    page.wait_for_timeout(1000)

    # Take screenshot while hovering
    page.screenshot(path="verification/screenshots/celebrate_cards_hover.png")
    page.wait_for_timeout(1000)  # Hold final state for video

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
