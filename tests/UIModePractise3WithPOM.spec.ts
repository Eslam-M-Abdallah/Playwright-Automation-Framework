import {expect} from "@playwright/test"

import {test} from "../Fixtures/POMFixtures" 

test("verification The Cart",async({page , loginPageFixture , homePageFixture , cartPageFixture})=> // Insert To The LoginPage , homePageFixture , cartPageFixture(My Custom Fixture) From The POMFixtures File
    {
        

        // Call The Action Methods From The  Custom Fixtures
        
        await loginPageFixture.openApplication()
        await loginPageFixture.login("standard_user" , "secret_sauce");

        await expect(homePageFixture.homePageHeader).toHaveText("Swag Labs")
        await homePageFixture.backpackAddToCart()
        await expect(homePageFixture.cartIcon).toHaveText("1")
        await expect(homePageFixture.backpackRemoveButton).toBeVisible()
        await homePageFixture.gotoCart();
        
        await expect(cartPageFixture.backpackItemLink).toHaveText("Sauce Labs Backpack")
    }) 