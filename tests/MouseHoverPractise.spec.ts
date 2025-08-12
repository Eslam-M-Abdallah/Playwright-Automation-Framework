import {test} from "@playwright/test" 

test("Mouse Hover ACtion Practise",async({page})=>
    {
        await page.goto("https://qavalidation.com/",{waitUntil : "load"})
        await page.locator('#primary-menu').getByRole('link', { name: 'Appium', exact: true }).hover({force : true}) // To Add The Actionability Checks Before Perform The Hove Action 
        await page.locator("text = Appium tutorial").first().click()
    })