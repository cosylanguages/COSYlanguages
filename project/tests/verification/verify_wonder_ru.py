import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("file:///app/apps/premium-events/clubs/wonder/ru/i-couldnt-help-but-wonder.html")
        await page.screenshot(path="/home/jules/project/tests/verification/screenshots/wonder_ru_updated_title.png")
        await browser.close()

asyncio.run(main())
