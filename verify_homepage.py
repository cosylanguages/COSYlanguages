import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:8080/index.html')

        # Check for sticky nav
        await page.evaluate("window.scrollTo(0, 100)")
        await asyncio.sleep(0.5)
        has_shrunk = await page.evaluate("document.querySelector('nav').classList.contains('shrunk')")
        print(f"Nav shrunk after scroll: {has_shrunk}")

        # Check for level tooltip trigger
        tooltip_trigger = page.locator('.level-tooltip-trigger')
        await tooltip_trigger.hover()
        tooltip = page.locator('.level-tooltip')
        is_visible = await tooltip.is_visible()
        print(f"Level tooltip visible on hover: {is_visible}")

        # Check for language resource teasers
        teaser = page.locator('.lang-resource-teaser').first
        teaser_text = await teaser.inner_text()
        print(f"First language teaser: {teaser_text}")

        # Check for pricing anchor
        pricing_anchor = page.locator('.btn-pricing-anchor')
        is_visible = await pricing_anchor.is_visible()
        print(f"Pricing anchor in hero: {is_visible}")

        await page.screenshot(path='homepage_verification.png', full_page=False)
        await browser.close()

asyncio.run(run())
