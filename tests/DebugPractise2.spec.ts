import { test, expect } from "@playwright/test"

// Debugging using The Playwriht Inspector Using the Command Line : npx playwright test /TestFileName/ --debug

test("Verify The Title", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs")
})
test("Verify Login Successfully", async ({ page }) => {

    // We Can Start The Debuggong Mode By Add Breakpoint At The Code Line That Have The Error Then Run The Playwright Inspector Debug Mode 
    await page.goto("https://www.saucedemo.com/")
    const URL = page.url(); // You Can Add This Varible To The Watch List By Right Click On It 
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await expect(page.locator("#login-button")).toBeVisible()
    await page.locator("#login-button").click()

    // If You Debugging Using The Playwright Inspector And The Command Line You Will Can not Add Break Points From The VS Extension So To Do That You Can Add "await page.pause();" 
    await page.pause()

    await page.locator("#react-burger-menu-btn").click()
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click()
})