import {test , expect} from "@playwright/test"

// You Can Select Multi Options From The Dropdown List By Using selctOptions([Option1 , Option2]) Method And Pass Array Of Options Inside It's Pararmeter

test("Practise On Handle MultiSelect Dropdown" , async({page})=>
    {
        await page.goto("https://formstone.it/components/dropdown/demo/")
        await page.locator("#demo_multiple").selectOption(['Two' , 'Four' , '6' ])
    })