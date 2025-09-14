import {test , expect} from "@playwright/test"

test("Verify Login Successfully 1",async({page})=>
    {
        console.log("Starting Practise 1..")
        await page.goto("https://www.saucedemo.com/")
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible() //test
        console.log("Ending Practise 1..")
    })

    test("Verify Login Successfully 2",async({page})=>
    {
        console.log("Starting Practise 2..")
        await page.goto("https://www.saucedemo.com/")
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible() //test
        console.log("Ending Practise 2..")
    })

    test("Verify Login Successfully 3",async({page})=>
    {
        console.log("Starting Practise 3..")
        await page.goto("https://www.saucedemo.com/")
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible() //test
        console.log("Ending Practise 3..")
    })