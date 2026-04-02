import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:8080/events.html')

        # Check for gallery view (it's games-grid in HTML)
        await page.wait_for_selector('.games-grid')

        # Check for global session preferences
        await page.wait_for_selector('#global-lang-select')
        await page.wait_for_selector('#global-level-select')

        # Check for filters
        await page.wait_for_selector('#game-filters')

        # Click a game to populate session log
        await page.click('.game-card-lobby:first-child')

        # Check for Recently Played section (should become visible now)
        await page.wait_for_selector('#session-log-container', state='visible')

        print("Events gallery verification complete.")
        await page.screenshot(path='events_gallery_fixed.png', full_page=True)
        await browser.close()

asyncio.run(run())
