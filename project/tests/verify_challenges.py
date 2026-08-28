from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    # Navigate to the Karaoke Club landing page
    page.goto("http://localhost:8080/apps/premium-events/nights/karaoke/karaoke-club.html")
    page.wait_for_timeout(1000)

    # Click on Maëlle Challenge Enter button
    page.get_by_role("link", name="Enter Challenge →").first.click()
    page.wait_for_timeout(1000)

    # Now we should be on the Maëlle Challenge tabbed page. Click on the second tab "je t'aime comme je t'aime"
    page.locator(".vim-tab-btn").nth(1).click()
    page.wait_for_timeout(1000)

    # Click on the back to challenge link on one of the sub-songs or click on one of the study separately links
    # Let's go back to the hub using "← All Live Events" or navigate to "Toutes les machines ont le cœur" separate song page
    page.goto("http://localhost:8080/apps/premium-events/nights/karaoke/sessions/karaoke-club/challenges/fr/maelle-challenge/toutes-les-machines-ont-le-coeur.html")
    page.wait_for_timeout(1000)

    # Click on the "Back to Challenge" link
    page.get_by_role("link", name="← Retour au défi").first.click()
    page.wait_for_timeout(1000)

    # Take screenshot of the Maëlle Challenge page
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

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
            context.close()
            browser.close()
