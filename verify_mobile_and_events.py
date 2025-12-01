
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # --- Verify Mobile Layout ---
        await page.set_viewport_size({"width": 375, "height": 667})
        await page.goto('file:///app/index.html', wait_until='networkidle')
        await page.screenshot(path='/home/jules/verification/mobile_index.png')

        # --- Verify Speaking Club Toggle ---
        await page.set_viewport_size({"width": 1280, "height": 1000})
        await page.goto('file:///app/events.html', wait_until='networkidle')
        
        # Click the "Show Topics" button
        await page.click('#toggle-topics-btn')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/events_topics_visible.png')

        # Click the "Hide Topics" button
        await page.click('#toggle-topics-btn')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/events_topics_hidden.png')

        await browser.close()

asyncio.run(main())
