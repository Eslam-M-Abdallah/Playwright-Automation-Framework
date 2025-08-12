import {test , expect} from "../Fixtures/HooksFixture"


test("Verify That The Items Added To Cart Successfully" , async({page , loginlogoutFixture})=>
    {
        await page.locator("text= Sauce Labs Backpack").click();
        await page.locator("button[id='add-to-cart']").click();
        await page.locator("a[class='shopping_cart_link']").click();
        await expect(page.locator("div[class='inventory_item_name']")).toHaveText("Sauce Labs Backpack") ;
        await expect(page.locator("button[id='remove-sauce-labs-backpack']")).toBeVisible();

    })

test("Verify The Empty Cart" , async({page , loginlogoutFixture})=>
    {
        //await page.locator("button[id='remove-sauce-labs-backpack']").click();
        await page.locator("a[class='shopping_cart_link']").click();
        await expect(page.locator("button[id='remove-sauce-labs-backpack']")).toBeHidden();

        

    })

