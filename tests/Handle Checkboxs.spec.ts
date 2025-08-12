import {test , expect} from "@playwright/test"

test("Practise On checkboxed Selection" , async({page})=>
    {
        // Use check() & uncheck() Methods To Select & unslect The Checkboxes
        await page.goto("https://artoftesting.com/samplesiteforselenium")
        await page.locator(".Automation").check()
        await expect(page.locator(".Automation")).toBeChecked();
        await page.locator(".Performance").check();
        if(await page.locator(".Performance").isChecked())
            {
                console.log("Elemnt Is Checked")
                await page.locator(".Performance").uncheck();
                await expect(page.locator(".Performance")).not.toBeChecked();
                await expect(page.locator(".Performance")).toHaveText
            }
    })