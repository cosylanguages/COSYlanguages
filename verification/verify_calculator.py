
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(f"file://{os.path.abspath('index.html')}")
        await page.select_option('select#duration', '90')
        await page.screenshot(path="calculator.png")
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
