
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Set a consistent viewport size
        await page.set_viewport_size({"width": 1280, "height": 800})

        # --- Verify index.html ---
        await page.goto('file:///app/index.html', wait_until='networkidle')

        # Switch to French and take screenshot
        await page.select_option('select#language-switcher', 'fr')
        await page.wait_for_timeout(500)  # wait for DOM update
        await page.screenshot(path='/home/jules/verification/index_fr.png')

        # Switch to Russian and take screenshot
        await page.select_option('select#language-switcher', 'ru')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/index_ru.png')

        # --- Verify events.html ---
        await page.goto('file:///app/events.html', wait_until='networkidle')

        # Switch to Italian and take screenshot
        await page.select_option('select#language-switcher', 'it')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/events_it.png')

        # Switch to Greek and take screenshot
        await page.select_option('select#language-switcher', 'el')
        await page.wait_for_timeout(500)
        await page.screenshot(path='/home/jules/verification/events_el.png')

        await browser.close()

asyncio.run(main())
