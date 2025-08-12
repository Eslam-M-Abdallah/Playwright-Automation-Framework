import {test , expect} from "@playwright/test" 

test("Pick Locators Practise1" , async({page})=>
    {
       
        // Using The Pick Locator By Playwright Extension

        await page.goto("https://www.google.com")
        await page.getByRole('combobox', { name: 'بحث' }).fill("Testing")
        await page.getByRole('link', { name: 'تسجيل الدخول' }).click()

        // Using The Pick Locator By Playwright Inspector And Codegen Command " npx playwright codegen "

        await page.getByRole('button', { name: 'التالي' }).click()

    })