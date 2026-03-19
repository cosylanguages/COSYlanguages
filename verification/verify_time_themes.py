from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_time_themes(page: Page):
    page.goto("http://localhost:8080/practice.html")
    page.wait_for_timeout(2000)

    # 1. Select starter level (A1/A0)
    print("Selecting starter level...")
    page.select_option("#practice-level", "starter")
    page.wait_for_timeout(500)

    # 2. Select common theme "Time"
    print("Selecting Time theme...")
    page.select_option("#practice-theme", "time")
    page.wait_for_timeout(500)

    # 3. Check if sub-theme selector appears and contains expected A0/A1 themes
    expect(page.locator(".sub-theme-group")).to_be_visible()
    sub_themes = page.eval_on_selector_all("#practice-sub-theme option", "options => options.map(o => o.value)")
    print(f"Sub-themes for starter level: {sub_themes}")
    assert "months_year_A0" in sub_themes
    assert "telling_time_A0" in sub_themes
    assert "dates_years_A1" in sub_themes

    page.select_option("#practice-sub-theme", "months_year_A0")
    page.wait_for_timeout(500)
    page.screenshot(path="verification/time_starter_selected.png")

    # 4. Select elementary level (A2)
    print("Selecting elementary level...")
    page.select_option("#practice-level", "elementary")
    page.wait_for_timeout(500)
    page.select_option("#practice-theme", "time")
    page.wait_for_timeout(500)

    sub_themes_a2 = page.eval_on_selector_all("#practice-sub-theme option", "options => options.map(o => o.value)")
    print(f"Sub-themes for elementary level: {sub_themes_a2}")
    assert "past_time_A2" in sub_themes_a2
    assert "sequence_order_A2" in sub_themes_a2

    page.screenshot(path="verification/time_elementary_selected.png")

    # 5. Select intermediate level (B1)
    print("Selecting intermediate level...")
    page.select_option("#practice-level", "intermediate")
    page.wait_for_timeout(500)
    page.select_option("#practice-theme", "time")
    page.wait_for_timeout(500)

    sub_themes_b1 = page.eval_on_selector_all("#practice-sub-theme option", "options => options.map(o => o.value)")
    print(f"Sub-themes for intermediate level: {sub_themes_b1}")
    assert "deadlines_scheduling_B1" in sub_themes_b1

    page.screenshot(path="verification/time_intermediate_selected.png")

if __name__ == "__main__":
    if not os.path.exists("verification"):
        os.makedirs("verification")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="verification/video")
        page = context.new_page()
        try:
            verify_time_themes(page)
        finally:
            context.close()
            browser.close()
