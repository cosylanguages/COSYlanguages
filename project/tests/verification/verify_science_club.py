from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to KUS session in private mode with bypass
    page.goto("http://localhost:8080/apps/premium-events/clubs/kus/sessions/keeping-up-with-science/ai-and-the-brain-intermediate.html?mode=private&shared=true")
    page.wait_for_timeout(1000)

    # Verify the science audio player exists and is visible
    player = page.locator(".science-audio-player")
    player.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Find the play/pause button and click it to play
    play_btn = page.locator("#science-draft-play-btn")
    play_btn.click()
    page.wait_for_timeout(2000) # Let it play (simulate)

    # Click it again to pause
    play_btn.click()
    page.wait_for_timeout(1000)

    # Find the transcript details block and click it to open
    transcript = page.locator(".transcript-details")
    summary = transcript.locator("summary")
    summary.click()
    page.wait_for_timeout(1000)

    # Take high-resolution screenshot
    page.screenshot(path="/home/jules/project/tests/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/project/tests/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
