import asyncio
from playwright.async_api import async_playwright
import os

async def verify_practice_overhaul():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Handle confirm/alert dialogs
        page.on("dialog", lambda dialog: dialog.accept())

        # Load practice page
        file_path = "file://" + os.path.abspath("practice.html")
        await page.goto(file_path)
        await page.wait_for_load_state('networkidle')

        # 1. Verify Setup UI elements
        print("Verifying Setup UI...")
        setup_section = page.locator('#setup-section')
        await setup_section.wait_for()

        # Open Advanced Options to see the chips
        await page.locator('details.advanced-options summary').click()

        # Check for new Sentence Builder task type
        ws_chip = page.locator('span[data-translate-key="type_ws"]')
        await ws_chip.wait_for(state="visible")
        print("  Confirmed 'Sentence Builder' chip exists and is visible.")

        # 2. Test Category Selection (Grammar)
        print("Testing Grammar category selection...")
        grammar_chip = setup_section.locator('span[data-translate-key="cat_grammar"]')
        await grammar_chip.click()

        # Verify Grammar task types are auto-selected
        ws_checked = await page.eval_on_selector('#type-ws', 'el => el.checked')
        ga_checked = await page.eval_on_selector('#type-ga', 'el => el.checked')
        cl_checked = await page.eval_on_selector('#type-cl', 'el => el.checked')

        assert ws_checked and ga_checked and cl_checked, f"Grammar task types not correctly auto-selected. WS: {ws_checked}, GA: {ga_checked}, CL: {cl_checked}"
        print("  Grammar task types auto-selected correctly.")

        # 3. Start a Grammar Session
        print("Starting Grammar session (Day 1)...")
        await page.fill('#lesson-range', '1')
        await page.click('#start-btn')

        # Wait for practice section
        await page.locator('#practice-section').wait_for()

        # 4. Verify Task Content and Example
        print("Verifying task content and example...")
        await page.wait_for_timeout(1000)

        task_example = page.locator('#task-example')
        is_example_visible = await task_example.is_visible()
        if is_example_visible:
            print(f"  Task example visible: {await task_example.inner_text()}")
        else:
            print("  Warning: Task example not visible.")

        # 5. Check if target word is hidden for MC vocabulary
        print("Resetting to menu...")
        # Clicking 'Back to Menu' if it's there or just reload
        await page.goto(file_path)

        print("Starting Vocab session (Day 1, Multiple Choice)...")
        await setup_section.locator('span[data-translate-key="cat_vocab"]').click()

        # Open Advanced Options
        await page.locator('details.advanced-options summary').click()

        # Uncheck everything except Multiple Choice
        task_ids = ['type-ls', 'type-sc', 'type-ws', 'type-op', 'type-cl', 'type-tf', 'type-ga', 'type-cv']
        for tid in task_ids:
            if await page.eval_on_selector(f'#{tid}', 'el => el.checked'):
                await page.locator(f'input#{tid} + span').click()

        # Ensure MC is checked
        if not await page.eval_on_selector('#type-mc', 'el => el.checked'):
            await page.locator('input#type-mc + span').click()

        await page.click('#start-btn')
        await page.locator('#practice-section').wait_for()
        await page.wait_for_timeout(1000)

        # Verify if word-display is '???' for vocabulary items with emoji
        word_display = await page.locator('#word-display').inner_text()
        emoji_display = await page.locator('#emoji-display').inner_text()

        print(f"  Current task: Word='{word_display}', Emoji='{emoji_display}'")
        if emoji_display not in ['👂', '💡', '💬', '❓']:
            # For Day 1 vocab MC, it should be hidden
            if word_display != '???':
                 print(f"  Warning: Target word '{word_display}' NOT hidden, but emoji is '{emoji_display}'. Check if it's actually a vocab item.")
            else:
                print("  Confirmed: Target word hidden for vocabulary Multiple Choice.")

        # Take a final screenshot
        await page.screenshot(path="verification/overhaul_result.png")
        print("Verification complete. Screenshot saved.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_practice_overhaul())
