import {test , expect} from "@playwright/test"

test("Practise On Radio Buttons Check", async ({page})=>

// Check() Method : Allow To Check/click On  RadioButton 

    {
        await page.goto("https://artoftesting.com/samplesiteforselenium")
        const maleRadioButton = page.locator("input#male")
        await maleRadioButton.check();
        await expect(maleRadioButton).toBeChecked();

        const femaleRadioButton = page.locator("input#female")
        await femaleRadioButton.check();
        await expect(femaleRadioButton).toBeChecked();
    })