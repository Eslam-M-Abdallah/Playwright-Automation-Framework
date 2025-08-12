import {test , expect} from "@playwright/test"

// You Can Run The Test Scipt using The UI Mode By Command : npx playwright test --ui

 test.beforeEach("Login To The Webusite",async({page})=>
    {
        await page.goto("https://www.saucedemo.com/")
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
    })

 test("Add And Remove From/To The Cart",async({page})=>
    {
        await page.locator("button[name='add-to-cart-sauce-labs-backpack']").click()
        await expect(page.locator(".shopping_cart_badge")).toHaveText("1") 
        await page.locator("#shopping_cart_container").click()
        await expect(page.locator("button[name='remove-sauce-labs-backpack']")).toBeVisible()
        await page.locator("button[name='remove-sauce-labs-backpack']").click();
    })

    test("Check The Empty Card",async({page})=>
        {
            await page.locator("#shopping_cart_container").click()
            await expect(page.locator("button[name='remove-sauce-labs-backpack']")).not.toBeVisible()
        })

test.afterEach("Log Out From The Website",async({page})=>
    {
         await page.locator("#react-burger-menu-btn").click()
        await page.locator("#logout_sidebar_link").click()
    }) 