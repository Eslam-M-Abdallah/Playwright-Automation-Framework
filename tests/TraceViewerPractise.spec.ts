import {test , expect} from "@playwright/test"

// Tou Can Access the Trace View Page By Differnt Ways 
 // 1- By Using the VS extension 
 // 2- From The Playwright Reporsts 
 // 3- Using The Command npx playwright show-trace "Add The Trace.zip" File path 
 // 4- By Drop The Trace.zip File At The "https://trace.playwright.dev/" Website

 // Adding the Test Hooks The BeforeEach And AfterEach 

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