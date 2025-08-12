import {test , expect} from "@playwright/test"

test("Visual Testing Example",async({page})=>
    {
        await page.goto("https://www.saucedemo.com/")
        //Login Page 
        await expect(page).toHaveScreenshot("LoginPage-chromium-win32.png") 
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        //Land Page
        await expect(page).toHaveScreenshot("LandPage-chromium-win32.png",{fullPage : true , maxDiffPixelRatio : 0.3})
        await page.locator('[data-test="shopping-cart-link"]').click()
        // Cart Page 
         await expect(page).toHaveScreenshot("CartPage-chromium-win32.png") 
    })