import {test , expect} from "@playwright/test"

test("Slect Option From Dropdown List By Value Or Visual Text", async({page})=>
    {
        await page.goto("https://artoftesting.com/samplesiteforselenium")
        await page.locator("#testingDropdown").selectOption("Performance") //select By Value
        await page.locator("#testingDropdown").selectOption("Database Testing") //select By Visible Text
        await page.locator("#testingDropdown").selectOption({value : 'Automation'}) // Slect By Value As Key And The Value's Value
        await page.locator("#testingDropdown").selectOption({label : 'Manual Testing'}) // Slect By Label As Key And Visual Text As Value If The Elemnt Not Have Label Attribuite
        await page.locator("#testingDropdown").selectOption({index : 0 }) //select By index Key & The Index Value
    })

/*test("Slect Option From Dropdown List By Label", async({page})=>
    {
        test.setTimeout(180000)
        await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label" )
        await expect(page).toHaveTitle("W3Schools Tryit Editor")
        await expect(page.locator("#cars")).toBeVisible();
        await page.locator("#cars").selectOption("Mercedes") //select By label
        await page.locator("#cars").selectOption({label : 'Mercedes'}) //Slect By Label As Key And The Labels's Value
        
    })
        */



