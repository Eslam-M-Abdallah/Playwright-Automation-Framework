import {test , expect } from "@playwright/test"

test("Practise On Allure Reporter 1" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google")
    })

test("Practise On Allure Reporter 2" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google")
    })

test("Practise On Allure Reporter 3" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google1")
    })