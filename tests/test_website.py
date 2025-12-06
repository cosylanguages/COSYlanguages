
import asyncio
import re
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # --- Desktop View ---
        await page.set_viewport_size({"width": 1280, "height": 800})

        # --- Test index.html ---
        await page.goto('file:///app/index.html', wait_until='networkidle')
        await page.screenshot(path='verification/desktop_index.png', full_page=True)


        # Test language switcher
        await page.select_option('select#language-switcher', 'fr')
        await expect(page.locator('[data-translate-key="hero_title"]')).to_have_text("Bienvenue chez COSYlanguages ! 🏡")

        await page.select_option('select#language-switcher', 'ru')
        await expect(page.locator('[data-translate-key="hero_title"]')).to_have_text("Добро пожаловать в COSYlanguages! 🏡")

        # Test navigation links
        await page.click('a[href="events.html"]')
        await expect(page).to_have_url(re.compile(r'events\.html$'))
        await page.go_back()

        # Test price calculator
        await page.select_option('select#language', 'english')
        await page.select_option('select#duration', '60')
        await page.select_option('select#lesson-pack', '8')
        await page.select_option('select#currency', 'usd')
        await expect(page.locator('#price-result')).to_contain_text('$167.20')


        # --- Test events.html ---
        await page.goto('file:///app/events.html', wait_until='networkidle')
        await page.screenshot(path='verification/desktop_events.png', full_page=True)


        # Test event toggles
        await page.click('#toggle-topics-btn')
        await expect(page.locator('#speaking-club-topics')).to_be_visible()
        await page.click('#toggle-topics-btn')
        await expect(page.locator('#speaking-club-topics')).to_be_hidden()

        await page.click('#toggle-games-btn')
        await expect(page.locator('#game-nights-topics')).to_be_visible()
        await page.click('#toggle-games-btn')
        await expect(page.locator('#game-nights-topics')).to_be_hidden()

        # --- Mobile View ---
        await page.set_viewport_size({"width": 375, "height": 667})
        await page.goto('file:///app/index.html', wait_until='networkidle')
        await page.screenshot(path='verification/mobile_index.png', full_page=True)
        await page.goto('file:///app/events.html', wait_until='networkidle')
        await page.screenshot(path='verification/mobile_events.png', full_page=True)


        await browser.close()

asyncio.run(main())
